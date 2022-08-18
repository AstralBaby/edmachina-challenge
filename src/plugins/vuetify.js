import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#4436FD",
        secondary: "#fffff",
        accent: "red",
        error: "#fffff",
      },
      dark: {
        primary: "#F1BC01",
        accent: "red",
        background: "#171E31",
      },
    },
  },
});
