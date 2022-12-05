import { useCallback } from 'react';
import { ParamsDetails } from './Params.utils';

const Param = ({ paramCode, subParamCode, value, label, onChange }) => (
  <>
    <tr>
      <td>{paramCode}</td>
      <td>{subParamCode}</td>
      <td>{label}</td>
      <td>
        <input style={{ fontSize: 24 }} type="text" value={value || ''} onChange={(ev) => onChange(ev.target.value)} />
      </td>
    </tr>
  </>
);

const Params = ({ params, onChange }) => {
  const paramChangeHandler = useCallback(
    (paramKey, val) => {
      const updatedParams = { ...params, [paramKey]: val };
      onChange(updatedParams);
    },
    [onChange, params]
  );

  const renderParams = () => {
    return ParamsDetails.map((paramsObj) => {
      if (paramsObj.hasSubTags) {
        const possibleSubTags = paramsObj.subTags;
        const subTagValue = params[paramsObj.code] || {};

        const subParamChangeHandler = (subParamKey, val) => {
          const updatedSubParams = { ...subTagValue, [subParamKey]: val };
          paramChangeHandler(paramsObj.code, updatedSubParams);
        };

        return possibleSubTags.map((subTagObj) => {
          return (
            <Param
              key={`${paramsObj.code}-${subTagObj.code}`}
              paramCode={paramsObj.code}
              subParamCode={subTagObj.code}
              label={subTagObj.label}
              value={subTagValue[subTagObj.code]}
              onChange={(val) => subParamChangeHandler(subTagObj.code, val)}
            />
          );
        });
      } else {
        return (
          <Param
            key={paramsObj.code}
            paramCode={paramsObj.code}
            label={paramsObj.label}
            value={params[paramsObj.code]}
            onChange={(val) => paramChangeHandler(paramsObj.code, val)}
          />
        );
      }
    });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Tag Code</th>
            <th>Sub Tag Code</th>
            <th>Label</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{renderParams()}</tbody>
      </table>
    </>
  );
};

export default Params;
