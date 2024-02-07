function checkName(name) {
    if (typeof name !=="string") {
        return "invalid"
    }
    else{
        const checkChar=["A", "y", "i" , "e" , "o" , "u", "w"];
        const lowerName=name.toLowerCase();
            if (checkChar.includes((lowerName.charAt(lowerName.length-1)))) {
                return "Good Name";
            }
            else{
                return "Bad Name";
            }
    }
    }