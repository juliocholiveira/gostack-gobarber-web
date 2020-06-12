import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './syles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle size={20} />
        <div>
          <span>Aconteceu um erro</span>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success">
        <FiAlertCircle size={20} />
        <div>
          <span>Aconteceu um erro</span>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error">
        <FiAlertCircle size={20} />
        <div>
          <span>Aconteceu um erro</span>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
