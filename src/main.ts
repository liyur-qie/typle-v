import { createApp } from "vue"
import "@/style.scss"
import App from "@/App.vue"
import router from "@/router"

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { createI18n } from "vue-i18n"
import { i18n as i18nOptions } from "@/i18n/index.ts"

const vuetify = createVuetify({
  components,
  directives,
})

const i18n = createI18n(i18nOptions)

createApp(App).use(router).use(vuetify).use(i18n).mount("#app")
