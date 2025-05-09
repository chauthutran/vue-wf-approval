import { inject } from "vue";
import { DisplayDataKey, type DisplayDataContext } from "../provider/useDisplayDataProvider";

export function useDataItemContext(): DisplayDataContext {
    const displayDataContext = inject(DisplayDataKey);
    
    if (!displayDataContext) {
        throw new Error("DisplayDataKey is not provided");
    }
    
    return displayDataContext;
}