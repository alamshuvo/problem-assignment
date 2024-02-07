/*function signature/sample */
function password(obj) {
   
    if (Object.keys(obj).length!==3) {
        return "invalid"
       }
       else if(toString(obj.birthYear).length!==4) {
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
console.log(password({ name: "kolimuddin", birthYear: 1994 , siteName: "google"}));