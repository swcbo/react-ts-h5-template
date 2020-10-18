import { useCallback, useState } from "react"
const useAxios = <T extends object>(fun: () => Promise<T>, deps: any[]) => {
    const [reponse, setReponse] = useState<T | null>(null)
    const [error, setError] = useState(null)
    const doAxios = useCallback(
        async () => {
            try {
                const data = await fun() as any
                setReponse(data.data)
            } catch (error) {
                setError(error)
            }
        },
        [...deps],
    )
    return {
        doAxios,
        error,
        reponse,
    }
}
export default useAxios

