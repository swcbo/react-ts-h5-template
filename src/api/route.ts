import request from '../plugins/request';

export const getList = () => request.post('transportation/route/list', {});
