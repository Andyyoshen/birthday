// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送給我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心愛的思思",  // 同上...
        "今天是妳的生日",
        "這是我們認識的",
        "第二個生日哦",
        "對不起",
        "只能用這種方式幫妳慶祝",
        "而且自從當完兵",
        "我就一直在準備工作的事情",
        "都沒好好陪妳",
        "希望鼻鼻能諒解",
        "真開心鼻鼻的成績越來越好",
        "而且這次還通過!!",
        "師培!!讚啦~~",
        "要繼續保持喔。",
        "祝鼻鼻也能順利去實習~~",
        "時間過真快",
        "不知不覺交往一年多了",
        "還記得剛開始",
        "我們彼此都還很害羞",
        "可是經過一年的相處",
        "我們更了解彼此",
        "現在幾乎可以無話不談",
        "在未來的日子裡",
        "還要繼續跟我分享",
        "妳的酸甜苦辣喔~~",
        "最最最最最愛妳了鼻鼻~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心愛的思思": "./imgs/xiaokeai.png",
        "最最最最最愛妳了鼻鼻~~":"birthday/imgs/iandyou.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "開始",
        play: "音樂",
        bannar_coming: "顏色",
        balloons_flying: "好像少點東西?",
        cake_fadein: "蛋糕？",
        light_candle: "點蠟燭",
        wish_message: "生日快樂",
        story: "給妳的訊息",
    }
};
