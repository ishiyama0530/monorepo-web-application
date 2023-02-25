import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRightFromBracket, faTrash, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { useAuthenticationCheck } from './middlewares/useAuthenticationCheck'
import router from './Router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

library.add(faGithub)
library.add(faRightFromBracket)
library.add(faTrash)
library.add(faUser)
library.add(faUserPlus)
app.component('FontAwesomeIcon', FontAwesomeIcon)

useAuthenticationCheck(router)
