import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'



const tag = '[Main Controller]'

export default{
    init(){
        FormView.setup(document.querySelector('form'))// index의 form부분을 el로 넘겨주기 때문
            .on('@submit', e => this.onSubmit(e.detail.input)) //Formview에서 setup에서 this를 리턴해줘야됨.
            //submit이벤트 발생했을때=>enter가 쳐졌을때 onSubmit가동
            .on('@reset', e => this.onResetForm())


        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))
            .on('@click', e => this.onClickKeyword(e.detail.keyword))

        HistoryView.setup(document.querySelector('#search-history'))
            .on('@click', e => this.onClickHistroy(e.detail.keyword))
            .on('@remove', e => this.onRemoveHistory(e.detail.keyword))


        ResultView.setup(document.querySelector('#search-result'))

        this.selectedTab = '최근 검색어'
        this.renderVeiw()
        //TabView.setActiveTab(this.selectedTab)
    },

    renderVeiw(){ //뷰들을 랜더한다
        console.log(tag, 'renderVeiw()')
        TabView.setActiveTab(this.selectedTab)

        if(this.selectedTab === '추천 검색어'){
           this.fetchSearchKeyword()
           HistoryView.hide()
        }else{
            this.fetchSearchHistory()
            KeywordView.hide()
        }

        ResultView.hide()
    },

    fetchSearchKeyword(){
        KeywordModel.list().then(data =>{
            KeywordView.render(data)
        })
    },

    fetchSearchHistory(){
        HistoryModel.list().then(data => {
            HistoryView.render(data).bindRemoveBtn()//rend함수 호출 다음에 돔이 생성, 그후 이벤트를 바인딩 할 수 있음
        })
    },

    search(query){
        FormView.setValue(query)
        //FormView.setValue(query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
              //search api통해서 데이터를 얻어오고
        //그데이터를 받아서 onSearchResult를 실행
        //this.onSearchResult([])
    },
    

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
        this.search(input)
        //검색을 위해 search함수 발생
    },

    onResetForm(){
        console.log(tag, 'onResetForm')
        //검색결과 숨기미
        this.renderVeiw()    
    },

    
    onSearchResult(data){
        //data를 받아서 render함수로 넘겨줌
        TabView.hide()
        KeywordView.hide()
        ResultView.render(data)
    },

    onChangeTab(tabName){
        debugger
    },

    onClickKeyword(keyword){
        this.search(keyword)
    },

    onClickHistroy(keyword){
        this.search(keyword)
    },

    onRemoveHistory(keyword){
        HistoryModel.remove(keyword)
        this.renderVeiw()
    }
}