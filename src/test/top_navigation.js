const URL = 'https://gcc.11185.cn/ZxptRestGccWEB/channel/queryCatory'

const METHOD = 'POST'

const PAYLOAD = {"channel":"PC","businessType":"JY","type":"TOP_NAVIGATION"}


const TOP_NAVIGATION = [ // data.banners: [{}...]
 {
   "naviId": 1269,
   "name": "首页",
   "linkAddress": "https://mall.11185.cn/web/jyIndex?businessId=JY",
 },
 {
   "naviId": 1270,
   "name": "新邮预报",
   "linkAddress": "http://www.chinapost.com.cn/html1/category/190673/6910-1.htm",
 },
 {
   "naviId": 1271,
   "name": "邮票零售",
   "linkAddress": "https://mall.11185.cn/web/searchJy?businessId=JY&activityType&prodGoodsType=NORMAL&prodGoodsTypes&classficationId=JY-0",
 },
 {
   "naviId": 1272,
   "name": "邮品零售",
   "linkAddress": "https://mall.11185.cn/web/searchJy?businessId=JY&activityType&prodGoodsType&prodGoodsTypes=NORMAL&prodGoodsTypes=PRE_ORDER&prodGoodsTypes=PRE_SALE&prodGoodsTypes=ROLL&prodGoodsTypes=FIRST_DAY&prodGoodsTypes=LOCAL_MARK&prodGoodsTypes=GIFT&prodGoodsTypes=RESERVE&classficationId=JY-2",
 },
 {
   "naviId": 1273,
   "name": "个性化定制",
   "linkAddress": "https://mall.11185.cn/web/searchJy?businessId=JY&activityType&prodGoodsType=DIY&prodGoodsTypes&classficationId",
 },
 {
   "naviId": 1274,
   "name": "企业定制",
   "linkAddress": "https://mall.11185.cn/web/unique?id=1",
 },
 {
   "naviId": 1275,
   "name": "新邮预订",
   "linkAddress": "https://mall.11185.cn/web/searchJy?businessId=JY&activityType&prodGoodsType=PRE_ORDER&prodGoodsTypes&classficationId",
 },
 {
   "naviId": 1276,
   "name": "邮票百科",
   "linkAddress": "https://mall.11185.cn/web/stampwiki",
 },
 {
   "naviId": 1277,
   "name": "地方特色",
   "linkAddress": "",
 },
 {
   "naviId": 1278,
   "name": "特许查询",
   "linkAddress": "http://211.156.200.101:8000/elms/trace/TraceQuery.jsp",
 },
 {
   "naviId": 1279,
   "name": "仿印查询",
   "linkAddress": "http://211.156.198.94:8001/elms/trace/TraceQuery.jsp",
 },
 {
   "naviId": 1280,
   "name": "集邮网院",
   "linkAddress": "https://mall.11185.cn/web/unique?id=2",
 },
 {
   "naviId": 1281,
   "name": "珍邮竞拍",
   "linkAddress": "https://mall.11185.cn/web/searchJy?businessId=JY&activityType=PM&prodGoodsType&prodGoodsTypes&classficationId",
 },
 {
   "naviId": 1282,
   "name": "零售查询",
   "linkAddress": "https://mall.11185.cn/web/retailQuery?businessId=JY",
 }
]


export { TOP_NAVIGATION }