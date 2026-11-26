import {useEffect,useLayoutEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Scene from './Scene.jsx'
import imgVigilant from './assets/projects/vigilant-fintech.webp'
import imgVector from './assets/projects/vectorspend.webp'
import imgDiy from './assets/projects/diy-prefab.webp'
import imgJsr from './assets/projects/jsr-om-jewels.webp'
gsap.registerPlugin(ScrollTrigger)

const PHONE='+91 9660633043',WA='https://wa.me/919660633043',MAIL='dishikadoshi2930@gmail.com',LI='https://www.linkedin.com/in/dishikadoshi/'
const SUBJECT='Project enquiry',MAILTO='mailto:'+MAIL+'?subject='+encodeURIComponent(SUBJECT),GMAIL='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(MAIL)+'&su='+encodeURIComponent(SUBJECT)
const isMobile=()=>typeof navigator!=='undefined'&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1))
// phones/tablets: normal mailto (opens Gmail or the default mail app); desktop: Gmail compose in a new tab
const openMail=e=>{if(!isMobile()){e.preventDefault();window.open(GMAIL,'_blank','noopener,noreferrer')}}
const manifesto="I design and build web products that feel effortless to use and are engineered to last. Clean architecture, considered interfaces and performance that holds up under real traffic."
const IC={code:'M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14',layers:'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',server:'M4 5h16v5H4zM4 14h16v5H4zM8 7.5h.01M8 16.5h.01',cloud:'M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18H7z',gauge:'M4 18a8 8 0 1116 0M12 18l4-6',arrow:'M7 17L17 7M8 7h9v9',plus:'M12 5v14M5 12h14'}
const Icon=({n})=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={IC[n]}/></svg>
const services=[['Full stack development','React, Next.js and Node.js, built on clean architecture with test coverage.','code',['React','Next.js','Node.js','Testing']],
 ['Interface engineering','Accessible components, precise motion and design systems that scale across teams.','layers',['Accessibility','Motion','Design systems']],
 ['APIs and backend systems','REST and GraphQL services, database design, authentication and integrations.','server',['REST','GraphQL','PostgreSQL','Authentication']],
 ['Cloud and DevOps','CI/CD, containers and deployments on GCP, automated and monitored.','cloud',['CI/CD','Docker','GCP']],
 ['Performance','Core Web Vitals, bundle analysis and query tuning for existing products.','gauge',['Core Web Vitals','Bundle analysis','Query tuning']]]
const pillars=[['Clean architecture','Code organised so the product stays easy to change as it grows.'],['Considered interfaces','Accessible, precise and quiet, so the product feels effortless to use.'],['Performance under traffic','Fast pages and queries that keep holding up with real users.']]
const projects=[['Vigilant Fintech','Remote business support','A business site for a remote support firm covering admin, customer care, marketing, e-commerce and bookkeeping.','React · Three.js · Node.js · PostgreSQL','M0 90 C60 85 90 40 150 55 S250 20 320 10','#8fa8ff','https://vigilantfintech.com/',imgVigilant],
 ['VectorSpend','Cost intelligence','A consulting site with an admin dashboard, helping businesses cut costs through data-driven insights.','React · Three.js · Node.js · PostgreSQL','M0 70 C50 20 100 90 160 50 S260 80 320 30','#7fd6c2','https://www.vectorspend.com/',imgVector],
 ['DIY PreFab','Steel construction','A site for pre-engineered steel buildings, warehouses and factories across India, with scroll-driven 3D and smooth motion.','React · Three.js · Node.js · PostgreSQL · GSAP · Lenis','M0 80 L60 60 L110 75 L170 30 L230 45 L320 15','#d6a8ff','https://www.diyprefab.com/',imgDiy],
 ['JSR OM Jewels','Headless e-commerce, in progress','An ongoing headless jewellery storefront, with Shopify handling products, checkout and payments.','Next.js · Shopify','M0 95 C80 90 120 60 180 40 S280 30 320 5','#ffc68a','https://jsromjewels.vercel.app/',imgJsr]]
const steps=[['Discovery','Goals, users and constraints first. Success metrics are agreed before any code is written.'],
 ['Design and architecture','Wireframes and system design, with each decision documented.'],
 ['Build and iterate','Short sprints with weekly demos so feedback lands early.'],
 ['Launch and support','Zero-downtime deploys, monitoring and 30 days of support after launch.']]
const skills=['React','Next.js','TypeScript','Node.js','PostgreSQL','Redis','GraphQL','Docker','GCP','Figma','Three.js']
const links=['About','Services','Work','Process'],ids=['about','services','work','process','contact']
const Eyebrow=({n,t})=><span className="eyebrow"><b>{n}</b>{t}</span>
const spot=e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',e.clientX-r.left+'px');e.currentTarget.style.setProperty('--my',e.clientY-r.top+'px')}
const Deco=({k,s,x,z,style})=><span className="dc" data-speed={s} data-xspeed={x} style={{...style,'--z':z}} aria-hidden="true"><i className={k}/></span>
function Services(){
  const [open,setOpen]=useState(0)
  useEffect(()=>{if(!matchMedia('(max-width:900px)').matches)return;const id=setTimeout(()=>ScrollTrigger.refresh(),800);return()=>clearTimeout(id)},[open])
  return <section id="services" className="wrap sv-sec" data-mouse>
    <div className="decos"><Deco k="orb" s=".5" z="340px" style={{right:'-8%',top:'8%'}}/><Deco k="ring" s="-.8" z="120px" style={{right:'7%',top:'3%'}}/><Deco k="dot" s="-1.2" style={{right:'22%',top:'26%'}}/><Deco k="plus" s=".9" style={{left:'1.5%',top:'30%'}}/><Deco k="dia" s="-.6" style={{left:'46%',bottom:'6%'}}/><Deco k="ring2" s=".7" z="70px" style={{left:'6%',bottom:'4%'}}/></div>
    <div className="sv-head"><div><Eyebrow n="02" t="Services"/><h2 className="ml"><span><i>What I can <em>build</em></i></span><span><i>for your team.</i></span></h2></div>
      <p>Five areas I work in, from a single feature to a whole platform.</p></div>
    <ul className="sv-list">{services.map(([t,d,ic,tg],i)=><li key={t} className={'svr'+(open===i?' open':'')} onMouseEnter={()=>setOpen(i)} onMouseMove={spot}>
      <span className="ln"/><span className="bar"/>
      <button type="button" className="svr-h" aria-expanded={open===i} onClick={()=>setOpen(i)} onFocus={()=>setOpen(i)}>
        <span className="ico"><Icon n={ic}/></span><span className="svr-t">{t}</span><span className="tog"><Icon n="plus"/></span></button>
      <div className="svr-b"><div className="svr-i"><div className="svr-c"><p>{d}</p><div className="tags">{tg.map(x=><span key={x}>{x}</span>)}</div></div></div></div></li>)}</ul>
  </section>
}

export default function App(){
  const root=useRef(),[active,setActive]=useState('')
  useLayoutEffect(()=>{
    if('scrollRestoration' in history)history.scrollRestoration='manual'
    window.scrollTo(0,0)
    const lenis=new Lenis({lerp:.09});lenis.on('scroll',ScrollTrigger.update)
    const tick=t=>lenis.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0)
    const onClick=e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();const h=a.getAttribute('href');lenis.scrollTo(h==='#top'?0:h,{duration:1.4})}
    document.addEventListener('click',onClick)
    const ctx=gsap.context(()=>{
      gsap.from('.hl i',{yPercent:115,duration:1.6,stagger:.14,ease:'expo.out',delay:.15})
      gsap.from('.hero-side > *',{opacity:0,y:20,duration:1.2,delay:.9,stagger:.12,ease:'power3.out'})
      gsap.timeline({scrollTrigger:{trigger:'.hero',start:'top top',end:'+=110%',pin:true,scrub:true}})
        .fromTo('.hl b',{yPercent:0},{yPercent:-120,stagger:.08,ease:'power2.in',immediateRender:false},0)
        .fromTo('.hero-side',{opacity:1,y:0},{opacity:0,y:-40,immediateRender:false},0)
      ids.forEach((id,i)=>ScrollTrigger.create({trigger:'#'+id,start:'top 55%',onEnter:()=>setActive(id),onLeaveBack:()=>setActive(i?ids[i-1]:'')}))
      gsap.fromTo('.w',{opacity:.16},{opacity:1,stagger:.12,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top 80%',end:'bottom 60%',scrub:true}})
      const track=document.querySelector('.track'),dist=()=>track.scrollWidth-innerWidth
      const h=gsap.to(track,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'.work',start:'top top',end:()=>'+='+dist(),pin:true,scrub:.6,invalidateOnRefresh:true}})
      gsap.to('.wprog div',{scaleX:1,ease:'none',scrollTrigger:{trigger:'.work',start:'top top',end:()=>'+='+dist(),scrub:true,invalidateOnRefresh:true}})
      gsap.utils.toArray('.panel .shot').forEach(s=>gsap.fromTo(s,{scale:.92,opacity:.5},{scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:s.closest('.panel'),containerAnimation:h,start:'left 95%',end:'left 45%',scrub:true}}))
      gsap.utils.toArray('.panel path').forEach(p=>{const L=p.getTotalLength();gsap.fromTo(p,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:p.closest('.panel'),containerAnimation:h,start:'left 80%',end:'left 30%',scrub:true}})})
      const cards=gsap.utils.toArray('.card')
      cards.slice(0,-1).forEach((c,i)=>gsap.to(c,{scale:.94,opacity:.5,ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top 65%',end:'top 25%',scrub:true}}))
      const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches
      gsap.utils.toArray('.ml').forEach(el=>gsap.from(el.querySelectorAll('i'),{yPercent:115,duration:1.4,stagger:.12,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 85%'}}))
      gsap.utils.toArray('.svr').forEach(el=>{const t={trigger:el,start:'top 92%'}
        gsap.from(el.querySelector('.ln'),{scaleX:0,transformOrigin:'left',duration:1.4,ease:'expo.out',scrollTrigger:t})
        gsap.from(el.querySelector('.svr-h'),{y:34,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:t})})
      gsap.from('.orbit',{scale:.8,opacity:0,duration:1.8,ease:'expo.out',scrollTrigger:{trigger:'.orbit',start:'top 85%'}})
      gsap.from('.pl .ln',{scaleX:0,transformOrigin:'left',duration:1.4,stagger:.15,ease:'expo.out',scrollTrigger:{trigger:'.pillars',start:'top 88%'}})
      gsap.from('.pl h3,.pl p',{y:26,opacity:0,duration:1,stagger:.08,ease:'power3.out',scrollTrigger:{trigger:'.pillars',start:'top 88%'}})
      gsap.to('.sp',{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}})
      if(!reduce){
        gsap.utils.toArray('[data-speed]').forEach(el=>{const v=+el.dataset.speed;gsap.fromTo(el,{y:-v*110},{y:v*110,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:.7}})})
        gsap.utils.toArray('[data-xspeed]').forEach(el=>{const v=+el.dataset.xspeed;gsap.fromTo(el,{x:v*170},{x:-v*170,ease:'none',scrollTrigger:{trigger:el.parentElement,containerAnimation:h,start:'left right',end:'right left',scrub:true}})})
        gsap.utils.toArray('.mw').forEach(el=>{const v=+el.dataset.dir;gsap.fromTo(el,{x:-v*70},{x:v*70,ease:'none',scrollTrigger:{trigger:'.marquee',start:'top bottom',end:'bottom top',scrub:.6}})})
        gsap.utils.toArray('.sv-head p,.sticky p').forEach(el=>gsap.fromTo(el,{y:30},{y:-30,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.8}}))
        document.querySelectorAll('[data-mouse]').forEach(c=>{const items=[...c.querySelectorAll('[data-depth]')];if(!items.length)return
          c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width-.5,ny=(e.clientY-r.top)/r.height-.5
            items.forEach(el=>{const d=+el.dataset.depth;gsap.to(el,{x:nx*d,y:ny*d,duration:1.2,ease:'power3.out',overwrite:'auto'})})})})
        document.querySelectorAll('.btn,.nav-cta').forEach(b=>{const xt=gsap.quickTo(b,'x',{duration:.6,ease:'power3.out'}),yt=gsap.quickTo(b,'y',{duration:.6,ease:'power3.out'})
          b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();xt((e.clientX-r.left-r.width/2)*.25);yt((e.clientY-r.top-r.height/2)*.35)})
          b.addEventListener('mouseleave',()=>{xt(0);yt(0)})})
      }
      gsap.from('.cl i',{yPercent:115,stagger:.12,duration:1.3,ease:'expo.out',scrollTrigger:{trigger:'.contact',start:'top 65%'}})
      gsap.from('.contact-list a',{opacity:0,y:24,stagger:.1,scrollTrigger:{trigger:'.contact-list',start:'top 90%'}})
    },root)
    return()=>{document.removeEventListener('click',onClick);ctx.revert();gsap.ticker.remove(tick);lenis.destroy()}
  },[])
  return <div ref={root}>
    <div className="sp"/>
    <nav><a href="#top" className="logo"><span className="mono">D</span><span className="nm">Dishika Doshi</span></a>
      <ul>{links.map(s=><li key={s}><a href={'#'+s.toLowerCase()} className={active===s.toLowerCase()?'on':''}>{s}</a></li>)}</ul>
      <a href="#contact" className="nav-cta">Let’s talk</a></nav>

    <header className="hero" id="top"><Scene/><div className="shade"/>
      <h1 className="hl"><span><b><i>Dishika</i></b></span><span><b><i>Doshi</i></b></span></h1>
      <div className="hero-side fade-in"><p>Full stack developer building precise, fast and considered web products.</p><a className="btn" href="#contact">Start a project</a></div>
    </header>

    <section id="about" className="manifesto wrap about" data-mouse>
      <div className="decos"><Deco k="orb" s=".6" z="380px" style={{left:'-10%',top:'4%'}}/><Deco k="plus" s="-.9" style={{right:'6%',top:'9%'}}/><Deco k="ring" s="-.7" z="90px" style={{right:'18%',bottom:'14%'}}/><Deco k="dot" s="1.1" style={{left:'38%',top:'44%'}}/><Deco k="bar" s=".8" z="110px" style={{right:'2.5%',top:'48%'}}/></div>
      <div className="about-l"><Eyebrow n="01" t="About"/>
        <div className="orbit-w"><div className="orbit" aria-hidden="true"><span className="rg a"/><span className="rg b"/><span className="rg c"/>
          <span className="core" data-depth="-14">D</span>
          <span className="chip" data-depth="46" style={{left:'-8%',top:'14%'}}><b>Design</b></span>
          <span className="chip" data-depth="-60" style={{right:'-12%',top:'50%'}}><b>Engineering</b></span>
          <span className="chip" data-depth="34" style={{left:'8%',bottom:'4%'}}><b>Performance</b></span></div></div></div>
      <div className="about-r"><p className="big">{manifesto.split(' ').map((w,i)=><span key={i} className="w">{w} </span>)}</p>
        <div className="pillars">{pillars.map(([t,d])=><div className="pl" key={t}><span className="ln"/><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <div className="marquee">{[0,1].map(r=><div key={r} className="mw" data-dir={r?-1:1}><div className={'mrow'+(r?' r':'')}>{[...skills,...skills].map((s,i)=><span key={i}>{s}</span>)}</div></div>)}</div>

    <Services/>

    <section id="work" className="work"><div className="track">
      <div className="intro panel"><Deco k="ring" x="-.7" z="110px" style={{right:'-18%',top:'-6%'}}/><Eyebrow n="03" t="Selected work"/><h2>Products, from <em>interface</em> to infrastructure.</h2><p>Four projects, from live client sites to a build in progress.</p></div>
      {projects.map(([n,k,d,tags,path,c,url,img],i)=><a className="panel pj" key={n} href={url} target="_blank" rel="noreferrer" aria-label={n+' - open site'} style={{'--c':c}}>
        <Deco k={i%2?'dia':'plus'} x={.7+i*.15} style={{right:'3%',top:'-9%'}}/><Deco k="dot" x={-1-i*.1} style={{left:'42%',bottom:'-5%'}}/>
        <div className="shot"><div className="chrome"><i/><i/><i/><b>{n.toLowerCase()}.app</b></div>
          <img className="shot-img" src={img} alt={n+' website preview'} loading="lazy" draggable="false"/></div>
        <div className="pm"><div><h3>{n}<em>{k}</em></h3><p>{d}</p><div className="tags">{tags.split(' · ').map(t=><span key={t}>{t}</span>)}</div></div><span className="pn">0{i+1} / 0{projects.length} <Icon n="arrow"/></span></div></a>)}
    </div><div className="wprog"><div/></div></section>

    <section id="process" className="wrap proc"><div className="decos"><Deco k="orb" s="-.5" z="320px" style={{left:'-12%',top:'30%'}}/><Deco k="ring" s=".8" z="100px" style={{left:'30%',top:'8%'}}/><Deco k="plus" s="-1" style={{left:'4%',top:'62%'}}/><Deco k="dot" s="1.2" style={{right:'3%',top:'20%'}}/><Deco k="ring2" s="-.6" z="64px" style={{right:'6%',bottom:'10%'}}/></div><div className="sticky"><Eyebrow n="04" t="Process"/><h2 className="ml"><span><i>How I <em>work</em></i></span></h2><p>A simple, transparent flow from first call to launch and beyond.</p></div>
      <div className="stack">{steps.map(([t,d],i)=><div className="card" key={t} style={{top:`calc(16vh + ${i*20}px)`}}><span className="num">0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>

    <section id="contact" className="contact wrap"><div className="cta"><div className="decos"><Deco k="ring" s="-.6" z="180px" style={{right:'-4%',top:'-8%'}}/><Deco k="ring2" s=".7" z="90px" style={{right:'14%',bottom:'-3%'}}/><Deco k="dot" s="-1" style={{left:'46%',top:'14%'}}/><Deco k="plus" s=".9" style={{left:'3%',bottom:'8%'}}/></div>
      <div><Eyebrow n="05" t="Contact"/><h2 className="cl"><span><i>Let’s build</i></span><span><i>something <em>precise.</em></i></span></h2>
        <p>Tell me about your product and timeline. I usually reply within a day.</p><a className="btn solid" href={MAILTO} onClick={openMail}>Send an email</a></div>
      <div className="contact-list">
        {[['Email',MAIL,MAILTO],['Phone',PHONE,'tel:+919660633043'],['WhatsApp',PHONE,WA],['LinkedIn','/in/dishikadoshi',LI]].map(([l,v,u])=>
          <a key={l} href={u} onClick={l==='Email'?openMail:undefined} target={u.startsWith('http')?'_blank':undefined} rel="noreferrer"><div><small>{l}</small>{v}</div><Icon n="arrow"/></a>)}</div></div></section>
    <footer><span>© 2026 Dishika Doshi</span><a href="#top">Back to top ↑</a></footer>
  </div>
}