//공통으로 사용되는 기능들을 모아 view로 만듬
const tag = '[View]'


export default {
  
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }, //특정 행동을 정의

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data }) 
    this.el.dispatchEvent(evt)
    return this
  },//스스로 이벤트를 반출하는 것

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}