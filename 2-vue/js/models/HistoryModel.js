export default { //검색히스토리 관장
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  list() {
    return Promise.resolve(this.data)
  }, //데이터 리턴, promise사용, 공통적으로 사용하기 위해 비동기로
  
  add(keyword = '') {//추가적인 키워드 받기, 새로운것만 추가하기
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}