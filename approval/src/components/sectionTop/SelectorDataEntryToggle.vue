<template>
    <button :class="btnClassNames"
        @click="toggleDataEntryClick"
    >
      <i-material-symbols-swap-horiz class="w-5 h-5" />
      <span>Switch To {{ isDataEntry? 'Data Approval' : 'Data Entry' }}</span>
    </button>
</template>

<script setup lang="ts">
import { useDropdownContext } from '../../hooks/useDropdownContext';
import classes from "./SelectorDataEntryToggle.module.css";

const { isDataEntry, toggleDataEntry } = useDropdownContext();

const btnClassNames = `${classes.btnSwitchDataEntry} bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 cursor-pointer flex items-center gap-2`;

const toggleDataEntryClick = () => {
    toggleDataEntry();
}
</script>