import { provide, ref, type InjectionKey, type Ref } from "vue"
import type { DataItem } from "../types/types";

export type DataItemContext = {
    items: Ref<DataItem[]>;
    loading: Ref<boolean>;
    error: Ref<string | null>;

    setItems: (dataItems: DataItem[]) => void;
    addItem: (dataItem: DataItem) => void;
    updateItem: (dataItem: DataItem) => void;
    removeItem: (dataItem: DataItem) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    
    filteredItems: Ref<DataItem[]>;
    setFilteredItems: (dataItems: DataItem[]) => void;
    approve: (dataItems: DataItem[]) => void;
    unapprove: (dataItems: DataItem[]) => void;
}

export const DataItemKey : InjectionKey<DataItemContext> = Symbol("dataItem");

export function useDataItemProvider() {
    const items = ref<DataItem[]>([]);
    const filteredItems = ref<DataItem[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);
    
    const setItems = (_items: DataItem[]) => {
        items.value = _items;
    }
    
    const addItem = (dataItem: DataItem) => {
        items.value.push(dataItem);
    }
    
    const updateItem = (dataItem: DataItem) => {
        const index = items.value.findIndex(item => item.id === dataItem.id);
        if (index !== -1) {
            items.value[index] = dataItem;
        }
    }
    
    const removeItem = (dataItem: DataItem) => {
        items.value = items.value.filter(item => item.id !== dataItem.id);
    }
    
    const setLoading = (_loading: boolean) => {
        loading.value = _loading;
    }
    
    const setError = (_error: string | null) => {
        error.value = _error;
    }
    
    const setFilteredItems = (dataItems: DataItem[]) => {
        filteredItems.value = dataItems;
    }
    
    const approve = (dataItems: DataItem[]) => {
        dataItems.forEach(item => {
            item.status = "approved";
        });
        setFilteredItems(dataItems);
        syncToOriginal(dataItems);
    }
    
    const unapprove = (dataItems: DataItem[]) => {
        dataItems.forEach(item => {
            item.status = "readyForApproval";
        });
        setFilteredItems(dataItems);
        syncToOriginal(dataItems);
    }
    
    const syncToOriginal = (list: DataItem[]) => {
        list.forEach(filteredItem => {
          const originalItem = items.value.find(item => item.id === filteredItem.id);
          if (originalItem) {
            Object.assign(originalItem, filteredItem); // updates the original item with changes
          }
        });
    } 
    
    provide(DataItemKey, { items, setItems, addItem, updateItem, removeItem, setLoading, setError, loading, error, approve, unapprove, filteredItems, setFilteredItems });
}