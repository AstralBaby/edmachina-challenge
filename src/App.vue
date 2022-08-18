<template>
  <v-app>
    <v-app-bar
      app
      dark
      :color="$vuetify.theme.dark ? 'black' : 'primary'"
      elevation="0"
    >
      <v-app-bar-nav-icon @click="showDrawer = !showDrawer" />
      <img src="@/assets/logo.svg" alt="Edmachina" class="mx-1" />
      <v-spacer />
      <v-icon class="mx-1">mdi-magnify</v-icon>
      <v-icon class="mx-1">mdi-light</v-icon>
      <v-icon class="mx-1">mdi-cog</v-icon>
      <v-badge content="1" overlap color="red">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
      <div class="d-flex ml-5">
        <div>
          <div>Jane Doe</div>
          <div>Admin</div>
        </div>
        <v-badge
          bordered
          overlap
          color="green"
          bottom
          offset-x="15"
          offset-y="15"
        >
          <v-avatar size="50">
            <img
              class="object-cover"
              src="@/assets/avatar.png"
              alt="Jane Doe"
            />
          </v-avatar>
        </v-badge>
      </div>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer :value="showDrawer" class="pa-4">
        <v-list>
          <template v-for="(i, idx) in navItems">
            <v-subheader
              v-if="i.type === 'divider'"
              class="px-0 text-uppercase text-red mt-4"
              :key="idx"
            >
              {{ i.label }}
              <v-spacer />
              <v-icon size="14">{{ i.icon }}</v-icon>
            </v-subheader>
            <v-list-item
              v-else
              class="rounded px-3 mb-2 background lighten-2"
              :class="{ primary: currentNavItem === idx }"
              :key="idx"
            >
              <v-list-item-title>
                <v-icon class="mr-1">{{ i.icon }}</v-icon>
                {{ i.label }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-main>
    <v-footer inset app>XD</v-footer>
  </v-app>
</template>

<script>
import "@/assets/styles/globals.scss";

export default {
  name: "App",
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
  components: {},

  data: () => ({
    showDrawer: true,
    currentNavItem: 0,
    navItems: [
      {
        icon: "mdi-home",
        label: "Dashboard",
      },
      {
        icon: "mdi-calendar-blank",
        label: "Calendar",
      },
      {
        icon: "mdi-format-list-bulleted",
        label: "Reports",
        type: "divider",
      },
      {
        icon: "mdi-plus-box",
        label: "Machina Hi",
      },
      {
        icon: "mdi-arrow-top-right-thin-circle-outline",
        label: "Heads Up",
      },
      {
        icon: "mdi-cached",
        label: "Stay Around",
      },
      {
        icon: "mdi-chart-box",
        label: "Analytics",
      },
      {
        icon: "mdi-poll",
        label: "My Reports",
      },
    ],
  }),
};
</script>
