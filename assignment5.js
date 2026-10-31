function rectangleArea(length=5,width=4){
    return length*width;
}
const arrowRectangleArea =(length =5,width=4)=>length *width;
console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${arrowRectangleArea(10,3)}`);
function demonstrateBlockScope(){
    if(true){
        let blockVar="blockVar exist only inside this block ";
        console.log(blockVar);
    }

}
demonstrateBlockScope();