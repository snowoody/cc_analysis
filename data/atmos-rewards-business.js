// Atmos Rewards Visa Signature Business Card data
(function() {
  const terms = {
    "Sign-On Bonus": `Earn 70,000 bonus points and a $99 Companion Fare (plus taxes and fees from $23) after spending $4,000 or more on purchases within the first 90 days of opening your account. Points are redeemable for flights on Alaska Airlines, Hawaiian Airlines, oneworld Alliance member airlines, and 30+ global air partners. Atmos Rewards points are generally valued at 1.5–1.8¢ each.`,

    "$99 Companion Fare (Annual)": `Earn a $99 Companion Fare (plus taxes and fees from $23) each account anniversary after you spend $6,000 or more on purchases within the prior anniversary year. Valid on all Alaska Airlines and Hawaiian Airlines flights within North America booked on alaskaair.com. The companion fare lets a travel partner fly for just $99 plus taxes/fees (~$122 total) on the same itinerary.`,

    "3X Points on Alaska/Hawaiian Purchases": `Earn unlimited 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases. Eligible Bank of America account holders earn a 10% rewards bonus on all card purchases (3.3 points effective rate).`,

    "2X Points on Gas, EV, Shipping, Transit": `Earn 2 points for every $1 spent on eligible gas, EV charging station, shipping, and local transit purchases including rideshare. Eligible Bank of America account holders earn a 10% rewards bonus (2.2 points effective rate).`,

    "1X Points on Other Purchases": `Earn 1 point for every $1 spent on all other purchases. Points don't expire on active accounts. Eligible Bank of America account holders earn a 10% rewards bonus (1.1 points effective rate).`,

    "Free Checked Bag & Preferred Boarding": `Cardholders and up to 6 guests traveling on the same reservation receive a free checked bag and preferred boarding on Alaska Airlines and Hawaiian Airlines flights when you purchase airfare with the card.`,

    "20% Back on Inflight Purchases": `Receive 20% back on Alaska Airlines inflight purchases when you pay with the card. Applied as a statement credit. Covers food, beverages, Wi-Fi, and other onboard purchases.`,

    "$100 Off Alaska Lounge+ Membership": `Receive $100 off an annual Alaska Lounge+ Membership. Regular Alaska Lounge+ membership costs $600/year, reduced to $500 with this card benefit.`,

    "No Foreign Transaction Fees": `No foreign transaction fees on purchases made outside the United States. Earn full points on international purchases without additional charges.`,

    "Employee Cards": `Add employee cards at $25 per card. Earn points on employee purchases that accrue to the primary business account. All employee card charges appear on the company statement for easy expense tracking.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus (First Year Only)", name: "Sign-On Bonus", desc: "70,000 bonus points after $4,000 spend in 90 days. Adjust value per point.", min: 0, max: 2.5, default: 1.5, miles: 70000, firstYearOnly: true, comment: "Atmos points valued ~1.5–1.8¢ each. At 1.5¢ = $1,050 value." },
    { name: "$99 Companion Fare (Sign-On)", desc: "$99 companion fare (plus ~$23 taxes) included with sign-on bonus. Savings vs. buying a regular ticket.", min: 0, max: 400, default: 100, firstYearOnly: true, comment: "Savings = typical fare minus ~$122. Avg Alaska one-way ~$250, so ~$130–$250 savings." },

    // Annual Companion Fare
    { section: "Companion Fare (Annual)", name: "$99 Companion Fare (Annual)", desc: "$99 companion fare after $6,000 annual spend. Valid on Alaska/Hawaiian flights within North America.", min: 0, max: 400, default: 100, comment: "Requires $6,000 annual card spend. Savings = typical fare minus ~$122." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "3X Points on Alaska/Hawaiian Purchases", desc: "3x points on Alaska Airlines and Hawaiian Airlines purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "2X Points on Gas, EV, Shipping, Transit", desc: "2x points on gas, EV charging, shipping, and local transit/rideshare. Estimate annual dollar value earned.", min: 0, max: 200, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1x point on all other purchases. Estimate annual dollar value earned.", min: 0, max: 500, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "Free Checked Bag & Preferred Boarding", desc: "Free checked bag for cardholder + up to 6 guests on same reservation. Preferred boarding on Alaska.", min: 0, max: 490, default: 0 },
    { name: "20% Back on Inflight Purchases", desc: "20% back as statement credit on inflight purchases (food, drinks, Wi-Fi) on Alaska flights.", min: 0, max: 75, default: 0 },
    { name: "$100 Off Alaska Lounge+ Membership", desc: "$100 discount on Alaska Lounge+ annual membership ($600 → $500).", min: 0, max: 100, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No foreign transaction fees. Value depends on international spending volume.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'atmos-rewards-business',
    detailUrl: 'atmos-rewards-business.html',
    name: 'Atmos™ Rewards Visa Signature® Business Card',
    issuer: 'Bank of America',
    network: 'Visa Signature',
    type: 'Business',
    categories: ['Travel', 'Airline', 'Points', 'Business'],
    annualFee: 95,
    annualFeeNote: '$70 company fee + $25 per card',
    signOnBonusLabel: '70,000 pts + Companion Fare',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
