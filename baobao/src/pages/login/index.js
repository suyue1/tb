import styles from './index.less';
import React from 'react';
import { connect } from 'dva';
import { Form, Button, Input, message } from 'antd';
import img from '../../assets/images/1.png';

class User extends React.Component {
  state = {
    confirmDirty: false,
    isloading: false,
  };
  handValue = () => {
    this.props.form.validateFields((error, values) => {
      // console.log(values);

      if (!error) {
        // dispatch({ type: 'user/login', payload: values });
        this.setState({
          isloading: true,
        });
        fetch('http://106.15.230.53/logins', {
          method: 'GET',
          // body: JSON.stringify(values),
          // headers: {
          //   'content-type': 'application/json',
          // },
        })
          .then(response => response.json())
          .then(res => {
            if (res.login.name === values.name && res.login.password === values.password) {
              message.success('登录成功');
              let listObj = {
                obj: [],
              };
              window.localStorage.setItem('userInfo', JSON.stringify(res.login));
              window.localStorage.setItem('listObj', JSON.stringify(listObj));
              window.localStorage.setItem('catObj', JSON.stringify(listObj));
              //   // window.localStorage.setItem('token', res.data.token);
              this.props.setUserInfo(res.login);
              this.props.history.push('/user');
            } else {
              message.info('登录失败');
            }
            // console.log(res.login.name);
          });
      }
      this.setState({
        isloading: false,
      });
    });
  };
  render() {
    let { getFieldDecorator } = this.props.form;
    // validateToNextPassword = (rule, value, callback) => {
    //   const { form } = this.props;
    //   if (value && this.state.confirmDirty) {
    //     form.validateFields(['confirm'], { force: true });
    //   }
    //   callback();
    // };
    return (
      <div className={styles.normal}>
        <div className={styles.box}>
          <h1 className={styles.img}>
            <img src={img} alt="" />
          </h1>
          <Form className={styles.label}>
            <Form.Item hasFeedback>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入账号' }, { max: 11 }],
              })(<Input className={styles.input} />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入密码' },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input type="password" className={styles.input} />)}
            </Form.Item>

            <Button
              className={styles.button}
              block
              disabled={this.state.isloading}
              size="large"
              onClick={() => {
                this.handValue();
              }}
            >
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      setUserInfo: userInfo => {
        // console.log(userInfo);
        dispatch({
          type: 'user/setUserInfo',
          userInfo,
        });
      },
    };
  },

  // {
  //   setUserInfo: userInfo => ({ type: 'user/setUserInfo', userInfo }),

  // },
)(Form.create(null)(User));
