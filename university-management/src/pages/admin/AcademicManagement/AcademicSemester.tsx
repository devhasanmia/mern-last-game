import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { useState } from "react";

interface DataType {
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    filters: [
      {
        text: "2024",
        value: "2024",
      },
      {
        text: "2031",
        value: "2031",
      },
    ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    key: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
    key: "endMonth",
  },
];

const AcademicSemester = () => {
  const [params, setParams] = useState([]);
  const { data, isFetching } = useGetAllSemesterQuery(params);
  const formattedData = data?.data?.map((semester: any) => ({
    key: semester.id,
    name: semester.name,
    year: semester.year,
    startMonth: semester.startMonth,
    endMonth: semester.endMonth,
  }));

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    const queryParams: any = [];

    if (extra.action === "filter") {
      filters.name?.forEach((item) => {
        queryParams.push({ name: "name", value: item });
      });
      filters.year?.forEach((item) => {
        queryParams.push({ name: "year", value: item });
      });
    }
    setParams(queryParams);
    // 'Autumn' | 'Summer' | 'Fall'
    // console.log("Filters", filters)
    // console.log("extra", extra)
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table<DataType>
      columns={columns}
      loading={isFetching}
      dataSource={formattedData}
      onChange={onChange}
      rowKey="key"
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
