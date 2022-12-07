import React, { useCallback } from 'react';

const QRString = ({ qrString, onChange }) => {
  const onChangeHandler = useCallback(
    (ev) => {
      const { value } = ev.target;
      onChange(value);
    },
    [onChange]
  );

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(qrString);
  }, [qrString]);
  return (
    <>
      <textarea className="qrstring" rows="10" type="text" value={qrString} onChange={onChangeHandler}></textarea>
      <button className="qrbutton" onClick={onCopy} type="button">
        Copy QR String
      </button>
    </>
  );
};

export default QRString;
