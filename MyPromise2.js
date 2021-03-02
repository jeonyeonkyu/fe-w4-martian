// 내가 만든 Promise
class MyPromise {
  constructor(callback) {
    callback(this.resolve, this.reject);
  }

  then(callback) {
    return this;
  }

  resolve(data) {

  }

  reject(data) {

  }
}

const callback = (resolve, reject) => {
  setTimeout(() => resolve('completed'), 1000);
}

//MyPromise 를 사용하기
const p = new MyPromise(callback);
p.then((res) => console.log(res));

console.log(p.data);