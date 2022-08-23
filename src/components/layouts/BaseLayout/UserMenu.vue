<template>
  <v-menu bottom nudge-bottom="55" rounded="lg">
    <template #activator="{ on }">
      <div class="d-flex ml-5" v-on="on">
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
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="20">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Profile </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-menu left offset-x content-class="triangle-right">
          <template #activator="{ on }">
            <v-list-item v-on="on">
              <v-list-item-content>
                <v-list-item-title class="font-weight-semibold primary--text">
                  Teclab
                </v-list-item-title>
                <v-list-item-subtitle> 12345678 </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="primary">mdi-chevron-right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </template>
          <div>
            <v-card class="elevation-0">
              <v-card-title class="accent font-weight-semibold text-body-1">
                All Accounts
              </v-card-title>
              <v-divider />
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="grey--text lighten-2">
                      <div class="font-weight-medium">Teclab:</div>
                      18283129
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="grey--text lighten-2">
                      <div class="font-weight-medium">Teclab:</div>
                      21382138
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </v-menu>
        <v-divider />
        <v-list-item>
          <v-list-item-avatar size="22">
            <v-icon>mdi-email</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Inbox </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="20">
            <v-icon>mdi-bell</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Notifications </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-avatar size="20">
            <v-icon>mdi-cog</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Account Settings </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-avatar size="20">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Billing </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="20">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "UserMenu",
  data: () => ({}),
};
</script>

<style scoped lang="scss">
.triangle-right {
  box-shadow: none;
  padding-right: 20px;
  &::after {
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--v-accent-base);
    transform: rotate(135deg);
    position: absolute;
    border-radius: 3px;
    top: 17px;
    right: 12px;
    content: "";
  }
}
</style>
