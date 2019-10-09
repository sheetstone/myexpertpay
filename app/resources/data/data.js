
/*
* Json generator https://www.json-generator.com/
[
  '{{repeat(20)}}',
  {
    name: '{{firstName()}} {{surname()}}',
    amount: '{{floating(0, 1000)}}',
    status: '{{integer(0, 3)}}',
    bank: '{{random("Chase-9923","Chase-4233","BOA-1223")}}',
    casenumber: '{{random("DF-12010304","12SDF-2222","PPEW-321312", "12312422322 ")}}',
    catgory: '{{random("Book","Food","Clothing", "Supplyment","Householding")}}'
  }
]
*/
const data = [
  {
    "name": "Huffman Pickett",
    "amount": 186.5157,
    "status": 1,
    "bank": "Chase-4233",
    "casenumber": "12SDF-2222",
    "catgory": "Book"
  },
  {
    "name": "Bush Hall",
    "amount": 779.4327,
    "status": 0,
    "bank": "Chase-4233",
    "casenumber": "PPEW-321312",
    "catgory": "Supplyment"
  },
  {
    "name": "Benjamin Griffith",
    "amount": 473.7519,
    "status": 2,
    "bank": "BOA-1223",
    "casenumber": "PPEW-321312",
    "catgory": "Clothing"
  },
  {
    "name": "Padilla Barnett",
    "amount": 14.9209,
    "status": 0,
    "bank": "BOA-1223",
    "casenumber": "PPEW-321312",
    "catgory": "Clothing"
  },
  {
    "name": "Chan Kline",
    "amount": 208.9077,
    "status": 1,
    "bank": "BOA-1223",
    "casenumber": 12312422322,
    "catgory": "Food"
  },
  {
    "name": "Kelley Odom",
    "amount": 743.764,
    "status": 0,
    "bank": "BOA-1223",
    "casenumber": "DF-12010304",
    "catgory": "Book"
  },
  {
    "name": "Bettye Hatfield",
    "amount": 307.5089,
    "status": 3,
    "bank": "BOA-1223",
    "casenumber": 12312422322,
    "catgory": "Book"
  },
  {
    "name": "Mueller Bridges",
    "amount": 43.3401,
    "status": 3,
    "bank": "Chase-9923",
    "casenumber": "12SDF-2222",
    "catgory": "Clothing"
  },
  {
    "name": "Hartman Miller",
    "amount": 363.6599,
    "status": 2,
    "bank": "Chase-4233",
    "casenumber": "DF-12010304",
    "catgory": "Supplyment"
  },
  {
    "name": "Shelia Adams",
    "amount": 37.4813,
    "status": 0,
    "bank": "Chase-4233",
    "casenumber": "12SDF-2222",
    "catgory": "Book"
  },
  {
    "name": "Lyons Alston",
    "amount": 662.2732,
    "status": 2,
    "bank": "Chase-9923",
    "casenumber": "12SDF-2222",
    "catgory": "Clothing"
  },
  {
    "name": "Tate Mccormick",
    "amount": 555.0701,
    "status": 3,
    "bank": "Chase-4233",
    "casenumber": "DF-12010304",
    "catgory": "Book"
  },
  {
    "name": "Klein Head",
    "amount": 702.0278,
    "status": 1,
    "bank": "Chase-4233",
    "casenumber": "12SDF-2222",
    "catgory": "Supplyment"
  },
  {
    "name": "Kerri Davidson",
    "amount": 895.6523,
    "status": 0,
    "bank": "Chase-9923",
    "casenumber": "PPEW-321312",
    "catgory": "Book"
  },
  {
    "name": "Annabelle Pitts",
    "amount": 864.8176,
    "status": 3,
    "bank": "BOA-1223",
    "casenumber": "12SDF-2222",
    "catgory": "Clothing"
  },
  {
    "name": "Celina Castaneda",
    "amount": 297.6847,
    "status": 0,
    "bank": "BOA-1223",
    "casenumber": "12SDF-2222",
    "catgory": "Food"
  },
  {
    "name": "James Velazquez",
    "amount": 602.5018,
    "status": 0,
    "bank": "Chase-4233",
    "casenumber": 12312422322,
    "catgory": "Householding"
  },
  {
    "name": "Pam Mckee",
    "amount": 694.5645,
    "status": 3,
    "bank": "BOA-1223",
    "casenumber": 12312422322,
    "catgory": "Food"
  },
  {
    "name": "Adkins Mcdaniel",
    "amount": 667.2329,
    "status": 0,
    "bank": "BOA-1223",
    "casenumber": "12SDF-2222",
    "catgory": "Book"
  },
  {
    "name": "Sherrie Hale",
    "amount": 822.5045,
    "status": 1,
    "bank": "BOA-1223",
    "casenumber": 12312422322,
    "catgory": "Book"
  }
]

export default data;
