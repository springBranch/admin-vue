import httpService from '@/utils/http'
import apiUrl from '@/api/apiUrl'


const state = {
  userInfo: {
    roleName:''
  }
};
const getters = {
  userInfo: state => state.userInfo,
};

const actions = {
  initUser: function ({commit}) {
    httpService.get(apiUrl.getUserInfo.url)
      .then(result => {
        if (result.status){
          commit('setUser',result.data);
        }
      })
  }
};

const mutations = {
  ['setUser']: (state, user) => {
    state.userInfo = user;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
