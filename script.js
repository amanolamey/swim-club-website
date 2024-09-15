function calculateSpeed() {
    const distance = document.getElementById('distance').value;
    const time = document.getElementById('time').value;

    if (distance > 0 && time > 0) {
        // Speed in meters per second
        const speedMS = distance / time;
        
        // Speed in miles per hour
        const speedMPH = (distance / time) * 2.23694;

        document.getElementById('result').innerHTML = `
            Speed: ${speedMS.toFixed(2)} m/s or ${speedMPH.toFixed(2)} mph
            <br><br>
            <strong>GET FASTER BOSS!</strong>
        `;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid values for both distance and time.';
    }
}

