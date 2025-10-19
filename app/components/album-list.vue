<script setup lang="ts">
import type { Album } from '~/types/graphql';

const props = defineProps<{
    albums: Album[];
}>()
</script>

<template>
    <ul>
        <li v-for="album in albums" :key="album.title">
            {{ album.title }}
        </li>
    </ul>
</template>