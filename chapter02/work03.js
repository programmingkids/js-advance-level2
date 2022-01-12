// 即時実行関数

// 無名関数の宣言と実行を同時に行う
(function(){
    // Hello, John
    const name = 'John';
    console.log(`Hello, ${name}`);
})();

// 無名関数の宣言と実行を同時に行う
(function(num1, num2){
    // 15
    console.log( num1 * num2 );
})(5, 3);
