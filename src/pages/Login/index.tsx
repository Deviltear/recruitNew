import LoginForm from '@/components/LoginForm';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

export default () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
       <LoginForm/>
      </div>
    </PageContainer>
  );
};