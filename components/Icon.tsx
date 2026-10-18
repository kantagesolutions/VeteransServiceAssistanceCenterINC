export default function Icon({name='arrow'}:{name?:string}) {
 const paths:Record<string,React.ReactNode>={
 arrow:<><path d="M4 12h16m-6-6 6 6-6 6"/></>,
 home:<><path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"/></>,
 people:<><circle cx="12" cy="6" r="3"/><path d="M6 21v-4a6 6 0 0 1 12 0v4M2 20v-4a4 4 0 0 1 4-4m16 8v-4a4 4 0 0 0-4-4"/></>,
 scales:<><path d="M12 3v18M7 21h10M4 6h16M5 6l-3 9h6L5 6Zm14 0-3 9h6l-3-9Z"/></>,
 heart:<path d="M20.5 5a5 5 0 0 0-8.5 1 5 5 0 0 0-8.5-1c-4 5 2 10 8.5 15 6.5-5 12.5-10 8.5-15Z"/>,
 sun:<><circle cx="12" cy="12" r="5"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></>,
 book:<><path d="M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Zm0 0v16"/></>,
 search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>
 };
 return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.arrow}</svg>;
}
