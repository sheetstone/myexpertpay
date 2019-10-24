import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';

import { getEvents } from 'api/eventsApi';


import style from './styles/style.scss';

class ActivityCalender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    getEvents().then(data => this.setState({
      eventsData: data,
      isLoading: false
    }));
  }

  render() {
    const { eventsData, isLoading } = this.state;

    if (isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <Container>
        <pre>
          {JSON.stringify(eventsData, null, '\t')}
        </pre>
      </Container>
    );
  }
}

export default ActivityCalender;
