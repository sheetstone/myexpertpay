const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

function generateData() {
  const users = [];

  for (let id = 1; id <= 8; id++) {
    const name = faker.name.findName();
    const email = faker.internet.email();

    users.push({
      id,
      name: name,
      email,
    });
  }

  const bankCheatSheet = {
    "Chase": faker.random.number(999999999999),
    "Bank of America": faker.random.number(999999999999),
    "Citi Bank": faker.random.number(999999999999),
    "U.S. Corp": faker.random.number(999999999999),
    "Wells Fargo": faker.random.number(999999999999),
    "PNC": faker.random.number(999999999999),
    "Capital One": faker.random.number(999999999999)
  }

  const banks = [];

  for (let id = 1; id <= 5; id++) {
    const name = faker.random.arrayElement(Object.keys(bankCheatSheet));
    const type = faker.random.arrayElement(["Checking", "Saving"]);
    const rountinnum = bankCheatSheet[name];
    const accountnum = faker.random.number(999999999999);
    const verified = faker.random.boolean();

    banks.push({
      id,
      name,
      type,
      rountinnum,
      accountnum,
      verified,
    });
  }

  const bankDict = banks.map(item => item.name + " - " + item.accountnum.toString().match(/\d{4}$/gm));
  const userDict = users.map(item => item.name);
  const caseDict = ["DF-12010304", "12SDF-2222", "PPEW-321312", "12312422322"];
  const catgoryDict = ["Book", "Food", "Clothing", "Supplyment", "Householding"];

  const events = [];

  const stateDate = moment().subtract(3, 'month').format('YYYY-MM-DD');
  const endDate = moment().add(3, 'month').format('YYYY-MM-DD');


  for (let id = 1; id < 60; id++) {
    const eventName = faker.lorem.words();
    const startTime = faker.date.between(stateDate, endDate);
    const endTime = new Date(startTime);
    const inviter = faker.random.arrayElement(userDict);
    const location = faker.address.streetAddress() + ", " + faker.address.secondaryAddress() + ", " + faker.address.stateAbbr();
    endTime.setHours(endTime.getHours() + faker.random.number(48) + 1);

    events.push({
      id,
      eventName,
      startTime,
      endTime,
      inviter,
      location,
    });
  };


  const payments = [];

  for (let id = 1; id <= 20; id++) {
    const name = faker.random.arrayElement(userDict);
    const amount = faker.finance.amount();
    const status = faker.random.number(3);
    const bank = faker.random.arrayElement(bankDict);
    const casenumber = faker.random.arrayElement(caseDict);
    const catgory = faker.random.arrayElement(catgoryDict);
    const paymentdate = faker.date.past(1);

    payments.push({
      id,
      name,
      amount,
      status,
      bank,
      casenumber,
      catgory,
      paymentdate,
    });
  }

  return {
    "users": users,
    "banks": banks,
    "payments": payments,
    "events" : events,
  };
}

const dataObj = generateData();

fs.writeFileSync('./server/data/data.json', JSON.stringify(dataObj, null, '\t'), err => {
  if (err) {
    return console.log(err);
  }
  console.log('Mock data generated.');
});
