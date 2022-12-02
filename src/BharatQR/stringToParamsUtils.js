import { ParamsDetails } from "./Params/Params.utils";

export const getParamsJSON = (qrString) => {
  const tags = {};
  for (let i = 0; i < qrString.length; ) {
    const tag = qrString.substring(i, i + 2);
    i += 2;
    const valueLength = Number(qrString.substring(i, i + 2));
    i += 2;

    const param = ParamsDetails.find((params) => params.code === tag);
    let value;
    if (param?.hasSubTags) {
      const subValue = qrString.substring(i, i + valueLength);
      value = getParamsJSON(subValue);
    } else {
      value = qrString.substring(i, i + valueLength);
    }
    i += valueLength;
    tags[tag] = value;
  }

  return tags;
};
