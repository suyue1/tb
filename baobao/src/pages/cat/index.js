/**
 * title: 我的
 * Routes:
 *  - ./src/routes/PrivateRoute.js
 */
import styles from './index.less';
import React from 'react';
import Link from 'umi/link';

class Cart extends React.Component {
  state = {
    getChildValue: '',
    nums: 1,
    sum: 0,
    array: JSON.parse(window.localStorage.getItem('catObj')).obj,
  };
  constructor(props) {
    super(props);
    let arr = this.state.array;
    let sum = null;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].nums * arr[i].price;
    }
    setTimeout(() => {
      this.setState({
        sum: sum ? sum : 0,
      });
      console.log(this.state.sum);
    }, 500);
  }

  getChildValue(value) {
    // this.setState({
    //   getChildValue: value,
    // });
  }
  add(index) {
    console.log(index);
    let arr = this.state.array;
    arr[index].nums++;
    let sum = null;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].nums * arr[i].price;
    }
    this.setState({
      nums: Number(this.refs.nums.innerHTML),
      sum: sum,
    });
    console.log(sum);
    // arr[index].nums * arr[index].price;
  }
  search(index) {
    let arr = this.state.array;
    if (arr[index].nums > 1) {
      arr[index].nums--;
    }
    let sum = null;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].nums * arr[i].price;
    }
    // arr[index].nums = Number(this.refs.nums.innerHTML) > 1 ? arr[index].nums-- : 1;
    this.setState({
      nums: Number(this.refs.nums.innerHTML),
      sum: sum,
    });
  }
  //结算
  sum() {
    console.log(this.state.array);
    let listObj = {
      obj: this.state.array,
    };
    if (window.localStorage.getItem('listObj')) {
      let objs = JSON.parse(window.localStorage.getItem('listObj'));
      listObj.obj.concat(objs.obj);
      window.localStorage.setItem('listObj', JSON.stringify(listObj));
      this.props.history.push('/list');
    } else {
      window.localStorage.setItem('listObj', JSON.stringify(listObj));
      this.props.history.push('/list');
    }
  }

  render() {
    return (
      <div className={styles.normal}>
        {/* 滚动部分 */}
        <div className={styles.scroll_y}>
          {/* 表头部分 */}
          <div className={styles.cart_top}>
            <div className={styles.top_title}>
              <div className={styles.cart_num}>购物车({this.state.array.length})</div>
              <div className={styles.opts}>管理</div>
            </div>
            <p>共{this.state.array.length}件宝贝</p>
          </div>

          {/* 购物车内容部分 */}
          {this.state.array.map((item, index) => {
            return (
              <div key={index} className={styles.scroll}>
                <div className={styles.cart_shop}>
                  <div className={styles.select} />
                  <div className={styles.shopName}>fila官方旗舰店></div>
                  <div className={styles.coupon}>领券</div>
                </div>

                <div className={styles.cart_main}>
                  <div className={styles.select} />
                  <div className={styles.pic}>
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className={styles.description}>
                    <div className={styles.title}>{item.name}</div>
                    <div className={styles.size}>
                      烈艳红-RD （宽松版型，建议拍小一码）;160/80A/S
                    </div>
                    <div className={styles.number}>
                      <p ref="pic">￥{item.price}</p>
                      <div className={styles.addNum}>
                        <button onClick={this.search.bind(this, index)}>-</button>
                        <span ref="nums">{item.nums}</span>
                        <button onClick={this.add.bind(this, index)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部结算栏 固定 */}
        <div className={styles.settlement_bar}>
          <div className={styles.select_all}>
            <div className={styles.select} />
            <span>全选</span>
          </div>
          <div className={styles.account_wrap}>
            <span className={styles.freight_charge}>不含运费</span>
            <p>合计:</p>
            <span className={styles.total_price}>￥{this.state.sum}</span>
            <div className={styles.submit_btn} onClick={this.sum.bind(this)}>
              结算
            </div>
          </div>
        </div>
        <div
          className={styles.toast}
          style={{ display: this.state.array.length > 0 ? 'none' : 'block' }}
        >
          <div className={styles.mask} />
          <div className={styles.toast_title}>
            <p>
              <i className="iconfont icon-gouwuche" />
            </p>
            <p>你的购物车还是空的！</p>
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
export default Cart;
