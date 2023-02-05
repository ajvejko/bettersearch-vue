<script setup>
import { ref } from "vue";
import { windowManagement } from "../stores/manageWindow";
import { buttonManagement } from "../stores/manageButton";

const name = ref(windowManagement.editName);
const home = ref(windowManagement.editHome);
const search = ref(windowManagement.editSearch);
</script>

<template>
  <div
    className="z-2 absolute top-0 flex h-screen w-screen items-center justify-center bg-black/50"
  >
    <div
      className="relative w-1/4 rounded-xl border-2 bg-neutral-900 p-4 text-center"
    >
      <button
        @click="windowManagement.manageEdit()"
        class="py-0.25 absolute right-0 top-0 px-2 text-lg text-white hover:text-red-500"
      >
        X
      </button>
      <div class="text-center font-bebas text-3xl text-white">Edit Website</div>
      <div class="float-left mt-5 font-bebas text-2xl text-white">Name:</div>
      <input
        type="text"
        v-model="name"
        placeholder="Name of the button"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)]"
      />
      <div class="float-left mt-5 font-bebas text-2xl text-white">
        Home link:
      </div>
      <input
        type="text"
        v-model="home"
        placeholder="Link to home page"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
      />
      <div class="float-left mt-5 font-bebas text-2xl text-white">
        Search link:
      </div>
      <input
        type="text"
        v-model="search"
        placeholder="Link for searching"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
      />
      <div class="mt-4 flex justify-between">
        <button
          @click="buttonManagement.deleteButton(name)"
          class="rounded-md border-2 py-1 px-2 text-red-500 shadow-[0_0px_8px_rgba(0,0,0,0.25)] hover:border-red-500 active:shadow-red-500"
        >
          Delete
        </button>
        <button
          @click="buttonManagement.editButton(name, home, search)"
          class="rounded-md border-2 py-1 px-2 text-white shadow-[0_0px_8px_rgba(0,0,0,0.25)]"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
