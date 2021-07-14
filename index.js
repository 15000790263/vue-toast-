import Toast from "./Toast"
const obj = {}
obj.install = function (Vue) {
  const toastConstr = Vue.extend(Toast)
  const toast = new toastConstr({
    data() {
      return {
        message: '',
        isShow: false
      }
    },
  })

  let element = toast.$mount().$el
  document.body.appendChild(element)

  Vue.prototype.$toast = {
    show(message = "默认显示", duration = 1500) {
      toast.message = message
      toast.isShow = true
      setTimeout(() => {
        toast.message = ''
        toast.isShow = false
      }, duration);
    }
  }




}






export default obj