import React from 'react';

import style from './styles/style.scss';

function drawDot(color) {
  return (
    <svg width="10" height="10">
      <g>
        <circle
          cx="4"
          cy="4"
          r="4"
          stroke="none"
          strokeWidth="0"
          fill={color}
        />
      </g>
    </svg>
  );
}
function Day(props) {
  const {
    day,
    day: { date, isCurrentMonth, isToday, number },
    //select,
    //selected,
    events,
  } = props;

  const dotColorSchema = [
    '#b2a0bb',
    '#ddc2ba',
    '#72bfb3',
    '#759992',
    '#D9B797',
    '#D7C4C9',
    '#BFAAC9',
    '#82ABDB',
  ];

  const eventsList = events.map((item, i) => (
    <li className={style.eventsli} key={item.id}>
      {drawDot(dotColorSchema[i])}
      <span>{item.eventName}</span>
    </li>
  ));

  return (
    <div
      className={`${style.day} ${isToday ? style.today : ''}
                  ${isCurrentMonth ? '' : style.differentMonth}`}>
      <span className={style.dayNum}>{number}</span>
      <ul className={style.eventslist}>{eventsList}</ul>
    </div>
  );
}

export default Day;
