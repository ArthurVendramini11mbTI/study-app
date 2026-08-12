<template>
  <v-card>
      <v-navigation-drawer
        expand-on-hover
        permanent
        rail
        class="glass-card border-0"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Shiny Alberto"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-card>
</template>

<style scoped>
    .glass-card {
        background: linear-gradient(
            135deg,
            #0f172a 0%,
            #111827 50%,
            #1e293b 100%
        );
    }



</style>