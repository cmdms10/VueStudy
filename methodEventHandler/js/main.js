new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        clickHandler: function () {
            this.counter++
        }
    }
})