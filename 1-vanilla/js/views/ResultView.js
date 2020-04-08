import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.massages = {
    NO_RESULT: '검색결과가 없습니다'
}

ResultView.setup = function(el)
{
    this.init(el)
}

ResultView.render =function(data = []){ //얘를 maincontroller가 호출을해줘야됨
    console.log(tag, 'render()', data) //검색 결과를 그림
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.massages.NO_RESULT
    this.show()
}

ResultView.getSearchResultsHtml = function(data){
    
    return data.reduce((html,item) =>{
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>' //Html 반환
}

ResultView.getSearchItemHtml = function(item){
    return `<li>
    <img src="${item.image}" />
    <p>${item.name}</p>
  </li>`
}

export default ResultView