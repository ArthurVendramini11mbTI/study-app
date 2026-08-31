<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue'

  const values = ref([0, 2, 7, 3, 6, 3, 2])
</script>

<template>
    <v-card class="w-100 light-glass-card rounded-xl pa-5 d-flex align-center justify-space-between">
        <div class="d-flex align-center ga-4">
            <Icon icon="tabler:sparkle-highlight" width="70" height="70" />

            <div class="d-flex flex-column ga-2 justify-center">
                <span class="text-title-large">Keep going!</span>
                <div class="d-flex flex-column">
                    <span>You've studied 6h 23m this week.</span>
                    <span>Thats 12% more than last week</span>
                </div>    
            </div>
        </div>
        <div class="w-50 d-flex align-center ga-5">
            <v-sparkline
            color="primary"
            fill
            :gradient="['color-mix(in srgb, currentColor 100%, transparent)', 'color-mix(in srgb, currentColor 20%, transparent)', 'transparent']"
            :line-width="1" 
            interactive
            tooltip
            :smooth="2"
            :height="40"
            :width="300"
            :model-value="values" />
            
            <v-chip text="+12%" class="pa-5 d-flex justify-center rounded-lg">
              <template #append><Icon icon="tabler:chart-line" width="18" height="18" /></template>
            </v-chip>
        </div>
    </v-card>
</template>
