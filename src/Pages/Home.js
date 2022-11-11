import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/actions/users';
import { getgitusers } from '../store/actions/users';
import Grid from '@mui/material/Grid';
import './Home.css';
import {Col, Row} from 'antd';
import axios from 'axios';



function Home(props){
    const dispatch = useDispatch();
    // const users = useSelector(state => state.users.users);
    const x=useSelector(state=>state.users.users)
    console.log("this is x value",x);
    // const [users, setUsers]=useState([]);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);
    const [dataItem, setDataItem] = useState([]);
    // const dataItem=useSelector(state=>state.users.dataItem)
    const [color, setColor]=useState(false);



    const getUserName = async () => {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log("datadata",data)
    setDataItem(data);
    
  }


  // const getuserData=async()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     setUsers(response.data);
  //   });
  // }



  useEffect(() => {
    dispatch(getUsers());
    // getuserData(); 
    getUserName();
  },[])

  

  function changeColor(){
    if(color===false)setColor(true);
    else if(color!==false)setColor(false);
   console.log(color);
  }

  
  return (<div>
   {x.map(item => 
    <Row className="container-first" key={item.name} >
      {dataItem.map(itm =>
        <Col span={6} xs={24} xl={8} sm={24} md={12} lg={6} xxl={6} className="container-fluid mt-5" >
            <div className="card p-2" key={itm.id}>
                <div className="d-flex align-items-center">
                  <div className="image"><img src={itm.avatar_url} alt="img is not available" className="img-thumbnail" width="120rem" /></div><div className="ml-3 w-100">
                    <div className="box-container">
                      <div className="d-flex flex-column">
                        <span className="articles">Name</span><span className="number1">{item.name}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="followers">Phone</span><span className="number2">{item.phone}</span> 
                      </div>
                      <div className="d-flex flex-column">
                        {/* <span className="rating"></span> */}
                        <Col className={color ?`color`:`setColor`} onClick={changeColor}>like</Col>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
          </Col>
        )}
    </Row>)}
  </div>)

}


export default Home;