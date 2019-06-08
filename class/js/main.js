var app = new Vue({
    el: '#app',
    data: {
        isLarge: true,
        hasError: true,
        //配列構文によるクラスのデータバインディング
        largeClass: 'large',
        dangerClass: 'text-danger'
    }
})