/*! inkly-3d scene | MIT | bundles three.js (MIT), delaunator (ISC), robust-predicates (Unlicense) */
var Zl=0,nc=1,Jl=2;var Ei=1,$l=2,An=3,un=0,Re=1,Be=2,En=0,ls=1,ic=2,sc=3,rc=4,Kl=5;var Ci=100,Ql=101,jl=102,th=103,eh=104,nh=200,ih=201,sh=202,rh=203,ac=204,oc=205,ah=206,oh=207,ch=208,lh=209,hh=210,uh=211,dh=212,fh=213,ph=214,Ur=0,Fr=1,Or=2,Qi=3,Br=4,kr=5,zr=6,Vr=7,cc=0,mh=1,gh=2,dn=0,lc=1,hc=2,uc=3,dc=4,fc=5,pc=6,Ys=7;var mc=300,di=301,Ri=302,hs=303,pa=304,Zs=306,Mn=1e3,yn=1001,Gr=1002,Ce=1003,_h=1004;var Js=1005;var fe=1006,ma=1007;var Je=1008;var be=1009,gc=1010,_c=1011,us=1012,ga=1013,fn=1014,pn=1015,en=1016,_a=1017,xa=1018,ds=1020,xc=35902,vc=35899,yc=1021,Mc=1022,Ie=1023,Sn=1026,fi=1027,Sc=1028,va=1029,pi=1030,ya=1031;var Ma=1033,$s=33776,Ks=33777,Qs=33778,js=33779,Sa=35840,ba=35841,wa=35842,Ta=35843,Aa=36196,Ea=37492,Ca=37496,Ra=37488,Ia=37489,tr=37490,Pa=37491,La=37808,Da=37809,Na=37810,Ua=37811,Fa=37812,Oa=37813,Ba=37814,ka=37815,za=37816,Va=37817,Ga=37818,Ha=37819,Wa=37820,Xa=37821,qa=36492,Ya=36494,Za=36495,Ja=36283,$a=36284,er=36285,Ka=36286;var Ls=2300,Hr=2301,Dr=2302,Jo=2303,$o=2400,Ko=2401,Qo=2402;var xh=3200;var Qa=0,vh=1,Vn="",xe="srgb",Ds="srgb-linear",Ns="linear",Qt="srgb";var Nr=7680;var yh=519,Mh=512,Sh=513,bh=514,ja=515,wh=516,Th=517,to=518,Ah=519,Eh=35044;var bc="300 es",hn=2e3,ji=2001;function ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function od(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){let i=Us("canvas");return i.style.display="block",i}var wl={},ts=null;function wc(...i){let t="THREE."+i.shift();ts?ts("log",t,...i):console.log(t,...i)}function Rh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=Rh(i);let t="THREE."+i.shift();if(ts)ts("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=Rh(i);let t="THREE."+i.shift();if(ts)ts("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wi(...i){let t=i.join(" ");t in wl||(wl[t]=!0,Rt(...i))}function Ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ph={[Ur]:Fr,[Or]:zr,[Br]:Vr,[Qi]:kr,[Fr]:Ur,[zr]:Or,[Vr]:Br,[kr]:Qi},bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=1234567,Is=Math.PI/180,es=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ft(i,t,e){return Math.max(t,Math.min(e,i))}function Tc(i,t){return(i%t+t)%t}function cd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ld(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function ud(i,t=1){return t-Math.abs(Tc(i,t*2)-t)}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function md(i,t){return i+Math.random()*(t-i)}function gd(i){return i*(.5-Math.random())}function _d(i){i!==void 0&&(Tl=i);let t=Tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*Is}function vd(i){return i*es}function yd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mn={DEG2RAD:Is,RAD2DEG:es,generateUUID:fs,clamp:Ft,euclideanModulo:Tc,mapLinear:cd,inverseLerp:ld,lerp:Ps,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:_d,degToRad:xd,radToDeg:vd,isPowerOfTwo:yd,ceilPowerOfTwo:Md,floorPowerOfTwo:Sd,setQuaternionFromProperEuler:bd,normalize:Ge,denormalize:$i},Pc=class Pc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pc.prototype.isVector2=!0;var Ct=Pc,wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,c=c*p+h*o,l=l*p+d*o,u=u*p+g*o,f=f*p+v*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+g*o,f=f*p+v*o;let b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-o*d,t[e+2]=l*g+u*d+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lc=class Lc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lc.prototype.isVector3=!0;var D=Lc,To=new D,Al=new wn,Dc=class Dc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],A=s[4],S=s[7],T=s[2],M=s[5],C=s[8];return r[0]=a*v+o*b+c*T,r[3]=a*m+o*A+c*M,r[6]=a*p+o*S+c*C,r[1]=l*v+u*b+f*T,r[4]=l*m+u*A+f*M,r[7]=l*p+u*S+f*C,r[2]=h*v+d*b+g*T,r[5]=h*m+d*A+g*M,r[8]=h*p+d*S+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*l-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dc.prototype.isMatrix3=!0;var Dt=Dc,Ao=new Dt,El=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){let i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:El,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:El,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),i}var Wt=wd();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oi,Wr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Us("canvas")),Oi.width=t.width,Oi.height=t.height;let s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Us("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Td=0,ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var Ad=0,Co=new D,He=class i extends bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yn,s=yn,r=fe,a=Je,o=Ie,c=be,l=i.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=fs(),this.name="",this.source=new ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=mc;He.DEFAULT_ANISOTROPY=1;var Nc=class Nc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,S=(d+1)/2,T=(p+1)/2,M=(u+h)/4,C=(f+v)/4,x=(g+m)/4;return A>S&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=C/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=M/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nc.prototype.isVector4=!0;var ee=Nc,Xr=class extends bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new He(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends Xr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fa=class fa{constructor(t,e,n,s,r,a,o,c,l,u,f,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,d,g,v,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-v*f}else if(t.order==="XZY"){let h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,Cd)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),$n.crossVectors(n,Qe),$n.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),$n.crossVectors(n,Qe)),$n.normalize(),pr.crossVectors(Qe,$n),s[0]=$n.x,s[4]=pr.x,s[8]=Qe.x,s[1]=$n.y,s[5]=pr.y,s[9]=Qe.y,s[2]=$n.z,s[6]=pr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],A=n[7],S=n[11],T=n[15],M=s[0],C=s[4],x=s[8],w=s[12],R=s[1],I=s[5],U=s[9],B=s[13],P=s[2],z=s[6],W=s[10],O=s[14],Z=s[3],H=s[7],q=s[11],Q=s[15];return r[0]=a*M+o*R+c*P+l*Z,r[4]=a*C+o*I+c*z+l*H,r[8]=a*x+o*U+c*W+l*q,r[12]=a*w+o*B+c*O+l*Q,r[1]=u*M+f*R+h*P+d*Z,r[5]=u*C+f*I+h*z+d*H,r[9]=u*x+f*U+h*W+d*q,r[13]=u*w+f*B+h*O+d*Q,r[2]=g*M+v*R+m*P+p*Z,r[6]=g*C+v*I+m*z+p*H,r[10]=g*x+v*U+m*W+p*q,r[14]=g*w+v*B+m*O+p*Q,r[3]=b*M+A*R+S*P+T*Z,r[7]=b*C+A*I+S*z+T*H,r[11]=b*x+A*U+S*W+T*q,r[15]=b*w+A*B+S*O+T*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],b=c*d-l*h,A=o*d-l*f,S=o*h-c*f,T=a*d-l*u,M=a*h-c*u,C=a*f-o*u;return e*(v*b-m*A+p*S)-n*(g*b-m*T+p*M)+s*(g*A-v*T+p*C)-r*(g*S-v*M+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=e*o-n*a,A=e*c-s*a,S=e*l-r*a,T=n*c-s*o,M=n*l-r*o,C=s*l-r*c,x=u*v-f*g,w=u*m-h*g,R=u*p-d*g,I=f*m-h*v,U=f*p-d*v,B=h*p-d*m,P=b*B-A*U+S*I+T*R-M*w+C*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return t[0]=(o*B-c*U+l*I)*z,t[1]=(s*U-n*B-r*I)*z,t[2]=(v*C-m*M+p*T)*z,t[3]=(h*M-f*C-d*T)*z,t[4]=(c*R-a*B-l*w)*z,t[5]=(e*B-s*R+r*w)*z,t[6]=(m*S-g*C-p*A)*z,t[7]=(u*C-h*S+d*A)*z,t[8]=(a*U-o*R+l*x)*z,t[9]=(n*R-e*U-r*x)*z,t[10]=(g*M-v*S+p*b)*z,t[11]=(f*S-u*M-d*b)*z,t[12]=(o*w-a*I-c*x)*z,t[13]=(e*I-n*w+s*x)*z,t[14]=(v*A-g*T-m*b)*z,t[15]=(u*T-f*A+h*b)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,g=r*f,v=a*u,m=a*f,p=o*f,b=c*l,A=c*u,S=c*f,T=n.x,M=n.y,C=n.z;return s[0]=(1-(v+p))*T,s[1]=(d+S)*T,s[2]=(g-A)*T,s[3]=0,s[4]=(d-S)*M,s[5]=(1-(h+p))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(g+A)*C,s[9]=(m-b)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),c=Bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let l=1/a,u=1/o,f=1/c;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,e.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=hn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===hn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ji)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===hn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ji)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fa.prototype.isMatrix4=!0;var ue=fa,Bi=new D,an=new ue,Ed=new D(0,0,0),Cd=new D(1,1,1),$n=new D,pr=new D,Qe=new D,Rl=new ue,Il=new wn,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rd=0,Pl=new D,ki=new wn,Ln=new ue,mr=new D,As=new D,Id=new D,Pd=new wn,Ll=new D(1,0,0),Dl=new D(0,1,0),Nl=new D(0,0,1),Ul={type:"added"},Ld={type:"removed"},zi={type:"childadded",child:null},Ro={type:"childremoved",child:null},We=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new kn,n=new wn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Dt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(As,mr,this.up):Ln.lookAt(mr,As,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),zi.child=t,this.dispatchEvent(zi),zi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new D(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Me=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Tc(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Io(a,r,t+1/3),this.g=Io(a,r,t),this.b=Io(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Wt.workingToColorSpace(Ne.copy(this),t),Math.round(Ft(Ne.r*255,0,255))*65536+Math.round(Ft(Ne.g*255,0,255))*256+Math.round(Ft(Ne.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=xe){Wt.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(gr);let n=Ps(Kn.h,gr.h,e),s=Ps(Kn.s,gr.s,e),r=Ps(Kn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Lt;Lt.NAMES=Lh;var ni=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},on=new D,Dn=new D,Po=new D,Nn=new D,Vi=new D,Gi=new D,Fl=new D,Lo=new D,Do=new D,No=new D,Uo=new ee,Fo=new ee,Oo=new ee,ei=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Dn.subVectors(n,e),Po.subVectors(t,e);let a=on.dot(on),o=on.dot(Dn),c=on.dot(Po),l=Dn.dot(Dn),u=Dn.dot(Po),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Uo.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,n),Oo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Uo,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Oo,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Dn.subVectors(t,e),on.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),on.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),Lo.subVectors(t,n);let c=Vi.dot(Lo),l=Gi.dot(Lo);if(c<=0&&l<=0)return e.copy(n);Do.subVectors(t,s);let u=Vi.dot(Do),f=Gi.dot(Do);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Vi,a);No.subVectors(t,r);let d=Vi.dot(No),g=Gi.dot(No);if(g>=0&&d<=g)return e.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Gi,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Fl.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Fl,o);let p=1/(m+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),xr.subVectors(this.max,Es),Hi.subVectors(t.a,Es),Wi.subVectors(t.b,Es),Xi.subVectors(t.c,Es),Qn.subVectors(Wi,Hi),jn.subVectors(Xi,Wi),yi.subVectors(Hi,Xi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-yi.z,yi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,yi.z,0,-yi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-yi.y,yi.x,0];return!Bo(e,Hi,Wi,Xi,xr)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,Hi,Wi,Xi,xr))?!1:(vr.crossVectors(Qn,jn),e=[vr.x,vr.y,vr.z],Bo(e,Hi,Wi,Xi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Un=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,_r=new ii,Hi=new D,Wi=new D,Xi=new D,Qn=new D,jn=new D,yi=new D,Es=new D,xr=new D,vr=new D,Mi=new D;function Bo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var On=Nd();function Nd(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ud(i){Math.abs(i)>65504&&Rt("DataUtils.toHalfFloat(): Value out of range."),i=Ft(i,-65504,65504),On.floatView[0]=i;let t=On.uint32View[0],e=t>>23&511;return On.baseTable[e]+((t&8388607)>>On.shiftTable[e])}function Fd(i){let t=i>>10;return On.uint32View[0]=On.mantissaTable[On.offsetTable[t]+(i&1023)]+On.exponentTable[t],On.floatView[0]}var si=class{static toHalfFloat(t){return Ud(t)}static fromHalfFloat(t){return Fd(t)}},_e=new D,yr=new Ct,Od=0,Fe=class extends bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Bs=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=new ii,Cs=new D,ko=new D,ss=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(ko)),this.expandByPoint(Cs.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kd=0,sn=new ue,zo=new We,qi=new D,je=new ii,Rs=new ii,Ee=new D,Se=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?ks:Bs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(je.min,Rs.min),je.expandByPoint(Ee),Ee.addVectors(je.max,Rs.max),je.expandByPoint(Ee)):(je.expandByPoint(Rs.min),je.expandByPoint(Rs.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ee.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(t,l),Ee.add(qi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Fe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new D,c[x]=new D;let l=new D,u=new D,f=new D,h=new Ct,d=new Ct,g=new Ct,v=new D,m=new D;function p(x,w,R){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(v),o[w].add(v),o[R].add(v),c[x].add(m),c[w].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,w=b.length;x<w;++x){let R=b[x],I=R.start,U=R.count;for(let B=I,P=I+U;B<P;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let A=new D,S=new D,T=new D,M=new D;function C(x){T.fromBufferAttribute(s,x),M.copy(T);let w=o[x];A.copy(w),A.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(M,w);let I=S.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,w=b.length;x<w;++x){let R=b[x],I=R.start,U=R.count;for(let B=I,P=I+U;B<P;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,f=new D;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Fe(h,u,f)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=new D,zd=new D,Vd=new Dt,ln=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vo.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Vo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vd.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gd=0,zn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ls,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fn=new D,Go=new D,Mr=new D,Sr=new D,Yr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Go.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(Go);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=Sr.dot(this.direction),c=-Sr.dot(Mr),l=Sr.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*c-o,h=a*o-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Go).addScaledVector(Mr,h),d}intersectSphere(t,e){if(t.radius<0)return null;Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,A=n.z-a.z,S=Math.abs(c),T=Math.abs(l),M=Math.abs(u),C,x,w,R,I,U,B,P,z,W,O,Z;if(S>=T&&S>=M?(w=c,U=f,z=g,Z=p,c>=0?(C=l,x=u,R=h,I=d,B=v,P=m,W=b,O=A):(C=u,x=l,R=d,I=h,B=m,P=v,W=A,O=b)):T>=M?(w=l,U=h,z=v,Z=b,l>=0?(C=u,x=c,R=d,I=f,B=m,P=g,W=A,O=p):(C=c,x=u,R=f,I=d,B=g,P=m,W=p,O=A)):(w=u,U=d,z=m,Z=A,u>=0?(C=c,x=l,R=f,I=h,B=g,P=v,W=p,O=b):(C=l,x=c,R=h,I=f,B=v,P=g,W=b,O=p)),w===0)return null;let H=C/w,q=x/w,Q=1/w,yt=R-H*U,xt=I-q*U,jt=B-H*z,zt=P-q*z,Jt=W-H*Z,$=O-q*Z,et=Jt*zt-$*jt,vt=yt*$-xt*Jt,Nt=jt*xt-zt*yt;if(s){if(et<0||vt<0||Nt<0)return null}else if((et<0||vt<0||Nt<0)&&(et>0||vt>0||Nt>0))return null;let gt=et+vt+Nt;if(gt===0)return null;let kt=Q*(et*U+vt*z+Nt*Z);return(gt>0?kt<0:kt>0)?null:this.at(kt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ti=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ol=new ue,Si=new Yr,br=new ss,Bl=new D,wr=new D,Tr=new D,Ar=new D,Ho=new D,Er=new D,kl=new D,Cr=new D,Zt=class extends We{constructor(t=new Se,e=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(Ho.fromBufferAttribute(f,t),a?Er.addScaledVector(Ho,u):Er.addScaledVector(Ho.sub(e),u))}e.add(Er)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(br.containsPoint(Si.origin)===!1&&(Si.intersectSphere(br,Bl)===null||Si.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(Ol.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,T=A;S<T;S+=3){let M=o.getX(S),C=o.getX(S+1),x=o.getX(S+2);s=Rr(this,p,t,n,l,u,f,M,C,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let b=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);s=Rr(this,a,t,n,l,u,f,b,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,T=A;S<T;S+=3){let M=S,C=S+1,x=S+2;s=Rr(this,p,t,n,l,u,f,M,C,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let b=m,A=m+1,S=m+2;s=Rr(this,a,t,n,l,u,f,b,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Hd(i,t,e,n,s,r,a,o){let c;if(t.side===Re?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===un,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:i}}function Rr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,wr),i.getVertexPosition(c,Tr),i.getVertexPosition(l,Ar);let u=Hd(i,t,e,n,wr,Tr,Ar,kl);if(u){let f=new D;ei.getBarycoord(kl,wr,Tr,Ar,f),s&&(u.uv=ei.getInterpolatedAttribute(s,o,c,l,f,new Ct)),r&&(u.uv1=ei.getInterpolatedAttribute(r,o,c,l,f,new Ct)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,c,l,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};ei.getNormal(wr,Tr,Ar,h.normal),u.face=h,u.barycoord=f}return u}var Tn=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ce,u=Ce,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=new ss,Wd=new Ct(.5,.5),Ir=new D,rs=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],A=r[13],S=r[14],T=r[15];if(s[0].setComponents(l-a,d-u,p-g,T-b).normalize(),s[1].setComponents(l+a,d+u,p+g,T+b).normalize(),s[2].setComponents(l+o,d+f,p+v,T+A).normalize(),s[3].setComponents(l-o,d-f,p-v,T-A).normalize(),n)s[4].setComponents(c,h,m,S).normalize(),s[5].setComponents(l-c,d-h,p-m,T-S).normalize();else if(s[4].setComponents(l-c,d-h,p-m,T-S).normalize(),e===hn)s[5].setComponents(l+c,d+h,p+m,T+S).normalize();else if(e===ji)s[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);let e=Wd.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zs=class extends He{constructor(t=[],e=di,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ri=class extends He{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends He{constructor(t,e,n=fn,s,r,a,o=Ce,c=Ce,l,u=Sn,f=1){if(u!==Sn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zr=class extends ai{constructor(t,e=fn,n=di,s,r,a=Ce,o=Ce,c,l=Sn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vs=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},as=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function g(v,m,p,b,A,S,T,M,C,x,w){let R=S/C,I=T/x,U=S/2,B=T/2,P=M/2,z=C+1,W=x+1,O=0,Z=0,H=new D;for(let q=0;q<W;q++){let Q=q*I-B;for(let yt=0;yt<z;yt++){let xt=yt*R-U;H[v]=xt*b,H[m]=Q*A,H[p]=P,l.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[p]=M>0?1:-1,u.push(H.x,H.y,H.z),f.push(yt/C),f.push(1-q/x),O+=1}}for(let q=0;q<x;q++)for(let Q=0;Q<C;Q++){let yt=h+Q+z*q,xt=h+Q+z*(q+1),jt=h+(Q+1)+z*(q+1),zt=h+(Q+1)+z*q;c.push(yt,xt,zt),c.push(xt,jt,zt),Z+=6}o.addGroup(d,Z,w),d+=Z,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Jr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Ct:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,c=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ft(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Ac(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var zl=new D,Vl=new D,Wo=new Ac,Xo=new Ac,qo=new Ac,Gs=class extends Jr{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Vl.subVectors(s[0],s[1]).add(s[0]),l=Vl);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,v,m),Xo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,v,m),qo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Xo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),qo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Wo.calc(c),Xo.calc(c),qo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Hs=class i extends Se{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ft(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/e,f=new D,h=new Ct,d=new D,g=new D,v=new D,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let b=0;b<=e;b++){let A=n+b*u*s,S=Math.sin(A),T=Math.cos(A);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*S,f.y=t[M].y,f.z=t[M].x*T,a.push(f.x,f.y,f.z),h.x=b/e,h.y=M/(t.length-1),o.push(h.x,h.y);let C=c[3*M+0]*S,x=c[3*M+1],w=c[3*M+0]*T;l.push(C,x,w)}}for(let b=0;b<e;b++)for(let A=0;A<t.length-1;A++){let S=A+b*t.length,T=S,M=S+t.length,C=S+t.length+1,x=S+1;r.push(T,M,x),r.push(C,x,M)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ai=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let b=p*h-a;for(let A=0;A<l;A++){let S=A*f-r;g.push(S,-b,0),v.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let A=b+l*p,S=b+l*(p+1),T=b+1+l*(p+1),M=b+1+l*p;d.push(A,S,M),d.push(S,T,M)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ws=class extends zn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Lt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Gl(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let s in n)t[s]=n[s]}return t}function Gl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Dh={clone:Ii,merge:ke},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=Xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$r=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kr=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oi=class extends Kr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var os=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qr=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jr=class extends ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:r=t,o=2*e-n;break;case Qo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ko:a=t,c=2*n-e;break;case Qo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,A=(-1-d)*m+(1.5+d)*v+.5*g,S=d*m-d*v;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+b*a[l+T]+A*a[c+T]+S*a[f+T];return r}},ta=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},ea=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},na=class extends ci{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=d*h+g*2,b=f[p],A=f[p+1],S=t*h+g*2,T=u[S],M=u[S+1],C=Jd(n,e,b,T,s);r[g]=Nh(C,v,A,M,m)}return r}};function Nh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Nh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Zd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yi(e,this.TimeBufferType),this.values=Yi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yi(t.times,Array),values:Yi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Yo(t.settings)&&(n.settings={inTangents:Yi(t.settings.inTangents,Array),outTangents:Yi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new na(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case Hr:e=this.InterpolantFactoryMethodLinear;break;case Dr:e=this.InterpolantFactoryMethodSmooth;break;case Jo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Dr;case this.InterpolantFactoryMethodBezier:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Yo(this.settings)&&(Hl(this.settings.inTangents,t),Hl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&od(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[h+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Hr;var li=class extends tn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ls;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};ia.prototype.ValueTypeName="color";var sa=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="number";var ra=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)wn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Xs=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends tn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ls;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};aa.prototype.ValueTypeName="vector";var oa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uh=new oa,ca=class{constructor(t){this.manager=t!==void 0?t:Uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var la=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Zo=new ue,Wl=new D,Xl=new D,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=be,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ji||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pr=new D,Lr=new wn,vn=new D,qs=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Lr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Lr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new D,ql=new Ct,Yl=new Ct,Ue=class extends qs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Yl),e.subVectors(Yl,ql)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ui=class extends qs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jo=class extends ha{constructor(){super(new ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new jo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zi=-90,Ji=1,ua=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Ue(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new Ue(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let c=new Ue(Zi,Ji,t,e);c.layers=this.layers,this.add(c);let l=new Ue(Zi,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},da=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cc="\\[\\]\\.:\\/",$d=new RegExp("["+Cc+"]","g"),Rc="[^"+Cc+"]",Kd="[^"+Cc.replace("\\.","")+"]",Qd=/((?:WC+[\/:])*)/.source.replace("WC",Rc),jd=/(WCOD+)?/.source.replace("WCOD",Kd),tf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),ef=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),nf=new RegExp("^"+Qd+jd+tf+ef+"$"),sf=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($d,"")}static parseTrackName(t){let e=nf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=tc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);var Uc=class Uc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Uc.prototype.isMatrix2=!0;var ec=Uc;function Ic(i,t,e,n){let s=rf(n);switch(e){case yc:return i*t;case Sc:return i*t/s.components*s.byteLength;case va:return i*t/s.components*s.byteLength;case pi:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case Mc:return i*t*3/s.components*s.byteLength;case Ie:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ea:case Ra:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case tr:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qa:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ja:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case er:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rf(i){switch(i){case be:case gc:return{byteLength:1,components:1};case us:case _c:case en:return{byteLength:2,components:1};case _a:case xa:return{byteLength:2,components:4};case fn:case ga:case pn:return{byteLength:4,components:1};case xc:case vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function iu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function of(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ap=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:cf,alphahash_pars_fragment:lf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:xf,beginnormal_vertex:vf,bsdfs:yf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Af,color_fragment:Ef,color_pars_fragment:Cf,color_pars_vertex:Rf,color_vertex:If,common:Pf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Df,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:kf,envmap_fragment:zf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Gf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:tp,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:Yf,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:$f,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Qf,lights_pars_begin:jf,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:cp,lights_fragment_end:lp,lightprobes_pars_fragment:hp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:_p,map_particle_pars_fragment:xp,metalnessmap_fragment:vp,metalnessmap_pars_fragment:yp,morphinstance_vertex:Mp,morphcolor_vertex:Sp,morphnormal_vertex:bp,morphtarget_pars_vertex:wp,morphtarget_vertex:Tp,normal_fragment_begin:Ap,normal_fragment_maps:Ep,normal_pars_fragment:Cp,normal_pars_vertex:Rp,normal_vertex:Ip,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:kp,dithering_fragment:zp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Qp,specularmap_pars_fragment:jp,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:am,worldpos_vertex:om,background_vert:cm,background_frag:lm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:dm,cube_frag:fm,depth_vert:pm,depth_frag:mm,distance_vert:gm,distance_frag:_m,equirect_vert:xm,equirect_frag:vm,linedashed_vert:ym,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:bm,meshlambert_vert:wm,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Em,meshnormal_vert:Cm,meshnormal_frag:Rm,meshphong_vert:Im,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Dm,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:km,sprite_vert:zm,sprite_frag:Vm},ut={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Rn={basic:{uniforms:ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ke([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ke([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ke([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ke([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ke([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ke([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:ke([ut.common,ut.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:ke([ut.lights,ut.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Rn.physical={uniforms:ke([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var eo={r:0,b:0,g:0},Gm=new ue,su=new Dt;su.set(-1,0,0,0,1,0,0,0,1);function Hm(i,t,e,n,s,r){let a=new Lt(0),o=s===!0?0:1,c,l,u=null,f=0,h=null;function d(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let S=b.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(b){let A=!1,S=d(b);S===null?m(a,o):S&&S.isColor&&(m(S,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,A){let S=d(A);S&&(S.isCubeTexture||S.mapping===Zs)?(l===void 0&&(l=new Zt(new as(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Ii(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(su),l.material.toneMapped=Wt.getTransfer(S.colorSpace)!==Qt,(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Zt(new Ai(2,2),new Xe({name:"BackgroundMaterial",uniforms:Ii(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(S.colorSpace)!==Qt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,A){b.getRGB(eo,Ec(i)),e.buffers.color.setClear(eo.r,eo.g,eo.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Wm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,U,B,P,z){let W=!1,O=f(I,P,B,U);r!==O&&(r=O,l(r.object)),W=d(I,P,B,z),W&&g(I,P,B,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(I,U,B,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,U,B,P){let z=P.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let O=I.isInstancedMesh===!0?I.id:0,Z=W[O];Z===void 0&&(Z={},W[O]=Z);let H=Z[B.id];H===void 0&&(H={},Z[B.id]=H);let q=H[z];return q===void 0&&(q=h(c()),H[z]=q),q}function h(I){let U=[],B=[],P=[];for(let z=0;z<e;z++)U[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,U,B,P){let z=r.attributes,W=U.attributes,O=0,Z=B.getAttributes();for(let H in Z)if(Z[H].location>=0){let Q=z[H],yt=W[H];if(yt===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(yt=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(yt=I.instanceColor)),Q===void 0||Q.attribute!==yt||yt&&Q.data!==yt.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function g(I,U,B,P){let z={},W=U.attributes,O=0,Z=B.getAttributes();for(let H in Z)if(Z[H].location>=0){let Q=W[H];Q===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let yt={};yt.attribute=Q,Q&&Q.data&&(yt.data=Q.data),z[H]=yt,O++}r.attributes=z,r.attributesNum=O,r.index=P}function v(){let I=r.newAttributes;for(let U=0,B=I.length;U<B;U++)I[U]=0}function m(I){p(I,0)}function p(I,U){let B=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;B[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),z[I]!==U&&(i.vertexAttribDivisor(I,U),z[I]=U)}function b(){let I=r.newAttributes,U=r.enabledAttributes;for(let B=0,P=U.length;B<P;B++)U[B]!==I[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function A(I,U,B,P,z,W,O){O===!0?i.vertexAttribIPointer(I,U,B,z,W):i.vertexAttribPointer(I,U,B,P,z,W)}function S(I,U,B,P){v();let z=P.attributes,W=B.getAttributes(),O=U.defaultAttributeValues;for(let Z in W){let H=W[Z];if(H.location>=0){let q=z[Z];if(q===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){let Q=q.normalized,yt=q.itemSize,xt=t.get(q);if(xt===void 0)continue;let jt=xt.buffer,zt=xt.type,Jt=xt.bytesPerElement,$=zt===i.INT||zt===i.UNSIGNED_INT||q.gpuType===ga;if(q.isInterleavedBufferAttribute){let et=q.data,vt=et.stride,Nt=q.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<H.locationSize;gt++)p(H.location+gt,et.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<H.locationSize;gt++)m(H.location+gt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let gt=0;gt<H.locationSize;gt++)A(H.location+gt,yt/H.locationSize,zt,Q,vt*Jt,(Nt+yt/H.locationSize*gt)*Jt,$)}else{if(q.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)p(H.location+et,q.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let et=0;et<H.locationSize;et++)m(H.location+et);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let et=0;et<H.locationSize;et++)A(H.location+et,yt/H.locationSize,zt,Q,yt*Jt,yt/H.locationSize*et*Jt,$)}}else if(O!==void 0){let Q=O[Z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}b()}function T(){w();for(let I in n){let U=n[I];for(let B in U){let P=U[B];for(let z in P){let W=P[z];for(let O in W)u(W[O].object),delete W[O];delete P[z]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let B in U){let P=U[B];for(let z in P){let W=P[z];for(let O in W)u(W[O].object),delete W[O];delete P[z]}}delete n[I.id]}function C(I){for(let U in n){let B=n[U];for(let P in B){let z=B[P];if(z[I.id]===void 0)continue;let W=z[I.id];for(let O in W)u(W[O].object),delete W[O];delete z[I.id]}}}function x(I){for(let U in n){let B=n[U],P=I.isInstancedMesh===!0?I.id:0,z=B[P];if(z!==void 0){for(let W in z){let O=z[W];for(let Z in O)u(O[Z].object),delete O[Z];delete z[W]}delete B[P],Object.keys(B).length===0&&delete n[U]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Xm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ie&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==be&&C!==pn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Rt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,maxSamples:T,samples:M}}function Ym(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ln,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,A=b*4,S=p.clippingState||null;c.value=S,S=u(g,h,A,d);for(let T=0;T!==A;++T)S[T]=e[T];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=d;A!==v;++A,S+=4)a.copy(f[A]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var ms=4,Zm=6,Jm=20,$m=256,nr=new ui,Fh=new Lt,Fc=null,Oc=0,Bc=0,kc=!1,Km=new D,Pi=new D,_s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Km}=r;Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fc,Oc,Bc),this._renderer.xr.enabled=kc,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:en,format:Ie,colorSpace:Ds,depthBuffer:!1},s=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qm(r)),this._blurMaterial=tg(r,t,e),this._ggxMaterial=jm(r,t,e)}return s}_compileMaterial(t){let e=new Zt(new Se,t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s,r){let c=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Fh),f.toneMapping=dn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new as,new Ti({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Fh),p=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let T=this._cubeSize;ps(s,S*T,A>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===di||t.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ps(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-ms?n-g+ms:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,ps(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,nr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ps(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,nr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-ms?s-this._lodMax+ms:0),h=4*(this._cubeSize-u);ps(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,nr)}};function Qm(i){let t=[],e=[],n=i,s=i-ms+1+Zm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let p=0;p<f;p++){let b=p%3*2/3-1,A=p>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];g.set(S,d*h*p);for(let T=0;T<h;T++){let M=u[T*2]*2-1,C=u[T*2+1]*2-1;p===0?Pi.set(1,C,M):p===1?Pi.set(-M,1,-C):p===2?Pi.set(-M,C,1):p===3?Pi.set(-1,C,-M):p===4?Pi.set(-M,-1,C):Pi.set(M,C,-1),Pi.toArray(v,(p*h+T)*d)}}let m=new Se;m.setAttribute("position",new Fe(g,d)),m.setAttribute("outputDirection",new Fe(v,d)),e.push(new Zt(m,null)),n>ms&&n--}return{lodMeshes:e,sizeLods:t}}function Oh(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function tg(i,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Bh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function kh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var io=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new as(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:En});r.uniforms.tEquirect.value=e;let a=new Zt(s,r),o=e.minFilter;return e.minFilter===Je&&(e.minFilter=fe),new ua(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function eg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===hs||d===pa)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new io(g.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===hs||d===pa,v=d===di||d===Ri;if(g||v){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new _s(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new _s(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===hs?h.mapping=di:d===pa&&(h.mapping=Ri),h}function c(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ng(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let b=d.array;v=d.version;for(let A=0,S=b.length;A<S;A+=3){let T=b[A+0],M=b[A+1],C=b[A+2];h.push(T,M,M,C,C,T)}}else{let b=g.array;v=g.version;for(let A=0,S=b.length/3-1;A<S;A+=3){let T=A+0,M=A+1,C=A+2;h.push(T,M,M,C,C,T)}}let m=new(g.count>=65535?ks:Bs)(h,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function sg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let S=o.attributes.position.count*A,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let M=new Float32Array(S*T*4*f),C=new Fs(M,S,T,f);C.type=pn,C.needsUpdate=!0;let x=A*4;for(let R=0;R<f;R++){let I=m[R],U=p[R],B=b[R],P=S*T*4*R;for(let z=0;z<I.count;z++){let W=z*x;d===!0&&(s.fromBufferAttribute(I,z),M[P+W+0]=s.x,M[P+W+1]=s.y,M[P+W+2]=s.z,M[P+W+3]=0),g===!0&&(s.fromBufferAttribute(U,z),M[P+W+4]=s.x,M[P+W+5]=s.y,M[P+W+6]=s.z,M[P+W+7]=0),v===!0&&(s.fromBufferAttribute(B,z),M[P+W+8]=s.x,M[P+W+9]=s.y,M[P+W+10]=s.z,M[P+W+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new Ct(S,T)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function og(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var cg={[lc]:"LINEAR_TONE_MAPPING",[hc]:"REINHARD_TONE_MAPPING",[uc]:"CINEON_TONE_MAPPING",[dc]:"ACES_FILMIC_TONE_MAPPING",[pc]:"AGX_TONE_MAPPING",[Ys]:"NEUTRAL_TONE_MAPPING",[fc]:"CUSTOM_TONE_MAPPING"};function lg(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Se;l.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ie([0,2,0,0,2,0],2));let u=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Zt(l,u),h=new ui(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,b=[],A=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),c!==null&&c.setSize(S,T);for(let M=0;M<b.length;M++){let C=b[M];C.setSize&&C.setSize(S,T)}},this.setEffects=function(S){b=S,A=b.length>0&&b[0].isRenderPass===!0;let T=a.width,M=a.height;b.length>0&&o===null&&(o=new Oe(T,M,{type:en,depthBuffer:!1,stencilBuffer:!1}),c=new Oe(T,M,{type:en,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let x=b[C];x.setSize&&x.setSize(T,M)}},this.begin=function(S,T){if(v||S.toneMapping===dn&&b.length===0)return!1;if(p=T,T!==null){let M=T.width,C=T.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return A===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=dn,!0},this.hasRenderPass=function(){return A},this.end=function(S,T){S.toneMapping=m,v=!0;let M=a,C=o;for(let x=0;x<b.length;x++){let w=b[x];w.enabled!==!1&&(w.render(S,C,M,T),w.needsSwap!==!1&&(M=C,C=C===o?c:o))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},Wt.getTransfer(d)===Qt&&(u.defines.SRGB_TRANSFER="");let x=cg[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(p),S.render(f,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ru=new He,Gc=new ai(1,1),au=new Fs,ou=new qr,cu=new zs,zh=[],Vh=[],Gh=new Float32Array(16),Hh=new Float32Array(9),Wh=new Float32Array(4);function xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ao(i,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Wh.set(n),i.uniformMatrix2fv(this.addr,!1,Wh),Te(e,n)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),Te(e,n)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Te(e,n)}}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=e.isReversedDepthBuffer()?to:ja,r=Gc):r=ru,e.setTexture2D(t||r,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ou,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||au,s)}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return bg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Ig(i,t){i.uniform1fv(this.addr,t)}function Pg(i,t){let e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lg(i,t){let e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){let e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ng(i,t){let e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ug(i,t){let e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fg(i,t){let e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Og(i,t){i.uniform1iv(this.addr,t)}function Bg(i,t){i.uniform2iv(this.addr,t)}function kg(i,t){i.uniform3iv(this.addr,t)}function zg(i,t){i.uniform4iv(this.addr,t)}function Vg(i,t){i.uniform1uiv(this.addr,t)}function Gg(i,t){i.uniform2uiv(this.addr,t)}function Hg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gc:a=ru;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function qg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ou,r[a])}function Yg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||cu,r[a])}function Zg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||au,r[a])}function Jg(i){switch(i){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Vg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var Hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}},Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}},Xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function Xh(i,t){i.seq.push(t),i.map[t.id]=t}function $g(i,t,e){let n=i.name,s=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),a=zc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xh(e,l===void 0?new Hc(o,i,t):new Wc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Xc(o),Xh(e,f)),e=f}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);$g(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function qh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kg=37297,Qg=0;function jg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Yh=new Dt;function t0(i){Wt._getMatrix(Yh,Wt.workingColorSpace,i);let t=`mat3( ${Yh.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Ns:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(t),o)}else return r}function e0(i,t){let e=t0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var n0={[lc]:"Linear",[hc]:"Reinhard",[uc]:"Cineon",[dc]:"ACESFilmic",[pc]:"AgX",[Ys]:"Neutral",[fc]:"Custom"};function i0(i,t){let e=n0[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var no=new D;function s0(){Wt.getLuminanceCoefficients(no);let i=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function a0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function Jh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(c0,h0)}var l0=new Map;function h0(i,t){let e=Bt[t];if(e===void 0){let n=l0.get(t);if(n!==void 0)e=Bt[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qc(e)}var u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(u0,d0)}function d0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var f0={[Ei]:"SHADOWMAP_TYPE_PCF",[An]:"SHADOWMAP_TYPE_VSM"};function p0(i){return f0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m0={[di]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE_UV"};function g0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _0={[Ri]:"ENVMAP_MODE_REFRACTION"};function x0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var v0={[cc]:"ENVMAP_BLENDING_MULTIPLY",[mh]:"ENVMAP_BLENDING_MIX",[gh]:"ENVMAP_BLENDING_ADD"};function y0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":v0[i.combine]||"ENVMAP_BLENDING_NONE"}function M0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=p0(e),l=g0(e),u=x0(e),f=y0(e),h=M0(e),d=r0(e),g=a0(r),v=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==dn?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=qc(a),a=Jh(a,e),a=$h(a,e),o=qc(o),o=Jh(o,e),o=$h(o,e),a=Kh(a),o=Kh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+m+a,S=b+p+o,T=qh(s,s.VERTEX_SHADER,A),M=qh(s,s.FRAGMENT_SHADER,S);s.attachShader(v,T),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(T)||"",P=s.getShaderInfoLog(M)||"",z=U.trim(),W=B.trim(),O=P.trim(),Z=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,M);else{let q=Zh(s,T,"vertex"),Q=Zh(s,M,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+q+`
`+Q)}else z!==""?Rt("WebGLProgram: Program Info Log:",z):(W===""||O==="")&&(H=!1);H&&(I.diagnostics={runnable:Z,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(T),s.deleteShader(M),x=new gs(s,v),w=o0(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,Kg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}var b0=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zc(t),e.set(t,n)),n}},Zc=class{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}};function w0(i){return i===pi||i===tr||i===er}function T0(i,t,e,n,s,r){let a=new Os,o=new Yc,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,R,I,U,B){let P=I.fog,z=U.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||W,O),H=Z&&Z.mapping===Zs?Z.image.height:null,q=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Rt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=Q!==void 0?Q.length:0,xt=0;z.morphAttributes.position!==void 0&&(xt=1),z.morphAttributes.normal!==void 0&&(xt=2),z.morphAttributes.color!==void 0&&(xt=3);let jt,zt,Jt,$;if(q){let ae=Rn[q];jt=ae.vertexShader,zt=ae.fragmentShader}else{jt=x.vertexShader,zt=x.fragmentShader;let ae=o.getVertexShaderStage(x),$t=o.getFragmentShaderStage(x);o.update(x,ae,$t),Jt=ae.id,$=$t.id}let et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Nt=U.isInstancedMesh===!0,gt=U.isBatchedMesh===!0,kt=!!x.map,ye=!!x.matcap,Vt=!!Z,Yt=!!x.aoMap,re=!!x.lightMap,Ht=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,Ae=!!x.displacementMap,Ze=!!x.emissiveMap,de=!!x.metalnessMap,me=!!x.roughnessMap,F=x.anisotropy>0,Pe=x.clearcoat>0,te=x.dispersion>0,E=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,J=F&&!!x.anisotropyMap,st=Pe&&!!x.clearcoatMap,rt=Pe&&!!x.clearcoatNormalMap,K=Pe&&!!x.clearcoatRoughnessMap,tt=_&&!!x.iridescenceMap,at=_&&!!x.iridescenceThicknessMap,Tt=k&&!!x.sheenColorMap,ht=k&&!!x.sheenRoughnessMap,ot=!!x.specularMap,At=!!x.specularColorMap,It=!!x.specularIntensityMap,Ut=X&&!!x.transmissionMap,N=X&&!!x.thicknessMap,ct=!!x.gradientMap,j=!!x.alphaMap,lt=x.alphaTest>0,pt=!!x.alphaHash,nt=!!x.extensions,Et=dn;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Et=i.toneMapping);let bt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:zt,defines:x.defines,customVertexShaderID:Jt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:gt,batchingColor:gt&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:ye,envMap:Vt,envMapMode:Vt&&Z.mapping,envMapCubeUVHeight:H,aoMap:Yt,lightMap:re,bumpMap:Ht,normalMap:he,displacementMap:Ae,emissiveMap:Ze,normalMapObjectSpace:he&&x.normalMapType===vh,normalMapTangentSpace:he&&x.normalMapType===Qa,packedNormalMap:he&&x.normalMapType===Qa&&w0(x.normalMap.format),metalnessMap:de,roughnessMap:me,anisotropy:F,anisotropyMap:J,clearcoat:Pe,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:K,dispersion:te,retroreflection:E,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:at,sheen:k,sheenColorMap:Tt,sheenRoughnessMap:ht,specularMap:ot,specularColorMap:At,specularIntensityMap:It,transmission:X,transmissionMap:Ut,thicknessMap:N,gradientMap:ct,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:pt,combine:x.combine,mapUv:kt&&g(x.map.channel),aoMapUv:Yt&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:Ht&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:Ae&&g(x.displacementMap.channel),emissiveMapUv:Ze&&g(x.emissiveMap.channel),metalnessMapUv:de&&g(x.metalnessMap.channel),roughnessMapUv:me&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:st&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(x.sheenRoughnessMap.channel),specularMapUv:ot&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:It&&g(x.specularIntensityMap.channel),transmissionMapUv:Ut&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(he||F),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(kt||j),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:xt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ze&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Be,flipSided:x.side===Re,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),b(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=d[x.type],R;if(w){let I=Rn[w];R=Dh.clone(I.uniforms)}else R=x.uniforms;return R}function S(x,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new S0(i,w,x,s),l.push(R),u.set(w,R)),R}function T(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:T,releaseShaderCache:M,programs:l,dispose:C}}function A0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function E0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=g,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,d,g,v,m,p,b){b.reversedDepth===!0&&(m=-m);let A=o(h,d,g,v,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(h,d,g,v,m,p){let b=o(h,d,g,v,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,d){e.length>1&&e.sort(h||E0),n.length>1&&n.sort(d||jh),s.length>1&&s.sort(d||jh)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function C0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new tu,i.set(n,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function R0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Lt};break;case"SpotLight":e={position:new D,direction:new D,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function I0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D0(i){let t=new R0,e=I0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ue,a=new ue;function o(l){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,A=0,S=0,T=0,M=0,C=0,x=0,w=0,R=0;l.sort(L0);for(let U=0,B=l.length;U<B;U++){let P=l[U],z=P.color,W=P.intensity,O=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===pi?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*W,f+=z.g*W,h+=z.b*W;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],W);R++}else if(P.isSunLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,Q=e.get(P);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=Z;let yt=q.getViewportCount();for(let xt=0;xt<yt;xt++)n.sunShadowMatrix[v+xt]=q.getMatrix(xt),n.sunShadowCascade[v+xt]=q._cascadeData[xt];v+=yt,g++}n.sun[d]=H,d++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,Q=e.get(P);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=H,m++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(W),H.distance=O,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[b]=H;let q=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,q.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[b]=q.matrix,P.castShadow){let Q=e.get(P);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=Z,C++}b++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(z).multiplyScalar(W),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=H,A++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let q=P.shadow,Q=e.get(P);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=H,p++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(W),H.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[S]=H,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==b||I.rectAreaLength!==A||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==C||I.numSpotMaps!==x||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=b,I.rectAreaLength=A,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=C,I.numSpotMaps=x,I.numLightProbes=R,n.version=P0++)}function c(l,u){let f=0,h=0,d=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let b=0,A=l.length;b<A;b++){let S=l[b];if(S.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(S.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function eu(i){let t=new D0(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function N0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new eu(i),t.set(s,[o])):r>=a.length?(o=new eu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,O0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],B0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],nu=new ue,ir=new D,Vc=new D;function k0(i,t,e){let n=new rs,s=new Ct,r=new Ct,a=new ee,o=new os,c=new Qr,l={},u=e.maxTextureSize,f={[un]:Re,[Re]:un,[Be]:Be},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:U0,fragmentShader:F0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ei;let p=this.type;this.render=function(M,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===$l&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ei);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(En),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=p!==this.type;B&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=M.length;P<z;P++){let W=M[P],O=W.shadow;if(O===void 0){Rt("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Z=O.getFrameExtents();s.multiply(Z),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===An){if(W.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Oe(s.x,s.y,{format:pi,type:en,minFilter:fe,magFilter:fe,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new ai(s.x,s.y,pn),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=Sn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ce,O.map.depthTexture.magFilter=Ce}else W.isPointLight?(O.map=new io(s.x),O.map.depthTexture=new Zr(s.x,fn)):(O.map=new Oe(s.x,s.y),O.map.depthTexture=new ai(s.x,s.y,fn)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=Sn,this.type===Ei?(O.map.depthTexture.compareFunction=H?to:ja,O.map.depthTexture.minFilter=fe,O.map.depthTexture.magFilter=fe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ce,O.map.depthTexture.magFilter=Ce);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();W.isPointLight!==!0&&O.updateMatrices(W,x);for(let Q=0;Q<q;Q++){let yt=O.getCamera(Q);if(W.isPointLight){let xt=O.camera,jt=O.matrix,zt=W.distance||xt.far;zt!==xt.far&&(xt.far=zt,xt.updateProjectionMatrix()),ir.setFromMatrixPosition(W.matrixWorld),xt.position.copy(ir),Vc.copy(xt.position),Vc.add(O0[Q]),xt.up.copy(B0[Q]),xt.lookAt(Vc),xt.updateMatrixWorld(),jt.makeTranslation(-ir.x,-ir.y,-ir.z),nu.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(nu,xt.coordinateSystem,xt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(O.map),i.clear());let xt=O.getViewport(Q);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),U.viewport(a)}n=O.getFrustum(Q),S(C,x,yt,W,this.type)}O.isPointLightShadow!==!0&&this.type===An&&b(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,I)};function b(M,C){let x=t.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Oe(s.x,s.y,{format:pi,type:en}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,x,d,v,null)}function A(M,C,x,w){let R=null,I=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=R.uuid,B=C.uuid,P=l[U];P===void 0&&(P={},l[U]=P);let z=P[B];z===void 0&&(z=R.clone(),P[B]=z,C.addEventListener("dispose",T)),R=z}if(R.visible=C.visible,R.wireframe=C.wireframe,w===An?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=x}return R}function S(M,C,x,w,R){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===An)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let B=t.update(M),P=M.material;if(Array.isArray(P)){let z=B.groups;for(let W=0,O=z.length;W<O;W++){let Z=z[W],H=P[Z.materialIndex];if(H&&H.visible){let q=A(M,H,w,R);M.onBeforeShadow(i,M,C,x,B,q,Z),i.renderBufferDirect(x,null,B,q,M,Z),M.onAfterShadow(i,M,C,x,B,q,Z)}}}else if(P.visible){let z=A(M,P,w,R);M.onBeforeShadow(i,M,C,x,B,z,null),i.renderBufferDirect(x,null,B,z,M,null),M.onAfterShadow(i,M,C,x,B,z,null)}}let U=M.children;for(let B=0,P=U.length;B<P;B++)S(U[B],C,x,w,R)}function T(M){M.target.removeEventListener("dispose",T);for(let x in l){let w=l[x],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function z0(i,t){function e(){let N=!1,ct=new ee,j=null,lt=new ee(0,0,0,0);return{setMask:function(pt){j!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){N=pt},setClear:function(pt,nt,Et,bt,ae){ae===!0&&(pt*=bt,nt*=bt,Et*=bt),ct.set(pt,nt,Et,bt),lt.equals(ct)===!1&&(i.clearColor(pt,nt,Et,bt),lt.copy(ct))},reset:function(){N=!1,j=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,j=null,lt=null,pt=null;return{setReversed:function(nt){if(ct!==nt){let Et=t.get("EXT_clip_control");nt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return ct},setTest:function(nt){nt?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(nt){j!==nt&&!N&&(i.depthMask(nt),j=nt)},setFunc:function(nt){if(ct&&(nt=Ph[nt]),lt!==nt){switch(nt){case Ur:i.depthFunc(i.NEVER);break;case Fr:i.depthFunc(i.ALWAYS);break;case Or:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Br:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case zr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=nt}},setLocked:function(nt){N=nt},setClear:function(nt){pt!==nt&&(pt=nt,ct&&(nt=1-nt),i.clearDepth(nt))},reset:function(){N=!1,j=null,lt=null,pt=null,ct=!1}}}function s(){let N=!1,ct=null,j=null,lt=null,pt=null,nt=null,Et=null,bt=null,ae=null;return{setTest:function($t){N||($t?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function($t){ct!==$t&&!N&&(i.stencilMask($t),ct=$t)},setFunc:function($t,rn,_n){(j!==$t||lt!==rn||pt!==_n)&&(i.stencilFunc($t,rn,_n),j=$t,lt=rn,pt=_n)},setOp:function($t,rn,_n){(nt!==$t||Et!==rn||bt!==_n)&&(i.stencilOp($t,rn,_n),nt=$t,Et=rn,bt=_n)},setLocked:function($t){N=$t},setClear:function($t){ae!==$t&&(i.clearStencil($t),ae=$t)},reset:function(){N=!1,ct=null,j=null,lt=null,pt=null,nt=null,Et=null,bt=null,ae=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,b=null,A=null,S=null,T=null,M=null,C=null,x=new Lt(0,0,0),w=0,R=!1,I=null,U=null,B=null,P=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Z>=2);let q=null,Q={},yt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),jt=new ee().fromArray(yt),zt=new ee().fromArray(xt);function Jt(N,ct,j,lt){let pt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(N,nt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<j;Et++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return nt}let $={};$[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Qi),Ht(!1),he(nc),et(i.CULL_FACE),Yt(En);function et(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function vt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Nt(N,ct){return h[N]!==ct?(i.bindFramebuffer(N,ct),h[N]=ct,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function gt(N,ct){let j=g,lt=!1;if(N){j=d.get(ct),j===void 0&&(j=[],d.set(ct,j));let pt=N.textures;if(j.length!==pt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Et=pt.length;nt<Et;nt++)j[nt]=i.COLOR_ATTACHMENT0+nt;j.length=pt.length,lt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,lt=!0);lt&&i.drawBuffers(j)}function kt(N){return v!==N?(i.useProgram(N),v=N,!0):!1}let ye={[Ci]:i.FUNC_ADD,[Ql]:i.FUNC_SUBTRACT,[jl]:i.FUNC_REVERSE_SUBTRACT};ye[th]=i.MIN,ye[eh]=i.MAX;let Vt={[nh]:i.ZERO,[ih]:i.ONE,[sh]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[hh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[rh]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[uh]:i.CONSTANT_COLOR,[dh]:i.ONE_MINUS_CONSTANT_COLOR,[fh]:i.CONSTANT_ALPHA,[ph]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(N,ct,j,lt,pt,nt,Et,bt,ae,$t){if(N===En){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),N!==Kl){if(N!==p||$t!==R){if((b!==Ci||T!==Ci)&&(i.blendEquation(i.FUNC_ADD),b=Ci,T=Ci),$t)switch(N){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",N);break}else switch(N){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",N);break}A=null,S=null,M=null,C=null,x.set(0,0,0),w=0,p=N,R=$t}return}pt=pt||ct,nt=nt||j,Et=Et||lt,(ct!==b||pt!==T)&&(i.blendEquationSeparate(ye[ct],ye[pt]),b=ct,T=pt),(j!==A||lt!==S||nt!==M||Et!==C)&&(i.blendFuncSeparate(Vt[j],Vt[lt],Vt[nt],Vt[Et]),A=j,S=lt,M=nt,C=Et),(bt.equals(x)===!1||ae!==w)&&(i.blendColor(bt.r,bt.g,bt.b,ae),x.copy(bt),w=ae),p=N,R=!1}function re(N,ct){N.side===Be?vt(i.CULL_FACE):et(i.CULL_FACE);let j=N.side===Re;ct&&(j=!j),Ht(j),N.blending===ls&&N.transparent===!1?Yt(En):Yt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let lt=N.stencilWrite;o.setTest(lt),lt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function he(N){N!==Zl?(et(i.CULL_FACE),N!==U&&(N===nc?i.cullFace(i.BACK):N===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),U=N}function Ae(N){N!==B&&(O&&i.lineWidth(N),B=N)}function Ze(N,ct,j){N?(et(i.POLYGON_OFFSET_FILL),(P!==ct||z!==j)&&(P=ct,z=j,a.getReversed()&&(ct=-ct),i.polygonOffset(ct,j))):vt(i.POLYGON_OFFSET_FILL)}function de(N){N?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function me(N){N===void 0&&(N=i.TEXTURE0+W-1),q!==N&&(i.activeTexture(N),q=N)}function F(N,ct,j){j===void 0&&(q===null?j=i.TEXTURE0+W-1:j=q);let lt=Q[j];lt===void 0&&(lt={type:void 0,texture:void 0},Q[j]=lt),(lt.type!==N||lt.texture!==ct)&&(q!==j&&(i.activeTexture(j),q=j),i.bindTexture(N,ct||$[N]),lt.type=N,lt.texture=ct)}function Pe(){let N=Q[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function st(){try{i.texStorage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function rt(){try{i.texStorage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function tt(){try{i.texImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function at(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Tt(N,ct){f[N]!==ct&&(i.pixelStorei(N,ct),f[N]=ct)}function ht(N){jt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),jt.copy(N))}function ot(N){zt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),zt.copy(N))}function At(N,ct){let j=l.get(ct);j===void 0&&(j=new WeakMap,l.set(ct,j));let lt=j.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(ct,N.name),j.set(N,lt))}function It(N,ct){let lt=l.get(ct).get(N);c.get(ct)!==lt&&(i.uniformBlockBinding(ct,lt,N.__bindingPointIndex),c.set(ct,lt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},q=null,Q={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,b=null,A=null,S=null,T=null,M=null,C=null,x=new Lt(0,0,0),w=0,R=!1,I=null,U=null,B=null,P=null,z=null,jt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Nt,drawBuffers:gt,useProgram:kt,setBlending:Yt,setMaterial:re,setFlipSided:Ht,setCullFace:he,setLineWidth:Ae,setPolygonOffset:Ze,setScissorTest:de,activeTexture:me,bindTexture:F,unbindTexture:Pe,compressedTexImage2D:te,compressedTexImage3D:E,texImage2D:K,texImage3D:tt,pixelStorei:Tt,getParameter:at,updateUBOMapping:At,uniformBlockBinding:It,texStorage2D:st,texStorage3D:rt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:ht,viewport:ot,reset:Ut}}function V0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return g?new OffscreenCanvas(E,_):Us("canvas")}function m(E,_,k){let X=1,J=te(E);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let st=Math.floor(X*J.width),rt=Math.floor(X*J.height);h===void 0&&(h=v(st,rt));let K=_?v(st,rt):h;return K.width=st,K.height=rt,K.getContext("2d").drawImage(E,0,0,st,rt),Rt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+rt+")."),K}else return"data"in E&&Rt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function p(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,k,X,J,st=!1){if(E!==null){if(i[E]!==void 0)return i[E];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let rt;X&&(rt=t.get("EXT_texture_norm16"),rt||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&rt&&(K=rt.R16_EXT),k===i.SHORT&&rt&&(K=rt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),_===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&rt&&(K=rt.RG16_EXT),k===i.SHORT&&rt&&(K=rt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&rt&&(K=rt.RGB16_EXT),k===i.SHORT&&rt&&(K=rt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let tt=st?Ns:Wt.getTransfer(J);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=tt===Qt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&rt&&(K=rt.RGBA16_EXT),k===i.SHORT&&rt&&(K=rt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(E,_){let k;return E?_===null||_===fn||_===ds?k=i.DEPTH24_STENCIL8:_===pn?k=i.DEPTH32F_STENCIL8:_===us&&(k=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fn||_===ds?k=i.DEPTH_COMPONENT24:_===pn?k=i.DEPTH_COMPONENT32F:_===us&&(k=i.DEPTH_COMPONENT16),k}function M(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ce&&E.minFilter!==fe?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){let _=E.target;_.removeEventListener("dispose",C),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),I(_)}function w(E){let _=n.get(E);if(_.__webglInit===void 0)return;let k=E.source,X=d.get(k);if(X){let J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(E),Object.keys(X).length===0&&d.delete(k)}n.remove(E)}function R(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let k=E.source,X=d.get(k);delete X[_.__cacheKey],a.memory.textures--}function I(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[X][J]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=E.textures;for(let X=0,J=k.length;X<J;X++){let st=n.get(k[X]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(E)}let U=0;function B(){U=0}function P(){return U}function z(E){U=E}function W(){let E=U;return E>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function O(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Z(E,_){let k=n.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let X=E.image;if(X===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(k,E,_);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function H(E,_){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){vt(k,E,_);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function q(E,_){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){vt(k,E,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function Q(E,_){let k=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Nt(k,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let yt={[Mn]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},xt={[Ce]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[fe]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Je]:i.LINEAR_MIPMAP_LINEAR},jt={[Mh]:i.NEVER,[Ah]:i.ALWAYS,[Sh]:i.LESS,[ja]:i.LEQUAL,[bh]:i.EQUAL,[to]:i.GEQUAL,[wh]:i.GREATER,[Th]:i.NOTEQUAL};function zt(E,_){if(_.type===pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===fe||_.magFilter===ma||_.magFilter===Js||_.magFilter===Je||_.minFilter===fe||_.minFilter===ma||_.minFilter===Js||_.minFilter===Je)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,yt[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,yt[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,yt[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ce||_.minFilter!==Js&&_.minFilter!==Je||_.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));let X=_.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let st=O(_);if(st!==E.__cacheKey){J[st]===void 0&&(J[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[st].usedTimes++;let rt=J[E.__cacheKey];rt!==void 0&&(J[E.__cacheKey].usedTimes--,rt.usedTimes===0&&R(_)),E.__cacheKey=st,E.__webglTexture=J[st].texture}return k}function $(E,_,k){return Math.floor(Math.floor(E/k)/_)}function et(E,_,k,X){let st=E.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{st.sort((Tt,ht)=>Tt.start-ht.start);let rt=0;for(let Tt=1;Tt<st.length;Tt++){let ht=st[rt],ot=st[Tt],At=ht.start+ht.count,It=$(ot.start,_.width,4),Ut=$(ht.start,_.width,4);ot.start<=At+1&&It===Ut&&$(ot.start+ot.count-1,_.width,4)===It?ht.count=Math.max(ht.count,ot.start+ot.count-ht.start):(++rt,st[rt]=ot)}st.length=rt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Tt=0,ht=st.length;Tt<ht;Tt++){let ot=st[Tt],At=Math.floor(ot.start/4),It=Math.ceil(ot.count/4),Ut=At%_.width,N=Math.floor(At/_.width),ct=It,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Ut,N,ct,j,k,X,_.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function vt(E,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);let J=Jt(E,_),st=_.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+k);let rt=n.get(st);if(st.version!==rt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let j=Wt.getPrimaries(Wt.workingColorSpace),lt=_.colorSpace===Vn?null:Wt.getPrimaries(_.colorSpace),pt=_.colorSpace===Vn||j===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=Pe(_,tt);let at=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),ht=S(_.internalFormat,at,Tt,_.normalized,_.colorSpace,_.isVideoTexture);zt(X,_);let ot,At=_.mipmaps,It=_.isVideoTexture!==!0,Ut=rt.__version===void 0||J===!0,N=st.dataReady,ct=M(_,tt);if(_.isDepthTexture)ht=T(_.format===fi,_.type),Ut&&(It?e.texStorage2D(i.TEXTURE_2D,1,ht,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ht,tt.width,tt.height,0,at,Tt,null));else if(_.isDataTexture)if(At.length>0){It&&Ut&&e.texStorage2D(i.TEXTURE_2D,ct,ht,At[0].width,At[0].height);for(let j=0,lt=At.length;j<lt;j++)ot=At[j],It?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,at,Tt,ot.data):e.texImage2D(i.TEXTURE_2D,j,ht,ot.width,ot.height,0,at,Tt,ot.data);_.generateMipmaps=!1}else It?(Ut&&e.texStorage2D(i.TEXTURE_2D,ct,ht,tt.width,tt.height),N&&et(_,tt,at,Tt)):e.texImage2D(i.TEXTURE_2D,0,ht,tt.width,tt.height,0,at,Tt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ht,At[0].width,At[0].height,tt.depth);for(let j=0,lt=At.length;j<lt;j++)if(ot=At[j],_.format!==Ie)if(at!==null)if(It){if(N)if(_.layerUpdates.size>0){let pt=Ic(ot.width,ot.height,_.format,_.type);for(let nt of _.layerUpdates){let Et=ot.data.subarray(nt*pt/ot.data.BYTES_PER_ELEMENT,(nt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,nt,ot.width,ot.height,1,at,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,tt.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ht,ot.width,ot.height,tt.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,tt.depth,at,Tt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,ht,ot.width,ot.height,tt.depth,0,at,Tt,ot.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{It&&Ut&&e.texStorage2D(i.TEXTURE_2D,ct,ht,At[0].width,At[0].height);for(let j=0,lt=At.length;j<lt;j++)ot=At[j],_.format!==Ie?at!==null?It?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,j,ht,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,at,Tt,ot.data):e.texImage2D(i.TEXTURE_2D,j,ht,ot.width,ot.height,0,at,Tt,ot.data)}else if(_.isDataArrayTexture)if(It){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ht,tt.width,tt.height,tt.depth),N)if(_.layerUpdates.size>0){let j=Ic(tt.width,tt.height,_.format,_.type);for(let lt of _.layerUpdates){let pt=tt.data.subarray(lt*j/tt.data.BYTES_PER_ELEMENT,(lt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,tt.width,tt.height,1,at,Tt,pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,at,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,tt.width,tt.height,tt.depth,0,at,Tt,tt.data);else if(_.isData3DTexture)It?(Ut&&e.texStorage3D(i.TEXTURE_3D,ct,ht,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,at,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ht,tt.width,tt.height,tt.depth,0,at,Tt,tt.data);else if(_.isFramebufferTexture){if(Ut)if(It)e.texStorage2D(i.TEXTURE_2D,ct,ht,tt.width,tt.height);else{let j=tt.width,lt=tt.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,ht,j,lt,0,at,Tt,null),j>>=1,lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(_),j.onpaint=lt=>{let pt=lt.changedElements;for(let nt of f)pt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let pt=i.RGBA,nt=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,nt,Et,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(It&&Ut){let j=te(At[0]);e.texStorage2D(i.TEXTURE_2D,ct,ht,j.width,j.height)}for(let j=0,lt=At.length;j<lt;j++)ot=At[j],It?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,at,Tt,ot):e.texImage2D(i.TEXTURE_2D,j,ht,at,Tt,ot);_.generateMipmaps=!1}else if(It){if(Ut){let j=te(tt);e.texStorage2D(i.TEXTURE_2D,ct,ht,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,ht,at,Tt,tt);p(_)&&b(X),rt.__version=st.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Nt(E,_,k){if(_.image.length!==6)return;let X=Jt(E,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let st=n.get(J);if(J.version!==st.__version||X===!0){e.activeTexture(i.TEXTURE0+k);let rt=Wt.getPrimaries(Wt.workingColorSpace),K=_.colorSpace===Vn?null:Wt.getPrimaries(_.colorSpace),tt=_.colorSpace===Vn||rt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let at=_.isCompressedTexture||_.image[0].isCompressedTexture,Tt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!at&&!Tt?ht[nt]=m(_.image[nt],!0,s.maxCubemapSize):ht[nt]=Tt?_.image[nt].image:_.image[nt],ht[nt]=Pe(_,ht[nt]);let ot=ht[0],At=r.convert(_.format,_.colorSpace),It=r.convert(_.type),Ut=S(_.internalFormat,At,It,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ct=st.__version===void 0||X===!0,j=J.dataReady,lt=M(_,ot);zt(i.TEXTURE_CUBE_MAP,_);let pt;if(at){N&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ut,ot.width,ot.height);for(let nt=0;nt<6;nt++){pt=ht[nt].mipmaps;for(let Et=0;Et<pt.length;Et++){let bt=pt[Et];_.format!==Ie?At!==null?N?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Ut,bt.width,bt.height,0,bt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,bt.width,bt.height,At,It,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Ut,bt.width,bt.height,0,At,It,bt.data)}}}else{if(pt=_.mipmaps,N&&ct){pt.length>0&&lt++;let nt=te(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ut,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,At,It,ht[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ut,ht[nt].width,ht[nt].height,0,At,It,ht[nt].data);for(let Et=0;Et<pt.length;Et++){let ae=pt[Et].image[nt].image;N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,ae.width,ae.height,At,It,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Ut,ae.width,ae.height,0,At,It,ae.data)}}else{N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,It,ht[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ut,At,It,ht[nt]);for(let Et=0;Et<pt.length;Et++){let bt=pt[Et];N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,At,It,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Ut,At,It,bt.image[nt])}}}p(_)&&b(i.TEXTURE_CUBE_MAP),st.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function gt(E,_,k,X,J,st){let rt=r.convert(k.format,k.colorSpace),K=r.convert(k.type),tt=S(k.internalFormat,rt,K,k.normalized,k.colorSpace),at=n.get(_),Tt=n.get(k);if(Tt.__renderTarget=_,!at.__hasExternalTextures){let ht=Math.max(1,_.width>>st),ot=Math.max(1,_.height>>st);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,st,tt,ht,ot,_.depth,0,rt,K,null):e.texImage2D(J,st,tt,ht,ot,0,rt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Tt.__webglTexture,0,de(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Tt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let X=_.depthTexture,J=X&&X.isDepthTexture?X.type:null,st=T(_.stencilBuffer,J),rt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(_),st,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,E)}else{let X=_.textures;for(let J=0;J<X.length;J++){let st=X[J],rt=r.convert(st.format,st.colorSpace),K=r.convert(st.type),tt=S(st.internalFormat,rt,K,st.normalized,st.colorSpace);me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(_),tt,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(E,_,k){let X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_.depthTexture);let at=r.convert(_.depthTexture.format),Tt=r.convert(_.depthTexture.type),ht;_.depthTexture.format===Sn?ht=i.DEPTH_COMPONENT24:_.depthTexture.format===fi&&(ht=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,_.width,_.height,0,at,Tt,null)}}else Z(_.depthTexture,0);let st=J.__webglTexture,rt=de(_),K=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,tt=_.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Sn)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,st,0);else if(_.depthTexture.format===fi)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(E){let _=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=X}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ye(_.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;X&&X.length>0?ye(_.__webglFramebuffer[0],E,0):ye(_.__webglFramebuffer,E,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),kt(_.__webglDepthbuffer[X],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),kt(_.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(E,_,k){let X=n.get(E);_!==void 0&&gt(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Vt(E)}function re(E){let _=E.texture,k=n.get(E),X=n.get(_);E.addEventListener("dispose",x);let J=E.textures,st=E.isWebGLCubeRenderTarget===!0,rt=J.length>1;if(rt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),st){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let tt=0;tt<_.mipmaps.length;tt++)k.__webglFramebuffer[K][tt]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(rt)for(let K=0,tt=J.length;K<tt;K++){let at=n.get(J[K]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&me(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let tt=J[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let at=r.convert(tt.format,tt.colorSpace),Tt=r.convert(tt.type),ht=S(tt.internalFormat,at,Tt,tt.normalized,tt.colorSpace,E.isXRRenderTarget===!0),ot=de(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ht,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)gt(k.__webglFramebuffer[K][tt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else gt(k.__webglFramebuffer[K],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let K=0,tt=J.length;K<tt;K++){let at=J[K],Tt=n.get(at),ht=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Tt.__webglTexture),zt(ht,at),gt(k.__webglFramebuffer,E,at,i.COLOR_ATTACHMENT0+K,ht,0),p(at)&&b(ht)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,X.__webglTexture),zt(K,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)gt(k.__webglFramebuffer[tt],E,_,i.COLOR_ATTACHMENT0,K,tt);else gt(k.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,K,0);p(_)&&b(K),e.unbindTexture()}E.depthBuffer&&Vt(E)}function Ht(E){let _=E.textures;for(let k=0,X=_.length;k<X;k++){let J=_[k];if(p(J)){let st=A(E),rt=n.get(J).__webglTexture;e.bindTexture(st,rt),b(st),e.unbindTexture()}}}let he=[],Ae=[];function Ze(E){if(E.samples>0){if(me(E)===!1){let _=E.textures,k=E.width,X=E.height,J=i.COLOR_BUFFER_BIT,st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(E),K=_.length>1;if(K)for(let at=0;at<_.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let tt=E.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<_.length;at++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Tt=n.get(_[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,J,i.NEAREST),c===!0&&(he.length=0,Ae.length=0,he.push(i.COLOR_ATTACHMENT0+at),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(he.push(st),Ae.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let at=0;at<_.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Tt=n.get(_[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function de(E){return Math.min(s.maxSamples,E.samples)}function me(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(E){let _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Pe(E,_){let k=E.colorSpace,X=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Ds&&k!==Vn&&(Wt.getTransfer(k)===Qt?(X!==Ie||J!==be)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",k)),_}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=P,this.setTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=Yt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function G0(i,t){function e(n,s=Vn){let r,a=Wt.getTransfer(s);if(n===be)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gc)return i.BYTE;if(n===_c)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===Mc)return i.RGB;if(n===Ie)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===va)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===$s||n===Ks||n===Qs||n===js)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ba||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ea||n===Ca||n===Ra||n===Ia||n===tr||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ea)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ga||n===Ha||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qa)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===$a||n===er||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:H0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Jc,p={},b=e.getContextAttributes(),A=null,S=null,T=[],M=[],C=new Ct,x=null,w=null,R=new Ue;R.viewport=new ee;let I=new Ue;I.viewport=new ee;let U=[R,I],B=new da,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=T[$];return et===void 0&&(et=new is,T[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=T[$];return et===void 0&&(et=new is,T[$]=et),et.getGripSpace()},this.getHand=function($){let et=T[$];return et===void 0&&(et=new is,T[$]=et),et.getHandSpace()};function W($){let et=M.indexOf($.inputSource);if(et===-1)return;let vt=T[et];vt!==void 0&&(vt.update($.inputSource,$.frame,l||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<T.length;$++){let et=M[$];et!==null&&(M[$]=null,T[$].disconnect(et))}P=null,z=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(A),d=null,h=null,f=null,s=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Nt=null,gt=null;b.depth&&(gt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?fi:Sn,Nt=b.stencil?ds:fn);let kt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Oe(h.textureWidth,h.textureHeight,{format:Ie,type:be,depthTexture:new ai(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Oe(d.framebufferWidth,d.framebufferHeight,{format:Ie,type:be,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z($){for(let et=0;et<$.removed.length;et++){let vt=$.removed[et],Nt=M.indexOf(vt);Nt>=0&&(M[Nt]=null,T[Nt].disconnect(vt))}for(let et=0;et<$.added.length;et++){let vt=$.added[et],Nt=M.indexOf(vt);if(Nt===-1){for(let kt=0;kt<T.length;kt++)if(kt>=M.length){M.push(vt),Nt=kt;break}else if(M[kt]===null){M[kt]=vt,Nt=kt;break}if(Nt===-1)break}let gt=T[Nt];gt&&gt.connect(vt)}}let H=new D,q=new D;function Q($,et,vt){H.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(vt.matrixWorld);let Nt=H.distanceTo(q),gt=et.projectionMatrix.elements,kt=vt.projectionMatrix.elements,ye=gt[14]/(gt[10]-1),Vt=gt[14]/(gt[10]+1),Yt=(gt[9]+1)/gt[5],re=(gt[9]-1)/gt[5],Ht=(gt[8]-1)/gt[0],he=(kt[8]+1)/kt[0],Ae=ye*Ht,Ze=ye*he,de=Nt/(-Ht+he),me=de*-Ht;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(de),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),gt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let F=ye+de,Pe=Vt+de,te=Ae-me,E=Ze+(Nt-me),_=Yt*Vt/Pe*F,k=re*Vt/Pe*F;$.projectionMatrix.makePerspective(te,E,_,k,F,Pe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function yt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),B.near=I.near=R.near=et,B.far=I.far=R.far=vt,(P!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,z=B.far),B.layers.mask=$.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Nt=$.parent,gt=B.cameras;yt(B,Nt);for(let kt=0;kt<gt.length;kt++)yt(gt[kt],Nt);gt.length===2?Q(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),xt($,B,Nt)};function xt($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=es*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return p[$]};let jt=null;function zt($,et){if(u=et.getViewerPose(l||a),g=et,u!==null){let vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Nt=!1;vt.length!==B.cameras.length&&(B.cameras.length=0,Nt=!0);for(let Vt=0;Vt<vt.length;Vt++){let Yt=vt[Vt],re=null;if(d!==null)re=d.getViewport(Yt);else{let he=f.getViewSubImage(h,Yt);re=he.viewport,Vt===0&&(t.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(S))}let Ht=U[Vt];Ht===void 0&&(Ht=new Ue,Ht.layers.enable(Vt),Ht.viewport=new ee,U[Vt]=Ht),Ht.matrix.fromArray(Yt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Yt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(re.x,re.y,re.width,re.height),Vt===0&&(B.matrix.copy(Ht.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Nt===!0&&B.cameras.push(Ht)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Vt=f.getDepthInformation(vt[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(gt&&gt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<vt.length;Vt++){let Yt=vt[Vt].camera;if(Yt){let re=p[Yt];re||(re=new Vs,p[Yt]=re);let Ht=f.getCameraImage(Yt);re.sourceTexture=Ht}}}}for(let vt=0;vt<T.length;vt++){let Nt=M[vt],gt=T[vt];Nt!==null&&gt!==void 0&&gt.update(Nt,et,l||a)}jt&&jt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Jt=new iu;Jt.setAnimationLoop(zt),this.setAnimationLoop=function($){jt=$},this.dispose=function(){}}},X0=new ue,lu=new Dt;lu.set(-1,0,0,0,1,0,0,0,1);function q0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ec(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,S=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){let M=T.program;n.uniformBlockBinding(S,M)}function l(S,T){let M=s[S.id];M===void 0&&(m(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",b));let C=T.program;n.updateUBOMapping(S,C);let x=t.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){let T=f();S.__bindingPointIndex=T;let M=i.createBuffer(),C=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let T=s[S.id],M=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,w=M.length;x<w;x++){let R=M[x];if(Array.isArray(R))for(let I=0,U=R.length;I<U;I++)d(R[I],x,I,C);else d(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,T,M,C){if(v(S,T,M,C)===!0){let x=S.__offset,w=S.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let U=w[I],B=p(U);g(U,S.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function g(S,T,M){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,M)}function v(S,T,M,C){let x=S.value,w=T+"_"+M;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let R=C[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(S){let T=S.uniforms,M=0,C=16;for(let w=0,R=T.length;w<R;w++){let I=Array.isArray(T[w])?T[w]:[T[w]];for(let U=0,B=I.length;U<B;U++){let P=I[U],z=Array.isArray(P.value)?P.value:[P.value];for(let W=0,O=z.length;W<O;W++){let Z=z[W],H=p(Z),q=M%C,Q=q%H.boundary,yt=q+Q;M+=Q,yt!==0&&C-yt<H.storage&&(M+=C-yt),P.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=H.storage}}}let x=M%C;return x>0&&(M+=C-x),S.__size=M,S.__cache={},this}function p(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",S),T}function b(S){let T=S.target;T.removeEventListener("dispose",b);let M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function J0(){return Cn===null&&(Cn=new Tn(Z0,16,16,pi,en),Cn.name="DFG_LUT",Cn.minFilter=fe,Cn.magFilter=fe,Cn.wrapS=yn,Cn.wrapT=yn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var so=class{constructor(t={}){let{canvas:e=Ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=be}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,m=new Set([Ma,ya,va]),p=new Set([be,fn,us,ds,_a,xa]),b=new Uint32Array(4),A=new Int32Array(4),S=new D,T=null,M=null,C=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,U=null,B=null,P=null,z=null;this._outputColorSpace=xe;let W=0,O=0,Z=null,H=-1,q=null,Q=new ee,yt=new ee,xt=null,jt=new Lt(0),zt=0,Jt=e.width,$=e.height,et=1,vt=null,Nt=null,gt=new ee(0,0,Jt,$),kt=new ee(0,0,Jt,$),ye=!1,Vt=new rs,Yt=!1,re=!1,Ht=new ue,he=new D,Ae=new ee,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function me(){return Z===null?et:1}let F=n;function Pe(y,L){return e.getContext(y,L)}let te,E,_,k,X,J,st,rt,K,tt,at,Tt,ht,ot,At,It,Ut,N,ct,j,lt,pt,nt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",rn,!1),F===null){let L="webgl2";if(F=Pe(L,y),F===null)throw Pe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(y){throw e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Pt("WebGLRenderer: "+y.message),y}function Et(){te=new ng(F),te.init(),lt=new G0(F,te),E=new qm(F,te,t,lt),_=new z0(F,te),E.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),B=F.createFramebuffer(),P=F.createFramebuffer(),z=F.createFramebuffer(),k=new rg(F),X=new A0,J=new V0(F,te,_,X,E,lt,k),st=new eg(R),rt=new of(F),pt=new Wm(F,rt),K=new ig(F,rt,k,pt),tt=new og(F,K,rt,pt,k),N=new ag(F,E,J),At=new Ym(X),at=new T0(R,st,te,E,pt,At),Tt=new q0(R,X),ht=new C0,ot=new N0(te),Ut=new Hm(R,st,_,tt,g,c),It=new k0(R,tt,E),nt=new Y0(F,k,E,_),ct=new Xm(F,te,k),j=new sg(F,te,k),k.programs=at.programs,R.capabilities=E,R.extensions=te,R.properties=X,R.renderLists=ht,R.shadowMap=It,R.state=_,R.info=k}v!==be&&(w=new lg(v,e.width,e.height,o,s,r));let bt=new $c(R,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(Jt,$,!1))},this.getSize=function(y){return y.set(Jt,$)},this.setSize=function(y,L,Y=!0){if(bt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=y,$=L,e.width=Math.floor(y*et),e.height=Math.floor(L*et),Y===!0&&(e.style.width=y+"px",e.style.height=L+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Jt*et,$*et).floor()},this.setDrawingBufferSize=function(y,L,Y){Jt=y,$=L,et=Y,e.width=Math.floor(y*Y),e.height=Math.floor(L*Y),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===be){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,L,Y,V){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,L,Y,V),_.viewport(Q.copy(gt).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(kt)},this.setScissor=function(y,L,Y,V){y.isVector4?kt.set(y.x,y.y,y.z,y.w):kt.set(y,L,Y,V),_.scissor(yt.copy(kt).multiplyScalar(et).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(y){_.setScissorTest(ye=y)},this.setOpaqueSort=function(y){vt=y},this.setTransparentSort=function(y){Nt=y},this.getClearColor=function(y){return y.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,Y=!0){let V=0;if(y){let G=!1;if(Z!==null){let ft=Z.texture.format;G=m.has(ft)}if(G){let ft=Z.texture.type,_t=p.has(ft),dt=Ut.getClearColor(),Mt=Ut.getClearAlpha(),wt=dt.r,Ot=dt.g,Gt=dt.b;_t?(b[0]=wt,b[1]=Ot,b[2]=Gt,b[3]=Mt,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=wt,A[1]=Ot,A[2]=Gt,A[3]=Mt,F.clearBufferiv(F.COLOR,0,A))}else V|=F.COLOR_BUFFER_BIT}L&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Ut.dispose(),ht.dispose(),ot.dispose(),X.dispose(),st.dispose(),tt.dispose(),pt.dispose(),nt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ml),bt.removeEventListener("sessionend",gl),vi.stop()};function ae(y){y.preventDefault(),wc("WebGLRenderer: Context Lost."),I=!0}function $t(){wc("WebGLRenderer: Context Restored."),I=!1;let y=k.autoReset,L=It.enabled,Y=It.autoUpdate,V=It.needsUpdate,G=It.type;Et(),k.autoReset=y,It.enabled=L,It.autoUpdate=Y,It.needsUpdate=V,It.type=G}function rn(y){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function _n(y){let L=y.target;L.removeEventListener("dispose",_n),ju(L)}function ju(y){td(y),X.remove(y)}function td(y){let L=X.get(y).programs;L!==void 0&&(L.forEach(function(Y){at.releaseProgram(Y)}),y.isShaderMaterial&&at.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,Y,V,G,ft){L===null&&(L=Ze);let _t=G.isMesh&&G.matrixWorld.determinantAffine()<0,dt=id(y,L,Y,V,G);_.setMaterial(V,_t);let Mt=Y.index,wt=1;if(V.wireframe===!0){if(Mt=K.getWireframeAttribute(Y),Mt===void 0)return;wt=2}let Ot=Y.drawRange,Gt=Y.attributes.position,St=Ot.start*wt,Kt=(Ot.start+Ot.count)*wt;ft!==null&&(St=Math.max(St,ft.start*wt),Kt=Math.min(Kt,(ft.start+ft.count)*wt)),Mt!==null?(St=Math.max(St,0),Kt=Math.min(Kt,Mt.count)):Gt!=null&&(St=Math.max(St,0),Kt=Math.min(Kt,Gt.count));let ge=Kt-St;if(ge<0||ge===1/0)return;pt.setup(G,V,dt,Y,Mt);let ce,se=ct;if(Mt!==null&&(ce=rt.get(Mt),se=j,se.setIndex(ce)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*me()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(G.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),_.setLineWidth(Le*me()),G.isLineSegments?se.setMode(F.LINES):G.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else G.isPoints?se.setMode(F.POINTS):G.isSprite&&se.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(te.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Le=G._multiDrawStarts,mt=G._multiDrawCounts,Ve=G._multiDrawCount,qt=Mt?rt.get(Mt).bytesPerElement:1,nn=X.get(V).currentProgram.getUniforms();for(let xn=0;xn<Ve;xn++)nn.setValue(F,"_gl_DrawID",xn),se.render(Le[xn]/qt,mt[xn])}else if(G.isInstancedMesh)se.renderInstances(St,ge,G.count);else if(Y.isInstancedBufferGeometry){let Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,mt=Math.min(Y.instanceCount,Le);se.renderInstances(St,ge,mt)}else se.render(St,ge)};function pl(y,L,Y,V){U!==null&&y.isNodeMaterial&&U.setObject(V,y),Yt===!0&&At.setState(y,Y,!1),y.transparent===!0&&y.side===Be&&y.forceSinglePass===!1?(y.side=Re,y.needsUpdate=!0,fr(y,L,V),y.side=un,y.needsUpdate=!0,fr(y,L,V),y.side=Be):fr(y,L,V)}this.compile=function(y,L,Y=null){Y===null&&(Y=y),U!==null&&U.renderStart(y,L,Y),M=ot.get(Y),M.init(L),x.push(M),Y.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),y!==Y&&y.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),re=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,re),Yt===!0&&At.setGlobalState(this.clippingPlanes,L),U!==null&&It.render(M.state.shadowsArray,Y,L);let V=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ft=G.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){let dt=ft[_t];pl(dt,Y,L,G),V.add(dt)}else pl(ft,Y,L,G),V.add(ft)}),M=x.pop(),U!==null&&U.renderEnd(),V},this.compileAsync=function(y,L,Y=null){let V=this.compile(y,L,Y);return new Promise(G=>{function ft(){if(V.forEach(function(_t){let Mt=X.get(_t).currentProgram;(Mt===void 0||Mt.isReady())&&V.delete(_t)}),V.size===0){G(y);return}setTimeout(ft,10)}te.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let bo=null;function ed(y){bo&&bo(y)}function ml(){vi.stop()}function gl(){vi.start()}let vi=new iu;vi.setAnimationLoop(ed),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(y){bo=y,bt.setAnimationLoop(y),y===null?vi.stop():vi.start()},bt.addEventListener("sessionstart",ml),bt.addEventListener("sessionend",gl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(y,L);let Y=bt.enabled===!0&&bt.isPresenting===!0,V=w!==null&&(Z===null||Y)&&w.begin(R,Z);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(L),L=bt.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,L,Z),M=ot.get(y,x.length),M.init(L),M.state.textureUnits=J.getTextureUnits(),x.push(M),Ht.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Vt.setFromProjectionMatrix(Ht,hn,L.reversedDepth),re=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,re),T=ht.get(y,C.length),T.init(),C.push(T),bt.enabled===!0&&bt.isPresenting===!0){let _t=R.xr.getDepthSensingMesh();_t!==null&&wo(_t,L,-1/0,R.sortObjects)}wo(y,L,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(M.state.lightsArray),R.sortObjects===!0&&T.sort(vt,Nt),de=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,de&&Ut.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&At.beginShadows();let G=M.state.shadowsArray;if(It.render(G,y,L),Yt===!0&&At.endShadows(),(V&&w.hasRenderPass())===!1){let _t=T.opaque,dt=T.transmissive;if(M.setupLights(),L.isArrayCamera){let Mt=L.cameras;if(dt.length>0)for(let wt=0,Ot=Mt.length;wt<Ot;wt++){let Gt=Mt[wt];xl(_t,dt,y,Gt)}de&&Ut.render(y);for(let wt=0,Ot=Mt.length;wt<Ot;wt++){let Gt=Mt[wt];_l(T,y,Gt,Gt.viewport)}}else dt.length>0&&xl(_t,dt,y,L),de&&Ut.render(y),_l(T,y,L)}Z!==null&&O===0&&(J.updateMultisampleRenderTarget(Z),J.updateRenderTargetMipmap(Z)),V&&w.end(R),y.isScene===!0&&y.onAfterRender(R,y,L),pt.resetDefaultState(),H=-1,q=null,x.pop(),x.length>0?(M=x[x.length-1],J.setTextureUnits(M.state.textureUnits),Yt===!0&&At.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,U!==null&&U.renderEnd()};function wo(y,L,Y,V){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Vt)){V&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ht);let _t=tt.update(y),dt=y.material;dt.visible&&T.push(y,_t,dt,Y,Ae.z,null,L)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Vt))){let _t=tt.update(y),dt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ae.copy(_t.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(Ht)),Array.isArray(dt)){let Mt=_t.groups;for(let wt=0,Ot=Mt.length;wt<Ot;wt++){let Gt=Mt[wt],St=dt[Gt.materialIndex];St&&St.visible&&T.push(y,_t,St,Y,Ae.z,Gt,L)}}else dt.visible&&T.push(y,_t,dt,Y,Ae.z,null,L)}}let ft=y.children;for(let _t=0,dt=ft.length;_t<dt;_t++)wo(ft[_t],L,Y,V)}function _l(y,L,Y,V){let{opaque:G,transmissive:ft,transparent:_t}=y;M.setupLightsView(Y),Yt===!0&&At.setGlobalState(R.clippingPlanes,Y),V&&_.viewport(Q.copy(V)),G.length>0&&dr(G,L,Y),ft.length>0&&dr(ft,L,Y),_t.length>0&&dr(_t,L,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function xl(y,L,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let St=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new Oe(1,1,{generateMipmaps:!0,type:St?en:be,minFilter:Je,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let ft=M.state.transmissionRenderTarget[V.id],_t=V.viewport||Q;ft.setSize(_t.z*R.transmissionResolutionScale,_t.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),Mt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(jt),zt=R.getClearAlpha(),zt<1&&R.setClearColor(16777215,.5),R.clear(),de&&Ut.render(Y);let Ot=R.toneMapping;R.toneMapping=dn;let Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),Yt===!0&&At.setGlobalState(R.clippingPlanes,V),dr(y,Y,V),J.updateMultisampleRenderTarget(ft),J.updateRenderTargetMipmap(ft),te.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Kt=0,ge=L.length;Kt<ge;Kt++){let ce=L[Kt],{object:se,geometry:Le,material:mt,group:Ve}=ce;if(mt.side===Be&&se.layers.test(V.layers)){let qt=mt.side;mt.side=Re,mt.needsUpdate=!0,vl(se,Y,V,Le,mt,Ve),mt.side=qt,mt.needsUpdate=!0,St=!0}}St===!0&&(J.updateMultisampleRenderTarget(ft),J.updateRenderTargetMipmap(ft))}R.setRenderTarget(dt,Mt,wt),R.setClearColor(jt,zt),Gt!==void 0&&(V.viewport=Gt),R.toneMapping=Ot}function dr(y,L,Y){let V=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ft=y.length;G<ft;G++){let _t=y[G],{object:dt,geometry:Mt,group:wt}=_t,Ot=_t.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),dt.layers.test(Y.layers)&&vl(dt,L,Y,Mt,Ot,wt)}}function vl(y,L,Y,V,G,ft){U!==null&&G.isNodeMaterial&&U.setObject(y,G),y.onBeforeRender(R,L,Y,V,G,ft),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(R,L,Y,V,y,ft),G.transparent===!0&&G.side===Be&&G.forceSinglePass===!1?(G.side=Re,G.needsUpdate=!0,R.renderBufferDirect(Y,L,V,G,y,ft),G.side=un,G.needsUpdate=!0,R.renderBufferDirect(Y,L,V,G,y,ft),G.side=Be):R.renderBufferDirect(Y,L,V,G,y,ft),y.onAfterRender(R,L,Y,V,G,ft)}function fr(y,L,Y){L.isScene!==!0&&(L=Ze);let V=X.get(y),G=M.state.lights,ft=M.state.shadowsArray,_t=G.state.version,dt=at.getParameters(y,G.state,ft,L,Y,M.state.lightProbeGridArray),Mt=at.getProgramCacheKey(dt),wt=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,V.fog=L.fog;let Ot=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=st.get(y.envMap||V.environment,Ot),V.envMapRotation=V.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",_n),wt=new Map,V.programs=wt);let Gt=wt.get(Mt);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===_t)return Ml(y,dt),Gt}else dt.uniforms=at.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,Y,dt),y.onBeforeCompile(dt,R),Gt=at.acquireProgram(dt,Mt),wt.set(Mt,Gt),V.uniforms=dt.uniforms;let St=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=At.uniform),Ml(y,dt),V.needsLights=rd(y),V.lightsStateVersion=_t,V.needsLights&&(St.ambientLightColor.value=G.state.ambient,St.lightProbe.value=G.state.probe,St.sunLights.value=G.state.sun,St.sunLightShadows.value=G.state.sunShadow,St.directionalLights.value=G.state.directional,St.directionalLightShadows.value=G.state.directionalShadow,St.spotLights.value=G.state.spot,St.spotLightShadows.value=G.state.spotShadow,St.rectAreaLights.value=G.state.rectArea,St.ltc_1.value=G.state.rectAreaLTC1,St.ltc_2.value=G.state.rectAreaLTC2,St.pointLights.value=G.state.point,St.pointLightShadows.value=G.state.pointShadow,St.hemisphereLights.value=G.state.hemi,St.sunShadowMatrix.value=G.state.sunShadowMatrix,St.sunShadowCascade.value=G.state.sunShadowCascade,St.directionalShadowMatrix.value=G.state.directionalShadowMatrix,St.spotLightMatrix.value=G.state.spotLightMatrix,St.spotLightMap.value=G.state.spotLightMap,St.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=Gt,V.uniformsList=null,Gt}function yl(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=gs.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Ml(y,L){let Y=X.get(y);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function nd(y,L){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let Y=0,V=y.length;Y<V;Y++){let G=y[Y];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function id(y,L,Y,V,G){L.isScene!==!0&&(L=Ze),J.resetTextureUnits();let ft=L.fog,_t=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?L.environment:null,dt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Wt.workingColorSpace,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,wt=st.get(V.envMap||_t,Mt),Ot=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Gt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!Y.morphAttributes.position,Kt=!!Y.morphAttributes.normal,ge=!!Y.morphAttributes.color,ce=dn;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ce=R.toneMapping);let se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Le=se!==void 0?se.length:0,mt=X.get(V),Ve=M.state.lights;if(Yt===!0&&(re===!0||y!==q)){let oe=y===q&&V.id===H;At.setState(V,y,oe)}let qt=!1;V.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Ve.state.version||mt.outputColorSpace!==dt||G.isBatchedMesh&&mt.batching===!1||!G.isBatchedMesh&&mt.batching===!0||G.isBatchedMesh&&mt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&mt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&mt.instancing===!1||!G.isInstancedMesh&&mt.instancing===!0||G.isSkinnedMesh&&mt.skinning===!1||!G.isSkinnedMesh&&mt.skinning===!0||G.isInstancedMesh&&mt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&mt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&mt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&mt.instancingMorph===!1&&G.morphTexture!==null||mt.envMap!==wt||V.fog===!0&&mt.fog!==ft||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==At.numPlanes||mt.numIntersection!==At.numIntersection)||mt.vertexAlphas!==Ot||mt.vertexTangents!==Gt||mt.morphTargets!==St||mt.morphNormals!==Kt||mt.morphColors!==ge||mt.toneMapping!==ce||mt.morphTargetsCount!==Le||!!mt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,mt.__version=V.version);let nn=mt.currentProgram;qt===!0&&(nn=fr(V,L,G),U&&V.isNodeMaterial&&U.onUpdateProgram(V,nn,mt));let xn=!1,Yn=!1,Ui=!1,ne=nn.getUniforms(),pe=mt.uniforms;if(_.useProgram(nn.program)&&(xn=!0,Yn=!0,Ui=!0),V.id!==H&&(H=V.id,Yn=!0),mt.needsLights){let oe=nd(M.state.lightProbeGridArray,G);mt.lightProbeGrid!==oe&&(mt.lightProbeGrid=oe,Yn=!0)}if(xn||q!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ne.setValue(F,"projectionMatrix",y.projectionMatrix),ne.setValue(F,"viewMatrix",y.matrixWorldInverse);let Jn=ne.map.cameraPosition;Jn!==void 0&&Jn.setValue(F,he.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&ne.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ne.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),q!==y&&(q=y,Yn=!0,Ui=!0)}if(mt.needsLights&&(Ve.state.sunShadowMap.length>0&&ne.setValue(F,"sunShadowMap",Ve.state.sunShadowMap,J),Ve.state.directionalShadowMap.length>0&&ne.setValue(F,"directionalShadowMap",Ve.state.directionalShadowMap,J),Ve.state.spotShadowMap.length>0&&ne.setValue(F,"spotShadowMap",Ve.state.spotShadowMap,J),Ve.state.pointShadowMap.length>0&&ne.setValue(F,"pointShadowMap",Ve.state.pointShadowMap,J)),G.isSkinnedMesh){ne.setOptional(F,G,"bindMatrix"),ne.setOptional(F,G,"bindMatrixInverse");let oe=G.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),ne.setValue(F,"boneTexture",oe.boneTexture,J))}G.isBatchedMesh&&(ne.setOptional(F,G,"batchingTexture"),ne.setValue(F,"batchingTexture",G._matricesTexture,J),ne.setOptional(F,G,"batchingIdTexture"),ne.setValue(F,"batchingIdTexture",G._indirectTexture,J),ne.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ne.setValue(F,"batchingColorTexture",G._colorsTexture,J));let Zn=Y.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&N.update(G,Y,nn),(Yn||mt.receiveShadow!==G.receiveShadow)&&(mt.receiveShadow=G.receiveShadow,ne.setValue(F,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&L.environment!==null&&(pe.envMapIntensity.value=L.environmentIntensity),pe.dfgLUT!==void 0&&(pe.dfgLUT.value=J0()),Yn){if(ne.setValue(F,"toneMappingExposure",R.toneMappingExposure),mt.needsLights&&sd(pe,Ui),ft&&V.fog===!0&&Tt.refreshFogUniforms(pe,ft),Tt.refreshMaterialUniforms(pe,V,et,$,M.state.transmissionRenderTarget[y.id]),mt.needsLights&&mt.lightProbeGrid){let oe=mt.lightProbeGrid;pe.probesSH.value=oe.texture,pe.probesMin.value.copy(oe.boundingBox.min),pe.probesMax.value.copy(oe.boundingBox.max),pe.probesResolution.value.copy(oe.resolution)}gs.upload(F,yl(mt),pe,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gs.upload(F,yl(mt),pe,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ne.setValue(F,"center",G.center),ne.setValue(F,"modelViewMatrix",G.modelViewMatrix),ne.setValue(F,"normalMatrix",G.normalMatrix),ne.setValue(F,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let oe=V.uniformsGroups;for(let Jn=0,Fi=oe.length;Jn<Fi;Jn++){let bl=oe[Jn];nt.update(bl,nn),nt.bind(bl,nn)}}return nn}function sd(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function rd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(y,L,Y){let V=X.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=L,X.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let Y=X.get(y);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,Y=0){Z=y,W=L,O=Y;let V=null,G=!1,ft=!1;if(y){let dt=X.get(y);if(dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,dt.__webglFramebuffer),Q.copy(y.viewport),yt.copy(y.scissor),xt=y.scissorTest,_.viewport(Q),_.scissor(yt),_.setScissorTest(xt),H=-1;return}else if(dt.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(dt.__hasExternalTextures)J.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ot=y.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&X.has(Ot)&&(y.width!==Ot.image.width||y.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}let Mt=y.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);let wt=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?V=wt[L][Y]:V=wt[L],G=!0):y.samples>0&&J.useMultisampledRTT(y)===!1?V=X.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?V=wt[Y]:V=wt,Q.copy(y.viewport),yt.copy(y.scissor),xt=y.scissorTest}else Q.copy(gt).multiplyScalar(et).floor(),yt.copy(kt).multiplyScalar(et).floor(),xt=ye;if(Y!==0&&(V=B),_.bindFramebuffer(F.FRAMEBUFFER,V)&&_.drawBuffers(y,V),_.viewport(Q),_.scissor(yt),_.setScissorTest(xt),G){let dt=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,Y)}else if(ft){let dt=L;for(let Mt=0;Mt<y.textures.length;Mt++){let wt=X.get(y.textures[Mt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Mt,wt.__webglTexture,Y,dt)}}else if(y!==null&&Y!==0){let dt=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,Y)}H=-1};function Sl(y){let L=X.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=E.textureFormatReadable(y.format),L.__typeReadable=E.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,Y,V,G,ft,_t,dt=0){if(!(y&&y.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt){_.bindFramebuffer(F.FRAMEBUFFER,Mt);try{let wt=y.textures[dt],Ot=wt.format,Gt=wt.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt);let St=Sl(wt);if(St.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-V&&Y>=0&&Y<=y.height-G&&F.readPixels(L,Y,V,G,lt.convert(Ot),lt.convert(Gt),ft)}finally{let wt=Z!==null?X.get(Z).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,L,Y,V,G,ft,_t,dt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt)if(L>=0&&L<=y.width-V&&Y>=0&&Y<=y.height-G){_.bindFramebuffer(F.FRAMEBUFFER,Mt);let wt=y.textures[dt],Ot=wt.format,Gt=wt.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt);let St=Sl(wt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(L,Y,V,G,lt.convert(Ot),lt.convert(Gt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ge=Z!==null?X.get(Z).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,ge);let ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ih(F,ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Kt),F.deleteSync(ce),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,Y=0){let V=Math.pow(2,-Y),G=Math.floor(y.image.width*V),ft=Math.floor(y.image.height*V),_t=L!==null?L.x:0,dt=L!==null?L.y:0;J.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,_t,dt,G,ft),_.unbindTexture()},this.copyTextureToTexture=function(y,L,Y=null,V=null,G=0,ft=0){let _t,dt,Mt,wt,Ot,Gt,St,Kt,ge,ce=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(Y!==null)_t=Y.max.x-Y.min.x,dt=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,wt=Y.min.x,Ot=Y.min.y,Gt=Y.isBox3?Y.min.z:0;else{let pe=Math.pow(2,-G);_t=Math.floor(ce.width*pe),dt=Math.floor(ce.height*pe),y.isDataArrayTexture?Mt=ce.depth:y.isData3DTexture?Mt=Math.floor(ce.depth*pe):Mt=1,wt=0,Ot=0,Gt=0}V!==null?(St=V.x,Kt=V.y,ge=V.z):(St=0,Kt=0,ge=0);let se=lt.convert(L.format),Le=lt.convert(L.type),mt;L.isData3DTexture?(J.setTexture3D(L,0),mt=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(J.setTexture2DArray(L,0),mt=F.TEXTURE_2D_ARRAY):(J.setTexture2D(L,0),mt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let Ve=_.getParameter(F.UNPACK_ROW_LENGTH),qt=_.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(F.UNPACK_SKIP_PIXELS),xn=_.getParameter(F.UNPACK_SKIP_ROWS),Yn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,ce.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ce.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),_.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt);let Ui=y.isDataArrayTexture||y.isData3DTexture,ne=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let pe=X.get(y),Zn=X.get(L),oe=X.get(pe.__renderTarget),Jn=X.get(Zn.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,oe.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Fi=0;Fi<Mt;Fi++)Ui&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(y).__webglTexture,G,Gt+Fi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(L).__webglTexture,ft,ge+Fi)),F.blitFramebuffer(wt,Ot,_t,dt,St,Kt,_t,dt,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||X.has(y)){let pe=X.get(y),Zn=X.get(L);_.bindFramebuffer(F.READ_FRAMEBUFFER,P),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let oe=0;oe<Mt;oe++)Ui?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pe.__webglTexture,G,Gt+oe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,G),ne?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zn.__webglTexture,ft,ge+oe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zn.__webglTexture,ft),G!==0?F.blitFramebuffer(wt,Ot,_t,dt,St,Kt,_t,dt,F.COLOR_BUFFER_BIT,F.NEAREST):ne?F.copyTexSubImage3D(mt,ft,St,Kt,ge+oe,wt,Ot,_t,dt):F.copyTexSubImage2D(mt,ft,St,Kt,wt,Ot,_t,dt);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ne?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(mt,ft,St,Kt,ge,_t,dt,Mt,se,Le,ce.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(mt,ft,St,Kt,ge,_t,dt,Mt,se,ce.data):F.texSubImage3D(mt,ft,St,Kt,ge,_t,dt,Mt,se,Le,ce):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ft,St,Kt,_t,dt,se,Le,ce.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ft,St,Kt,ce.width,ce.height,se,ce.data):F.texSubImage2D(F.TEXTURE_2D,ft,St,Kt,_t,dt,se,Le,ce);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ve),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),_.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(F.UNPACK_SKIP_ROWS,xn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Yn),ft===0&&L.generateMipmaps&&F.generateMipmap(mt),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&J.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?J.setTextureCube(y,0):y.isData3DTexture?J.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?J.setTexture2DArray(y,0):J.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){W=0,O=0,Z=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var uu=()=>{let i=new Tn(new Uint8Array([0,0,0,0]),1,1,Ie,be);return i.needsUpdate=!0,i},vs=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},du=({size:i=256,threads:t=16,strength:e=2.2,slub:n=.18}={})=>{let s=new Float32Array(i*i);for(let c=0;c<i;c+=1)for(let l=0;l<i;l+=1){let u=l/i*t,f=c/i*t,h=Math.floor(u),d=Math.floor(f),g=Math.sin(Math.PI*(u-h))**.8,v=Math.sin(Math.PI*(f-d))**.8,m=(h+d)%2===0,p=g*(m?1:.5)*(1-n+n*vs(h%t)),b=v*(m?.5:1)*(1-n+n*vs(d%t+97));s[c*i+l]=Math.max(p,b)}let r=new Uint8Array(i*i*4),a=(c,l)=>s[(l+i)%i*i+(c+i)%i];for(let c=0;c<i;c+=1)for(let l=0;l<i;l+=1){let u=(a(l-1,c)-a(l+1,c))*e,f=(a(l,c+1)-a(l,c-1))*e,h=Math.hypot(u,f,1),d=(c*i+l)*4;r[d]=(u/h*.5+.5)*255,r[d+1]=(f/h*.5+.5)*255,r[d+2]=(1/h*.5+.5)*255,r[d+3]=255}let o=new Tn(r,i,i,Ie,be);return o.wrapS=Mn,o.wrapT=Mn,o.magFilter=fe,o.minFilter=Je,o.generateMipmaps=!0,o.needsUpdate=!0,o},Kc=(i,t,e=!0)=>{let n=new Tn(i,t,t,Ie,be);return e&&(n.wrapS=Mn,n.wrapT=Mn),n.magFilter=fe,n.minFilter=Je,n.generateMipmaps=!0,n.needsUpdate=!0,n},fu=(i,t,e)=>{let n=new Uint8Array(t*t*4),s=t-1;for(let r=0;r<t;r+=1){let a=r*t,o=(r-1&s)*t,c=(r+1&s)*t;for(let l=0;l<t;l+=1){let u=(i[a+(l-1&s)]-i[a+(l+1&s)])*e,f=(i[c+l]-i[o+l])*e,h=1/Math.sqrt(u*u+f*f+1),d=(a+l)*4;n[d]=(u*h*.5+.5)*255,n[d+1]=(f*h*.5+.5)*255,n[d+2]=(h*.5+.5)*255,n[d+3]=255}}return n},hu=(i,t,e,n,s,r)=>{let a=s-e,o=r-n,c=Math.min(Math.max(((i-e)*a+(t-n)*o)/(a*a+o*o),0),1);return Math.hypot(e+a*c-i,n+o*c-t)},pu=({size:i=256,columns:t=16,rows:e=16,strength:n=2.4}={})=>{let s=i/t,r=i/e,a=l=>Math.max(0,1-(l/.2)**2),o=new Float32Array(s*r);for(let l=0;l<r;l+=1)for(let u=0;u<s;u+=1){let f=u/s,h=l/r,d=hu(f,h,.04,-.1,.5,1.12),g=hu(f,h,.96,-.1,.5,1.12);o[l*s+u]=Math.max(a(d),a(g))**.8}let c=new Float32Array(i*i);for(let l=0;l<i;l+=1)for(let u=0;u<i;u+=1){let f=.94+.06*vs(Math.floor(u/s)*31+Math.floor(l/r));c[l*i+u]=o[l%r*s+u%s]*f}return Kc(fu(c,i,n),i)},mu=({size:i=128,ribs:t=16,strength:e=3}={})=>{let n=new Float32Array(i*i);for(let s=0;s<i;s+=1)for(let r=0;r<i;r+=1)n[s*i+r]=Math.abs(Math.sin(Math.PI*r*t/i))**.6;return Kc(fu(n,i,e),i)},gu=({size:i=256,depth:t=.16}={})=>{let e=new Uint8Array(i*i*4),n=(r,a)=>{let o=vs(a*7.13);return vs(Math.floor((r+o*i)/(6+o*18))*3.7+a*11.1)};for(let r=0;r<i;r+=1)for(let a=0;a<i;a+=1){let o=1-t*(.55*n(a,r)+.45*vs(a*12.9898+r*78.233)),c=(r*i+a)*4,l=Math.round(o*255);e[c]=l,e[c+1]=l,e[c+2]=l,e[c+3]=255}let s=Kc(e,i);return s.colorSpace=xe,s},Qc=(i,t,e,n=2.4)=>{let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d",{willReadFrequently:!0});r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,i,t),r.lineCap="round",r.lineJoin="round",e(r,i,t);let a=r.getImageData(0,0,i,t).data,o=new Uint8Array(i*t*4),c=n/255;for(let u=0;u<t;u+=1){let f=u*i,h=Math.max(u-1,0)*i,d=Math.min(u+1,t-1)*i;for(let g=0;g<i;g+=1){let v=g===0?i-1:g-1,m=g===i-1?0:g+1,p=a[(f+v)*4]-a[(f+m)*4],b=a[(h+g)*4]-a[(d+g)*4],A=(f+g)*4;if(p===0&&b===0)o[A]=128,o[A+1]=128,o[A+2]=255;else{let S=p*c,T=b*c,M=1/Math.sqrt(S*S+T*T+1);o[A]=(S*M*.5+.5)*255,o[A+1]=(T*M*.5+.5)*255,o[A+2]=(M*.5+.5)*255}o[A+3]=255}}let l=new Tn(o,i,t,Ie,be);return l.wrapS=Mn,l.magFilter=fe,l.minFilter=Je,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,l},_u=(i,t=1024)=>{let e=document.createElement("canvas");e.width=t,e.height=t;let n=e.getContext("2d");n.scale(t/600,t/600),n.strokeStyle="#000",n.lineCap="round",n.lineJoin="round",i(n);let s=new ri(e);return s.anisotropy=4,s},$0=(i,t,[e,n,s,r],a)=>{let o=Math.min(i-e,n-i)/a,c=Math.min(t-s,r-t)/a,l=Math.min(Math.max(Math.min(o,c),0),1);return l*l*(3-2*l)},xu=(i=256,t=128)=>{let e=[{rect:[.28,.48,.12,.42],value:4.6,tint:[1,.96,.9],feather:.09},{rect:[.71,.78,.14,.6],value:2.2,tint:[.94,.97,1],feather:.05},{rect:[.05,.12,.2,.5],value:1.6,tint:[1,.93,.86],feather:.04}],n=new Uint16Array(i*t*4);for(let r=0;r<t;r+=1){let a=(r+.5)/t,o=a<.5?.62+.55*(1-a/.5)**3:.3-.12*((a-.5)/.5);for(let c=0;c<i;c+=1){let l=(c+.5)/i,u=o*1,f=o*.97,h=o*.92;for(let g of e){let v=$0(l,a,g.rect,g.feather)*g.value;u+=v*g.tint[0],f+=v*g.tint[1],h+=v*g.tint[2]}let d=(r*i+c)*4;n[d]=si.toHalfFloat(u),n[d+1]=si.toHalfFloat(f),n[d+2]=si.toHalfFloat(h),n[d+3]=si.toHalfFloat(1)}}let s=new Tn(n,i,t,Ie,en);return s.mapping=hs,s.magFilter=fe,s.minFilter=fe,s.needsUpdate=!0,s},vu=(i=128)=>{let t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.35,"rgba(0,0,0,0.6)"),n.addColorStop(.7,"rgba(0,0,0,0.15)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);let s=new ri(t);return s.colorSpace=xe,s};var K0=({floorFront:i=14,wallZ:t=-7,bend:e=4,top:n=30})=>{let s=[];for(let r=0;r<=12;r+=1)s.push([i-(i-(t+e))*r/12,0]);for(let r=1;r<=16;r+=1){let a=r/16*(Math.PI/2);s.push([t+e-Math.sin(a)*e,e-Math.cos(a)*e])}for(let r=1;r<=8;r+=1)s.push([t,e+(n-e)*r/8]);return s},Q0=(i,t)=>{let e=K0(t),n=[],s=[];e.forEach(([a,o])=>n.push(-i/2,o,a,i/2,o,a));for(let a=0;a<e.length-1;a+=1){let o=a*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}let r=new Se;return r.setAttribute("position",new ie(n,3)),r.setIndex(s),r.computeVertexNormals(),r},yu=()=>{let i=new Me,t=new Ws({color:new Lt("#3b2a1a"),opacity:.2}),e=new Zt(Q0(60,{}),t);e.receiveShadow=!0;let n=new Ti({map:vu(),color:new Lt("#2a1c10"),transparent:!0,opacity:.32,depthWrite:!1}),s=new Zt(new Ai(1,1),n);return s.rotation.x=-Math.PI/2,s.position.y=.01,s.renderOrder=1,i.add(e,s),{group:i,contact:s,setShadowOpacity(r){t.opacity=r},placeContact(r,a,o=0,c=1){let l=(1+a*.35)*Math.max(c,.001),u=Math.cos(o),f=Math.sin(o);s.scale.set(r.size*l,r.size*.62*l,1),s.position.x=r.x*u+r.z*f,s.position.z=-r.x*f+r.z*u,n.opacity=.34/(1+a*1.6)*Math.min(c,1)}}};var Xt=11102230246251565e-32,ve=134217729,rr=(3+8*Xt)*Xt;function Li(i,t,e,n,s){let r,a,o,c,l=t[0],u=n[0],f=0,h=0;u>l==u>-l?(r=l,l=t[++f]):(r=u,u=n[++h]);let d=0;if(f<i&&h<e)for(u>l==u>-l?(a=l+r,o=r-(a-l),l=t[++f]):(a=u+r,o=r-(a-u),u=n[++h]),r=a,o!==0&&(s[d++]=o);f<i&&h<e;)u>l==u>-l?(a=r+l,c=a-r,o=r-(a-c)+(l-c),l=t[++f]):(a=r+u,c=a-r,o=r-(a-c)+(u-c),u=n[++h]),r=a,o!==0&&(s[d++]=o);for(;f<i;)a=r+l,c=a-r,o=r-(a-c)+(l-c),l=t[++f],r=a,o!==0&&(s[d++]=o);for(;h<e;)a=r+u,c=a-r,o=r-(a-c)+(u-c),u=n[++h],r=a,o!==0&&(s[d++]=o);return(r!==0||d===0)&&(s[d++]=r),d}function ar(i,t){let e=t[0];for(let n=1;n<i;n++)e+=t[n];return e}function it(i){return new Float64Array(i)}var j0=(3+16*Xt)*Xt,t_=(2+12*Xt)*Xt,e_=(9+64*Xt)*Xt*Xt,ys=it(4),Mu=it(8),Su=it(12),bu=it(16),qe=it(4);function n_(i,t,e,n,s,r,a){let o,c,l,u,f,h,d,g,v,m,p,b,A,S,T,M,C,x,w=i-s,R=e-s,I=t-r,U=n-r;S=w*U,h=ve*w,d=h-(h-w),g=w-d,h=ve*U,v=h-(h-U),m=U-v,T=g*m-(S-d*v-g*v-d*m),M=I*R,h=ve*I,d=h-(h-I),g=I-d,h=ve*R,v=h-(h-R),m=R-v,C=g*m-(M-d*v-g*v-d*m),p=T-C,f=T-p,ys[0]=T-(p+f)+(f-C),b=S+p,f=b-S,A=S-(b-f)+(p-f),p=A-M,f=A-p,ys[1]=A-(p+f)+(f-M),x=b+p,f=x-b,ys[2]=b-(x-f)+(p-f),ys[3]=x;let B=ar(4,ys),P=t_*a;if(B>=P||-B>=P||(f=i-w,o=i-(w+f)+(f-s),f=e-R,l=e-(R+f)+(f-s),f=t-I,c=t-(I+f)+(f-r),f=n-U,u=n-(U+f)+(f-r),o===0&&c===0&&l===0&&u===0)||(P=e_*a+rr*Math.abs(B),B+=w*u+U*o-(I*l+R*c),B>=P||-B>=P))return B;S=o*U,h=ve*o,d=h-(h-o),g=o-d,h=ve*U,v=h-(h-U),m=U-v,T=g*m-(S-d*v-g*v-d*m),M=c*R,h=ve*c,d=h-(h-c),g=c-d,h=ve*R,v=h-(h-R),m=R-v,C=g*m-(M-d*v-g*v-d*m),p=T-C,f=T-p,qe[0]=T-(p+f)+(f-C),b=S+p,f=b-S,A=S-(b-f)+(p-f),p=A-M,f=A-p,qe[1]=A-(p+f)+(f-M),x=b+p,f=x-b,qe[2]=b-(x-f)+(p-f),qe[3]=x;let z=Li(4,ys,4,qe,Mu);S=w*u,h=ve*w,d=h-(h-w),g=w-d,h=ve*u,v=h-(h-u),m=u-v,T=g*m-(S-d*v-g*v-d*m),M=I*l,h=ve*I,d=h-(h-I),g=I-d,h=ve*l,v=h-(h-l),m=l-v,C=g*m-(M-d*v-g*v-d*m),p=T-C,f=T-p,qe[0]=T-(p+f)+(f-C),b=S+p,f=b-S,A=S-(b-f)+(p-f),p=A-M,f=A-p,qe[1]=A-(p+f)+(f-M),x=b+p,f=x-b,qe[2]=b-(x-f)+(p-f),qe[3]=x;let W=Li(z,Mu,4,qe,Su);S=o*u,h=ve*o,d=h-(h-o),g=o-d,h=ve*u,v=h-(h-u),m=u-v,T=g*m-(S-d*v-g*v-d*m),M=c*l,h=ve*c,d=h-(h-c),g=c-d,h=ve*l,v=h-(h-l),m=l-v,C=g*m-(M-d*v-g*v-d*m),p=T-C,f=T-p,qe[0]=T-(p+f)+(f-C),b=S+p,f=b-S,A=S-(b-f)+(p-f),p=A-M,f=A-p,qe[1]=A-(p+f)+(f-M),x=b+p,f=x-b,qe[2]=b-(x-f)+(p-f),qe[3]=x;let O=Li(W,Su,4,qe,bu);return bu[O-1]}function Ms(i,t,e,n,s,r){let a=(t-r)*(e-s),o=(i-s)*(n-r),c=a-o,l=Math.abs(a+o);return Math.abs(c)>=j0*l?c:-n_(i,t,e,n,s,r,l)}var UM=(7+56*Xt)*Xt,FM=(3+28*Xt)*Xt,OM=(26+288*Xt)*Xt*Xt,BM=it(4),kM=it(4),zM=it(4),VM=it(4),GM=it(4),HM=it(4),WM=it(4),XM=it(4),qM=it(4),YM=it(8),ZM=it(8),JM=it(8),$M=it(4),KM=it(8),QM=it(8),jM=it(16),tS=it(12),eS=it(192),nS=it(192);var rS=(10+96*Xt)*Xt,aS=(4+48*Xt)*Xt,oS=(44+576*Xt)*Xt*Xt,cS=it(4),lS=it(4),hS=it(4),uS=it(4),dS=it(4),fS=it(4),pS=it(4),mS=it(4),gS=it(8),_S=it(8),xS=it(8),vS=it(8),yS=it(8),MS=it(8),SS=it(8),bS=it(8),wS=it(8),TS=it(4),AS=it(4),ES=it(4),CS=it(8),RS=it(16),IS=it(16),PS=it(16),LS=it(32),DS=it(32),NS=it(48),US=it(64),FS=it(1152),OS=it(1152);var VS=(16+224*Xt)*Xt,GS=(5+72*Xt)*Xt,HS=(71+1408*Xt)*Xt*Xt,WS=it(4),XS=it(4),qS=it(4),YS=it(4),ZS=it(4),JS=it(4),$S=it(4),KS=it(4),QS=it(4),jS=it(4),tb=it(24),eb=it(24),nb=it(24),ib=it(24),sb=it(24),rb=it(24),ab=it(24),ob=it(24),cb=it(24),lb=it(24),hb=it(1152),ub=it(1152),db=it(1152),fb=it(1152),pb=it(1152),mb=it(2304),gb=it(2304),_b=it(3456),xb=it(5760),vb=it(8),yb=it(8),Mb=it(8),Sb=it(16),bb=it(24),wb=it(48),Tb=it(48),Ab=it(96),Eb=it(192),Cb=it(384),Rb=it(384),Ib=it(384),Pb=it(768);var Lb=it(96),Db=it(96),Nb=it(96),Ub=it(1152);var Tu=Math.pow(2,-52),oo=new Uint32Array(512),cr=class i{static from(t,e=c_,n=l_){let s=t.length,r=new Float64Array(s*2);for(let a=0;a<s;a++){let o=t[a];r[2*a]=e(o),r[2*a+1]=n(o)}return new i(r)}constructor(t){let e=t.length>>1;if(e>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;let n=Math.max(2*e-5,0);this._triangles=new Uint32Array(n*3),this._halfedges=new Int32Array(n*3),this._hashSize=Math.ceil(Math.sqrt(e)),this._hullPrev=new Uint32Array(e),this._hullNext=new Uint32Array(e),this._hullTri=new Uint32Array(e),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(e),this._dists=new Float64Array(e),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){let{coords:t,_hullPrev:e,_hullNext:n,_hullTri:s,_hullHash:r}=this,a=t.length>>1,o=1/0,c=1/0,l=-1/0,u=-1/0;for(let w=0;w<a;w++){let R=t[2*w],I=t[2*w+1];R<o&&(o=R),I<c&&(c=I),R>l&&(l=R),I>u&&(u=I),this._ids[w]=w}let f=(o+l)/2,h=(c+u)/2,d=0,g=0,v=0;for(let w=0,R=1/0;w<a;w++){let I=jc(f,h,t[2*w],t[2*w+1]);I<R&&(d=w,R=I)}let m=t[2*d],p=t[2*d+1];for(let w=0,R=1/0;w<a;w++){if(w===d)continue;let I=jc(m,p,t[2*w],t[2*w+1]);I<R&&I>0&&(g=w,R=I)}let b=t[2*g],A=t[2*g+1],S=1/0;for(let w=0;w<a;w++){if(w===d||w===g)continue;let R=a_(m,p,b,A,t[2*w],t[2*w+1]);R<S&&(v=w,S=R)}let T=t[2*v],M=t[2*v+1];if(S===1/0){for(let I=0;I<a;I++)this._dists[I]=t[2*I]-t[0]||t[2*I+1]-t[1];Ss(this._ids,this._dists,0,a-1);let w=new Uint32Array(a),R=0;for(let I=0,U=-1/0;I<a;I++){let B=this._ids[I],P=this._dists[B];P>U&&(w[R++]=B,U=P)}this.hull=w.subarray(0,R),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(Ms(m,p,b,A,T,M)<0){let w=g,R=b,I=A;g=v,b=T,A=M,v=w,T=R,M=I}let C=o_(m,p,b,A,T,M);this._cx=C.x,this._cy=C.y;for(let w=0;w<a;w++)this._dists[w]=jc(t[2*w],t[2*w+1],C.x,C.y);Ss(this._ids,this._dists,0,a-1),this._hullStart=d;let x=3;n[d]=e[v]=g,n[g]=e[d]=v,n[v]=e[g]=d,s[d]=0,s[g]=1,s[v]=2,r.fill(-1),r[this._hashKey(m,p)]=d,r[this._hashKey(b,A)]=g,r[this._hashKey(T,M)]=v,this.trianglesLen=0,this._addTriangle(d,g,v,-1,-1,-1);for(let w=0,R=0,I=0;w<this._ids.length;w++){let U=this._ids[w],B=t[2*U],P=t[2*U+1];if(w>0&&Math.abs(B-R)<=Tu&&Math.abs(P-I)<=Tu||(R=B,I=P,U===d||U===g||U===v))continue;let z=0;for(let q=0,Q=this._hashKey(B,P);q<this._hashSize&&(z=r[(Q+q)%this._hashSize],!(z!==-1&&z!==n[z]));q++);z=e[z];let W=z,O;for(;O=n[W],Ms(B,P,t[2*W],t[2*W+1],t[2*O],t[2*O+1])>=0;)if(W=O,W===z){W=-1;break}if(W===-1)continue;let Z=this._addTriangle(W,U,n[W],-1,-1,s[W]);s[U]=this._legalize(Z+2),s[W]=Z,x++;let H=n[W];for(;O=n[H],Ms(B,P,t[2*H],t[2*H+1],t[2*O],t[2*O+1])<0;)Z=this._addTriangle(H,U,O,s[U],-1,s[H]),s[U]=this._legalize(Z+2),n[H]=H,x--,H=O;if(W===z)for(;O=e[W],Ms(B,P,t[2*O],t[2*O+1],t[2*W],t[2*W+1])<0;)Z=this._addTriangle(O,U,W,-1,s[W],s[O]),this._legalize(Z+2),s[O]=Z,n[W]=W,x--,W=O;this._hullStart=e[U]=W,n[W]=e[H]=U,n[U]=H,r[this._hashKey(B,P)]=U,r[this._hashKey(t[2*W],t[2*W+1])]=W}this.hull=new Uint32Array(x);for(let w=0,R=this._hullStart;w<x;w++)this.hull[w]=R,R=n[R];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,e){return Math.floor(s_(t-this._cx,e-this._cy)*this._hashSize)%this._hashSize}_legalize(t){let{_triangles:e,_halfedges:n,coords:s}=this,r=0,a=0;for(;;){let o=n[t],c=t-t%3;if(a=c+(t+2)%3,o===-1){if(r===0)break;t=oo[--r];continue}let l=o-o%3,u=c+(t+1)%3,f=l+(o+2)%3,h=e[a],d=e[t],g=e[u],v=e[f];if(r_(s[2*h],s[2*h+1],s[2*d],s[2*d+1],s[2*g],s[2*g+1],s[2*v],s[2*v+1])){e[t]=v,e[o]=h;let p=n[f];if(p===-1){let A=this._hullStart;do{if(this._hullTri[A]===f){this._hullTri[A]=t;break}A=this._hullPrev[A]}while(A!==this._hullStart)}this._link(t,p),this._link(o,n[a]),this._link(a,f);let b=l+(o+1)%3;r<oo.length&&(oo[r++]=b)}else{if(r===0)break;t=oo[--r]}}return a}_link(t,e){this._halfedges[t]=e,e!==-1&&(this._halfedges[e]=t)}_addTriangle(t,e,n,s,r,a){let o=this.trianglesLen;return this._triangles[o]=t,this._triangles[o+1]=e,this._triangles[o+2]=n,this._link(o,s),this._link(o+1,r),this._link(o+2,a),this.trianglesLen+=3,o}};function s_(i,t){let e=i/(Math.abs(i)+Math.abs(t));return(t>0?3-e:1+e)/4}function jc(i,t,e,n){let s=i-e,r=t-n;return s*s+r*r}function r_(i,t,e,n,s,r,a,o){let c=i-a,l=t-o,u=e-a,f=n-o,h=s-a,d=r-o,g=c*c+l*l,v=u*u+f*f,m=h*h+d*d;return c*(f*m-v*d)-l*(u*m-v*h)+g*(u*d-f*h)<0}function a_(i,t,e,n,s,r){let a=e-i,o=n-t,c=s-i,l=r-t,u=a*a+o*o,f=c*c+l*l,h=.5/(a*l-o*c),d=(l*u-o*f)*h,g=(a*f-c*u)*h;return d*d+g*g}function o_(i,t,e,n,s,r){let a=e-i,o=n-t,c=s-i,l=r-t,u=a*a+o*o,f=c*c+l*l,h=.5/(a*l-o*c),d=i+(l*u-o*f)*h,g=t+(a*f-c*u)*h;return{x:d,y:g}}function Ss(i,t,e,n){if(n-e<=20)for(let s=e+1;s<=n;s++){let r=i[s],a=t[r],o=s-1;for(;o>=e&&t[i[o]]>a;)i[o+1]=i[o--];i[o+1]=r}else{let s=e+n>>1,r=e+1,a=n;or(i,s,r),t[i[e]]>t[i[n]]&&or(i,e,n),t[i[r]]>t[i[n]]&&or(i,r,n),t[i[e]]>t[i[r]]&&or(i,e,r);let o=i[r],c=t[o];for(;;){do r++;while(t[i[r]]<c);do a--;while(t[i[a]]>c);if(a<r)break;or(i,r,a)}i[e+1]=i[a],i[a]=o,n-r+1>=a-e?(Ss(i,t,r,n),Ss(i,t,e,a-1)):(Ss(i,t,e,a-1),Ss(i,t,r,n))}}function or(i,t,e){let n=i[t];i[t]=i[e],i[e]=n}function c_(i){return i[0]}function l_(i){return i[1]}var ze=(i,t,e)=>Math.min(Math.max(i,t),e),Ye=(i,t,e)=>{let n=ze((e-i)/(t-i),0,1);return n*n*(3-2*n)},tl=(i,t)=>{let e=Math.min(i/t,1);return t*Math.sqrt(Math.max(0,1-(1-e)*(1-e)))},lr=(i,t,e,n,s)=>{let r=[];for(let a=1;a<=s;a+=1){let o=a/s,c=1-o,l=c*c*c,u=3*c*c*o,f=3*c*o*o,h=o*o*o;r.push([l*i[0]+u*t[0]+f*e[0]+h*n[0],l*i[1]+u*t[1]+f*e[1]+h*n[1]])}return r},h_=i=>{let t=0;for(let e=0;e<i.length;e+=1){let[n,s]=i[e],[r,a]=i[(e+1)%i.length];t+=n*a-r*s}return t/2},Au=(i,t)=>{let e=[],n=0;for(let s=0;s<i.length;s+=1){let[r,a]=i[s],[o,c]=i[(s+1)%i.length],l=Math.hypot(o-r,c-a),u=n;for(;u<l;){let f=u/l;e.push([r+(o-r)*f,a+(c-a)*f]),u+=t}n=u-l}return e},u_=(i,t)=>{let e=i;for(let n=0;n<t;n+=1)e=e.map((s,r)=>{let a=e[(r-1+e.length)%e.length],o=e[(r+1)%e.length];return[(a[0]+2*s[0]+o[0])/4,(a[1]+2*s[1]+o[1])/4]});return e},co=class{constructor(t,{step:e=.06,soften:n=4}={}){let s=u_(Au(t,.02),n);h_(s)<0&&s.reverse(),s=Au(s,e),this.points=s,this.n=s.length,this.xs=Float64Array.from(s,r=>r[0]),this.ys=Float64Array.from(s,r=>r[1]),this.minX=Math.min(...this.xs),this.maxX=Math.max(...this.xs),this.minY=Math.min(...this.ys),this.maxY=Math.max(...this.ys)}distance(t,e){let{xs:n,ys:s,n:r}=this,a=1/0;for(let o=0,c=r-1;o<r;c=o,o+=1){let l=n[c],u=s[c],f=n[o]-l,h=s[o]-u,d=f*f+h*h||1e-12,g=ze(((t-l)*f+(e-u)*h)/d,0,1),v=l+f*g-t,m=u+h*g-e,p=v*v+m*m;p<a&&(a=p)}return Math.sqrt(a)}contains(t,e){let{xs:n,ys:s,n:r}=this,a=!1;for(let o=0,c=r-1;o<r;c=o,o+=1)s[o]>e!=s[c]>e&&t<(n[c]-n[o])*(e-s[o])/(s[c]-s[o])+n[o]&&(a=!a);return a}depth(t,e){return this.contains(t,e)?this.distance(t,e):0}},Eu=async(i,{spacing:t,rings:e,front:n,back:s,uvScale:r=.1},a=()=>Promise.resolve())=>{let o=i.points.map(M=>[M[0],M[1]]),c=o.map(()=>0),l=o.length,{n:u}=i;for(let M of e)for(let C=0;C<u;C+=1){let x=i.points[(C-1+u)%u],w=i.points[(C+1)%u],R=w[0]-x[0],I=w[1]-x[1],U=Math.hypot(R,I)||1;R/=U,I/=U;let B=i.points[C][0]-I*M,P=i.points[C][1]+R*M;if(!i.contains(B,P))continue;let z=i.distance(B,P);z<M*.7||(o.push([B,P]),c.push(z))}let f=e[e.length-1]+t*.55,h=t*.866;for(let M=0,C=i.minY;C<=i.maxY;M+=1,C+=h)for(let x=i.minX+M%2*t*.5;x<=i.maxX;x+=t){if(!i.contains(x,C))continue;let w=i.distance(x,C);w<f||(o.push([x,C]),c.push(w))}await a();let d=new Float64Array(o.length*2);o.forEach((M,C)=>{d[C*2]=M[0],d[C*2+1]=M[1]});let{triangles:g}=new cr(d);await a();let v=(t*2.3)**2,m=[];for(let M=0;M<g.length;M+=3){let C=g[M],x=g[M+1],w=g[M+2],[R,I]=o[C],[U,B]=o[x],[P,z]=o[w];if(!i.contains((R+U+P)/3,(I+B+z)/3))continue;let W=(R-U)**2+(I-B)**2,O=(U-P)**2+(B-z)**2,Z=(P-R)**2+(z-I)**2;Math.max(W,O,Z)>v||((U-R)*(z-I)-(B-I)*(P-R)<0&&([x,w]=[w,x]),m.push(C,x,w))}await a();let p=[],b=[];o.forEach(([M,C],x)=>{p.push(M,C,x<l?0:n(M,C,c[x])),b.push(M*r,C*r)});let A=new Int32Array(o.length);o.forEach(([M,C],x)=>{if(x<l){A[x]=x;return}A[x]=p.length/3,p.push(M,C,-s(M,C,c[x])),b.push(M*r,C*r)});let S=[...m];for(let M=0;M<m.length;M+=3)S.push(A[m[M]],A[m[M+2]],A[m[M+1]]);let T=new Se;return T.setAttribute("position",new ie(p,3)),T.setAttribute("uv",new ie(b,2)),T.setIndex(S),T.computeVertexNormals(),T},lo=(i,{uSeg:t,vSeg:e,uRepeat:n=1,vRepeat:s=1,wrapV:r=!1})=>{let a=t+1,o=a*(e+1),c=new Float32Array(o*3),l=new Float32Array(o*2),u=new(o>65535?Uint32Array:Uint16Array)(t*e*6),f=new D,h=0;for(let m=0;m<=e;m+=1)for(let p=0;p<=t;p+=1)i(p/t,m/e,f),c[h*3]=f.x,c[h*3+1]=f.y,c[h*3+2]=f.z,l[h*2]=p/t*n,l[h*2+1]=m/e*s,h+=1;let d=0;for(let m=0;m<e;m+=1)for(let p=0;p<t;p+=1){let b=m*a+p,A=b+1,S=b+a,T=S+1;u[d]=b,u[d+1]=A,u[d+2]=S,u[d+3]=A,u[d+4]=T,u[d+5]=S,d+=6}let g=new Se;g.setAttribute("position",new Fe(c,3)),g.setAttribute("uv",new Fe(l,2)),g.setIndex(new Fe(u,1)),g.computeVertexNormals();let v=g.attributes.normal;for(let m=0;m<=e;m+=1){let p=m*a,b=p+t,A=v.getX(p)+v.getX(b),S=v.getY(p)+v.getY(b),T=v.getZ(p)+v.getZ(b),M=Math.hypot(A,S,T)||1;v.setXYZ(p,A/M,S/M,T/M),v.setXYZ(b,A/M,S/M,T/M)}if(r)for(let m=0;m<=t;m+=1){let p=m,b=e*a+m,A=v.getX(p)+v.getX(b),S=v.getY(p)+v.getY(b),T=v.getZ(p)+v.getZ(b),M=Math.hypot(A,S,T)||1;v.setXYZ(p,A/M,S/M,T/M),v.setXYZ(b,A/M,S/M,T/M)}return g},ho=(i,{radialHalf:t,upHalf:e,radial:n=14,center:s=new D,uRepeat:r=1})=>{let a=i.length,o=new D,c=new D,l=new D;return lo((u,f,h)=>{let d=Math.round(u*a)%a,g=i[d];c.subVectors(i[(d+1)%a],i[(d-1+a)%a]).normalize(),o.set(g.x-s.x,0,g.z-s.z).normalize(),l.crossVectors(c,o).normalize(),l.y<0&&l.negate();let v=f*Math.PI*2;h.copy(g).addScaledVector(o,Math.cos(v)*t).addScaledVector(l,Math.sin(v)*e)},{uSeg:a,vSeg:n,uRepeat:r,vRepeat:1,wrapV:!0})},uo=(i,{a:t,b:e,radial:n=18,uvScale:s=.1})=>{let r=[],a=[],o=[],c=new D,l=new D,u=0;i.forEach((h,d)=>{let g=i[Math.max(d-1,0)],v=i[Math.min(d+1,i.length-1)];c.subVectors(v,g),l.set(-c.y,c.x,0).normalize(),d>0&&(u+=h.distanceTo(i[d-1]));for(let m=0;m<n;m+=1){let p=m/n*Math.PI*2,b=Math.cos(p)*t,A=Math.sin(p)*e;r.push(h.x+l.x*b,h.y+l.y*b,h.z+A),a.push(u*s,m/n)}});for(let h=0;h<i.length-1;h+=1)for(let d=0;d<n;d+=1){let g=(d+1)%n,v=h*n+d,m=h*n+g,p=(h+1)*n+d,b=(h+1)*n+g;o.push(v,m,p,m,b,p)}let f=new Se;return f.setAttribute("position",new ie(r,3)),f.setAttribute("uv",new ie(a,2)),f.setIndex(o),f.computeVertexNormals(),f};var d_=new Lt(1,1,1),el=()=>new oi({roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.11,specularIntensity:.6}),nl=(i,t,{roughness:e=.9,sheen:n=1,sheenRoughness:s=.55,normalScale:r=.5}={})=>{let a=i.clone();return a.repeat.set(t,t),a.anisotropy=8,a.needsUpdate=!0,new oi({roughness:e,metalness:0,sheen:n,sheenRoughness:s,normalMap:a,normalScale:new Ct(r,r)})},gn=(i,t,{shade:e=1,sheenMix:n=.45,sheenLevel:s=.55}={})=>{i.color.copy(t).multiplyScalar(e),i.sheen>0&&i.sheenColor.copy(t).lerp(d_,n).multiplyScalar(s)};var Cu=uu(),f_=`
varying vec3 vInklyPos;
uniform sampler2D uInklyPrint;
uniform vec4 uInklyRect;
uniform float uInklyPrintOn;
uniform float uInklyRadius;
uniform vec2 uInklyCavity;
uniform float uInklyInside;
#ifdef INKLY_DETAIL
uniform sampler2D uInklyDetail;
uniform vec4 uInklyDetailRect;
uniform float uInklyDetailStrength;
#endif
#ifdef INKLY_SEAMS
uniform sampler2D uInklySeams;
uniform float uInklySeamScale;
varying vec2 vInklySeamUv;
#endif
`,p_=`
#if defined( INKLY_SEAMS ) && defined( USE_NORMALMAP_TANGENTSPACE )
  vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
  mapN.xy *= normalScale;
  vec3 inklySeamN = texture2D( uInklySeams, vInklySeamUv ).xyz * 2.0 - 1.0;
  mapN = normalize( vec3( mapN.xy + inklySeamN.xy * uInklySeamScale, mapN.z ) );
  normal = normalize( tbn * mapN );
#else
  #include <normal_fragment_maps>
#endif
`,m_=`
varying vec3 vInklyPos;
#ifdef INKLY_MAPPED
attribute vec3 inklyPrint;
#endif
#ifdef INKLY_SEAMS
varying vec2 vInklySeamUv;
#endif
`,g_=`
#ifdef INKLY_MAPPED
vInklyPos = inklyPrint;
#else
vInklyPos = position;
#endif
#ifdef INKLY_SEAMS
vInklySeamUv = uv;
#endif
`,__=`
{
  #ifdef INKLY_CYLINDER
    vec2 inklyP = vec2(atan(vInklyPos.x, vInklyPos.z), vInklyPos.y);
    float inklyFace = step(uInklyRadius, length(vInklyPos.xz));
    float inklyDepth = (1.0 - inklyFace) * (1.0 - smoothstep(uInklyCavity.x, uInklyCavity.y, vInklyPos.y));
    diffuseColor.rgb *= 1.0 - inklyDepth * 0.5;
  #else
    vec2 inklyP = vInklyPos.xy;
    float inklyFace = step(0.012, vInklyPos.z);
  #endif
  #ifdef INKLY_DOUBLE
    if (!gl_FrontFacing) diffuseColor.rgb *= uInklyInside;
    inklyFace *= gl_FrontFacing ? 1.0 : 0.0;
  #endif
  #ifdef INKLY_DETAIL
    vec2 inklyD = (vInklyPos.xy - uInklyDetailRect.xy) / uInklyDetailRect.zw;
    diffuseColor.rgb *= 1.0 - texture2D(uInklyDetail, inklyD).a * uInklyDetailStrength;
  #endif
  vec2 inklyUv = (inklyP - uInklyRect.xy) / uInklyRect.zw;
  vec2 inklyIn = step(vec2(0.0), inklyUv) * step(inklyUv, vec2(1.0));
  vec4 inklyInk = texture2D(uInklyPrint, inklyUv);
  float inklyMask = inklyIn.x * inklyIn.y * inklyFace * uInklyPrintOn;
  diffuseColor.rgb = diffuseColor.rgb * (1.0 - inklyInk.a * inklyMask) + inklyInk.rgb * inklyMask;
}
`,Di=(i,{cylinder:t=!1,radius:e=0,cavity:n=[0,1],detail:s=null,detailRect:r=null,detailStrength:a=.45,inside:o=null,mapped:c=!1,seams:l=null,seamScale:u=.6}={})=>{let f={uInklyPrint:{value:Cu},uInklyRect:{value:new ee(0,0,1,1)},uInklyPrintOn:{value:0},uInklyRadius:{value:e},uInklyCavity:{value:new Ct(...n)},uInklyInside:{value:o??1},uInklyDetail:{value:s},uInklyDetailRect:{value:r||new ee(0,0,1,1)},uInklyDetailStrength:{value:a},uInklySeams:{value:l},uInklySeamScale:{value:u}};return i.defines={...i.defines},t&&(i.defines.INKLY_CYLINDER=""),s&&(i.defines.INKLY_DETAIL=""),o!==null&&(i.defines.INKLY_DOUBLE=""),c&&(i.defines.INKLY_MAPPED=""),l&&(i.defines.INKLY_SEAMS=""),i.onBeforeCompile=h=>{Object.assign(h.uniforms,f),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${m_}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${g_}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${f_}`).replace("#include <map_fragment>",`#include <map_fragment>
${__}`).replace("#include <normal_fragment_maps>",p_)},i.customProgramCacheKey=()=>`inkly-print-${t?"cyl":"flat"}-${s?"detail":"plain"}-${o!==null?"double":"single"}-${c?"mapped":"local"}-${l?"seams":"smooth"}`,{set(h,d,g){f.uInklyPrint.value=h||Cu,d&&f.uInklyRect.value.set(d.x,d.y,d.w,d.h),f.uInklyPrintOn.value=g?1:0}}};var Gn=9.6/372,$e=156*Gn,bs=372*Gn,mi=.28,il=.55,Ru=.3,x_=([i,t])=>[(i-280)*Gn,(522-t)*Gn],v_=()=>{let i=[],t=(e,n,s,r,a,o)=>{for(let c=0;c<=o;c+=1){let l=r+(a-r)*c/o;i.push(new Ct(e+Math.cos(l)*s,n+Math.sin(l)*s))}};return i.push(new Ct(.001,.14),new Ct($e-.72,.14),new Ct($e-.58,.02)),t($e-.36,.36,.36,-Math.PI/2,0,8),i.push(new Ct($e,bs*.5)),t($e-mi/2,bs-mi/2,mi/2,0,Math.PI,10),i.push(new Ct($e-mi,bs*.5)),t($e-mi-.34,il+.34,.34,0,-Math.PI/2,8),i.push(new Ct(.001,il)),i},y_=()=>{let i=[424,236],e=[i,...lr(i,[502,230],[530,268],[530,320],16),...lr([530,320],[530,372],[498,412],[418,408],16)].map(x_).map(([n,s])=>new D(n,s,0));return e[0].x=$e-mi*.4,e[e.length-1].x=$e-mi*.4,new Gs(e,!1,"centripetal").getSpacedPoints(110)},Iu=()=>{let i=el(),t=el(),e=Di(i,{cylinder:!0,radius:$e-mi/2,cavity:[il,bs*.97]}),n=new Zt(new Hs(v_(),160),i),s=new Zt(uo(y_(),{a:.36,b:.52,radial:24}),t);n.castShadow=!0,s.castShadow=!0;let r=-$e,a=250*Gn+.36,o=(r+a)/2,c=new Me,l=new Me;return l.position.x=-o,l.add(n,s),c.add(l),{type:"mug",group:c,elevation:.34,float:0,restY:-Ru,frame:{height:bs,radius:a-o,centerY:bs/2},footprint:{x:-o,z:0,size:$e*2.9},setColor(u){gn(i,u),gn(t,u)},setPrint(u,f,h){e.set(u,{x:Ru+(f.x-280)*Gn/$e,y:(522-f.y-f.h)*Gn,w:f.w*Gn/$e,h:f.h*Gn},h)}}};var Pu=2.6,_i=.74,M_=1.08,S_=.82,Ou=-.12,sl=.17,go=.3,hr=.26,gi={y:6.27,z:-.08,ry:1.21,rz:.84,exponent:2.6},Hn={x:2.63,y:4.46,z:-.06,a:.71,b:.66,tilt:.12},In=144,rl=112,Pn=64,Lu=44,fo=48,b_=2.5,w_=6.85,po={x:205,y:160,w:190,h:240},ol=(i,t,e)=>i+(t-i)*e,vo=(i,t)=>Math.sign(i)*Math.abs(i)**t,al=.01,cl=i=>{let t=i.length,e=r=>{if(r<=i[0][0])return i[0][1];if(r>=i[t-1][0])return i[t-1][1];let a=0;for(;r>i[a+1][0];)a+=1;let[o,c]=i[Math.max(a-1,0)],[l,u]=i[a],[f,h]=i[a+1],[d,g]=i[Math.min(a+2,t-1)],v=f-l,m=(r-l)/v,p=(h-c)/(f-o)*v,b=(g-u)/(d-l)*v,A=m*m,S=A*m;return(2*S-3*A+1)*u+(S-2*A+m)*p+(-2*S+3*A)*h+(S-A)*b},n=Math.ceil(i[t-1][0]/al)+2,s=new Float32Array(n);for(let r=0;r<n;r+=1)s[r]=e(r*al);return r=>{let a=Math.min(Math.max(r/al,0),n-1.001),o=Math.floor(a);return s[o]+(s[o+1]-s[o])*(a-o)}},Du=cl([[0,2.03],[.9,2],[1.8,1.95],[2.7,1.88],[3.6,1.84],[4.4,1.8],[5,1.8],[5.6,1.95],[6.2,2.25],[6.8,2.42],[7.25,2.46]]),Nu=cl([[0,1.62],[.9,1.58],[1.8,1.52],[2.7,1.47],[3.6,1.43],[4.4,1.4],[5.2,1.36],[6,1.28],[7.45,1.1]]),Uu=cl([[0,1.66],[.9,1.64],[1.8,1.6],[2.7,1.56],[3.6,1.53],[4.4,1.51],[5.4,1.49],[6,1.48],[6.5,1.45],[7.45,1.3]]),ur=i=>{let t=Math.sin(i),e=Math.cos(i);return{theta:i,front:e>=0,sx:vo(t,2/Pu),cz:vo(e,2/Pu),yc:7.25-(e>0?1.35:.85)*e*e,yn:e>0?8.22-.4*e*e:8.22+.01*e*e,rise:.42+.15*Math.min(e,0)**2,nx:M_*t,nz:Ou+S_*e,wave:Math.sin(5*i+.9),hemWave:Math.sin(11*i+.4),diagonal:4*t*t*e*e,pull:Math.sign(t)*Math.sign(e)}},T_=(i,t)=>{let e=0,n=Ye(5.4,.6,t);n>0&&(e+=n*(.042*i.wave+.02*Math.sin(9*i.theta+2.3+.4*t)));let s=(t-4.6)/1.15;return i.diagonal>.001&&s*s<9&&(e+=.038*i.diagonal*Math.exp(-s*s)*Math.sin(14*i.theta-2.4*t*i.pull)),t<1.2&&(e+=.014*i.hemWave*Ye(1.2,0,t)),e},_o=(i,t,e,n=0,s=null)=>{let r,a,o,c=0;if(t<=_i)a=t/_i*i.yc,r=Du(a)*i.sx,o=(i.front?Nu(a):Uu(a))*i.cz;else{let d=(t-_i)/(1-_i);a=i.yc+2*d*(1-d)*i.rise+d*d*(i.yn-i.yc),c=d*d,r=ol(Du(i.yc)*i.sx,i.nx,c),o=ol((i.front?Nu(i.yc):Uu(i.yc))*i.cz,i.nz,c)}let l=c<1?T_(i,a)*(1-c):0,u=a<go+.03?.012*Ye(go+.03,go-.03,a):0,f=Math.sqrt(r*r+o*o)||1,h=l+u-n;return s&&(s.fold=l,s.y=a,s.roof=c),e.set(r+r/f*h,a,o+o/f*h)},Bu=(i,t)=>{if(t<=i.yc)return _i*t/i.yc;let e=i.yn-i.yc-2*i.rise,n=t-i.yc,s=Math.abs(e)<1e-6?n/(2*i.rise):(-2*i.rise+Math.sqrt(4*i.rise*i.rise+4*e*n))/(2*e);return _i+(1-_i)*Math.min(Math.max(s,0),1)},A_=(i,t,e)=>{let n=new D,s=o=>{let c=ur(e>0?o:Math.PI*2-o);return _o(c,Bu(c,i),n)},r=.02,a=Math.PI-.02;for(let o=0;o<18;o+=1){let c=(r+a)/2;s(c).z>t?r=c:a=c}return s((r+a)/2).x},E_=(i,t,e,n,s,r)=>{let a=1-s;return r.copy(i).multiplyScalar(a*a*a).addScaledVector(t,3*a*a*s).addScaledVector(e,3*a*s*s).addScaledVector(n,s*s*s)},C_=i=>{let t=new D(i*Hn.x,Hn.y,Hn.z),e=new D(i,Hn.tilt,0).normalize(),n=new D(i*Hn.tilt,-1,0).normalize(),s=[];for(let c=0;c<=Pn;c+=1){let l=c%Pn/Pn*Math.PI*2,u=i>0?l:-l,f=gi.y+gi.ry*vo(Math.cos(u),2/gi.exponent),h=gi.z+gi.rz*vo(Math.sin(u),2/gi.exponent),d=new D(A_(f,h,i)-i*.04,f,h),g=t.clone().addScaledVector(e,Math.cos(u)*Hn.a).add(new D(0,0,Math.sin(u)*Hn.b)),v=(1-Math.cos(u))/2,m=new D(i*ol(.75,.08,v),-1,0).normalize(),p=d.distanceTo(g),b=d.clone().addScaledVector(m,p*.3),A=g.clone().addScaledVector(n,-p*.3),S=[],T=[0];for(let M=0;M<=fo;M+=1)S.push(E_(d,b,A,g,M/fo,new D)),M>0&&T.push(T[M-1]+S[M].distanceTo(S[M-1]));s.push({angle:u,points:S,lengths:T,length:T[fo]})}let r=new D(i*2.05,gi.y,gi.z),a=new D;return{at:(c,l,u,f=null)=>{let h=s[Math.round(c*Pn)],d=l*h.length,g=1;for(;g<fo&&h.lengths[g]<d;)g+=1;let v=(d-h.lengths[g-1])/(h.lengths[g]-h.lengths[g-1]||1);u.copy(h.points[g-1]).lerp(h.points[g],v);let m=d,p=h.length-m;a.copy(r).lerp(t,l),a.subVectors(u,a).setY(a.y*.35).normalize();let b=Math.exp(-(((Math.abs(h.angle)-Math.PI)/.75)**2)),A=.02*Math.sin(5*h.angle+3.2*m)*Ye(.1,.6,m)*Ye(0,.5,p)+.026*b*Math.sin(10*l+1.5)*(1-l),S=.014*Ye(hr+.03,hr-.03,p),T=.05*Math.sin(Math.PI*l)*(1-b);return u.addScaledVector(a,A+S+T),f&&(f.inner=b,f.s=m),u},lines:s,center:t}},Xn=(i,t,e,n,{value:s,lineWidth:r,dash:a=null})=>{i.save(),i.strokeStyle=`rgb(${s},${s},${s})`,i.lineWidth=r,a&&i.setLineDash(a),i.beginPath();for(let o=0;o<=256;o+=1){let c=o/256,l=c*t,u=n(c)*e;o===0?i.moveTo(l,u):i.lineTo(l,u)}i.stroke(),i.restore()},xo=(i,t,e,n,s,r)=>{i.save(),i.strokeStyle=`rgb(${s},${s},${s})`,i.lineWidth=r,i.beginPath(),i.moveTo(t,e),i.lineTo(t,n),i.stroke(),i.restore()},R_=()=>Qc(1024,576,(i,t,e)=>{let n=Array.from({length:257},(o,c)=>ur(c/256*Math.PI*2)),s=o=>n[Math.round(o*256)],r=o=>c=>_i*o/s(c).yc,a=o=>c=>Bu(s(c),s(c).yn-o);[.25,.75].forEach(o=>{xo(i,o*t-2.5,0,e,170,2),xo(i,o*t+2.5,0,e,170,2),xo(i,o*t,0,e,50,2.5)}),Xn(i,t,e,r(go+.03),{value:90,lineWidth:2}),Xn(i,t,e,r(.13),{value:205,lineWidth:2,dash:[5,3]}),Xn(i,t,e,r(.21),{value:205,lineWidth:2,dash:[5,3]}),Xn(i,t,e,a(.1),{value:200,lineWidth:2,dash:[5,3]})}),I_=i=>Qc(512,256,(t,e,n)=>{let s=o=>i[Math.min(Math.round(o*Pn),Pn)].length,r=o=>c=>1-o/s(c),a=o=>c=>o/s(c);xo(t,e/2,0,n,60,2.5),Xn(t,e,n,a(.035),{value:60,lineWidth:2.5}),Xn(t,e,n,a(.1),{value:205,lineWidth:2,dash:[5,3]}),Xn(t,e,n,r(hr),{value:205,lineWidth:4}),Xn(t,e,n,r(hr-.03),{value:90,lineWidth:2}),Xn(t,e,n,r(hr-.08),{value:205,lineWidth:2,dash:[5,3]})}),mo=(i,t,e,n)=>{let s=t.clone();s.repeat.set(e[0],e[1]),s.needsUpdate=!0;let r=i.clone();return r.repeat.set(e[0],e[1]),r.anisotropy=8,r.needsUpdate=!0,new oi({map:s,normalMap:r,normalScale:new Ct(n,n),roughness:.86,metalness:0,specularIntensity:.35,sheen:1,sheenRoughness:.62})},Fu=(i,t)=>{let e=i.attributes.position.array,n=e.length/3,s=new Float32Array(n*3);for(let r=0;r<n;r+=1){let a=t(r,e[r*3],e[r*3+1],e[r*3+2]);s[r*3]=a,s[r*3+1]=a,s[r*3+2]=a}i.setAttribute("color",new ie(s,3))},ws={top:[2.05,6.4,-.08],bottom:[2.5,4.6,-.06],radius:.72},Wn=ws.bottom.map((i,t)=>i-ws.top[t]),P_=Wn[0]**2+Wn[1]**2+Wn[2]**2,L_=(i,t,e)=>{let n=Math.abs(i)-ws.top[0],s=t-ws.top[1],r=e-ws.top[2],a=Math.min(Math.max((n*Wn[0]+s*Wn[1]+r*Wn[2])/P_,0),1);return Math.hypot(n-Wn[0]*a,s-Wn[1]*a,r-Wn[2]*a)-ws.radius},ku=async({jersey:i,rib:t,heather:e},n=()=>Promise.resolve())=>{let s=[1,-1].map(C_);await n();let r=mo(i,e,[30,26],.3);r.side=Be,r.vertexColors=!0;let a=Di(r,{inside:.2,mapped:!0,seams:R_(),seamScale:.55}),o=mo(i,e,[12,10],.3);o.side=Be,o.vertexColors=!0,Di(o,{inside:.2,mapped:!0,seams:I_(s[0].lines),seamScale:.55});let c=mo(t,e,[70,1],.7);c.normalMap.repeat.set(110,1);let l=mo(i,e,[60,1],.2);await n();let u=Array.from({length:In+1},(O,Z)=>ur(Z/In*Math.PI*2)),f=In+1,h=f*(rl+1),d=new Float32Array(h),g=new Float32Array(h),v={},m=0,p=lo((O,Z,H)=>{let q=u[Math.round(O*In)];return _o(q,Z,H,0,v),d[m]=v.fold,g[m]=v.roof>0?q.yn-v.y:1,m+=1,H},{uSeg:In,vSeg:rl}),b=p.attributes.position.array,A=new Float32Array(h*3),S=(O,Z)=>Math.sqrt((b[O*3]-b[Z*3])**2+(b[O*3+2]-b[Z*3+2])**2);for(let O=0;O<=rl;O+=1){let Z=0,H=0;for(let q=0;q<=In/2;q+=1){let Q=O*f+q;q>0&&(Z+=S(Q,Q-1)),A[Q*3]=Z;let yt=O*f+(In-q);q>0&&(H+=S(yt,yt+1)),q<In/2&&(A[yt*3]=-H)}for(let q=0;q<=In;q+=1){let Q=O*f+q;A[Q*3+1]=b[Q*3+1],A[Q*3+2]=Math.cos(q/In*Math.PI*2)}}p.setAttribute("inklyPrint",new ie(A,3)),Fu(p,(O,Z,H,q)=>{let Q=1+Math.min(Math.max(d[O]*4.5,-.18),.06);return Q*=1-.3*(1-Ye(-.25,.6,L_(Z,H,q))),Q*=1-.12*(1-Ye(0,.24,g[O])),Q});let T=new Zt(p,r);await n();let M=s.map(O=>{let Z=new Float32Array((Pn+1)*(Lu+1)),H={},q=0,Q=lo((xt,jt,zt)=>(O.at(xt,jt,zt,H),Z[q]=(1-.24*H.inner*(1-.4*jt))*(1-.1*(1-Ye(0,.14,H.s))),q+=1,zt),{uSeg:Pn,vSeg:Lu}),yt=new Float32Array(Q.attributes.position.count*3);for(let xt=0;xt<yt.length;xt+=3)yt[xt+2]=-1;return Q.setAttribute("inklyPrint",new ie(yt,3)),Fu(Q,xt=>Z[xt]),new Zt(Q,o)}),C=Array.from({length:160},(O,Z)=>ur(Z/160*Math.PI*2)),x=C.map(O=>_o(O,1,new D).add(new D(0,sl/2-.02,0))),w=new Zt(ho(x,{radialHalf:.03,upHalf:sl/2+.01,radial:14,center:new D(0,0,Ou)}),c),R=C.map(O=>_o(O,0,new D,-.004).add(new D(0,.022,0))),I=new Zt(ho(R,{radialHalf:.026,upHalf:.03,radial:10}),l),U=s.map(O=>{let Z=Array.from({length:Pn},(H,q)=>O.at(q/Pn,1,new D));return new Zt(ho(Z,{radialHalf:.026,upHalf:.03,radial:10,center:O.center}),l)}),B=[T,...M,w,I,...U];B.forEach(O=>{O.castShadow=!0});let P=new Me;P.add(...B);let z=ur(Math.PI).yn+sl,W=Hn.x+Hn.a+.3;return{type:"tshirt",group:P,elevation:.12,float:.45,restY:-.1,frame:{height:z,radius:W,centerY:z/2},footprint:{x:0,z:0,size:7},setColor(O){let Z={sheenMix:.42,sheenLevel:.62};gn(r,O,Z),gn(o,O,Z),gn(c,O,{...Z,shade:.95}),gn(l,O,{...Z,shade:.97})},setPrint(O,Z,H){let q=b_/po.w,Q=(Z.x+Z.w/2-(po.x+po.w/2))*q,yt=w_-(Z.y-po.y)*q;a.set(O,{x:Q-Z.w*q/2,y:yt-Z.h*q,w:Z.w*q,h:Z.h*q},H)}}};var Ke=1/60,Ts=546,D_=200,zu=([i,t])=>[(i-300)*Ke,(Ts-t)*Ke],N_=[[128,200],[472,200],[486,546],[114,546]],U_=(Ts-224)*Ke,Vu=(i,t,e)=>{let n=Ye(5.2,.4,t),s=.03*Math.sin(i*1.3+.4)*Math.sin(t*1.7)+.012*Math.sin(i*3.3-t*2.1)+.05*n*Math.sin(i*2.4+.8)*Math.sin(t*.9+.3),r=.035*Math.exp(-(((t-U_)/.06)**2));return tl(e,.13)+Ye(0,1.5,e)*(.22+.16*n+1.4*s)-r*Ye(0,.2,e)},Gu=(i,t,e)=>tl(e,.13)+Ye(0,1.5,e)*.22,F_=()=>[[222,238],[222,214],...lr([222,214],[222,94],[378,94],[378,214],40),[378,238]],O_=i=>{i.lineWidth=2.2,i.setLineDash([6,5]),i.beginPath(),i.moveTo(134,224),i.lineTo(466,224),i.stroke(),i.setLineDash([]),i.lineWidth=1.6;for(let t of[222,378])i.strokeRect(t-8,226,16,14),i.beginPath(),i.moveTo(t-8,226),i.lineTo(t+8,240),i.moveTo(t+8,226),i.lineTo(t-8,240),i.stroke()},Hu=async(i,t=()=>Promise.resolve())=>{let e=new co(N_.map(zu),{step:.055,soften:3}),n=await Eu(e,{spacing:.13,rings:[.015,.04,.075,.12],front:Vu,back:Gu},t);await t();let s=_u(O_),r=nl(i,7,{normalScale:.5,sheen:.6,sheenRoughness:.75,roughness:.95}),a=Di(r,{detail:s,detailRect:new ee(-300*Ke,(Ts-600)*Ke,600*Ke,600*Ke),detailStrength:.4}),o=new Zt(n,r);o.castShadow=!0;let c=nl(i,12,{normalScale:.5,sheen:.6,sheenRoughness:.75,roughness:.95}),l=(d,g,v)=>{let m=e.depth(d,g);return v*((m>0?v>0?Vu(d,g,m):Gu(d,g,m):0)+.045)},u=d=>{let g=F_().map(zu).map(([m,p])=>new D(m,p,l(m,p,d))),v=new Zt(uo(g,{a:.13,b:.03,radial:14}),c);return v.castShadow=!0,v},f=new Me;f.add(o,u(1),u(-1));let h=(Ts-124)*Ke;return{type:"tote",group:f,elevation:.16,float:.6,restY:-.2,frame:{height:h,radius:186*Ke,centerY:(Ts-D_)*Ke/2+.6},footprint:{x:0,z:0,size:8.5},setColor(d){gn(r,d),gn(c,d,{shade:.96})},setPrint(d,g,v){a.set(d,{x:(g.x-300)*Ke,y:(Ts-g.y-g.h)*Ke,w:g.w*Ke,h:g.h*Ke},v)}}};var Wu,ll,B_=i=>Wu||(Wu=(async()=>{let t=pu();await i();let e=mu();return await i(),{jersey:t,rib:e,heather:gu({depth:.07})}})()),hl={mug:async()=>Iu(),tshirt:async i=>{let t=await B_(i);return await i(),ku(t,i)},tote:async i=>(ll||(ll=du({threads:12,strength:2.6,slub:.3})),await i(),Hu(ll,i))},A1=Object.keys(hl),Xu=(i,t=()=>Promise.resolve())=>(hl[i]||hl.mug)(t);var qu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Yu=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );

	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );

}
`;var z_=new ui,V_={[un]:Re,[Re]:un,[Be]:Be},Zu=i=>i.trim().replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"").replace(/\n{2,}/g,`
`),Ju=(i,t,e,n=null)=>{let s=new Oe(1,1),r=i.getRenderTarget();i.setRenderTarget(s);let a=i.compileAsync(t,e,n);return i.setRenderTarget(r),a.then(()=>s.dispose())},$u=(i,t)=>{let e=new _s(i);e._setSize(t.image.width/4);let n=e._allocateTargets();e.compileEquirectangularShader();let s=new ni,r=e._lodMeshes[0].geometry;s.add(new Zt(r,e._equirectMaterial),new Zt(r,e._ggxMaterial));let a=Ju(i,s,z_);return{texture:n.texture,ready:a.then(()=>{e.fromEquirectangular(t,n),e.dispose(),t.dispose()})}},ul=async(i,t,e)=>{let n=new Set;t.traverse(({material:s})=>{s&&(Object.values(s).forEach(r=>r?.isTexture&&!r.isCanvasTexture&&n.add(r)),Object.values(i.properties.get(s).uniforms??{}).forEach(r=>r?.value?.isTexture&&!r.value.isCanvasTexture&&n.add(r.value)))});for(let s of n)i.initTexture(s),await e()},Ku=(i,t,e,n)=>{let s=i.shadowMap.type===An,r=null;if(t.traverseVisible(u=>{!r&&u.isMesh&&(u.castShadow||s&&u.receiveShadow)&&(r=u)}),!r)return Promise.resolve();let{material:a,geometry:o}=r,c=new os({side:a.shadowSide??(s?a.side:V_[a.side]),map:a.map,alphaMap:a.alphaMap,alphaTest:a.alphaToCoverage?.5:a.alphaTest,displacementMap:a.displacementMap}),l=new ni;if(l.add(new Zt(o,c)),s){let u=new Se().setAttribute("position",new ie([-1,-1,.5,3,-1,.5,-1,3,.5],3)),f=h=>new Zt(u,new Xe({defines:h,vertexShader:Zu(qu),fragmentShader:Zu(Yu)}));l.add(f({VSM_SAMPLES:n.shadow.blurSamples}),f({VSM_SAMPLES:n.shadow.blurSamples,HORIZONTAL_PASS:1}))}return Ju(i,l,e,t)};var Ni=4,G_={x:164,y:200,w:232,h:260},H_=i=>{let[t,e,n]=(i.match(/\d+(\.\d+)?/g)||["255","255","255"]).slice(0,3).map(s=>Number(s)/255);return .2126*t+.7152*e+.0722*n},yo=class{constructor(t){this.onChange=t,this.images=new Map,this.frame=0,this.schedule=this.schedule.bind(this),document.fonts?.addEventListener?.("loadingdone",this.schedule)}bind(t){this.observer?.disconnect(),this.svg=t||null,this.svg&&(this.observer=new MutationObserver(this.schedule),this.observer.observe(this.svg,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.schedule())}schedule(){this.frame||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.svg&&this.onChange(this.read())}))}image(t){let e=this.images.get(t);if(e)return e.complete&&e.naturalWidth?e:null;this.images.forEach((s,r)=>r!==t&&this.images.delete(r));let n=new Image;return n.decoding="async",n.src=t,n.decode().then(this.schedule,()=>{}),this.images.set(t,n),null}read(){let t=this.svg,e=t.querySelector('[data-layer="print"]'),[n,s,r,a]=(e?.dataset.printArea||"").split(" ").map(Number),o=r>0&&a>0?{x:n,y:s,w:r,h:a}:G_,c=getComputedStyle(t).color||"rgb(246, 244, 239)",l=e?.querySelector("[data-photo]"),u=l?.getAttribute("href"),f=null;if(u&&l.getAttribute("display")!=="none"){let p=this.image(u);p&&(f={img:p,x:Number(l.getAttribute("x")),y:Number(l.getAttribute("y")),w:Number(l.getAttribute("width")),h:Number(l.getAttribute("height"))})}let h=e?.querySelector("[data-text]"),d=h?.textContent.trim(),g=null;if(d){let p=h.style;g={content:d,x:Number(h.getAttribute("x")),y:Number(h.getAttribute("y")),size:parseFloat(p.fontSize)||o.h*.16,family:p.fontFamily||"sans-serif",weight:p.fontWeight||"400",style:p.fontStyle||"normal",fill:h.getAttribute("fill")||"#1d1a16"}}let v=e?.querySelector("[data-guide]"),m=v?v.classList.contains("is-visible"):!f&&!g;return{area:o,color:c,photo:f,text:g,guide:m,light:H_(c)>.35}}},Mo=class{constructor(t,e){this.width=t,this.anisotropy=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.texture=null}ensure(t){let e=this.width,n=Math.round(e*t.h/t.w);if(this.texture&&this.canvas.width===e&&this.canvas.height===n)return;this.texture?.dispose(),this.canvas.width=e,this.canvas.height=n;let s=new ri(this.canvas);s.colorSpace=xe,s.premultiplyAlpha=!0,s.minFilter=Je,s.anisotropy=this.anisotropy,this.texture=s}draw(t){let{area:e,photo:n,text:s,guide:r,light:a}=t;this.ensure(e);let{ctx:o,canvas:c}=this,l=(c.width-Ni*2)/e.w,u=h=>Ni+(h-e.x)*l,f=h=>Ni+(h-e.y)*l;return o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,c.width,c.height),o.save(),o.beginPath(),o.roundRect(Ni,Ni,e.w*l,e.h*l,8*l),o.clip(),n&&o.drawImage(n.img,u(n.x),f(n.y),n.w*l,n.h*l),s&&(o.font=`${s.style} ${s.weight} ${s.size*l}px ${s.family}`,o.fillStyle=s.fill,o.textAlign="center",o.textBaseline="middle",o.fillText(s.content,u(s.x),f(s.y))),o.restore(),r&&!n&&!s&&(o.save(),o.strokeStyle=a?"rgba(29, 26, 22, 0.28)":"rgba(255, 255, 255, 0.24)",o.lineWidth=2*l,o.setLineDash([8*l,7*l]),o.beginPath(),o.roundRect(Ni+l*2,Ni+l*2,(e.w-4)*l,(e.h-4)*l,8*l),o.stroke(),o.restore()),this.texture.needsUpdate=!0,!!(n||s||r)}dispose(){this.texture?.dispose()}};var dl=Math.PI*2,W_=2600,fl=[7e3,9500],X_=i=>1+2.2*(i-1)**3+1.2*(i-1)**2,Qu=i=>i*i*i,xi=(i,t,e=1e-4)=>Math.abs(i-t)<e,qn=()=>new Promise(i=>globalThis.scheduler?.yield?globalThis.scheduler.yield().then(i):setTimeout(i,0)),So=class{constructor(t,{product:e="mug",svg:n=null,coarse:s=!1,reducedMotion:r=!1,label:a=""}={}){this.viewport=t,this.coarse=s,this.reduced=r,this.renderer=null,this.models=new Map,this.loading=new Map,this.slots=new Map,this.model=null,this.type=null,this.pendingType=e,this.printState=null,this.color=new Lt("#f6f4ef"),this.colorTarget=this.color.clone(),this.pointer={x:.35,y:-.45},this.light={...this.pointer},this.tilt={x:0,y:0},this.rot={y:0,target:0,vel:0},this.cam={dist:30,distTarget:30,y:4,yTarget:4},this.anim=null,this.drag=null,this.lastInteraction=performance.now(),this.lastDrag=0,this.visible=!0,this.active=!1,this.raf=0,this.clock=0,this.size={w:0,h:0},this.target=new D,this.tick=this.tick.bind(this),this.source=new yo(o=>this.onPrint(o)),this.bindSvg(n),this.ready=this.init(a)}async init(t){performance.mark("inkly-3d:init"),await qn();let e=this.coarse,n=new so({antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.outputColorSpace=xe,n.toneMapping=Ys,n.toneMappingExposure=.98,n.shadowMap.enabled=!0,n.shadowMap.type=e?Ei:An,n.setClearColor(0,0),this.renderer=n,this.anisotropy=n.capabilities.getMaxAnisotropy();let s=n.domElement;s.className="inkly-3d__canvas",s.tabIndex=this.active?0:-1,s.setAttribute("role","img"),t&&s.setAttribute("aria-label",t),this.viewport.append(s),this.canvas=s,performance.mark("inkly-3d:renderer"),await qn();let r=xu();await qn();let a=new ni,o=$u(n,r);a.environment=o.texture,a.environmentIntensity=.64,this.scene=a,await qn(),this.camera=new Ue(24,1,.5,200);let c=new cs(16774376,2.3);c.castShadow=!0,c.shadow.mapSize.setScalar(e?512:1024),c.shadow.radius=e?9:16,c.shadow.blurSamples=e?10:18,c.shadow.bias=-6e-4,Object.assign(c.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:50});let l=new cs(15134207,.75);a.add(c,c.target,l,l.target),this.key=c,this.rim=l,this.backdrop=yu(),a.add(this.backdrop.group),this.pivot=new Me,this.holder=new Me,this.pivot.add(this.holder),a.add(this.pivot),this.bindEvents(),this.resize(),await qn(),await this.setProduct(this.pendingType),performance.mark("inkly-3d:model"),await qn();let u=Promise.all([n.compileAsync(a,this.camera),Ku(n,a,this.camera,c)]).catch(()=>{});await ul(n,a,qn),await o.ready,performance.mark("inkly-3d:environment"),await u,performance.mark("inkly-3d:compiled")}bindEvents(){let{canvas:t}=this;this.onWindowPointer=n=>{if(n.pointerType==="touch"&&!this.drag)return;let s=this.viewport.getBoundingClientRect();s.width&&(this.pointer.x=ze((n.clientX-s.left)/s.width*2-1,-1.4,1.4),this.pointer.y=ze((n.clientY-s.top)/s.height*2-1,-1.4,1.4),this.drag&&n.pointerId===this.drag.id&&this.dragTo(n),this.poke())},window.addEventListener("pointermove",this.onWindowPointer,{passive:!0}),t.addEventListener("pointerdown",n=>{n.button!==0||this.drag||(this.drag={id:n.pointerId,x:n.clientX,t:performance.now(),vel:0},t.setPointerCapture(n.pointerId),t.classList.add("is-grabbing"),this.onWindowPointer(n))});let e=n=>{if(!this.drag||n.pointerId!==this.drag.id)return;let s=performance.now()-this.drag.t>120;!this.reduced&&!s&&(this.rot.target+=ze(this.drag.vel,-14,14)*.16),this.drag=null,this.lastDrag=performance.now(),t.classList.remove("is-grabbing"),this.poke()};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),t.addEventListener("keydown",n=>{let s={ArrowLeft:-.5,ArrowRight:.5}[n.key];if(n.key==="Home")this.rot.target=this.nearestRest();else if(s)this.rot.target+=s;else return;n.preventDefault(),this.lastDrag=performance.now(),this.poke()}),this.coarse&&!this.reduced&&"DeviceOrientationEvent"in window&&typeof DeviceOrientationEvent.requestPermission!="function"&&(this.onOrientation=n=>{if(this.drag||n.gamma==null)return;let s=ze(n.gamma/28,-1.2,1.2),r=ze((n.beta-50)/28,-1.2,1.2);Math.abs(s-this.pointer.x)+Math.abs(r-this.pointer.y)<.03||(this.pointer.x=s,this.pointer.y=r,this.poke(!1))},window.addEventListener("deviceorientation",this.onOrientation)),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.viewport),this.intersection=new IntersectionObserver(([n])=>{this.visible=n.isIntersecting,this.poke(!1)}),this.intersection.observe(this.viewport),this.onVisibility=()=>this.poke(!1),document.addEventListener("visibilitychange",this.onVisibility),t.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.viewport.dispatchEvent(new CustomEvent("inkly-3d:lost",{bubbles:!0}))})}dragTo(t){let e=performance.now(),n=t.clientX-this.drag.x,s=this.viewport.clientWidth||400,r=n/s*dl*.85,a=Math.max(e-this.drag.t,1)/1e3;this.drag.vel=mn.lerp(this.drag.vel,r/a,.4),this.drag.x=t.clientX,this.drag.t=e,this.rot.target+=r}nearestRest(){let t=this.model?this.model.restY:0;return t+Math.round((this.rot.target-t)/dl)*dl}bindSvg(t){this.source.bind(t)}get initialized(){return!!(this.renderer&&this.pivot)}slot(t){return this.slots.has(t)||this.slots.set(t,new Mo(this.coarse?768:1024,this.anisotropy)),this.slots.get(t)}loadModel(t){if(this.models.has(t))return Promise.resolve(this.models.get(t));if(!this.loading.has(t)){let e=Xu(t,qn).then(async n=>{if(n.setColor(this.color),this.model){let s=this.renderer.compileAsync(n.group,this.camera,this.scene).catch(()=>{});await ul(this.renderer,n.group,qn),await s}return this.models.set(t,n),this.loading.delete(t),n});this.loading.set(t,e)}return this.loading.get(t)}onPrint(t){let e=!this.printState;this.printState=t,this.colorTarget.setStyle(t.color),e&&(this.color.copy(this.colorTarget),this.model?.setColor(this.color)),this.applyPrint(),this.poke(!1)}applyPrint(){if(!this.printState||!this.type||!this.initialized)return;let t=this.models.get(this.type);if(!t)return;let e=this.slot(this.type),n=e.draw(this.printState);t.setPrint(e.texture,this.printState.area,n)}setProduct(t){if(!this.initialized)return this.pendingType=t,Promise.resolve();if(t===this.type)return this.switching||Promise.resolve();this.type=t;let e=this.model,n=e&&!this.reduced?new Promise(s=>{let r=()=>{this.anim={kind:"hold"},s()};this.anim={kind:"out",start:performance.now(),duration:360,from:this.rot.y,done:r},this.poke()}):null;return this.switching=Promise.all([this.loadModel(t),n]).then(([s])=>{this.type!==t||this.disposed||(this.applyPrint(),this.show(s,!e||!this.reduced))}),this.switching}show(t,e){this.holder.clear(),this.holder.add(t.group),this.model=t,t.setColor(this.color),this.holder.position.y=t.frame.centerY+t.float,t.group.position.y=-t.frame.centerY,this.backdrop.placeContact(t.footprint,t.float),this.backdrop.setShadowOpacity(t.float?.07:.09),this.fit(!e),this.rot.target=this.nearestRest(),e&&!this.reduced?(this.rot.y=this.rot.target-1.1,this.holder.scale.setScalar(.001),this.anim={kind:"in",start:null,duration:950}):(this.rot.y=this.rot.target,this.holder.scale.setScalar(1),this.anim=null),this.lastInteraction=performance.now(),this.poke()}fit(t){if(!this.model)return;let{frame:e,float:n}=this.model,s=this.size.w/Math.max(this.size.h,1)||1,r=Math.tan(mn.degToRad(this.camera.fov/2)),a=e.height*.56+1,o=e.radius*1.12+.6;this.cam.distTarget=Math.max(a/r,o/(r*s))+e.radius*.55,this.cam.yTarget=e.centerY+n,t&&(this.cam.dist=this.cam.distTarget,this.cam.y=this.cam.yTarget)}resize(){if(!this.renderer)return;let t=this.viewport.clientWidth,e=this.viewport.clientHeight;!t||!e||t===this.size.w&&e===this.size.h||(this.size={w:t,h:e},this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.fit(!0),this.poke(!1))}setActive(t){this.active=t,this.canvas&&(this.canvas.tabIndex=t?0:-1),t&&this.poke()}poke(t=!0){t&&(this.lastInteraction=performance.now()),!(this.raf||!this.active||!this.visible||document.hidden||!this.model)&&(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))}tick(t){this.raf=0;let e=ze((t-this.last)/1e3,0,1/20);this.last=t;let n=this.update(e,t);this.renderer.render(this.scene,this.camera),this.rendered||(this.rendered=!0,performance.mark("inkly-3d:first-frame")),this.anim&&this.anim.start===null&&(this.anim.start=performance.now()),n&&this.active&&this.visible&&!document.hidden&&(this.raf=requestAnimationFrame(this.tick))}update(t,e){let n=!!this.drag,{light:s,pointer:r,rot:a,cam:o,tilt:c}=this,l=this.reduced?20:5;if(s.x=mn.damp(s.x,r.x,l,t),s.y=mn.damp(s.y,r.y,l,t),n||(n=!xi(s.x,r.x)||!xi(s.y,r.y)),!this.drag&&e-this.lastDrag>W_){let x=this.nearestRest();xi(a.target,x)||(a.target=x)}a.y=mn.damp(a.y,a.target,this.drag?18:4.2,t),n||(n=!xi(a.y,a.target));let u=this.coarse?0:1,f=u*r.y*.055,h=u*r.x*.16;c.x=mn.damp(c.x,f,4,t),c.y=mn.damp(c.y,h,4,t),n||(n=!xi(c.x,f)||!xi(c.y,h)),o.dist=mn.damp(o.dist,o.distTarget,4,t),o.y=mn.damp(o.y,o.yTarget,4,t),n||(n=!xi(o.dist,o.distTarget,.001)||!xi(o.y,o.yTarget,.001)),this.color.equals(this.colorTarget)||(this.color.lerp(this.colorTarget,1-Math.exp(-9*t)),Math.abs(this.color.r-this.colorTarget.r)+Math.abs(this.color.g-this.colorTarget.g)+Math.abs(this.color.b-this.colorTarget.b)<.002&&this.color.copy(this.colorTarget),this.model?.setColor(this.color),n=!0);let d=0,g=1;if(this.anim?.kind==="hold")g=0;else if(this.anim){let x=this.anim.start===null?0:ze((e-this.anim.start)/this.anim.duration,0,1);if(this.anim.kind==="out"?(g=1-Qu(x),d=Qu(x)*1.2):g=Math.max(X_(x),.001),n=!0,x>=1){let{done:w}=this.anim;this.anim=null,w?w():g=1}}let v=e-this.lastInteraction,m=this.reduced?0:1-ze((v-fl[0])/(fl[1]-fl[0]),0,1);n||(n=m>0),this.clock+=t*m;let p=Math.sin(this.clock*.55)*.07*m,b=this.model?.float?Math.sin(this.clock*1.3)*.09*m:0;this.holder.scale.setScalar(Math.max(g,.001)),this.pivot.rotation.set(c.x,a.y+c.y+p+d,0),this.model&&(this.holder.position.y=this.model.frame.centerY+this.model.float+b,this.backdrop.placeContact(this.model.footprint,this.model.float+b,this.pivot.rotation.y,this.holder.scale.x));let A=this.target.set(0,o.y,0),S=this.model?.elevation??.2;this.camera.position.set(0,o.y+Math.sin(S)*o.dist,Math.cos(S)*o.dist),this.camera.lookAt(A);let T=-.38+ze(s.x,-1,1)*.34,M=ze(.78-s.y*.12,.55,1);this.key.position.set(Math.sin(T)*Math.cos(M),Math.sin(M),Math.cos(T)*Math.cos(M)).multiplyScalar(18).add(A),this.key.target.position.copy(A);let C=Math.PI-.6+ze(s.x,-1,1)*.25;return this.rim.position.set(Math.sin(C)*.85,.6,Math.cos(C)*.85).multiplyScalar(16).add(A),this.rim.target.position.copy(A),this.scene.environmentRotation.set(ze(s.y,-1,1)*.08,-ze(s.x,-1,1)*.38,0),n}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.source.bind(null),this.renderer&&(window.removeEventListener("pointermove",this.onWindowPointer),this.onOrientation&&window.removeEventListener("deviceorientation",this.onOrientation),document.removeEventListener("visibilitychange",this.onVisibility),this.resizeObserver?.disconnect(),this.intersection?.disconnect(),this.slots.forEach(t=>t.dispose()),this.renderer.dispose(),this.canvas?.remove())}};var V1=(i,t)=>new So(i,t);export{V1 as mount};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
