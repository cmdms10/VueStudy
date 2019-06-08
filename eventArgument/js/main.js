new Vue({
    el: '#app',
    data: {
        // counter: 0
        message: ''
    },
    methods: {
        clickHandler: function (message) {
            this.message = message
            this.counter++
        }
    }
})