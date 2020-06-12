import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px;
  overflow: hidden;
`;

const toastTypeVariantions = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Toast = styled.div<ToastProps>`
  display: flex;
  width: 340px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariantions[props.type || 'info']}

  > svg {
    margin: 2px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.8;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
