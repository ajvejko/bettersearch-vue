<script setup>
import { buttonManagement } from "../stores/manageButton";
import { windowManagement } from "../stores/manageWindow";
import WebAdd from "./WebAdd.vue";
import WebEdit from "./WebEdit.vue";
import WebButton from "./WebButton.vue";
</script>

<template>
  <div class="mx-auto flex w-1/2 justify-center">
    <div>
      <div class="mt-12 flex justify-center font-bebas text-4xl text-white">
        Websites
      </div>
      <div class="flex flex-wrap justify-center">
        <!-- For each link in the list creates a button with all the properties -->
        <WebButton
          v-for="(link, index) in buttonManagement.list"
          @edit="windowManagement.manageEdit(link.name, link.home, link.search)"
          @toggle="
            buttonManagement.toggleButton(link.name, link.home, link.search)
          "
          :name="link.name"
          :key="index"
        />
        <button
          @click="windowManagement.manageAdd()"
          class="mt-4 rounded-xl border-2 border-white px-2 pb-0.5 text-white shadow-[0_0px_5px_rgba(0,0,0,0.25)] active:shadow-white"
        >
          +
        </button>
        <WebAdd v-if="windowManagement.addWindow" />
        <WebEdit v-if="windowManagement.editWindow" />
      </div>
    </div>
  </div>
</template>
