var app = new Vue({
    el: '#app',
    data: {
        //APIから取得した検索結果を格納
        items: null,
        //ユーザーが入力した検索キーワード
        keyword: '',
        //ユーザーに表示するメッセージ
        message: '',

    },
    watch: {
        keyword: function (newKeyword, oldKeyword) {
            // console.log(newKeyword)
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            //キーワードプロパティが空かチェック
            if(this.keyword === '') {
                this.items = null
                this.message = ''
                return
            }

            //ローディング中のメッセージをセット
            this.message = 'Loading...'
            var vm = this
            //page・・・1ページあたり per_page・・・20件表示 query・・・検索キーワードを渡す
            var params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(response) {
                    console.log(response)
                    vm.items = response.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                })
                .finally(function () {
                    vm.message = ''
                })
        }
    }
})