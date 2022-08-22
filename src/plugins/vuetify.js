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
        background: {
          base: "#f6f6f6",
          lighten1: "#fefefe",
          lighten2: "white",
        },
      },
      dark: {
        primary: "#F1BC01",
        accent: "#2c354c",
        background: {
          base: "#171E31",
          lighten1: "#283046",
          lighten2: "#2f3850",
        },
      },
    },
  },
});
