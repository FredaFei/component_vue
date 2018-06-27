import PCircle from './index.vue'

PCircle.install = function(Vue){
  Vue.component(PCircle.name, PCircle)
}

export default PCircle
