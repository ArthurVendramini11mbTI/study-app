<script lang="ts" setup>
    import { ref } from 'vue';

  const email = ref<string>('')
  const password = ref<string>('')

  const emailRules = [
    (value: boolean) => {
        if (value) return true
        return 'You must enter an email'
    }
  ]

    const passwordRules = [
    (value: boolean) => {
        if (value) return true
        return 'You must enter an password'
    }
  ]
</script>


<template>
  <v-app>
    <v-main>
        <v-container class="fill-height d-flex justify-center align-center">
            <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="Log in" width="400"> 
                <template v-slot:title> <span class="font-weight-black">Welcome to Axis App</span> </template>

                <v-form @submit.prevent>
                <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
                <v-text-field label="Password" v-model="password" :rules="passwordRules"></v-text-field>

                <v-btn text="" type="submit">Submit</v-btn>
                </v-form>
            </v-card>
        </v-container>
    </v-main>
  </v-app>
</template>

