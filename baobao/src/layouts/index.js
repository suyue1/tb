import Bottom from '../components/bottom';
import styles from './index.less';

// 基本布局
function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>{props.children}</div>
      <div className={styles.bot}>
        <Bottom />
      </div>
    </div>
  );
}
// 单页布局
function SimpleLayout(props) {
  return <div className={styles.container}>{props.children}</div>;
}

function Detail(props) {
  return <div className={styles.container}>{props.children}</div>;
}
export default props => {
  // 判断 如果先显示的是 登录页面，那么就使用 单页布局
  if (props.location.pathname === '/login') {
    return <SimpleLayout {...props} />;
  } else if (props.location.pathname === '/detail') {
    return <Detail {...props} />;
  }

  return <BasicLayout {...props} />;
};
