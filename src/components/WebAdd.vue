<script setup>
import { ref } from "vue";
import { windowManagement } from "../stores/manageWindow";
import { buttonManagement } from "../stores/manageButton";

//creating reactive states for values from input
const name = ref("");
const home = ref("");
const search = ref("");

//Function that adds a button
const addButton = () => {
  //First adds the new link to the list
  buttonManagement.list.push({
    name: name.value,
    home: home.value,
    search: search.value,
  });
  //then sets it into the localStorage
  localStorage.setItem("links", JSON.stringify(buttonManagement.list));
  windowManagement.manageAdd();
};
</script>
<template>
  <div
    class="z-2 absolute top-0 flex h-screen w-screen items-center justify-center bg-black/50"
  >
    <div
      class="relative w-1/4 rounded-xl border-2 bg-neutral-900 p-4 text-center"
    >
      <button
        @click="windowManagement.manageAdd()"
        class="py-0.25 absolute right-0 top-0 px-2 text-lg text-white hover:text-red-500"
      >
        X
      </button>
      <div class="text-center font-bebas text-3xl text-white">Add Website</div>
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
      <div className="float-left mt-5 font-bebas text-2xl text-white">
        Search link:
      </div>
      <input
        type="text"
        v-model="search"
        placeholder="Link for searching"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
      />
      <button
        @click="addButton"
        class="mt-4 rounded-md border-2 py-1 px-2 text-white shadow-[0_0px_8px_rgba(0,0,0,0.25)]"
      >
        Add
      </button>
    </div>
  </div>
</template>
