<script lang="ts" setup>
    import { ref } from 'vue';
    import router from '@/router';

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

        router.push({ name: 'dashboard'})
    }
</script>


<template>
  <v-app class="login-bg">
        <v-container class="fill-height d-flex justify-center align-center">
            <v-card class="mx-auto d-flex align-center flex-column pa-2 light-glass-card rounded-xl"  width="400"> 
                <template v-slot:title > <span class="font-weight-black" >Log in to Axis App</span> </template>
                <v-card-text class="w-100 mt-5">
                    <v-form @submit.prevent='login' ref="form">
                    <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
                    <v-text-field label="Password" v-model="password" :rules="passwordRules"></v-text-field>

                    <v-btn type="submit" class="w-100 mt-5" variant="outlined">Submit</v-btn>
                    
                    <v-chip variant="text" class="mt-2">Don't have an account?<router-link to="/sign" class="ml-1">Sign in</router-link></v-chip>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
  </v-app>
</template>

