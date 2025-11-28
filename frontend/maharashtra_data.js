// Maharashtra Election Data - All 36 Districts with Complete Talukas

const maharashtraDistricts = [
    {
        name: "Ahmednagar",
        talukas: ["Ahmednagar", "Shevgaon", "Pathardi", "Parner", "Sangamner", "Kopargaon", "Akole", "Shrirampur", "Nevasa", "Rahata", "Rahuri", "Shrigonda", "Karjat", "Jamkhed"]
    },
    {
        name: "Akola",
        talukas: ["Akola", "Akot", "Telhara", "Balapur", "Patur", "Murtizapur", "Barshitakli"]
    },
    {
        name: "Amravati",
        talukas: ["Amravati", "Achalpur", "Chandur Railway", "Morshi", "Warud", "Daryapur", "Anjangaon Surji", "Chandur Bazar", "Dhamangaon Railway", "Dharni", "Chikhaldara", "Bhatkuli", "Nandgaon Khandeshwar", "Teosa"]
    },
    {
        name: "Aurangabad",
        talukas: ["Aurangabad", "Kannad", "Soegaon", "Sillod", "Phulambri", "Khuldabad", "Vaijapur", "Gangapur", "Paithan"]
    },
    {
        name: "Beed",
        talukas: ["Beed", "Ashti", "Patoda", "Shirur Kasar", "Georai", "Majalgaon", "Wadwani", "Kaij", "Dharur", "Parli", "Ambajogai"]
    },
    {
        name: "Bhandara",
        talukas: ["Bhandara", "Tumsar", "Pauni", "Mohadi", "Sakoli", "Lakhni", "Lakhandur"]
    },
    {
        name: "Buldhana",
        talukas: ["Buldhana", "Chikhli", "Deulgaon Raja", "Jalgaon Jamod", "Sangrampur", "Malkapur", "Motala", "Nandura", "Khamgaon", "Shegaon", "Mehkar", "Sindkhed Raja", "Lonar"]
    },
    {
        name: "Chandrapur",
        talukas: ["Chandrapur", "Saoli", "Mul", "Ballarpur", "Pombhurna", "Gondpipri", "Warora", "Chimur", "Bhadravati", "Bramhapuri", "Nagbhir", "Sindewahi", "Rajura", "Korpana", "Jivati"]
    },
    {
        name: "Dhule",
        talukas: ["Dhule", "Sakri", "Sindkheda", "Shirpur"]
    },
    {
        name: "Gadchiroli",
        talukas: ["Gadchiroli", "Dhanora", "Chamorshi", "Mulchera", "Desaiganj (Vadasa)", "Armori", "Kurkheda", "Korchi", "Aheri", "Bhamragad", "Sironcha", "Etapalli"]
    },
    {
        name: "Gondia",
        talukas: ["Gondia", "Tirora", "Goregaon", "Arjuni Morgaon", "Amgaon", "Salekasa", "Sadak Arjuni", "Deori"]
    },
    {
        name: "Hingoli",
        talukas: ["Hingoli", "Sengaon", "Kalamnuri", "Basmath", "Aundha Nagnath"]
    },
    {
        name: "Jalgaon",
        talukas: ["Jalgaon", "Jamner", "Erandol", "Dharangaon", "Bhusawal", "Raver", "Muktainagar", "Bodwad", "Yawal", "Amalner", "Parola", "Chopda", "Pachora", "Bhadgaon", "Chalisgaon"]
    },
    {
        name: "Jalna",
        talukas: ["Jalna", "Bhokardan", "Jafrabad", "Badnapur", "Ambad", "Ghansawangi", "Partur", "Mantha"]
    },
    {
        name: "Kolhapur",
        talukas: ["Karvir", "Panhala", "Shahuwadi", "Kagal", "Hatkanangle", "Shirol", "Radhanagari", "Gaganbawada", "Bhudargad", "Gadhinglaj", "Chandgad", "Ajra"]
    },
    {
        name: "Latur",
        talukas: ["Latur", "Renapur", "Ahmadpur", "Jalkot", "Chakur", "Shirur Anantpal", "Ausa", "Nilanga", "Deoni", "Udgir"]
    },
    {
        name: "Mumbai City",
        talukas: ["Mumbai City"]
    },
    {
        name: "Mumbai Suburban",
        talukas: ["Andheri", "Borivali", "Kurla"]
    },
    {
        name: "Nagpur",
        talukas: ["Nagpur Urban", "Nagpur Rural", "Kamptee", "Hingna", "Katol", "Narkhed", "Savner", "Kalameshwar", "Ramtek", "Mouda", "Parseoni", "Umred", "Kuhi", "Bhiwapur"]
    },
    {
        name: "Nanded",
        talukas: ["Nanded", "Ardhapur", "Mudkhed", "Bhokar", "Umri", "Loha", "Kandhar", "Kinwat", "Himayatnagar", "Hadgaon", "Mahur", "Deglur", "Mukhed", "Dharmabad", "Biloli", "Naigaon"]
    },
    {
        name: "Nandurbar",
        talukas: ["Nandurbar", "Navapur", "Shahada", "Taloda", "Akkalkuwa", "Akrani"]
    },
    {
        name: "Nashik",
        talukas: ["Nashik", "Igatpuri", "Dindori", "Peth", "Trimbakeshwar", "Kalwan", "Deola", "Surgana", "Baglan", "Malegaon", "Nandgaon", "Chandwad", "Niphad", "Sinnar", "Yeola"]
    },
    {
        name: "Osmanabad",
        talukas: ["Osmanabad", "Tuljapur", "Bhum", "Paranda", "Washi", "Kalamb", "Lohara", "Umarga"]
    },
    {
        name: "Palghar",
        talukas: ["Palghar", "Vasai", "Dahanu", "Talasari", "Jawhar", "Mokhada", "Vada", "Vikramgad"]
    },
    {
        name: "Parbhani",
        talukas: ["Parbhani", "Sonpeth", "Gangakhed", "Palam", "Purna", "Sailu", "Jintur", "Manwath", "Pathri"]
    },
    {
        name: "Pune",
        talukas: ["Pune City", "Haveli", "Mulshi", "Maval", "Bhor", "Velhe", "Baramati", "Indapur", "Daund", "Purandhar", "Shirur", "Khed", "Junnar"]
    },
    {
        name: "Raigad",
        talukas: ["Alibag", "Murud", "Panvel", "Uran", "Karjat", "Khalapur", "Mangaon", "Tala", "Roha", "Sudhagad", "Mahad", "Poladpur", "Shrivardhan", "Mhasla", "Pen"]
    },
    {
        name: "Ratnagiri",
        talukas: ["Ratnagiri", "Sangameshwar", "Lanja", "Rajapur", "Chiplun", "Guhagar", "Dapoli", "Mandangad", "Khed"]
    },
    {
        name: "Sangli",
        talukas: ["Miraj", "Kavathe Mahankal", "Tasgaon", "Jat", "Walwa", "Shirala", "Khanapur", "Atpadi", "Palus", "Kadegaon"]
    },
    {
        name: "Satara",
        talukas: ["Satara", "Jaoli", "Koregaon", "Wai", "Mahabaleshwar", "Khandala", "Phaltan", "Man", "Khatav", "Patan", "Karad"]
    },
    {
        name: "Sindhudurg",
        talukas: ["Kudal", "Sawantwadi", "Vengurla", "Malwan", "Devgad", "Vaibhavwadi", "Dodamarg", "Kankavli"]
    },
    {
        name: "Solapur",
        talukas: ["Solapur North", "Solapur South", "Barshi", "Akkalkot", "Madha", "Karmala", "Pandharpur", "Mohol", "Malshiras", "Sangole", "Mangalvedhe"]
    },
    {
        name: "Thane",
        talukas: ["Thane", "Kalyan", "Murbad", "Bhiwandi", "Shahapur", "Ulhasnagar", "Ambarnath"]
    },
    {
        name: "Wardha",
        talukas: ["Wardha", "Deoli", "Seloo", "Arvi", "Ashti", "Karanja", "Hinganghat", "Samudrapur"]
    },
    {
        name: "Washim",
        talukas: ["Washim", "Malegaon", "Risod", "Mangrulpir", "Karanja", "Manora"]
    },
    {
        name: "Yavatmal",
        talukas: ["Yavatmal", "Arni", "Babhulgaon", "Kalamb", "Darwha", "Digras", "Ner", "Pusad", "Umarkhed", "Mahagaon", "Kelapur", "Ralegaon", "Ghatanji", "Wani", "Maregaon", "Zari Jamani"]
    }
];

// Maharashtra Political Parties for 2029 Election - Main Leaders
const maharashtraParties = [
    {
        id: "bjp_fadnavis",
        name: "Devendra Fadnavis",
        party: "BJP",
        fullPartyName: "Bharatiya Janata Party",
        alliance: "Mahayuti Alliance",
        position: "Deputy Chief Minister",
        constituency: "Nagpur South West",
        mlaStatus: "Sitting MLA",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='bjp' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF9933'/%3E%3Cstop offset='100%25' style='stop-color:%23FF6600'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bjp)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3EDF%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        symbol: "🪷",
        color: "#FF9933"
    },
    {
        id: "shivsena_shinde",
        name: "Eknath Shinde",
        party: "Shiv Sena (Shinde)",
        fullPartyName: "Shiv Sena (Shinde Faction)",
        alliance: "Mahayuti Alliance",
        position: "Chief Minister",
        constituency: "Kopri-Pachpakhadi",
        mlaStatus: "Sitting MLA",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='ss1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6600'/%3E%3Cstop offset='100%25' style='stop-color:%23CC5200'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23ss1)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3EES%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        symbol: "⚔️",
        color: "#FF6600"
    },
    {
        id: "ncp_ajit",
        name: "Ajit Pawar",
        party: "NCP (Ajit)",
        fullPartyName: "Nationalist Congress Party (Ajit Pawar)",
        alliance: "Mahayuti Alliance",
        position: "Deputy Chief Minister",
        constituency: "Baramati",
        mlaStatus: "Sitting MLA",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='ncp1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300CED1'/%3E%3Cstop offset='100%25' style='stop-color:%23008B8B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23ncp1)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3EAP%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Nationalist_Congress_Party_logo.svg/200px-Nationalist_Congress_Party_logo.svg.png",
        symbol: "⏰",
        color: "#00CED1"
    },
    {
        id: "congress_nana",
        name: "Nana Patole",
        party: "Congress",
        fullPartyName: "Indian National Congress",
        alliance: "Maha Vikas Aghadi (MVA)",
        position: "State Congress President",
        constituency: "Sakoli",
        mlaStatus: "Sitting MLA",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='cong' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2319AAED'/%3E%3Cstop offset='100%25' style='stop-color:%230066CC'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23cong)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3ENP%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Indian_National_Congress_hand_logo.svg/200px-Indian_National_Congress_hand_logo.svg.png",
        symbol: "✋",
        color: "#19AAED"
    },
    {
        id: "shivsena_uddhav",
        name: "Uddhav Thackeray",
        party: "Shiv Sena (UBT)",
        fullPartyName: "Shiv Sena (Uddhav Balasaheb Thackeray)",
        alliance: "Maha Vikas Aghadi (MVA)",
        position: "Former Chief Minister",
        constituency: "Party Chief",
        mlaStatus: "Former MLA",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='ss2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF8C00'/%3E%3Cstop offset='100%25' style='stop-color:%23FF4500'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23ss2)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3EUT%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        symbol: "",
        color: "#FF8C00"
    },
    {
        id: "ncp_sharad",
        name: "Sharad Pawar",
        party: "NCP (Sharad)",
        fullPartyName: "Nationalist Congress Party (Sharadchandra Pawar)",
        alliance: "Maha Vikas Aghadi (MVA)",
        position: "NCP Supremo",
        constituency: "Rajya Sabha MP",
        mlaStatus: "Party Chief",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='ncp2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2320B2AA'/%3E%3Cstop offset='100%25' style='stop-color:%23008080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23ncp2)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3ESP%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Nationalist_Congress_Party_logo.svg/200px-Nationalist_Congress_Party_logo.svg.png",
        symbol: "🕰️",
        color: "#20B2AA"
    },
    {
        id: "mns_raj",
        name: "Raj Thackeray",
        party: "MNS",
        fullPartyName: "Maharashtra Navnirman Sena",
        alliance: "Independent",
        position: "MNS Chief",
        constituency: "Party Chief",
        mlaStatus: "Party Leader",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='mns' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF1493'/%3E%3Cstop offset='100%25' style='stop-color:%23C71585'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23mns)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3ERT%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Maharashtra_Navnirman_Sena_logo.svg/200px-Maharashtra_Navnirman_Sena_logo.svg.png",
        symbol: "🚂",
        color: "#FF1493"
    },
    {
        id: "aimim_owaisi",
        name: "Asaduddin Owaisi",
        party: "AIMIM",
        fullPartyName: "All India Majlis-e-Ittehadul Muslimeen",
        alliance: "Independent",
        position: "AIMIM Chief",
        constituency: "Lok Sabha MP",
        mlaStatus: "Party Leader",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='aimim' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23006400'/%3E%3Cstop offset='100%25' style='stop-color:%23004d00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23aimim)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3EAO%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg/200px-All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg.png",
        symbol: "🌙",
        color: "#006400"
    }
];

// Complete Party Information Database
const partyInformation = {
    "BJP": {
        fullName: "Bharatiya Janata Party",
        color: "#FF9933",
        symbol: "🪷",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        alliance: "Mahayuti",
        founded: "1980",
        ideology: "Hindu Nationalism, Conservatism"
    },
    "Shiv Sena (Shinde)": {
        fullName: "Shiv Sena (Eknath Shinde Faction)",
        color: "#FF6600",
        symbol: "⚔️",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        alliance: "Mahayuti",
        founded: "2022",
        ideology: "Marathi Regionalism"
    },
    "NCP (Ajit)": {
        fullName: "Nationalist Congress Party (Ajit Pawar)",
        color: "#00CED1",
        symbol: "⏰",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Nationalist_Congress_Party_logo.svg/200px-Nationalist_Congress_Party_logo.svg.png",
        alliance: "Mahayuti",
        founded: "2023",
        ideology: "Social Democracy"
    },
    "Congress": {
        fullName: "Indian National Congress",
        color: "#19AAED",
        symbol: "✋",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Indian_National_Congress_hand_logo.svg/200px-Indian_National_Congress_hand_logo.svg.png",
        alliance: "MVA",
        founded: "1885",
        ideology: "Social Liberalism, Secularism"
    },
    "Shiv Sena (UBT)": {
        fullName: "Shiv Sena (Uddhav Balasaheb Thackeray)",
        color: "#FF8C00",
        symbol: "🔥",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        alliance: "MVA",
        founded: "1966",
        ideology: "Marathi Regionalism, Hindutva"
    },
    "NCP (Sharad)": {
        fullName: "Nationalist Congress Party (Sharadchandra Pawar)",
        color: "#20B2AA",
        symbol: "🕰️",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Nationalist_Congress_Party_logo.svg/200px-Nationalist_Congress_Party_logo.svg.png",
        alliance: "MVA",
        founded: "1999",
        ideology: "Social Democracy, Secularism"
    },
    "MNS": {
        fullName: "Maharashtra Navnirman Sena",
        color: "#FF1493",
        symbol: "🚂",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Maharashtra_Navnirman_Sena_logo.svg/200px-Maharashtra_Navnirman_Sena_logo.svg.png",
        alliance: "Independent",
        founded: "2006",
        ideology: "Marathi Regionalism"
    },
    "AIMIM": {
        fullName: "All India Majlis-e-Ittehadul Muslimeen",
        color: "#006400",
        symbol: "🌙",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg/200px-All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg.png",
        alliance: "Independent",
        founded: "1927",
        ideology: "Muslim Interests"
    },
    "BSP": {
        fullName: "Bahujan Samaj Party",
        color: "#0000FF",
        symbol: "🐘",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/BSP_Election_Symbol.svg/200px-BSP_Election_Symbol.svg.png",
        alliance: "Independent",
        founded: "1984",
        ideology: "Social Justice, Ambedkarism"
    },
    "SP": {
        fullName: "Samajwadi Party",
        color: "#FF0000",
        symbol: "🚲",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Samajwadi_Party_election_symbol_-_bicycle.svg/200px-Samajwadi_Party_election_symbol_-_bicycle.svg.png",
        alliance: "MVA",
        founded: "1992",
        ideology: "Democratic Socialism"
    },
    "Independent": {
        fullName: "Independent Candidate",
        color: "#808080",
        symbol: "⭐",
        logo: "",
        alliance: "Independent",
        founded: "-",
        ideology: "Various"
    }
};

// Helper function to get party information
function getPartyDetails(partyName) {
    return partyInformation[partyName] || partyInformation["Independent"];
}
