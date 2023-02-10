import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import UserPosts from './components/Posts/UserPosts';
import Users from './components/Users/Users';
import { selectUsers } from './redux/users/users.selectors';
import { getUsersThunk } from './redux/users/users.thunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path='/:userId/posts' element={<UserPosts />} />
    </Routes>
  );
}

export default App;
