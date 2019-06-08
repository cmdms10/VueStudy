new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        basePrice: 100
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        taxIncludedPrice: {
            get: function () {
                return parseInt(this.basePrice * 1.08)
            },
            set: function (taxIncludedPrice) {
                this.basePrice = Math.ceil(taxIncludedPrice / 1.08)

            }
        },
        computedNumber: function () {
            return Math.random()
        }
    },
    methods: {
        reversedMessageMethod: function() {
            return this.message.split('').reverse().join('')
        },
        methodsNumber: function() {
            return Math.random()
        }
    }
})