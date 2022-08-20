import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryUserList */
export async function queryUserList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('/api/getallogz', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/** user login */
export async function Login(
  params: {
    // query
    /** keyword */
    account?: string;
    /** current */
    pwd?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    success?: boolean;
    message?: string;
    statusCode?: number
  }>('/api/loginuser', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}