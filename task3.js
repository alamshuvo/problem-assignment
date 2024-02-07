function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "“Invalid Array”";
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