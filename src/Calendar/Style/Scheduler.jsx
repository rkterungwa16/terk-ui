import styled from "styled-components";
import { FaCalendarDay, FaCalendarWeek, FaCalendarPlus } from "react-icons/fa";

export const SchedulerContainer = styled.div`
  width: 250px;
  max-height: 600px;
  position: relative;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1;
  display: flex;
`;

export const SchedulerSuggestionsContainer = styled.div`
  flex-shrink: 0;
  padding: 4px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const SchedulerSuggestionsItem = styled.button`
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 4px 10px;
  line-height: 24px;
  outline: none;
  width: 100%;
`;

export const SchedulerSuggestionsItemIcon = styled.div`
  display: -webkit-box;
  display: flex;
  position: relative;
  margin-right: 10px;
  color: grey;
`;

export const SchedulerSuggestionsItemLabel = styled.div`
  font-weight: 500;
`;

export const SchedulerSuggestionsItemWeekday = styled.div`
  margin-left: auto;
  color: grey;
`;
