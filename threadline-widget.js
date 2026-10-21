(() => {
  const root = document.getElementById('threadline-passport-widget');
  if (!root || root.dataset.ready === 'true') return;
  root.dataset.ready = 'true';

  const product = root.dataset.productName || 'This garment';
  const brand = root.dataset.brandName || 'the designer';
  const enquiryUrl = root.dataset.threadlineUrl || 'https://joygraham.github.io/threadline-passport/threadline-enquiry.html';

  const segments = [
    {
      title: 'Garment anatomy',
      note: 'The form, construction and details',
      body: 'Explore the garment’s silhouette, construction, design details and the choices that shape how it is worn. A live passport would be populated with product-specific details approved by the brand.'
    },
    {
      title: 'Meaning & cultural context',
      note: 'References, meaning and context',
      body: 'Understand the cultural references connected to this piece, why they matter and how the designer interprets them. Cultural context should be specific, sourced where possible and reviewed with appropriate care.'
    },
    {
      title: 'Materials & techniques',
      note: 'What it is made from and how',
      body: 'Discover verified material composition, textile origin where known, surface techniques, print or weave details and other material decisions behind the garment.'
    },
    {
      title: 'Making & craftsmanship',
      note: 'The people, skills and process',
      body: 'Learn about construction methods, specialist skills, craft processes, production location and maker contributions, where the information has been supplied and approved.'
    },
    {
      title: 'Provenance & authorship',
      note: 'Attribution, evidence and credits',
      body: 'See who designed the piece, how creative contributions are credited and what records support the story. Evidence links and verification status can be added to a production passport.'
    }
  ];

  const style = document.createElement('style');
  style.textContent = `
    #threadline-passport-widget{font-family:Arial,Helvetica,sans-serif;color:#28251f;margin:26px 0}
    #threadline-passport-widget *{box-sizing:border-box}
    .tl-teaser{border:1px solid #ded6cb;background:#fbf9f5;padding:16px;display:flex;align-items:center;gap:13px}
    .tl-monogram{height:39px;width:39px;flex:0 0 39px;display:flex;align-items:center;justify-content:center;background:#302820;color:#f8f4ed;font:normal 20px Georgia,serif;letter-spacing:-2px}
    .tl-teaser-main{flex:1;min-width:0}
    .tl-label{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#a65d45;font-weight:bold;margin-bottom:6px}
    .tl-title{font:normal 19px Georgia,serif;margin:0 0 5px}
    .tl-caption{font-size:11px;color:#71695f;line-height:1.6;margin:0}
    .tl-open{border:1px solid #302820;background:transparent;color:#302820;padding:12px 13px;font-size:9px;font-weight:bold;letter-spacing:1px;cursor:pointer;white-space:nowrap}
    .tl-open:hover{background:#302820;color:#fff}
    .tl-open:focus-visible,.tl-close:focus-visible,.tl-segment summary:focus-visible,.tl-enquire:focus-visible{outline:3px solid #a65d45;outline-offset:3px}
    .tl-backdrop{position:fixed;inset:0;background:rgba(26,23,20,.48);z-index:2147483000;display:flex;justify-content:flex-end}
    .tl-backdrop[hidden]{display:none}
    .tl-drawer{background:#fbf9f5;width:min(490px,100%);height:100%;overflow-y:auto;box-shadow:-15px 0 45px rgba(0,0,0,.14);padding:25px 25px 30px;animation:tl-enter .2s ease-out}
    @keyframes tl-enter{from{transform:translateX(20px);opacity:.65}to{transform:translateX(0);opacity:1}}
    .tl-drawer-head{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ded6cb;padding-bottom:17px;gap:15px}
    .tl-lockup{font:normal 18px Georgia,serif;letter-spacing:2px}
    .tl-close{border:1px solid #ded6cb;background:transparent;width:38px;height:38px;font-size:22px;cursor:pointer;color:#28251f}
    .tl-overline{color:#a65d45;font-size:9px;font-weight:bold;letter-spacing:1.6px;text-transform:uppercase;margin:24px 0 10px}
    .tl-drawer h2{font:normal 34px/1.06 Georgia,serif;margin:0 0 10px}
    .tl-intro{font-size:12px;line-height:1.8;color:#71695f;margin:0 0 23px}
    .tl-segment{border-top:1px solid #ded6cb}
    .tl-segment:last-of-type{border-bottom:1px solid #ded6cb}
    .tl-segment summary{list-style:none;cursor:pointer;padding:16px 0;display:grid;grid-template-columns:28px 1fr 20px;gap:7px;align-items:center}
    .tl-segment summary::-webkit-details-marker{display:none}
    .tl-num{font-size:9px;letter-spacing:1px;color:#a65d45}
    .tl-segment-title{font:normal 17px Georgia,serif;display:block}
    .tl-segment-note{display:block;font-size:10px;color:#71695f;margin-top:4px}
    .tl-plus{font-size:17px;text-align:right;color:#a65d45}
    .tl-segment[open] .tl-plus{transform:rotate(45deg)}
    .tl-segment-body{font-size:12px;line-height:1.8;color:#71695f;padding:0 18px 17px 35px}
    .tl-demo{background:#efe7dc;padding:11px 13px;font-size:10px;line-height:1.6;color:#5e554b;margin:20px 0}
    .tl-enquire{display:block;width:100%;text-align:center;text-decoration:none;background:#302820;color:white;padding:16px 12px;margin-top:18px;font-size:10px;letter-spacing:1.4px;font-weight:bold}
    .tl-enquire:hover{background:#a65d45}
    .tl-powered{text-align:center;font-size:9px;letter-spacing:1px;color:#71695f;margin-top:13px;text-transform:uppercase}
    @media(max-width:540px){.tl-teaser{align-items:flex-start;flex-wrap:wrap}.tl-teaser-main{min-width:calc(100% - 60px);padding-top:2px}.tl-open{width:100%}.tl-drawer{padding:18px 18px 25px}.tl-drawer h2{font-size:30px}}
    @media(prefers-reduced-motion:reduce){.tl-drawer{animation:none}}
  `;
  document.head.appendChild(style);

  root.innerHTML = `
    <section class="tl-teaser" aria-label="Threadline Cultural Provenance Passport">
      <div class="tl-monogram" aria-hidden="true">T<span style="color:#d6a18a">C</span></div>
      <div class="tl-teaser-main">
        <div class="tl-label">Threadline Cultural Provenance Passport</div>
        <p class="tl-title">There’s more to this garment.</p>
        <p class="tl-caption">Explore the meaning, materials, making and people behind it.</p>
      </div>
      <button type="button" class="tl-open" aria-haspopup="dialog">EXPLORE PASSPORT ↗</button>
    </section>
    <div class="tl-backdrop" hidden>
      <section class="tl-drawer" role="dialog" aria-modal="true" aria-label="Cultural Provenance Passport">
        <div class="tl-drawer-head"><div class="tl-lockup">THREADLINE <span style="color:#a65d45">/</span> PASSPORT</div><button type="button" class="tl-close" aria-label="Close passport">×</button></div>
        <div class="tl-overline">A closer look at the garment</div>
        <h2>${escapeText(product)}</h2>
        <p class="tl-intro">Five lenses into the story behind this piece, shared by ${escapeText(brand)}. Open a section to explore.</p>
        <div class="tl-segments">${segments.map((s,i)=>`
          <details class="tl-segment">
            <summary><span class="tl-num">0${i+1}</span><span><span class="tl-segment-title">${s.title}</span><span class="tl-segment-note">${s.note}</span></span><span class="tl-plus" aria-hidden="true">+</span></summary>
            <div class="tl-segment-body">${s.body}</div>
          </details>`).join('')}</div>
        <div class="tl-demo">PROTOTYPE CONTENT · These are example descriptions, not verified claims about this sample garment. Live content should be supplied or approved by the designer, with evidence attached where available.</div>
        <a class="tl-enquire" href="${escapeAttribute(enquiryUrl)}">NEED DEEPER PROVENANCE SUPPORT? ↗</a>
        <div class="tl-powered">Further enquiries handled by Threadline Collective</div>
      </section>
    </div>
  `;

  const openButton = root.querySelector('.tl-open');
  const backdrop = root.querySelector('.tl-backdrop');
  const closeButton = root.querySelector('.tl-close');
  let lastFocus = null;
  function openDrawer() {
    lastFocus = document.activeElement;
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }
  function closeDrawer() {
    backdrop.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  openButton.addEventListener('click', openDrawer);
  closeButton.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', e => { if(e.target === backdrop) closeDrawer(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && !backdrop.hidden) closeDrawer(); });
  function escapeText(str) {
    return String(str).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }
  function escapeAttribute(str) {
    return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
})();
