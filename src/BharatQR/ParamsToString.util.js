export const convertParamToQRString = (params) => {
  const qrStringArray = Object.keys(params).map((key) => {
    const value = params[key];
    if (typeof value === "string") {
      return `${key}${String(value.length).padStart(2, "0")}${value}`;
    }
    {
      const subValue = convertParamToQRString(value);
      return `${key}${String(subValue.length).padStart(2, "0")}${subValue}`;
    }
  });

  console.log(qrStringArray);
  const combinedString = qrStringArray.join("");

  return combinedString;
};
