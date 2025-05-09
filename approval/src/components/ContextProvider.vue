<!-- ContextProvider.vue -->
<script setup lang="ts">
import { useDropdownProvider } from '../provider/useDropdownProvider';
import { useDisplayDataProvider } from '../provider/useDisplayDataProvider';
import { useDataItemProvider } from '../provider/userDataItemProvider';

useDropdownProvider();
useDisplayDataProvider();
useDataItemProvider();
</script>

<template>
  <slot />
</template>
