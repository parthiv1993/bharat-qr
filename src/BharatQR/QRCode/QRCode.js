import React from 'react';
import QRCode from 'react-qr-code';

const QR = ({ qrString }) => {
  return (
    <>
      <div className="qr-code">
        <QRCode
          size={1024}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={qrString}
          viewBox={`0 0 1024 1024`}
        />
      </div>
    </>
  );
};

export default QR;
