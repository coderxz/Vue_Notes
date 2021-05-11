(function(w){
  //一个插件最终是一个对象
  let MyPlugin = {}
  //一个插件必须要有一个install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      console.log('全局方法被调用')
    }
  
    // 2. 添加全局资源
    Vue.directive('upper', function(el,bindings){
      el.textContent = bindings.value.toUpperCase()
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      console.log('实例方法被调用')
    }
  }
  //将插件挂载window身上，暴露出去
  w.MyPlugin = MyPlugin`
})(window)