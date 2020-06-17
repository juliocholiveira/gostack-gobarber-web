import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../hooks/ToastContext';

import { Container, Toast } from './syles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { remToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id}>
          <FiAlertCircle size={20} />
          <div>
            <span>{message.title}</span>
            {message.description && <p>{message.description}</p>}
          </div>
          <button onClick={() => remToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
