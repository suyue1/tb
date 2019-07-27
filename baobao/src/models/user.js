export default {
  namespace: 'user',
  state: {
    name: '',
    userInfo: window.localStorage.getItem('userInfo')
      ? JSON.parse(window.localStorage.getItem('userInfo'))
      : null,
  },
  // effects: {
  //   *login(action, { put }) {
  //     let response = yield fetch('http://localhost:3000/user', {
  //       method: 'POST',
  //       body: JSON.stringify(action.payload),
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     });
  //     let res = yield response.json();
  //     yield put({
  //       type: 'setUsername',
  //       value: res.username,
  //     });
  //   },
  // },

  reducers: {
    setUserInfo(state, action) {
      return {
        ...state,
        ...{
          userInfo: action.userInfo,
        },

      };

    },
    // setUserName(state, action) {
    //   return { ...state, ...{ userName: action.name } };
    // },
  },
};
