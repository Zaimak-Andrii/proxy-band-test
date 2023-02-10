import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ albums, onClose }) {
  useEffect(() => {
    const keyDownHandler = (evt) => {
      if (evt.code !== 'Escape') return;
      onClose();
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.modal}
      onClick={(evt) => {
        if (evt.target !== evt.currentTarget) return;
        onClose();
      }}
    >
      <div className={css.modalContent}>
        <p>User id: {albums[0]?.userId}</p>
        <ul>
          {albums.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </div>,
    modalRoot
  );
}
