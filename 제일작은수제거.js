function solution(n){
    console.log('제일작은수는'+this.number+'입니다')
}
let A = {number:Math.min(1,2,3,4)}
solution.apply(A)

function solution2(i){
    let min = Math.min(...i)
    let arr = i.filter(v=>v !== min)
    return arr.length ? arr : -1;
}
console.log(solution2([1,2]))