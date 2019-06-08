new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        clear: function () {
            this.message = ''
        },
        clickHandler: function () {
            alert('shift + click')
        }
    }
})