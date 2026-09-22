/**
 * The only insurance price on this site that comes from a named, checkable
 * source. Everything else shown as a price is an indicative range and is
 * labelled as one.
 *
 * Why this exists: the site used to publish per-trade figures ("public
 * liability from $26.83/month") with nothing behind them. Insurers do not
 * publish per-trade rates, so the honest version is one published bundle
 * price, attributed, plus the factors that actually move a premium.
 *
 * Checked 22 September 2026. Re-check the AMI page before quoting it again.
 */
export const publishedFrom = {
  price: '$19 a week',
  product: 'AMI Tradies Bundle',
  covers: 'tools and equipment to $10,000 and $2M public liability',
  basis:
    'AMI\'s published price for its Tradies Bundle, including GST, based on the most common occupations. AMI states pricing depends on claims and legal history, occupation and location, and that regional differences apply.',
  url: 'https://www.ami.co.nz/business/tradies',
  checked: '22 September 2026',
}

export const INDICATIVE_NOTE =
  'Indicative only, not a quote. Premiums are set by each insurer on your trade, turnover, cover limits and claims history.'
