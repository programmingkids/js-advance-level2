// Mapのvaluesメソッド

// 空のMapの作成
const map = new Map();

// Mapに要素追加
map.set('name', 'Bob');
map.set('age', 15);
map.set('hobby', 'music');

// valuesメソッドにより値を配列で取得
const values = map.values();

for ( const value of values ) {
    console.log( value );
}
