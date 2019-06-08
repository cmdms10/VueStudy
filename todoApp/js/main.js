Vue.filter('toUSD', function (jpy) {
    return jpy/100
})

Vue.filter('numberFormat', function(value) {
    return value.toLocaleString()
})

new Vue({
    el: '#app',
    data: {
        jpyPrice: 298000234567890
    }
})