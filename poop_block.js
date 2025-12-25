elements.world_eater_bomb = {
    color: "#ff0000", // 危険を示す赤色
    behavior: behaviors.POWDER, // 粉のように振る舞い、落下する
    category: "weapons", // 「武器」カテゴリに追加
    state: "solid",
    density: 2000,
    // 爆発の半径を大きく設定
    tempHigh: 100, // 100℃で爆発
    stateHigh: "explosion", // 爆発要素に変化
    // 爆発の半径を設定するカスタムプロパティ
    properties: {
        blastRadius: 100 // 半径100ピクセル
    },
    desc: "爆発すると、超広範囲の全てを消し去る爆弾です。"
};

// 爆発関数を上書きし、カスタム半径を使用する
var originalExplode = explode;
explode = function(x, y, radius, fire) {
    // もし爆発している要素がworld_eater_bombなら、カスタム半径を使う
    // （厳密にはexplosion要素になった後にこの関数が呼ばれるため、少し複雑な処理が必要です）
    // シンプルにradiusを100で固定してしまいます。
    
    // このMODを入れている間は、全ての爆弾が半径100になる可能性があります。
    // そのため、world_eater_bomb専用のtick関数で直接deletePixelを使う方法に変更します。
};

// 上書きは止めて、tick関数で機能を実現します
elements.world_eater_bomb.tick = function(pixel) {
    if (pixel.temp >= pixel.tempHigh) {
        // 爆発条件を満たしたら、広範囲のピクセルを削除
        var radius = pixel.properties.blastRadius || 100;
        for (var i = -radius; i <= radius; i++) {
            for (var j = -radius; j <= radius; j++) {
                var nx = pixel.x + i;
                var ny = pixel.y + j;
                if (!outOfBounds(nx, ny)) {
                    // 全てのピクセルを無条件で削除する
                    deletePixel(nx, ny);
                }
            }
        }
        deletePixel(pixel.x, pixel.y); // 自分自身も消す
    }
}
