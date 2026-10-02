// U.S. Bank Business Essentials™ Visa® Card data
(function() {
  const terms = {
    "$500 Cash Back Bonus": `New Credit Card Enrollment Bonus: One-time 50,000 bonus points (worth up to $500) will be awarded if eligible Net Purchases (Purchases minus credits and returns) totaling $5,000 or more are made to the account within 150 days from account opening. All employee card(s) eligible Net Purchases will count towards the $5,000 spend requirement. Please allow 1-2 statement billing cycles for your bonus points to be credited to your account. This offer may not be combined with any other credit card bonus offer. Subject to credit approval. Maximum Point value applies to Points redeemed for a deposit into an eligible U.S. Bank Account or statement credit. The redemption value may be different if you choose to redeem your Points for other rewards such as travel, merchandise, and/or gift cards. Other restrictions apply. Establishment or ownership of a U.S. Bank Account or other relationship with U.S. Bank is not required to obtain a card or to be eligible to use Points to obtain any rewards offered under the program. Minimum redemption amounts may vary and are subject to change without notice.`,

    "2% Cash Back on All Purchases": `Cash back rewards are earned under the U.S. Bank Business Essentials™ Visa® Card program. These rewards are earned as "Points" and you will earn 2 Points for every $1 spent in eligible Net Purchases (Purchases minus credits and returns). There is no cap on the total 2% base cash back you can earn.

To redeem as Cash Back in the values noted in this advertisement, Points can be redeemed as a deposit into an eligible U.S. Bank deposit account or statement credit. Other redemptions, such as for gift cards or travel, may be at a reduced redemption rate.

Points will expire if there is no reward, Purchase, or balance activity on your Card account for 12 consecutive statement cycles.`,

    "2.5% Cash Back with Qualifying Balances": `You will earn 2.5 Points (2 base and 0.5 additional Point) for every $1 in eligible Net Purchases spent when you qualify for the Business Essentials Earning Bonus.

Business Essentials Earn Bonus qualifications:
- Have an existing checking account, or open a new checking account with a minimum opening deposit of $25, in one of the following "Qualifying Business Checking Accounts": U.S. Bank Business Essentials®, U.S. Bank Gold Business Checking, Gold Business Checking with Interest, or U.S. Bank Platinum Business Checking.
- Have a "Qualifying Balance" of $10,000 or more with U.S. Bank in a Qualifying Business Checking Account. Deposits in other U.S. Bank accounts do not qualify.

Exceptions:
- Business Essentials Earning Bonus applies to a maximum of $10,000 in eligible Net Purchases each Card billing cycle. Eligible Net Purchases over $10,000 during each Card billing cycle will earn the base earn of 2 Points per $1 spent.
- Purchases classified as (1) education/school, (2) gift cards (including discount gift card sites), and (3) tax will earn the base of 2 points per $1 and may not earn additional Points for the Business Essentials Earning Bonus.

The Qualifying Balance is a 30-day average balance of all Qualifying Business Checking Accounts. If your daily Qualifying Balance qualifies you for a tier upgrade or downgrade, you will be moved to the higher or lower tier (within 5 business days).`,

    "6% Cash Back on Prepaid Travel": `You will earn 6 Points (2 base and 4 additional Points) for every $1 in eligible Net Purchases spent on prepaid car and hotel reservations purchased in the Travel Center using your U.S. Bank Business Essentials™ Visa® Card instead of Points. Please allow 1-2 statement billing cycles for Points to be credited to your account.`,

    "0% Intro APR for 12 Billing Cycles": `The 0% introductory APR applies to purchases and is valid for the first 12 billing cycles. The introductory APR does not apply to balance transfers or cash advances. Balance Transfer fee of 5% of each transfer amount, $5 minimum will apply. When you make a payment, the amount up to your Minimum Payment is applied first to the monthly payment obligation for U.S. Bank ExtendPay® Plans and U.S. Bank ExtendPay® Loans if any, and then to non-Fixed Payment Program balances in the order of the lowest to highest APR. Any amount over your Minimum Payment is applied to non-Fixed Payment Program balances in the order of lowest to highest APR before applying to Fixed Payment Program balances. Balance transfer transactions from other U.S. Bank National Association accounts are not permitted. Balance transfers submitted at time of application will be held for 10 days before processing.`,

    "ExtendPay Plans": `From time to time we may offer you the benefit of our U.S. Bank ExtendPay® Plans, which allow you to pay off balances in fixed monthly payments over time and still avoid paying interest charges on new Purchases. Only your company's Authorized Officer (AO) may enroll in an ExtendPay Plan. You may designate up to 50% of your credit card line ($100 minimum) in eligible credit card purchases and pay in monthly installments with just a small fixed monthly fee. Only Purchase balances are eligible for ExtendPay Plans. The only Purchases that will appear as "Eligible Purchases" in the enrollment process are Purchases that were made within 60 days prior to signing up for an ExtendPay Plan, are over $100, and are less than your Purchase balance when you sign up for an ExtendPay Plan. New cardmembers receive a $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening. Not all accounts are eligible for ExtendPay Plans.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus (First Year Only)", name: "$500 Cash Back Bonus", desc: "After spending $5,000 within 150 days of account opening (employee card spend counts)", min: 0, max: 500, default: 500, firstYearOnly: true },
    { name: "0% Intro APR for 12 Billing Cycles", desc: "0% APR on purchases for first 12 billing cycles. Estimate interest savings.", min: 0, max: 1500, default: 200, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2% Cash Back on All Purchases", desc: "Unlimited 2% cash back on every eligible purchase, no caps. Estimate annual cash back earned.", min: 0, max: 2000, default: 0 },
    { name: "2.5% Cash Back with Qualifying Balances", desc: "Extra 0.5% on first $10,000/month in eligible spend with $10K+ in a qualifying U.S. Bank business checking account. Estimate additional annual cash back.", min: 0, max: 600, default: 0, comment: "Max $120K/year eligible spend × 0.5% bonus = $600. Requires $10K+ average balance in a qualifying U.S. Bank business checking account." },
    { name: "6% Cash Back on Prepaid Travel", desc: "6% on prepaid hotels and car rentals booked in the U.S. Bank Travel Center. Estimate annual cash back.", min: 0, max: 500, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "Spend Management Tools", desc: "U.S. Bank Spend Management platform for monitoring and managing business expenses", min: 0, max: 50, default: 0 },
    { name: "Free Employee Cards", desc: "No additional cost to add employee cards. Earn rewards faster across multiple cardholders.", min: 0, max: 50, default: 0 },
    { name: "ExtendPay Plans", desc: "$0 fee on ExtendPay Plans opened in first 60 days. Pay eligible purchases over time.", min: 0, max: 100, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-business-essentials',
    detailUrl: 'usbank-business-essentials.html',
    name: 'U.S. Bank Business Essentials™ Visa® Card',
    issuer: 'U.S. Bank',
    network: 'Visa',
    type: 'Business',
    categories: ['Cash Back', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '$500 cash back + 12mo 0% APR',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
