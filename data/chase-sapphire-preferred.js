// Chase Sapphire Preferred® data (June 2026 refresh)
(function() {
  const terms = {
    "100,000 Point Sign-On Bonus": `Earn 100,000 bonus points after you spend $5,000 on purchases in the first 3 months from account opening.

New Cardmember Bonus - 100,000 Points: To qualify, you must make $5,000 in purchases during the first 3 months from account opening. After qualifying, please allow 6 to 8 weeks for bonus to post to your account. This card is unavailable to you if you currently have one open. The new cardmember bonus may not be available if you previously held this card or received a new cardmember bonus for this card; Chase may also consider the number of cards you have opened and closed.

Chase values 100,000 points at roughly $1,250 for travel through Chase Travel (points are worth $0.01 each baseline, or more with Points Boost). The Points Guy values Ultimate Rewards points at ~2¢ each via transfer partners. Adjust the slider to your own per-point value.`,

    "$100 Chase Travel Hotel Credit": `Earn up to $100 in statement credits each account anniversary year for hotel stays purchased through Chase Travel.

A statement credit will automatically be applied to your account when your card is used for hotel accommodation purchases made through Chase Travel, up to an annual maximum of $100. "Annual" means the year beginning with your account open date through the first statement date after your anniversary, and the 12 monthly billing cycles after that each year. The first $100 in Chase Travel hotel purchases each year will not earn rewards points. This was doubled from $50 as part of the June 2026 refresh.`,

    "Global Entry, TSA PreCheck®, or NEXUS Credit": `Receive one statement credit of up to $120 every four years as reimbursement for the application fee (Global Entry, TSA PreCheck®, or NEXUS) charged to your card.

One credit per account every 4 years. Annualized value: ~$30/year (Global Entry $120/4yrs) or ~$21/year (TSA PreCheck $85/4yrs). Only purchases made directly with the U.S. Department of Homeland Security or authorized enrollment providers are eligible; third-party services do not qualify. New benefit added in June 2026.`,

    "Complimentary Apple TV (1 Year)": `Get one year of complimentary Apple TV when activated by December 31, 2026 — a value of $156.

One-time activation on Chase.com or the Chase Mobile app required by December 31, 2026. You will receive at least 12 months of complimentary Apple TV from the activation date. If you already have an active paid Apple TV subscription purchased directly through Apple, your complimentary subscription through Chase will automatically suspend your existing one. Only one complimentary Apple TV subscription per Apple Account.`,

    "$120 DashPass Membership": `Complimentary DashPass membership (a $120 value) for use on DoorDash and Caviar when activated with your card by 12/31/2027. DashPass provides $0 delivery fees and reduced service fees on eligible orders.

Membership runs at least 12 months from first activation. Value depends on how often you order delivery — frequent DoorDash users save on delivery and service fees. Once enrolled, you must use your Chase Sapphire Preferred card at checkout for DashPass-eligible orders to receive benefits.`,

    "$120 DoorDash Monthly Promos": `DashPass members get a $10 promo each calendar month ($120 annually) to save on groceries, retail orders, and more on DoorDash through 12/31/2027.

Each monthly promo applies to one qualifying non-restaurant order on DoorDash. Discount applies to subtotal only (excludes fees, taxes, gratuity). If the full $10 value is not used on a single order, the remaining value is forfeited. Monthly promos do not roll over.`,

    "5x Points on Chase Travel": `Earn 5 points per $1 spent on all purchases made through Chase Travel, including flights, hotels, rental cars, cruises, vacation homes, activities, and tours.

Travel booked through FROSCH by Chase Travel or Valerie Wilson Travel by Chase Travel earns 2x instead of 5x. Estimate the annual dollar value of points earned based on your Chase Travel spending.`,

    "3x Points on Dining Worldwide": `Earn 3 points per $1 spent on dining at restaurants worldwide, including takeout and eligible delivery services (DoorDash, Caviar, Grubhub, Seamless, etc.).

Estimate the annual dollar value of points earned based on your dining spend.`,

    "3x Points on Gas & EV Charging": `Earn 3 points per $1 spent at gas stations and on electric vehicle charging. New category added June 2026.

Estimate the annual dollar value of points earned based on your fuel/charging spend.`,

    "3x Points on Vacation Homes": `Earn 3 points per $1 spent on vacation homes at top brands: Airbnb, Vrbo, Plum Guide, HomeAway, Homestay.com, and Vacasa. New category added June 2026.

Purchases must be made directly through one of the qualifying platforms. Vacation homes booked through Chase Travel earn 5x instead.`,

    "3x Points on Streaming Services": `Earn 3 points per $1 spent on top streaming services including Apple Music, Apple TV, Disney+, ESPN+, Fubo TV, HBO Max, Hulu, Netflix, Pandora, Paramount+, Peacock, Showtime, SiriusXM, Sling, Spotify, YouTube Premium, YouTube TV, and Vudu.

Estimate the annual dollar value of points earned based on your streaming subscriptions.`,

    "3x Points on Online Grocery": `Earn 3 points per $1 spent on online grocery purchases, excluding Target, Walmart, and wholesale clubs.

Estimate the annual dollar value of points earned based on your online grocery spend. In-store grocery purchases earn 1x.`,

    "2x Points on All Other Travel": `Earn 2 points per $1 spent on all other travel purchases not covered by other earn categories (airfare, hotels booked directly, taxis, trains, etc.).

Travel booked through FROSCH by Chase Travel or Valerie Wilson Travel by Chase Travel also earns 2x. This covers the broad travel category beyond Chase Travel portal bookings.`,

    "1x Points on All Other Purchases": `Earn 1 point per $1 spent on all other purchases. Ultimate Rewards points do not expire as long as your account is open.

Estimate the annual dollar value of points earned on non-category spending.`,

    "5x Points on Lyft Rides": `Earn 5x total points on eligible Lyft products and services through 9/30/2027, including rideshare, bike and scooter rides, and subscription/membership products.

That's 3 additional points on top of the 2 points earned on travel. Gift cards, car rentals, and vehicle service center purchases are excluded.`,

    "5x Points on Peloton Equipment": `Earn 5x total points on eligible Peloton equipment and accessory purchases over $150 through 12/31/2027.

That's 4 additional points on top of the 1 point earned on these purchases. Only purchases made directly through Peloton (onepeloton.com, phone, or showroom) are eligible. Gift cards and apparel are not eligible. Up to $5,000 in total purchases qualify.`,

    "Points Boost": `With Points Boost, your points are worth more on thousands of top-booked hotels and on flights with select airlines through Chase Travel. Points are worth $0.01 each baseline through Chase Travel; a Points Boost promotion can make them worth more.

Offers are promotional and update on a rotating basis. Eligible travel options are marked with a Points Boost label while browsing Chase Travel.`,

    "Point Transfer to Travel Partners": `Transfer your Ultimate Rewards points to leading airline and hotel loyalty programs. There are no transfer fees.

Airline partners: Aer Lingus AerClub, Air Canada Aeroplan, British Airways Executive Club, Flying Blue (Air France/KLM), Iberia Plus, JetBlue TrueBlue, Singapore KrisFlyer, Southwest Rapid Rewards, United MileagePlus, Virgin Atlantic Flying Club. Hotel partners: IHG Rewards, Marriott Bonvoy, World of Hyatt (4:3 ratio for applications on/after 6/15/2026), Wyndham Rewards.

Note: World of Hyatt transfers are at a 4:3 rate (1,000 UR → 750 Hyatt points) for cardmembers who applied on or after June 15, 2026, or effective October 1, 2026 for earlier cardmembers.`,

    "Auto Rental Coverage (Primary)": `Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary and provides reimbursement up to $60,000 for theft and collision damage for most rental vehicles with an MSRP of $125,000 or less.

For New York residents, inside-U.S. coverage is secondary to your personal auto insurance.`,

    "Trip Cancellation / Interruption Insurance": `If your trip is canceled or cut short by sickness, severe weather, or other covered situations, you can be reimbursed up to $10,000 per covered traveler and $20,000 per trip for pre-paid, non-refundable travel expenses including passenger fares, tours, and hotels.`,

    "Trip Delay Reimbursement": `If your common carrier travel is delayed more than 12 hours or requires an overnight stay, you are covered for unreimbursed expenses such as meals and lodging, up to $500 per covered traveler.`,

    "Emergency Evacuation & Transportation": `If you or a covered traveler are injured or become sick during a trip 100 miles or more from home that results in an emergency evacuation, you can be covered for medical services and transportation up to $100,000.

New benefit added in June 2026 — described by Chase as making the card have the most comprehensive suite of built-in travel protections in its class.`,

    "Travel Accident Insurance": `When you pay for your air, bus, train, or cruise transportation with your card, you are eligible to receive up to $500,000 in accidental death or dismemberment coverage.`,

    "Lost Luggage Reimbursement": `Provides reimbursement up to $3,000 per covered traveler for the cost to repair or replace checked or carry-on baggage that is lost, damaged, or stolen during a covered trip.

For New York residents, limited to $2,000 per bag and $10,000 for all covered travelers per trip.`,

    "Baggage Delay Insurance": `Reimburses you up to $100 a day for up to 5 days for essential purchases like toiletries and clothing when baggage is delayed over 6 hours.`,

    "Roadside Assistance": `If you have a roadside emergency, call the service provider to dispatch the help you need. Roadside service fees will be billed to your card at time of dispatch.`,

    "Purchase Protection": `Covers your eligible new purchases for 120 days from the date of purchase against damage or theft, up to $500 per item.

For New York residents, the coverage period is 90 days.`,

    "Extended Warranty Protection": `Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fees on purchases made outside the United States on one of the most widely accepted global networks. The typical 3% fee is waived. Estimate annual savings based on your international spend.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "100,000 Point Sign-On Bonus", desc: "100,000 points after spending $5,000 on purchases in the first 3 months. Adjust your value per point.", min: 0, max: 2.5, default: 1.5, miles: 100000, firstYearOnly: true },

    // Annual Credits
    { section: "Annual Credits", name: "$100 Chase Travel Hotel Credit", desc: "$100 in statement credits each anniversary year for hotel stays booked through Chase Travel. Doubled from $50 in June 2026.", min: 0, max: 100, default: 75, comment: "Requires booking hotels through Chase Travel. Applies automatically — no activation needed. Hotel purchases qualifying for the credit do not earn points." },
    { name: "Global Entry, TSA PreCheck®, or NEXUS Credit", desc: "Up to $120 every 4 years for application fee reimbursement. Annualized ~$30/yr.", min: 0, max: 30, default: 0, comment: "New benefit added June 2026. One credit per account every 4 years." },

    // Partner Benefits
    { section: "Partner Benefits", name: "Complimentary Apple TV (1 Year)", desc: "One year of complimentary Apple TV ($156 value) when activated by 12/31/2026. Estimate your value.", min: 0, max: 156, default: 0, firstYearOnly: true, comment: "Only valuable if you want Apple TV. One-time benefit requiring activation by December 31, 2026." },
    { name: "$120 DashPass Membership", desc: "Complimentary DashPass ($120 value) on DoorDash & Caviar when activated by 12/31/2027. Estimate your value based on delivery frequency.", min: 0, max: 120, default: 0, comment: "Provides $0 delivery fees and reduced service fees. Value depends on how often you order delivery." },
    { name: "$120 DoorDash Monthly Promos", desc: "$10/month promo on groceries, retail orders, and more on DoorDash through 12/31/2027. Requires DashPass. Estimate usable value.", min: 0, max: 120, default: 0, comment: "Monthly promos don't roll over. Applies to one qualifying non-restaurant order per month." },
    { name: "5x Points on Lyft Rides", desc: "5x total points on Lyft rides through 9/30/2027. Estimate the extra annual value above 2x travel base.", min: 0, max: 100, default: 0, comment: "3 extra points per $1 on top of the 2x travel category earn. Only valuable if you use Lyft regularly." },
    { name: "5x Points on Peloton Equipment", desc: "5x total points on eligible Peloton equipment/accessory purchases over $150 through 12/31/2027. Estimate value.", min: 0, max: 100, default: 0, comment: "4 extra points per $1 on top of 1x. Up to $5,000 in purchases. Only valuable if buying Peloton equipment." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5x Points on Chase Travel", desc: "5x points on all Chase Travel purchases (flights, hotels, cars, cruises, activities). Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "3x Points on Dining Worldwide", desc: "3x points on restaurants worldwide (incl. takeout & eligible delivery). Estimate annual value.", min: 0, max: 400, default: 0 },
    { name: "3x Points on Gas & EV Charging", desc: "3x points on gas stations and EV charging. New June 2026. Estimate annual value.", min: 0, max: 200, default: 0 },
    { name: "3x Points on Vacation Homes", desc: "3x points on Airbnb, Vrbo, Plum Guide, HomeAway, Homestay.com, Vacasa. Estimate annual value.", min: 0, max: 200, default: 0 },
    { name: "3x Points on Streaming Services", desc: "3x points on Netflix, Spotify, Disney+, Hulu, and 14+ other streaming services. Estimate annual value.", min: 0, max: 100, default: 0 },
    { name: "3x Points on Online Grocery", desc: "3x points on online grocery (excl. Target, Walmart, wholesale clubs). Estimate annual value.", min: 0, max: 200, default: 0 },
    { name: "2x Points on All Other Travel", desc: "2x points on all other travel (airfare, hotels booked direct, taxis, trains, etc.). Estimate annual value.", min: 0, max: 400, default: 0 },
    { name: "1x Points on All Other Purchases", desc: "1x points on everything else. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "Points Boost", desc: "Points worth more on top hotels and select airline flights via Chase Travel. Estimate extra annual value.", min: 0, max: 200, default: 0, comment: "Promotional and refreshed periodically. Largely captured if you set a higher per-point value on the sign-on bonus slider." },
    { name: "Point Transfer to Travel Partners", desc: "Transfer 1:1 to United, Southwest, Marriott, IHG, Wyndham, Avios, Aeroplan, and more (4:3 to Hyatt). Boosts effective point value.", min: 0, max: 200, default: 0, comment: "Already factored in if you set the per-point value above 1¢ on the sign-on bonus slider. Hyatt transfers are now at 4:3 rate." },

    // Travel Protections
    { section: "Travel Protections", name: "Auto Rental Coverage (Primary)", desc: "Primary coverage up to $60,000 for theft & collision on most rentals (MSRP ≤$125k), U.S. and abroad", min: 0, max: 200, default: 0 },
    { name: "Trip Cancellation / Interruption Insurance", desc: "Up to $10,000 per traveler / $20,000 per trip for covered cancellations and interruptions", min: 0, max: 150, default: 0 },
    { name: "Trip Delay Reimbursement", desc: "Up to $500 per traveler for delays over 12 hours or requiring an overnight stay", min: 0, max: 100, default: 0 },
    { name: "Emergency Evacuation & Transportation", desc: "Up to $100,000 for emergency evacuation on trips 100+ miles from home. New June 2026.", min: 0, max: 100, default: 0 },
    { name: "Travel Accident Insurance", desc: "Up to $500,000 accidental death or dismemberment coverage on common-carrier travel", min: 0, max: 100, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per covered traveler for lost, damaged, or stolen baggage", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 5 days when baggage is delayed over 6 hours", min: 0, max: 100, default: 0 },
    { name: "Roadside Assistance", desc: "Roadside service (tow, battery, tire, locksmith, gas) — fees billed to your card", min: 0, max: 50, default: 0 },

    // Purchase Protections
    { section: "Purchase Protections", name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $500 per item", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
  ];

  const card = {
    id: 'chase-sapphire-preferred',
    detailUrl: 'chase-sapphire-preferred.html',
    name: 'Chase Sapphire Preferred®',
    issuer: 'Chase',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Travel', 'Points', 'Dining'],
    annualFee: 95,
    signOnBonusLabel: '100,000 points',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
