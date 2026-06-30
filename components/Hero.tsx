import Image from 'next/image';
import { profile, stats } from '@/data/profile';

export default function Hero(){
 return <section id="home" className="section relative min-h-screen pt-36">
  <div className="hero-orb left-[-70px] top-[180px] bg-cyan/40" />
  <div className="hero-orb bottom-[80px] right-[10%] bg-violet/40" style={{animationDelay:'1.2s'}} />
  <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
   <div>
    <p className="kicker">{profile.title}</p>
    <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.06em] md:text-7xl lg:text-8xl">Bridging language, education, and <span className="text-gradient">artificial intelligence.</span></h1>
    <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">{profile.value}</p>
    <p className="mt-5 text-base font-semibold text-slate-400">{profile.subtitle}</p>
    <div className="mt-8 flex flex-wrap gap-4">
     <a className="btn-primary" href="/cv/fatih-ercan-cv.pdf">Download CV</a>
     <a className="btn-ghost" href={profile.linkedin}>LinkedIn</a>
     <a className="btn-ghost" href={profile.upwork}>Upwork</a>
    </div>
   </div>
   <div className="relative mx-auto w-full max-w-[430px]">
    <div className="absolute -inset-5 rounded-[46px] bg-gradient-to-br from-cyan/30 via-white/5 to-violet/30 blur-2xl" />
    <div className="relative overflow-hidden rounded-[38px] glass p-3">
      <Image src="/images/fatih-ercan.png" alt="Fatih Ercan" width={720} height={720} className="rounded-[30px] object-cover" priority />
    </div>
    <div className="absolute -bottom-5 left-4 right-4 rounded-3xl glass px-5 py-4 text-sm font-bold text-slate-100"><span className="mr-2 inline-block h-3 w-3 rounded-full bg-emerald-400" />Available for AI evaluation, localization & QA projects</div>
   </div>
  </div>
  <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(s=><div key={s.label} className="glass card-hover rounded-3xl p-6"><div className="text-3xl font-black text-white">{s.value}</div><div className="mt-2 text-sm leading-6 text-slate-300">{s.label}</div></div>)}</div>
 </section>
}
