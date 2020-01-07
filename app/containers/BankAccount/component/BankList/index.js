/*
 * Bank List
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';

import { getBanks } from 'api/bankApi';

// import bankData from 'resources/data/bankData';
import BankItem from '../BankItem';

class BankList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankData: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getBanks().then(data =>
      this.setState({
        bankData: data,
        isLoading: false,
      }),
    );
  }

  render() {
    const { bankData, isLoading } = this.state;

    if (isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <div>
        <Row>
          {bankData.map((item, i) => (
            <Col xl={3} lg={4} md={6} key={`bankitem${i.toString()}`}>
              <BankItem bankitem={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default BankList;
