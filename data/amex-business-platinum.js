// American Express Business Platinum Card data
(function() {
  const terms = {
    "300,000 Membership Rewards Points": `Welcome Offer: You may be eligible for as high as 300,000 Membership Rewards® points after you spend $20,000 in eligible purchases on the Card in your first 3 months of Card Membership. The actual welcome offer you receive depends on your eligibility and may be lower (commonly 150,000 or 190,000 points). To find your offer, click "Apply Now" on the Amex Business Platinum page.

Membership Rewards points value varies based on redemption choice; transfer-partner redemptions and Pay With Points for flights typically yield the highest value. Industry estimates value points at approximately 1.6¢ each.

Welcome offer eligibility may be restricted if you currently have or have previously held this Card. Terms apply.`,

    "Up to $600 Hotel Credit (Amex Travel)": `Hotel Credit: Earn up to $300 in statement credits semi-annually (up to $600 annually) on prepaid bookings of Fine Hotels + Resorts® or The Hotel Collection® through American Express Travel. The Hotel Collection requires a minimum two-night stay. Bookings must be charged to the Business Platinum Card. Payment must be made with the Business Platinum Card; only the Basic Card Member receives the credit. The credit applies twice per calendar year: once for January–June bookings and once for July–December bookings (each capped at $300). Statement credit is automatic.`,

    "Up to $200 Airline Fee Credit": `Airline Fee Credit: Up to $200 in statement credits per calendar year for incidental fees charged by your one selected qualifying airline. Eligible incidental fees include checked baggage fees, in-flight refreshments, in-flight entertainment access, lounge day-passes, seat assignment fees, and similar charges. Tickets, mileage purchases, gift cards, and similar items do NOT qualify. You must select your qualifying airline once each calendar year (changes allowed in January).`,

    "Up to $209 CLEAR+ Credit": `CLEAR+ Credit: Receive up to $209 in statement credits per calendar year for an auto-renewing CLEAR+ Membership, excluding taxes and fees. CLEAR+ pricing for an individual annual plan is currently $209/year, so this credit covers the full membership cost. To receive the credit, charge a CLEAR+ Plus annual or monthly membership to your Business Platinum Card.`,

    "Up to $200 Hilton Credit": `Hilton Credit: Hilton for Business members can get statement credits of up to $50 quarterly (up to $200 annually) on eligible purchases made directly with Hilton. Enrollment in the benefit and a Hilton for Business account are required. If you do not already have a Hilton for Business account, you will be registered for one at the time you enroll in the benefit. Eligible purchases include direct bookings, on-property charges paid with the Business Platinum Card.`,

    "$100 The Hotel Collection Credit (per stay)": `The Hotel Collection Credit: Receive a $100 credit toward eligible charges (which vary by property) when you book two nights or more with The Hotel Collection through AmexTravel.com. Eligible charges typically include dining and spa services. The credit applies per stay and is not capped annually—each qualifying stay earns $100. Bookings must be made through Amex Travel and paid with the Business Platinum Card.`,

    "Up to $1,150 Dell Credit": `Dell Technologies Credit: Statement credits up to $150 on U.S. purchases directly with Dell Technologies, and an additional $1,000 statement credit after you spend $5,000 or more on those purchases, per calendar year (totaling up to $1,150 annually). Enrollment required. Purchases must be made directly through dell.com or Dell Sales. Statement credits are issued automatically once eligible purchases post.`,

    "$300 ChatGPT Business Credit": `ChatGPT Business Credit: Get up to $300 in statement credits per calendar year on U.S. purchases of ChatGPT Business on the Business Platinum Card. Subject to auto-renewal. Enrollment required. ChatGPT Business plan is currently $25/user/month billed annually ($300/year for one user) or $30/user billed monthly.`,

    "$250 Adobe Credit": `Adobe Credit: Receive a $250 statement credit per calendar year after you spend $600 or more on U.S. purchases directly with Adobe in a calendar year. Enrollment required. Eligible Adobe purchases include Creative Cloud subscriptions, Acrobat Pro, and other Adobe services purchased directly from Adobe.`,

    "Up to $360 Indeed Credit": `Indeed Credit: Statement credits up to $90 per quarter (up to $360 annually) for U.S. purchases made directly with Indeed. Enrollment required. Eligible purchases include sponsored job posts and Indeed hiring services billed directly to your Business Platinum Card.`,

    "Up to $120 Wireless Credit": `Wireless Credit: Statement credits up to $10 per month (up to $120 annually) for wireless phone service purchases made directly with a U.S. wireless telephone service provider. Enrollment required. Eligible purchases include monthly recurring wireless service charges from major U.S. carriers (Verizon, AT&T, T-Mobile, etc.).`,

    "Global Lounge Collection (Centurion + Priority Pass + Delta Sky Club)": `Global Lounge Collection®: Access to the largest commercial lounge collection of any U.S. credit card issuer, including:
- Centurion® Lounges
- 10 complimentary Delta Sky Club® visits per year when flying on an eligible Delta flight (additional visits earned by spending $75,000+ in a calendar year)
- Priority Pass™ Select membership (enrollment required); access to 1,400+ lounges worldwide
- Escape Lounges – The Centurion® Studio Partner
- Plaza Premium Lounges
- Lufthansa Lounges (when flying Lufthansa Group)
- Airspace Lounges, Virgin Clubhouses (when flying Virgin Atlantic)

Annual estimated value: $850+ depending on usage frequency. Card Member must travel with the Business Platinum Card and a same-day boarding pass.`,

    "Marriott Bonvoy Gold Elite Status": `Marriott Bonvoy® Gold Elite Status: As a Platinum Card Member, you can receive Marriott Bonvoy® Gold Elite Status without meeting any stay requirements. Gold benefits include:
- 25% bonus on points earned for stays
- Enhanced room upgrades (subject to availability)
- 2 PM late checkout (subject to availability)
- Welcome amenities

Enrollment required. Terms and limitations apply.`,

    "Hilton Honors Gold Status": `Hilton Honors™ Gold Status: With Hilton Honors Gold status, you can enjoy benefits at hotels and resorts within the Hilton Portfolio:
- 80% bonus on Base Points earned
- Complimentary daily food & beverage credits at most properties
- Space-available room upgrades
- 5th night free on award stays
- Hilton Honors discount

Enrollment required.`,

    "Leaders Club Sterling Status (LHW)": `Leaders Club Sterling Status: Complimentary Sterling status with Leaders Club from The Leading Hotels of the World®. Bespoke benefits at over 400 independent luxury hotels across the globe, including:
- Daily breakfast
- Property credit (varies by hotel)
- Room upgrades when available
- VIP welcome amenities

Enrollment required.`,

    "5X Points on Flights & Prepaid Hotels (Amex Travel)": `5X Membership Rewards® Points: Earn 5X Membership Rewards points on flights and prepaid hotels booked on AmexTravel.com (including Fine Hotels + Resorts and The Hotel Collection). Excludes non-prepaid hotels, vacation packages, cruises, and other travel categories. Bookings must be made directly through AmexTravel.com.`,

    "2X Points on Key Business Purchases": `2X Membership Rewards® Points: Earn 2X points on eligible purchases in key business categories, or on purchases of $5,000 or more. Eligible categories include U.S. purchases for: electronic, hardware, software, and cloud computing in the same transaction; construction materials and hardware suppliers; shipping providers; and U.S. media providers for advertising in select media (online, TV, radio).

Purchases eligible for multiple additional point bonuses will only receive the highest eligible bonus. Earn 2X on up to $2 million of these purchases per calendar year.`,

    "1X Points on Other Purchases": `1X Membership Rewards® Points: Earn 1 Membership Rewards point per dollar on all other eligible purchases. Excluded transactions include cash advances, balance transfers, fees, fraudulent charges, and charges that don't qualify under the rewards program.`,

    "35% Airline Pay With Points Rebate": `35% Airline Bonus / Pay With Points Rebate: Get 35% points back after you use Pay with Points for flights booked through Amex Travel with your selected qualifying airline (or for First or Business class flights on any airline), up to 1,000,000 points back per calendar year.

Effectively, this raises the value of using points for flights from ~1.0¢/point to ~1.54¢/point. Combined with transfer partners, points can be worth 2¢+ each.`,

    "Global Entry / TSA PreCheck Credit": `Fee Credit for Global Entry or TSA PreCheck®: Receive either a $120 statement credit for a Global Entry application fee, or a statement credit up to $85 for a TSA PreCheck® (through a TSA official enrollment provider) application fee, every 4 years, when charged to the Business Platinum Card. If approved for Global Entry you will also receive access to TSA PreCheck at no additional cost. Annualized value: ~$30/year (Global Entry) or ~$21/year (TSA PreCheck).`,

    "Car Rental Loss and Damage Insurance": `Car Rental Loss and Damage Insurance: When you use your Eligible Card to reserve and pay for the Entire Rental and decline the collision damage waiver (CDW) at the Rental Company counter, you can be covered for Damage to or Theft of a Rental Vehicle in a Covered Territory.

Important: Not all vehicle types or rentals are covered. Coverage is not available for vehicles rented in Australia, Italy, and New Zealand. This product provides SECONDARY coverage and does not include liability coverage. Additional terms and conditions apply.`,

    "Trip Delay Insurance": `Trip Delay Insurance: If a round-trip is paid for entirely with your Eligible Card and a covered reason delays your trip more than 6 hours, Trip Delay Insurance can help reimburse certain additional expenses purchased with your same Eligible Card, up to $500 per trip, maximum 2 claims per Eligible Card per 12 consecutive month period. Coverage provided by New Hampshire Insurance Company, an AIG Company. Terms, conditions and limitations apply.`,

    "Trip Cancellation and Interruption Insurance": `Trip Cancellation and Interruption Insurance: If you purchase a round trip entirely with your Eligible Card and a covered reason cancels or interrupts your trip, Trip Cancellation and Interruption Insurance can help reimburse your non-refundable expenses purchased with the same Eligible Card, up to $10,000 per trip and up to $20,000 per Eligible Card per 12 consecutive month period. Coverage provided by New Hampshire Insurance Company, an AIG Company. Terms, conditions and limitations apply.`,

    "Baggage Insurance Plan": `Baggage Insurance Plan: Travel more comfortably knowing you can be covered for lost, damaged, or stolen Baggage when you purchase the Entire Fare for a Common Carrier Vehicle Ticket (e.g. plane, train, ship, or bus) on an Eligible Card.

Coverage can be provided for up to $2,000 for checked Baggage and up to a combined maximum of $3,000 for checked and carry-on Baggage, in excess of coverage provided by the Common Carrier. The coverage is also subject to a $3,000 aggregate limit per Covered Trip. For New York State residents, there is a $2,000 per bag/suitcase limit for each Covered Person with a $10,000 aggregate maximum for all Covered Persons per Covered Trip.`,

    "Cell Phone Protection": `Cell Phone Protection: You can be reimbursed, the lesser of, your costs to repair or replace your damaged or Stolen cell phone for a maximum of up to $800 per claim with a limit of 2 approved claims per 12-month period when your cell phone line is listed on a wireless bill and the prior month's wireless bill was paid by an Eligible Card Account. A $50 deductible will apply to each approved claim. Coverage provided by New Hampshire Insurance Company, an AIG Company.`,

    "Extended Warranty": `Extended Warranty: When you use your Eligible Card to make a Covered Purchase, you can get up to one extra year added to the Original Manufacturer's Warranty. Applies to warranties of 5 years or less on Covered Purchases in the United States or its territories or possessions. Important exclusions and restrictions apply.`,

    "Purchase Protection": `Purchase Protection: Sometimes your favorite new purchase gets stolen, accidentally damaged, or lost. When you use your Eligible Card for Covered Purchases, your Membership can help protect them for up to 90 days from the Covered Purchase date. Coverage limits: up to $10,000 per Covered Purchase, up to $50,000 per calendar year. Important exclusions and restrictions apply.`,

    "Premium Global Assist Hotline": `Premium Global Assist® Hotline: 24/7 medical, legal, financial, and other select emergency coordination and assistance services while traveling more than 100 miles from home. Premium Global Assist® Hotline can direct you to medical and legal professionals and help with prescription replacement coordination, emergency hotel check-ins and cash wires, missing luggage, and more.

Emergency medical transportation assistance may be provided at no cost only if approved and coordinated by Premium Global Assist Hotline. Card Members may be responsible for the costs charged by third-party service providers.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No matter where you're traveling, when you use the Business Platinum Card there are no foreign transaction fees from American Express. Standard 3% foreign transaction fee on most cards is waived. Value depends on international spend.`,

    "$2,400 One AP Credit ($250k spend)": `American Express One AP® Statement Credit: Unlock up to $2,400 in statement credits for use in the next calendar year on American Express One AP® monthly fees after you spend $250,000 on eligible purchases on the Business Platinum Card in this calendar year.

Statement credits will be applied to your monthly bill charged to the Card for our accounts payable solution, One AP. Monthly fees include an auto-renewing platform access fee, transaction fees based on One AP usage, and applicable taxes. Statement credits valid from January 1 through December 31 of the calendar year after the calendar year in which you spend $250,000 on eligible purchases.`,

    "$1,200 Amex Travel Flight Credit ($250k spend)": `Amex Travel Online Flight Statement Credit: Unlock up to $1,200 in statement credits on flights booked on AmexTravel.com with the Business Platinum Card, for use in the next calendar year, after spending $250,000 in eligible purchases in this calendar year.

Statement credits valid for flights booked on AmexTravel.com between January 1 and December 31 of the calendar year after the calendar year in which you make $250,000 in eligible purchases with the Business Platinum Card.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "300,000 Membership Rewards Points", desc: "Up to 300,000 MR points after spending $20,000 in first 3 months. Adjust your value per point.", min: 0, max: 3.0, default: 1.6, miles: 300000, firstYearOnly: true, comment: `Industry estimate values Membership Rewards at ~1.6¢/point. Best redemptions (transfer partners, business class flights) can hit 2-3¢/point. Welcome offer is "as high as" — your actual offer may be 150k or 190k. <a href="https://upgradedpoints.com/news/amex-business-platinum-card-300k-bonus/" target="_blank" rel="noopener">Details</a>` },

    // Annual Travel Credits
    { section: "Annual Travel Credits", name: "Up to $600 Hotel Credit (Amex Travel)", desc: "Up to $300 semi-annually on prepaid FHR or Hotel Collection bookings via Amex Travel", min: 0, max: 600, default: 0, comment: "Two separate $300 credits (Jan-Jun and Jul-Dec). Easy to use $300 once but harder twice." },
    { name: "Up to $200 Airline Fee Credit", desc: "Statement credits for incidental fees on one selected qualifying airline", min: 0, max: 200, default: 0, comment: `Eligible: checked bag fees, seat assignment fees, in-flight food/beverage/Wi-Fi, lounge day-passes, pet/phone-reservation fees. NOT eligible: airfare, award booking fees, gift cards, mileage purchases. Recently nerfed: United TravelBank stopped working Feb 2026; Delta may be next. <a href="https://www.doctorofcredit.com/american-express-platinum-200-airline-incidental-reimbursement-no-longer-works-on-united-travel-bank/" target="_blank" rel="noopener">Doctor of Credit data points</a>` },
    { name: "Up to $209 CLEAR+ Credit", desc: "Up to $209/year for auto-renewing CLEAR+ membership", min: 0, max: 209, default: 0 },
    { name: "$100 The Hotel Collection Credit (per stay)", desc: "$100 toward eligible charges per 2+ night stay booked via Amex Travel", min: 0, max: 400, default: 0, comment: "Per stay, not annual cap. Estimate based on number of qualifying stays per year." },

    // Annual Business Credits
    { section: "Annual Business Credits", name: "Up to $1,150 Dell Credit", desc: "$150 + additional $1,000 after $5k spend with Dell Technologies (calendar year). Enrollment required.", min: 0, max: 1150, default: 100, comment: "Most users won't hit $5k Dell spend. Default reflects partial use of base $150 credit." },
    { name: "$300 ChatGPT Business Credit", desc: "$300/yr on ChatGPT Business subscriptions. Enrollment required.", min: 0, max: 300, default: 0, comment: "ChatGPT Business is $25/user/month annual ($300/yr)." },
    { name: "$250 Adobe Credit", desc: "$250/yr after spending $600 on direct Adobe purchases. Enrollment required.", min: 0, max: 250, default: 0, comment: "Requires $600 Adobe spend. Easy if you use Creative Cloud (≥$55/mo)." },
    { name: "Up to $360 Indeed Credit", desc: "$90/quarter on direct Indeed purchases (job posts/hiring). Enrollment required.", min: 0, max: 360, default: 0, comment: "Only valuable if you actively hire via Indeed." },
    { name: "Up to $120 Wireless Credit", desc: "$10/month on direct U.S. wireless phone service. Enrollment required.", min: 0, max: 120, default: 110, comment: "Easy full credit — most users have wireless service that qualifies." },
    { name: "Up to $200 Hilton Credit", desc: "$50/quarter on direct Hilton purchases via Hilton for Business. Enrollment required.", min: 0, max: 200, default: 0, comment: "Requires Hilton for Business account and Hilton stays." },

    // Lounge & Status
    { section: "Lounges & Hotel Status", name: "Global Lounge Collection (Centurion + Priority Pass + Delta Sky Club)", desc: "Centurion Lounges, 10 Delta Sky Club visits/yr, Priority Pass Select. Amex estimates $850+ value.", min: 0, max: 1500, default: 0, comment: "Highly variable — frequent international travelers see $1,000+ value; occasional travelers $0-200." },
    { name: "Marriott Bonvoy Gold Elite Status", desc: "Free Gold status: room upgrades, 2 PM late checkout, 25% bonus points. Enrollment required.", min: 0, max: 200, default: 10 },
    { name: "Hilton Honors Gold Status", desc: "Free Gold status: F&B credit, room upgrades, 5th night free on awards. Enrollment required.", min: 0, max: 200, default: 0 },
    { name: "Leaders Club Sterling Status (LHW)", desc: "Sterling status at 400+ Leading Hotels of the World properties. Enrollment required.", min: 0, max: 300, default: 0 },

    // Travel Perks
    { section: "Travel Perks", name: "$550 Value with Fine Hotels + Resorts", desc: "FHR perks: free breakfast for 2, room upgrade, $100 property credit, late checkout, etc. Average value ~$550 per stay.", min: 0, max: 1500, default: 0, comment: "Per-stay value, not annual. Estimate based on FHR stays you'll book." },
    { name: "Global Entry / TSA PreCheck Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },
    { name: "Premium Global Assist Hotline", desc: "24/7 emergency coordination while traveling 100+ miles from home", min: 0, max: 100, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5X Points on Flights & Prepaid Hotels (Amex Travel)", desc: "5X MR on flights and prepaid hotels via AmexTravel.com. Estimate annual value.", min: 0, max: 2000, default: 0 },
    { name: "2X Points on Key Business Purchases", desc: "2X MR on key business categories or single purchases ≥$5k. Up to $2M/yr. Estimate annual value.", min: 0, max: 2000, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1X MR on all other eligible purchases. Estimate annual value.", min: 0, max: 1000, default: 0 },
    { name: "35% Airline Pay With Points Rebate", desc: "35% points back when using Pay With Points for flights via Amex Travel (up to 1M points/yr)", min: 0, max: 1000, default: 0, comment: "Effectively raises Pay With Points value from 1¢ to ~1.54¢/point. Estimate based on Pay With Points usage." },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Car Rental Loss and Damage Insurance", desc: "Secondary coverage for damage/theft of rental vehicles when paid in full with the card", min: 0, max: 100, default: 0 },
    { name: "Trip Delay Insurance", desc: "Up to $500/trip if delayed 6+ hours. Max 2 claims per 12 months.", min: 0, max: 100, default: 0 },
    { name: "Trip Cancellation and Interruption Insurance", desc: "Up to $10k/trip, $20k/yr for non-refundable expenses if covered cancellation/interruption", min: 0, max: 200, default: 0 },
    { name: "Baggage Insurance Plan", desc: "Up to $2,000 checked bag, $3,000 combined when fare paid with the card", min: 0, max: 50, default: 0 },
    { name: "Cell Phone Protection", desc: "Up to $800/claim, 2 claims/12mo, $50 deductible. Pay your wireless bill with the card.", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty", desc: "+1 year on manufacturer warranties of ≤5 years for purchases made with the card", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "90-day coverage for damage/theft/loss. Up to $10k/purchase, $50k/year.", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases. Value depends on international spend.", min: 0, max: 500, default: 0 },

    // High-Spender Bonuses (calendar year, $250k spend)
    { section: "High-Spender Bonuses ($250k+ annual spend)", name: "$2,400 One AP Credit ($250k spend)", desc: "Up to $2,400 next-year credit on One AP fees after $250k spend this calendar year", min: 0, max: 2400, default: 0, comment: "Only relevant if you spend $250k+ AND use One AP for accounts payable." },
    { name: "$1,200 Amex Travel Flight Credit ($250k spend)", desc: "Up to $1,200 next-year flight credit on AmexTravel.com after $250k spend this calendar year", min: 0, max: 1200, default: 0, comment: "Requires $250k annual spend." },
  ];

  const card = {
    id: 'amex-business-platinum',
    detailUrl: 'amex-business-platinum.html',
    name: 'American Express Business Platinum Card®',
    issuer: 'American Express',
    network: 'American Express',
    type: 'Business',
    categories: ['Travel', 'Premium', 'Membership Rewards'],
    annualFee: 895,
    signOnBonusLabel: 'Up to 300,000 MR points',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
