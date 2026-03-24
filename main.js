(function(){
const TONES={
  'Professional':'We are pleased to present this proposal outlining our strategic approach to achieving your business objectives.',
  'Bold & Direct':'Here\'s exactly what we\'ll do, and here\'s why it wins.',
  'Warm & Friendly':'We\'re genuinely excited about working together — here\'s how we\'d love to help you grow.',
  'Premium / Luxury':'A curated engagement, crafted to the highest standard of excellence.',
  'Technical & Precise':'The following outlines our methodology, deliverables, and measurable success criteria.',
  'Consultative':'Based on our discovery conversation, we\'ve identified three core opportunities worth addressing.',
};

const PRESETS=[
  {name:'Real Estate Lead Gen',icon:'🏢',industry:'Real Estate & Property Development',cat:'leadgen',
   services:['Property Launch Campaign','Lead Generation (Meta/Google)','Site Visit Funnels','CRM & Lead Nurturing','Virtual Tour Production'],
   tone:'Professional',budget:'₹3L–₹5L',
   challenge:'The client is launching a new premium residential project and needs qualified buyer leads within 90 days.',
   desc:'Perfect for new project launches targeting HNI buyers. Pre-filled with proven lead gen services.'},
  {name:'D2C Performance',icon:'🛍',industry:'E-commerce & D2C Brands',cat:'performance',
   services:['Meta & Google Ads','Email & SMS Retention','Conversion Rate Optimization','Influencer Seeding','D2C Website Design'],
   tone:'Bold & Direct',budget:'₹2L–₹4L/mo',
   challenge:'The brand struggles to scale ROAS beyond 2x and reduce CAC on Meta. Cart abandonment is at 72%.',
   desc:'Aggressive, ROI-first template for D2C brands that want performance results and lower CAC.'},
  {name:'Healthcare Patient Acq.',icon:'🏥',industry:'Healthcare & Medical Services',cat:'leadgen',
   services:['Patient Acquisition Campaign','Google Ads for Clinics','Reputation Management','WhatsApp Health Campaigns','OPD Appointment Funnels'],
   tone:'Warm & Friendly',budget:'₹80K–₹1.5L/mo',
   challenge:'A multi-specialty clinic wants to increase OPD walk-ins by 40% and build trust in a competitive local market.',
   desc:'Empathetic, trust-first approach for clinics and hospitals seeking quality patient acquisition.'},
  {name:'SaaS Demand Gen',icon:'⚙️',industry:'SaaS, AI & Technology Companies',cat:'saas',
   services:['LinkedIn Demand Generation','SEO & Thought Leadership','Webinar & Demo Funnels','Trial-to-Paid Nurture','Case Study Production'],
   tone:'Consultative',budget:'$4K–$8K/mo',
   challenge:'The SaaS product has strong retention but lacks a consistent inbound pipeline. Trial sign-ups are low.',
   desc:'Consultative, content-led template ideal for B2B SaaS brands building pipeline through thought leadership.'},
  {name:'Restaurant Social',icon:'🍽',industry:'Restaurants, Hotels & Hospitality',cat:'hospitality',
   services:['Social Media Management','Food Photography & Reels','Zomato/Swiggy Optimization','Influencer Tastings','Google My Business Setup'],
   tone:'Warm & Friendly',budget:'₹40K–₹80K/mo',
   challenge:'A new restaurant is struggling with footfall and lacks a consistent social presence. Weekend occupancy is under 50%.',
   desc:'Visual-first template to help F&B brands build Instagram presence and drive walk-ins.'},
  {name:'EdTech Admissions',icon:'🎓',industry:'Education, EdTech & Overseas Education',cat:'education',
   services:['Student Lead Generation','WhatsApp Funnel Setup','YouTube & Reel Content','Parent Targeting Ads','Admission Season Campaigns'],
   tone:'Professional',budget:'₹1L–₹2.5L',
   challenge:'The institute needs to fill 200+ seats for the upcoming batch. Past campaigns had high CPL with low conversion.',
   desc:'Structured admissions funnel template for colleges, coaching institutes, and EdTech products.'},
  {name:'FMCG Festive Campaign',icon:'🎁',industry:'Retail & Consumer Goods (FMCG)',cat:'performance',
   services:['Festive Campaign Creative','Trade Marketing','Sampling Campaigns','Regional Language Ads','In-store Activation'],
   tone:'Bold & Direct',budget:'₹5L–₹12L',
   challenge:'The brand needs to capture maximum shelf share and mindshare during the festive quarter.',
   desc:'High-energy festive proposal for FMCG brands targeting both digital and BTL activations.'},
  {name:'Luxury Brand Social',icon:'💎',industry:'Beauty, Skincare & Cosmetics',cat:'social',
   services:['Influencer & UGC Campaigns','Before/After Reels','Nykaa/Amazon Store Management','PR & Media Outreach','Loyalty & Subscription Funnels'],
   tone:'Premium / Luxury',budget:'₹2L–₹3.5L/mo',
   challenge:'A premium skincare brand wants to elevate perceived value and drive conversions from Instagram traffic.',
   desc:'Elevated, editorial-style template for luxury beauty, skincare, and fashion brands.'},
  {name:'QSR Hyperlocal Launch',icon:'🍔',industry:'QSR (Quick Service Restaurants)',cat:'hospitality',
   services:['Outlet Launch Campaign','Hyperlocal Meta Ads','Combo Offer Creatives','Google Maps Optimization','Delivery Platform Ads'],
   tone:'Bold & Direct',budget:'₹60K–₹1.2L',
   challenge:'A new QSR outlet needs strong launch-week footfall and Swiggy/Zomato visibility in a competitive micro-market.',
   desc:'Fast-moving, hyperlocal proposal for QSR outlet launches, franchise rollouts, and delivery-first brands.'},
  {name:'Luxury Hotel Brand & Bookings',icon:'🏨',industry:'Hotels & Luxury Hospitality',cat:'hotels',
   services:['OTA Visibility Strategy','Meta & Google Hotel Ads','Influencer & Press FAM Trips','Instagram & Pinterest Content','Reputation & Review Management','Email to Past Guests','Loyalty Programme Design'],
   tone:'Premium / Luxury',budget:'₹3L–₹6L/mo',
   challenge:'A 5-star property is over-reliant on OTAs, losing 18–22% in commission. Direct bookings are under 30% and social presence does not reflect premium positioning.',
   desc:'For luxury hotels wanting to cut OTA dependency, grow direct bookings, and build an aspirational brand.'},
  {name:'Budget & Business Hotel Launch',icon:'🛎',industry:'Hotels & Hospitality',cat:'hotels',
   services:['Google My Business & Maps SEO','Corporate Travel B2B Outreach','OTA Listing Optimisation','Local SEO & Review Strategy','WhatsApp Booking Funnel','Weekend Offer Creatives','Loyalty Cashback Programme'],
   tone:'Professional',budget:'₹60K–₹1.2L/mo',
   challenge:'A newly opened 3-star business hotel needs to build occupancy from near-zero. Corporate tie-ups are non-existent and OTA rankings are low.',
   desc:'A practical results-first template for budget and business hotels focused on building occupancy fast.'},
  {name:'Auto & EV Dealership Lead Gen',icon:'🚗',industry:'Automobile & EV Dealerships',cat:'automotive',
   services:['Test Drive Lead Campaigns','Google Search Ads (Brand + Model)','Meta Carousel & Video Ads','WhatsApp CRM Funnel','YouTube Pre-Roll Ads','Hyperlocal Geo-Targeting','After-Sales Service Campaigns'],
   tone:'Bold & Direct',budget:'₹1.5L–₹3L/mo',
   challenge:'A multi-brand dealership needs to generate high-intent test drive walk-ins and reduce dependence on walk-in traffic during slow seasons.',
   desc:'Performance-first template for car dealerships targeting in-market buyers through Google, Meta, and WhatsApp funnels.'},
  {name:'Travel & Tourism Package',icon:'✈️',industry:'Travel, Tourism & OTA Platforms',cat:'travel',
   services:['Holiday Package Performance Ads','Destination Reel & Video Content','Google Search + Display','Email & WhatsApp Journey Funnels','Influencer Travel Collaborations','Trip Advisor & OTA Optimization','Seasonal & Festival Campaigns'],
   tone:'Warm & Friendly',budget:'₹1L–₹2.5L/mo',
   challenge:'A travel agency needs to compete with OTA giants by owning niche destination audiences and driving direct bookings through social and search.',
   desc:'Aspirational, storytelling-led template for travel agencies, tour operators, and boutique tourism brands.'},
  {name:'Fitness & Wellness Studio',icon:'💪',industry:'Fitness, Health & Wellness',cat:'wellness',
   services:['Membership Drive Campaigns','Google Maps & Local SEO','Instagram Transformation Content','WhatsApp Lead Qualification Bot','Corporate Wellness B2B Outreach','Referral & Loyalty Programme','Free Trial Funnel Ads'],
   tone:'Bold & Direct',budget:'₹40K–₹90K/mo',
   challenge:'A premium gym / yoga studio has low trial-to-membership conversion and is losing leads to better-marketed competitors in the same locality.',
   desc:'High-energy template for gyms, yoga studios, and wellness brands targeting local lead generation and membership growth.'},
  {name:'Fintech & BFSI Lead Gen',icon:'💳',industry:'Fintech, BFSI & Insurance',cat:'finance',
   services:['Intent-Based Google Search Ads','Content & Thought Leadership','Compliance-Friendly Creative','Loan & Card Comparison Funnels','YouTube Financial Education Content','Email Nurture Sequences','WhatsApp Policy Renewal Campaigns'],
   tone:'Consultative',budget:'₹2L–₹5L/mo',
   challenge:'A fintech brand or insurance company needs to build trust and generate high-quality leads in a heavily regulated, low-trust category.',
   desc:'Consultative, trust-first template for banks, NBFCs, insurers, and fintech startups operating in regulated categories.'},
  {name:'Fashion & Apparel E-Commerce',icon:'👗',industry:'Fashion, Apparel & Lifestyle',cat:'fashion',
   services:['Instagram & Pinterest Shopping Ads','Fashion Reels & UGC Campaigns','Festive & Sale Campaign Strategy','Influencer Seeding & Haul Videos','Email Abandoned Cart Recovery','Size Guide & Fit Content','Myntra / Amazon Brand Store Management'],
   tone:'Premium / Luxury',budget:'₹1.5L–₹3L/mo',
   challenge:'A fashion D2C brand needs to break through on Instagram, reduce returns, and build an emotional brand story that drives repeat purchases.',
   desc:'Visual-first, trend-driven template for fashion, apparel, and lifestyle brands targeting aspirational consumers.'},
  {name:'Wedding & Events Planning',icon:'💍',industry:'Wedding Planning & Events Management',cat:'events',
   services:['Wedding Couple Lead Generation','Bridal Show & Exhibition Ads','Instagram Mood Board Content','Video Testimonial Campaigns','Seasonal Enquiry Drive','Pinterest Destination Wedding Ads','WhatsApp Consultation Funnel'],
   tone:'Warm & Friendly',budget:'₹50K–₹1.2L',
   challenge:'A boutique wedding planning or events company needs to generate pre-qualified enquiries during peak wedding season and compete with larger established players.',
   desc:'Romantic, emotion-led template for wedding planners, event managers, and luxury decor brands.'},
  {name:'B2B Manufacturing & Industrial',icon:'🏭',industry:'Manufacturing, Industrial & B2B Services',cat:'b2b',
   services:['LinkedIn B2B Demand Generation','Export & Import Trade Media','Google Search for Industrial Terms','Case Study & Whitepaper Production','Trade Exhibition Digital Support','Email Account-Based Marketing','Dealer & Distributor Onboarding Ads'],
   tone:'Technical & Precise',budget:'$3K–$7K/mo',
   challenge:'A manufacturing or industrial firm needs to generate qualified B2B enquiries, enter new export markets, and position as a credible player through digital channels.',
   desc:'Methodology-driven, evidence-led template for manufacturers, industrial firms, and B2B service providers targeting enterprise buyers.'},
  {name:'NGO & Social Impact Campaign',icon:'🌱',industry:'NGO, CSR & Social Impact',cat:'social',
   services:['Donor Acquisition Campaigns','Impact Storytelling Content','Grant & CSR Awareness Ads','Volunteer Recruitment Funnels','Annual Report Digital Launch','Social Change Video Campaigns','Email Donor Nurture Series'],
   tone:'Warm & Friendly',budget:'$1K–$3K/mo',
   challenge:'An NGO needs to grow its donor base, increase awareness of its impact, and convert online followers into long-term financial supporters.',
   desc:'Empathetic, purpose-driven template for NGOs, foundations, and social enterprises seeking donors, volunteers, and visibility.'},
];

let SAVED=[
  {name:'BrandQuest FMCG Retainer',icon:'⭐',industry:'Retail & Consumer Goods (FMCG)',
   services:['Trade Marketing','In-store Activation','Performance Creatives','Social Media','Monthly Reporting'],
   tone:'Professional',budget:'₹2.5L/mo',challenge:'Long-term retainer for FMCG clients.',desc:'My standard FMCG retainer template.'},
  {name:'Inside Edge Collab Deck',icon:'🏏',industry:'Entertainment & Media Companies',
   services:['Brand Integration','Sponsored Content','Match-day Reels','Email Newsletter'],
   tone:'Bold & Direct',budget:'Custom',challenge:'Cricket content monetisation and brand partnerships.',desc:'Template for Inside Edge brand collabs.'},
];

let _tab='presets',_cat='all',_q='',_prevTmpl=null,_loaded=null;

function initDashboard(){
  // Read signed-in user from OAuth flow (session-scoped)
  try {
    const u = getSessionData('pc_user') || JSON.parse(sessionStorage.getItem('pc_user') || 'null');
    if(u && u.name){
      const nameEl = document.querySelector('.sb-uname');
      const planEl = document.querySelector('.sb-plan');
      const avEl   = document.querySelector('.sb-av');
      if(nameEl) nameEl.textContent = u.name.split(' ')[0];
      if(planEl) planEl.textContent = u.provider + ' · Growth Plan';
      if(avEl)   avEl.textContent   = u.name[0].toUpperCase();
      const agencyEl = document.getElementById('f-agency');
      if(agencyEl && agencyEl.textContent === 'BrandQuest Solutions') {
        agencyEl.textContent = u.name + "'s Agency";
      }
    }
  } catch(e){}
  if(typeof showSkeletons==='function'){showSkeletons();setTimeout(()=>{buildPresets();buildSaved();},850);}
  updateCreditsWidget();
}

function showSkeletons(){
  document.getElementById('preset-grid').innerHTML=Array(9).fill(0).map(()=>`
    <div class="skel">
      <div class="sk" style="height:22px;width:22px;border-radius:50%;margin-bottom:10px"></div>
      <div class="sk" style="height:13px;width:60%"></div>
      <div class="sk" style="height:9px;width:40%;margin-bottom:10px"></div>
      <div style="display:flex;gap:4px;margin-bottom:10px">
        <div class="sk" style="height:19px;width:64px;border-radius:20px;margin:0"></div>
        <div class="sk" style="height:19px;width:52px;border-radius:20px;margin:0"></div>
      </div>
      <div class="sk" style="height:9px;width:75%;margin-bottom:12px"></div>
      <div class="sk" style="height:30px;width:100%;margin-bottom:0"></div>
    </div>`).join('');
}

function resetDemo(){
  _q=''; document.getElementById('tmpl-search').value='';
  _cat='all';
  document.querySelectorAll('.cat').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.cat')[0].classList.add('on');
  showSkeletons();
  setTimeout(()=>{buildPresets();buildSaved();},850);
}

function buildPresets(){
  const g=document.getElementById('preset-grid');
  const q=_q.toLowerCase();
  const list=PRESETS.filter(t=>{
    if(_cat!=='all'&&t.cat!==_cat) return false;
    if(q&&!t.name.toLowerCase().includes(q)&&!t.industry.toLowerCase().includes(q)&&!t.services.some(s=>s.toLowerCase().includes(q))) return false;
    return true;
  });
  if(!list.length){g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--mu)"><div style="font-size:28px;margin-bottom:10px">🔍</div><div>No templates match your search.</div></div>`;return;}
  g.innerHTML=list.map(t=>buildCard(t,true)).join('');
}

function buildSaved(){
  const g=document.getElementById('saved-grid');
  const q=_q.toLowerCase();
  const list=SAVED.filter(t=>!q||(t.name.toLowerCase().includes(q)||t.industry.toLowerCase().includes(q)));
  g.innerHTML=list.map((t,i)=>buildCard(t,false,i)).join('')+`<div class="add-card" onclick="openSaveModal()"><div class="add-ic">＋</div><div class="add-txt">Save new template</div></div>`;
}

function buildCard(t,isPreset,idx){
  const chips=t.services.slice(0,3).map(s=>`<span class="c-chip">${s}</span>`).join('')+(t.services.length>3?`<span class="c-chip">+${t.services.length-3}</span>`:'');
  const del=isPreset?'':` <button class="c-del" onclick="event.stopPropagation();delSaved(${idx})">✕</button>`;
  
  // Add usage counter for featured templates
  const isFeatured = FEATURED_TEMPLATES.includes(t.name);
  const usageCount = isFeatured ? getTemplateUsageCount(t.name) : 0;
  const usageBadge = isFeatured ? `<div style="position:absolute;bottom:9px;right:9px;font-size:9px;font-weight:700;color:${usageCount >= FEATURED_LIMIT ? 'var(--rust)' : 'var(--grn)'};background:${usageCount >= FEATURED_LIMIT ? '#fef2ee' : 'var(--grn-bg)'};border:1px solid ${usageCount >= FEATURED_LIMIT ? '#f5c4b4' : '#a8dcc0'};border-radius:20px;padding:2px 8px;letter-spacing:.5px}">${usageCount}/${FEATURED_LIMIT}</div>` : '';
  
  return `<div class="card${isPreset?' preset':''}" onclick="openPrev(${esc(t)})">
    ${del}
    ${isPreset?`<span class="c-badge">PRESET</span>`:''}
    ${usageBadge}
    <span class="c-icon">${t.icon||'◻'}</span>
    <div class="c-name">${t.name}</div>
    <div class="c-ind">${t.industry}</div>
    <div class="c-chips">${chips}</div>
    <div class="c-meta"><span>${t.services.length} services</span><div class="c-dot"></div><span>${t.tone}</span>${t.budget?`<div class="c-dot"></div><span>${t.budget}</span>`:''}</div>
    <button class="c-btn" onclick="event.stopPropagation();loadTmpl(${esc(t)},this)">Load Template →</button>
  </div>`;
}
function esc(t){return JSON.stringify(t).replace(/"/g,'&quot;');}

function switchTab(tab){
  _tab=tab;
  document.getElementById('tab-presets').classList.toggle('on',tab==='presets');
  document.getElementById('tab-saved').classList.toggle('on',tab==='saved');
  document.getElementById('panel-presets').style.display=tab==='presets'?'block':'none';
  document.getElementById('panel-saved').style.display=tab==='saved'?'block':'none';
}
function setCat(btn,cat){
  _cat=cat;
  document.querySelectorAll('.cat').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  buildPresets();
}
function filterTmpls(q){_q=q; if(_tab==='presets') buildPresets(); else buildSaved();}

function openPrev(t){
  if(typeof t==='string') t=JSON.parse(t);
  _prevTmpl=t;
  document.getElementById('mp-title').textContent=t.icon+' '+t.name;
  document.getElementById('mp-ind').textContent=t.industry;
  document.getElementById('mp-desc').textContent=t.desc||'';
  document.getElementById('mp-tone').textContent=t.tone;
  document.getElementById('mp-sample').textContent='"'+(TONES[t.tone]||'')+'"';
  document.getElementById('mp-chips').innerHTML=t.services.map(s=>`<span class="side-tag">${s}</span>`).join('');
  document.getElementById('modal-preview').classList.add('open');
}
function closePrev(){document.getElementById('modal-preview').classList.remove('open');}
function loadFromModal(){closePrev();loadTmpl(_prevTmpl,null);}

function loadTmpl(t,btn){
  if(typeof t==='string') t=JSON.parse(t);
  if(btn){btn.innerHTML='<span class="spin"></span> Loading…';btn.disabled=true;}
  setTimeout(()=>{
    _loaded=t;
    nav('generate');
    fillForm(t);
    if(btn){btn.innerHTML='Load Template →';btn.disabled=false;}
  },650);
}

function fillForm(t){
  const go=(id,val,delay)=>setTimeout(()=>{
    const el=document.getElementById(id);
    el.textContent=val||'—';
    el.classList.add('ok');
    setTimeout(()=>el.classList.remove('ok'),700);
  },delay);
  go('f-industry',t.industry,0);
  go('f-tone',t.tone,80);
  go('f-challenge',t.challenge,160);
  go('f-budget',t.budget||'TBD',240);
  setTimeout(()=>{
    const w=document.getElementById('f-tags');
    w.innerHTML='';w.classList.add('ok');
    t.services.forEach((s,i)=>setTimeout(()=>{
      const tag=document.createElement('span');
      tag.className='stag';tag.textContent=s;tag.style.animationDelay=(i*.04)+'s';
      w.appendChild(tag);
    },i*50));
    setTimeout(()=>w.classList.remove('ok'),800);
  },300);
  setTimeout(()=>{
    const sc=Math.min(100,50+(t.services.length*4)+(t.challenge?.length>40?20:10));
    const el=document.getElementById('f-score');
    el.textContent=sc+'/100';
    el.style.color=sc>=75?'var(--grn)':sc>=50?'var(--gold)':'var(--rust)';
    el.classList.add('ok');setTimeout(()=>el.classList.remove('ok'),700);
  },350);
  document.getElementById('loaded-badge-wrap').innerHTML=`<div class="loaded-badge">✓ Loaded: ${t.icon} ${t.name} · ${t.industry}</div>`;
  updateSidePanel(t);
  dbToast('✓ Template loaded — form filled!','success');
}

function updateSidePanel(t){
  document.getElementById('side-content').innerHTML=`
    <div class="side-name">${t.icon} ${t.name}</div>
    <div class="side-ind">${t.industry}</div>
    <div class="side-hr"></div>
    <div class="side-sec-label">Services</div>
    <div class="side-tags">${t.services.map(s=>`<span class="side-tag">${s}</span>`).join('')}</div>
    <div class="side-hr"></div>
    <div class="side-sec-label">Tone</div>
    <div class="side-tone">"${TONES[t.tone]||''}"</div>
    ${t.budget?`<div class="side-hr"></div><div class="side-sec-label">Budget</div><div style="font-size:13px;font-weight:700;color:var(--tx);margin-top:4px">${t.budget}</div>`:''}
    <button class="side-gen-btn" onclick="generateProposal()">✦ Generate Now</button>`;
}

/* ══ FEATURED TEMPLATE LIMITS ══ */
const FEATURED_TEMPLATES = ['Real Estate Lead Gen', 'D2C Performance', 'Healthcare Patient Acq.'];
const FEATURED_LIMIT = 5;

function trackTemplateUsage(templateName){
  const key = getSessionStorageKey('template_usage');
  let usage = {};
  try{ usage = JSON.parse(sessionStorage.getItem(key) || '{}'); }catch(e){}
  usage[templateName] = (usage[templateName] || 0) + 1;
  try{ sessionStorage.setItem(key, JSON.stringify(usage)); }catch(e){}
  return usage[templateName];
}

function getTemplateUsageCount(templateName){
  const key = getSessionStorageKey('template_usage');
  try{ 
    const usage = JSON.parse(sessionStorage.getItem(key) || '{}');
    return usage[templateName] || 0;
  }catch(e){ return 0; }
}

function isFeatureLimitExceeded(templateName){
  return FEATURED_TEMPLATES.includes(templateName) && getTemplateUsageCount(templateName) >= FEATURED_LIMIT;
}

function generateProposal(){
  const t=_loaded;
  const err=document.getElementById('gen-err');
  if(!t){err.textContent='Please load a template first.';err.style.display='block';return;}
  err.style.display='none';
  
  // Check if featured template limit exceeded
  if(isFeatureLimitExceeded(t.name)){
    showUpgradePromptForLimit(t.name);
    return;
  }
  
  if(!useCredit()) return;
  const btn=document.getElementById('gen-btn');
  btn.disabled=true; btn.innerHTML='<span class="spin"></span> Generating…';
  const out=document.getElementById('prop-output');
  const doc=document.getElementById('prop-doc');
  out.style.display='block';
  const steps=['Analysing brief & industry…','Structuring proposal sections…','Writing executive summary…','Building scope & investment…','Finalising document…'];
  doc.innerHTML=`<div class="gen-loading">
    <div class="loading-ring"></div>
    <div style="font-size:13px;color:var(--t3);margin-bottom:18px">Building your proposal</div>
    <div style="max-width:260px;margin:0 auto">${steps.map((s,i)=>`<div class="step" id="st-${i}"><div class="step-dot"></div>${s}</div>`).join('')}</div>
  </div>`;
  out.scrollIntoView({behavior:'smooth',block:'start'});
  steps.forEach((_,i)=>setTimeout(()=>{
    if(i>0) document.getElementById('st-'+(i-1))?.classList.replace('active','done');
    document.getElementById('st-'+i)?.classList.add('active');
  },i*420));
  setTimeout(()=>{
    document.getElementById('st-'+(steps.length-1))?.classList.replace('active','done');
    btn.disabled=false; btn.innerHTML='✦ Generate Proposal';
    // Track featured template usage
    trackTemplateUsage(_loaded.name);
    renderProp(t);
    dbToast('✓ Proposal ready!','success');
  },steps.length*420+300);
}

function gv(id){ const el=document.getElementById(id); return el?(el.value||el.textContent||'').trim():''; }

function showUpgradePromptForLimit(templateName){
  const count = getTemplateUsageCount(templateName);
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);animation:fadeIn .25s ease';
  modal.innerHTML = `
    <div style="background:var(--s1);border:1.5px solid var(--gold-bdr);border-radius:12px;padding:28px;width:100%;max-width:450px;box-shadow:var(--sh-lg);animation:fadeUp .3s ease;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">✦</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;color:var(--tx);margin-bottom:8px">${templateName}</div>
      <div style="font-size:12px;color:var(--t3);line-height:1.7;margin-bottom:20px">
        <span style="color:var(--rust);font-weight:700">${count} of ${FEATURED_LIMIT} free generations used</span><br>You've unlocked the power of this template! Ready to scale?
      </div>
      <div style="background:var(--gold-bg);border:1.5px solid var(--gold-bdr);border-radius:8px;padding:14px;margin-bottom:20px;font-size:12px;color:var(--accent);font-weight:600">
        Unlock unlimited access to all templates + advanced features
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="this.closest('div').remove()" style="flex:1;padding:10px;background:transparent;border:1.5px solid var(--b2);color:var(--t2);border-radius:var(--r);font-family:'Syne',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='var(--b2)';this.style.color='var(--t2)'">Not now</button>
        <button onclick="selectPlan('growth');this.closest('div').remove()" style="flex:1;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:var(--r);font-family:'Syne',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;box-shadow:0 4px 12px rgba(184,135,42,.25)" onmouseover="this.style.background='#a07020';this.style.transform='translateY(-1px)'" onmouseout="this.style.background='var(--accent)';this.style.transform='none'">Upgrade Now →</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if(e.target === modal) modal.remove(); });
}

function buildAuditSection(){
  const channels=[
    {title:'SEO & Organic',items:[['Domain Authority',gv('a-seo-da')],['Monthly Traffic',gv('a-seo-traffic')],['Top Keywords',gv('a-seo-kw')],['Gaps',gv('a-seo-gaps')]]},
    {title:'Meta Ads',items:[['Followers',gv('a-meta-followers')],['Engagement Rate',gv('a-meta-er')],['Monthly Spend',gv('a-meta-spend')],['ROAS / CPL',gv('a-meta-roas')]]},
    {title:'Google Ads',items:[['Monthly Spend',gv('a-gads-spend')],['CTR / CPC',gv('a-gads-ctr')],['Campaigns',gv('a-gads-camps')],['Issues',gv('a-gads-issues')]]},
    {title:'Email & WhatsApp',items:[['List Size',gv('a-email-list')],['Open Rate / CTR',gv('a-email-or')],['Activity',gv('a-email-activity')]]},
    {title:'Website & CRO',items:[['Monthly Visits',gv('a-web-visits')],['Conversion Rate',gv('a-web-cr')],['Gaps',gv('a-web-gaps')]]},
    {title:'Reputation',items:[['Google Rating',gv('a-rep-rating')],['Platforms',gv('a-rep-platforms')],['Notes',gv('a-rep-notes')]]},
  ].filter(ch=>ch.items.some(([,v])=>v));
  const summary=gv('a-summary');
  if(!channels.length&&!summary) return '';
  const cards=channels.map(ch=>`<div class="audit-card">
    <div class="audit-card-title">${ch.title}</div>
    ${ch.items.filter(([,v])=>v).map(([l,v])=>`<div class="audit-metric"><span class="audit-metric-label">${l}</span><span class="audit-metric-val">${v}</span></div>`).join('')}
  </div>`).join('');
  return `<div class="prop-sec">
    <div class="prop-num">DMA</div>
    <div class="prop-title">Digital Marketing Audit</div>
    <div class="prop-div"></div>
    ${summary?`<div class="prop-body-txt" style="margin-bottom:14px">${summary}</div>`:''}
    <div class="audit-grid">${cards}</div>
  </div>`;
}

function buildHistorySection(ag,cli){
  const campaigns=gv('h-campaigns'),results=gv('h-results'),worked=gv('h-worked'),gaps=gv('h-gaps'),relation=gv('h-relation'),goals=gv('h-goals');
  if(!campaigns&&!results&&!worked&&!gaps&&!goals) return '';
  const items=[['Previous Campaigns',campaigns],['Results Achieved',results],['What Worked',worked],['Gaps Identified',gaps],['Relationship',relation],['Goals This Engagement',goals]].filter(([,v])=>v);
  return `<div class="prop-sec">
    <div class="prop-num">CTX</div>
    <div class="prop-title">Past Work & Context</div>
    <div class="prop-div"></div>
    <div class="prop-body-txt" style="margin-bottom:14px">Previous work done for ${cli} and strategic context for this engagement.</div>
    ${items.map(([l,v])=>`<div class="history-item"><div class="history-label">${l}</div><div class="history-val">${v}</div></div>`).join('')}
  </div>`;
}

function renderProp(t){
  const ag='BrandQuest Solutions';
  const cli=(document.getElementById('f-client').textContent.trim()||'Your Client').replace('—','Your Client');
  const today=new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
  const exp=new Date(Date.now()+30*86400000).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
  const secs=[
    {num:'01',title:'Executive Summary',body:`${ag} is pleased to present this proposal to ${cli} for ${t.industry}.\n\nChallenge: ${t.challenge}\n\nWe will deliver measurable results through a focused, outcomes-driven approach tailored specifically to the ${t.industry} sector.`},
    {num:'02',title:'Understanding the Challenge',body:`${cli} is facing: ${t.challenge}\n\nThis directly impacts their ability to compete and grow. Addressing this requires a strategic, data-backed approach tailored to the specific dynamics of ${t.industry}.`},
    {num:'03',title:'Our Proposed Approach',body:`${ag} proposes a structured engagement across ${t.services.length} key service areas, aligned with a ${t.tone} communication style.\n\nEach phase builds measurable momentum with clear KPIs and weekly reporting checkpoints.`,tags:t.services},
    {num:'04',title:'Scope of Work & Deliverables',body:'The following services are included in this engagement:',bullets:t.services},
    {num:'05',title:`Why ${ag}`,body:`${ag} specialises in delivering measurable results for ${t.industry} clients.\n\n✦ Full-service digital marketing & growth agency\n✦ Transparent reporting — weekly dashboards, monthly reviews\n✦ Dedicated account manager from day one${COMPETITORS.length?'\n\nWhere we differ from competitors like '+COMPETITORS.join(', ')+': we combine strategic thinking with execution, delivering measurable ROI — not just activity reports.':''}`,},
    {num:'06',title:'Investment & Engagement',pricing:t.services,total:t.budget||'To be discussed'},
    {num:'07',title:'Next Steps',body:`To move forward, ${cli} should confirm acceptance of this proposal.\n\n${ag} will schedule a kick-off call within 3 business days of sign-off.\n\nPlease sign below or reply with any questions.`},
  ];
  const secsHtml=secs.map(s=>`<div class="prop-sec">
    <div class="prop-num">${s.num}</div>
    <div class="prop-title">${s.title}</div>
    <div class="prop-div"></div>
    ${s.pricing?`<div class="prop-tbl">
      ${s.pricing.map(r=>`<div class="prop-row"><span>${r}</span><span style="color:var(--mu)">Included</span></div>`).join('')}
      <div class="prop-row tot"><span>Total Engagement</span><span>${s.total}</span></div>
    </div>`:`<div class="prop-body-txt">${s.body||''}</div>
    ${s.bullets?`<div class="prop-tags">${s.bullets.map(b=>`<span class="prop-tag">${b}</span>`).join('')}</div>`:''}`}
  </div>`).join('');
  const auditHtml = buildAuditSection();
  const historyHtml = buildHistorySection(ag, cli);
  document.getElementById('prop-doc').innerHTML=`<div class="prop-doc">
    <div class="prop-cover">
      <div class="prop-eye">PROPOSAL</div>
      <div class="prop-h1">Prepared for ${cli}</div>
      <div class="prop-sub">by ${ag} · ${t.industry}</div>
      <div class="prop-meta">
        <div class="prop-meta-item"><label>Client</label><p>${cli}</p></div>
        <div class="prop-meta-item"><label>Industry</label><p>${t.industry}</p></div>
        <div class="prop-meta-item"><label>Budget</label><p>${t.budget||'TBD'}</p></div>
        <div class="prop-meta-item"><label>Date</label><p>${today}</p></div>
      </div>
    </div>
    <div class="prop-body">
      ${historyHtml}${auditHtml}${secsHtml}
      <div class="prop-sig">
        <div class="prop-sig-label">Agreement & Signature</div>
        <div class="prop-sig-row">
          <div class="prop-sig-field"><input placeholder="Client signature…"/><label>Client: ${cli}</label></div>
          <div class="prop-sig-field"><input placeholder="Agency signature…"/><label>Provider: ${ag}</label></div>
        </div>
        <div style="margin-top:14px;font-size:11px;color:var(--mu)">Valid until ${exp}.</div>
      </div>
    </div>
  </div>`;
}

function resetGen(){
  document.getElementById('prop-output').style.display='none';
  document.getElementById('prop-doc').innerHTML='';
  window.scrollTo({top:0,behavior:'smooth'});
}

function confirmLogout(){
  // Show inline logout confirm modal (confirm() is blocked in sandboxed iframes)
  let modal = document.getElementById('logout-modal');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'logout-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:9999;display:flex;align-items:center;justify-content:center;animation:fadeIn .18s ease';
    modal.innerHTML = `
      <div style="background:#fff;border:1.5px solid #ddd8cf;border-radius:10px;padding:28px 28px 22px;max-width:340px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,.12);font-family:'Syne',sans-serif;text-align:center">
        <div style="font-size:28px;margin-bottom:12px">⏻</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;color:#1a1612;margin-bottom:8px">Log out?</div>
        <div style="font-size:12.5px;color:#7a6e62;line-height:1.6;margin-bottom:22px">You'll be returned to the PitchCraft home page.</div>
        <div style="display:flex;gap:10px;justify-content:center">
          <button onclick="doLogout()" style="padding:10px 24px;background:#b8872a;color:#fff;border:none;border-radius:6px;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;cursor:pointer">Yes, log out</button>
          <button onclick="document.getElementById('logout-modal').remove()" style="padding:10px 20px;background:transparent;border:1.5px solid #ddd8cf;color:#4a4238;border-radius:6px;font-family:'Syne',sans-serif;font-size:13px;font-weight:600;cursor:pointer">Cancel</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if(e.target===modal) modal.remove(); });
  }
}

function doLogout(){
  const modal = document.getElementById('logout-modal');
  if(modal) modal.remove();
  try{ 
    sessionStorage.removeItem('pc_user');
    doLogoutUser();
  }catch(e){}
  document.getElementById('page-dashboard').classList.remove('active');
  document.getElementById('page-home').classList.add('active');
  window.scrollTo(0,0);
  showToast('✓ Logged out successfully');
}

function nav(view){
  ['templates','generate','overview','proposals','agency'].forEach(v=>{
    const el=document.getElementById('view-'+v);
    if(el) el.style.display=v===view?'block':'none';
  });
  document.querySelectorAll('.sb-item').forEach(b=>b.classList.remove('on'));
  const si=document.getElementById('sbi-'+view);
  if(si) si.classList.add('on');
  const titles={templates:'Templates',generate:'Generate Proposal',overview:'Overview',proposals:'Proposals',agency:'Agency Profile'};
  document.getElementById('page-title').textContent=titles[view]||view;
  if(!['templates','generate'].includes(view)){
    document.getElementById('view-'+view).innerHTML=`<div style="text-align:center;padding:80px 20px;color:var(--mu)">
      <div style="font-size:32px;margin-bottom:14px">◻</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;color:var(--t2);margin-bottom:8px">${view.charAt(0).toUpperCase()+view.slice(1)}</div>
      <div style="font-size:13px;margin-bottom:18px">This is a templates demo. Head back to explore.</div>
      <button class="btn btn-g btn-sm" onclick="nav('templates')">← Back to Templates</button>
    </div>`;
  }
}

function openSaveModal(){document.getElementById('save-name').value='';document.getElementById('modal-save').classList.add('open');}
function confirmSave(){
  const name=document.getElementById('save-name').value.trim();
  if(!name){dbToast('Please enter a template name');return;}
  SAVED.unshift({name,icon:'⭐',industry:'Custom',services:['Social Media','Performance Marketing','Content Creation'],tone:'Professional',budget:'TBD',challenge:'Custom brief.',desc:'My custom template.'});
  buildSaved();
  document.getElementById('modal-save').classList.remove('open');
  switchTab('saved');
  dbToast('✓ Saved to My Templates','success');
}
function delSaved(i){SAVED.splice(i,1);buildSaved();dbToast('Template deleted');}

let _dtt;
function dbToast(msg,type){
  const el=document.getElementById('toast');
  el.textContent=msg; el.className='toast show'+(type?' '+type:'');
  clearTimeout(_dtt); _dtt=setTimeout(()=>el.className='toast',3000);
}


/* FORM TABS */
function showFormTab(tab, btn){
  ['brief','audit','history'].forEach(t=>{
    document.getElementById('ftab-'+t).style.display = t===tab ? 'block' : 'none';
  });
  document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
}

/* COMPETITORS */
let COMPETITORS = [];

function addCompetitor(){
  const inp = document.getElementById('comp-input');
  const val = inp.value.trim().replace(/,$/,'');
  if(!val) return;
  val.split(',').map(v=>v.trim()).filter(Boolean).forEach(v=>{
    if(!COMPETITORS.includes(v)){ COMPETITORS.push(v); }
  });
  inp.value = '';
  renderCompTags();
  inp.focus();
}

function removeCompetitor(name){
  COMPETITORS = COMPETITORS.filter(c=>c!==name);
  renderCompTags();
}

function renderCompTags(){
  const wrap = document.getElementById('comp-tags');
  if(!wrap) return;
  wrap.innerHTML = COMPETITORS.map(c=>`<span class="comp-tag">${c}<button onclick="removeCompetitor('${c.replace(/'/g,"\'")}')">×</button></span>`).join('');
}

function compKeydown(e){
  if(e.key==='Enter'||e.key===','){ e.preventDefault(); addCompetitor(); }
}

document.getElementById('modal-preview').addEventListener('click',e=>{if(e.target===document.getElementById('modal-preview'))closePrev();});
document.getElementById('modal-save').addEventListener('click',e=>{if(e.target===document.getElementById('modal-save'))document.getElementById('modal-save').classList.remove('open');});


/* ══ CREDITS SYSTEM ══ */
const PLAN_CONFIG = {
  demo:      { total: 5,     name: 'Free Demo',       next: 'starter'    },
  starter:   { total: 20,    name: 'Starter Plan',    next: 'growth'     },
  growth:    { total: 100,   name: 'Growth Plan',     next: 'agency'     },
  agency:    { total: 999,   name: 'Agency Pro',      next: 'enterprise' },
  enterprise:{ total: 99999, name: 'Enterprise',      next: null         },
};

let _currentPlan = 'demo';
let _creditsUsed  = 0;

function getCreditsLeft(){ return PLAN_CONFIG[_currentPlan].total - _creditsUsed; }

function updateCreditsWidget(){
  const plan   = PLAN_CONFIG[_currentPlan];
  const left   = getCreditsLeft();
  const total  = plan.total;
  const pct    = total >= 9999 ? 100 : Math.max(0, Math.round(left / total * 100));
  const widget = document.getElementById('credits-widget');
  const fill   = document.getElementById('credits-fill');
  const leftEl = document.getElementById('credits-left');
  const totEl  = document.getElementById('credits-total');
  const sub    = document.getElementById('credits-sub');
  const btn    = document.getElementById('credits-upgrade-btn');

  if(!widget) return;

  leftEl.textContent = total >= 9999 ? '∞' : left;
  totEl.textContent  = total >= 9999 ? '∞' : total;
  fill.style.width   = pct + '%';
  sub.textContent    = (total >= 9999 ? 'Unlimited credits' : left + ' credits remaining') + ' · ' + plan.name;

  widget.classList.remove('warn','critical');
  if(left <= 0){ widget.classList.add('critical'); }
  else if(pct <= 25){ widget.classList.add('warn'); }

  if(total >= 9999 || !plan.next){
    btn.style.display = 'none';
  } else {
    btn.style.display = 'block';
    btn.textContent = left <= 0 ? '🚨 Out of credits — Upgrade' : '⚡ Upgrade Plan →';
  }
}

function useCredit(){
  const left = getCreditsLeft();
  if(left <= 0){
    showUpgradeModal(true);
    return false;
  }
  _creditsUsed++;
  updateCreditsWidget();
  if(getCreditsLeft() <= Math.floor(PLAN_CONFIG[_currentPlan].total * 0.15)){
    // Auto-show upgrade nudge when 15% left
    setTimeout(()=>showUpgradeModal(false), 1200);
  }
  return true;
}

function showUpgradeModal(isBlocked){
  const modal = document.getElementById('upgrade-modal');
  const icon  = document.getElementById('um-icon');
  const title = document.getElementById('um-title');
  const sub   = document.getElementById('um-sub');
  if(!modal) return;
  if(isBlocked){
    icon.textContent  = '🚨';
    title.textContent = "You've used all your credits";
    sub.textContent   = 'Upgrade your plan to generate more proposals. Your work is saved.';
  } else {
    const left = getCreditsLeft();
    icon.textContent  = '⚡';
    title.textContent = 'Running low on credits';
    sub.textContent   = 'Only ' + left + ' credit' + (left===1?'':'s') + ' left this month. Upgrade now to keep your pipeline flowing.';
  }
  modal.style.display = 'flex';
}

function closeUpgradeModal(){
  const modal = document.getElementById('upgrade-modal');
  if(modal) modal.style.display = 'none';
}

/* ══ UPI PAYMENT ══ */
const PLAN_PRICES = {
  trial:     { price: '99',     monthly: '99',    annual: '99',    label: 'Trial Access (7 Days)', ic: '⚡', desc: 'Full access for 7 days · Cancel anytime', hook: 'Try everything free for 7 days' },
  starter:   { price: '999',    monthly: '999',   annual: '799',   label: 'Starter Plan',   ic: '🟢', desc: '20 pitches/month · 5 templates · PDF export', hook: 'Close 1 extra client → recover 10x your cost' },
  growth:    { price: '2,999',  monthly: '2,999', annual: '2,399', label: 'Growth Plan',    ic: '🔵', desc: '100 pitches/month + AI optimisation + analytics', hook: 'Your full proposal system in one tool' },
  agency:    { price: '7,999',  monthly: '7,999', annual: '6,399', label: 'Agency Pro',     ic: '🟣', desc: 'Unlimited pitches + 5 users + CRM integrations', hook: 'Close more deals without hiring more salespeople' },
  enterprise:{ price: null,     monthly: null,    annual: null,    label: 'Enterprise',     ic: '🔴', desc: 'Custom pitch frameworks + white-label + dedicated AM', hook: 'We don\'t just give you tools — we help you close' },
  credits:   { price: '499',    monthly: '499',   annual: '499',   label: '50 Extra Credits',ic: '⚡', desc: '50 AI pitch credits added to your account', hook: 'Top up your credits anytime' },
};

const UPI_ID = 'pitchcraft@upi';
let _pendingPlan = null;

function handleUpgrade(plan){
  closeUpgradeModal();
  _pendingPlan = plan;
  openUpiModal(plan);
}

function openUpiModal(plan){
  const info = PLAN_PRICES[plan] || PLAN_PRICES.credits;
  const modal = document.getElementById('upi-modal');
  if(!modal) return;
  modal.style.display = 'flex';
  renderUpiBody(info);
}

function closeUpiModal(){
  const modal = document.getElementById('upi-modal');
  if(modal) modal.style.display = 'none';
  _pendingPlan = null;
}

function renderUpiBody(info){
  const body = document.getElementById('upi-body');
  const amt = info.price === 'Custom' ? null : info.price;

  // Generate a simple SVG QR-like placeholder
  const qrSvg = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="display:block">
    <rect width="120" height="120" fill="white"/>
    <!-- QR finder patterns -->
    <rect x="8" y="8" width="30" height="30" rx="3" fill="#1a1612"/>
    <rect x="12" y="12" width="22" height="22" rx="2" fill="white"/>
    <rect x="16" y="16" width="14" height="14" rx="1" fill="#1a1612"/>
    <rect x="82" y="8" width="30" height="30" rx="3" fill="#1a1612"/>
    <rect x="86" y="12" width="22" height="22" rx="2" fill="white"/>
    <rect x="90" y="16" width="14" height="14" rx="1" fill="#1a1612"/>
    <rect x="8" y="82" width="30" height="30" rx="3" fill="#1a1612"/>
    <rect x="12" y="86" width="22" height="22" rx="2" fill="white"/>
    <rect x="16" y="90" width="14" height="14" rx="1" fill="#1a1612"/>
    <!-- Data modules (decorative) -->
    <rect x="46" y="8" width="6" height="6" fill="#b8872a"/>
    <rect x="54" y="8" width="6" height="6" fill="#1a1612"/>
    <rect x="62" y="8" width="6" height="6" fill="#b8872a"/>
    <rect x="70" y="8" width="6" height="6" fill="#1a1612"/>
    <rect x="46" y="16" width="6" height="6" fill="#1a1612"/>
    <rect x="62" y="16" width="6" height="6" fill="#1a1612"/>
    <rect x="70" y="16" width="6" height="6" fill="#b8872a"/>
    <rect x="46" y="24" width="6" height="6" fill="#b8872a"/>
    <rect x="54" y="24" width="6" height="6" fill="#b8872a"/>
    <rect x="62" y="24" width="6" height="6" fill="#1a1612"/>
    <rect x="46" y="46" width="6" height="6" fill="#1a1612"/>
    <rect x="54" y="46" width="6" height="6" fill="#b8872a"/>
    <rect x="62" y="46" width="6" height="6" fill="#1a1612"/>
    <rect x="70" y="46" width="6" height="6" fill="#b8872a"/>
    <rect x="78" y="46" width="6" height="6" fill="#1a1612"/>
    <rect x="86" y="46" width="6" height="6" fill="#b8872a"/>
    <rect x="46" y="54" width="6" height="6" fill="#b8872a"/>
    <rect x="62" y="54" width="6" height="6" fill="#b8872a"/>
    <rect x="78" y="54" width="6" height="6" fill="#1a1612"/>
    <rect x="86" y="54" width="6" height="6" fill="#1a1612"/>
    <rect x="46" y="62" width="6" height="6" fill="#1a1612"/>
    <rect x="54" y="62" width="6" height="6" fill="#b8872a"/>
    <rect x="70" y="62" width="6" height="6" fill="#1a1612"/>
    <rect x="78" y="62" width="6" height="6" fill="#b8872a"/>
    <rect x="46" y="70" width="6" height="6" fill="#b8872a"/>
    <rect x="62" y="70" width="6" height="6" fill="#1a1612"/>
    <rect x="86" y="70" width="6" height="6" fill="#b8872a"/>
    <rect x="46" y="78" width="6" height="6" fill="#1a1612"/>
    <rect x="54" y="78" width="6" height="6" fill="#b8872a"/>
    <rect x="78" y="78" width="6" height="6" fill="#1a1612"/>
    <rect x="86" y="78" width="6" height="6" fill="#b8872a"/>
    <rect x="46" y="86" width="6" height="6" fill="#b8872a"/>
    <rect x="62" y="86" width="6" height="6" fill="#b8872a"/>
    <rect x="70" y="86" width="6" height="6" fill="#1a1612"/>
    <rect x="46" y="94" width="6" height="6" fill="#1a1612"/>
    <rect x="54" y="94" width="6" height="6" fill="#1a1612"/>
    <rect x="78" y="94" width="6" height="6" fill="#b8872a"/>
    <rect x="86" y="94" width="6" height="6" fill="#1a1612"/>
    <rect x="46" y="102" width="6" height="6" fill="#b8872a"/>
    <rect x="70" y="102" width="6" height="6" fill="#b8872a"/>
    <rect x="86" y="102" width="6" height="6" fill="#1a1612"/>
    <!-- UPI logo indicator -->
    <rect x="50" y="50" width="20" height="20" rx="4" fill="#b8872a" opacity=".15"/>
    <text x="60" y="63" text-anchor="middle" font-size="9" font-weight="700" fill="#b8872a" font-family="Arial">UPI</text>
  </svg>`;

  body.innerHTML = `
    <!-- Order Summary -->
    <div class="upi-order">
      <div class="upi-order-left">
        <span class="upi-order-ic">${info.ic}</span>
        <div>
          <div class="upi-order-name">${info.label}</div>
          <div class="upi-order-desc">${info.desc}</div>
        </div>
      </div>
      ${amt ? `<div class="upi-order-amt">&#8377;${amt}<span style="font-size:11px;font-weight:400;color:var(--t3)">/mo</span></div>` : '<div class="upi-order-amt" style="font-size:15px">Custom</div>'}
    </div>

    <!-- QR Code -->
    <div class="upi-qr-wrap">
      <div class="upi-qr-label">Scan with any UPI app</div>
      <div class="upi-qr-box">${qrSvg}</div>
      <div class="upi-qr-id">${UPI_ID}</div>
    </div>

    <!-- UPI Apps -->
    <div class="upi-apps-label">Pay directly via app</div>
    <div class="upi-apps">
      <div class="upi-app-btn" onclick="launchUpiApp('gpay','${amt}')">
        <span class="upi-app-ic">🟡</span>
        <span class="upi-app-name">GPay</span>
      </div>
      <div class="upi-app-btn" onclick="launchUpiApp('phonepe','${amt}')">
        <span class="upi-app-ic">🟣</span>
        <span class="upi-app-name">PhonePe</span>
      </div>
      <div class="upi-app-btn" onclick="launchUpiApp('paytm','${amt}')">
        <span class="upi-app-ic">🔵</span>
        <span class="upi-app-name">Paytm</span>
      </div>
      <div class="upi-app-btn" onclick="launchUpiApp('bhim','${amt}')">
        <span class="upi-app-ic">🇮🇳</span>
        <span class="upi-app-name">BHIM</span>
      </div>
      <div class="upi-app-btn" onclick="launchUpiApp('cred','${amt}')">
        <span class="upi-app-ic">⚫</span>
        <span class="upi-app-name">CRED</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="upi-or">
      <div class="upi-or-line"></div>
      <span class="upi-or-text">or enter UPI ID</span>
      <div class="upi-or-line"></div>
    </div>

    <!-- UPI ID input -->
    <label class="upi-input-label">Your UPI ID</label>
    <div class="upi-input-row">
      <input class="upi-input" id="upi-id-input" placeholder="yourname@upi" oninput="resetUpiVerify()"/>
      <button class="upi-verify-btn" id="upi-verify-btn" onclick="verifyUpiId()">Verify</button>
    </div>
    <div class="upi-vpa-hint" id="upi-vpa-hint">e.g. <b>name@okicici</b>, <b>number@paytm</b>, <b>name@ybl</b></div>

    <!-- Pay button -->
    <button class="upi-pay-btn" id="upi-pay-btn" onclick="processUpiPayment()">
      <span id="upi-pay-btn-text">Pay ₹${amt || '—'}</span>
    </button>
    <div class="upi-secure">🔒 256-bit encrypted · Powered by NPCI UPI</div>
  `;
}

function resetUpiVerify(){
  document.getElementById('upi-vpa-hint').innerHTML = 'e.g. <b>name@okicici</b>, <b>number@paytm</b>, <b>name@ybl</b>';
  document.getElementById('upi-vpa-hint').style.color = '';
}

function verifyUpiId(){
  const val = document.getElementById('upi-id-input').value.trim();
  const hint = document.getElementById('upi-vpa-hint');
  if(!val || !val.includes('@')){
    hint.textContent = '⚠ Enter a valid UPI ID (e.g. name@okicici)';
    hint.style.color = 'var(--rust)';
    return;
  }
  const btn = document.getElementById('upi-verify-btn');
  btn.textContent = '...';
  btn.disabled = true;
  setTimeout(()=>{
    btn.textContent = '✓';
    btn.style.color = 'var(--grn)';
    btn.style.borderColor = 'var(--grn)';
    hint.textContent = '✓ UPI ID verified — ' + val;
    hint.style.color = 'var(--grn)';
  }, 900);
}

function launchUpiApp(app, amt){
  const info = PLAN_PRICES[_pendingPlan] || {};
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=PitchCraft&am=${(amt||'').replace(/,/g,'')}&cu=INR&tn=PitchCraft+${encodeURIComponent(info.label||'Upgrade')}`;
  // Try to open UPI deep link; on desktop this won't work but simulates the flow
  const a = document.createElement('a');
  a.href = upiUrl;
  a.click();
  // After a short delay, show processing (user may come back)
  setTimeout(()=>showUpiProcessing(app), 1500);
}

function processUpiPayment(){
  const upiId = document.getElementById('upi-id-input').value.trim();
  const btn = document.getElementById('upi-pay-btn');
  const btnText = document.getElementById('upi-pay-btn-text');
  if(!upiId){
    const hint = document.getElementById('upi-vpa-hint');
    hint.textContent = '⚠ Please enter your UPI ID first';
    hint.style.color = 'var(--rust)';
    return;
  }
  btn.disabled = true;
  btnText.innerHTML = '<span style="width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;display:inline-block;vertical-align:middle;margin-right:6px"></span>Initiating payment…';
  setTimeout(()=>showUpiProcessing('upi'), 800);
}

function showUpiProcessing(source){
  const body = document.getElementById('upi-body');
  const info = PLAN_PRICES[_pendingPlan] || {};
  body.innerHTML = `<div class="upi-processing">
    <div class="upi-processing-ring"></div>
    <div class="upi-processing-title">Processing payment</div>
    <div class="upi-processing-sub">Waiting for confirmation from your UPI app.<br>Please complete the payment in the app.</div>
    <div style="margin-top:16px;font-size:10.5px;color:var(--mu)">Amount: <b style="color:var(--accent)">₹${(info.price||'').replace(/,/g,'')}</b> · UPI ID: <b>${UPI_ID}</b></div>
  </div>`;
  setTimeout(()=>showUpiSuccess(), 3000);
}

function showUpiSuccess(){
  const info = PLAN_PRICES[_pendingPlan] || {};
  const plan = _pendingPlan;
  const body = document.getElementById('upi-body');
  body.innerHTML = `<div class="upi-success">
    <span class="upi-success-ic">✅</span>
    <div class="upi-success-title">Payment Successful!</div>
    <div class="upi-success-sub">Your plan has been upgraded. Welcome to ${info.label}!</div>
    <div class="upi-success-plan">
      <span class="upi-success-plan-ic">${info.ic}</span>
      <div>
        <div class="upi-success-plan-name">${info.label} — Activated</div>
        <div class="upi-success-plan-desc">${info.desc}</div>
      </div>
    </div>
    <button style="width:100%;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:var(--r);font-family:'Syne',sans-serif;font-size:13px;font-weight:700;cursor:pointer" onclick="completeUpgrade('${plan}')">Start Using PitchCraft →</button>
  </div>`;
  // Hide the back/close header during success
  document.getElementById('upi-back-btn').style.display='none';
}

function completeUpgrade(plan){
  closeUpiModal();
  completeActivation(plan);
}

function completeActivation(plan){
  const info = PLAN_PRICES[plan];
  if(!info) return;
  if(plan === 'credits'){
    _creditsUsed = Math.max(0, _creditsUsed - 50);
  } else if(PLAN_CONFIG[plan]){
    _currentPlan = plan;
    _creditsUsed = 0;
  }
  updateCreditsWidget();
  dbToast('✓ ' + info.label + ' activated!','success');
}

function submitEnterpriseContact(){
  const name  = (document.getElementById('ent-name')||{}).value||'';
  const email = (document.getElementById('ent-email')||{}).value||'';
  const body  = document.getElementById('upi-body');
  if(!email){ return; }
  body.innerHTML = `<div class="upi-success">
    <span class="upi-success-ic">📋</span>
    <div class="upi-success-title">Request Received!</div>
    <div class="upi-success-sub">Our enterprise team will reach out to <b>${email}</b> within 4 hours with a custom quote and demo.</div>
    <div class="upi-success-plan" style="justify-content:center;gap:10px">
      <span class="upi-success-plan-ic">🔴</span>
      <div><div class="upi-success-plan-name">Enterprise — Request Sent</div><div class="upi-success-plan-desc">Dedicated AM · White-label · API · Consulting</div></div>
    </div>
    <button style="width:100%;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:var(--r);font-family:'Syne',sans-serif;font-size:13px;font-weight:700;cursor:pointer" onclick="closeUpiModal()">Back to Dashboard</button>
  </div>`;
}

function handleUpgrade(plan){
  closeUpgradeModal();
  _pendingPlan = plan;
  openUpiModal(plan);
}


// Expose all dashboard functions used in inline onclick handlers globally
window._dbInit         = initDashboard;
window.nav             = nav;
window.loadTmpl        = loadTmpl;
window.openPrev        = openPrev;
window.closePrev       = closePrev;
window.loadFromModal   = loadFromModal;
window.switchTab       = switchTab;
window.setCat          = setCat;
window.filterTmpls     = filterTmpls;
window.openSaveModal   = openSaveModal;
window.confirmSave     = confirmSave;
window.delSaved        = delSaved;
window.generateProposal= generateProposal;
window.resetGen        = resetGen;
window.resetDemo       = resetDemo;
window.showFormTab     = showFormTab;
window.addCompetitor   = addCompetitor;
window.removeCompetitor= removeCompetitor;
window.compKeydown     = compKeydown;
window.togglePw        = togglePw;
window.confirmLogout    = confirmLogout;
window.showUpgradeModal  = showUpgradeModal;
window.closeUpgradeModal = closeUpgradeModal;
window.handleUpgrade     = handleUpgrade;
window.openUpiModal      = openUpiModal;
window.closeUpiModal     = closeUpiModal;
window.launchUpiApp      = launchUpiApp;
window.processUpiPayment = processUpiPayment;
window.verifyUpiId       = verifyUpiId;
window.resetUpiVerify    = resetUpiVerify;
window.completeUpgrade    = completeUpgrade;
window.openSignupPayment  = openSignupPayment;
window.selectPlan         = selectPlan;
window.openPaymentModal   = openPaymentModal;
window.submitEnterpriseContact = submitEnterpriseContact;
window.completeActivation = completeActivation;
window.signupAppPay       = signupAppPay;
window.signupProcessPayment = signupProcessPayment;
window.activateNewAccount = activateNewAccount;
window.useCredit         = useCredit;
window.doLogout           = doLogout;
window.buildAuditSection  = buildAuditSection;
window.buildHistorySection = buildHistorySection;
window.gv                 = gv;
})();
