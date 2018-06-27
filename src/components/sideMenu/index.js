import SideMenu from './index.vue'

SideMenu.install = function(Vue){
  Vue.component(SideMenu.name, SideMenu)
}

export default SideMenu
