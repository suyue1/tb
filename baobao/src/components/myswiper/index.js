import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BaseSwiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './index.css';

class MySwiper extends React.Component {
  render() {
    let { pagination, navigation, scrollbar, slide } = this.props;

    let className = `swiper-container ${this.props.className}`;

    if (slide.length > 0) {
      return (
        <div className={className} style={this.props.style}>
          <div className="swiper-wrapper">
            {slide.map((item, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
          {/* {<!-- 如果需要分页器 -->} */}
          {pagination && <div className="swiper-pagination" />}

          {/* {<!-- 如果需要导航按钮 -->} */}
          {/* {以下两行代码就是JSX代码，需要用小括号包起来，并且需要一个根元素包裹} */}
          {navigation && (
            <Fragment>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </Fragment>
          )}

          {/* {<!-- 如果需要滚动条 -->} */}
          {scrollbar && <div className="swiper-scrollbar" />}
        </div>
      );
    } else {
      return null;
    }
  }
  //初始化
  initSwiper() {
    //传参数，第一个传DOM对象，第二个传选项配置
    this.mySwiper = new BaseSwiper('.swiper-container', {
      //选项
      //分页器，是否存在，存在就传DOM元素给它，不存在就传空对象
      pagination: this.props.pagination
        ? {
            el: '.swiper-pagination',
          }
        : {},
      navigation: this.props.navigation
        ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        : {},
      scrollbar: this.props.scrollbar
        ? {
            el: '.swiper-scrollbar',
          }
        : {},
      autoplay: this.props.autoplay,
    });
  }
  //组件更新后，销毁原来的，再重新初始化
  componentDidUpdate() {
    if (this.mySwiper) {
      this.mySwiper.destroy();
    }
    this.initSwiper();
  }
}

//设置props校验,需要引入第三方模块prop-types（脚手架已安装）
MySwiper.propTypes = {
  pagination: PropTypes.bool, //分页器
  navigation: PropTypes.bool,
  scrollbar: PropTypes.bool,
  autoplay: PropTypes.bool,
  slide: PropTypes.arrayOf(PropTypes.string).isRequired, // 必须要传一个数组，数组每一项是字符串
};

//设置props默认值
MySwiper.defaultProps = {
  pagination: true,
  navigation: true, //是否默认需要分页器
  scrollbar: false,
  autoplay: false,
};

export default MySwiper;
