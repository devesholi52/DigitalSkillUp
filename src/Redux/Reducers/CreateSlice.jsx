import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalType: null,
  isOpenInCourse: false,
  modalTypeInCourse: null,
  category: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    openModalInCourse: (state, action) => {
      state.isOpenInCourse = true;
      state.modalTypeInCourse = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.modalType = null;
    },
    closeModalInCourse: (state, action) => {
      state.isOpenInCourse = false;
      state.modalTypeInCourse = null;
    },
    SelectedCategory: (state, action) => {
      state.category = action.payload;
      state.modalTypeInCourse = null;
    },
  },
});

export const {
  openModal,
  closeModal,
  openModalInCourse,
  closeModalInCourse,
  SelectedCategory,
} = modalSlice.actions;
export default modalSlice.reducer;
