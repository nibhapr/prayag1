import{s as g,n as l}from"./router.D37drDj1.js";import{i as h}from"./index.D6rU_tt3.js";function p(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function f(t){return void 0!==t.dataset.astroReload}(g||"none"!==p())&&(document.addEventListener("click",(t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement||e instanceof SVGAElement||e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;f(e)||e.hasAttribute("download")||!e.href||n&&"_self"!==n||r!==location.origin||0!==t.button||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),l(o,{history:"replace"===e.dataset.astroHistory?"replace":"auto",sourceElement:e}))})),document.addEventListener("submit",(t=>{let e=t.target;if("FORM"!==e.tagName||t.defaultPrevented||f(e))return;const n=e,o=t.submitter,r=new FormData(n,o),a="string"==typeof n.action?n.action:n.getAttribute("action"),i="string"==typeof n.method?n.method:n.getAttribute("method");let s=o?.getAttribute("formaction")??a??location.pathname;const c=o?.getAttribute("formmethod")??i??"get";if("dialog"===c||location.origin!==new URL(s,location.href).origin)return;const m={sourceElement:o??n};if("get"===c){const t=new URLSearchParams(r),e=new URL(s);e.search=t.toString(),s=e.toString()}else m.formData=r;t.preventDefault(),l(s,m)})),h({prefetchAll:!0}));