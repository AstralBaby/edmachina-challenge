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
        primary: "#fffff",
        secondary: "#fffff",
        accent: "red",
        error: "#fffff",
      },
      dark: {
        primary: "#fffff",
        accent: "red",
        background: "#171E31",
      },
    },
  },
});
