new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        clickHandler: function ($event, message) {
            this.message = message
            console.log($event)
        }
    }
})