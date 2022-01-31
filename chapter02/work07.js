// call
// thisの取り扱いの問題点
// オブジェクトとメソッドの定義
const person = {
    name : 'Bob',
    sayName: function(message) {
        // thisは呼び出し元によって異なる
        console.log(`${message}, ${this.name}`);
    }
};

// sayNameメソッドはpersonオブジェクトに所属する
// thisはpersonオブジェクト
// Hello, Bob


// person.sayNameをsay変数に代入する


// callを利用してthisの値を指定する
// Hello, Bob

