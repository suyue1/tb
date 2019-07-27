import React from 'react';
// import PropTypes from 'prop-types';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './a.css';

class ISwiper extends React.Component {
  state = {
    bannerList: [],
  };
  initSwiper() {
    this.mySiwper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      observer: true, //很重
    });
    // });
  }
  componentDidUpdate() {
    if (this.mySiwper) {
      this.mySiwper.destroy();
    }
    this.initSwiper();
  }

  render() {
    return (
      <div id="app">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.state.bannerList.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item} alt="" />;
                </div>
              );
            })}
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination" />
        </div>
      </div>
    );
  }
  getBannerList() {
    fetch('http://localhost:3000/indexs', {
      method: 'GET',
      // headers: {
      //   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611933509272834393301"}',
      //   'X-Host': 'mall.cfg.common-banner',
      // },
    })
      .then(response => response.json())
      .then(res => {
        // if (res.status === 0) {
        //   this.setState({
        //     bannerList: res.data.map(item => {
        //       return item.imgUrl;
        //       // 返回一个数组，里面每一项是item.imgUrl地址
        //     }),
        //   });
        // } else {
        //   alert(res.msg);
        // }
        this.setState({
          bannerList: res.swipers,
        });
      });
  }

  //页面一打开就要拿发送请求
  componentDidMount() {
    this.getBannerList();
  }
}

export default ISwiper;
