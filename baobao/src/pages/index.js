import React from 'react';
// import { connect } from 'dva';
import Link from 'umi/link';

// import image from '../assets/images/swiper7.jpg';
import images from '../assets/images/first.png';
import imgs from '../assets/images/t43.jpg';
// import font from '../assets/images/fontback.png';
import MySwiper from '../components/myswiper';

import styles from './index.less';
var sectionStyle = {
  width: '100%',
  height: '60px',
  // makesure here is String确保这里是一个字符串，以下是es6写法
  background: `url(${imgs}) no-repeat right bottom`,
  backgroundSize: `40px 40px`,
};

class Index extends React.Component {
  state = {
    channel: [],
    headline: [],
    banner: [],
    nav: [],
    bannerList: [],
    products: [],
    lefts: 0,
    hrefs: [
      'https://www.tmall.com/',
      'https://h5.yiguo.com/',
      'https://jhs.m.taobao.com/',
      'https://market.m.taobao.com',
      'https://pages.tmall.com',
      'https://h5.m.taobao.com',
      'https://h5.ele.me/',
      'https://h5.m.taobao.com',
      'https://pages.tmall.com',
      'https://market.m.taobao.com',
    ],
  };
  goHref(index) {
    console.log(index);
    window.open(`${this.state.hrefs[index]}`);
  }
  changeLeft(index) {
    if (index === 0) {
      this.setState({
        lefts: '0',
      });
    } else if (index === 1) {
      this.setState({
        lefts: '17%',
      });
    } else if (index === 2) {
      this.setState({
        lefts: '34%',
      });
    } else if (index === 3) {
      this.setState({
        lefts: '51%',
      });
    } else if (index === 4) {
      this.setState({
        lefts: '67%',
      });
    } else if (index === 5) {
      this.setState({
        lefts: '83%',
      });
    }
  }
  // componentWillMount() {
  //   window.addEventListener('scroll', this.handleScroll, true);
  // }
  // 页面滚动
  // handleScroll = e => {
  //   let scroll = this.refs.scroll;
  //   console.log(scroll);
  //   // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //   console.log(e.target.scrollTop); //页面滚走的高度
  //   if (e.target.scrollTop > 700) {
  //     scroll.style.display = 'block';
  //   } else {
  //     this.refs.scroll.style.display = 'none';
  //   }
  // };
  //返回顶部
  // goTop() {
  //   this.refs.scroll.style.display = 'none';
  //   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //   scrollTop = 0;
  //   document.body.scrollTop = 0;
  // }

  getSwiper = () => {
    fetch('http://106.15.230.53/indexs', {
      post: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          bannerList: res.swipers,
          channel: res.channel,
          headline: res.headline,
          banner: res.banner,
          nav: res.nav,
          products: res.products,
        });
        console.log(this.state.bannerList);
        // this.props.setSwiper(res.swipers);
      });
  };
  componentDidMount() {
    this.getSwiper();
  }
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.header}>
          <p>
            <img src={images} alt="" />
          </p>
          <span>寻找宝贝店铺</span>
        </div>
        <div className={styles.banners}>
          <MySwiper autoplay={true} slide={this.state.bannerList} navigation={false} />
          {/* <img src={image} alt="" /> */}
        </div>
        <ul className={styles.ullist}>
          {this.state.channel.map((item, index) => {
            return (
              <li key={index} onClick={this.goHref.bind(this, index)}>
                <img src={item.appPic1} alt="" />
                <p>{item.appName1}</p>
              </li>
            );
          })}
        </ul>
        <div className={styles.taobao} style={sectionStyle}>
          <marquee
            behavior="scroll"
            scrollamount="3"
            direction="up"
            height="40"
            scrolldelay="20"
            className={styles.taobao1}
            align="bottom"
          >
            新iPhone11：9月12日发布
            <br />
            华为mate30 Pro正面曝光：真美 新iPhone11：9月12日发布
          </marquee>
        </div>
        {/* //分割 */}
        <div className={styles.kong} />
        {/* //淘抢购 */}
        <ul className={styles.snap}>
          {this.state.headline.map((item, index) => {
            return (
              <li className={styles.tao} key={index}>
                <p className={styles.p1}>
                  <img src={item.linepic1} alt="" className={styles.img3} />
                  {item.title}
                  <img src={item.linepic4} alt="" className={styles.img2} />
                </p>
                <p className={styles.p2}>{item.des}</p>

                <Link to={`/detail?documentQuery=${index}`}>
                  <img src={item.linepic2} alt="" className={styles.img4} />
                </Link>
                <Link to={`/detail?documentQuery=${index}`}>
                  <img src={item.linepic3} alt="" className={styles.img5} />
                </Link>
              </li>
            );
          })}
        </ul>
        {/* //banner */}
        <div className={styles.enter}>
          {this.state.banner.map((item, index) => {
            return <img key={index} src={item.banpic} alt="" />;
          })}
        </div>
        {/* ///nav */}
        <div className={styles.navner}>
          {this.state.nav.map((item, index) => {
            return (
              <a href="#" key={index} onClick={this.changeLeft.bind(this, index)}>
                <strong>{item.navH}</strong>
                <span>{item.navS}</span>
              </a>
            );
          })}
          <div
            style={{
              width: '15%',
              height: '3px',
              background: 'red',
              position: 'absolute',
              left: this.state.lefts,
              bottom: '10px',
              transition: '0.4s',
            }}
          />
        </div>
        {/* ////全部 */}
        <ul className={styles.total}>
          {this.state.products.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/detail?documentQuery=${index}&type=${1}`}>
                  <img src={item.proPic} alt="" />
                </Link>
                <h2>{item.proTit}</h2>
                <p className={styles.total1}>{item.proSay}</p>
                <p className={styles.total2}>
                  <strong>
                    {item.proMoney}
                    <span>{item.proNum}</span>
                  </strong>
                </p>
              </li>
            );
          })}
        </ul>
        {/* ref="scroll" className={styles.backTop} onClick={this.goTop.bind(this)} */}
        <div>返回顶部</div>
      </div>
    );
  }
  // export default connect(
  //   state => {
  //     return {
  //       list: state.index.bannerList,
  //     };
  //   },
  //   dispatch => {
  //     return {
  //       setSwiper: value => {
  //         dispatch({
  //           type: 'index/setSwiper',
  //           value,
  //         });
  //       },
  //     };
  //   },
  // )(Index);
}

export default Index;
