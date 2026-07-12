// Chase Ink Business Premier® Credit Card data
(function() {
  const terms = {
    "$1,000 Bonus Cash Back": `New Cardmember Bonus – $1,000 Cash Back: To qualify, you must make $10,000 in purchases during the first 3 months from account opening. After qualifying, please allow 6 to 8 weeks for bonus to post to your account. The new cardmember bonus may not be available to you if you have ever had this card. We may also consider factors pertinent to your business in determining your bonus eligibility.`,

    "2.5% Cash Back on Large Purchases": `2.5% Cash Back on Large Purchases: Earn a total of 2.5% cash back on every purchase of $5,000 or more. That's $250 on a purchase of $10,000 when redeemed. Cash Back rewards are tracked as points and redeemable for cash back, gift cards, travel and more through Chase Ultimate Rewards®.`,

    "2% Cash Back on All Other Purchases": `2% Cash Back: Turn all your business expenses into rewards with unlimited 2% cash back on all other business purchases (under $5,000). Redeem your rewards for cash back, gift cards, travel and more through Chase Ultimate Rewards®. Points don't expire as long as your account remains open.`,

    "5% Cash Back on Chase Travel": `5% Cash Back on Chase Travel: Earn unlimited 5% cash back on travel purchased through Chase Travel℠. This includes flights, hotels, car rentals, cruises, and activities booked through the Chase Travel portal.`,

    "5% Cash Back on Lyft": `5% Cash Back Offer on Lyft Purchases: Earn 5% cash back total on qualifying Lyft products and services purchased through the Lyft mobile application through 09/30/2027. Qualifying Lyft products and services include rideshare; bike and scooter rides; and subscription and membership products. Purchase of gift cards, car rentals, vehicle service centers, miscellaneous fees and other Lyft products and services are excluded from this promotion.`,

    "Pay in Full with Flex for Business": `A Pay in Full Card with built-in flexibility: Your Ink Business Premier card comes built with two ways to access your credit line – Pay in Full and Flex for Business. While you must pay your Pay In Full balance each month, your Flex for Business balance can be paid over time with interest. Your purchases will automatically be included in your Flex for Business balance until you reach its limit. After that, any additional purchases will be charged to your Pay in Full balance. Flex for Business variable APR: 17.74%–28.49%.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $10,000 per item. Restrictions, limitations and exclusions apply. Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary when renting for business purposes and provides reimbursement up to $75,000 for theft and collision damage for most rental vehicles in the U.S. and abroad.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$1,000 Bonus Cash Back", desc: "$1,000 cash back after spending $10,000 in the first 3 months.", min: 0, max: 1500, default: 1000, firstYearOnly: true },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "2.5% Cash Back on Large Purchases", desc: "2.5% cash back on every purchase of $5,000 or more. Estimate annual value from large purchases.", min: 0, max: 2000, default: 0 },
    { name: "2% Cash Back on All Other Purchases", desc: "Unlimited 2% cash back on all purchases under $5,000. Estimate annual value.", min: 0, max: 2000, default: 200 },
    { name: "5% Cash Back on Chase Travel", desc: "5% cash back on travel booked through Chase Travel℠. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "5% Cash Back on Lyft", desc: "5% cash back on Lyft rides through 09/30/2027. Estimate annual value.", min: 0, max: 200, default: 0 },

    // Card Features
    { section: "Card Features", name: "Pay in Full with Flex for Business", desc: "Built-in flexibility to pay large purchases over time with Flex for Business. Estimate value of deferred payment flexibility.", min: 0, max: 500, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage for business rentals up to $75,000 for theft/collision damage in U.S. and abroad", min: 0, max: 200, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $10,000 per item", min: 0, max: 200, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost. Set individual spending limits and earn rewards faster.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-ink-premier',
    detailUrl: 'chase-ink-premier.html',
    name: 'Ink Business Premier® Credit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Business',
    categories: ['Cash Back', 'Large Purchases'],
    annualFee: 195,
    signOnBonusLabel: '$1,000 cash back',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
