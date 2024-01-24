function isAnagram(str1, str2) {
    if(str1.length != str2.length) {return false;}
        str1 = str1.toLowerCase()
        str2 = str2.toLowerCase()
        console.log(str1 +"  "+ str2)
    while(str1 != ""){
      word = str1.charAt(0);
      flag = false;
      for(let j = 0; j< str2.length; j++){
        if(word == str2.charAt(j)){
            flag = true;
            // console.log(word)
            str2 = str2.replace(word, "");
            str1 = str1.replace(word, "")
            // console.log(str1 +"  "+ str2)
        }
        // 
      }
      if(flag == false){return false}
    }
    if(str1 == "" && str2 == ""){return true}
    // console.log(str1 +"  "+ str2)
    return false
  }

  console.log(isAnagram('School MASTER', 'The ClassROOM'))