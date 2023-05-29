
//import 'antd/dist/antd.css';
import './App.css';
import { Button, Space } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Space className="site-button-ghost-wrapper" wrap>
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="primary" danger ghost>
            Danger
          </Button>
        </Space>
      </header>
    </div>
  );
}

export default App;
