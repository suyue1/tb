import styles from './index.less';
import NavLink from 'umi/navlink';

const Bottom = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.box}>
        <li>
          <NavLink exact activeClassName={styles.active} to="/">
            <i className="iconfont icon-index-copy" />
            首页
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="/cat">
            <i className="iconfont icon-gouwuche" />
            购物车
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="/list">
            <i className="iconfont icon-dingdan" />
            订单页
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="/user">
            <i className="iconfont icon-wodedangxuan-copy" />
            我的
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Bottom;
