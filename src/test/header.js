
// const URL = 'https://bic.11185.cn/ZxptRestPub/cnt/web/queryContentChildrenMenue'

// const METHOD = 'POST'

// const PAYLOAD = {"pageNo":0,"pageSize":0,"type":"HELP_CENTER","level":"","channel":"PC","status":"1"}

const HELP_CENTER = [  // data.items: [{}...]
 {
   "item": {
     "naviId": 350,
     "linkAddress": "https://11185.cn/web/#/productIntroduce",
     "name": "新手入门",
   }
 },
 {
   "item": {
     "naviId": 351,
     "linkAddress": "https://11185.cn/web/#/productIntroduce",
     "name": "支付方式",
   }
 },
 {
   "item": {
     "naviId": 356,
     "linkAddress": "https://11185.cn/web/#/productIntroduce",
     "name": "注意事项",
   }
 },
 {
   "item": {
     "linkAddress": "https://11185.cn/web/#/productIntroduce",
     "name": "配送方式",
     "status": "1"
   }
 },
 {
   "item": {
     "naviId": 603,
     "linkAddress": "",
     "name": "客服电话：11185-9",
   }
 }
]

// const URL = 'https://bic.11185.cn/ZxptRestPub/common/queryprovinces'

// const METHOD = 'GET'

// const PAYLOAD = 

const PROVINCES = [ // data.items: [{}...]
 {
   "distCd": "110000",
   "provName": "北京市",
 },
 {
   "distCd": "120000",
   "provName": "天津市",
 },
 {
   "distCd": "130000",
   "provName": "河北省",
 },
 {
   "distCd": "140000",
   "provName": "山西省",
 },
 {
   "distCd": "150000",
   "provName": "内蒙古自治区",
 },
 {
   "distCd": "210000",
   "provName": "辽宁省",
 },
 {
   "distCd": "220000",
   "provName": "吉林省",
 },
 {
   "distCd": "230000",
   "provName": "黑龙江省",
 },
 {
   "distCd": "310000",
   "provName": "上海市",
 },
 {
   "distCd": "320000",
   "provName": "江苏省",
 },
 {
   "distCd": "330000",
   "provName": "浙江省",
 },
 {
   "distCd": "340000",
   "provName": "安徽省",
 },
 {
   "distCd": "350000",
   "provName": "福建省",
 },
 {
   "distCd": "360000",
   "provName": "江西省",
 },
 {
   "distCd": "370000",
   "provName": "山东省",
 },
 {
   "distCd": "410000",
   "provName": "河南省",
 },
 {
   "distCd": "420000",
   "provName": "湖北省",
 },
 {
   "distCd": "430000",
   "provName": "湖南省",
 },
 {
   "distCd": "440000",
   "provName": "广东省",
 },
 {
   "distCd": "450000",
   "provName": "广西壮族自治区",
 },
 {
   "distCd": "460000",
   "provName": "海南省",
 },
 {
   "distCd": "500000",
   "provName": "重庆市",
 },
 {
   "distCd": "510000",
   "provName": "四川省",
 },
 {
   "distCd": "520000",
   "provName": "贵州省",
 },
 {
   "distCd": "530000",
   "provName": "云南省",
 },
 {
   "distCd": "540000",
   "provName": "西藏自治区",
 },
 {
   "distCd": "610000",
   "provName": "陕西省",
 },
 {
   "distCd": "620000",
   "provName": "甘肃省",
 },
 {
   "distCd": "630000",
   "provName": "青海省",
 },
 {
   "distCd": "640000",
   "provName": "宁夏回族自治区",
 },
 {
   "distCd": "650000",
   "provName": "新疆维吾尔自治区",
 }
]

// const URL = 'https://bic.11185.cn/ZxptRestPub/cnt/web/queryContentChildrenMenue'

// const METHOD = 'GET'

// const PAYLOAD = {"pageNo":0,"pageSize":0,"type":"CUCTOMER_CENTER","level":"","channel":"PC","status":"1"}

const CUCTOMER_CENTER = [  // data.items: [{}...]
 {
   "item": {
     "naviId": 415,
     "linkAddress": "https://211.156.195.15/bcas/login",
     "name": "新一代寄递平台",
   }
 },
 {
   "item": {
     "naviId": 417,
     "linkAddress": "http://211.156.200.95:8081/",
     "name": "包裹代投自提系统",
   }
 }
]
export { HELP_CENTER, PROVINCES, CUCTOMER_CENTER }