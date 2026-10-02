// U.S. Bank Business Essentials™ Plus Visa Signature® Card data
(function() {
  const terms = {
    "$1,000 Cash Back Bonus": `New Credit Card Enrollment Bonus: One-time 100,000 bonus points (worth up to $1,000) will be awarded if eligible Net Purchases (Purchases minus credits and returns) totaling $15,000 or more are made to the account within 150 days from account opening. All employee card(s) eligible Net Purchases will count towards the $15,000 spend requirement. Please allow 1-2 statement billing cycles for your bonus points to be credited to your account. This offer may not be combined with any other credit card bonus offer. Subject to credit approval. Maximum Point value applies to Points redeemed for a deposit into an eligible U.S. Bank Account or statement credit. The redemption value may be different if you choose to redeem your Points for other rewards such as travel, merchandise, and/or gift cards. Other restrictions apply. Establishment or ownership of a U.S. Bank Account or other relationship with U.S. Bank is not required to obtain a card or to be eligible to use Points to obtain any rewards offered under the program. Minimum redemption amounts may vary and are subject to change without notice.`,

    "2% Cash Back on All Purchases": `Cash back rewards are earned under the U.S. Bank Business Essentials™ Plus Visa Signature® Card program. These rewards are earned as "Points" and you will earn 2 Points for every $1 spent in eligible Net Purchases (Purchases minus credits and returns). There is no cap on the total 2% base cash back you can earn.

To redeem as Cash Back in the values noted in this advertisement, Points can be redeemed as a deposit into an eligible U.S. Bank deposit account or statement credit. Other redemptions, such as for gift cards or travel, may be at a reduced redemption rate.

Points will expire if there is no reward, Purchase, or balance activity on your Card account for 12 consecutive statement cycles.`,

    "Up to 3.5% Cash Back with Qualifying Balances": `You may earn additional Points for a Business Essentials Plus Earning Bonus if you:
- Have an existing checking account, or open a new checking account with a minimum opening deposit of $25, in one of the following "Qualifying Business Checking Accounts": U.S. Bank Business Essentials®, U.S. Bank Gold Business Checking, Gold Business Checking with Interest, or U.S. Bank Platinum Business Checking.
- Have a "Qualifying Balance" with U.S. Bank in an open Qualifying Business Checking Account.

Based on your Qualifying Balance, you will earn Points according to the following tiers:
- $15,000 – $74,999.99: 2.5 Points per $1 (2 base + 0.5 bonus)
- $75,000 – $149,999.99: 3 Points per $1 (2 base + 1 bonus)
- $150,000 or more: 3.5 Points per $1 (2 base + 1.5 bonus)

Exceptions:
- Business Essentials Plus Earning Bonus applies to a maximum of $200,000 in eligible Net Purchases annually (one-year period starting on Account opening date). Eligible Net Purchases over $200,000 will earn the base earn of 2 Points per $1.
- Purchases classified as (1) education/school, (2) gift cards (including discount gift card sites), and (3) tax will earn the base of 2 points per $1 and may not earn additional Points for the Business Essentials Plus Earning Bonus.

The Qualifying Balance is a 30-day average balance of all Qualifying Business Checking Accounts. If your daily Qualifying Balance qualifies you for a tier upgrade or downgrade, you will be moved to the higher or lower tier (within 5 business days).`,

    "5% Cash Back on Top Spend Category": `You will earn 5 Points (2 base and 3 additional) for every $1 in eligible Net Purchases spent on the top eligible spend category each month up to a $200,000 annual spend cap. "Annual" means the one-year period starting on the Account opening date. Eligible Net Purchases over $200,000 will earn the base earn of 2 Points per $1 spent in Net Purchases.

"Top Categories" include: accounting & tax services, airlines, cell phone service providers, dining, entertainment (such as bowling alleys, golf courses, entertainment parks), office supply stores, postal & shipping services, and utilities. These "Top Categories" may change in the future without notice. Your top category is determined automatically each month based on where you spend the most.`,

    "10% Cash Back on Prepaid Travel": `You will earn 10 Points (2 base and 8 additional) for every $1 in eligible Net Purchases spent on prepaid car and hotel reservations purchased in the Travel Center using your U.S. Bank Business Essentials™ Plus Visa Signature® Card instead of Points. Please allow 1-2 statement billing cycles for Points to be credited to your account.`,

    "ExtendPay Plans": `From time to time we may offer you the benefit of our U.S. Bank ExtendPay® Plans, which allow you to pay off balances in fixed monthly payments over time and still avoid paying interest charges on new Purchases. Only your company's Authorized Officer (AO) may enroll in an ExtendPay Plan. You may designate up to 50% of your credit card line ($100 minimum) in eligible credit card purchases and pay in monthly installments with just a small fixed monthly fee. Only Purchase balances are eligible for ExtendPay Plans. The only Purchases that will appear as "Eligible Purchases" in the enrollment process are Purchases that were made within 60 days prior to signing up for an ExtendPay Plan, are over $100, and are less than your Purchase balance when you sign up for an ExtendPay Plan. New cardmembers receive a $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening. Not all accounts are eligible for ExtendPay Plans.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus (First Year Only)", name: "$1,000 Cash Back Bonus", desc: "After spending $15,000 within 150 days of account opening (employee card spend counts)", min: 0, max: 1000, default: 1000, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2% Cash Back on All Purchases", desc: "Unlimited 2% cash back on every eligible purchase, no caps. Estimate annual cash back earned.", min: 0, max: 4000, default: 0 },
    { name: "5% Cash Back on Top Spend Category", desc: "5% on your highest eligible category each month (airlines, dining, utilities, office supplies, etc.) up to $200K/year. Estimate annual cash back.", min: 0, max: 6000, default: 0, comment: "Top category is determined automatically each month. Eligible categories: accounting & tax, airlines, cell phone, dining, entertainment, office supplies, postal & shipping, utilities." },
    { name: "Up to 3.5% Cash Back with Qualifying Balances", desc: "Extra 0.5%–1.5% on up to $200K/year with qualifying U.S. Bank business checking balances. Estimate additional annual cash back.", min: 0, max: 3000, default: 0, comment: "Requires a qualifying U.S. Bank business checking account. Tiers: $15K–$75K balance → 2.5% total; $75K–$150K → 3%; $150K+ → 3.5%." },
    { name: "10% Cash Back on Prepaid Travel", desc: "10% on prepaid hotels and car rentals booked in the U.S. Bank Travel Center. Estimate annual cash back.", min: 0, max: 1000, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "Spend Management Tools", desc: "U.S. Bank Spend Management platform for monitoring and managing business expenses", min: 0, max: 50, default: 0 },
    { name: "Free Employee Cards", desc: "No additional cost to add employee cards. Earn rewards faster across multiple cardholders.", min: 0, max: 50, default: 0 },
    { name: "ExtendPay Plans", desc: "$0 fee on ExtendPay Plans opened in first 60 days. Pay eligible purchases over time.", min: 0, max: 100, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-business-essentials-plus',
    detailUrl: 'usbank-business-essentials-plus.html',
    name: 'U.S. Bank Business Essentials™ Plus Visa Signature® Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Business',
    categories: ['Cash Back', 'Travel'],
    annualFee: 295,
    signOnBonusLabel: '$1,000 cash back',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
