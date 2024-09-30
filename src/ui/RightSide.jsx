import styled from 'styled-components';
import Calendar from 'react-calendar'; // A calendar library like react-calendar can be used
import 'react-calendar/dist/Calendar.css'; // Calendar's default CSS

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* padding: 2rem; */
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: var(--color-grey-50); */
  /* padding: 2rem; */
  border-radius: var(--border-radius-md);
`;

const Activities = styled.div`
  /* background-color: var(--color-grey-50); */
  padding: 2rem;
  border-radius: var(--border-radius-md);
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-grey-200);
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px; /* Adjust the width of the line */
    background-color: var(
      --color-blue-500
    ); /* Adjust to your desired blue color */
    border-radius: 2px;
  }

  padding-left: 1.6rem; /* Adjust to create space between the line and content */
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const H2 = styled.h2`
  font-size: 1.6;
  margin-bottom: 2rem;
  color: var(--color-grey-700);
`;
const H3 = styled.h3`
  /* font-weight: 400; */
  font-size: 1.5rem;
  color: var(--color-grey-400);
`;
function RightSide() {
  return (
    <RightContainer>
      <CalendarWrapper>
        <H1>Calender</H1>
        <Calendar />
      </CalendarWrapper>

      <Activities>
        <H2>Upcoming Events</H2>
        <ActivityContainer>
          <H3>Feb 24,2024</H3>
          <ActivityItem>
            <span>Meeting with John</span>
            <span>12:00 PM</span>
          </ActivityItem>
        </ActivityContainer>
        <ActivityContainer>
          <H3>Feb 24,2024</H3>
          <ActivityItem>
            <span>Meeting with John</span>
            <span>12:00 PM</span>
          </ActivityItem>
        </ActivityContainer>
        {/* Add more activity items here */}
      </Activities>
    </RightContainer>
  );
}

export default RightSide;
