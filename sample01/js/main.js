//グローバルコンポーネント
Vue.component('global-component', {
    template: '<p>Hello Vue.js!</p>'
})

Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">{{ count }}</button>'
})

//ローカルコンポーネント
var localComponent = {
    template: '<p>Hello Vue.js!!</p>'
}



new Vue({
    el: '#app',
    components: {
        'local-component': localComponent
    }

})