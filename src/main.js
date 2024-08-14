import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import { useUser } from "./stores/useUser";
import { useAuth } from "./supabase/useAuth";
import "./css/style.css";
import App from "./App.vue";
import router from "./router";

import en from "./locales/en.json";
import ua from "./locales/ua.json";

const { authGetSession } = useAuth();

const locales = createI18n({
  messages: {
    en: en,
    ua: ua,
  },
  locale: "ua",
  fallbackLocale: "en",
  legacy: false,
});

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(locales).mount("#app");

if (await authGetSession()) {
  const { user: userSession } = await authGetSession();
  const { user } = useUser();
  user.authorized = true;
  user.id = userSession.id;
  user.name = userSession.user_metadata.name;
}
