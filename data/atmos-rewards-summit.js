// Atmos Rewards Summit Visa Infinite Card data
(function() {
  const terms = {
    "Sign-On Bonus": `Earn 80,000 bonus points and a 25,000-point Global Companion Award after spending $4,000 or more on purchases within the first 90 days of opening your account. Points are redeemable for flights on Alaska Airlines, Hawaiian Airlines, oneworld Alliance member airlines, and 30+ global air partners. Atmos Rewards points are generally valued at 1.5–1.8¢ each.`,

    "25,000-Point Global Companion Award (Sign-On)": `Earn a 25,000-point Global Companion Award after spending $6,000 or more on purchases within the first 90 days of opening your account. The Global Companion Award covers a companion's ticket when booking award travel for two people on the same itinerary, up to 25,000 points off the companion's award ticket. Redeemable across Alaska Airlines, Hawaiian Airlines, oneworld, and global partners in any class of service. Applicable taxes and fees must be paid with the Summit card.`,

    "25,000-Point Global Companion Award (Annual)": `Earn a 25,000-point Global Companion Award each card anniversary year. Covers a companion's ticket when booking award travel for two people on the same itinerary, up to 25,000 points off the companion's award ticket. Redeemable across Alaska Airlines, Hawaiian Airlines, oneworld, and global partners in any class of service including Business Class and First Class.`,

    "100,000-Point Global Companion Award": `Earn a 100,000-point Global Companion Award after spending $60,000 or more on purchases in a card anniversary year. Ideal for unlocking global premium cabin redemptions for two. Covers up to 100,000 points off a companion's award ticket on any itinerary across the full Atmos partner network.`,

    "3X Points on Dining": `Earn 3 points for every $1 spent on eligible dining purchases. Eligible Bank of America account holders earn a 10% rewards bonus on all card purchases (3.3 points effective rate).`,

    "3X Points on Foreign Transactions": `Earn 3 points for every $1 spent on all eligible foreign transactions. No foreign transaction fees. Eligible Bank of America account holders earn a 10% rewards bonus (3.3 points effective rate).`,

    "3X Points on Alaska/Hawaiian Purchases": `Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases. Eligible Bank of America account holders earn a 10% rewards bonus (3.3 points effective rate).`,

    "1X Points on Other Purchases": `Earn 1 point for every $1 spent on all other purchases. Eligible Bank of America account holders earn a 10% rewards bonus (1.1 points effective rate).`,

    "Alaska Lounge Passes": `Receive 8 Alaska Lounge passes per year (two per quarter). Each pass is valid for your entire travel day including access to multiple lounges along your journey and includes entry for up to two accompanying children. For existing Alaska Lounge members, these passes can be shared with family and friends. Value of passes is approximately $65 each ($520+ total annual value).`,

    "Status Points Earning": `Earn 1 status point for every $2 spent on purchases with the Summit card, with no cap. Additionally, receive 10,000 bonus status points annually beginning with the first card anniversary. Status points count toward Atmos Rewards elite tiers: Silver (20,000 pts / oneworld Ruby), Gold (40,000 pts / oneworld Sapphire), Platinum (75,000 pts), Diamond (100,000 pts), Titanium (150,000 pts).`,

    "Instant Travel Delay Credit": `If a cardholder experiences a same-day Alaska Airlines flight delay of more than two hours (for any reason) or a flight cancellation within 24 hours of scheduled departure, they will automatically receive an instant $50 voucher valid for 48 hours, linked to the card. Coming to Hawaiian Airlines flights in 2026.`,

    "Free Checked Bag & Preferred Boarding": `Cardholders and up to 6 additional guests on the same reservation receive a free checked bag on Alaska Airlines and Hawaiian Airlines-operated flights, along with early group boarding on Alaska, when flights are purchased with the card. Value up to $490 in waived baggage fees on a roundtrip itinerary.`,

    "Waived Partner Award Booking Fee": `When using points to book partner award flights, the $12.50 partner award booking fee is waived. Saves up to $25 per roundtrip per person. Partner-imposed surcharges and government taxes and fees still apply.`,

    "Waived Same-Day Flight Change Fee": `Waived same-day confirmed flight change fee, saving up to $50 on each one-way flight when changing travel plans.`,

    "Points Transfer to Hotel Partners": `Exclusive access to transfer points to hotel partner loyalty programs, including many at a 1:1 exchange rate. Five hotel transfer partners at launch covering over 25,000 hotels worldwide.`,

    "Free Points Sharing": `Establish a sharing network with up to 10 other Atmos Rewards members (friends, family, or other cardholders) to transfer redeemable points back and forth with no transfer fees.`,

    "50% Flight Discount Code": `New cardholders receive a 50% flight discount code for a qualifying future flight after opening their account. One-time benefit.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus (First Year Only)", name: "Sign-On Bonus", desc: "80,000 bonus points after $4,000 spend in 90 days. Adjust value per point.", min: 0, max: 2.5, default: 1.5, miles: 80000, firstYearOnly: true, comment: "Atmos points valued ~1.5–1.8¢ each. At 1.5¢ = $1,200 value." },
    { name: "25,000-Point Global Companion Award (Sign-On)", desc: "25,000-point companion award covering a companion's ticket on any itinerary (up to 25K points off).", min: 0, max: 500, default: 200, firstYearOnly: true, comment: "Value depends on partner/cabin. At 1.5¢/pt = $375 value for 25K points saved." },

    // Annual Companion Awards
    { section: "Companion Awards (Annual)", name: "25,000-Point Global Companion Award (Annual)", desc: "25,000-point companion award earned each anniversary. Covers companion's award ticket up to 25K points, any cabin.", min: 0, max: 500, default: 200, comment: "At 1.5¢/pt, saves $375. Usable in Business/First Class on any partner." },
    { name: "100,000-Point Global Companion Award", desc: "100,000-point companion award after $60,000 annual spend. Covers companion's premium cabin ticket.", min: 0, max: 1800, default: 0, comment: "At 1.5¢/pt, saves up to $1,500. Requires $60K annual card spend to earn." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "3X Points on Dining", desc: "3x points on eligible dining purchases. Estimate annual dollar value earned.", min: 0, max: 400, default: 0 },
    { name: "3X Points on Foreign Transactions", desc: "3x points on all eligible foreign transactions. No FTF. Estimate annual dollar value earned.", min: 0, max: 500, default: 20 },
    { name: "3X Points on Alaska/Hawaiian Purchases", desc: "3x points on Alaska Airlines and Hawaiian Airlines purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1x point on all other purchases. Estimate annual dollar value earned.", min: 0, max: 400, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "Alaska Lounge Passes", desc: "8 Alaska Lounge passes per year (2 per quarter), valid entire travel day including children.", min: 0, max: 520, default: 80 },
    { name: "Free Checked Bag & Preferred Boarding", desc: "Free checked bag for cardholder + up to 6 guests on same reservation. Up to $490 value roundtrip.", min: 0, max: 490, default: 0 },
    { name: "Instant Travel Delay Credit", desc: "$50 voucher for Alaska delays of 2+ hours or cancellations within 24 hours.", min: 0, max: 200, default: 0 },
    { name: "Waived Same-Day Flight Change Fee", desc: "Waived same-day confirmed change fee, saves up to $50 per one-way.", min: 0, max: 200, default: 0 },
    { name: "Waived Partner Award Booking Fee", desc: "Waived $12.50/person partner award booking fee. Saves up to $25/roundtrip.", min: 0, max: 100, default: 10 },

    // Status & Loyalty
    { section: "Status & Loyalty", name: "Status Points Earning", desc: "1 status point per $2 spent (no cap) + 10,000 bonus status points annually. Value if pursuing Atmos elite status.", min: 0, max: 500, default: 0, comment: "20K pts = Silver/oneworld Ruby, 40K = Gold/oneworld Sapphire with lounge access." },
    { name: "Points Transfer to Hotel Partners", desc: "Transfer points to 5 hotel partners at up to 1:1 ratio. Value of flexibility.", min: 0, max: 100, default: 0 },
    { name: "Free Points Sharing", desc: "Share points with up to 10 Atmos members, no transfer fees. Value of flexibility.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'atmos-rewards-summit',
    detailUrl: 'atmos-rewards-summit.html',
    name: 'Atmos™ Rewards Summit Visa Infinite® Card',
    issuer: 'Bank of America',
    network: 'Visa Infinite',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Points', 'Premium'],
    annualFee: 395,
    signOnBonusLabel: '80,000 pts + Companion Award',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
