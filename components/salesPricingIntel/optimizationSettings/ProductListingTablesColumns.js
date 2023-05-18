import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";

export const columnsOne = [
    {
      title: "Matrics",
      dataIndex: "metrics",
      key: "metrics",
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
      render: (data) => {
        return (
            <NSDropdown options={[]} className='w-32' />
        )
      }
    },
    {
      title: "Current",
      dataIndex: "current",
      key: "current",
    },
    {
      title: "Target",
      dataIndex: "target",
      key: "target",
      render: (data) => {
        return (
            <NSInput type='number' className='w-32 mt-2' style={{height: '20px'}} />
        )
      }
    },
  ];

export const columnsTwo = [
    {
      title: "Product Name",
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
      title: "Last Repricing",
      dataIndex: "lastRepricing",
      key: "lastRepricing",
    }
  ];

export const columnsThree = [
    {
      title: "Repricing Focus:",
      dataIndex: "productName",
      key: "productName",
      render: (data) => (
        <div>
            <p>Sales Items</p>
            <p>Grow</p>
        </div>
      )
    },
    {
        title: "Repricing Sensitivity:",
        dataIndex: "optStatus",
        key: "optStatus",
        render: (data) => (
          <div>
              <p>Sales Items</p>
              <p>Grow</p>
          </div>
        )
    }
];