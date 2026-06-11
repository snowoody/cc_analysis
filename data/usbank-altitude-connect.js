// U.S. Bank Altitude Connect Visa Signature Card data
(function() {
  const terms = {
    "Sign-On Bonus": `One-time 20,000 bonus Points will be awarded if you are approved for a new U.S. Bank Altitude Connect Visa Signature Card and make $1,000 or more in total eligible Net Purchases to your Account within 90 days of Account opening. Please allow 1-2 billing cycles for your bonus Points to be credited to your Account. Existing or previous U.S. Bank Altitude Connect Visa Signature cardmembers are not eligible if you have received a new account bonus for this product in the last five years.`,

    "5X Points on Prepaid Hotels & Car Rentals": `Earn 5 Points (1 base and 4 bonus Points) for every $1 spent on prepaid car and hotel reservations purchased in the online Travel Center using your U.S. Bank Altitude Connect Card. Prepaid car and hotel reservations in the Travel Center are not classified as a travel category merchant transaction and are not eligible to receive the bonus points for that category.`,

    "4X Points on Travel": `Earn 4 Points (1 base and 3 bonus Points) for every $1 spent on travel category purchases (such as purchases made directly with airlines, hotels, car rentals, taxicabs, limousines, passenger trains and cruise line companies).`,

    "4X Points on Gas/EV Charging": `Earn 4 Points (1 base and 3 bonus Points) for every $1 spent on your first $1,000 each quarter on gas station and electric vehicle charging station purchases. Discount stores/supercenters, wholesale clubs and grocery stores/supermarkets will earn only 1 Point.`,

    "2X Points on Dining, Streaming & Groceries": `Earn 2 Points (1 base and 1 bonus Point) for every $1 spent on purchases in the following categories: restaurant, fast-food restaurant and bar; grocery store and supermarket (wholesale clubs and discount stores/supercenters such as Target and Walmart will earn only 1 Point) and qualifying streaming subscription services.`,

    "1X Points on Other Purchases": `Earn 1X point on all other eligible purchases.`,

    "0% Intro APR": `The 0% introductory APR applies to Purchases and is valid for the first 15 billing cycles. The 0% introductory APR applies to Balance Transfers made within 60 days of account opening and is valid for the first 15 billing cycles. Balance Transfer fee of 5% of each transfer amount, $5 minimum will apply.`,

    "Priority Pass Select": `Cardholders must enroll at prioritypass.com/usbankaltitudeconnect to receive a 12-month Priority Pass Select membership to access, with their accompanying guests, airport VIP lounges worldwide that participate in the Priority Pass Select program. Enrollment with no membership fee is limited to one account cardholder (including authorized users).`,

    "TSA PreCheck/Global Entry Credit": `You must complete either the Global Entry and/or TSA PreCheck application(s) and pay the application fee(s) with your U.S. Bank Altitude Connect Visa Signature Card. You will receive a statement credit for your application fee within 1-2 billing cycles.`,

    "GigSky Global Mobile Data": `Stay connected in over 175 countries with complimentary GigSky global mobile data plans. Benefit redeemable through November 30, 2026.`,

    "ExtendPay Plan": `U.S. Bank ExtendPay Plans provide a payment option that allows you to divide eligible credit card purchases into affordable monthly payments with no interest – just a fixed monthly fee. New cardmember $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening.`,

    "Trip Cancellation/Interruption": `When you purchase your travel ticket with your card and must cancel or interrupt your trip, this benefit can help reimburse you for the non-refundable cost of your fare. Certain terms, conditions and exclusions apply.`,

    "Trip Delay Reimbursement": `When you purchase air travel with your card, you can be reimbursed if your trip is delayed. Certain terms, conditions and exclusions apply. To register your flight for SmartDelay, visit altitudeconnect.smartdelay.com.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "Sign-On Bonus", desc: "20,000 bonus points after $1,000 spend in 90 days (~$190 value at 0.95cpp)", min: 0, max: 200, default: 190, firstYearOnly: true },
    { name: "0% Intro APR", desc: "0% APR on purchases and balance transfers for 15 billing cycles. Estimate interest savings.", min: 0, max: 1000, default: 200, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "4X Points on Travel", desc: "4X on airlines, hotels, car rentals, taxis, trains, cruise lines. Estimate annual dollar value earned.", min: 0, max: 1000, default: 2 },
    { name: "4X Points on Gas/EV Charging", desc: "4X on gas/EV charging on first $1,000/quarter. Estimate annual dollar value earned.", min: 0, max: 120, default: 0, comment: "Max $4,000/year in spend at 3 bonus points = 12,000 bonus points (~$120). Excludes supercenters/wholesale clubs." },
    { name: "5X Points on Prepaid Hotels & Car Rentals", desc: "5X on prepaid hotels & car rentals in Travel Center. Estimate annual dollar value earned.", min: 0, max: 1000, default: 0 },
    { name: "2X Points on Dining, Streaming & Groceries", desc: "2X on dining, streaming, and groceries. Estimate annual dollar value earned.", min: 0, max: 500, default: 0, comment: "Excludes discount stores/supercenters and wholesale clubs." },
    { name: "1X Points on Other Purchases", desc: "1X on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "Priority Pass Select", desc: "Complimentary airport lounge access with 4 free visits per year", min: 0, max: 200, default: 10, comment: "4 free visits per year worth ~$10-20 each." },
    { name: "TSA PreCheck/Global Entry Credit", desc: "Statement credit for TSA PreCheck or Global Entry application fee", min: 0, max: 30, default: 0, comment: "~$85-$120 value amortized over enrollment period." },
    { name: "No Foreign Transaction Fees", desc: "No fees on international purchases", min: 0, max: 100, default: 0 },
    { name: "GigSky Global Mobile Data", desc: "Complimentary mobile data plans in 175+ countries", min: 0, max: 50, default: 0 },

    // Protection Benefits
    { section: "Protection Benefits", name: "Trip Cancellation/Interruption", desc: "Reimburses non-refundable trip costs if cancelled/interrupted", min: 0, max: 200, default: 0 },
    { name: "Trip Delay Reimbursement", desc: "Reimbursement for trip delays with SmartDelay registration", min: 0, max: 100, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "ExtendPay Plan", desc: "$0 fee on ExtendPay Plans opened in first 60 days", min: 0, max: 50, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-altitude-connect',
    detailUrl: 'usbank-altitude-connect.html',
    name: 'U.S. Bank Altitude Connect Visa Signature Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Travel', 'Gas', 'Dining', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '20,000 pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
