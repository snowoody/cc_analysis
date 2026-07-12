// Chase Sapphire Reserve for Business℠ Credit Card data
(function() {
  const terms = {
    "200,000 Point Sign-On Bonus": `Earn 200,000 bonus points after you spend $30,000 on purchases in your first 6 months from account opening. The new cardmember bonus may not be available to you if you have ever had this card. We may also consider factors pertinent to your business in determining your bonus eligibility. Chase values 200,000 points at $4,000 for select flights and hotels through Chase Travel (with Points Boost). Points are worth $0.01 each (1¢) as a baseline through Chase Travel. The Points Guy values Ultimate Rewards points at ~2.05¢ each via transfer partners. Adjust the slider to your own per-point value.`,

    "$300 Annual Travel Credit": `Receive up to $300 in statement credits each anniversary year for travel purchases. A statement credit is automatically applied to your account for purchases in the travel category, up to an annual maximum of $300. This is the most flexible travel credit available — it applies to a broad travel merchant category (airlines, hotels, car rentals, cruises, taxis, transit, parking, tolls and more). Purchases that qualify for the credit will not earn points.`,

    "$500 Credit for Stays with The Edit℠": `Get up to $500 in automatic statement credits annually for bookings made with The Edit by Chase Travel, with a maximum of $250 per transaction. Two-night minimum required. Purchases that qualify will not earn points. The Edit is Chase Travel's handpicked collection of hotels and resorts.`,

    "$250 Credit for Select Chase Travel Hotels (through 2026)": `Get up to $250 in statement credits through 12/31/26 on prepaid Chase Travel hotel bookings (2-night minimum) for stays with IHG Hotels & Resorts, Montage, Pendry, Omni, Virgin Hotels, Minor Hotels, and Pan Pacific Hotels and Resorts. Purchases that qualify will not earn points. This is a limited-time benefit available in calendar year 2026.`,

    "The Edit℠ On-Property Benefits": `When you book a stay through The Edit by Chase Travel you receive complimentary on-property benefits such as a property credit, daily breakfast for two, a room upgrade (if available) and more — an average total value of over $550 per stay (based on a 2-night stay). Benefits are per room, based on double occupancy, and subject to availability at check-in.`,

    "$200 Google Workspace Credit": `Get business tools that fuel innovation with Google Workspace. Earn up to $200 in annual statement credits on purchases made directly on Google Workspace. Tackle your biggest challenges and accelerate growth with a suite of easy-to-use tools for work including Google AI in Gmail, Calendar, Drive, Meet, NotebookLM and more.`,

    "$400 ZipRecruiter Credit": `Find quality candidates and enjoy up to $400 in annual statement credits on purchases made directly with ZipRecruiter. You'll earn up to $200 in statement credits January through June and up to $200 in statement credits July through December. 4 out of 5 employers who post on ZipRecruiter get a quality candidate in 1 day.`,

    "$120 Lyft Credit + 5x Points": `Get up to $10 in monthly in-app Lyft credits, up to $120 annually, to use on rides through 9/30/2027. Plus earn 5x total points on Lyft rides through 9/30/2027. Monthly credits do not roll over.`,

    "$420 DoorDash Value": `$120 DashPass membership: Get complimentary DashPass membership for 12 months. Enjoy $0 delivery fees and reduced service fees on eligible DoorDash orders when you activate by 12/31/27. $300 DoorDash promos: DashPass members get up to $25 each month — a $5 monthly promo for restaurant orders plus two $10 monthly promos for groceries, retail, and more. Available through 12/31/27. Promos are issued monthly and do not roll over.`,

    "$100 Curated Gift Card Credit": `Earn up to $100 per year in statement credits when you purchase gift cards from a curated collection on giftcards.com/reservebusiness. You'll earn up to $50 in statement credits January through June and up to $50 July through December.`,

    "Chase Sapphire Reserve Lounge Network℠": `Enjoy complimentary access to Chase Sapphire Lounges by The Club and 1,300+ Priority Pass™ airport lounges worldwide, with up to two complimentary guests — valued at over $850 when you and your guests visit multiple times each year. Plus access to select Air Canada Maple Leaf Lounges and Cafés with an eligible Star Alliance boarding pass. Note: Lounge benefits are not available for Employee Cardmembers; employees may access as guests of the Primary Cardmember.`,

    "IHG One Rewards Platinum Elite Status": `Get complimentary IHG One Rewards Platinum Elite Status through December 31, 2027. Activation required by linking your IHG One Rewards account. Platinum Elite provides bonus points, room upgrades (when available), and other perks at IHG properties. Not available for Employee Cardmembers.`,

    "$120 Global Entry/TSA PreCheck/NEXUS Credit": `Receive one statement credit of up to $120 every four years as reimbursement for the application fee (Global Entry, TSA PreCheck®, or NEXUS) charged to your card. Annualized value: ~$30/year.`,

    "8x Points on Chase Travel": `Earn 8 points per $1 spent on all purchases made through Chase Travel℠, including The Edit℠. Travel booked through FROSCH/Valerie Wilson Travel by Chase Travel does not qualify for 8x.`,

    "4x Points on Flights & Hotels Booked Direct": `Earn 4 points per $1 spent on flights booked directly with airlines and hotels booked directly with hotels.`,

    "3x Points on Social Media & Search Ads": `Earn 3 points per $1 spent on social media and search engine advertising purchases for your business.`,

    "1x Points on All Other Purchases": `Earn 1 point per $1 spent on all other purchases. Ultimate Rewards points do not expire as long as your account is open.`,

    "Unlock Tier: $120K Annual Spend Benefits": `Spend $120,000 each calendar year and unlock status and credits with leading travel and shopping brands. Benefits available for the remainder of the year earned and through the following year: World of Hyatt Explorist status; up to $500 in credits for The Shops at Chase; IHG One Rewards Diamond Elite status; up to $500 in credits for Southwest Airlines flights booked through Chase Travel; Southwest Airlines Rapid Rewards A-List status.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary when renting for business purposes and provides reimbursement up to $75,000 for theft and collision damage for most rental vehicles in the U.S. and abroad.`,

    "Cell Phone Protection": `Cell Phone Protection: Get up to $1,000 per claim in cell phone protection against covered theft or damage for cell phones listed on your monthly cell phone bill when you pay it with your eligible credit card. Maximum of 3 claims in a 12-month period with a $100 deductible per claim.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation and Interruption Insurance: If your trip is canceled or cut short by sickness, severe weather or other covered situations, you can be reimbursed up to $10,000 per covered traveler and $20,000 per trip for your pre-paid, non-refundable travel expenses, including passenger fares, tours, and hotels.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $10,000 per item. Restrictions, limitations and exclusions apply.`,

    "Return Protection": `Return Protection: You can be reimbursed for eligible items that the store won't accept within 90 days of purchase, up to $500 per item, $1,000 per 12-month period.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: You will pay no foreign transaction fees when you use your card for purchases made outside of the United States.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "200,000 Point Sign-On Bonus", desc: "200,000 Ultimate Rewards points after spending $30,000 in the first 6 months. Adjust your value per point (1¢ cash, up to 2¢ Chase Travel w/ Points Boost, ~2.05¢ transfer partners).", min: 0, max: 3.0, default: 1.5, miles: 200000, firstYearOnly: true },

    // Annual Credits
    { section: "Annual Credits & Perks", name: "$300 Annual Travel Credit", desc: "Automatic statement credits for travel purchases (airlines, hotels, car rentals, transit, etc.) up to $300/yr. Most cardholders use in full.", min: 0, max: 300, default: 280 },
    { name: "$500 Credit for Stays with The Edit℠", desc: "Up to $500/yr in credits for The Edit hotel bookings ($250 max per transaction, 2-night min). Value depends on luxury hotel usage.", min: 0, max: 500, default: 0 },
    { name: "$250 Credit for Select Chase Travel Hotels (through 2026)", desc: "Up to $250 for prepaid stays at IHG, Montage, Pendry, Omni, Virgin, Minor, Pan Pacific through 12/31/26. Limited-time benefit.", min: 0, max: 250, default: 0, firstYearOnly: true },
    { name: "$200 Google Workspace Credit", desc: "Up to $200/yr in statement credits on Google Workspace purchases. Value depends on whether your business uses Google Workspace.", min: 0, max: 200, default: 0 },
    { name: "$400 ZipRecruiter Credit", desc: "Up to $400/yr ($200 per half-year) in credits on ZipRecruiter. Value depends on hiring needs.", min: 0, max: 400, default: 0 },
    { name: "$120 Lyft Credit + 5x Points", desc: "Up to $10/mo in Lyft credits ($120/yr) through 9/30/2027 + 5x points on rides. Monthly credits don't roll over.", min: 0, max: 120, default: 90 },
    { name: "$420 DoorDash Value", desc: "$120 DashPass membership + up to $300/yr in DoorDash promos ($25/mo: $5 restaurant + $10+$10 grocery/retail). Through 12/31/2027.", min: 0, max: 420, default: 0 },
    { name: "$100 Curated Gift Card Credit", desc: "Up to $100/yr ($50 per half-year) for gift cards from giftcards.com/reservebusiness.", min: 0, max: 100, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "8x Points on Chase Travel", desc: "8 UR pts/$1 on all Chase Travel purchases including The Edit. Estimate annual points value at your cpp.", min: 0, max: 2000, default: 0 },
    { name: "4x Points on Flights & Hotels Booked Direct", desc: "4 UR pts/$1 on flights and hotels booked directly. Estimate annual points value.", min: 0, max: 2000, default: 0 },
    { name: "3x Points on Social Media & Search Ads", desc: "3 UR pts/$1 on social media and search engine advertising. Estimate annual points value.", min: 0, max: 1000, default: 0 },
    { name: "1x Points on All Other Purchases", desc: "1 UR pt/$1 on all other purchases. Estimate annual points value.", min: 0, max: 1000, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "Chase Sapphire Reserve Lounge Network℠", desc: "Chase Sapphire Lounges + 1,300+ Priority Pass lounges + Air Canada Maple Leaf access with up to 2 guests. Valued at $850+/yr for frequent travelers.", min: 0, max: 1000, default: 0 },
    { name: "The Edit℠ On-Property Benefits", desc: "Property credit, daily breakfast for two, room upgrade, etc. — avg $550+ per stay. Value depends on Edit bookings.", min: 0, max: 1000, default: 0 },
    { name: "IHG One Rewards Platinum Elite Status", desc: "Complimentary Platinum Elite through 12/31/2027. Bonus points, room upgrades at IHG properties.", min: 0, max: 200, default: 0 },
    { name: "$120 Global Entry/TSA PreCheck/NEXUS Credit", desc: "$120 every 4 years (~$30/yr annualized) for application fee reimbursement.", min: 0, max: 30, default: 0 },

    // Unlock Tier
    { section: "Unlock Tier ($120K Spend)", name: "Unlock Tier: $120K Annual Spend Benefits", desc: "Spend $120K/yr to unlock: Hyatt Explorist, $500 Shops at Chase, IHG Diamond Elite, $500 SW via Chase Travel, SW A-List status. Only count if you'll hit $120K.", min: 0, max: 2000, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage for business rentals up to $75,000 for theft/collision damage in U.S. and abroad", min: 0, max: 200, default: 0 },
    { name: "Cell Phone Protection", desc: "Up to $1,000/claim for theft or damage when you pay phone bill with card ($100 deductible, 3 claims/yr)", min: 0, max: 300, default: 0 },
    { name: "Trip Cancellation/Interruption Insurance", desc: "Up to $10,000 per person / $20,000 per trip for non-refundable travel expenses", min: 0, max: 300, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $10,000 per item", min: 0, max: 200, default: 0 },
    { name: "Return Protection", desc: "Reimbursement for items store won't take back within 90 days, up to $500/item ($1,000/yr)", min: 0, max: 100, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No fees on purchases made outside the U.S. Estimate savings if you travel internationally for business.", min: 0, max: 200, default: 0 },

    // Other
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost. Set individual spending limits and earn rewards faster.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-sapphire-reserve-biz',
    detailUrl: 'chase-sapphire-reserve-biz.html',
    name: 'Sapphire Reserve for Business℠ Credit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Business',
    categories: ['Travel', 'Points', 'Premium', 'Transfer Partners'],
    annualFee: 795,
    signOnBonusLabel: '200,000 UR pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
