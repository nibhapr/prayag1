const f="_top";class H extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],e=t=>{if(t instanceof HTMLHeadingElement){if(t.id===f)return!0;const e=t.tagName[1];if(e){const t=parseInt(e,10);if(t>=this.minH&&t<=this.maxH)return!0}}return!1},n=t=>{if(!t)return null;const r=t;for(;t;){if(e(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const r=n(t);if(r)return r}return n(r.parentElement)},r=e=>{for(const{isIntersecting:r,target:i}of e){if(!r)continue;const e=n(i);if(!e)continue;const s=t.find((t=>t.hash==="#"+encodeURIComponent(e.id)));if(s){this.current=s;break}}},i=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let s;const o=()=>{s&&s.disconnect(),s=new IntersectionObserver(r,{rootMargin:this.getRootMargin()}),i.forEach((t=>s.observe(t)))};o();const c=window.requestIdleCallback||(t=>setTimeout(t,1));let u;window.addEventListener("resize",(()=>{s&&s.disconnect(),clearTimeout(u),u=setTimeout((()=>c(o)),200)}))}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){const t=(document.querySelector("header")?.getBoundingClientRect().height||0)+(this.querySelector("summary")?.getBoundingClientRect().height||0)+32;return`-${t}px 0% ${t+53-document.documentElement.clientHeight}px`}}customElements.define("starlight-toc",H);export{H as S};