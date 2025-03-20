import { useEffect, useRef, useState } from "react";
import { Location } from "../model";

export function useGeolocation() {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);
    const isFetched = useRef(false);
  
    useEffect(() => {
      if (isFetched.current) return;
      isFetched.current = true;
  
      if (!("geolocation" in navigator)) {
        setError("Определение местоположения не поддерживается вашим браузером.");
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setLocation({ lat: coords.latitude, lon: coords.longitude });
        },
        (err) => {
          setError(err.message);
        }
      );
    }, []);
  
    return { location, error };
  }