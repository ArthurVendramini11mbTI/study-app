<script lang="ts" setup>
    import { ref } from 'vue';

    const email = ref<string>('')
    const password = ref<string>('')

    const form = ref()

    const emailRules = [
        (value: boolean) => {
            return value ? true : 'You must enter an email'
        },

        (value: string) => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

            return regex.test(value) ? true : 'Invalid email'
        }
    ]

    const passwordRules = [
        (value: boolean) => {
            return value ? true : 'You must enter an password'
        },

        (value: string) => {
            return value.length >= 6 ? true : 'Your password must have more than 5 digits'
        }
    ]

    async function login() {
        const { valid } = await form.value.validate()

        if (!valid) {
            return
        }

        alert('Login realizado com sucesso')
        email.value = ''
        password.value = ''
    }
</script>


<template>
  <v-app class="gradient-bg">
    <v-main>
        <v-container class="fill-height d-flex justify-center align-center">
            <v-card class="mx-auto d-flex align-center flex-column pa-2" prepend-icon="$vuetify" width="400" variant="outlined" color="indigo"> 
                <template v-slot:title > <span class="font-weight-black" >Welcome to Axis App</span> </template>
                <v-card-text class="w-100 mt-5">
                    <v-form @submit.prevent='login' ref="form">
                    <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
                    <v-text-field label="Password" v-model="password" :rules="passwordRules"></v-text-field>

                    <v-btn type="submit" class="w-100 mt-5" variant="outlined">Submit</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>
  </v-app>
</template>


<style scoped>
.gradient-bg {
  min-height: 100vh;

  background: linear-gradient(
    125deg,
    rgb(var(--v-theme-primary)),
    #ffffff
  );
}
</style>
