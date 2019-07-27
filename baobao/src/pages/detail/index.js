/**
 * title: 商品详情页
 */
import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';
// import { any } from 'prop-types';
import MySwiper from '../../components/myswiper';
// import App from '../../components/drawer'
class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.query);
    this.state = {
      bannerList: [],
      bottom: '-460px',
      booleans: false,
      headline: [],
      headline2: {},
      banner: [],
      nav: [],
      products: [],
      indexs: this.props.location.query.documentQuery,
      nums: 1,
      type: null,
      listType: this.props.location.query.type,
    };
    this.getSwiper();
    console.log('我是', this.state.indexs);
  }

  // 页面滚动显示顶端tab
  // handleScroll = (e) => {
  // 	let scroll = this.refs.scroll;
  // 	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 	// console.log(e.target.scrollTop);//页面滚走的高度
  // 	if (e.target.scrollTop > 199) {
  // 		// console.log(scroll)
  // 		scroll.style.display = 'block'
  // 	} else {
  // 		scroll.style.display = 'none'
  // 	}
  // }
  //弹框
  gocatlist() {
    this.setState({
      booleans: !this.state.booleans,
    });
    let catObj = {
      obj: [
        {
          name: this.state.headline2.name,
          price: this.state.headline2.price,
          number: this.state.headline2.number,
          nums: this.state.nums,
          imgUrl: this.state.headline2.linepic2,
        },
      ],
    };
    console.log(this.state.type);
    setTimeout(() => {
      if (this.state.type === 1) {
        if (window.localStorage.getItem('listObj')) {
          let objs = JSON.parse(window.localStorage.getItem('listObj'));
          objs.obj.unshift(catObj.obj[0]);
          window.localStorage.setItem('listObj', JSON.stringify(objs));
          this.props.history.push('/list');
        } else {
          window.localStorage.setItem('listObj', JSON.stringify(catObj));
          this.props.history.push('/list');
        }
      } else {
        if (window.localStorage.getItem('catObj')) {
          let objs = JSON.parse(window.localStorage.getItem('catObj'));
          objs.obj.unshift(catObj.obj[0]);
          window.localStorage.setItem('catObj', JSON.stringify(objs));
          this.props.history.push('/cat');
        } else {
          window.localStorage.setItem('catObj', JSON.stringify(catObj));
          this.props.history.push('/cat');
        }
      }
    }, 100);
  }
  handleShow(type) {
    console.log(type);
    this.setState({
      booleans: !this.state.booleans,
      type: type,
    });
  }
  getSwiper = () => {
    fetch('http://localhost:3000/indexs', {
      post: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if (this.state.listType === 1) {
          this.setState({
            headline: res.products[this.state.indexs].imgUrl,
            headline2: res.products[this.state.indexs],
          });
        } else {
          this.setState({
            headline: res.headline[this.state.indexs].imgUrl,
            headline2: res.headline[this.state.indexs],
          });
        }

        // console.log(this.state.indexs);
        // console.log(this.state.headline);
        // this.props.setSwiper(res.swipers);
      });
  };

  addCart = () => {
    this.setState({
      nums: this.state.nums + 1,
    });
  };
  minCart = () => {
    this.setState({
      nums: this.state.nums > 1 ? this.state.nums - 1 : 1,
    });
  };
  render() {
    return (
      <div className={styles.wrap}>
        {/* 返回上一页 */}
        <div className={styles.back}>
          <NavLink to="/" className={styles.backBtn}>
            <i className="iconfont icon-fanhui" />
          </NavLink>
        </div>

        {/* 去往购物车 */}
        <div className={styles.gotoCart}>
          <NavLink to="/" className={styles.cartBtn}>
            <i className="iconfont icon-gouwuche" />
          </NavLink>
        </div>

        {/* 顶端导航 */}
        <div className={styles.tabbar} ref="scroll">
          <ul>
            <li>
              <NavLink to="/">返回</NavLink>
            </li>
            <li>
              <a href="#">商品</a>
            </li>
            <li>
              <a href="#">评价</a>
            </li>
            <li>
              <a href="#">详情</a>
            </li>
            <li>
              <NavLink to="/">购物车</NavLink>
            </li>
          </ul>
        </div>

        {/* banner */}
        <div className={styles.scrolls}>
          <div className={styles.container} height="160px">
            <MySwiper autoplay={true} slide={this.state.headline} navigation={false} />
          </div>

          {/* 促销 */}
          <div className={styles.promotion}>
            <div className={styles.proPrice}>
              <div className={styles.price_real}>
                <i>¥</i>
                <span className={styles.price_num}>{this.state.headline2.price}</span>
                <span className={styles.price_text}>优惠促销</span>
              </div>
              <div className={styles.price_primary}>
                <span>价格</span>
                <del>¥{this.state.headline2.price}</del>
              </div>
            </div>
            <div className={styles.proImg} />
          </div>

          {/* title */}
          <div>
            <div className={styles.title}>{this.state.headline2.name}</div>
            <div className={styles.title_detail}>
              <span>快递：0.0</span>
              <span>月销量 {this.state.headline2.number}件</span>
              <span>{this.state.headline2.addres}</span>
            </div>
          </div>

          {/* 优惠 促销 服务 */}
          <div className={styles.benefit}>
            {/* 优惠 */}
            <div className={styles.benefit_discount}>
              <span className={styles.discount_title}>优惠</span>
              <span className={styles.discount_ticket}>店铺优惠券</span>
              <span className={styles.discount_getCoupon}>领取优惠券</span>
              <span className={styles.discount_get}>领取</span>
              <i className="iconfont icon-you" style={{ fontSize: '16px', color: '#ccccccc' }}>
                {' '}
              </i>
            </div>
            {/* 促销 */}
            <div className={styles.benefit_sales}>
              <span className={styles.sales_title}>促销</span>
              <span className={styles.sales_score}>积分</span>
              <span className={styles.sales_getScore}>购买可得219积分</span>
              <i className="iconfont icon-you" style={{ fontSize: '16px', color: '#ccccccc' }}>
                {' '}
              </i>
            </div>
            {/* 服务 */}
            <div className={styles.benefit_server}>
              <div className={styles.server_title}>服务</div>
              <ul className={styles.server_list}>
                <li>正品保证</li>
                <li>极速退货</li>
                <li>极速退款</li>
                <li>退货运费险</li>
              </ul>
              <i className="iconfont icon-you" style={{ fontSize: '16px', color: '#ccccccc' }}>
                {' '}
              </i>
              <div>
                <span className={styles.server_wuyou}>天猫无忧购</span>
                <span className={styles.server_list2}>品质优选&nbsp;便捷物流&nbsp;全程服务</span>
              </div>
            </div>
          </div>

          {/* 选择尺码 参数 */}
          <div className={styles.select}>
            <div className={styles.select_size}>
              <span className={styles.size_title}>选择</span>
              <span className={styles.size_select}>请选择尺码/颜色分类</span>
              <i className="iconfont icon-you" style={{ fontSize: '16px', color: '#ccccccc' }}>
                {' '}
              </i>
            </div>
            <div className={styles.select_argument}>
              <span className={styles.argument_title}>参数</span>
              <span className={styles.argument_select}>品牌 功能...</span>
              <i className="iconfont icon-you" style={{ fontSize: '16px', color: '#ccccccc' }}>
                {' '}
              </i>
            </div>
          </div>

          {/* 商品评价 */}
          <div className={styles.comment}>
            <div className={styles.comment_title}>
              <span className={styles.comment_total}>商品评价（23）</span>
              <span className={styles.comment_all}>查看全部 - </span>
            </div>
            <div className={styles.comment_user}>
              <span>头像</span>
              <span>用户姓名</span>
              <span>超级会员</span>
            </div>
            <p className={styles.comment_con}>衣服很好看，全棉的。宽松款所以拍小一个号就刚好</p>
            <div className={styles.comment_time}>
              2019-07-11 颜色分类:深黑-BK（宽松版型，建议拍小一码）;尺码:160/80A/S
            </div>
          </div>

          {/* 店铺入口 */}
          <div className={styles.shop}>
            <div className={styles.shop_logo}>
              <div className={styles.shop_logo_logo}>
                <img src={require('../../assets/images/shop_logo.jpg')} alt="" />
              </div>
              <div className={styles.shop_info}>
                <span className={styles.shop_name}>fila官方旗舰店</span>
                <div className={styles.tianmao_logo}>
                  <img src={require('../../assets/images/tianmao_logo.jpg')} alt="" />
                </div>
              </div>
            </div>
            <ul className={styles.shop_score}>
              <li>宝贝描述4.9</li>
              <li>卖家服务4.9</li>
              <li>物流服务4.9</li>
            </ul>
            <div className={styles.shop_entery}>
              <a href="#">全部商品</a>
              <a href="#">进入店铺</a>
            </div>
          </div>

          {/* 看了又看 */}
          <div className={styles.more}>
            <div className={styles.more_title}>看了又看</div>
            <div className={styles.more_main}>
              <div className={styles.main_items1}>
                <div className={styles.items_pic}>
                  <img src={require('../../assets/images/more_01.jpg')} alt="" />
                </div>
                <p className={styles.items_desc}>
                  FILA 斐乐官方 黄景瑜同款 男子短袖T恤 2019夏季新款休闲圆领T恤
                </p>
                <del className={styles.items_primary}>¥440</del>
                <span className={styles.items_price}>¥309</span>
              </div>
              <div className={styles.main_items1}>
                <div className={styles.items_pic}>
                  <img src={require('../../assets/images/more_01.jpg')} alt="" />
                </div>
                <p className={styles.items_desc}>
                  FILA 斐乐官方 黄景瑜同款 男子短袖T恤 2019夏季新款休闲圆领T恤
                </p>
                <del className={styles.items_primary}>¥440</del>
                <span className={styles.items_price}>¥309</span>
              </div>
              <div className={styles.main_items1}>
                <div className={styles.items_pic}>
                  <img src={require('../../assets/images/more_01.jpg')} alt="" />
                </div>
                <p className={styles.items_desc}>
                  FILA 斐乐官方 黄景瑜同款 男子短袖T恤 2019夏季新款休闲圆领T恤
                </p>
                <del className={styles.items_primary}>¥440</del>
                <span className={styles.items_price}>¥309</span>
              </div>
            </div>
          </div>

          {/* 详情tips */}
          <div className={styles.scrolltips}>
            <div className={styles.tips_line_l} />
            <span>详情</span>
            <div className={styles.tips_line_r} />
          </div>
          <div className={styles.h}>"新生代潮流运动 品牌官方旗舰店 正品保障"</div>

          {/* 优惠券 */}
          <div className={styles.coupon}>
            <div className={styles.coupon_title}>优惠券</div>
            <div className={styles.coupon_wrap}>
              <div className={styles.coupon}>
                <div className={styles.coupon_top}>
                  <i>¥</i>
                  <span>60</span>
                  <p>满699元使用</p>
                </div>
                <div className={styles.coupon_bottom}> 有效期 2019.07.22-2019.07.24 </div>
              </div>
              <div className={styles.coupon}>
                <div className={styles.coupon_top}>
                  <i>¥</i>
                  <span>120</span>
                  <p>满1199元使用</p>
                </div>
                <div className={styles.coupon_bottom}> 有效期 2019.07.22-2019.07.24 </div>
              </div>
            </div>
          </div>

          {/* 商品图片 */}
          <div className={styles.description}>
            {this.state.headline.map((item, index) => {
              return <img key={index} src={item} alt="" />;
            })}
          </div>

          {/* 粉丝趴 */}
          <div className={styles.fans}>
            <div className={styles.fans_title}>粉丝趴</div>
            <div className={styles.fans_link}>
              <div className={styles.link_title}>
                <p>斐乐互动吧</p>
                <span>612.4W粉丝关注</span>
              </div>
              <a>逛互动吧享好礼</a>
            </div>
          </div>

          {/* 价格说明 */}
          <div className={styles.price} />
        </div>
        {/* footer tab栏 */}
        <div className={styles.actionBar}>
          <div className={styles.items}>
            <a href="#">
              <i className="iconfont icon-dianpu" />
              <span>店铺</span>
            </a>
            <a href="#">
              <i className="iconfont icon-zaixiankefu" />
              <span>客服</span>
            </a>
            <a href="#">
              <i className="iconfont icon-shoucang" />
              <span>收藏</span>
            </a>
          </div>
          <div className={styles.buy}>
            <div className={styles.addCart} onClick={this.handleShow.bind(this)}>
              加入购物车
            </div>
            {/* 弹窗  - 仅点击‘加入购物车’弹出 */}
            <div
              className={styles.box_show}
              style={{
                position: 'absolute',
                width: '100%',
                height: '500px',
                transition: '0.8s',
                backgroundColor: '#ffffff',
                bottom: this.state.booleans ? '0px' : '-560px',
                left: 0,
              }}
            >
              <div className={styles.box_header}>
                <img src={this.state.headline2.linepic2} />
                <div className={styles.header_main}>
                  <span className={styles.header_price}>￥{this.state.headline2.price}</span>
                  <span className={styles.header_repertory}>
                    库存 {this.state.headline2.number}件
                  </span>
                  <span className={styles.header_color}>请选择: 尺码 颜色分类</span>
                </div>
                <div className={styles.header_btn} onClick={this.handleShow.bind(this)}>
                  <span>×</span>
                </div>
              </div>
              <div className={styles.box_scroll}>
                {/* 尺码 */}
                <div className={styles.box_size}>
                  <span className={styles.size_title2}>尺码</span>
                  <ul>
                    <li activeClassName="active">155/76A/XS</li>
                    <li>155/76A/XS</li>
                    <li>155/76A/XS</li>
                    <li>155/76A/XS</li>
                    <li>155/76A/XS</li>
                  </ul>
                </div>
                {/* 颜色分类 */}
                <div className={styles.box_color}>
                  <p className={styles.color_title}>颜色分类</p>
                  <ul>
                    <li className={styles.color_list} activeClassName="active">
                      <img src={this.state.headline2.linepic2} alt="" />
                      <p>烈焰红-RD（宽松版型，建议拍小一码）</p>
                    </li>
                    <li className={styles.color_list} activeClassName="active">
                      <img src={this.state.headline2.linepic2} alt="" />
                      <p>深黑-BK（宽松版型，建议拍小一码）</p>
                    </li>
                  </ul>
                </div>
                {/* 购买数量 */}
                <div className={styles.box_number}>
                  <p className={styles.nubmer_title}>购买数量</p>
                  <div className={styles.number_add}>
                    <button onClick={this.minCart}>-</button>
                    <span>{this.state.nums}</span>
                    <button onClick={this.addCart}>+</button>
                  </div>
                </div>

                {/* 花呗分期 */}
                <div className={styles.box_huabei}>
                  <p className={styles.huabei_title}>花呗分期（可选）</p>
                  <ul>
                    <li className={styles.huabei_list} activeClassName="active">
                      <span>
                        分3期(含手续费)
                        <br />
                        ￥149.69/期
                      </span>
                    </li>
                    <li className={styles.huabei_list} activeClassName="active">
                      <span>
                        分6期(含手续费)
                        <br />
                        ￥76.45/期
                      </span>
                    </li>
                    <li className={styles.huabei_list} activeClassName="active">
                      <span>
                        分12期(含手续费)
                        <br />
                        ￥39.32/期
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.box_btn} onClick={this.gocatlist.bind(this)}>
                确定
              </div>
            </div>
            <div className={styles.immBuy} onClick={this.handleShow.bind(this, 1)}>
              立即购买
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
