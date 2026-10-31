/**
 * Executive Portfolio Script for Brigadier General (Dr.) AKM Nasir Uddin (retd.)
 * Interactive Bilingual Engine, Modal Management & Executive Secretariat Communications
 */

// Comprehensive Bilingual Vocabulary Dictionary
const translations = {
  en: {
    // Top Bar
    "hero-tag": "Distinguished Leadership",
    "top-announcement": "Executive Healthcare Advisory • Hospital Commissioning • Public Health Strategy",
    "top-book": "Request Executive Consultation",
    "top-service": "24/7 Tertiary Medical Service Available",
    "hero-ceo-subtitle": "Executive Leadership & Medical Statesman",
    "hero-tenures-summary": "Former National Consultant, BRAC Health Program (BHP) • Former Commandant, Armed Forces Medical Institute (AFMI) • Former Commandant, Combined Military Hospital (CMH) Chattogram • Former Director, Dhaka Medical College Hospital (DMCH) • Former Director, Rajshahi Medical College Hospital (RMCH) • Former Director, Kurmitola General Hospital • Former Director, DNCC Dedicated Covid-19 Hospital.",

    // Navigation
    "nav-sub": "MBBS • MPhil • MPH | Healthcare Statesman",
    "nav-about": "Biography",
    "nav-milestones": "Career Command",
    "nav-pillars": "Advisory Pillars",
    "nav-crisis": "Crisis Leadership",
    "nav-media": "Media & Press",
    "nav-credentials": "Credentials",
    "btn-consult": "Advisory Desk",

    // Hero Section
    "hero-army-badge": "Bangladesh Army Medical Corps • Retired Brigadier General",
    "hero-title-prefix": "Brigadier General (Dr.)",
    "hero-desc": "Distinguished Healthcare Administrator, Hospital Turnaround Specialist, and Former Director of Dhaka Medical College Hospital (DMCH). Over three and a half decades of stellar leadership across Bangladesh Army Combined Military Hospitals, apex national referral institutes, and premier private healthcare conglomerates.",
    "badge-ceo": "CEO:",
    "badge-dmch": "Former Director:",
    "badge-dncc": "Former Director:",
    "badge-brac": "Former National Consultant:",
    "btn-hero-consult": "Request Strategic Advisory",
    "btn-hero-milestones": "Explore Career Command",
    "btn-hero-cv": "Executive Brief",
    "frame-caption-title": "Chief Executive Officer (CEO)",
    "frame-caption-sub": "Pro-Active Medical College & Hospital Ltd.",

    // Stats
    "stat-1": "Years of Military & Civil Medical Command",
    "stat-2": "Premier Tertiary Hospitals & Institutes Commanded",
    "stat-3": "Hospital Beds Administered Across Career",
    "stat-4": "Patients Benefited Across Pandemics & National Crises",

    // Biography
    "about-badge": "The Statesman's Journey",
    "about-title": "Where Military Precision Meets Compassionate Healing",
    "about-p1": "Brigadier General (Dr.) A.K.M. Nasir Uddin (Retd.) represents a rare caliber of healthcare leadership in South Asia—bridging the disciplined rigor of the Bangladesh Army Medical Corps with the complex operational agility demanded by the nation's premier tertiary healthcare institutions.",
    "about-p2": "Across his illustrious career, he served as the Director of Dhaka Medical College Hospital (DMCH)—the nerve center of Bangladesh's national healthcare system. During severe public health emergencies, including the peak waves of COVID-19 and historic Dengue outbreaks, his strategic decisiveness expanded bed capacity, secured logistics, protected thousands of medical professionals, and ensured equitable care for the vulnerable.",
    "about-p3": "His institutional stewardship also includes serving as Commandant of the Armed Forces Medical Institute (AFMI), Commandant of CMH Chattogram, Director of Rajshahi Medical College Hospital (RMCH), Director of Kurmitola General Hospital, and steering the mammoth DNCC Dedicated COVID-19 Hospital.",
    "about-p4": "Today, as the Chief Executive Officer (CEO) of Pro-Active Medical College and Hospital Ltd., and former National Consultant for BRAC Health Program, he spearheads modernized hospital systems, clinical governance, and strategic healthcare advisory.",
    "pill-1-title": "Crisis-Tested Governance",
    "pill-1-desc": "Proven experience commanding thousands of beds during national crises.",
    "pill-2-title": "Institutional Transformation",
    "pill-2-desc": "Turnaround strategist for both public mega-hospitals and private setups.",
    "creed-subtitle": "Executive Philosophy",
    "creed-title": "Core Principles of Health Stewardship",
    "creed-quote": "\"Healthcare is not merely an administrative domain; it is a sacred national covenant. True hospital leadership demands military integrity, unwavering empathy for every patient, and the visionary courage to innovate in times of unprecedented crisis.\"",

    // Career Timeline
    "timeline-badge": "Distinguished Command Record",
    "timeline-title": "Key Institutional Milestones & Executive Posts",
    "timeline-subtitle": "A chronological legacy of heading Bangladesh's most prominent military, public referral, and modern private healthcare organizations.",
    "m1-title": "Chief Executive Officer (CEO) & Director",
    "m1-inst": "Pro-Active Medical College & Hospital Ltd. (PMCHL)",
    "m1-desc": "Directing total hospital operations, state-of-the-art 24/7 ICU/CCU, specialized surgical infrastructure, clinical excellence frameworks, and patient-first compassionate healthcare delivery.",
    "m2-title": "Director",
    "m2-inst": "DNCC Dedicated COVID-19 Hospital, Mohakhali, Dhaka",
    "m2-desc": "Commissioned and commanded Bangladesh's largest dedicated pandemic field hospital (over 1,000 beds, massive 200+ ICU capacity), coordinating national emergency medical triage during peak pandemic variants.",
    "m3-title": "Director",
    "m3-inst": "Dhaka Medical College Hospital (DMCH)",
    "m3-desc": "Led the apex national tertiary referral hospital of Bangladesh. Spearheaded the initial COVID-19 pandemic response, transformed Building-2 into a 600-bed isolation facility, safeguarded 2,200+ medical personnel, and led clinical governance during the 2019 massive Dengue crisis.",
    "m4-title": "Director",
    "m4-inst": "Kurmitola General Hospital (KGH), Dhaka",
    "m4-desc": "Steered high-level clinical services, emergency diagnostics, and operational administration at one of the capital's premier general tertiary healthcare complexes.",
    "m5-title": "Director",
    "m5-inst": "Rajshahi Medical College Hospital (RMCH)",
    "m5-desc": "Oversaw the largest medical hub of Northern Bangladesh, modernizing clinical wards, streamlining emergency triage, and enhancing residency training workflows.",
    "m6-title": "Commandant",
    "m6-inst": "Armed Forces Medical Institute (AFMI) & CMH Chattogram",
    "m6-desc": "Trained generations of military medical officers as Commandant of AFMI. Commanded CMH Chattogram, upholding rigorous operational readiness and defense healthcare standards.",
    "m7-title": "Former National Consultant",
    "m7-inst": "BRAC Health Program (BHP)",
    "m7-desc": "Advised on community health scale-up, healthcare financing frameworks, maternal-child survival policies, and public-private healthcare partnerships across Bangladesh.",

    // Pillars
    "pillars-badge": "Areas of Expertise",
    "pillars-title": "Executive Advisory & Strategic Capabilities",
    "pillars-subtitle": "Providing high-level counsel to healthcare boards, investor groups, government ministries, and international health development organizations.",
    "pil1-name": "Hospital Commissioning & Setup",
    "pil1-body": "Architectural feasibility, clinical workflow planning, medical equipment procurement, and full turn-key launch of tertiary medical facilities and specialized medical colleges.",
    "pil2-name": "Epidemic & Crisis Governance",
    "pil2-body": "Battlefield-tested protocols for mass casualty triage, infectious disease isolation units, supply-chain resilience, and frontline healthcare workforce protection during emergencies.",
    "pil3-name": "Clinical Quality & Patient Safety",
    "pil3-body": "Instituting international clinical governance, NABH/JCI alignment standards, zero-tolerance medical audit regimes, infection control protocols, and empathetic patient relations.",
    "pil4-name": "Healthcare Turnaround Strategy",
    "pil4-body": "Transforming struggling hospitals into financially viable, ethically operated, high-occupancy centers of excellence through disciplined administrative reforms.",
    "pil5-name": "Medical Education & Residency",
    "pil5-body": "Curriculum design, post-graduate medical training oversight, and faculty development rooted in the apex military medical academy (AFMI) legacy.",
    "pil6-name": "Public Health Policy Advisory",
    "pil6-body": "Consulting for bilateral donor agencies, non-governmental initiatives (like BRAC), and national policy bodies on universal health coverage, sanitation, and disease surveillance.",

    // Crisis Section
    "covid-badge": "National Frontline Chronicle",
    "covid-title": "Commanding Bangladesh's Largest Healthcare Frontline in Pandemic",
    "covid-p1": "When the coronavirus pandemic struck Bangladesh in early 2020, Dhaka Medical College Hospital became the nation's critical battleground. As Director, Brigadier General (Dr.) AKM Nasir Uddin swiftly engineered the expansion from an initial burn-unit isolation wing to the historic 600+ bed dedicated COVID-19 Building-2.",
    "covid-p2": "Under extreme public pressure, oxygen scarcity, and uncertainty, he coordinated the housing, round-the-clock nutrition, safety PPE, and specialized quarantine transport for over 2,200 frontline physicians, nurses, and technologists. Later in 2021, he took command as Director of the monumental DNCC Dedicated COVID-19 Hospital, inaugurating the nation's largest ICU defense facility.",
    "cov-point-1": "Direct oversight of 2,200+ frontline health workers' logistics & security.",
    "cov-point-2": "Zero-refusal emergency admissions for critical comorbidity patients.",
    "cov-point-3": "Rapid deployment of high-flow nasal cannula (HFNC) and central oxygen pipelines.",
    "card-dmch2-desc": "Transformed in record time to serve thousands of respiratory distress patients during the crucial early wave of COVID-19.",
    "card-dncc-desc": "Spearheaded operations as Director at the specialized facility in Mohakhali equipped with over 200 ICU beds.",
    "card-dengue-desc": "Marshaled DMCH clinical resources during Bangladesh's worst dengue outbreak, establishing dedicated cell triage.",
    "card-welfare-desc": "Protected and mobilized clinicians across 30 quarantine hotels, ensuring uninterrupted hospital shifts.",

    // Media
    "media-badge": "National Voice & Transparency",
    "media-title": "Media Briefings & Press Highlights",
    "media-subtitle": "Consistent communicator in national media, providing transparent public health guidance during times of critical healthcare discourse.",
    "med-1-title": "Expanding COVID-19 Dedicated Care at DMCH",
    "med-1-desc": "National press briefings addressing hospital capacity, triage mechanisms for high-risk comorbidity patients, and ensuring round-the-clock emergency care.",
    "med-2-title": "Safeguarding Healthcare Warriors & Logistics",
    "med-2-desc": "Clarified transparent budgetary allocations for accommodation, meals, safety gear, and daily transport for 2,200+ frontline doctors and medical personnel.",
    "med-3-title": "The Future of Private-Public Health Integration",
    "med-3-desc": "Keynote presentations on modernizing hospital ICU architectures, telemedicine networks, and instilling corporate ethics into hospital administration.",

    // Credentials
    "acad-badge": "Qualifications & Scholarly Footprint",
    "acad-title": "Academic Degrees & Scholarly Research",
    "deg-1-desc": "Foundational clinical training, emergency surgery rotations, and subsequent entry into the Bangladesh Army Medical Corps (AMC).",
    "deg-2-desc": "Advanced postgraduate academic research, scientific methodology, pathology & medical investigative frameworks.",
    "deg-3-desc": "Epidemiology, hospital administration, biostatistics, health economics, and national population health policy design.",
    "res-banner-title": "Public Health Research & Clinical Studies",
    "res-banner-desc": "Contributed to clinical research on COVID-19 prevention protocols, community health delivery, and hospital infection mitigation.",

    // Contact
    "contact-badge": "Executive Engagement",
    "contact-title": "Strategic Consultation & Advisory Desk",
    "contact-desc": "For institutional hospital development, board appointments, medical college commissioning, or keynote invitations, submit your proposal to the executive secretariat.",
    "c-office-title": "Current Executive Office",
    "c-wa-title": "Direct WhatsApp Secretariat",
    "c-mail-title": "Official Correspondence",
    "form-title": "Strategic Proposal / Consultation",
    "form-sub": "Confidential executive correspondence channel",
    "f-name": "Your Full Name / Dignitary Name *",
    "f-org": "Organization / Medical Group *",
    "f-phone": "Direct Phone / WhatsApp Number *",
    "f-email": "Official Email Address *",
    "f-type": "Nature of Engagement *",
    "f-msg": "Proposal / Brief Context *",
    "btn-submit-proposal": "Transmit Executive Proposal (WhatsApp / Email)",
    "f-disclaimer": "All proposals are treated with strict executive confidentiality.",
    "footer-bio": "Official Executive Portfolio. Dedicated to the advancement of healthcare excellence, medical ethics, and national health infrastructure throughout Bangladesh."
  },

  bn: {
    // Top Bar
    "hero-tag": "বিশিষ্ট নেতৃত্ব ও সম্মান",
    "top-announcement": "স্বাস্থ্যসেবা কৌশলগত পরামর্শ • হাসপাতাল কমিশনিং • জনস্বাস্থ্য পলিসি",
    "top-book": "এক্সিকিউটিভ পরামর্শ বুক করুন",
    "top-service": "২৪/৭ টারশিয়ারি স্বাস্থ্যসেবা সার্বক্ষণিক প্রস্তুত",
    "hero-ceo-subtitle": "নির্বাহী স্বাস্থ্য নেতৃত্ব ও জাতীয় রূপকার",
    "hero-tenures-summary": "সাবেক জাতীয় পরামর্শক, ব্র্যাক হেলথ প্রোগ্রাম (BHP) • সাবেক কমান্ড্যান্ট, আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউট (AFMI) • সাবেক কমান্ড্যান্ট, সিএমএইচ চট্টগ্রাম • সাবেক পরিচালক, ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH) • সাবেক পরিচালক, রাজশাহী মেডিকেল কলেজ হাসপাতাল (RMCH) • সাবেক পরিচালক, কুর্মিটোলা জেনারেল হাসপাতাল • সাবেক পরিচালক, ডিএনসিসি ডেডিকেটেড কোভিড-১৯ হাসপাতাল।",

    // Navigation
    "nav-sub": "এমবিবিএস • এমফিল • এমপিএইচ | স্বাস্থ্যখাতের রূপকার",
    "nav-about": "জীবন ও কর্ম",
    "nav-milestones": "কমান্ড রেকর্ড",
    "nav-pillars": "উপদেষ্টা ক্ষেত্র",
    "nav-crisis": "সংকটকালীন নেতৃত্ব",
    "nav-media": "প্রেস ও মিডিয়া",
    "nav-credentials": "ডিগ্রি ও গবেষণা",
    "btn-consult": "অ্যাডভাইজরি ডেস্ক",

    // Hero Section
    "hero-army-badge": "বাংলাদেশ সেনাবাহিনী মেডিকেল কোর • অবসরপ্রাপ্ত ব্রিগেডিয়ার জেনারেল",
    "hero-title-prefix": "ব্রিগেডিয়ার জেনারেল (ডা.)",
    "hero-desc": "বিশিষ্ট স্বাস্থ্য প্রশাসক, হাসপাতাল রূপান্তর বিশেষজ্ঞ এবং ঢাকা মেডিকেল কলেজ হাসপাতালের (DMCH) সাবেক সফল পরিচালক। বাংলাদেশ সেনাবাহিনীর সম্মিলিত সামরিক হাসপাতাল (CMH), জাতীয় রেফারাল ইনস্টিটিউট ও শীর্ষস্থানীয় বেসরকারি স্বাস্থ্য প্রতিষ্ঠানে সাড়ে তিন দশকেরও বেশি সময় ধরে গৌরবোজ্জ্বল নেতৃত্ব প্রদানকারী ব্যক্তিত্ব।",
    "badge-ceo": "সিইও:",
    "badge-dmch": "সাবেক পরিচালক:",
    "badge-dncc": "সাবেক পরিচালক:",
    "badge-brac": "সাবেক জাতীয় কনসালটেন্ট:",
    "btn-hero-consult": "কৌশলগত পরামর্শের জন্য আবেদন",
    "btn-hero-milestones": "কর্মজীবনের গৌরবগাথা",
    "btn-hero-cv": "এক্সিকিউটিভ প্রোফাইল",
    "frame-caption-title": "প্রধান নির্বাহী কর্মকর্তা (সিইও)",
    "frame-caption-sub": "প্রো-অ্যাক্টিভ মেডিকেল কলেজ ও হাসপাতাল লি.",

    // Stats
    "stat-1": "বছর সামরিক ও বেসামরিক চিকিৎসা ব্যবস্থাপনায় অবদান",
    "stat-2": "শীর্ষ টারশিয়ারি হাসপাতাল ও ইনস্টিটিউট সফলভাবে পরিচালনা",
    "stat-3": "শয্যার বৃহৎ হাসপাতাল অবকাঠামো ব্যবস্থাপনা",
    "stat-4": "মহামারি ও জাতীয় সংকটে লাখ লাখ মানুষের জীবনরক্ষা",

    // Biography
    "about-badge": "জীবনবৃত্তান্ত ও কর্মতর্পণ",
    "about-title": "সামরিক শৃঙ্খলা ও মানবিক চিকিৎসা সেবার অনন্য মেলবন্ধন",
    "about-p1": "ব্রিগেডিয়ার জেনারেল (ডা.) এ কে এম নাসির উদ্দিন (অব.) দক্ষিণ এশিয়ার স্বাস্থ্য ব্যবস্থাপনায় এক অনন্য ও আলোকিত ব্যক্তিত্ব—যিনি বাংলাদেশ সেনাবাহিনী মেডিকেল কোরের কঠোর নিয়মানুবর্তিতার সাথে বেসামরিক বৃহত্তম স্বাস্থ্য প্রতিষ্ঠানগুলোর জটিল পরিচালন দক্ষতার এক অপূর্ব সমন্বয় ঘটিয়েছেন।",
    "about-p2": "তাঁর গৌরবোজ্জ্বল কর্মজীবনে তিনি বাংলাদেশের স্বাস্থ্য ব্যবস্থার প্রাণকেন্দ্র ঢাকা মেডিকেল কলেজ হাসপাতালের (DMCH) পরিচালকের দায়িত্ব পালন করেন। করোনাভাইরাস মহামারি এবং অতীতের ভয়াবহ ডেঙ্গু প্রাদুর্ভাবের মতো জাতীয় সংকটে তাঁর দৃঢ় ও দূরদর্শী সিদ্ধান্ত হাজার হাজার রোগী ও স্বাস্থ্যকর্মীদের সুরক্ষা নিশ্চিত করেছিল।",
    "about-p3": "তিনি আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউটের (AFMI) কমান্ড্যান্ট, সিএমএইচ চট্টগ্রামের কমান্ড্যান্ট, রাজশাহী মেডিকেল কলেজ হাসপাতালের (RMCH) পরিচালক, কুর্মিটোলা জেনারেল হাসপাতালের পরিচালক এবং দেশের সর্ববৃহৎ ডিএনসিসি ডেডিকেটেড কোভিড-১৯ হাসপাতালের পরিচালকের দায়িত্ব সুনামের সাথে সম্পন্ন করেছেন।",
    "about-p4": "বর্তমানে তিনি প্রো-অ্যাক্টিভ মেডিকেল কলেজ ও হাসপাতাল লিমিটেডের প্রধান নির্বাহী কর্মকর্তা (সিইও) হিসেবে দায়িত্ব পালন করছেন এবং পূর্বে ব্র্যাকের জাতীয় স্বাস্থ্য উপদেষ্টা হিসেবে অবদান রেখেছেন।",
    "pill-1-title": "সংকটকালে পরীক্ষিত নেতৃত্ব",
    "pill-1-desc": "মহামারিকালে হাজার হাজার শয্যা ও ডাক্তারদের সফল নেতৃত্ব দানের বাস্তব অভিজ্ঞতা।",
    "pill-2-title": "হাসপাতালের সফল রূপান্তর",
    "pill-2-desc": "সরকারি মেগা হাসপাতাল ও বেসরকারি আধুনিক স্বাস্থ্য ব্যবস্থার যুগোপযোগী আধুনিকায়ন।",
    "creed-subtitle": "নেতৃত্বের মূল দর্শন",
    "creed-title": "স্বাস্থ্যসেবা ও মানবিক দায়িত্ববোধ",
    "creed-quote": "\"স্বাস্থ্যসেবা শুধুমাত্র একটি প্রশাসনিক দায়িত্ব নয়; এটি এক পবিত্র জাতীয় আমানত। একজন সফল স্বাস্থ্য প্রশাসকের সবচেয়ে বড় শক্তি হলো সামরিক সততা, রোগীর প্রতি অকৃত্রিম মানবিক সহানুভূতি এবং যেকোনো জাতীয় সংকটে সাহসী উদ্ভাবনী পদক্ষেপ গ্রহণ করার মানসিকতা।\"",

    // Career Timeline
    "timeline-badge": "সামরিক ও বেসামরিক কমান্ড রেকর্ড",
    "timeline-title": "গুরুত্বপূর্ণ প্রশাসনিক মাইলফলক ও নেতৃত্ব",
    "timeline-subtitle": "বাংলাদেশের শীর্ষ সামরিক, সরকারি টারশিয়ারি এবং আধুনিক বেসরকারি স্বাস্থ্য অবকাঠামো পরিচালনার কালানুক্রমিক ইতিহাস।",
    "m1-title": "প্রধান নির্বাহী কর্মকর্তা (সিইও) ও পরিচালক (হাসপাতাল)",
    "m1-inst": "প্রো-অ্যাক্টিভ মেডিকেল কলেজ ও হাসপাতাল লিমিটেড (PMCHL)",
    "m1-desc": "সার্বিক হাসপাতাল পরিচালনা, সর্বাধুনিক ২৪/৭ আইসিইউ/সিসিইউ, জটিল সার্জারি অবকাঠামো ও আন্তর্জাতিক মানের রোগীসেবা নিশ্চিতে অগ্রণী ভূমিকা পালন করছেন।",
    "m2-title": "পরিচালক",
    "m2-inst": "ডিএনসিসি ডেডিকেটেড কোভিড-১৯ হাসপাতাল, মহাখালী, ঢাকা",
    "m2-desc": "দেশের সর্ববৃহৎ ১,০০০ শয্যাবিশিষ্ট বিশেষায়িত মহামারি হাসপাতাল ও ২০০টির বেশি আইসিইউ সম্বলিত ফিল্ড সেন্টারের উদ্বোধনী কমান্ড ও সফল পরিচালনা।",
    "m3-title": "পরিচালক",
    "m3-inst": "ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH)",
    "m3-desc": "দেশের প্রধান জাতীয় রেফারাল হাসপাতাল পরিচালনা। প্রাথমিক কোভিড সংকটে ২ নং ভবনে ৬০০ শয্যার ডেডিকেটেড ইউনিট চালু এবং ২,২০০+ সম্মুখসারির চিকিৎসকদের আবাসন ও সুরক্ষার ঐতিহাসিক ব্যবস্থাপনা।",
    "m4-title": "পরিচালক",
    "m4-inst": "কুর্মিটোলা জেনারেল হাসপাতাল, ঢাকা",
    "m4-desc": "রাজধানীর উত্তর অঞ্চলের এই অন্যতম আধুনিক টারশিয়ারি জেনারেল হাসপাতালের আধুনিক স্বাস্থ্যসেবা ও ইমার্জেন্সি ব্যবস্থার মানোন্নয়ন।",
    "m5-title": "পরিচালক",
    "m5-inst": "রাজশাহী মেডিকেল কলেজ হাসপাতাল (RMCH)",
    "m5-desc": "উত্তরবঙ্গের সর্ববৃহৎ চিকিৎসা কেন্দ্রের সফল পরিচালনা, বহির্বিভাগ আধুনিকায়ন ও চিকিৎসকদের উচ্চতর প্রশিক্ষণের অনুকূল পরিবেশ নিশ্চিতকরণ।",
    "m6-title": "কমান্ড্যান্ট",
    "m6-inst": "আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউট (AFMI) ও সিএমএইচ চট্টগ্রাম",
    "m6-desc": "সামরিক বাহিনীর সর্বোচ্চ মেডিকেল প্রশিক্ষণ একাডেমিতে ভবিষ্যৎ সামরিক চিকিৎসকদের গড়ে তোলা এবং চট্টগ্রাম সিএমএইচের সার্বিক প্রশাসনিক কমান্ড পরিচালনা।",
    "m7-title": "সাবেক জাতীয় পরামর্শক (National Consultant)",
    "m7-inst": "ব্র্যাক হেলথ প্রোগ্রাম (BHP)",
    "m7-desc": "তৃণমূল পর্যায়ে স্বাস্থ্যসেবা সম্প্রসারণ, মা ও শিশু স্বাস্থ্য উন্নয়ন নীতি এবং সরকারি-বেসরকারি যৌথ স্বাস্থ্য প্রকল্প প্রণয়নে পরামর্শ প্রদান।",

    // Pillars
    "pillars-badge": "কৌশলগত দক্ষতার ক্ষেত্রসমূহ",
    "pillars-title": "এক্সিকিউটিভ অ্যাডভাইজরি ও প্রাতিষ্ঠানিক সক্ষমতা",
    "pillars-subtitle": "হাসপাতাল পরিচালনা পর্ষদ, দেশি-বিদেশি স্বাস্থ্য বিনিয়োগকারী গ্রুপ এবং নীতি-নির্ধারণী সংস্থাকে সর্বোচ্চ পর্যায়ের পরামর্শ প্রদান।",
    "pil1-name": "হাসপাতাল স্থাপন ও কমিশনিং",
    "pil1-body": "নতুন টারশিয়ারি হাসপাতাল ও মেডিকেল কলেজের স্থাপত্য নকশা অনুমোদন, যন্ত্রপাতি ক্রয়, ডিপার্টমেন্টাল ফ্লো ও পূর্ণাঙ্গ চালুকরণ।",
    "pil2-name": "মহামারি ও সংকটকালীন ব্যবস্থাপনা",
    "pil2-body": "যেকোনো জাতীয় স্বাস্থ্য দুর্যোগে দ্রুত আইসোলেশন বেড প্রস্তুত, সেন্ট্রাল অক্সিজেন সরবরাহ ও চিকিৎসক টিমের সুরক্ষায় রণকৌশল প্রণয়ন।",
    "pil3-name": "ক্লিনিক্যাল কোয়ালিটি ও পেশেন্ট সেফটি",
    "pil3-body": "আন্তর্জাতিক মানের রোগী নিরাপত্তা, ইনফেকশন কন্ট্রোল অডিট এবং শূন্য ত্রুটিযুক্ত চিকিৎসা প্রটোকল বাস্তবায়ন।",
    "pil4-name": "হাসপাতাল রিভাইভাল ও টার্নঅ্যারাউন্ড",
    "pil4-body": "লোকসানে থাকা বা অগোছালো হাসপাতালকে শৃঙ্খলাবদ্ধ ও লাভজনক বিশ্বমানের প্রতিষ্ঠানে রূপান্তর করার কৌশল।",
    "pil5-name": "চিকিৎসা শিক্ষা ও রেসিডেন্সি গাইডেন্স",
    "pil5-body": "মেডিকেল কারিকুলাম, পোস্টগ্র্যাজুয়েট ডাক্তারদের ক্লিনিক্যাল ফেলোশিপ এবং ফ্যাকাল্টি ডেভেলপমেন্টের নেতৃত্ব।",
    "pil6-name": "জাতীয় জনস্বাস্থ্য পলিসি প্রণয়ন",
    "pil6-body": "ইউজার-ফ্রেন্ডলি স্বাস্থ্য অর্থায়ন, টিকাদান কর্মসূচি এবং আন্তর্জাতিক স্বাস্থ্য সংস্থার সাথে টেকসই অংশীদারিত্ব গড়ে তোলা।",

    // Crisis Section
    "covid-badge": "জাতীয় মহামারি কমান্ডের দিনলিপি",
    "covid-title": "মহামারির অগ্নিপরীক্ষায় দেশের সর্ববৃহৎ স্বাস্থ্য ফ্রন্টলাইনের কমান্ড",
    "covid-p1": "২০২০ সালের গোড়ার দিকে যখন বাংলাদেশে করোনাভাইরাস মহামারি আঘাত হানে, ঢাকা মেডিকেল কলেজ হাসপাতাল পরিণত হয়েছিল গোটা জাতির জীবন-মরণ যুদ্ধের কেন্দ্রবিন্দুতে। পরিচালক হিসেবে ব্রিগেডিয়ার জেনারেল নাসির উদ্দিন অতি দ্রুত বার্ন ইউনিটের সীমিত আইসোলেশন থেকে ডিএমসিএইচের ২ নং ভবনকে রূপান্তর করেন ৬০০+ শয্যার সুসজ্জিত কোভিড হাসপাতালে।",
    "covid-p2": "অক্সিজেনের তীব্র সংকট ও আতঙ্কের মাঝে তিনি প্রায় ৩০টি হোটেল ভাড়া করে ২,২০০-এর বেশি সম্মুখসারির ডাক্তার, নার্স ও স্বাস্থ্যকর্মীর আবাসন, তিনবেলার সুষম খাদ্য, ব্যক্তিগত সুরক্ষা ও বিশেষ পরিবহনের সুব্যবস্থা নিশ্চিত করেন। পরবর্তী সময়ে মহাখালীর ডিএনসিসি কোভিড হাসপাতালেরও পরিচালকের দায়িত্ব নেন তিনি।",
    "cov-point-1": "২,২০০+ সম্মুখসারির চিকিৎসকদের সুরক্ষা, আহার ও আবাসনের নিশ্ছিদ্র ব্যবস্থাপনা।",
    "cov-point-2": "জটিল কো-মরবিডিটিতে আক্রান্ত মুমূর্ষু রোগীদের জরুরি ভর্তির কঠোর নিশ্চয়তা।",
    "cov-point-3": "হাই-ফ্লো ন্যাজাল ক্যানুলা ও সেন্ট্রাল অক্সিজেন লাইনের দ্রুততম সম্প্রসারণ।",
    "card-dmch2-desc": "রেকর্ড সময়ে সাধারণ ভবন থেকে রূপান্তরিত পূর্ণাঙ্গ কোভিড চিকিৎসা কেন্দ্র।",
    "card-dncc-desc": "মহাখালীতে স্থাপিত দেশের সর্ববৃহৎ ১,০০০ শয্যার ফিল্ড হাসপাতালের নেতৃত্ব।",
    "card-dengue-desc": "২০১৯ সালের ভয়াবহ ডেঙ্গু প্রাদুর্ভাবে ডিএমসিএইচের জরুরি সেল গঠন ও সেবা।",
    "card-welfare-desc": "৩০টি হোটেলে চিকিৎসকদের আইসোলেশন ও নিরবচ্ছিন্ন সেবা প্রদানে সহায়তা।",

    // Media
    "media-badge": "জাতীয় বক্তব্য ও স্বচ্ছতা",
    "media-title": "গণমাধ্যম সাক্ষাৎকার ও প্রেস কনফারেন্স",
    "media-subtitle": "জাতীয় সংকটে টেলিভিশন, প্রিন্ট ও অনলাইন গণমাধ্যমে স্বাস্থ্য ব্যবস্থার সঠিক ও স্বচ্ছ তথ্য তুলে ধরে জনসচেতনতা সৃষ্টি।",
    "med-1-title": "ডিএমসিএইচে কোভিড-১৯ চিকিৎসার সম্প্রসারণ ও পরিকল্পনা",
    "med-1-desc": "প্রথম আলো ও দ্য বিজনেস স্ট্যান্ডার্ডে হাসপাতালের ধারণক্ষমতা, ক্রিটিক্যাল রোগীদের অগ্রাধিকার এবং ২৪ ঘণ্টা সেবা নিশ্চিতকরণ নিয়ে বিবৃতি।",
    "med-2-title": "সম্মুখসারির স্বাস্থ্যযোদ্ধাদের নিরাপত্তা ও লজিস্টিকস",
    "med-2-desc": "স্বাস্থ্যকর্মীদের সুরক্ষা সামগ্রী, আবাসন ও হাসপাতালের স্বচ্ছ ব্যয় বিবরণী তুলে ধরে আয়োজিত প্রেস কনফারেন্স।",
    "med-3-title": "বেসরকারি ও সরকারি স্বাস্থ্য ব্যবস্থার আধুনিকায়ন",
    "med-3-desc": "হাসপাতাল আইসিইউ নেটওয়ার্ক উন্নয়ন ও দক্ষ স্বাস্থ্য প্রশাসক তৈরিতে জাতীয় সেমিনারে মূল বক্তব্য উপস্থাপন।",

    // Credentials
    "acad-badge": "শিক্ষাগত যোগ্যতা ও গবেষণা",
    "acad-title": "উচ্চতর ডিগ্রি ও বৈজ্ঞানিক গবেষণা",
    "deg-1-desc": "ক্লিনিক্যাল মেডিসিন ও সার্জারির বুনিয়াদি ডিগ্রি, যার পর তিনি বাংলাদেশ সেনাবাহিনী মেডিকেল কোরে গৌরবোজ্জ্বল যোগদান করেন।",
    "deg-2-desc": "উচ্চতর পোস্টগ্র্যাজুয়েট ডিগ্রি—চিকিৎসা গবেষণা পদ্ধতি, প্যাথলজিক্যাল তদন্ত ও বিজ্ঞানভিত্তিক স্বাস্থ্য সমীক্ষা।",
    "deg-3-desc": "জনস্বাস্থ্য প্রশাসন, মহামারিবিদ্যা (এপিডেমিওলজি), বায়োস্ট্যাটিস্টিকস ও ন্যাশনাল হেলথ পলিসি ডিজাইনে উচ্চতর ডিগ্রি।",
    "res-banner-title": "জনস্বাস্থ্য ও কোভিড-১৯ প্রতিরোধ গবেষণা",
    "res-banner-desc": "কোভিড-১৯ সংক্রমণ প্রতিরোধ প্রটোকল, তৃণমূল স্বাস্থ্যসেবা প্রদান ও হাসপাতালের সংক্রমণ নিয়ন্ত্রণ সংক্রান্ত গবেষণায় অবদান।",

    // Contact
    "contact-badge": "এক্সিকিউটিভ যোগাযোগ ও পরামর্শ",
    "contact-title": "কৌশলগত পরামর্শ ও অ্যাডভাইজরি ডেস্ক",
    "contact-desc": "নতুন হাসপাতাল স্থাপন, বোর্ড মিটিংয়ে স্বাধীন উপদেষ্টা অন্তর্ভুক্তি, মেডিকেল কলেজ কমিশন অথবা জাতীয় স্বাস্থ্য সেমিনারে মূল বক্তব্যের আমন্ত্রণের জন্য সচিবালয়ে প্রস্তাব পাঠান।",
    "c-office-title": "বর্তমান নির্বাহী কার্যালয়",
    "c-wa-title": "সরাসরি হোয়াটসঅ্যাপ সচিবালয়",
    "c-mail-title": "অফিসিয়াল ইমেইল পত্রালাপ",
    "form-title": "কৌশলগত প্রস্তাব / পরামর্শের আবেদন",
    "form-sub": "সম্পূর্ণ গোপনীয় এক্সিকিউটিভ যোগাযোগ চ্যানেল",
    "f-name": "আপনার পূর্ণ নাম / পদমর্যাদা *",
    "f-org": "প্রতিষ্ঠান / মেডিকেল গ্রুপের নাম *",
    "f-phone": "সরাসরি ফোন / হোয়াটসঅ্যাপ নম্বর *",
    "f-email": "অফিসিয়াল ইমেইল ঠিকানা *",
    "f-type": "পরামর্শের ধরন নির্বাচন করুন *",
    "f-msg": "প্রস্তাবের বিস্তারিত বিবরণ / উদ্দেশ্য *",
    "btn-submit-proposal": "এক্সিকিউটিভ প্রস্তাব প্রেরণ করুন (হোয়াটসঅ্যাপ / ইমেইল)",
    "f-disclaimer": "সকল প্রস্তাব ও তথ্য সর্বোচ্চ এক্সিকিউটিভ গোপনীয়তার সাথে সংরক্ষণ করা হয়।",
    "footer-bio": "অফিসিয়াল এক্সিকিউটিভ পোর্টফোলিও। বাংলাদেশের স্বাস্থ্যখাতের অবকাঠামো উন্নয়ন, চিকিৎসা নৈতিকতা ও জনস্বাস্থ্যের উৎকর্ষ সাধনে নিবেদিত।"
  }
};

// Current active language state
let currentLanguage = localStorage.getItem('site_lang') || 'en';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearElem = document.getElementById('currentYear');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // Apply saved language
  applyLanguage(currentLanguage);

  // Setup Language Switcher Button
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLanguage = (currentLanguage === 'en') ? 'bn' : 'en';
      localStorage.setItem('site_lang', currentLanguage);
      applyLanguage(currentLanguage);
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Scroll to Top Listener
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollToTopBtn.classList.remove('hidden');
      scrollToTopBtn.classList.add('flex');
    } else {
      scrollToTopBtn.classList.add('hidden');
      scrollToTopBtn.classList.remove('flex');
    }
  });

  // Advisory Form Submission Handler
  const advisoryForm = document.getElementById('advisoryForm');
  if (advisoryForm) {
    advisoryForm.addEventListener('submit', handleAdvisorySubmit);
  }
});

/**
 * Apply Language across DOM
 */
function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  
  // Update all elements with data-lang attribute
  document.querySelectorAll('[data-lang]').forEach(elem => {
    const key = elem.getAttribute('data-lang');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // Update Language Button Label
  const currentLangText = document.getElementById('currentLangText');
  if (currentLangText) {
    currentLangText.textContent = (lang === 'en') ? 'বাংলা' : 'English';
  }

  // Adjust root document lang attribute & font styling
  document.documentElement.lang = lang;
  if (lang === 'bn') {
    document.body.classList.add('font-bengali');
  } else {
    document.body.classList.remove('font-bengali');
  }
}

/**
 * Handle VIP Advisory Form Submission
 */
function handleAdvisorySubmit(e) {
  e.preventDefault();

  const name = document.getElementById('senderName').value.trim();
  const org = document.getElementById('senderOrg').value.trim();
  const phone = document.getElementById('senderPhone').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const type = document.getElementById('engagementType').value;
  const msg = document.getElementById('senderMsg').value.trim();

  if (!name || !phone || !org || !msg) {
    alert(currentLanguage === 'bn' ? 'অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।' : 'Please fill in all required fields.');
    return;
  }

  // Formulate high-class executive WhatsApp text
  const waText = 
`*EXECUTIVE CONSULTATION PROPOSAL*
To: Secretariat of Brigadier General (Dr.) AKM Nasir Uddin (retd.)
From: ${name}
Organization: ${org}
Phone/WhatsApp: ${phone}
Official Email: ${email}
Engagement Nature: ${type}

*Proposal Brief:*
${msg}

-------------------------
Sent via Official VIP Portfolio`;

  const encodedWa = encodeURIComponent(waText);
  // Official Pro-Active Executive & Emergency Secretariat Contact
  const waUrl = `https://wa.me/8801902556070?text=${encodedWa}`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // Confirmation feedback
  const successMsg = currentLanguage === 'bn' 
    ? 'ধন্যবাদ! আপনার প্রস্তাবটি সরাসরি ব্রিগেডিয়ার জেনারেল স্যারের হোয়াটসঅ্যাপে প্রস্তুত হয়েছে।' 
    : 'Thank you! Your strategic proposal has been formatted for the Executive Secretariat.';
  
  alert(successMsg);
  document.getElementById('advisoryForm').reset();
}

/**
 * Executive Profile Brief Modal Functions
 */
function openExecutiveBriefModal() {
  const modal = document.getElementById('briefModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeExecutiveBriefModal() {
  const modal = document.getElementById('briefModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// Close modal on escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeExecutiveBriefModal();
  }
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  const modal = document.getElementById('briefModal');
  if (e.target === modal) {
    closeExecutiveBriefModal();
  }
});
