// U.S. Bank Smartly Visa Signature Card data
(function() {
  const terms = {
    "Unlimited 2% Cash Back": `Cash back rewards are earned under the U.S. Bank Smartly™ Visa Signature® Card program. These rewards are earned as "Points", and U.S. Bank will credit your card with 2 Points for every $1 spent in eligible Net Purchases (Purchases minus credits and returns). These cash back rates can be obtained when rewards are redeemed into an eligible U.S. Bank deposit account. Other redemptions, such as for statement credits and gift cards, may be at a reduced redemption rate.`,

    "Smartly Earning Bonus": `You may earn additional Points for a Smartly Earning Bonus if you have or open a U.S. Bank Smartly® Savings account (minimum opening deposit of $25) and have a Qualifying Balance with U.S. Bank in open consumer Bank Smartly® Checking and/or Safe Debit account(s). Based on your Qualifying Balance, you earn: between $10,000-$49,999.99 a total of 2.5 Points per $1 (base 2 plus 0.5 bonus); between $50,000-$99,999.99 a total of 3 Points per $1 (base 2 plus 1 bonus); or $100,000 or more a total of 4 Points per $1 (base 2 plus 2 bonus). The Smartly Earning Bonus applies to a maximum of $10,000 in eligible Net Purchases each Card billing cycle; purchases over $10,000 per billing cycle earn the base 2 Points per $1. Some purchase categories (education/school, gift cards, insurance, tax, business-to-business, third-party bill payment) earn only the base 2 Points. Qualifying Balance is a 30-day average of all qualifying accounts. Account relationship exclusions apply.`,

    "0% Intro APR": `The 0% introductory APR applies to purchases and is valid for the first 12 billing cycles. The 0% introductory APR applies to balance transfers made within 60 days of account opening and is valid for the first 12 billing cycles. The introductory rate does not apply to cash advances. Balance Transfer fee of 5% of each transfer amount, $5 minimum will apply. Balance Transfer transactions from other U.S. Bank National Association accounts are not permitted.`,

    "Cash-Back Deals": `Get cash back from the brands you love via Cash-back deals, personalized offers based on your previous spending. Access them through the U.S. Bank Mobile App or online banking.`,

    "ExtendPay Plan": `U.S. Bank ExtendPay® Plans provide a payment option that allows you to divide eligible credit card purchases into affordable monthly payments with no interest – just a fixed monthly fee. Receive a new cardmember $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening.`,
  };

  const benefits = [
    // First-Year Bonuses
    { section: "First-Year Bonuses", name: "0% Intro APR", desc: "0% APR on purchases and balance transfers for 12 billing cycles. Estimate interest savings.", min: 0, max: 1000, default: 200, firstYearOnly: true },
    { name: "ExtendPay Plan", desc: "$0 fee on ExtendPay Plans opened in first 60 days", min: 0, max: 50, default: 0, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "Unlimited 2% Cash Back", desc: "Unlimited 2% cash back on every purchase, no caps. Estimate annual dollar value earned.", min: 0, max: 600, default: 0 },
    { name: "Smartly Earning Bonus", desc: "Up to an additional 2% cash back (2.5% / 3% / 4% total) on your first $10,000 in eligible Net Purchases each billing cycle, based on qualifying U.S. Bank deposit balances. Estimate the extra annual dollar value earned.", min: 0, max: 600, default: 0, comment: "How it works (current terms, for applicants on/after Apr 14, 2025): The card earns a base 2% on everything. To unlock the bonus you must (1) open a U.S. Bank Smartly Savings account (the savings account itself is only a gate — its balance does NOT count), and (2) hold a Qualifying Balance in a Bank Smartly Checking and/or Safe Debit account. Your total cash-back rate is set by that Qualifying Balance: $10,000–$49,999 → 2.5%; $50,000–$99,999 → 3%; $100,000+ → 4%. The boosted rate applies only to the first $10,000 of Net Purchases per billing cycle (~$120k/yr; 4% on $120k ≈ $4,800 max); spend beyond that earns the base 2%. Qualifying Balance is a 30-day average, so regularly drawing the account down can drop you a tier (changes apply within ~5 business days). Excluded categories that always earn just 2%: education/tuition, gift cards, insurance, taxes, business-to-business, and third-party bill-pay. ⚠️ Card was nerfed on Apr 14, 2025 — previously the entry tier started at $5,000 (now $10,000), there was no $10k/cycle cap (now capped), the balance was a 90-day average (now 30-day), and deposit/trust/investment balances all counted (now only checking/Safe Debit). Cardholders approved before Apr 14, 2025 are grandfathered into the old, more generous structure." },

    // Other Benefits
    { section: "Other Benefits", name: "Cash-Back Deals", desc: "Personalized brand offers in the U.S. Bank app/online banking. Estimate annual value redeemed.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'usbank-smartly',
    detailUrl: 'usbank-smartly.html',
    name: 'U.S. Bank Smartly Visa Signature Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Cash Back', 'No Annual Fee', '0% Intro APR'],
    annualFee: 0,
    signOnBonusLabel: '—',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
