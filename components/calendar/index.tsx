import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

type CalendarProps = {
  onChange: (date: Date) => void;
  selected: Date;
};

const Calendar = ({ onChange, selected }: CalendarProps): JSX.Element => {
  registerLocale("ko", ko);

  return (
    <CustomCalendar>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <CalenderHeader>
            <ButtonWrapper onClick={() => decreaseMonth()}>
              <Icon src="/img/icon/arrow.png" alt="arrow-img" reverse />
            </ButtonWrapper>
            <Title>{`${date.getFullYear()}년 ${`0${date.getMonth() + 1}`.slice(
              -2
            )}월`}</Title>
            <ButtonWrapper onClick={() => increaseMonth()}>
              <Icon src="/img/icon/arrow.png" alt="arrow-img" />
            </ButtonWrapper>
          </CalenderHeader>
        )}
        locale="ko"
        selected={selected}
        onChange={onChange}
        open
      />
    </CustomCalendar>
  );
};

export default Calendar;

const CustomCalendar = styled.div`
  display: flex;
  width: 100%;

  & .react-datepicker {
    width: 400px;
    margin: 0 30px;
    padding: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12),
      2px 6px 12px rgba(0, 0, 0, 0.12);
    border: none;
    margin-top: -9px;

    &__input-container {
      display: none;
      margin-left: 24px;
    }
    &__month-container {
      width: 100%;
    }

    &__triangle {
      display: none;
    }

    &__header {
      background: none;
      border: none;
      padding-top: 0;
      font-size: 15px;
    }

    &__day-name {
      color: #333;
      width: calc(100% / 7);
      padding: 11px 0 0;
      margin: 0;
    }

    &__month {
      margin: 0;
    }

    &__week {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__day {
      width: 40px;
      height: 40px;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      :hover {
        border-radius: 50%;
        background-color: #555;
        color: #999;
      }
    }

    &__day--keyboard-selected {
      color: #000;
      background-color: #fff;
    }

    &__day--selected {
      border-radius: 50%;
      background-color: green;
      color: #fff;
    }
    /* &__day--disabled {
      color: #888;
      :hover {
        background-color: transparent;
        color: #333;
      }
    } */
    &__day--outside-month {
      color: #999;
      :hover {
        background-color: transparent;
        color: #999;
        cursor: default;
      }
    }
    &__day--today {
      font-weight: bold;
    }
  }
`;

const CalenderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 9px 8px;
`;

const Title = styled.span`
  color: #000;
`;

const ButtonWrapper = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const Icon = styled.img<{ reverse?: boolean }>`
  width: 30px;
  height: 30px;
  transform: ${({ reverse }) => (reverse ? `scaleX(-1)` : null)};
`;
