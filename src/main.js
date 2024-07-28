import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './css/style.css'
import App from './App.vue'
import router from './router'

import en from "./locales/en.json"
import ua from "./locales/ua.json"

const locales = createI18n({
    messages: {
        "en": en,
        "ua": ua,
    },
    locale: "ua",
    fallbackLocale: "en",
    legacy: false,
});

createApp(App)
.use(router)
.use(locales)
.mount('#app')
