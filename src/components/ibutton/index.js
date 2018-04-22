import IButton from './index.vue'

IButton.install = function(Vue){
  Vue.component(IButton.name, IButton)
}

export default IButton
