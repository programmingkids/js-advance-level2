// MapのforEachメソッド
// 空のMapの作成
const map = new Map();

// Mapに要素追加
map.set('name', 'Bob');
map.set('age', 15);
map.set('hobby', 'music');

// forEachメソッドによる繰り返し処理
map.forEach((value, key) => {
    console.log( `${key} ==> ${value}` );
});
