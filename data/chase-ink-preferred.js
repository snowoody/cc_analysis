// Chase Ink Business Preferred® Credit Card data
(function() {
  const terms = {
    "100,000 Point Sign-On Bonus": `New Cardmember Bonus – 100,000 Points: To qualify, you must make $8,000 in purchases during the first 3 months from account opening. After qualifying, please allow 6 to 8 weeks for bonus to post to your account. The new cardmember bonus may not be available to you if you have ever had this card. We may also consider factors pertinent to your business in determining your bonus eligibility. 100,000 Ultimate Rewards points can be redeemed for $1,000 cash back, $1,250 in travel through Chase Travel with Sapphire Preferred, or transferred 1:1 to airline and hotel partners for potentially higher value. The Points Guy values UR points at ~2¢ each via transfer partners.`,

    "3x Points on Travel & Business Categories": `3X Points: Earn 3 points per $1 on the first $150,000 spent in combined purchases each account anniversary year in the following categories: shipping purchases; advertising purchases made with social media sites and search engines; internet, cable and phone services; and travel. After reaching $150,000 in combined category spend, you earn 1 point per $1. Points don't expire as long as your account remains open.`,

    "5x Points on Lyft": `5X Points on Lyft: Earn a total of 5x points on Lyft rides through September 30, 2027 with your Chase Ink Business Preferred card. Qualifying Lyft products and services include rideshare; bike and scooter rides; and subscription and membership products. Purchase of gift cards, car rentals, vehicle service centers, miscellaneous fees and other Lyft products and services are excluded.`,

    "1x Points on All Other Purchases": `1X Points: Earn 1 point per $1 on all other purchases – with no limit to the amount you can earn. Points don't expire as long as your account remains open.`,

    "DashPass Membership & $10 Monthly Grocery Credit": `Complimentary DashPass: Get complimentary access to DashPass with your Chase Ink Business Preferred card. Enjoy $0 delivery fees and reduced service fees on eligible orders for a minimum of one year, when you activate by December 31, 2027. Plus, as soon as you activate your membership, you'll receive up to $10 a month on grocery and retail DoorDash orders. DashPass membership value: $120/year. Monthly grocery credit value: up to $120/year.`,

    "Transfer Points to Travel Partners": `Point Transfer: Transfer your Ultimate Rewards points at a 1:1 ratio to leading airline and hotel loyalty programs including United MileagePlus, Southwest Rapid Rewards, World of Hyatt, Marriott Bonvoy, British Airways Avios, Air France/KLM Flying Blue, Singapore Airlines KrisFlyer, and more. This is the key differentiator vs. Ink Cash/Unlimited – the ability to transfer points often yields 1.5–2.5¢ per point in value.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: You will pay no foreign transaction fees when you use your card for purchases made outside of the United States.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $10,000 per item. Restrictions, limitations and exclusions apply. Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Cell Phone Protection": `Cell Phone Protection: Get up to $1,000 per claim in cell phone protection against covered theft or damage for the cell phone line listed on your monthly bill when you pay it with your card. Maximum of 3 claims in a 12-month period with a $100 deductible per claim.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary when renting for business purposes and provides reimbursement up to $75,000 for theft and collision damage for most rental vehicles in the U.S. and abroad.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation/Interruption Insurance: If your trip is canceled or cut short by sickness, severe weather or other covered situations, you can be reimbursed up to $5,000 per covered traveler and $10,000 per trip for pre-paid, non-refundable travel expenses.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "100,000 Point Sign-On Bonus", desc: "100,000 Ultimate Rewards points after spending $8,000 in the first 3 months. Adjust your value per point (1¢ cash, 1.25¢ CSP travel, ~2¢ transfer partners).", min: 0, max: 3.0, default: 1.5, miles: 100000, firstYearOnly: true },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "3x Points on Travel & Business Categories", desc: "3 UR pts/$1 on shipping, social media/search ads, internet/cable/phone, and travel. First $150,000/yr combined. Estimate annual points value at your cpp.", min: 0, max: 3000, default: 50, comment: "Key categories for most businesses. Points transferable to partners for ~1.5-2.5¢ each." },
    { name: "1x Points on All Other Purchases", desc: "1 UR pt/$1 on all other purchases with no limit. Estimate annual points value.", min: 0, max: 500, default: 0 },
    { name: "5x Points on Lyft", desc: "5 UR pts/$1 on Lyft rides through 09/30/2027. Estimate annual points value.", min: 0, max: 200, default: 0 },

    // Perks & Credits
    { section: "Perks & Credits", name: "DashPass Membership & $10 Monthly Grocery Credit", desc: "Complimentary DashPass ($120 value) + up to $10/month grocery credit on DoorDash through 12/31/2027. Value depends on DoorDash usage.", min: 0, max: 240, default: 0 },
    { name: "Transfer Points to Travel Partners", desc: "1:1 transfer to airline/hotel partners (United, Hyatt, Southwest, etc.). Enables 1.5-2.5¢/pt value. Estimate additional annual value beyond base redemption.", min: 0, max: 500, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage for business rentals up to $75,000 for theft/collision damage in U.S. and abroad", min: 0, max: 200, default: 0 },
    { name: "Cell Phone Protection", desc: "Up to $1,000/claim for theft or damage when you pay phone bill with card ($100 deductible, 3 claims/yr)", min: 0, max: 300, default: 0 },
    { name: "Trip Cancellation/Interruption Insurance", desc: "Up to $5,000 per person / $10,000 per trip for non-refundable travel expenses", min: 0, max: 200, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $10,000 per item", min: 0, max: 200, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No fees on purchases made outside the U.S. Estimate savings if you travel internationally for business.", min: 0, max: 200, default: 0 },

    // Other
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost. Set individual spending limits and earn rewards faster.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-ink-preferred',
    detailUrl: 'chase-ink-preferred.html',
    name: 'Ink Business Preferred® Credit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Business',
    categories: ['Travel', 'Points', 'Transfer Partners'],
    annualFee: 95,
    signOnBonusLabel: '100,000 UR pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
