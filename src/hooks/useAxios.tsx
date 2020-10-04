import { useState, useCallback } from "react"
import request from "../plugins/request"
const useAxios = <T extends object>(fun: typeof request) => {
    const [reponse, setReponse] = useState<T | null>(null)
    const [error, setError] = useState(null)
    const doAxios = useCallback(
        async () => {
            try {
                const data = await fun
                setReponse(data as T)
            } catch (error) {
                setError(error)
            }
        },
        [],
    )
    return {
        reponse,
        error,
        doAxios
    }

}
export default useAxios