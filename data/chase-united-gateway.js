(function() {
  const terms = {
    'Up to 40,000 Bonus Miles': 'Earn 30,000 bonus miles after spending $1,000 on purchases in the first 3 months from account opening. Earn an additional 10,000 bonus miles after adding an authorized user and making a purchase within the first 3 months.',
    '0% Intro APR for 12 Months': '0% introductory APR on purchases for the first 12 months from account opening. After that, a variable APR of 21.49%–28.49% applies based on creditworthiness.',
    '5x Miles on United Flights': 'Earn 5x total miles on United Airlines purchases (3x from the card plus 2x from your MileagePlus account). Applies to flights purchased directly from United.',
    '2x Miles on Other United Purchases': 'Earn 2x miles on other United purchases including seat upgrades, Economy Plus, inflight food and beverages, baggage fees, and other United ancillary charges.',
    '2x Miles on Gas & Transit': 'Earn 2x miles on gas station purchases and local transit/commuting expenses. Includes rideshare services, taxis, trains, buses, tolls, and parking.',
    '1x Miles on All Other Purchases': 'Earn 1 mile per $1 spent on all other purchases that do not fall into a bonus category. Miles are deposited into your MileagePlus account.',
    '2 Checked Bags (after $10K spend)': 'Receive 2 free checked bag certificates after spending $10,000 or more on purchases in a calendar year. Each certificate covers one roundtrip and is worth approximately $80 per bag each way.',
    '10%+ Award Flight Savings (after $10K spend)': 'Save 10% or more on United award flights booked with miles after $10,000 in calendar year spend. Premier members receive 15%+ savings. Discount applied automatically at checkout.',
    '25% Back on United Inflight Purchases': 'Receive 25% back as a statement credit on United inflight purchases including food, beverages, and Wi-Fi. Also applies to United Club premium drinks when purchased inflight.',
    'No Foreign Transaction Fees': 'No foreign transaction fees on purchases made outside the United States or in foreign currencies. Applies to all international transactions regardless of merchant category.',
    'Auto Rental Coverage': `Secondary auto rental collision damage waiver covers theft and collision damage when you rent a vehicle and decline the rental company's CDW/LDW. Coverage is secondary to your personal auto insurance policy.`,
    'Trip Cancellation/Interruption Insurance': 'Reimburses up to $1,500 per person and $6,000 per trip for prepaid, non-refundable travel expenses if your trip is cancelled or interrupted due to a covered reason such as illness or severe weather.',
    'Purchase Protection': 'Covers eligible purchases against damage or theft for 120 days from the date of purchase. Maximum coverage of $500 per claim and $50,000 per account.',
    'Extended Warranty Protection': `Extends the manufacturer's U.S. warranty by one additional year on eligible items with existing warranties of 3 years or less. Maximum coverage of $10,000 per claim.`,
  };

  const benefits = [
    // Sign-On Bonus (First Year Only)
    { name: 'Up to 40,000 Bonus Miles', desc: '30,000 miles after $1,000 in 3 months + 10,000 miles for adding authorized user. Adjust value per mile.', min: 0, max: 3.0, default: 1.2, miles: 40000, firstYearOnly: true },
    { name: '0% Intro APR for 12 Months', desc: '0% APR on purchases for first 12 months. Estimate value if you will carry a balance.', min: 0, max: 1500, default: 0, firstYearOnly: true },
    // Earning Potential (annual estimate)
    { name: '5x Miles on United Flights', desc: '5x total miles (3x from card + 2x from MileagePlus base) on United flights. Estimate annual miles value.', min: 0, max: 500, default: 0 },
    { name: '2x Miles on Other United Purchases', desc: '2x miles on United seat upgrades, Economy Plus, inflight, baggage fees, etc.', min: 0, max: 100, default: 0 },
    { name: '2x Miles on Gas & Transit', desc: '2x miles at gas stations and on local transit/commuting including rideshare, taxis, trains, tolls.', min: 0, max: 300, default: 0 },
    { name: '1x Miles on All Other Purchases', desc: '1 mile per $1 on all other purchases.', min: 0, max: 300, default: 0 },
    // United Travel Perks
    { name: '2 Checked Bags (after $10K spend)', desc: 'Earn 2 checked bag certificates after spending $10,000 in a calendar year. Worth ~$160/roundtrip if you check bags.', min: 0, max: 320, default: 0 },
    { name: '10%+ Award Flight Savings (after $10K spend)', desc: 'Save 10%+ on United award flights booked with miles after $10K calendar year spend. Premier members save 15%+.', min: 0, max: 200, default: 0 },
    { name: '25% Back on United Inflight Purchases', desc: '25% back as statement credit on food, beverages, Wi-Fi on United flights and Club premium drinks.', min: 0, max: 50, default: 0 },
    { name: 'No Foreign Transaction Fees', desc: 'No fees on purchases made outside the U.S.', min: 0, max: 100, default: 0 },
    // Travel & Purchase Protection
    { name: 'Auto Rental Coverage', desc: 'Secondary coverage for theft/collision damage on rental vehicles.', min: 0, max: 100, default: 0 },
    { name: 'Trip Cancellation/Interruption Insurance', desc: 'Up to $1,500 per person / $6,000 per trip for non-refundable travel expenses.', min: 0, max: 100, default: 0 },
    { name: 'Purchase Protection', desc: '120-day coverage against damage or theft, up to $500 per item.', min: 0, max: 50, default: 0 },
    { name: 'Extended Warranty Protection', desc: 'Extends manufacturer warranty by 1 year (on warranties ≤3 years).', min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-united-gateway',
    detailUrl: 'chase-united-gateway.html',
    name: 'United Gateway℠ Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Airline', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: 'Up to 40,000 miles + 12mo 0% APR',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
