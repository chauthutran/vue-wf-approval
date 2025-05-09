<template>
      <footer class="bg-white shadow-md p-2 flex justify-between border-t-1 border-gray-600">
        <button 
          class="px-2 py-1 text-sm text-blue-600 border border-blue-600 rounded"
          v-if="!isApproved"
        >Ready for approval</button>
        <button 
          class="px-2 py-1 text-sm bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-400"
          v-if="!isApproved"
          @click="approve(filteredItems)"
        >
          Approve
        </button>
        <button 
          class="px-2 py-1 text-sm bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-400"
          v-else
          @click="unapprove(filteredItems)"
        >
          Un-Approve
        </button>
    </footer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDataItemContext } from '../../hooks/useDataItemContext';

function getApproved(): boolean {
  return filteredItems.value.length > 0 && filteredItems.value[0].status === "approved";
}

const { filteredItems } = useDataItemContext();
const isApproved = ref<boolean>(getApproved());



const { approve, unapprove } = useDataItemContext();

watch(
  () => filteredItems.value,
  (_) => { // newVal here
    isApproved.value = getApproved();
  },
  { deep: true }
);

</script>