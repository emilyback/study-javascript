import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function(el)
{
    this.init(el)
}

ResultView.render =function(data = []){ //얘를 maincontroller가 호출을해줘야됨
    console.log(tag, 'render()', data) //검색 결과를 그림
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색결과가 없습니다.'

}

ResultView.getSearchResultsHtml = function(data){
    debugger
}

export default ResultView