import styled from "styled-components";

export const Datepicker = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow: hidden;
`;
export const DatepickerHeader = styled.div`
  isplay: -webkit-box;
  display: flex;
  flex-shrink: 0;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 4px 10px 4px 16px;
`;

// export const DatepickerHeaderMonth = styled.span`
// `;

// export const DatepickerHeaderActions = styled.div`
// `;

// export const DatepickerHeaderAction = styled.button`
// `;

export const DatepickerMonthlistHeader = styled.div`
  flex-shrink: 0;
`;

export const DatepickerMonthlistHeaderLabels = styled.div`
  padding: 0 10px;
  font-size: 10px;
  color: grey;
  display: -webkit-box;
  display: flex;
`;

export const DatepickerMonthlistWrapper = styled.div`
  overflow: auto;
  height: 180px;
  margin-right: -17px;
  padding-right: 0px;
`;

export const DatepickerMonthlist = styled.div`
  position: relative;
  height: 200000px;
`;

export const DatepickerMonth = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

// export const DatepickerMonthFirst = styled.div`
// `;

export const DatepickerMonthHeader = styled.div`
  font-size: 12px;
  font-weight: 700;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  margin: 0 16px 4px;
`;
