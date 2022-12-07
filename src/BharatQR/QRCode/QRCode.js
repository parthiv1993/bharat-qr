import React from 'react';
import QRCode from 'react-qr-code';

const QR = ({ qrString }) => {
  const saveSvg = () => {
    const svgEl = document.getElementById('qr-code');
    svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgData = svgEl.outerHTML;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svgBlob = new Blob([preface, svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'qr';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadToPNG = () => {
    const svg = document.getElementById('qr-code');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const data = new XMLSerializer().serializeToString(svg);
    const DOMURL = window.URL || window.webkitURL || window;

    const img = new Image();
    const svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);

      const imgURI = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

      var evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true,
      });

      var a = document.createElement('a');
      a.setAttribute('download', 'qr-code.png');
      a.setAttribute('href', imgURI);
      a.setAttribute('target', '_blank');

      a.dispatchEvent(evt);
    };

    img.src = url;
  };

  return (
    <>
      <div className="qr-code">
        <QRCode
          id="qr-code"
          size={1024}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={qrString}
          viewBox={`0 0 1024 1024`}
        />
        <canvas id="canvas" style={{ display: 'none' }} width="1024" height="1024"></canvas>
      </div>

      <button style={{ gridArea: 'download-svg' }} onClick={saveSvg}>
        Download SVG
      </button>
      <button style={{ gridArea: 'download-png' }} onClick={downloadToPNG}>
        Download PNG
      </button>
    </>
  );
};

export default QR;
