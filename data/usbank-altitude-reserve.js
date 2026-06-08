// U.S. Bank Altitude Reserve Visa Infinite Card data
(function() {
  const terms = {
    "Sign-On Bonus": `New cardmember bonus details not displayed on benefits page. Check current offer at usbank.com for the latest sign-on bonus terms.`,

    "10X Points on Prepaid Hotels & Car Rentals": `Earn 10X points using your card to book prepaid hotels & car rentals in the Travel Center.`,

    "5X Points on Prepaid Flights": `Earn 5X points using your card to book prepaid flights in the Travel Center.`,

    "3X Points on Travel": `Earn 3X points on eligible travel purchases made directly with airlines, hotels, car rental companies, taxis, limousines, passenger trains and cruise line companies. See Program Rules for complete details.`,

    "3X Points on Mobile Wallet": `Earn 3X points on mobile wallet spending on Apple Pay®, Google Wallet™ and Samsung Pay on first $5,000 each billing cycle. See Program Rules for complete details.`,

    "1X Points on Other Purchases": `Earn 1X point on all other eligible purchases.`,

    "$325 Annual Travel Credit": `Automatic statement credit(s) totaling up to $325 will be applied to your Account when you use your Altitude Reserve Card to pay for travel purchases in the Travel Center. Credits will be applied to the Account within 2-3 business days after the purchase posts to the Account. Please allow 1-2 statement billing cycles for your statement credit(s) to appear on your credit card statement. Account is eligible to receive a total credit amount of up to $325 per Cardmember year (based on Account opening date). We reserve the right to adjust or reverse any credit due to transaction credits or unauthorized purchases.`,

    "Priority Pass Select": `As a Visa Infinite® cardholder, you have a complimentary 12-month Priority Pass Select Membership with eight free visits to 1,800+ airport lounges and experiences worldwide. Regardless of the travel class or airline you're flying, you can escape the crowds and await your flight in quiet comfort. Certain terms, conditions and exclusions apply. Number of lounges and experiences is subject to change. Cardmembers must enroll at prioritypass.com/usbankaltitudereserve. Enrollment with no membership fee is limited to one account cardmember (including authorized users).`,

    "TSA PreCheck/Global Entry Credit": `Apply for either TSA PreCheck® or Global Entry®, expedited airport security processing, using your Altitude Reserve Card to pay your application fee(s) and receive up to a $120 statement credit once every four years. Certain terms, conditions and exclusions apply.`,

    "Flexible Redemption": `Choose your reward: Travel - Let your points take care of airfare, hotel stays, rental cars and more. Shop - Browse a selection of merchandise and gift cards. Spend - Statement credit or deposit to an eligible U.S. Bank account to cover the things you spend your money on. Donate - Redeem towards a donation to your favorite charity and get 100% match. Points worth 1¢ each only for travel via Real-Time Rewards. Other redemption options (PayPal, checking deposit, Amazon) require $25 minimum.`,

    "GigSky Global Mobile Data": `Get a one time complimentary 3GB/15-Day GigSky global mobile data plan, then 30% off any future purchases for compatible devices with your Visa Infinite® card. Offer available through November 15, 2027.`,

    "Auto Rental Collision Damage Waiver": `Rent with your card and you're covered for physical damage, vandalism, theft, reasonable towing and loss of use charges. Decline the Collision Damage Waiver coverage offered by the rental agency and make sure your name is listed as the primary renter on the auto rental agreement.`,

    "Trip Cancellation/Interruption": `When you purchase your travel ticket with your card and you must cancel or interrupt your trip, this benefit can help reimburse you for the non-refundable cost of your fare. This coverage applies to more than air travel—it also applies when you've used your card to purchase your ticket for travel via other forms of eligible transportation, such as a ferry, train, bus or cruise ship.`,

    "Trip Delay Reimbursement": `When you purchase air travel with your card, you can be reimbursed up to $500 if your trip is delayed for more than six hours or requires an overnight stay. This coverage applies even if the delay is due to weather or mechanical issues and is in addition to any airline vouchers you receive for food or hotels.`,

    "Purchase Security": `When you use your card to purchase an item and your item is stolen or damaged within the first 90 days, purchase security can replace, repair or reimburse the item. If your item is stolen, you must file a police report within 48 hours of becoming aware of the theft.`,

    "Return Protection": `If you are dissatisfied with your item within 90 days of purchase with your card and the merchant will not accept the return, you can be reimbursed up to $300 for the covered item.`,

    "Extended Warranty Protection": `The benefit will extend the time period of coverage to your existing U.S. manufacturer's warranty of three years or less up to one additional year when you purchase an eligible item with your card.`,

    "Travel Accident Insurance": `You can receive $500,000 of accidental death and dismemberment coverage. This coverage applies to more than air travel - it also can be in place when you have used your card to purchase your ticket for travel via other forms of eligible transportation, such as a ferry, cruise ship, train or bus.`,
  };

  const benefits = [
    // Annual Credits
    { section: "Annual Credits", name: "$325 Annual Travel Credit", desc: "Up to $325/yr in statement credits for travel booked through the Travel Center", min: 0, max: 325, default: 200, comment: "Restricted to Travel Center portal bookings, which limits flexibility." },
    { name: "TSA PreCheck/Global Entry Credit", desc: "Up to $120 statement credit once every 4 years ($30/yr amortized)", min: 0, max: 30, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "3X Points on Travel", desc: "3X on airlines, hotels, car rentals, taxis, trains, cruise lines (direct purchases). Estimate annual dollar value earned.", min: 0, max: 1500, default: 0, comment: "At 0.95cpp. Does not include OTAs/travel agents—must book directly. Many other cards offer better cashback on travel categories." },
    { name: "3X Points on Mobile Wallet", desc: "3X on Apple Pay, Google Pay, Samsung Pay (first $5,000/billing cycle). Estimate annual dollar value earned.", min: 0, max: 2700, default: 0 },
    { name: "10X Points on Prepaid Hotels & Car Rentals", desc: "10X on prepaid hotels & car rentals in Travel Center. Estimate annual dollar value earned.", min: 0, max: 2000, default: 0 },
    { name: "5X Points on Prepaid Flights", desc: "5X on prepaid flights in Travel Center. Estimate annual dollar value earned.", min: 0, max: 1500, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1X on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 600, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "Priority Pass Select", desc: "Complimentary membership with 8 free lounge visits per year", min: 0, max: 400, default: 10, comment: "8 free visits worth ~$10-20 each. Membership can be set up for a non-cardholder." },
    { name: "No Foreign Transaction Fees", desc: "No fees on international purchases", min: 0, max: 100, default: 0, comment: "Value depends on international spending. 3% savings on foreign purchases vs cards that charge FTF." },
    { name: "GigSky Global Mobile Data", desc: "Free 3GB/15-day data plan + 30% off future plans", min: 0, max: 50, default: 0 },
    { name: "Luxury Hotel Collection", desc: "VIP status, complimentary breakfast, upgrades at select luxury properties", min: 0, max: 300, default: 0 },
    { name: "Concierge Service", desc: "24/7 Visa Infinite concierge for travel planning, tickets, reservations", min: 0, max: 100, default: 0 },

    // Protection Benefits
    { section: "Protection Benefits", name: "Auto Rental Collision Damage Waiver", desc: "Primary coverage for rental car damage, theft, vandalism", min: 0, max: 200, default: 0, comment: "Primary coverage means you don't need to file through personal insurance first." },
    { name: "Trip Cancellation/Interruption", desc: "Reimburses non-refundable trip costs if cancelled/interrupted", min: 0, max: 200, default: 0 },
    { name: "Trip Delay Reimbursement", desc: "Up to $500 per delay (6+ hrs or overnight stay required)", min: 0, max: 100, default: 0 },
    { name: "Travel Accident Insurance", desc: "$500,000 accidental death & dismemberment coverage", min: 0, max: 50, default: 0 },
    { name: "Purchase Security", desc: "Covers theft or damage within 90 days of purchase", min: 0, max: 100, default: 0 },
    { name: "Return Protection", desc: "Up to $300 per item if merchant won't accept return within 90 days", min: 0, max: 50, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty up to 1 additional year", min: 0, max: 100, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Coverage for lost/stolen checked or carry-on luggage", min: 0, max: 100, default: 0 },
    { name: "Emergency Evacuation", desc: "Up to $10,000 for medical transport to nearest facility", min: 0, max: 25, default: 0 },
  ];

  const card = {
    id: 'usbank-altitude-reserve',
    detailUrl: 'usbank-altitude-reserve.html',
    name: 'U.S. Bank Altitude Reserve Visa Infinite Card',
    issuer: 'U.S. Bank',
    network: 'Visa Infinite',
    type: 'Personal',
    categories: ['Travel', 'Mobile Wallet', 'Lounge Access'],
    annualFee: 400,
    signOnBonusLabel: 'None',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
