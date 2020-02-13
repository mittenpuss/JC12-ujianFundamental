
//cari faktorial, if(5)=5x4x3x2x1=120

const factorial=(input)=>{
    var output=[]
    for(i=input;i>0;i--){
        output.push(i)
    }

    var hasil= output.reduce((a,b)=>{
        return a*b
    })

    return hasil


}

console.log(factorial(5)) //120
console.log(factorial(4)) //24
console.log(factorial(10)) //3628800
console.log(factorial(6)) //720
console.log(factorial(2)) //2