const getAllReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations").then((response) =>
    response.json()
  );
};

const postAReservation = (name, date, time, number) => {
  return fetch("http://localhost:3001/api/v1/reservations", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      date: date,
      time: time,
      number: number,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
};

// Add postAReservation to the import link
// replace addReservation spread operator with a the necesscary then statements to add info to the api
// i _think_ this will automatically re-render when react realizes a change has been made...

export { getAllReservations };

// {name: <String>, date: <String>, time: <String>, number: <Number>}
