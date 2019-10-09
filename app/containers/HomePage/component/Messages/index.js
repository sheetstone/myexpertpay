import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import style from './styles/style.scss';


// TODO : move data set to JSON server
const json = {
  data: [
    {
      type: 'Request received',
      recieved: '01/01/2016',
      amount: 100,
      reciptent: 'Betty Brant',
    },
    {
      type: 'Request received',
      recieved: '01/01/2016',
      amount: 2400,
      reciptent: 'Mary Mae',
    },
    {
      type: 'Money recieved',
      recieved: '01/01/2016',
      amount: 29.9,
      reciptent: 'Alice Ace',
    },
  ],
};

const header = ['Type', 'Recieved', 'Amount', 'Reciptent', 'Action'];

function Messages() {
  return (
    <Container className={style.messageContainer}>
      <Table hover className={style.messageTable}>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {json.data.map((item, i) => {
            // console.log(item);
            const {type, recieved, amount, reciptent} = item
            return (
              <tr key={i}>
                <td>{type}</td>
                <td>{recieved}</td>
                <td className={style.price}>
                  <span>$</span>
                  <span className={style.priceNumber}>{formatMoney(amount)}</span>
                </td>
                <td>{reciptent}</td>
                <td>
                  <Button variant="primary" size="sm">Accept</Button>
                  <Button variant="secondary" size="sm">Decline</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

export default Messages;
