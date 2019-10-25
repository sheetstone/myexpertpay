const fs = require('fs');
const faker = require('faker');

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

  const banks = [];

  for (let id = 1; id <= 5; id++) {
    const name = faker.random.arrayElement(["Chase", "Bank of America", "Citi Bank", "U.S. Corp", "Wells Fargo", "PNC", "Capital One"]);
    const type = faker.random.arrayElement(["Checking", "Saving"]);
    const accountnum = faker.random.number(999999999999);
    const verified = faker.random.boolean();

    banks.push({
      id,
      name,
      type,
      accountnum,
      verified,
    });
  }

  const bankDict = banks.map(item => item.name + " - " + item.accountnum.toString().match(/\d{4}$/gm));
  const userDict = users.map(item => item.name);
  const caseDict = ["DF-12010304", "12SDF-2222", "PPEW-321312", "12312422322"];
  const catgoryDict = ["Book", "Food", "Clothing", "Supplyment", "Householding"];

  const events = [];

  for (let id = 1; id < 60; id++) {
    const eventName = faker.lorem.words();
    const startTime = faker.date.between('2019-08-01', '2019-12-31');
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

    payments.push({
      id,
      name,
      amount,
      status,
      bank,
      casenumber,
      catgory,
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
