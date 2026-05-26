// Capital One Venture Rewards Credit Card data
(function() {
  const terms = {
    "75,000 Bonus Miles": `Welcome Offer: Earn 75,000 bonus miles once you spend $4,000 on purchases within the first 3 months from account opening.

Eligible Venture primary account holders earn this bonus. This one-time bonus is available by clicking the "Apply Now" button on the Capital One Venture page; may not be available if you navigate away from or close that page. You are NOT eligible for this product if you have received a new cardmember bonus for the Capital One Venture card or the Capital One Venture X card in the past 48 months.

Capital One miles can be redeemed for travel statement credits, Capital One Travel bookings, transfers to 15+ airline/hotel partners, gift cards, cash back, or Amazon/PayPal purchases. Transfer-partner redemptions and Pay With Miles for travel typically yield the best value.`,

    "$50 Lifestyle Collection Credit (per stay)": `Lifestyle Collection Experience Credit:

Hotels: $50 USD experience credit applied at checkout by hotel to qualifying charges. Qualifying charges vary by location and must be charged to your room during your eligible stay; contact the hotel directly to confirm qualifying experiences. Advance reservations recommended.

Vacation Rentals: $50 USD experience credit applied at time of booking by host provider to qualifying experience charges. Experiences must be booked with a Capital One credit card. Qualifying experience credit options vary by location; for certain properties, the credit will be provided in the form of a gift card.

Additional benefits at Lifestyle Collection bookings: complimentary Wi-Fi, and (when available) room upgrades, early check-in, and late checkout. Benefits applied per room, per stay (hotels) or per stay (vacation rentals).

Booking must be made through Capital One Travel in the eligible cardholder's name, with the cardholder as a member of the party traveling. Back-to-back bookings of the same property within 24 hours count as one reservation. The credit is per stay and is not capped annually—each qualifying stay earns the $50 credit.`,

    "Up to $120 Global Entry / TSA PreCheck Credit": `Global Entry / TSA PreCheck Statement Credit:

To receive a statement credit up to $120, you must use your Venture card to pay the application fee for either Global Entry or TSA PreCheck®. One statement credit will be processed per account every 4 years, and the credit will apply to the application fee that is charged to your card first.

The statement credit will be posted to your account within 2 billing cycles of the fee being charged. Your eligible card must be open and in good standing at the time of statement credit fulfillment. Annualized value: ~$30/year (Global Entry, $120/4yrs) or ~$21/year (TSA PreCheck, $85/4yrs).`,

    "Hertz Five Star Status": `Hertz® Five Star Status: Eligible Venture cardholders receive complimentary Hertz Five Star status. Benefits include:
- Free status upgrades when available
- Skip the rental counter (Gold service)
- Choose from a wider selection of cars
- Faster reservations and returns

Eligible cardholders must enroll in the Hertz Gold+ status upgrade through the unique Benefits Tab link found within the Capital One website or mobile app after logging in. Cardholders can find the link to enroll by visiting their eligible card's Rewards tab or Capital One Travel Benefits tab and clicking on the Hertz benefit tile.

Enrolling through the normal Hertz Gold+ enrollment process (e.g. directly at Hertz.com) will NOT automatically detect a cardholder as being eligible — you must enroll through Capital One's link. Status takes 24-72 hours to activate after registration. Age restrictions apply.`,

    "2X Miles on Every Purchase": `Unlimited 2X Miles: Get unlimited 2 miles per dollar on every purchase, every day. There is no limit to the amount of travel miles you can earn with the Venture Rewards credit card.

Capital One miles do not expire for the life of the account. Rewards are earned on eligible Net Purchases (purchases minus credits and returns). Cash advances, balance transfers, and similar transactions are not eligible.`,

    "5X Miles via Capital One Travel": `5X Miles on Capital One Travel: Earn 5 miles per dollar spent on hotels, vacation rentals, and rental cars booked through Capital One Travel.

Capital One Travel additional benefits:
- Save an average of 15% on flights using price prediction (savings vary)
- Free price drop protection on flights
- Price match guarantee on flights, hotels, and rental cars

Services such as cancel-your-flight-for-any-reason, price prediction, price watch, price drop protection, and price match guarantee are subject to terms and conditions and may not be available on all bookings.`,

    "5X Miles on Capital One Entertainment": `5X Miles on Capital One Entertainment: Eligible Venture cardholders earn 5 miles per dollar spent on Capital One Entertainment purchases.

Qualifying purchases include tickets purchased on the Capital One Entertainment ticketing platform only, paid for with an eligible card. Excluded: tickets purchased through Capital One cardholder exclusive pre-sales; tickets purchased directly through Capital One Hall or Capital One Arena ticketing services; and dining reservations or purchases through Capital One Dining.

Account must be open and in good standing to earn rewards. Rewards earned will post within 1-2 billing cycles. Rewards earned will be reclaimed if you cancel or return an eligible purchase. Offer valid for consumer, non-commercial use only.`,

    "Transfer to 15+ Travel Loyalty Programs": `Transfer Partners: Capital One miles can be transferred to 15+ airline and hotel loyalty programs, including Air Canada Aeroplan, Air France/KLM Flying Blue, British Airways Executive Club, Singapore KrisFlyer, Turkish Miles&Smiles, Wyndham Rewards, Choice Privileges, and more.

Most partners transfer at 1:1 ratio (some at 2:1.5 like Avianca LifeMiles). Transfer-partner redemptions typically yield the best per-mile value (1.5-2¢+ per mile vs 1¢ for statement credit redemptions).

Once transferred, the expiry and value of transferred rewards are subject to the terms and conditions of the receiving loyalty program. Once transfers are final, the receiving loyalty program's terms apply.`,

    "Capital One Dining": `Capital One Dining: Access exclusive dining reservations, special events, and a curated selection of top restaurants nationwide.

To use Capital One Dining, you must be a Capital One cardholder with an eligible rewards-earning credit card, in good standing, at least 18 years old, and either a primary account holder, account manager, or authorized user. Online account required.`,

    "Capital One Entertainment": `Capital One Entertainment: Access cardholder-only VIP packages and thousands of tickets to events in sports, music, dining, theater and more, plus redeem your rewards for tickets and packages.

Use your rewards to book tickets and packages, or get exclusive pre-sales, suite experiences, and on-site perks. To use the Capital One Entertainment ticketing platform, you must be a Capital One cardholder with an eligible rewards-earning credit card, in good standing, at least 18 years old.`,

    "50% Off Capital One Café Beverages": `Capital One Café Discount: Capital One cardholders enjoy 50% off all handcrafted beverages everyday at any Capital One Café nationwide.

Cafés do not provide the same services as bank branches, but all Cafés have ATMs and Ambassadors who can help you. Food and beverages provided by a third party provider. Discount is applicable with the use of any Capital One credit or debit card. Limit one per person (if applicable), while supplies last.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: You won't pay a transaction fee when making purchases outside of the United States. Standard 3% foreign transaction fee on most cards is waived. Value depends on annual international spend.`,

    "Travel Accident Insurance": `Travel Accident Insurance: Get automatic insurance for a covered loss at no extra charge when you use your credit card to purchase your fare.

Coverage applies when the entire fare for the common carrier (plane, train, ship, etc.) is paid with your Venture card. Benefits vary by product. See your Guide to Benefits for details, as terms and exclusions apply.`,

    "Auto Rental Collision Damage Waiver": `Auto Rental Collision Damage Waiver: Rent an eligible vehicle with your credit card and you can be covered for damage due to collision or theft.

This is SECONDARY coverage and does not include liability coverage. To activate coverage: reserve and pay for the entire rental with your Venture card, and decline the rental company's collision damage waiver (CDW) at the counter. Benefits vary by product. See your Guide to Benefits for details, as terms and exclusions apply.`,

    "Extended Warranty": `Extended Warranty: You'll get additional warranty protection at no charge on eligible items that are purchased with your credit card.

Benefits vary by product. See your Guide to Benefits for details, as terms and exclusions apply.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "75,000 Bonus Miles", desc: "After spending $4,000 on purchases within first 3 months. Adjust your value per mile.", min: 0, max: 3.0, default: 1.5, miles: 75000, firstYearOnly: true, comment: "Capital One miles typically valued at 1.4-1.7¢/mile via transfer partners (e.g., Aeroplan, Flying Blue). Statement credit redemption is fixed at 1¢/mile. Not eligible if you've received Venture or Venture X bonus in past 48 months." },

    // Annual Travel Credits
    { section: "Annual Travel Credits", name: "$50 Lifestyle Collection Credit (per stay)", desc: "$50 experience credit on every Lifestyle Collection hotel/vacation rental booking via Capital One Travel", min: 0, max: 300, default: 0, comment: "Per stay, no annual cap. Estimate based on number of qualifying Lifestyle Collection stays/year. Booking must be made through Capital One Travel." },
    { name: "Up to $120 Global Entry / TSA PreCheck Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2X Miles on Every Purchase", desc: "Unlimited 2x miles on all purchases. Estimate annual value (spend × 2 × your value per mile).", min: 0, max: 1500, default: 50 },
    { name: "5X Miles via Capital One Travel", desc: "5x on hotels, vacation rentals, rental cars booked via Capital One Travel. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "5X Miles on Capital One Entertainment", desc: "5x on tickets purchased via Capital One Entertainment platform. Estimate annual value.", min: 0, max: 200, default: 0 },

    // Travel Perks
    { section: "Travel Perks", name: "Hertz Five Star Status", desc: "Free Hertz Five Star status: skip the counter, wider car selection. Enrollment through Capital One required.", min: 0, max: 100, default: 0 },
    { name: "Transfer to 15+ Travel Loyalty Programs", desc: "Transfer miles to airlines/hotels (Aeroplan, Flying Blue, British Airways, Wyndham, etc.). Boosts effective mile value.", min: 0, max: 200, default: 0, comment: "Already factored into per-mile value if you set bonus miles slider above 1¢. Use only if you value the optionality of transfers separately." },
    { name: "Capital One Dining", desc: "Exclusive reservations and dining events at curated top restaurants", min: 0, max: 100, default: 0 },
    { name: "Capital One Entertainment", desc: "VIP packages, presales, tickets to sports/music/theater events", min: 0, max: 200, default: 0 },
    { name: "50% Off Capital One Café Beverages", desc: "50% off handcrafted beverages at any Capital One Café nationwide. Use any Capital One card.", min: 0, max: 100, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Travel Accident Insurance", desc: "Automatic accident insurance when fare is paid with the card", min: 0, max: 50, default: 0 },
    { name: "Auto Rental Collision Damage Waiver", desc: "Secondary coverage for damage/theft of rental vehicles when fully paid with the card", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty", desc: "Additional warranty protection on eligible purchases", min: 0, max: 50, default: 0 },

    // Other
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
  ];

  const card = {
    id: 'capitalone-venture',
    detailUrl: 'capitalone-venture.html',
    name: 'Capital One Venture Rewards',
    issuer: 'Capital One',
    network: 'Visa',
    type: 'Personal',
    categories: ['Travel', 'Miles'],
    annualFee: 95,
    signOnBonusLabel: '75,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
