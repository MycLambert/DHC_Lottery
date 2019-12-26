var lottery_initial_datas =[
    	{
        "nameen": "avatar0",
        "namezh": "古春生"
        },
        {
        "nameen": "avatar1",
        "namezh": "罗利平"
       	},
        {
        "nameen": "avatar2",
        "namezh": " 叶涛"
        }
        ,
        {
        "nameen": "avatar3",
        "namezh": "张方青"
        },
        {
        "nameen": "avatar4",
        "namezh": " 向荣"
        }
        ,
        /*
        {
        "nameen": "avatar5",
        "namezh": "辜斌"
        }
        ,
        */
        {
        "nameen": "avatar6",
        "namezh": " 孙萍"
        }
        ,
        {
        "nameen": "avatar7",
        "namezh": "曹伟华"
        },
        {
        "nameen": "avatar8",
        "namezh": "於晶晶"
        },
        {
        "nameen": "avatar9",
        "namezh": "黄玲珍"
        },   
        {
        "nameen": "avatar10",
        "namezh": "黄建平"
        },
        {
        "nameen": "avatar11",
        "namezh": "苑方丞"
        },
        {
        "nameen": "avatar12",
        "namezh": " 林鹏"
        }
        ,
        {
        "nameen": "avatar13",
        "namezh": " 李亮"
        }
        ,
        {
        "nameen": "avatar14",
        "namezh": "周月芳"
        },
        {
        "nameen": "avatar15",
        "namezh": " 许悦"
        }
        ,
        {
        "nameen": "avatar16",
        "namezh": "徐硕均"
        }
        ,
        {
        "nameen": "avatar17",
        "namezh": " 武磊"
        },
        /*
        {
        "nameen": "avatar18",
        "namezh": "顿喜文"
        },
        {
        "nameen": "avatar19",
        "namezh": " 郜鹏"
        },
        */
        {
        "nameen": "avatar20",
        "namezh": "吴雨浓"
        }
        ,
        {
        "nameen": "avatar21",
        "namezh": "淮梦琪"
        },
        {
        "nameen": "avatar22",
        "namezh": "张飞飞"
        }
        ,
        {
        "nameen": "avatar23",
        "namezh": "孔祥伟"
        },
        {
        "nameen": "avatar24",
        "namezh": "冯海峰"
        }
        ,
        {
        "nameen": "avatar25",
        "namezh": " 董宇"
        }
        ,
        {
        "nameen": "avatar26",
        "namezh": "王亚茹"
        },
        {
        "nameen": "avatar27",
        "namezh": " 刘钊"
        }
        ,
        {
        "nameen": "avatar28",
        "namezh": "韩思远"
        }
        ,
        {
        "nameen": "avatar29",
        "namezh": "马长立"
        },
        {
        "nameen": "avatar30",
        "namezh": " 朱菲"
        }
        ,
        {
        "nameen": "avatar31",
        "namezh": " 戴玉"
        }
        ,
        {
        "nameen": "avatar32",
        "namezh": "张焕东"
        },
        {
        "nameen": "avatar33",
        "namezh": "朱耿峰"
        },
        {
        "nameen": "avatar34",
        "namezh": "毛弥卉"
       },
        {
        "nameen": "avatar35",
        "namezh": " 黎萱"
        },
        {
        "nameen": "avatar36",
        "namezh": " 吴伟"
        },
        {
        "nameen": "avatar37",
        "namezh": "周瑛英"
        }
        ,
        {
        "nameen": "avatar38", 
        "namezh": "陈楚楚"
        }
        ,
        {
        "nameen": "avatar39",
        "namezh": "孙理欧"
        },
        {
        "nameen": "avatar40",
        "namezh": "周欣晟"
        }
        ,
        {
        "nameen": "avatar41",
        "namezh": "郭鑫鑫"
        }
        ,
        {
        "nameen": "avatar42",
        "namezh": "马原驰"
        },
        {
        "nameen": "avatar43",
        "namezh": "张书铭"
        },   
        {
        "nameen": "avatar44",
        "namezh": "郑伟军"
        },
        {
        "nameen": "avatar45",
        "namezh": "夏雯"
        },
        {
        "nameen": "avatar46",
        "namezh": "周不凡"
        }
        /*
        */
];

var award_config = {
    "award01": 1,
    "award02": 1,
    "award03": 1,
    "award04": 2//抽奖次数
};

// 初始化数据
//初始化抽奖号
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
//初始化抽奖次数
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}