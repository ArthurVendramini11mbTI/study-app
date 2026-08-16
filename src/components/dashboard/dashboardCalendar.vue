<template>
  <div>
    <v-sheet class="d-flex justify-space-between align-center pa-2 dark-glass-card">
      <div class="ml-4">
        <p>Calendar</p>
      </div>

      <div class="d-flex ga-2">
        <v-icon-btn icon="mdi-chevron-left" variant="tonal" rounded="lg"></v-icon-btn>
        
        <v-icon-btn icon="mdi-chevron-right" variant="tonal" rounded="lg"></v-icon-btn>
      </div>

    </v-sheet>
    <v-sheet height="340" class="dark-glass-card">
      <v-calendar class="dark-glass-card" v-model="value"></v-calendar>
    </v-sheet>
  </div>
</template>
<script setup>

</script>