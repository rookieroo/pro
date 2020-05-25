// 有5个接口


// const URL = 'https://bic.11185.cn/ZxptRestPub/cnt/web/queryContentChildrenMenue'

// const METHOD = 'POST'

// const PAYLOAD = {"status":"1","type":"COMMODITY_NAVIGATION","level":"","channel":"PC"}

const COMMODITY_NAVIGATION = [ // data.items: [{}...]
 {
   "item": {
     "naviId": 419,
     "linkAddress": "https://mall.11185.cn/web/newsPaper?businessId=BK",
     "name": "报刊图书",
   },
   "children": []
 },
 {
   "item": {
     "naviId": 420,
     "linkAddress": "https://mall.11185.cn/web/jyIndex2?businessId=JY",
     "name": "邮品邮票",
   },
   "children": []
 },
 {
   "item": {
     "naviId": 421,
     "linkAddress": "https://dey.11185.cn/web",
     "name": "包裹寄递",
   },
   "children": []
 },
 {
   "item": {
     "naviId": 422,
     "linkAddress": "https://dms.11185.cn/web",
     "name": "媒体资源",
   },
   "children": []
 },
 {
   "item": {
     "naviId": 430,
     "linkAddress": "https://mall.11185.cn/web/fpkindex?businessId=FPK",
     "name": "明信片",
   },
   "children": []
 },
 {
   "item": {
     "naviId": 491,
     "linkAddress": "https://mall.11185.cn/web/zhslmpindex",
     "name": "景点门票",
   },
   "children": []
 },
 {
   "item": {
     "naviId": 630,
     "linkAddress": "",
     "name": "邮政农品",
   },
   "children": [
     {
       "naviId": 632,
       "linkAddress": "https://my.ule.com/usr/login/11185login.do?backurl=https%3A%2F%2Fwww.ule.com%2Fulenp%2Fchina.html%3Fadid%3Dchinapost_pc_dftc",
       "name": "地方特产",
     },
     {
       "naviId": 631,
       "linkAddress": "https://my.ule.com/usr/login/11185login.do?backurl=https%3A%2F%2Fwww.ule.com%2Fulenp%2Ffupin.html%3Fadid%3Dchinapost_pc_fp",
       "name": "扶贫助农",
     }
   ]
 }
]

// const URL = 'https://gcc.11185.cn/ZxptRestGccWEB/channel/findChannelMenu'

// const METHOD = 'POST'

// const PAYLOAD = {"channel":"PC","businessId":"JY","cateLevel":1,"parentId":"P"}

const JY_CATE = [  // data.items: [{}...]
 {
   "businessId": "JY",
   "cateName": "集邮票",
   "parentId": "P",
   "field1": "hasChild",
   "cateId": "JY-0",
   "id": 811,
 },
 {
   "businessId": "JY",
   "cateName": "集邮品",
   "parentId": "P",
   "field1": "hasChild",
   "cateId": "JY-2",
   "id": 812,
 },
 {
   "businessId": "JY",
   "cateName": "集邮用品",
   "parentId": "P",
   "field1": "hasChild",
   "cateId": "JY-3",
   "id": 813,
 },
 {
   "businessId": "JY",
   "cateName": "拓展用品",
   "parentId": "P",
   "field1": "hasChild",
   "cateId": "JY-4",
   "id": 814,
 },
 {
   "businessId": "JY",
   "cateName": "集邮商品",
   "parentId": "P",
   "field1": "hasChild",
   "cateId": "JY-5",
   "id": 815,
 },
 {
   "businessId": "JY",
   "cateName": "邮资封片",
   "parentId": "P",
   "field1": "sync",
   "cateId": "JY-99",
   "id": 816,
 },
 {
   "businessId": "JY",
   "cateName": "票品题材",
   "parentId": "P",
   "field1": "hasChild",
   "cateId": "JY-T",
   "id": 987,
 }
]

// const URL = 'https://gcc.11185.cn/ZxptRestGccWEB/channel/queryCatory'

// const METHOD = 'POST'

// const PAYLOAD = {"channel":"PC","businessType":"JY","type":"BROADCAST"}

const BROADCAST_BANNERS = [  // data.banners: [{}...]
 {
   "naviId": 1600,
   "name": "众志成城 抗击疫情",
   "imgUrl": "https://bic.11185.cn/zxpt-sc-sys/news/301_1588843733951_845_SYS1_610.jpg",
   "linkAddress": "https://mall.11185.cn/web/jyhwdetails?param=%7B%22id%22%3A622,%22newsType%22%3A4%7D&channel=PC",
 }
]

// const URL = 'https://gcc.11185.cn/ZxptRestGccWEB/channel/queryCatory'

// const METHOD = 'POST'

// const PAYLOAD = {"channel":"PC","businessType":"JY","type":"HOT_ZONE"}

const HOT_ZONE = [ // data.banners: [{}...]
 {
   "naviId": 1567,
   "name": "《布谷声中夏令新》二十四节气（二）版票册",
   "imgUrl": "https://bic.11185.cn/zxpt-sc-sys/news/087_1588301246767_302_SYS1_404.jpg",
   "linkAddress": "https://mall.11185.cn/web/details?id=1700098&shopId=&businessId=",
   "field3": "",
 },
 {
   "naviId": 1603,
   "name": "母亲节邮折",
   "imgUrl": "https://bic.11185.cn/zxpt-sc-sys/news/515_1588931884952_923_SYS1_111.jpg",
   "linkAddress": "https://mall.11185.cn/web/details?id=2305201&shopId=&businessId=JY",
   "field3": "",
 },
 {
   "naviId": 1604,
   "name": "幸福的家",
   "imgUrl": "https://bic.11185.cn/zxpt-sc-sys/news/267_1588931949110_775_SYS1_966.jpg",
   "linkAddress": "https://mall.11185.cn/web/details?id=1289191&shopId=&businessId=JY",
   "field3": "",
 }
]

// const URL = 'https://gcc.11185.cn/ZxptRestGccWEB/channel/queryNewsByType'

// const METHOD = 'POST'

// const PAYLOAD = {"newsTypes":"3,4,5","businessLine":""}

const NEWS = {  // data.3(4,5)
 "3": null,
 "4": [
   {
     "id": 429,
     "title": "2020年邮票预订预约摇号结果公告",
     "newsType": 4,
   },
   {
     "id": 364,
     "title": "《二十四节气》特殊版式小全张邮折销售公告",
     "newsType": 4,
   },
   {
     "id": 431,
     "title": "【株洲专区】年终盛惠，感恩大促",
     "newsType": 4,
   },
   {
     "id": 417,
     "author": "吴忠专区",
     "newsType": 4,
   },
   {
     "id": 416,
     "title": "【张家界专区】2020年生肖贺岁优惠购",
     "newsType": 4,
   }
 ],
 "5": [
   {
     "id": 345,
     "title": "邮集天下  博览古今",
     "newsType": 5,
   },
   {
     "id": 282,
     "title": "【集邮与爱情】爱情类邮票图稿赏析",
     "newsType": 5,
   },
   {
     "id": 279,
     "title": "【集邮与文学】故事文学类邮票图稿赏析",
     "newsType": 5,
   },
   {
     "id": 277,
     "title": "【集邮与少年】青少年类邮票图稿赏析",
     "newsType": 5,
   },
   {
     "id": 274,
     "title": "【集邮会员日】国庆类邮票类图稿赏析",
     "newsType": 5,
   }
 ]
}

export { COMMODITY_NAVIGATION, JY_CATE, BROADCAST_BANNERS, HOT_ZONE, NEWS }
