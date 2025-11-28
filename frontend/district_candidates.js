// Maharashtra 2029 Election - District & Taluka Wise Candidates

const districtCandidates = {
    "Mumbai City": {
        candidates: [
            { id: "mumbai_bjp_1", name: "Ashish Shelar", party: "BJP", alliance: "Mahayuti", constituency: "Bandra West" },
            { id: "mumbai_ss_1", name: "Aaditya Thackeray", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Worli" },
            { id: "mumbai_cong_1", name: "Varsha Gaikwad", party: "Congress", alliance: "MVA", constituency: "Dharavi" },
            { id: "mumbai_bjp_2", name: "Mangal Prabhat Lodha", party: "BJP", alliance: "Mahayuti", constituency: "Malabar Hill" },
            { id: "mumbai_ss_2", name: "Ajay Choudhari", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Shivadi" }
        ]
    },
    "Mumbai Suburban": {
        candidates: [
            { id: "mumbai_sub_bjp_1", name: "Devendra Fadnavis", party: "BJP", alliance: "Mahayuti", constituency: "Nagpur South West" },
            { id: "mumbai_sub_ss_1", name: "Eknath Shinde", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Kopri-Pachpakhadi" },
            { id: "mumbai_sub_ncp_1", name: "Dilip Walse Patil", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Ambegaon" },
            { id: "mumbai_sub_cong_1", name: "Aslam Shaikh", party: "Congress", alliance: "MVA", constituency: "Malad West" }
        ]
    },
    "Pune": {
        candidates: [
            { id: "pune_bjp_1", name: "Chandrakant Patil", party: "BJP", alliance: "Mahayuti", constituency: "Kothrud" },
            { id: "pune_ncp_1", name: "Ajit Pawar", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Baramati" },
            { id: "pune_ncp_2", name: "Supriya Sule", party: "NCP (Sharad)", alliance: "MVA", constituency: "Baramati" },
            { id: "pune_cong_1", name: "Ravindra Dhangekar", party: "Congress", alliance: "MVA", constituency: "Kasba Peth" },
            { id: "pune_bjp_2", name: "Murlidhar Mohol", party: "BJP", alliance: "Mahayuti", constituency: "Pune Cantonment" },
            { id: "pune_ncp_3", name: "Rohit Pawar", party: "NCP (Sharad)", alliance: "MVA", constituency: "Karjat Jamkhed" }
        ]
    },
    "Nagpur": {
        candidates: [
            { id: "nagpur_bjp_1", name: "Devendra Fadnavis", party: "BJP", alliance: "Mahayuti", constituency: "Nagpur South West" },
            { id: "nagpur_bjp_2", name: "Nitin Gadkari", party: "BJP", alliance: "Mahayuti", constituency: "Nagpur" },
            { id: "nagpur_cong_1", name: "Vikas Thakre", party: "Congress", alliance: "MVA", constituency: "Nagpur West" },
            { id: "nagpur_bjp_3", name: "Krishna Khopde", party: "BJP", alliance: "Mahayuti", constituency: "Nagpur East" }
        ]
    },
    "Thane": {
        candidates: [
            { id: "thane_ss_1", name: "Eknath Shinde", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Kopri-Pachpakhadi" },
            { id: "thane_bjp_1", name: "Sanjay Kelkar", party: "BJP", alliance: "Mahayuti", constituency: "Thane" },
            { id: "thane_ss_2", name: "Pratap Sarnaik", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Ovala-Majiwada" },
            { id: "thane_ncp_1", name: "Jitendra Awhad", party: "NCP (Sharad)", alliance: "MVA", constituency: "Mumbra-Kalwa" }
        ]
    },
    "Nashik": {
        candidates: [
            { id: "nashik_bjp_1", name: "Girish Mahajan", party: "BJP", alliance: "Mahayuti", constituency: "Jamner" },
            { id: "nashik_ss_1", name: "Dada Bhuse", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Malegaon Central" },
            { id: "nashik_cong_1", name: "Kunal Patil", party: "Congress", alliance: "MVA", constituency: "Nashik East" },
            { id: "nashik_ncp_1", name: "Chhagan Bhujbal", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Yeola" }
        ]
    },
    "Aurangabad": {
        candidates: [
            { id: "aurangabad_ss_1", name: "Atul Save", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Aurangabad East" },
            { id: "aurangabad_aimim_1", name: "Imtiaz Jaleel", party: "AIMIM", alliance: "Independent", constituency: "Aurangabad Central" },
            { id: "aurangabad_bjp_1", name: "Pradeep Jaiswal", party: "BJP", alliance: "Mahayuti", constituency: "Aurangabad West" },
            { id: "aurangabad_cong_1", name: "Kalyan Kale", party: "Congress", alliance: "MVA", constituency: "Paithan" }
        ]
    },
    "Solapur": {
        candidates: [
            { id: "solapur_cong_1", name: "Praniti Shinde", party: "Congress", alliance: "MVA", constituency: "Solapur City Central" },
            { id: "solapur_bjp_1", name: "Ram Satpute", party: "BJP", alliance: "Mahayuti", constituency: "Malshiras" },
            { id: "solapur_ncp_1", name: "Uttam Jankar", party: "NCP (Sharad)", alliance: "MVA", constituency: "Malshiras" }
        ]
    },
    "Kolhapur": {
        candidates: [
            { id: "kolhapur_cong_1", name: "Satej Patil", party: "Congress", alliance: "MVA", constituency: "Kolhapur South" },
            { id: "kolhapur_ss_1", name: "Rajesh Patil", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Kolhapur North" },
            { id: "kolhapur_bjp_1", name: "Chandradip Narke", party: "BJP", alliance: "Mahayuti", constituency: "Karvir" }
        ]
    },
    "Ahmednagar": {
        candidates: [
            { id: "ahmednagar_ncp_1", name: "Dilip Walse Patil", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Ambegaon" },
            { id: "ahmednagar_bjp_1", name: "Suresh Dhas", party: "BJP", alliance: "Mahayuti", constituency: "Ashti" },
            { id: "ahmednagar_ncp_2", name: "Sangram Jagtap", party: "NCP (Sharad)", alliance: "MVA", constituency: "Ahmednagar City" }
        ]
    },
    "Satara": {
        candidates: [
            { id: "satara_ncp_1", name: "Shashikant Shinde", party: "NCP (Sharad)", alliance: "MVA", constituency: "Koregaon" },
            { id: "satara_bjp_1", name: "Shivendraraje Bhosale", party: "BJP", alliance: "Mahayuti", constituency: "Satara" },
            { id: "satara_ss_1", name: "Pratap Sarnaik", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Karad North" }
        ]
    },
    "Sangli": {
        candidates: [
            { id: "sangli_cong_1", name: "Vishwajeet Kadam", party: "Congress", alliance: "MVA", constituency: "Palus-Kadegaon" },
            { id: "sangli_bjp_1", name: "Sanjay Kute", party: "BJP", alliance: "Mahayuti", constituency: "Jat" },
            { id: "sangli_ss_1", name: "Anil Babar", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Khanapur" }
        ]
    },
    "Raigad": {
        candidates: [
            { id: "raigad_ss_1", name: "Aditi Tatkare", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Shrivardhan" },
            { id: "raigad_ncp_1", name: "Sunil Tatkare", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Uran" },
            { id: "raigad_ss_2", name: "Manohar Bhoir", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Alibag" }
        ]
    },
    "Ratnagiri": {
        candidates: [
            { id: "ratnagiri_ss_1", name: "Uday Samant", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Ratnagiri" },
            { id: "ratnagiri_bjp_1", name: "Nitesh Rane", party: "BJP", alliance: "Mahayuti", constituency: "Kankavli" },
            { id: "ratnagiri_ss_2", name: "Deepak Kesarkar", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Sawantwadi" }
        ]
    },
    "Sindhudurg": {
        candidates: [
            { id: "sindhudurg_ss_1", name: "Deepak Kesarkar", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Sawantwadi" },
            { id: "sindhudurg_cong_1", name: "Vaibhav Naik", party: "Congress", alliance: "MVA", constituency: "Kudal" }
        ]
    },
    "Dhule": {
        candidates: [
            { id: "dhule_bjp_1", name: "Anil Gote", party: "BJP", alliance: "Mahayuti", constituency: "Dhule City" },
            { id: "dhule_cong_1", name: "Kunal Patil", party: "Congress", alliance: "MVA", constituency: "Dhule Rural" }
        ]
    },
    "Jalgaon": {
        candidates: [
            { id: "jalgaon_bjp_1", name: "Girish Mahajan", party: "BJP", alliance: "Mahayuti", constituency: "Jamner" },
            { id: "jalgaon_ss_1", name: "Gulabrao Patil", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Jalgaon City" },
            { id: "jalgaon_cong_1", name: "Shirish Chaudhari", party: "Congress", alliance: "MVA", constituency: "Raver" }
        ]
    },
    "Nandurbar": {
        candidates: [
            { id: "nandurbar_bjp_1", name: "Vijaykumar Gavit", party: "BJP", alliance: "Mahayuti", constituency: "Nandurbar" },
            { id: "nandurbar_cong_1", name: "KC Padvi", party: "Congress", alliance: "MVA", constituency: "Akkalkuwa" }
        ]
    },
    "Beed": {
        candidates: [
            { id: "beed_ncp_1", name: "Dhananjay Munde", party: "NCP (Ajit)", alliance: "Mahayuti", constituency: "Parli" },
            { id: "beed_bjp_1", name: "Pankaja Munde", party: "BJP", alliance: "Mahayuti", constituency: "Beed" },
            { id: "beed_ncp_2", name: "Sandeep Kshirsagar", party: "NCP (Sharad)", alliance: "MVA", constituency: "Beed" }
        ]
    },
    "Latur": {
        candidates: [
            { id: "latur_cong_1", name: "Amit Deshmukh", party: "Congress", alliance: "MVA", constituency: "Latur City" },
            { id: "latur_bjp_1", name: "Ramesh Karad", party: "BJP", alliance: "Mahayuti", constituency: "Latur Rural" },
            { id: "latur_ss_1", name: "Sambhaji Patil", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Udgir" }
        ]
    },
    "Osmanabad": {
        candidates: [
            { id: "osmanabad_bjp_1", name: "Rana Jagjitsinh Patil", party: "BJP", alliance: "Mahayuti", constituency: "Osmanabad" },
            { id: "osmanabad_cong_1", name: "Kailas Patil", party: "Congress", alliance: "MVA", constituency: "Tuljapur" }
        ]
    },
    "Nanded": {
        candidates: [
            { id: "nanded_cong_1", name: "Ashok Chavan", party: "Congress", alliance: "MVA", constituency: "Bhokar" },
            { id: "nanded_bjp_1", name: "Mohan Hambarde", party: "BJP", alliance: "Mahayuti", constituency: "Nanded North" },
            { id: "nanded_ss_1", name: "Rajesh Vitekar", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Nanded South" }
        ]
    },
    "Parbhani": {
        candidates: [
            { id: "parbhani_bjp_1", name: "Rahul Mote", party: "BJP", alliance: "Mahayuti", constituency: "Parbhani" },
            { id: "parbhani_cong_1", name: "Rajesh Tope", party: "Congress", alliance: "MVA", constituency: "Gangakhed" }
        ]
    },
    "Jalna": {
        candidates: [
            { id: "jalna_bjp_1", name: "Arjun Khotkar", party: "BJP", alliance: "Mahayuti", constituency: "Jalna" },
            { id: "jalna_ss_1", name: "Kailas Gorantyal", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Bhokardan" }
        ]
    },
    "Hingoli": {
        candidates: [
            { id: "hingoli_bjp_1", name: "Santosh Bangar", party: "BJP", alliance: "Mahayuti", constituency: "Kalamnuri" },
            { id: "hingoli_cong_1", name: "Basavaraj Patil", party: "Congress", alliance: "MVA", constituency: "Hingoli" }
        ]
    },
    "Palghar": {
        candidates: [
            { id: "palghar_bjp_1", name: "Rajendra Gavit", party: "BJP", alliance: "Mahayuti", constituency: "Palghar" },
            { id: "palghar_ss_1", name: "Shrinivas Vanga", party: "Shiv Sena (UBT)", alliance: "MVA", constituency: "Dahanu" },
            { id: "palghar_bjp_2", name: "Hitendra Thakur", party: "BJP", alliance: "Mahayuti", constituency: "Vasai" }
        ]
    },
    "Wardha": {
        candidates: [
            { id: "wardha_cong_1", name: "Devilal Bhure", party: "Congress", alliance: "MVA", constituency: "Wardha" },
            { id: "wardha_bjp_1", name: "Pankaj Bhoyar", party: "BJP", alliance: "Mahayuti", constituency: "Hinganghat" }
        ]
    },
    "Amravati": {
        candidates: [
            { id: "amravati_bjp_1", name: "Sulbha Khodke", party: "BJP", alliance: "Mahayuti", constituency: "Amravati" },
            { id: "amravati_cong_1", name: "Yashomati Thakur", party: "Congress", alliance: "MVA", constituency: "Teosa" },
            { id: "amravati_ncp_1", name: "Anil Deshmukh", party: "NCP (Sharad)", alliance: "MVA", constituency: "Katol" }
        ]
    },
    "Akola": {
        candidates: [
            { id: "akola_bjp_1", name: "Randhir Sawarkar", party: "BJP", alliance: "Mahayuti", constituency: "Akola West" },
            { id: "akola_cong_1", name: "Govardhan Sharma", party: "Congress", alliance: "MVA", constituency: "Akola East" }
        ]
    },
    "Buldhana": {
        candidates: [
            { id: "buldhana_bjp_1", name: "Sanjay Kute", party: "BJP", alliance: "Mahayuti", constituency: "Jalgaon Jamod" },
            { id: "buldhana_ss_1", name: "Sanjay Raimulkar", party: "Shiv Sena (Shinde)", alliance: "Mahayuti", constituency: "Mehkar" }
        ]
    },
    "Washim": {
        candidates: [
            { id: "washim_bjp_1", name: "Lakhan Malik", party: "BJP", alliance: "Mahayuti", constituency: "Washim" },
            { id: "washim_cong_1", name: "Amit Zanak", party: "Congress", alliance: "MVA", constituency: "Karanja" }
        ]
    },
    "Yavatmal": {
        candidates: [
            { id: "yavatmal_cong_1", name: "Nitin Raut", party: "Congress", alliance: "MVA", constituency: "Nagpur North" },
            { id: "yavatmal_bjp_1", name: "Madan Yerawar", party: "BJP", alliance: "Mahayuti", constituency: "Yavatmal" }
        ]
    },
    "Chandrapur": {
        candidates: [
            { id: "chandrapur_bjp_1", name: "Sudhir Mungantiwar", party: "BJP", alliance: "Mahayuti", constituency: "Ballarpur" },
            { id: "chandrapur_cong_1", name: "Vijay Wadettiwar", party: "Congress", alliance: "MVA", constituency: "Bramhapuri" }
        ]
    },
    "Gadchiroli": {
        candidates: [
            { id: "gadchiroli_bjp_1", name: "Deorao Holi", party: "BJP", alliance: "Mahayuti", constituency: "Armori" },
            { id: "gadchiroli_cong_1", name: "Naresh Puglia", party: "Congress", alliance: "MVA", constituency: "Gadchiroli" }
        ]
    },
    "Bhandara": {
        candidates: [
            { id: "bhandara_bjp_1", name: "Narendra Bhondekar", party: "BJP", alliance: "Mahayuti", constituency: "Bhandara" },
            { id: "bhandara_cong_1", name: "Prashant Padole", party: "Congress", alliance: "MVA", constituency: "Tumsar" }
        ]
    },
    "Gondia": {
        candidates: [
            { id: "gondia_bjp_1", name: "Vinod Agrawal", party: "BJP", alliance: "Mahayuti", constituency: "Gondia" },
            { id: "gondia_cong_1", name: "Gopaldas Agrawal", party: "Congress", alliance: "MVA", constituency: "Tirora" }
        ]
    }
};

// Function to get candidates by district
function getCandidatesByDistrict(districtName) {
    return districtCandidates[districtName]?.candidates || [];
}

// Function to get all candidates for voting
function getAllCandidatesForVoting(district, taluka) {
    const districtCands = districtCandidates[district]?.candidates || [];
    
    // Add party colors and symbols
    return districtCands.map(cand => {
        let color, symbol, logo;
        
        if(cand.party === "BJP") {
            color = "#FF9933";
            symbol = "🪷";
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png";
        } else if(cand.party === "Shiv Sena (Shinde)") {
            color = "#FF6600";
            symbol = "⚔️";
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png";
        } else if(cand.party === "NCP (Ajit)") {
            color = "#00CED1";
            symbol = "⏰";
            logo = "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Nationalist_Congress_Party_logo.svg/200px-Nationalist_Congress_Party_logo.svg.png";
        } else if(cand.party === "Congress") {
            color = "#19AAED";
            symbol = "✋";
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Indian_National_Congress_hand_logo.svg/200px-Indian_National_Congress_hand_logo.svg.png";
        } else if(cand.party === "Shiv Sena (UBT)") {
            color = "#FF8C00";
            symbol = "🔥";
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png";
        } else if(cand.party === "NCP (Sharad)") {
            color = "#20B2AA";
            symbol = "🕰️";
            logo = "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Nationalist_Congress_Party_logo.svg/200px-Nationalist_Congress_Party_logo.svg.png";
        } else if(cand.party === "MNS") {
            color = "#FF1493";
            symbol = "🚂";
            logo = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Maharashtra_Navnirman_Sena_logo.svg/200px-Maharashtra_Navnirman_Sena_logo.svg.png";
        } else if(cand.party === "AIMIM") {
            color = "#006400";
            symbol = "🌙";
            logo = "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg/200px-All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg.png";
        }
        
        // Generate initials for photo
        const initials = cand.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        const photo = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='${encodeURIComponent(color)}' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3E${initials}%3C/text%3E%3C/svg%3E`;
        
        return {
            ...cand,
            color,
            symbol,
            logo,
            photo,
            position: cand.constituency
        };
    });
}
