<script setup>
import SearchBar from "./components/SearchBar.vue";
import WebTable from "./components/WebTable.vue";
</script>

<template>
  <div class="absolute top-0 -z-10 h-screen w-screen bg-neutral-900">
    <div
      class="absolute z-10 h-full w-full bg-neutral-900/50 backdrop-blur-[100px]"
    ></div>
    <div
      class="absolute top-0 left-0 h-64 w-64 rounded-br-full bg-purple-500/30"
    ></div>
    <div
      class="absolute bottom-0 right-0 h-52 w-52 rounded-tl-full bg-pink-400/30"
    ></div>
  </div>
  <div className="mt-14 text-center font-bebas text-6xl text-slate-50">
    Search better <br />
    with&nbsp;
    <span
      className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-7xl text-transparent"
    >
      Better Search
    </span>
  </div>

  <SearchBar />
  <WebTable />
</template>
