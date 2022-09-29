import logo from './logo.svg';
import "antd/dist/antd.css";
import { TimePicker } from 'antd';
import './App.css';

function App() {
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
      }}>
      <h4>ReactJS Ant-Design TimePicker Component</h4>
      <>
          <TimePicker onChange={(time) => console.log(time)} />,
      </>
      </div>
  );
}

export default App;
