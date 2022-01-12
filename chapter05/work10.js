// Setをfor-of文で利用

// 空のSetの作成
const fruits = new Set();

// 要素の追加
fruits.add('Apple');
fruits.add('Orange');
fruits.add('Melon');

// Setをfor-of文で処理
for( const value of fruits ) {
    console.log( value );
}
