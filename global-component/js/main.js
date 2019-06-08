//第一引数：コンポーネント名、第二引数：コンポーネントの内容
Vue.component('hello-component', {
    template: '<p>Hello</p>'
})

var app = new Vue({
    el: '#app',

})