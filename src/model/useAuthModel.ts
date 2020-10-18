/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-17 20:56:07
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-17 22:58:41
 */
import { useState } from 'react'
export default function useAuthModel() {
  const [user, setUser] = useState(null)
  return {
    setUser,
    user,
  }
}