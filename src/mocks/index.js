import { Scale, Speed, Diversity, Budget } from 'svg';

export const statistics = [
  { number: 250000, label: 'Reported bugs' },
  { number: 50000, label: 'Tester community' },
  { number: 10000, label: 'Testing devices' },
];

export const apps = [
  { title: 'AirBnb', img: 'airbnb' },
  { title: 'Bolt (Taxify)', img: 'bolt' },
  { title: 'Fortnite', img: 'fortnite' },
  { title: 'InVision', img: 'invision' },
  { title: 'NTC', img: 'ntc' },
  { title: 'SoundCloud', img: 'soundcloud' },
  { title: 'Twitch', img: 'twitch' },
  { title: 'YouTube', img: 'youtube' },
  { title: 'Bershka', img: 'bershka' },
  { title: 'Buzzfeed', img: 'buzzfeed' },
  { title: 'Destiny', img: 'destiny-knights' },
  { title: 'Google', img: 'google-duo' },
  { title: 'LC Waikiki', img: 'lc-waikiki' },
  { title: 'Peloton', img: 'peloton' },
  { title: 'Souq.com', img: 'souq.com' },
  { title: 'Zaful', img: 'zaful' },
  { title: 'BetterMe', img: 'betterme' },
  { title: 'Canva', img: 'canva' },
  { title: 'DTC', img: 'dtc' },
  { title: 'Headspace', img: 'headspace' },
  { title: 'Renorun', img: 'renorun' },
  { title: 'Spotify', img: 'spotify' },
  { title: 'Vimeo', img: 'vimeo' },
  { title: 'Blinkist', img: 'blinkist' },
  { title: 'Coin', img: 'coin-master' },
  { title: 'Eventbrite', img: 'eventbrite' },
  { title: 'Instories', img: 'instories' },
  { title: 'Noon', img: 'noon' },
  { title: 'Snapchat', img: 'snapchat' },
  { title: 'Wizz Air', img: 'wizz-air' },
];

export const solution_page_app_sizes = {
  mobile: [33, 41, 51, 41, 33],
  desktop: [112, 147, 194, 147, 112],
};
export const referral_partners = [
  { label: 'Techstars', value: 'Techstars' },
  { label: '500 Startups', value: '500 Startups' },
  { label: 'Y combinator', value: 'Y combinator' },
  { label: 'Sequoia Capital', value: 'Sequoia Capital' },
  { label: 'SOSV', value: 'SOSV' },
  { label: 'New Enterprise Associates (NEA)', value: 'New Enterprise Associates (NEA)' },
  { label: 'The Venture City', value: 'The Venture City' },
  { label: 'Wayra', value: 'Wayra' },
  { label: 'Afore', value: 'Afore' },
];

export const founding_year = Array.from(Array(new Date().getFullYear() + 1).keys()).slice(1990).map((value) => ({ label: value,value: value }));

export const countries = [
  { label: 'Worldwide', value: 'ww', data: { user_count: 43596, android_devices_count: 36850, ios_devices_count: 9413 }, slug: 'worldwide' },
  { label: 'Afghanistan', value: 'af', data: { user_count: 99, android_devices_count: 93, ios_devices_count: 10 }, slug: 'afghanistan' },
  { label: 'Albania', value: 'al', data: { user_count: 205, android_devices_count: 151, ios_devices_count: 63 }, slug: 'albania' },
  { label: 'Algeria', value: 'dz', data: { user_count: 1695, android_devices_count: 1615, ios_devices_count: 66 }, slug: 'algeria' },
  { label: 'Argentina', value: 'ar', data: { user_count: 105, android_devices_count: 55, ios_devices_count: 51 }, slug: 'argentina' },
  { label: 'Armenia', value: 'am', data: { user_count: 183, android_devices_count: 98, ios_devices_count: 114 }, slug: 'armenia' },
  { label: 'Australia', value: 'au', data: { user_count: 30, android_devices_count: 23, ios_devices_count: 10 }, slug: 'australia' },
  { label: 'Azerbaijan', value: 'az', data: { user_count: 2507, android_devices_count: 2176, ios_devices_count: 1240 }, slug: 'azerbaijan' },
  { label: 'Bangladesh', value: 'bd', data: { user_count: 1626, android_devices_count: 1480, ios_devices_count: 138 }, slug: 'bangladesh' },
  { label: 'Belgium', value: 'be', data: { user_count: 47, android_devices_count: 12, ios_devices_count: 46 }, slug: 'belgium' },
  { label: 'Benin', value: 'bj', data: { user_count: 46, android_devices_count: 43, ios_devices_count: 5 }, slug: 'benin' },
  { label: 'Bolivia', value: 'bo', data: { user_count: 63, android_devices_count: 38, ios_devices_count: 23 }, slug: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'ba', data: { user_count: 126, android_devices_count: 100, ios_devices_count: 28 }, slug: 'bosnia-and-herzegovina' },
  { label: 'Brazil', value: 'br', data: { user_count: 444, android_devices_count: 318, ios_devices_count: 134 }, slug: 'brazil' },
  { label: 'Bulgaria', value: 'bg', data: { user_count: 150, android_devices_count: 85, ios_devices_count: 70 }, slug: 'bulgaria' },
  { label: 'Cambodia', value: 'kh', data: { user_count: 279, android_devices_count: 193, ios_devices_count: 95 }, slug: 'cambodia' },
  { label: 'Cameroon', value: 'cm', data: { user_count: 97, android_devices_count: 92, ios_devices_count: 3 }, slug: 'cameroon' },
  { label: 'Canada', value: 'ca', data: { user_count: 73, android_devices_count: 65, ios_devices_count: 14 }, slug: 'canada' },
  { label: 'Chile', value: 'cl', data: { user_count: 56, android_devices_count: 26, ios_devices_count: 24 }, slug: 'chile' },
  { label: 'China', value: 'cn', data: { user_count: 36, android_devices_count: 20, ios_devices_count: 9 }, slug: 'china' },
  { label: 'Colombia', value: 'co', data: { user_count: 175, android_devices_count: 112, ios_devices_count: 51 }, slug: 'colombia' },
  { label: 'Costa Rica', value: 'cr', data: { user_count: 104, android_devices_count: 48, ios_devices_count: 55 }, slug: 'costa-rica' },
  { label: 'Croatia', value: 'hr', data: { user_count: 69, android_devices_count: 41, ios_devices_count: 26 }, slug: 'croatia' },
  { label: 'Cyprus', value: 'cy', data: { user_count: 39, android_devices_count: 11, ios_devices_count: 31 }, slug: 'cyprus' },
  { label: 'Czech Republic', value: 'cz', data: { user_count: 45, android_devices_count: 15, ios_devices_count: 43 }, slug: 'czech-republic' },
  { label: "Côte d'Ivoire", value: 'ci', data: { user_count: 152, android_devices_count: 135, ios_devices_count: 14 }, slug: "cote-d'ivoire" },
  { label: 'Democratic Republic of Congo', value: 'cd', data: { user_count: 34, android_devices_count: 35, ios_devices_count: 3 }, slug: 'democratic-republic-of-congo' },
  { label: 'Dominican Republic', value: 'do', data: { user_count: 227, android_devices_count: 162, ios_devices_count: 72 }, slug: 'dominican-republic' },
  { label: 'Ecuador', value: 'ec', data: { user_count: 155, android_devices_count: 72, ios_devices_count: 91 }, slug: 'ecuador' },
  { label: 'Egypt', value: 'eg', data: { user_count: 1414, android_devices_count: 1243, ios_devices_count: 134 }, slug: 'egypt' },
  { label: 'El Salvador', value: 'sv', data: { user_count: 71, android_devices_count: 45, ios_devices_count: 31 }, slug: 'el-salvador' },
  { label: 'Ethiopia', value: 'et', data: { user_count: 77, android_devices_count: 72, ios_devices_count: 1 }, slug: 'ethiopia' },
  { label: 'France', value: 'fr', data: { user_count: 103, android_devices_count: 67, ios_devices_count: 40 }, slug: 'france' },
  { label: 'Georgia', value: 'ge', data: { user_count: 265, android_devices_count: 190, ios_devices_count: 78 }, slug: 'georgia' },
  { label: 'Germany', value: 'de', data: { user_count: 129, android_devices_count: 110, ios_devices_count: 31 }, slug: 'germany' },
  { label: 'Ghana', value: 'gh', data: { user_count: 325, android_devices_count: 294, ios_devices_count: 36 }, slug: 'ghana' },
  { label: 'Greece', value: 'gr', data: { user_count: 57, android_devices_count: 29, ios_devices_count: 30 }, slug: 'greece' },
  { label: 'Guatemala', value: 'gt', data: { user_count: 116, android_devices_count: 48, ios_devices_count: 68 }, slug: 'guatemala' },
  { label: 'Guinea', value: 'gn', data: { user_count: 34, android_devices_count: 29, ios_devices_count: 1 }, slug: 'guinea' },
  { label: 'Haiti', value: 'ht', data: { user_count: 40, android_devices_count: 41, ios_devices_count: 2 }, slug: 'haiti' },
  { label: 'Honduras', value: 'hn', data: { user_count: 69, android_devices_count: 40, ios_devices_count: 30 }, slug: 'honduras' },
  { label: 'Hungary', value: 'hu', data: { user_count: 112, android_devices_count: 42, ios_devices_count: 80 }, slug: 'hungary' },
  { label: 'India', value: 'in', data: { user_count: 9445, android_devices_count: 8480, ios_devices_count: 898 }, slug: 'india' },
  { label: 'Indonesia', value: 'id', data: { user_count: 483, android_devices_count: 465, ios_devices_count: 11 }, slug: 'indonesia' },
  { label: 'Iraq', value: 'iq', data: { user_count: 1049, android_devices_count: 923, ios_devices_count: 152 }, slug: 'iraq' },
  { label: 'Israel', value: 'il', data: { user_count: 47, android_devices_count: 38, ios_devices_count: 28 }, slug: 'israel' },
  { label: 'Italy', value: 'it', data: { user_count: 126, android_devices_count: 71, ios_devices_count: 79 }, slug: 'italy' },
  { label: 'Jamaica', value: 'jm', data: { user_count: 42, android_devices_count: 30, ios_devices_count: 10 }, slug: 'jamaica' },
  { label: 'Jordan', value: 'jo', data: { user_count: 249, android_devices_count: 192, ios_devices_count: 72 }, slug: 'jordan' },
  { label: 'Kenya', value: 'ke', data: { user_count: 624, android_devices_count: 553, ios_devices_count: 31 }, slug: 'kenya' },
  { label: 'Kuwait', value: 'kw', data: { user_count: 52, android_devices_count: 47, ios_devices_count: 6 }, slug: 'kuwait' },
  { label: 'Laos', value: 'la', data: { user_count: 41, android_devices_count: 28, ios_devices_count: 12 }, slug: 'laos' },
  { label: 'Latvia', value: 'lv', data: { user_count: 48, android_devices_count: 22, ios_devices_count: 32 }, slug: 'latvia' },
  { label: 'Lebanon', value: 'lb', data: { user_count: 215, android_devices_count: 124, ios_devices_count: 93 }, slug: 'lebanon' },
  { label: 'Libya', value: 'ly', data: { user_count: 170, android_devices_count: 146, ios_devices_count: 18 }, slug: 'libya' },
  { label: 'Lithuania', value: 'lt', data: { user_count: 71, android_devices_count: 34, ios_devices_count: 40 }, slug: 'lithuania' },
  { label: 'Malaysia', value: 'my', data: { user_count: 238, android_devices_count: 145, ios_devices_count: 93 }, slug: 'malaysia' },
  { label: 'Maldives', value: 'mv', data: { user_count: 55, android_devices_count: 45, ios_devices_count: 9 }, slug: 'maldives' },
  { label: 'Mauritius', value: 'mu', data: { user_count: 100, android_devices_count: 83, ios_devices_count: 18 }, slug: 'mauritius' },
  { label: 'Mexico', value: 'mx', data: { user_count: 367, android_devices_count: 233, ios_devices_count: 138 }, slug: 'mexico' },
  { label: 'Moldova', value: 'md', data: { user_count: 109, android_devices_count: 50, ios_devices_count: 64 }, slug: 'moldova' },
  { label: 'Mongolia', value: 'mn', data: { user_count: 120, android_devices_count: 76, ios_devices_count: 46 }, slug: 'mongolia' },
  { label: 'Morocco', value: 'ma', data: { user_count: 1439, android_devices_count: 1304, ios_devices_count: 150 }, slug: 'morocco' },
  { label: 'Mozambique', value: 'mz', data: { user_count: 55, android_devices_count: 46, ios_devices_count: 7 }, slug: 'mozambique' },
  { label: 'Myanmar', value: 'mm', data: { user_count: 238, android_devices_count: 222, ios_devices_count: 37 }, slug: 'myanmar' },
  { label: 'Namibia', value: 'na', data: { user_count: 35, android_devices_count: 36, ios_devices_count: 0 }, slug: 'namibia' },
  { label: 'Nepal', value: 'np', data: { user_count: 1002, android_devices_count: 878, ios_devices_count: 167 }, slug: 'nepal' },
  { label: 'Netherlands', value: 'nl', data: { user_count: 66, android_devices_count: 51, ios_devices_count: 22 }, slug: 'netherlands' },
  { label: 'Nicaragua', value: 'ni', data: { user_count: 47, android_devices_count: 38, ios_devices_count: 6 }, slug: 'nicaragua' },
  { label: 'Nigeria', value: 'ng', data: { user_count: 885, android_devices_count: 829, ios_devices_count: 39 }, slug: 'nigeria' },
  { label: 'Oman', value: 'om', data: { user_count: 32, android_devices_count: 27, ios_devices_count: 3 }, slug: 'oman' },
  { label: 'Pakistan', value: 'pk', data: { user_count: 4820, android_devices_count: 4228, ios_devices_count: 655 }, slug: 'pakistan' },
  { label: 'Peru', value: 'pe', data: { user_count: 78, android_devices_count: 32, ios_devices_count: 53 }, slug: 'peru' },
  { label: 'Philippines', value: 'ph', data: { user_count: 765, android_devices_count: 539, ios_devices_count: 194 }, slug: 'philippines' },
  { label: 'Poland', value: 'pl', data: { user_count: 82, android_devices_count: 68, ios_devices_count: 53 }, slug: 'poland' },
  { label: 'Portugal', value: 'pt', data: { user_count: 86, android_devices_count: 32, ios_devices_count: 58 }, slug: 'portugal' },
  { label: 'Puerto Rico', value: 'pr', data: { user_count: 43, android_devices_count: 13, ios_devices_count: 33 }, slug: 'puerto-rico' },
  { label: 'Qatar', value: 'qa', data: { user_count: 60, android_devices_count: 52, ios_devices_count: 12 }, slug: 'qatar' },
  { label: 'Republic of North Macedonia', value: 'mk', data: { user_count: 125, android_devices_count: 96, ios_devices_count: 33 }, slug: 'republic-of-north-macedonia' },
  { label: 'Romania', value: 'ro', data: { user_count: 464, android_devices_count: 268, ios_devices_count: 217 }, slug: 'romania' },
  { label: 'Russian Federation', value: 'ru', data: { user_count: 326, android_devices_count: 322, ios_devices_count: 58 }, slug: 'russian-federation' },
  { label: 'Saudi Arabia', value: 'sa', data: { user_count: 386, android_devices_count: 378, ios_devices_count: 33 }, slug: 'saudi-arabia' },
  { label: 'Senegal', value: 'sn', data: { user_count: 77, android_devices_count: 68, ios_devices_count: 7 }, slug: 'senegal' },
  { label: 'Serbia', value: 'rs', data: { user_count: 164, android_devices_count: 99, ios_devices_count: 64 }, slug: 'serbia' },
  { label: 'Singapore', value: 'sg', data: { user_count: 60, android_devices_count: 47, ios_devices_count: 16 }, slug: 'singapore' },
  { label: 'Slovakia', value: 'sk', data: { user_count: 30, android_devices_count: 9, ios_devices_count: 21 }, slug: 'slovakia' },
  { label: 'Slovenia', value: 'si', data: { user_count: 40, android_devices_count: 17, ios_devices_count: 29 }, slug: 'slovenia' },
  { label: 'Somalia', value: 'so', data: { user_count: 108, android_devices_count: 107, ios_devices_count: 4 }, slug: 'somalia' },
  { label: 'South Africa', value: 'za', data: { user_count: 190, android_devices_count: 110, ios_devices_count: 82 }, slug: 'south-africa' },
  { label: 'Spain', value: 'es', data: { user_count: 37, android_devices_count: 21, ios_devices_count: 21 }, slug: 'spain' },
  { label: 'Sri Lanka', value: 'lk', data: { user_count: 366, android_devices_count: 270, ios_devices_count: 126 }, slug: 'sri-lanka' },
  { label: 'State of Palestine', value: 'ps', data: { user_count: 265, android_devices_count: 231, ios_devices_count: 27 }, slug: 'state-of-palestine' },
  { label: 'Tanzania', value: 'tz', data: { user_count: 164, android_devices_count: 151, ios_devices_count: 11 }, slug: 'tanzania' },
  { label: 'Thailand', value: 'th', data: { user_count: 94, android_devices_count: 29, ios_devices_count: 71 }, slug: 'thailand' },
  { label: 'Trinidad and Tobago', value: 'tt', data: { user_count: 42, android_devices_count: 31, ios_devices_count: 12 }, slug: 'trinidad-and-tobago' },
  { label: 'Tunisia', value: 'tn', data: { user_count: 602, android_devices_count: 576, ios_devices_count: 63 }, slug: 'tunisia' },
  { label: 'Turkey', value: 'tr', data: { user_count: 901, android_devices_count: 1431, ios_devices_count: 229 }, slug: 'turkey' },
  { label: 'Uganda', value: 'ug', data: { user_count: 122, android_devices_count: 114, ios_devices_count: 13 }, slug: 'uganda' },
  { label: 'Ukraine', value: 'ua', data: { user_count: 209, android_devices_count: 112, ios_devices_count: 122 }, slug: 'ukraine' },
  { label: 'United Arab Emirates', value: 'ae', data: { user_count: 852, android_devices_count: 492, ios_devices_count: 445 }, slug: 'united-arab-emirates' },
  { label: 'United Kingdom', value: 'gb', data: { user_count: 125, android_devices_count: 101, ios_devices_count: 42 }, slug: 'united-kingdom' },
  { label: 'United States of America', value: 'us', data: { user_count: 671, android_devices_count: 880, ios_devices_count: 223 }, slug: 'united-states-of-america' },
  { label: 'Uruguay', value: 'uy', data: { user_count: 41, android_devices_count: 30, ios_devices_count: 15 }, slug: 'uruguay' },
  { label: 'Uzbekistan', value: 'uz', data: { user_count: 34, android_devices_count: 27, ios_devices_count: 11 }, slug: 'uzbekistan' },
  { label: 'Venezuela', value: 've', data: { user_count: 136, android_devices_count: 103, ios_devices_count: 32 }, slug: 'venezuela' },
  { label: 'Vietnam', value: 'vn', data: { user_count: 801, android_devices_count: 153, ios_devices_count: 704 }, slug: 'vietnam' },
  { label: 'Yemen', value: 'ye', data: { user_count: 73, android_devices_count: 59, ios_devices_count: 5 }, slug: 'yemen' },
  { label: 'Zambia', value: 'zm', data: { user_count: 114, android_devices_count: 104, ios_devices_count: 7 }, slug: 'zambia' },
  { label: 'Zimbabwe', value: 'zw', data: { user_count: 39, android_devices_count: 34, ios_devices_count: 6 }, slug: 'zimbabwe' },
];

export const index_product_sections = {
  targeting: {
    width: '636px',
    height: '423px',
  },
  'issue-reports': {
    width: '541px',
    height: '476px',
  },
  statistics: {
    width: '635px',
    height: '930px',
  },
};

export const platform_page = {
  data: {
    title: 'Some talk with overpromises, we talk with our products',
    description: `Software industry struggles to balance product quality, user needs and their business growth with efficient testing solutions. We solve these problems with a testing platform that provides all the unique solutions crowdsourced testing can offer. Crowdsourced testing is organised to utilise the power of crowds under real-world conditions to test a wide range of software. Buglance users take advantage of these benefits at its best. We believe in the power of user-centred product and help those who care about theirs.`,
  },

  product_sections: {
    drawers: {
      height: '379px',
      width: '369px',
    },
    targeting: {
      width: '636px',
      height: '423px',
    },
    issues: {
      height: '520px',
      width: '628px', //!
    },
    statistics: {
      width: '635px',
      height: '930px',
    },
    'targeted-data': {
      height: '769px',
      width: '486px',
    },
  },
};

export const platform_solutions = [
  { illustration: <Scale />, title: 'Scale' },
  { illustration: <Speed />, title: 'Speed' },
  { illustration: <Diversity />, title: 'Diversity' },
  { illustration: <Budget />, title: 'Budget' },
];

export const about_page = {
  data: {
    // title: 'Some talk with over promises, we talk with our products',
    title: 'One bug to start them all...',
    description: `It all started with just one small, but hard-to-find bug in the app that was owned by our founder some years ago. Now though, with more than 40,000 testers from 150+ countries across the globe, we support businesses with a crowdsourced testing platform with custom-tailored solutions. Buglance speeds up the testing process in a unique way that companies get their initial bug or issue reports in the shortest time as possible. Our company is backed by 500Startups and TechStars - world-renowned organizations that support innovative and disruptive startups.`,
  },
  contacts: [
    { label: 'International Call', value: '+1 951 430 3337', link: 'tel:+1-951-430-3337' },
    { label: 'Phone', value: '+971 56 668 9721', link: 'tel:+971-56-668-9721' },
    { label: 'Email', value: 'mail@buglance.com', link: 'mailto:mail@buglance.com' },
  ],

  toghrul: {
    full_name: 'Toghrul Samad',
    position: 'Founder & CEO',
    image: '/img/about/desktop/toghrul',
    link: 'https://www.linkedin.com/in/togsam/',
    description:
      'They don’t call Toghrul “a serial entrepreneur” for nothing. In the past 10 years, he has worked on a diverse digital products; starting from WAP websites back in the early days of mobile net to a successful mobile gaming app. In fact, it was a bug in the gaming app that resulted with the birth of Buglance. This tiny bug was device specific and took a disproportionate amount of time. Although frustrating enough, it triggered the idea that led to the whole vision behind Buglance. Toghrul’s team wasn’t the only one dealing with “out of reality” testing problems. Thus, Buglance turned the pain point of a founder to a solution of many others in the tech industry.',
  },

  jahangir: {
    full_name: 'Jahangir Shabiyev',
    position: 'Head of Engineering',
    image: '/img/about/desktop/jahangir',
    link: 'https://www.linkedin.com/in/jahangirshabiyev/',
    description:
      'Leading the largest department in our company, Jahangir has more than 10 years experience in the software engineering field. During these years he has contributed to a vast variety of digital products worldwide. His expertise includes but not limited to SaaS, business automation and finance management. Besides being a dedicated leader of the engineering team, Jahangir is our know-it-all and can-do-it-all guy. Regardless of your work scope in Buglance, there’s a very high chance Jahangir has helped you in one way or another. During the non-working hours, Jahangir has super-powers of turning into an amazing chef, bartender and musician as well.',
  },
};

export const footer_pages = [
  { label: 'Terms & Conditions', slug: '/terms-and-conditions' },
  { label: 'About', slug: '/about' },
  { label: 'Privacy Policy', slug: '/privacy-policy' },
  { label: 'Blog', slug: '/blog' },
];

export const footer_socials = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/buglance' },
  { label: 'Facebook', link: 'https://www.facebook.com/buglance' },
  { label: 'Instagram', link: 'https://www.instagram.com/buglance' },
  // { label: 'Twitter', link: 'https://twitter.com/buglance' },
  { label: 'Mail', link: 'mailto:mail@buglance.com' },
];

export const header_pages = [
  { label: 'Platform', slug: '/platform' },
  // { label: 'Solutions', slug: '/solution' },
  // { label: 'Resources', slug: '/resource' },
  // { label: 'Community', slug: '/community' },
  // { label: 'Startups', slug: '/startups' },
  { label: 'About', slug: '/about' },
  { label: 'Blog', slug: '/blog' },
];
