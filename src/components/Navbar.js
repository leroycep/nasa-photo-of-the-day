import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 100px;
`;

export default function Navbar(props) {
  const [date, setDate] = [props.date, props.setDate];

  let addDaysToDate = numDays => {
    // Clone the previous date
    let d = new Date(date.getTime());
    d.setDate(d.getDate() + numDays);
    setDate(d);
  };

  let now = new Date();
  let dateIsToday = date.getUTCFullYear() === now.getUTCFullYear();
  dateIsToday = dateIsToday && date.getUTCMonth() === now.getUTCMonth();
  dateIsToday = dateIsToday && date.getUTCDate() === now.getUTCDate();

  return (
    <Container>
      <Button onClick={ev => addDaysToDate(-1)}>Previous</Button>
      <input
        type="date"
        onInput={ev => setDate(new Date(ev.target.value))}
        placeholder={formatDate(date)}
      />
      <Button
        onClick={ev => addDaysToDate(1)}
        enabled={dateIsToday ? "enabled" : "disabled"}
      >
        Next
      </Button>
    </Container>
  );
}

export function formatDate(date) {
  const month = (date.getUTCMonth() + 1).toString().padStart(2, 0);
  const dateOfMonth = date
    .getUTCDate()
    .toString()
    .padStart(2, 0);
  return `${date.getUTCFullYear()}-${month}-${dateOfMonth}`;
}
