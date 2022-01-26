// function dubblIt(num1){
//     return num1 * 2;
// }

// const result = dubblIt(5);
// console.log(result);



// const dubbleIt = function muFun(num){
//     return num * 2;
// }

// const result = dubbleIt(10);
// console.log(result);


const dubble = (num) => num * 2;

const addNum = (num,num2) => num + num2;
const bigMath = (num,num2) => {

    const multiply = num * num2;
    const differ = num - num2;

    const result = multiply + differ;
    return result;

}

const result2 = addNum(5,6);

const result3 = bigMath(50,6);


console.log(result3);