<script setup lang="ts">
import { onMounted } from 'vue';
import { useDropdownContext } from '../hooks/useDropdownContext';
import { useDataItemContext } from '../hooks/useDataItemContext';
import TopNav from './sectionTop/TopNav.vue';

const { setPeriods, setLocations } = useDropdownContext();
const { setItems } = useDataItemContext();

const dataLoader = async () => {
  try {
    const periods = await (await fetch('/data/periods.json')).json();
    const locations = await (await fetch('/data/locations.json')).json();
    const items = await (await fetch('/data/data.json')).json();

    setPeriods(periods);
    setLocations(locations);
    setItems(items);
  } catch (err) {
    console.error('Error loading dropdown data:', err);
  }
};

onMounted(() => {
  dataLoader();
});
</script>

<template>
  <TopNav />
</template>
