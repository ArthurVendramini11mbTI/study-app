<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { logout } from '@/services/auth'

const router = useRouter()

const user = {
  name: 'Arthur',
}

const navigation = [
  { title: 'Dashboard', icon: 'tabler:home', to: '/dashboard' },
  { title: 'Calendar', icon: 'tabler:calendar', to: '/calendar' },
  { title: 'Goals', icon: 'tabler:target-arrow', to: '/goals' },
  { title: 'Subjects', icon: 'tabler:book', to: '/subjects' },
  { title: 'Progress', icon: 'tabler:chart-line', to: '/progress' },
  { title: 'Settings', icon: 'tabler:settings', to: '/settings' },
]

async function handleLogout() {
  await logout()
  await router.replace('/')
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
        <!-- Content -->
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

            <!-- Navigation -->
            <div class="d-flex flex-column ga-2">

              <v-list-item
                v-for="item in navigation"
                :key="item.to"
                :title="item.title"
                :to="item.to"
                class="item"
                rounded="lg"
              >
                <template #prepend>
                  <Icon :icon="item.icon" width="24" height="24" class="menu-icon"/>
                </template>
              </v-list-item>

            </div>
          </div>

          <!-- Profile -->
          <div class="mb-2">
            <v-list-item
              :title="user.name"
              value="profile"
              class="item"
              prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"
            />
            <v-list-item title="Log out" class="item mt-1" rounded="lg" @click="handleLogout">
              <template #prepend>
                <Icon icon="tabler:logout" width="24" height="24" />
              </template>
            </v-list-item>
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

.item.v-list-item--active {
  background: rgba(var(--v-theme-primary), 0.18);
  color: rgb(var(--v-theme-on-background));
}


.logo {
  color: rgb(var(--v-theme-on-background));
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
</style>
