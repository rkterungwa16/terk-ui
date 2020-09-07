import {
  SchedulerSuggestionsContainer,
  SchedulerSuggestionsItem,
  SchedulerSuggestionsItemIcon,
  SchedulerSuggestionsItemLabel,
  SchedulerSuggestionsItemWeekday,
} from "../Style";
import { FaCalendarDay, FaCalendarWeek, FaCalendarPlus } from "react-icons/fa";

export const SchedulerSuggestions = () => (
  <SchedulerSuggestionsContainer>
    <SchedulerSuggestionsItem>
      <FaCalendarDay />
      <SchedulerSuggestionsItemLabel>Today</SchedulerSuggestionsItemLabel>
      <SchedulerSuggestionsItemWeekday>Sat</SchedulerSuggestionsItemWeekday>
    </SchedulerSuggestionsItem>

    <SchedulerSuggestionsItem>
      <FaCalendarPlus />
      <SchedulerSuggestionsItemLabel>Tomorrow</SchedulerSuggestionsItemLabel>
      <SchedulerSuggestionsItemWeekday>Sun</SchedulerSuggestionsItemWeekday>
    </SchedulerSuggestionsItem>

    <SchedulerSuggestionsItem>
      <FaCalendarWeek />
      <SchedulerSuggestionsItemLabel>Next week</SchedulerSuggestionsItemLabel>
      <SchedulerSuggestionsItemWeekday>Mon</SchedulerSuggestionsItemWeekday>
    </SchedulerSuggestionsItem>
  </SchedulerSuggestionsContainer>
);
