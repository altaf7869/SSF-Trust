document.addEventListener("DOMContentLoaded", () => {
    loadFinancialCards();
});

function loadFinancialCards() {
    const container = document.getElementById("financialCards");

    let html = "";

    Object.keys(financialData).forEach((year, index) => {

        const hasFullData = financialData[year].income;

        html += `
        <div class="col-md-4">
            <div class="fin-card text-center h-100">

                <i class="bi bi-file-earmark-bar-graph fin-icon"></i>

                <h5 class="fin-year">
                    FY ${formatYear(year)}
                </h5>

                <p class="text-muted small">
                    ${hasFullData ? "Detailed audited report available" : "Summary report available"}
                </p>

                ${
                    hasFullData
                    ? `<button onclick="downloadFinPDF('${year}')" 
                        class="btn btn-primary w-100 fin-btn">
                        <i class="bi bi-download me-2"></i> Download Report
                       </button>`
                    : `<button onclick="downloadFinPDF('${year}')" 
                        class="btn btn-outline-secondary w-100 fin-btn">
                        View Summary
                       </button>`
                }

            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// Convert 2025-26 → 2025 - 2026
function formatYear(year) {
    const parts = year.split("-");
    return `${parts[0]} - 20${parts[1]}`;
}