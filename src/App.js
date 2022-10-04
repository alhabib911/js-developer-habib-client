import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent/AddStudent';
import Dashboard from './Components/Dashboard';
import ManageStudent from './Components/ManageStudent/ManageStudent';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<AddStudent />}></Route>
          <Route path='/home' element={<AddStudent />}></Route>
          <Route path='/manage-student' element={<ManageStudent />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
