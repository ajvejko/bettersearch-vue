<script setup>
import { windowManagement } from "../stores/manageWindow";
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
        placeholder="Name of the button"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)]"
      />
      <div class="float-left mt-5 font-bebas text-2xl text-white">
        Home link:
      </div>
      <input
        type="text"
        placeholder="Link to home page"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
      />
      <div className="float-left mt-5 font-bebas text-2xl text-white">
        Search link:
      </div>
      <input
        type="text"
        placeholder="Link for searching"
        class="w-full rounded-md border-2 bg-neutral-800 px-2 py-1 text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
      />
      <button
        class="mt-4 rounded-md border-2 py-1 px-2 text-white shadow-[0_0px_8px_rgba(0,0,0,0.25)]"
      >
        Add
      </button>
    </div>
  </div>
</template>
