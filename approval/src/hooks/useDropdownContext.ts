import { inject } from "vue";
import { DropdownKey, type DropdownContext } from "../provider/useDropdownProvider";

export function useDropdownContext(): DropdownContext {
    const dropdownContext = inject(DropdownKey);
    
    if (!dropdownContext) {
        throw new Error("DropdownKey is not provided");
    }
    
    return dropdownContext;
}