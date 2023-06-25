//calculate the percentage he scored in the exams out of total 150 score
const obj = {
    computer: 42,
    maths: 42,
    science: 50,
  };
  let sum = 0;
  for (i in obj) {
    sum = sum + obj[i];
  }
  let percent = (sum * 100) / 150;
  let p = percent.toFixed(2);
  console.log(p);