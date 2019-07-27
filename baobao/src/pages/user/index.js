/**
 * title: 我的
 * Routes:
 *  - ./src/routes/PrivateRoute.js
 */

import styles from './index.less';
import NavLink from 'umi/navlink';
import lolo from '../../assets/images/timg.jpg';
import png from '../../assets/images/2.png';
import jpg1 from '../../assets/images/font01.jpg';
import jpg2 from '../../assets/images/font02.jpg';
import jpg3 from '../../assets/images/font03.jpg';
import jpg4 from '../../assets/images/font04.jpg';
import jpg5 from '../../assets/images/font05.jpg';

import jpg6 from '../../assets/images/font06.jpg';
import jpg7 from '../../assets/images/font07.jpg';
import jpg8 from '../../assets/images/font08.jpg';
import jpg9 from '../../assets/images/font09.jpg';
import jpg10 from '../../assets/images/font10.jpg';
import jpg11 from '../../assets/images/font11.jpg';
import jpg12 from '../../assets/images/font12.jpg';
import jpg13 from '../../assets/images/font13.jpg';
import jpg14 from '../../assets/images/img01.gif';
import jpg15 from '../../assets/images/img02.jpg';
import jpg16 from '../../assets/images/img03.jpg';
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.login}>
        <div className={styles.left}>
          <img src={lolo} alt="" />
        </div>
        <div className={styles.center}>
          <h2>设置淘宝昵称</h2>
          <p>
            <img src={png} alt="" />
          </p>
        </div>
        <div className={styles.right}>
          <img src={jpg14} alt="" />
          <img src={jpg15} alt="" />
          <img src={jpg16} alt="" />
        </div>
      </div>

      <ul className={styles.shop}>
        <li>
          <p>918</p>
          <p>收藏夹</p>
        </li>
        <li>
          <p>5</p>
          <p>关注店铺</p>
        </li>
        <li>
          <p>206</p>
          <p>足迹</p>
        </li>
      </ul>
      {/* //分割 */}

      <div className={styles.bottom}>
        <div className={styles.kong}>
          <div className={styles.crea}>
            <p>会员中心</p>
            <p>淘气值...</p>
          </div>
          <div className={styles.creas}>
            <p>花小积分&nbsp;兑大权益</p>
          </div>
        </div>

        {/* //我的订单 */}
        <div className={styles.order}>
          <h2>
            <p>我的订单</p>
            <p>查看订单></p>
          </h2>
          <ul className={styles.payment}>
            <li>
              <img src={jpg1} alt="" />
              <p>待付款</p>
            </li>
            <li>
              <img src={jpg2} alt="" />
              <p>待发货</p>
            </li>
            <li>
              <img src={jpg3} alt="" />
              <p>待收货</p>
            </li>
            <li>
              <img src={jpg4} alt="" />
              <p>评价</p>
            </li>
            <li>
              <img src={jpg5} alt="" />
              <p>退款/售后</p>
            </li>
          </ul>
        </div>

        {/* ///必备工具  */}
        <div className={styles.orders}>
          <h2>
            <p>我的订单</p>
            <p>查看订单></p>
          </h2>
          <ul className={styles.payment}>
            <li>
              <img src={jpg6} alt="" />
              <p>待付款</p>
            </li>
            <li>
              <img src={jpg7} alt="" />
              <p>待发货</p>
            </li>
            <li>
              <img src={jpg8} alt="" />
              <p>待收货</p>
            </li>
            <li>
              <img src={jpg9} alt="" />
              <p>评价</p>
            </li>
            <li>
              <img src={jpg10} alt="" />
              <p>退款/售后</p>
            </li>
            <li>
              <img src={jpg11} alt="" />
              <p>退款/售后</p>
            </li>
            <li>
              <img src={jpg12} alt="" />
              <p>退款/售后</p>
            </li>
            <li>
              <img src={jpg13} alt="" />
              <p>退款/售后</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
