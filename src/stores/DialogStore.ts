import { defineStore } from 'pinia';

export const useDialogStore = defineStore('Dialog', {
  state: () => ({
    PatientDetail: false,
    newPatient: false
  }),
  getters: {
    getPatientDetail: (state) => state.PatientDetail,
    getNewPatient: (state) => state.newPatient,
  },
  actions: {
    TogglePatientDetail() {
      this.PatientDetail = !this.PatientDetail
    },
    ToggleNewPatient() {
      this.newPatient = !this.newPatient
    },
  },
});
