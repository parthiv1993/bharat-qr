import { useCallback } from 'react';
import { ParamsDetails } from './Params.utils';

import './Params.css';

const Param = ({ paramCode, subParamCode, value, label, onChange, remarks }) => (
  <>
    <p className="param-code">{paramCode}</p>
    <p className="subparam-code">{subParamCode}</p>
    <p className="label">{label}</p>

    <div className="info">
      {remarks && (
        <>
          &#9432;
          <div className="remarks">{remarks}</div>
        </>
      )}
    </div>

    <textarea
      className="value"
      style={{ fontSize: 24 }}
      type="text"
      value={value || ''}
      onChange={(ev) => onChange(ev.target.value)}
    />
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
              remarks={subTagObj.remarks}
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
            remarks={paramsObj.remarks}
          />
        );
      }
    });
  };

  return (
    <>
      {/* <table className="table">
        <thead>
          <tr>
            <th>Tag Code</th>
            <th>Sub Tag Code</th>
            <th>Label</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{renderParams()}</tbody>
      </table> */}

      <div className="params-qr-table">
        <h2 className="param-code">Tag Code</h2>
        <h2 className="subparam-code">Sub Tag Code</h2>
        <h2 className="label">Label</h2>
        <h2 className="info">info</h2>
        <h2 className="value">Value</h2>
        <>{renderParams()}</>
      </div>
    </>
  );
};

export default Params;
