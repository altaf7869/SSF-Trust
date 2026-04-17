   // ========== CURSOR GLOW ==========
    const cursorGlow = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('mainNav');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        scrollTopBtn.classList.toggle('visible', scrollY > 600);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========== MOBILE NAV AUTO-CLOSE ==========
    const navLinks = document.querySelectorAll('.nav-link-custom');
    const navCollapse = document.getElementById('navContent');
    const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) bsCollapse.hide();
        });
    });

    // ========== ACTIVE NAV LINK ==========
    const sections = document.querySelectorAll('section[id], header[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    // ========== HERO SLIDESHOW ==========
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    setInterval(() => {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }, 6000);

    // ========== HERO PARTICLES ==========
    const particlesContainer = document.getElementById('heroParticles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }

    // ========== STATS COUNTER ==========
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    let statsCounted = false;

    function animateCounters() {
        statNumbers.forEach(el => {
            const target = parseInt(el.dataset.count);
            const suffix = el.querySelector('.accent') ? el.querySelector('.accent').outerHTML : '';
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                if (target > 1000) {
                    el.innerHTML = '₹' + current.toLocaleString('en-IN') + suffix;
                } else {
                    el.innerHTML = current + suffix;
                }

                if (progress < 1) requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
        });
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsCounted) {
                statsCounted = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) statsObserver.observe(statsBar);

    document.getElementById('donorSearch').addEventListener('keyup', function() {
    // 1. Get the search text and convert to lowercase for case-insensitive matching
    let filter = this.value.toLowerCase();
    
    // 2. Target all rows in the table body
    let rows = document.querySelectorAll('#donorBody tr');

    rows.forEach(row => {
        // 3. Get the text from the row (Donor Name and Location)
        let text = row.textContent.toLowerCase();
        
        // 4. If search text is found, show row; otherwise, hide it
        if (text.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

function downloadExcel() {
    const table = document.getElementById("donorTable");
    if (!table || table.rows.length <= 1) {
        alert("No data available to download.");
        return;
    }
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Donors", raw: false });
    XLSX.writeFile(workbook, "Donor_Report.xlsx");
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Header for the document
    doc.setFontSize(16);
    doc.text("Donor Report", 14, 15);

    doc.autoTable({
        html: '#donorTable',
        startY: 25,
        theme: 'grid',
        headStyles: { fillColor: [40, 40, 40] }, // Dark grey for a clean look
        didParseCell: function (data) {
            // Replaces Rupee symbol with Rs. so PDF doesn't break
            if (data.cell.text[0].includes('₹')) {
                data.cell.text[0] = data.cell.text[0].replace('₹', 'Rs. ');
            }
        }
    });
    doc.save("Donor_Report.pdf");
}

function toggleLang(lang) {
    // Content Areas
    const contentEn = document.getElementById('content-en');
    const contentGu = document.getElementById('content-gu');
    
    // Buttons
    const btnEn = document.getElementById('btn-en');
    const btnGu = document.getElementById('btn-gu');

    if (lang === 'en') {
        contentEn.classList.remove('d-none');
        contentGu.classList.add('d-none');
        btnEn.classList.add('active');
        btnGu.classList.remove('active');
    } else {
        contentGu.classList.remove('d-none');
        contentEn.classList.add('d-none');
        btnGu.classList.add('active');
        btnEn.classList.remove('active');
    }
}

function downloadFinPDF(year) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const data = financialData[year];

    function formatAmount(val) {
        return "Rs. " + Number(val.replace(/,/g, "")).toLocaleString("en-IN");
    }

    // ===== HEADER =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Sadbhavana Sarvajanik Foundation", 105, 15, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Financial Report - FY ${year}`, 105, 22, { align: "center" });

    doc.line(20, 25, 190, 25);

    // ===== CASE 1: FULL DATA AVAILABLE =====
    if (data.income && data.expenses) {

        // Income Table
        const incomeBody = data.income.map(i => [
            i.label,
            formatAmount(i.value)
        ]);

        incomeBody.push([
            "TOTAL INCOME",
            formatAmount(data.total_income)
        ]);

        doc.autoTable({
            startY: 35,
            head: [["Income", "Amount"]],
            body: incomeBody,
            theme: "grid",
            columnStyles: {
                0: { halign: "left" },
                1: { halign: "right" }
            }
        });

        // Expense Table
        const expenseBody = data.expenses.map(e => [
            e.label,
            formatAmount(e.value)
        ]);

        expenseBody.push([
            "TOTAL EXPENSE",
            formatAmount(data.total_expense)
        ]);

        doc.autoTable({
            startY: doc.lastAutoTable.finalY + 10,
            head: [["Expenses", "Amount"]],
            body: expenseBody,
            theme: "grid",
            columnStyles: {
                0: { halign: "left" },
                1: { halign: "right" }
            }
        });

        // Net Balance
        const balance =
            Number(data.total_income.replace(/,/g, "")) -
            Number(data.total_expense.replace(/,/g, ""));

        doc.setFont("helvetica", "bold");
        doc.text(
            "Net Balance: " + formatAmount(balance.toString()),
            20,
            doc.lastAutoTable.finalY + 15
        );

    } else {

        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text("Financial Summary", 20, 40);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        doc.text(`Total: ${formatAmount(data.summary.total)}`, 20, 55);
        doc.text(`${data.summary.note}`, 20, 65);
    }

    // ===== FOOTER =====
    doc.setFontSize(10);
    doc.text("Generated by SSF Trust", 105, 285, { align: "center" });

    doc.save(`SSF_Financial_${year}.pdf`);
}