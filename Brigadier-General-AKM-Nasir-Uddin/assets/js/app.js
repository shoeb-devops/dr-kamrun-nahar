/**
 * Ultra-Premium Executive Portfolio Engine
 * Brigadier General (Dr.) AKM Nasir Uddin (retd.)
 * Interactive Bilingual Engine, Count-Up Animations, IntersectionObserver Scroll Reveals & Secretariat Integration
 */

// Comprehensive Bilingual Vocabulary Dictionary (Including Detailed LinkedIn Career Data)
const translations = {
  en: {
    // Top Bar (Personal Executive Focus)
    "hero-tag": "Distinguished Leadership",
    "top-portfolio-tag": "Official Personal Portfolio",
    "top-bio-summary": "Senior Healthcare Statesman • Military Veteran • Public Health Strategist",
    "top-announcement": "Executive Healthcare Advisory • Hospital Commissioning • Public Health Strategy",
    "top-book": "Request Executive Consultation",

    // Navigation
    "nav-sub": "MPhil, MPH, MBBS | Healthcare Statesman",
    "nav-about": "About",
    "nav-career": "Career & Command",
    "nav-covid": "Crisis Defense",
    "nav-media": "Media & Voice",
    "nav-projects": "Key Projects",
    "nav-media": "Media & Press",
    "filter-all": "All Appointments (17)",
    "filter-civilian": "Civilian Hospitals (5)",
    "filter-army": "Army Medical Command (9)",
    "filter-advisory": "National Advisory & Sports (3)",
    "btn-send-wa": "WhatsApp Secretariat",
    "btn-send-mail": "Official Email Desk",
    "nav-milestones": "Command Record",
    "nav-linkedin-exp": "Career History",
    "nav-skills": "Core Competencies",
    "nav-pillars": "Strategic Advisory",
    "nav-crisis": "Crisis Leadership",
    "nav-media": "Media & Press",
    "nav-credentials": "Degrees & Research",
    "btn-consult": "Advisory Desk",

    // Hero Section
    "hero-army-badge": "BANGLADESH ARMY MEDICAL CORPS • RETIRED BRIGADIER GENERAL",
    "hero-photo-ribbon": "Army Medical Corps Veteran",
    "hero-ceo-subtitle": "HEALTHCARE STATESMAN & MEDICAL ADMINISTRATOR",
    "hero-title-prefix": "Brigadier General (Dr.)",
    "hero-cur-post-title": "CURRENT EXECUTIVE LEADERSHIP:",
    "hero-cur-post-val": "Chief Executive Officer (CEO) — Pro-Active Medical College & Hospital Ltd",
    "frame-caption-title": "Former Director, Dhaka Medical College Hospital (DMCH) & Public Health Leader",
    "frame-caption-sub": "CEO, Pro-Active Hospital • Former National Consultant, BRAC Health • Over 35 Years of Exemplary Command",
    "hero-tenures-summary": "Former National Consultant, BRAC Health Program (BHP) • Former Commandant, Armed Forces Medical Institute (AFMI) • Former Commandant, Combined Military Hospital (CMH) Chattogram • Former Director, Dhaka Medical College Hospital (DMCH) • Former Director, Rajshahi Medical College Hospital (RMCH) • Former Director, Kurmitola General Hospital • Former Director, DNCC Dedicated Covid-19 Hospital.",
    "btn-hero-consult": "Request Strategic Advisory",
    "btn-hero-timeline": "17 Career Appointments",
    "btn-hero-cv": "Executive Profile Brief",

    // Stats
    "stat-1": "Years of Military & Civil Medical Command",
    "stat-2": "Premier Tertiary Hospitals & Institutes Commanded",
    "stat-3": "Hospital Beds Administered Across Career",
    "stat-4": "Patients Benefited Across Pandemics & National Crises",

    // Biography
    "about-badge": "The Statesman's Journey",
    "about-title": "Where Military Precision Meets Compassionate Healing",
    "about-p1": "<strong class=\"font-bold text-[#023E3A] font-serif text-lg sm:text-[19px]\">Brigadier General (Dr.) AKM Nasir Uddin (retd.)</strong> is a distinguished medical commander, health system architect, and healthcare statesman with over <span class=\"font-bold text-[#023E3A] bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-200/60\">33+ years of high-command leadership</span> across military, public tertiary, private, and international NGO sectors.",
    "about-p2": "Throughout his career, he served as strategic commander of major military hospitals, commanded field medical units in operational and austere environments, and served as <strong class=\"text-[#023E3A] font-semibold\">Commandant of the Armed Forces Medical Institute (AFMI)</strong>—the apex institution for military medical education and research. Under the Ministry of Health and Family Welfare, he successfully led and transformed four of the nation’s largest tertiary care medical college hospitals, most notably as <strong class=\"text-[#023E3A] font-semibold\">Director of Dhaka Medical College Hospital (DMCH)</strong> and <strong class=\"text-[#023E3A] font-semibold\">Director of Rajshahi Medical College Hospital (RMCH)</strong>.",
    "about-p3": "A certified <strong class=\"text-[#023E3A] font-semibold\">CBRN (Chemical, Biological, Radiation, and Nuclear) medical expert</strong>, his crisis leadership was critically tested during the COVID-19 pandemic, where he spearheaded the national response by leading two apex COVID-19 tertiary hospital facilities (including founding the <strong class=\"text-[#023E3A] font-semibold\">1,000-bed DNCC Dedicated COVID-19 Hospital</strong>). From 2017 to 2021, he served as <strong class=\"text-[#023E3A] font-semibold\">Chairman of the Medical & Anti-Doping Committee of the Bangladesh Olympic Association (BOA)</strong> under WADA protocols.",
    "about-p4": "As National Consultant for the <strong class=\"text-[#023E3A] font-semibold\">BRAC Health Program (BHP)</strong>, he guided national public health mega-programs in <strong class=\"text-[#023E3A] font-semibold\">NCD</strong>, <strong class=\"text-[#023E3A] font-semibold\">Mental Health & Psychosocial Support (MHPSS)</strong>, and <strong class=\"text-[#023E3A] font-semibold\">Maternal & Child Health</strong>. Currently, he applies his multi-sectoral executive expertise as <strong class=\"text-[#023E3A] font-semibold\">Chief Executive Officer (CEO) of Pro-Active Medical College and Hospital Ltd</strong>, actively dedicated to civic organizations and building resilient health systems for societal good.",
    "pill-1-title": "Crisis-Tested Governance",
    "pill-1-desc": "Proven experience commanding thousands of beds during national crises.",
    "pill-2-title": "Institutional Transformation",
    "pill-2-desc": "Turnaround strategist for both public mega-hospitals and private setups.",
    "creed-subtitle": "Message From CEO",
    "creed-title": "Core Principles of Health Stewardship",
    "creed-quote": "\"My career is defined by steadfast commitment to service, exemplary crisis leadership, and a profound contribution to military and civilian health systems in Bangladesh. I am passionate about building resilient, high-quality health systems and leveraging professional capital for societal good.\"",

    // LinkedIn Experience Section
    "exp-badge": "Distinguished Command & Career Record",
    "exp-title": "Executive Appointments & <span class=\"italic text-[#025B66] font-normal\">Institutional Leadership</span>",
    "exp-subtitle": "Over 35 years of exemplary institutional stewardship spanning apex national tertiary hospitals, the Bangladesh Army Medical Corps, and international defense medicine.",
    "exp1-role": "Chief Executive Officer (CEO)",
    "exp1-company": "Pro-Active Medical College & Hospital Ltd.",
    "exp1-desc": "Spearheading comprehensive hospital governance, modernizing 24/7 ICU & critical care, operating suites, medical staff development, patient safety protocols, and strategic hospital branding in Dhaka.",
    "exp2-role": "Director",
    "exp2-company": "DNCC Dedicated COVID-19 Hospital, Mohakhali",
    "exp2-desc": "Commanded the operationalization of Bangladesh’s largest dedicated pandemic field hospital (over 1,000 beds with 200+ ICU capacity), coordinating national patient admission flows during the height of the epidemic.",
    "exp3-role": "Director",
    "exp3-company": "Dhaka Medical College Hospital (DMCH)",
    "exp3-desc": "Directed the premier national referral center. Converted Building-2 into a 600-bed COVID facility, sheltered and provisioned 2,200+ medical frontline workers, and managed the historic 2019 Dengue crisis.",
    "exp4-role": "Commandant",
    "exp4-company": "Armed Forces Medical Institute (AFMI)",
    "exp4-desc": "Provided academic and military leadership for postgraduate medical education, training doctors of the Armed Forces in clinical specializations, disaster medicine, and leadership ethics.",
    "exp5-role": "Commandant",
    "exp5-company": "Combined Military Hospital (CMH) Chattogram",
    "exp5-desc": "Commanded the military medical establishment in the port city, ensuring defense healthcare operational readiness, high-standard tertiary medical support, and family healthcare facilities.",
    "exp6-role": "National Consultant",
    "exp6-company": "BRAC Health Program (BHP)",
    "exp6-desc": "Consulted on national community health initiatives, rural healthcare delivery models, maternal and child survival strategies, and public-private healthcare collaborations.",

    // Skills
    "skills-badge": "Executive Competencies & Accreditations",
    "skills-title": "Strategic Competencies & <span class=\"italic text-[#025B66] font-normal\">Global Accreditations</span>",
    "skills-subtitle": "Demonstrated capabilities validated over 35+ years of healthcare leadership in high-stakes civilian and military environments.",

    // Timeline
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

    // Projects
    "proj-badge": "International Bilateral Partnerships & National Megaprojects",
    "proj-title": "Healthcare Transformation & <span class=\"italic text-[#025B66] font-normal\">National Megaprojects</span>",
    "proj-sub": "Heading transformative health developments in collaboration with JICA (Japan), GIZ (Germany), Denmark (Danida), Netherlands, Sweden, USA, and the Government of Bangladesh.",
    "proj-dmch-title": "Preparation of Master Plan & Design for Renovation & Modernization of Dhaka Medical College & Hospital (DMCH)",
    "proj-dmch-desc": "Dhaka Medical College & Hospital (estb. 1946) is the nation's premier tertiary referral hospital with 2,600 existing beds and the largest medical/nursing college campus. Under his leadership as Director, the comprehensive Master Plan, Architectural Blueprint, and Cost Estimation were formulated to build a modern 5,000-bed hospital, new medical college, and nursing college. Envisioned as perhaps the largest academic hospital in the Asia-Pacific region.",
    "proj-jica-title": "Health Services Strengthening Project (QI) at DMCH & Capacity Building of Nursing Services (CBNS)",
    "proj-jica-desc": "Designed for healthcare Quality Improvement (QI) utilizing Japanese '5S' techniques (Sort, Set in order, Shine, Standardize, Sustain). Comprehensive Clinical Practice Nurses (CPN) training, Clinical Nurse Teacher Training, and institutional digital e-learning rollouts across DMCH.",
    "proj-occ-title": "One Stop Crisis Centre (OCC) for Women & Child Protection",
    "proj-occ-desc": "Spearheaded the multi-sectoral emergency protection response for women and child victims of domestic violence and assault at DMCH and RMCH. Delivered free integrated care combining medical treatment, clinical forensic support, trauma counseling, legal aid representation, and safe rehabilitation.",
    "proj-giz-title": "Addressing Bangladesh's Reproductive Challenges (Maternal & Child Health)",
    "proj-giz-desc": "Carried out under GIZ policy guidelines, technical oversight, and funding to provide critical healthcare for pregnant mothers and newborns. Strengthened institutional delivery protocols and maternal-child health safety nets across Northern Bangladesh.",
    "proj-srhr-title": "Sexual & Reproductive Health Rights (SRHR) Clinical Training & Services",
    "proj-srhr-desc": "Directed clinical training and client service expansion to improve reproductive health for female clients. Coordinated skill enhancement for doctors, nurses, and family health workers at Rajshahi Medical College Hospital and later scaled three-fold at Dhaka Medical College Hospital.",

    // Projects
    "proj-badge": "আন্তর্জাতিক দ্বিপাক্ষিক অংশীদারিত্ব ও জাতীয় মেগাপ্রকল্প",
    "proj-title": "স্বাস্থ্য রূপান্তর, মেগাপ্রকল্প ও <span class=\"italic text-[#025B66] font-normal\">দ্বিপাক্ষিক মিশন</span>",
    "proj-sub": "জাইকা (জাপান), জিআইজেড (জার্মানি), ডেনমার্ক (ডানিডা), নেদারল্যান্ডস, সুইডেন, যুক্তরাষ্ট্র এবং বাংলাদেশ সরকারের যৌথ অর্থায়ন ও নির্দেশনায় বাস্তবায়িত রূপান্তরমূলক স্বাস্থ্য উদ্যোগসমূহ।",
    "proj-dmch-title": "ঢাকা মেডিকেল কলেজ ও হাসপাতালের আধুনিকায়ন ও সম্প্রসারণের পূর্ণাঙ্গ মাস্টারপ্ল্যান, ডিজাইন ও ব্যয় প্রাক্কলন",
    "proj-dmch-desc": "১৯৪৬ সালে প্রতিষ্ঠিত দেশের প্রাচীনতম ও সর্ববৃহৎ ২,৬০০ শয্যার রেফারাল হাসপাতাল এবং মেডিকেল ও নার্সিং ক্যাম্পাসকে রূপান্তরের রূপরেখা। তাঁর পরিচালনাকালে পুরো হাসপাতাল ও শিক্ষা কার্যক্রম শতভাগ সচল রেখে নতুন ৫,০০০ শয্যার আধুনিক হাসপাতাল, নতুন মেডিকেল কলেজ ও নার্সিং কলেজ নির্মাণের ঐতিহাসিক মাস্টারপ্ল্যান প্রণীত হয়। যা এশিয়া প্যাসিফিকের সর্ববৃহৎ একাডেমিক হাসপাতাল কমপ্লেক্স হিসেবে পরিকল্পিত।",
    "proj-jica-title": "ডিএমসিএইচ-এ স্বাস্থ্যসেবা শক্তিশালীকরণ প্রকল্প (QI) ও নার্সিং সেবার সক্ষমতা বৃদ্ধি (CBNS)",
    "proj-jica-desc": "জাপান আন্তর্জাতিক সহযোগিতা সংস্থা (জাইকা) ও স্বাস্থ্য অধিদপ্তরের যৌথ উদ্যোগে জাপানি '5S' পদ্ধতির মাধ্যমে স্বাস্থ্যসেবার মান উন্নয়ন (QI)। ক্লিনিক্যাল প্র্যাকটিস নার্স (CPN) প্রশিক্ষণ, ট্রেইনার প্রশিক্ষণ এবং ডিজিটাল ই-লার্নিং ব্যবস্থা বাস্তবায়ন।",
    "proj-occ-title": "নারী ও শিশু সুরক্ষায় ওয়ান স্টপ ক্রাইসিস সেন্টার (OCC)",
    "proj-occ-desc": "পারিবারিক সহিংসতা ও নির্যাতনের শিকার নারী ও শিশুদের সুরক্ষায় ডিএমসিএইচ ও আরএমসিএইচ-এ মাল্টি-সেক্টোরাল সুরক্ষা কার্যক্রম পরিচালনা। বিনামূল্যে চিকিৎসা সেবা, ফরেনসিক টেস্ট, ট্রমা কাউন্সেলিং, আইনি সহায়তা ও নিরাপদ পুনর্বাসন প্রদান।",
    "proj-giz-title": "বাংলাদেশের প্রজনন স্বাস্থ্য চ্যালেঞ্জ মোকাবিলা (মাতৃ ও শিশু স্বাস্থ্য)",
    "proj-giz-desc": "জার্মান সরকারের উন্নয়ন সংস্থা জিআইজেড (GIZ)-এর অর্থায়ন ও নীতিমালার আলোকে গর্ভবতী মা ও নবজাতক শিশুদের জরুরি স্বাস্থ্যসেবা এবং প্রাতিষ্ঠানিক প্রসব সক্ষমতা জোরদারকরণ প্রকল্প।",
    "proj-srhr-title": "যৌন ও প্রজনন স্বাস্থ্য অধিকার (SRHR) ক্লিনিক্যাল প্রশিক্ষণ ও সেবা সম্প্রসারণ",
    "proj-srhr-desc": "নেদারল্যান্ডস, সুইডেন ও যুক্তরাষ্ট্রের সহায়তায় আরএইচস্টেপ (RHSTEP) ও আইপাস (Ipas)-এর যৌথ উদ্যোগে প্রজনন স্বাস্থ্য সেবা নিশ্চিতকরণ এবং ডাক্তার ও নার্সদের ক্লিনিক্যাল দক্ষতা বৃদ্ধির দীর্ঘমেয়াদি প্রকল্প পরিচালনা।",

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
    "acad-badge": "Academic Credentials & Higher Education",
    "acad-title": "Academic Credentials & <span class=\"italic text-[#025B66] font-normal\">Postgraduate Research</span>",
    "acad-sub": "Verified academic footprint from Notre Dame College, Rajshahi University, University of Dhaka, and Bangladesh University of Professionals (BUP).",
    "edu-1-field": "Health care & Hospital Management",
    "edu-1-inst": "Bangladesh University of Professionals (BUP)",
    "deg-2-desc": "Advanced postgraduate scientific research, institutional health administration methodologies, and clinical governance frameworks.",
    "edu-2-field": "Public Health Administration",
    "edu-2-inst": "University of Dhaka (ঢাকা বিশ্ববিদ্যালয়)",
    "deg-3-desc": "Public health administration, epidemiology, biostatistics, health systems economics, and national disease control policy design.",
    "edu-3-field": "Medicine & Surgery",
    "edu-3-inst": "Rajshahi University (রাজশাহী বিশ্ববিদ্যালয়)",
    "deg-1-desc": "Foundational clinical medicine, trauma care, general surgery rotations, and subsequent commissioning into the Bangladesh Army Medical Corps.",
    "edu-4-field": "Science",
    "edu-4-inst": "Notre Dame College, Dhaka (নটর ডেম কলেজ)",
    "edu-4-act": "Activities: Science Club Member",
    "deg-4-desc": "Prestigious collegiate academic foundation in pure sciences from one of the nation's most revered academic institutions, instilling lifelong discipline.",
    "res-banner-title": "Public Health Research & Clinical Studies",
    "res-banner-desc": "Contributed to clinical research on COVID-19 prevention protocols, community health delivery, and hospital infection mitigation.",

    // Contact
    "contact-badge": "Executive Engagement",
    "contact-title": "Executive Advisory & <span class=\"italic text-[#025B66] font-normal\">Consultation Secretariat</span>",
    "contact-desc": "For institutional hospital development, board appointments, medical college commissioning, or keynote invitations, submit your proposal to the executive secretariat.",
    "c-office-title": "Current Executive Office",
    "c-wa-title": "Direct WhatsApp Secretariat",
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
    // Top Bar (Personal Executive Focus)
    "hero-tag": "বিশিষ্ট নেতৃত্ব ও সম্মান",
    "top-portfolio-tag": "অফিসিয়াল ব্যক্তিগত পোর্টফোলিও",
    "top-bio-summary": "সিনিয়র স্বাস্থ্য প্রশাসক • অবসরপ্রাপ্ত সেনা কর্মকর্তা • জনস্বাস্থ্য রূপকার",
    "top-announcement": "স্বাস্থ্যসেবা কৌশলগত পরামর্শ • হাসপাতাল কমিশনিং • জনস্বাস্থ্য পলিসি",
    "top-book": "এক্সিকিউটিভ পরামর্শ বুক করুন",

    // Navigation
    "nav-sub": "এমফিল, এমপিএইচ, এমবিবিএস | স্বাস্থ্যখাতের রূপকার",
    "nav-about": "পরিচিতি",
    "nav-career": "কর্মজীবন ও কমান্ড",
    "nav-covid": "মহামারি ও ক্রাইসিস",
    "nav-media": "মিডিয়া ও প্রেস",
    "nav-projects": "প্রধান প্রকল্পসমূহ",
    "nav-media": "মিডিয়া ও প্রেস",
    "filter-all": "সকল দায়িত্ব (১৭টি)",
    "filter-civilian": "বেসামরিক মেগা হাসপাতাল (৫টি)",
    "filter-army": "সেনাবাহিনী মেডিকেল কমান্ড (৯টি)",
    "filter-advisory": "জাতীয় উপদেষ্টা ও ক্রীড়া (৩টি)",
    "btn-send-wa": "হোয়াটসঅ্যাপ সচিবালয়",
    "btn-send-mail": "অফিসিয়াল ইমেইল ডেস্ক",
    "nav-milestones": "কমান্ড রেকর্ড",
    "nav-linkedin-exp": "কর্মজীবন ও পদমর্যাদা",
    "nav-skills": "দক্ষতার ক্ষেত্রসমূহ",
    "nav-pillars": "কৌশলগত পরামর্শ",
    "nav-crisis": "সংকটকালীন নেতৃত্ব",
    "nav-media": "প্রেস ও মিডিয়া",
    "nav-credentials": "ডিগ্রি ও গবেষণা",
    "btn-consult": "অ্যাডভাইজরি ডেস্ক",

    // Hero Section
    "hero-army-badge": "বাংলাদেশ সেনাবাহিনী মেডিকেল কোর • অবসরপ্রাপ্ত ব্রিগেডিয়ার জেনারেল",
    "hero-photo-ribbon": "সেনাবাহিনী মেডিকেল কোর ভেটেরান",
    "hero-ceo-subtitle": "স্বাস্থ্য প্রশাসক ও প্রধান নির্বাহী কর্মকর্তা",
    "hero-title-prefix": "ব্রিগেডিয়ার জেনারেল (ডা.)",
    "hero-cur-post-title": "বর্তমান নির্বাহী নেতৃত্ব:",
    "hero-cur-post-val": "প্রধান নির্বাহী কর্মকর্তা (সিইও) — প্রো-অ্যাক্টিভ মেডিকেল কলেজ ও হাসপাতাল লিমিটেড",
    "frame-caption-title": "সাবেক পরিচালক, ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH) ও স্বাস্থ্য প্রশাসক",
    "frame-caption-sub": "সিইও, প্রো-অ্যাক্টিভ হাসপাতাল • সাবেক জাতীয় পরামর্শক, ব্র্যাক হেলথ • ৩৫+ বছরের গৌরবোজ্জ্বল কমান্ড",
    "hero-tenures-summary": "সাবেক জাতীয় পরামর্শক, ব্র্যাক হেলথ প্রোগ্রাম (BHP) • সাবেক কমান্ড্যান্ট, আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউট (AFMI) • সাবেক কমান্ড্যান্ট, সিএমএইচ চট্টগ্রাম • সাবেক পরিচালক, ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH) • সাবেক পরিচালক, রাজশাহী মেডিকেল কলেজ হাসপাতাল (RMCH) • সাবেক পরিচালক, কুর্মিটোলা জেনারেল হাসপাতাল • সাবেক পরিচালক, ডিএনসিসি ডেডিকেটেড কোভিড-১৯ হাসপাতাল।",
    "btn-hero-consult": "কৌশলগত পরামর্শের জন্য আবেদন",
    "btn-hero-timeline": "১৭টি কর্মজীবন ও কমান্ড রেকর্ড",
    "btn-hero-cv": "এক্সিকিউটিভ প্রোফাইল",

    // Stats
    "stat-1": "বছর সামরিক ও বেসামরিক চিকিৎসা ব্যবস্থাপনায় অবদান",
    "stat-2": "শীর্ষ টারশিয়ারি হাসপাতাল ও ইনস্টিটিউট সফলভাবে পরিচালনা",
    "stat-3": "শয্যার বৃহৎ হাসপাতাল অবকাঠামো ব্যবস্থাপনা",
    "stat-4": "মহামারি ও জাতীয় সংকটে লাখ লাখ মানুষের জীবনরক্ষা",

    // Biography
    "about-badge": "জীবনবৃত্তান্ত ও কর্মতর্পণ",
    "about-title": "সামরিক শৃঙ্খলা ও মানবিক চিকিৎসা সেবার অনন্য মেলবন্ধন",
    "about-p1": "<strong class=\"font-bold text-[#023E3A] font-serif text-lg sm:text-[19px]\">ব্রিগেডিয়ার জেনারেল (ডা.) এ কে এম নাসির উদ্দিন (অব.)</strong> হলেন সামরিক বাহিনী, সরকারি টারশিয়ারি, বেসরকারি ও আন্তর্জাতিক এনজিও খাতে <span class=\"font-bold text-[#023E3A] bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-200/60 whitespace-nowrap\">৩৩+ বছরের উচ্চপর্যায়ের কমান্ড নেতৃত্বসম্পন্ন</span> এক বিশিষ্ট স্বাস্থ্য প্রশাসক, স্বাস্থ্য রূপকার ও দূরদর্শী ব্যক্তিত্ব।",
    "about-p2": "সুদীর্ঘ বর্ণাঢ্য কর্মজীবনে তিনি কৌশলগতভাবে বৃহৎ সামরিক হাসপাতালের নেতৃত্ব দিয়েছেন, ফিল্ড মেডিকেল ইউনিটের কমান্ড পরিচালনা করেছেন এবং সামরিক চিকিৎসা গবেষণা ও শিক্ষার সর্বোচ্চ প্রতিষ্ঠান <strong class=\"text-[#023E3A] font-semibold\">আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউট (AFMI)-এর কমান্ড্যান্ট</strong> হিসেবে দায়িত্ব পালন করেছেন। স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়ের অধীনে তিনি দেশের শীর্ষ চারটি টারশিয়ারি কেয়ার মেডিকেল কলেজ হাসপাতালকে সফলভাবে নেতৃত্ব ও আধুনিকায়ন করেছেন—বিশেষ করে <strong class=\"text-[#023E3A] font-semibold\">ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH)</strong> এবং <strong class=\"text-[#023E3A] font-semibold\">রাজশাহী মেডিকেল কলেজ হাসপাতাল (RMCH)-এর পরিচালক</strong> হিসেবে।",
    "about-p3": "একজন সার্টিফায়েড <strong class=\"text-[#023E3A] font-semibold\">CBRN (কেমিক্যাল, বায়োলজিক্যাল, রেডিয়েশন ও নিউক্লিয়ার) মেডিকেল বিশেষজ্ঞ</strong> হিসেবে করোনা মহামারিকালে তাঁর দূরদর্শী নেতৃত্ব চূড়ান্তভাবে প্রমাণিত হয়—যেখানে তিনি সম্মুখসারির দুটি বৃহত্তম টারশিয়ারি কোভিড হাসপাতাল পরিচালনা করেন (যার মধ্যে দেশের সর্ববৃহৎ <strong class=\"text-[#023E3A] font-semibold\">১,০০০ শয্যার ডিএনসিসি ডেডিকেটেড কোভিড-১৯ হাসপাতাল</strong> প্রতিষ্ঠা অন্তর্ভুক্ত)। ২০১৭ থেকে ২০২১ সাল পর্যন্ত তিনি <strong class=\"text-[#023E3A] font-semibold\">বাংলাদেশ অলিম্পিক অ্যাসোসিয়েশন (BOA)-এর মেডিকেল ও অ্যান্টি-ডোপিং কমিটির চেয়ারম্যান</strong> হিসেবে ক্রীড়াবিদদের স্বাস্থ্য ও ওয়াডা (WADA) প্রটোকল বাস্তবায়নে নেতৃত্ব দেন।",
    "about-p4": "বিশ্বের সর্ববৃহৎ বেসরকারি উন্নয়ন সংস্থা <strong class=\"text-[#023E3A] font-semibold\">ব্র্যাক-এর স্বাস্থ্য কর্মসূচিতে (BHP) জাতীয় পরামর্শক</strong> হিসেবে তিনি অসংক্রামক ব্যাধি (NCD), মানসিক স্বাস্থ্য ও সাইকোসোশ্যাল সাপোর্ট (MHPSS) এবং মাতৃ ও শিশু স্বাস্থ্য মেগাপ্রকল্পে নীতিনির্ধারণী দিকনির্দেশনা দিয়েছেন। বর্তমানে তিনি <strong class=\"text-[#023E3A] font-semibold\">প্রো-অ্যাক্টিভ মেডিকেল কলেজ ও হাসপাতাল লিমিটেডের প্রধান নির্বাহী কর্মকর্তা (সিইও)</strong> হিসেবে দায়িত্ব পালনের পাশাপাশি জনকল্যাণমূলক স্বাস্থ্য ব্যবস্থার প্রসারে নিষ্ঠার সাথে কাজ করে যাচ্ছেন।",
    "pill-1-title": "সংকটকালে পরীক্ষিত নেতৃত্ব",
    "pill-1-desc": "মহামারিকালে হাজার হাজার শয্যা ও ডাক্তারদের সফল নেতৃত্ব দানের বাস্তব অভিজ্ঞতা।",
    "pill-2-title": "হাসপাতালের সফল রূপান্তর",
    "pill-2-desc": "সরকারি মেগা হাসপাতাল ও বেসরকারি আধুনিক স্বাস্থ্য ব্যবস্থার যুগোপযোগী আধুনিকায়ন।",
    "creed-subtitle": "সিইও বার্তা ও মূল দর্শন",
    "creed-title": "স্বাস্থ্যসেবা ও মানবিক দায়িত্ববোধ",
    "creed-quote": "\"স্বাস্থ্যসেবা শুধুমাত্র একটি প্রশাসনিক দায়িত্ব নয়; এটি এক পবিত্র জাতীয় আমানত। একজন সফল স্বাস্থ্য প্রশাসকের সবচেয়ে বড় শক্তি হলো সামরিক সততা, রোগীর প্রতি অকৃত্রিম মানবিক সহানুভূতি এবং যেকোনো জাতীয় সংকটে সাহসী উদ্ভাবনী পদক্ষেপ গ্রহণ করার মানসিকতা।\"",

    // LinkedIn Experience Section
    "exp-badge": "গৌরবোজ্জ্বল কর্মজীবন ও প্রাতিষ্ঠানিক কমান্ড",
    "exp-title": "নির্বাহী পদমর্যাদা ও <span class=\"italic text-[#025B66] font-normal\">প্রাতিষ্ঠানিক নেতৃত্ব</span>",
    "exp-subtitle": "সামরিক বাহিনী, শীর্ষ টারশিয়ারি হাসপাতাল ও আন্তর্জাতিক ডিফেন্স মেডিসিনে ৩৫+ বছরের অনন্য নেতৃত্ব ও সেবা।",
    "exp1-role": "প্রধান নির্বাহী কর্মকর্তা (সিইও)",
    "exp1-company": "প্রো-অ্যাক্টিভ মেডিকেল কলেজ ও হাসপাতাল লিমিটেড",
    "exp1-desc": "সার্বিক হাসপাতাল পরিচালনা, ২৪/৭ আইসিইউ ও ক্রিটিক্যাল কেয়ার আধুনিকায়ন, আধুনিক অপারেশন থিয়েটার, ডাক্তার ও নার্সদের প্রশিক্ষণ এবং ঢাকার বুকে বিশ্বমানের রোগীসেবা নিশ্চিতকরণ।",
    "exp2-role": "পরিচালক",
    "exp2-company": "ডিএনসিসি ডেডিকেটেড কোভিড-১৯ হাসপাতাল, মহাখালী",
    "exp2-desc": "দেশের সর্ববৃহৎ ১,০০০ শয্যার মহামারি ফিল্ড হাসপাতাল এবং ২০০+ আইসিইউ বেডের পূর্ণাঙ্গ কমিশন ও সর্বোচ্চ জাতীয় সংক্রমণকালে রোগী ব্যবস্থাপনার নেতৃত্ব।",
    "exp3-role": "পরিচালক",
    "exp3-company": "ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH)",
    "exp3-desc": "দেশের শীর্ষ রেফারাল সেন্টার পরিচালনা। ২ নং ভবনে ৬০০ শয্যার কোভিড ইউনিট চালু, ২,২০০+ স্বাস্থ্যকর্মীদের সুরক্ষা ও আবাসন এবং ২০১৯ সালের ডেঙ্গু সংকট সফলভাবে মোকাবিলা।",
    "exp4-role": "কমান্ড্যান্ট",
    "exp4-company": "আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউট (AFMI)",
    "exp4-desc": "সামরিক বাহিনীর উচ্চতর মেডিকেল প্রশিক্ষণ অ্যাকাডেমিতে পোস্টগ্র্যাজুয়েট ডাক্তারদের ক্লিনিক্যাল স্পেশালাইজেশন, দুর্যোগ চিকিৎসা ও সামরিক নেতৃত্বে প্রশিক্ষণ প্রদান।",
    "exp5-role": "কমান্ড্যান্ট",
    "exp5-company": "সম্মিলিত সামরিক হাসপাতাল (সিএমএইচ) চট্টগ্রাম",
    "exp5-desc": "বন্দর নগরীর সামরিক চিকিৎসা কমপ্লেক্সের সার্বিক কমান্ড, প্রতিরক্ষা বাহিনীর স্বাস্থ্য প্রস্তুতি এবং আধুনিক টারশিয়ারি চিকিৎসা সেবার মানোন্নয়ন।",
    "exp6-role": "জাতীয় পরামর্শক (National Consultant)",
    "exp6-company": "ব্র্যাক হেলথ প্রোগ্রাম (BHP)",
    "exp6-desc": "তৃণমূল কমিউনিটি স্বাস্থ্য সম্প্রসারণ, গ্রামীণ স্বাস্থ্যসেবা মডেল, মা ও শিশু স্বাস্থ্য সুরক্ষা এবং সরকারি-বেসরকারি স্বাস্থ্য অংশীদারিত্বে জাতীয় নীতি প্রণয়ন।",

    // Skills
    "skills-badge": "কোর কম্পিটেন্সি ও অনুমোদন",
    "skills-title": "কৌশলগত দক্ষতা ও <span class=\"italic text-[#025B66] font-normal\">আন্তর্জাতিক স্বীকৃতি</span>",
    "skills-subtitle": "সামরিক ও বেসামরিক জটিল স্বাস্থ্য পরিবেশে দীর্ঘ ৩৫+ বছরের নেতৃত্বের মাধ্যমে অর্জিত প্রমাণিত সক্ষমতা।",

    // Timeline
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
    "acad-badge": "শিক্ষাগত যোগ্যতা ও উচ্চতর ডিগ্রি",
    "acad-title": "উচ্চশিক্ষা, পোস্টগ্র্যাজুয়েট গবেষণা ও <span class=\"italic text-[#025B66] font-normal\">স্বীকৃতি</span>",
    "acad-sub": "নটর ডেম কলেজ, রাজশাহী বিশ্ববিদ্যালয়, ঢাকা বিশ্ববিদ্যালয় ও বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP) থেকে অর্জিত শিক্ষাগত সনদসমূহ।",
    "edu-1-field": "হেলথ কেয়ার অ্যান্ড হসপিটাল ম্যানেজমেন্ট",
    "edu-1-inst": "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)",
    "deg-2-desc": "উচ্চতর পোস্টগ্র্যাজুয়েট ডিগ্রি—স্বাস্থ্য প্রশাসন গবেষণা পদ্ধতি, হাসপাতাল অবকাঠামো ব্যবস্থাপনা ও ক্লিনিক্যাল গভর্নেন্স।",
    "edu-2-field": "পাবলিক হেলথ অ্যাডমিনিস্ট্রেশন",
    "edu-2-inst": "ঢাকা বিশ্ববিদ্যালয়",
    "deg-3-desc": "জনস্বাস্থ্য প্রশাসন, মহামারিবিদ্যা (এপিডেমিওলজি), বায়োস্ট্যাটিস্টিকস, স্বাস্থ্য অর্থনীতি ও জাতীয় রোগ নিয়ন্ত্রণ পলিসি ডিজাইন।",
    "edu-3-field": "মেডিসিন অ্যান্ড সার্জারি",
    "edu-3-inst": "রাজশাহী বিশ্ববিদ্যালয়",
    "deg-1-desc": "ক্লিনিক্যাল মেডিসিন ও সার্জারির বুনিয়াদি ডিগ্রি, যার পর তিনি বাংলাদেশ সেনাবাহিনী মেডিকেল কোরে গৌরবোজ্জ্বল কমিশন লাভ করেন।",
    "edu-4-field": "বিজ্ঞান বিভাগ (Science)",
    "edu-4-inst": "নটর ডেম কলেজ, ঢাকা",
    "edu-4-act": "অ্যাক্টিভিটিস: সায়েন্স ক্লাব মেম্বার",
    "deg-4-desc": "দেশের শীর্ষ বিদ্যাপীঠ নটর ডেম কলেজ থেকে প্রথম বিভাগে উচ্চ মাধ্যমিক বিজ্ঞান শিক্ষা এবং আজীবন নিয়মানুবর্তিতার সূচনা।",
    "res-banner-title": "জনস্বাস্থ্য ও কোভিড-১৯ প্রতিরোধ গবেষণা",
    "res-banner-desc": "কোভিড-১৯ সংক্রমণ প্রতিরোধ প্রটোকল, তৃণমূল স্বাস্থ্যসেবা প্রদান ও হাসপাতালের সংক্রমণ নিয়ন্ত্রণ সংক্রান্ত গবেষণায় অবদান।",

    // Contact
    "contact-badge": "এক্সিকিউটিভ যোগাযোগ ও পরামর্শ",
    "contact-title": "কৌশলগত পরামর্শ ও অ্যাডভাইজরি ডেস্ক",
    "contact-desc": "নতুন হাসপাতাল স্থাপন, বোর্ড মিটিংয়ে স্বাধীন উপদেষ্টা অন্তর্ভুক্তি, মেডিকেল কলেজ কমিশন অথবা জাতীয় স্বাস্থ্য সেমিনারে মূল বক্তব্যের আমন্ত্রণের জন্য সচিবালয়ে প্রস্তাব পাঠান।",
    "c-office-title": "বর্তমান নির্বাহী কার্যালয়",
    "c-wa-title": "সরাসরি হোয়াটসঅ্যাপ সচিবালয়",
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
  // Initialize Ultra-Smooth Momentum Scrolling & Progress Effects
  initLenisSmoothScroll();
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

  // Setup IntersectionObserver for Smooth Scroll Reveal Animations
  initScrollAnimations();

  // Setup Count-Up Statistics Animation
  initCountUpAnimation();

  // Initialize Category Filters for Career Appointments
  initTimelineFilters();

  // Initialize Core Competencies Category Filter Tabs
  initCompetencyFilters();

  // Initialize Military Ledger Drawer Toggle
  initLedgerToggle();

  // Initialize Scroll-Spy for Active Navbar Links
  initScrollSpy();

  // Advisory Form Submission Handler
  const advisoryForm = document.getElementById('advisoryForm');
  if (advisoryForm) {
    advisoryForm.addEventListener('submit', handleAdvisorySubmit);
  }
});

/**
 * Initialize IntersectionObserver for Scroll Animations
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-init');
  if (!('IntersectionObserver' in window)) {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * Initialize Smooth Count-Up Numbers for Impact Statistics
 */
function initCountUpAnimation() {
  const countUpElements = document.querySelectorAll('.count-up');
  if (!countUpElements.length) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        countUpElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          if (isNaN(target)) return;

          const duration = 2000; // 2 seconds
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease-out cubic calculation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.round(easeOutProgress * target);

            if (target >= 1000) {
              counter.textContent = currentCount.toLocaleString();
            } else {
              counter.textContent = currentCount;
            }

            if (frame === totalFrames) {
              clearInterval(timer);
              if (target >= 1000) {
                counter.textContent = target.toLocaleString();
              } else {
                counter.textContent = target;
              }
            }
          }, frameDuration);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.count-up').closest('section');
  if (statsSection) observer.observe(statsSection);
}

/**
 * Apply Language across DOM
 */
function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  
  // Update all elements with data-lang attribute (supporting rich HTML highlights)
  document.querySelectorAll('[data-lang]').forEach(elem => {
    const key = elem.getAttribute('data-lang');
    if (dict[key]) {
      if (dict[key].includes('<') && dict[key].includes('>')) {
        elem.innerHTML = dict[key];
      } else {
        elem.textContent = dict[key];
      }
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
Sent via Official VIP Executive Portfolio`;

  const encodedWa = encodeURIComponent(waText);
  // Official Pro-Active Executive & Emergency Secretariat Contact
  const waUrl = `https://wa.me/8801902556070?text=${encodedWa}`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // Confirmation feedback
  const successMsg = currentLanguage === 'bn' 
    ? 'ধন্যবাদ! আপনার প্রস্তাবটি সরাসরি ব্রিগেডিয়ার জেনারেল স্যারের হোয়াটসঅ্যাপ সচিবালয়ে প্রস্তুত হয়েছে।' 
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


/**
 * Interactive Timeline Category Filters (All, Civilian, Army, Advisory)
 */
function initTimelineFilters() {
  const filterBtns = document.querySelectorAll('#timelineFilters .filter-btn');
  const cards = document.querySelectorAll('#timelineCardsContainer [data-category]');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update segmented pill button styling
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#025B66]', 'bg-[#023E3A]', 'text-white', 'shadow-xs', 'shadow-sm', 'ring-1', 'ring-[#025B66]/30');
        b.classList.add('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-50');
      });
      btn.classList.remove('text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-50');
      btn.classList.add('active', 'bg-[#023E3A]', 'text-white', 'shadow-sm', 'ring-1', 'ring-[#025B66]/30');

      // Filter timeline cards with smooth transition
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.classList.add('reveal-visible');
        } else {
          card.style.display = 'none';
        }
      });

      // Auto-expand drawer if user selects a specific category so matching ledger roles are visible
      if (filter !== 'all') {
        const drawer = document.getElementById('ledgerDrawer');
        const chevron = document.getElementById('ledgerChevron');
        const toggleText = document.getElementById('toggleLedgerText');
        if (drawer && drawer.classList.contains('hidden')) {
          drawer.classList.remove('hidden');
          if (chevron) chevron.classList.add('rotate-180');
          if (toggleText) {
            toggleText.textContent = (currentLanguage === 'bn') ? 'সংক্ষেপ করুন' : 'Collapse Roles';
          }
        }
      }
    });
  });
}

/**
 * Military Ledger Collapsible Drawer
 */
function initLedgerToggle() {
  const toggleBtn = document.getElementById('toggleLedgerBtn');
  const drawer = document.getElementById('ledgerDrawer');
  const chevron = document.getElementById('ledgerChevron');
  const toggleText = document.getElementById('toggleLedgerText');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      drawer.classList.remove('hidden');
      if (chevron) chevron.classList.add('rotate-180');
      if (toggleText) {
        toggleText.textContent = (currentLanguage === 'bn') ? 'সংক্ষেপ করুন' : 'Collapse Roles';
      }
    } else {
      drawer.classList.add('hidden');
      if (chevron) chevron.classList.remove('rotate-180');
      if (toggleText) {
        toggleText.textContent = (currentLanguage === 'bn') ? 'সব ১২টি পদ দেখুন' : 'Expand All 12 Roles';
      }
    }
  });
}

/**
 * Scroll-Spy Navigation Link Highlighting
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSectionId) {
        link.classList.add('text-[#025B66]', 'font-black');
      } else {
        link.classList.remove('text-[#025B66]', 'font-black');
      }
    });
  }, { passive: true });
}

/**
 * Dual-Channel Advisory Submission (WhatsApp & Official Email)
 */
function submitAdvisoryChannel(channel) {
  const name = document.getElementById('senderName').value.trim();
  const org = document.getElementById('senderOrg').value.trim();
  const phone = document.getElementById('senderPhone').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const type = document.getElementById('engagementType').value;
  const msg = document.getElementById('senderMsg').value.trim();

  if (!name || !phone || !org || !msg) {
    alert(currentLanguage === 'bn' 
      ? 'অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।' 
      : 'Please complete all required fields.');
    return;
  }

  const proposalText = 
`EXECUTIVE CONSULTATION PROPOSAL
To: Secretariat of Brigadier General (Dr.) AKM Nasir Uddin (retd.)
From: ${name}
Organization: ${org}
Phone/WhatsApp: ${phone}
Official Email: ${email}
Engagement Nature: ${type}

Proposal Brief:
${msg}

-------------------------
Sent via Official VIP Executive Portfolio`;

  if (channel === 'whatsapp') {
    const encodedWa = encodeURIComponent(proposalText);
    const waUrl = `https://wa.me/8801902556070?text=${encodedWa}`;
    window.open(waUrl, '_blank');
  } else if (channel === 'email') {
    const subject = encodeURIComponent(`Executive Consultation Proposal - ${name} (${org})`);
    const body = encodeURIComponent(proposalText);
    const mailtoUrl = `mailto:secretariat@briggennasiruddin.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  }

  const successMsg = currentLanguage === 'bn'
    ? 'ধন্যবাদ! আপনার প্রস্তাবটি সচিবালয়ের জন্য সফলভাবে প্রস্তুত হয়েছে।'
    : 'Thank you! Your strategic proposal has been formatted for the Executive Secretariat.';
  alert(successMsg);
}


/**
 * Initialize Category Filter for Core Competencies Section
 */
function initCompetencyFilters() {
  const filterBtns = document.querySelectorAll('#competencyFilters .comp-filter-btn');
  const cards = document.querySelectorAll('#competencyCardsGrid .comp-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update light segmented button styling
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#025B66]', 'bg-[#023E3A]', 'text-white', 'shadow-xs', 'shadow-sm', 'ring-1', 'ring-[#025B66]/30');
        b.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-200/60');
      });
      btn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-200/60');
      btn.classList.add('active', 'bg-[#023E3A]', 'text-white', 'shadow-sm', 'ring-1', 'ring-[#025B66]/30');

      // Filter cards
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.classList.add('reveal-visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}


/**
 * Initialize Ultra-Smooth Momentum Scrolling (Lenis Luxury Physics)
 */
let lenisInstance = null;
function initLenisSmoothScroll() {
  if (typeof Lenis === 'undefined') {
    // Fallback if CDN is unreachable
    window.addEventListener('scroll', handleScrollEffects, { passive: true });
    return;
  }

  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.2,
    infinite: false,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sync scroll effects on every smooth tick
  lenisInstance.on('scroll', () => {
    handleScrollEffects();
  });

  // Enable smooth anchor link scrolling via Lenis
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        lenisInstance.scrollTo(targetElem, {
          offset: -80,
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    });
  });
}

/**
 * Handle Luxury Scroll Progress Indicator and Glass Header Dynamics
 */
function handleScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // 1. Update Luxury Top Progress Bar
  const progressBar = document.getElementById('scrollProgressBar');
  if (progressBar) {
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + '%';
  }

  // 2. Dynamic Glass Header Elevation on Scroll
  const header = document.querySelector('header');
  if (header) {
    if (scrollTop > 40) {
      header.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md', 'border-teal-900/10');
      header.classList.remove('bg-white');
    } else {
      header.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md', 'border-teal-900/10');
      header.classList.add('bg-white');
    }
  }

  // 3. Scroll to Top Floating Pill Visibility
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    if (scrollTop > 450) {
      scrollToTopBtn.classList.remove('hidden');
      scrollToTopBtn.classList.add('flex');
    } else {
      scrollToTopBtn.classList.add('hidden');
      scrollToTopBtn.classList.remove('flex');
    }
  }
}
