const operar=(a, b, cb)=>{   // cb es callback function
    return cb(a, b)          
}


// (5x4 + 3X2)/10 + 100 = 102,6
let resultado=operar(100, 0, (a, b)=>{
    return a +operar(10, 0, (a, b)=>{
        return operar(3, 2, (a, b)=>{
            return operar(5, 4, (a, b)=>{
                return a*b
            }) + a*b
        }
    ) / a
    })
} )

console.log(resultado)