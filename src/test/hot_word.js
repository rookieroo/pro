const URL = 'https://gcc.11185.cn/ZxptRestGccWEB/hotSearch/web/queryHotSearchInfo'

const METHOD = 'POST'

const REQUEST_PAYLOAD = {"hotSource":"00","shopId":"JY"}

const HOT_WORD_DATA = [  // data.hotSearchInfo: [{}...]
 {
   "hotName": "生肖",
   "id": 8,
 },
 {
   "hotName": "个性化定制",
   "hotSearchAttr": [
     {
       "linkUrl": "https://mall.11185.cn/web/searchJy?businessId=JY&activityType&prodGoodsType=DIY&prodGoodsTypes&class",
     }
   ],
   "id": 18,
 },
 {
   "hotName": "庚子年",
   "id": 17,
 },
 {
   "hotName": "二十四节气",
   "id": 11,
 },
 {
   "hotName": "中国集邮总公司",
   "hotSearchAttr": [
     {
       "linkUrl": "https://mall.11185.cn/web/ypsmIndex?shopId=JY93271057F15511E888",
     }
   ],
   "id": 10,
 }
]

const PLACE_HOLDER_VALUE = '年册' // data.attrInfo[0].hotName: string

export {HOT_WORD_DATA, PLACE_HOLDER_VALUE}