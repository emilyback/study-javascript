import FormView from '../views/FormView.js'

const tag = '[Main Controller]'

export default{
    init(){
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))// index의 form부분을 el로 넘겨주기 때문
    }
}