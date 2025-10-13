(function(){
  const key="theme"; const root=document.documentElement;
  function set(m){root.classList.toggle("dark", m==="dark"); localStorage.setItem(key,m);}
  const saved=localStorage.getItem(key);
  if(saved){ set(saved); } else if (matchMedia("(prefers-color-scheme: dark)").matches){ set("dark"); }
  addEventListener("DOMContentLoaded",()=>{
    const b=document.getElementById("theme-toggle"); if(!b) return;
    b.addEventListener("click",()=> set(root.classList.contains("dark")?"light":"dark"));
  });
})();
