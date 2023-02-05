<script setup>
import { buttonManagement } from "../stores/manageButton";
//defining properties
defineProps(["name", "home", "search"]);
</script>

<template>
  <button
    @click.prevent="$emit('toggle')"
    class="mr-3 mt-4 rounded-xl border-2 border-white py-1 px-2 text-white shadow-[0_0px_8px_rgba(0,0,0,0.25)] active:shadow-blue-500"
    :class="name === buttonManagement.name ? 'border-blue-500' : ''"
  >
    {{ name }}
  </button>
</template>
