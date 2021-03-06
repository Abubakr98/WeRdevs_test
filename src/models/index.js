export const modal = {
  state: { data: null, isOpen: false },
  reducers: {
    setModalData(state, payload) {
      return { ...state, data: payload };
    },
    changeModalVisibility(state) {
      return { ...state, isOpen: !state.isOpen };
    },
  },
};
