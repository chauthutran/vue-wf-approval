<template>
    <div>
        <label class="">Period</label>
        <select class="border p-1 rounded w-40 ml-1" data-testid="select-period"
            :value="selectedPeriod || ''"
            @change="setPeriod($event)"
        >
            <option value="" disabled>Select a Period</option>
            <option 
                v-for="period in periods"
                :key="period.id"
                :value="period.id"
            >
                {{ period.name }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { useDropdownContext } from '../../hooks/useDropdownContext';

const { periods, selectedPeriod, setSelectedPeriod } = useDropdownContext();

const setPeriod = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setSelectedPeriod(target.value!);
}
</script>