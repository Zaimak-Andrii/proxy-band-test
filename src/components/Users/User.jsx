import { getUserAlbumsService } from '../../services/api';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserAlbumsThunk } from '../../redux/users/users.thunk';

export default function User({ user: { id, name } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [albums, setAlbums] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const clickPostshandler = () => {
    navigate(`/${id}/posts`, { state: { from: location } });
  };

  const clickAlbumsHandler = () => {
    dispatch(getUserAlbumsThunk(id))
      .unwrap()
      .then((data) => {
        setIsModalOpen(true);
        setAlbums(data);
      });
  };

  return (
    <>
      {name}
      <button type='button' onClick={clickPostshandler}>
        Posts
      </button>
      <button type='button' onClick={clickAlbumsHandler}>
        Albums
      </button>
      {isModalOpen && <Modal albums={albums} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
