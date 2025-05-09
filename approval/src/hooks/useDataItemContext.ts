import { inject } from "vue";
import { DataItemKey, type DataItemContext } from "../provider/userDataItemProvider";

export function useDataItemContext(): DataItemContext {
    const dataItemContext = inject(DataItemKey);
    
    if (!dataItemContext) {
        throw new Error("DataItemKey is not provided");
    }
    
    return dataItemContext;
}