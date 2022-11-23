const reactStore = {
  components: {},
  listeners: [],
  subscribe: (cb) => {
    reactStore.listeners.push(cb);
  },
  notify: () => {
    reactStore.listeners.forEach((cb) => cb());
  },
  render: ({ id, component, props, container }) => {
    reactStore.components[id] = { component, props, container, id };
    reactStore.notify();
  },
  remove: (id) => {
    delete reactStore.components[id];
    reactStore.notify();
  },
};

export default reactStore;
