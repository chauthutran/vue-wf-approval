export interface DataItem {
    id: string;
    title: string;
    period: string;
    location: string;
    value: number;
    status: 'draft' | 'readyForApproval' | 'approved' | 'rejected';
    disaggregations: Disaggregation[];
}

export interface Disaggregation {
    name: string;
    value: number;
}

export interface Period {
    id: string;
    name: string;
}

export interface Location {
    id: string;
    name: string;
}