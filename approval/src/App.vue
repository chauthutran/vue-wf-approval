<template>
  <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen">
      <Header />
      <MainBody />
      <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import MainBody from './components/MainBody.vue';


</script>