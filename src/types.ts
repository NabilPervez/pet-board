export interface Location {
    state: string;
    county: string;
    city: string;
    street: string;
}

export interface PetPost {
    id: number;
    title: string;
    pet_name: string;
    pet_type: string;
    description: string;
    reward: string;
    location: Location;
    status: 'Lost' | 'Found';
}
