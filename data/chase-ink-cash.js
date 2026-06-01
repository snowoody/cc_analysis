// Chase Ink Business Cash® Credit Card data
(function() {
  const terms = {
    "$750 Bonus Cash Back": `$750 Cash Back After You Spend $6,000 On Purchases In The First 3 Months From Account Opening: The new cardmember bonus may not be available to you if you have ever had this card or any other Chase for Business card without an annual fee. We may also consider factors pertinent to your business in determining your bonus eligibility. You will receive 75,000 bonus points with this bonus offer, which can be redeemed for $750 cash back. To qualify and receive your bonus, you must make Purchases totaling $6,000 or more during the first 3 months from account opening. ("Purchases" do not include balance transfers, cash advances, travelers checks, foreign currency, money orders, wire transfers or similar cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.) After qualifying, please allow 6 to 8 weeks for bonus points to post to your account. To be eligible for this bonus offer, account must be open and not in default at the time of fulfillment.`,

    "5% Cash Back on Business Essentials": `5% Cash Back: You'll earn 5% Cash Back rewards total for each $1 of the first $25,000 spent each account anniversary year on combined purchases in the following rewards categories: office supply stores; internet, cable, and phone services (4% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase). After $25,000 is spent on combined purchases in these categories each account anniversary year, you go back to earning 1% Cash Back rewards for each $1 spent, with no maximum.`,

    "2% Cash Back on Dining & Gas": `2% Cash Back: You'll earn 2% Cash Back rewards total for each $1 of the first $25,000 spent each account anniversary year on combined purchases in the following rewards categories: gas stations and restaurants (1% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase). After $25,000 is spent on combined purchases in these categories each account anniversary year, you go back to earning 1% Cash Back rewards for each $1 spent, with no maximum.`,

    "1% Cash Back on All Other Purchases": `1% Cash Back: You'll earn 1% Cash Back rewards for each $1 spent. Points don't expire as long as your account remains open.`,

    "5% Cash Back on Lyft": `5% Cash Back Offer on Lyft Purchases: You'll earn 5% cash back total on qualifying Lyft products and services purchased through the Lyft mobile application through 09/30/2027. That's 4% additional cash back on top of the 1% cash back earned on each purchase in the rewards program. Qualifying Lyft products and services include rideshare; bike and scooter rides; and subscription and membership products. Purchase of gift cards, car rentals, vehicle service centers, miscellaneous fees and other Lyft products and services are excluded from this promotion.`,

    "0% Intro APR for 12 Months": `0% Introductory APR: 0% intro APR for 12 months from account opening on purchases. After that, 16.74% and 29.99%–24.74% and 29.99% variable APR.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $10,000 per item. Restrictions, limitations and exclusions apply. Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary when renting for business purposes and provides reimbursement up to $60,000 for theft and collision damage for most rental vehicles with an MSRP of $125,000 or less.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$750 Bonus Cash Back", desc: "75,000 Ultimate Rewards points after spending $6,000 in the first 3 months. Adjust your value per point.", min: 0, max: 3.0, default: 1.4, miles: 75000, firstYearOnly: true },
    { name: "0% Intro APR for 12 Months", desc: "0% APR on purchases for first 12 months. Estimate value if you'll carry a balance.", min: 0, max: 1500, default: 200, firstYearOnly: true },

    // Earning Potential (points from annual spend)
    { section: "Earning Potential (annual estimate)", name: "5% Cash Back on Business Essentials", desc: "5 UR pts/$1 at office supply stores, internet, cable, phone. First $25,000/yr. Enter estimated annual spend, value calculated at your cpp.", min: 0, max: 1250, default: 50, comment: "Points value depends on redemption method. 1¢ cash back, 1.25¢ via Sapphire Preferred travel, 1.5¢ via Sapphire Reserve travel, or transfer to partners for potentially more." },
    { name: "2% Cash Back on Dining & Gas", desc: "2 UR pts/$1 at gas stations and restaurants. First $25,000/yr combined. Estimate annual points value.", min: 0, max: 500, default: 0 },
    { name: "1% Cash Back on All Other Purchases", desc: "1 UR pt/$1 on all other eligible purchases with no limit. Estimate annual points value.", min: 0, max: 400, default: 0 },
    { name: "5% Cash Back on Lyft", desc: "5 UR pts/$1 on Lyft rides through 09/30/2027. Estimate annual points value.", min: 0, max: 200, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage for business rentals up to $60,000 for theft/collision damage (vehicles MSRP ≤$125,000)", min: 0, max: 200, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $10,000 per item", min: 0, max: 200, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost. Set individual spending limits and earn rewards faster.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-ink-cash',
    detailUrl: 'chase-ink-cash.html',
    name: 'Ink Business Cash® Credit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Business',
    categories: ['Cash Back', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '75,000 UR pts + 12mo 0% APR',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
