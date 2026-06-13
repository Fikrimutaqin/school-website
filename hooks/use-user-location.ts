import { useEffect, useState } from 'react';

interface UserLocation {
    latitude: number | null;
    longitude: number | null;
    city: string;
    province: string;
    loading: boolean;
    error: string | null;
}

export const useUserLocation = () => {
    const [location, setLocation] = useState<UserLocation>({
        latitude: null,
        longitude: null,
        city: '',
        province: '',
        loading: true,
        error: null,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation((prev) => ({
                ...prev,
                loading: false,
                error: 'Geolocation is not supported',
            }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );

                    const data = await response.json();

                    setLocation({
                        latitude,
                        longitude,
                        city:
                            data.address.city ||
                            data.address.town ||
                            data.address.county ||
                            '',
                        province: data.address.state || '',
                        loading: false,
                        error: null,
                    });
                } catch {
                    setLocation({
                        latitude,
                        longitude,
                        city: '',
                        province: '',
                        loading: false,
                        error: 'Failed to fetch location details',
                    });
                }
            },
            (error) => {
                setLocation((prev) => ({
                    ...prev,
                    loading: false,
                    error: error.message,
                }));
            }
        );
    }, []);

    return location;
};