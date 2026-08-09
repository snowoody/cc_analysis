// U.S. Bank Business Altitude Connect Visa Signature Card data
(function() {
  const terms = {
    "Sign-On Bonus": `One-time 75,000 bonus points will be awarded if eligible Net Purchases totaling $6,000 or more are made to the Account Owner's Card within 180 days from account opening. The Account Owner's Card is the card assigned to the initial applicant of the account and would not include cards used by authorized employees. Net Purchases are purchases minus credits and returns. Rewards are earned based on eligible Net Purchases. Please allow 1-2 statement billing cycles for your bonus points to be credited to your account.

Maximum Point value applies to Points redeemed for travel, Real-Time Rewards for travel purchases and a deposit into an eligible U.S. Bank Account. The redemption value may be different if you choose to redeem your Points for other rewards such as merchandise, gift cards, and/or statement credit. Other restrictions apply. Minimum redemption amounts may vary and are subject to change without notice. Points will expire if there is no reward, purchase, or balance activity on your account for 12 consecutive statement cycles.

This offer may not be combined with any other bonus offer. Subject to credit approval.`,

    "5X Points on Travel Center Bookings": `You will earn 5 Points (1 base and 4 additional Points) for every $1 in eligible Net Purchases spent on prepaid car and hotel reservations purchased in the Travel Center using your U.S. Bank Business Altitude Connect Visa Signature Card instead of Points. Prepaid car and hotel reservations in the Travel Center are not classified as a travel provider category merchant transaction and are not eligible to receive the additional Points for that category. Please allow 1-2 statement billing cycles for Points to be credited to your account.`,

    "4X Points on Travel & Gas/EV": `You will earn 4 Points (1 base and 3 additional Points) for each $1 on the first $150,000 spent during each account calendar year on combined eligible Net Purchases made directly with merchants that are classified as a travel provider category transaction (such as purchases made directly with airlines, hotels, car rentals, taxicabs, limousines, passenger trains and cruise line companies) and for purchases made with merchants classified as a gas station or electric vehicle charging station excluding wholesale clubs and discount stores/supercenters. After $150,000 is spent on combined purchases during the calendar year in these categories, you will earn 1 Point for each $1 spent, with no maximum.`,

    "2X Points on Dining & Cell Phone": `You will earn 2 Points (1 base and 1 additional Point) for every $1 spent in eligible Net Purchases during each billing cycle for any merchant classified as a restaurant, fast-food restaurant or bar, and cellphone provider, with no maximum.`,

    "1X Points on Other Purchases": `Earn 1X point on all other eligible purchases. Rewards are earned on eligible Net Purchases. Net Purchases are purchases minus credits and returns. Not all transactions are considered to be Purchases and eligible to earn rewards, such as transactions posting as Convenience Checks; Balance Transfers; Advances; interest charges and fees; credit insurance premiums; and transactions to fund certain prepaid card products, buy currency from the U.S. Mint, or buy cash convertible items.`,

    "$25 Rideshare Credit": `In order to be eligible for the $25 rideshare service credit, you must make at least one rideshare service purchase per month for 3 consecutive months. The month following 3 consecutive rideshare service purchases, your credit will be processed, and you will not be eligible to earn toward your next rideshare service credit. Starting the month after your credit is processed, you will again be eligible to earn the service credit for 3 consecutive months of rideshare service purchases.

Rideshare service purchases must be made directly with a rideshare provider such as Uber and Lyft, including taxi services. Each merchant's business is identified by a category code. We do not determine the category codes applied to merchants' businesses and reserve the right to determine which purchases qualify for this credit. The credit will be applied to your card account within 1-2 statement billing cycles after earning the credit.`,

    "Priority Pass Digital Membership": `Certain terms, conditions and exclusions apply. Please visit prioritypass.com/usbankbizconnect to enroll in Priority Pass and for further details. Offers vary by location. View terms and conditions at prioritypass.com/en/conditions-of-use.

Priority Pass Digital annual membership with access to more than 1,800 VIP lounges worldwide, plus four complimentary visits per membership year. Additional visits cost $35 each.`,

    "Points Transfer": `Certain conditions and limitations apply. Complete Reward Program Rules will be provided once you become a cardmember. You can transfer points between your business and personal U.S. Bank Altitude cards (Go or Connect). This excludes the Altitude Reserve.`,

    "ExtendPay Plan": `U.S. Bank ExtendPay Plans provide a payment option that allows you to divide eligible credit card purchases into affordable monthly payments with no interest – just a fixed monthly fee. Only your company's Authorized Officer (AO) may enroll in an ExtendPay Plan.

New cardmembers receive a $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening. Not all accounts are eligible for ExtendPay Plans.

You may designate up to 50% of your credit card line ($100 minimum) in eligible credit card purchases and pay in monthly installments with just a small fixed monthly fee. The only Purchases that will appear as "Eligible Purchases" are those made within 60 days prior to signing up, are over $100, and are less than your Purchase balance when you sign up.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus (First Year Only)", name: "Sign-On Bonus", desc: "75,000 bonus points after $6,000 spend in 180 days (~$750 value at 1cpp travel redemption)", min: 0, max: 750, default: 750, firstYearOnly: true },

    // Annual Credits
    { section: "Annual Credits", name: "$25 Rideshare Credit", desc: "$25 credit after 3 consecutive months of rideshare/taxi purchases; repeatable up to 4x/year", min: 0, max: 100, default: 50, comment: "Requires at least one rideshare/taxi transaction per month for 3 consecutive months. Resets after each payout." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "4X Points on Travel & Gas/EV", desc: "4X on airlines, hotels, car rentals, taxis, trains, cruises, gas, EV charging on first $150K combined/year. Estimate annual dollar value earned.", min: 0, max: 3000, default: 0 },
    { name: "5X Points on Travel Center Bookings", desc: "5X on prepaid hotels & car rentals booked in U.S. Bank Travel Center. Estimate annual dollar value earned.", min: 0, max: 1000, default: 0 },
    { name: "2X Points on Dining & Cell Phone", desc: "2X on dining, takeout, restaurant delivery, and cell phone services. Estimate annual dollar value earned.", min: 0, max: 500, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1X on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "Priority Pass Digital Membership", desc: "Airport lounge access with 4 complimentary visits per year ($35/visit after)", min: 0, max: 200, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No fees on international purchases", min: 0, max: 100, default: 0 },
    { name: "Points Transfer", desc: "Transfer points between personal and business U.S. Bank Altitude cards (Go or Connect)", min: 0, max: 50, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost for employee cards; earn rewards faster across multiple cardholders", min: 0, max: 50, default: 0 },
    { name: "Auto Rental Collision Damage Waiver", desc: "Coverage for rental car damage/theft when declining agency insurance", min: 0, max: 100, default: 0 },
    { name: "Lost Luggage Insurance", desc: "Coverage for lost luggage when travel is purchased with the card", min: 0, max: 50, default: 0 },
    { name: "ExtendPay Plan", desc: "$0 fee on ExtendPay Plans opened in first 60 days (new cardmembers only)", min: 0, max: 50, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-altitude-connect-biz',
    detailUrl: 'usbank-altitude-connect-biz.html',
    name: 'U.S. Bank Business Altitude Connect Visa Signature Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Business',
    categories: ['Travel', 'Gas', 'Dining'],
    annualFee: 95,
    annualFeeFirstYear: 0,
    signOnBonusLabel: '75,000 pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
