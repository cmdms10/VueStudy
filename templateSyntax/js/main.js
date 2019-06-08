var app = new Vue({
    el: '#app',
    data: {
        price: 29800839474903,
    },
    filters: {
        numberFormat: function (value) {
            return value.toLocaleString()
        }
    }
})