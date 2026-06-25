// American Airlines AAdvantage® MileUp® Card data
(function() {
  const terms = {
    "15,000 Mile Sign-On Bonus": `Earn 15,000 American Airlines AAdvantage® bonus miles after spending $500 on purchases within the first 3 months of account opening.

New account bonus is not available if you have received a new account bonus for an AAdvantage MileUp® account in the past 48 months, or if you converted another Citi credit card account on which you earned a new account bonus in the last 48 months into an AAdvantage® MileUp® account. Offer only available to U.S. residents (excluding Puerto Rico and the U.S. Virgin Islands) and may not be available if you leave the application page.

AAdvantage miles are commonly valued around 1.4–1.65¢ each (e.g., The Points Guy). Adjust the slider to your own per-mile value.`,

    "Save 25% on Inflight Purchases": `Receive 25% savings on inflight food and beverage purchases on American Airlines flights when you pay with your AAdvantage MileUp® credit card. The savings are applied as a statement credit. Estimate your annual value based on how often you buy onboard.`,

    "Add Authorized Users": `Add authorized user cards to your account at no additional charge and earn more AAdvantage® miles on their purchases.`,

    "No Mileage Cap": `There is no limit to the number of AAdvantage® miles you can earn with the card. Miles do not expire as long as your account remains open.`,

    "Loyalty Points for Status": `Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases. Loyalty Points count toward AAdvantage® elite status (Gold, Platinum, Platinum Pro, Executive Platinum), separate from the redeemable miles you earn. Value depends on whether you are pursuing AAdvantage status.`,

    "2 Miles at Grocery Stores": `Earn 2 AAdvantage® miles for every $1 spent at grocery stores, including grocery delivery services. Purchases must be classified under the grocery store merchant category; superstores, warehouse clubs, and discount stores may not qualify.`,

    "2 Miles on Eligible American Airlines Purchases": `Earn 2 AAdvantage® miles for every $1 spent on eligible American Airlines purchases.`,

    "1 Mile on Other Purchases": `Earn 1 AAdvantage® mile for every $1 spent on all other purchases.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "15,000 Mile Sign-On Bonus", desc: "15,000 AAdvantage miles after spending $500 on purchases within the first 3 months. Adjust your value per mile.", min: 0, max: 2.5, default: 1.5, miles: 15000, firstYearOnly: true, comment: "AAdvantage miles valued ~1.4–1.65¢ each. Not eligible if you've received an AAdvantage MileUp bonus in the past 48 months." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2 Miles at Grocery Stores", desc: "2x AAdvantage miles at grocery stores, including grocery delivery. Estimate annual dollar value earned (miles ~1.4¢ each).", min: 0, max: 300, default: 0 },
    { name: "2 Miles on Eligible American Airlines Purchases", desc: "2x AAdvantage miles on eligible American Airlines purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1 Mile on Other Purchases", desc: "1x AAdvantage mile on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Loyalty Points for Status", desc: "1 Loyalty Point per eligible mile earned, counting toward AAdvantage elite status. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },

    // Other Benefits
    { section: "Other Benefits", name: "Save 25% on Inflight Purchases", desc: "25% back as a statement credit on inflight food & beverage purchases on AA flights. Estimate annual value.", min: 0, max: 75, default: 0 },
    { name: "Add Authorized Users", desc: "Add authorized user cards at no extra charge to earn more miles. Value depends on additional spend you route through them.", min: 0, max: 100, default: 0 },
    { name: "No Mileage Cap", desc: "No limit on the number of AAdvantage miles you can earn. No direct dollar value on its own.", min: 0, max: 20, default: 0 },
  ];

  const card = {
    id: 'citi-aadvantage-mileup',
    detailUrl: 'citi-aadvantage-mileup.html',
    name: 'American Airlines AAdvantage® MileUp® Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Miles', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '15,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
