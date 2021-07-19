function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {  
  return Function(`return ${expr}`)()
}

module.exports = {
    expressionCalculator
}