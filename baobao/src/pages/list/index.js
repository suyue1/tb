/**
 * title: 我的
 * Routes:
 *  - ./src/routes/PrivateRoute.js
 */

import React from 'react';
import styles from './index.less';
import Link from 'umi/link';
// import imgs from '../../assets/images/01.jpg';
// import ISwiper from '../../components/swiper';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: JSON.parse(window.localStorage.getItem('listObj')).obj,
    };
    // console.log(this.state.orderList);
  }
  delete(index) {
    let arr = [];
    for (let i = 0; i < this.state.orderList.length; i++) {
      if (index !== i) {
        arr.push(this.state.orderList[i]);
      }
    }
    this.setState({
      orderList: arr,
    });
    // console.log(arr);
    let listObj = {
      obj: arr,
    };
    window.localStorage.setItem('listObj', JSON.stringify(listObj));
  }
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.orderHeader}>
          <p href="#" className={styles.one}>
            <span>
              {' '}
              <i
                onClick={() => {
                  this.props.history.push('/');
                }}
                className="iconfont icon-fanhui"
              />
            </span>
          </p>
          <p href="">全部</p>
          <p href="">待付款</p>
          <p href="">待发货</p>
          <p href="">待收货</p>
          <p href="">待评价</p>
          {/* <ISwiper /> */}
          {/* <h3>我的订单</h3> */}
        </div>
        <ul className={styles.orderList}>
          {this.state.orderList.map((item, index) => {
            return (
              <li key={index}>
                <div className={styles.listHeader}>
                  <div className={styles.listHeader_left}>
                    <span>图标</span>
                    <span>{item.name}</span>
                  </div>
                  <span>交易成功</span>
                </div>
                <div className={styles.orderSection}>
                  <img src={item.imgUrl} alt="" />
                  <span>{item.section}</span>
                  <div className={styles.price}>
                    <span>￥{item.price}</span>
                    <span>x{item.nums}</span>
                  </div>
                </div>
                <p>
                  <span>共{item.num}件商品</span>
                  <span>合计：￥{item.nums * item.price}</span>
                </p>
                <div className={styles.orderBtn}>
                  <button
                    onClick={() => {
                      this.delete(index);
                    }}
                  >
                    删除订单
                  </button>
                  <button>查看物流</button>
                  <button>卖了换钱</button>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          className={styles.toast}
          style={{ display: this.state.orderList.length > 0 ? 'none' : 'block' }}
        >
          <div className={styles.mask} />
          <div className={styles.toast_title}>
            <p>
              <i className="iconfont icon-gouwuche" />
            </p>
            <p>你还没有订单！</p>
            <p>去挑选一些中意的商品吧</p>
            <p>
              <Link to="/">
                <button>去逛逛</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
