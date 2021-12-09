new Vue({
    el: '#desafio',
    data: {
        nome: 'Geverson Loch',
        idade: 26,
        imagem: 'https://nustscienceblog.files.wordpress.com/2016/12/dfsf.jpg'
    },
    methods: {
        idadeMultiplicadaPor3() {
            return this.idade * 3;
        },
        numeroRandomico() {
            return 'Contoso';
        }
    }
});