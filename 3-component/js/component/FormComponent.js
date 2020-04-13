//이 컴포넌트가 바인딩되야 되는 돔셀렉팅을 해줘야됨
//모듈형식이므로 app.js에서 import해줄 수 있음

export default {
    template: '#search-form', //아이디 값이 search-form
    props: ['value'], //외부 데이터 가져올때 //부모값을 자식이 출력함(작동함)
    data(){
        return{ //객체를 리턴
            inputValue: this.value//데이터에서 리턴하는 변수, =>app.js의 query값
        }
    },

    methods:{
        onSubmit(){
            this.$emit('@submit', this.inputValue.trim()) //$emit():child->parent, 자식에서 이벤트 발생한걸 부모에게 알려준다.
        },

        onKeyup(){
            if (!this.inputValue.length) this.onReset()
            
        },

        onReset(){//inputValue를 빈문자열로 변환 후 @reset발생 알려줌
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}