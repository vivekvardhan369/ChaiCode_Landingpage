import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ id, isOpen, setIsOpen, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setIsOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-smoke-light flex ${isOpen ? 'block' : 'hidden'}`}
      id={id}
    >
      <div className="relative p-8 bg-white w-full max-w-4xl m-auto flex-col flex rounded-lg shadow-lg">
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;