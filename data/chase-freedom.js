// Chase Freedom® Credit Card data (Visa version)
(function() {
  const terms = {
    "5% Quarterly Bonus Categories": `5% Cash Back in quarterly bonus categories: You'll earn 5% Cash Back rewards total for each $1 spent until $1,500 is spent on combined purchases in the quarterly bonus categories each quarter that you activate the bonus (4% additional Cash Back rewards on top of the 1% Cash Back rewards earned on each purchase). You must activate your 5% Bonus Cash Back each quarter by the activation deadline. After $1,500 is spent on combined purchases in the quarterly bonus categories each quarter, you go back to earning 1% Cash Back rewards for each $1 spent, with no maximum. Categories rotate quarterly; examples include gas stations, grocery stores (excluding Target and Walmart), Amazon, and select live entertainment.`,

    "1% on Everything Else": `1% Cash Back: You'll earn 1% Cash Back rewards for each $1 spent. Points don't expire as long as your account remains open.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $500 per item. Restrictions, limitations and exclusions apply.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Auto Rental Coverage": `Auto Rental Coverage: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage provides reimbursement for theft and collision damage for most rental vehicles. In the U.S., coverage is secondary to your personal insurance.`,
  };

  const benefits = [
    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5% Quarterly Bonus Categories", desc: "5 UR pts/$1 on rotating quarterly categories (up to $1,500/quarter spend, must activate). Estimate annual points value.", min: 0, max: 300, default: 40, comment: "Max $300/yr if you spend $1,500 in each quarter's category at 1¢/pt. Same rotating categories as the Freedom Flex." },
    { name: "1% on Everything Else", desc: "1 UR pt/$1 on all other purchases, no cap. Estimate annual points value.", min: 0, max: 1000, default: 0, comment: "Points value depends on redemption: 1¢ cash back, 1.25¢ via Sapphire Preferred travel, 1.5¢ via Sapphire Reserve travel, or transfer to partners for potentially more." },

    // Purchase Protection
    { section: "Purchase Protection", name: "Auto Rental Coverage", desc: "Secondary collision/theft coverage when you decline the rental company's insurance", min: 0, max: 100, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $500 per item", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'chase-freedom',
    detailUrl: 'chase-freedom.html',
    name: 'Chase Freedom®',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Cash Back', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: 'N/A (not accepting new applications)',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
