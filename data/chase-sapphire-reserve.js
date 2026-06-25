// Chase Sapphire Reserve® data
(function() {
  const terms = {
    "100,000 Point Sign-On Bonus": `Earn 100,000 bonus points after you spend $6,000 on purchases in the first 3 months from account opening.

New Cardmember Bonus - 100,000 Points: To qualify, you must make $6,000 in purchases during the first 3 months from account opening. After qualifying, please allow 6 to 8 weeks for bonus to post to your account. This card is unavailable to you if you currently have one open. The new cardmember bonus may not be available if you previously held this card or received a new cardmember bonus for this card; Chase may also consider the number of cards you have opened and closed.

Chase values 100,000 points at $2,000 for select flights and hotels through Chase Travel (with Points Boost). Points are worth $0.01 each (1¢) as a baseline through Chase Travel, but with Points Boost promotions select hotel and flight redemptions can be worth up to 2¢. The Points Guy has valued Ultimate Rewards points around 2¢ each via transfer partners. Adjust the slider to your own per-point value. A limited-time elevated offer of 150,000 points was available in 2025.`,

    "$300 Annual Travel Credit": `Get up to $300 in statement credits for travel purchases each account anniversary year. A statement credit is automatically applied to your account for purchases in the travel category, up to an annual maximum of $300. "Annual" means the year beginning with your account open date through the first statement date after your anniversary, and the 12 monthly billing cycles after that each year.

This is the most flexible travel credit of any card — it applies to a broad travel merchant category (airlines, hotels, car rentals, cruises, taxis, transit, parking, tolls and more), not a specific portal. Purchases that qualify for the credit will not earn points. Most cardholders use this in full, so it effectively reduces the annual fee by $300.`,

    "$500 Credit for Stays with The Edit℠": `Receive a statement credit of up to $250 for each prepaid booking with The Edit by Chase Travel, up to $500 annually (calendar year, starting 1/1/2026). Two-night minimum, "Pay Now" stays.

The Edit is Chase Travel's handpicked collection of hotels and resorts. Statement credits should post within 3 business days but may take up to 4 weeks. Credits may be reversed if a purchase is returned, canceled, or modified, or if you close your account within 90 days. Purchases that qualify for the credit will not earn points. Value depends on whether you book 2+ night luxury hotel stays through The Edit.`,

    "$250 Credit for Select Chase Travel Hotels (through 2026)": `Get up to $250 in statement credits through 12/31/26 on prepaid Chase Travel hotel bookings (2-night minimum) for stays with IHG Hotels & Resorts, Montage, Pendry, Omni, Virgin Hotels, Minor Hotels, and Pan Pacific.

This is a limited-time benefit available in calendar year 2026 only. Qualifying purchases are pre-paid "Pay Now" stays of 2 nights or more. Purchases that qualify for the credit will not earn points.`,

    "The Edit℠ On-Property Benefits": `When you book a stay through The Edit by Chase Travel you receive complimentary on-property benefits such as a property credit, daily breakfast for two, a room upgrade (if available) and more — an average total value of over $550 per stay (based on a 2-night stay).

Benefits are per room, based on double occupancy, and subject to availability at check-in. The realized value varies based on room rates and how you use the breakfast, upgrade, and property-credit perks. Only count this if you actually book qualifying stays through The Edit.`,

    "$300 Annual Dining Credit": `Get up to $150 in statement credits from January through June and again from July through December (max $300 annually) when you dine at restaurants in the Sapphire Reserve Exclusive Tables program on OpenTable.

Split by half-year and does not roll over. To qualify, dining purchases must be identifiable by Chase as made directly with the select restaurants — third-party delivery, gift cards, and merchandise do not qualify. The list of participating restaurants is curated and limited to select cities, so value depends on whether the Exclusive Tables restaurants match where you dine.`,

    "$300 Annual StubHub Credit (through 2027)": `Get up to $150 in statement credits from January through June and again from July through December (max $300 annually) for StubHub and viagogo purchases through 12/31/27. One-time activation required.

Split by half-year and does not roll over. Qualifying purchases must be made directly with StubHub/viagogo. Value depends on whether you buy live-event tickets through StubHub.`,

    "$120 Lyft Credit + 5x Points": `Get up to $10 in in-app Lyft credit each calendar month through 9/30/2027 (up to $120 annually), plus earn 5x total points on Lyft rides through 9/30/2027.

Monthly credits do not roll over — unused credit at month-end is forfeited. Credit applies to the ride subtotal only (excludes fees, taxes, tip, gift cards) on Standard, Extra Comfort, XL, Black, or Black SUV rides. Whoever adds their card to the Lyft app first gets the credit. Value depends on whether you take at least one Lyft ride most months.`,

    "$120 Peloton Credit + 10x Points": `Get $10 in statement credits per month on eligible Peloton memberships through 12/31/2027 (max $120 annually). One-time activation required. Plus, earn 10x total points on eligible Peloton equipment and accessory purchases over $150 (up to $5,000 in purchases) through 12/31/2027.

Qualifying memberships include Peloton All-Access, Rental, App+, Guide, App One, or Strength+. Only valuable if you hold a paid Peloton membership.`,

    "$300 in DoorDash Promos": `As a DashPass member, get up to $25 each month in DoorDash promos: a $5 monthly promo for restaurant orders plus two $10 monthly promos for groceries, retail, and more. Available through 12/31/2027.

Promos are issued monthly and do not roll over. Each promo applies to the order subtotal only (excludes fees, taxes, gratuity). Up to $300/year if you fully use all three promos every month. Value depends on regular DoorDash use across restaurants, grocery, and retail.`,

    "$120 DashPass Membership": `Complimentary DashPass membership (a $120 value) for use on DoorDash and Caviar when activated with your card by 12/31/2027. DashPass provides $0 delivery fees and reduced service fees on eligible orders.

Membership runs at least 12 months from first activation. Value depends on how often you order delivery — frequent DoorDash users save on delivery and service fees.`,

    "$288 Apple TV+ & Apple Music": `Get complimentary Apple TV (the streaming home of Apple Originals) plus Apple Music. Subscriptions run through 6/22/2027 — a value of $288 annually. One-time activation required by June 22, 2027.

If you already pay for these subscriptions directly through Apple, the complimentary benefit suspends your paid subscription (or discounts Apple One). Value is highest if you already use or want both Apple TV+ and Apple Music; near zero if you don't watch/listen.`,

    "Chase Sapphire Reserve Lounge Network℠": `Enjoy complimentary access to Chase Sapphire Lounges by The Club and 1,300+ Priority Pass™ airport lounges worldwide, with up to two complimentary guests — valued at over $850 when you and your guests visit multiple times each year. Plus access to select Air Canada Maple Leaf Lounges and Cafés in the U.S., Canada, and Europe with an eligible Star Alliance boarding pass.

The $850+ value is based on the $469 Priority Pass Select membership plus four $100 Chase Sapphire Lounge day-pass values. Priority Pass: primary and authorized users get two guests each; additional guests are $27 per guest, per visit. Access requires a physical card and may be denied at capacity. Value depends heavily on how often you travel and visit lounges.`,

    "IHG One Rewards Platinum Elite Status": `Get complimentary IHG One Rewards Platinum Elite Status through December 31, 2027. Activation required by linking your IHG One Rewards account on Chase.com or the Chase Mobile app.

Platinum Elite provides benefits such as bonus points, room upgrades (when available), and other perks at IHG properties. Value depends on how often you stay at IHG hotels.`,

    "Reserve Travel Designers": `Build and book a custom itinerary with a Reserve Travel Designer — a personalized concierge travel-planning service valued at up to $300 per trip. No travel agency fees are assessed for reservations made through Reserve Travel Designers (supplier fees such as baggage and resort fees may still apply).

Note: to earn 8x on Chase Travel or 4x on direct flights/hotels, bookings must be made directly through Chase Travel or directly with the airline/hotel respectively. Value depends on whether you use the concierge planning service.`,

    "Global Entry, TSA PreCheck®, or NEXUS Credit": `Receive one statement credit of up to $120 every four years as reimbursement for the application fee (Global Entry, TSA PreCheck®, or NEXUS) charged to your card.

One credit per account every 4 years. Annualized value: ~$30/year (Global Entry $120/4yrs) or ~$21/year (TSA PreCheck $85/4yrs).`,

    "8x Points on Chase Travel": `Earn 8 points per $1 spent on all purchases made through Chase Travel, including The Edit℠. Travel booked through FROSCH/Valerie Wilson Travel by Chase Travel does not qualify for 8x. Estimate the annual dollar value of points earned (points worth ~1¢ each as a baseline, more with Points Boost or transfer partners).`,

    "4x Points on Flights Booked Direct": `Earn 4 points per $1 spent on flights booked directly with the airline. Estimate the annual dollar value of points earned.`,

    "4x Points on Hotels Booked Direct": `Earn 4 points per $1 spent on hotels booked directly with the hotel. Estimate the annual dollar value of points earned.`,

    "3x Points on Dining Worldwide": `Earn 3 points per $1 spent on dining at restaurants worldwide, including takeout and eligible delivery services. Estimate the annual dollar value of points earned.`,

    "1x Points on All Other Purchases": `Earn 1 point per $1 spent on all other purchases. Ultimate Rewards points do not expire as long as your account is open. Estimate the annual dollar value of points earned.`,

    "Points Boost": `With Points Boost, your points are worth up to 2x on top booked hotels (including The Edit) and flights with select airlines through Chase Travel. Points are worth $0.01 each baseline through Chase Travel; a Points Boost promotion can make 100 points worth up to $2. Offers are promotional, vary by card, and refresh periodically.`,

    "Point Transfer to Travel Partners": `Transfer your Ultimate Rewards points 1:1 to leading airline and hotel loyalty programs (including United, Southwest, Hyatt, Marriott, IHG, British Airways/Avios, Air Canada Aeroplan, and more). There are no transfer fees.

Transfer-partner redemptions typically yield the best per-point value (TPG values UR points ~2¢). This is largely reflected if you set your per-point value above 1¢ on the sign-on bonus slider; use this only if you value transfer optionality separately.`,

    "$75,000 Spend Benefits": `Spend $75,000 on purchases each calendar year to unlock additional status and credits, available for the remainder of that year and through the following calendar year. Benefits include: World of Hyatt Explorist status, IHG One Rewards Diamond Elite status, a $250 credit for The Shops at Chase, a $500 Southwest Airlines Chase Travel credit, and Southwest Rapid Rewards A-List status.

These benefits require very high annual spend ($75,000). Only count them if you reliably put that much on the card each year.`,

    "Auto Rental Coverage (Primary)": `Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary and provides reimbursement up to $75,000 for theft and collision damage for most rental vehicles in the U.S. and abroad. (For New York residents, inside-U.S. coverage is secondary to your personal auto insurance.)`,

    "Trip Cancellation / Interruption Insurance": `If your trip is canceled or cut short by sickness, severe weather, or other covered situations, you can be reimbursed up to $10,000 per covered traveler and $20,000 per trip for pre-paid, non-refundable travel expenses including passenger fares, tours, and hotels.`,

    "Trip Delay Reimbursement": `If your common carrier travel is delayed more than 6 hours or requires an overnight stay, you are covered for unreimbursed expenses such as meals and lodging, up to $500 per covered traveler.`,

    "Emergency Evacuation & Transportation": `If you or a covered traveler are injured or become sick during a trip 100 miles or more from home that results in an emergency evacuation, you can be covered for medical services and transportation up to $100,000.`,

    "Travel Accident Insurance": `When you pay for your air, bus, train, or cruise transportation with your card, you are eligible to receive up to $1,000,000 in accidental death or dismemberment coverage.`,

    "Lost Luggage Reimbursement": `Provides reimbursement up to $3,000 per covered traveler for the cost to repair or replace checked or carry-on baggage that is lost, damaged, or stolen during a covered trip. (For New York residents, limited to $2,000 per bag and $10,000 for all covered travelers per trip.)`,

    "Baggage Delay Insurance": `Reimburses you up to $100 a day for up to 5 days for essential purchases like toiletries and clothing when baggage is delayed over 6 hours.`,

    "Emergency Medical & Dental": `If you or an immediate family member become sick or injured while you're 100 miles or more from home on a trip, you can be reimbursed up to $2,500 for medical expenses, subject to a $50 deductible.`,

    "Roadside Assistance": `If you have a roadside emergency, you can call for a tow, battery assistance, tire change, locksmith, or gas. You're covered up to $50 per incident, 4 times a year.`,

    "Purchase Protection": `Covers your eligible new purchases for 120 days from the date of purchase against damage or theft, up to $10,000 per item. (For New York residents, the coverage period is 90 days.)`,

    "Return Protection": `You can be reimbursed for eligible items that the store won't accept within 90 days of purchase, up to $500 per item, $1,000 per 12-month period.`,

    "Extended Warranty Protection": `Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fees on purchases made outside the United States on one of the most widely accepted global networks. The typical 3% fee is waived. Estimate annual savings based on your international spend.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "100,000 Point Sign-On Bonus", desc: "100,000 points after spending $6,000 on purchases in the first 3 months. Adjust your value per point.", min: 0, max: 2.5, default: 1.5, miles: 100000, firstYearOnly: true, comment: "Chase values these at $2,000 for travel via Chase Travel (with Points Boost); TPG values UR points ~2¢ via transfer partners; 1¢ is the cash floor. A limited-time 150,000-point offer appeared in 2025. Not available if you've held this card or received its bonus before." },

    // Annual Credits
    { section: "Annual Credits", name: "$300 Annual Travel Credit", desc: "$300 in statement credits for broad travel purchases each anniversary year. The most flexible travel credit of any card — most people use it fully.", min: 0, max: 300, default: 285, comment: "Applies automatically to a broad travel merchant category (airfare, hotels, transit, parking, tolls, taxis, etc.), not a portal. Effectively reduces the annual fee by $300 for most travelers." },
    { name: "$500 Credit for Stays with The Edit℠", desc: "Up to $250 per prepaid booking with The Edit by Chase Travel, up to $500/year (calendar year, starts 1/1/2026). 2-night minimum.", min: 0, max: 500, default: 0, comment: "Requires booking 2+ night luxury hotel stays through The Edit. Calendar-year benefit; does not roll over. Only valuable if you book qualifying luxury stays." },
    { name: "$250 Credit for Select Chase Travel Hotels (through 2026)", desc: "Up to $250 in statement credits in 2026 on prepaid Chase Travel stays (2-night min) at IHG, Montage, Pendry, Omni, Virgin, Minor, Pan Pacific.", min: 0, max: 250, default: 0, comment: "Limited-time benefit for calendar year 2026 only. Requires a 2+ night prepaid Chase Travel booking at a participating brand." },
    { name: "$300 Annual Dining Credit", desc: "Up to $150 Jan–Jun and $150 Jul–Dec at Sapphire Exclusive Tables restaurants on OpenTable. Estimate your usable value.", min: 0, max: 300, default: 100, comment: "Curated list of select restaurants in select cities; split by half-year and does not roll over. Value depends on whether the participating restaurants match where you dine." },
    { name: "$300 Annual StubHub Credit (through 2027)", desc: "Up to $150 Jan–Jun and $150 Jul–Dec for StubHub/viagogo purchases. Activation required. Estimate your usable value.", min: 0, max: 300, default: 200, comment: "Split by half-year, does not roll over. Only valuable if you buy live-event tickets through StubHub or viagogo." },
    { name: "$120 Lyft Credit + 5x Points", desc: "$10 in-app Lyft credit each month through 9/30/2027 (up to $120/yr), plus 5x points on Lyft rides. Estimate your usable value.", min: 0, max: 120, default: 40, comment: "Monthly credits don't roll over. Worth close to $120/yr if you take at least one qualifying Lyft ride most months." },
    { name: "$120 Peloton Credit + 10x Points", desc: "$10/month statement credit on eligible Peloton memberships through 12/31/2027 (max $120/yr), plus 10x points on Peloton equipment.", min: 0, max: 120, default: 0, comment: "Only valuable if you hold a paid Peloton membership (All-Access, App+, Guide, App One, Strength+, or Rental)." },
    { name: "$300 in DoorDash Promos", desc: "Up to $25/month in DoorDash promos ($5 restaurant + two $10 grocery/retail) through 12/31/2027. Requires DashPass. Estimate usable value.", min: 0, max: 300, default: 0, comment: "Three separate monthly promos that don't roll over. Reaching the full $300/yr requires regular DoorDash restaurant + grocery/retail orders." },
    { name: "$120 DashPass Membership", desc: "Complimentary DashPass ($120 value) on DoorDash & Caviar when activated by 12/31/2027. Estimate your value based on delivery frequency.", min: 0, max: 120, default: 0, comment: "Provides $0 delivery fees and reduced service fees. Value depends on how often you order delivery." },
    { name: "$288 Apple TV+ & Apple Music", desc: "Complimentary Apple TV+ and Apple Music through 6/22/2027 ($288/yr value). Activation required. Estimate your value.", min: 0, max: 288, default: 0, comment: "Worth the full $288 only if you already use (or want) both Apple TV+ and Apple Music; offsets existing subscriptions." },
    { name: "Global Entry, TSA PreCheck®, or NEXUS Credit", desc: "Up to $120 every 4 years for application fee reimbursement. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },

    // Lounge & Travel Perks
    { section: "Lounge & Travel Perks", name: "Chase Sapphire Reserve Lounge Network℠", desc: "Chase Sapphire Lounges + 1,300+ Priority Pass lounges worldwide with 2 guests ($850+ value). Estimate your personal annual value.", min: 0, max: 850, default: 0, comment: "$850+ figure assumes multiple visits per year by you and guests. Value depends heavily on travel and lounge-visit frequency." },
    { name: "IHG One Rewards Platinum Elite Status", desc: "Complimentary IHG One Rewards Platinum Elite status through 12/31/2027. Best for IHG guests.", min: 0, max: 200, default: 0, comment: "Provides bonus points, possible upgrades, and other perks at IHG properties. Activation required." },
    { name: "The Edit℠ On-Property Benefits", desc: "Property credit, daily breakfast for 2, room upgrade & more on The Edit stays ($550+ avg value per 2-night stay). Estimate your usable value.", min: 0, max: 550, default: 0, comment: "Only realized if you book qualifying stays through The Edit; value varies by property and usage." },
    { name: "Reserve Travel Designers", desc: "Custom itinerary planning with a concierge travel designer (up to $300/trip value, no agency fees). Estimate your value.", min: 0, max: 300, default: 0, comment: "Value depends on whether you use the concierge planning service. Bookings must go directly through Chase Travel / supplier to earn bonus points." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "8x Points on Chase Travel", desc: "8x points on all Chase Travel purchases including The Edit. Estimate annual value (points ~1¢ each baseline).", min: 0, max: 800, default: 0 },
    { name: "4x Points on Flights Booked Direct", desc: "4x points on flights booked directly with the airline. Estimate annual value.", min: 0, max: 600, default: 20 },
    { name: "4x Points on Hotels Booked Direct", desc: "4x points on hotels booked directly with the hotel. Estimate annual value.", min: 0, max: 600, default: 5 },
    { name: "3x Points on Dining Worldwide", desc: "3x points on dining at restaurants worldwide (incl. takeout & eligible delivery). Estimate annual value.", min: 0, max: 600, default: 0 },
    { name: "1x Points on All Other Purchases", desc: "1x points on everything else. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "Points Boost", desc: "Points worth up to 2x on top hotels (incl. The Edit) and select airline flights via Chase Travel. Estimate extra annual value.", min: 0, max: 300, default: 0, comment: "Promotional and refreshed periodically; offers vary by card. Largely captured if you set a higher per-point value on the sign-on bonus slider." },
    { name: "Point Transfer to Travel Partners", desc: "1:1 transfers to United, Hyatt, Southwest, Marriott, IHG, Avios, Aeroplan and more. Boosts effective point value.", min: 0, max: 300, default: 0, comment: "Already factored in if you set the per-point value above 1¢ on the sign-on bonus slider. Use only if you value transfer optionality separately." },

    // High-Spend Benefits
    { section: "High-Spend Benefits", name: "$75,000 Spend Benefits", desc: "Spend $75k/calendar year to unlock Hyatt Explorist, IHG Diamond, $250 Shops at Chase, $500 Southwest credit & A-List status.", min: 0, max: 1000, default: 0, comment: "Requires $75,000 in annual spend. Only count this if you reliably hit that threshold each year." },

    // Travel Protections
    { section: "Travel Protections", name: "Auto Rental Coverage (Primary)", desc: "Primary coverage up to $75,000 for theft & collision on most rentals, U.S. and abroad", min: 0, max: 200, default: 0 },
    { name: "Trip Cancellation / Interruption Insurance", desc: "Up to $10,000 per traveler / $20,000 per trip for covered cancellations and interruptions", min: 0, max: 150, default: 0 },
    { name: "Trip Delay Reimbursement", desc: "Up to $500 per traveler for delays over 6 hours or requiring an overnight stay", min: 0, max: 150, default: 0 },
    { name: "Emergency Evacuation & Transportation", desc: "Up to $100,000 for emergency evacuation on trips 100+ miles from home", min: 0, max: 100, default: 0 },
    { name: "Travel Accident Insurance", desc: "Up to $1,000,000 accidental death or dismemberment coverage on common-carrier travel", min: 0, max: 100, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per covered traveler for lost, damaged, or stolen baggage", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 5 days when baggage is delayed over 6 hours", min: 0, max: 100, default: 0 },
    { name: "Emergency Medical & Dental", desc: "Up to $2,500 (after $50 deductible) for sickness/injury 100+ miles from home", min: 0, max: 100, default: 0 },
    { name: "Roadside Assistance", desc: "Up to $50 per incident, 4 times a year, for tow, battery, tire, locksmith, or gas", min: 0, max: 50, default: 0 },

    // Purchase Protections
    { section: "Purchase Protections", name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $10,000 per item", min: 0, max: 150, default: 0 },
    { name: "Return Protection", desc: "Reimbursement up to $500/item ($1,000/yr) when a store won't accept a return within 90 days", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
  ];

  const card = {
    id: 'chase-sapphire-reserve',
    detailUrl: 'chase-sapphire-reserve.html',
    name: 'Chase Sapphire Reserve®',
    issuer: 'Chase',
    network: 'Visa Infinite',
    type: 'Personal',
    categories: ['Travel', 'Premium', 'Points'],
    annualFee: 795,
    signOnBonusLabel: '100,000 points',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
