import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'

new Vue({
    el: '#app',
    data: {
        query: '', //입력데이터를 받아서 저장 입력하게 되면 query랑 연결
                    //미리 설정되도 input 엘레벤트에 저장됨.
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [],
        searchResult: []
        
    },

    created(){
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
    },

    methods:{ //실제 돔과 바인딩 할 함수 정의 가능
        onSubmit(e){
            this.search()
        },

        onKeyup(e){
           if (!this.query.length)//입력값이 없을 경우,길이가 없당
            this.restForm()
        },
        onReset(e){ //따로 이벤트 안받아서 안에 e가 없음
           this.restForm() //여기서 this는 vue 인스턴스를 말함,따라서 data의 쿼리
        },

        onClickTab(tab){
            this.selectedTab = tab
        },

        onClickKeyword(keyword){
            this.query = keyword
            this.search()
        },

        fetchKeyword(){
            KeywordModel.list().then(data =>{
                this.keywords = data
            })
        },

        search(){
            SearchModel.list().then(data =>{ //data변수의 검색 결과가 올것
               this.submitted = true //실제 입력값이 있을때 true
                this.searchResult = data
            })
        },

        restForm(){
            this.query = '' 
            this.submitted = false
            this.searchResult = []
        }
       
        
    }
})