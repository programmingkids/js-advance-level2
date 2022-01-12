// Mapをfor-of文で利用

// 空のMapの作成
const map = new Map();

// Mapに要素追加
map.set('name', 'Bob');
map.set('age', 15);
map.set('hobby', 'music');

// Mapをfor-of文で処理
for( const [key, value] of map ) {
    console.log( `${key} ==> ${value}` );
}
