import ToastContainer from './index.vue';

const Toast = {
  install: function (Vue, options) {
    if (document.getElementsByClassName('toast-container').length) {
      return;
    }
    Vue.prototype.$toast = function (options) {
      let toastTpl = Vue.extend(ToastContainer);
      let $vm = new toastTpl();

      let tpl = $vm.$mount().$el;
      document.body.appendChild(tpl);

      if (typeof options === 'string') {
        $vm.text = options;
      } else if (typeof options === 'object') {
        Object.assign($vm, options);
      }
      $vm.show = true;
      setTimeout(function () {
        $vm.show = false;
      }, $vm.delay || 1500);
    }
  }
};

export default Toast;
