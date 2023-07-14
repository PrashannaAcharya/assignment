//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['hari','shyam','thakur']
console.log(allUsers.includes(name))



//q2

const user="hari"
const userArr=['hari','ram','shyam','thakur','hari']
count=0;
userArr.forEach(element=>{
  if (element==user)
  {
    count++;
  }
})
