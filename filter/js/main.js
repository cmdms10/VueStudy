new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function (event) {
            // alert();
            //未入力なら追加しない
            if(this.newItem == '') return;

            var todo = {
                item: this.newItem,
                //タスクの完了/未完了を管理する真偽値を追加
                isDone: false,
            };
            //配列末尾に追加するメソッド
            this.todos.push(todo);

            //入力後input内を空にする
            this.newItem='';
        },
        //削除機能追加
        deleteItem: function(index) {
            // alert(index);
            //該当データの削除
            this.todos.splice(index, 1);
        }
    }
})