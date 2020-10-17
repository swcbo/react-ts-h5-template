/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-17 20:56:07
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-17 21:10:07
 */
import { useState, useCallback } from 'react'
export default function useAuthModel() {
  const [user, setUser] = useState(null)
  const signin = useCallback((account, password) => {
    // signin implementation
    // setUser(user from signin API)
  }, [])
  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
  }, [])
  return {
    setUser,
    user,
    signin,
    signout
  }
}