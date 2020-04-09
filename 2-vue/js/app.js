new Vue({
    el: '#app',
    data: {
        query: '' //입력데이터를 받아서 저장 입력하게 되면 query랑 연결
                    //미리 설정되도 input 엘레벤트에 저장됨.
    },
    methods:{ //실제 돔과 바인딩 할 함수 정의 가능
        onSubmit(e){
            debugger
        },

        onKeyup(){
           if (!this.query.length)//입력값이 없을 경우,길이가 없당
            this.onReset()
        },

        onReset(){ //따로 이벤트 안받아서 안에 e가 없음
            this.query = '' //여기서 this는 vue 인스턴스를 말함,따라서 data의 쿼리
            //todo 검색결과를 숨기는...
            debugger
        }
       
        
    }
})