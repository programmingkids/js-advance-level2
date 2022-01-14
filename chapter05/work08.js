// Setの要素追加と削除
// 空のSetの作成
const fruits = new Set();

// 要素の追加
fruits.add('Apple');
fruits.add('Orange');
fruits.add('Melon');

// 重複した要素は追加しない
fruits.add('Orange');
fruits.add('Melon');

// 要素の表示
console.log(fruits);

// 要素の削除
fruits.delete('Apple');
fruits.delete('Melon');

// 要素の表示
console.log(fruits);
