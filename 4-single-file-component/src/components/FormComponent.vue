<template>
    <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
    <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>
</template>


<script>
export default {
    props: ['value'], //외부 데이터 가져올때 //부모값을 자식이 출력함(작동함)
    data(){
        return{ //객체를 리턴
            inputValue: this.value//데이터에서 리턴하는 변수, =>app.js의 query값
        }
    },

    watch:{ //어떤 뷰모델을 감시하다 변경되면 행동
        value(newVal, oldVal){
            this.inputValue = newVal
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
</script>

