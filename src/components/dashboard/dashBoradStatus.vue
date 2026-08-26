<script setup lang="ts">
    const categories = {
        time: {
            icon: {
                icon: '',
                color: 'purple'
            },
            tittle: 'Study time today',
            time: '2:45',
            goal: '4:00'
        },
        streak: {
            icon: '',
            tittle: 'Study time today',
            time: '2:45',
            goal: '4:00'
        }
    }

    import { ref } from 'vue'

const values = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0])
</script>

<template>
    <v-col cols="3" v-for="value in categories">
        <v-card class="light-glass-card rounded-xl d-flex pa-4 justify-space-around">

            <div>
                <v-sparkline
                    color="primary"
                    :fill="false"
                    :line-width="2"
                    :smooth="8"
                    :padding="12"
                    :height="200"
                    :width="500"
                    :model-value="values" />

                    <div class="dark-glass-card rounded-lg pa-2" style="height: fit-content;">
                <v-icon icon="$vuetify"></v-icon>
            </div>
            </div>


            <div class="d-flex flex-column ga-2">
                <span>{{ value.tittle }}</span>
                <span>{{ value.time }}</span>
                <span>{{ value.goal }}</span>
            </div>
        </v-card>
    </v-col>

</template>