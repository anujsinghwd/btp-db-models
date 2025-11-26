export const VEHICLE_BRANDS = {
    SUZUKI: 'Maruti Suzuki',
    HYUNDAI: 'Hyundai',
    TOYOTA: 'Toyota',
    HONDA: 'Honda',
    KIA: 'Kia',
    VOLVO: 'Volvo',
    VOLKSVAGEN: 'Volksvagen',
    FORD: 'Ford',
    BMW: 'BMW',
    RENAULT: 'Renault',
    SKODA: 'Skoda',
    NISSAN: 'Nissan',
    MAZDA: 'Mazda',
    CHEVROLET: 'Chevrolet',
    FIAT: 'Fiat',
    JEEP: 'Jeep',
    MAHINDRA: 'Mahindra',
    TATA: 'Tata',
    HINDUSTAN: 'Hindustan'
} as const;
export type VehicleBrand = typeof VEHICLE_BRANDS[keyof typeof VEHICLE_BRANDS];
