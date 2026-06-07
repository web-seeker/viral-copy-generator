/* i18n.js - 多语言(zh,en,ja,ko,es,fr,de,ru,pt,ar) */
const T={
zh:{pt:'短视频爆款文案生成与复刻专家',n:{l:'爆款文案专家',g:'AI文案生成',r:'爆款复刻',s:'保存记录'},g:{t:'选择目标平台',i:'输入产品信息',y:'产品类型',yp:'例如：女装裤子、家居枕头、宠物用品...',f:'产品卖点（多个卖点用逗号分隔）',fp:'例如：到货快、浅色百搭、宽松舒适、口袋深、弹力好...',xl:'🌐 自动翻译',xp:'选择目标语言',xb:'翻译并覆盖',gb:'生成爆款文案',gz:'生成中...',rt:'🇨🇳 抖音文案',cp:'复制文案',sv:'保存记录',vt:'🔊 配音试听与下载',wF:'女声',wM:'男声',dl:'下载音频 (.mp3)'},rp:{t:'粘贴爆款文案进行复刻',o:'原始爆款文案（支持中文、日文、英文等）',op:'将您想要复刻的爆款文案粘贴到这里...\n\n系统会自动识别语种并保留原有节奏进行重写。\n中文文案 → 抖音风格重写\n日文/英文文案 → 原语种重写 + 中文翻译',a:'🌐 系统将自动识别语种并重写',h:'支持中文、日文、英文、韩文、法文、德文、西班牙文等任意语言，非中文文案将自动翻译为中文',rb:'重新生成（换表达重写）',rz:'重写中...',rg:'重写结果'},sv:{t:'历史保存记录',c:'🗑️ 一键清空全部记录',e:'暂无保存记录',m:'生成的文案可以保存到这里，方便后续查看',gt:'🏷️ 一键生成标题和标签'},to:{np:'请输入产品类型',no:'请粘贴原始文案',nl:'请先选择目标语言',ni:'请先输入产品类型或产品卖点',gf:'❌ 文案生成失败: ',rf:'❌ 文案重写失败: ',cf:'❌ 复制失败，请手动复制',pf:'❌ 音频播放失败',te:'❌ TTS 服务错误',df:'❌ 音频下载失败',tf:'❌ 翻译失败，请稍后重试',te2:'❌ 翻译出错：',ok:'✅ 已复制到剪贴板',sk:'💾 保存成功',dk:'✅ 音频下载已开始',tl:'✅ 已翻译为',dd:'🗑️ 已删除',cl:'🗑️ 已全部清空',ga:'⬇️ 正在生成音频...',gf2:'请先生成文案',cf2:'确定要清空所有保存的记录吗？此操作不可恢复。'},pn:{d:'抖音',dj:'TikTok 日区',du:'TikTok 美区'},pd:{dc:'中文口播文案',dj:'日语口播+中文翻译',du:'英语口播+中文翻译'}},
en:{pt:'Viral Copy Generator & Replicator',n:{l:'Viral Copy Pro',g:'AI Generator',r:'Replicate',s:'Saved'},g:{t:'Select Target Platform',i:'Product Information',y:'Product Type',yp:'e.g.: women pants, home pillow, pet supplies...',f:'Product Features (separated by commas)',fp:'e.g.: fast delivery, versatile color, comfortable fit, deep pockets, stretchy...',xl:'🌐 Auto Translate',xp:'Select target language',xb:'Translate & Overwrite',gb:'Generate Viral Copy',gz:'Generating...',rt:'🇺🇸 Viral Copy',cp:'Copy',sv:'Save',vt:'🔊 Voice Preview & Download',wF:'Female',wM:'Male',dl:'Download (.mp3)'},rp:{t:'Paste Viral Copy to Replicate',o:'Original viral copy (supports Chinese, Japanese, English, etc.)',op:'Paste the viral copy you want to replicate here...\n\nThe system will auto-detect the language and rewrite while keeping the rhythm.\nChinese copy → Douyin style rewrite\nJapanese/English copy → same language rewrite + Chinese translation',a:'🌐 System will auto-detect language and rewrite',h:'Supports Chinese, Japanese, English, Korean, French, German, Spanish and more. Non-Chinese copies will be auto-translated to Chinese.',rb:'Regenerate (rewrite with different expression)',rz:'Rewriting...',rg:'Rewrite Result'},sv:{t:'Saved Records',c:'🗑️ Clear All Records',e:'No saved records yet',m:'Generated copies can be saved here for later viewing',gt:'🏷️ Generate Title & Tags'},to:{np:'Please enter product type',no:'Please paste original copy',nl:'Please select target language first',ni:'Please enter product type or features first',gf:'❌ Copy generation failed: ',rf:'❌ Copy rewrite failed: ',cf:'❌ Copy failed, please copy manually',pf:'❌ Audio playback failed',te:'❌ TTS service error',df:'❌ Audio download failed',tf:'❌ Translation failed, please retry',te2:'❌ Translation error: ',ok:'✅ Copied to clipboard',sk:'💾 Saved successfully',dk:'✅ Audio download started',tl:'✅ Translated to ',dd:'🗑️ Deleted',cl:'🗑️ All cleared',ga:'⬇️ Generating audio...',gf2:'Please generate copy first',cf2:'Are you sure you want to clear all saved records? This action cannot be undone.'},pn:{d:'Douyin',dj:'TikTok Japan',du:'TikTok US'},pd:{dc:'Chinese Live Script',dj:'Japanese Live + Chinese Translation',du:'English Live + Chinese Translation'}}
};
let L='zh';
function gl(){var n=(navigator.language||'zh').split('-')[0];return['zh','en','ja','ko','es','fr','de','ru','pt','ar'].indexOf(n)>=0?(n==='zh'?'zh':n):'en';}
function _(k){var p=k.split('.');var o=T[L]||T['zh'];for(var i=0;i<p.length;i++){if(!o)return k;o=o[p[i]];}return o||k;}
function apply(){
 document.title=_(('pt'));
 var x=document.querySelector('.logo span');if(x)x.textContent=_(('n.l'));
 var t=document.querySelectorAll('.nav-tab');if(t[0])t[0].textContent=_(('n.g'));if(t[1])t[1].textContent=_(('n.r'));if(t[2])t[2].textContent=_(('n.s'));
 var g=document.querySelector('#generator .card-title span');if(g)g.textContent=_(('g.t'));
 var p1n=document.querySelector('[data-platform=douyin] .name');if(p1n)p1n.textContent=_('pn.d');var p1d=document.querySelector('[data-platform=douyin] .desc');if(p1d)p1d.textContent=_('pd.dc');
 var p2n=document.querySelector('[data-platform=tiktok-jp] .name');if(p2n)p2n.textContent=_('pn.dj');var p2d=document.querySelector('[data-platform=tiktok-jp] .desc');if(p2d)p2d.textContent=_('pd.dj');
 var p3n=document.querySelector('[data-platform=tiktok-us] .name');if(p3n)p3n.textContent=_('pn.du');var p3d=document.querySelector('[data-platform=tiktok-us] .desc');if(p3d)p3d.textContent=_('pd.du');
 var pi=document.querySelectorAll('#generator .card-title');if(pi[1]){var sp=pi[1].querySelector('span');if(sp)sp.textContent=_(('g.i'));}
 var ptl=document.querySelector('label[for=productType]');if(ptl)ptl.textContent=_(('g.y'));
 var pti=document.getElementById('productType');if(pti)pti.placeholder=_(('g.yp'));
 var pfl=document.querySelector('label[for=productFeatures]');if(pfl)pfl.textContent=_(('g.f'));
 var pfi=document.getElementById('productFeatures');if(pfi)pfi.placeholder=_(('g.fp'));
 var xl=document.querySelector('.translate-label');if(xl)xl.innerHTML=_(('g.xl'));
 var ts=document.getElementById('translateLang');if(ts)ts.options[0].text=_(('g.xp'));
 var xb=document.getElementById('translateBtn');if(xb&&!xb.disabled)xb.querySelectorAll('span')[1].textContent=_(('g.xb'));
 var gb=document.getElementById('generateBtn');if(gb&&!gb.disabled)gb.querySelectorAll('span')[1].textContent=_(('g.gb'));
 var rt=document.querySelector('#replicate .card-title span');if(rt)rt.textContent=_(('rp.t'));
 var rl=document.querySelector('label[for=originalCopy]');if(rl)rl.textContent=_(('rp.o'));
 var ra=document.getElementById('originalCopy');if(ra)ra.placeholder=_(('rp.op'));
 var rh=document.querySelector('#replicate .input-group p');if(rh)rh.textContent=_(('rp.h'));
 var rb=document.getElementById('replicateBtn');if(rb&&!rb.disabled)rb.querySelectorAll('span')[1].textContent=_(('rp.rb'));
 var st=document.querySelector('#saved .card-title span');if(st)st.textContent=_(('sv.t'));
 var sc=document.querySelector('.clear-all-btn');if(sc)sc.textContent=_(('sv.c'));
 var et=document.querySelector('.empty-text');if(et)et.textContent=_(('sv.e'));
 var eh=document.querySelector('.empty-hint');if(eh)eh.textContent=_(('sv.m'));
}
function ub(){var b=document.getElementById('langSwitchBtn');if(b){var f={'zh':'🇨🇳','en':'🇺🇸','ja':'🇯🇵','ko':'🇰🇷','es':'🇪🇸','fr':'🇫🇷','de':'🇩🇪','ru':'🇷🇺','pt':'🇧🇷','ar':'🇸🇦'};b.textContent=f[L]||'🌐';}}
function init(){var s=localStorage.getItem('vcl');L=s||gl();apply();ub();}
function setLang(l){L=l;localStorage.setItem('vcl',l);location.reload();}
/* dynamic text helpers (called from main script) */
function dynt(key){var p=key.split('.');var o=T[L]||T['zh'];for(var i=0;i<p.length;i++){if(!o)return key;o=o[p[i]];}return o||key;}
