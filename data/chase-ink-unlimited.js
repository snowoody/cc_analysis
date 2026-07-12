// Chase Ink Business Unlimited® Credit Card data
(function() {
  const terms = {
    "$1,000 Bonus Cash Back": `New Cardmember Bonus – $1,000 Cash Back: To qualify, you must make $8,000 in purchases during the first 4 months from account opening. After qualifying, please allow 6 to 8 weeks for bonus to post to your account. To be eligible for this bonus offer, your credit card account must be open and not in default at the time of fulfillment. The new cardmember bonus may not be available to you if you have ever had this card or any other Chase for Business card without an annual fee. We may also consider factors pertinent to your business in determining your bonus eligibility. Cash Back rewards are tracked as points and each $1 in Cash Back rewards earned is equal to 100 points. You will receive 100,000 bonus points with this bonus offer, which can be redeemed for $1,000 cash back.`,

    "Unlimited 1.5% Cash Back": `1.5% Cash Back: You'll earn 1.5% Cash Back rewards for each $1 spent on all purchases of products and services, minus returns or refunds. Buying products and services with your card, in most cases, will count as a purchase; however, the following types of transactions won't count and won't earn points: balance transfers, cash advances and other cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable. Points don't expire as long as your account remains open.`,

    "5% Cash Back on Lyft": `5% Cash Back Offer on Lyft Purchases: You'll earn 5% cash back total on qualifying Lyft products and services purchased through the Lyft mobile application through 09/30/2027. That's 3.5% additional cash back on top of the 1.5% cash back earned on each purchase in the rewards program. Qualifying Lyft products and services include rideshare; bike and scooter rides; and subscription and membership products. Purchase of gift cards, car rentals, vehicle service centers, miscellaneous fees and other Lyft products and services are excluded from this promotion.`,

    "0% Intro APR for 12 Months": `0% Introductory APR: 0% intro APR for 12 months from account opening on purchases. After that, 16.74% and 29.99%–24.74% and 29.99% variable APR.`,

    "Instacart+ Membership & $20 Monthly Credit": `Complimentary Instacart+ Membership: You will receive one complimentary Instacart+ membership for 3 months when activated on instacart.com/p/chase-ink with an eligible card between 5/1/2025 and 12/31/2027. After the complimentary period ends, you will be automatically enrolled in an annual Instacart+ membership at $99/year unless you cancel. Plus, once activated, Instacart+ members get a $20 credit each month automatically loaded into their Instacart Business Account. The monthly credit will not roll over into a subsequent month. Benefits end 12/31/27.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $10,000 per item. Restrictions, limitations and exclusions apply. Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary when renting for business purposes and provides reimbursement up to $60,000 for theft and collision damage for most rental vehicles with an MSRP of $125,000 or less.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$1,000 Bonus Cash Back", desc: "100,000 Ultimate Rewards points after spending $8,000 in the first 4 months. Adjust your value per point.", min: 0, max: 3.0, default: 1.4, miles: 100000, firstYearOnly: true },
    { name: "0% Intro APR for 12 Months", desc: "0% APR on purchases for first 12 months. Estimate value if you'll carry a balance.", min: 0, max: 1500, default: 200, firstYearOnly: true },

    // Earning Potential (points from annual spend)
    { section: "Earning Potential (annual estimate)", name: "Unlimited 1.5% Cash Back", desc: "1.5 UR pts/$1 on all purchases with no cap. Enter estimated annual points value. Points worth ~1¢ cash back, 1.25¢ via Sapphire Preferred travel, 1.5¢ via Sapphire Reserve travel, or transfer to partners for potentially more.", min: 0, max: 1500, default: 0 },
    { name: "5% Cash Back on Lyft", desc: "5 UR pts/$1 on Lyft rides through 09/30/2027. Estimate annual points value.", min: 0, max: 200, default: 0 },

    // Perks
    { section: "Perks & Credits", name: "Instacart+ Membership & $20 Monthly Credit", desc: "3-month complimentary Instacart+ membership plus $20/month credit through 12/31/2027. Value up to $240/yr in credits + $25 membership value.", min: 0, max: 265, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage for business rentals up to $60,000 for theft/collision damage (vehicles MSRP ≤$125,000)", min: 0, max: 200, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $10,000 per item", min: 0, max: 200, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost. Set individual spending limits and earn rewards faster.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-ink-unlimited',
    detailUrl: 'chase-ink-unlimited.html',
    name: 'Ink Business Unlimited® Credit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Business',
    categories: ['Cash Back', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '100,000 UR pts + 12mo 0% APR',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
