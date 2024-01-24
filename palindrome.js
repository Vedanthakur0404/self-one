function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "")
    let size = str.length;
    let low = 0;
    let high = size-1
    while(low < high){
      
      
      while(low < high){
        if (str.charCodeAt(low) < 97 || str.charCodeAt(low) > 122 ) low += 1;
        else break;
      }
  
      while(low < high){
        if (str.charCodeAt(high) < 97 || str.charCodeAt(high) > 122 ) high -= 1;
        else break;
      }
    //   console.log(str.charAt(low) + " "+ str.charAt(high))
    if(str.charCodeAt(low) != str.charCodeAt(high)) return false;
    low += 1;
    high -= 1;

      
    }
    return true
  }

  console.log(isPalindrome("Able, was I ere I saw Elba!"))