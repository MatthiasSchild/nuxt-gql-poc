<script setup lang="ts">
import type { Album } from '~~/types/graphql';

/*
 * Note: You could of course use the response generated from the graphql query,
 * but then this component could only be used for this one specific query.
 *
 * Instead use the base types and restrict to only the fields you need.
 * Also the types look weird, because the dummy api I use uses optional types everywhere.
 */

type AlbumItem = Pick<Album, 'id' | 'title'> | null | undefined;

defineProps<{
    albums: AlbumItem[] | null | undefined;
}>()
</script>

<template>
    <ul>
        <template v-for="album in albums">
            <li v-if="album && album.id && album.title" :key="album.id">
                {{ album.title }}
            </li>
        </template>
    </ul>
</template>
