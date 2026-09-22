# Trade page fact logs

Every factual claim on /trades/[slug]/ pages (data/trade-types.ts) is backed by a
source listed in that trade's `sources` array. These logs record, for each claim,
the page fetched and the sentence that supports it (researched 22 September 2026).

- facts-A.md: plumbers, gasfitters, drain-layers, irrigation-specialists, hvac-technicians
- facts-B.md: electricians, welders, arborists, scaffolders, glaziers
- facts-C.md: painters, plasterers, tilers, roofers, bricklayers
- facts-D.md: carpenters-woodworkers, concreters, handymen, landscapers, fencers
- builders: sources are in its data entry (MBIE, LBP).

Rule: if a claim cannot be traced to a source here or in `sources`, delete it.
Recheck gasfitters after 12 November 2026 (Gas (Safety and Measurement)
Amendment Regulations 2025 take effect).
