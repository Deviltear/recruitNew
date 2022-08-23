import {
  LockOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel, history } from '@umijs/max';

import { message, Tabs, Button } from 'antd';
import { useState } from 'react';
import { OrgRegister } from '@/services/login';

type LoginType = 'register' | 'account';

const sleep = (time = 500) =>
  new Promise((resolve) => setTimeout(resolve, time));

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { OrgLogin } = useModel('global', (model) => ({
    OrgLogin: model.OrgLogin,
  }));
  const handleLogin = async (values: any) => {
    await sleep();
    const { success, message: reqmes, StatusCode } = await OrgLogin(values);
    if (StatusCode === 200) {
      message.success(reqmes);
      history.push('/table');
    } else {
      message.error(reqmes);
    }
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        title="阳光网站"
        subTitle="yong web station"
        onFinish={async (values) => {
          if (loginType === 'account') {
            await handleLogin(values);
          } else {
            const { code, account, pwd } = values;
            await OrgRegister({ code, account, pwd });
          }
        }}
        submitter={{
          searchConfig: {
            submitText: loginType === 'register' ? '注册' : '登录',
          },
        }}
      >
        <Tabs
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={'account'} tab={'登录'} />
          <Tabs.TabPane key={'register'} tab={'注册'} />
        </Tabs>

        <>
          <ProFormText
            name="account"
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
          {loginType === 'register' && (
            <ProFormText.Password
              name="rpwd"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'确认密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            />
          )}
          {loginType === 'register' && (
            <ProFormText
              name="code"
              fieldProps={{
                size: 'large',
                prefix: <UsergroupDeleteOutlined className={'prefixIcon'} />,
              }}
              placeholder={'网站邀请码'}
              rules={[
                {
                  required: true,
                  message: '请输入邀请码!',
                },
              ]}
            />
          )}
          {loginType === 'register' && (
            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <MailOutlined className={'prefixIcon'} />,
              }}
              placeholder={'邮箱'}
              // rules={[
              //   {
              //     pattern: /s/,
              //     message: '请输入正确邮箱格式!',
              //   },
              // ]}
            />
          )}
        </>

        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <Button type="link" onClick={() => setLoginType('register')}>
            忘记密码
          </Button>
        </div>
      </LoginForm>
    </div>
  );
};
