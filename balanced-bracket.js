const balancedBracked = (s) =>{
    //menggunakan Stack untuk menyinpan string atau karakter
    let stack = [];

    //Membuat object match braket dengan karakter yang diinput
    const matchBracket = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    


    for(let char of s){
      //Cek kondisi karakter dengan opening braket
      if(char === '(' || char === '{' || char === '['){
        //push opening bracket ke dalam stack
        stack.push(char);
      }else if(char === ')' || char === '}' || char === ']'){
        //cek jika stack kosong atau cek stack pop match dengan opening braket
        if(stack.length === 0 || stack.pop() !== matchBracket[char]){
            //maka return NO
            return 'NO';
        }
      }
    };

    //Cek jika stack kosong maka bracket balanced
    return stack.length === 0 ? "YES" : "NO";
}
const s = "{ [ ( ) ] }"
console.log(balancedBracked(s));
console.log(balancedBracked("{ [ ( ] ) }"));