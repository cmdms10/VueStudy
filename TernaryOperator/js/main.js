var app = new Vue({
    el: '#app',
    data: {
        largeClass: {
            large: true,
            'bg-gray': true
        },
        dangerClass: {
            'text-danger': true
        },
        //クラスの適用のオンオフの切り替え
        isLarge: false
    }
})