import View from './View.js'
//검색 결과를 보여주지 않아도됨. enter가 눌렸다는 것을 maincontroller에게 알려주고
//maincontroller가 그 검색 결과를 resultView에서 보여주는것.
const tag ='[FormView]' //디버깅태그를위해

const FormView = Object.create(View) //실제 뷰객체를 가져옴

FormView.setup = function (el){ //element를 가져와서 내부적으로 속성을 갖게끔
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true){
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function(){
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())//click이 발생하면 onClickRest이 호출
}

FormView.onKeyup = function(e){ //키가 눌릴때 마다 호출
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if(!this.inputEl.value.length) this.emit('@reset')
    if(e.keyCode !== enter) return 
    this.emit('@submit', {input: this.inputEl.value}) //enter키가 눌리면?
}

FormView.onClickReset = function(){
    this.emit('@reset') //x버튼이 눌리면? @rest을 위임
    this.showResetBtn(false) //x버튼 삭제
}

FormView.setValue = function (value = '') {
    this.inputEl.value = value
    this.showResetBtn(this.inputEl.value.length)
  }

export default FormView