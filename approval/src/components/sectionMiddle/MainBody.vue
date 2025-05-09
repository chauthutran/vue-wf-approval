<template>
    <div class="p-2 ml-2">
        <DataEntryList v-if="isDataEntry" />
        <DataTable v-else />
    </div>
</template>

<script setup lang="ts">
import { useDropdownContext } from '../../hooks/useDropdownContext';
import DataEntryList from "./DataEntryList.vue";
import DataTable from "./DataTable.vue";

const { isDataEntry } = useDropdownContext();
</script>