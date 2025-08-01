import{aT as ge,aU as ze,aV as pe,aW as ve,aX as be,aY as Lt,aZ as Pe,aL as Gt,_ as l,g as Oe,s as Ne,q as Re,p as Be,a as He,b as qe,c as ut,d as bt,a_ as Ge,a$ as Xe,b0 as Ue,e as Ze,L as je,b1 as Z,l as Et,b2 as ne,b3 as ie,b4 as $e,b5 as Qe,b6 as Ke,b7 as Je,b8 as tr,b9 as er,ba as rr,bb as ae,bc as se,bd as ce,be as oe,bf as le,k as nr,j as ir,y as ar,u as sr}from"./index-DqERu7Mm.js";const cr=Math.PI/180,or=180/Math.PI,Mt=18,xe=.96422,Te=1,we=.82521,_e=4/29,dt=6/29,De=3*dt*dt,lr=dt*dt*dt;function Ce(t){if(t instanceof et)return new et(t.l,t.a,t.b,t.opacity);if(t instanceof nt)return Se(t);t instanceof ge||(t=ze(t));var e=zt(t.r),r=zt(t.g),n=zt(t.b),a=Yt((.2225045*e+.7168786*r+.0606169*n)/Te),h,u;return e===r&&r===n?h=u=a:(h=Yt((.4360747*e+.3850649*r+.1430804*n)/xe),u=Yt((.0139322*e+.0971045*r+.7141733*n)/we)),new et(116*a-16,500*(h-a),200*(a-u),t.opacity)}function ur(t,e,r,n){return arguments.length===1?Ce(t):new et(t,e,r,n??1)}function et(t,e,r,n){this.l=+t,this.a=+e,this.b=+r,this.opacity=+n}pe(et,ur,ve(be,{brighter(t){return new et(this.l+Mt*(t??1),this.a,this.b,this.opacity)},darker(t){return new et(this.l-Mt*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,r=isNaN(this.b)?t:t-this.b/200;return e=xe*Wt(e),t=Te*Wt(t),r=we*Wt(r),new ge(Vt(3.1338561*e-1.6168667*t-.4906146*r),Vt(-.9787684*e+1.9161415*t+.033454*r),Vt(.0719453*e-.2289914*t+1.4052427*r),this.opacity)}}));function Yt(t){return t>lr?Math.pow(t,1/3):t/De+_e}function Wt(t){return t>dt?t*t*t:De*(t-_e)}function Vt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function zt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function dr(t){if(t instanceof nt)return new nt(t.h,t.c,t.l,t.opacity);if(t instanceof et||(t=Ce(t)),t.a===0&&t.b===0)return new nt(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*or;return new nt(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Ot(t,e,r,n){return arguments.length===1?dr(t):new nt(t,e,r,n??1)}function nt(t,e,r,n){this.h=+t,this.c=+e,this.l=+r,this.opacity=+n}function Se(t){if(isNaN(t.h))return new et(t.l,0,0,t.opacity);var e=t.h*cr;return new et(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}pe(nt,Ot,ve(be,{brighter(t){return new nt(this.h,this.c,this.l+Mt*(t??1),this.opacity)},darker(t){return new nt(this.h,this.c,this.l-Mt*(t??1),this.opacity)},rgb(){return Se(this).rgb()}}));function fr(t){return function(e,r){var n=t((e=Ot(e)).h,(r=Ot(r)).h),a=Lt(e.c,r.c),h=Lt(e.l,r.l),u=Lt(e.opacity,r.opacity);return function(T){return e.h=n(T),e.c=a(T),e.l=h(T),e.opacity=u(T),e+""}}}const hr=fr(Pe);function mr(t){return t}var Tt=1,Pt=2,Nt=3,xt=4,ue=1e-6;function kr(t){return"translate("+t+",0)"}function yr(t){return"translate(0,"+t+")"}function gr(t){return e=>+t(e)}function pr(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function vr(){return!this.__axis}function Ee(t,e){var r=[],n=null,a=null,h=6,u=6,T=3,E=typeof window<"u"&&window.devicePixelRatio>1?0:.5,S=t===Tt||t===xt?-1:1,g=t===xt||t===Pt?"x":"y",F=t===Tt||t===Nt?kr:yr;function C(v){var q=n??(e.ticks?e.ticks.apply(e,r):e.domain()),A=a??(e.tickFormat?e.tickFormat.apply(e,r):mr),b=Math.max(h,0)+T,M=e.range(),L=+M[0]+E,Y=+M[M.length-1]+E,R=(e.bandwidth?pr:gr)(e.copy(),E),N=v.selection?v.selection():v,G=N.selectAll(".domain").data([null]),P=N.selectAll(".tick").data(q,e).order(),y=P.exit(),w=P.enter().append("g").attr("class","tick"),x=P.select("line"),p=P.select("text");G=G.merge(G.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),P=P.merge(w),x=x.merge(w.append("line").attr("stroke","currentColor").attr(g+"2",S*h)),p=p.merge(w.append("text").attr("fill","currentColor").attr(g,S*b).attr("dy",t===Tt?"0em":t===Nt?"0.71em":"0.32em")),v!==N&&(G=G.transition(v),P=P.transition(v),x=x.transition(v),p=p.transition(v),y=y.transition(v).attr("opacity",ue).attr("transform",function(k){return isFinite(k=R(k))?F(k+E):this.getAttribute("transform")}),w.attr("opacity",ue).attr("transform",function(k){var _=this.parentNode.__axis;return F((_&&isFinite(_=_(k))?_:R(k))+E)})),y.remove(),G.attr("d",t===xt||t===Pt?u?"M"+S*u+","+L+"H"+E+"V"+Y+"H"+S*u:"M"+E+","+L+"V"+Y:u?"M"+L+","+S*u+"V"+E+"H"+Y+"V"+S*u:"M"+L+","+E+"H"+Y),P.attr("opacity",1).attr("transform",function(k){return F(R(k)+E)}),x.attr(g+"2",S*h),p.attr(g,S*b).text(A),N.filter(vr).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Pt?"start":t===xt?"end":"middle"),N.each(function(){this.__axis=R})}return C.scale=function(v){return arguments.length?(e=v,C):e},C.ticks=function(){return r=Array.from(arguments),C},C.tickArguments=function(v){return arguments.length?(r=v==null?[]:Array.from(v),C):r.slice()},C.tickValues=function(v){return arguments.length?(n=v==null?null:Array.from(v),C):n&&n.slice()},C.tickFormat=function(v){return arguments.length?(a=v,C):a},C.tickSize=function(v){return arguments.length?(h=u=+v,C):h},C.tickSizeInner=function(v){return arguments.length?(h=+v,C):h},C.tickSizeOuter=function(v){return arguments.length?(u=+v,C):u},C.tickPadding=function(v){return arguments.length?(T=+v,C):T},C.offset=function(v){return arguments.length?(E=+v,C):E},C}function br(t){return Ee(Tt,t)}function xr(t){return Ee(Nt,t)}var wt={exports:{}},Tr=wt.exports,de;function wr(){return de||(de=1,function(t,e){(function(r,n){t.exports=n()})(Tr,function(){var r="day";return function(n,a,h){var u=function(S){return S.add(4-S.isoWeekday(),r)},T=a.prototype;T.isoWeekYear=function(){return u(this).year()},T.isoWeek=function(S){if(!this.$utils().u(S))return this.add(7*(S-this.isoWeek()),r);var g,F,C,v,q=u(this),A=(g=this.isoWeekYear(),F=this.$u,C=(F?h.utc:h)().year(g).startOf("year"),v=4-C.isoWeekday(),C.isoWeekday()>4&&(v+=7),C.add(v,r));return q.diff(A,"week")+1},T.isoWeekday=function(S){return this.$utils().u(S)?this.day()||7:this.day(this.day()%7?S:S-7)};var E=T.startOf;T.startOf=function(S,g){var F=this.$utils(),C=!!F.u(g)||g;return F.p(S)==="isoweek"?C?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):E.bind(this)(S,g)}}})}(wt)),wt.exports}var _r=wr();const Dr=Gt(_r);var _t={exports:{}},Cr=_t.exports,fe;function Sr(){return fe||(fe=1,function(t,e){(function(r,n){t.exports=n()})(Cr,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,h=/\d\d/,u=/\d\d?/,T=/\d*[^-_:/,()\s\d]+/,E={},S=function(b){return(b=+b)+(b>68?1900:2e3)},g=function(b){return function(M){this[b]=+M}},F=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(M){if(!M||M==="Z")return 0;var L=M.match(/([+-]|\d\d)/g),Y=60*L[1]+(+L[2]||0);return Y===0?0:L[0]==="+"?-Y:Y}(b)}],C=function(b){var M=E[b];return M&&(M.indexOf?M:M.s.concat(M.f))},v=function(b,M){var L,Y=E.meridiem;if(Y){for(var R=1;R<=24;R+=1)if(b.indexOf(Y(R,0,M))>-1){L=R>12;break}}else L=b===(M?"pm":"PM");return L},q={A:[T,function(b){this.afternoon=v(b,!1)}],a:[T,function(b){this.afternoon=v(b,!0)}],Q:[a,function(b){this.month=3*(b-1)+1}],S:[a,function(b){this.milliseconds=100*+b}],SS:[h,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[u,g("seconds")],ss:[u,g("seconds")],m:[u,g("minutes")],mm:[u,g("minutes")],H:[u,g("hours")],h:[u,g("hours")],HH:[u,g("hours")],hh:[u,g("hours")],D:[u,g("day")],DD:[h,g("day")],Do:[T,function(b){var M=E.ordinal,L=b.match(/\d+/);if(this.day=L[0],M)for(var Y=1;Y<=31;Y+=1)M(Y).replace(/\[|\]/g,"")===b&&(this.day=Y)}],w:[u,g("week")],ww:[h,g("week")],M:[u,g("month")],MM:[h,g("month")],MMM:[T,function(b){var M=C("months"),L=(C("monthsShort")||M.map(function(Y){return Y.slice(0,3)})).indexOf(b)+1;if(L<1)throw new Error;this.month=L%12||L}],MMMM:[T,function(b){var M=C("months").indexOf(b)+1;if(M<1)throw new Error;this.month=M%12||M}],Y:[/[+-]?\d+/,g("year")],YY:[h,function(b){this.year=S(b)}],YYYY:[/\d{4}/,g("year")],Z:F,ZZ:F};function A(b){var M,L;M=b,L=E&&E.formats;for(var Y=(b=M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,p,k){var _=k&&k.toUpperCase();return p||L[k]||r[k]||L[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(o,d,m){return d||m.slice(1)})})).match(n),R=Y.length,N=0;N<R;N+=1){var G=Y[N],P=q[G],y=P&&P[0],w=P&&P[1];Y[N]=w?{regex:y,parser:w}:G.replace(/^\[|\]$/g,"")}return function(x){for(var p={},k=0,_=0;k<R;k+=1){var o=Y[k];if(typeof o=="string")_+=o.length;else{var d=o.regex,m=o.parser,f=x.slice(_),D=d.exec(f)[0];m.call(p,D),x=x.replace(D,"")}}return function(s){var c=s.afternoon;if(c!==void 0){var i=s.hours;c?i<12&&(s.hours+=12):i===12&&(s.hours=0),delete s.afternoon}}(p),p}}return function(b,M,L){L.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(S=b.parseTwoDigitYear);var Y=M.prototype,R=Y.parse;Y.parse=function(N){var G=N.date,P=N.utc,y=N.args;this.$u=P;var w=y[1];if(typeof w=="string"){var x=y[2]===!0,p=y[3]===!0,k=x||p,_=y[2];p&&(_=y[2]),E=this.$locale(),!x&&_&&(E=L.Ls[_]),this.$d=function(f,D,s,c){try{if(["x","X"].indexOf(D)>-1)return new Date((D==="X"?1e3:1)*f);var i=A(D)(f),V=i.year,I=i.month,W=i.day,X=i.hours,z=i.minutes,O=i.seconds,Q=i.milliseconds,ct=i.zone,ot=i.week,mt=new Date,kt=W||(V||I?1:mt.getDate()),lt=V||mt.getFullYear(),B=0;V&&!I||(B=I>0?I-1:mt.getMonth());var $,U=X||0,at=z||0,K=O||0,it=Q||0;return ct?new Date(Date.UTC(lt,B,kt,U,at,K,it+60*ct.offset*1e3)):s?new Date(Date.UTC(lt,B,kt,U,at,K,it)):($=new Date(lt,B,kt,U,at,K,it),ot&&($=c($).week(ot).toDate()),$)}catch{return new Date("")}}(G,w,P,L),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),k&&G!=this.format(w)&&(this.$d=new Date("")),E={}}else if(w instanceof Array)for(var o=w.length,d=1;d<=o;d+=1){y[1]=w[d-1];var m=L.apply(this,y);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}d===o&&(this.$d=new Date(""))}else R.call(this,N)}}})}(_t)),_t.exports}var Er=Sr();const Mr=Gt(Er);var Dt={exports:{}},Ar=Dt.exports,he;function Ir(){return he||(he=1,function(t,e){(function(r,n){t.exports=n()})(Ar,function(){return function(r,n){var a=n.prototype,h=a.format;a.format=function(u){var T=this,E=this.$locale();if(!this.isValid())return h.bind(this)(u);var S=this.$utils(),g=(u||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(F){switch(F){case"Q":return Math.ceil((T.$M+1)/3);case"Do":return E.ordinal(T.$D);case"gggg":return T.weekYear();case"GGGG":return T.isoWeekYear();case"wo":return E.ordinal(T.week(),"W");case"w":case"ww":return S.s(T.week(),F==="w"?1:2,"0");case"W":case"WW":return S.s(T.isoWeek(),F==="W"?1:2,"0");case"k":case"kk":return S.s(String(T.$H===0?24:T.$H),F==="k"?1:2,"0");case"X":return Math.floor(T.$d.getTime()/1e3);case"x":return T.$d.getTime();case"z":return"["+T.offsetName()+"]";case"zzz":return"["+T.offsetName("long")+"]";default:return F}});return h.bind(this)(g)}}})}(Dt)),Dt.exports}var Fr=Ir();const Lr=Gt(Fr);var Rt=function(){var t=l(function(_,o,d,m){for(d=d||{},m=_.length;m--;d[_[m]]=o);return d},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],n=[1,27],a=[1,28],h=[1,29],u=[1,30],T=[1,31],E=[1,32],S=[1,33],g=[1,34],F=[1,9],C=[1,10],v=[1,11],q=[1,12],A=[1,13],b=[1,14],M=[1,15],L=[1,16],Y=[1,19],R=[1,20],N=[1,21],G=[1,22],P=[1,23],y=[1,25],w=[1,35],x={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(o,d,m,f,D,s,c){var i=s.length-1;switch(D){case 1:return s[i-1];case 2:this.$=[];break;case 3:s[i-1].push(s[i]),this.$=s[i-1];break;case 4:case 5:this.$=s[i];break;case 6:case 7:this.$=[];break;case 8:f.setWeekday("monday");break;case 9:f.setWeekday("tuesday");break;case 10:f.setWeekday("wednesday");break;case 11:f.setWeekday("thursday");break;case 12:f.setWeekday("friday");break;case 13:f.setWeekday("saturday");break;case 14:f.setWeekday("sunday");break;case 15:f.setWeekend("friday");break;case 16:f.setWeekend("saturday");break;case 17:f.setDateFormat(s[i].substr(11)),this.$=s[i].substr(11);break;case 18:f.enableInclusiveEndDates(),this.$=s[i].substr(18);break;case 19:f.TopAxis(),this.$=s[i].substr(8);break;case 20:f.setAxisFormat(s[i].substr(11)),this.$=s[i].substr(11);break;case 21:f.setTickInterval(s[i].substr(13)),this.$=s[i].substr(13);break;case 22:f.setExcludes(s[i].substr(9)),this.$=s[i].substr(9);break;case 23:f.setIncludes(s[i].substr(9)),this.$=s[i].substr(9);break;case 24:f.setTodayMarker(s[i].substr(12)),this.$=s[i].substr(12);break;case 27:f.setDiagramTitle(s[i].substr(6)),this.$=s[i].substr(6);break;case 28:this.$=s[i].trim(),f.setAccTitle(this.$);break;case 29:case 30:this.$=s[i].trim(),f.setAccDescription(this.$);break;case 31:f.addSection(s[i].substr(8)),this.$=s[i].substr(8);break;case 33:f.addTask(s[i-1],s[i]),this.$="task";break;case 34:this.$=s[i-1],f.setClickEvent(s[i-1],s[i],null);break;case 35:this.$=s[i-2],f.setClickEvent(s[i-2],s[i-1],s[i]);break;case 36:this.$=s[i-2],f.setClickEvent(s[i-2],s[i-1],null),f.setLink(s[i-2],s[i]);break;case 37:this.$=s[i-3],f.setClickEvent(s[i-3],s[i-2],s[i-1]),f.setLink(s[i-3],s[i]);break;case 38:this.$=s[i-2],f.setClickEvent(s[i-2],s[i],null),f.setLink(s[i-2],s[i-1]);break;case 39:this.$=s[i-3],f.setClickEvent(s[i-3],s[i-1],s[i]),f.setLink(s[i-3],s[i-2]);break;case 40:this.$=s[i-1],f.setLink(s[i-1],s[i]);break;case 41:case 47:this.$=s[i-1]+" "+s[i];break;case 42:case 43:case 45:this.$=s[i-2]+" "+s[i-1]+" "+s[i];break;case 44:case 46:this.$=s[i-3]+" "+s[i-2]+" "+s[i-1]+" "+s[i];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:n,14:a,15:h,16:u,17:T,18:E,19:18,20:S,21:g,22:F,23:C,24:v,25:q,26:A,27:b,28:M,29:L,30:Y,31:R,33:N,35:G,36:P,37:24,38:y,40:w},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:r,13:n,14:a,15:h,16:u,17:T,18:E,19:18,20:S,21:g,22:F,23:C,24:v,25:q,26:A,27:b,28:M,29:L,30:Y,31:R,33:N,35:G,36:P,37:24,38:y,40:w},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:l(function(o,d){if(d.recoverable)this.trace(o);else{var m=new Error(o);throw m.hash=d,m}},"parseError"),parse:l(function(o){var d=this,m=[0],f=[],D=[null],s=[],c=this.table,i="",V=0,I=0,W=2,X=1,z=s.slice.call(arguments,1),O=Object.create(this.lexer),Q={yy:{}};for(var ct in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ct)&&(Q.yy[ct]=this.yy[ct]);O.setInput(o,Q.yy),Q.yy.lexer=O,Q.yy.parser=this,typeof O.yylloc>"u"&&(O.yylloc={});var ot=O.yylloc;s.push(ot);var mt=O.options&&O.options.ranges;typeof Q.yy.parseError=="function"?this.parseError=Q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function kt(j){m.length=m.length-2*j,D.length=D.length-j,s.length=s.length-j}l(kt,"popStack");function lt(){var j;return j=f.pop()||O.lex()||X,typeof j!="number"&&(j instanceof Array&&(f=j,j=f.pop()),j=d.symbols_[j]||j),j}l(lt,"lex");for(var B,$,U,at,K={},it,J,re,vt;;){if($=m[m.length-1],this.defaultActions[$]?U=this.defaultActions[$]:((B===null||typeof B>"u")&&(B=lt()),U=c[$]&&c[$][B]),typeof U>"u"||!U.length||!U[0]){var Ft="";vt=[];for(it in c[$])this.terminals_[it]&&it>W&&vt.push("'"+this.terminals_[it]+"'");O.showPosition?Ft="Parse error on line "+(V+1)+`:
`+O.showPosition()+`
Expecting `+vt.join(", ")+", got '"+(this.terminals_[B]||B)+"'":Ft="Parse error on line "+(V+1)+": Unexpected "+(B==X?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError(Ft,{text:O.match,token:this.terminals_[B]||B,line:O.yylineno,loc:ot,expected:vt})}if(U[0]instanceof Array&&U.length>1)throw new Error("Parse Error: multiple actions possible at state: "+$+", token: "+B);switch(U[0]){case 1:m.push(B),D.push(O.yytext),s.push(O.yylloc),m.push(U[1]),B=null,I=O.yyleng,i=O.yytext,V=O.yylineno,ot=O.yylloc;break;case 2:if(J=this.productions_[U[1]][1],K.$=D[D.length-J],K._$={first_line:s[s.length-(J||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(J||1)].first_column,last_column:s[s.length-1].last_column},mt&&(K._$.range=[s[s.length-(J||1)].range[0],s[s.length-1].range[1]]),at=this.performAction.apply(K,[i,I,V,Q.yy,U[1],D,s].concat(z)),typeof at<"u")return at;J&&(m=m.slice(0,-1*J*2),D=D.slice(0,-1*J),s=s.slice(0,-1*J)),m.push(this.productions_[U[1]][0]),D.push(K.$),s.push(K._$),re=c[m[m.length-2]][m[m.length-1]],m.push(re);break;case 3:return!0}}return!0},"parse")},p=function(){var _={EOF:1,parseError:l(function(d,m){if(this.yy.parser)this.yy.parser.parseError(d,m);else throw new Error(d)},"parseError"),setInput:l(function(o,d){return this.yy=d||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var d=o.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:l(function(o){var d=o.length,m=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),m.length-1&&(this.yylineno-=m.length-1);var D=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:m?(m.length===f.length?this.yylloc.first_column:0)+f[f.length-m.length].length-m[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[D[0],D[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(o){this.unput(this.match.slice(o))},"less"),pastInput:l(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var o=this.pastInput(),d=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:l(function(o,d){var m,f,D;if(this.options.backtrack_lexer&&(D={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(D.yylloc.range=this.yylloc.range.slice(0))),f=o[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],m=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),m)return m;if(this._backtrack){for(var s in D)this[s]=D[s];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,d,m,f;this._more||(this.yytext="",this.match="");for(var D=this._currentRules(),s=0;s<D.length;s++)if(m=this._input.match(this.rules[D[s]]),m&&(!d||m[0].length>d[0].length)){if(d=m,f=s,this.options.backtrack_lexer){if(o=this.test_match(m,D[s]),o!==!1)return o;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(o=this.test_match(d,D[f]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var d=this.next();return d||this.lex()},"lex"),begin:l(function(d){this.conditionStack.push(d)},"begin"),popState:l(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:l(function(d){this.begin(d)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(d,m,f,D){switch(f){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return _}();x.lexer=p;function k(){this.yy={}}return l(k,"Parser"),k.prototype=x,x.Parser=k,new k}();Rt.parser=Rt;var Yr=Rt;Z.extend(Dr);Z.extend(Mr);Z.extend(Lr);var me={friday:5,saturday:6},tt="",Xt="",Ut=void 0,Zt="",yt=[],gt=[],jt=new Map,$t=[],At=[],ht="",Qt="",Me=["active","done","crit","milestone","vert"],Kt=[],pt=!1,Jt=!1,te="sunday",It="saturday",Bt=0,Wr=l(function(){$t=[],At=[],ht="",Kt=[],Ct=0,qt=void 0,St=void 0,H=[],tt="",Xt="",Qt="",Ut=void 0,Zt="",yt=[],gt=[],pt=!1,Jt=!1,Bt=0,jt=new Map,ar(),te="sunday",It="saturday"},"clear"),Vr=l(function(t){Xt=t},"setAxisFormat"),zr=l(function(){return Xt},"getAxisFormat"),Pr=l(function(t){Ut=t},"setTickInterval"),Or=l(function(){return Ut},"getTickInterval"),Nr=l(function(t){Zt=t},"setTodayMarker"),Rr=l(function(){return Zt},"getTodayMarker"),Br=l(function(t){tt=t},"setDateFormat"),Hr=l(function(){pt=!0},"enableInclusiveEndDates"),qr=l(function(){return pt},"endDatesAreInclusive"),Gr=l(function(){Jt=!0},"enableTopAxis"),Xr=l(function(){return Jt},"topAxisEnabled"),Ur=l(function(t){Qt=t},"setDisplayMode"),Zr=l(function(){return Qt},"getDisplayMode"),jr=l(function(){return tt},"getDateFormat"),$r=l(function(t){yt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),Qr=l(function(){return yt},"getIncludes"),Kr=l(function(t){gt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),Jr=l(function(){return gt},"getExcludes"),tn=l(function(){return jt},"getLinks"),en=l(function(t){ht=t,$t.push(t)},"addSection"),rn=l(function(){return $t},"getSections"),nn=l(function(){let t=ke();const e=10;let r=0;for(;!t&&r<e;)t=ke(),r++;return At=H,At},"getTasks"),Ae=l(function(t,e,r,n){return n.includes(t.format(e.trim()))?!1:r.includes("weekends")&&(t.isoWeekday()===me[It]||t.isoWeekday()===me[It]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(t.format(e.trim()))},"isInvalidDate"),an=l(function(t){te=t},"setWeekday"),sn=l(function(){return te},"getWeekday"),cn=l(function(t){It=t},"setWeekend"),Ie=l(function(t,e,r,n){if(!r.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=Z(t.startTime):a=Z(t.startTime,e,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=Z(t.endTime):h=Z(t.endTime,e,!0);const[u,T]=on(a,h,e,r,n);t.endTime=u.toDate(),t.renderEndTime=T},"checkTaskDates"),on=l(function(t,e,r,n,a){let h=!1,u=null;for(;t<=e;)h||(u=e.toDate()),h=Ae(t,r,n,a),h&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,u]},"fixTaskDates"),Ht=l(function(t,e,r){r=r.trim();const a=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(a!==null){let u=null;for(const E of a.groups.ids.split(" ")){let S=st(E);S!==void 0&&(!u||S.endTime>u.endTime)&&(u=S)}if(u)return u.endTime;const T=new Date;return T.setHours(0,0,0,0),T}let h=Z(r,e.trim(),!0);if(h.isValid())return h.toDate();{Et.debug("Invalid date:"+r),Et.debug("With date format:"+e.trim());const u=new Date(r);if(u===void 0||isNaN(u.getTime())||u.getFullYear()<-1e4||u.getFullYear()>1e4)throw new Error("Invalid date:"+r);return u}},"getStartDate"),Fe=l(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),Le=l(function(t,e,r,n=!1){r=r.trim();const h=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(h!==null){let g=null;for(const C of h.groups.ids.split(" ")){let v=st(C);v!==void 0&&(!g||v.startTime<g.startTime)&&(g=v)}if(g)return g.startTime;const F=new Date;return F.setHours(0,0,0,0),F}let u=Z(r,e.trim(),!0);if(u.isValid())return n&&(u=u.add(1,"d")),u.toDate();let T=Z(t);const[E,S]=Fe(r);if(!Number.isNaN(E)){const g=T.add(E,S);g.isValid()&&(T=g)}return T.toDate()},"getEndDate"),Ct=0,ft=l(function(t){return t===void 0?(Ct=Ct+1,"task"+Ct):t},"parseId"),ln=l(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const n=r.split(","),a={};ee(n,a,Me);for(let u=0;u<n.length;u++)n[u]=n[u].trim();let h="";switch(n.length){case 1:a.id=ft(),a.startTime=t.endTime,h=n[0];break;case 2:a.id=ft(),a.startTime=Ht(void 0,tt,n[0]),h=n[1];break;case 3:a.id=ft(n[0]),a.startTime=Ht(void 0,tt,n[1]),h=n[2];break}return h&&(a.endTime=Le(a.startTime,tt,h,pt),a.manualEndTime=Z(h,"YYYY-MM-DD",!0).isValid(),Ie(a,tt,gt,yt)),a},"compileData"),un=l(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const n=r.split(","),a={};ee(n,a,Me);for(let h=0;h<n.length;h++)n[h]=n[h].trim();switch(n.length){case 1:a.id=ft(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:n[0]};break;case 2:a.id=ft(),a.startTime={type:"getStartDate",startData:n[0]},a.endTime={data:n[1]};break;case 3:a.id=ft(n[0]),a.startTime={type:"getStartDate",startData:n[1]},a.endTime={data:n[2]};break}return a},"parseData"),qt,St,H=[],Ye={},dn=l(function(t,e){const r={section:ht,type:ht,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},n=un(St,e);r.raw.startTime=n.startTime,r.raw.endTime=n.endTime,r.id=n.id,r.prevTaskId=St,r.active=n.active,r.done=n.done,r.crit=n.crit,r.milestone=n.milestone,r.vert=n.vert,r.order=Bt,Bt++;const a=H.push(r);St=r.id,Ye[r.id]=a-1},"addTask"),st=l(function(t){const e=Ye[t];return H[e]},"findTaskById"),fn=l(function(t,e){const r={section:ht,type:ht,description:t,task:t,classes:[]},n=ln(qt,e);r.startTime=n.startTime,r.endTime=n.endTime,r.id=n.id,r.active=n.active,r.done=n.done,r.crit=n.crit,r.milestone=n.milestone,r.vert=n.vert,qt=r,At.push(r)},"addTaskOrg"),ke=l(function(){const t=l(function(r){const n=H[r];let a="";switch(H[r].raw.startTime.type){case"prevTaskEnd":{const h=st(n.prevTaskId);n.startTime=h.endTime;break}case"getStartDate":a=Ht(void 0,tt,H[r].raw.startTime.startData),a&&(H[r].startTime=a);break}return H[r].startTime&&(H[r].endTime=Le(H[r].startTime,tt,H[r].raw.endTime.data,pt),H[r].endTime&&(H[r].processed=!0,H[r].manualEndTime=Z(H[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Ie(H[r],tt,gt,yt))),H[r].processed},"compileTask");let e=!0;for(const[r,n]of H.entries())t(r),e=e&&n.processed;return e},"compileTasks"),hn=l(function(t,e){let r=e;ut().securityLevel!=="loose"&&(r=ir.sanitizeUrl(e)),t.split(",").forEach(function(n){st(n)!==void 0&&(Ve(n,()=>{window.open(r,"_self")}),jt.set(n,r))}),We(t,"clickable")},"setLink"),We=l(function(t,e){t.split(",").forEach(function(r){let n=st(r);n!==void 0&&n.classes.push(e)})},"setClass"),mn=l(function(t,e,r){if(ut().securityLevel!=="loose"||e===void 0)return;let n=[];if(typeof r=="string"){n=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<n.length;h++){let u=n[h].trim();u.startsWith('"')&&u.endsWith('"')&&(u=u.substr(1,u.length-2)),n[h]=u}}n.length===0&&n.push(t),st(t)!==void 0&&Ve(t,()=>{sr.runFunc(e,...n)})},"setClickFun"),Ve=l(function(t,e){Kt.push(function(){const r=document.querySelector(`[id="${t}"]`);r!==null&&r.addEventListener("click",function(){e()})},function(){const r=document.querySelector(`[id="${t}-text"]`);r!==null&&r.addEventListener("click",function(){e()})})},"pushFun"),kn=l(function(t,e,r){t.split(",").forEach(function(n){mn(n,e,r)}),We(t,"clickable")},"setClickEvent"),yn=l(function(t){Kt.forEach(function(e){e(t)})},"bindFunctions"),gn={getConfig:l(()=>ut().gantt,"getConfig"),clear:Wr,setDateFormat:Br,getDateFormat:jr,enableInclusiveEndDates:Hr,endDatesAreInclusive:qr,enableTopAxis:Gr,topAxisEnabled:Xr,setAxisFormat:Vr,getAxisFormat:zr,setTickInterval:Pr,getTickInterval:Or,setTodayMarker:Nr,getTodayMarker:Rr,setAccTitle:qe,getAccTitle:He,setDiagramTitle:Be,getDiagramTitle:Re,setDisplayMode:Ur,getDisplayMode:Zr,setAccDescription:Ne,getAccDescription:Oe,addSection:en,getSections:rn,getTasks:nn,addTask:dn,findTaskById:st,addTaskOrg:fn,setIncludes:$r,getIncludes:Qr,setExcludes:Kr,getExcludes:Jr,setClickEvent:kn,setLink:hn,getLinks:tn,bindFunctions:yn,parseDuration:Fe,isInvalidDate:Ae,setWeekday:an,getWeekday:sn,setWeekend:cn};function ee(t,e,r){let n=!0;for(;n;)n=!1,r.forEach(function(a){const h="^\\s*"+a+"\\s*$",u=new RegExp(h);t[0].match(u)&&(e[a]=!0,t.shift(1),n=!0)})}l(ee,"getTaskTags");var pn=l(function(){Et.debug("Something is calling, setConf, remove the call")},"setConf"),ye={monday:rr,tuesday:er,wednesday:tr,thursday:Je,friday:Ke,saturday:Qe,sunday:$e},vn=l((t,e)=>{let r=[...t].map(()=>-1/0),n=[...t].sort((h,u)=>h.startTime-u.startTime||h.order-u.order),a=0;for(const h of n)for(let u=0;u<r.length;u++)if(h.startTime>=r[u]){r[u]=h.endTime,h.order=u+e,u>a&&(a=u);break}return a},"getMaxIntersections"),rt,bn=l(function(t,e,r,n){const a=ut().gantt,h=ut().securityLevel;let u;h==="sandbox"&&(u=bt("#i"+e));const T=h==="sandbox"?bt(u.nodes()[0].contentDocument.body):bt("body"),E=h==="sandbox"?u.nodes()[0].contentDocument:document,S=E.getElementById(e);rt=S.parentElement.offsetWidth,rt===void 0&&(rt=1200),a.useWidth!==void 0&&(rt=a.useWidth);const g=n.db.getTasks();let F=[];for(const y of g)F.push(y.type);F=P(F);const C={};let v=2*a.topPadding;if(n.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const y={};for(const x of g)y[x.section]===void 0?y[x.section]=[x]:y[x.section].push(x);let w=0;for(const x of Object.keys(y)){const p=vn(y[x],w)+1;w+=p,v+=p*(a.barHeight+a.barGap),C[x]=p}}else{v+=g.length*(a.barHeight+a.barGap);for(const y of F)C[y]=g.filter(w=>w.type===y).length}S.setAttribute("viewBox","0 0 "+rt+" "+v);const q=T.select(`[id="${e}"]`),A=Ge().domain([Xe(g,function(y){return y.startTime}),Ue(g,function(y){return y.endTime})]).rangeRound([0,rt-a.leftPadding-a.rightPadding]);function b(y,w){const x=y.startTime,p=w.startTime;let k=0;return x>p?k=1:x<p&&(k=-1),k}l(b,"taskCompare"),g.sort(b),M(g,rt,v),Ze(q,v,rt,a.useMaxWidth),q.append("text").text(n.db.getDiagramTitle()).attr("x",rt/2).attr("y",a.titleTopMargin).attr("class","titleText");function M(y,w,x){const p=a.barHeight,k=p+a.barGap,_=a.topPadding,o=a.leftPadding,d=je().domain([0,F.length]).range(["#00B9FA","#F95002"]).interpolate(hr);Y(k,_,o,w,x,y,n.db.getExcludes(),n.db.getIncludes()),R(o,_,w,x),L(y,k,_,o,p,d,w),N(k,_),G(o,_,w,x)}l(M,"makeGantt");function L(y,w,x,p,k,_,o){y.sort((c,i)=>c.vert===i.vert?0:c.vert?1:-1);const m=[...new Set(y.map(c=>c.order))].map(c=>y.find(i=>i.order===c));q.append("g").selectAll("rect").data(m).enter().append("rect").attr("x",0).attr("y",function(c,i){return i=c.order,i*w+x-2}).attr("width",function(){return o-a.rightPadding/2}).attr("height",w).attr("class",function(c){for(const[i,V]of F.entries())if(c.type===V)return"section section"+i%a.numberSectionStyles;return"section section0"}).enter();const f=q.append("g").selectAll("rect").data(y).enter(),D=n.db.getLinks();if(f.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?A(c.startTime)+p+.5*(A(c.endTime)-A(c.startTime))-.5*k:A(c.startTime)+p}).attr("y",function(c,i){return i=c.order,c.vert?a.gridLineStartPadding:i*w+x}).attr("width",function(c){return c.milestone?k:c.vert?.08*k:A(c.renderEndTime||c.endTime)-A(c.startTime)}).attr("height",function(c){return c.vert?g.length*(a.barHeight+a.barGap)+a.barHeight*2:k}).attr("transform-origin",function(c,i){return i=c.order,(A(c.startTime)+p+.5*(A(c.endTime)-A(c.startTime))).toString()+"px "+(i*w+x+.5*k).toString()+"px"}).attr("class",function(c){const i="task";let V="";c.classes.length>0&&(V=c.classes.join(" "));let I=0;for(const[X,z]of F.entries())c.type===z&&(I=X%a.numberSectionStyles);let W="";return c.active?c.crit?W+=" activeCrit":W=" active":c.done?c.crit?W=" doneCrit":W=" done":c.crit&&(W+=" crit"),W.length===0&&(W=" task"),c.milestone&&(W=" milestone "+W),c.vert&&(W=" vert "+W),W+=I,W+=" "+V,i+W}),f.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",a.fontSize).attr("x",function(c){let i=A(c.startTime),V=A(c.renderEndTime||c.endTime);if(c.milestone&&(i+=.5*(A(c.endTime)-A(c.startTime))-.5*k,V=i+k),c.vert)return A(c.startTime)+p;const I=this.getBBox().width;return I>V-i?V+I+1.5*a.leftPadding>o?i+p-5:V+p+5:(V-i)/2+i+p}).attr("y",function(c,i){return c.vert?a.gridLineStartPadding+g.length*(a.barHeight+a.barGap)+60:(i=c.order,i*w+a.barHeight/2+(a.fontSize/2-2)+x)}).attr("text-height",k).attr("class",function(c){const i=A(c.startTime);let V=A(c.endTime);c.milestone&&(V=i+k);const I=this.getBBox().width;let W="";c.classes.length>0&&(W=c.classes.join(" "));let X=0;for(const[O,Q]of F.entries())c.type===Q&&(X=O%a.numberSectionStyles);let z="";return c.active&&(c.crit?z="activeCritText"+X:z="activeText"+X),c.done?c.crit?z=z+" doneCritText"+X:z=z+" doneText"+X:c.crit&&(z=z+" critText"+X),c.milestone&&(z+=" milestoneText"),c.vert&&(z+=" vertText"),I>V-i?V+I+1.5*a.leftPadding>o?W+" taskTextOutsideLeft taskTextOutside"+X+" "+z:W+" taskTextOutsideRight taskTextOutside"+X+" "+z+" width-"+I:W+" taskText taskText"+X+" "+z+" width-"+I}),ut().securityLevel==="sandbox"){let c;c=bt("#i"+e);const i=c.nodes()[0].contentDocument;f.filter(function(V){return D.has(V.id)}).each(function(V){var I=i.querySelector("#"+V.id),W=i.querySelector("#"+V.id+"-text");const X=I.parentNode;var z=i.createElement("a");z.setAttribute("xlink:href",D.get(V.id)),z.setAttribute("target","_top"),X.appendChild(z),z.appendChild(I),z.appendChild(W)})}}l(L,"drawRects");function Y(y,w,x,p,k,_,o,d){if(o.length===0&&d.length===0)return;let m,f;for(const{startTime:I,endTime:W}of _)(m===void 0||I<m)&&(m=I),(f===void 0||W>f)&&(f=W);if(!m||!f)return;if(Z(f).diff(Z(m),"year")>5){Et.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const D=n.db.getDateFormat(),s=[];let c=null,i=Z(m);for(;i.valueOf()<=f;)n.db.isInvalidDate(i,D,o,d)?c?c.end=i:c={start:i,end:i}:c&&(s.push(c),c=null),i=i.add(1,"d");q.append("g").selectAll("rect").data(s).enter().append("rect").attr("id",function(I){return"exclude-"+I.start.format("YYYY-MM-DD")}).attr("x",function(I){return A(I.start)+x}).attr("y",a.gridLineStartPadding).attr("width",function(I){const W=I.end.add(1,"day");return A(W)-A(I.start)}).attr("height",k-w-a.gridLineStartPadding).attr("transform-origin",function(I,W){return(A(I.start)+x+.5*(A(I.end)-A(I.start))).toString()+"px "+(W*y+.5*k).toString()+"px"}).attr("class","exclude-range")}l(Y,"drawExcludeDays");function R(y,w,x,p){let k=xr(A).tickSize(-p+w+a.gridLineStartPadding).tickFormat(ne(n.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||a.tickInterval);if(o!==null){const d=o[1],m=o[2],f=n.db.getWeekday()||a.weekday;switch(m){case"millisecond":k.ticks(le.every(d));break;case"second":k.ticks(oe.every(d));break;case"minute":k.ticks(ce.every(d));break;case"hour":k.ticks(se.every(d));break;case"day":k.ticks(ae.every(d));break;case"week":k.ticks(ye[f].every(d));break;case"month":k.ticks(ie.every(d));break}}if(q.append("g").attr("class","grid").attr("transform","translate("+y+", "+(p-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||a.topAxis){let d=br(A).tickSize(-p+w+a.gridLineStartPadding).tickFormat(ne(n.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(o!==null){const m=o[1],f=o[2],D=n.db.getWeekday()||a.weekday;switch(f){case"millisecond":d.ticks(le.every(m));break;case"second":d.ticks(oe.every(m));break;case"minute":d.ticks(ce.every(m));break;case"hour":d.ticks(se.every(m));break;case"day":d.ticks(ae.every(m));break;case"week":d.ticks(ye[D].every(m));break;case"month":d.ticks(ie.every(m));break}}q.append("g").attr("class","grid").attr("transform","translate("+y+", "+w+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(R,"makeGrid");function N(y,w){let x=0;const p=Object.keys(C).map(k=>[k,C[k]]);q.append("g").selectAll("text").data(p).enter().append(function(k){const _=k[0].split(nr.lineBreakRegex),o=-(_.length-1)/2,d=E.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("dy",o+"em");for(const[m,f]of _.entries()){const D=E.createElementNS("http://www.w3.org/2000/svg","tspan");D.setAttribute("alignment-baseline","central"),D.setAttribute("x","10"),m>0&&D.setAttribute("dy","1em"),D.textContent=f,d.appendChild(D)}return d}).attr("x",10).attr("y",function(k,_){if(_>0)for(let o=0;o<_;o++)return x+=p[_-1][1],k[1]*y/2+x*y+w;else return k[1]*y/2+w}).attr("font-size",a.sectionFontSize).attr("class",function(k){for(const[_,o]of F.entries())if(k[0]===o)return"sectionTitle sectionTitle"+_%a.numberSectionStyles;return"sectionTitle"})}l(N,"vertLabels");function G(y,w,x,p){const k=n.db.getTodayMarker();if(k==="off")return;const _=q.append("g").attr("class","today"),o=new Date,d=_.append("line");d.attr("x1",A(o)+y).attr("x2",A(o)+y).attr("y1",a.titleTopMargin).attr("y2",p-a.titleTopMargin).attr("class","today"),k!==""&&d.attr("style",k.replace(/,/g,";"))}l(G,"drawToday");function P(y){const w={},x=[];for(let p=0,k=y.length;p<k;++p)Object.prototype.hasOwnProperty.call(w,y[p])||(w[y[p]]=!0,x.push(y[p]));return x}l(P,"checkUnique")},"draw"),xn={setConf:pn,draw:bn},Tn=l(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),wn=Tn,Dn={parser:Yr,db:gn,renderer:xn,styles:wn};export{Dn as diagram};
