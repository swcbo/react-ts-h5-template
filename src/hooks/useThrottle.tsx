import { useCallback, useRef } from "react"
/**
 * 节流hooks
 * @param fun 方法 
 * @param delay 时间(毫秒)
 * @param deps 
 */
const useThrottle = (fun: Function, delay: number, deps: any[]) => {
    const timer = useRef<NodeJS.Timeout | null>()
   
    return useCallback((...args) => {
        if (!delay) {
            fun.apply(fun, args)
        } else if (!timer.current) {
            timer.current = setTimeout(() => {
                fun.apply(fun, args)
                timer.current && clearTimeout(timer.current)
                timer.current = null;
            }, delay)
        }

        return () => {
            timer.current && clearTimeout(timer.current)
            timer.current = null;
        }
    }, [...deps, delay, fun])
}
export default useThrottle