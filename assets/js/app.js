/**
 * Application JS for Dr. Alhaj Kamrun Nahar Portfolio
 * Features:
 * - Bilingual Language Switcher (Bengali & English)
 * - Interactive Serial Booking Modal with Printable Digital Token Slip & WhatsApp
 * - Service Category Filtering
 * - FAQ Accordion
 * - Mobile Navigation
 */

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Set Current Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll Header Shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Language Toggle
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }
});

// Mobile Menu Handler
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Service Filter Handler
function filterServices(category) {
  const cards = document.querySelectorAll('.service-card-item');
  const buttons = document.querySelectorAll('.service-filter-btn');

  // Toggle button styling
  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-medical-600', 'text-white');
    btn.classList.add('bg-slate-100', 'text-slate-700');
  });

  // Set active button
  const clickedBtn = event ? event.target : null;
  if (clickedBtn) {
    clickedBtn.classList.add('active', 'bg-medical-600', 'text-white');
    clickedBtn.classList.remove('bg-slate-100', 'text-slate-700');
  }

  // Filter cards with fade transition
  cards.forEach(card => {
    const itemCat = card.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      card.style.display = 'flex';
      card.classList.remove('hidden');
    } else {
      card.style.display = 'none';
      card.classList.add('hidden');
    }
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// FAQ Accordion Handler
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('[data-lucide="chevron-down"]');
  
  const isHidden = content.classList.contains('hidden');
  
  // Close all other FAQs in the same container for clean UX
  const allContents = document.querySelectorAll('#faqAccordion > div > div');
  const allIcons = document.querySelectorAll('#faqAccordion > div > button > [data-lucide="chevron-down"]');
  
  allContents.forEach(el => el.classList.add('hidden'));
  allIcons.forEach(ic => ic.style.transform = 'rotate(0deg)');

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Modal Handlers
function openBookingModal(serviceName = '') {
  const modal = document.getElementById('bookingModal');
  const form = document.getElementById('appointmentForm');
  const successBox = document.getElementById('bookingSuccessBox');
  const serviceSelect = document.getElementById('serviceSelect');

  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  if (form) form.classList.remove('hidden');
  if (successBox) successBox.classList.add('hidden');

  if (serviceName && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.includes(serviceName) || serviceName.includes(serviceSelect.options[i].value)) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Set default minimum date to today
  const dateInput = document.getElementById('visitDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Appointment Submission Handler & Printable Token Generator
function handleAppointmentSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('patientName').value.trim();
  const phone = document.getElementById('patientPhone').value.trim();
  const age = document.getElementById('patientAge').value.trim() || 'N/A';
  const chamber = document.getElementById('chamberSelect').value;
  const date = document.getElementById('visitDate').value || 'শীঘ্রই (Upcoming)';
  const service = document.getElementById('serviceSelect').value;
  const note = document.getElementById('patientNote').value.trim() || 'নাই (None)';

  // Generate unique token number
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const tokenNo = `#KN-${randomNum}`;

  // Populate Printable Token Slip
  const slipTokenEl = document.getElementById('slipTokenNo');
  const slipPatientEl = document.getElementById('slipPatientName');
  const slipPhoneEl = document.getElementById('slipPhone');
  const slipChamberEl = document.getElementById('slipChamber');
  const slipDateEl = document.getElementById('slipDate');

  if (slipTokenEl) slipTokenEl.textContent = tokenNo;
  if (slipPatientEl) slipPatientEl.textContent = name;
  if (slipPhoneEl) slipPhoneEl.textContent = phone;
  if (slipChamberEl) slipChamberEl.textContent = chamber;
  if (slipDateEl) slipDateEl.textContent = date;

  // Format WhatsApp Message
  const waText = `*নতুন অ্যাপয়েন্টমেন্ট রিকুয়েস্ট (টোকেন: ${tokenNo})*%0A` +
    `--------------------------------------%0A` +
    `👤 *রোগীর নাম:* ${encodeURIComponent(name)}%0A` +
    `📞 *মোবাইল:* ${encodeURIComponent(phone)}%0A` +
    `🎂 *বয়স:* ${encodeURIComponent(age)}%0A` +
    `🏥 *চেম্বার:* ${encodeURIComponent(chamber)}%0A` +
    `🩺 *চিকিৎসা:* ${encodeURIComponent(service)}%0A` +
    `📅 *তারিখ:* ${encodeURIComponent(date)}%0A` +
    `📝 *সমস্যা:* ${encodeURIComponent(note)}%0A` +
    `--------------------------------------%0A` +
    `ডা. কামরুন নাহার ওয়েবসাইট থেকে প্রেরিত সিরিয়াল আবেদন।`;

  const targetWhatsApp = "8801700000000"; 
  const waUrl = `https://wa.me/${targetWhatsApp}?text=${waText}`;

  // Update Direct WhatsApp Send Button
  const waDirectBtn = document.getElementById('waDirectSendBtn');
  if (waDirectBtn) {
    waDirectBtn.href = waUrl;
  }

  // Show Printable Digital Slip Box
  document.getElementById('appointmentForm').classList.add('hidden');
  document.getElementById('bookingSuccessBox').classList.remove('hidden');

  // Trigger WhatsApp in new tab after 1.5 seconds
  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 1500);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ================= BILINGUAL TRANSLATION SYSTEM =================
let currentLang = 'bn';

const translations = {
  en: {
    topNotice: "Serial bookings are currently open for Narayanganj & Dhanmondi chambers. Call directly for urgent serials.",
    drName: "Dr. Alhaj Kamrun Nahar",
    drSub: "Senior Consultant – Gynecologist, Obstetrician & Laparoscopic Surgeon",
    navAbout: "About Me",
    navDegrees: "Qualifications",
    navServices: "Clinical Services",
    navChambers: "Chamber Schedules",
    navReviews: "Patient Reviews",
    navFaq: "FAQ",
    btnBookSerial: "Book Serial",
    heroBadge: "Specialized in ART & IVF from Germany (Kiel) & Singapore",
    heroTitle1: "Dedicated Care for",
    heroTitle2: "Motherhood & Women's Health",
    heroBio: "With over 20+ years of clinical excellence in Infertility & IVF, High-Risk Pregnancy Care, Safe Deliveries, and Advanced Laparoscopic Surgeries.",
    currentPostLabel: "Current Position & Hospital",
    currentPostTitle: "Consultant (Department of Obs & Gynae)",
    currentHospital: "300-Bed Hospital (Khanpur), Narayanganj",
    btnBookAppointment: "Book Serial Appointment",
    btnViewChamber: "View Chambers & Hours",
    statExp: "Years of Experience",
    statPatients: "Successful Deliveries",
    statSurgery: "Laparoscopic Surgeries",
    statCare: "Compassionate Care",
    liveSerialStatus: "Serial Bookings Open",
    drDegreeHero: "MBBS, DGO, MS (Obs & Gynae)",
    drGermanFellow: "Dip. in ART & Reproductive Medicine (Kiel, Germany)",
    tagInfertility: "Infertility & IVF",
    tagSpecialCare: "Specialized Care",
    tagLaparoscopy: "Laparoscopy",
    tagMinInvasive: "Minimally Invasive",
    primaryChamberLabel: "Primary: Chashara, Narayanganj",
    viewDetails: "View Details",
    accreditationTitle: "Key Medical Affiliations & International Training Centers",
    aboutBadge: "Doctor's Profile",
    aboutTitle: "Clinical Excellence, Honesty & Compassionate Patient Care",
    aboutSub: "Dr. Alhaj Kamrun Nahar has been tirelessly serving women and couples in Bangladesh, bringing the joy of parenthood with world-class medical science.",
    bioHeading: "Philosophy & Commitment to Patients",
    bioP1: "Parenthood is one of life's greatest blessings. However, medical complexities, hormonal imbalances, and infertility can cause distress. With contemporary medical science and accurate timely diagnosis, most gynecological and infertility challenges are successfully treatable.",
    bioP2: "Having earned her specialized Diploma in ART & Reproductive Medicine from Kiel University (Germany) and WHO Fellowship in Singapore, she delivers international standards of fertility and maternity care right here in Bangladesh.",
    doctorQuote: "\"Not needless fear, but scientific diagnosis, gentle counseling, and modern medical expertise are the keys to a healthy mother and baby.\"",
    chk1Title: "Priority to Safe Normal Deliveries",
    chk1Desc: "Committed to natural and stress-free deliveries whenever safe for mother & newborn.",
    chk2Title: "Modern Laparoscopic Surgery",
    chk2Desc: "Scarless, minimal pain, and rapid recovery micro-surgeries for uterine tumors and cysts.",
    chk3Title: "World-Class Infertility & IVF Protocol",
    chk3Desc: "Following German reproductive medical protocols for accurate diagnosis and therapy.",
    chk4Title: "Attentive & Caring Counseling",
    chk4Desc: "Providing dedicated time to listen and thoroughly examine each patient.",
    qualTitle: "Medical Degrees & Fellowships",
    servicesBadge: "Clinical Specializations",
    servicesTitle: "Specialized Medical Services for Women's Wellness",
    servicesSub: "Tailored treatments, accurate diagnostic assessments, and modern surgical care.",
    serv1Title: "Infertility & IVF Treatment",
    serv1Desc: "Comprehensive evaluation and treatment for couples struggling with conception, using state-of-the-art reproductive medicine, follicular tracking, and IVF/IUI guidance.",
    serv1Point1: "Folliculometry & Ovulation Tracking",
    serv1Point2: "Tubal Blockage & Semen Analysis Care",
    serv1Point3: "German standard ART Consultation",
    serv2Title: "Pregnancy Care & Safe Deliveries (ANC)",
    serv2Desc: "Continuous antenatal care from conception to delivery. Encouraging safe natural births alongside emergency cesarean facilities.",
    serv2Point1: "Gestational Diabetes & High BP Management",
    serv2Point2: "Recurrent Miscarriage Prevention",
    serv2Point3: "Painless Normal Delivery Guidance",
    serv3Title: "Advanced Laparoscopic Surgery",
    serv3Desc: "Keyhole camera surgery for uterus and ovaries. Minimal pain, zero large incisions, and quick discharge within 24-48 hours.",
    serv3Point1: "Laparoscopic Hysterectomy (Uterus Removal)",
    serv3Point2: "Ovarian & Chocolate Cyst Removal",
    serv3Point3: "Hysteroscopic Diagnostic & Polypectomy",
    serv4Title: "Uterine Fibroid & Cyst Treatments",
    serv4Desc: "Targeted medical and minimally invasive surgical management for fibroids, heavy menstrual bleeding, and pelvic pain.",
    serv4Point1: "Uterus-Sparing Myomectomy",
    serv4Point2: "Endometriosis & Pelvic Pain Care",
    serv4Point3: "Preventive Pap Smear & Cancer Screening",
    serv5Title: "PCOS & Hormonal Imbalance",
    serv5Desc: "Evidence-based integrated care for adolescent and adult polycystic ovary syndrome, irregular periods, acne, and weight issues.",
    serv5Point1: "Hormonal Profiling & Nutrition Guide",
    serv5Point2: "Cycle Regularization Therapies",
    serv5Point3: "Lifestyle Modification Counseling",
    serv6Title: "Cosmetic Gynecology & Menopause",
    serv6Desc: "Specialized training from Delhi. Postpartum vaginal tightening and comprehensive physical and emotional support for menopausal transition.",
    serv6Point1: "Vaginal Rejuvenation & Restoration",
    serv6Point2: "Hot Flashes & Mood Fluctuation Care",
    serv6Point3: "Bone Density & Post-Menopausal Health",
    btnBookThis: "Book Consultation",
    chamberBadge: "Chambers & Schedule",
    chamberTitle: "Select Your Preferred Chamber for Consultation",
    chamberSub: "Regular consultations in Narayanganj and Dhaka for patient convenience.",
    primaryChamberBadge: "Primary Chamber",
    ch1Name: "Popular Diagnostic Centre Ltd.",
    ch1Branch: "Narayanganj Branch (Chashara)",
    addressLabel: "Address:",
    ch1Address: " 231/4, Bangabandhu Road (Balur Math), Chashara, Narayanganj – 1400",
    timeLabel: "Visiting Hours:",
    ch1Time: "4:00 PM to 9:00 PM",
    ch1Days: "(Saturday to Thursday)",
    ch1Closed: "Weekly Closed: Friday",
    btnWhatsappSerial: "WhatsApp Serial",
    btnBookOnlineNarayanganj: "Fill Narayanganj Serial Form",
    dhakaChamberBadge: "Dhaka Chamber",
    ch2Name: "Popular Diagnostic Centre Ltd.",
    ch2Branch: "Dhanmondi Branch (Dhaka)",
    ch2Address: " Room No: 311, House # 16, Road # 2, Dhanmondi, Dhaka – 1205",
    ch2Time: "4:00 PM to 6:00 PM",
    ch2Days: "(Every Friday & Scheduled Days)",
    ch2Note: "Prior serial booking is recommended due to limited patient slots.",
    btnBookOnlineDhaka: "Fill Dhanmondi Serial Form",
    govHospTitle: "Government Hospital: 300-Bed Hospital, Narayanganj",
    govHospDesc: "Consultations and ward visits conducted daily from 8:00 AM to 2:30 PM under government hospital schedule.",
    govBadge: "Govt. Consultant",
    reviewBadge: "Patient Trust & Gratitude",
    reviewTitle: "The Joy of a Healthy Mother & Baby is Our Greatest Reward",
    reviewSub: "Real stories from families who overcame complications and infertility.",
    rev1Text: "\"After 7 years of marriage and heartbreaking disappointments, we visited Dr. Kamrun Nahar. Her accurate diagnosis and gentle reassurance gave us our beloved son. We will always remain grateful.\"",
    rev1Name: "Nazmun Nahar & Mojammel",
    rev1Loc: "Chashara, Narayanganj",
    rev2Text: "\"I had severe gestational diabetes and high BP. Dr. Nahar guided me every single week and ensured a completely normal delivery. Such compassionate doctors are truly rare.\"",
    rev2Name: "Sharmin Akter",
    rev2Loc: "Siddhirganj, Narayanganj",
    rev3Text: "\"I had a large ovarian cyst. Other doctors recommended major open surgery, but Dr. Nahar removed it laparoscopically with tiny incisions. I was walking happily in two days.\"",
    rev3Name: "Rokeya Begum",
    rev3Loc: "Dhanmondi, Dhaka",
    faqBadge: "Patient FAQ & Guide",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Helpful insights to know before visiting the chamber.",
    faq1Q: "1. When should a couple seek medical advice for infertility?",
    faq1A: "If a couple has been attempting conception for 1 year without contraception, both partners should consult a reproductive specialist. If the wife is over 35, consulting after 6 months is strongly recommended.",
    faq2Q: "2. Can I get a same-day serial at Popular Narayanganj?",
    faq2A: "Due to high patient volume, reserving your serial 1-2 days in advance is safest. In emergency situations, contacting the chamber early morning (09613 787804) may allow urgent slots.",
    faq3Q: "3. Are there risks with Laparoscopic Surgery?",
    faq3A: "Laparoscopic surgery is the global gold standard. Since large incisions are avoided, infection risk is minimal, blood loss is reduced, and recovery occurs within 24-48 hours.",
    faq4Q: "4. What prior reports should patients bring to the chamber?",
    faq4A: "Please bring prior ultrasound (USG) reports, hormonal or blood test results, past prescriptions, and the husband's Semen Analysis report if seeking infertility care.",
    calloutTitle: "Need Maternity Advice or Serial Booking?",
    calloutSub: "Reserve your consultation appointment today at your preferred chamber.",
    btnCallNow: "Call Hotline Directly",
    footerBio: "Consultant (Obs & Gynae), 300-Bed Hospital Narayanganj. Over 20+ years of dedicated practice in Infertility (IVF), high-risk pregnancy, and advanced laparoscopy.",
    footerQuickLinks: "Quick Navigation",
    footerChambers: "Chamber Hotlines",
    modalTitle: "Online Serial Appointment",
    modalSub: "Chamber of Dr. Alhaj Kamrun Nahar",
    lblPatientName: "Patient's Full Name *",
    lblPhone: "Mobile Number *",
    lblAge: "Age",
    lblChamber: "Select Chamber *",
    lblDate: "Preferred Date",
    lblService: "Consultation Type",
    lblProblem: "Brief Medical Note (Optional)",
    btnSubmitSerial: "Book Serial & View Token",
    modalNote: "* Submitting this form prepares an official appointment request on WhatsApp and generates a digital token."
  }
};

function toggleLanguage() {
  const langText = document.getElementById('langText');
  currentLang = currentLang === 'bn' ? 'en' : 'bn';

  if (langText) {
    langText.textContent = currentLang === 'bn' ? 'English' : 'বাংলা';
  }

  // Update all elements with data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (currentLang === 'en' && translations.en[key]) {
      el.dataset.bnText = el.dataset.bnText || el.textContent;
      el.textContent = translations.en[key];
    } else if (currentLang === 'bn' && el.dataset.bnText) {
      el.textContent = el.dataset.bnText;
    }
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
