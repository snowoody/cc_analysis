// Chase Freedom Rise® Credit Card data
(function() {
  const terms = {
    "3% on Dining (First 6 Months)": `3% Cash Back Total on Dining Purchases for New Cardmembers: You'll earn 3% cash back total for each $1 spent on purchases in the dining category (dining at restaurants including takeout and eligible delivery services) made within your first 6 months from account opening, or until you reach $6,000 in dining purchases, whichever occurs first. That's 1.5% additional cash back on top of the 1.5% cash back earned on each purchase in the rewards program.`,

    "$25 Automatic Payment Bonus": `$25 Statement Credit After You Set Up Automatic Payments In The First 3 Months From Account Opening: You will qualify for and receive your $25 statement credit if you set up automatic payments during the first 3 months from account opening and remain enrolled for at least 90 consecutive days. After qualifying, please allow 6 to 8 weeks for statement credit to post to your account. To be eligible for this bonus offer, account must be open and not in default at the time of fulfillment.`,

    "1.5% on All Purchases": `1.5% Cash Back: You'll earn 1.5% Cash Back rewards for each $1 spent. Points don't expire as long as your account remains open. Merchants who accept Visa/Mastercard credit cards are assigned a merchant code, which is determined by the merchant or its processor in accordance with Visa/Mastercard procedures based on the kinds of products and services they primarily sell.`,

    "2% on Lyft": `2% Cash Back Offer on Lyft Purchases: You'll earn 2% cash back total on qualifying Lyft products and services purchased through the Lyft mobile application through 09/30/2027. That's 0.5% additional cash back on top of the 1.5% cash back earned on each purchase in the rewards program. Qualifying Lyft products and services include rideshare; bike and scooter rides; and subscription and membership products. Purchase of gift cards, car rentals, vehicle service centers, miscellaneous fees, and other Lyft products and services are excluded from this promotion.`,

    "DashPass (6 Months Free)": `Complimentary 6 months of DashPass: When activated between 02/01/2025 and 12/31/2027, your account will receive 6 months of complimentary DashPass for use on both the DoorDash and Caviar applications. After your complimentary period ends, you will continue to be enrolled and will be automatically charged the then-current monthly DashPass rate (plus applicable tax) on a recurring monthly basis until you cancel. DashPass benefits apply only to eligible orders from DashPass-eligible merchants that meet the minimum subtotal. Other fees (including service fee), taxes, and gratuity on orders may apply. Must use your Chase Freedom Rise card for payment at checkout.`,

    "$10 Off Quarterly DoorDash": `Earn Up to $10 Off Quarterly on DoorDash Non-Restaurant Orders: Once you have activated your DashPass membership, you will receive a $10 off discount each calendar quarter at checkout on one qualifying non-restaurant order on DoorDash as long as you remain enrolled in a DashPass membership. Discount applies to subtotal only; does not apply to fees, taxes, and gratuity. If the full $10 value is not used on a single order, the remaining value will be forfeited. The quarterly discount will not roll over into a subsequent quarter. Valid through 12/31/2027.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $500 per item. Restrictions, limitations and exclusions apply. Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation and Interruption Insurance: You can be reimbursed up to $1,500 per covered traveler and $6,000 per trip for your pre-paid, non-refundable passenger fares, if your trip is canceled or cut short by sickness, severe weather or other covered situations.`,

    "Automatic Upgrade to Freedom Unlimited": `Automatic Upgrade: You will be automatically evaluated each year to upgrade to a Chase Freedom Unlimited card when: your Freedom Rise account is open and you've made a purchase on your Rise card in the past 12 months; and you've made all payments on time to all financial lenders in the past 12 months, and none of your Chase accounts are suspended.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "3% on Dining (First 6 Months)", desc: "3% cash back on dining (restaurants, takeout, delivery) for first 6 months, up to $6,000 in dining spend. Estimate the bonus value above the base 1.5%.", min: 0, max: 90, default: 15, firstYearOnly: true, comment: "Max bonus value is $90 (1.5% extra × $6,000 cap). Dining beyond $6,000 or after 6 months earns 1.5%." },
    { name: "$25 Automatic Payment Bonus", desc: "Set up autopay within first 3 months and keep it for 90 days", min: 0, max: 25, default: 25, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "1.5% on All Purchases", desc: "1.5% cash back on all purchases with no cap. Estimate annual cash back value.", min: 0, max: 1000, default: 0 },
    { name: "2% on Lyft", desc: "2% cash back on Lyft rides through 09/30/2027. Estimate annual cash back value.", min: 0, max: 100, default: 0 },

    // Partner Benefits
    { section: "Partner Benefits", name: "DashPass (6 Months Free)", desc: "6 months complimentary DashPass ($0 delivery fees on DoorDash/Caviar). Activate by 12/31/2027.", min: 0, max: 100, default: 0, firstYearOnly: true },
    { name: "$10 Off Quarterly DoorDash", desc: "$10 off per quarter on non-restaurant DoorDash orders through 12/31/2027", min: 0, max: 40, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Trip Cancellation/Interruption Insurance", desc: "Up to $1,500/person, $6,000/trip for non-refundable fares if trip is canceled or cut short", min: 0, max: 200, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $500 per item", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "Automatic Upgrade to Freedom Unlimited", desc: "Evaluated annually for automatic upgrade to Freedom Unlimited if you maintain good habits", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'chase-freedom-rise',
    detailUrl: 'chase-freedom-rise.html',
    name: 'Chase Freedom Rise®',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Cash Back', 'No Annual Fee', 'Credit Building'],
    annualFee: 0,
    signOnBonusLabel: '3% dining (6mo) + $25 autopay',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
