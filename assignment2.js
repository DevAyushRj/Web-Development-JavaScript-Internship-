const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter bill subtotal: ", (billInput)=> {
    rl.question("Enter tip percentage: ", (tipInput)=>{
        const subtotal=Number(billInput);
        const tipPercentage= Number(tipInput);
        if(billInput.trim()==="" ||tipInput.trim()===""||
           
           !Number.isFinite(subtotal)||!Number.isFinite(tipPercentage)||
           subtotal<0 ||tipPercentage<0) {

            console.log("Invalid input. Enter non-negative numbers.");
        } else {
            const calculatedTip=subtotal*(tipPercentage/100);
            let totalAmount =subtotal;
            totalAmount+=calculatedTip;
            console.log(`Subtotal: $${subtotal}`);
            console.log(`Tip Percentage: ${tipPercentage}%`);
            console.log(`Calculated Tip: $${calculatedTip}`);
            console.log(`Total Amount to Pay: $${totalAmount}`);
        }
        rl.close();
    });
  
});