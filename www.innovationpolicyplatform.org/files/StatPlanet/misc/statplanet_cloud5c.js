/*
 Statplanet JS v4.2.5 (2016-05-06)
 Client side exporting module

 (c) 2015 Torstein Honsi / Oystein Moseng

 License: www.statplanet.com/license
*/
(function(b){typeof module==="object"&&module.exports?module.exports=b:b(Statplanet)})(function(b){function z(b,f){var e=n.getElementsByTagName("head")[0],d=n.createElement("script");d.type="text/javascript";d.src=b;d.onload=f;e.appendChild(d)}var f=b.win,k=f.navigator,n=f.document;b.CanVGRenderer={};b.Chart.prototype.exportChartLocal=function(A,B){var e=this,d=b.merge(e.options.exporting,A),C=k.userAgent.indexOf("WebKit")>-1&&k.userAgent.indexOf("Chrome")<0,p=d.scale||2,q,t=f.URL||f.webkitURL||f,
l,u=0,r,m,v,j=function(){if(d.fallbackToExportServer===!1)if(d.error)d.error();else throw"Fallback to export server disabled";else e.exportChart(d)},w=function(a,g,c,d,b,j,o,e){var h=new f.Image,k,l=function(){var b=n.createElement("canvas"),f=b.getContext&&b.getContext("2d"),i;try{if(f){b.height=h.height*p;b.width=h.width*p;f.fillStyle = "#FFFFFF";f.fillRect(0,0,b.width,b.height);f.drawImage(h,0,0,b.width,b.height);try{i=b.toDataURL(g),d(i,g,c)}catch(o){if(o.name==="SecurityError"||o.name==="SECURITY_ERR"||o.message==="SecurityError")k(a,g,c);else throw o;
}}else j(a,g,c)}finally{e&&e(a,g,c)}},m=function(){o(a,g,c);e&&e(a,g,c)};k=function(){h=new f.Image;k=b;h.crossOrigin="Anonymous";h.onload=l;h.onerror=m;h.src=a};h.onload=l;h.onerror=m;h.src=a},x=function(a){try{if(!C&&k.userAgent.toLowerCase().indexOf("firefox")<0)return t.createObjectURL(new f.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(b){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(a)},s=function(a,b){var c=n.createElement("a"),e=(d.filename||"chart")+"."+b,i;if(k.msSaveOrOpenBlob)k.msSaveOrOpenBlob(a,
e);else if(c.download!==void 0)c.href=a,c.download=e,c.target="_blank",n.body.appendChild(c),c.click(),n.body.removeChild(c);else try{if(i=f.open(a,"chart"),i===void 0||i===null)throw"Failed to open window";}catch(j){f.location.href=a}},y=function(){var a,g,c=d&&d.type||"image/png",l=c.split("/")[1],i=e.sanitizeSVG(q.innerHTML);if(c==="image/svg+xml")try{k.msSaveOrOpenBlob?(g=new MSBlobBuilder,g.append(i),a=g.getBlob("image/svg+xml")):a=x(i),s(a,"svg")}catch(m){j()}else a=x(i),w(a,c,{},function(b){try{s(b,
l)}catch(a){j()}},function(){var a=n.createElement("canvas"),d=a.getContext("2d"),h=i.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*p,g=i.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*p,m=function(){d.drawSvg(i,0,0,h,g);try{s(k.msSaveOrOpenBlob?a.msToBlob():a.toDataURL(c),l)}catch(b){j()}};a.width=h;a.height=g;f.canvg?m():(e.showLoading(),z(b.getOptions().global.canvasToolsURL,function(){e.hideLoading();m()}))},j,j,function(){try{t.revokeObjectURL(a)}catch(b){}})},D=function(a,b,c){++u;
c.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);u===l.length&&y()};b.wrap(b.Chart.prototype,"getChartHTML",function(a){q=this.container.cloneNode(!0);return a.apply(this,Array.prototype.slice.call(arguments,1))});e.getSVGForExport(d,B);l=q.getElementsByTagName("image");try{l.length||y();for(m=0,v=l.length;m<v;++m)r=l[m],w(r.getAttributeNS("http://www.w3.org/1999/xlink","href"),"image/png",{imageElement:r},D,j,j,j)}catch(E){j()}};b.getOptions().exporting.buttons.contextButton.menuItems=
[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}}]});
