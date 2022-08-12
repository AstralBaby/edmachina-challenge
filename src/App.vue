<template>
  <v-app>
    <v-navigation-drawer :value="true" app> sour candy </v-navigation-drawer>
    <v-app-bar app> </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
    <v-footer inset app>XD</v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
