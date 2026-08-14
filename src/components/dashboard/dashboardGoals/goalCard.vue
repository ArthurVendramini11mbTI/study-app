<script setup lang="ts">
    const goals = [
        {
            title: 'Estudar Node',
            description: 'Express',
            hours: 2,
            minutes: 30
        },
        {
            title: 'Estudar matematica',
            description: 'Express',
            hours: 2,
            minutes: 30
        }
    ]
</script>

<template>
      <v-card append-icon="mdi-check" class="mx-auto w-100" prepend-icon="mdi-flag" :subtitle="goal.description" :title="goal.title" v-for="goal in goals">
        <v-card-text>{{ `${goal.hours}:` + `${goal.minutes}` }}</v-card-text>
      </v-card>
</template>