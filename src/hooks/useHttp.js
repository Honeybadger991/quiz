import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback (async (url) => {
        console.log(url)
        setLoading(true);

        try {
            const responce = await fetch(url);

            if(!responce.ok){
                throw new Error(`Could not fetch ${url}, status ${responce.status}`)
            }

            const data = await responce.json();

            setLoading(false);

            return data;

        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }

    }, [])

    const clearError = useCallback (() => setError(null), []);

    return {loading, setLoading, request, error, clearError}
}