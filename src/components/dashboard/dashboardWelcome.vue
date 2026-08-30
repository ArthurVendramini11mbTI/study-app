<script setup></script>

<template>
    <v-card  class="w-100 d-flex justify-space-between align-center" color="transparent">
        <div class="d-flex flex-column">
            <span class="text-display-small">Hello, Arthur</span>

            <span class="font-weight-thin">Ready to make this day productive? You've got this</span>
        </div>

        <div class="d-flex align-center ga-6">
            <v-icon-btn icon="mdi-magnify" color="transparent"></v-icon-btn>
            <v-icon-btn icon="mdi-bell-outline" color="transparent"></v-icon-btn>
            <v-btn text="Focus Mode" prepend-icon="mdi-bullseye" class="btn rounded-lg"></v-btn>
        </div>
    </v-card>
</template>