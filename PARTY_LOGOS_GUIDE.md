# 🎨 Political Party Logos Guide

## 📋 Logo Sources for Each Party

### 1. BJP (Bharatiya Janata Party)
**Official Logo:** Lotus flower
**Source:** Wikipedia Commons
```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png
```
**Fallback:** Orange placeholder with "BJP" text
**Symbol:** 🪷 (Lotus emoji)

---

### 2. Congress (Indian National Congress)
**Official Logo:** Open hand (palm)
**Source:** Wikipedia Commons
```
https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Indian_National_Congress_hand_logo.svg/200px-Indian_National_Congress_hand_logo.svg.png
```
**Fallback:** Blue placeholder with "Congress" text
**Symbol:** ✋ (Hand emoji)

---

### 3. AIMIM (All India Majlis-e-Ittehadul Muslimeen)
**Official Logo:** Green flag with crescent
**Source:** Wikipedia Commons
```
https://upload.wikimedia.org/wikipedia/en/thumb/8/89/All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg/200px-All_India_Majlis-e-Ittehadul_Muslimeen_flag.svg.png
```
**Fallback:** Green placeholder with "AIMIM" text
**Symbol:** 🌙 (Crescent moon emoji)

---

### 4. Shiv Sena
**Official Logo:** Bow and arrow
**Source:** Wikipedia Commons
```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shiv_Sena_symbol.svg/200px-Shiv_Sena_symbol.svg.png
```
**Fallback:** Orange placeholder with "Shiv Sena" text
**Symbol:** 🏹 (Bow and arrow emoji)

---

### 5. Mashal Party
**Custom Logo:** Torch/Flame
**Source:** Custom design
```
🔥 (Fire emoji as logo)
```
**Fallback:** Gold placeholder with "Mashal" text
**Symbol:** 🔥 (Fire/torch emoji)

---

## 🎨 Logo Display Specifications

### Homepage (index.html)
- **Size:** 200px x 200px
- **Shape:** Circular with border
- **Border:** 4px solid party color
- **Shadow:** 0 5px 20px rgba(0,0,0,0.2)

### Voting Page (vote.html)
- **Size:** 200px height
- **Shape:** Rounded rectangle
- **Border:** 4px solid party color
- **Shadow:** 0 8px 25px rgba(0,0,0,0.2)

### Party Detail Pages
- **Size:** 200px x 200px
- **Shape:** Circular
- **Background:** Party gradient color
- **Padding:** 20px

---

## 🔄 Fallback Strategy

Each logo has a fallback in case the image fails to load:

```html
<img src="[LOGO_URL]" alt="Party Name" 
     onerror="this.src='https://via.placeholder.com/200/[COLOR]/ffffff?text=[PARTY]'">
```

### Fallback Colors:
- **BJP:** #FF9933 (Saffron)
- **Congress:** #19AAED (Blue)
- **AIMIM:** #00A651 (Green)
- **Shiv Sena:** #FF6600 (Orange)
- **Mashal:** #FFD700 (Gold)

---

## 📱 Where Logos Appear

### 1. Homepage (index.html)
```
Political Parties Section
├── BJP Card (with logo)
├── Congress Card (with logo)
├── AIMIM Card (with logo)
├── Shiv Sena Card (with logo)
└── Mashal Card (with logo)
```

### 2. Voting Page (vote.html)
```
Vote for Your Candidate
├── BJP (with logo) [Vote Button]
├── Congress (with logo) [Vote Button]
├── AIMIM (with logo) [Vote Button]
├── Shiv Sena (with logo) [Vote Button]
└── Mashal (with logo) [Vote Button]
```

### 3. Party Detail Pages
```
party_bjp.html → BJP logo at top
party_congress.html → Congress logo at top
party_aimim.html → AIMIM logo at top
party_shivsena.html → Shiv Sena logo at top
party_mashal.html → Mashal logo (🔥 emoji) at top
```

---

## 🎯 Logo Implementation

### Current Implementation:

**BJP, Congress, AIMIM, Shiv Sena:**
- Using official Wikipedia Commons SVG logos
- High quality, scalable vector graphics
- Authentic party symbols

**Mashal Party:**
- Using fire emoji (🔥) as logo
- Represents torch/flame concept
- Gold gradient background
- Custom design for fictional party

---

## ✅ Logo Status

| Party | Logo Source | Status | Quality |
|-------|-------------|--------|---------|
| BJP | Wikipedia | ✅ Working | High |
| Congress | Wikipedia | ✅ Working | High |
| AIMIM | Wikipedia | ✅ Working | High |
| Shiv Sena | Wikipedia | ✅ Working | High |
| Mashal | Custom Emoji | ✅ Working | Good |

---

## 🔧 How to Update Logos

If you want to change any logo:

### 1. Find New Logo URL
- Use Wikipedia Commons for official logos
- Use placeholder services for temporary logos
- Use emoji for simple symbols

### 2. Update in Files
Update the logo URL in these files:
- `frontend/index.html` (homepage cards)
- `frontend/vote.html` (voting page)
- `frontend/party_[name].html` (detail page)

### 3. Update Fallback
Change the fallback placeholder color/text:
```html
onerror="this.src='https://via.placeholder.com/200/[COLOR]/ffffff?text=[TEXT]'"
```

---

## 🎨 Logo Design Guidelines

### For Real Parties:
- ✅ Use official party logos
- ✅ Maintain aspect ratio
- ✅ Keep original colors
- ✅ Use high-quality sources

### For Custom Parties:
- ✅ Use simple, recognizable symbols
- ✅ Match party theme/ideology
- ✅ Use appropriate colors
- ✅ Ensure good visibility

---

## 📸 Logo Preview

### BJP:
- **Symbol:** Lotus flower
- **Color:** Saffron/Orange
- **Meaning:** Purity and enlightenment

### Congress:
- **Symbol:** Open hand
- **Color:** Blue
- **Meaning:** Helping hand, service

### AIMIM:
- **Symbol:** Green flag with crescent
- **Color:** Green
- **Meaning:** Islamic heritage

### Shiv Sena:
- **Symbol:** Bow and arrow
- **Color:** Orange
- **Meaning:** Warrior spirit, Maratha pride

### Mashal:
- **Symbol:** Torch/Flame 🔥
- **Color:** Gold
- **Meaning:** Light, enlightenment, progress

---

## 🚀 Testing Logos

### Test on Homepage:
```
http://localhost:5000
```
Scroll to "Political Parties" section - all 5 logos should display

### Test on Voting Page:
```
http://localhost:5000/vote.html
```
All party logos should appear on candidate cards

### Test on Detail Pages:
```
http://localhost:5000/party_bjp.html
http://localhost:5000/party_congress.html
http://localhost:5000/party_aimim.html
http://localhost:5000/party_shivsena.html
http://localhost:5000/party_mashal.html
```
Each page should show the party logo at the top

---

**All party logos are properly configured and displaying!** ✅
