/* JTRAN Designs — Project Phoenix Build 4.1 */
(function(){
  "use strict";

  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if(toggle && links){
    toggle.addEventListener("click", function(){
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
    }));
  }

  const langToggle = document.querySelector("[data-lang-toggle]");
  const translations = {
    en: {
      "nav.home":"Home","nav.about":"About","nav.services":"Services","nav.portfolio":"Portfolio","nav.payments":"Payments","nav.contact":"Contact",
      "home.eyebrow":"Creative Design • Digital Systems","home.title":"BUILD YOUR <span>BRAND</span> BEYOND THE ORDINARY.",
      "home.intro":"JTRAN Designs creates clear visual identities, practical brand applications and digital experiences designed to connect businesses with people.",
      "home.projects":"VIEW PROJECTS →","home.start":"START A PROJECT","home.phoenix":"Project Phoenix","home.connectTitle":"Design that connects.",
      "home.connectCopy":"From identity systems and physical applications to websites and QR-powered experiences.","home.qr":"OPEN JTRAN QR HUB ↗","home.payments":"PAY WITH TELEBIRR →",
      "home.what":"What we build","home.touchpoints":"ONE BRAND. MULTIPLE TOUCHPOINTS.","home.foundation":"The Phoenix foundation is built around consistency: every visual decision should work across print, digital and real-world applications.",
      "home.identity":"Identity Systems","home.identityCopy":"Logos, typography and visual systems designed to stay recognizable everywhere.",
      "home.practice":"Brand in Practice","home.practiceCopy":"Business materials, apparel, signage and promotional applications with a consistent look.",
      "home.digital":"Connected Experiences","home.digitalCopy":"Web experiences and QR Hub concepts that connect physical branding to useful digital destinations.",
      "home.real":"Real project direction","home.actual":"BUILT AROUND ACTUAL WORK.","home.workCopy":"JTRAN's portfolio is built around real project concepts including JTRAN Garage, Habesha Traditional Kitchen, NRT Machinery, Sunrise Real Estate and the QR Hub.","home.seeWork":"SEE THE WORK →",
      "about.eyebrow":"About JTRAN","about.title":"DESIGN WITH PURPOSE. BUILT FOR CONNECTION.","about.lead":"JTRAN Designs is a creative design practice focused on building visual identities, practical brand systems and digital experiences that work together.","about.copy":"Our approach is not limited to creating a logo. We think about where a brand lives, how people interact with it and how a consistent visual system can move from screen to print and into real-world environments.","about.approach":"Our approach","about.clarity":"CLARITY BEFORE DECORATION.","about.purpose":"Purpose","about.purposeCopy":"Every element should have a reason to exist and support the bigger brand story.","about.consistency":"Consistency","about.consistencyCopy":"A visual identity should remain recognizable across print, digital and physical applications.","about.connection":"Connection","about.connectionCopy":"Good design creates a clearer path between a business, its message and the people it serves.",
      "about.panelTitle":"One identity. Multiple touchpoints.","about.panelCopy":"From branding and promotional applications to websites and QR-powered experiences, JTRAN explores practical ways to connect design with everyday use.",
      "services.eyebrow":"What we do","services.title":"CREATIVE SYSTEMS THAT MOVE BEYOND THE SCREEN.","services.copy":"A focused set of services designed to help businesses build a clear identity and apply it consistently across important touchpoints.","services.brand":"Brand Identity","services.brandCopy":"Logo development, typography, color direction and visual systems that establish a recognizable foundation.","services.apps":"Brand Applications","services.appsCopy":"Business cards, stationery, apparel, packaging, signage and promotional materials that bring the identity into practice.","services.digital":"Digital Design","services.digitalCopy":"Web interfaces, social content and digital touchpoints designed to work alongside the wider visual identity.","services.connected":"Connected Experiences","services.connectedCopy":"QR Hub concepts and practical systems that connect physical brand materials to useful digital destinations.","services.cta":"HAVE A PROJECT IN MIND?","services.ctaCopy":"Start with the problem, the audience and the places your brand needs to work. Then build the right system around them.","services.ctaButton":"START A CONVERSATION →",
      "portfolio.eyebrow":"Selected work","portfolio.title":"ACTUAL PROJECTS. PRACTICAL BRAND SYSTEMS.","portfolio.copy":"A growing selection of JTRAN work across identity, applications, digital design and connected brand experiences.","portfolio.garage":"Automotive identity concept with logo, apparel, vehicle and promotional applications.","portfolio.habesha":"Restaurant identity direction with traditional visual character, menu and apparel applications.","portfolio.nrt":"Industrial identity concept developed for machinery and heavy-equipment communication.","portfolio.sunrise":"Real-estate identity concept focused on trust, opportunity, growth and property marketing.","portfolio.qr":"A connected digital touchpoint linking website, portfolio, contact and other destinations through one dynamic QR experience.","portfolio.view":"VIEW PROJECT →","portfolio.openHub":"OPEN LIVE QR HUB ↗",
      "payments.eyebrow":"Payment Options","payments.title":"PAY JTRAN DESIGNS.","payments.copy":"Choose Telebirr or CBE Mobile Banking and scan the corresponding QR code to make your payment.","payments.telebirrTitle":"PAY WITH TELEBIRR","payments.telebirrNote":"Open Telebirr, scan the QR code, enter the required amount and confirm the payment. Keep your transaction confirmation.","payments.cbeTitle":"PAY WITH CBE","payments.cbeAccount":"Account ending 5898","payments.cbeNote":"Open CBE Mobile Banking, scan the QR code and complete the payment. Keep your transaction confirmation.","payments.note":"Choose Telebirr or CBE Mobile Banking and use the matching QR code to complete your payment.","payments.step1":"Open the payment app.","payments.step2":"Choose the matching QR code and scan it.","payments.step3":"Confirm your payment and keep the receipt.","payments.backHub":"BACK TO JTRAN QR HUB ↗",
      "contact.eyebrow":"Contact","contact.title":"LET'S BUILD SOMETHING USEFUL.","contact.copy":"Tell JTRAN Designs what you need and we'll start from the goal, audience and application.","contact.reach":"Get in touch.","contact.phone":"Phone","contact.location":"Location","contact.name":"Your Name","contact.company":"Company (optional)","contact.need":"What do you need?","contact.message":"Tell us about your project","contact.send":"SEND MESSAGE →"
    },
    am: {
      "nav.home":"መነሻ","nav.about":"ስለ እኛ","nav.services":"አገልግሎቶች","nav.portfolio":"ፖርትፎሊዮ","nav.payments":"ክፍያ","nav.contact":"ያግኙን",
      "home.eyebrow":"የፈጠራ ዲዛይን • ዲጂታል ሲስተሞች","home.title":"ብራንድዎን <span>ከተለመደው</span> በላይ ይገንቡ።",
      "home.intro":"JTRAN Designs ግልጽ የሆኑ የቪዥዋል ኢዴንቲቲዎችን፣ ተግባራዊ የብራንድ አፕሊኬሽኖችን እና ንግዶችን ከሰዎች የሚያገናኙ ዲጂታል ልምዶችን ይፈጥራል።",
      "home.projects":"ፕሮጀክቶችን ይመልከቱ →","home.start":"ፕሮጀክት ይጀምሩ","home.phoenix":"Project Phoenix","home.connectTitle":"የሚያገናኝ ዲዛይን።",
      "home.connectCopy":"ከኢዴንቲቲ ሲስተሞችና ፊዚካል አፕሊኬሽኖች እስከ ድረ-ገጽና QR ልምዶች።","home.qr":"JTRAN QR HUB ይክፈቱ ↗","home.payments":"በቴሌብር ይክፈሉ →",
      "home.what":"የምንገነባው","home.touchpoints":"አንድ ብራንድ። ብዙ የግንኙነት ነጥቦች።","home.foundation":"Phoenix በተከታታይነት ላይ የተመሰረተ ነው፤ እያንዳንዱ የቪዥዋል ውሳኔ በፕሪንት፣ ዲጂታል እና በእውነተኛ አጠቃቀም ላይ መስራት አለበት።",
      "home.identity":"የኢዴንቲቲ ሲስተሞች","home.identityCopy":"በሁሉም ቦታ የሚታወቁ ሎጎዎች፣ ታይፖግራፊ እና የቪዥዋል ሲስተሞች።",
      "home.practice":"ብራንድ በተግባር","home.practiceCopy":"የንግድ ቁሳቁሶች፣ አልባሳት፣ ምልክቶች እና የማስታወቂያ አፕሊኬሽኖች።",
      "home.digital":"የተገናኙ ልምዶች","home.digitalCopy":"ፊዚካል ብራንዲንግን ከጠቃሚ ዲጂታል መዳረሻዎች የሚያገናኙ የድረ-ገጽና QR Hub ልምዶች።",
      "home.real":"እውነተኛ የፕሮጀክት አቅጣጫ","home.actual":"በእውነተኛ ስራ ላይ የተመሰረተ።","home.workCopy":"የJTRAN ፖርትፎሊዮ  JTRAN Garage፣ Habesha Traditional Kitchen፣ NRT Machinery፣ Sunrise Real Estate እና QR Hubን ያካትታል።","home.seeWork":"ስራዎቹን ይመልከቱ →",
      "about.eyebrow":"ስለ JTRAN","about.title":"በዓላማ ዲዛይን። ለግንኙነት የተገነባ።","about.lead":"JTRAN Designs የቪዥዋል ኢዴንቲቲ፣ ተግባራዊ የብራንድ ሲስተሞች እና አብረው የሚሰሩ ዲጂታል ልምዶችን የሚያተኩር የፈጠራ ዲዛይን ስራ ነው።","about.copy":"አቀራረባችን ሎጎ መፍጠር ብቻ አይደለም። ብራንድ የት እንደሚኖር፣ ሰዎች እንዴት እንደሚጠቀሙበት እና የተከታታይ የቪዥዋል ሲስተም ከስክሪን ወደ ፕሪንት እና ወደ እውነተኛ አካባቢ እንዴት እንደሚሄድ እናስባለን።","about.approach":"አቀራረባችን","about.clarity":"ከማስዋብ በፊት ግልጽነት።","about.purpose":"ዓላማ","about.purposeCopy":"እያንዳንዱ ነገር ምክንያት እና ለትልቁ የብራንድ ታሪክ አስተዋፅኦ ሊኖረው ይገባል።","about.consistency":"ተከታታይነት","about.consistencyCopy":"የቪዥዋል ኢዴንቲቲ በፕሪንት፣ ዲጂታል እና ፊዚካል አፕሊኬሽኖች ሁሉ መታወቅ አለበት።","about.connection":"ግንኙነት","about.connectionCopy":"ጥሩ ዲዛይን በንግድ፣ በመልዕክቱ እና በሚያገለግላቸው ሰዎች መካከል ግልጽ መንገድ ይፈጥራል።","about.panelTitle":"አንድ ኢዴንቲቲ። ብዙ የግንኙነት ነጥቦች።","about.panelCopy":"ከብራንዲንግ እና ፕሮሞሽናል አፕሊኬሽኖች እስከ ድረ-ገጽ እና QR ልምዶች፣ JTRAN ዲዛይንን ከዕለታዊ አጠቃቀም ጋር ለማገናኘት ተግባራዊ መንገዶችን ይመረምራል።",
      "services.eyebrow":"የምናደርገው","services.title":"ከስክሪን በላይ የሚሄዱ የፈጠራ ሲስተሞች።","services.copy":"ንግዶች ግልጽ ኢዴንቲቲ እንዲገነቡ እና በጠቃሚ የግንኙነት ነጥቦች ላይ በተከታታይ እንዲተገብሩት የተዘጋጁ አገልግሎቶች።","services.brand":"የብራንድ ኢዴንቲቲ","services.brandCopy":"ሎጎ፣ ታይፖግራፊ፣ የቀለም አቅጣጫ እና የቪዥዋል ሲስተሞች።","services.apps":"የብራንድ አፕሊኬሽኖች","services.appsCopy":"የንግድ ካርድ፣ ስቴሽነሪ፣ አልባሳት፣ ፓኬጂንግ፣ ምልክት እና ፕሮሞሽናል ቁሳቁሶች።","services.digital":"ዲጂታል ዲዛይን","services.digitalCopy":"የድረ-ገጽ ኢንተርፌስ፣ ሶሻል ኮንቴንት እና ዲጂታል የግንኙነት ነጥቦች።","services.connected":"የተገናኙ ልምዶች","services.connectedCopy":"ፊዚካል ብራንድ ቁሳቁሶችን ከጠቃሚ ዲጂታል መዳረሻዎች የሚያገናኙ QR Hub ሲስተሞች።","services.cta":"ፕሮጀክት አለዎት?","services.ctaCopy":"በችግኙ፣ በታዳሚው እና ብራንድዎ መስራት በሚፈልግባቸው ቦታዎች ይጀምሩ። ከዚያ ተገቢውን ሲስተም ይገንቡ።","services.ctaButton":"ውይይት እንጀምር →",
      "portfolio.eyebrow":"የተመረጡ ስራዎች","portfolio.title":"እውነተኛ ፕሮጀክቶች። ተግባራዊ የብራንድ ሲስተሞች።","portfolio.copy":"የJTRAN ስራዎች በኢዴንቲቲ፣ አፕሊኬሽኖች፣ ዲጂታል ዲዛይን እና የተገናኙ የብራንድ ልምዶች ዙሪያ።","portfolio.garage":"ሎጎ፣ አልባሳት፣ ተሽከርካሪ እና ፕሮሞሽናል አፕሊኬሽኖች ያሉት የአውቶሞቲቭ ኢዴንቲቲ ኮንሰፕት።","portfolio.habesha":"ባህላዊ የቪዥዋል ባህሪ፣ ሜኑ እና አልባሳት አፕሊኬሽኖች ያሉት የሬስቶራንት ኢዴንቲቲ።","portfolio.nrt":"ለማሽነሪ እና ከባድ መሳሪያ ግንኙነት የተዘጋጀ የኢንዱስትሪ ኢዴንቲቲ ኮንሰፕት።","portfolio.sunrise":"በእምነት፣ ዕድል፣ እድገት እና የንብረት ማርኬቲንግ ላይ የተመሰረተ የሪል እስቴት ኢዴንቲቲ።","portfolio.qr":"ድረ-ገጽ፣ ፖርትፎሊዮ፣ ኮንታክት እና ሌሎች መዳረሻዎችን በአንድ ዳይናሚክ QR ልምድ የሚያገናኝ ዲጂታል መዳረሻ።","portfolio.view":"ፕሮጀክቱን ይመልከቱ →","portfolio.openHub":"LIVE QR HUB ይክፈቱ ↗",
      "payments.eyebrow":"የክፍያ አማራጮች","payments.title":"ለ JTRAN DESIGNS ይክፈሉ።","payments.copy":"ቴሌብር ወይም CBE Mobile Banking ይምረጡ እና ተመሳሳዩን QR ኮድ ስካን በማድረግ ክፍያዎን ይፈጽሙ።","payments.telebirrTitle":"በቴሌብር ይክፈሉ","payments.telebirrNote":"ቴሌብርን ይክፈቱ፣ QR ኮዱን ስካን ያድርጉ፣ የሚፈለገውን መጠን ያስገቡ እና ክፍያውን ያረጋግጡ። የክፍያ ማረጋገጫዎን ይጠብቁ።","payments.cbeTitle":"በ CBE ይክፈሉ","payments.cbeAccount":"መለያው በ 5898 ያበቃል","payments.cbeNote":"CBE Mobile Banking ይክፈቱ፣ QR ኮዱን ስካን ያድርጉ እና ክፍያውን ይፈጽሙ። የክፍያ ማረጋገጫዎን ይጠብቁ።","payments.note":"ቴሌብር ወይም CBE Mobile Banking ይምረጡ እና ተመሳሳዩን QR ኮድ በመጠቀም ክፍያዎን ይፈጽሙ።","payments.step1":"የክፍያ መተግበሪያውን ይክፈቱ።","payments.step2":"ተመሳሳዩን QR ኮድ ይምረጡ እና ስካን ያድርጉ።","payments.step3":"ክፍያዎን ያረጋግጡ እና ደረሰኙን ይጠብቁ።","payments.backHub":"ወደ JTRAN QR HUB ተመለስ ↗",
      "contact.eyebrow":"ያግኙን","contact.title":"ጠቃሚ ነገር እንገንባ።","contact.copy":"ምን እንደሚፈልጉ ለJTRAN Designs ይንገሩን። ከዓላማ፣ ታዳሚ እና አጠቃቀም እንጀምራለን።","contact.reach":"ያግኙን።","contact.phone":"ስልክ","contact.location":"አድራሻ","contact.name":"ስምዎ","contact.company":"ድርጅት (አማራጭ)","contact.need":"ምን ያስፈልግዎታል?","contact.message":"ስለ ፕሮጀክትዎ ይንገሩን","contact.send":"መልዕክት ላክ →"
    }
  };

  function applyLanguage(lang){
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === "am" ? "am" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    if(langToggle) langToggle.textContent = lang === "am" ? "EN" : "አማ";
    localStorage.setItem("jtran-language", lang);
  }

  const saved = localStorage.getItem("jtran-language") || "en";
  applyLanguage(saved);
  if(langToggle){
    langToggle.addEventListener("click", () => {
      applyLanguage((localStorage.getItem("jtran-language") || "en") === "en" ? "am" : "en");
    });
  }
})();
