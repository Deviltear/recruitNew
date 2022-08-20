

// src/models/userModel.ts
import { useRequest } from 'ahooks';
import { Login } from '@/services/login';
 
async function userLogin(paramas) {
  
    const res = await Login(paramas);
    if (res) {
      return res;
    }
    return {};
}

export default () => {

  return { userLogin,name:'9' };
};