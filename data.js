/* ============================================================
   data.js  —  教材目录（册 / 单元 / 课）

   这里只有「目录结构」，不放练习链接。
   要添加新的练习链接，请改 links.js，不需要动这个文件。
   ============================================================ */

const TEXTBOOKS = [
    {
        "name": "中文（小学·暨南大学版）",
        "icon": "fas fa-university",
        "volumes": [
            {
                "name": "第一册",
                "units": [
                    {
                        "name": "第一单元",
                        "lessons": [
                            {"name": "第一课", "topic": "识字 一"},
                            {"name": "第二课", "topic": "识字 二"},
                            {"name": "第三课", "topic": "识字 三"}
                        ]
                    },
                    {
                        "name": "第二单元",
                        "lessons": [
                            {"name": "第四课", "topic": "识字 四"},
                            {"name": "第五课", "topic": "识字 五"},
                            {"name": "第六课", "topic": "识字 六"}
                        ]
                    },
                    {
                        "name": "第三单元",
                        "lessons": [
                            {"name": "第七课", "topic": "小学生"},
                            {"name": "第八课", "topic": "我的家"},
                            {"name": "第九课", "topic": "我去学校"}
                        ]
                    },
                    {
                        "name": "第四单元",
                        "lessons": [
                            {"name": "第十课", "topic": "认方向"},
                            {"name": "第十一课", "topic": "四季"},
                            {"name": "第十二课", "topic": "新年到"}
                        ]
                    }
                ]
            },
            {
                "name": "第二册",
                "units": [
                    {
                        "name": "第一单元",
                        "lessons": [
                            {"name": "第一课", "topic": "在中文学校"},
                            {"name": "第二课", "topic": "我们的教室"},
                            {"name": "第三课", "topic": "开心的一天"}
                        ]
                    },
                    {
                        "name": "第二单元",
                        "lessons": [
                            {"name": "第四课", "topic": "讲礼貌"},
                            {"name": "第五课", "topic": "过生日"},
                            {"name": "第六课", "topic": "我会做的事"}
                        ]
                    },
                    {
                        "name": "第三单元",
                        "lessons": [
                            {"name": "第七课", "topic": "课文-红绿灯"},
                            {"name": "第八课", "topic": "课文-去书店"},
                            {"name": "第九课", "topic": "课文-在医院里"}
                        ]
                    },
                    {
                        "name": "第四单元",
                        "lessons": [
                            {"name": "第十课", "topic": "春雨"},
                            {"name": "第十一课", "topic": "青蛙写诗"},
                            {"name": "第十二课", "topic": "江河"}
                        ]
                    }
                ]
            },
            {
                "name": "第三册",
                "units": [
                    {
                        "name": "第一单元",
                        "lessons": [
                            {"name": "第一课", "topic": "上餐馆"},
                            {"name": "第二课", "topic": "我教大卫吃中餐"},
                            {"name": "第三课", "topic": "有趣的汉字"}
                        ]
                    },
                    {
                        "name": "第二单元",
                        "lessons": [
                            {"name": "第四课", "topic": "猜一猜"},
                            {"name": "第五课", "topic": "我是谁"},
                            {"name": "第六课", "topic": "白云娃娃"}
                        ]
                    },
                    {
                        "name": "第三单元",
                        "lessons": [
                            {"name": "第七课", "topic": "龟兔赛跑"},
                            {"name": "第八课", "topic": "小猫钓鱼"},
                            {"name": "第九课", "topic": "狼来了"}
                        ]
                    },
                    {
                        "name": "第四单元",
                        "lessons": [
                            {"name": "第十课", "topic": "古诗二首"},
                            {"name": "第十一课", "topic": "蔡伦造纸"},
                            {"name": "第十二课", "topic": "鲁班与锯子"}
                        ]
                    }
                ]
            },
            {
                "name": "第四册",
                "units": [
                    {
                        "name": "第一单元",
                        "lessons": [
                            {"name": "第一课", "topic": "给爷爷的信"},
                            {"name": "第二课", "topic": "颐和园"},
                            {"name": "第三课"}
                        ]
                    },
                    {
                        "name": "第二单元",
                        "lessons": [
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"}
                        ]
                    },
                    {
                        "name": "第三单元",
                        "lessons": [
                            {"name": "第七课"},
                            {"name": "第八课", "topic": "司马光"},
                            {"name": "第九课", "topic": "数星星的孩子"}
                        ]
                    },
                    {
                        "name": "第四单元",
                        "lessons": [
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            },
            {
                "name": "第五册",
                "units": [
                    {
                        "name": "第一单元",
                        "lessons": [
                            {"name": "第一课", "topic": "去超市"},
                            {"name": "第二课", "topic": "去露营"},
                            {"name": "第三课", "topic": "快乐的中华文化大乐园"}
                        ]
                    },
                    {
                        "name": "第二单元",
                        "lessons": [
                            {"name": "第四课", "topic": "狼和小羊"},
                            {"name": "第五课", "topic": "狐狸和葡萄"},
                            {"name": "第六课", "topic": "成语二则"}
                        ]
                    },
                    {
                        "name": "第三单元",
                        "lessons": [
                            {"name": "第七课", "topic": "唐人街"},
                            {"name": "第八课", "topic": "神舟飞天"},
                            {"name": "第九课", "topic": "古诗二首"}
                        ]
                    },
                    {
                        "name": "第四单元",
                        "lessons": [
                            {"name": "第十课", "topic": "曹冲称象"},
                            {"name": "第十一课", "topic": "贝聿铭"},
                            {"name": "第十二课", "topic": "李时珍"}
                        ]
                    }
                ]
            },
            {
                "name": "第六册",
                "units": [
                    {
                        "name": "第一单元",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"}
                        ]
                    },
                    {
                        "name": "第二单元",
                        "lessons": [
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"}
                        ]
                    },
                    {
                        "name": "第三单元",
                        "lessons": [
                            {"name": "第七课"},
                            {"name": "第八课"},
                            {"name": "第九课"}
                        ]
                    },
                    {
                        "name": "第四单元",
                        "lessons": [
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "YCT标准教程",
        "icon": "fas fa-graduation-cap",
        "volumes": [
            {
                "name": "第一册",
                "units": [
                    {
                        "name": "全册12课",
                        "lessons": [
                            {"name": "第一课", "topic": "你好！"},
                            {"name": "第二课", "topic": "你叫什么？"},
                            {"name": "第三课"},
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"},
                            {"name": "第七课", "topic": "这是谁的狗？"},
                            {"name": "第八课", "topic": "我去商店。"},
                            {"name": "第九课"},
                            {"name": "第十课"},
                            {"name": "第十一课", "topic": "你吃什么？"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            },
            {
                "name": "第二册",
                "units": [
                    {
                        "name": "全册12课",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"},
                            {"name": "第四课", "topic": "书包里有两本书"},
                            {"name": "第五课", "topic": "你会不会做饭？"},
                            {"name": "第六课", "topic": "包子多少钱一个？"},
                            {"name": "第七课", "topic": "今天比昨天热"},
                            {"name": "第八课", "topic": "马丁比我大三岁"},
                            {"name": "第九课", "topic": "今天你做什么了"},
                            {"name": "第十课", "topic": "你怎么了"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            },
            {
                "name": "第三册",
                "units": [
                    {
                        "name": "全册12课",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"},
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"},
                            {"name": "第七课"},
                            {"name": "第八课"},
                            {"name": "第九课"},
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            },
            {
                "name": "第四册",
                "units": [
                    {
                        "name": "全册12课",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"},
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"},
                            {"name": "第七课"},
                            {"name": "第八课"},
                            {"name": "第九课"},
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            },
            {
                "name": "第五册",
                "units": [
                    {
                        "name": "全册12课",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"},
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"},
                            {"name": "第七课"},
                            {"name": "第八课"},
                            {"name": "第九课"},
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            },
            {
                "name": "第六册",
                "units": [
                    {
                        "name": "全册12课",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"},
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"},
                            {"name": "第七课"},
                            {"name": "第八课"},
                            {"name": "第九课"},
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "幼儿汉语",
        "icon": "fas fa-child",
        "volumes": [
            {
                "name": "第一册",
                "units": [
                    {
                        "name": "全册10课",
                        "lessons": [
                            {"name": "一"},
                            {"name": "二"},
                            {"name": "三"},
                            {"name": "四"},
                            {"name": "五"},
                            {"name": "六"},
                            {"name": "七"},
                            {"name": "八"},
                            {"name": "九"},
                            {"name": "十"}
                        ]
                    }
                ]
            },
            {
                "name": "第二册",
                "units": [
                    {
                        "name": "全册10课",
                        "lessons": [
                            {"name": "一", "topic": "这是电脑"},
                            {"name": "二", "topic": "那是什么"},
                            {"name": "三", "topic": "你吃什么"},
                            {"name": "四", "topic": "你喝什么"},
                            {"name": "五", "topic": "妈妈在哪里"},
                            {"name": "六", "topic": "你去哪里"},
                            {"name": "七", "topic": "你有风筝吗"},
                            {"name": "八", "topic": "我有三个气球"},
                            {"name": "九", "topic": "你有几个苹果"},
                            {"name": "十", "topic": "他有围巾和帽子"}
                        ]
                    }
                ]
            },
            {
                "name": "第三册",
                "units": [
                    {
                        "name": "全册10课",
                        "lessons": [
                            {"name": "一"},
                            {"name": "二"},
                            {"name": "三"},
                            {"name": "四"},
                            {"name": "五"},
                            {"name": "六"},
                            {"name": "七"},
                            {"name": "八"},
                            {"name": "九"},
                            {"name": "十"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "汉语拼音",
        "icon": "fas fa-language",
        "volumes": [
            {
                "name": "拼音课程",
                "units": [
                    {
                        "name": "全册18课",
                        "lessons": [
                            {"name": "第一课"},
                            {"name": "第二课"},
                            {"name": "第三课"},
                            {"name": "第四课"},
                            {"name": "第五课"},
                            {"name": "第六课"},
                            {"name": "第七课"},
                            {"name": "第八课"},
                            {"name": "第九课"},
                            {"name": "第十课"},
                            {"name": "第十一课"},
                            {"name": "第十二课"},
                            {"name": "第十三课"},
                            {"name": "第十四课"},
                            {"name": "第十五课"},
                            {"name": "第十六课"},
                            {"name": "第十七课"},
                            {"name": "第十八课"}
                        ]
                    }
                ]
            }
        ]
    }
];
