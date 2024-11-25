# Home Assignment Vue App

This repository showcases a Vue application that creates a graphical hierarchy or tree-like structure from left to right. The application is built using Vite and fetches data from an Express.js server hosted on Render via the Axios library with a GET endpoint. The website is hosted on Netlify.

## Features

- **Graphical Hierarchy**: Visualizes data in a tree-like structure from left to right.
- **Vue 3**: Built using Vue 3 framework.
- **Vite**: Utilizes Vite for fast development and build processes.
- **Axios**: Fetches data from an Express.js server using Axios.
- **Jest Unit Testing**: Unit test cases are developed using Jest package.
- **Hosting**: The application is hosted on Netlify, and the backend service is hosted on Render.

### Prerequisites

- Node.js and npm installed on your machine with all the necessary packages mentioned in package.json file.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/home-assignment-vue-app
    cd home-assignment-vue-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Development

To start the development server:
```sh
npm run dev

### Development

npm run build

### Fetching Data

The application fetches data from an Express.js server hosted on Render. The server provides a GET endpoint to retrieve the data.
The data is fetched in an api.js file leveraging axios library's GET endpoint to fetch the data from the backend web service.

The Vue component (TreeChart.vue) fetches the data in a method from the apiClient.getData function.

https://node-neo4j-server-app.onrender.com/data

### Deployment

The application is deployed on Netlify (a free public cloud hosting platform). You can deploy your own version by connecting your repository to Netlify and following their deployment instructions.

Here is the website url:
https://vue-home-assignment.netlify.app
