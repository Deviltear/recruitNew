import {
  LockOutlined,
 
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel,history } from '@umijs/max';

import { message, Space, Tabs,Button } from 'antd';
import { useState } from 'react';

type LoginType = 'register' | 'account';

const sleep = (time=500)=>new Promise(resolve=>setTimeout(resolve,time))

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { userLogin } = useModel('global', (model) => ({
    userLogin: model.userLogin,
  }));
  const waitTime =async (values:any) => {
    await sleep()
  const {success,message:reqmes}=  await userLogin(values)
 if (success) {
   history.push('/table')
 }else {
   message.error(reqmes)
 }
  
  };


  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        title="阳光网站"
        subTitle="yong web station"
        onFinish={async (values) => {
         
      await  waitTime(values)
        }}
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'登录'} />
          <Tabs.TabPane key={'register'} tab={'注册'} />
        </Tabs>
       
          <>
            <ProFormText
              name="stuid"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="pwd"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            {loginType === 'register'&& <ProFormText
              name="code"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'网站邀请码'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />}
          </>
   
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <Button type='link' onClick={()=>setLoginType('register')}>忘记密码</Button>
        </div>
      </LoginForm>
    </div>
  );
};