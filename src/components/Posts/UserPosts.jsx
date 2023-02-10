import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserPostsThunk } from '../../redux/users/users.thunk';
import { useEffect, useState } from 'react';

export default function UserPosts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  const backHandler = () => {
    navigate(location?.state?.from || '/');
  };

  useEffect(() => {
    dispatch(getUserPostsThunk(userId)).unwrap().then(setPosts);
  }, [userId]);
  return (
    <>
      <button type='button' onClick={backHandler}>{`<-Back`}</button>
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
