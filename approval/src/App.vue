<template>
	<ContextProvider>
	  <div class="h-screen flex flex-col">
		<div>
		<InitDataLoader />
		  <Selectors />
		</div>
		<main class="flex-1">
		  <MainBody />
		</main>
		<div>
		  <BottomNav />
		</div>
	  </div>
	</ContextProvider>
  </template>
  
  <script setup lang="ts">
import ContextProvider from './components/ContextProvider.vue';
import InitDataLoader from './components/InitDataLoader.vue';
import MainBody from './components/sectionMiddle/MainBody.vue';
import Selectors from './components/sectionTop/Selectors.vue';
import BottomNav from './components/sectionBottom/BottomNav.vue';

  </script>
  