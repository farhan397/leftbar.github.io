
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Users from './pages/Users';
import Messages from './pages/Messages';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';

import Order from './pages/Order';
import Saved from './pages/Saved';
import Setting from './pages/Setting';
import Filemanagers from './pages/Filemanagers';
import Sidebar from './componenets/Sidebar';

function App() {
  return (
    <>
     <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/file-manager" element={<Filemanagers/>}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
      </Routes>
      </Sidebar>
     </Router>
    </>
  );
}

export default App;
