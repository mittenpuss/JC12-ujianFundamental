
//diketahui koin sen pecahan [25,10,5,1], cari butuh berapa koin

const cekkoin=(input)=>{
    var koin=[25,10,5,1]
    var jmlkoin=0
    var sisakoin=input

    for(i=0;i<=koin.length-1;i++){
        
        while(sisakoin>=koin[i]){
            sisakoin-=koin[i]
            jmlkoin++
        }

    }
    return jmlkoin

}

console.log(cekkoin(49)) //7
console.log(cekkoin(31)) //3
console.log(cekkoin(50)) //2
console.log(cekkoin(25)) //1
console.log(cekkoin(20)) //2
console.log(cekkoin(4)) //4