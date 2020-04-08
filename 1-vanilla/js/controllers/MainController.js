import FormView from '../views/FormView.js'

const tag = '[Main Controller]'

export default{
    init(){
        FormView.setup(document.querySelector('form'))// index의 form부분을 el로 넘겨주기 때문
        .on('@submit', e => this.onSubmit(e.detail.input)) //Formview에서 setup에서 this를 리턴해줘야됨
        .on('@reset', e => this.onResetForm())
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
    },

    onResetForm(){
        console.log(tag, 'onResetForm')
    }
}