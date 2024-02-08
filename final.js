function calculateMoney(ticketSale) {
    if (ticketSale<=0) {
        return 'Invalid Number';
    }
    else{
        const perTicketSale=120;
        const guardCost=500;
        const stufLunchCost=50*8;
        const ticketSaleEarn=perTicketSale*ticketSale;
        const ticketSaleCost=guardCost+stufLunchCost;
        const ticketSaleProfitOrLoss=ticketSaleEarn-ticketSaleCost;
        return ticketSaleProfitOrLoss;
    }
    }

 function checkName(name) {
        if (typeof name !=="string") {
            return "invalid";
        }
        else{
            const checkChar=["a", "y", "i" , "e" , "o" , "u", "w"];
            const lowerName=name.toLowerCase();
                if (checkChar.includes((lowerName.charAt(lowerName.length-1)))) {
                    return "Good Name";
                }
                else{
                    return "Bad Name";
                }
        }
     }


 function deleteInvalids(array) {
        if (!Array.isArray(array)) {
            return "Invalid Array";
        }
        else{
            let finalArray=[];
           for (let i = 0; i<array.length; i++) {
            const element = array[i];
            if (typeof element==="number" && !isNaN(element)) {
                finalArray.push(element)
            } 
           }
           return finalArray;
        }
    }


 function password(obj) {
        if (Object.keys(obj).length!==3) {
            return "invalid"
           }
           else if(obj.birthYear.toString().length<4) {
             return "invalid"
           }
           else
           {   
           const fullChar=obj["siteName"];
           const lastOthersChar =fullChar.slice(1);
           const firstWord=fullChar.slice(0,1);
           const upperCase=firstWord.toUpperCase();
           const concat=upperCase+lastOthersChar;
           const finalPass=`${concat}#${obj.name}@${obj.birthYear}`;
           return finalPass;
        }
  }

 function monthlySavings(arr , livingCost) {
    if (!Array.isArray(arr) || typeof livingCost!=="number") {
     return 'invalid input';
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
         return 'earn more';
     }
    }
    }