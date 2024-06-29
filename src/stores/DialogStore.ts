import { defineStore } from 'pinia';

export const useDialogStore = defineStore('Dialog', {
  state: () => ({
    PatientDetail: false,
  }),
  getters: {
    getPatientDetail: (state) => state.PatientDetail,
  },
  actions: {
    TogglePatientDetail() {
      this.PatientDetail = !this.PatientDetail
    },
  },
});
