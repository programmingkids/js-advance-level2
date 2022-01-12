// ブロックスコープ

// ブロックスコープの変数
{
    const name = "John";
    console.log(`Hello, ${name}`);
}

// ブロックスコープの変数をスコープの外側から利用するとエラー
// ReferenceError: name is not defined
console.log(`Hello, ${name}`);
