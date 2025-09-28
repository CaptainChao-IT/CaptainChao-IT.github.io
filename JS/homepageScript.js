function updateUTCClock() {
    const now = new Date();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = now.getUTCDate().toString().padStart(2, "0");
    const monthName = months[now.getUTCMonth()];
    const year = now.getUTCFullYear();

    const dateUTC = `${day} ${monthName} ${year}`;

    const timeUTC = now.toISOString().split("T")[1].split(".")[0] + " UTC";

    const timeEl = document.querySelector(".time");
    const dateEl = document.querySelector(".date");

    if (timeEl && dateEl) {
        timeEl.textContent = timeUTC;
        dateEl.textContent = dateUTC;
    }
}

updateUTCClock();
setInterval(updateUTCClock, 1000);