import { useEffect} from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export function Modal({ src, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    }
  });

  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };
  const hendleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };
  return  createPortal (<div className={css.Overlay} onClick={hendleBackDropClick}>
      <div className={css.Modal}>
        <img src={src} alt="" />
      </div>
    </div>, modalRoot)
}


