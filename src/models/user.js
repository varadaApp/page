import { queryCurrent, query as queryUsers } from '@/services/user';
const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      console.log('queryCurrent', queryCurrent);
      //const response = yield call(queryCurrent);
      const response = {
        name: 'Career Planning User',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'test@test.com',
        signature: 'test',
        title: 'test',
        group: 'test',
        tags: [
          { key: '0', label: 'test' },
          { key: '1', label: 'test' },
          { key: '2', label: 'test~' },
          { key: '3', label: 'test' },
          { key: '4', label: 'test' },
          { key: '5', label: 'test' },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'Usa',
        geographic: {
          province: { label: 'test', key: '330000' },
          city: { label: 'test', key: '330100' },
        },
        address: 'test',
        phone: 'test',
      };
      console.log('response', response);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;
