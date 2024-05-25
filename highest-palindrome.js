const highestPalindrome = (s,k) => {

    const createPalindrome = (str, left, right, k) => {
        if (left >= right) return { str, k };
        
        if (str[left] === str[right]) {
            return createPalindrome(str, left + 1, right - 1, k);
        }

        if (k > 0) {
            if (str[left] > str[right]) {
                str[right] = str[left];
            } else {
                str[left] = str[right];
            }
            return createPalindrome(str, left + 1, right - 1, k - 1);
        }

        return { str, k: -1 };
    }

    const maxPalindrome = (str, left, right, k) =>{
        if (left >= right) return str;
        
        if (str[left] !== '9') {
            if (k >= 2 && str[left] === str[right]) {
                str[left] = str[right] = '9';
                k -= 2;
            } else if (k >= 1 && str[left] !== str[right]) {
                str[left] = str[right] = '9';
                k -= 1;
            }
        }

        return maxPalindrome(str, left + 1, right - 1, k);
    }

    let arr = s.split('');

    let { str: palindromeArr, k: remainingReplacements } = createPalindrome(arr, 0, arr.length - 1, k);

    if (remainingReplacements === -1) return -1;

    let highestArr = maxPalindrome(palindromeArr, 0, palindromeArr.length - 1, remainingReplacements);

    return highestArr.join('');
}

// Contoh penggunaan
console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299
