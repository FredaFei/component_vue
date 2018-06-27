import HeaderBar from './index.vue'

HeaderBar.install = function(Vue){
  Vue.component(HeaderBar.name, HeaderBar)
}

export default HeaderBar
