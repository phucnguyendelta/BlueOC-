// The most frequent string lengths
let input =['a', 'ab', 'abc', 'cd', 'def', 'gh'];
dic ={};
let max=1;
let stt1;
for (let i = 0; i < input.length; i++) {
    stt = input[i].length;
    if(!dic[stt])
    {
    dic[stt]=[]+[input[i]];
    }
    else
    {
        dic[stt]+= [input[i]]
        if(max <= dic[stt].length)
            {
                max= dic[stt].length;
                stt1=stt;
            }
    }
    
}
console.log(dic[stt1]);