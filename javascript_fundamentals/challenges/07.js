const person1 = {
    name:'Susan',
    age: 24,
    status: 'resident'
}

const person2 = {
    name:'Anna',
    age: 17,
    status: 'tourist'
}

if(person1.age >= 18 && person1.status === 'resident'){
   console.log('you can cast a vote')
}
else{
    console.log('you are not eligible to vote')
}