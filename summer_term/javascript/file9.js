const score = [2,1,7,5,3]
score.forEach((value,index,arr)=>{
    console.log(value)
})

console.log("=====")

score.map((value,index,arr)=>{
    console.log(value)
})

console.log("========")
const newScore = score.map((value,index,arr)=>{
    return  value
})

console.log(newScore)


console.log("========")
const newScore1 = score.map((value,index,arr)=>{
    return  value+5
})

console.log(newScore1)


console.log("========")
const newScore2 = score.map((value,index,arr)=>{
    return  value > 2
})

console.log(newScore2)


console.log("========")
const newScore3 = score.filter((value)=>{
    return  value > 2
})

console.log(newScore3)


console.log("========")
const newScore4 = score.find((value)=>{
    return  value > 2
})

console.log(newScore4)



console.log("========")
const newScore5 = score.reduce((sum,value)=>{
    return  sum + value
})

console.log(newScore5)



console.log("========")
const newScore6 = score.reduce((sum,value)=> sum + value)

console.log(newScore6)















