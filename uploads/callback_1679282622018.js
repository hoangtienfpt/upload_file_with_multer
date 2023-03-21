function sumCb(a, b) {
    return a+b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

function subCb(a , b){
return a-b;
}
function multiCb(a , b){
    return a*b
}
function divCb(a , b){
return a/b
}
// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
Array.prototype.map2 = function(callback){
    var arrayLength = this.length , oupush = []
    for(let i = 0 ; i <arrayLength ; i++){
        var result  = callback(this[i] , i);
            oupush.push(result)
    }
    return oupush;
}
 var  arr = [
    "javascript" , 
    "Ruby" , 
    "php"
 ]

 var  htmls = arr.map2(function (arrs){
    return arrs;
 })
 console.log(htmls)

 //======================
 Array.prototype.myMap = function(cb) {
    var arrayLength = this.length , output = []
    for(var i = 0 ; i < arrayLength ; i ++){
        var result = cb(this[i] , i)
        output.push(result)
    }
    return output
}

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]






