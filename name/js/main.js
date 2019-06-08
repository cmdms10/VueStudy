//監視プロパティ
// new Vue({
//     el: '#app',
//     data: {
//         firstName: '',
//         lastName: '',
//         fullName: '',
//     },
//     watch: {
//         firstName: function (value) {
//             this.fullName = value + ' ' + this.lastName
//         },
//         lastName:  function (value) {
//             this.fullName = this.firstName + ' ' + value
//          }
//     }
// })

//算出プロパティ
new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})