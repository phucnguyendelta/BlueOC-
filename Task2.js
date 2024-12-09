// Sum of Top two Integer
let input =[1, 4, 2, 3, 5];
let i =2;
if(input[0] < input[1])
{
    let t1=input[0];
    let t2=input[1];
}
else
{
    let t1=input[1];
    let t2=input[0];
    
}
let t1=input[0];
let t2=input[1];
//gia sử t1 < t2
while(i<input.length)
{
    if(input[i] < t1)
    {
        continue;
        i++;
    }
    else
    {
        if(input[i] < t2)
        {
            t1=input[i];
            i++;
        }
        else
        {
            t1=t2;
            t2=input[i];
            i++;
        }
    }
}
console.log(t1+t2);