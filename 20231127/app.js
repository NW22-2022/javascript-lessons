// Class構文
class Pokemon {
  // コンストラクター関数を実行
  constructor() {
    // 初期化処理
    // プロパティ
    this.name = "ピカチュー";
    this.level = 1;
    this.HP = 100;
    this.type = "電気";
    this.waza = ["電光石火", "かみなり", "10万ボルト", "アイアンテール"];
  }

  // メソッド
  sayGreed() {
    console.log(`僕は${this.type}タイプの${this.name}だよ。`);
  }

  setName(newName) {
    this.name = newName;
  }

  levelUp() {
    this.level++;
    console.log(`${this.name}はレベルが${this.level}になった`);
  }
}

// インスタンス化
const pika = new Pokemon();

pika.sayGreed();
pika.setName("ピカピカ");

pika.sayGreed();
pika.levelUp();
