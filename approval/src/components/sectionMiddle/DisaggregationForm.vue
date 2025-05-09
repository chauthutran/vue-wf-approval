<template>
    <div class="border-t pt-4 mt-4">
      <h3 class="text-lg font-semibold mb-2">Disaggregations</h3>
      
      {/* Current Disaggregations List */}
      <div class="mb-4">
          <div 
            v-if="!!disaggregations"
            v-for="(d, index) in disaggregations"
            :key="index" 
            class="flex items-center gap-2 mb-2">
            <span class="flex-1">{{ d.name }}: {{ d.value }}</span>
            <button
              @click="emit('onRemove', index)"
              class="text-red-500 hover:text-red-600 cursor-pointer"
            >
              Remove
            </button>
          </div>
      </div>

      {/* Add New Disaggregation Form */}
      <div class="flex gap-2 items-end">
        <div class="flex-1">
          <input
            type="text"
            :value="newDisaggregation.name"
            @change="updateNewDisaggregation('name', $event)"
            placeholder="Disaggregation Name"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="flex-1">
          <input
            type="number"
            :value="newDisaggregation.value"
            @change="updateNewDisaggregation('value', $event)"
            placeholder="Value"
            class="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          @click="handleAddDisaggregation"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type Disaggregation } from '../../types/types';

defineProps<{
    disaggregations: Disaggregation[];
}>()

const emit = defineEmits<{
    (e: "onAdd", data: Disaggregation): void;
    (e: "onRemove", index: number): void;
}>();

const newDisaggregation = ref<Partial<Disaggregation>>({ name: '', value: 0 });

const updateNewDisaggregation = (field: 'value' | 'name', event: Event) => {
    const target = event.target as HTMLInputElement;
    if( field === 'value' ) {
        newDisaggregation.value.value = Number(target.value);
    }
    else {
        newDisaggregation.value.name = target.value;
    }

}

const handleAddDisaggregation = (e: Event) => {
    e.preventDefault();
    if (!newDisaggregation.value.name || newDisaggregation.value.value === undefined) return;

    emit("onAdd", {
        name: newDisaggregation.value.name,
        value: newDisaggregation.value.value
    });

    // Reset form
    newDisaggregation.value = { name: '', value: 0 };
};
</script>