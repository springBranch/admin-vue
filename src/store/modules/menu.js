import httpService from '@/utils/http'
import apiUrl from '@/api/apiUrl'


const state = {
  headMenus: [{}],
  currentHeadMenu: '',
  leftMenus: [],
  isCollapse: false,
  routes:[],
}

const getters = {
  headMenus: state => state.headMenus,
  currentHeadMenu: state => state.currentHeadMenu,
  leftMenus: state => state.leftMenus,
  isCollapse: state => state.isCollapse
}

const actions = {
  initMenu: function ({commit, state}) {
    httpService.get(apiUrl.getMenus.url)
      .then(result => {
        if (result.status) {
          commit('setHeadMenu', result.data);
          commit('changeHeadMenu', state.currentHeadMenu);
        }
      });
  },
  switchMenu: function ({commit}) {
    commit('collapseMenu');
  }
};

const mutations = {
  ['setHeadMenu']: (state, headMenus) => {
    state.headMenus = headMenus;
    state.currentHeadMenu = headMenus[0].name;
  },
  ['changeHeadMenu']: (state, menuName) => {
    state.currentHeadMenu = menuName;
    state.headMenus.forEach(menu => {
      if (menu.name == menuName) {
        state.leftMenus = menu.children;
      }
    })
  },
  ['setRoutes']:(state,data) =>{
    state.routes = data
  },
  ['collapseMenu']: (state) => {
    state.isCollapse = !state.isCollapse;
  },
}


export default {
  state,
  actions,
  getters,
  mutations
}
