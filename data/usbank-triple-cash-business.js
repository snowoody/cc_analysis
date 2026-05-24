// U.S. Bank Triple Cash Rewards Visa® Business Card data
(function() {
  const terms = {
    "$750 Cash Back Bonus": `New Credit Card Enrollment Bonus: One-time $750 cash back will be awarded if eligible Net Purchases totaling $6,000 or more are made to the Account Owner's Card within 180 days from account opening. The Account Owner's Card is the card assigned to the initial applicant of the account and would not include cards used by authorized employees. Net Purchases are purchases minus credits and returns. Rewards are earned based on eligible Net Purchases. Please allow 1-2 statement billing cycles after you have met the spend requirement for your cash back to be credited to your account.

Maximum Cash Rewards value applies to Cash Rewards redeemed for a statement credit or deposit into an eligible U.S. Bank Account. The redemption value may be different if you choose to redeem your Cash Rewards for other rewards such as a U.S. Bank Rewards Card. Other restrictions apply. Establishment or ownership of a U.S. Bank Account or other relationship with U.S. Bank is not required to obtain a card or to be eligible to use Cash Rewards to obtain any rewards offered under the program. Minimum redemption amounts may vary and are subject to change without notice.

Cash Rewards will expire if there is no reward, purchase, or balance activity on your account for 12 consecutive statement cycles.

A statement credit will not satisfy the minimum payment requirement. Offer may not be combined with any other offer. Subject to credit approval.`,

    "Software Subscription Credit": `$100 Software Subscription Statement Credit: An automatic statement credit of $100 per 12-month period will be applied to your account within 1-2 statement billing cycles following 11 consecutive months of eligible software service purchases made directly with a software service provider. Eligible software service providers are identified by their Merchant Category Code (MCC) and purchases made at discount/retail stores or online retailers may not qualify. We reserve the right to adjust or reverse any portion or all of any software services credit for unauthorized purchases or transaction credits.

Examples of eligible software services include FreshBooks and QuickBooks.`,

    "3% Cash Back on Bonus Categories": `3% Cash Back: You will earn 3% Cash Back for every $1 spent in eligible Net Purchases at restaurants/restaurant delivery, office supply stores, cell phone service providers, and gas and electric vehicle charging stations excluding wholesale clubs and discount stores/supercenters. All other Net Purchases may earn 1% Cash Back. Purchases of gasoline or electric vehicle charging greater than $200 will not be deemed to be a purchase of automotive fuel and as such will earn a reward of 1%.

Each merchant's business is identified by a category code established by Visa. A Purchase will not earn additional rewards if the category code applied to a merchant is in a category that is not eligible for additional rewards earning. We do not determine the category codes applied to merchants' businesses and reserve the right to determine which Purchases qualify for additional rewards.`,

    "1% Cash Back on Other Purchases": `1% Cash Back: All Net Purchases that do not qualify for the 3% bonus categories or the 5% prepaid travel category earn 1% Cash Back. There is no limit on the total rewards you can earn.

Rewards are earned on eligible Net Purchases. Net Purchases are purchases minus credits and returns. Not all transactions are considered to be Purchases and eligible to earn rewards, such as transactions posting as Convenience Checks; Balance Transfers; Advances (including ATM withdrawals, wire transfers, traveler's checks, money orders, foreign cash transactions, betting transactions, and lottery tickets); interest charges and fees; credit insurance premiums; and transactions to (i) fund certain prepaid card products, (ii) buy currency from the U.S. Mint, or (iii) buy cash convertible items.`,

    "5% Cash Back on Prepaid Travel": `5% Cash Back on Prepaid Travel: You will earn 5% Cash Back (1% base and 4% additional Cash Back) for every $1 spent in eligible Net Purchases on prepaid car and hotel reservations purchased in the Travel Center using your U.S. Bank Triple Cash Visa Business Card. Please allow 1-2 statement billing cycles for Cash Back to appear on your account.`,

    "0% Intro APR for 12 Billing Cycles": `0% Introductory APR: The 0% introductory APR applies to purchases and is valid for the first 12 billing cycles. The 0% introductory APR applies to balance transfers made within 30 days of account opening and is valid for the first 12 billing cycles. The introductory rate does not apply to cash advances. Balance Transfer fee of 5% of each transfer amount, $5 minimum will apply.

When you make a payment, the amount up to your Minimum Payment is applied first to the monthly payment obligation for U.S. Bank ExtendPay® Plans and U.S. Bank ExtendPay® Loans if any, and then to non-Fixed Payment Program balances in the order of the lowest to highest APR. Any amount over your Minimum Payment is applied to non-Fixed Payment Program balances in the order of lowest to highest APR before applying to Fixed Payment Program balances.

Balance transfer transactions from other U.S. Bank National Association accounts are not permitted. Balance transfers submitted at time of application will be held for 10 days before processing.

The rate will end early and increase to the APR for purchases and balance transfers or to a Penalty Rate APR if you make a late payment, make a payment that is returned, or your account exceeds its credit limit.`,

    "ExtendPay Plans": `U.S. Bank ExtendPay® Plans: From time to time we may offer you the benefit of our U.S. Bank ExtendPay® Plans, which allow you to pay off balances in fixed monthly payments over time and still avoid paying interest charges on new Purchases. Only your company's Authorized Officer (AO) may enroll in an ExtendPay Plan.

Accounts set up for which multiple billing statements are issued do not qualify. If your company's card program is set up with central billing, the AO may select ExtendPay eligible Purchases when viewing the central billing account (which includes Purchases made on employee cards). If your company is set up with individual billing, the AO may only select Purchases made on their own card account.

You may designate up to 50% of your credit card line ($100 minimum) in eligible credit card purchases and pay in monthly installments with just a small fixed monthly fee. Only Purchase balances are eligible for ExtendPay Plans. Transactions identified as Advances or Balance Transfers, and any interest or fees, including Annual Fee, do not apply.

The only Purchases that will appear as "Eligible Purchases" in the enrollment process are Purchases that were made within 60 days prior to signing up for an ExtendPay Plan, are over $100, and are less than your Purchase balance when you sign up for an ExtendPay Plan. Any unpaid balance remaining on an ExtendPay Plan after the chosen pay-back period will be subject to the APR and minimum payment calculation for purchases outlined in the Cardmember Agreement. The monthly fixed fee will be determined when your ExtendPay Plan is created and is provided to you before you complete setting up an ExtendPay Plan. This fee will remain the same until the ExtendPay Plan is paid in full.

New cardmembers receive a $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening. Not all accounts are eligible for ExtendPay Plans.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$750 Cash Back Bonus", desc: "After spending $6,000 on the Account Owner's card within 180 days from account opening", min: 0, max: 750, default: 750, firstYearOnly: true },
    { name: "0% Intro APR for 12 Billing Cycles", desc: "0% APR on purchases and balance transfers for first 12 cycles. Estimate value if you'll carry a balance.", min: 0, max: 1500, default: 200, firstYearOnly: true },

    // Annual Credits
    { section: "Annual Credits", name: "Software Subscription Credit", desc: "$100/yr after 11 consecutive months of eligible software service purchases (e.g., FreshBooks, QuickBooks)", min: 0, max: 100, default: 60, comment: `Requires 11 consecutive months of eligible software charges. Cheapest option (Deepseek) is $2.12 per month ($76 money maker per year). Other options include: ChatGPT, Seats.aero, Claude, etc. See <a href="https://www.doctorofcredit.com/u-s-bank-triple-cash-100-software-credit-what-works-profitable-uses/" target="_blank" rel="noopener">Doctor of Credit discussion</a> for the full list.` },

    // Earning Potential (cash back from annual spend)
    { section: "Earning Potential (annual estimate)", name: "3% Cash Back on Bonus Categories", desc: "Gas/EV (transactions ≤$200), office supply stores, cell phone providers, restaurants. Estimate annual cash back.", min: 0, max: 600, default: 0 },
    { name: "1% Cash Back on Other Purchases", desc: "1% on all other eligible purchases. Estimate annual cash back.", min: 0, max: 400, default: 0 },
    { name: "5% Cash Back on Prepaid Travel", desc: "5% on prepaid hotels and car rentals booked through U.S. Bank Travel Center. Estimate annual cash back.", min: 0, max: 300, default: 0 },

    // Other
    { section: "Other Benefits", name: "Free Employee Cards", desc: "No additional cost to add employee cards. Earn rewards faster across multiple cardholders.", min: 0, max: 50, default: 0 },
    { name: "ExtendPay Plans", desc: "Pay eligible purchases over time with no interest, just a fixed monthly fee. Eligibility varies.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'usbank-triple-cash-business',
    detailUrl: 'usbank-triple-cash-business.html',
    name: 'U.S. Bank Triple Cash Rewards Visa® Business Card',
    issuer: 'U.S. Bank',
    network: 'Visa',
    type: 'Business',
    categories: ['Cash Back', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '$750 cash back + 12mo 0% APR',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
