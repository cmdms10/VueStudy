new Vue({
    el: '#app',
    data: {
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'}
        ]
    },
    watch: {
        colors: {
            handler: function (newValue, oldValue) {
                console.log('Update!')
            },
            deep: true
        }
    }
})
