import { post } from '@/plugins/request';

export const getList = () => post('transportation/route/list', {});
