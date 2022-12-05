import { useCallback, useState } from "react";
import Params from "./Params/Params";
import { convertParamToQRString } from "./ParamsToString.util";
import QRString from "./QRString/QRString";
import { getParamsJSON } from "./stringToParamsUtils";

const BharatQR = () => {
  const [qrString, setQrString] = useState("");
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
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: 32,
        gap: 32,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <QRString qrString={qrString} onChange={onQRStringChange}></QRString>
      <Params params={params} onChange={onParamChange} />
    </div>
  );
};

export default BharatQR;
