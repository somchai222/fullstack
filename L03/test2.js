let values1 = ['Apple', 1, false]
let values2 = ['fries', 2 ,1, true, 'Apple'];
let values3 = ['Mars', 9,1, 'Apple']
let result =[]
for (let item of values1){
    if(values2.includes(item)&&values3.includes(item)){
        result.push(item)
    }
}
console.log(result)