// Shared analysis page logic
// Reads card ID from <body data-card-id="..."> and renders the analysis page
(function() {
  let CARD, TERMS, benefits;

  function init() {
    const cardId = document.body.dataset.cardId;
    CARD = (window.CARDS || []).find(c => c.id === cardId);
    if (!CARD) {
      document.body.innerHTML = `<div style="padding:40px;text-align:center;color:#999;">Card not found: ${cardId || '(no card-id set)'}</div>`;
      return;
    }
    TERMS = CARD.terms || {};
    benefits = CARD.benefits || [];

    document.title = CARD.name + ' - Card Analysis';

    buildPage();
    renderBenefits();
    setupEventListeners();
    updateSummary();
  }

  function dollarValue(b, sliderVal) {
    return b.miles ? Math.round(b.miles * sliderVal / 100) : sliderVal;
  }

  function formatDisplay(b, sliderVal) {
    if (b.miles) {
      const dollars = dollarValue(b, sliderVal);
      return `$${dollars} <span style="font-size:0.75rem;color:#666;font-weight:500">(${sliderVal.toFixed(1)}¢/mi)</span>`;
    }
    return `$${sliderVal}`;
  }

  function formatRangeLabel(b, val) {
    return b.miles ? `${val}¢` : `$${val}`;
  }

  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  function buildPage() {
    const main = document.createElement('div');
    main.className = 'container';
    main.innerHTML = `
      <a href="index.html" class="back-link">← All cards</a>
      <p class="page-subtitle">Adjust sliders to estimate your personal value for each benefit</p>
      <div class="sticky-top">
        <header><h1>${CARD.name}</h1></header>
        <div class="summary-bar">
          <div class="summary-item">
            <div class="label">Total Benefits</div>
            <div class="value positive" id="total-benefits">$0</div>
            <div class="sub-value positive" id="total-benefits-y1">First year: $0</div>
          </div>
          <div class="summary-item">
            <div class="label">Annual Fee</div>
            <div class="value negative" id="annual-fee">-$0</div>
            <div class="sub-value negative" id="annual-fee-y1">First year: -$0</div>
          </div>
          <div class="summary-item">
            <div class="label">Net Value</div>
            <div class="value" id="net-value">$0</div>
            <div class="sub-value" id="net-value-y1">First year: $0</div>
          </div>
        </div>
      </div>
      <div id="benefits-container"></div>
    `;
    document.body.appendChild(main);

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" type="button" aria-label="Close">×</button>
        <div class="modal-title" id="modal-title"></div>
        <div class="modal-body" id="modal-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function renderBenefits() {
    const container = document.getElementById('benefits-container');
    let currentSection = '';
    benefits.forEach((b, i) => {
      if (b.section && b.section !== currentSection) {
        currentSection = b.section;
        container.insertAdjacentHTML('beforeend', `<h2 class="section-title">${b.section}</h2>`);
      }
      const step = b.miles ? 0.1 : 1;
      const hasTerms = !!TERMS[b.name];
      container.insertAdjacentHTML('beforeend', `
        <div class="benefit-card">
          <div class="benefit-left">
            <div class="benefit-header">
              <span class="benefit-name">${b.name}${hasTerms ? `<span class="info-icon" data-benefit-name="${escapeAttr(b.name)}" title="View terms">i</span>` : ''}</span>
              <span class="benefit-value-display" id="val-${i}">${formatDisplay(b, b.default)}</span>
            </div>
            <div class="benefit-desc">${b.desc}</div>
            ${b.comment ? `<div class="benefit-comment">💡 ${b.comment}</div>` : ''}
          </div>
          <div class="benefit-right">
            <div class="slider-row">
              <span class="slider-min">${formatRangeLabel(b, b.min)}</span>
              <input type="range" min="${b.min}" max="${b.max}" value="${b.default}" step="${step}" data-index="${i}">
              <span class="slider-max">${formatRangeLabel(b, b.max)}</span>
            </div>
          </div>
        </div>
      `);
    });
  }

  function setupEventListeners() {
    const container = document.getElementById('benefits-container');

    // Slider input -> live-update value display + summary totals
    container.addEventListener('input', (e) => {
      if (e.target.matches('input[type="range"]')) {
        const i = parseInt(e.target.dataset.index);
        const val = parseFloat(e.target.value);
        const b = benefits[i];
        document.getElementById(`val-${i}`).innerHTML = formatDisplay(b, val);
        updateSummary();
      }
    });

    // Info icon click -> open modal with the benefit's terms
    container.addEventListener('click', (e) => {
      const icon = e.target.closest('.info-icon');
      if (icon) {
        openModal(icon.dataset.benefitName);
      }
    });

    // Modal close: backdrop click, close button, Escape key
    const modal = document.getElementById('modal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function updateSummary() {
    let ongoing = 0;
    let firstYearBonus = 0;
    document.querySelectorAll('input[type="range"]').forEach(el => {
      const i = parseInt(el.dataset.index);
      const b = benefits[i];
      const val = dollarValue(b, parseFloat(el.value));
      if (b.firstYearOnly) {
        firstYearBonus += val;
      } else {
        ongoing += val;
      }
    });
    const firstYearTotal = ongoing + firstYearBonus;

    document.getElementById('total-benefits').textContent = `$${ongoing}`;
    document.getElementById('total-benefits-y1').textContent = `First year: $${firstYearTotal}`;
    document.getElementById('annual-fee').textContent = CARD.annualFee ? `-$${CARD.annualFee}` : '$0';
    document.getElementById('annual-fee-y1').textContent = CARD.annualFee ? `First year: -$${CARD.annualFee}` : 'First year: $0';

    const netOngoing = ongoing - CARD.annualFee;
    const netY1 = firstYearTotal - CARD.annualFee;
    const netEl = document.getElementById('net-value');
    netEl.textContent = (netOngoing >= 0 ? '+' : '') + `$${netOngoing}`;
    netEl.className = 'value ' + (netOngoing >= 0 ? 'positive' : 'negative');
    const netY1El = document.getElementById('net-value-y1');
    netY1El.textContent = `First year: ${netY1 >= 0 ? '+' : ''}$${netY1}`;
    netY1El.className = 'sub-value ' + (netY1 >= 0 ? 'positive' : 'negative');
  }

  function openModal(name) {
    const text = TERMS[name];
    if (!text) return;
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-body').textContent = text;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
