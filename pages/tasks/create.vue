<script setup lang="ts">
import type { FetchError } from 'ofetch';

const title = ref('');
const creatingTask = ref(false);
const errorMessage = ref('');

const onSubmit = async () => {
    try {
        if (!title.value.trim()) {
            errorMessage.value = 'Title is required';
            return;
        }

        creatingTask.value = true;
        errorMessage.value = '';

        const result = await $fetch('/api/task', {
            method: 'POST',
            body: {
                title,
            },
        });

        console.log(result);
    } catch (e) {
        const error = e as FetchError;
        errorMessage.value = error.statusMessage || 'Unable to create task. Please try again.';
    } finally {
        creatingTask.value = false;
    }
};
</script>

<template>
    <div>
        <h1>Create Task</h1>

        <article v-if="errorMessage" class="error">
            {{ errorMessage }}
        </article>

        <form @submit.prevent="onSubmit">
            <label for="title">Title</label>
            <input id="title" v-model="title" type="text" name="title">

            <button
                type="submit"
                :disabled="creatingTask"
                :aria-buzy="creatingTask"
            >
                Create
            </button>
        </form>
    </div>
</template>