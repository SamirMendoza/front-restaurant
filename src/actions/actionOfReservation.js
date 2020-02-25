  export function deleteReservatione(reservation) {
    fetch('http://localhost:8080/restaurant/reservations/delete', {
      method: 'PUT',
      body: JSON.stringify({
        id: reservation.code
      }),
      headers:{ 'Content-Type': 'application/json' }
    });
  }