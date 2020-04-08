import View from './View.js'

const tag ='[FormView]' //디버깅태그를위해

const FormView = Object.create(View) //실제 뷰객체를 가져옴

FormView.setup = function (el){ //element를 가져와서 내부적으로 속성을 갖게끔
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
}

FormView.showResetBtn = function(show = true){
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function(){
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function(){ //키가 눌릴때 마다 호출
    this.showResetBtn(this.inputEl.value.length)
}

export default FormView