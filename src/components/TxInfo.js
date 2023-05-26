import React, { useState, useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

function TxInfo(props) {
  const navigate = useNavigate();
  const { tx } = props;
  const [txInfo, setTxInfo] = useState(null);
  useEffect(() => {
    readTx();
  }, []);
  const readTx = async (e) => {
    const _txInfo = await alchemy.core.getTransactionReceipt(tx);
    console.log(_txInfo);
    setTxInfo(_txInfo)
  }
  const goHome = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <React.Fragment>
      <Card>
        <Card.Header>Last Block Info</Card.Header>
        <Card.Body>
          <Card.Title>Main Info</Card.Title>
          <div>
            <Row>
              <Col>
                {txInfo ?
                  "TX Hash :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {txInfo ?
                  txInfo.blockHash :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {txInfo ?
                  "Block Number :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {txInfo ?
                  txInfo.blockNumber :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {txInfo ?
                  "From :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {txInfo ?
                  txInfo.from :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {txInfo ?
                  "To :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {txInfo ?
                  txInfo.to :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>}
              </Col>
            </Row>
          </div>
          <Button className='button-card' variant="primary" onClick={(e) => goHome(e)}>
            Go Home
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default TxInfo;