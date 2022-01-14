// SetのforEachメソッド
// 空のSetの作成
const fruits = new Set();

// 要素の追加
fruits.add('Apple');
fruits.add('Orange');
fruits.add('Melon');

// forEachメソッドによる繰り返し処理
fruits.forEach(value => {
    console.log( value );
});
