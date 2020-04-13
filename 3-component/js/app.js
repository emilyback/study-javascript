import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './component/FormComponent.js'
import ResultComponent from './component/ResultComponent.js'
import ListComponent from './component/ListComponent.js'

new Vue({
  el: '#app',
  data: {
    query: '', //폼이 관리 보다는 폼의 상위가 관리하는것이 좋음, vue인스턴스인 app의 query
    submitted: false,
    tabs: ['추천 검색어', '최근 검색어'],
    selectedTab: '',
    keywords: [],
    history: [],
    searchResult: []
  },

  components:{
    'search-form' : FormComponent, //뷰 인스턴스에 사용할 컴포넌트를 설정하는 부분, 실제 사용시엔 search-form 사용(index.html에서)
    'search-result' : ResultComponent,
    'list': ListComponent
  },


  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },


  methods: {
    onSubmit(query) { //inputValue가 query로 넘어옴
      this.query = query //app의 query값을 query로 할당
      this.search()
    },
    onReset(e) {
      this.resetForm()
    },
    onClickTab(tab) {
      this.selectedTab = tab
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search()
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    resetForm() {
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
})