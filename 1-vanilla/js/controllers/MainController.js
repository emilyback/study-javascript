import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'


import SearchModel from '../models/SearchModel.js'

const tag = '[Main Controller]'

export default{
    init(){
        FormView.setup(document.querySelector('form'))// index의 form부분을 el로 넘겨주기 때문
        .on('@submit', e => this.onSubmit(e.detail.input)) //Formview에서 setup에서 this를 리턴해줘야됨
        //submit이벤트 발생했을때=>enter가 쳐졌을때 onSubmit가동
        .on('@reset', e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))
    },

    search(query){
        FormView.setValue(query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
              //search api통해서 데이터를 얻어오고
        //그데이터를 받아서 onSearchResult를 실행
        this.onSearchResult([])
    },
    

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
        this.search(input)
        //검색을 위해 search함수 발생
    },

    onResetForm(){
        console.log(tag, 'onResetForm')
        //검색결과 숨기미
        ResultView.hide()
    },

    
    onSearchResult(data){
        //data를 받아서 render함수로 넘겨줌
        ResultView.render(data)
    }

}