import React from 'react';
import Icon, { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import '../../styles/Searchbar.css';
const { Option } = Select;
function SearchBar(){
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    return(
        <div className="search-bar">
           <div className="drop-down">
                <Select defaultValue="lucy" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                </Select>
           </div>
           <div className='vline'></div>
           <div className="search-container"><input type="text" placeholder="Type your search" className='search-input'></input></div>
           <div className='search-icon'> <Icon component={SearchOutlined} /></div>
        </div>
    )
}
export default SearchBar;