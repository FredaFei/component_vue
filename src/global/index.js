import Util from '@/modules/js/util'

const util = {}
util.install = (Vue)=>{
  Vue.prototype.$util = Util
}
export default util
