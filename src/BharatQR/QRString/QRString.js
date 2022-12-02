import React, { useCallback } from "react";

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
      <textarea
        style={{ width: "90%", fonSize: "20px" }}
        rows="10"
        type="text"
        value={qrString}
        onChange={onChangeHandler}
      ></textarea>
      <button onClick={onCopy} type="button">
        Copy
      </button>
    </>
  );
};

export default QRString;
