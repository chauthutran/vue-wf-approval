<template>
    <button @click="clearSelections()" class="py-1 px-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
        Clear Selections
    </button>
</template>

<script setup lang="ts">
import { useDropdownContext } from '../../hooks/useDropdownContext';

const { clearSelections } = useDropdownContext();
</script>