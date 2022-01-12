// Mapのkeysメソッド

// 空のMapの作成
const map = new Map();

// Mapに要素追加
map.set('name', 'Bob');
map.set('age', 15);
map.set('hobby', 'music');

// keysメソッドによりキーを配列で取得
const keys = map.keys();

for( const key of keys ) {
    console.log( key );
}
