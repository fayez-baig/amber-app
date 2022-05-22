export interface Common {
    long_name: string;
    short_name: string;
}

export interface NortheastOrSouthwestOrLocationCoordinates {
    lat: number;
    lng: number;
}

export interface LocationBounds {
    northeast: NortheastOrSouthwestOrLocationCoordinates;
    southwest: NortheastOrSouthwestOrLocationCoordinates;
}

export interface Location {
    name: string;
    state: Common;
    country: Common;
    primary: string;
    secondary: string;
    location_bounds: LocationBounds;
    location_place_id: string;
    district: Common;
    route: Common;
    locality: Common;
    postal_code: Common;
    location_coordinates: NortheastOrSouthwestOrLocationCoordinates;
}

export interface ImagesEntity {
    path: string;
    caption: string;
    type: string;
}
export interface FAQ {
    answer: string;
    question: string;
}

export interface META {
    meta: string;
    title: string;
    types: string[];
    heading: string;
    region_name: string;
}

export interface Description {
    name: string;
    value: string;
    display_name: string;
}

export interface Result {
    id: number;
    name: string;
    meta_name?: string;
    state: string;
    parent_id: number;
    region_type: string;
    location_place_id: string;
    faqs?: FAQ[] | null;
    description?: Description[] | null;
    images?: ImagesEntity[] | null;
    meta: META;
    region_no: string;
    location: Location;
    secondary_name: string;
    combined_name: string;
    search_name: string;
    canonical_name: string;
    canonical_primary_name: string;
    canonical_base_name: string;
    location_coordinates: string;
    created_at: string;
    updated_at: string;
}

export interface MetaData {
    prev?: null;
    next: number;
    count: number;
    limit: number;
    pages?: number[] | null;
    current_page: number;
}
export interface Agg {}

export interface Data {
    data: Data;
    meta: MetaData;
    agg: Agg;
    result?: Result[] | null;
}

export interface SearchResults {
    message: string;
    data: Data;
}

export interface DefaultResult {
    title: string;
    recentSearch: string[];
}
