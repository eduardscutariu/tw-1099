const isEven=num=>num%2===0;
const isOdd=num=>num%2===1;

const filter=(arr,callback)=>
{
    const filteredArray=[];

    for(const el of arr)
    {
        if(callback(el))
        {
            filteredArray.push(el);
        }
    }

    return filteredArray;
}

const numbers=[1,2,3,4,5,6,7,8,9];

console.log(filter(numbers,isEven));
console.log(filter(numbers,isOdd));