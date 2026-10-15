
(function(){
 'use strict';
 const root=document.documentElement;
 const body=document.body;
 const languageButtons=Array.from(document.querySelectorAll('.lang-btn'));
 const forms=Array.from(document.querySelectorAll('form'));
 const details=Array.from(document.querySelectorAll('details'));
 const compactLayout=window.matchMedia('(max-width:980px)');
 const tocDisclosure=document.querySelector('.toc-disclosure');
 function adaptContents(){tocDisclosure.open=!compactLayout.matches;}
 adaptContents();compactLayout.addEventListener('change',adaptContents);
 const validLanguage=value=>value==='fa'||value==='en';
 function stored(key){try{return localStorage.getItem(key);}catch(error){return null;}}
 function applyLanguage(language){
  const selected=validLanguage(language)?language:'fa';
  for(const node of [root,body]){
   node.lang=selected;node.dir=selected==='fa'?'rtl':'ltr';
   node.classList.toggle('lang-fa',selected==='fa');node.classList.toggle('lang-en',selected==='en');
  }
  languageButtons.forEach(button=>{
   const active=button.dataset.lang===selected;
   button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
  document.querySelectorAll('.form-status').forEach(status=>{status.textContent='';});
  document.querySelectorAll('.citation').forEach(link=>{
   const number=link.getAttribute('href').replace('#ref-','');
   link.setAttribute('aria-label',selected==='fa'?'منبع '+number:'Reference '+number);
  });
  try{localStorage.setItem('therapy-guidance-lang',selected);}catch(error){/* Language remains usable without storage. */}
  schedulePositionUpdate();
 }
 function syncPrintAnswers(){
  document.querySelectorAll('textarea').forEach(field=>{
   const mirror=field.nextElementSibling;
   if(mirror&&mirror.classList.contains('print-answer')){mirror.textContent=field.value;mirror.dir='auto';}
  });
 }
 languageButtons.forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.lang)));
 forms.forEach(form=>{
  form.addEventListener('submit',event=>event.preventDefault());
  form.addEventListener('input',()=>{
   const status=form.querySelector('.form-status');if(status)status.textContent='';syncPrintAnswers();
  });
  form.addEventListener('reset',()=>{
   requestAnimationFrame(()=>{
    syncPrintAnswers();
    const status=form.querySelector('.form-status');
    if(status)status.textContent=body.lang==='fa'?'پاسخ‌های این کاربرگ پاک شدند.':'This worksheet’s answers were cleared.';
   });
  });
 });
 let closedBeforePrint=null;
 function preparePrint(){
  if(closedBeforePrint===null)closedBeforePrint=details.filter(detail=>!detail.open);
  syncPrintAnswers();details.forEach(detail=>{detail.open=true;});body.classList.add('print-ready');
 }
 function restoreAfterPrint(){
  if(closedBeforePrint!==null)closedBeforePrint.forEach(detail=>{detail.open=false;});
  closedBeforePrint=null;body.classList.remove('print-ready');schedulePositionUpdate();
 }
 window.addEventListener('beforeprint',preparePrint);
 window.addEventListener('afterprint',restoreAfterPrint);
 document.querySelectorAll('.print-btn').forEach(button=>button.addEventListener('click',()=>window.print()));
 const sections=Array.from(document.querySelectorAll('main section[id]'));
 const tocLinks=Array.from(document.querySelectorAll('.toc-list a'));
 let scheduled=0;
 function updatePosition(){
  scheduled=0;let current=sections[0];
  sections.forEach(section=>{if(section.getBoundingClientRect().top<=Math.max(120,innerHeight*.25))current=section;});
  if(window.scrollY+innerHeight>=root.scrollHeight-3)current=sections[sections.length-1];
  tocLinks.forEach(link=>{
   if(current&&link.hash==='#'+current.id)link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  });
 }
 function schedulePositionUpdate(){if(!scheduled)scheduled=requestAnimationFrame(updatePosition);}
 window.addEventListener('scroll',schedulePositionUpdate,{passive:true});
 window.addEventListener('resize',schedulePositionUpdate);
 details.forEach(detail=>detail.addEventListener('toggle',schedulePositionUpdate));
 const preference=stored('therapy-guidance-lang');
 const legacy=stored('subjugation-lang');
 applyLanguage(validLanguage(preference)?preference:validLanguage(legacy)?legacy:'fa');
 syncPrintAnswers();
}());
