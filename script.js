//your JS code here. If required.
function updateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            document.getElementById('timer').innerText = now.toLocaleString('en-US', options);
        }

        // Initial call to display time immediately
        updateTime();

        // Update the time every second
        setInterval(updateTime, 1000);