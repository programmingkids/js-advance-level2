// メソッドのオーバーライド
// Monsterクラスの定義
class Monster {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    
    attack() {
        console.log(this.name + "は攻撃した");
    }
    
    showHp() {
        console.log(this.name + "のHPは" + this.hp);
    }
}

// Dragonクラスの定義
class Dragon extends Monster {
    // メソッドのオーバーライド
    
}

// DarkKnightクラスの定義
class DarkKnight extends Monster {
    // メソッドのオーバーライド
    
}

// dragonオブジェクトの作成


// オーバーライドしたメソッドの呼び出し


console.log("----");

// darkknightオブジェクトの作成


// オーバーライドしたメソッドの呼び出し

