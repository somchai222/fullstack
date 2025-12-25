const names =["justin",'Sarah', 'Chiristopher'];

for (let i = 0; i< names.length; i++);{
    console.log(names[i]);
}

names.forEach(names =>{
    console.log(names)
})

names.forEach(myFunction);

function myFunction(names){
    console.log(names)
}

for(let name of names){
    console.log(name)
}
