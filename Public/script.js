console.log("Smart Waste v2 loaded");

// Fungsi Refresh Status
function fetchStatus() {
  console.log("🔄 Fetching status...");

  // Simulasi data (gantikan dengan fetch dari backend)
  const status = {
    kompartemen: "Organik terbuka",
    jenis: "Kertas",
    waktu: new Date().toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta"
    }),
    kapasitas: [65, 40] // Organik, Anorganik
  };

  // Update UI
  document.getElementById("status-kompartemen").innerText = status.kompartemen;
  document.getElementById("jenis-sampah").innerText = status.jenis;
  document.getElementById("waktu-update").innerText = status.waktu;
  document.getElementById("last-fetch").innerText = `Terakhir refresh: ${status.waktu}`;

  // Update Chart
  updateChart(status.kapasitas);
}

// Auto-refresh setiap 10 detik
setInterval(fetchStatus, 10000);
document.addEventListener("DOMContentLoaded", fetchStatus);

// Modal logic
function openModal() {
  document.getElementById("statusModal").style.display = "block";
}

function closeModal() {
  document.getElementById("statusModal").style.display = "none";
}

// Klik di luar modal untuk tutup
window.onclick = function (event) {
  const modal = document.getElementById("statusModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// CHART
let trashChart; // Global chart variable

function setupChart() {
  const ctx = document.getElementById("trashChart").getContext("2d");
  trashChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Organik", "Anorganik"],
      datasets: [{
        label: "Persentase Penuh (%)",
        data: [0, 0],
        backgroundColor: ["#2ecc71", "#27ae60"],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Update chart dengan data baru
function updateChart(kapasitas) {
  if (trashChart) {
    trashChart.data.datasets[0].data = kapasitas;
    trashChart.update();
  }
}

document.addEventListener("DOMContentLoaded", setupChart);
