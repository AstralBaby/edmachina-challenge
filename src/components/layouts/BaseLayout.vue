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
      <user-menu />
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
              <v-icon size="14">
                {{ i.icon }}
              </v-icon>
            </v-subheader>
            <v-list-item
              v-else
              class="rounded px-3 mb-2"
              :class="{ 'nav-active': currentNavItem === idx }"
              :key="idx"
            >
              <v-list-item-content>
                <v-list-item-title
                  :class="{
                    'white--text':
                      !$vuetify.theme.dark && currentNavItem === idx,
                  }"
                >
                  <v-icon
                    class="mr-1"
                    :class="{
                      'white--text':
                        !$vuetify.theme.dark && currentNavItem === idx,
                    }"
                    >{{ i.icon }}</v-icon
                  >
                  {{ i.label }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-main>
    <v-footer inset app>XD</v-footer>
  </v-app>
</template>

<script>
import UserMenu from "@/components/layouts/BaseLayout/UserMenu";

export default {
  name: "BaseLayout",
  components: { UserMenu },
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

<style lang="scss">
.nav-active {
  background: var(--v-primary-base);
  &.theme--dark {
    background: var(--v-background-lighten2);
  }
}
</style>
