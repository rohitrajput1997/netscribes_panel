import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";

export const columnsOne = [
  {
    title: "Metrics",
    dataIndex: "metrics",
    key: "metrics",
    render: (data) => <p className="pl-3">{data}</p>,
  },
  {
    title: "Period",
    dataIndex: "period",
    key: "period",
    render: (data) => {
      return <NSDropdown options={[]} className="w-32" />;
    },
    align: "center",
  },
  {
    title: "Current",
    dataIndex: "current",
    key: "current",
    align: "center",
  },
  {
    title: "Target",
    dataIndex: "target",
    key: "target",
    render: (data) => {
      return (
        <NSInput
          type="number"
          className="w-32 mt-2"
          style={{ height: "20px", width: "200px" }}
        />
      );
    },
    align: "end",
  },
];

export const columnsTwo = [
  {
    title: "Product name",
    dataIndex: "productName",
    key: "productName",
    width: 150,
  },
  {
    title: "Opt. Status",
    dataIndex: "optStatus",
    key: "optStatus",
  },
  {
    title: "Last repricing",
    dataIndex: "lastRepricing",
    key: "lastRepricing",
  },
];

export const columnsThree = [
  {
    title: "Repricing",
    dataIndex: "repricing",
    key: "repricing",
    render: (data) => <p className="text-sm">{data}</p>,
    width: 100,
  },
  {
    title: "Focus",
    dataIndex: "focus",
    key: "focus",
    render: (data) => <p>Grow</p>,
  },
  {
    title: "Repricing Sensitivity",
    dataIndex: "repricingSen",
    key: "repricingSen",
    render: (data, record, index) => {
      console.log(record);
      return (
        <div className="flex justify-between items-center">
          <p>{record?.repricingSen}</p>&nbsp;&nbsp;
          <p>{record?.repricingSenSub}</p>
        </div>
      );
    },
  },
];
