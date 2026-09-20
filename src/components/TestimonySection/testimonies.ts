export interface Testimony {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  industry: string;
  geography: string;
  systemDeployed: string;
}

export const TESTIMONIES: Testimony[] = [
  {
    id: 'rajput-bhavin',
    quote:
      "The Prospect Engine they designed and deployed at ours was a game changer. These people are really good at understanding where AI fits into businesses. Their knowledge in operational use of AI is exceptional, one of the best I have seen in India lately.",
    name: 'Rajput Bhavin',
    role: 'Founder',
    company: 'Rajput Bhavin Engineering',
    companyUrl: 'https://rajputbhavin.engineer',
    industry: 'Software / IT Services',
    geography: 'Gujarat',
    systemDeployed: 'Prospect Engine',
  },
  {
    id: 'ruchika-jain',
    quote:
      "MAD has a great eye for design and detail, their work and systems are amazing, I admire the technical depth and operational knowledge they bring to my business. Quality people. Quality work.",
    name: 'Ruchika Jain',
    role: 'Operations Head',
    company: 'ADECA Pharmaceuticals',
    companyUrl: 'https://adecapharmaceuticals.com',
    industry: 'Pharmaceutical',
    geography: 'Gujarat',
    systemDeployed: 'Batch Manufacturing Record Automation',
  },
];
