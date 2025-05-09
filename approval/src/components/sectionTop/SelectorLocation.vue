<template>
    <div>
          <label class="">Location</label>
          <select class="border p-1 rounded w-40 ml-1" data-testid="select-location"
			 	:value="selectedLocation || ''"        
				@change="setLocation($event)">
            <option value="" disabled>Select a Location</option>

            <option 
                v-for="location in locations"
                :key="location.id"
                :value="location.id"
            >
                {{ location.name }}
            </option>
          </select>
      </div>
</template>

<script setup lang="ts">
import { useDropdownContext } from '../../hooks/useDropdownContext';

const { locations, selectedLocation, setSelectedLocation } = useDropdownContext();

const setLocation = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setSelectedLocation(target!.value);
}
</script>