/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-04 19:16:31
 * @LastEditors: 小白
 * @LastEditTime: 2021-01-26 21:25:21
 */
import { useModel } from '@/hooks/useModel';
import React from 'react';
import LoadingView from '../../components/LoadingView';
import { Button } from 'antd-mobile';
const Home = () => {
    const { test } = useModel('useAuthModel', model => ({ test: model.user }));
    console.log(test)
    return <div>home1<LoadingView></LoadingView>
        <Button type="primary">primary</Button>
    </div>
}
export default React.memo(Home);