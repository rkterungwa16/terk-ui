import styled from "styled-components";

export const ToastMessageContainer = styled.div`
  border: 2px solid transparent;
  background-color: #000000de;
  border-radius: 4px;
  max-width: 480px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  color: #fff;
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const ToastMessageTextContainer = styled.div`
  padding: 10px 10px;
  line-height: 1.4;
`;

export const ToastMessageCloseButton = styled.button`
  border: none;
  background-color: transparent;
  fontsize: 16px;
  margintop: 8px;
  marginright: 8px;
  cursor: pointer;
  color: #fff;
`;

export const ToastMainContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
