import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent/AddStudent';
import Dashboard from './Components/Dashboard';
import EditStudents from './Components/ManageStudent/EditStudents';
import ManageStudent from './Components/ManageStudent/ManageStudent';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
          <Route index element={<AddStudent />}></Route>
          <Route path='/home' element={<AddStudent/>}></Route>
          <Route path='/manage-student' element={<ManageStudent/>}></Route>
          <Route path='/edit-student/:id' element={<EditStudents/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
