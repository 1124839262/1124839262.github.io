window.throttle=(t,o)=>{let n,a;return(...e)=>{let r=this;!a||Date.now()-a>=o?(t.apply(r,e),a=Date.now()):(clearTimeout(n),n=setTimeout(()=>{t.apply(r,e),a=Date.now()},o-(Date.now()-a)))}},(()=>{[Element,Document,Window].forEach(e=>{e.prototype._addEventListener=e.prototype.addEventListener,e.prototype._removeEventListener=e.prototype.removeEventListener,e.prototype.addEventListener=e.prototype.on=function(e,r,t){this.__listeners__=this.__listeners__||{},this.__listeners__[e]=this.__listeners__[e]||[];for(var[o,n]of this.__listeners__[e])if(o===r&&JSON.stringify(n)===JSON.stringify(t))return this;return this.__listeners__[e].push([r,t]),this._addEventListener(e,r,t),this},e.prototype.removeEventListener=e.prototype.off=function(t,o,n){return this.__listeners__&&this.__listeners__[t]&&(o?(this._removeEventListener(t,o,n),this.__listeners__[t]=this.__listeners__[t].filter(([e,r])=>e!==o||JSON.stringify(r)!==JSON.stringify(n)),0===this.__listeners__[t].length&&delete this.__listeners__[t]):(this.__listeners__[t].forEach(([e,r])=>{this.removeEventListener(t,e,r)}),delete this.__listeners__[t])),this}}),window._$=e=>document.querySelector(e),window._$$=e=>document.querySelectorAll(e);let t=document.createElement("a"),o=(t.className="nav-icon dark-mode-btn",_$("#sub-nav").append(t),window.matchMedia("(prefers-color-scheme: dark)").matches);function r(e){var r="true"===e||"auto"===e&&o;document.documentElement.setAttribute("data-theme",r?"dark":null),localStorage.setItem("dark_mode",e),t.id=`nav-${"true"===e?"moon":"false"===e?"sun":"circle-half-stroke"}-btn`,document.body.dispatchEvent(new CustomEvent("reimu:theme-set",{detail:{isDark:r,mode:e}}))}r(localStorage.getItem("dark_mode")||document.documentElement.getAttribute("data-theme-mode")||"auto"),t.addEventListener("click",throttle(()=>{var e=["auto","false","true"];r(e[(e.indexOf(localStorage.getItem("dark_mode"))+1)%3])},1e3));let n=0;if(document.addEventListener("scroll",()=>{var e=document.documentElement.scrollTop||document.body.scrollTop,r=e-n;window.diffY=r,n=e,r<0?_$("#header-nav").classList.remove("header-nav-hidden"):_$("#header-nav").classList.add("header-nav-hidden")}),window.Pace&&Pace.on("done",()=>{Pace.sources[0].elements=[]}),window.materialTheme){let r=new materialTheme.ColorThemeExtractor({needTransition:!1});function a(){var e;_$("#reimu-generated-theme-style")||((e=document.createElement("style")).id="reimu-generated-theme-style",e.textContent=`
    :root {
      --red-0: var(--md-sys-color-primary-light);
      --red-1: color-mix(in srgb, var(--md-sys-color-primary-light) 90%, white);
      --red-2: color-mix(in srgb, var(--md-sys-color-primary-light) 75%, white);
      --red-3: color-mix(in srgb, var(--md-sys-color-primary-light) 55%, white);
      --red-4: color-mix(in srgb, var(--md-sys-color-primary-light) 40%, white);
      --red-5: color-mix(in srgb, var(--md-sys-color-primary-light) 15%, white);
      --red-5-5: color-mix(in srgb, var(--md-sys-color-primary-light) 10%, white);
      --red-6: color-mix(in srgb, var(--md-sys-color-primary-light) 5%, white);
    
      --color-border: var(--red-3);
      --color-link: var(--red-1);
      --color-meta-shadow: var(--red-6);
      --color-h2-after: var(--red-1);
      --color-red-6-shadow: var(--red-2);
      --color-red-3-shadow: var(--red-3);
    }
    
    [data-theme="dark"]:root {
      --red-0: var(--red-1);
      --red-1: color-mix(in srgb, var(--md-sys-color-primary-dark) 90%, white);
      --red-2: color-mix(in srgb, var(--md-sys-color-primary-dark) 80%, white);
      --red-3: color-mix(in srgb, var(--md-sys-color-primary-dark) 75%, white);
      --red-4: color-mix(in srgb, var(--md-sys-color-primary-dark) 30%, transparent);
      --red-5: color-mix(in srgb, var(--md-sys-color-primary-dark) 20%, transparent);
      --red-5-5: color-mix(in srgb, var(--md-sys-color-primary-dark) 10%, transparent);
      --red-6: color-mix(in srgb, var(--md-sys-color-primary-dark) 5%, transparent);
      
      --color-border: var(--red-5);
    }
    `,document.body.appendChild(e))}async function i(e){e=await r.generateThemeSchemeFromImage(e),document.documentElement.style.setProperty("--md-sys-color-primary-light",r.hexFromArgb(e.schemes.light.props.primary)),document.documentElement.style.setProperty("--md-sys-color-primary-dark",r.hexFromArgb(e.schemes.dark.props.primary)),e=_$("#reimu-generated-theme-style");e||a()}window.generateSchemeHandler=()=>{var e;window.bannerElement?.src?window.bannerElement.complete?i(bannerElement):window.bannerElement.addEventListener("load",()=>{i(bannerElement)},{once:!0}):window.bannerElement?.style.background&&(e=window.bannerElement.style.background.match(/\d+/g),e=r.generateThemeScheme({r:parseInt(e[0]),g:parseInt(e[1]),b:parseInt(e[2])}),document.documentElement.style.setProperty("--md-sys-color-primary-light",r.hexFromArgb(e.schemes.light.props.primary)),document.documentElement.style.setProperty("--md-sys-color-primary-dark",r.hexFromArgb(e.schemes.dark.props.primary)),a())}}})();var safeImport=async(e,r)=>{if(!r)return import(e);var t=await(await fetch(e)).text(),o=await crypto.subtle.digest("SHA-384",(new TextEncoder).encode(t));if("sha384-"+btoa(String.fromCharCode(...new Uint8Array(o)))!==r)throw new Error("Integrity check failed for "+e);o=new Blob([t],{type:"application/javascript"}),r=URL.createObjectURL(o),e=await import(r);return URL.revokeObjectURL(r),e};