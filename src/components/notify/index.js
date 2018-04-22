import alert from './alert'
import confirm from './confirm'

const notify = {
    install: function (Vue) {
        Vue.prototype.$alert = function (options) {
            let template = Vue.extend(alert)
            let $vm = new template()
            let tpl = $vm.$mount().$el
            document.body.appendChild(tpl)
            if(typeof options === 'string'){
                $vm.content = options;
            }else if(typeof options === 'object'){
                Object.assign($vm,options)
            }
            $vm.show = true;
        }
        Vue.prototype.$confirm = function (options) {
            let temp = Vue.extend(confirm)
            let $vm = new temp()
            let tpl = $vm.$mount().$el
            document.body.appendChild(tpl)
            if(typeof options === 'string'){
                $vm.content = options
            }else if(typeof options === 'object'){
                Object.assign($vm,options)
            }
            $vm.show = true
        }
    }
}
export default notify
