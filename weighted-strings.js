const weightedStrings = (s, queries) =>{
    //varibale bobot dengan Set ke store 
    const weight = new Set();
    //variable dengan string kosong
    let curChar = '';
    let curWeight = 0;

    for (let i = 0; i < s.length; i++){
        //kalkulasikan bobot dari karakter string yang diinput
        const charWeight = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;

        //kondisi looping untuk karakter
        if(s[i] !== curChar){
          //jika karakter tidak sesuai dengan variabel curChar maka reset menjadi karakter
          curChar = s[i];
          curWeight = charWeight;
        }else{
            curWeight += charWeight;
        }

        weight.add(curWeight);
    }

    //kondisi jika angka queries string sesuai dengan bobot karakter/substring maka return YES jika tidak maka return No
    return queries.map(q =>weight.has(q) ? "Yes" : "No")
}

const s = "abbcccd";
const queries = [1,3,9,8];
const result =  weightedStrings(s,queries);

console.log(result);