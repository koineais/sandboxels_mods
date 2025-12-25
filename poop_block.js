// 生肉の定義
elements.raw_meat = {
    color: "#ff5555", // 生肉らしい赤色
    behavior: behaviors.POWDER, // 粉のように振る舞う
    category: "food", // 「食物」カテゴリに追加
    state: "solid",
    density: 1000,
    tempHigh: 150, // 150℃以上で焼き肉に変化
    tempLow: -10,
    stateHigh: "cooked_meat", // 高温になると焼き肉に変化
    desc: "生肉です。加熱すると食べられます。"
};

// 焼き肉の定義
elements.cooked_meat = {
    color: "#aa5533", // 焼けた茶色
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 1100,
    tempHigh: 250, // 250℃以上で焦げるかも
    tempLow: -10,
    desc: "焼けた肉です。美味しそうです。"
};
