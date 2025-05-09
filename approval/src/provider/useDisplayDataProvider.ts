import { provide, ref, type InjectionKey, type Ref } from "vue";

export type DisplayDataContext = {
    displayData: Ref<any | null>;
    
    setDisplayData: (data: any) => void;
}

export const DisplayDataKey: InjectionKey<DisplayDataContext> = Symbol("DisplayData");

export function useDisplayDataProvider() {
    const displayData = ref<any | null>(null);
    
    const setDisplayData = (data: any) => {
        displayData.value = data;
    }
    
    provide(DisplayDataKey, { displayData, setDisplayData });
}