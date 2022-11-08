async function getSum(arr){
    if (arr instanceof Array){
        let max = arr[0];
        for (let i = 0 ; i < arr.length; i ++){
            arr[i] > max;
            max = arr[i];
        }
        return max;
    }
    throw new Error("Input data is incorrect");
}
async function f(){
    try{
        let result = await getSum([3,4,5]);
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
}
f();