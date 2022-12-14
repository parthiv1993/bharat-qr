export const ParamsDetails = [
  { code: '00', label: 'Initiation Mode' },
  { code: '01', label: '01' },
  { code: '02', label: 'mPAN' },
  { code: '03', label: 'mPAN' },
  { code: '04', label: '04' },
  { code: '06', label: '06' },
  { code: '08', label: 'IFSC Account' },
  {
    code: '26',
    label: 'Payee VPA',
    hasSubTags: true,

    subTags: [
      { code: '00', label: '00' },
      {
        code: '01',
        label: 'payee vpa',
        remarks: [
          <div>
            <p>
              <b>Mandatory</b>
            </p>
            <p>eg: test@mybank</p>
          </div>,
        ],
      },
      { code: '02', label: 'minimum amount' },
    ],
  },
  {
    code: '27',
    label: 'Transaction',
    hasSubTags: true,
    subTags: [
      { code: '00', label: '00' },
      { code: '01', label: 'transaction id' },
      { code: '02', label: 'ref url' },
    ],
  },

  {
    code: '28',
    label: '',
    hasSubTags: true,
    subTags: [
      { code: '00', label: '00' },
      { code: '01', label: 'Aadhar Number' },
    ],
  },
  { code: '52', label: 'mc code', maxLength: 3 },
  { code: '53', label: 'currency', maxLength: 3 },
  { code: '54', label: 'amount', maxLength: 3 },
  { code: '55', label: 'Convenience fee indicator' },
  { code: '56', label: 'Convenience Fee Fixed Amount', maxLength: 3 },
  { code: '57', label: 'Convenience Fee Percentage', maxLength: 3 },
  { code: '58', label: 'Country Code', maxLength: 3 },
  { code: '59', label: 'Merchant Name', maxLength: 3 },
  { code: '60', label: 'Merchant city', maxLength: 3 },
  { code: '61', label: 'Postal Code', maxLength: 3 },
  {
    code: '62',
    label: 'Biller Details',
    hasSubTags: true,

    subTags: [
      { code: '01', label: 'Bill Number' },
      { code: '02', label: 'Mobile Number' },
      { code: '03', label: 'Store Label' },
      { code: '04', label: 'Loyalty Number' },
      { code: '05', label: 'Reference ID' },
      { code: '06', label: 'Consumer ID' },
      { code: '07', label: 'Terminal ID' },
      { code: '08', label: '' },
      { code: '09', label: 'Additional Data' },
    ],
  },
  { code: '63', label: 'Tag63', maxLength: 3 },
];
