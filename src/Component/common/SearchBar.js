import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const SearchBar = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);

export default SearchBar;
