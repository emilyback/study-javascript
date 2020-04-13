export default{
    template: "#list",//셀렉터 설정
    props: ['data', 'type'],
    computed: {
        keywordType(){
            return this.type === 'keywords'
        },
        historyType(){
            return this.type === 'history'
        }
    },
    methods: {
        onClickList(keyword){
            this.$emit('@click', keyword)//제정의 해서 app.js로 넘겨줌
        },
        onRemoveList(keyword){
            this.$emit('@remove', keyword)
        }
    }
}