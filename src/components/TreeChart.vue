<template>
    <div id="tree-chart"></div>
    <div v-if="selectedNode" class="sidebar"> 
    <button class="close-btn" @click="hideDescription">X</button>
    <h2>{{ selectedNode.name }}</h2>
    <p>{{ selectedNode.description }}</p>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  import api from '../services/api';
  
  export default {
    data() {
      return {
        data: [],
        selectedNode: null
      };
    },
    async mounted() {
      await this.fetchData();
      this.createTreeGraph();
    },
    methods: {
        showDescription(node) {
    this.selectedNode = node;
  },
  hideDescription() {
    this.selectedNode = null;
},
      async fetchData() {
        try {
          const response = await api.getData();
          this.data = response?.data;
          // const response = await fetch('http://localhost:3000/data');
          // if (!response.ok) {
          //   throw new Error('Network response was not ok');
          // }
          // this.data = await response.json();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      createTreeGraph() {
        const filteredData = this.data.filter(item => Object.keys(item).length !== 0);
  
        const root = d3.stratify()
          .id(d => d.name)
          .parentId(d => d.parent)
          (filteredData);
  
        const width = 800;
        const height = 600;
        const margin = { top: 20, right: 90, bottom: 30, left: 90 };
  
        const svg = d3.select("#tree-chart").append("svg")
          .attr("width", width + margin.right + margin.left)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
        const tree = d3.tree().size([height, width]);
  
        const treeData = tree(root);
  
        const nodes = treeData.descendants();
        const links = treeData.descendants().slice(1);
  
        const link = svg.selectAll(".link")
          .data(links)
          .enter().append("path")
          .attr("class", "link")
          .attr("d", d => {
            return "M" + d.y + "," + d.x
              + "C" + (d.y + d.parent.y) / 2 + "," + d.x
              + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
              + " " + d.parent.y + "," + d.parent.x;
          });
  
        const node = svg.selectAll(".node")
          .data(nodes)
          .enter().append("g")
          .attr("class", d => "node" +
            (d.children ? " node--internal" : " node--leaf"))
          .attr("transform", d => "translate(" + d.y + "," + d.x + ")")
          .on("click", (event, d) => this.showDescription(d.data)); // Add click event
  
        node.append("rect")
          .attr("width", 20)
          .attr("height", 20)
          .attr("x", -10)
          .attr("y", -10);
  
        node.append("text")
          .attr("dy", ".35em")
          .attr("x", d => d.children ? -13 : 13)
          .style("text-anchor", d => d.children ? "end" : "start")
          .text(d => d.data.name);
      },
      showDescription(node) {
        this.selectedNode = node;
      },
      hideDescription() {
        this.selectedNode = null;
      }
    }
  }
  </script>
  <style>
  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 2px;
  }
  
  .node circle {
    fill: steelblue;
    stroke: steelblue;
    stroke-width: 3px;
  }
  
  .node text {
    font: 12px sans-serif;
  }
  .sidebar {
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .close-btn {
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    float: right;
  }
  
  </style>
  