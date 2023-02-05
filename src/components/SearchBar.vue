<script setup>
import { ref, onMounted } from "vue";
import { buttonManagement } from "../stores/manageButton";
const input = ref("");

const search = (event) => {
  if (event.key === "Enter") {
    //Check if nothing is selected and input is empty
    if (!buttonManagement.name && !input.value.trim()) {
      return;
    } else if (buttonManagement.name && !input.value.trim()) {
      window.open(buttonManagement.home, "_self");
    } else {
      window.open(buttonManagement.search + input.value, "_self");
    }
  }
};

onMounted(() => {
  document.addEventListener("keydown", search);
});
</script>

<template>
  <div className="mx-auto mt-20 w-1/2 font-inter">
    <!-- Input field for searching -->
    <input
      v-model="input"
      autofocus
      placeholder="Search the web"
      class="w-full rounded-full border-2 bg-neutral-800 px-5 py-2 text-xl text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
    />
    <!-- Dispaly finalized link -->
    <div class="mr-6 mt-1 text-right text-sm text-stone-800">
      {{ buttonManagement.search + input }}
    </div>
  </div>
</template>
