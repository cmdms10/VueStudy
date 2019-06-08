Vue.filter('readMore', function(text, length, suffix) {
    return text.substring(0, length) + suffix
})

var app = new Vue({
    el: '#app',
    data: {
        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.'
    }
})