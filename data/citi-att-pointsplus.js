// AT&T Points Plus® Card from Citi data
(function() {
  const terms = {
    "$200 Sign-On Bonus": `Earn a $200 statement credit after spending $1,000 on purchases within the first 3 months of account opening. The statement credit is typically applied within 1-2 billing cycles after the spend requirement is met. New cardmembers only; subject to credit approval. This acquisition bonus is not available if you have received a new account bonus for an AT&T Points Plus Card from Citi account in the past 48 months. Citi will only issue one AT&T Points Plus Card account per person. Offers may vary and may not be available if you leave the application page.

Reference: A previous welcome offer of a $250 statement credit after spending $500 in the first 3 months was available earlier in 2026 (reported by Doctor of Credit and FrequentMiler) and appears to have expired. The current offer per AT&T's application page (att.com/deals/att-points-plus-citi) is $200 after $1,000 in spend.`,

    "$20 Statement Credit per Billing Cycle": `Earn a $20 statement credit on your AT&T Points Plus Card from Citi each billing cycle after you spend $1,000 or more on purchases. That's up to $240 a year. The $1,000 spend threshold must be met within each billing cycle to earn that cycle's credit. Cash advances, balance transfers, and fees do not count toward the spend requirement.`,

    "Cash Back on AT&T Bill AutoPay": `Most AT&T AutoPay discounts ($10 per wireless line + $10 internet monthly, with paperless billing) are also available when paying by bank account (ACH) — so the discount itself is not unique to this card.

The card's incremental value is that AT&T lets you keep the AutoPay discount while paying your bill with the AT&T Points Plus Card, which earns ThankYou® Points (AT&T products and services earn 2 points per $1). Paying by bank account earns no rewards, so the rewards on your recurring AT&T bill are value you can only capture with the card.

Estimate the annual cash-back/points value earned on your AT&T wireless + internet bill payments (e.g., $150/month AT&T bill × 12 × 2 points/$1 ≈ $36/year at ~1¢ per point). Note: do not also count these bill payments under "2 ThankYou Points on AT&T Products & Services" to avoid double counting.

Caveat (reduces this card's edge): You don't strictly need this card to earn rewards on your AT&T bill. You can enroll AutoPay with a bank account to keep the discount, then manually prepay the balance to $0 with any cash-back card before the bank draw. Catches: pay ~5 days early to avoid a double charge, leave an occasional bank draft (paying 100% by card for months can drop the discount), and prepay amounts may be capped. Since other cards capture this same value, the AT&T card's edge here is mostly convenience, not incremental dollars.`,

    "3 ThankYou Points at Gas & EV Charging": `Earn 3 ThankYou® Points for every $1 spent at gas and EV charging stations. ThankYou Points are unlimited and do not expire. Purchases must be made at merchants classified under the applicable merchant category to earn the bonus rate; superstores, supermarkets, and warehouse clubs that sell gas may not qualify.`,

    "2 ThankYou Points at Grocery Stores": `Earn 2 ThankYou® Points for every $1 spent at grocery stores. ThankYou Points are unlimited and do not expire. Purchases at superstores, warehouse clubs, and discount stores may not earn the grocery bonus rate.`,

    "2 ThankYou Points on AT&T Products & Services": `Earn 2 ThankYou® Points for every $1 spent on AT&T products and services. ThankYou Points are unlimited and do not expire.`,

    "1 ThankYou Point on Other Purchases": `Earn 1 ThankYou® Point for every $1 spent on all other purchases. ThankYou Points are unlimited and do not expire and can be redeemed for gift cards, travel rewards, online shopping at participating merchants, and more.`,

    "No Foreign Transaction Fees": `Pay no fee for transactions made outside of the United States. Shop like a local wherever your travel takes you, or shop on an international retailer's website, without incurring the typical foreign transaction fee.`,

    "Citi Entertainment®": `Citi Entertainment® is an entertainment access program available to eligible Citi® credit card customers. Cardmembers get special access to purchase tickets to thousands of events, including presale tickets and exclusive experiences to concerts, sporting events, arts and culture experiences.`,

    "Citi Flex Pay": `Citi® Flex Pay lets you pay over time with a fixed monthly payment. Available on eligible purchases of $75 or more when using an eligible Citi® credit card. A monthly fee or APR may apply depending on the plan.`,

    "Citi Travel®": `With Citi Travel®, you can book flights, hotels, car rentals and attractions using your eligible Citi card, points or a combination of both. Citi Travel offers access to over 1.4 million hotels and resorts available worldwide.`,

    "Free FICO® Score Access": `Free access to your FICO® Score online to review your credit history. The FICO Score provided is based on data from one credit bureau and may differ from other scores used by lenders.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$200 Sign-On Bonus", desc: "$200 statement credit after spending $1,000 on purchases within the first 3 months.", min: 0, max: 200, default: 200, firstYearOnly: true, comment: "New cardmembers only. Not available if you've received an AT&T Points Plus Card bonus in the past 48 months. A previous offer ($250 after $500 spend) appears to have expired — see info for details." },

    // Statement Credit (ongoing)
    { section: "Statement Credits (annual estimate)", name: "$20 Statement Credit per Billing Cycle", desc: "$20 statement credit each billing cycle after you spend $1,000+ on purchases. Up to $240/year. Estimate the number of cycles you'll hit the $1,000 spend threshold.", min: 0, max: 240, default: 60, comment: "Requires $1,000+ in purchases within each billing cycle to earn that cycle's $20 credit (up to 12 cycles = $240/year)." },

    // AT&T Bill AutoPay Cash Back (incremental value vs. bank-account autopay)
    { section: "AT&T Bill AutoPay Cash Back (annual estimate)", name: "Cash Back on AT&T Bill AutoPay", desc: "The AutoPay discount is also available via bank account, so it's not unique to the card. The card's incremental value is the ThankYou Points (2x on AT&T services) earned by paying your AT&T bill with the card. Estimate annual cash-back value on your AT&T bill.", min: 0, max: 100, default: 0, comment: "Bank-account autopay earns no rewards; the card does. Value = annual AT&T bill × 2 points/$1 × ~1¢/point (e.g., $150/mo bill ≈ $36/year). Don't also count this under '2 ThankYou Points on AT&T Products & Services.'" },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "3 ThankYou Points at Gas & EV Charging", desc: "3x ThankYou Points at gas and EV charging stations. Estimate annual dollar value earned (ThankYou Points ~1¢ each).", min: 0, max: 300, default: 0 },
    { name: "2 ThankYou Points at Grocery Stores", desc: "2x ThankYou Points at grocery stores. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "2 ThankYou Points on AT&T Products & Services", desc: "2x ThankYou Points on AT&T products and services. Estimate annual dollar value earned.", min: 0, max: 200, default: 0 },
    { name: "1 ThankYou Point on Other Purchases", desc: "1x ThankYou Point on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No fee on purchases made outside the U.S. Estimate annual savings based on international spend (typically 3% of spend).", min: 0, max: 200, default: 0 },
    { name: "Citi Entertainment®", desc: "Presale and exclusive access to concerts, sports, and cultural events", min: 0, max: 100, default: 0 },
    { name: "Citi Flex Pay", desc: "Pay over time on eligible purchases of $75+ with a fixed monthly payment", min: 0, max: 50, default: 0 },
    { name: "Citi Travel®", desc: "Book flights, hotels, car rentals and attractions with your card, points, or a combination", min: 0, max: 100, default: 0 },
    { name: "Free FICO® Score Access", desc: "Free access to your FICO® Score online", min: 0, max: 20, default: 0 },
  ];

  const card = {
    id: 'citi-att-pointsplus',
    detailUrl: 'citi-att-pointsplus.html',
    name: 'AT&T Points Plus Card from Citi',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Rewards', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '$200',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
