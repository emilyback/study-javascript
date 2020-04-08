import MainController from './controllers/MainController.js'
//컨트롤러 가져오기

document.addEventListener('DOMContentLoaded', () => { //돔이 다 완성됬을때 maincontroller가 호출되는것
    MainController.init() 
})