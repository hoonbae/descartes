/*! Descartes v0.0.4 | (c) Jonathan Chan @jonhmchan */

/*! Sizzle v2.3.1-pre | (c) jQuery Foundation, Inc. | jquery.org/license */
!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null});var Aa=a.Sizzle;ga.noConflict=function(){return a.Sizzle===ga&&(a.Sizzle=Aa),ga},"function"==typeof define&&define.amd?define(function(){return ga}):"undefined"!=typeof module&&module.exports?module.exports=ga:a.Sizzle=ga}(window);
//# sourceMappingURL=sizzle.min.map

/** Class representing a full Descartes engine */
class DescartesEngine {

	/**
	 * Initialize and fire Descartes engine
	 * @param {object} tree - Full style tree that represents styles for the whole page
	*/
	constructor(tree, stylesheet = false) {

		this.mappings = {}
		this.mappingsPriority = 0
		this.listening = true
		this.alias = {}

		this.SELECTOR = 'selector'
		this.PROPERTY = 'property'
		this.META = 'meta'
		this.LISTENER = 'listener'
		this.SCOPE = 'scope'
		this.ALIAS = 'alias'

		this.LISTENERS_KEYWORD = '_listeners'
		this.LISTENER_PREFIX = '$'
		this.SCOPE_KEYWORD = "@"
		this.ALIAS_KEYWORD = "alias"
		
		this.prefixes = ['-webkit-', '-moz-', '-o-', '-ms-']
		this.properties = ['align-content','align-items','align-self','all','animation','animation-delay','animation-direction','animation-duration','animation-fill-mode','animation-iteration-count','animation-name','animation-play-state','animation-timing-function','backface-visibility','background','background-attachment','background-blend-mode','background-clip','background-color','background-image','background-origin','background-position','background-repeat','background-size','border','border-bottom','border-bottom-color','border-bottom-left-radius','border-bottom-right-radius','border-bottom-style','border-bottom-width','border-collapse','border-color','border-image','border-image-outset','border-image-repeat','border-image-slice','border-image-source','border-image-width','border-left','border-left-color','border-left-style','border-left-width','border-radius','border-right','border-right-color','border-right-style','border-right-width','border-spacing','border-style','border-top','border-top-color','border-top-left-radius','border-top-right-radius','border-top-style','border-top-width','border-width','bottom','box-shadow','box-sizing','caption-side','clear','clip','color','column-count','column-fill','column-gap','column-rule','column-rule-color','column-rule-style','column-rule-width','column-span','column-width','columns','content','counter-increment','counter-reset','cursor','direction','display','empty-cells','filter','flex','flex-basis','flex-direction','flex-flow','flex-grow','flex-shrink','flex-wrap','float','font','@font-face','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','hanging-punctuation','height','justify-content','@keyframes','left','letter-spacing','line-height','list-style','list-style-image','list-style-position','list-style-type','margin','margin-bottom','margin-left','margin-right','margin-top','max-height','max-width','@media','min-height','min-width','nav-down','nav-index','nav-left','nav-right','nav-up','opacity','order','outline','outline-color','outline-offset','outline-style','outline-width','overflow','overflow-x','overflow-y','padding','padding-bottom','padding-left','padding-right','padding-top','page-break-after','page-break-before','page-break-inside','perspective','perspective-origin','position','quotes','resize','right','tab-size','table-layout','text-align','text-align-last','text-decoration','text-decoration-color','text-decoration-line','text-decoration-style','text-indent','text-justify','text-overflow','text-shadow','text-transform','top','transform','transform-origin','transform-style','transition','transition-delay','transition-duration','transition-property','transition-timing-function','unicode-bidi','vertical-align','visibility','white-space','width','word-break','word-spacing','word-wrap','z-index']
		this.pseudos = ['::after','::before','::first-letter','::first-line','::selection','::backdrop',':active',':any',':checked',':default',':dir',':disabled',':empty',':enabled',':first',':first-child',':first-of-type',':fullscreen',':focus',':hover',':indeterminate',':in-range',':invalid',':lang',':last-child',':last-of-type',':left',':link',':not',':nth-child',':nth-last-child',':nth-last-of-type',':nth-of-type',':only-child',':only-of-type',':optional',':out-of-range',':read-only',':read-write',':required',':right',':root',':scope',':target',':valid',':visited']
		this.pxExceptions = ['animation-iteration-count', 'box-flex', 'box-flex-group', 'box-ordinal-group', 'column-count', 'fill-opacity', 'flex', 'flex-grow', 'flex-positive', 'flex-shrink', 'flex-negative', 'flex-order', 'font-weight', 'line-clamp', 'line-height', 'opacity', 'order', 'orphans', 'stop-opacity', 'stroke-dashoffset', 'stroke-opacity', 'stroke-width', 'tab-size', 'widows', 'z-index', 'zoom']

		this.findType = undefined
		this.find = this.findLibrary()

		this.debug = true
		if (this._validate(tree)) {
			this.styles = tree
			this.render()
			if (stylesheet) this.showStyleSheet()
		}

		return this
	}

	_validate(tree = this.styles, _tracer = ".", _selector = ".") {
		for (let selector in tree) {
			if (tree.hasOwnProperty(selector)) {
				let subtree = tree[selector]
				let tracer = _tracer + " > " + selector
				if (!this._validateRule(selector, subtree, tracer)) {
					return false
				}
				if (this._isObject(subtree)) {
					if (!this._validate(subtree, tracer, selector)) {
						return false
					}
				}
			}
		}
		return true
	}

	_validateRule(property, value, tracer) {
		if (property === this.LISTENERS_KEYWORD) {
			return this._validateListener(property, value, tracer)
		}
		return true
	}

	_validateListener(property, value, tracer) {
		if (!Array.isArray(value)) {
			return false
		} else {
			if (this._validateListenerValue(value, tracer, false)) {
				return true
			}
			for (let index in value) {
				let listener = value[index]
				this._validateListenerValue(listener, tracer, true, index)
			}
		}
		return true
	}

	_validateListenerValue(listener, tracer, explode = false, index = null) {
		if (listener.length === 2) {
			if (!this._isObject(listener[0]) && typeof listener[0] !== "string") {
				if (explode) this._explode("Listener must have a proper selector", tracer, index)
			}
			if (typeof listener[1] !== "string") {
				if (explode) this._explode("Listener must have an event binding", tracer, index)
				return false
			}
			return true
		} else {
			if (explode) this._explode("Listener has invalid values", tracer, index)
			return false
		}
	}

	_isObject(value) {
		return typeof value === 'object' && !Array.isArray(value)
	}

	_explode(message, tracer, index = null) {
		if (!this.debug) return
		if (index !== null) tracer += "[" + index + "]"
		console.error(tracer + " :: " + message)
	}

	/**
	 * Adds another style tree to the existing tree and renders
	 * @param {object} tree - the style tree to be added
	*/
	add(tree) {
		this.styles = this.merge(tree)
		this.render()
	}

	extend(target, source) {
		let result = Object.assign({}, target)
		return Object.assign(result, source)
	}

	/**
	 * Merges a style tree with another tree
	 * @param {object} tree - the style tree to be merged in
	 * @param {object} target - the target style tree, sensibly defaults to this.styles
	 * @return {object} the resulting merged tree
	*/
	merge(tree, target = this.styles) {
		if (typeof tree !== 'object') return target
		if (Object.keys(tree).length === 0) return target
		let result = Object.assign({}, target)
		for (let key in tree) {
			if (tree.hasOwnProperty(key)) {
				let subtree = tree[key]
				if (target.hasOwnProperty(key)) {
					let targetSubtree = target[key]
					let treeType = typeof subtree
					if (treeType === typeof targetSubtree) {
						switch (treeType) {
							case 'object':
								result[key] = this.merge(subtree, targetSubtree)
								break
							case 'string':
								result[key] = subtree
								break
							case 'array':
								result[key] = subtree.concat(targetSubtree)
								break
							default:
								console.error("Merge failed. '" + key + "' in the style tree you are merging is an invalid type: " + treeType)
						}
					} else {
						let targetType = typeof targetSubtree
						if (this.isProperty(key)) {
							result[key] = subtree
						} else {
							console.error("Merge failed. The '" + key + "' property of style trees you are merging don't match validly. `tree` has type '" + treeType + "' and `target` has type + '" + targetType + "'")
						}
					}
				} else {
					result[key] = subtree
				}
			}
		}
		return result
	}

	/**
     * Based on the style tree passed to the engine, applies all styles
     * @return {object} the selector engine, generally jQuery, but Sizzle as a fall back
    */
	findLibrary() {
		if (typeof $ !== 'undefined') {
			this.findType = 'jquery'
			const finder = (_) => {
				let elems = []
				$(_).each((i, e) => {
					elems.push(e)
				})
				return elems
			}
			return finder
		} else if (typeof Sizzle !== 'undefined') {
			this.findType = 'sizzle'
			return Sizzle
		}
	}

	/**
     * Based on the style tree passed to the engine, applies all styles
    */
	render() {
		this.flatten()
		this.bindAliases()
		this.cascade()
		this.paint()
		this.bindListeners()
	}

	/**
	 * Recursively flattens the style tree into the valid CSS selector and its corresponding rules, priority, and event listeners (if any)
	 * @param {object} tree - the current tree or subtree that specifies a selector or rule as a key, and its styles or value, respectively
	 * @return {object} a flattened tree with the correct rules
	*/
	flatten(tree = this.sanitize(tree), parentSelector = "", priority = this.mappingsPriority) {
		for (let selector in tree) {
			if (Array.isArray(tree[selector]) || typeof tree[selector] != 'object') continue
			let rules = Object.assign({}, tree[selector])
			let listeners = []
			let scope = {}
			let alias = null
			for (let rule in rules) {
				if (!this.isProperty(rule)) {
					if (this.isAlias(rule)) {
						alias = rules[rule]
					} else if (this.isScope(rule)) {
						scope = rules[rule]
					} else if (this.isListener(rule)) {
						let listener = this.parseListener(rule)
						listeners.push({
							selector: listener[0],
							event: listener[1],
							rules: rules[rule]
						})
					} else {
						let subtree = null
						if (parentSelector === "") parentSelector = selector
						let nestedSelector = this.nestSelector(rule, parentSelector)
						if (!this.isProperty(rule)) {
							subtree = {}
							subtree[nestedSelector] = rules[rule]
						}
						if (subtree !== null) {
							this.flatten(subtree, nestedSelector, priority + 1)
						}
					}
					delete rules[rule]
				}
			}
			this.mappings[selector] = {
				alias,
				rules,
				priority,
				listeners,
				scope
			}
			if (this.mappingsPriority < priority) this.mappingsPriority = priority
		}
		return this.mappings
	}

	/**
	 * Recursively sanitizes the style tree and expand, calculate mixins
	 * @param {object} tree - the current unsanitized tree or subtree
	 * @return {object} a new, validated style tree with no expanded mixins
	*/
	sanitize(rawTree = this.styles, scope = {}) {
		if (Array.isArray(rawTree)) return null
		let tree = Object.assign({}, rawTree)
		if (typeof tree === 'object') {
			let result = {}
			for (let key in tree) {
				if (key.substring(0,1) === this.SCOPE_KEYWORD) {
					scope[key] = tree[key]
				}
			}
			for (let key in tree) {
				let value = tree[key]
				if (value === null) continue
				let keyObject = this.parseKey(key)
				if (keyObject.type === this.SELECTOR || keyObject.type === this.LISTENER) {
					result[keyObject.key] = this.sanitize(value, keyObject.type === this.LISTENER ? scope : {})
				} else if (keyObject.type === this.PROPERTY) {
					result[keyObject.key] = this.parseScope(value, scope)
				} else if (keyObject.type === this.ALIAS) {
					result[this.ALIAS_KEYWORD] = value
				}
			}
			return result
		}
		return null
	}

	/**
	 * Replaces any properties referencing scopes during sanitization
	 * @param {object} value - the property or listener value to be replaced
	 * @return {object} the resulting value based on the scope
	*/
	parseScope(value, scope) {
		if (typeof value !== 'string') return value
		if (value.substring(0, 1) === this.SCOPE_KEYWORD) {
			if (scope.hasOwnProperty(value)) {
				return scope[value]
			}
		}
		return value
	}

	/**
	 * Creates aliases for listener functions
	*/
	bindAliases() {
		for (let selector in this.mappings) {
			let mapping = this.mappings[selector]
			let alias = mapping.alias
			if (this.alias.hasOwnProperty(alias) && alias !== null) {
				console.error("An alias of the name '" + alias + "' already exists")
			} else {
				this.alias[alias] = {}
				let listeners = {}
				for (let property in mapping.rules) {
					let value = mapping.rules[property]
					if (typeof value === 'function') {
						let ruleset = {}
						ruleset[property] = value
						listeners[property] = () => {
							this.applyRuleset(selector, ruleset)
							this.paint()
							return true
						}
					}
				}
				this.alias[alias] = listeners
			}
		}
	}

	/**
	 * Prioritizes and cascades the style tree for the entire document
	*/
	cascade() {
		let prioritizedList = Array.apply(null, Array(this.mappingsPriority + 1)).map(() => { return [] })
		for (let key in this.mappings) {
			let mapping = this.mappings[key]
			prioritizedList[mapping.priority].push([key, mapping.rules])
		}
		prioritizedList.map(set => {
			set.map(mapping => {
				this.applyRuleset(mapping[0], mapping[1])
			})
		})
	}

	/**
	 * Apply a ruleset for a certain selector into the selector's nodes
	 * @param {string} selector - the selector string i.e. "html body .thing"
	 * @param {object} ruleset - the full style ruleset to be applied
	*/
	applyRuleset(selector = null, ruleset = null) {
		if (selector === null || ruleset === null) return false
		if (this.hasPsuedo(selector) && this.applyPsuedo(selector, ruleset)) return true
		let elems = this.find(selector.toString())
		if (elems.length === 0) return false
		elems.map(elem => {
			let style = elem.getAttribute('data-descartes')
			if (typeof style === 'undefined') return
			style = (style === null) ? {} : JSON.parse(style)
			let computed = {}
			for (let property in ruleset) {
				computed[property] = this.computeRule(property, ruleset[property], elem)
			}
			style = Object.assign(style, computed)
			elem.setAttribute('data-descartes', JSON.stringify(style))
		})
	}

	/**
	 * Apply a ruleset for a certain selector
	 * @param {string} property - the name of the property i.e. "border", "margin", etc.
	 * @param {object} value - the unparsed value of the rule, a function, string, or number
	 * @param {object} elem - the DOM element that the value function should use, if passed
	 * @return {string, bool} the valid CSS property value, otherwise false
	*/
	computeRule(property, value, elem = null) {
		// If the value is a function, evaluate the function to get the computed value
		if (typeof value === 'function') {
			try {
				value = value(elem)
			}
			catch(e) {
				return false
			}
		}
		if (value === null) return null
		if (value === undefined) return null
		let except = this.pxExceptions
		if (Number(value) === value && except.indexOf(property) < 0) {
			return value.toString() + "px"
		}
		if (property === 'content') {
			return "'" + value.toString() + "'"
		}
		return value.toString()
	}

	/**
	 * Create inline styles for pseudo selectors
	 * @param {string} selector - the selector string
	 * @param {object} ruleset - the relevant ruleset for the selector
	 * @return {bool} whether the application was successful
	*/
	applyPsuedo(selector, ruleset) {
		if (this.hasPsuedo(selector)) {
			let sheetContents = selector + " {" + this.createStyleString(ruleset) + ' }';
			if (this.findType === 'jquery') {
				let sheet = '<style type="text/css" class="_pseudo">' + sheetContents + '</style>';
				$(sheet).appendTo("body")
				return
			} else if (this.findType === 'sizzle') {
				let sheet = document.createElement('style')
				sheet.type = 'text/css'
				sheet.class = '_psuedo'
				sheet.innerHTML = sheetContents
				document.body.appendChild(sheet)
				return
			}
			return true
		}
		return false
	}

	/**
	 * Binds event listeners for all selectors
	*/
	bindListeners() {
		let _this = this
		for (let selector in this.mappings) {
			let mapping = this.mappings[selector]
			let listeners = mapping.listeners
			let defaultRules = mapping.rules
			if (listeners.length === 0) continue
			listeners.map(l => {
				if (l.selector === "window") l.selector = window
				if (l.selector === "document") l.selector = document
				let _ = () => {
					if (_this.listening) {
						this.applyRuleset(selector, l.rules)
						this.paint()
					}
				}
				this.find(l.selector).map(e => e.addEventListener(l.event, _))
				for (let property in l.rules) {
					if (defaultRules[property] === undefined) {
						_()
					}
				}
			})
		}
	}

	/**
	 * Apply inline styles for all finalized rules
	*/
	paint() {
		let all = this.find("*")
		all.map(x => {
			let style = x.getAttribute('data-descartes')
			if (typeof style === 'undefined' || style === null) return
			x.setAttribute('style', this.createStyleString(JSON.parse(style), x))
		})
	}

	/**
	 Replaces the current DOM with the stylesheet string
	*/
	showStyleSheet() {
		this.stylesheet = true
		this.listening = false
		document.body.setAttribute('style', 'font-family: "Courier New", Courier, monospace; font-size: 14px;')
		document.body.innerHTML = this.createStyleSheet()
	}

	/**
	 * Generates a valid CSS stylesheet body based on the current mapping
	 * @return {string} the final CSS ruleset string
	*/
	createStyleSheet() {
		if (!this.mappings) return false;
		let sheet = "";
		for (let selector in this.mappings) {
			let ruleset = this.mappings[selector].rules;
			sheet += selector + " {" + this.createStyleString(ruleset) + "}<br/>"
		}
		return sheet
	}

	/**
	 * Generate valid CSS ruleset as a string
	 * @param {object} ruleset - a full ruleset to be converted
	 * @param {object} elem - the DOM node to evaluate any functional values on
	 * @return {string} the final CSS ruleset string
	*/
	createStyleString(ruleset, elem = null) {
		let style = ""
		for (let property in ruleset) {
			let value = ruleset[property];
			let computedRule = this.computeRule(property, value, elem)
			if (computedRule) style += property + ": " + computedRule + "; "
		}
		style = style.slice(0, -1);
		return style
	}

	/**
	 * Creates a valid nested CSS selector based on nested selectors in style tree
	 * @param {string} current - the current level selector
	 * @param {string} parent - the parent selector (if there is one)
	 * @return {string} the final CSS selector string
	*/
	nestSelector(current, parent) {
		let separator = " "
		if (this.isSuffix(current)) {
			separator = ""
			current = current.substring(1)
		}
		return parent + separator + current
	}

	/**
	 * Evaluates a key and returns its type as a meta, a CSS property, or CSS selector
	 * @param {string} key - the key to be validated
	 * @return {object} an object with the original key and its type
	*/
	parseKey(key) {
		let obj = {
			key: key,
			type : this.SELECTOR
		}
		if (this.isAlias(key)) {
			obj.type = this.ALIAS
		} else if (this.isScope(key)) {
			obj.type = this.SCOPE
		} else if (this.isListener(key)) {
			obj.type = this.LISTENER
		} else if (this.isProperty(key)) {
			obj.type = this.PROPERTY
		}
		return obj
	}

	/**
	 * Checks if a key is special Descartes meta rule i.e. mixins, event listeners
	 * @return {bool} whether the key is a Descartes meta rule
	*/
	isMeta(key) {
		return this.isListener(key)
	}

	/**
	 * Checks if a key is special Descartes meta rule i.e. mixins, event listeners
	 * @return {bool} whether the key is a Descartes meta rule
	*/
	isAlias(key) {
		return key === this.ALIAS_KEYWORD
	}

	/** Checks if the key is specifying a mixin
	 * @return {bool} whether the key matches the mixins keyword
	*/
	isScope(key) {
		return key.substring(0,1) === this.SCOPE_KEYWORD
	}

	/** Checks if the key is a listener
	 * @return {bool} whether the key is a listener with a prefix and event
	*/
	isListener(key) {
		return this.parseListener(key).length === 2
	}

	/** Checks if the key is a valid CSS property
	 * @return {bool} whether the key is a valid CSS property
	*/
	isProperty(key) {
		return this.properties.indexOf(key) > -1
	}

	/** Checks if the key is a suffix to the parent selector
	 * @return {bool} whether the key is a suffix to the parent selector
	*/
	isSuffix(key) {
		return key.substr(0, 1) === '&'
	}

	parseListener(key) {
		const pattern = new RegExp('\\' + this.LISTENER_PREFIX + '\\((.+?)\\)+\.(.+?)$')
		var result = key.match(pattern)
		return (result !== null && result[0] === result.input && result.length === 3) ? [result[1], result[2]] : []
	}

	/**
	 * Checks if the selector has a pseudo selector i.e. :after, :before, etc.
	 * @return {bool} whether the selector contains a pseudo selector
	*/
	hasPsuedo(selector) {
		for (let key in this.pseudos) {
			let pattern = this.pseudos[key]
			let regex = new RegExp('.+' + pattern)
			if (selector.match(regex) != null) return true
		}
		return false
	}
}

window.Descartes = new DescartesEngine({})

// Completely hide the entire DOM until Descartes fires
document.getElementsByTagName("html")[0].style.display = "none";
(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);
docReady(function() {
    // code here
    document.getElementsByTagName("html")[0].style.display = "block";
});