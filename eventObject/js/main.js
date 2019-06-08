new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        clickHandler: function (event) {
            this.counter++
            console.log(event)
            console.log(event.target.tagName)
            console.log(event.target.innerHTML)
            console.log(event.target.type)
        }
    }
})