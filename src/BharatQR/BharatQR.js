import { useCallback, useState } from 'react';
import Params from './Params/Params';
import { convertParamToQRString } from './ParamsToString.util';
import QR from './QRCode/QRCode';
import QRString from './QRString/QRString';
import { getParamsJSON } from './stringToParamsUtils';

const BharatQR = () => {
  const [qrString, setQrString] = useState('');
  const [params, setParams] = useState({});

  const onQRStringChange = useCallback((textString) => {
    setQrString(textString);
    setParams(getParamsJSON(textString));
  }, []);

  const onParamChange = useCallback((param) => {
    setParams(param);
    setQrString(convertParamToQRString(param));
  }, []);

  return (
    <div className="container">
      <QRString qrString={qrString} onChange={onQRStringChange}></QRString>
      <QR qrString={qrString} />
      <Params params={params} onChange={onParamChange} />
    </div>
  );
};

export default BharatQR;
