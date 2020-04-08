import View from './View.js'
//입력값을 받아서 보여줄 랜더함수 필요

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el)
{
    this.init(el)
}

KeywordView.render = function(data = []){
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천검색어가 없습니다'
    //데이터가 있을경우,없을경우
    this.show() //실제 출력
}

KeywordView.getKeywordsHtml = function (data){
    return data.reduce((html, item, index)=> { 
    html += `<li>
    <span class="number">${index + 1}</span>
    ${item.keyword}
    </li>`
    return html
    }, '<ul class="list">') + '</ul>'
}

export default KeywordView