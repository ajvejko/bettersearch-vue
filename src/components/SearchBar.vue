<script setup>
import { ref } from "vue";
import { buttonManagement } from "../stores/manageButton";
const input = ref("");
</script>

<template>
  <form className="mx-auto mt-20 w-1/2 font-inter">
    <!-- Input field for searching -->
    <input
      v-model="input"
      placeholder="Search the web"
      class="w-full rounded-full border-2 bg-neutral-800 px-5 py-2 text-xl text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
    />
    <!-- Dispaly finalized link -->
    <div class="mr-6 mt-1 text-right text-sm text-stone-800">
      {{ buttonManagement.search + input }}
    </div>
  </form>
</template>
