class MyPromise {
  constructor(initialStr) {
    this.cbList = [initialStr];
    setTimeout(() => {
      console.log(this.cbList.reduce((acc, cur) => cur(acc)));
    }, 0)
  }

  then(cb) {
    this.cbList.push(cb);
    return this;
  }
}

console.log("start");

new MyPromise('hello')
  .then((v) => v + ' world')
  .then((v) => v + ' and crong');

console.log("end");
