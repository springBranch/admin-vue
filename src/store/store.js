import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules'


Vue.use(Vuex)

class Modules {
  constructor() {
    this.modules = {}
  }

  addModules(obj) {
    const self = this
    Object.keys(obj).forEach(key => {
      self.modules[key] = obj[key]
    })
  }

  getModules() {
    return this.modules
  }
}

const modules = new Modules();
modules.addModules(auth);


export default new Vuex.Store({
  modules: modules.getModules()
})
