import fs from 'fs';

fs.readFile('./hello.txt',(err,data) => {
    if(err){
        console.log('err');
    }
    console.log(data.toString());
}) 