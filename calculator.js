class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }

class Calculator {
    constructor(){
        this.total = 0;
    }
  
    add(num) {
      this.total += num
      return num
    }
    subtract(num){
        this.total -= num
      return this.total
    }
    multiply(num){
        this.total *= num
      return this.total
    }
    divide(num){
        this.total /= num;
      return this.total
    }
    clear(){
        this.total = 0
      return this.total
    }
    calculate(str){
        str = str.replaceAll(" ", "")
        let flag = this.check(str)
        if(flag) return this.solveExpression(str)
        else{
          // throw new Error('The second argument must be a number');
          return new Error("")
        } 
    }
//    1 --> 49,   9 --> 59   + --> 43   - ---> 45   * ---> 42  /--> 47  (--> 40  )-->41
    check(str){
        
        let size = str.length
        let brack = 0
        for(let i = 0; i< size; i++){
            if(str.charCodeAt(i)>= 48 || str.charCodeAt(i) <= 59 || str.charCodeAt(i) == 43 || str.charCodeAt(i) == 45
            || str.charCodeAt(i) == 42 || str.charCodeAt(i) == 47 || str.charCodeAt(i) == 40 || str.charCodeAt(i) == 41 ){
                if(str.charCodeAt(i) == 40)brack += 1
                if(str.charCodeAt(i) == 41)brack -= 1
            }
            else{
              return new Error("")
            }
        }
        if(brack != 0) return false
        return true
    }

    checkPrecedence(character){
        if(character == '*' || character == '/')return 2
        if(character == '+' || character == '-') return 1
        else return 0
    }
      
    solveExpression(str){
        let size = str.length;
        let numbers = []
        let operators = []
        let i = 0
        // console.log(str)

        while(i< size){
        let num = ""
        if((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 59) ){
            while((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 59) || str.charAt(i) == '.'){
            num += str.charAt(i)
            i += 1
            }
          
            numbers.push(parseFloat(num))
            // console.log(" num is  "+ num)
            // console.log(numbers)
            // console.log("number is " + num)
        }
        else if(str.charCodeAt(i) == 40){
            // console.log(" ( is "+ str.charAt(i))
            operators.push('(')
            i += 1
        }
        else if(str.charCodeAt(i) == 41){
            
            // console.log(" ) is "+ str.charAt(i))
            let count = 0
            while(true){
            if(count == 10) break
            let myopr = operators.pop()
            // console.log(operators)
            // console.log(myopr)
            if(myopr == '(')break
            let secondElem = numbers.pop()
            let firstElem = numbers.pop()
            // console.log("inside brackets " + firstElem + " " + myopr + " "+ secondElem)
            if(myopr == '+') numbers.push(firstElem + secondElem)
            else if(myopr == '-') numbers.push(firstElem - secondElem)
            else if(myopr == '*') numbers.push(firstElem * secondElem)
            else if(myopr == '/') numbers.push(firstElem / secondElem)
            // console.log(numbers[numbers.length-1])
            // break
            count += 1
            }
            i += 1
        }
        else{
            // console.log(" operand is "+ str.charAt(i))
            
            while(operators.length > 0 && this.checkPrecedence(str.charAt(i)) <= this.checkPrecedence(operators[operators.length-1])){
            // console.log(operators)
            let secondElem = numbers.pop()
            let firstElem = numbers.pop()
            let myopr = operators.pop()
            if(myopr == '+') numbers.push(firstElem + secondElem)
            else if(myopr == '-') numbers.push(firstElem - secondElem)
            else if(myopr == '*') numbers.push(firstElem * secondElem)
            else if(myopr == '/') numbers.push(firstElem / secondElem)
            }
            operators.push(str.charAt(i))

            // console.log(operators)
            i += 1
        }
        // console.log(" i is "+ i)
        
        }
        // console.log(numbers)
        // console.log(operators)
          while(true){
            if(numbers.length == 1) return numbers[0]
            let secondElem = numbers.pop()
            let firstElem = numbers.pop()
            let myopr = operators.pop()
            if(myopr == '+') numbers.push(firstElem + secondElem)
            else if(myopr == '-') numbers.push(firstElem - secondElem)
            else if(myopr == '*') numbers.push(firstElem * secondElem)
            else if(myopr == '/') numbers.push(firstElem / secondElem)
      
          }
        }
      
  }

  let ca = new Calculator();
  console.log(ca.add(-6))
  console.log(ca.multiply(-2))

//   console.log(ca.subtract(6))
  console.log(ca.calculate('(2.5 + 1.5) * 3'))
  