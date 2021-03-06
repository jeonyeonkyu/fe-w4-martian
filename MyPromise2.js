// 내가 만든 Promise
class MyPromise {
  constructor(callback) {
    this.cbList = [];
    callback(this.resolve.bind(this));
  }

  then(callback) {
    this.cbList.push(callback);
    return this;
  }

  resolve(data) {
    setTimeout(() => this.cbList.reduce((acc, cur) => cur(acc), data), 0);
  }
}

//MyPromise 를 사용하기
const p = new MyPromise((resolve) => {
  setTimeout(() => resolve('completed'), 1000);
});

p.then((res) => console.log(res));