// Investor Relations — all document rows, fact grids, and status flags live here.
// To publish a document: change status to 'live' and set href to the real PDF path
// under /public/documents/... To mark something not applicable, use status 'na'.
// To mark something that only applies during an active public issue, use 'conditional'.

export const overviewFacts = [
  { label: 'Nature of Business', value: 'Ship recycling & dismantling' },
  { label: 'Registered Office', value: 'Bhavnagar, Gujarat' },
  { label: 'CIN', value: 'U74999GJ2018PLC102791'},
]

export const overviewDocs = [
  { name: 'Memorandum of Association (MOA)', desc: 'Object clause & constitutional scope of the company', provision: 'Reg. 46(2)(aa)', status: 'live', href: '/documents/governance/E_MOA_1-25423949973-S.pdf' },
  { name: 'Articles of Association (AOA)', desc: 'Internal governance rules of the company', provision: 'Reg. 46(2)(aa)', status: 'live', href: '/documents/governance/E_AOA_1-25423949980-S.pdf' },
  { name: 'Name change history', desc: 'Old & new name, if changed within the last year', provision: 'Reg. 46(2)(p)', status: 'pending', href: null }, // ← flipped from 'na' — confirm details, see note above
]

export const statutoryDocs = [
  { name: 'Certificate of Incorporation', provision: 'Companies Act, Sec. 7', status: 'live', href: '/documents/statutory/CERTIFICATE OF INCORPORATION.pdf' },
  { name: 'GST Registration Certificate', provision: 'GST Act', status: 'live', href: '/documents/statutory/GST CERTIFICATE.pdf' },
  { name: 'Class NK Certificate', desc: 'Classification society certification for ship recycling', provision: 'Class NK', status: 'live', href: '/documents/statutory/CLASS NK CERTIFICATE_NEW.pdf' },
  { name: 'SRIA Membership Certificate', desc: 'Ship Recycling Industries Association membership', provision: 'SRIA', status: 'live', href: '/documents/statutory/SRIA MEMBERSHIP CERTIFICATE.pdf' },
]

export const governanceCommittees = [
  { name: 'Audit Committee', chair: '—', members: '—' },
  { name: 'Nomination & Remuneration Committee', chair: '—', members: '—' },
  { name: 'Stakeholders Relationship Committee', chair: '—', members: '—' },
  { name: 'CSR Committee', chair: '—', members: '—' },
]

export const governanceRoles = ['Chairman & Managing Director', 'Independent Director', 'Whole-time Director']

export const boardOfDirectors = [
  { name: 'Ashok Gupta', role: 'Director', photo: '/img/team/ashok-gupta.jpg' },
  { name: 'Sahil Gupta', role: 'Director', photo: '/img/team/sahil-gupta.jpg' },
  { name: 'Shama Gupta', role: 'Director', photo: '/img/team/shama-gupta.jpg' },
]

export const seniorManagement = [
  { name: 'Shrishti Gupta', role: 'Senior Management', photo: '/img/team/shrishti-gupta.jpg' },
  { name: 'Sugandh Gupta', role: 'Senior Management', photo: '/img/team/sugandh-gupta.jpg' },
]

export const governanceDocs = [
  { name: 'Terms & conditions of appointment — Independent Directors', provision: 'Reg. 46(2)(b)', status: 'pending', href: null },
  { name: 'Code of Conduct — Board & senior management', provision: 'Reg. 46(2)(d)', status: 'pending', href: null },
  { name: 'Familiarisation programme — Independent Directors', desc: 'Sessions attended, hours logged (annual & cumulative)', provision: 'Reg. 46(2)(i)', status: 'pending', href: null },
  { name: 'Criteria for payment to non-executive directors', desc: 'Required only if not already disclosed in the Annual Report', provision: 'Reg. 46(2)(f)', status: 'conditional', href: null },
  { name: 'KMP designated for materiality determination', desc: 'Name & contact of the officer authorised to assess materiality of events', provision: 'Reg. 30(5) / 46(2)(v)', status: 'pending', href: null },
]

export const policyDocs = [
  { name: 'Anti-Bribery & Anti-Corruption Policy', provision: 'Board-approved', status: 'live', href: '/documents/policies_and_codes/1.Anti_Bribery_Anti_Corruption_Policy.pdf' },
  { name: 'Anti-Money Laundering Policy', provision: 'Board-approved', status: 'live', href: '/documents/policies_and_codes/2.Anti_Money_Laundering_Policy.pdf' },
  { name: 'Board Diversity Policy', provision: 'Board-approved', status: 'live', href: '/documents/policies_and_codes/3.Board_Diversity_Policy.pdf' },
  { name: 'Code of Conduct', provision: 'Reg. 46(2)(d)', status: 'live', href: '/documents/policies_and_codes/4.Code_of_Conduct.pdf' },
  { name: 'Code of Practices and Procedure for Fair Disclosure of UPSI', provision: 'SEBI (PIT) Regulations', status: 'live', href: '/documents/policies_and_codes/5.Code_of_Practices_and_Procedure_of_Fair_Disclosure_of_UPSI.pdf' },
  { name: 'CSR Policy', provision: 'CSR Policy Rules 2014, Rule 9', status: 'live', href: '/documents/policies_and_codes/6. CSR_Policy.pdf' },
  { name: 'Dividend Distribution Policy', desc: 'Applicable once among the top 1,000 listed entities by market cap', provision: 'Reg. 43A / 46(2)(y)', status: 'live', href: '/documents/policies_and_codes/7.Dividend_Distribution_Policy final.pdf' },
  { name: 'Familiarisation Programme for Independent Directors', desc: 'Sessions attended, hours logged (annual & cumulative)', provision: 'Reg. 46(2)(i)', status: 'live', href: '/documents/policies_and_codes/8.Familiarization_Program_for_Independent_Directors. final.pdf' },
  { name: 'Internal Procedures and Conduct for Prevention', provision: 'Board-approved', status: 'live', href: '/documents/policies_and_codes/9.Internal_Procedures_and_Conduct for Prevention.pdf' },
  { name: 'Material Related Party Transaction Policy', provision: 'Reg. 46(2)(g)', status: 'live', href: '/documents/policies_and_codes/10.Material_Related_Party_Transaction.pdf' },
  // { name: 'Materiality Policy', provision: 'Reg. 30(4)(ii) / 46(2)(u)', status: 'live', href: '/documents/policies_and_codes/11.Materiality_Policy.pdf' },
  { name: 'Nomination and Remuneration Policy', provision: 'Companies Act, Sec. 178', status: 'live', href: '/documents/policies_and_codes/12.Nomination and Remuneration.pdf' },
  { name: 'Policy for Determination of Material Subsidiary', provision: 'Reg. 46(2)(h)', status: 'live', href: '/documents/policies_and_codes/13.Policy_for_Determination_of_Material_Subsidiary. final.pdf' },
  { name: 'Policy on Disclosure of Material Events and Information', provision: 'Reg. 30(4)(ii) / 46(2)(u)', status: 'live', href: '/documents/policies_and_codes/14. Policy_on_Disclosure of Material Events and Information. final.pdf' },
  { name: 'Policy on Prevention of Sexual Harassment at Workplace', provision: 'POSH Act, 2013', status: 'live', href: '/documents/policies_and_codes/15.Policy_on_Prevention of Sexual Harrasment at Workplace. final.pdf' },
  { name: 'Preservation of Records Policy', provision: 'Reg. 30(8)', status: 'live', href: '/documents/policies_and_codes/16.Preservation_of_Records. final.pdf' },
  { name: 'Risk Management Policy', provision: 'Board-approved', status: 'live', href: '/documents/policies_and_codes/17.Risk_Management_Policy. final.pdf' },
  { name: 'Succession Plan', provision: 'Board-approved', status: 'live', href: '/documents/policies_and_codes/18.Succession_Plan. final.pdf' },
  { name: 'Terms and Conditions of Appointment of Independent Directors', provision: 'Reg. 46(2)(b)', status: 'live', href: '/documents/policies_and_codes/19.Terms_and_Conditions of Appointment of Independent Directors. final.pdf' },
  { name: 'Whistle Blower Policy', provision: 'Reg. 46(2)(e)', status: 'live', href: '/documents/policies_and_codes/20.Whistle_blower_Policy. final.pdf' },
]

export const financialDocs = [
  { name: 'Standalone audited financials — last 3 years', provision: 'ICDR Sch. VI, Para 11(I)(A)(ii)', status: 'pending', href: null },
  { name: 'Material subsidiary financials — last 3 years', desc: 'No subsidiary as of date — retained for future use', provision: 'ICDR Sch. VI, Para 11(I)(A)(ii)', status: 'na', href: null },
  { name: 'Annual Report 2024-25', desc: "Balance sheet, P&L, Director's Report, Corporate Governance Report", provision: 'Reg. 46(2)(l) / 34(1)(a)', status: 'live', href: '/documents/annual-reports/RGSR_ANNUAL REPORT_2024-25.pdf' },
  { name: 'Annual Report 2023-24', desc: "Balance sheet, P&L, Director's Report, Corporate Governance Report", provision: 'Reg. 46(2)(l) / 34(1)(a)', status: 'live', href: '/documents/annual-reports/RGSR_ANNUAL REPORT_2023-24.pdf' },
  { name: 'Annual Report 2022-23', desc: "Balance sheet, P&L, Director's Report, Corporate Governance Report", provision: 'Reg. 46(2)(l) / 34(1)(a)', status: 'live', href: '/documents/annual-reports/RGSR_ANNUAL REPORT_2022-23.pdf' },
  { name: 'Annual Return', provision: 'Sec. 92(3) / Reg. 46(2)(z)', status: 'pending', href: null },
  { name: 'Secretarial Compliance Report', provision: 'Reg. 24A(2) / 46(2)(t)', status: 'pending', href: null },
  { name: 'Related Party Transactions — disclosure', provision: 'Reg. 23(9)', status: 'pending', href: null },
  { name: 'Closure of register of members / debenture holders', provision: 'Companies (Mgmt. & Admin.) Rules, r.10', status: 'pending', href: null },
]

export const groupCompanyFinancials = [
  {
    company: 'Rudra Global Infra Products Limited', // confirm actual entity name
    docs: [
      { name: 'Rudra Global Infra Products Limited — Annual Account 2025-26', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/Annual Account_2025-26.pdf' },
      { name: 'Rudra Global Infra Products Limited — Annual Account 2024-25', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/Annual Account_2024-25.pdf' },
      { name: 'Rudra Global Infra Products Limited — Annual Account 2023-24', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/Annual Account_2023-24.pdf' },
    ],
  },
  {
    company: 'Ekantra Global Retails Private Limited', // confirm full entity name
    docs: [
      { name: 'Ekantra Global Retails Private Limited — FY 2024-25', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/EKANTRA_2024-25.pdf' },
      { name: 'Ekantra Global Retails Private Limited — FY 2023-24', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/EKANTRA_2023-24.pdf' },
    ],
  },
  {
    company: 'YSR Building Solutions Private Limited', // confirm full entity name
    docs: [
      { name: 'YSR Building Solutions Private Limited — Audit Report — FY 2024-25', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/YSR AUDIT REPORT_2024-25.pdf' },
      { name: 'YSR Building Solutions Private Limited — Audit Report — FY 2023-24', provision: 'Sch. VI, Para 13(A)', status: 'live', href: '/documents/annual-reports/group-company-finicial/YSR AUDIT REPORT_2023-24.pdf' },
    ],
  },
]

export const shareholdingPattern = {
  note: 'Shareholding Pattern — @ Face Value Rs. 5',
  rows: [
    { name: 'Sonthalia Steel Re-Rolling Mills Pvt. Ltd.', shares: '1,20,00,000', pct: '40%' },
    { name: 'Ashok Jagdishram Gupta', shares: '45,00,000', pct: '15%' },
    { name: 'Shamarani Ashokkumar Gupta', shares: '45,00,000', pct: '15%' },
    { name: 'Shrishti Nikhil Gupta', shares: '45,00,000', pct: '15%' },
    { name: 'Sahil Ashokkumar Gupta', shares: '41,58,000', pct: '13.86%' },
    { name: 'Sahil Ashokkumar Gupta (HUF)', shares: '42,000', pct: '0.14%' },
    { name: 'Sugandh Gupta', shares: '3,00,000', pct: '1%' },
  ],
  total: { shares: '3,00,00,000', pct: '100%' },
}

export const regulatoryDocs = [
  { name: 'Statement of deviation (quarterly)', provision: 'Reg. 46(2)(x) / Reg. 32', status: 'pending', href: null },
  { name: 'Credit rating — outstanding instruments', provision: 'Reg. 46(2)(r)', status: 'conditional', href: null },
  { name: 'Agreements with media companies & associates', provision: 'Reg. 46(2)(n)', status: 'conditional', href: null },
  { name: 'Analyst / institutional investor meet schedule', provision: 'Reg. 46(2)(o)', status: 'conditional', href: null },
  { name: 'Earnings-call recordings & transcripts', desc: 'Audio within 24h · video within 48h · transcript within 5 working days', provision: 'Reg. 46(2)(oa)', status: 'conditional', href: null },
]

export const offerDocs = [
  { name: 'DRHP / RHP / Prospectus', desc: 'Draft Red Herring Prospectus, dated September 30, 2026', provision: 'Regulation 26', status: 'live', href: '/documents/offer-document/DRHP Rudra Green Ship Recycling Limited_September 30, 2026.pdf' },
  { name: 'Industry Report', provision: 'AIBI guidance, Oct 2021', status: 'live', href: '/documents/offer-document/IAL - Ship Recycling Industry_Clean Version_29092026.pdf'  },
  { name: 'Monitoring Agency Report', desc: 'Filed within 45 days of each quarter-end, post-issue', provision: 'Regulation 41', status: 'conditional', href: null },
  { name: 'Outstanding overdues to material creditors', provision: 'Sch. VI, Para 12(A)(2)(iii)', status: 'conditional', href: null },
  { name: 'Group company financial line items (top 5)', provision: 'Sch. VI, Para 13(A)', status: 'conditional', href: null },
  { name: 'Material contracts & documents', desc: 'Available for inspection from RHP filing through bid/offer close', provision: 'Sch. VI, Para 18(3)', status: 'conditional', href: null },
]

export const grievanceFacts = [
  { label: 'Grievance Email', value: '', href: 'mailto:investors@rudragreenshiprecycling.com', flag: 'to be added' },
  { label: 'Designated Grievance Officer', value: '[ Name, designation ]', flag: 'to be added' },
  { label: 'Registrar & Transfer Agent (RTA)', value: '[ Name, contact ]', flag: 'to be added' },
  { label: 'IEPF Nodal Officer', value: '[ Name, contact ]', flag: 'to be added' },
  { label: 'Registered Office', value: 'Bhavnagar, Gujarat' },
  { label: 'CIN', value: 'U74999GJ2018PLC102791' },
]

// The 45-item disclosure index. `target` must match a section id in IRSections.astro.
export const disclosureIndex = [
  { no: 1, info: 'Standalone audited financials — 3 years', reg: 'ICDR Sch. VI, Para 11(I)(A)(ii)', section: 'IV. Financials', target: 'ir-financials', status: 'pending' },
  { no: 2, info: 'Material subsidiary financials — 3 years', reg: 'ICDR Sch. VI, Para 11(I)(A)(ii)', section: 'IV. Financials', target: 'ir-financials', status: 'na' },
  { no: 3, info: 'Overdues to material creditors', reg: 'Sch. VI, Para 12(A)(2)(iii)', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'conditional' },
  { no: 4, info: 'Industry Report', reg: 'AIBI email, 22 Oct 2021', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'live' },
  { no: 5, info: 'DRHP / RHP / Prospectus', reg: 'Regulation 26', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'live' },
  { no: 6, info: 'Monitoring Agency Report (quarterly)', reg: 'Regulation 41', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'conditional' },
  { no: 7, info: 'Group co. financials by market cap — 3 yrs', reg: 'Sch. VI, Clause 13(A)', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'conditional' },
  { no: 8, info: 'Material contracts & documents', reg: 'Sch. VI, Para 18(3)', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'conditional' },
  { no: 9, info: 'Top-5 group company financial line items', reg: 'Sch. VI, Para 13(A)', section: 'VII. Offer Doc.', target: 'ir-offer', status: 'conditional' },
  { no: 10, info: 'Archival Policy', reg: 'Regulation 30(8)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 11, info: 'Policy on materiality of events/information', reg: 'Reg. 30(4)(ii)/46(2)(u)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 12, info: 'KMP for dealing with materiality', reg: 'Reg. 30(5)/46(2)(v)', section: 'II. Governance', target: 'ir-governance', status: 'pending' },
  { no: 13, info: 'Annual Report + AGM notice', reg: 'Regulation 34(1)(a)', section: 'IV. Financials', target: 'ir-financials', status: 'live' },
  { no: 14, info: 'Details of the business', reg: 'Reg. 46(2)(a)', section: 'I. Overview', target: 'ir-overview', status: 'live' },
  { no: 15, info: 'MOA & AOA', reg: 'Reg. 46(2)(aa)', section: 'I. Overview', target: 'ir-overview', status: 'live' },
  { no: 16, info: 'Board of directors — profiles & directorships', reg: 'Reg. 46(2)(ab)', section: 'II. Governance', target: 'ir-governance', status: 'pending' },
  { no: 17, info: 'Terms of appointment — Independent Director', reg: 'Reg. 46(2)(b)', section: 'II. Governance', target: 'ir-governance', status: 'live' },
  { no: 18, info: 'Composition of board committees', reg: 'Reg. 46(2)(c)', section: 'II. Governance', target: 'ir-governance', status: 'pending' },
  { no: 19, info: 'Code of Conduct — board & senior management', reg: 'Reg. 46(2)(d)', section: 'II. Governance', target: 'ir-governance', status: 'pending' },
  { no: 20, info: 'Vigil Mechanism / Whistle Blower Policy', reg: 'Reg. 46(2)(e)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 21, info: 'Criteria for payment to non-exec directors', reg: 'Reg. 46(2)(f)', section: 'II. Governance', target: 'ir-governance', status: 'conditional' },
  { no: 22, info: 'Related Party Transactions policy', reg: 'Reg. 46(2)(g)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 23, info: 'Policy for determining material subsidiaries', reg: 'Reg. 46(2)(h)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 24, info: 'Independent director familiarisation programme', reg: 'Reg. 46(2)(i)', section: 'II. Governance', target: 'ir-governance', status: 'live' },
  { no: 25, info: 'Grievance redressal email', reg: 'Reg. 46(2)(j)', section: 'VIII. Grievance', target: 'ir-grievance', status: 'pending' },
  { no: 26, info: 'Contact for designated grievance officials', reg: 'Reg. 46(2)(k)', section: 'VIII. Grievance', target: 'ir-grievance', status: 'pending' },
  { no: 27, info: 'Board meeting notices & financial results', reg: 'Reg. 46(2)(l)', section: 'IV. Financials', target: 'ir-financials', status: 'pending' },
  { no: 28, info: 'Shareholding pattern', reg: 'Reg. 46(2)(m)', section: 'V. Shareholding', target: 'ir-shareholding', status: 'live' },
  { no: 29, info: 'Agreements with media companies', reg: 'Reg. 46(2)(n)', section: 'VI. Regulatory', target: 'ir-regulatory', status: 'conditional' },
  { no: 30, info: 'Analyst / institutional investor meet schedule', reg: 'Reg. 46(2)(o)', section: 'VI. Regulatory', target: 'ir-regulatory', status: 'conditional' },
  { no: 31, info: 'Earnings call recordings, video & transcripts', reg: 'Reg. 46(2)(oa)', section: 'VI. Regulatory', target: 'ir-regulatory', status: 'conditional' },
  { no: 32, info: 'Old / new name (post name-change, 1 year)', reg: 'Reg. 46(2)(p)', section: 'I. Overview', target: 'ir-overview', status: 'na' },
  { no: 33, info: 'Credit rating for outstanding instruments', reg: 'Reg. 46(2)(r)', section: 'VI. Regulatory', target: 'ir-regulatory', status: 'conditional' },
  { no: 34, info: 'Secretarial Compliance Report', reg: 'Reg. 46(2)(t)', section: 'IV. Financials', target: 'ir-financials', status: 'live' },
  { no: 35, info: 'Contact — KMP authorised for materiality', reg: 'Reg. 30(5)/46(2)(v)', section: 'II. Governance', target: 'ir-governance', status: 'pending' },
  { no: 36, info: 'Statement of deviation (quarterly)', reg: 'Reg. 46(2)(x)/32', section: 'VI. Regulatory', target: 'ir-regulatory', status: 'pending' },
  { no: 37, info: 'Dividend Distribution Policy', reg: 'Reg. 43A/46(2)(y)', section: 'III. Policies', target: 'ir-policies', status: 'conditional' },
  { no: 38, info: 'Related party transaction details', reg: 'Regulation 23(9)', section: 'IV. Financials', target: 'ir-financials', status: 'pending' },
  { no: 39, info: 'Employee Benefit Scheme documents', reg: 'Reg. 46(2)(za)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 40, info: 'Insider Trading Policy', reg: 'PIT Regulation 8(1)', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 41, info: 'Director / KMP qualification & remuneration policy', reg: 'Companies Act, Sec. 178', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 42, info: 'CSR Policy & approved projects', reg: 'CSR Rules 2014, r.9', section: 'III. Policies', target: 'ir-policies', status: 'live' },
  { no: 43, info: 'Annual Return', reg: 'Sec. 92(3)/46(2)(z)', section: 'IV. Financials', target: 'ir-financials', status: 'pending' },
  { no: 44, info: 'Closure of register of members/debenture holders', reg: 'Mgmt. & Admin. Rules, r.10', section: 'IV. Financials', target: 'ir-financials', status: 'pending' },
  { no: 45, info: 'Registered office, CIN, phone, email, grievance contact on landing page', reg: 'Sec. 12 / Rule 26(1)', section: 'VIII. Grievance', target: 'ir-grievance', status: 'pending' },
]