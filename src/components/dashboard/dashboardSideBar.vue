<script setup lang="ts">

  const user = {
    name: 'Arthur'
  }


</script>

<template>
  <v-card color="transparent" flat class="w-100 h-100">
    <v-layout class="h-100">
      <v-navigation-drawer theme="dark" permanent class="dark-glass-card rounded-xl">
        <v-list nav class="bg-transparent d-flex flex-column justify-space-between h-100">
          
          <div class="d-flex flex-column ga-5">
            <div class="d-flex w-100 justify-center">
              <p>Axis</p>
            </div>

            <div class="d-flex flex-column ga-2">
              <v-list-item title="Dashboard" class="item">
                <template #prepend>
                  <v-icon class="menu-icon">mdi-home-outline</v-icon>
                </template>
              </v-list-item>

              <v-list-item title="Calendar" class="item">
                <template #prepend>
                  <v-icon class="menu-icon">mdi-calendar-outline</v-icon>
                </template>
              </v-list-item>

              <v-list-item title="Goals" class="item">
                <template #prepend>
                  <v-icon class="menu-icon">mdi-flag-outline</v-icon>
                </template>
              </v-list-item>

              <v-list-item title="Subjects" class="item">
                <template #prepend>
                  <v-icon class="menu-icon">mdi-book-outline</v-icon>
                </template>
              </v-list-item>

              <v-list-item title="Progress" class="item">
                <template #prepend>
                  <v-icon class="menu-icon">mdi-chart-line</v-icon>
                </template>
              </v-list-item>

              <v-list-item title="Settings" class="item">
                <template #prepend>
                  <v-icon class="menu-icon">mdi-cog-outline</v-icon>
                </template>
              </v-list-item>
            </div>
          </div>

          <div class="mb-2">
            <v-list-item  :title="user.name" value="profile" class="item" prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"/>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
.item {
  border-radius: 12px;
  color: #b8b8c7;

  transition: all 0.3s ease;

  border: 1px solid transparent;

  cursor: pointer;
}

.item:hover {

    transform: translateY(-3px);
  color: white;

  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.28),
    rgba(99, 102, 241, 0.18)
  );

  border-color: rgba(167, 139, 250, 0.55);

  box-shadow:
    0 0 12px rgba(139, 92, 246, 0.35),
    inset 0 0 12px rgba(139, 92, 246, 0.08);
}

.item:hover {
  color: #ffff;

   .menu-icon{
    color: #ffff;
   }
}

.menu-icon {
  color: #b8b8c7;
}
</style>