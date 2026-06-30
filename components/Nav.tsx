import { profile } from '@/data/profile';

export default function Nav(){
 const links=[['Expertise','expertise'],['Experience','experience'],['AI Cases','ai-cases'],['Education','education'],['Contact','contact']];
 return <nav className="fixed left-1/2 top-5 z-50 w-[min(1120px,calc(100%-32px))] -translate-x-1/2 rounded-3xl glass px-4 py-3">
  <div className="flex items-center justify-between gap-4">
   <a href="#home" className="flex items-center gap-3 font-black tracking-tight"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet text-ink shadow-glow">FE</span><span className="hidden sm:inline">{profile.name}</span></a>
   <div className="hidden items-center gap-6 md:flex">{links.map(([label,id])=><a key={id} href={'#'+id} className="text-sm font-semibold text-slate-300 hover:text-white">{label}</a>)}</div>
   <a href="/cv/fatih-ercan-cv.pdf" className="rounded-full bg-white px-4 py-2 text-sm font-black text-ink">CV</a>
  </div>
 </nav>
}
