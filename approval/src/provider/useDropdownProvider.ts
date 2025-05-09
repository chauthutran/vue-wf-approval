import { provide, ref, type InjectionKey, type Ref } from "vue"
import type { Period, Location } from "../types/types";

export type DropdownContext = {
    periods: Ref<Period[]>;
    locations: Ref<Location[]>;
    selectedPeriod: Ref<string | null>;
    selectedLocation: Ref<string | null>;
    isDataEntry: Ref<boolean>;
    
    setPeriods: (periods: Period[]) => void;
    setLocations: (locations: Location[]) => void;
    setSelectedPeriod: (period: string) => void;
    setSelectedLocation: (location: string) => void;
    clearSelections: () => void;
    toggleDataEntry: () => void;
}

export const DropdownKey : InjectionKey<DropdownContext> = Symbol("Dropdown");

export function useDropdownProvider() {
    const periods = ref<Period[]>([]);
    const locations = ref<Location[]>([]);
    const selectedPeriod = ref<string | null>(null);
    const selectedLocation = ref<string | null>(null);
    const isDataEntry = ref<boolean>(false);
    
    const setPeriods = (_periods: Period[]) => {
        periods.value = _periods;
    }
    
    const setLocations = (_locations: Location[]) => {
        locations.value = _locations;
    }
    
    const setSelectedPeriod = (_period: string) => {
        selectedPeriod.value = _period;
    }
    
    const setSelectedLocation = (_location: string) => {
        selectedLocation.value = _location;
    }
    
    const clearSelections = () => {
        selectedPeriod.value = null;
        selectedLocation.value = null;
    }
    
    const toggleDataEntry = () => {
        isDataEntry.value = !isDataEntry;
    }
    
    provide(DropdownKey, {
        periods, locations, selectedPeriod, selectedLocation, isDataEntry, setPeriods, setLocations, setSelectedPeriod, setSelectedLocation, clearSelections, toggleDataEntry
    });
}