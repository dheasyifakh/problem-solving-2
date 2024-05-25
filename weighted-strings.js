const weightedStrings = (s, queries) =>{
    //create variable and add a Set to collect the unique value
    const weight = new Set();
    //value with an empty string
    let curChar = '';
    let curWeight = 0;

    for (let i = 0; i < s.length; i++){
        //calculate the weight of the character
        const charWeight = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;

        //condition for the character
        if(s[i] !== curChar){
          //if character is different from curChar reset to the character
          curChar = s[i];
          //reset the curWeight to the charWeight
          curWeight = charWeight;
        }else{
            //character same with the curChar add the charweight to curWeight
            curWeight += charWeight;
        }
        weight.add(curWeight);
    }

    
    return queries.map(q =>weight.has(q) ? "Yes" : "No")
}

const s = "abbcccd";
const queries = [1,3,9,8];
const result =  weightedStrings(s,queries);

console.log(result);