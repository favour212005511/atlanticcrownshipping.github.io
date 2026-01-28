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
    display.innerHTML = `<p>Status for <strong>${number}</strong>: <span class="status ${status.replace(' ', '-')}">${status}</span></p>`;
  } else {
    display.innerHTML = `<p>Tracking Number <strong>${number}</strong> not found.</p>`;
  }
}

function updateStatus(status) {
  const number = document.getElementById('trackingNumber').value.toUpperCase();
  const display = document.getElementById('statusDisplay');

  if(shipments[number]) {
    shipments[number] = status;
    display.innerHTML = `<p>Status for <strong>${number}</strong> updated to: <span class="status ${status.replace(' ', '-')}">${status}</span></p>`;
  } else {
    display.innerHTML = `<p>Please enter a valid tracking number to update.</p>`;
  }
}
