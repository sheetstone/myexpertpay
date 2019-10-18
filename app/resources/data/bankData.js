
/*
* Json generator https://www.json-generator.com/
[
  '{{repeat(5)}}',
  {

    name: '{{random("Chase","Bank of America","Citi Bank", "U.S. Corp", "Wells Fargo","PNC","Capital One")}}',
    type: '{{random("Checking","Saving")}}',
    accountnum: '{{integer(0, 9999999999999999)}}',
    verified: '{{bool()}}'
  }
]
*/

const bankData = [
  {
    "name": "Bank of America",
    "type": "Checking",
    "accountnum": 6244460154321818,
    "verified": false
  },
  {
    "name": "Capital One",
    "type": "Checking",
    "accountnum": 6826791110902028,
    "verified": false
  },
  {
    "name": "Wells Fargo",
    "type": "Checking",
    "accountnum": 349864769237338,
    "verified": true
  },
  {
    "name": "Wells Fargo",
    "type": "Saving",
    "accountnum": 8784432236106276,
    "verified": false
  },
  {
    "name": "Citi Bank",
    "type": "Saving",
    "accountnum": 1218599889089100,
    "verified": true
  }
]

export default bankData;
