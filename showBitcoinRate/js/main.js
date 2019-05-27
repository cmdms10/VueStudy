new Vue({
    el: '#app',
    data: {
        bpi: null,
        hasError: false,
        loading: true,
    },

    mounted: function () {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response) {
                // console.log(response.data.bpi.USD.rate_float)
                //プロパティbpiにデータを入れる
                this.bpi = response.data.bpi
            }.bind(this))
            //通信エラーのキャッチ
            .catch(function (error) {
                console.log(error)
                this.hasError = true
            }.bind(this))
            //ローディング表示
            .finally(function () {
                this.loading = false
            }.bind(this))
    },
    filters: {
        /*小数点以下の桁数調整*/
        currencyDecimal(value) {
            return value.toFixed(2)
        }
    }
})