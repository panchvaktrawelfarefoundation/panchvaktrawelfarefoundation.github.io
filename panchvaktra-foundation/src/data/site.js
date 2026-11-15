// Real content, photographs and names for Panchvaktra Human Welfare Foundation.
export const brand = {
  name: "Panchvaktra Human Welfare Foundation",
  short: "Panchvaktra Foundation",
  tagline: "Selfless beyond Selflessness",
  pillars: "Building Dignity. Creating Opportunities. Strengthening Lives.",
  emblem: "/logos/ngo_watermark.png",
  logo: "/logos/logo.png",
  email: "panchvaktrafoundation@gmail.com",
  instagram: "https://www.instagram.com/panchvaktrafoundation_org/",
  facebook: "https://facebook.com",
  cin: "U88900DC2026NPL475951",
  darpan: "DL/2026/1249611",
};

export const heroBackdrop = "/logos/logo.png";

export const headPortrait = "/team/team_member_1.webp";

export const scrollImages = [
  {
    src: "/scrollimage/PV%203.jpeg",
    alt: "Children at a Panchvaktra celebration",
    caption: "Celebrations with children",
  },
  {
    src: "/scrollimage/PV%201.jpeg",
    alt: "A Panchvaktra volunteer sitting with children",
    caption: "Time spent with our volunteers",
  },
  {
    src: "/scrollimage/PV%202.jpeg",
    alt: "Children cutting a birthday cake together",
    caption: "Small joys, shared together",
  },
];

export const gallery = [
  ["PV%201", "Education & Care", "Glimpses with children at a Panchvaktra learning session"],
  ["PV%202", "Joyful Learning", "Children learning together"],
  ["PV%203", "Hope & Dignity", "Moments of dignity with the families we serve"],
  ["PV%204", "Community Smiles", "Together we make a difference"],
  ["PV%205", "Birthday of Hope", "A birthday filled with love"],
  ["PV%206", "Community Nutrition", "Serving children a community meal"],
  ["PV%207", "Shared Meals", "Meal sharing with families"],
  ["PV%208", "Serving with Care", "Serving children with devotion"],
  ["PV%209", "On-Field Drive", "An on-field food distribution drive"],
  ["PV%2010", "Kanya Pujan Seva", "Navratri Kanya Pujan drive for 300 children"],
  ["PV%2011", "Joyful Mealtime", "The joy of a nutritious meal"],
  ["PV%2012", "Nourishing Smiles", "Children with nourishing smiles"],
  ["PV%2013", "Pure Happiness", "Little dreams and pure happiness"],
  ["PV%2014", "Dedicated Seva", "Mission leaders and volunteers at work"],
  ["PV%2015", "Community Unity", "Felicitation and support drive with the community"],
  ["PV%2016", "Nourishing Children", "A fresh meal distribution drive for children"],
].map(([file, title, alt]) => ({
  src: `/gallery/${file}.webp`,
  title,
  alt,
}));

export const coreTeam = [
  { name: "Ambuj Bharadwaj", role: "President", photo: "/team/team_member_1.webp" },
  { name: "Anant Kiran", role: "Secretary", photo: "/team/team_member_2.webp" },
  { name: "Sandhya Kumari", role: "Treasurer", photo: "/team/team_member_3.webp" },
  { name: "Vishal Jha", role: "IT Department", photo: "/team/team_member_4.webp" },
  { name: "Hariom Choudhary", role: "Trustee", photo: "/team/team_member_5.webp" },
];

export const members = [
  { name: "Avinash Kr Mishra", role: "Research & Planning", photo: "/Members/member_1.webp" },
  { name: "Neha Patwal", role: "Human Resources", photo: "/Members/member_2.webp" },
  { name: "Roshni Mahajan", role: "Finance Officer", photo: "/Members/member_3.webp" },
  { name: "Ajay Kr Roy", role: "Media Advisor", photo: "/Members/member_4.webp" },
  { name: "Anjali Anand Mishra", role: "Logistic Manager", photo: "/Members/member_5.webp" },
  { name: "Jyoti Kumari", role: "Social Media", photo: "/Members/member_6.webp" },
];

export const values = [
  {
    name: "Paropkar",
    hindi: "प्रोपकार",
    subtitle: "The Spirit of Selfless Service",
    quote: "सेवा में समर्पण, मानवता के लिए अर्पण।",
    body: "Serving humanity with compassion, kindness and selflessness — supporting vulnerable families and encouraging a culture where helping others becomes a shared responsibility.",
  },
  {
    name: "Priti",
    hindi: "प्रीति",
    subtitle: "Love, Affection and Belonging",
    quote: "अपनापन, स्नेह और सम्मान।",
    body: "Support goes beyond material assistance. We foster emotional well-being, meaningful human connections and social acceptance, so families feel welcomed and respected.",
  },
  {
    name: "Pradan",
    hindi: "प्रदान",
    subtitle: "The Act of Giving",
    quote: "हर योगदान, किसी के जीवन में नई उम्मीद।",
    body: "Sharing resources and extending meaningful assistance — essential supplies, educational materials and other support, according to each family's need.",
  },
  {
    name: "Prayatna",
    hindi: "प्रयत्न",
    subtitle: "Effort, Commitment and Perseverance",
    quote: "हर प्रयास, बेहतर भविष्य की ओर।",
    body: "Sincere effort and determination in the pursuit of a better life — creating opportunities in education, skill development, employment and personal growth.",
  },
  {
    name: "Pragati",
    hindi: "प्रगति",
    subtitle: "Progress, Growth and Empowerment",
    quote: "सशक्त जीवन, उज्ज्वल भविष्य।",
    body: "Helping individuals and families build sustainable futures through education, vocational skills, employment and financial independence.",
  },
];

export const programs = [
  {
    slug: "education",
    title: "Child Education & Learning Support",
    image: "/gallery/PV%201.webp",
    body: "Educational guidance, school materials and steady encouragement so children from vulnerable and underprivileged families can stay in school and keep progressing.",
    alt: "Children at a Panchvaktra education and care session",
  },
  {
    slug: "nutrition",
    title: "Nutrition & Community Meals",
    image: "/gallery/PV%206.webp",
    body: "Freshly cooked meals and nutrition distribution at our weekly on-field drives — because a full plate is where dignity begins.",
    alt: "Children served a community meal",
  },
  {
    slug: "festival-seva",
    title: "Kanya Pujan & Festival Seva",
    image: "/gallery/PV%2010.webp",
    body: "Festival drives that bring children together with prasad, meals and celebration — including our Navratri Kanya Pujan drive for 300 children.",
    alt: "Navratri Kanya Pujan drive for 300 children",
  },
  {
    slug: "relief",
    title: "Family Relief & Humanitarian Aid",
    image: "/gallery/PV%2015.webp",
    body: "Essential support and relief supplies for vulnerable families and underserved communities, helping them rebuild safer, more stable lives.",
    alt: "Community support and felicitation drive",
  },
  {
    slug: "livelihood",
    title: "Skills & Livelihood",
    image: "/gallery/PV%2012.webp",
    body: "Guidance towards skill development, employment and financial independence, so families can move from short-term help to lasting stability.",
    alt: "Children and volunteers at a Panchvaktra drive",
  },
];

export const states = ["Rajasthan", "Bihar", "Delhi", "Gujarat"];

export const voices = [
  {
    quote:
      "For me, serving society means standing beside people when they need support. I want to help connect families with community resources, encourage participation, and spread awareness about opportunities that can improve their lives.",
    name: "Ananya Mishra",
    initiative: "Prayatna · Educational guidance",
  },
  {
    quote:
      "A little kindness and a willingness to listen can make someone feel less alone. I hope to contribute to a welcoming environment where families feel respected, valued, and connected to the wider community.",
    name: "Aditya Singh",
    initiative: "Paropkar · Community outreach",
  },
  {
    quote:
      "Giving is not only about money; it is also about sharing time, knowledge, and resources. I want to help bring willing contributors and genuine community needs together so that support reaches people responsibly.",
    name: "Neha Sharma",
    initiative: "Priti · Emotional support and inclusion",
  },
];

export const faqs = [
  {
    q: "What is the primary mission of Panchvaktra Foundation?",
    a: "Panchvaktra is a humanitarian non-profit dedicated to providing nutrition, healthcare, educational guidance and relief to vulnerable children and families rebuilding their lives.",
  },
  {
    q: "Who does the foundation support?",
    a: "Underprivileged children, vulnerable families, underserved communities, and anyone in urgent need of humanitarian care, nutrition, healthcare, and educational support.",
  },
  {
    q: "How are donations used?",
    a: "Contributions go towards school materials, daily nutrition, relief supplies, healthcare support and the running of our weekly on-field drives.",
  },
  {
    q: "Where does the foundation work?",
    a: "Direct humanitarian assistance, child education camps and nutrition distribution across Rajasthan, Bihar, Delhi and Gujarat.",
  },
  {
    q: "How can someone in urgent need contact you for help?",
    a: "Anyone seeking shelter, educational aid or child welfare assistance can write to us through the contact page, and our team will respond as soon as possible.",
  },
  {
    q: "How can I volunteer?",
    a: "Send us a volunteer application with your area of interest and availability. Our team reviews every application and gets in touch.",
  },
];