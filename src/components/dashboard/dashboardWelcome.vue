<script setup lang="ts">
import { Icon } from '@iconify/vue'

</script>
    
<template>
    <div  class="w-100 d-flex justify-space-between align-center">
        <div class="d-flex flex-column">
            <span class="text-display-small">Hello, Arthur 👋</span>

            <span class="font-weight-thin">Ready to make this day productive? You've got this</span>
        </div>

        <div class="d-flex align-center ga-6">
            <v-btn icon color="transparent"><Icon icon="tabler:search" width="22" height="22" /></v-btn>
            <v-btn icon color="transparent"><Icon icon="tabler:bell" width="22" height="22" /></v-btn>
            <v-btn class="btn rounded-lg">
              <Icon icon="tabler:target" width="20" height="20" class="me-2" />
              Focus Mode
            </v-btn>
        </div>
    </div>
</template>
