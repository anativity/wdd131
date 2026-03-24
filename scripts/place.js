document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(t, s) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

if (temp <= 50 && wind > 3) {
  document.getElementById("windchill").textContent =
    calculateWindChill(temp, wind) + " °F";
} else {
  document.getElementById("windchill").textContent = "N/A";
}