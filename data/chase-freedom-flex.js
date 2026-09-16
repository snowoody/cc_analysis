// Chase Freedom Flex® Credit Card data
(function() {
  const terms = {
    "$200 Bonus Cash Back": `$200 Cash Back After You Spend $500 On Purchases In The First 3 Months From Account Opening: This product is not available to either (i) current cardmembers of this credit card, or (ii) previous cardmembers of this credit card who received a new cardmember bonus for this credit card within the last 24 months. You will receive 20,000 bonus points with this bonus offer, which can be redeemed for $200 cash back. To qualify and receive your bonus, you must make Purchases totaling $500 or more during the first 3 months from account opening. ("Purchases" do not include balance transfers, cash advances, travelers checks, foreign currency, money orders, wire transfers or similar cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.) After qualifying, please allow 6 to 8 weeks for bonus points to post to your account. To be eligible for this bonus offer, account must be open and not in default at the time of fulfillment.`,

    "0% Intro APR for 15 Months": `0% Introductory APR: 0% intro APR for 15 months from account opening on purchases and balance transfers. After the intro period, a variable APR of 18.24%–27.74%.`,

    "5% Quarterly Bonus Categories": `5% Cash Back in quarterly bonus categories: You'll earn 5% Cash Back rewards total for each $1 spent until $1,500 is spent on combined purchases in the quarterly bonus categories each quarter that you activate the bonus (4% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase). You must activate your 5% Bonus Cash Back each quarter by the activation deadline. After $1,500 is spent on combined purchases in the quarterly bonus categories each quarter, you go back to earning 1% Cash Back rewards for each $1 spent, with no maximum. Categories rotate quarterly; examples include gas stations, grocery stores (excluding Target and Walmart), Amazon, and select live entertainment.`,

    "5% on Chase Travel": `5% Cash Back on Chase Travel bookings: You'll earn 5% Cash Back rewards total for each $1 spent on purchases made using your card through Chase Travel (4% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase).`,

    "3% on Dining": `3% Cash Back on Dining: You'll earn 3% Cash Back rewards total for each $1 spent on purchases in the dining at restaurants category including takeout and eligible delivery services (2% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase).`,

    "3% on Drugstores": `3% Cash Back on Drugstores: You'll earn 3% Cash Back rewards total for each $1 spent on purchases in the drugstores category (2% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase).`,

    "1% on Everything Else": `1% Cash Back: You'll earn 1% Cash Back rewards for each $1 spent. Points don't expire as long as your account remains open.`,

    "2% on Lyft": `2% Cash Back Offer on Lyft Purchases: You'll earn 2% cash back total on qualifying Lyft products and services purchased through the Lyft mobile application through 09/30/2027. That's 1% additional cash back on top of the 1% cash back earned on each purchase in the rewards program. Qualifying Lyft products and services include rideshare; bike and scooter rides; and subscription and membership products. Purchase of gift cards, car rentals, vehicle service centers, miscellaneous fees, and other Lyft products and services are excluded from this promotion.`,

    "DashPass (6 Months Free)": `Complimentary 6 months of DashPass: When activated between 02/01/2025 and 12/31/2027, your account will receive 6 months of complimentary DashPass for use on both the DoorDash and Caviar applications. After your complimentary period ends, you will continue to be enrolled and will be automatically charged the then-current monthly DashPass rate (plus applicable tax) on a recurring monthly basis until you cancel. DashPass benefits apply only to eligible orders from DashPass-eligible merchants that meet the minimum subtotal. Other fees (including service fee), taxes, and gratuity on orders may apply. Must use your Chase Freedom Flex card for payment at checkout.`,

    "$10 Off Quarterly DoorDash": `Earn Up to $10 Off Quarterly on DoorDash Non-Restaurant Orders: Once you have activated your DashPass membership, you will receive a $10 off discount each calendar quarter at checkout on one qualifying non-restaurant order on DoorDash as long as you remain enrolled in a DashPass membership. Discount applies to subtotal only; does not apply to fees, taxes, and gratuity. If the full $10 value is not used on a single order, the remaining value will be forfeited. The quarterly discount will not roll over into a subsequent quarter. Valid through 12/31/2027.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $500 per item. Restrictions, limitations and exclusions apply. Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation and Interruption Insurance: You can be reimbursed up to $1,500 per covered traveler and $6,000 per trip for your pre-paid, non-refundable passenger fares, if your trip is canceled or cut short by sickness, severe weather or other covered situations.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage provides reimbursement for theft and collision damage for most rental vehicles. In the U.S., coverage is secondary to your personal insurance.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$200 Bonus Cash Back", desc: "20,000 Ultimate Rewards points after spending $500 in the first 3 months. Adjust your value per point.", min: 0, max: 3.0, default: 1.0, miles: 20000, firstYearOnly: true },
    { name: "0% Intro APR for 15 Months", desc: "0% APR on purchases and balance transfers for first 15 months. Estimate interest savings.", min: 0, max: 1500, default: 0, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5% Quarterly Bonus Categories", desc: "5 UR pts/$1 on rotating quarterly categories (up to $1,500/quarter spend, must activate). Estimate annual points value.", min: 0, max: 300, default: 40, comment: "Max $300/yr if you spend $1,500 in each quarter's category at 1¢/pt. Categories rotate: gas, groceries, Amazon, etc." },
    { name: "5% on Chase Travel", desc: "5 UR pts/$1 on travel purchased through Chase Travel. Estimate annual points value.", min: 0, max: 500, default: 0 },
    { name: "3% on Dining", desc: "3 UR pts/$1 at restaurants, takeout, and eligible delivery services. Estimate annual points value.", min: 0, max: 500, default: 0 },
    { name: "3% on Drugstores", desc: "3 UR pts/$1 at drugstores. Estimate annual points value.", min: 0, max: 200, default: 0 },
    { name: "1% on Everything Else", desc: "1 UR pt/$1 on all other purchases, no cap. Estimate annual points value.", min: 0, max: 1000, default: 0, comment: "Points value depends on redemption: 1¢ cash back, 1.25¢ via Sapphire Preferred travel, 1.5¢ via Sapphire Reserve travel, or transfer to partners for potentially more." },
    { name: "2% on Lyft", desc: "2 UR pts/$1 on Lyft rides through 09/30/2027. Estimate annual points value.", min: 0, max: 100, default: 0 },

    // Partner Benefits
    { section: "Partner Benefits", name: "DashPass (6 Months Free)", desc: "6 months complimentary DashPass ($0 delivery fees on DoorDash/Caviar). Activate by 12/31/2027.", min: 0, max: 100, default: 0, firstYearOnly: true },
    { name: "$10 Off Quarterly DoorDash", desc: "$10 off per quarter on non-restaurant DoorDash orders through 12/31/2027", min: 0, max: 40, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Trip Cancellation/Interruption Insurance", desc: "Up to $1,500/person, $6,000/trip for non-refundable fares if trip is canceled or cut short", min: 0, max: 200, default: 0 },
    { name: "Auto Rental Coverage", desc: "Secondary collision/theft coverage when you decline the rental company's insurance", min: 0, max: 100, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $500 per item", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'chase-freedom-flex',
    detailUrl: 'chase-freedom-flex.html',
    name: 'Chase Freedom Flex®',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Cash Back', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '20,000 UR pts + 15mo 0% APR',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
