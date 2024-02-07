function monthlySavings(arr , livingCost) {
   if (!Array.isArray(arr) || typeof livingCost!=="number") {
    return '“invalid input”';
   }
   else{
    let sumDiscount=0;
    let totalEarn=0;
    for (let i = 0; i <arr.length; i++) {
        const element = arr[i];
        totalEarn+=element;
        if (element>=3000) {
            const cutArr=(element*20/100);
            sumDiscount+=cutArr;   
        }  
    }
    const saving=totalEarn-(sumDiscount+livingCost);
    if (saving>=0) {
        return saving;
    }
    else{
        return '“earn more”'
    }
   }
    }