webpackJsonp([0],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),o=r(a);(0,o["default"])(0)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=d[e].data,n=(0,o.select)("body .container-fluid"),r=n.append("div").attr("class","viz row"),a=r.append("div").attr("class","col-lg-12"),l=a.append("div").attr("class","controls row"),u=l.append("div").attr("class","col-lg-12"),p=a.append("div").attr("class","plot row"),f=p.append("div").attr("class","col-md-12"),v=f.append("svg"),m=v.append("g");m.append("g").attr("class","x axis"),m.append("g").attr("class","y axis"),m.append("text").attr("id","y-label").attr("text-anchor","middle").style("font","12px sans-serif").text("Relative Frequency"),m.append("text").attr("id","x-label").attr("text-anchor","middle").style("font","12px sans-serif").text("Sample");var x=s.availableColorSchemes[0].name,y=(0,c.setupData)(d[e],v),h=y.sortedKeys,g=y.levels,b=(0,c.sort)(t,[h[0]],["Ascending"],[!1],y);(0,i["default"])(v,x,b,y);var k=u.append("div").attr("class","row");(0,s.addDownloadLinks)(k,v),(0,s.addTaxaPicker)(k,g,d[e].name),(0,s.addColorPicker)(k,v,t,y),(0,s.addSortByPicker)(k,v,t,y)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(2),l=n(3),i=r(l),s=n(7),c=n(11)},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,r){var a=n.sortMap,i=n.sortedSampleIDs,c=10*i.length,p=600,f={top:20,left:60,right:50,bottom:50},v=200,m=r.keys,x=e.select("g");e.property("colorScheme",t);var y=(0,o.scaleBand)().padding(.1).domain(i).range([0,c]),h=(0,o.scaleLinear)().domain([0,1]).range([p,0]).nice(),g=u.availableColorSchemes.find(function(e){return e.name===t});console.log(g);var b=void 0;"s"===g.type?b=(0,o.scaleSequential)(g.scheme).domain([0,m.length-1]):"o"===g.type&&(b=(0,o.scaleOrdinal)(g.scheme).domain([0,m.length-1]));var k=(0,o.axisBottom)(),A=(0,o.axisLeft)();k.scale(y).tickFormat(function(e){return a[e]}),A.scale(h).tickFormat((0,o.format)(".0%")),x.attr("transform","translate("+f.left+","+f.top+")");var O=(0,l.setupXAxis)(e,x,c,p,k);(0,l.setupYAxis)(e,x,p,A),(0,s["default"])(x,y,h,b,r,a);var _=(0,d["default"])(e,x,m,c,b),R=p+f.top+f.bottom+O,P=c+f.left+f.right+_,w=20*(m.length-1);e.attr("width",P<c+v?c+v:P).attr("height",R<w?w:R);var S=(0,o.select)("#tooltip");S.node().parentNode.appendChild(S.node())}Object.defineProperty(t,"__esModule",{value:!0}),t.transitionDur=void 0,t["default"]=a;var o=n(2),l=n(4),i=n(5),s=r(i),c=n(6),d=r(c),u=n(7);t.transitionDur=500},function(e,t){"use strict";function n(e,t,n,r,o){var l=0;return e.select(".x.axis").attr("transform","translate(0,"+r+")").call(o).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy","-0.5em").attr("transform",function(){var e=this.getComputedTextLength();return e>l&&(l=e),"rotate(-90)"}),t.select("#x-label").attr("transform","translate("+n/2+","+(r+l+a)+")"),l}function r(e,t,n,r){e.select(".y.axis").call(r),t.select("#y-label").attr("transform","translate(-"+a+","+n/2+")rotate(-90)")}Object.defineProperty(t,"__esModule",{value:!0}),t.setupXAxis=n,t.setupYAxis=r;var a=t.labelOffset=30},function(e,t,n){"use strict";function r(e,t){e.transition().duration(l.transitionDur).style("fill",function(e){return t(e.index)})}function a(e,t,n,a,l,i){e.selectAll("#tooltip").remove();var s=e.append("g").style("display","none").attr("id","tooltip");s.append("rect").attr("height",50).attr("fill","white");var c=s.append("text").style("text-anchor","middle").attr("font-size","12px").attr("font-weight","bold");c.append("tspan").attr("id","ttxlabel").attr("dy","1.2em"),c.append("tspan").attr("id","taxalabel").attr("dy","1.2em"),c.append("tspan").attr("id","abunlabel").attr("dy","1.2em");var d=e.selectAll(".layer").data(l.layers);d.exit().remove();var u=d.enter().append("g").attr("class","layer"),p=d.merge(u).call(r,a).attr("visibility",null).property("taxa",function(e){return e.key}),f=p.selectAll("rect").data(function(e){return e});f.exit().remove();var v=f.enter().append("rect");f.merge(v).attr("x",function(e){return t(e.data[l.first])}).attr("y",function(e){return n(e[1])}).attr("height",function(e){return n(e[0])-n(e[1])}).attr("width",t.bandwidth()).on("mouseover",function(){s.style("display",null)}).on("mouseout",function(){s.style("display","none")}).on("mousemove",function(e){var t=s.select("text"),n=(0,o.select)(this.parentNode).property("taxa"),r=t.select("#ttxlabel"),a=t.select("#taxalabel"),c=t.select("#abunlabel");r.text(function(){return i[e.data[l.first]]}),a.text(function(){return n}),c.text(function(){return(100*(e[1]-e[0])).toFixed(3)+"%"});var d=t.node().getBBox().width,u=d/2+5;r.attr("x",u),a.attr("x",u),c.attr("x",u),s.select("rect").attr("width",d+10);var p=(0,o.mouse)(this)[0],f=(0,o.mouse)(this)[1]-25;s.attr("transform","translate("+p+","+f+")")})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(2),l=n(1)},function(e,t,n){"use strict";function r(e,t,n){e.transition().duration(l.transitionDur).style("fill",function(e){return t(n.indexOf(e))})}function a(e,t,n,a,l){var i=e.property("stackOrder");t.selectAll(".legend").remove();var s=t.selectAll(".legend").data(i),c=s.enter().append("g").attr("class","legend").attr("id",function(e){return"id"+e}).style("font","10px sans-serif"),d=s.merge(c).attr("transform",function(e,t){return"translate(10,"+20*(n.length-t-1)+")"});c.append("rect").attr("width",18).attr("height",18),d.selectAll("rect").attr("x",a).call(r,l,i).on("mouseover",function(){(0,o.select)(this).style("cursor","pointer")}).on("click",function(e){var t=(0,o.select)("#id"+e),r=t.select("rect"),a=r.classed("selected");r.classed("selected",!a).style("stroke",function(){return a?null:"black"}).style("stroke-width",function(){return a?null:2});var l=(0,o.selectAll)(".legend .selected").nodes().map(function(e){return n[(0,o.select)(e).datum()]});(0,o.selectAll)(".layer").attr("visibility",function(e){return 0===l.length?null:l.indexOf(e.key.trim())>-1?null:"hidden"})}),c.append("text").attr("y",9).attr("dy",".35em").attr("text-anchor","start"),d=d.selectAll("text").attr("x",a+24).text(function(e){return n[e]});var u=0;return d.each(function(){var e=this.getComputedTextLength();e>u&&(u=e)}),u}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(2),l=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t,n,r){var a=e.selectAll(".xCtrl").nodes().map(function(e){return e.options[e.selectedIndex].value}),o=e.selectAll(".xOrder").nodes().map(function(e){return e.options[e.selectedIndex].value}),l=e.selectAll(".xLabel").nodes().map(function(e){return"hidden"!==e.type&&e.checked});return(0,b.sort)(n,a,o,l,r)}function l(e,t,n,r){var a=o(e,t,n,r);(0,g["default"])(t,t.property("colorScheme"),a,r)}function i(e,t,n,r){var a=e.append("div").attr("class","row"),o=a.append("div").attr("class","col-lg-4"),i=a.append("div").attr("class","col-lg-4"),s=a.append("div").attr("class","col-lg-4"),c=o.append("select").attr("class","xCtrl form-control").on("change",function(){s.select("label").remove();var a=(0,f.select)(this).node(),o=a.options[a.selectedIndex].value,i=r.metaData.indexOf(o)>-1;s.append("label").text(function(){return i?"Relabel X? ":""}).append("input").attr("class","xLabel").attr("type",function(){return i?"checkbox":"hidden"}).property("checked",!0).on("change",function(){l(e,t,n,r)}),l(e,t,n,r)}),d=["Ascending","Descending"];return i.append("select").attr("class","xOrder form-control").on("change",function(){l(e,t,n,r)}).selectAll("option").data(d).enter().append("option").attr("value",function(e){return e}).text(function(e){return e}),c}function s(e,t,n,r){var a=[{label:"Sample Metadata",keys:t},{label:"Taxonomic Abundance",keys:n}],o=e.selectAll("optgroup").data(a);o.exit().remove();var l=o.enter().append("optgroup"),i=o.merge(l).attr("label",function(e){return e.label}),s=i.selectAll("option").data(function(e){return e.keys});s.exit().remove();var c=s.enter().append("option");return s.merge(c).attr("value",function(e){return e}).property("selected",function(e){return e===r}).text(function(e){return e})}function c(e,t,n){var r=e.append("div").attr("class","col-lg-2 form-group taxaPicker");return r.append("label").text("Taxonomic Level"),r.append("select").attr("class","form-control").on("change",function(){var e=(0,f.select)("body");e.select(".container-fluid").remove(),e.insert("div",":first-child").attr("class","container-fluid"),(0,y["default"])(this.selectedIndex)}).selectAll("option").data(t).enter().append("option").attr("value",function(e){return e}).text(function(e){return e}).property("selected",function(e){return e===n}),r}function d(e,t,n,r){var a=e.append("div").attr("class","col-lg-2 form-group colorPicker");return a.append("label").text("Color Palette"),a.append("select").attr("class","form-control").on("change",function(){var a=this.options[this.selectedIndex].value,l=o(e,t,n,r);(0,g["default"])(t,a,l,r)}).selectAll("option").data(k).enter().append("option").attr("value",function(e){return e.name}).text(function(e){return e.name}),a}function u(e,t,n,r){var a=r.metaData,o=r.sortedKeysReverse,l=r.sortedKeys,c=e.append("div").attr("class","col-lg-6 form-group sortByPicker");c.append("label").text("Sort Samples By"),c.append("button").text("+").attr("class","btn btn-primary btn-xs").style("margin-left","10px").on("click",function(){var e=c.selectAll(".xCtrl");if(e.size()!==a.length+o.length+1){var d=i(c,t,n,r);s(d,a,o,l[0])}});var d=i(c,t,n,r);return s(d,a,o,l[0]),c}function p(e,t){var n=e.append("div").attr("class","col-lg-2 form-group");n.append("label").html("&nbsp;"),n.append("button").text("Download SVG").attr("class","btn btn-default form-control").on("click",function(){var e=new XMLSerializer,n=e.serializeToString(t.node());n='<?xml version="1.0" standalone="no"?>\r\n'+n;var r="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),a=document.createElement("a");a.setAttribute("href",r),a.setAttribute("download","taxaplot.svg"),document.body.appendChild(a),a.click(),document.body.removeChild(a)})}Object.defineProperty(t,"__esModule",{value:!0}),t.availableColorSchemes=void 0,t.addTaxaPicker=c,t.addColorPicker=d,t.addSortByPicker=u,t.addDownloadLinks=p;var f=n(2),v=n(8),m=a(v),x=n(1),y=r(x),h=n(3),g=r(h),b=n(11),k=t.availableColorSchemes=[{name:"PRGn",scheme:m.interpolatePRGn,type:"s"},{name:"BrBG",scheme:m.interpolateBrBG,type:"s"},{name:"PiYG",scheme:m.interpolatePiYG,type:"s"},{name:"PuOr",scheme:m.interpolatePuOr,type:"s"},{name:"RdBu",scheme:m.interpolateRdBu,type:"s"},{name:"RdGy",scheme:m.interpolateRdGy,type:"s"},{name:"RdYlBu",scheme:m.interpolateRdYlBu,type:"s"},{name:"RdYlGn",scheme:m.interpolateRdYlGn,type:"s"},{name:"Spectral",scheme:m.interpolateSpectral,type:"s"},{name:"schemeAccent (discrete)",scheme:m.schemeAccent,type:"o"}]},,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){var r=e[n],a=t[n];return r===a?(0,y.ascending)(e.position,t.position):(0,g["default"])({direction:"asc"})(r,a)}function o(e,t,n){return(0,g["default"])({direction:"asc"})(e[n],t[n])}function l(e,t,n){var r=e[n],a=t[n];return r===a?(0,y.descending)(e.position,t.position):(0,g["default"])({direction:"desc"})(r,a)}function i(e,t,n){return(0,g["default"])({direction:"desc"})(e[n],t[n])}function s(e,t,n){var r=e[n]/e.total,a=t[n]/t.total;return{aRel:r,bRel:a}}function c(e,t,n){var r=s(e,t,n),a=r.aRel,o=r.bRel;return a===o?(0,y.ascending)(e.position,t.position):(0,y.ascending)(a,o)}function u(e,t,n){var r=s(e,t,n),a=r.aRel,o=r.bRel;return(0,y.ascending)(a,o)}function p(e,t,n){var r=s(e,t,n),a=r.aRel,o=r.bRel;return a===o?(0,y.descending)(e.position,t.position):(0,y.descending)(a,o)}function f(e,t,n){var r=s(e,t,n),a=r.aRel,o=r.bRel;return(0,y.descending)(a,o)}function v(e,t){for(var n=0;n<e.length;n+=1){for(var r=e[n],a=0,o=0;o<t.length;o+=1)a+=r[t[o]];r.total=a,r.position=n}}function m(e,t,n,r,s){var d=(0,k["default"])(function(){return 0}),v=void 0;t.forEach(function(e,r){var m=r===t.length-1,x=n[r],y=s.metaData.indexOf(e)>-1,h=void 0;m&&"Ascending"===x?h=y?a:c:m&&"Descending"===x?h=y?l:p:m||"Ascending"!==x?m||"Descending"!==x||(h=y?i:f):h=y?o:u,v=function(t,n){return h(t,n,e)},d=d.thenBy(v)});var m={},x=e.sort(d).map(function(e){var n=e[s.first],a=[];return t.forEach(function(t,n){r[n]&&a.push(e[t])}),m[n]=0===a.length?n:a.join("; "),n});return{sortedSampleIDs:x,sortMap:m}}function x(e,t){var n=e.data,r=e.taxaKeys,a=JSON.parse(JSON.stringify(n.columns)),o=void 0,l=void 0,i=a.filter(function(e){return r.indexOf(e)<0}),s=a.splice(0,1)[0];t.property("firstTaxa",s);var c=(0,y.stack)().keys(r).order(function(e){var n=(0,y.stackOrderDescending)(e);return o=new Array(n.length),n.forEach(function(e,t){o[t]=r[e]}),l=o.slice().reverse(),t.property("stackOrder",n),n}).offset(y.stackOffsetExpand),u=c(n);v(n,r);var p=d.map(function(e){return e.name});return{keys:r,columns:a,metaData:i,sortedKeys:o,sortedKeysReverse:l,first:s,layers:u,levels:p}}Object.defineProperty(t,"__esModule",{value:!0}),t.sort=m,t.setupData=x;var y=n(2),h=n(12),g=r(h),b=n(13),k=r(b)}]);