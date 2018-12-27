/**
 * @author chengxuan
 * @description api url setting
 */

const HostName = process.env.BASE_API // 真实请求所以接口

const apiUrl = {
  hostName: process.env.BASE_API,
  // 登录
  login: { url: HostName + '/login', method: 'GET' },

  getUserInfo: {url: HostName + '/system/userinfo/info', method: 'GET'},

  // 获取菜单权限
  getMenus: { url: HostName + '/menu', method: 'GET' },

  // 清除sso session
  clearZtoSession: { url: 'https://connect.zto.com/session', method: 'DELETE' }
}

export default apiUrl
