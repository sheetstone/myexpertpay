import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';

import { getEvents } from 'api/eventsApi';
import moment from 'moment';

import Week from './Week';
import WeekHeaderRow from './WeekHeaderRow';
import CalendarHeader from './CalendarHeader';

import style from './styles/style.scss';

class ActivityCalender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: null,
      isLoading: true,
      month: moment(),
      selected: moment().startOf('day'),
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    getEvents().then(data =>
      this.setState({
        eventsData: data,
        isLoading: false,
      }),
    );
  }

  previous() {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const { month } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });
  }

  renderWeeks() {
    const weeks = [];
    let events = [];
    const { selected, month } = this.state;

    let done = false;
    const date = month
      .clone()
      .startOf('month')
      .add('w' - 1)
      .day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const currentMonthEvents = this.getMonthEvent();

    while (!done) {
      events = new Array();
      if (!!currentMonthEvents) {
        currentMonthEvents.forEach(item => {
          if (date.isSame(item.startTime, 'week'))
            events.push(Object.assign({}, item));
        });
      }

      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          // select={day => this.select(day)} // depatched using select event function instead
          // selected={selected}
          events={events}
          className={style.week}
        />,
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  getMonthEvent() {
    const events = [];
    const { month, eventsData } = this.state;

    if (!!eventsData) {
      eventsData.forEach(item => {
        if (month.isSame(item.startTime, 'month') ||
            month.clone().endOf("month").isSame(item.startTime, 'week') ||
            month.clone().startOf('month').isSame(item.startTime, 'week'))
          events.push(Object.assign({}, item));
      });
    }
    return events;
  }

  /*
    Depatched, using select event function instead

  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }*/

  render() {
    const { eventsData, isLoading } = this.state;

    if (isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <Container>
        <section className={style.calendar}>
          <CalendarHeader month={this.state.month} previous={this.previous} next={this.next} />
          <WeekHeaderRow />
          {this.renderWeeks()}
        </section>
      </Container>
    );
  }
}

export default ActivityCalender;
