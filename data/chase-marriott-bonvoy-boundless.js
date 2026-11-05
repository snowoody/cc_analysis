// Marriott Bonvoy Boundless Credit Card (by Chase) data
(function() {
  const terms = {
    "200,000 Bonus Points": `200,000 Bonus Points After You Spend $3,000 On Purchases In The First 3 Months From Account Opening.

New Cardmember Bonus: To qualify, you must make $3,000 in purchases during the first 3 months from account opening. After qualifying, please allow 6 to 8 weeks for bonus to post to your Marriott Bonvoy® account. Account must be open and not in default at the time of fulfillment. If your account is not open for at least 6 months, Marriott and Chase reserve the right to deduct the bonus points from your Marriott Bonvoy account.

Card eligibility: This card is not available to you if (1) you currently have, or (2) you received a new cardmember bonus within the last 24 months for, any of: Marriott Bonvoy® Premier, Marriott Rewards® Premier, Marriott Bonvoy Boundless®, Marriott Rewards® Premier Plus, Marriott Bonvoy Bold®.

Bonus eligibility (Amex Marriott cards): The bonus is not available if (1) you currently have or had within the last 30 days the Marriott Bonvoy® American Express® Card or The Starwood Preferred Guest® Credit Card from American Express; or (2) you were approved within the last 90 days for, or (3) received a new cardmember or upgrade bonus within the last 24 months for, any of: Marriott Bonvoy Business® Amex, Starwood Preferred Guest® Business Amex, Marriott Bonvoy Brilliant® Amex, Starwood Preferred Guest® Amex Luxury Card, Marriott Bonvoy Bevy™ Amex.

Excluded from qualifying purchases: balance transfers, cash advances, cash-like transactions (travelers checks, foreign currency, money orders, wire transfers, cryptocurrency), lottery tickets, gaming chips, wagers, person-to-person transfers, account-funding transactions, convenience checks, interest, unauthorized/fraudulent charges, and fees of any kind including the annual fee.`,

    "Up to $100 Airline Credits": `Up to $100 Airline Credits (New Cardmembers): New cardmembers who apply between 6/4/2026 and 12/31/2026 are automatically registered upon card activation.
- A $50 statement credit when you spend $250 or more on eligible purchases made directly with airlines from June 4, 2026 through December 31, 2026.
- A second $50 statement credit when you spend another $250 or more on eligible purchases made directly with airlines from January 1, 2027 through June 30, 2027.
Total maximum of $100 in statement credits through 6/30/2027.

Existing cardmembers (cardmember by 1/7/2026) must complete a one-time activation and can earn $50 for Jan 1–Jun 30, 2026 and $50 for Jul 1–Dec 31, 2026.

Allow 6 to 8 weeks for statement credits to appear. Credits may be reversed if the purchase is returned, canceled, or modified, or if you close your account within 90 days of receiving a credit. Product changes into another Chase Marriott Bonvoy card are not eligible. Account must be open and not in default at time of fulfillment. Merchant delays could push the transaction date outside the offer period.`,

    "Anniversary Free Night (35K cap)": `Anniversary Free Night Award: Automatically deposited into your Marriott Bonvoy® Account within up to 8 weeks of your account anniversary date (12 months after account opening, and every 12 months thereafter).

Valid for a one-night hotel stay at a property with a redemption level up to 35,000 points. You are responsible for incidental charges such as parking and mandatory resort fees. May not be combined with cash, but may be combined with Marriott Bonvoy points per Marriott Bonvoy terms. Not transferable, cannot be extended beyond expiration, and cannot be re-credited for points. Expires 12 months after issuance. Account must be open and not in default on your anniversary date.`,

    "Automatic Silver Elite Status": `Automatic Silver Elite Status: You automatically receive Silver Elite Status each calendar year as a cardmember. Allow up to 8 weeks from account open date for initial status to be applied.

Account must be open and not in default. Only one Marriott Bonvoy Credit Card account per Marriott Bonvoy member (who must be the primary cardmember) is eligible. Silver Elite members earn a 10% points bonus on qualifying hotel charges.`,

    "Path to Gold Elite ($35K spend)": `Path to Gold Status: Spend $35,000 on purchases from January 1 through December 31 of a calendar year to earn Gold Elite Status. The calculation resets to zero each January 1.

Purchases made near year-end may post in the following calendar year and count toward that year instead. Allow up to 8 weeks after qualifying for status to be applied. Account must be open and not in default. Only one Boundless account per Marriott Bonvoy member is eligible.`,

    "15 Elite Night Credits": `15 Elite Night Credits: 15 ENC are deposited within 60 days of account opening, and on or before March 1 of each subsequent calendar year.

You can only receive the Annual ENC benefit from one Marriott Bonvoy consumer card per year regardless of issuer (the card with the highest ENC count). If you have both a consumer and a business Marriott Bonvoy card, you can receive the Annual ENC benefit for each (two per member account per year). Must be the primary cardmember with an open account and an active linked Marriott Bonvoy Member Account.`,

    "1 Elite Night Credit per $5,000 Spent": `1 Elite Night Credit for Every $5,000 Spent: Earn 1 Elite Night Credit for each $5,000 in purchases, with no limit. Allow up to 8 weeks for credits to post from the last day of each calendar month you qualify. Account must be open and not in default.`,

    "Earn up to 17X at Marriott Properties": `Earn up to 17X total points at hotels participating in Marriott Bonvoy®:
- 6X points per $1 with the Marriott Bonvoy Boundless® card
- 10X base points per $1 from Marriott Bonvoy as a member
- 1X additional point per $1 (10% bonus) from Silver Elite Status

Some brands earn fewer base points (e.g. 5 base points at Residence Inn, TownePlace Suites, Element, Marriott Executive Apartments, Homes & Villas, and others; 4 at StudioRes). Stays must be booked on a direct Marriott channel to earn Marriott Bonvoy points.`,

    "3X on Gas, Grocery & Dining": `3 points total per $1 on the first $6,000 spent annually on combined purchases at gas stations, grocery stores, and dining at restaurants (including takeout and eligible delivery). After $6,000, these categories earn 2X with no maximum.

"Annually" means the year beginning with your account open date through the first December statement cycle date, and each 12 billing cycles thereafter.`,

    "2X on All Other Purchases": `Earn 2 points per $1 on all other purchases. Points are transferred to Marriott Bonvoy after the end of each billing cycle. Balance transfers, cash advances, cash-like transactions, gambling, fees, and interest do not earn points.`,

    "Premium On-Property Internet": `Premium On-Property Internet Access: For primary cardmembers only, available at hotels participating in Marriott Bonvoy®.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No foreign transaction fees on purchases made outside the United States. Saves the typical 3% fee charged by most cards.`,

    "Trip Delay Reimbursement": `Trip Delay Reimbursement: If your common carrier travel is delayed more than 12 hours or requires an overnight stay, you and your family are covered for unreimbursed expenses such as meals and lodging, up to $500 per ticket, when the fare is paid with your card. See Guide to Benefits for full details.`,

    "Baggage Delay Insurance": `Baggage Delay Insurance: Reimburses essential purchases like toiletries and clothing for baggage delays over 6 hours by a passenger carrier, up to $100 a day for 5 days. See Guide to Benefits for full details.`,

    "Lost Luggage Reimbursement": `Lost Luggage Reimbursement: If you or an immediate family member's checked or carry-on bags are damaged or lost by the carrier, you're covered up to $3,000 per passenger when the fare is paid with your card. See Guide to Benefits for full details.`,

    "Purchase Protection": `Purchase Protection: Covers new purchases for 120 days against damage or theft, up to $500 per claim and $50,000 per account. See Guide to Benefits for full details.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "200,000 Bonus Points", desc: "200K Marriott points after $3K spend in 3 months. Adjust your value per point.", min: 0, max: 1.5, default: 0.6, miles: 200000, firstYearOnly: true, comment: "Valued at 0.6¢/pt for Marriott hotel redemptions. Not eligible if you hold or recently earned a bonus on other Marriott cards (see terms)." },
    { name: "Up to $100 Airline Credits", desc: "$50 per half-year after $250+ spend directly with airlines (6/4/26–6/30/27).", min: 0, max: 100, default: 50, firstYearOnly: true },

    // Annual Marriott Benefits
    { section: "Annual Marriott Benefits", name: "Anniversary Free Night (35K cap)", desc: "Free night each account anniversary at properties up to 35K points.", min: 0, max: 300, default: 100, comment: "First certificate arrives after your first anniversary, so it offsets the year-2 annual fee rather than year 1." },
    { name: "Automatic Silver Elite Status", desc: "Silver Elite each year: 10% bonus points on stays.", min: 0, max: 50, default: 0 },
    { name: "Path to Gold Elite ($35K spend)", desc: "Gold Elite after $35K spend in a calendar year.", min: 0, max: 200, default: 0 },
    { name: "Premium On-Property Internet", desc: "Premium Wi-Fi at Marriott Bonvoy hotels (primary cardmember).", min: 0, max: 30, default: 0 },

    // Elite Night Credits
    { section: "Elite Night Credits", name: "15 Elite Night Credits", desc: "15 ENC annually toward higher Marriott elite tiers.", min: 0, max: 150, default: 0, comment: "Only one consumer Marriott card's ENC benefit counts per year, so this doesn't stack with Bevy/Brilliant." },
    { name: "1 Elite Night Credit per $5,000 Spent", desc: "1 ENC per $5K in purchases (no cap).", min: 0, max: 100, default: 0 },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 17X at Marriott Properties", desc: "6x card + 10x Marriott member + 1x Silver Elite at Marriott hotels.", min: 0, max: 800, default: 0 },
    { name: "3X on Gas, Grocery & Dining", desc: "3x on first $6K/yr combined at gas, grocery, dining; then 2x.", min: 0, max: 200, default: 0 },
    { name: "2X on All Other Purchases", desc: "2x on all other purchases.", min: 0, max: 400, default: 0 },

    // Travel Perks & Protections
    { section: "Travel Perks & Protections", name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases.", min: 0, max: 200, default: 0 },
    { name: "Trip Delay Reimbursement", desc: "Up to $500/ticket for delays over 12 hours or overnight.", min: 0, max: 50, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 5 days when bags delayed 6+ hours.", min: 0, max: 30, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per passenger for lost or damaged bags.", min: 0, max: 30, default: 0 },
    { name: "Purchase Protection", desc: "Covers new purchases 120 days against damage/theft, up to $500/claim.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-marriott-bonvoy-boundless',
    detailUrl: 'chase-marriott-bonvoy-boundless.html',
    name: 'Marriott Bonvoy Boundless® Credit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Hotel', 'Travel'],
    annualFee: 95,
    signOnBonusLabel: '200K pts ($3K/3mo)',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
