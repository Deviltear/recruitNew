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
/** organizations login */
export async function OrgLogin(
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
    StatusCode?: number
  }>('/api/loginogz', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}
/** organizations register */

export async function OrgRegister(
  params: {
    // query
    /** keyword */
    account: string;
    pwd: string;
    code:string,
    
  },
  options?: { [key: string]: any },
) {
  return request<{
    success?: boolean;
    message?: string;
    StatusCode?: number
  }>('/api/regogz', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}