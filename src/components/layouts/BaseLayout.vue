<template>
  <v-app>
    <v-app-bar
      clipped-left
      app
      dark
      :color="$vuetify.theme.dark ? 'black' : 'primary'"
      elevation="0"
    >
      <v-app-bar-nav-icon @click="showDrawer = !showDrawer" />
      <img
        src="@/assets/logo.svg"
        alt="Edmachina"
        class="mx-1 d-none d-md-inline"
      />
      <v-spacer />
      <v-icon class="mx-1">mdi-magnify</v-icon>
      <v-icon class="mx-1">mdi-light</v-icon>
      <v-icon class="mx-1">mdi-cog</v-icon>
      <v-badge content="1" overlap color="red">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
      <user-menu />
    </v-app-bar>
    <v-navigation-drawer :value="showDrawer" clipped app>
      <v-list class="pa-4">
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
            @click="currentNavItem = idx"
            class="rounded px-3 mb-2 nav-item"
            :class="{ 'nav-active': currentNavItem === idx }"
            :key="idx"
          >
            <v-list-item-content>
              <v-list-item-title
                :class="[
                  $vuetify.theme.dark
                    ? 'grey--text text--lighten-1'
                    : 'grey--text text--darken-1',
                ]"
              >
                <v-icon
                  class="mr-1"
                  :class="{
                    'white--text': currentNavItem === idx,
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
    <v-main>
      <div class="pa-10">
        <slot />
      </div>
    </v-main>
    <v-footer
      app
      inset
      :color="$vuetify.theme.dark ? 'black' : 'primary'"
      class="text-body-2 px-7 py-5"
    >
      <div class="uppercase">COPYRIGHT © 2022</div>
      <div class="font-weight-medium ml-2">Edmachina</div>
    </v-footer>
  </v-app>
</template>

<script>
import UserMenu from "@/components/layouts/BaseLayout/UserMenu";

export default {
  name: "BaseLayout",
  components: { UserMenu },
  data: () => ({
    showDrawer: true,
    currentNavItem: 7,
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

<style lang="scss" scoped>
.nav-item {
  background: var(--v-background-lighten2);
  &.theme--light {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  }
  &.nav-active {
    background: var(--v-primary-base);
    .v-icon,
    .v-list-item__title {
      color: var(--v-background-base) !important;
    }
  }
  .v-icon {
    color: inherit;
  }
}
</style>
