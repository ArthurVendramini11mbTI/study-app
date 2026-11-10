<script lang="ts" setup>
    import { ref } from 'vue';
    import router from '@/router';
    import { sign } from '../services/auth';

    const email = ref<string>('')
    const password = ref<string>('')

    const form = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(null)
    const errorMessage = ref('')
    const loading = ref(false)

    const emailRules = [
        (value: string) => {
            return value ? true : 'You must enter an email'
        },

        (value: string) => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

            return regex.test(value) ? true : 'Invalid email'
        }
    ]

    const passwordRules = [
        (value: string) => {
            return value ? true : 'You must enter an password'
        },

        (value: string) => {
            return value.length >= 8 ? true : 'Your password must have at least 8 characters'
        },

        (value: string) => {
            return value.length <= 72 ? true : 'Your password must have at most 72 characters'
        }
    ]

    async function handleSign() {
        const validation = await form.value?.validate()

        if (!validation?.valid || loading.value) {
            return
        }

        const userData = {email: email.value, password: password.value}
        errorMessage.value = ''
        loading.value = true

        try {
            await sign(userData);

            router.push({ name: 'dashboard'})
        } catch (error) {
            errorMessage.value = error instanceof Error ? error.message : 'Unable to create account'
        } finally {
            loading.value = false
        }
    }
</script>


<template>
  <v-app class="login-bg">
        <v-container class="fill-height d-flex justify-center align-center">
            <v-card class="mx-auto d-flex align-center flex-column pa-2 light-glass-card rounded-xl"  width="400" variant="outlined" color="white"> 
                <template v-slot:title > <span class="font-weight-black" >Sign in to Axis App</span> </template>
                <v-card-text class="w-100 mt-5">
                    <v-form @submit.prevent='handleSign' ref="form">
                    <v-text-field label="Email" v-model.trim="email" :rules="emailRules" autocomplete="email"></v-text-field>
                    <v-text-field label="Password" v-model="password" :rules="passwordRules" type="password" autocomplete="new-password"></v-text-field>

                    <v-alert v-if="errorMessage" type="error" variant="tonal" density="compact">{{ errorMessage }}</v-alert>

                    <v-btn type="submit" class="w-100 mt-5" variant="outlined" :loading="loading">Submit</v-btn>
                    
                    <v-chip variant="text" class="mt-2">Already have an account?<router-link to="/" class="ml-1">Log in</router-link></v-chip>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
  </v-app>
</template>
