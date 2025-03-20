type GeoNames = {
    lat: number;
    lng: number;
    toponymName: string;
    countryId: number;
    population: number;
    countryCode: string;
};

export type GeoCodeResponse = {
    totalResultsCount: number;
    geonames: GeoNames[];
};
