import { shallowMount } from '@vue/test-utils';
import TreeChart from '@/components/TreeChart.vue';

describe('TreeChart.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(TreeChart);
    expect(wrapper.exists()).toBe(true);
  });

  // it('fetches data on mount', async () => {
  //   const mockData = [
  //     { parent: '', name: 'A', description: 'Description of A' },
  //     { parent: 'A', name: 'B', description: 'Description of B' }
  //   ];
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockData)
  //     })
  //   );

  //   const wrapper = shallowMount(TreeChart);
  //   await wrapper.vm.$nextTick(); // Wait for next DOM update cycle

  //   expect(wrapper.vm.data).toEqual(mockData);
  // });

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
