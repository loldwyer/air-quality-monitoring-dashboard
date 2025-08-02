async function getData() {
  try {
    const res = await fetch("http://192.168.1.100/data"); // Replace with your ESP32 IP
    const data = await res.json();
    document.getElementById("temp").textContent = "Temperature: " + data.temperature + " °C";
    document.getElementById("hum").textContent = "Humidity: " + data.humidity + " %";
    document.getElementById("co2").textContent = "CO₂: " + data.co2 + " ppm";
    document.getElementById("pm1").textContent = "PM1.0: " + data.pm1 + " µg/m³";
    document.getElementById("pm25").textContent = "PM2.5: " + data.pm2_5 + " µg/m³";
    document.getElementById("pm10").textContent = "PM10: " + data.pm10 + " µg/m³";
    document.getElementById("time").textContent = "Last Updated: " + data.timestamp;
  } catch (err) {
    console.error("Failed to fetch sensor data", err);
  }
}
setInterval(getData, 5000);
getData();
