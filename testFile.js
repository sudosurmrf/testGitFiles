class Numbers {
  constructor(data) {
    if (typeof data === "string") {
      this.data = str.split(',').map((number) => number * 1);
    }else {
      this.data = data;
    }
  }
  odds () {
    let oddNumbers = [];
    str.forEach(num => {
      if (num % 2!==0) {
        oddNumbers.push(num);
      }
    })
  }
  howMany(target){
    let howManyDup = {};
    this.data.forEach(num => howManyDup.num ? howManyDup[num]++ : howManyDup[num]=1);
    return howManyDup[target];
  }
}

const n1 = new Numbers(str);

console.log(n1.odds());


//this is for line one