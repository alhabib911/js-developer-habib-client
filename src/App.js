import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent/AddStudent';
import Authentication from './Components/Authentication/Authentication';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard';
import ManageStudent from './Components/ManageStudent/ManageStudent';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={
            <RequireAuth>
              <AddStudent />
            </RequireAuth>

          }></Route>
          <Route path='/home' element={
            <RequireAuth>
              <AddStudent />
            </RequireAuth>
          }></Route>
          <Route path='/manage-student' element={
            <RequireAuth>
              <ManageStudent />
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Authentication />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
