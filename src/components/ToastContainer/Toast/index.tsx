import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const icons = {
    info: <FiInfo size={18} />,
    error: <FiAlertCircle size={18} />,
    success: <FiCheckCircle size={18} />,
  };

  const { remToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      remToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, remToast]);

  return (
    <Container type={message.type} style={style}>
      {icons[message.type || 'info']}
      <div>
        <span>{message.title}</span>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => remToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
