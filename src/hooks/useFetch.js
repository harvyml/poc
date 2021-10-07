import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import { fetchBy } from "../utils/services";

export function useFetchMusic(keyword, startAt, limit) {
    const [state, setState] = useState({
        error: false,
        data: {},
        isLoading: true
    })

    async function fetchData(keyword, startAt, limit){
        return await fetchBy({keyword, startAt, limit})
    }
    
    useEffect(() => {
        setState(async () => {
            const request = await fetchData(keyword, startAt, limit)
            return request
        })
    }, [])

    return state
}