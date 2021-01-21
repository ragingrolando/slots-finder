const returned_slots = document.getElementById('returned-slots');

const slotsURL = "https://bookings.qudini.com/booking-widget/booker/slots/AGH63NAX4TC/4373/63930/0?startDate=2021-01-28";

function getSlots() {
    fetch(slotsURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            returned_slots.innerHTML = `<p>${data[0]}</p>`
        })
}

getSlots()