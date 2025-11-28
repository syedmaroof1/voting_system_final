// Complete Maharashtra Election 2029 - All Party Candidates

const allMaharashtraCandidates = [
    // MAHAYUTI ALLIANCE - BJP Candidates
    {
        id: "bjp_fadnavis",
        name: "Devendra Fadnavis",
        party: "Bharatiya Janata Party (BJP)",
        position: "Deputy CM & BJP Leader",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF9933'/%3E%3Cstop offset='100%25' style='stop-color:%23FF6600'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g1)' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EDF%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        symbol: "🪷",
        color: "#FF9933"
    },
    {
        id: "bjp_chandrakant",
        name: "Chandrakant Patil",
        party: "Bharatiya Janata Party (BJP)",
        position: "BJP State President",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF9933' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3ECP%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        symbol: "🪷",
        color: "#FF9933"
    },
    {
        id: "bjp_pankaja",
        name: "Pankaja Munde",
        party: "Bharatiya Janata Party (BJP)",
        position: "BJP Leader",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF9933' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EPM%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        symbol: "🪷",
        color: "#FF9933"
    },
    {
        id: "bjp_girish",
        name: "Girish Mahajan",
        party: "Bharatiya Janata Party (BJP)",
        position: "BJP MLA",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF9933' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EGM%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        symbol: "🪷",
        color: "#FF9933"
    },
    {
        id: "bjp_ashish",
        name: "Ashish Shelar",
        party: "Bharatiya Janata Party (BJP)",
        position: "Mumbai BJP Chief",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF9933' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EAS%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png",
        symbol: "🪷",
        color: "#FF9933"
    },
    
    // MAHAYUTI ALLIANCE - Shiv Sena (Shinde) Candidates
    {
        id: "ss_shinde",
        name: "Eknath Shinde",
        party: "Shiv Sena (Shinde)",
        position: "Chief Minister",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF6600' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EES%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        symbol: "⚔️",
        color: "#FF6600"
    },
    {
        id: "ss_uday",
        name: "Uday Samant",
        party: "Shiv Sena (Shinde)",
        position: "Cabinet Minister",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF6600' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EUS%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        symbol: "⚔️",
        color: "#FF6600"
    },
    {
        id: "ss_deepak",
        name: "Deepak Kesarkar",
        party: "Shiv Sena (Shinde)",
        position: "Cabinet Minister",
        alliance: "Mahayuti Alliance",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Crect fill='%23FF6600' width='180' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='70' font-weight='bold' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EDK%3C/text%3E%3C/svg%3E",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png",
        symbol: "⚔️",
        color: "#FF6600"
    },
