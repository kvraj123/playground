let radius = [2,3,4,5]

function calculateArea(radius,area) {
    let output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(area(radius[i]))
    }
    console.log(output)
}

function logic(b) {
    return 2 * b
}

calculateArea(radius,logic)