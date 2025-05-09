<template>
    <div class="p-4">
      <form @submit.prevent={handleSubmit} class="mb-6 p-4 border rounded-lg">
        <h2 class="text-xl font-bold mb-4">
          {editItem ? 'Edit Data Set' : 'Add New Data Set'}
        </h2>
        <div class="space-y-4">
          <input
            type="text"
            :value="formItem.title || ''"
            @change="setFormValue($event, 'title')"
            placeholder="Title"
            class="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            :value="formItem.period || ''"
            @change="setFormValue($event, 'period')"
            placeholder="Period (e.g., 2024-Q1)"
            class="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            :value="formItem.location || ''"
            @change="setFormValue($event, 'location')"
            placeholder="Location ID"
            class="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            :value="formItem.value || ''"
            @change="setFormValue($event, 'value')"
            placeholder="Value"
            class="w-full p-2 border rounded"
            required
          />

          {/* Disaggregations Section */}
          <DisaggregationForm
            disaggregations={formItem.disaggregations || []}
            @onAdd="handleAddDisaggregation"
            @onRemove="handleRemoveDisaggregation"
          />

          <div class="flex gap-2">
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {{ editItem ? 'Update' : 'Add' }}
            </button>
			
			<button
				type="button"
				v-if="editItem"
				@click="editItem = null; formItem = dataItemInit"
				class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
			>
				Cancel
			</button>
          </div>
        </div>
      </form>

      <div class="space-y-4">
          <div 
            v-for="item in items"
            :key="item.id"
            class="p-4 border rounded-lg">
            <h3 class="text-lg font-semibold">{item.title}</h3>
            <div class="mt-2 text-sm text-gray-600">
				<p>Period: {item.period}</p>
				<p>Location: {item.location}</p>
				<p>Value: {item.value}</p>
				<p>Status: {item.status}</p>
				<div class="mt-2">
					<p class="font-medium">Disaggregations:</p>
					<ul class="list-disc pl-5">
						<li 
							v-for="(d, index) in item.disaggregations"
							:key="index"
						>
						{{ d.name }}: {{ d.value }}
						</li>
					</ul>
				</div>
            </div>
            <button
              @Click="handleEdit(item)"
              class="mt-2 text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              Edit
            </button>
            <button
              @click="handleDelete(item)"
              class="ml-2 mt-2 text-red-500 hover:text-red-600 cursor-pointer"
            >
              Delete
            </button>
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DataItem, Disaggregation } from '../../types/types';
import { useDataItemContext } from '../../hooks/useDataItemContext';

const dataItemInit: Partial<DataItem> = {
    title: '',
    period: '',
    location: '',
    value: 0,
    status: 'draft',
    disaggregations: []
};

const formItem = ref<Partial<DataItem>>({...dataItemInit});
const editItem = ref<DataItem | null>(null);
const { items, updateItem, addItem, removeItem } = useDataItemContext();

const setFormValue = (event: Event, propName: keyof DataItem) => {
    const value = (event.target! as HTMLInputElement).value as any;
    formItem.value[propName] = value;
}

const handleEdit = (item: DataItem) => {
	editItem.value = item;
	formItem.value = {...item};
}

const handleSubmit = () => {

    if (editItem) {
        const updated = {...editItem.value, ...formItem.value} as DataItem;
        updateItem(updated);
        editItem.value = null;
    } 
    else {
        const newDataItem = {
            ...formItem.value,
            id: `data-${Date.now()}`,
            status: 'draft',
        } as DataItem
        addItem(newDataItem);
    }

    formItem.value = {...dataItemInit};
}

const handleDelete = (item: DataItem) => {
    const ok = confirm(`Are you sure you want to delete "${item.title}"?`);
    if (ok) {
      removeItem(item);
    }
}

const handleAddDisaggregation = (disaggregation: Disaggregation) => {
    const data = {
      ...formItem.value,
      disaggregations: [ ...(formItem.value.disaggregations || []), disaggregation ]
    } as DataItem;
    
    formItem.value = data;
  };

  const handleRemoveDisaggregation = (index: number) => {
    const newDisaggregations = [...(formItem.value.disaggregations || [])];
    newDisaggregations.splice(index, 1);
    
    const data = {
      ...formItem.value,
      disaggregations: newDisaggregations
    } as DataItem;
    formItem.value = data;
  };

</script>