<script setup lang="ts">
import { Icon } from '@iconify/vue'

const user = {
  name: 'Arthur',
}
</script>

<template>
  <v-card
    color="transparent"
    flat
    class="w-100 h-100"
  >
    <v-layout class="h-100">
      <v-navigation-drawer
        permanent
        class="light-glass-card sidebar rounded-xl"
      >
        <!-- Conteúdo -->
        <v-list
          nav
          class="
            bg-transparent
            d-flex
            flex-column
            justify-space-between
            h-100
            sidebar-content
          "
        >
          <div class="d-flex flex-column ga-5">

            <!-- Logo -->
            <div class="d-flex justify-center w-100">
              <p class="logo">
                Axis
              </p>
            </div>

            <!-- Navegação -->
            <div class="d-flex flex-column ga-2">

              <v-list-item
                title="Dashboard"
                class="item"
              >
                <template #prepend>
                  <Icon icon="tabler:home" width="24" height="24" class="menu-icon"/>
                </template>
              </v-list-item>

              <v-list-item
                title="Calendar"
                class="item"
              >
                <template #prepend>
                  <Icon icon="tabler:calendar" width="24" height="24" class="menu-icon" />
                </template>
              </v-list-item>

              <v-list-item
                title="Goals"
                class="item"
              >
                <template #prepend>
                  <Icon icon="tabler:target-arrow" width="24" height="24" class="menu-icon" />
                </template>
              </v-list-item>

              <v-list-item
                title="Subjects"
                class="item"
              >
                <template #prepend>
                  <Icon icon="tabler:book" width="24" height="24" class="menu-icon" />
                </template>
              </v-list-item>

              <v-list-item
                title="Progress"
                class="item"
              >
                <template #prepend>
                  <Icon icon="tabler:chart-line" width="24" height="24" class="menu-icon" />
                </template>
              </v-list-item>

              <v-list-item
                title="Settings"
                class="item"
              >
                <template #prepend>
                  <Icon icon="tabler:settings" width="24" height="24" class="menu-icon" />
                </template>
              </v-list-item>

            </div>
          </div>

          <!-- Perfil -->
          <div class="mb-2">
            <v-list-item
              :title="user.name"
              value="profile"
              class="item"
              prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"
            />
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
.sidebar {
  position: relative;
  overflow: hidden;
  height: 100% !important;
}

.sidebar-content {
  position: relative;
  z-index: 2;
}

.item :deep(.v-list-item__prepend) {
  margin-inline-end: 12px;
}


.logo {
  color: rgb(var(--v-theme-on-background));
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
</style>
