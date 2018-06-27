import PBar from './index.vue'

PBar.install = function(Vue){
  Vue.component(IButton.name, PBar)
}

export default PBar
