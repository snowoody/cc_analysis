// Capital One Spark Cash Plus Business Card data
(function() {
  const terms = {
    "$2,000 Welcome Bonus": `Welcome Offer: Earn a one-time $2,000 cash bonus when you spend $30,000 on purchases within the first 3 months of account opening.

Cash back can be converted to Capital One miles at a 1:1 ratio (1¢ cash back = 1 mile) if you also hold a miles-earning Capital One card (Venture, Venture X, VentureOne, Venture Business, or Venture X Business). This makes the $2,000 bonus equivalent to 200,000 transferable Capital One miles, which can be transferred to 15+ airline/hotel partners (Aeroplan, Flying Blue, British Airways, etc.) for potentially higher value (TPG values Capital One miles at ~1.85¢ each).

Cash back rewards do not expire for the life of the account. If your account is closed, you may lose any rewards you have not redeemed. Your Spark Cash Plus card account must be open and in good standing at the time of rewards redemption.`,

    "$2,000 Bonus per $500K Spent (Year 1)": `Additional Spend Bonus: Earn an additional $2,000 cash bonus for every $500,000 spent during the first year of account opening.

This bonus may be earned independently from the early spend bonus, meaning you may earn one or both. Your Spark Cash Plus card account must be open and in good standing at the time of rewards redemption.`,

    "$500 Capital One Business Travel Credit": `Limited-Time Offer: Earn a one-time $500 Capital One Business Travel credit when you spend $30,000 in the first 3 months of account opening.

The credit will be applied to your Capital One Business Travel balance within two billing cycles and expires 15 months after account opening. The credit will be available within Capital One Business Travel and can be applied to purchases at checkout. The credit may be used in whole for a single purchase or in part over multiple purchases.

Rewards will not be earned on the credit. If the purchase using the credit is canceled, the credit will be restored if it is not expired. An expired credit will not be restored upon cancellation of the purchase by the customer. Your Spark Cash Plus account must be open and in good standing to receive and use the credit.`,

    "Unlimited 2% Cash Back on Every Purchase": `Unlimited 2% Cash Back: Earn unlimited 2% cash back for your business on every purchase, everywhere, no limits or category restrictions.

Cash back is earned on eligible net purchases (purchases minus credits and returns). Cash advances, balance transfers, and similar transactions are not eligible. There is no cap on the amount of cash back you can earn.

Cash back rewards do not expire for the life of the account. Redeem for statement credit, check, or other options at any time with no minimum redemption amount.`,

    "5% Cash Back via Capital One Business Travel": `5% Cash Back on Capital One Business Travel: Earn unlimited 5% cash back on hotels, vacation rentals, and rental cars booked through Capital One Business Travel.

Capital One Business Travel is a complimentary all-in-one business travel management solution. Benefits include booking travel, creating travel policies, and managing business travel. Account must be open and in good standing to earn rewards.`,

    "$150 Annual Fee Refund": `Annual Fee Refund: Get your $150 annual fee refunded every year you spend at least $150,000 in net purchases by your membership anniversary date.

You will receive a statement credit of $150 within 2 billing cycles following your rewards membership anniversary date. Statement credits lower your balance but do not count as payments. You must continue to make any required payments.

Net purchases include purchases minus credits and returns, but do not include cash advances, balance transfers, fees, interest charges, or similar items.`,

    "No Preset Spending Limit": `No Preset Spending Limit: The Spark Cash Plus card has no preset spending limit. Your purchasing power adjusts dynamically based on your spending behavior, payment history, credit profile, and other factors.

No preset spending limit does not mean unlimited spending. The amount you can spend can change over time. This card is designed to be paid in full. However, you have the option to carry over a portion of your balance with interest if needed—pay at least the minimum payment amount by your payment due date, otherwise you'll be charged a 2.99% late fee.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: Pay zero foreign transaction fees on purchases made outside of the United States. Standard 3% foreign transaction fees charged by most cards are waived.

Value depends on annual international business spend. This benefit applies to all purchases made in a foreign currency or processed through a foreign bank.`,

    "Free Employee Cards": `Free Employee Cards: Track employee spending while earning all the rewards from their purchases, with free employee cards.

Set customized spending limits for employee cards and see transactions as soon as they post. Virtual card numbers are also available for safer online payments without exposing your actual card number with merchants.`,

    "Extended Warranty": `Extended Warranty: Get free additional warranty and protection on eligible items that you purchase with your card.

Certain terms, conditions, and exclusions apply. In order for coverage to apply, you must use your covered card to secure transactions. Please refer to your Guide to Benefits for further details.`,

    "Capital One Business Travel Access": `Capital One Business Travel: Complimentary access to an all-in-one business travel management solution.

Features include:
- Book flights, hotels, and rental cars for your team
- Create and enforce travel policies
- Manage and track business travel expenses
- Centralized billing and reporting

Capital One Business Travel is available at no additional cost to Spark Cash Plus cardholders.`,

    "Roadside Assistance": `Roadside Assistance: Services to help you during auto-related emergencies, such as jump-starting, tire changing, and towing.

This benefit is available to all Capital One business cardholders. Standard limitations and exclusions apply. See your Guide to Benefits for details.`,

    "Year-End Summaries": `Year-End Summaries: Get an itemized report of your spending to simplify budgeting and tax time.

Quickly and securely download your purchase records into multiple formats including Quicken®, QuickBooks®, and Excel®. Transaction details include merchant information like address, logo, phone number, and map when available.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$2,000 Welcome Bonus", desc: "Earn $2,000 cash bonus after spending $30,000 in first 3 months. Worth more if converted to miles via a Venture card.", min: 0, max: 4000, default: 2800, firstYearOnly: true, comment: "Default assumes conversion to 200,000 Capital One miles at 1.4¢/mile. Cash value is $2,000. Requires a Venture/VentureOne card to convert." },
    { name: "$2,000 Bonus per $500K Spent (Year 1)", desc: "Additional $2,000 for every $500,000 spent in first year", min: 0, max: 4000, default: 0, firstYearOnly: true },
    { name: "$500 Capital One Business Travel Credit", desc: "Limited-time: $500 travel credit after $30K spend in 3 months (expires 15 months after opening)", min: 0, max: 500, default: 400, firstYearOnly: true },

    // Ongoing Cash Back
    { section: "Ongoing Cash Back (Annual Estimate)", name: "Unlimited 2% Cash Back on Every Purchase", desc: "2% cash back on all purchases, no caps or category restrictions.", min: 0, max: 10000, default: 50, comment: "2x points per dollar → 2.8% cash back with 1.4 cpp." },
    { name: "5% Cash Back via Capital One Business Travel", desc: "5% on hotels, vacation rentals, rental cars via Capital One Business Travel.", min: 0, max: 2000, default: 0 },

    // Fee Benefits
    { section: "Fee Benefits", name: "$150 Annual Fee Refund", desc: "Annual fee refunded if you spend $150,000+ per year", min: 0, max: 150, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases", min: 0, max: 500, default: 0 },
    { name: "Capital One Business Travel Access", desc: "Complimentary business travel management platform for booking, policies, and expense tracking", min: 0, max: 200, default: 0 },
    { name: "Extended Warranty", desc: "Additional warranty protection on eligible purchases", min: 0, max: 100, default: 0 },
    { name: "Roadside Assistance", desc: "Auto emergency services including jump-starts, tire changes, and towing", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'capitalone-spark-cash-plus',
    detailUrl: 'capitalone-spark-cash-plus.html',
    name: 'Capital One Spark Cash Plus',
    issuer: 'Capital One',
    network: 'Visa',
    type: 'Business',
    categories: ['Cash Back', 'Charge Card'],
    annualFee: 150,
    signOnBonusLabel: '$2,000 + $500 travel',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
