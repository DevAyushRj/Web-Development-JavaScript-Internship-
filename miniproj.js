const readline =require("readline");
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("--- Initializing Inventory System ---");
const inventory=[
    { name: "Laptop", price: 800 },
    { name:"Mouse", price: 25 }
];
rl.question("Enter new product name: ", (newProductNameInput) => {
    rl.question("Enter new product price: ", (newProductPriceInput) => {
        if(newProductNameInput.trim()==="" || newProductPriceInput.trim()==="" ||
           !Number.isFinite(Number(newProductPriceInput)) ||
           Number(newProductPriceInput)<0) {

            console.log("Invalid input. No product was added.");
        } else {

            const newProduct={
                name: newProductNameInput.trim(),
                price:Number(newProductPriceInput)
            };

            inventory.push(newProduct);
            function calculateTotalValue(items,taxRate=0){
                const subtotal=items.reduce((sum,item)=>sum+item.price,0);
                return subtotal+subtotal*taxRate;
            }

            const getCategory=(price)=>{
                if(price<50){
                    return "Budget";
                } else if(price>=500){
                    return "Premium";
                } else{
                    return "Standard";
                }
            };

            const getCategoryBadge=(category)=>{
                switch(category){
                    case "Budget": return "[BUDGET]";
                    case "Standard": return "[STANDARD]";
                    case "Premium": return "[PREMIUM]";
                    default: return "[UNCATEGORIZED]";
                }
            };

            console.log("\n--- Processing Inventory Roster (forEach) ---");

            inventory.forEach((item)=>{
                if(!Number.isFinite(item.price) || item.price<0){
                    console.log(`Skipping invalid item: ${item.name}`);
                    return;
                }

                if(item.name.toLowerCase()==="stop") return;
                const category=getCategory(item.price);
                console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category} ${getCategoryBadge(category)}`);
            });
            console.log("\n--- Financial Analytics ---");
            console.log(`Total Inventory Value: $${calculateTotalValue(inventory)}`);

            const affordableItems=inventory.filter((item)=>item.price<200);
            console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems.map(item=>item.name))}`);
            const formattedReport=inventory.map(
                (item)=>`${item.name.toUpperCase()}: $${item.price}`
            );
            console.log(`Formatted Report List: ${JSON.stringify(formattedReport)}`);
            const applyDiscount=(price,discountRate=0)=>{
                const discount=price*discountRate;
                return price-discount;
            };
            console.log(`Example price after 10% discount on Monitor: $${applyDiscount(newProduct.price,0.10)}`);
        }


        rl.close();
    });
});