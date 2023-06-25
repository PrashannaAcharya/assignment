const arr = [2, 5, 6, 7]
//calculate the sum of the array using either for of for in
//high level
const users = ['hari', 'shyam', 'hari']
//remove from array if duplicate
const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside the nested array


// q1

const a=[2,5,6,7]
let sum=0;
for (let index in a) {
  sum += a[index];
}

console.log(sum)

//  q2

const removeDupe = [...new Set(users)];
console.log(removeDupe);


// q3
const newArr=[[4,5],[5,7],[7,2]]
let sum2=0
for (i=0;i<newArr.length;i++){
  if(newArr[i]%2!=0){
    sum2= newArr[0][1]+newArr[1][0]+newArr[1][1]+newArr[2][0]
  }
}
    console.log(sum2)

    // q4

    const myDetails = [
        {id:3, name: 'hari'},
        {id:5, name: 'shyam'},
        {id:6, name: 'gopal'},
      ]
      
      // return only array of ids: expected output  [3,5,6]
      
      myDetails.map((item)=>{
        return item.id
      })

    //   q5
    const userDetails= [
        {score: 0, name:'hari', marks: [10,3,23]},
        {score: 0, name:'shyam', marks: [50,23,23]},
        {score: 0, name:'shyam',marks: [20,13,43]},
      ]
      //loop over the arr of objects and calculate total score, expected output is:
      
      // [
      //     {score: 36, name:'hari', marks: [10,3,23]},
      //     {score: 96, name:'shyam', marks: [50,23,23]},
      //     {score: 76, name:'shyam',marks: [20,13,43]},
      // ]
      
      userDetails.map((item)=>{
      let sum5 = 0
      item.marks.map((value)=>{
        sum5 = sum5 + value
      })
      item.score = sum5
      return item
      
      })