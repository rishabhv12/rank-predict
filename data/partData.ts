import exp from "constants";

const partData = [
    {
     "no": 1,
     "team": "Ctrl+Alt+Defeat",
     "college": "RV Institute of Technology and Management, Bangalore"
    },
    {
     "no": 2,
     "team": "IIPE_CODES_ART",
     "college": "Indian Institute of Petroleum and Energy"
    },
    {
     "no": 3,
     "team": "Maximum Span*ing 3",
     "college": "Techno Main Salt Lake (formerly known as Techno India Salt Lake)"
    },
    {
     "no": 4,
     "team": "O(0)",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 5,
     "team": "3 Dukes",
     "college": "New Horizon College of Engineering"
    },
    {
     "no": 6,
     "team": "1^3",
     "college": "New Horizon College Of Engineering"
    },
    {
     "no": 7,
     "team": "SKNCOE",
     "college": "Smt. Kashibai Navale College of Engineering"
    },
    {
     "no": 8,
     "team": "thisDot",
     "college": "Shri Ramdeobaba College of Engineering and Management, Nagpur"
    },
    {
     "no": 9,
     "team": "nword",
     "college": "Vellore Institute of Technology"
    },
    {
     "no": 10,
     "team": "Meowbadi",
     "college": "Jadavpur University"
    },
    {
     "no": 11,
     "team": "Binary Trio",
     "college": "Shri Ramdeobaba College Of Engineering and Management"
    },
    {
     "no": 12,
     "team": "D5R24",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 13,
     "team": "Grindcrow",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 14,
     "team": "Velaris",
     "college": "Bundelkhand Institute of Engineering &#38;amp; Technology, Jhansi"
    },
    {
     "no": 15,
     "team": "Lazy Coders",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 16,
     "team": "rurik",
     "college": "Sharda University"
    },
    {
     "no": 17,
     "team": "AKR Bit Busters",
     "college": "Indian Institute of Information Technology Tiruchirappalli"
    },
    {
     "no": 18,
     "team": "Mate In Three",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 19,
     "team": "Hustlers",
     "college": "Gaya college of engineering"
    },
    {
     "no": 20,
     "team": "fenvickThree",
     "college": "Pandit Deendayal Petroleum University"
    },
    {
     "no": 21,
     "team": "Plagiarized_Team",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 22,
     "team": "CIRCUIT",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 23,
     "team": "Hamswenee",
     "college": "Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore"
    },
    {
     "no": 24,
     "team": "Ethereal Equations",
     "college": "Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore"
    },
    {
     "no": 25,
     "team": "Br0s_C0d3_;-)",
     "college": "Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore"
    },
    {
     "no": 26,
     "team": "Raven",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 27,
     "team": "SystummHang",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 28,
     "team": "3 idiots",
     "college": "Netaji Subhash Engineering College, Kolkata"
    },
    {
     "no": 29,
     "team": "Last_Trie",
     "college": "Pimpri Chinchwad College of Engineering, Pune"
    },
    {
     "no": 30,
     "team": "techNoJutsu",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 31,
     "team": "Bohot Bhayankar Coding",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 32,
     "team": "Bhagwan-Bharose",
     "college": "JSS Academy of Technical Education Noida"
    },
    {
     "no": 33,
     "team": "Arraybakers",
     "college": "SRM-IST DELHI NCR Campus Modinagar, Ghaziabad, U.P."
    },
    {
     "no": 34,
     "team": "Noob Coders",
     "college": "Vellore Institute of Technology"
    },
    {
     "no": 35,
     "team": "XoRiers",
     "college": "Pandit Deendayal Petroleum University"
    },
    {
     "no": 36,
     "team": "Team_Maurya",
     "college": "Haldia Institute of Technology"
    },
    {
     "no": 37,
     "team": "Last_Chance",
     "college": "Netaji Subhas University Of Technology"
    },
    {
     "no": 38,
     "team": "MLEDoesn'tExist",
     "college": "Delhi Skill and Entrepreneurship University Okhla-1"
    },
    {
     "no": 39,
     "team": "Bits&Byts",
     "college": "Sri Eshwar College of Engineering"
    },
    {
     "no": 40,
     "team": "BinaryBugs",
     "college": "Sri Eshwar College of Engineering"
    },
    {
     "no": 41,
     "team": "DP Devils",
     "college": "Sri Eshwar College of Engineering"
    },
    {
     "no": 42,
     "team": "Trie Coders",
     "college": "Sri Eshwar College of Engineering"
    },
    {
     "no": 43,
     "team": "Code Smokers",
     "college": "National Institute of Technology Delhi"
    },
    {
     "no": 44,
     "team": "AHY_Programmers",
     "college": "Vishwakarma Institute of Technology"
    },
    {
     "no": 45,
     "team": "NSEC_CSE",
     "college": "Netaji Subhash Engineering College,Kolkata"
    },
    {
     "no": 46,
     "team": "Coding Monke",
     "college": "Shri Ramdeobaba College of Engineering and Management, Nagpur"
    },
    {
     "no": 47,
     "team": "Code_Rakshak",
     "college": "VIT Bhopal University"
    },
    {
     "no": 48,
     "team": "Error-404",
     "college": "VIT-AP University"
    },
    {
     "no": 49,
     "team": "code??",
     "college": "PSG College of Technology"
    },
    {
     "no": 50,
     "team": "Whats_in_a_name",
     "college": "Pune Institute of Computer Technology"
    },
    {
     "no": 51,
     "team": "BitManipulators",
     "college": "Vishwakarma Institute of Technology"
    },
    {
     "no": 52,
     "team": "raste_ke_saste_coders",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 53,
     "team": "Newbies",
     "college": "Techno Main Salt Lake (formerly known as Techno India Salt Lake)"
    },
    {
     "no": 54,
     "team": "1e9+7",
     "college": "National Institute of Technology - Agartala"
    },
    {
     "no": 55,
     "team": "White Eagle",
     "college": "University of Mumbai"
    },
    {
     "no": 56,
     "team": "Elite Trojans",
     "college": "Devang Patel Institute of Advance Technology and Research"
    },
    {
     "no": 57,
     "team": "Team ElderWand MITS",
     "college": "Madhav Institute of Technology & Science, Gwalior"
    },
    {
     "no": 58,
     "team": "Leaf Papad",
     "college": "Indian Institute of Technology, Bombay"
    },
    {
     "no": 59,
     "team": "Eternals",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 60,
     "team": "Dudh Mehenga Hai",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 61,
     "team": "Kuch bhi",
     "college": "Indian Institute of Information Technology, Sri City"
    },
    {
     "no": 62,
     "team": "BigHorse",
     "college": "Shri Ramdeobaba College of Engineering and Management, Nagpur,India"
    },
    {
     "no": 63,
     "team": "CodersAssemble",
     "college": "G H Patel College of Engineering and Technology"
    },
    {
     "no": 64,
     "team": "@MainActor",
     "college": "Bangalore Institute of Technology"
    },
    {
     "no": 65,
     "team": "CaffeineOverflow",
     "college": "Rajiv Gandhi Institute Of Petroleum Technology"
    },
    {
     "no": 66,
     "team": "1 Code 3 Hangovers",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 67,
     "team": "ExitCode 1",
     "college": "Punjab Engineering College Chandigarh"
    },
    {
     "no": 68,
     "team": "Just_For_Talk",
     "college": "Netaji Subhash Engineering College"
    },
    {
     "no": 69,
     "team": "Compact Cignerds",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 70,
     "team": "Mavericks_FTW",
     "college": "Thadomal Shahani Engineering College"
    },
    {
     "no": 71,
     "team": "Sieve",
     "college": "Keshav Memorial Institute of Technology"
    },
    {
     "no": 72,
     "team": "Delta",
     "college": "MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY GORAKHPUR"
    },
    {
     "no": 73,
     "team": "Noobies",
     "college": "IIT Kharagpur"
    },
    {
     "no": 74,
     "team": "Logic Pioneers",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 75,
     "team": "logic.gap",
     "college": "Amrita school of engineering, Amritapuri"
    },
    {
     "no": 76,
     "team": "Bit_Masters",
     "college": "Dr. Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 77,
     "team": "Logic Legends",
     "college": "Shri Ramdeobaba College of Engineering and Management"
    },
    {
     "no": 78,
     "team": "SIGSEGV",
     "college": "National Institute of Technology - Agartala"
    },
    {
     "no": 79,
     "team": "CodeCrafters",
     "college": "Shri RamdeoBaba College of Engineering and Management"
    },
    {
     "no": 80,
     "team": "Pretest_slayer",
     "college": "Sharda University"
    },
    {
     "no": 81,
     "team": "Cazz",
     "college": "Indian Institute of Engineering Science and Technology, Shibpur"
    },
    {
     "no": 82,
     "team": "_blank_",
     "college": "Amrita Vishwa Vidhyapeetham, Amritapuri*"
    },
    {
     "no": 83,
     "team": "Segmentation Assault",
     "college": "Thadomal Shahani Engineering College"
    },
    {
     "no": 84,
     "team": "Operation TRU",
     "college": "National Institute of Technology - Agartala"
    },
    {
     "no": 85,
     "team": "Hexstacy",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 86,
     "team": "naamNhiAata",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 87,
     "team": "Towerists",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 88,
     "team": "coders",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 89,
     "team": "Bumblebee",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 90,
     "team": "Spidey webbers",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 91,
     "team": "Apex",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 92,
     "team": "HACTIVATORS",
     "college": "Sardar Vallabhbhai National Institute of Technology"
    },
    {
     "no": 93,
     "team": "Beyond infinity",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 94,
     "team": "Sankalp",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 95,
     "team": "ByteWarriors",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 96,
     "team": "MARINE",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 97,
     "team": "HackElites",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 98,
     "team": "OKAY_FINE",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 99,
     "team": "Heuristics",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 100,
     "team": "Chennai Sharks",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 101,
     "team": "7000 RPM",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 102,
     "team": "GCOEN",
     "college": "Government College of Engineering, Nagpur"
    },
    {
     "no": 103,
     "team": "MLE_2.0",
     "college": "Abes Engineering College"
    },
    {
     "no": 104,
     "team": "Kasukabe Club",
     "college": "Birla Institute of Technology, Jaipur"
    },
    {
     "no": 105,
     "team": "MST",
     "college": "Indian Institute of Information Technology, Kota"
    },
    {
     "no": 106,
     "team": "TechTitans",
     "college": "University of Calcutta"
    },
    {
     "no": 107,
     "team": "Eulerian Wizards",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 108,
     "team": "Achyutas",
     "college": "Madan Mohan Malaviya University of Technology"
    },
    {
     "no": 109,
     "team": "polyphase",
     "college": "Amrita School of Engineering, Kollam"
    },
    {
     "no": 110,
     "team": "Trie",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 111,
     "team": "Binary Beasts",
     "college": "Pimpri Chinchwad College Of Engineering and Research, Pune"
    },
    {
     "no": 112,
     "team": "Vaangu",
     "college": "Indian Institute of Information Technology, Allahabad"
    },
    {
     "no": 113,
     "team": "team",
     "college": "Indian Institute of Information Technology, Allahabad"
    },
    {
     "no": 114,
     "team": "CodeStart",
     "college": "Deogiri Institute of Engineering and Management Studies"
    },
    {
     "no": 115,
     "team": "Logic_Legends",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 116,
     "team": "1e9 + 7",
     "college": "SRM Institute of Science and Technology, Kattankulathur"
    },
    {
     "no": 117,
     "team": "oakroots",
     "college": "National Institute of Technology Hamirpur"
    },
    {
     "no": 118,
     "team": "we_have_ak",
     "college": "NATIONAL INSTITUTE OF TECHNOLOGY TIRUCHIRAPPALLI"
    },
    {
     "no": 119,
     "team": "cipher",
     "college": "Amrita School Of Engineering, Kollam"
    },
    {
     "no": 120,
     "team": "Ternary Wizards",
     "college": "National Institute of Technology - Agartala"
    },
    {
     "no": 121,
     "team": "MAFIA MUNDEER",
     "college": "Sardar Vallabhbhai National Institute Of Technology"
    },
    {
     "no": 122,
     "team": "The Loop Trooperss",
     "college": "Sinhgad College of Engineering"
    },
    {
     "no": 123,
     "team": "Logic Crushers",
     "college": "PDPM Indian Institute of Information Technology Design & Manufacturing, Jabalpur"
    },
    {
     "no": 124,
     "team": "S Cube",
     "college": "Chandubhai S. Patel Institute of Technology"
    },
    {
     "no": 125,
     "team": "Jarvis",
     "college": "Indian Institute of Technology, Madras"
    },
    {
     "no": 126,
     "team": "Code Geeks",
     "college": "Sardar Vallabhbhai National Institute of Technology"
    },
    {
     "no": 127,
     "team": "XTree",
     "college": "National Institute of Technology, Silchar"
    },
    {
     "no": 128,
     "team": "AAAcoders",
     "college": "Indian Institute of Information Technology Tiruchirappalli"
    },
    {
     "no": 129,
     "team": "No_Intution",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 130,
     "team": "Telegram_CtrlC_CtrlV",
     "college": "Dayananda Sagar College of Engineering"
    },
    {
     "no": 131,
     "team": "ada",
     "college": "Ganeshi Lal Bajaj Institute Of Technology And Management"
    },
    {
     "no": 132,
     "team": "alpha beta gamma",
     "college": "ABES Engineering College"
    },
    {
     "no": 133,
     "team": "FAKE_CODERS",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 134,
     "team": "Scavengers",
     "college": "Indian Institute of Information Technology, Allahabad"
    },
    {
     "no": 135,
     "team": "suggest_name",
     "college": "Pune Institute Of Computer Technology"
    },
    {
     "no": 136,
     "team": "mutex_icpc",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 137,
     "team": "Enough",
     "college": "Pimpri-Chinchwad College of Engineering , Pune"
    },
    {
     "no": 138,
     "team": "Syntax Terror",
     "college": "Dhirubhai Ambani Institute of Information and Communication Technology"
    },
    {
     "no": 139,
     "team": "WuShang Clan",
     "college": "Bhagwan Parshuram Institute of Technology"
    },
    {
     "no": 140,
     "team": "Geniee",
     "college": "National Institute Of Technology, Goa"
    },
    {
     "no": 141,
     "team": "Lal fund",
     "college": "Indian institute of information technology Allahabad"
    },
    {
     "no": 142,
     "team": "Coder XD",
     "college": "Oriental College of Technology Bhopal"
    },
    {
     "no": 143,
     "team": "cns_lena_chahiye_tha",
     "college": "Indian Institute of Technology - Guwahati"
    },
    {
     "no": 144,
     "team": "PNJ_Elite",
     "college": "Indian Institute Of Information Technology, Allahabad"
    },
    {
     "no": 145,
     "team": "Magma",
     "college": "Indian Institute of Information Technology Pune"
    },
    {
     "no": 146,
     "team": "LastDance",
     "college": "Lovely Professional University"
    },
    {
     "no": 147,
     "team": "Code Busters",
     "college": "Madan Mohan Malaviya University of Technology"
    },
    {
     "no": 148,
     "team": "HelloWorld 4Ever",
     "college": "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur"
    },
    {
     "no": 149,
     "team": "Code Mavericks",
     "college": "Indian Institute of Information Technology"
    },
    {
     "no": 150,
     "team": "Nth time’s the charm",
     "college": "Amrita school of engineering, Amritapuri"
    },
    {
     "no": 151,
     "team": "HQA418",
     "college": "Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
     "no": 152,
     "team": "The-A-Team",
     "college": "Jaypee Institute of Information Technology"
    },
    {
     "no": 153,
     "team": "Big-O Bandits",
     "college": "National Institute of Technology, Kurukshetra"
    },
    {
     "no": 154,
     "team": "Elites",
     "college": "Motilal Nehru National Institute of Technology - Allahabad"
    },
    {
     "no": 155,
     "team": "WComders",
     "college": "Indian Institute of Information Technology, Allahabad"
    },
    {
     "no": 156,
     "team": "0XCAFEBABE\n",
     "college": "Motilal Nehru National Institute of Technology - Allahabad"
    },
    {
     "no": 157,
     "team": "hum_honge_kamyab",
     "college": "Motilal Nehru National Institute of Technology"
    },
    {
     "no": 158,
     "team": "Troopers",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 159,
     "team": "Mavericks",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 160,
     "team": "MugiWara",
     "college": "Motilal Nehru National Institute of Technology - Allahabad"
    },
    {
     "no": 161,
     "team": "Codedrills",
     "college": "Motilal Nehru National Institute of Technology - Allahabad"
    },
    {
     "no": 162,
     "team": "Failures",
     "college": "Indian Institute of Technology - Guwahati"
    },
    {
     "no": 163,
     "team": "ByteBusters",
     "college": "Indian Institute of Technology - Guwahati"
    },
    {
     "no": 164,
     "team": "LogicLegends",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 165,
     "team": "NullORVoid",
     "college": "National Institute of Technology Kurukshetra"
    },
    {
     "no": 166,
     "team": "Phantom Coders",
     "college": "Motilal Nehru National Institute of Technology"
    },
    {
     "no": 167,
     "team": "Nandi",
     "college": "ABES Engineering College"
    },
    {
     "no": 168,
     "team": "TleAtTwo",
     "college": "Pune Institute Of Computer Technology"
    },
    {
     "no": 169,
     "team": "TEAM DEAD",
     "college": "National institute of technology Jamshedpur"
    },
    {
     "no": 170,
     "team": "Anoroc",
     "college": "BITS Pilani, Goa Campus"
    },
    {
     "no": 171,
     "team": "SalmonBhoiFanClub",
     "college": "Manipal Institute of Technology"
    },
    {
     "no": 172,
     "team": "Cats on Trees",
     "college": "IIIT Delhi"
    },
    {
     "no": 173,
     "team": "Schezwan_Sauce",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 174,
     "team": "Gamma",
     "college": "Vnr vignana jyothi institute of engineering and technology"
    },
    {
     "no": 175,
     "team": "ObviouslyToXic",
     "college": "Ajay Kumar Garg Engineering College,Ghaziabad"
    },
    {
     "no": 176,
     "team": "Wrong Angled Triangle",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 177,
     "team": "read_it_carefully",
     "college": "Graphic Era University"
    },
    {
     "no": 178,
     "team": "Yeh_bhi_karlete_hain",
     "college": "RNS Institute of Technology"
    },
    {
     "no": 179,
     "team": "_Akatsuki_",
     "college": "BIT Sindri"
    },
    {
     "no": 180,
     "team": "Icy Spicy",
     "college": "IIIT Vadodara-International Campus Diu"
    },
    {
     "no": 181,
     "team": "Bhupinder_Jogi",
     "college": "Rajiv Gandhi Institute of Petroleum Technology"
    },
    {
     "no": 182,
     "team": "Thirstythrees",
     "college": "MNNIT ALLAHBAD"
    },
    {
     "no": 183,
     "team": "Bitxories",
     "college": "IIT Patna"
    },
    {
     "no": 184,
     "team": "SIA- Unstoppable",
     "college": "St. Xavier's College, Kolkata"
    },
    {
     "no": 185,
     "team": "Rebel Bytes",
     "college": "National Institute of Technology"
    },
    {
     "no": 186,
     "team": "SVD",
     "college": "Amrita School of Engineering, Kollam"
    },
    {
     "no": 187,
     "team": "DunderMifflin",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 188,
     "team": "Spoiler Alert",
     "college": "Gautam Buddha University"
    },
    {
     "no": 189,
     "team": "3equals1000",
     "college": "Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar"
    },
    {
     "no": 190,
     "team": "facelessmenlite",
     "college": "Indian Institute of Technology Kanpur"
    },
    {
     "no": 191,
     "team": "mtDue",
     "college": "IIIT Vadodara-International Campus Diu"
    },
    {
     "no": 192,
     "team": "BitBandits",
     "college": "BIT Sindri"
    },
    {
     "no": 193,
     "team": "Rising Techies",
     "college": "Motilal Nehru National Institute of Technology"
    },
    {
     "no": 194,
     "team": "THREE_NEWBIES",
     "college": "BIT Sindri"
    },
    {
     "no": 195,
     "team": "Anti-Adhoc",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 196,
     "team": "in it to win it",
     "college": "National Institute of Technology, Srinagar"
    },
    {
     "no": 197,
     "team": "Vec3",
     "college": "Indian Institute of Information Technology Kottayam"
    },
    {
     "no": 198,
     "team": "kesarPista",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 199,
     "team": "Luffy_Zoro_Sanji",
     "college": "Motilal Nehru National Institute of Technology Allahabad"
    },
    {
     "no": 200,
     "team": "Greedy Turtles",
     "college": "Nirma University"
    },
    {
     "no": 201,
     "team": "Three Stars",
     "college": "Indian Institute of information technology Bhagalpur"
    },
    {
     "no": 202,
     "team": "Newbies_",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 203,
     "team": "logicwizards",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 204,
     "team": "Big O",
     "college": "Rishihood University"
    },
    {
     "no": 205,
     "team": "Loading",
     "college": "Indian Institute of Information Technology and Management Gwalior"
    },
    {
     "no": 206,
     "team": "Hetro Sapiens",
     "college": "Rishihood University"
    },
    {
     "no": 207,
     "team": "Newtons",
     "college": "Rishihood University"
    },
    {
     "no": 208,
     "team": "NOOBies",
     "college": "Rishihood University"
    },
    {
     "no": 209,
     "team": "Loop Breakers",
     "college": "Rishihood University"
    },
    {
     "no": 210,
     "team": "\/\/ print(ans)",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 211,
     "team": "Comderz",
     "college": "Motilal Nehru National Institute of Technology , Allahabad"
    },
    {
     "no": 212,
     "team": "TEAM AGA-3",
     "college": "BIT Sindri"
    },
    {
     "no": 213,
     "team": "Skipped@Testfile",
     "college": "Indian Institute of Information Technology, Pune"
    },
    {
     "no": 214,
     "team": "Khatti Toffee",
     "college": "Ajay Kumar Garg Engineering College"
    },
    {
     "no": 215,
     "team": "Ignored ;-;",
     "college": "Indian Institute of Technology Jodhpur"
    },
    {
     "no": 216,
     "team": "Code Conquerors",
     "college": "Indian Institute Of Information Technology Allahabad"
    },
    {
     "no": 217,
     "team": "Angry Nerds",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 218,
     "team": "DAV_KGP",
     "college": "Indian Institute of Technology Kharagpur"
    },
    {
     "no": 219,
     "team": "TechItOut",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 220,
     "team": "Hackermans",
     "college": "Indian Institute of Technology Indore"
    },
    {
     "no": 221,
     "team": "StrawHats",
     "college": "National Institute of Technology Goa"
    },
    {
     "no": 222,
     "team": "HappyGIK",
     "college": "Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar"
    },
    {
     "no": 223,
     "team": "eforeuler",
     "college": "Indian Institute of Technology, Jodhpur"
    },
    {
     "no": 224,
     "team": "Hats",
     "college": "The LNM Institute of Information Technology"
    },
    {
     "no": 225,
     "team": "Hamse na ho paega",
     "college": "The LNM Institute of Information Technology"
    },
    {
     "no": 226,
     "team": "Still here",
     "college": "Indian Institute of information Technology Allahabad"
    },
    {
     "no": 227,
     "team": "TechThree",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 228,
     "team": "CrystaLMatH",
     "college": "Indian Institute of Technology Jodhpur"
    },
    {
     "no": 229,
     "team": "Bug Blasters",
     "college": "Institute of Engineering & Technology, Lucknow"
    },
    {
     "no": 230,
     "team": "code_shanava",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 231,
     "team": "Bug Repellent",
     "college": "Bits Pilani K.K. Birla Goa Campus"
    },
    {
     "no": 232,
     "team": "isipisi",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 233,
     "team": "XD",
     "college": "Indian Institute of Engineering Science and Technology, Shibpur"
    },
    {
     "no": 234,
     "team": "Byte Lords",
     "college": "Motilal Nehru National Institute of Technology - Allahabad"
    },
    {
     "no": 235,
     "team": "Wannabe Red",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 236,
     "team": "Debugging Susanoo",
     "college": "Indian Institute of Technology Guwahati"
    },
    {
     "no": 237,
     "team": "Jathi Ratnalu",
     "college": "Indian Institute Of Technology Jodhpur"
    },
    {
     "no": 238,
     "team": "Maniaxe",
     "college": "Delhi Skill and Entrepreneurship University Okhla-1"
    },
    {
     "no": 239,
     "team": "SheIsTheOne",
     "college": "Indian Institute of Technology Jodhpur"
    },
    {
     "no": 240,
     "team": "Licht Den Code",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 241,
     "team": "3 specialists",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 242,
     "team": "Kerbex",
     "college": "Indian Institute of Technology, Tirupati"
    },
    {
     "no": 243,
     "team": "Uncle Ji Accept Kara Dijiye",
     "college": "National Institute of Technology, Patna"
    },
    {
     "no": 244,
     "team": "Tech Tycoon",
     "college": "Nutan Maharashtra Institute of Engineering and Technology"
    },
    {
     "no": 245,
     "team": "BitFever",
     "college": "Indian Institute of Technology, Jodhpur"
    },
    {
     "no": 246,
     "team": "RooksOFFhell",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 247,
     "team": "BhaManTej",
     "college": "BITS Pilani, K.K. Birla Goa Campus"
    },
    {
     "no": 248,
     "team": "Binary Bullets",
     "college": "Heritage Institute of Technology"
    },
    {
     "no": 249,
     "team": "Toxic GAS",
     "college": "Jalpaiguri Government Engineering College"
    },
    {
     "no": 250,
     "team": "Error 404",
     "college": "Dhirubhai Ambani Institute of Information and Communication Technology"
    },
    {
     "no": 251,
     "team": "Bedsheet",
     "college": "Parul Institute of Technology"
    },
    {
     "no": 252,
     "team": "BoT_Coders",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 253,
     "team": "Hello_World",
     "college": "Ajay Kumar Garg Engineering College , Ghaziabad"
    },
    {
     "no": 254,
     "team": "3x0 IQ",
     "college": "Indian Institute of Technology Jodhpur"
    },
    {
     "no": 255,
     "team": "finiteLOOP",
     "college": "Thapar Institute of Engineering and Technology"
    },
    {
     "no": 256,
     "team": "Run Time Terror",
     "college": "Indian Institution of Information Technology Nagpur"
    },
    {
     "no": 257,
     "team": "Kya_Naam_Rakhein",
     "college": "Institute of Engineering and Technology, Lucknow"
    },
    {
     "no": 258,
     "team": "SyntaxError",
     "college": "Yeshwantrao Chavhan College of Engineering"
    },
    {
     "no": 259,
     "team": "TrieHards",
     "college": "Indian Institute of Engineering Science and Technology, Shibpur"
    },
    {
     "no": 260,
     "team": "BLE",
     "college": "PDPM Indian Institute of Information Technology Design & Manufacturing, Jabalpur"
    },
    {
     "no": 261,
     "team": "mishti_doi",
     "college": "Indian Institute of Technology Kharagpur"
    },
    {
     "no": 262,
     "team": "Kites",
     "college": "Indian Institute of Information Technology , Allahabad"
    },
    {
     "no": 263,
     "team": "KiloByteMe",
     "college": "School of Engineering and Applied Science, Ahmedabad University"
    },
    {
     "no": 264,
     "team": "Tech_Trio",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 265,
     "team": "ParseInt",
     "college": "Shri Ramdeobaba college of engineering and management"
    },
    {
     "no": 266,
     "team": "FacelessMen3.1",
     "college": "IIT Kanpur"
    },
    {
     "no": 267,
     "team": "Coder Magique",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 268,
     "team": "Kalam Special Group",
     "college": "Indian Institute of Technology Patna"
    },
    {
     "no": 269,
     "team": "GreedyGeeks",
     "college": "Indian Institute of Information Technology,Allahabad"
    },
    {
     "no": 270,
     "team": "OnlyOnes",
     "college": "Mahindra University Ecole Centrale"
    },
    {
     "no": 271,
     "team": "Bit busters",
     "college": "Abes engineering college"
    },
    {
     "no": 272,
     "team": "ALienX",
     "college": "Indian Institute of Technology Jodhpur"
    },
    {
     "no": 273,
     "team": "Harvest",
     "college": "Indian Institute of Information Technology and Management, Gwalior"
    },
    {
     "no": 274,
     "team": "Null Bytes",
     "college": "Indian Institute of Technology Indore"
    },
    {
     "no": 275,
     "team": "HCM",
     "college": "Army institute of technology"
    },
    {
     "no": 276,
     "team": "error404found",
     "college": "National Institute of Technology Karnataka, Surathkul"
    },
    {
     "no": 277,
     "team": "Bournvita Tayyari Jeet Ki",
     "college": "D. Y. Patil College of Engineering Akurdi"
    },
    {
     "no": 278,
     "team": "Iss Baar Pakka ICPC",
     "college": "Indian Institute of Information Technology, Kota"
    },
    {
     "no": 279,
     "team": "Runtime Terror",
     "college": "Indian Institute Of Technology Jodhpur"
    },
    {
     "no": 280,
     "team": "Cheems Coders",
     "college": "BIT Sindri"
    },
    {
     "no": 281,
     "team": "Technitians",
     "college": "National Institute of Technology Goa"
    },
    {
     "no": 282,
     "team": "BogBois",
     "college": "BITS-Pilani, Goa Campus"
    },
    {
     "no": 283,
     "team": "pratyush_nitgoa",
     "college": "National Institute of Technology Goa"
    },
    {
     "no": 284,
     "team": "Logic Wizards",
     "college": "PDPM Indian Institute of Information Technology Design & Manufacturing, Jabalpur"
    },
    {
     "no": 285,
     "team": "Binary Beast",
     "college": "Pimpri Chinchwad College of Engineering, Pune"
    },
    {
     "no": 286,
     "team": "Unknown_trio",
     "college": "IIT ISM DHANBAD"
    },
    {
     "no": 287,
     "team": "Haystack Needlers",
     "college": "Army institute of Technology"
    },
    {
     "no": 288,
     "team": "MATRIXBREAKERS",
     "college": "Parul Institute of Technology"
    },
    {
     "no": 289,
     "team": "Team Debuggers",
     "college": "Indian Institute of Information Technology,Una"
    },
    {
     "no": 290,
     "team": "Andromeda",
     "college": "Techno India University"
    },
    {
     "no": 291,
     "team": "SPYKIDS",
     "college": "National institute of technology silchar"
    },
    {
     "no": 292,
     "team": "CodeExplode",
     "college": "Thapar Institute of Engineering & Technology"
    },
    {
     "no": 293,
     "team": "Code Crypt",
     "college": "Shah & Anchor Kutchhi Engineering College"
    },
    {
     "no": 294,
     "team": "Bhupendra_Jogi@444",
     "college": "Army Institute of Technology"
    },
    {
     "no": 295,
     "team": "PEACE",
     "college": "Government College of Engineering, Amravati"
    },
    {
     "no": 296,
     "team": "Botcoders",
     "college": "Indian Institute Of Technology Indore"
    },
    {
     "no": 297,
     "team": "KITE",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 298,
     "team": "Depixelate",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 299,
     "team": "CODE RED",
     "college": "Indian Institution of Information technology Kota"
    },
    {
     "no": 300,
     "team": "Three_Pointers",
     "college": "indian institute of information technology kottayam"
    },
    {
     "no": 301,
     "team": "ctrl+shift+esc",
     "college": "Jalpaiguri Government Engineering College"
    },
    {
     "no": 302,
     "team": "Team Pandas",
     "college": "University School of Information, Communication and Technology"
    },
    {
     "no": 303,
     "team": "babuchak jethiya",
     "college": "Institute of Engineering and Management, Calcutta"
    },
    {
     "no": 304,
     "team": "ACC",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 305,
     "team": "Universe 7",
     "college": "Dr. D.Y. Patil Institute of Technology"
    },
    {
     "no": 306,
     "team": "Believers",
     "college": "BMS College of Engineering"
    },
    {
     "no": 307,
     "team": "forever_noobies",
     "college": "Dr. Babasaheb Ambedkar Technological University"
    },
    {
     "no": 308,
     "team": "Baldev Ford",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 309,
     "team": "IntoxicatedSouls",
     "college": "Indian Institute of Information Technology Guwahati"
    },
    {
     "no": 310,
     "team": "Deadlock",
     "college": "National Institute of Technology, Hamirpur"
    },
    {
     "no": 311,
     "team": "plzGodQualifyUs",
     "college": "CMR INSTITUTE OF TECHNOLOGY, HYDERABAD"
    },
    {
     "no": 312,
     "team": "Three Coders",
     "college": "Indian Institute of Information Technology Bhagalpur"
    },
    {
     "no": 313,
     "team": "StackOverFlown",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 314,
     "team": "ACES",
     "college": "Motilal Nehru national institute of technology"
    },
    {
     "no": 315,
     "team": "Fenwick Three",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 316,
     "team": "BitBusters",
     "college": "Motilal Nehru National Institute of Technology"
    },
    {
     "no": 317,
     "team": "Red Black Three",
     "college": "National Institute of Technology Rourkela"
    },
    {
     "no": 318,
     "team": "papy_people",
     "college": "BITS-Pilani, Goa Campus"
    },
    {
     "no": 319,
     "team": "LOGIC LEGENDS",
     "college": "indian institute of information technology, pune"
    },
    {
     "no": 320,
     "team": "Fifty Shades of Code",
     "college": "Indian Institute of Information Technology Kottayam"
    },
    {
     "no": 321,
     "team": "WAtoACChamps",
     "college": "Kamla Nehru Institute of Technology"
    },
    {
     "no": 322,
     "team": "Team_DmD",
     "college": "Thadomal Shahani Engineering College"
    },
    {
     "no": 323,
     "team": "Hung Up On A Binary Tree",
     "college": "Madhav Institute of Technology and Science, Gwalior"
    },
    {
     "no": 324,
     "team": "old_monks",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 325,
     "team": "segment_trACk",
     "college": "Indian Institute of technology - Kanpur"
    },
    {
     "no": 326,
     "team": "VSSUT_Coders",
     "college": "Veer Surendra Sai University of Technology, Burla"
    },
    {
     "no": 327,
     "team": "Fuzz Exception",
     "college": "Yeshwantrao Chavan College of Engineering"
    },
    {
     "no": 328,
     "team": "Sigma",
     "college": "BIT SINDRI"
    },
    {
     "no": 329,
     "team": "3 Coder's",
     "college": "Sona College of Technology"
    },
    {
     "no": 330,
     "team": "cp_ne_13_14",
     "college": "IIT Bhubaneswar"
    },
    {
     "no": 331,
     "team": "BharosaRakho",
     "college": "Indian Institute of Technology (Indian School of Mines) Dhanbad"
    },
    {
     "no": 332,
     "team": "3_Pointer",
     "college": "Jaypee University of Engineering and Technology, Guna"
    },
    {
     "no": 333,
     "team": "Sensibles",
     "college": "D. Y. Patil College of Engineering Akurdi"
    },
    {
     "no": 334,
     "team": "lite lo",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 335,
     "team": "Kuch Bhi",
     "college": "Indraprastha Institute of Information Technology"
    },
    {
     "no": 336,
     "team": "Team Not Found",
     "college": "BIT Sindri"
    },
    {
     "no": 337,
     "team": "CRIP",
     "college": "Mahindra University Ecole Centrale"
    },
    {
     "no": 338,
     "team": "Warriors_3103",
     "college": "VNR Vignana Jyothi Institute of Engineering And Technology"
    },
    {
     "no": 339,
     "team": "OdinSpam",
     "college": "Parul Institute of Engineering & Technology"
    },
    {
     "no": 340,
     "team": "Bit Bandits07",
     "college": "Parul Institute Of Engineering And Technology"
    },
    {
     "no": 341,
     "team": "CodeHers",
     "college": "Indira Gandhi Delhi Technical University for Women"
    },
    {
     "no": 342,
     "team": "Binary Brain",
     "college": "ITS Engineering College"
    },
    {
     "no": 343,
     "team": "TriBlazers",
     "college": "IIT Bhubaneswar"
    },
    {
     "no": 344,
     "team": "Testcase - 3",
     "college": "Indian Institute of Information Technology Pune"
    },
    {
     "no": 345,
     "team": "Potentials",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 346,
     "team": "FATE",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY RANCHI"
    },
    {
     "no": 347,
     "team": "Savants",
     "college": "Yeshwantrao Chavan College Of Engineering Nagpur"
    },
    {
     "no": 348,
     "team": "INT_uition",
     "college": "Chitkara University"
    },
    {
     "no": 349,
     "team": "Team_NVY",
     "college": "Chitkara University"
    },
    {
     "no": 350,
     "team": "Code_bandits",
     "college": "ABES Engineering College"
    },
    {
     "no": 351,
     "team": "Zenith Coders",
     "college": "Army Institute Of Technology"
    },
    {
     "no": 352,
     "team": "Mod_X",
     "college": "Indian Institute of Information Technology Kalyani"
    },
    {
     "no": 353,
     "team": "Dead people",
     "college": "Prof. Ram Meghe Institute of Technology and Research, Amravati"
    },
    {
     "no": 354,
     "team": "PAIN",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 355,
     "team": "CodeTechies",
     "college": "Bengal Institute of Technology"
    },
    {
     "no": 356,
     "team": "Tourist",
     "college": "Pranveer Singh Institute of Technology"
    },
    {
     "no": 357,
     "team": "Atomic_coderz",
     "college": "ABES Engineering College"
    },
    {
     "no": 358,
     "team": "cookies",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 359,
     "team": "GobbleDyCoders",
     "college": "Indian Institute Of Information Technology, Allahabad"
    },
    {
     "no": 360,
     "team": "V*iit",
     "college": "Vishwakarma Institute of Information Technology"
    },
    {
     "no": 361,
     "team": "OctalBytes",
     "college": "Vignan's Institute of Information Technology"
    },
    {
     "no": 362,
     "team": "Since 2023",
     "college": "Amrita School of Engineering, Kollam"
    },
    {
     "no": 363,
     "team": "Bit-by-Bit",
     "college": "Terna Engineering College"
    },
    {
     "no": 364,
     "team": "SSS",
     "college": "Bhilai Institute of Technology, Durg"
    },
    {
     "no": 365,
     "team": "Sentinels",
     "college": "Amrita School of Engineering, Kollam"
    },
    {
     "no": 366,
     "team": "ACJ",
     "college": "Indian Institute of Technology Bombay"
    },
    {
     "no": 367,
     "team": "Joint_Family",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 368,
     "team": "LowKeyCoders",
     "college": "IIIT Delhi"
    },
    {
     "no": 369,
     "team": "Swaradit",
     "college": "Institute of Engineering & Technology, Lucknow"
    },
    {
     "no": 370,
     "team": "CodeBars",
     "college": "University Institute of Engineering and Technology, Kurukshetra University"
    },
    {
     "no": 371,
     "team": "CoDeC Barbarians",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 372,
     "team": "Bitmask_SRV",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 373,
     "team": "Rookie_Errors",
     "college": "International Institute of Information Technology Naya Raipur"
    },
    {
     "no": 374,
     "team": "MLE",
     "college": "Gokaraju Rangaraju Institute of engineering and Technology"
    },
    {
     "no": 375,
     "team": "Null Ninjas",
     "college": "Indian Institute of Information Technology, Kota"
    },
    {
     "no": 376,
     "team": "CODSOC_25",
     "college": "NITRA Technical Campus, Ghaziabad"
    },
    {
     "no": 377,
     "team": "Error 402",
     "college": "Amrita School of Engineering, Kollam"
    },
    {
     "no": 378,
     "team": "crackers",
     "college": "KIIT University"
    },
    {
     "no": 379,
     "team": "BIT Wizards",
     "college": "Birla Institute of Technology Mesra"
    },
    {
     "no": 380,
     "team": "ANK",
     "college": "VNR Vignana Jyothi Institute of Engineering &#38;amp; Technology"
    },
    {
     "no": 381,
     "team": "samurai",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 382,
     "team": "TheNotorious",
     "college": "Rajasthan Technical University, Kota"
    },
    {
     "no": 383,
     "team": "Aayein",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 384,
     "team": "Bug",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 385,
     "team": "Baker Street 221B",
     "college": "Indian Institute of Technology(Indian School of Mines) , Dhanbad"
    },
    {
     "no": 386,
     "team": "CoDeC TLE",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 387,
     "team": "Assemblers",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 388,
     "team": "Byte Battlers",
     "college": "BITS-Pilani,Goa Campus"
    },
    {
     "no": 389,
     "team": "AAYIEN?",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 390,
     "team": "XYZ",
     "college": "Indian Institute of Information Technology"
    },
    {
     "no": 391,
     "team": "JNU.cpp",
     "college": "School of Engineering , Jawaharlal Nehru University"
    },
    {
     "no": 392,
     "team": "Serial Coders",
     "college": "Goa Engineering College"
    },
    {
     "no": 393,
     "team": "Underdogs",
     "college": "IIT Indore"
    },
    {
     "no": 394,
     "team": "Kuro",
     "college": "Indian Institute of Information Technology Bhagalpur"
    },
    {
     "no": 395,
     "team": "I See PC",
     "college": "Motilal Nehru National Institute of Technology, Allahabad"
    },
    {
     "no": 396,
     "team": "Not_Listed",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 397,
     "team": "oye_papaji",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 398,
     "team": "Shoonya",
     "college": "University Institute of Engineering and Technology, CSJMU, Kanpur"
    },
    {
     "no": 399,
     "team": "Efficiency Enforcers",
     "college": "KIET Group of Institutions"
    },
    {
     "no": 400,
     "team": "SegmentRizz",
     "college": "Delhi Technological University"
    },
    {
     "no": 401,
     "team": "Battery Saver On",
     "college": "Chitkara University"
    },
    {
     "no": 402,
     "team": "Cyber_Wolves",
     "college": "Rajkiya Engineering College Bijnor"
    },
    {
     "no": 403,
     "team": "Saksham",
     "college": "MIT Academy Of Engineering"
    },
    {
     "no": 404,
     "team": "candidate_keys",
     "college": "Netaji Subhas University of Technology"
    },
    {
     "no": 405,
     "team": "HACK ELITE",
     "college": "ABES Engineering College"
    },
    {
     "no": 406,
     "team": "Sammaan",
     "college": "National Institute of Technology, Uttarakhand"
    },
    {
     "no": 407,
     "team": "Tier69420",
     "college": "Institute of Engineering and Technology, Lucknow"
    },
    {
     "no": 408,
     "team": "N-Kings",
     "college": "Chandigarh University"
    },
    {
     "no": 409,
     "team": "SAV",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 410,
     "team": "Bitmasking",
     "college": "Thakur college of engineering and technology"
    },
    {
     "no": 411,
     "team": "Lorem Ipsum",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 412,
     "team": "USS",
     "college": "Jaypee University of Engineering and Technology"
    },
    {
     "no": 413,
     "team": "ISeePusy",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 414,
     "team": "AlooKheeraTamatar",
     "college": "National Institute of Technology, Raipur"
    },
    {
     "no": 415,
     "team": "Team Alias",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 416,
     "team": "L Ratios",
     "college": "The LNM Institute of Information Technology"
    },
    {
     "no": 417,
     "team": "torrential",
     "college": "M. S. Ramaiah Institute of Technology"
    },
    {
     "no": 418,
     "team": "DEV > CP",
     "college": "K. J. Somaiya College of Engineering, Vidyavihar, Mumbai"
    },
    {
     "no": 419,
     "team": "Qaske",
     "college": "Keshav memorial institute of technology"
    },
    {
     "no": 420,
     "team": "Roasted Chicken",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 421,
     "team": "Aukaat ke Bahar",
     "college": "Dr. B R Ambedkar National Institute of Technology, Jalandhar"
    },
    {
     "no": 422,
     "team": "CricCoders",
     "college": "Indian Institute of Technology Jodhpur"
    },
    {
     "no": 423,
     "team": "bro-code",
     "college": "University Institute of Engineering and Technology, CSJMU Kanpur"
    },
    {
     "no": 424,
     "team": "Garud",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 425,
     "team": "Express",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 426,
     "team": "Binary Search FTW",
     "college": "Sir M. Visvesvaraya Institute of Technology"
    },
    {
     "no": 427,
     "team": "The Titans",
     "college": "Visvesvaraya National Institute of Technology (VNIT Nagpur)"
    },
    {
     "no": 428,
     "team": "Team_Recursor",
     "college": "Indian Institute of Technology Tirupati"
    },
    {
     "no": 429,
     "team": "BrainLimitExceeded",
     "college": "Institute of Engineering and Technology - Devi Ahilya Univ."
    },
    {
     "no": 430,
     "team": "RYUJIN",
     "college": "Indian Institute of Information Technology Guwahati"
    },
    {
     "no": 431,
     "team": "Cybercoders",
     "college": "Sri Ramachandra Institute of Higher Education and Research"
    },
    {
     "no": 432,
     "team": "YKD",
     "college": "Yeshwantrao Chavan College of Engineering Nagpur"
    },
    {
     "no": 433,
     "team": "LazyBusters",
     "college": "Nirma University"
    },
    {
     "no": 434,
     "team": "Just3Newbies",
     "college": "Indian Institute of Technology, Patna"
    },
    {
     "no": 435,
     "team": "HackandWhack",
     "college": "Institute of Engineering and Technology, Lucknow"
    },
    {
     "no": 436,
     "team": "Coders-X",
     "college": "BIT Sindri"
    },
    {
     "no": 437,
     "team": "Brahmos",
     "college": "NIT Silchar"
    },
    {
     "no": 438,
     "team": "Phantom_Beast",
     "college": "Nirma University"
    },
    {
     "no": 439,
     "team": "KSY-fi",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 440,
     "team": "HeadHunterz",
     "college": "Indian Institute of Technology Indore"
    },
    {
     "no": 441,
     "team": "BitMaskers",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 442,
     "team": "Point Break",
     "college": "VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND"
    },
    {
     "no": 443,
     "team": "WirelessDP",
     "college": "Nirma University"
    },
    {
     "no": 444,
     "team": "masala_chach",
     "college": "JSS Academy Of Technical Education, Noida"
    },
    {
     "no": 445,
     "team": "Code Crafter",
     "college": "Dr. B. R. Ambedkar National Institute of Technology Jalandhar"
    },
    {
     "no": 446,
     "team": "ECHObytes",
     "college": "Indian Institute of Information Technology , Nagpur"
    },
    {
     "no": 447,
     "team": "TLE_SHINCHAN",
     "college": "Netaji Subhas University of Technology"
    },
    {
     "no": 448,
     "team": "always_trie",
     "college": "Vidyalankar Institute of Technology"
    },
    {
     "no": 449,
     "team": "HighOnCode",
     "college": "RCC Institute of Information Technology"
    },
    {
     "no": 450,
     "team": "SAY_CODE",
     "college": "PDPM Indian Institute of Information Technology Design & Manufacturing, Jabalpur"
    },
    {
     "no": 451,
     "team": "TopG",
     "college": "Indian Institute of Information Technology Guwahati"
    },
    {
     "no": 452,
     "team": "Telegram_Koders",
     "college": "Indian Institute of Information Technology Pune"
    },
    {
     "no": 453,
     "team": "BYTEBUSTERS",
     "college": "Vellore Institute of Technology"
    },
    {
     "no": 454,
     "team": "Velocity",
     "college": "Indian Institute of Technology, Ropar"
    },
    {
     "no": 455,
     "team": "Baker Street Irregulars",
     "college": "Indian Institute of Technology - Ropar"
    },
    {
     "no": 456,
     "team": "102op",
     "college": "Indian Institute of Information Technology Guwahati"
    },
    {
     "no": 457,
     "team": "brain_limit_exceeded",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 458,
     "team": "Bug_Off",
     "college": "Vellore Institute of Technology, Bhopal"
    },
    {
     "no": 459,
     "team": "CoDeC Motivators",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 460,
     "team": "Noobie",
     "college": "Indian Institute of Information Technology, Allahabad"
    },
    {
     "no": 461,
     "team": "KMP",
     "college": "Indian Institute of Information Technology, Guwahati"
    },
    {
     "no": 462,
     "team": "KeyBros",
     "college": "Indian Institute of Information Technology, Guwahati"
    },
    {
     "no": 463,
     "team": "CP_ACE",
     "college": "Atharva College of Engineering"
    },
    {
     "no": 464,
     "team": "3 unknowns",
     "college": "GLA University, Mathura"
    },
    {
     "no": 465,
     "team": "NPN_Trasistors",
     "college": "National Institute of Technology, Rourkela"
    },
    {
     "no": 466,
     "team": "Team_Teleforces",
     "college": "Indian Institute of Technology, Patna"
    },
    {
     "no": 467,
     "team": "Team PC",
     "college": "Ajay Kumar Garg Engineering Collge"
    },
    {
     "no": 468,
     "team": "CodeVariants",
     "college": "Shri Ramdeobaba College of Engineering and Management"
    },
    {
     "no": 469,
     "team": "generateTeamName.exe",
     "college": "Thiagarajar College of Engineering"
    },
    {
     "no": 470,
     "team": "CodeSena",
     "college": "National institute of technology jamshedpur"
    },
    {
     "no": 471,
     "team": "DukhDardPeeda",
     "college": "Indian Institute Of Technology, Tirupati"
    },
    {
     "no": 472,
     "team": "Coders Hustle",
     "college": "Indian Institute of Engineering Science and Technology, Shibpur"
    },
    {
     "no": 473,
     "team": "Bugtrio",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 474,
     "team": "EpsilonNot",
     "college": "Sant Longowal Institute of Engineering and Technology"
    },
    {
     "no": 475,
     "team": "Bit of Fun",
     "college": "National Institute of Technology Karnataka, Surathkul"
    },
    {
     "no": 476,
     "team": "Phinisss",
     "college": "National Institute of Technology, Puducherry"
    },
    {
     "no": 477,
     "team": "Zenith Ultima",
     "college": "Indian Institute Of Technology Jodhpur"
    },
    {
     "no": 478,
     "team": "India",
     "college": "India"
    },
    {
     "no": 479,
     "team": "CoDeC Ninjas",
     "college": "Dr. Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 480,
     "team": "SiGMa",
     "college": "Thiagarajar College of Engineering"
    },
    {
     "no": 481,
     "team": "Bro BGP Coders",
     "college": "Yeshwantrao chavan College of Engineering"
    },
    {
     "no": 482,
     "team": "Code_Manga",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 483,
     "team": "Ctrl Freaks",
     "college": "Amrita School of Engineering, Coimbatore"
    },
    {
     "no": 484,
     "team": "Clueless hunters",
     "college": "Thiagarajar College of Engineering"
    },
    {
     "no": 485,
     "team": "pied.piper",
     "college": "IIIT KOTTAYAM"
    },
    {
     "no": 486,
     "team": "Zero Kelvin",
     "college": "IIT Ropar"
    },
    {
     "no": 487,
     "team": "ByteMasters",
     "college": "Pimpri Chinchwad College Of Engineering, Pune"
    },
    {
     "no": 488,
     "team": "AlmostGods",
     "college": "Vignan's Institute of Information Technology"
    },
    {
     "no": 489,
     "team": "empty_minds",
     "college": "Rajasthan Technical University kota"
    },
    {
     "no": 490,
     "team": "__place_holder__",
     "college": "Karunya Institute of Technology and Sciences"
    },
    {
     "no": 491,
     "team": "ByteBenders",
     "college": "Amrita School of Engineering, Coimbatore"
    },
    {
     "no": 492,
     "team": "takeabyte",
     "college": "Jadavpur University, Kolkata"
    },
    {
     "no": 493,
     "team": "XORcists",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 494,
     "team": "The trio",
     "college": "Motilal Nehru National Institute of Technology -Allahabad"
    },
    {
     "no": 495,
     "team": "Team SUS",
     "college": "Ajay Kumar Garg Engineering College, Ghaziabad"
    },
    {
     "no": 496,
     "team": "AnythingIsFine",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 497,
     "team": "Incredibles",
     "college": "Vignan's Institute of Information Technology"
    },
    {
     "no": 498,
     "team": "Over the Pretest",
     "college": "Nirma University"
    },
    {
     "no": 499,
     "team": "nhipata",
     "college": "BITS Pilani"
    },
    {
     "no": 500,
     "team": "Alaska",
     "college": "Pimpri Chinchwad College of Engineering, Pune"
    },
    {
     "no": 501,
     "team": "Jai Bholenath",
     "college": "Maharaja agrasen Institute of Technology"
    },
    {
     "no": 502,
     "team": "trieMEX",
     "college": "Deenbandhu Chhotu Ram University of Science and Technology"
    },
    {
     "no": 503,
     "team": "OverShadow",
     "college": "IIT (BHU) Varanasi"
    },
    {
     "no": 504,
     "team": "VRV",
     "college": "Thadomal Shahani Engineering College"
    },
    {
     "no": 505,
     "team": "IMPerium",
     "college": "National Institute of Technology,Durgapur"
    },
    {
     "no": 506,
     "team": "Array Avengers",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 507,
     "team": "Coderus",
     "college": "Nirma University"
    },
    {
     "no": 508,
     "team": "iostream",
     "college": "Jadavpur University, Kolkata"
    },
    {
     "no": 509,
     "team": "DP_BY_MATH",
     "college": "Nirma University"
    },
    {
     "no": 510,
     "team": "Nahi_hi_hoga",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 511,
     "team": "Icarus",
     "college": "Birla Institute of Technology and Science, Pilani, Hyderabad Campus"
    },
    {
     "no": 512,
     "team": "Pinaka",
     "college": "National Institute of Technology Kurukshetra"
    },
    {
     "no": 513,
     "team": "Hecker Hats",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 514,
     "team": "gladiators",
     "college": "Malaviya National Institute of Technology Jaipur"
    },
    {
     "no": 515,
     "team": "Woopers",
     "college": "Indian Institute of Information Technology, Sri City, Chittoor"
    },
    {
     "no": 516,
     "team": "Yorozuya Forever",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 517,
     "team": "ThreeLE",
     "college": "University Institute of Engineering and Technology, CSJMU, Kanpur"
    },
    {
     "no": 518,
     "team": "Com coders",
     "college": "Dj Sanghvi"
    },
    {
     "no": 519,
     "team": "AlgoUnleash",
     "college": "Harcourt Butler Technical University, Kanpur"
    },
    {
     "no": 520,
     "team": "TimeLimitExtended",
     "college": "Indian Institute of Technology, Madras"
    },
    {
     "no": 521,
     "team": "Algobits",
     "college": "Amrita School of Engineering, Kollam"
    },
    {
     "no": 522,
     "team": "regretISMa",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 523,
     "team": "CharanForce",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 524,
     "team": "isaaraynak",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 525,
     "team": "SegThree",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 526,
     "team": "Null Cmd",
     "college": "M. S. Ramaiah Institute of Technology"
    },
    {
     "no": 527,
     "team": "Pyrex",
     "college": "National Institute Of Technology Hamirpur"
    },
    {
     "no": 528,
     "team": "Cult council",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 529,
     "team": "PBCart3",
     "college": "BITS-Pilani, Hyderabad Campus"
    },
    {
     "no": 530,
     "team": "Debugger3x",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 531,
     "team": "ethOS",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 532,
     "team": "CodeRunner",
     "college": "Institute of Engineering and Technology,Lucknow"
    },
    {
     "no": 533,
     "team": "TLE_ON_PRETEST_2",
     "college": "Harcourt Butler Technical University Kanpur"
    },
    {
     "no": 534,
     "team": "Verified Batak",
     "college": "yeshwantrao college of engineering nagpur"
    },
    {
     "no": 535,
     "team": "CodexTreme",
     "college": "Institute of Engineering & Technology, Lucknow"
    },
    {
     "no": 536,
     "team": "BigO(7)",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 537,
     "team": "Buriburizaemon",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 538,
     "team": "lemon",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 539,
     "team": "SkillIssue",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 540,
     "team": "OnTheSpot",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 541,
     "team": "CodegeekS",
     "college": "Bengal Institute of Technology, Tech Town"
    },
    {
     "no": 542,
     "team": "CodeWave",
     "college": "Dronacharya College of Engineering"
    },
    {
     "no": 543,
     "team": "lastRide",
     "college": "Fr. Conceicao Rodrigues Institute of Technology"
    },
    {
     "no": 544,
     "team": "ManiacCoders3620",
     "college": "Indian Institute of Information Technology Bhopal"
    },
    {
     "no": 545,
     "team": "Bogo_Sorters",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 546,
     "team": "YBH",
     "college": "Chennai Mathematical Institute"
    },
    {
     "no": 547,
     "team": "Hello world",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 548,
     "team": "Penguins of Roorkee",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 549,
     "team": "Mech_Coders",
     "college": "Dwarkadas J Sanghvi College of Engineering"
    },
    {
     "no": 550,
     "team": "Sigma",
     "college": "Yeshwantrao Chavhan College of Engineering"
    },
    {
     "no": 551,
     "team": "Code Warriors",
     "college": "Indian Institute of Information Technology Bhopal"
    },
    {
     "no": 552,
     "team": "Ginger Biscuit",
     "college": "Faculty Of Engineering and Technology Jain University"
    },
    {
     "no": 553,
     "team": "Loopy_bois",
     "college": "Indian Institute of Information Technology Bhopal"
    },
    {
     "no": 554,
     "team": "Anything",
     "college": "Vellore Institute of Technology, Vellore"
    },
    {
     "no": 555,
     "team": "Kozhicoders",
     "college": "National Institute of Technology, Calicut"
    },
    {
     "no": 556,
     "team": "NP_Hard",
     "college": "Rajiv Gandhi Institute of Petroleum Technology"
    },
    {
     "no": 557,
     "team": "CodingKnights",
     "college": "Institute of Engineering & Management, Kolkata"
    },
    {
     "no": 558,
     "team": "Disjoint Forget Union",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 559,
     "team": "Unique_Coders",
     "college": "National Institute of Technology, Meghalaya"
    },
    {
     "no": 560,
     "team": "Complete Beginners",
     "college": "Indian Institute of Information Technology, Dharwad"
    },
    {
     "no": 561,
     "team": "Coder Clan",
     "college": "Netaji Subhas University of Technology"
    },
    {
     "no": 562,
     "team": "redmaple",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 563,
     "team": "Hacktivists",
     "college": "Amrita School of Engineering, Coimbatore"
    },
    {
     "no": 564,
     "team": "import IITT.threePeople.*;",
     "college": "Indian Institute of Technology, Tirupati"
    },
    {
     "no": 565,
     "team": "descendents of Tourist",
     "college": "National Institute of Technology, Rourkela"
    },
    {
     "no": 566,
     "team": "3weak2gm",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 567,
     "team": "The Owls",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 568,
     "team": "300IQ",
     "college": "Thakur College of Engineering and Technology"
    },
    {
     "no": 569,
     "team": "Team Limit Exceeded",
     "college": "IIT Kanpur"
    },
    {
     "no": 570,
     "team": "Loaded_Souls",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 571,
     "team": "naam_lite",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 572,
     "team": "Deburgers",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 573,
     "team": "Brittard",
     "college": "International Institute of Information Technology - Bangalore"
    },
    {
     "no": 574,
     "team": "ANS",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 575,
     "team": "Goblin Barrel",
     "college": "National Institute of Technology, Calicut"
    },
    {
     "no": 576,
     "team": "Incompetent",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 577,
     "team": "SegFault",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 578,
     "team": "GojoSenseiNhiRhe",
     "college": "Indian Institute of Technology (Indian School of Mines) Dhanbad"
    },
    {
     "no": 579,
     "team": "MSV",
     "college": "National Institute of Technology, Warangal"
    },
    {
     "no": 580,
     "team": "Aegon",
     "college": "Veer Surendra Sai University of Technology"
    },
    {
     "no": 581,
     "team": "codeeagles",
     "college": "Rashtreeya Vidyalaya College of Engineering"
    },
    {
     "no": 582,
     "team": "vector visionaries",
     "college": "Indian Institute of Information Technology Kottayam"
    },
    {
     "no": 583,
     "team": "Non Greedy",
     "college": "National Institute of Technology, Patna"
    },
    {
     "no": 584,
     "team": "X-sentinel",
     "college": "Sant Longowal Institute of Engineering and Technology"
    },
    {
     "no": 585,
     "team": "Wire Sharks",
     "college": "Indian Institute of Engineering Science and Technology"
    },
    {
     "no": 586,
     "team": "THE_ENDGAME",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 587,
     "team": "Bright Out",
     "college": "Indore Institute of Science and Technology"
    },
    {
     "no": 588,
     "team": "BinaryFlip",
     "college": "Indian Institute of Technology Palakkad"
    },
    {
     "no": 589,
     "team": "Ctrl_Alt_Elite",
     "college": "Indian Institute of Information Technology Nagpur"
    },
    {
     "no": 590,
     "team": "lets_bring_sev1",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 591,
     "team": "bitmASKers",
     "college": "IIT Roorkee"
    },
    {
     "no": 592,
     "team": "second_by_choice",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 593,
     "team": "last_moment_coders",
     "college": "BITS-Pilani, Hyderabad Campus"
    },
    {
     "no": 594,
     "team": "RoadsideCoders",
     "college": "Birla Institute of Technology and Science Pilani, Pilani Campus"
    },
    {
     "no": 595,
     "team": "Pushpa",
     "college": "Institute of Engineering and Technology"
    },
    {
     "no": 596,
     "team": "seg_fault",
     "college": "Indian Institute of Technology, Tirupati"
    },
    {
     "no": 597,
     "team": "ECE coders",
     "college": "Indian Institute of Technology - Guwahati"
    },
    {
     "no": 598,
     "team": "ZugZwang",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 599,
     "team": "Out of Bounds",
     "college": "Gayatri Vidya Parishad College Of Engineering"
    },
    {
     "no": 600,
     "team": "Tri_Force",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 601,
     "team": "SoE_JNU",
     "college": "Jawaharlal Nehru University"
    },
    {
     "no": 602,
     "team": "Solution.cpp",
     "college": "Indian Institute of Information Technology Kottayam"
    },
    {
     "no": 603,
     "team": "Logic-legion",
     "college": "Indian Institute of Information technology, Bhopal"
    },
    {
     "no": 604,
     "team": "bpm_yo",
     "college": "National Institute of Technology, Trichy"
    },
    {
     "no": 605,
     "team": "Microspringers",
     "college": "Dhirubhai Ambani Institute of Information and Communication Technology"
    },
    {
     "no": 606,
     "team": "Electrifying_Abhinavs",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 607,
     "team": "using namespace icpc;",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 608,
     "team": "Haunted Skillset",
     "college": "Vnr vignana Jyothi institute of engineering and technology"
    },
    {
     "no": 609,
     "team": "Code Wreckers",
     "college": "Thiagarajar college of Engineering"
    },
    {
     "no": 610,
     "team": "TEAM KDK",
     "college": "Netaji Subhash University Of Technology"
    },
    {
     "no": 611,
     "team": "thatswhatCsaid",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 612,
     "team": "PointerPundits",
     "college": "Pune Institute Of Computer Technology"
    },
    {
     "no": 613,
     "team": "TeamX",
     "college": "CMR IT Bangalore"
    },
    {
     "no": 614,
     "team": "Code Wizards",
     "college": "National Institute of Technology Jamshedpur"
    },
    {
     "no": 615,
     "team": "Code Crafters",
     "college": "Walchand College of Engineering, Sangli"
    },
    {
     "no": 616,
     "team": "PBX1",
     "college": "Birla Institute of Technology, Mesra"
    },
    {
     "no": 617,
     "team": "Ram Bhrose",
     "college": "National Institute of Technology Raipur"
    },
    {
     "no": 618,
     "team": "India",
     "college": "India"
    },
    {
     "no": 619,
     "team": "Hashers",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 620,
     "team": "DeathCode",
     "college": "Indian Institute of Technology, Hyderabad"
    },
    {
     "no": 621,
     "team": "AlgoAllies",
     "college": "Birla Institute of Technology &#38;amp; Science,Pilani Campus"
    },
    {
     "no": 622,
     "team": "Team Primus",
     "college": "Sona College of Technology"
    },
    {
     "no": 623,
     "team": "ISeePeePee",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 624,
     "team": "Expert_coders",
     "college": "Kalyani Government Engineering College"
    },
    {
     "no": 625,
     "team": "Marshmallows",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 626,
     "team": "AlgoLite",
     "college": "BITS-Pilani, Goa Campus"
    },
    {
     "no": 627,
     "team": "Bit Bitches",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 628,
     "team": "3bit",
     "college": "Jaypee University of Engineering and Technology"
    },
    {
     "no": 629,
     "team": "e^ipi=1",
     "college": "International Institute of Information Technology- Hyderabad"
    },
    {
     "no": 630,
     "team": "AppleIsRed",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 631,
     "team": "Trinity",
     "college": "Veermata Jijabai Technological Institute"
    },
    {
     "no": 632,
     "team": "Nipa",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 633,
     "team": "Ek Akhri Baar",
     "college": "Indian Institute of Technology,Ropar"
    },
    {
     "no": 634,
     "team": "pocha",
     "college": "Dr B R AmbedkarNational Institute of Technology"
    },
    {
     "no": 635,
     "team": "Treenity",
     "college": "Indian Institute of Technology Ropar"
    },
    {
     "no": 636,
     "team": "borderline",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 637,
     "team": "LifeTimeError",
     "college": "University Institute of Engineering and Technology, Panjab University"
    },
    {
     "no": 638,
     "team": "Ip_ag",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 639,
     "team": "Bhupendra Jogi",
     "college": "IIT Roorkee"
    },
    {
     "no": 640,
     "team": "Build_Complete",
     "college": "Indian Institute of Technology - Ropar"
    },
    {
     "no": 641,
     "team": "Varients",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 642,
     "team": "helper_function",
     "college": "Kalinga Institute Of Industrial Technology,Bhubaneswar"
    },
    {
     "no": 643,
     "team": "Royal Challengers",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 644,
     "team": "EXCEPTION EXORCISTS",
     "college": "Indian Institute of Technology, Tirupati"
    },
    {
     "no": 645,
     "team": "team kya hota hai",
     "college": "Indian Institute of Technology, Roorkee"
    },
    {
     "no": 646,
     "team": "Big Black Bonda",
     "college": "International Institute of Information Technology, Hyderabad"
    },
    {
     "no": 647,
     "team": "codeCruXaders",
     "college": "BITS Pilani Hyderabad Campus"
    },
    {
     "no": 648,
     "team": "Tricoders",
     "college": "Thiagarajar College of Engineering"
    },
    {
     "no": 649,
     "team": "RSA",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 650,
     "team": "Team73",
     "college": "Indian Insitute of Technology, Ropar"
    },
    {
     "no": 651,
     "team": "duckboys",
     "college": "Indian Institute of Technology - Guwahati"
    },
    {
     "no": 652,
     "team": "Spectators",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 653,
     "team": "Promoted Pawns",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 654,
     "team": "MrunalRejects",
     "college": "BITS-Pilani, Hyderabad Campus"
    },
    {
     "no": 655,
     "team": "Edward_fan_club",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 656,
     "team": "executers",
     "college": "Indian Institute of Technology Ropar"
    },
    {
     "no": 657,
     "team": "Homo_CPians",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 658,
     "team": "Apratyaksh",
     "college": "Madan Mohan Malaviya University of Technology"
    },
    {
     "no": 659,
     "team": "Forbidden_programmers",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 660,
     "team": "Team Sheldon",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 661,
     "team": "BhupendarJogi",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 662,
     "team": "Code Conjurers",
     "college": "Indian Institute of Technology - Ropar"
    },
    {
     "no": 663,
     "team": "IXXITwelve",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 664,
     "team": "cant_trie_hard",
     "college": "BITS-Pilani, Hyderabad Campus"
    },
    {
     "no": 665,
     "team": "Hardwired",
     "college": "Indian Institute of Technology Hyderabad"
    },
    {
     "no": 666,
     "team": "Comfortably Dumb",
     "college": "National Institute of Technology Karnataka, Surathkul"
    },
    {
     "no": 667,
     "team": "LogicCrafters",
     "college": "IIT Ropar"
    },
    {
     "no": 668,
     "team": "3Blue0Brown",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 669,
     "team": "ChillyP",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 670,
     "team": "O(Trio)",
     "college": "Atharva College of Engineering"
    },
    {
     "no": 671,
     "team": "BJP",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 672,
     "team": "Ghanisht Mitrata",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 673,
     "team": "Not yet decided",
     "college": "Indian Institute of Technology, Roorkee"
    },
    {
     "no": 674,
     "team": "BitWizard",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 675,
     "team": "Argonauts_912",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 676,
     "team": "CodeX",
     "college": "Yashwantrao chavan college of engineering nagpur"
    },
    {
     "no": 677,
     "team": "Byte Bandits",
     "college": "Institute of Engineering and Technology, Lucknow"
    },
    {
     "no": 678,
     "team": "UnhandledExceptions",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 679,
     "team": "Trinetra",
     "college": "JSS Academy of Technical Education Noida"
    },
    {
     "no": 680,
     "team": "CP_pe_charcha",
     "college": "Indian Institute of Technology, Roorkee"
    },
    {
     "no": 681,
     "team": "PROgrammers",
     "college": "Indian Institute of Technology, Kharagpur"
    },
    {
     "no": 682,
     "team": "Iss baar phodenge",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 683,
     "team": "A3s",
     "college": "Yeshwantrao Chavan College of Engineering Nagpur"
    },
    {
     "no": 684,
     "team": "Cookie",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 685,
     "team": "SUS",
     "college": "Birla Institute of Technology And Science, Pilani (BITS Pilani)"
    },
    {
     "no": 686,
     "team": "postesters",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 687,
     "team": "Tiger Leap",
     "college": "Maulana Azad National Institute of Technology Bhopal"
    },
    {
     "no": 688,
     "team": "noobcoders1337",
     "college": "Shri Shankaracharya Technical Campus"
    },
    {
     "no": 689,
     "team": "Team Technogirls",
     "college": "Yeshwantrao chavan college of engineering"
    },
    {
     "no": 690,
     "team": "BC++",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 691,
     "team": "special3forces",
     "college": "Maharaja Surajmal Institute of Technology"
    },
    {
     "no": 692,
     "team": "Bottle",
     "college": "Amrita Vishwa Vidyapeetham Coimbatore"
    },
    {
     "no": 693,
     "team": "Code_smashers 2.0",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 694,
     "team": "CODA",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 695,
     "team": "LearningSTL",
     "college": "IIT ROORKEE"
    },
    {
     "no": 696,
     "team": "CyberGods",
     "college": "Amrita School of Engineering, Coimbatore"
    },
    {
     "no": 697,
     "team": "BowBow",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 698,
     "team": "coderizz",
     "college": "Delhi Technological University"
    },
    {
     "no": 699,
     "team": "CodeTraversers",
     "college": "Dronacharya College of Engineering"
    },
    {
     "no": 700,
     "team": "Blade_Runners",
     "college": "Army Institute of Technology"
    },
    {
     "no": 701,
     "team": "noty_hora_ke",
     "college": "Indian Institute of Technology, Roorkee"
    },
    {
     "no": 702,
     "team": "alwaysWA",
     "college": "Shri Shankaracharya Technical Campus"
    },
    {
     "no": 703,
     "team": "the Boys",
     "college": "Maharaja Agrasen Institute of Technology"
    },
    {
     "no": 704,
     "team": "team fiwb",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 705,
     "team": "BruteForcers",
     "college": "KLE Technological University"
    },
    {
     "no": 706,
     "team": "PrimeCalculus",
     "college": "Heritage Institute of Technology, Kolkata"
    },
    {
     "no": 707,
     "team": "ohio_trio",
     "college": "Delhi Technological University"
    },
    {
     "no": 708,
     "team": "Algorithm_Avengers",
     "college": "BVRIT Hyderabad College of Engineering for Women"
    },
    {
     "no": 709,
     "team": "DISQUALIFIED",
     "college": "Chandigarh University"
    },
    {
     "no": 710,
     "team": "CodeStack",
     "college": "National Institute of Technology, Meghalaya"
    },
    {
     "no": 711,
     "team": "Moss",
     "college": "International Institute of Information Technology-Hyderabad"
    },
    {
     "no": 712,
     "team": "TLEonTest1",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 713,
     "team": "CTRL+SHIFT+ELITE",
     "college": "Indian Institute of Information Technology Pune"
    },
    {
     "no": 714,
     "team": "Trifecta",
     "college": "Birla Institute of Technology, Mesra"
    },
    {
     "no": 715,
     "team": "Bhagwan Jane",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 716,
     "team": "bitwizards",
     "college": "IIT Roorkee"
    },
    {
     "no": 717,
     "team": "Cyber Sages",
     "college": "Yeshwantrao Chavan College of Engineering"
    },
    {
     "no": 718,
     "team": "modulo_(1e9+7)",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 719,
     "team": "A4G8K6",
     "college": "KLE Technological University"
    },
    {
     "no": 720,
     "team": "TryTrie",
     "college": "Techno International NewTown"
    },
    {
     "no": 721,
     "team": "Woh Rohit hai woh kuch bhi kar sakta",
     "college": "Indian Institute of Technology, Mandi"
    },
    {
     "no": 722,
     "team": "Whizzers",
     "college": "Yeshwantrao Chavan College of Engineering Nagpur"
    },
    {
     "no": 723,
     "team": "AlgoArtisans",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 724,
     "team": "Ex_CM_xE",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 725,
     "team": "We Don't Byte",
     "college": "Birla Institute of Technology and Science, Pilani Campus"
    },
    {
     "no": 726,
     "team": "SPD Coderz",
     "college": "Nirma University"
    },
    {
     "no": 727,
     "team": "big-oh",
     "college": "Neil Gogte Institute of Technology"
    },
    {
     "no": 728,
     "team": "SyntaxSnipers",
     "college": "Veer Surendra Sai University of Technology"
    },
    {
     "no": 729,
     "team": "Moye Moyee",
     "college": "BITS-Pilani, Hyderabad Campus"
    },
    {
     "no": 730,
     "team": "def abcd",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 731,
     "team": "Mihir Bani",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 732,
     "team": "AnyBenchers",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 733,
     "team": "Wiggly scrollbars",
     "college": "Indian Institute of Technology, Guwahati"
    },
    {
     "no": 734,
     "team": "3 spaces",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 735,
     "team": "Bits Bandits",
     "college": "KLE Technological University"
    },
    {
     "no": 736,
     "team": "Mazaak",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 737,
     "team": "Silent 3lers",
     "college": "DA-IICT"
    },
    {
     "no": 738,
     "team": "AlgorithmAvengers",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 739,
     "team": "TheDarkKnights",
     "college": "Netaji Subhas University Of Technology"
    },
    {
     "no": 740,
     "team": "Codec Titans",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 741,
     "team": "RunTimeError",
     "college": "Veer Surendra Sai University of Technology"
    },
    {
     "no": 742,
     "team": "lazy three",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 743,
     "team": "Voyagers",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 744,
     "team": "Whole Lotta Green",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 745,
     "team": "Exception Handlers",
     "college": "Sant Longowal Institute of Engineering and Technology"
    },
    {
     "no": 746,
     "team": "Div 0",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 747,
     "team": "VON",
     "college": "BITS-Pilani, Goa Campus"
    },
    {
     "no": 748,
     "team": "one_last_trie",
     "college": "Indian Institute of Technology-Madras"
    },
    {
     "no": 749,
     "team": "dp_lagega_kya?",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 750,
     "team": "comders",
     "college": "National Institute of Technology, Rourkela"
    },
    {
     "no": 751,
     "team": "Malana Team",
     "college": "Indian Institute of Technology Patna"
    },
    {
     "no": 752,
     "team": "Beyond Boba",
     "college": "National Institute of Technology, Durgapur"
    },
    {
     "no": 753,
     "team": "S.M.S",
     "college": "MLR Institute of Technology"
    },
    {
     "no": 754,
     "team": "hardcoders",
     "college": "Pimpri-Chinchwad College of Engineering"
    },
    {
     "no": 755,
     "team": "DOLO 650",
     "college": "Indian Institute of Information Technology Design and Manufacturing, Kurnool"
    },
    {
     "no": 756,
     "team": "beyond code",
     "college": "Nirma University"
    },
    {
     "no": 757,
     "team": "404 coders",
     "college": "Indian Institute of Information Technology, Surat"
    },
    {
     "no": 758,
     "team": "MillionDollarTeam",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 759,
     "team": "World Finalists",
     "college": "Indian Institute of Technology - Ropar"
    },
    {
     "no": 760,
     "team": "Course Material",
     "college": "Indian Institute of Technology Mandi"
    },
    {
     "no": 761,
     "team": "Knockout Champs",
     "college": "Jaypee Institute of Information Technology University"
    },
    {
     "no": 762,
     "team": "kabhikabhicpp",
     "college": "Indian Institute of Technology - Bombay"
    },
    {
     "no": 763,
     "team": "Void",
     "college": "Indian Institute of Information Technology Guwahati"
    },
    {
     "no": 764,
     "team": "Isko_kal_dekhte_h",
     "college": "Maharaja Surajmal Institute Of Technolgy"
    },
    {
     "no": 765,
     "team": "Triad",
     "college": "KLE Technological University"
    },
    {
     "no": 766,
     "team": "TBD",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 767,
     "team": "Null Pointers",
     "college": "Netaji Subhash University Of Technology"
    },
    {
     "no": 768,
     "team": "BLITZKRIEG",
     "college": "Amrita School of Engineering, Coimbatore"
    },
    {
     "no": 769,
     "team": "BinaryBuddies",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 770,
     "team": "bubble_wrap",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 771,
     "team": "CodeKings",
     "college": "PSG Institute of Technology and Applied Research"
    },
    {
     "no": 772,
     "team": "Bit Happens",
     "college": "Amrita Vishwa Vidyapeetham"
    },
    {
     "no": 773,
     "team": "Sha",
     "college": "Kumaraguru College of Technology"
    },
    {
     "no": 774,
     "team": "CP_Lovers",
     "college": "Indian Institute of Technology, Hyderabad"
    },
    {
     "no": 775,
     "team": "cantsolvemorethan3",
     "college": "National Institute of Technology Durgapur"
    },
    {
     "no": 776,
     "team": "Incepticonzs",
     "college": "Keshav Memorial Institute of technology"
    },
    {
     "no": 777,
     "team": "NaNja Coders",
     "college": "Punjab Engineering College"
    },
    {
     "no": 778,
     "team": "trishul_457",
     "college": "Kamla Nehru Institute of Technology"
    },
    {
     "no": 779,
     "team": "CryptoNites",
     "college": "Keshav Memorial Institute of Technology"
    },
    {
     "no": 780,
     "team": "MNmS",
     "college": "Keshav Memorial Institute of Technology"
    },
    {
     "no": 781,
     "team": "Strange inequality",
     "college": "Indian Institute of Information Technology Nagpur"
    },
    {
     "no": 782,
     "team": "LAST MINUTE",
     "college": "PDPM Indian Institute of Information Technology Design & Manufacturing, Jabalpur"
    },
    {
     "no": 783,
     "team": "Belthazar",
     "college": "Keshav Memorial Institute of Technology"
    },
    {
     "no": 784,
     "team": "pseudocodepirates",
     "college": "National Institute of Technology, Warangal"
    },
    {
     "no": 785,
     "team": "Jelllaaaannnn",
     "college": "National Institute of Technology, Durgapur"
    },
    {
     "no": 786,
     "team": "Algo_Alchemists",
     "college": "National institute of technology Rourkela"
    },
    {
     "no": 787,
     "team": "Elixir",
     "college": "Shri Ramdeobaba College of Engineering and Management"
    },
    {
     "no": 788,
     "team": "Runtime Error",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 789,
     "team": "Legit",
     "college": "Indian Institute of Technology Ropar"
    },
    {
     "no": 790,
     "team": "DIABLO",
     "college": "Pimpri Chinchwad College Of Engineering"
    },
    {
     "no": 791,
     "team": "Team Team",
     "college": "Amrita University"
    },
    {
     "no": 792,
     "team": "Code Brigade",
     "college": "National Institute of Technology Rourkela"
    },
    {
     "no": 793,
     "team": "unrated",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 794,
     "team": "Destroy(87,92,108);",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 795,
     "team": "HAR28",
     "college": "Amrita Vishwa Vidyapeetham"
    },
    {
     "no": 796,
     "team": "India",
     "college": "India"
    },
    {
     "no": 797,
     "team": "CodeBlu",
     "college": "Amrita University, Bangalore"
    },
    {
     "no": 798,
     "team": "Kasoli_Tigers",
     "college": "Institute of Engineering and Technology -DAVV -Indore"
    },
    {
     "no": 799,
     "team": "Backbenchers",
     "college": "Rajasthan technical universtiy"
    },
    {
     "no": 800,
     "team": "StackSmashers",
     "college": "Amrita University, Bangalore"
    },
    {
     "no": 801,
     "team": "1O(1)",
     "college": "BITS-Pilani, Hyderabad campus"
    },
    {
     "no": 802,
     "team": "fightFight",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 803,
     "team": "B_oomers",
     "college": "Indian Institute of Technology (IIT) Roorkee"
    },
    {
     "no": 804,
     "team": "SayMyName",
     "college": "Indian Institute of Technology , Hyderabad"
    },
    {
     "no": 805,
     "team": "Tripod_IITD",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 806,
     "team": "khatti_toffee",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 807,
     "team": "Radar752",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 808,
     "team": "ForceCoders",
     "college": "Keshav Memorial Institute of Technology (KMIT)"
    },
    {
     "no": 809,
     "team": "Semantic samurai",
     "college": "Indian Institute of Technology ,Hyderabad"
    },
    {
     "no": 810,
     "team": "WA.on.pretest2",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 811,
     "team": "dangerless",
     "college": "Indian Institute of Technology Kanpur"
    },
    {
     "no": 812,
     "team": "Avalanche_45",
     "college": "Maulana Azad National Institute of Technology, Bhopal"
    },
    {
     "no": 813,
     "team": "NoviceNinjas",
     "college": "Indian Institute of Information Technology Kalyani"
    },
    {
     "no": 814,
     "team": "Kuch bhi de de",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 815,
     "team": "notThisTime",
     "college": "Indian Institution of Technology - Kanpur"
    },
    {
     "no": 816,
     "team": "Confuders",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 817,
     "team": "LoveDayKeCoders",
     "college": "JSS Academy of Technical Education Noida"
    },
    {
     "no": 818,
     "team": "WrongHole",
     "college": "Indian Institute of Technology"
    },
    {
     "no": 819,
     "team": "Tragic Bytes",
     "college": "Indian Institute of Technology, Ropar"
    },
    {
     "no": 820,
     "team": "SmurfCoders",
     "college": "Pune Institute of Computer Technology"
    },
    {
     "no": 821,
     "team": "Jinx okati",
     "college": "Indian Institute of Technology, Hyderabad"
    },
    {
     "no": 822,
     "team": "BinaryBrains",
     "college": "K L University"
    },
    {
     "no": 823,
     "team": "bitRebels",
     "college": "Indian Institute of Information Technology Nagpur"
    },
    {
     "no": 824,
     "team": "CompilerConfusionCrew",
     "college": "Indian institute of technology Hyderabad"
    },
    {
     "no": 825,
     "team": "ManiACs",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 826,
     "team": "Team SPIT",
     "college": "Sardar Patel Institute of Technology"
    },
    {
     "no": 827,
     "team": "teambatch20",
     "college": "PSG College of Technology"
    },
    {
     "no": 828,
     "team": "Crimson Lions",
     "college": "Thiagarajar College of Engineering"
    },
    {
     "no": 829,
     "team": "Code Voyagers",
     "college": "Indian Institute of Information Technology Nagpur"
    },
    {
     "no": 830,
     "team": "Three_musketeers",
     "college": "National Institute of Technology, Durgapur"
    },
    {
     "no": 831,
     "team": "The Boyssss",
     "college": "Motilal Nehru National Institute Of Technology - Allahabad"
    },
    {
     "no": 832,
     "team": "Jugaad Logic",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 833,
     "team": "procrastinate101",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 834,
     "team": "Kalki",
     "college": "National Institute of Technology, Durgapur"
    },
    {
     "no": 835,
     "team": "Code_Debuggers",
     "college": "Indian Institute of Technology (BHU) Varanasi"
    },
    {
     "no": 836,
     "team": "chronoes",
     "college": "National Institute of Technology, Durgapur"
    },
    {
     "no": 837,
     "team": "Katai Jahar",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 838,
     "team": "tatakaeTatakae",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 839,
     "team": "Segmentiers",
     "college": "Pune Institute of Computer Technology"
    },
    {
     "no": 840,
     "team": "Cabo",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 841,
     "team": "Turing Troopers",
     "college": "BITS-Pilani, Hyderabad Campus"
    },
    {
     "no": 842,
     "team": "SNS_techies",
     "college": "SNS College"
    },
    {
     "no": 843,
     "team": "trytry",
     "college": "University Institute of Technology - RGPV"
    },
    {
     "no": 844,
     "team": "Everynyan",
     "college": "International Institute of Information technology - Hyderabad"
    },
    {
     "no": 845,
     "team": "MEX Offenders",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 846,
     "team": "Quantum Rizzlers",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 847,
     "team": "CODE CONQUEROR",
     "college": "Thapar University"
    },
    {
     "no": 848,
     "team": "CP Warrior",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 849,
     "team": "Tremendous Three",
     "college": "Indian Institute of Technology - Gandhinagar"
    },
    {
     "no": 850,
     "team": "Hello World",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 851,
     "team": "coding flamingoes",
     "college": "JSS Academy of Technical Education Noida"
    },
    {
     "no": 852,
     "team": "Super Saiyans",
     "college": "Amity University"
    },
    {
     "no": 853,
     "team": "ACphiles",
     "college": "Punjab Engineering College Chandigarh"
    },
    {
     "no": 854,
     "team": "Flashpoint",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 855,
     "team": "FraudJo",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 856,
     "team": "Aand_bannd_team",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 857,
     "team": "gigaSad",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 858,
     "team": "Teals",
     "college": "Indian Institute Of Technology Madras"
    },
    {
     "no": 859,
     "team": "Algorithm Assassins",
     "college": "Indian Institute Of Technology , Hyderabad"
    },
    {
     "no": 860,
     "team": "Fenwicked Tree",
     "college": "IIIT Delhi"
    },
    {
     "no": 861,
     "team": "Specialist2025",
     "college": "JIS COLLEGE OF ENGINEERING"
    },
    {
     "no": 862,
     "team": "Insomniacs",
     "college": "Thapar Institute of Engineering and Technology"
    },
    {
     "no": 863,
     "team": "Taka",
     "college": "Indian Institute of Technology Kanpur"
    },
    {
     "no": 864,
     "team": "Hope",
     "college": "Institute of Engineering and Technology,Lucknow"
    },
    {
     "no": 865,
     "team": "Local 777",
     "college": "MCKV Institute of Engineering"
    },
    {
     "no": 866,
     "team": "OptimusPrime",
     "college": "Indian Institute of Technology - Mandi"
    },
    {
     "no": 867,
     "team": "KAS",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 868,
     "team": "Cipher Crusaders",
     "college": "Thapar Institute of Engineering and Technology"
    },
    {
     "no": 869,
     "team": "Jaldi waha se hato",
     "college": "IIT Varanasi"
    },
    {
     "no": 870,
     "team": "Ternary Operators",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 871,
     "team": "Error_404",
     "college": "BITS-Pilani, Goa Campus"
    },
    {
     "no": 872,
     "team": "DAV",
     "college": "Indian Institute of Technology - Hyderabad"
    },
    {
     "no": 873,
     "team": "hamster_X",
     "college": "KIET GROUP OF INSTITUTIONS"
    },
    {
     "no": 874,
     "team": "Triangle",
     "college": "Veermata Jeejabai Technological Institute"
    },
    {
     "no": 875,
     "team": "chill life",
     "college": "Indian Institute of Information Technology ,Lucknow"
    },
    {
     "no": 876,
     "team": "Club Moss",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 877,
     "team": "*AAA*",
     "college": "Chennai Mathematical Institute"
    },
    {
     "no": 878,
     "team": "Team_z",
     "college": "Jaypee Institute of Information Technology University"
    },
    {
     "no": 879,
     "team": "AGT",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 880,
     "team": "Ret@rded_Potential",
     "college": "Indian Institute of Technology - Kanpur"
    },
    {
     "no": 881,
     "team": "I C U Semicolons",
     "college": "Indian Institute of Technology-Roorkee"
    },
    {
     "no": 882,
     "team": "CRUSADERS",
     "college": "National Institute of Technology, Meghalaya"
    },
    {
     "no": 883,
     "team": "Tension_limit_exceeded",
     "college": "JALPAIGURI GOVERNMENT ENGINEERING COLLEGE"
    },
    {
     "no": 884,
     "team": "CoolBugs",
     "college": "IIT Kanpur"
    },
    {
     "no": 885,
     "team": "Comders",
     "college": "Kalyani Government Engineering College"
    },
    {
     "no": 886,
     "team": "RAM-Bhakts",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 887,
     "team": "Funtime Error",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 888,
     "team": "Zero_One",
     "college": "National Institute of Technology Durgapur"
    },
    {
     "no": 889,
     "team": "The Debugging Dynasty",
     "college": "Jaypee Institute of Information Technology University"
    },
    {
     "no": 890,
     "team": "MUJ_KSS",
     "college": "Manipal university jaipur"
    },
    {
     "no": 891,
     "team": "Byte Coders",
     "college": "International Institute Information of Technology Bhubaneswar"
    },
    {
     "no": 892,
     "team": "$ingularity",
     "college": "Punjab Engineering College Chandigarh"
    },
    {
     "no": 893,
     "team": "Binary Blades",
     "college": "Sri Sivasubramaniya Nadar College of Engineering"
    },
    {
     "no": 894,
     "team": "Incognito",
     "college": "Amrita School of Engineering"
    },
    {
     "no": 895,
     "team": "Error!",
     "college": "INDIAN INSTITUTE OF TECHNOLOGY - ROORKEE"
    },
    {
     "no": 896,
     "team": "CplsAwasteOfTime",
     "college": "Kalyani Government Engineering College"
    },
    {
     "no": 897,
     "team": "The Three Musketeers",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 898,
     "team": "Big_OwO_Notation",
     "college": "Chennai Mathematical Institute"
    },
    {
     "no": 899,
     "team": "Redraggers",
     "college": "National Institute of Technology Rourkela"
    },
    {
     "no": 900,
     "team": "Code_Achiever",
     "college": "JSS Academy of Technical Education"
    },
    {
     "no": 901,
     "team": "Algo Avengers",
     "college": "Bits Pilani Goa campus"
    },
    {
     "no": 902,
     "team": "Bhupendra_Jogi",
     "college": "IIT Kharagpur"
    },
    {
     "no": 903,
     "team": "codepotatoes",
     "college": "BITS Pilani Goa Campus"
    },
    {
     "no": 904,
     "team": "VSA",
     "college": "Indian Institute of Technology, Roorkee"
    },
    {
     "no": 905,
     "team": "ICy sPiCy",
     "college": "International Institute of Information Technology, Hyderabad"
    },
    {
     "no": 906,
     "team": "BitRebels",
     "college": "IIT Ropar"
    },
    {
     "no": 907,
     "team": "Hash it out",
     "college": "National Institute of Technology, Durgapur"
    },
    {
     "no": 908,
     "team": "Tantan Smashers",
     "college": "Indian Institute of Information Technology, Lucknow"
    },
    {
     "no": 909,
     "team": "Omega",
     "college": "Thapar Institute of Engineering and Technology"
    },
    {
     "no": 910,
     "team": "Code Crusaders",
     "college": "Indian Institute of Technology Roorkee"
    },
    {
     "no": 911,
     "team": "anjaane",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 912,
     "team": "AIMLBMSCE",
     "college": "B. M. S. College of Engineering"
    },
    {
     "no": 913,
     "team": "n3wbies",
     "college": "IIT Roorkee"
    },
    {
     "no": 914,
     "team": "Life of Pablo",
     "college": "IIIT Delhi"
    },
    {
     "no": 915,
     "team": "CoDeC Tridents",
     "college": "Dr. Vishwanath karad MIT World Peace University"
    },
    {
     "no": 916,
     "team": "TCS bhediye",
     "college": "IIIT-Delhi"
    },
    {
     "no": 917,
     "team": "Lafdebaaz Coders",
     "college": "Indian Institute of Information Technology Allahabad"
    },
    {
     "no": 918,
     "team": "Team NW",
     "college": "Yeshwantrao Chavhan College of Engineering"
    },
    {
     "no": 919,
     "team": "struct_trie",
     "college": "VIT Bhopal University"
    },
    {
     "no": 920,
     "team": "U_will_be_defeated_soon",
     "college": "Motilal Nehru National Institute of Technology"
    },
    {
     "no": 921,
     "team": "Brute Force",
     "college": "National Institute of Technology Meghalaya"
    },
    {
     "no": 922,
     "team": "AAA",
     "college": "ARMY INSTITUTE OF TECHNOLOGY PUNE"
    },
    {
     "no": 923,
     "team": "MDH Masala",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 924,
     "team": "PerfecTerror",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 925,
     "team": "FlopCoders",
     "college": "DJ Sanghvi College of Engineering"
    },
    {
     "no": 926,
     "team": "TLEliminators",
     "college": "Jadavpur University"
    },
    {
     "no": 927,
     "team": "TRAP_8086",
     "college": "Kamla Nehru Institute of Technology"
    },
    {
     "no": 928,
     "team": "DCRUST",
     "college": "Deenbandhu Chhotu Ram University of Science and Technology Murthal Sonipat"
    },
    {
     "no": 929,
     "team": "Lazy_Bugs",
     "college": "Indian Institute of Information Technology, Bhopal"
    },
    {
     "no": 930,
     "team": "palaj_programmers",
     "college": "Indian Institute of Technology - Gandhinagar"
    },
    {
     "no": 931,
     "team": "#define VAR winner",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 932,
     "team": "SegmentThree",
     "college": "Jadavpur University"
    },
    {
     "no": 933,
     "team": "Code_sprint",
     "college": "Indian Institute of Technology - Indore"
    },
    {
     "no": 934,
     "team": "Jai Shree Radha Rani",
     "college": "KIET GROUP OF INSTITUTIONS GHAZIABAD"
    },
    {
     "no": 935,
     "team": "Bhupendra J0gi",
     "college": "Indian Institute of Information Technology and Management, Gwalior"
    },
    {
     "no": 936,
     "team": "Code Phat Gaya",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 937,
     "team": "Jump!",
     "college": "Indian Institute of Technology, Hyderabad"
    },
    {
     "no": 938,
     "team": "Geekabytes",
     "college": "Indian Institute Of Information Technology Kota"
    },
    {
     "no": 939,
     "team": "crazy_noobs",
     "college": "National Institute of Technology, Meghalaya"
    },
    {
     "no": 940,
     "team": "Mugiwaras",
     "college": "Mahindra University Ecole Centrale"
    },
    {
     "no": 941,
     "team": "Dil Se Soul",
     "college": "Kamla Nehru Institute of Technology"
    },
    {
     "no": 942,
     "team": "Citadel",
     "college": "ABES Engineering College"
    },
    {
     "no": 943,
     "team": "India",
     "college": "India"
    },
    {
     "no": 944,
     "team": "ProofByACGang",
     "college": "National Institute of Technology, Karnataka, Surathkal"
    },
    {
     "no": 945,
     "team": "SHS",
     "college": "Indian Institute of Technology, Patna"
    },
    {
     "no": 946,
     "team": "HALLOWEEN",
     "college": "PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
    },
    {
     "no": 947,
     "team": "Binary brains",
     "college": "Pimpri Chinchwad College of Engineering, Pune"
    },
    {
     "no": 948,
     "team": "Fool's Paradise",
     "college": "Chennai Mathematical Institute"
    },
    {
     "no": 949,
     "team": "CtrlZ",
     "college": "Indian Institute of Technology - Patna"
    },
    {
     "no": 950,
     "team": "In_Queue",
     "college": "Nirma University"
    },
    {
     "no": 951,
     "team": "Tesseractors",
     "college": "Amrita School of Engineering,Coimbatore"
    },
    {
     "no": 952,
     "team": "TechTriad",
     "college": "DWARKADAS .J SANGHVI COLLEGE OF ENGINEERING"
    },
    {
     "no": 953,
     "team": "BitRate",
     "college": "ABES Engineering College"
    },
    {
     "no": 954,
     "team": "A3_Algorithmists",
     "college": "Amrita School of Engineering"
    },
    {
     "no": 955,
     "team": "RUBIX",
     "college": "Indian Institute of Information Technology and Management, Gwalior"
    },
    {
     "no": 956,
     "team": "null pointers",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 957,
     "team": "Optimus Prime",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 958,
     "team": "BhagwanBharose",
     "college": "Manipal University Jaipur"
    },
    {
     "no": 959,
     "team": "Midnight Algorithm Mavens",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 960,
     "team": "Code of Duty",
     "college": "D J Sanghvi College of Engineering"
    },
    {
     "no": 961,
     "team": "ErrorFound",
     "college": "Sreenidhi Institute of Science and Technology"
    },
    {
     "no": 962,
     "team": "BreakingCode",
     "college": "Indian Institute of Technology - Ropar"
    },
    {
     "no": 963,
     "team": "Matrix Busters",
     "college": "Amrita School of Engineering, Bangalore"
    },
    {
     "no": 964,
     "team": "BlackHats",
     "college": "Thapar Institute of Engineering &#38;amp; Technology"
    },
    {
     "no": 965,
     "team": "4F Boyz",
     "college": "PDPM Indian Institute of Information Technology Design &#38;amp; Manufacturing, Jabalpur"
    },
    {
     "no": 966,
     "team": "!Victory",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 967,
     "team": "HANcoders",
     "college": "Indian Institute Of Technology Goa"
    },
    {
     "no": 968,
     "team": "Gigabyte",
     "college": "Indian Institute of Technology - Kharagpur"
    },
    {
     "no": 969,
     "team": "ZeroToOne",
     "college": "PDPM Indian Institute of Information Technology Design &#38;amp; Manufacturing, Jabalpur"
    },
    {
     "no": 970,
     "team": "AIMT-Hustler",
     "college": "Ambalika Institute of Management and Technology"
    },
    {
     "no": 971,
     "team": "Syntax Smashers",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 972,
     "team": "JUETProCoder",
     "college": "Jaypee University of Engineering and Technology, Guna"
    },
    {
     "no": 973,
     "team": "SnackOverflow",
     "college": "National Institute of Technology, Jamshedpur"
    },
    {
     "no": 974,
     "team": "lexer",
     "college": "National institute of technology Hamirpur"
    },
    {
     "no": 975,
     "team": "TunTun Technos",
     "college": "Indian Institute Of Technology Goa"
    },
    {
     "no": 976,
     "team": "Binary Coders",
     "college": "ABES Engineering College"
    },
    {
     "no": 977,
     "team": "TLE_ON_69",
     "college": "International Institute of Information Technology - Hyderabad"
    },
    {
     "no": 978,
     "team": "CodeCommandos",
     "college": "Amrita University"
    },
    {
     "no": 979,
     "team": "The Evangelions",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 980,
     "team": "Hackerstreet boys",
     "college": "Indian Institute of Technology - Roorkee"
    },
    {
     "no": 981,
     "team": "threeErrors",
     "college": "Indian Institute of Technology Goa"
    },
    {
     "no": 982,
     "team": "Coding Wizards",
     "college": "Indian Institute of Information Technology, Bhagalpur"
    },
    {
     "no": 983,
     "team": "Code Hunters",
     "college": "Indian Institute of Information Technology"
    },
    {
     "no": 984,
     "team": "WRONG ANSWERS ONLY",
     "college": "INDIAN INSTITUTE OF TECHNOLOGY (INDIAN SCHOOL OF MINES) DHANBAD"
    },
    {
     "no": 985,
     "team": "LOKI",
     "college": "Pimpri Chinchwad College of Engineering"
    },
    {
     "no": 986,
     "team": "Memoization",
     "college": "HALDIA INSTITUTE OF TECHNOLOGY"
    },
    {
     "no": 987,
     "team": "mamba mentality",
     "college": "Thapar Institute of Engineering &#38;amp;amp; Technology"
    },
    {
     "no": 988,
     "team": "CodeBrewers",
     "college": "Thapar Institute of Engineering and Technology"
    },
    {
     "no": 989,
     "team": "RunTerror",
     "college": "iit goa"
    },
    {
     "no": 990,
     "team": "aakhri_ICPC",
     "college": "Indian Institute of Technology Bhilai"
    },
    {
     "no": 991,
     "team": "Koder",
     "college": "Bangalore Institute of Technology"
    },
    {
     "no": 992,
     "team": "C--",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 993,
     "team": "choti_advance",
     "college": "Motilal Nehru National Institute of Technology - Allahabad"
    },
    {
     "no": 994,
     "team": "Three_Blues",
     "college": "Indian Institute of Technology - Ropar"
    },
    {
     "no": 995,
     "team": "TeamKn0ck0ut",
     "college": "Amrita Vishwa Vidyapeetham"
    },
    {
     "no": 996,
     "team": "MUGGLES",
     "college": "National Institute of Technology, Meghalaya"
    },
    {
     "no": 997,
     "team": "echo_SigSegV",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 998,
     "team": "Bit Manipulators",
     "college": "National Institute of Technology Karnataka, Surathkul"
    },
    {
     "no": 999,
     "team": "Tripod",
     "college": "Pune Institute of Computer Technology"
    },
    {
     "no": 1000,
     "team": "CodingGem",
     "college": "ABES Engineering College"
    },
    {
     "no": 1001,
     "team": "Team Codestorm",
     "college": "Indian Institute of Information Technology,Una"
    },
    {
     "no": 1002,
     "team": "GEN X",
     "college": "Chandigarh University"
    },
    {
     "no": 1003,
     "team": "LastTrie",
     "college": "Pune Institute of Computer Technology"
    },
    {
     "no": 1004,
     "team": "ByteKarma",
     "college": "Rajiv Gandhi Institute of Petrloeum Technology"
    },
    {
     "no": 1005,
     "team": "NitiKeBharose",
     "college": "Jabalpur Engineering College"
    },
    {
     "no": 1006,
     "team": "Code_Crushers",
     "college": "Pimpri-Chinchwad College Of Engineering"
    },
    {
     "no": 1007,
     "team": "L.A.S. Squad",
     "college": "VIT Bhopal University"
    },
    {
     "no": 1008,
     "team": "icpc_coders",
     "college": "Pune Institute of Computer Technology"
    },
    {
     "no": 1009,
     "team": "NoobExploiters",
     "college": "NATIONAL INSTITUTE OF TECHNOLOGY, MEGHALAYA"
    },
    {
     "no": 1010,
     "team": "Code_Art",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 1011,
     "team": "GFS",
     "college": "Indian Institute of Technology - Indore"
    },
    {
     "no": 1012,
     "team": "Knowledge_UnderFlow",
     "college": "Graphic Era University"
    },
    {
     "no": 1013,
     "team": "Nebula",
     "college": "BVRIT Hyderabad College of Engineering for Women"
    },
    {
     "no": 1014,
     "team": "ModestMinds",
     "college": "BVRIT Hyderabad College of Engineering for Women"
    },
    {
     "no": 1015,
     "team": "AmazingCoders",
     "college": "BVRIT Hyderabad College of Engineering for Women"
    },
    {
     "no": 1016,
     "team": "Runtime Terrors",
     "college": "Indian Institute of Technology Guwahati"
    },
    {
     "no": 1017,
     "team": "Typewriters",
     "college": "Indian Institute of Information Technology Senapati, Manipur"
    },
    {
     "no": 1018,
     "team": "Algoriders",
     "college": "Indian Institute of technology Patna"
    },
    {
     "no": 1019,
     "team": "maniAC",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 1020,
     "team": "BITBYBIT",
     "college": "National Institute of Technology, Silchar"
    },
    {
     "no": 1021,
     "team": "aussies_123",
     "college": "Delhi Technological University(Formerly DCE)"
    },
    {
     "no": 1022,
     "team": "the three tier coders",
     "college": "JALPAIGURI GOVERMENT ENGNEERING COLLEGE"
    },
    {
     "no": 1023,
     "team": "Ducklings",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 1024,
     "team": "Between 0-1",
     "college": "Indian Institute of Technology (ISM), Dhanbad"
    },
    {
     "no": 1025,
     "team": "Electric Motor",
     "college": "Indian Institute of Technology(ISM) Dhanbad"
    },
    {
     "no": 1026,
     "team": "Coders Duo",
     "college": "Vaagdevi College of Engineering"
    },
    {
     "no": 1027,
     "team": "Ctrl Freak",
     "college": "Narula Institute Of Technology"
    },
    {
     "no": 1028,
     "team": "icpc_chalo",
     "college": "Marathwada Mitra Mandal&#39;s College of Engineering"
    },
    {
     "no": 1029,
     "team": "The BitBrigade",
     "college": "Indian Institue Of Information Technology, Bhagalpur"
    },
    {
     "no": 1030,
     "team": "XOR",
     "college": "Chandigarh University"
    },
    {
     "no": 1031,
     "team": "!krejicodrz",
     "college": "Indian Institute Of Technology Patna"
    },
    {
     "no": 1032,
     "team": "Heisenberg",
     "college": "MBM University, Jodhpur"
    },
    {
     "no": 1033,
     "team": "tledebuggers",
     "college": "National Institute of Technology, Hamirpur"
    },
    {
     "no": 1034,
     "team": "Algo_Knights",
     "college": "Indian Institute of Information Technology Bhagalpur"
    },
    {
     "no": 1035,
     "team": "Chomsky Guys",
     "college": "RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT"
    },
    {
     "no": 1036,
     "team": "YEA",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 1037,
     "team": "idea factory",
     "college": "VNR Vignana Jyothi Institute of Engineering & Technology"
    },
    {
     "no": 1038,
     "team": "Redemption",
     "college": "Pimpri Chinchwad College of Engineering, Pune"
    },
    {
     "no": 1039,
     "team": "Modulo",
     "college": "Kamla Nehru Institute of Technology"
    },
    {
     "no": 1040,
     "team": "Vertos",
     "college": "Lovely Professional University"
    },
    {
     "no": 1041,
     "team": "she++",
     "college": "Indian Institution of Technology Roorkee"
    },
    {
     "no": 1042,
     "team": "Tech_Tantriks",
     "college": "Manav Rachna University"
    },
    {
     "no": 1043,
     "team": "BIT01",
     "college": "National Institute Of Technology Rourkela"
    },
    {
     "no": 1044,
     "team": "Logic Btado",
     "college": "Jaypee Institute Of Information Technology"
    },
    {
     "no": 1045,
     "team": "Segment_3",
     "college": "Indian Institute of technology - Varanasi"
    },
    {
     "no": 1046,
     "team": "scope",
     "college": "MLR Institute of Technology"
    },
    {
     "no": 1047,
     "team": "Error 101",
     "college": "VNR Vignana Jyothi Institute of Engineering and Technology"
    },
    {
     "no": 1048,
     "team": "Cryptic Coders",
     "college": "C.R.Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)"
    },
    {
     "no": 1049,
     "team": "Team Random",
     "college": "Rashtreeya Vidyalaya College of Engineering"
    },
    {
     "no": 1050,
     "team": "Xorian",
     "college": "Indian Institute of Information Technology and Management, Gwalior"
    },
    {
     "no": 1051,
     "team": "Skill Issue",
     "college": "Scaler School Of Technology"
    },
    {
     "no": 1052,
     "team": "TriWood",
     "college": "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR"
    },
    {
     "no": 1053,
     "team": "System Testing",
     "college": "Jaipur Engineering College and Research Center"
    },
    {
     "no": 1054,
     "team": "The_Neo_Alchemists",
     "college": "Scaler School of Technology"
    },
    {
     "no": 1055,
     "team": "India",
     "college": "India"
    },
    {
     "no": 1056,
     "team": "Logic_Catalyst",
     "college": "Indian Institute of Technology,Patna"
    },
    {
     "no": 1057,
     "team": "Nimbus",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 1058,
     "team": "Terrific Trio",
     "college": "Shambhunath Institute of Engineering and Technology"
    },
    {
     "no": 1059,
     "team": "Hugs for bugs",
     "college": "Graphic Era University"
    },
    {
     "no": 1060,
     "team": "Thunder",
     "college": "RNS Institute of Technology"
    },
    {
     "no": 1061,
     "team": "AION_PHANTOM",
     "college": "lovely professional university"
    },
    {
     "no": 1062,
     "team": "Midwave",
     "college": "Delhi Technological University(Formerly DCE)"
    },
    {
     "no": 1063,
     "team": "Targetsum",
     "college": "Indian Institute of Information Technology, Una"
    },
    {
     "no": 1064,
     "team": "Kuvara",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 1065,
     "team": "MagicBricks",
     "college": "Indian Institute of Technology - Gandhinagar"
    },
    {
     "no": 1066,
     "team": "Aww(n)",
     "college": "Indian Institute of Technology - Gandhinagar"
    },
    {
     "no": 1067,
     "team": "JAG Coders",
     "college": "Shri Govindram Seksaria Institute of Technology ans Science"
    },
    {
     "no": 1068,
     "team": "Andhra_Andhagaallu",
     "college": "Amrita School of Engineering, Bengaluru"
    },
    {
     "no": 1069,
     "team": "SAO",
     "college": "Yeshwantrao chavan college of engineering nagpur"
    },
    {
     "no": 1070,
     "team": "Bhole Chature",
     "college": "Scaler School of Technology"
    },
    {
     "no": 1071,
     "team": "India",
     "college": "India"
    },
    {
     "no": 1072,
     "team": "Sharingan",
     "college": "Indian Institute of Technology - Guwahati"
    },
    {
     "no": 1073,
     "team": "The Thunder 3",
     "college": "Scaler School of Technology"
    },
    {
     "no": 1074,
     "team": "Rizens_03",
     "college": "Scaler School of Technology"
    },
    {
     "no": 1075,
     "team": "Nibble",
     "college": "Scaler School Of Technology"
    },
    {
     "no": 1076,
     "team": "recursive rangers",
     "college": "Scaler School of technology"
    },
    {
     "no": 1077,
     "team": "The_Distracted_Us",
     "college": "International Institute of Information Technology - Naya Raipur"
    },
    {
     "no": 1078,
     "team": "SPARK",
     "college": "Scaler School Of Technology"
    },
    {
     "no": 1079,
     "team": "curious.coders",
     "college": "Scaler School of Technology"
    },
    {
     "no": 1080,
     "team": "CipherMavericks",
     "college": "Scaler School of Technology"
    },
    {
     "no": 1081,
     "team": "1+2=4",
     "college": "Dr B R Ambedkar National Institute of Technology, Jalandhar"
    },
    {
     "no": 1082,
     "team": "Codecrackers",
     "college": "Indian Institute of Technology Patna"
    },
    {
     "no": 1083,
     "team": "Tanzanite",
     "college": "Keshav Memorial Institute of Technology"
    },
    {
     "no": 1084,
     "team": "icpc_finalists",
     "college": "National Institute of Technology Hamirpur"
    },
    {
     "no": 1085,
     "team": "StarRailCoding",
     "college": "Dr. Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1086,
     "team": "Saarthi",
     "college": "Dr. Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1087,
     "team": "SIGTERM",
     "college": "Indian Institute of Technology - Varanasi"
    },
    {
     "no": 1088,
     "team": "NP_HARD",
     "college": "SRM Institute of Science and Technology , Ramapuram Campus"
    },
    {
     "no": 1089,
     "team": "Angel_Beats",
     "college": "IIT Bhubaneswar"
    },
    {
     "no": 1090,
     "team": "Coding Ninjas",
     "college": "Amrita University"
    },
    {
     "no": 1091,
     "team": "Hex Heroes",
     "college": "Veermata Jijabai Technological Institute"
    },
    {
     "no": 1092,
     "team": "Two_and_a_Half_Men",
     "college": "Indian Institute of Technology - Madras"
    },
    {
     "no": 1093,
     "team": "TLE Eliminators",
     "college": "JSS Academy Of Technical Education"
    },
    {
     "no": 1094,
     "team": "CodeTriforces",
     "college": "Vellore Institute of Technology, Chennai"
    },
    {
     "no": 1095,
     "team": "DarkSkyUnit(DSU)",
     "college": "Birla Institute of Technology, Mesra"
    },
    {
     "no": 1096,
     "team": "Bitecode",
     "college": "Amrita Vishwa Vidyapeetham"
    },
    {
     "no": 1097,
     "team": "Bit Blazers",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1098,
     "team": "Degenerates",
     "college": "YMCA University of Science and Technology, Faridabad"
    },
    {
     "no": 1099,
     "team": "Tech Gladiators",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1100,
     "team": "Khatti toffee",
     "college": "Birla Institute of Technology, Mesra"
    },
    {
     "no": 1101,
     "team": "AHA",
     "college": "Yeshwantrao Chavan College of Engineering"
    },
    {
     "no": 1102,
     "team": "Error404",
     "college": "Indian Institute Of Engineering Science And Technology,Shibpur"
    },
    {
     "no": 1103,
     "team": "Code Prodigies",
     "college": "Shri Vishnu Engineering College for Women"
    },
    {
     "no": 1104,
     "team": "Acers",
     "college": "JSS Academy Of Technical Education"
    },
    {
     "no": 1105,
     "team": "CodeZero",
     "college": "Nirma University"
    },
    {
     "no": 1106,
     "team": "India",
     "college": "India"
    },
    {
     "no": 1107,
     "team": "io",
     "college": "National Institute of Technology Warangal"
    },
    {
     "no": 1108,
     "team": "bhoopendar_jogi",
     "college": "Indian Institute of Technology - Delhi"
    },
    {
     "no": 1109,
     "team": "PINNACLE",
     "college": "Indian Institute of Technology, Palakkad"
    },
    {
     "no": 1110,
     "team": "Bug14Coders",
     "college": "JSS Academy of Technical Education Noida"
    },
    {
     "no": 1111,
     "team": "TriAurors",
     "college": "Jamia Millia Islamia"
    },
    {
     "no": 1112,
     "team": "NVMe",
     "college": "K. J. Somaiya College of Engineering, Vidyavihar, Mumbai"
    },
    {
     "no": 1113,
     "team": "Codebusters",
     "college": "Amrita University"
    },
    {
     "no": 1114,
     "team": "Hacksmiths",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1115,
     "team": "MH-12",
     "college": "Dr. Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1116,
     "team": "Debuggers",
     "college": "Amrita University"
    },
    {
     "no": 1117,
     "team": "Breeze",
     "college": "Heritage Institute of Technology, Kolkata"
    },
    {
     "no": 1118,
     "team": "Mahakaali Linux",
     "college": "L.D Collge Of Engineering"
    },
    {
     "no": 1119,
     "team": "BitByBit",
     "college": "Indian Institute of Technology Bombay"
    },
    {
     "no": 1120,
     "team": "CluelessCoders",
     "college": "National Institute of Technology, Patna"
    },
    {
     "no": 1121,
     "team": "Jetha ke Jabaaz",
     "college": "L.D. College of Engineering"
    },
    {
     "no": 1122,
     "team": "The Codebreakers",
     "college": "Indian Institute of Information Technology and Management, Gwalior"
    },
    {
     "no": 1123,
     "team": "CoDeC GeekSquad",
     "college": "Dr. Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1124,
     "team": "Phoenix",
     "college": "Amrita Vishwa Vidyapeetham"
    },
    {
     "no": 1125,
     "team": "Felix Felicis",
     "college": "Jamia Millia Islamia"
    },
    {
     "no": 1126,
     "team": "India",
     "college": "India"
    },
    {
     "no": 1127,
     "team": "CodeBreakers",
     "college": "M.S. Ramaiah Institute of Technology"
    },
    {
     "no": 1128,
     "team": "India",
     "college": "India"
    },
    {
     "no": 1129,
     "team": "Royal Encoders",
     "college": "Dr Vishwanath Karad MIT World Peace University"
    },
    {
     "no": 1130,
     "team": "O(1)",
     "college": "Indian Institute of Technology Tirupati"
    },
    {
     "no": 1131,
     "team": "QuantumTribe",
     "college": "Dr Vishwanath Karad MIT World Peace University, Pune"
    },
    {
     "no": 1132,
     "team": "floppies",
     "college": "Gandhi Institue of Engineering and Technology, Gunupur"
    },
    {
     "no": 1133,
     "team": "Minute_coders",
     "college": "NavGurukul"
    },
    {
     "no": 1134,
     "team": "United_fronts",
     "college": "NavGurukul"
    },
    {
     "no": 1135,
     "team": "tiny_coders",
     "college": "NavGurukul"
    },
    {
     "no": 1136,
     "team": "sinchan",
     "college": "NavGurukul"
    },
    {
     "no": 1137,
     "team": "code_crafters",
     "college": "NavGurukul"
    },
    {
     "no": 1138,
     "team": "coding_ninja",
     "college": "NavGurukul"
    },
    {
     "no": 1139,
     "team": "logic_solvers",
     "college": "NavGurukul"
    },
    {
     "no": 1140,
     "team": "issue_hunters",
     "college": "NavGurukul"
    },
    {
     "no": 1141,
     "team": "cleaver_coders",
     "college": "NavGurukul"
    },
    {
     "no": 1142,
     "team": "the_competitor",
     "college": "NavGurukul"
    },
    {
     "no": 1143,
     "team": "Dharamshala01",
     "college": "NavGurukul"
    },
    {
     "no": 1144,
     "team": "Dharamshala02",
     "college": "NavGurukul"
    },
    {
     "no": 1145,
     "team": "Dharamshala03",
     "college": "NavGurukul"
    },
    {
     "no": 1146,
     "team": "Dharamshala04",
     "college": "NavGurukul"
    },
    {
     "no": 1147,
     "team": "Dharamshala05",
     "college": "NavGurukul"
    },
    {
     "no": 1148,
     "team": "Dharamshala06",
     "college": "NavGurukul"
    },
    {
     "no": 1149,
     "team": "Dharamshala07",
     "college": "NavGurukul"
    },
    {
     "no": 1150,
     "team": "Dharamshala08",
     "college": "NavGurukul"
    },
    {
     "no": 1151,
     "team": "DDT1",
     "college": "NavGurukul"
    },
    {
     "no": 1152,
     "team": "DDT2",
     "college": "NavGurukul"
    },
    {
     "no": 1153,
     "team": "DDT3",
     "college": "NavGurukul"
    },
    {
     "no": 1154,
     "team": "DDT4",
     "college": "NavGurukul"
    },
    {
     "no": 1155,
     "team": "DDT5",
     "college": "NavGurukul"
    },
    {
     "no": 1156,
     "team": "DDT6",
     "college": "NavGurukul"
    },
    {
     "no": 1157,
     "team": "DDT7",
     "college": "NavGurukul"
    },
    {
     "no": 1158,
     "team": "DDT8",
     "college": "NavGurukul"
    },
    {
     "no": 1159,
     "team": "DDT9",
     "college": "NavGurukul"
    },
    {
     "no": 1160,
     "team": "DDT10",
     "college": "NavGurukul"
    },
    {
     "no": 1161,
     "team": "Starcoders",
     "college": "NavGurukul"
    },
    {
     "no": 1162,
     "team": "Starcoders 1",
     "college": "NavGurukul"
    },
    {
     "no": 1163,
     "team": "Starcoders 2",
     "college": "NavGurukul"
    },
    {
     "no": 1164,
     "team": "Starcoders 3",
     "college": "NavGurukul"
    },
    {
     "no": 1165,
     "team": "Starcoders 4",
     "college": "NavGurukul"
    },
    {
     "no": 1166,
     "team": "Starcoders 5",
     "college": "NavGurukul"
    },
    {
     "no": 1167,
     "team": "Starcoders 6",
     "college": "NavGurukul"
    },
    {
     "no": 1168,
     "team": "Starcoders 7",
     "college": "NavGurukul"
    },
    {
     "no": 1169,
     "team": "Starcoders 8",
     "college": "NavGurukul"
    },
    {
     "no": 1170,
     "team": "Starcoders 9",
     "college": "NavGurukul"
    },
    {
     "no": 1171,
     "team": "Starcoders 10",
     "college": "NavGurukul"
    },
    {
     "no": 1172,
     "team": "s1",
     "college": "NavGurukul"
    },
    {
     "no": 1173,
     "team": "s2",
     "college": "NavGurukul"
    },
    {
     "no": 1174,
     "team": "s3",
     "college": "NavGurukul"
    },
    {
     "no": 1175,
     "team": "s4",
     "college": "NavGurukul"
    },
    {
     "no": 1176,
     "team": "s5",
     "college": "NavGurukul"
    },
    {
     "no": 1177,
     "team": "s6",
     "college": "NavGurukul"
    },
    {
     "no": 1178,
     "team": "s7",
     "college": "NavGurukul"
    },
    {
     "no": 1179,
     "team": "s8",
     "college": "NavGurukul"
    },
    {
     "no": 1180,
     "team": "s9",
     "college": "NavGurukul"
    },
    {
     "no": 1181,
     "team": "s10",
     "college": "NavGurukul"
    },
    {
     "no": 1182,
     "team": "s11",
     "college": "NavGurukul"
    },
    {
     "no": 1183,
     "team": "s12",
     "college": "NavGurukul"
    },
    {
     "no": 1184,
     "team": "s13",
     "college": "NavGurukul"
    },
    {
     "no": 1185,
     "team": "s14",
     "college": "NavGurukul"
    },
    {
     "no": 1186,
     "team": "AM1",
     "college": "NavGurukul"
    },
    {
     "no": 1187,
     "team": "AM2",
     "college": "NavGurukul"
    },
    {
     "no": 1188,
     "team": "AM3",
     "college": "NavGurukul"
    },
    {
     "no": 1189,
     "team": "AM4",
     "college": "NavGurukul"
    },
    {
     "no": 1190,
     "team": "AM5",
     "college": "NavGurukul"
    },
    {
     "no": 1191,
     "team": "AM6",
     "college": "NavGurukul"
    },
    {
     "no": 1192,
     "team": "AM7",
     "college": "NavGurukul"
    },
    {
     "no": 1193,
     "team": "AM8",
     "college": "NavGurukul"
    },
    {
     "no": 1194,
     "team": "AM9",
     "college": "NavGurukul"
    },
    {
     "no": 1195,
     "team": "AM10",
     "college": "NavGurukul"
    },
    {
     "no": 1196,
     "team": "EfficientCoders1",
     "college": "NavGurukul"
    },
    {
     "no": 1197,
     "team": "EfficientCoders2",
     "college": "NavGurukul"
    },
    {
     "no": 1198,
     "team": "EfficientCoders3",
     "college": "NavGurukul"
    },
    {
     "no": 1199,
     "team": "EfficientCoders4",
     "college": "NavGurukul"
    },
    {
     "no": 1200,
     "team": "EfficientCoders5",
     "college": "NavGurukul"
    },
    {
     "no": 1201,
     "team": "EfficientCoders6",
     "college": "NavGurukul"
    },
    {
     "no": 1202,
     "team": "EfficientCoders7",
     "college": "NavGurukul"
    },
    {
     "no": 1203,
     "team": "EfficientCoders8",
     "college": "NavGurukul"
    },
    {
     "no": 1204,
     "team": "CodeCrushers",
     "college": "NavGurukul"
    },
    {
     "no": 1205,
     "team": "Tri-Coders",
     "college": "NavGurukul"
    },
    {
     "no": 1206,
     "team": "Syntax Stars",
     "college": "NavGurukul"
    },
    {
     "no": 1207,
     "team": "3-Stars",
     "college": "NavGurukul"
    },
    {
     "no": 1208,
     "team": "Techie Twinkles",
     "college": "NavGurukul"
    },
    {
     "no": 1209,
     "team": "The Byte Beauties",
     "college": "NavGurukul"
    },
    {
     "no": 1210,
     "team": "Tri-Tech Titans",
     "college": "NavGurukul"
    }
   ];

   export default partData;