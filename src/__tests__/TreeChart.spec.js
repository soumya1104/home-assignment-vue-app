import { shallowMount } from '@vue/test-utils';
import TreeChart from '@/components/TreeChart.vue';
import api from '../services/api';
import { nextTick } from 'vue';

jest.mock('../services/api');

describe('TreeChart.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TreeChart, {
    methods: {
      fetchData: jest.fn() //Mock fetchData method to prevent it from running in created hook
    }
  });
});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('fetches data on mount', async () => {
    const mockData = [
      { parent: '', name: 'A', description: 'Description of A' },
      { parent: 'A', name: 'B', description: 'Description of B' }
    ];
    api.getData.mockResolvedValue({data: mockData});
    
    await wrapper.vm.fetchData();
    await nextTick();

    expect(api.getData).toHaveBeenCalled();
    expect(wrapper.vm.data).toEqual(mockData);
  });

  it('shows description block on node click', async () => {
    const wrapper = shallowMount(TreeChart);
    await wrapper.vm.showDescription({ name: 'A', description: 'This is a description of A' });
    expect(wrapper.vm.selectedNode).toEqual({ name: 'A', description: 'This is a description of A' });
  });

  it('hides description block on cancel', async () => {
    const wrapper = shallowMount(TreeChart);
    await wrapper.vm.showDescription({ name: 'A', description: 'This is a description of A' });
    await wrapper.vm.hideDescription();
    expect(wrapper.vm.selectedNode).toBeNull();
  });
});
