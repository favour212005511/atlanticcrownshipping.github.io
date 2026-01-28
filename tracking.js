let shipments = {
  "AC001": "In Transit",
  "AC002": "Delivered",
  "AC003": "On Hold"
};

function checkStatus() {
  const number = document.getElementById('trackingNumber').value.toUpperCase();
  const display = document.getElementById('statusDisplay');

  if(shipments[number]) {
    const status = shipments[number];
    let icon = status === "Delivered" ? "✅" : status === "In Transit" ? "🚚" : "⏸️";
    display.innerHTML = `<p>Status for <strong>${number}</strong>: <span class="status">${icon} ${status}</span></p>`;
  } else {
    display.innerHTML = `<p>Tracking Number <strong>${number}</strong> not found.</p>`;
  }
}
