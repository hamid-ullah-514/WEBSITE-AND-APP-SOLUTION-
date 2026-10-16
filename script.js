/**
 * ============================================================================
 * WEBSITE AND APP SOLUTION - CORE JAVASCRIPT
 * Features:
 * 1. Default Urdu with Instant English Switcher (Bilingual i18n & RTL/LTR)
 * 2. Voice Speaker (Text-to-Speech audio reader in Urdu and English)
 * 3. Rich Tech Theme Switcher (Dark Sapphire & Vibrant Studio)
 * 4. Interactive Hero Slider, Category Filters, FAQ Accordion, and Modals
 * 5. Direct WhatsApp Message Formatter & Community Group Handler
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. GLOBAL CONFIGURATION & SETTINGS
// ----------------------------------------------------------------------------

/**
 * Your official WhatsApp phone number (in international format without + sign)
 * For Pakistan: 92 + 3305417514
 */
const WHATSAPP_PHONE = "923305417514";
const WHATSAPP_PHONE_DISPLAY = "03305417514";

/**
 * WhatsApp Community Group Invitation Link Placeholder
 * Replace with your official invite URL when ready (e.g. "https://chat.whatsapp.com/...")
 */
const WHATSAPP_GROUP_LINK = "";

// Current active language ('ur' by default)
let currentLang = localStorage.getItem("was-lang") || "ur";

// ----------------------------------------------------------------------------
// 2. COMPLETE BILINGUAL TRANSLATION DICTIONARY (URDU & ENGLISH)
// ----------------------------------------------------------------------------
const TRANSLATIONS = {
  ur: {
    // Brand & Topbar
    brand_title_html: 'ویب سائٹ اینڈ ایپ <span class="gradient-text">سولیوشن</span>',
    topbar_hours: "پیر تا ہفتہ: 9:00 AM تا 9:00 PM",
    topbar_loc: "آن لائن سروسز برائے پاکستان و دنیا بھر",
    nav_cta_quote: "کوٹیشن حاصل کریں",
    drawer_lang_label: "زبان منتخب کریں:",

    // Nav
    nav_home: "ہوم",
    nav_services: "ہماری خدمات",
    nav_portfolio: "پورٹ فولیو",
    nav_why_us: "ہمیں کیوں چنیں؟",
    nav_process: "طریقہ کار",
    nav_about: "ہمارے متعلق",
    nav_faq: "سوالات",
    nav_contact: "رابطہ کریں",
    lang_btn: "English",
    speaker_btn: "سنیں",
    theme_dark: "ڈارک",
    theme_light: "لائٹ",

    // Hero
    hero_badge: "⚡ جدید ویب و موبائل سافٹ ویئر اسٹوڈیو",
    hero_headline: 'ہم بناتے ہیں <span class="gradient-text">ویب سائٹس</span>، <span class="gradient-text-alt">موبائل ایپس</span> اور اسمارٹ بزنس سسٹمز',
    hero_description: "کاروباری اداروں، دکانوں، اسکولوں، مدارس، اسلامی اداروں اور تنظیموں کی ترقی کے لیے جدید ڈیجیٹل حل۔",
    hero_btn_services: "ہماری خدمات دیکھیں",
    hero_btn_whatsapp: "واٹس ایپ پر رابطہ کریں",
    hero_btn_listen: "آڈیو تعارف سنیں",
    trust_mobile: "100% موبائل ریسپانسو",
    trust_code: "صاف و جدید کوڈنگ",
    trust_support: "براہِ راست واٹس ایپ سپورٹ",

    // Slides
    slide1_tag: "ویب سائٹ انجینئرنگ",
    slide1_title: "تیز رفتار کارپوریٹ ویب سائٹس",
    slide1_desc: "کاروباری اداروں، ای کامرس اور اسلامی تنظیموں کے لیے بہترین حل۔",
    slide1_feat1_title: "الٹرا فاسٹ اسپیڈ",
    slide1_feat1_desc: "موبائل اور کمپیوٹر پر بجلی جیسی تیز رفتاری۔",
    slide1_feat2_title: "گوگل سرچ آپٹیمائزڈ",
    slide1_feat2_desc: "بہترین رینکنگ اور ایس ای او فرینڈلی۔",
    slide1_caption_tag: "خاص مہارت 01",
    slide1_caption_title: "کاروباری و تنظیمی ویب پلیٹ فارمز",

    slide2_tag: "موبائل ایپس",
    slide2_title: "اینڈرائیڈ اور آئی او ایس ایپس",
    slide2_desc: "شاندار یوزر انٹرفیس، آف لائن سپورٹ اور اسلامی قرآنی ایپس۔",
    slide2_feat1_title: "اسلامی ایپلی کیشنز",
    slide2_feat1_desc: "قرآن پاک، نماز کے اوقات اور مدرسہ پورٹل۔",
    slide2_feat2_title: "فوری الرٹس",
    slide2_feat2_desc: "پش نوٹیفکیشنز اور لائیو اپ ڈیٹس۔",
    slide2_caption_tag: "خاص مہارت 02",
    slide2_caption_title: "کراس پلیٹ فارم موبائل ایپ ڈویلپمنٹ",

    slide3_tag: "بزنس آٹومیشن",
    slide3_title: "دکان POS اور اسکول سسٹمز",
    slide3_desc: "اسٹاک مینجمنٹ، فوری بل پرنٹنگ، فیس چالان اور حاضری رجسٹر۔",
    slide3_feat1_title: "شاپ بلنگ و کھاتہ",
    slide3_feat1_desc: "فوری سیلز بل اور بارکوڈ اسکیننگ۔",
    slide3_feat2_title: "اسکول و مدرسہ ERP",
    slide3_feat2_desc: "طلباء داخلہ، فیس وصولی اور رزلٹ شیٹ۔",
    slide3_caption_tag: "خاص مہارت 03",
    slide3_caption_title: "مینجمنٹ ڈیش بورڈز اور POS سسٹمز",
    slide1_device: "لیپ ٹاپ و ڈیسک ٹاپ ریڈی",
    slide2_device: "اینڈرائیڈ و آئی او ایس ایپس",
    slide3_device: "شاپ بلنگ اور ERP سسٹم",

    tag_laptop: "لیپ ٹاپ و کمپیوٹر",
    tag_mobile: "موبائل و ٹیبلٹ",
    tag_ecommerce: "آن لائن شاپنگ",
    tag_pos: "کاؤنٹر بلنگ POS",
    tag_inventory: "اسٹاک گودام سسٹم",
    tag_school: "اسکول و اکیڈمی ERP",
    tag_madrasa: "مدرسہ و جامعہ پورٹل",
    tag_quran: "قرآن و اذکار ایپ",
    tag_custom: "کسٹم بزنس سافٹ ویئر",
    tag_maintenance: "سپیڈ و دیکھ بھال",

    port_badge_laptop: "لیپ ٹاپ ویب سائٹ",
    port_badge_pos: "کاؤنٹر POS سسٹم",
    port_badge_ecommerce: "ای کامرس اسٹور",
    port_badge_madrasa: "جامعہ و مدرسہ ویب",
    port_badge_school: "اسکول مینجمنٹ ERP",
    port_badge_quran: "قرآنی موبائل ایپ",

    // Pillars
    pillar1_title: "10+ جامع حل",
    pillar1_desc: "کارپوریٹ ویب سائٹس سے لے کر دکان POS اور دینی پورٹلز تک۔",
    pillar2_title: "ہر اسکرین پر مکمل فِٹ",
    pillar2_desc: "اسمارٹ فون، ٹیبلٹ اور لیپ ٹاپ پر پکسل پرفیکٹ ڈسپلے۔",
    pillar3_title: "فوری واٹس ایپ رابطہ",
    pillar3_desc: "بغیر پیچیدہ لاگ ان کے سیدھا واٹس ایپ پر آرڈر اور بات چیت۔",
    pillar4_title: "مستقل سپورٹ و رہنمائی",
    pillar4_desc: "ویب سائٹ لانچ کے بعد بھی اپ ڈیٹس اور دیکھ بھال کی سہولت۔",

    // About
    about_tag: "ہمارے بارے میں",
    about_heading: 'آپ کے کاروبار اور ادارے کو دیں <span class="gradient-text">جدید ڈیجیٹل شناخت</span>',
    about_lead: "<strong>Website and App Solution</strong> کا مشن ہر دکاندار، تاجر، اسکول، اکیڈمی اور دینی ادارے کو سستی، معیاری اور آسان ٹیکنالوجی فراہم کرنا ہے۔",
    about_body: "چاہے آپ کو دکان کے لیے بلنگ سسٹم چاہیے، مدرسے کے لیے آن لائن داخلہ اور عطیات کا پورٹل درکار ہو، یا اپنے کاروبار کی شاندار ویب سائٹ بنوانی ہو؛ ہم پرکشش ڈیزائن اور پائیدار سافٹ ویئر کے ساتھ آپ کے خوابوں کو حقیقت بناتے ہیں۔",
    about_badge_title: "جدید ترین معیارات",
    about_badge_desc: "HTML5، CSS3 اور جاوا اسکرپٹ پر مبنی",
    about_pill1: "صاف ستھرا کوڈ",
    about_pill2: "مفت ہوسٹنگ ریڈی",
    about_pill3: "اردو اور انگلش سپورٹ",
    about_f1_title: "حقیقی ضروریات کے مطابق آسان انٹرفیس",
    about_f1_desc: "ہم ایسے سسٹمز بناتے ہیں جنہیں کوئی بھی ملازم یا استاد آسانی سے بغیر کسی مشکل کے چلا سکے۔",
    about_f2_title: "براہِ راست ڈویلپر سے رابطہ",
    about_f2_desc: "واٹس ایپ <strong>03305417514</strong> پر ہمہ وقت بروقت جواب اور شفاف بات چیت۔",
    about_f3_title: "شفاف اور حقیقت پسندانہ کام",
    about_f3_desc: "کوئی غیر حقیقی دعویٰ نہیں، ہم کام کے معیار، لاگت اور وقت کی مکمل شفافیت پر یقین رکھتے ہیں۔",
    about_btn: "اپنے پروجیکٹ پر بات کریں",

    // Services Section
    services_tag: "ہماری مکمل خدمات",
    services_heading: 'ہر کاروبار اور ادارے کے لیے <span class="gradient-text">10 بہترین ڈیجیٹل سروسز</span>',
    services_desc: "اپنی پسند کی سروس چنیں اور ایک کلک پر واٹس ایپ سے کوٹیشن (قیمت کی معلومات) حاصل کریں۔",
    btn_quote: "کوٹیشن حاصل کریں",

    srv1_badge: "ویب سائٹ",
    srv1_title: "بزنس ویب سائٹ ڈویلپمنٹ",
    srv1_desc: "کاروباری اور کمپنیوں کی باوقار ویب سائٹس جو گاہکوں کا اعتماد بڑھائیں، آپ کی سروسز دکھائیں اور سیلز میں اضافہ کریں۔",
    srv1_f1: "موبائل اور کمپیوٹر پر تیز رفتار اور خوبصورت",
    srv1_f2: "گوگل سرچ انجن پر نظر آنے کی صلاحیت (SEO)",
    srv1_f3: "واٹس ایپ بٹن کے ساتھ فوری گاہک رابطہ",

    srv2_badge: "موبائل ایپ",
    srv2_title: "موبائل ایپلیکیشن ڈویلپمنٹ",
    srv2_desc: "اینڈرائیڈ اور آئی فون کے لیے جدید اور تیز رفتار ایپس، جن کا انٹرفیس چلانے میں نہایت آسان اور پرکشش ہو۔",
    srv2_f1: "جدید اور ہموار یوزر انٹرفیس (UI/UX)",
    srv2_f2: "آف لائن کام کرنے کی سہولت",
    srv2_f3: "گوگل پلے اسٹور پر اپ لوڈ کے لیے تیار",

    srv3_badge: "ای کامرس",
    srv3_title: "ای کامرس آن لائن شاپنگ اسٹور",
    srv3_desc: "خوبصورت پراڈکٹ کیٹلاگ، شاپنگ کارٹ اور واٹس ایپ پر ایک کلک سے آرڈر موصول کرنے کا مکمل آن لائن دکان سیٹ اپ۔",
    srv3_f1: "پراڈکٹ کیٹیگریز اور سرچ فلٹر",
    srv3_f2: "واٹس ایپ پر فوری آرڈر بکنگ میسج",
    srv3_f3: "موبائل پر شاپنگ کا تیز ترین تجربہ",

    srv4_badge: "ریٹیل و دکان",
    srv4_title: "دکان مینجمنٹ اور POS سسٹم",
    srv4_desc: "جنرل اسٹورز، ہارڈویئر، کلاتھ مارکیٹ اور ریٹیل شاپس کے لیے کیشیئر کاؤنٹر سافٹ ویئر، بلنگ اور گاہک کھاتہ بک۔",
    srv4_f1: "فوری بل پرنٹنگ اور تھرمل پرنٹر سپورٹ",
    srv4_f2: "گاہک کا ادھار کھاتہ اور بیلنس ٹریکنگ",
    srv4_f3: "روزانہ کی کمائی، فروخت اور نفع نقصان رپورٹ",

    srv5_badge: "انوینٹری",
    srv5_title: "انوینٹری اور اسٹاک مینجمنٹ سسٹم",
    srv5_desc: "گودام اور دکان میں رکھے ہوئے ہر سامان کی درست تعداد، کم مال پر خودکار الرٹ اور سپلائرز کی مکمل تفصیل۔",
    srv5_f1: "ریئل ٹائم اسٹاک گنتی اور بارکوڈ اسکیننگ",
    srv5_f2: "سامان ختم ہونے سے پہلے الرٹ کا نوٹیفکیشن",
    srv5_f3: "سپلائر خریداری ریکارڈ اور بل واؤچر",

    srv6_badge: "تعلیم",
    srv6_title: "اسکول اور اکیڈمی مینجمنٹ سسٹم",
    srv6_desc: "پرائیویٹ اسکولوں اور اکیڈمیز کے لیے آل ان ون پورٹل؛ طلباء کا داخلہ، ماہانہ فیس چالان، حاضری اور رزلٹ کارڈز۔",
    srv6_f1: "طلباء رجسٹریشن اور کلاس وائز ریکارڈ",
    srv6_f2: "ماہانہ فیس چالان خودکار پرنٹ اور بقایا جات",
    srv6_f3: "امتحانات کے رزلٹ کارڈز اور حاضری رجسٹر",

    srv7_badge: "دینی ادارہ",
    srv7_title: "مدرسہ اور اسلامی ادارے کی ویب سائٹ",
    srv7_desc: "جامعات، دارالعلوم، مساجد اور فلاحی اداروں کے لیے پروقار ویب سائٹ، شعبہ جات، نصاب تعلیم، آن لائن داخلہ اور زکوٰۃ/صدقات پورٹل۔",
    srv7_f1: "حفظ، ناظرہ و درسِ نظامی نصاب اور اساتذہ کا تعارف",
    srv7_f2: "آن لائن داخلہ فارم اور سالانہ نتائج",
    srv7_f3: "زکوٰۃ و صدقات عطیات بینک اکاؤنٹ تفصیلات",

    srv8_badge: "اسلامی ایپ",
    srv8_title: "قرآنی اور اسلامی ایپلی کیشنز",
    srv8_desc: "موبائل کے لیے اسلامی ایپس جن میں واضح عربی رسم الخط، اردو و انگریزی ترجمہ، تلاوت آڈیو، نماز کے اوقات اور قبلہ رخ شامل ہوں۔",
    srv8_f1: "بہترین عربی فونٹس اور معتبر تراجم",
    srv8_f2: "نماز کے اوقات کا خودکار الرٹ و الارم",
    srv8_f3: "ڈیجیٹل تسبیح کاؤنٹر اور مسنون دعائیں",

    srv9_badge: "کسٹم حل",
    srv9_title: "کسٹم سافٹ ویئر ڈویلپمنٹ",
    srv9_desc: "اگر آپ کا کام عام سافٹ ویئرز میں فِٹ نہیں بیٹھتا تو ہم آپ کی مکمل رہنمائی کے ساتھ خاص آپ کے طریقے کے مطابق نیا سافٹ ویئر تیار کرتے ہیں۔",
    srv9_f1: "آپ کے طریقہ کار کے مطابق ڈیٹا بیس اور لاجک",
    srv9_f1: "ایڈمن اور اسٹاف کے الگ الگ اختیارات",
    srv9_f3: "مستقبل میں نئے فیچرز شامل کرنے کی آسانی",

    srv10_badge: "سپورٹ",
    srv10_title: "ویب سائٹ مینٹیننس اور اپ ڈیٹس",
    srv10_desc: "پہلے سے موجود ویب سائٹس کی مرمت، ٹیکسٹ اور تصاویر بدلنا، اسپیڈ تیز کرنا، خرابیاں ٹھیک کرنا اور ڈومین ہوسٹنگ کا انتظام۔",
    srv10_f1: "متن، تصاویر، بینرز اور نمبرز کی بروقت تبدیلی",
    srv10_f2: "موبائل لے آؤٹ اور تکنیکی نقائص کی اصلاح",
    srv10_f3: "ڈومین، ڈی این ایس اور سرور ہوسٹنگ سپورٹ",

    // Portfolio
    portfolio_tag: "نمونہ کام اور ڈیمو ڈیزائنز",
    portfolio_heading: 'ہمارے بنائے گئے <span class="gradient-text">ڈیموز کا معائنہ کریں</span>',
    portfolio_desc: "یہاں پیش کردہ تمام پروجیکٹس ہمارے ڈیزائن اور فنی مہارت کو ظاہر کرنے والے نمونہ ڈیزائنز (Demonstration Mockups) ہیں۔",
    portfolio_disclaimer: "وضاحت: یہ تمام ماڈلز ہماری تکنیکی صلاحیتوں کو جانچنے کے لیے تیار کردہ فعال نمونہ پروٹو ٹائپس ہیں۔",
    flt_all: "تمام ڈیموز",
    flt_web: "ویب سائٹس",
    flt_pos: "POS و مینجمنٹ",
    flt_islamic: "اسلامی و مدرسہ",
    flt_mobile: "موبائل ایپس",
    demo_badge: "نمونہ ڈیمو ڈیزائن",
    btn_view_details: "تفصیلات دیکھیں",

    demo1_cat: "کارپوریٹ ویب سائٹ ڈیمو",
    demo1_title: "کارپوریٹ بزنس ویب سائٹ",
    demo1_desc: "لیڈ جنریشن، شاندار ریسپانسو لے آؤٹ اور واٹس ایپ مشاورت کے لنک کے ساتھ پروقار ویب سائٹ۔",

    demo2_cat: "شاپ POS و بلنگ ڈیمو",
    demo2_title: "دکان مینجمنٹ اور POS ڈیش بورڈ",
    demo2_desc: "فوری بارکوڈ بلنگ، گاہک ادھار کھاتہ (Khata) کا ریکارڈ اور روزانہ کی مالی رپورٹ۔",

    demo3_cat: "ای کامرس اسٹور ڈیمو",
    demo3_title: "آن لائن شاپنگ ویب سائٹ",
    demo3_desc: "پراڈکٹ کیٹلاگ، سرچ کیٹیگریز اور واٹس ایپ پر ایک کلک سے فوری آرڈر کی سہولت۔",

    demo4_cat: "اسلامی ادارہ پورٹل ڈیمو",
    demo4_title: "مدرسہ و جامعہ ویب سائٹ",
    demo4_desc: "شعبہ جات، نصاب تعلیم، آن لائن داخلہ رہنمائی اور مخیر حضرات کے لیے عطیات کی معلومات۔",

    demo5_cat: "ایجوکیشن ERP ڈیمو",
    demo5_title: "اسکول مینجمنٹ سسٹم",
    demo5_desc: "اسکولوں اور اکیڈمیز کے لیے طلباء کا مکمل انتظام، فیس واؤچرز اور امتحانی رزلٹ کارڈز۔",

    demo6_cat: "اسلامی موبائل ایپ ڈیمو",
    demo6_title: "قرآن اور اسلامی ایپلی کیشن",
    demo6_desc: "واضح عربی سورتیں، اردو ترجمہ، نماز کے اوقات کی گھڑی اور ڈیجیٹل تسبیح کاؤنٹر۔",

    // Why Us
    why_tag: "ہمارے نمایاں فوائد",
    why_heading: 'ہمیں کیوں <span class="gradient-text">منتخب کریں؟</span>',
    why_desc: "ہم آپ کے کاروبار کی ضرورت کو سمجھتے ہیں: جدید ڈیزائن، آسان استعمال، سستا پیکیج اور ہر وقت دستیاب رابطہ۔",
    why1_title: "جدید اور پروفیشنل ڈیزائن",
    why1_desc: "ہم بین الاقوامی سطح کے جدید رنگوں، صاف ستھری ٹائپوگرافی اور نفیس اینیمیشنز کے ساتھ ایسے ڈیزائن بناتے ہیں جو آپ کے ادارے کا وقار بڑھاتے ہیں۔",
    why2_title: "موبائل فرینڈلی اور ریسپانسو",
    why2_desc: "ہر ویب پیج اور ایپ اسمارٹ فونز، ٹیبلٹس اور کمپیوٹرز پر یکساں خوبصورتی سے کھلتی ہے اور کوئی بٹن یا تحریر کٹتی نہیں ہے۔",
    why3_title: "کسٹمائزڈ اور ذاتی ضروریات کے مطابق",
    why3_desc: "کوئی بنے بنائے سستے سانچے نہیں؛ ہم آپ کے کام کی ضرورت کو سنتے ہیں اور خاص آپ کی دکان، اسکول یا ادارے کے لیے سسٹم بناتے ہیں۔",
    why4_title: "استعمال میں نہایت آسان انٹرفیس",
    why4_desc: "ہم سافٹ ویئر کو اتنا آسان بناتے ہیں کہ آپ کا سیلز مین، استاد یا عملہ بغیر کسی مشکل کے چند منٹوں میں چلانا سیکھ جائے۔",
    why5_title: "تیز رفتار اور قابلِ اعتماد واٹس ایپ رابطہ",
    why5_desc: "ہم سے براہِ راست واٹس ایپ 03305417514 پر رابطہ رکھیں؛ کام کے ہر مرحلے پر آپ کو مکمل باخبر رکھا جاتا ہے۔",
    why6_title: "مستقل دیکھ بھال اور تکنیکی سپورٹ",
    why6_desc: "ہمارا تعلق پروجیکٹ مکمل ہونے کے بعد بھی جاری رہتا ہے۔ ہم تبدیلیاں کرنے، ہوسٹنگ سیٹ اپ اور مستقبل کے اضافوں میں ہمیشہ آپ کے ساتھ ہیں۔",

    // Process
    step_tag: "4 آسان مراحل",
    step_heading: 'کام کا <span class="gradient-text">طریقہ کار</span>',
    step_desc: "پہلی بات چیت سے لے کر لائیو ویب سائٹ کی تکمیل تک کا سیدھا اور شفاف سفر۔",
    step1_title: "1. اپنے پروجیکٹ سے آگاہ کریں",
    step1_desc: "نیچے دیا گیا فارم بھریں یا سیدھا واٹس ایپ پر اپنے کاروبار کی قسم اور مطلوبہ ویب سائٹ یا ایپ کا پیغام بھیجیں۔",
    step2_title: "2. ضروریات اور فیس طے کریں",
    step2_desc: "ہم واٹس ایپ یا فون پر آپ کے ساتھ فیچرز، وقت اور مناسب قیمت طے کرتے ہیں تاکہ کوئی ابہام باقی نہ رہے۔",
    step3_title: "3. ہم آپ کی ویب سائٹ تیار کرتے ہیں",
    step3_desc: "ہم پیشہ ورانہ اور جدید ترین کوڈنگ کے ساتھ آپ کی ویب سائٹ، ایپ یا مینجمنٹ سسٹم کی تعمیر کرتے ہیں۔",
    step4_title: "4. معائنہ، لائیو لانچ اور سپورٹ",
    step4_desc: "آپ کام چیک کرتے ہیں، چھوٹی موٹی ترامیم کے بعد ویب سائٹ کو انٹرنیٹ پر لائیو کر دیا جاتا ہے اور سپورٹ جاری رہتی ہے۔",

    // Community
    comm_badge: "رابطے میں رہیں",
    comm_title: "ہمارے واٹس ایپ کمیونٹی گروپ میں شامل ہوں",
    comm_desc: "کاروباری حضرات، اسکول منتظمین اور ڈویلپرز کے نیٹ ورک سے جڑیں۔ نئی سافٹ ویئر اپ ڈیٹس، بزنس گروتھ ٹپس اور مفید معلوماتی نوٹیفکیشنز حاصل کریں۔",
    comm_btn_join: "واٹس ایپ گروپ جوائن کریں",
    comm_btn_direct: "براہِ راست چیٹ: 03305417514",
    comm_bubble_sub: "ڈیجیٹل اپ ڈیٹس اور رہنمائی",

    // FAQ
    faq_tag: "عام سوالات کے جوابات",
    faq_heading: 'اکثر پوچھے جانے والے <span class="gradient-text">اہم سوالات</span>',
    faq_desc: "کیا آپ کے ذہن میں کوئی سوال ہے؟ یہاں کام کی تفصیل، قیمت اور ڈیلیوری سے متعلق تمام معلومات موجود ہیں۔",
    faq1_q: "میں Website and App Solution سے پروجیکٹ کیسے شروع کروا سکتا ہوں؟",
    faq1_a: "کام شروع کروانا بے حد آسان ہے! آپ نیچے دیا گیا پروجیکٹ فارم بھریں یا کسی بھی واٹس ایپ بٹن پر کلک کر کے سیدھا 03305417514 پر رابطہ کریں۔ ہم آپ کی ضروریات سنیں گے، بہترین حل تجویز کریں گے اور مناسب قیمت بتائیں گے۔",
    faq2_q: "کیا ویب سائٹ میں دونوں زبانیں (اردو اور انگریزی) موجود ہیں؟",
    faq2_a: "جی ہاں! ہم دو لسانی (Bilingual) ویب سائٹس بناتے ہیں۔ ہماری ویب سائٹ پر اوپر دیے گئے گلوب بٹن (🌐 English / اردو) سے کسی بھی وقت زبان تبدیل کی جا سکتی ہے۔ مدارس، مساجد اور مقامی پاکستانی دکانوں کے لیے نستعلیق اردو میں کام کرنے کی مکمل سہولت موجود ہے۔",
    faq3_q: "کیا یہ ویب سائٹ فرنٹ اینڈ ہے یا مکمل بیک اینڈ ڈیٹا بیس بھی ہے؟",
    faq3_a: "یہ پبلک ویب سائٹ ایک تیز رفتار فرنٹ اینڈ ہے جس میں انکوائری سیدھی آپ کے واٹس ایپ پر چلی جاتی ہے تاکہ کسی سرور ڈیٹا بیس کی فیس نہ دینی پڑے۔ اگر کلائنٹ کو فل اسکیل لاگ ان، شاپ کا کلاؤڈ ڈیٹا بیس یا اسکول ERP درکار ہو تو ہم حسبِ ضرورت الگ سے بیک اینڈ سروس (Node.js یا Firebase) جوڑ کر دیتے ہیں۔",
    faq4_q: "کیا آپ ڈومین نام اور ہوسٹنگ کا سیٹ اپ بھی کر کے دیتے ہیں؟",
    faq4_a: "جی بالکل! ہم آپ کو بہترین ڈومین نام (جیسے .com، .pk، یا .org) منتخب کرنے سے لے کر ورسیل (Vercel) یا گٹ ہب پر بالکل مفت ہوسٹنگ اور مستقل SSL سیکیورٹی سیٹ اپ کرنے تک مکمل رہنمائی فراہم کرتے ہیں۔",
    faq5_q: "کیا دکان کا بلنگ اور کھاتہ سسٹم موبائل فون پر چلایا جا سکتا ہے؟",
    faq5_a: "جی ہاں! ہمارا بنایا گیا شاپ مینجمنٹ اور انوینٹری سسٹم مکمل موبائل ریسپانسو ہوتا ہے۔ آپ دکان میں موجود نہ بھی ہوں تو گھر بیٹھے اپنے اسمارٹ فون پر دکان کی سیلز، ادھار کھاتہ اور موجودہ اسٹاک کی صورتحال دیکھ سکتے ہیں۔",
    faq6_q: "ویب سائٹ یا ایپ مکمل ہونے کے بعد سپورٹ کیسے ملتی ہے؟",
    faq6_a: "پروجیکٹ ڈیلیور ہونے کے بعد بھی ہم اپنے گاہکوں کے ساتھ کھڑے رہتے ہیں۔ کوئی بھی متن بدلنا ہو، تصویر اپ ڈیٹ کرنی ہو یا نئی سروس شامل کرنی ہو، آپ واٹس ایپ پر ایک پیغام بھیج کر فوری مدد حاصل کر سکتے ہیں۔",

    // Contact
    contact_tag: "براہِ راست رابطہ",
    contact_heading: 'آئیے اپنے نئے <span class="gradient-text">پروجیکٹ کا آغاز کریں</span>',
    contact_desc: "کیا آپ اپنے کاروبار، دکان یا اسکول کے لیے ویب سائٹ یا ایپ بنوانا چاہتے ہیں؟ نیچے دیا گیا فارم بھریں یا براہ راست واٹس ایپ پر بات چیت کریں۔",
    c_wa_label: "آفیشل واٹس ایپ (چیٹ کے لیے کلک کریں)",
    c_wa_sub: "فوری جواب اور وائس میسج کی سہولت",
    c_scope_label: "دائرہ کار",
    c_scope_val: "ویب سائٹس، ایپس اور سافٹ ویئر سسٹمز",
    c_scope_sub: "دکانوں، اسکولوں، مدارس اور کمپنیوں کے لیے",
    c_time_label: "اوقات کار",
    c_time_val: "پیر تا ہفتہ: صبح 9:00 تا رات 9:00",
    c_time_sub: "واٹس ایپ پر میسج کسی بھی وقت چھوڑ سکتے ہیں",
    c_comm_title: "ہماری کمیونٹی سے جڑنا چاہتے ہیں؟",
    c_comm_desc: "ٹیکنالوجی اپ ڈیٹس اور نوٹس کے لیے ہمارے گروپ میں شامل ہوں۔",
    c_comm_btn: "واٹس ایپ گروپ جوائن کریں",

    form_title: "واٹس ایپ پر پروجیکٹ کی تفصیل بھیجیں",
    form_subtitle: "تفصیلات درج کریں؛ بٹن دبانے پر واٹس ایپ میں مکمل میسج خود بخود تیار ہو جائے گا۔",
    form_notice: "<strong>100% محفوظ:</strong> سبمٹ کرنے پر آپ کی تفصیلات براہِ راست واٹس ایپ پر 03305417514 پر بھیجی جائیں گی۔ کسی رجسٹریشن کی ضرورت نہیں۔",
    lbl_name: "آپ کا پورا نام",
    lbl_phone: "واٹس ایپ / فون نمبر",
    lbl_org: "دکان / کاروبار / ادارے کا نام",
    lbl_service: "مطلوبہ سروس",
    lbl_budget: "تخمینہ بجٹ",
    lbl_optional: "(اختیاری)",
    lbl_desc: "پروجیکٹ کی مختصر تفصیل",
    btn_submit_wa: "واٹس ایپ کھولیں اور انکوائری بھیجیں",

    err_name: "براہِ کرم اپنا پورا نام درج کریں",
    err_phone: "براہِ کرم درست فون نمبر درج کریں",
    err_org: "اپنے ادارے یا کاروبار کا نام درج کریں",
    err_service: "براہِ کرم مطلوبہ سروس چنیں",
    err_desc: "براہِ کرم پروجیکٹ کی تفصیل درج کریں",

    // Footer
    footer_about: "کاروبار، دکانوں، اسکولوں، مساجد اور مدارس کے لیے جدید ویب سائٹس، موبائل ایپس اور اسمارٹ مینجمنٹ سسٹمز کی تیاری۔",
    footer_nav_title: "اہم لنکس",
    footer_srv_title: "ہمارے سلوشنز",
    footer_contact_title: "رابطہ و نیٹ ورک",
    footer_chat_label: "براہِ راست واٹس ایپ مشاورت",
    footer_hosting_label: "مفت ہوسٹنگ پر لائیو (Vercel اور GitHub)",
    footer_rights_note: "جدید کوڈنگ اور واٹس ایپ انٹیگریشن کے ساتھ تیار کردہ۔ رابطہ: 03305417514۔"
  },

  en: {
    // Brand & Topbar
    brand_title_html: 'Website &amp; App <span class="gradient-text">Solution</span>',
    topbar_hours: "Mon – Sat: 9:00 AM – 9:00 PM PKT",
    topbar_loc: "Online Services in Pakistan & Worldwide",
    nav_cta_quote: "Get a Free Quote",
    drawer_lang_label: "Select Language:",

    // Nav
    nav_home: "Home",
    nav_services: "Our Services",
    nav_portfolio: "Portfolio",
    nav_why_us: "Why Us",
    nav_process: "Process",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    lang_btn: "اردو",
    speaker_btn: "Listen",
    theme_dark: "Dark",
    theme_light: "Light",

    // Hero
    hero_badge: "⚡ Web & Mobile Software Studio",
    hero_headline: 'We Build <span class="gradient-text">Websites</span>, <span class="gradient-text-alt">Mobile Apps</span> &amp; Smart Business Solutions',
    hero_description: "Helping businesses, shops, schools, madrasas, Islamic institutions, and organizations grow with modern digital solutions.",
    hero_btn_services: "Explore Our Services",
    hero_btn_whatsapp: "Contact on WhatsApp",
    hero_btn_listen: "Listen Audio Intro",
    trust_mobile: "100% Mobile Ready",
    trust_code: "Clean Architecture",
    trust_support: "Direct WhatsApp Support",

    // Slides
    slide1_tag: "Web Engineering",
    slide1_title: "High-Speed Business Websites",
    slide1_desc: "Tailored for companies, e-commerce stores, and Islamic organizations.",
    slide1_feat1_title: "Ultra Fast Loading",
    slide1_feat1_desc: "Optimized for mobile & desktop performance.",
    slide1_feat2_title: "Search Optimized",
    slide1_feat2_desc: "Structured SEO markup and top rankings.",
    slide1_caption_tag: "Specialization 01",
    slide1_caption_title: "Corporate & Organization Web Platforms",

    slide2_tag: "Mobile Apps",
    slide2_title: "Android & iOS Applications",
    slide2_desc: "Intuitive user experiences, offline caching, and Islamic Quran applications.",
    slide2_feat1_title: "Islamic Applications",
    slide2_feat1_desc: "Quran recitation, prayer times, and madrasa portals.",
    slide2_feat2_title: "Instant Alerts",
    slide2_feat2_desc: "Push notifications and live updates.",
    slide2_caption_tag: "Specialization 02",
    slide2_caption_title: "Cross-Platform Mobile Application Engineering",

    slide3_tag: "Business Automation",
    slide3_title: "Shop POS & School Systems",
    slide3_desc: "Stock tracking, thermal receipts, student fee vouchers, and registers.",
    slide3_feat1_title: "Retail POS & Stock",
    slide3_feat1_desc: "Fast billing, barcode scanning, and ledgers.",
    slide3_feat2_title: "School & Madrasa ERP",
    slide3_feat2_desc: "Admission registers, fee slips, and report cards.",
    slide3_caption_tag: "Specialization 03",
    slide3_caption_title: "Management Dashboards & POS Systems",
    slide1_device: "Laptop & Desktop Ready",
    slide2_device: "Android & iOS Apps",
    slide3_device: "Shop Billing & ERP System",

    tag_laptop: "Laptop & Web",
    tag_mobile: "Mobile & Tablet",
    tag_ecommerce: "Online Store",
    tag_pos: "Counter Billing POS",
    tag_inventory: "Stock & Warehouse",
    tag_school: "School & Academy ERP",
    tag_madrasa: "Madrasa & Jamia Portal",
    tag_quran: "Quran & Azkar App",
    tag_custom: "Custom Software",
    tag_maintenance: "Speed & Maintenance",

    port_badge_laptop: "Laptop Website",
    port_badge_pos: "Counter POS System",
    port_badge_ecommerce: "E-Commerce Store",
    port_badge_madrasa: "Madrasa & Jamia Web",
    port_badge_school: "School Management ERP",
    port_badge_quran: "Quranic Mobile App",

    // Pillars
    pillar1_title: "10+ Tailored Solutions",
    pillar1_desc: "From company websites to POS software & Islamic portals.",
    pillar2_title: "Fully Responsive",
    pillar2_desc: "Pixel-perfect on smartphones, tablets, and computers.",
    pillar3_title: "Direct WhatsApp",
    pillar3_desc: "Instant booking and chat without complicated sign-ups.",
    pillar4_title: "Support & Updates",
    pillar4_desc: "Post-launch revisions, maintenance, and hosting guidance.",

    // About
    about_tag: "About Us",
    about_heading: 'Empowering Organizations with <span class="gradient-text">Purpose-Built Digital Tools</span>',
    about_lead: "At <strong>Website and App Solution</strong>, we believe every business, shop, educational academy, and religious institution deserves modern, reliable, and accessible technology.",
    about_body: "Whether you run a local retail shop in need of a billing POS system, a madrasa requiring an online student and donations portal, or a company seeking an impressive business website; we combine modern aesthetics with functional design to help you reach your goals.",
    about_badge_title: "Modern Standards",
    about_badge_desc: "Built with HTML5, CSS3, & clean JavaScript",
    about_pill1: "Clean Code",
    about_pill2: "Free Hosting Ready",
    about_pill3: "Urdu & English Ready",
    about_f1_title: "Designed for Real-World Workflows",
    about_f1_desc: "We craft straightforward interfaces that staff, cashiers, or teachers can use with zero friction.",
    about_f2_title: "Direct Developer Contact",
    about_f2_desc: "Direct contact on WhatsApp at 03305417514 ensures fast and transparent communication.",
    about_f3_title: "Honest & Realistic Approach",
    about_f3_desc: "We clearly outline frontend capabilities and backend needs so you make confident decisions.",
    about_btn: "Discuss Your Requirements",

    // Services
    services_tag: "Our Complete Offerings",
    services_heading: 'Comprehensive Services for <span class="gradient-text">Modern Organizations</span>',
    services_desc: "Explore our complete range of website design, mobile apps, and custom software tailored for your growth.",
    btn_quote: "Get a Quote",

    srv1_badge: "Web",
    srv1_title: "Business Website Development",
    srv1_desc: "Custom corporate and company websites that build credibility, showcase services, and convert casual visitors into paying customers.",
    srv1_f1: "Mobile, tablet & desktop responsive",
    srv1_f2: "Fast loading & clean semantic HTML5",
    srv1_f3: "WhatsApp inquiry button integration",

    srv2_badge: "Mobile",
    srv2_title: "Mobile Application Development",
    srv2_desc: "Sleek and responsive cross-platform mobile apps for Android and iOS, built with intuitive user experiences and smooth performance.",
    srv2_f1: "Modern UI/UX tailored for touchscreens",
    srv2_f2: "Offline caching & fast responses",
    srv2_f3: "Ready for Google Play & App Store deployment",

    srv3_badge: "E-Commerce",
    srv3_title: "E-commerce Websites",
    srv3_desc: "Feature-rich online store platforms featuring attractive product catalogs, shopping carts, WhatsApp direct ordering, and easy checkouts.",
    srv3_f1: "Product categories & search filters",
    srv3_f2: "WhatsApp instant order messaging",
    srv3_f3: "Mobile-optimized shopping experience",

    srv4_badge: "Retail",
    srv4_title: "Shop Management and POS Systems",
    srv4_desc: "Streamlined Point of Sale (POS) and shop operations software for retail stores, grocery shops, cloth markets, and hardware outlets.",
    srv4_f1: "Fast sales billing & thermal receipt printing",
    srv4_f2: "Customer khata & credit balance tracking",
    srv4_f3: "Daily revenue & profit/loss summaries",

    srv5_badge: "Inventory",
    srv5_title: "Inventory and Stock Management Systems",
    srv5_desc: "Keep track of every item across your warehouse or storage racks with accurate stock counts, low-quantity alerts, and supplier history.",
    srv5_f1: "Real-time stock count & barcode support",
    srv5_f2: "Low-stock notifications & expiry tracking",
    srv5_f3: "Purchase orders & vendor records",

    srv6_badge: "Education",
    srv6_title: "School & Academy Management Systems",
    srv6_desc: "All-in-one software for private schools, tuition centers, and coaching academies to handle admissions, fees, and attendance registers.",
    srv6_f1: "Student registration & class records",
    srv6_f2: "Monthly fee voucher generation & collection",
    srv6_f3: "Exam report cards & attendance sheets",

    srv7_badge: "Islamic",
    srv7_title: "Madrasa & Islamic Institution Websites",
    srv7_desc: "Dignified, respectful, and modern websites for Jamias, Islamic centers, Dar-ul-Ulooms, and mosques to share courses and connect with patrons.",
    srv7_f1: "Course curriculums & faculty profiles",
    srv7_f2: "Online admission forms & notifications",
    srv7_f3: "Donation (Sadqah/Zakat) appeal information",

    srv8_badge: "App",
    srv8_title: "Quran and Islamic Applications",
    srv8_desc: "Dedicated Islamic applications with authentic Arabic typography, Urdu/English translations, audio recitations, Tasbeeh counter, and prayer times.",
    srv8_f1: "High-resolution Arabic script & translations",
    srv8_f2: "Offline audio player & bookmarking",
    srv8_f3: "Accurate Salah prayer times & Qibla finder",

    srv9_badge: "Custom",
    srv9_title: "Custom Software Development",
    srv9_desc: "Custom software architectures built strictly around your organization's unique operational procedures and workflow automation needs.",
    srv9_f1: "Tailored database schemas & business logic",
    srv9_f2: "Role-based permissions (Admin, Staff, User)",
    srv9_f3: "Scalable architecture ready for future modules",

    srv10_badge: "Support",
    srv10_title: "Website Maintenance & Updates",
    srv10_desc: "Reliable technical upkeep for your existing digital platforms. Content edits, security patches, styling refreshes, and speed optimization.",
    srv10_f1: "Text, image, and banner content updates",
    srv10_f2: "Bug resolution & mobile alignment fixes",
    srv10_f3: "Domain, DNS & hosting configuration help",

    // Portfolio
    portfolio_tag: "Sample Work & Demonstrations",
    portfolio_heading: 'Explore Our <span class="gradient-text">Demonstration Projects</span>',
    portfolio_desc: "Interactive concept designs and demo models illustrating our technical capabilities.",
    portfolio_disclaimer: "Notice: The items below are conceptual design demonstrations and functional prototypes illustrating our technical capabilities.",
    flt_all: "All Demos",
    flt_web: "Websites",
    flt_pos: "POS & Management",
    flt_islamic: "Islamic & Madrasa",
    flt_mobile: "Mobile Apps",
    demo_badge: "Sample Design Demo",
    btn_view_details: "View Details",

    demo1_cat: "Corporate Web Demo",
    demo1_title: "Corporate Business Website",
    demo1_desc: "A refined multi-section business website featuring lead generation forms, responsive layout, and WhatsApp consultation links.",

    demo2_cat: "POS & Retail Demo",
    demo2_title: "Shop Management & POS Dashboard",
    demo2_desc: "Intuitive cashier billing interface with quick barcode item addition, credit ledger (Khata) tracking, and daily financial reporting.",

    demo3_cat: "E-Commerce Store Demo",
    demo3_title: "Online Shopping Website",
    demo3_desc: "Mobile-first online store layout with visual product cards, filterable categories, and one-click WhatsApp order checkout.",

    demo4_cat: "Islamic Institution Portal",
    demo4_title: "Madrasa & Jamia Website",
    demo4_desc: "A respectful digital home for Islamic institutions, featuring department listings, admissions guidelines, donor appeals, and contact information.",

    demo5_cat: "Education ERP Demo",
    demo5_title: "School Management System",
    demo5_desc: "Complete administrative framework for schools and academies to organize class rosters, track monthly fee vouchers, and issue student report cards.",

    demo6_cat: "Islamic Mobile App Demo",
    demo6_title: "Quran & Islamic Application",
    demo6_desc: "Mobile application concept featuring readable Surah indices, Urdu and English translation options, prayer times widget, and digital tasbeeh counter.",

    // Why Us
    why_tag: "Our Advantages",
    why_heading: 'Why Choose <span class="gradient-text">Website and App Solution?</span>',
    why_desc: "We focus on what truly matters to your business: clean design, reliable communication, practical functionality, and honest advice.",
    why1_title: "Modern & Professional Design",
    why1_desc: "We follow contemporary UI/UX design trends with sleek typography, balanced color palettes, and polished visual contrast.",
    why2_title: "Mobile-Friendly & Responsive",
    why2_desc: "Every screen layout is engineered from the ground up to adapt seamlessly across smartphones, iPads, and desktop monitors.",
    why3_title: "Customized Solutions",
    why3_desc: "No cookie-cutter templates that don't fit your daily work. We listen to your specific operational needs and build features tailored around your store or school.",
    why4_title: "Easy-to-Use Interfaces",
    why4_desc: "We make software straightforward so you, your cashiers, teachers, or staff can operate it without needing lengthy training sessions.",
    why5_title: "Reliable Communication",
    why5_desc: "Reach us directly on WhatsApp at 03305417514. We keep you consistently informed at every stage of the project with prompt replies.",
    why6_title: "Ongoing Maintenance & Support",
    why6_desc: "Our relationship does not end at delivery. We provide guidance on updates, domain setups, server hosting, and revisions as your business continues to expand.",

    // Process
    step_tag: "Simple 4-Step Process",
    step_heading: 'How It <span class="gradient-text">Works</span>',
    step_desc: "A transparent, straightforward collaboration from your first inquiry to final deployment.",
    step1_title: "1. Tell Us About Your Project",
    step1_desc: "Fill out our simple WhatsApp inquiry form or message us directly with your website or app idea, business type, and goals.",
    step2_title: "2. Discuss Your Requirements",
    step2_desc: "We consult with you over WhatsApp or phone to clarify pages, design preferences, features, and establish a clear timeline and quote.",
    step3_title: "3. We Develop Your Solution",
    step3_desc: "We design and code your website, application, or management system using clean, robust, and modern coding standards.",
    step4_title: "4. Review, Launch & Support",
    step4_desc: "You review the project, we implement any desired refinements, help deploy it live, and provide ongoing maintenance support.",

    // Community
    comm_badge: "Stay Connected",
    comm_title: "Join Our WhatsApp Community Group",
    comm_desc: "Connect with our network of business owners, school administrators, and developers. Receive updates on new software releases, digital growth tips, and tech news.",
    comm_btn_join: "Join Our WhatsApp Group",
    comm_btn_direct: "Direct Chat: 03305417514",
    comm_bubble_sub: "Updates & Digital Solutions",

    // FAQ
    faq_tag: "Common Questions",
    faq_heading: 'Frequently Asked <span class="gradient-text">Questions</span>',
    faq_desc: "Got questions? Here are clear, upfront answers regarding how we design, develop, and deliver your projects.",
    faq1_q: "How do I start a project with Website and App Solution?",
    faq1_a: "It is as simple as sending us a message! You can fill out the Project Inquiry Form below or click any of the WhatsApp buttons to chat with us directly at 03305417514. We will discuss your goals, suggest the best solution, and provide a clear quote.",
    faq2_q: "Can you design websites in both English and Urdu?",
    faq2_a: "Yes, absolutely! We specialize in bilingual websites and applications. You can switch languages at any time using the globe button in the top menu. We can format right-to-left Nastaliq Urdu for Madrasas, mosques, and Pakistani businesses alongside English.",
    faq3_q: "Is this website template frontend only or does it have a backend?",
    faq3_a: "This public website is a lightweight, ultra-fast frontend that routes project inquiries directly to WhatsApp without needing a database server. For clients ordering complex systems (like real POS inventory, online store checkout, or school portals with logins), we engineer custom backends using Node.js or Firebase.",
    faq4_q: "Do you assist with domain registration and website hosting?",
    faq4_a: "Yes! We guide you step-by-step through choosing a suitable domain name (such as .com, .pk, or .org) and setting up reliable hosting on platforms like Vercel or GitHub Pages with free SSL certificates so your website remains online 24/7.",
    faq5_q: "Can I manage my shop's inventory from a mobile phone?",
    faq5_a: "Yes. When we develop your shop management or inventory system, we make sure the administrative dashboard is fully responsive so you can check stock quantities, sales summaries, and customer ledger balances directly from your smartphone wherever you are.",
    faq6_q: "What kind of support is provided after launching the website or app?",
    faq6_a: "We provide post-launch assistance to ensure everything operates smoothly. We help you make minor content adjustments, offer maintenance packages for routine updates, and remain easily reachable on WhatsApp for any future modifications.",

    // Contact
    contact_tag: "Get in Touch",
    contact_heading: 'Let\'s Discuss Your <span class="gradient-text">Next Digital Project</span>',
    contact_desc: "Ready to upgrade your business with a professional website, mobile app, or smart management system? Send us a message and let's bring your ideas to life.",
    c_wa_label: "Official WhatsApp (Click to Chat)",
    c_wa_sub: "Fast replies & voice note support",
    c_scope_label: "Business Scope",
    c_scope_val: "Web & Mobile Applications",
    c_scope_sub: "Serving businesses, shops, schools & madrasas",
    c_time_label: "Availability",
    c_time_val: "Mon – Sat: 9:00 AM – 9:00 PM PKT",
    c_time_sub: "Emergency message support 24/7",
    c_comm_title: "Interested in our community?",
    c_comm_desc: "Join our group for tech updates and announcements.",
    c_comm_btn: "Join WhatsApp Group",

    form_title: "Send Project Inquiry via WhatsApp",
    form_subtitle: "Fill in the fields below. We will format a clean WhatsApp message ready for you to send in one tap.",
    form_notice: "<strong>100% Secure:</strong> Clicking submit will open your WhatsApp directly with your project details formatted and ready to send to 03305417514. No sign-up required.",
    lbl_name: "Full Name",
    lbl_phone: "WhatsApp / Phone Number",
    lbl_org: "Business or Organization Name",
    lbl_service: "Required Service",
    lbl_budget: "Estimated Budget",
    lbl_optional: "(Optional)",
    lbl_desc: "Project Description",
    btn_submit_wa: "Open in WhatsApp & Send Inquiry",

    err_name: "Please enter your full name",
    err_phone: "Please enter a valid phone number",
    err_org: "Please provide your business or organization name",
    err_service: "Please select a service",
    err_desc: "Please briefly describe your project needs",

    // Footer
    footer_about: "Professional website design, mobile apps, POS software, and Islamic digital portals crafted for modern businesses, shops, and institutions.",
    footer_nav_title: "Navigation",
    footer_srv_title: "Our Solutions",
    footer_contact_title: "Contact & Connect",
    footer_chat_label: "Direct WhatsApp Consultation",
    footer_hosting_label: "Free Frontend Hosted (Vercel & GitHub)",
    footer_rights_note: "Crafted with modern coding & WhatsApp integration. Contact: 03305417514."
  }
};

// ----------------------------------------------------------------------------
// 3. DEMO PROJECTS DATA (For interactive preview modal)
// ----------------------------------------------------------------------------
const DEMO_PROJECTS_DATA = {
  business: {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    ur: {
      title: "کارپوریٹ بزنس ویب سائٹ ڈیمو",
      badge: "نمونہ ڈیمو ڈیزائن",
      category: "بزنس ویب سائٹ ڈویلپمنٹ",
      description: "کارپوریٹ کمپنیوں کے لیے ایک پروقار اور تیز رفتار ویب پلیٹ فارم جس میں سروسز، کمپنی پروفائل اور واٹس ایپ مشاورت شامل ہے۔",
      features: [
        "تمام موبائل اور کمپیوٹر اسکرینز پر 100% ریسپانسو",
        "واٹس ایپ پر براہِ راست مفت مشاورتی میسج کی سہولت",
        "الٹرا فاسٹ لوڈنگ اسپیڈ اور گوگل فرینڈلی کوڈنگ"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    en: {
      title: "Corporate Business Website Demo",
      badge: "Sample Design Demo",
      category: "Business Website Development",
      description: "A comprehensive, high-conversion web platform designed for corporate consulting and modern companies.",
      features: [
        "Ultra-responsive layout across all desktop & mobile screen sizes",
        "Interactive consultation request modal linked to WhatsApp",
        "Fast loading speed with clean semantic HTML5 markup"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  },
  pos: {
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    ur: {
      title: "دکان مینجمنٹ اور POS سسٹم ڈیمو",
      badge: "نمونہ ڈیمو ڈیزائن",
      category: "دکان مینجمنٹ اور POS سسٹم",
      description: "ریٹیل اسٹورز، جنرل مرچنٹس اور ہول سیل دکانوں کے لیے کیشیئر کاؤنٹر، بارکوڈ بلنگ اور کھاتہ بک کا مکمل نظام۔",
      features: [
        "فوری بارکوڈ آئٹم اسکین اور تھرمل سلپ پرنٹنگ",
        "کسٹمر کا ادھار کھاتہ (Khata) اور بقایا رقم کا حساب",
        "روزانہ کی فروخت اور نفع نقصان کی خودکار رپورٹ"
      ],
      tech: ["POS Interface", "Dashboard Layout", "Khata Ledger Logic"]
    },
    en: {
      title: "Shop Management & POS Dashboard Demo",
      badge: "Sample Design Demo",
      category: "Shop Management and POS Systems",
      description: "A fast, streamlined Point of Sale terminal and inventory management interface created for retail shops.",
      features: [
        "Quick item search and barcode scanner support",
        "Automated thermal receipt slip generation",
        "Customer ledger (Khata) with credit balance tracking"
      ],
      tech: ["POS Interface", "Dashboard Layout", "Khata Ledger Logic"]
    }
  },
  store: {
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    ur: {
      title: "ای کامرس آن لائن شاپنگ اسٹور ڈیمو",
      badge: "نمونہ ڈیمو ڈیزائن",
      category: "ای کامرس ویب سائٹ",
      description: "پراڈکٹ کیٹلاگ، سرچ فلٹرز اور واٹس ایپ پر ایک کلک سے فوری کیش آن ڈیلیوری آرڈر بکنگ کی سہولت۔",
      features: [
        "پراڈکٹ کیٹیگریز اور فلٹر ٹیبز",
        "واٹس ایپ پر فوری آرڈر بھیجنے کا خصوصی بٹن",
        "شاپنگ کارٹ اور موبائل فرینڈلی چیک آؤٹ"
      ],
      tech: ["E-Commerce UI", "WhatsApp Checkout", "Catalog Engine"]
    },
    en: {
      title: "Online Shopping E-commerce Store Demo",
      badge: "Sample Design Demo",
      category: "E-commerce Websites",
      description: "A mobile-first e-commerce storefront tailored for merchants with instant WhatsApp checkout and order placement.",
      features: [
        "Catalog browsing with product filter tabs",
        "Direct 'Order on WhatsApp' button with prefilled product title",
        "Cart drawer with live item count and total calculation"
      ],
      tech: ["E-Commerce UI", "WhatsApp Checkout", "Catalog Engine"]
    }
  },
  madrasa: {
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    ur: {
      title: "مدرسہ و جامعہ ویب پورٹل ڈیمو",
      badge: "نمونہ ڈیمو ڈیزائن",
      category: "مدرسہ ویب سائٹ",
      description: "جامعات اور دارالعلوم کے لیے نستعلیق اردو اور عربی فونٹس میں شعبہ جات، نصاب تعلیم، آن لائن داخلہ اور زکوٰۃ/عطیات پورٹل۔",
      features: [
        "شعبہ حفظ و ناظرہ، درسِ نظامی نصاب اور اساتذہ کا تعارف",
        "آن لائن طالب علم داخلہ فارم اور سالانہ نتائج",
        "زکوٰۃ و صدقات فلاحی عطیات کی بینک تفصیلات"
      ],
      tech: ["Arabic Typography", "Bilingual Support", "Institutional Portal"]
    },
    en: {
      title: "Madrasa & Jamia Islamic Portal Demo",
      badge: "Sample Design Demo",
      category: "Madrasa and Islamic Institution Websites",
      description: "A respectful, dignified digital web portal for Islamic institutions, Jamias, and Dar-ul-Ulooms with bilingual support.",
      features: [
        "Department listings (Hifz-ul-Quran, Dars-e-Nizami, Tajweed)",
        "Online student registration & admission guidelines",
        "Zakat and Sadqah donation appeal showcase with bank details"
      ],
      tech: ["Arabic Typography", "Bilingual Support", "Institutional Portal"]
    }
  },
  school: {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    ur: {
      title: "اسکول اور اکیڈمی مینجمنٹ سسٹم ڈیمو",
      badge: "نمونہ ڈیمو ڈیزائن",
      category: "اسکول مینجمنٹ سسٹم",
      description: "پرائیویٹ اسکولوں کے لیے طالب علموں کا مکمل ریکارڈ، ماہانہ فیس چالان خودکار پرنٹ، حاضری رجسٹر اور امتحانی نتائج۔",
      features: [
        "کلاس وائز طلباء داخلہ لسٹ اور کوائف",
        "ماہانہ فیس چالان اور بقایا جات واؤچر",
        "امتحانات کے رزلٹ کارڈز خودکار تیار کرنے کا نظام"
      ],
      tech: ["School ERP UI", "Fee Vouchers", "Attendance Records"]
    },
    en: {
      title: "School & Academy Management System Demo",
      badge: "Sample Design Demo",
      category: "School and Academy Management Systems",
      description: "An administrative school management system built to organize student records, generate fee chalans, and track attendance.",
      features: [
        "Student enrollment profiles and classroom assignment rosters",
        "Automated monthly fee voucher generator with printable chalans",
        "Terminal exam report card generation module"
      ],
      tech: ["School ERP UI", "Fee Vouchers", "Attendance Records"]
    }
  },
  quran: {
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
    ur: {
      title: "قرآن پاک اور اسلامی ساتھی موبائل ایپ ڈیمو",
      badge: "نمونہ ڈیمو ڈیزائن",
      category: "قرآنی اور اسلامی ایپس",
      description: "موبائل کے لیے اسلامی ایپ جس میں خوبصورت اور واضح عربی رسم الخط، اردو ترجمہ، نماز کے اوقات اور ڈیجیٹل تسبیح شامل ہیں۔",
      features: [
        "عربی سورتیں، آیت وار اردو ترجمہ اور تلاوت",
        "نماز کے اوقات کا لائیو الرٹ اور قبلہ رخ کمپاس",
        "ڈیجیٹل تسبیح کاؤنٹر اور مسنون دعائیں"
      ],
      tech: ["Mobile App UI", "Arabic Script", "Islamic Companion Tools"]
    },
    en: {
      title: "Quran & Islamic Companion Mobile App Demo",
      badge: "Sample Design Demo",
      category: "Quran and Islamic Applications",
      description: "A mobile application concept designed for spiritual focus, featuring high-clarity Arabic Quran text, translations, and prayer times.",
      features: [
        "Clear Arabic Quran typography with Urdu & English translations",
        "Daily Salah prayer timings widget with reminder alarms",
        "Digital Tasbeeh counter with vibration feedback"
      ],
      tech: ["Mobile App UI", "Arabic Script", "Islamic Companion Tools"]
    }
  }
};

// ----------------------------------------------------------------------------
// 4. INITIALIZATION ON DOM CONTENT LOADED
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initThemeToggle();
  initSpeaker();
  initCopyrightYear();
  initMobileMenu();
  initHeroSlider();
  initPortfolioFilters();
  initFaqAccordion();
  initContactForm();
  initScrollSpy();
  initCommunityGroupButton();
  initBackToTop();
  initModalCloseHandlers();
});

// ----------------------------------------------------------------------------
// 5. LANGUAGE SWITCHER SYSTEM (DEFAULT URDU, SUPPORTS ENGLISH)
// ----------------------------------------------------------------------------
function initLanguage() {
  // Apply initial saved language (Default: 'ur')
  applyLanguage(currentLang);

  // Attach click listeners to all buttons with data-lang (Navbar, Mobile Drawer, etc.)
  const langButtons = document.querySelectorAll("[data-lang]");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem("was-lang", selectedLang);
        applyLanguage(selectedLang);
        showToast(selectedLang === "ur" ? "اردو زبان فعال ہو گئی ہے۔" : "English language activated.", 2000);
      }
    });
  });

  // Also support any general toggle button if present
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "ur" ? "en" : "ur";
      currentLang = nextLang;
      localStorage.setItem("was-lang", nextLang);
      applyLanguage(nextLang);
      showToast(nextLang === "ur" ? "اردو زبان فعال ہو گئی ہے۔" : "English language activated.", 2000);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");

  // Highlight all matching active language buttons
  const langButtons = document.querySelectorAll("[data-lang]");
  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update Language Button Label if present
  const langLabel = document.getElementById("langLabel");
  if (langLabel) {
    langLabel.textContent = lang === "ur" ? "English" : "اردو";
  }

  // Update Speaker Button Label
  const speakerLabel = document.getElementById("speakerLabel");
  if (speakerLabel) {
    speakerLabel.textContent = lang === "ur" ? "سنیں" : "Listen";
  }

  // Update Theme Button Label
  const themeLabel = document.getElementById("themeLabel");
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  if (themeLabel) {
    if (lang === "ur") {
      themeLabel.textContent = currentTheme === "dark" ? "لائٹ" : "ڈارک";
    } else {
      themeLabel.textContent = currentTheme === "dark" ? "Light" : "Dark";
    }
  }

  // Translate all elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ur;

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update Placeholders
  const nameInput = document.getElementById("fullName");
  const phoneInput = document.getElementById("phoneNumber");
  const orgInput = document.getElementById("orgName");
  const descInput = document.getElementById("projectDetails");

  if (nameInput) {
    nameInput.placeholder = lang === "ur" ? "مثلاً: محمد احمد" : "e.g. Muhammad Ahmad";
  }
  if (phoneInput) {
    phoneInput.placeholder = lang === "ur" ? "مثلاً: 03001234567" : "e.g. 03001234567";
  }
  if (orgInput) {
    orgInput.placeholder = lang === "ur" ? "مثلاً: المدینہ ٹریڈرز / جامعہ اکیڈمی" : "e.g. Al-Madina Traders / Jamia Academy";
  }
  if (descInput) {
    descInput.placeholder = lang === "ur" 
      ? "مختصراً بتائیں کہ آپ کو کیا خصوصیات درکار ہیں (مثلاً پیجز کی تعداد، خاص فیچرز وغیرہ)..."
      : "Briefly describe what you need (e.g. number of pages, main features, design references)...";
  }
}

// ----------------------------------------------------------------------------
// 6. SPEAKER / AUDIO NARRATION SYSTEM (WEB SPEECH API)
// ----------------------------------------------------------------------------
let isSpeaking = false;

function initSpeaker() {
  const speakerToggleBtn = document.getElementById("speakerToggleBtn");
  const heroSpeakerBtn = document.getElementById("heroSpeakerBtn");

  if (speakerToggleBtn) {
    speakerToggleBtn.addEventListener("click", toggleSpeechOverview);
  }

  if (heroSpeakerBtn) {
    heroSpeakerBtn.addEventListener("click", toggleSpeechOverview);
  }
}

function toggleSpeechOverview() {
  if (!("speechSynthesis" in window)) {
    showToast(currentLang === "ur" 
      ? "معذرت، آپ کا براؤزر آڈیو ٹیکسٹ ٹو اسپیچ سپورٹ نہیں کرتا۔" 
      : "Speech synthesis is not supported in this browser.");
    return;
  }

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    updateSpeakerUI(false);
    return;
  }

  const textToSpeak = currentLang === "ur"
    ? "ویب سائٹ اینڈ ایپ سلوشن میں خوش آمدید۔ ہم بناتے ہیں جدید اور تیز رفتار ویب سائٹس، موبائل ایپلیکیشنز، دکانوں کے لیے پی او ایس بلنگ سسٹمز، اسکول و مدرسہ مینجمنٹ پورٹلز اور کسٹم سافٹ ویئر۔ مزید معلومات اور کوٹیشن کے لیے ہم سے براہِ راست واٹس ایپ صفر تین تین صفر، پانچ چار ایک سات پانچ ایک چار پر رابطہ فرمائیں۔"
    : "Welcome to Website and App Solution. We build high-performance modern websites, mobile applications, shop POS billing systems, school and madrasa management software, and custom business solutions. Contact us directly on WhatsApp at 03305417514.";

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = currentLang === "ur" ? "ur-PK" : "en-US";
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  // Try finding voice
  const voices = window.speechSynthesis.getVoices();
  if (currentLang === "ur") {
    const urduVoice = voices.find((v) => v.lang.includes("ur") || v.lang.includes("hi") || v.lang.includes("ar"));
    if (urduVoice) utterance.voice = urduVoice;
  } else {
    const engVoice = voices.find((v) => v.lang.includes("en"));
    if (engVoice) utterance.voice = engVoice;
  }

  utterance.onstart = () => updateSpeakerUI(true);
  utterance.onend = () => updateSpeakerUI(false);
  utterance.onerror = () => updateSpeakerUI(false);

  window.speechSynthesis.speak(utterance);
}

function updateSpeakerUI(speaking) {
  isSpeaking = speaking;
  const toggleBtn = document.getElementById("speakerToggleBtn");
  const speakerIcon = document.getElementById("speakerIcon");
  const heroIcon = document.getElementById("heroSpeakerIcon");

  if (toggleBtn) {
    if (speaking) {
      toggleBtn.classList.add("speaking");
      if (speakerIcon) speakerIcon.className = "fa-solid fa-circle-stop";
    } else {
      toggleBtn.classList.remove("speaking");
      if (speakerIcon) speakerIcon.className = "fa-solid fa-volume-high";
    }
  }

  if (heroIcon) {
    heroIcon.className = speaking ? "fa-solid fa-circle-stop" : "fa-solid fa-circle-play";
  }
}

// ----------------------------------------------------------------------------
// 7. THEME TOGGLE (DARK SAPPHIRE & VIBRANT STUDIO)
// ----------------------------------------------------------------------------
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  if (!toggleBtn) return;

  function updateToggleUI(currentTheme) {
    if (currentTheme === "dark") {
      if (themeIcon) themeIcon.className = "fa-solid fa-sun";
      if (themeLabel) themeLabel.textContent = currentLang === "ur" ? "لائٹ" : "Light";
      toggleBtn.setAttribute("title", currentLang === "ur" ? "لائٹ موڈ کریں" : "Switch to Light Mode");
    } else {
      if (themeIcon) themeIcon.className = "fa-solid fa-moon";
      if (themeLabel) themeLabel.textContent = currentLang === "ur" ? "ڈارک" : "Dark";
      toggleBtn.setAttribute("title", currentLang === "ur" ? "ڈارک موڈ کریں" : "Switch to Dark Mode");
    }
  }

  const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
  updateToggleUI(activeTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("was-theme", next);
    updateToggleUI(next);

    showToast(next === "dark" 
      ? (currentLang === "ur" ? "ڈارک موڈ فعال ہو گیا ہے۔" : "Dark Mode activated.") 
      : (currentLang === "ur" ? "لائٹ موڈ فعال ہو گیا ہے۔" : "Light Mode activated."), 2000);
  });
}

// ----------------------------------------------------------------------------
// 8. COPYRIGHT YEAR AUTO-UPDATE
// ----------------------------------------------------------------------------
function initCopyrightYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ----------------------------------------------------------------------------
// 9. MOBILE NAVIGATION MENU
// ----------------------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("mobileNavOverlay");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu || !overlay) return;

  function toggleMenu() {
    const isActive = navMenu.classList.contains("active");
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    navMenu.classList.add("active");
    overlay.classList.add("active");
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ----------------------------------------------------------------------------
// 10. HERO VISUAL SLIDER (Interactive auto-play)
// ----------------------------------------------------------------------------
function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slider-slide");
  const dots = document.querySelectorAll("#sliderDots .dot-btn");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 6000;

  function showSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);

  showSlide(0);
  startAutoPlay();
}

// ----------------------------------------------------------------------------
// 11. PORTFOLIO FILTER TABS
// ----------------------------------------------------------------------------
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll(".portfolio-filter-tabs .filter-btn");
  const portfolioCards = document.querySelectorAll("#portfolioGrid .portfolio-card");

  if (!filterBtns.length || !portfolioCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category") || "";

        if (filterValue === "all" || cardCategory.includes(filterValue)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

// ----------------------------------------------------------------------------
// 12. FAQ ACCORDION
// ----------------------------------------------------------------------------
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-accordion .faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isCurrentlyActive = item.classList.contains("active");

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (isCurrentlyActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 13. SERVICE QUOTE SELECTOR (Smooth scroll and prefill)
// ----------------------------------------------------------------------------
function selectServiceForQuote(serviceName) {
  const serviceSelect = document.getElementById("serviceType");
  const contactSection = document.getElementById("contact");

  if (serviceSelect && serviceName) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].value)) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }

    serviceSelect.classList.remove("has-error");
    const serviceError = document.getElementById("serviceError");
    if (serviceError) serviceError.classList.remove("visible");
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const nameInput = document.getElementById("fullName");
      if (nameInput) nameInput.focus();
    }, 600);
  }

  showToast(currentLang === "ur" 
    ? `منتخب سروس: ${serviceName.split("/")[0].trim()}` 
    : `Selected service: ${serviceName}`);
}

// ----------------------------------------------------------------------------
// 14. PROJECT INQUIRY FORM & WHATSAPP REDIRECTION
// ----------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("projectInquiryForm");
  if (!form) return;

  const fields = {
    fullName: {
      input: document.getElementById("fullName"),
      error: document.getElementById("nameError"),
      validate: (val) => val.trim().length >= 2
    },
    phoneNumber: {
      input: document.getElementById("phoneNumber"),
      error: document.getElementById("phoneError"),
      validate: (val) => {
        const clean = val.replace(/[\s\-\(\)]/g, "");
        return clean.length >= 7;
      }
    },
    orgName: {
      input: document.getElementById("orgName"),
      error: document.getElementById("orgError"),
      validate: (val) => val.trim().length >= 2
    },
    serviceType: {
      input: document.getElementById("serviceType"),
      error: document.getElementById("serviceError"),
      validate: (val) => val.trim() !== ""
    },
    projectDetails: {
      input: document.getElementById("projectDetails"),
      error: document.getElementById("descError"),
      validate: (val) => val.trim().length >= 5
    }
  };

  Object.keys(fields).forEach((key) => {
    const item = fields[key];
    if (item.input) {
      item.input.addEventListener("input", () => {
        item.input.classList.remove("has-error");
        if (item.error) item.error.classList.remove("visible");
      });
      item.input.addEventListener("change", () => {
        item.input.classList.remove("has-error");
        if (item.error) item.error.classList.remove("visible");
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalidInput = null;

    Object.keys(fields).forEach((key) => {
      const item = fields[key];
      const val = item.input ? item.input.value : "";
      const valid = item.validate(val);

      if (!valid) {
        isValid = false;
        if (item.input) item.input.classList.add("has-error");
        if (item.error) item.error.classList.add("visible");
        if (!firstInvalidInput && item.input) {
          firstInvalidInput = item.input;
        }
      } else {
        if (item.input) item.input.classList.remove("has-error");
        if (item.error) item.error.classList.remove("visible");
      }
    });

    if (!isValid) {
      if (firstInvalidInput) firstInvalidInput.focus();
      showToast(currentLang === "ur" 
        ? "براہِ کرم تمام ضروری خانے درست طریقے سے پر کریں۔" 
        : "Please complete all required fields correctly.");
      return;
    }

    const fullName = fields.fullName.input.value.trim();
    const phoneNumber = fields.phoneNumber.input.value.trim();
    const orgName = fields.orgName.input.value.trim();
    const serviceType = fields.serviceType.input.value.trim();
    const budgetInput = document.getElementById("estimatedBudget");
    const estimatedBudget = budgetInput ? budgetInput.value : "Flexible";
    const projectDetails = fields.projectDetails.input.value.trim();

    const waMessageLines = [
      `*New Project Inquiry - Website and App Solution*`,
      `--------------------------------------`,
      `👤 *Full Name / نام:* ${fullName}`,
      `📞 *Phone / فون:* ${phoneNumber}`,
      `🏢 *Organization / ادارہ:* ${orgName}`,
      `🛠️ *Service / مطلوبہ سروس:* ${serviceType}`,
      `💰 *Budget / تخمینہ بجٹ:* ${estimatedBudget}`,
      `--------------------------------------`,
      `📝 *Project Details / تفصیل:*`,
      `${projectDetails}`,
      `--------------------------------------`,
      `_Sent directly via Website and App Solution Inquiry Form_`
    ];

    const waMessageText = waMessageLines.join("\n");
    const encodedMessage = encodeURIComponent(waMessageText);
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    showToast(currentLang === "ur" 
      ? "واٹس ایپ کھل رہا ہے..." 
      : "Opening WhatsApp with your formatted message...");

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 400);
  });
}

// ----------------------------------------------------------------------------
// 15. WHATSAPP COMMUNITY GROUP HANDLER
// ----------------------------------------------------------------------------
function initCommunityGroupButton() {
  const groupBtn = document.getElementById("whatsappGroupBtn");
  if (groupBtn) {
    groupBtn.addEventListener("click", handleGroupClick);
  }
}

function handleGroupClick() {
  const trimmedLink = WHATSAPP_GROUP_LINK.trim();

  if (!trimmedLink || trimmedLink === "") {
    const communityModal = document.getElementById("communityModalOverlay");
    if (communityModal) {
      communityModal.classList.add("active");
      communityModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    } else {
      alert("آفیشل واٹس ایپ کمیونٹی گروپ جلد لانچ ہو رہا ہے! براہِ راست 03305417514 پر رابطہ فرمائیں۔");
    }
  } else {
    window.open(trimmedLink, "_blank", "noopener,noreferrer");
  }
}

// ----------------------------------------------------------------------------
// 16. DEMO PROJECT DETAILS MODAL
// ----------------------------------------------------------------------------
function openDemoModal(demoKey) {
  const modalOverlay = document.getElementById("demoModalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalQuoteBtn = document.getElementById("modalQuoteBtn");

  const projectEntry = DEMO_PROJECTS_DATA[demoKey];
  if (!projectEntry || !modalOverlay || !modalTitle || !modalBody) return;

  const project = projectEntry[currentLang] || projectEntry.ur;

  modalTitle.textContent = project.title;

  let featuresHtml = "";
  project.features.forEach((feat) => {
    featuresHtml += `<li><i class="fa-solid fa-check"></i> ${feat}</li>`;
  });

  let techHtml = "";
  project.tech.forEach((t) => {
    techHtml += `<span>${t}</span>`;
  });

  modalBody.innerHTML = `
    ${projectEntry.image ? `
      <div style="width: 100%; height: 210px; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 16px; background: #0A0F1D; border: 1px solid var(--border-color); box-shadow: 0 4px 14px rgba(0,0,0,0.25);">
        <img src="${projectEntry.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
      </div>
    ` : ''}
    <div style="margin-bottom: 16px;">
      <span class="demo-tag" style="display:inline-block; margin-bottom: 8px;">${project.badge}</span>
      <p style="font-size: 0.98rem; color: var(--muted-color); line-height: 1.8;">${project.description}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-color); margin-bottom: 8px;">${currentLang === "ur" ? "نمایاں خصوصیات:" : "Key Capabilities:"}</h4>
      <ul class="modal-demo-features" style="display: flex; flex-direction: column; gap: 8px;">
        ${featuresHtml}
      </ul>
    </div>
    <div>
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-color); margin-bottom: 8px;">${currentLang === "ur" ? "ٹیکنالوجیز:" : "Technologies:"}</h4>
      <div class="tech-tags">
        ${techHtml}
      </div>
    </div>
  `;

  if (modalQuoteBtn) {
    modalQuoteBtn.onclick = () => {
      closeDemoModal();
      selectServiceForQuote(project.category);
    };
  }

  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDemoModal() {
  const modalOverlay = document.getElementById("demoModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function closeCommunityModal() {
  const communityModal = document.getElementById("communityModalOverlay");
  if (communityModal) {
    communityModal.classList.remove("active");
    communityModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function initModalCloseHandlers() {
  const closeDemoBtn = document.getElementById("closeDemoModal");
  const modalSecondaryBtn = document.getElementById("modalSecondaryBtn");
  const demoModalOverlay = document.getElementById("demoModalOverlay");

  if (closeDemoBtn) closeDemoBtn.addEventListener("click", closeDemoModal);
  if (modalSecondaryBtn) modalSecondaryBtn.addEventListener("click", closeDemoModal);
  if (demoModalOverlay) {
    demoModalOverlay.addEventListener("click", (e) => {
      if (e.target === demoModalOverlay) closeDemoModal();
    });
  }

  const closeCommunityBtn = document.getElementById("closeCommunityModal");
  const closeCommunityActionBtn = document.getElementById("closeCommunityBtn");
  const communityModalOverlay = document.getElementById("communityModalOverlay");

  if (closeCommunityBtn) closeCommunityBtn.addEventListener("click", closeCommunityModal);
  if (closeCommunityActionBtn) closeCommunityActionBtn.addEventListener("click", closeCommunityModal);
  if (communityModalOverlay) {
    communityModalOverlay.addEventListener("click", (e) => {
      if (e.target === communityModalOverlay) closeCommunityModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDemoModal();
      closeCommunityModal();
    }
  });
}

// ----------------------------------------------------------------------------
// 17. ACTIVE NAVIGATION INDICATOR ON SCROLL (ScrollSpy)
// ----------------------------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

// ----------------------------------------------------------------------------
// 18. BACK TO TOP BUTTON
// ----------------------------------------------------------------------------
function initBackToTop() {
  const backBtn = document.getElementById("backToTop");
  if (!backBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      backBtn.style.opacity = "1";
      backBtn.style.pointerEvents = "auto";
    } else {
      backBtn.style.opacity = "0.4";
    }
  }, { passive: true });
}

// ----------------------------------------------------------------------------
// 19. TOAST NOTIFICATION UTILITY
// ----------------------------------------------------------------------------
function showToast(message, duration = 3000) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, duration);
}
