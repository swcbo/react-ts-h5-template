import { useCallback, useState } from "react"
const useAxios = <T extends object>(fun: () => Promise<T>, deps: any[], debounce = false) => {
    const [reponse, setReponse] = useState<T | null>(null)
    const [error, setError] = useState(null)
    const doAxios = useCallback(
        async () => {
            try {
                const data = await fun()
                // 重复数据不再刷新
                if (JSON.stringify(reponse) === JSON.stringify(data)) return
                setReponse(data)
            } catch (error) {
                setError(error)
            }
        },
        [...deps, fun, reponse],
    )
    return {
        doAxios,
        error,
        reponse,
    }
}
export default useAxios

