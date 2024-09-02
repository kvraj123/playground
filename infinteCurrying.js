// add(2)(3)(5)()

function addInfinte(a) {
    return function(b) {
        if(b) return addInfinte(a+b) 
        return a;
    }
}

console.log(addInfinte(2)(2)(3)());