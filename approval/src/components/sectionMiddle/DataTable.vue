<template>
    <div class="">
        <div 
            v-if="isLoading"
            class="flex justify-center items-center h-20">
            <div class="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
                
        <div 
            v-else
            v-for="item in filteredItems"
            key="item.id" 
            class="py-2"
        >
            <div class="p-1 font-semibold">{{ item.title }}</div>
            <table class=" border border-gray-300 text-sm">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="text-left p-2">Data element</th>
                        <th class="text-left p-2">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="dgItem in item.disaggregations"
                        class="border border-gray-300"
                    >
                        <td class="p-2">{{ dgItem.name }}</td>
                        <td class="p-2">{{ dgItem.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDataItemContext } from '../../hooks/useDataItemContext';
import { useDropdownContext } from '../../hooks/useDropdownContext';

const { selectedLocation, selectedPeriod } = useDropdownContext();
const { items, filteredItems, setFilteredItems } = useDataItemContext();

const isLoading = ref<boolean>(false);

const filterData = () => {
    isLoading.value = true;
    
    try{
        setTimeout(() => {
            isLoading.value = false;
            const _filteredItems = items.value.filter((item: any) => item.period === selectedPeriod.value && item.location === selectedLocation.value);
            setFilteredItems(_filteredItems || []);
        }, 1500 );
    }
    catch(err) {
        console.error("Error fetching Data", err);
        isLoading.value = false;
    }
    
}

watch([selectedPeriod, selectedLocation], ([newPeriod, newLocation]) => {
    
    if( newPeriod && newLocation) {
        filterData();
    }
})

</script>