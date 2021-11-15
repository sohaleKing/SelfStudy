let name ="Soheyl";
let i = 0;
let printName = () => {
    console.log(`printing ${name}'s name for the ${++i} time`)
    setTimeout(printName, 2000)
}
printName()