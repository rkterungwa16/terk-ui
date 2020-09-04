import styled from "styled-components";

export const ToastMessageContainer = styled.div`
  border: 2px solid transparent;
  background-color: #fafafa;
  border-radius: 4px;
  max-width: 480px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const ToastMessageTextContainer = styled.div`
  padding: 16px 24px;
  line-height: 1.4;
`;

export const ToastMessageCloseButton = styled.button`
  border: none;
  background-color: transparent;
  fontsize: 16px;
  margintop: 8px;
  marginright: 8px;
  cursor: pointer;
`;

export const ToastMainContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
