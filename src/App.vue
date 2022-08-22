<template>
  <base-layout>
    <reports-view />
  </base-layout>
</template>

<script>
import "@/styles/globals.scss";
import BaseLayout from "@/components/layouts/BaseLayout";
import ReportsView from "@/components/views/ReportsView";

export default {
  name: "App",
  components: { BaseLayout, ReportsView },
  created() {
    // Before the page is completely rendered, we validate if the user's browser color scheme preference is set to dark,
    // if so, we use the vuetify option to switch the main theme provider theme to dark.
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.$vuetify.theme.dark = true;
    }

    // For some edge cases where the user switchs the browser theme preference after the app was rendered
    // we can subscribe an event listener for changes in the MediaQueryList and update the vuetify variant based on the new value.
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (newTheme) => {
        this.$vuetify.theme.dark = newTheme.matches;
      });
  },
};
</script>

<style lang="scss">
.nav-active {
  background: var(--v-primary-base);
  &.theme--dark {
    background: var(--v-background-lighten2);
  }
}
</style>
