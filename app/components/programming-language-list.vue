<script setup lang="ts">
import type { ProgrammingLanguage } from '~~/types/graphql';

type ProgrammingLanguageItem = Pick<ProgrammingLanguage, 'id' | 'name'>;

defineProps<{
    languages: ProgrammingLanguageItem[];
}>()
</script>

<template>
    <ul>
        <li v-for="language in languages" :key="language.id">
            {{ language.name }}
        </li>
    </ul>
</template>