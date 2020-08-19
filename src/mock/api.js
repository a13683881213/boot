import Mock from 'mockjs'

Mock.mock('/api/user/img', {
    "status": 0,
    "data": [{
        "id": 30,
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
        "title": "故宫",
        "desc": "东方宫殿建筑代表，世界宫殿建筑典范",
        "price": 579
    }, {
        "id": 31,
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
        "title": "南山滑雪场",
        "desc": "北京专业级滑雪圣地",
        "price": 1299
    }, {
        "id": 32,
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
        "title": "天安门广场",
        "desc": "我爱北京天安门，天安门上太阳升",
        "price": 2599

    }, {
        "id": 33,
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
        "title": "水立方",
        "desc": "中国的荣耀，阳光下的晶莹水滴",
        "price": 2599
    }]
});
Mock.mock('/api/user/img3', {
    "status": 0,
    "data": [{
        "id": 34,
        "imgUrl": "/imgs/yihe.jpg",
        "title": "颐和园",
        "desc": "画家园林,令人向往",
        "price": 3699

    }, {
        "id": 35,
        "imgUrl": "/imgs/ruishi.jpg",
        "title": "瑞士",
        "desc": "欧洲屋脊",
        "price": 19999

    }, {
        "id": 36,
        "imgUrl": "/imgs/erhai.jpg",
        "title": "大理洱海",
        "desc": "海非海，湖非湖",
        "price": 1399

    }, {
        "id": 37,
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "title": "北京博物馆",
        "desc": "周末干嘛？北京博物馆开放啦",
        "price": 999
    }, ]
})
Mock.mock('/api/user/30', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
            "title": "故宫",
            "desc": "细数北京温泉，温暖你的冬天",
            "num": 30
        }]
    }),
    Mock.mock('/api/user/31', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
            "title": "南山滑雪场",
            "desc": "细数北京温泉，温暖你的冬天",
            "price": 2599
        }]
    }),
    Mock.mock('/api/user/32', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
            "title": "天安门广场",
            "desc": "细数北京温泉，温暖你的冬天"
        }]
    }),
    Mock.mock('/api/user/33', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
            "title": "水立方",
            "desc": "细数北京温泉，温暖你的冬天"
        }]
    }),
    Mock.mock('/api/user/34', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/source/1505/f9/6c5f9e716da18.jpg_r_640x214_7318f89b.jpg",
            "title": "颐和园",
            "desc": "细数颐和园，温暖你的冬天"
        }]
    }),
    Mock.mock('/api/user/35', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
            "title": "温都水城养生馆",
            "desc": "细数北京温泉，温暖你的冬天"
        }]
    }),
    Mock.mock('/api/user/36', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
            "title": "寻找北京的皇城范儿",
            "desc": "细数北京温泉，温暖你的冬天"
        }]
    }),

    Mock.mock('/api/user/37', {
        "status": 0,
        "data": [{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
            "title": "学生最爱的博物馆",
            "desc": "细数北京温泉，温暖你的冬天"
        }]
    }),

    Mock.mock('/api/chanpin/35', {
        "status": 0,
        "data": {
            'name': '',
            'address': '云南 昆明',
            'detail': '0自费🔥五星温泉+豪华海景丨敞篷吉普环海+私人游艇+动车返昆+雪山大索道',
            'detail2': '【精选酒店】 昆明五星温泉酒店+大理豪华海景酒店',
            'detail3': '【贴心赠送】 动车返昆+拉市海骑马+丽水金沙+雪山衣氧',
            'detail4': '【超值优惠】 双人立减，家庭出游儿童，老人享免单',
            'img1': '/imgs/detail/厦门/xia1.jpg',
            'img2': '/imgs/detail/厦门/xia2.jpg',
            'img3': '/imgs/detail/厦门/xia3.jpg',
            'img4': '/imgs/detail/厦门/xia4.jpg',
        }
    })


Mock.mock('/api/chanpin/45', {
    "status": 0,
    "data": {
        'name': '水墨之滇-云裳南游',
        'address': '云南 昆明',
        'detail': '0自费🔥五星温泉+豪华海景丨敞篷吉普环海+私人游艇+动车返昆+雪山大索道',
        'detail2': '【精选酒店】 昆明五星温泉酒店+大理豪华海景酒店',
        'detail3': '【贴心赠送】 动车返昆+拉市海骑马+丽水金沙+雪山衣氧',
        'detail4': '【超值优惠】 双人立减，家庭出游儿童，老人享免单',
        'img1': '/imgs/detail/云南1.jpg',
        'img2': '/imgs/detail/云南2.jpg',
        'img3': '/imgs/detail/云南3.jpg',
        'img4': '/imgs/detail/云南4.jpg'
    }
})
https: //imgs.qunarzz.com/vs_ceph_vs_tts/d1082716-610d-4f9f-95d6-7f0ca4feb181.jpg_r_390x260x95_a7aa35dd.jpg
    Mock.mock('/api/chanpin/46', {
        "status": 0,
        "data": {
            'name': '缤纷新西兰',
            'address': '新西兰 奥克兰',
            'detail': '皇后镇+探秘萤火虫洞+好牧羊人教堂观星+提卡波温泉',
            'detail2': '【精选酒店】交通便利，高性价比，高舒适度',
            'detail3': '【行中保障】专属出行保障团队二十四小时响应',
            'detail4': '专属路书】行程安排细化到小时，不会外语也能顺利',
            'img1': '/imgs/detail/新西兰/xin1.jpeg',
            'img2': '/imgs/detail/新西兰/xin2.jpg',
            'img3': '/imgs/detail/新西兰/xin3.jpg',
            'img4': '/imgs/detail/新西兰/xin3.jpg'
        }
    })


Mock.mock('/api/chanpin/47', {
    "status": 0,
    "data": {
        'name': '心灵牧场-杭盖草原',
        'address': '内蒙古 兴安盟科右前旗',
        'detail': '自然风光和民族文化融合的旅游打卡地',
        'detail2': '【行中保障】专属出行保障团队7*24h响应',
        'detail3': '【专属路书】行程安排细化到小时，不会外语也能顺利出行',
        'detail4': '走进金马鞍景区,了解马文化和蒙古马精神',
        'img1': '/imgs/detail/草原/caoyu1.jpg',
        'img2': '/imgs/detail/草原/caoyu2.jpg',
        'img3': '/imgs/detail/草原/caoyu3.jpg',
        'img4': '/imgs/detail/草原/caoyu4.jpg'
    }
})


Mock.mock('/api/chanpin/48', {
    "status": 0,
    "data": {
        'name': '神奇阿克苏',
        'address': '新疆  维吾尔自治区',
        'detail': '【丰富玩乐】狩猎+野生植物园+胡杨观光塔+水上娱乐+鸵鸟园+游泳',
        'detail2': '【订制路书】一对一定制专属路书深度设计拒绝走马观花',
        'detail3': '【专属路书】行程安排细化到小时，不会外语也能顺利出行',
        'detail4': '【行程可调】可增减天数，更换酒店景点玩法',
        'img1': '/imgs/detail/阿克/a1.jpeg',
        'img2': '/imgs/detail/阿克/a2.jpg',
        'img3': '/imgs/detail/阿克/a3.jpg',
        'img4': '/imgs/detail/阿克/a4.jpg',
    }
})



// 需要拦截的 URL



// template
// 表示数据模板，可以是对象或字符串。例如 { 'data|1-10':[{}] }、'@EMAIL'。

// function(options)表示用于生成响应数据的函数。


// // rtype

// 可选。

// 表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。