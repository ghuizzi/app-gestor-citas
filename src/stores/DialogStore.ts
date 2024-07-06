import { defineStore } from 'pinia';

export const useDialogStore = defineStore('Dialog', {
  state: () => ({
    PatientDetail: false,
    newPatient: false,
    TreatmentDetail: false,
    NewTreatment: false
  }),
  getters: {
    getPatientDetail: (state) => state.PatientDetail,
    getNewPatient: (state) => state.newPatient,
    getTreatmentDeatil: (state) => state.TreatmentDetail,
    getNewTreatment: (state) => state.NewTreatment,
  },
  actions: {
    TogglePatientDetail() {
      this.PatientDetail = !this.PatientDetail
    },
    ToggleNewPatient() {
      this.newPatient = !this.newPatient
    },
    ToggleTreatmentDetail() {
      this.TreatmentDetail = !this.TreatmentDetail
    },
    ToggleNewTreatment() {
      this.NewTreatment = !this.NewTreatment
    },
  },
});
