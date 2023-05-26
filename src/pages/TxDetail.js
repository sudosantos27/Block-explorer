import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TxInfo from '../components/TxInfo';
const TxDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tx = searchParams.get("tx");
  useEffect(() => {
    if(!tx) {
      navigate('/');
    }
  }, []);
  return (
    <React.Fragment>
      <TxInfo
        tx={tx}
      />
    </React.Fragment>
  )
}

export default TxDetail