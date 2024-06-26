import { boot } from 'quasar/wrappers';

// Importar componentes globales
import VPanel from 'src/components/VPanel.vue'

export default boot(({ app }) => {
  app.component('v-panel', VPanel)
})
