(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{317:function(t,e,r){"use strict";r.d(e,"l",(function(){return T})),r.d(e,"D",(function(){return d})),r.d(e,"T",(function(){return h})),r.d(e,"S",(function(){return b})),r.d(e,"f",(function(){return C})),r.d(e,"L",(function(){return S})),r.d(e,"u",(function(){return x})),r.d(e,"m",(function(){return g})),r.d(e,"q",(function(){return m})),r.d(e,"g",(function(){return G})),r.d(e,"M",(function(){return M})),r.d(e,"n",(function(){return E})),r.d(e,"o",(function(){return v})),r.d(e,"r",(function(){return q})),r.d(e,"h",(function(){return j})),r.d(e,"N",(function(){return A})),r.d(e,"p",(function(){return k})),r.d(e,"s",(function(){return _})),r.d(e,"z",(function(){return L})),r.d(e,"K",(function(){return D})),r.d(e,"H",(function(){return O})),r.d(e,"C",(function(){return R})),r.d(e,"P",(function(){return N})),r.d(e,"v",(function(){return z})),r.d(e,"A",(function(){return P})),r.d(e,"I",(function(){return B})),r.d(e,"a",(function(){return U})),r.d(e,"J",(function(){return H})),r.d(e,"t",(function(){return V})),r.d(e,"U",(function(){return w})),r.d(e,"j",(function(){return W})),r.d(e,"i",(function(){return J})),r.d(e,"b",(function(){return K})),r.d(e,"e",(function(){return Y})),r.d(e,"B",(function(){return X})),r.d(e,"G",(function(){return Z})),r.d(e,"E",(function(){return Q})),r.d(e,"F",(function(){return $})),r.d(e,"y",(function(){return tt})),r.d(e,"w",(function(){return et})),r.d(e,"c",(function(){return rt})),r.d(e,"d",(function(){return ut})),r.d(e,"Q",(function(){return at})),r.d(e,"k",(function(){return nt})),r.d(e,"R",(function(){return ot})),r.d(e,"O",(function(){return it})),r.d(e,"x",(function(){return ct}));var u=r(410),a=r(75),n=r(14),o=r.n(n),i=r(354),c=function(t,e,r){this.distance=t,this.linkage=e,this.threshold=void 0===r?1/0:r};c.prototype={cluster:function(t,e,r){this.clusters=[],this.dists=[],this.mins=[],this.index=[];for(var u=0;u<t.length;u++){var a={value:t[u],key:u,index:u,size:1};this.clusters[u]=a,this.index[u]=a,this.dists[u]=[],this.mins[u]=0}for(var n=0;n<this.clusters.length;n++)for(var o=0;o<=n;o++){var i=n===o?1/0:this.distance(this.clusters[n].value,this.clusters[o].value);this.dists[n][o]=i,this.dists[o][n]=i,i<this.dists[n][this.mins[n]]&&(this.mins[n]=o)}for(var c=this.mergeClosest(),s=0;c;)r&&s++%e===0&&r(this.clusters),c=this.mergeClosest();return this.clusters.forEach((function(t){delete t.key,delete t.index})),this.clusters},mergeClosest:function(){for(var t=0,e=1/0,r=0;r<this.clusters.length;r++){var u=this.clusters[r].key,a=this.dists[u][this.mins[u]];a<e&&(t=u,e=a)}if(e>=this.threshold)return!1;var n=this.index[t],o=this.index[this.mins[t]],i={left:n,right:o,key:n.key,size:n.size+o.size};this.clusters[n.index]=i,this.clusters.splice(o.index,1),this.index[n.key]=i;for(var c=0;c<this.clusters.length;c++){var s=this.clusters[c],p=void 0;n.key===s.key?p=1/0:"single"===this.linkage?(p=this.dists[n.key][s.key],this.dists[n.key][s.key]>this.dists[o.key][s.key]&&(p=this.dists[o.key][s.key])):"complete"===this.linkage?(p=this.dists[n.key][s.key],this.dists[n.key][s.key]<this.dists[o.key][s.key]&&(p=this.dists[o.key][s.key])):p="average"===this.linkage?(this.dists[n.key][s.key]*n.size+this.dists[o.key][s.key]*o.size)/(n.size+o.size):this.distance(s.value,n.value),this.dists[n.key][s.key]=this.dists[s.key][n.key]=p}for(var y=0;y<this.clusters.length;y++){var f=this.clusters[y].key;if(this.mins[f]===n.key||this.mins[f]===o.key){for(var l=f,F=0;F<this.clusters.length;F++){var T=this.clusters[F].key;this.dists[f][T]<this.dists[f][l]&&(l=T)}this.mins[f]=l}this.clusters[y].index=y}return delete n.key,delete o.key,delete n.index,delete o.index,!0}};var s=r(11),p=[{"Fact Type 1":"distribution","Fact Type 2":"distribution",Chart:"Stacked Bar Chart",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"distribution","Fact Type 2":"difference",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"difference"},{"Fact Type 1":"distribution","Fact Type 2":"rank",Chart:"Horizontal Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"rank"},{"Fact Type 1":"distribution","Fact Type 2":"categorization",Chart:"Isotype Bar Chart",Measure:"distribution",Subspace:"equal",Groupby:"equal",Focus:""},{"Fact Type 1":"distribution","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"distribution","Fact Type 2":"extreme",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"extreme"},{"Fact Type 1":"distribution","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"distribution","Fact Type 2":"outlier",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"outlier"},{"Fact Type 1":"distribution","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"distribution","Fact Type 2":"trend",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"distribution",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"difference"},{"Fact Type 1":"difference","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"categorization",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"extreme",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"outlier",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"difference","Fact Type 2":"trend",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"difference"},{"Fact Type 1":"rank","Fact Type 2":"distribution",Chart:"Horizontal Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"rank"},{"Fact Type 1":"rank","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"categorization",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"extreme",Chart:"Horizontal Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"rank"},{"Fact Type 1":"rank","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"outlier",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"rank","Fact Type 2":"trend",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"distribution",Chart:"Isotype Bar Chart",Measure:"distribution",Subspace:"equal",Groupby:"equal",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"categorization",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"extreme",Chart:"Isotype Bar Chart",Measure:"extreme",Subspace:"equal",Groupby:"equal",Focus:"extreme"},{"Fact Type 1":"categorization","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"outlier",Chart:"Isotype Bar Chart",Measure:"outlier",Subspace:"equal",Groupby:"equal",Focus:"outlier"},{"Fact Type 1":"categorization","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"categorization","Fact Type 2":"trend",Chart:"Isotype Bar Chart",Measure:"trend",Subspace:"equal",Groupby:"equal",Focus:""},{"Fact Type 1":"value","Fact Type 2":"distribution",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"categorization",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"extreme",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"outlier",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"value","Fact Type 2":"trend",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"extreme","Fact Type 2":"distribution",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"extreme"},{"Fact Type 1":"extreme","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"extreme","Fact Type 2":"rank",Chart:"Horizontal Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"rank"},{"Fact Type 1":"extreme","Fact Type 2":"categorization",Chart:"Isotype Bar Chart",Measure:"extreme",Subspace:"equal",Groupby:"equal",Focus:"extreme"},{"Fact Type 1":"extreme","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"extreme","Fact Type 2":"extreme",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"extreme","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"extreme","Fact Type 2":"outlier",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"extreme+outlier"},{"Fact Type 1":"extreme","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"extreme","Fact Type 2":"trend",Chart:"Line Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"extreme"},{"Fact Type 1":"proportion","Fact Type 2":"distribution",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"categorization",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"extreme",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"outlier",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"proportion","Fact Type 2":"trend",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"distribution",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"outlier"},{"Fact Type 1":"outlier","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"categorization",Chart:"Isotype Bar Chart",Measure:"outlier",Subspace:"equal",Groupby:"equal",Focus:"outlier"},{"Fact Type 1":"outlier","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"extreme",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"extreme+outlier"},{"Fact Type 1":"outlier","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"outlier",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"outlier","Fact Type 2":"trend",Chart:"Line Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"outlier"},{"Fact Type 1":"association","Fact Type 2":"distribution",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"difference",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"categorization",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"extreme",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"outlier",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"association","Fact Type 2":"trend",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"distribution",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"difference",Chart:"Vertical Bar Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"difference"},{"Fact Type 1":"trend","Fact Type 2":"rank",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"categorization",Chart:"Isotype Bar Chart",Measure:"trend",Subspace:"equal",Groupby:"equal",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"value",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"extreme",Chart:"Line Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"extreme"},{"Fact Type 1":"trend","Fact Type 2":"proportion",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"outlier",Chart:"Line Chart",Measure:"equal",Subspace:"equal",Groupby:"equal",Focus:"outlier"},{"Fact Type 1":"trend","Fact Type 2":"association",Chart:"juxtaposition",Measure:"",Subspace:"",Groupby:"",Focus:""},{"Fact Type 1":"trend","Fact Type 2":"trend",Chart:"Stacked Line Chart",Measure:"",Subspace:"",Groupby:"",Focus:""}],y=r(4),f=function(t,e){for(var r=t.slice(),u=0;u<r.length;u++)r[u].index=u,r[u].aggregated=!1,r[u].aggregatedFact=null;var n=function t(e){var r=[];if(!e)return r;if(e.size>2){var u=t(e.left),a=t(e.right);r.push.apply(r,Object(s.a)(u)),r.push.apply(r,Object(s.a)(a))}else 2===e.size?r.push([e.left.value,e.right.value]):r.push([e.value]);return r}(function(t,e,r,u,a){e=e||"average";var n=new c(i.a,e,r).cluster(t,u,a);return void 0===r?n[0]:n}(r)).filter((function(t){return t.length>1}));n.sort((function(t,e){return Object(i.b)(e[0],e[1])-Object(i.b)(t[0],t[1])}));var o,p=parseInt((n.length+1)*e),y=n.slice(0,p),f=Object(a.a)(y);try{for(f.s();!(o=f.n()).done;){var F=o.value,T=F[0].index<F[1].index?F[0].index:F[1].index,d=F[0].index>F[1].index?F[0].index:F[1].index;r[T]=l(r[T],r[d]),r[d].aggregated=!0,r[d].aggregatedFact=null}}catch(h){f.e(h)}finally{f.f()}return r},l=function(t,e){var r=p.filter((function(r){return r["Fact Type 1"]===t.type&&r["Fact Type 2"]===e.type}))[0],u=o.a.cloneDeep(t);if(u.aggregated=!0,u.aggregatedFact=o.a.cloneDeep(e),u.compoundType=[t.type,e.type],u.compoundChart=y.a.JUXTAPOSITION,u.score+=u.aggregatedFact.score,r.chart===y.a.JUXTAPOSITION)return u;if(r.chart===y.a.STACKED_BAR_CHART)return u.compoundChart=y.a.STACKED_BAR_CHART,u;if(r.chart===y.a.STACKED_LINE_CHART)return u.compoundChart=y.a.STACKED_LINE_CHART,u;if("equal"===r.Measure&&!F(new Set(t.measure.map((function(t){return t.field}))),new Set(e.measure.map((function(t){return t.field})))))return u;if("equal"===r.Subspace&&!F(new Set(t.subspace.map((function(t){return t.field+"++"+t.value}))),new Set(e.subspace.map((function(t){return t.field+"++"+t.value})))))return u;if("equal"===r.Groupby&&!F(new Set(t.groupby),new Set(e.groupby)))return u;if("equal"===r.Focus&&!F(new Set(t.focus.map((function(t){return t.field+"++"+t.value}))),new Set(e.focus.map((function(t){return t.field+"++"+t.value})))))return u;return u.compoundChart=r.Chart,"equal"!==r.Measure&&""!==r.Measure&&(t.type===r.Measure?u.measure=t.measure:u.measure=e.measure),"equal"!==r.Subspace&&""!==r.Subspace&&(t.type===r.Subspace?u.subspace=t.subspace:u.subspace=e.subspace),"equal"!==r.Groupby&&""!==r.Groupby&&(t.type===r.Groupby?u.groupby=t.groupby:u.groupby=e.groupby),"equal"!==r.Focus&&""!==r.Focus&&(t.type===r.Focus?u.focus=t.focus:u.focus=e.focus),u};function F(t,e){if(t.size!==e.size)return!1;var r,u=Object(a.a)(t);try{for(u.s();!(r=u.n()).done;){var n=r.value;if(!e.has(n))return!1}}catch(o){u.e(o)}finally{u.f()}return!0}r(402);var T=function(t){return t.story.fileName},d=function(t){return t.story.real_filename},h=function(t){return t.story.title},b=function(t){return t.story.subtitle},C=function(t){return t.story.data},S=function(t){return t.story.schema},x=function(t){return t.story.generateUrl},g=function(t){return t.story.filters},m=function(t){return t.story.filtersTitle},G=function(t){return t.story.datares},M=function(t){return t.story.schemaFilter},E=function(t){return t.story.filtersChangeFlag},v=function(t){return t.story.filtersLocal},q=function(t){return t.story.filtersTitleLocal},j=function(t){return t.story.dataresLocal},A=function(t){return t.story.schemaFilterLocal},k=function(t){return t.story.filtersOrigin},_=function(t){return t.story.filtersTitleOrigin},L=function(t){return t.story.leftPaneWidth},D=function(t){return t.story.rightPaneWidth},I=function(t){return t.story.facts},O=function(t){return t.story.relations},R=function(t){return t.story.method},N=function(t){return t.story.selectedFactIndex},z=function(t){return t.story.hoverFactIndex},P=function(t){return t.story.maxStoryLength},B=function(t){return t.story.resultCoverage},U=function(t){return t.story.aggregationLevel},H=function(t){return t.story.rewardWeight},V=function(t){return t.story.generateProgress},w=function(t){return t.story.unusedFacts},W=function(t){return t.story.editstate},J=function(t){return t.story.editingCurrentFact},K=function(t){return t.story.algorithm},Y=function(t){return t.story.calSimilarityType},X=function(t){return t.story.maximumFact},Z=function(t){return t.story.recommendedSfacts},Q=function(t){return t.story.recommendedEfacts},$=function(t){return t.story.recommendedMfacts},tt=function(t){return t.story.layoutFlag},et=function(t){return t.story.interpolationFlag},rt=function(t){return t.story.animationFlag},ut=function(t){return t.story.animationType},at=function(t){return t.story.specIndex},nt=Object(u.a)(I,U,(function(t,e){return f(t,e)})),ot=Object(u.a)(P,(function(t){return t.story.information}),(function(t){return t.story.chartDiversity}),(function(t){return t.story.timeLimit}),(function(t,e,r,u){return{maxStoryLength:t,information:e,chartDiversity:r,timeLimit:u}})),it=Object(u.a)(nt,N,(function(t,e){return t[e]})),ct=Object(u.a)(I,h,b,ot,U,B,(function(t){return t.story.historyStory}),(function(t,e,r,u,a,n,i){var c=i.historyfacts,s=i.historyTitle,p=i.historySubtitle,y=i.historStoryParameter,f=i.historyAggregationLevel,l=i.historyResultCoverage;return!(o.a.isEqual(t,c)&&o.a.isEqual(e,s)&&o.a.isEqual(r,p)&&o.a.isEqual(u,y)&&o.a.isEqual(a,f)&&o.a.isEqual(n,l))}))},348:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"r",(function(){return n})),r.d(e,"m",(function(){return o})),r.d(e,"g",(function(){return i})),r.d(e,"j",(function(){return c})),r.d(e,"o",(function(){return s})),r.d(e,"p",(function(){return p})),r.d(e,"s",(function(){return y})),r.d(e,"v",(function(){return f})),r.d(e,"q",(function(){return l})),r.d(e,"x",(function(){return F})),r.d(e,"t",(function(){return T})),r.d(e,"w",(function(){return d})),r.d(e,"e",(function(){return h})),r.d(e,"u",(function(){return b})),r.d(e,"d",(function(){return C})),r.d(e,"a",(function(){return S})),r.d(e,"c",(function(){return x})),r.d(e,"i",(function(){return g})),r.d(e,"h",(function(){return m})),r.d(e,"f",(function(){return G})),r.d(e,"l",(function(){return M})),r.d(e,"n",(function(){return E})),r.d(e,"k",(function(){return v}));var u=r(2),a=function(t){return{type:u.a.ADD_FACT,facts:t}},n=function(t,e){return{type:u.a.UPDATE_FACT,index:t,fact:e}},o=function(t,e){return{type:u.a.INSERT_FACT,index:t,insert:e}},i=function(t){return{type:u.a.DELETE_FACT,index:t}},c=function(t){return{type:u.a.DELETE_UNUSEDFACT,index:t}},s=function(t,e){return{type:u.a.ORDER_FACTS,sourceIndex:t,destinationIndex:e}},p=function(t){return{type:u.a.SET_HOVER_INDEX,index:t}},y=function(t){return{type:u.a.UPDATE_FILTERS,filters:t}},f=function(t){return{type:u.a.UPDATE_FILTERS_TITLE,filtersTitle:t}},l=function(t){return{type:u.a.UPDATE_DATARES,datares:t}},F=function(t){return{type:u.a.UPDATE_SCHEMA_FILTER,schemaFilter:t}},T=function(t){return{type:u.a.UPDATE_FILTERS_CHANGE_FLAG,filtersChangeFlag:t}},d=function(t,e){return{type:u.a.UPDATE_PANNEL_WIDTH,leftPaneWidth:t,rightPaneWidth:e}},h=function(t,e){return{type:u.a.CHANGE_CURRENT_EDITING,editstate:t,editingCurrentFact:e}},b=function(t,e,r,a){return{type:u.a.UPDATE_FILTERS_LOCAL,filtersLocal:t,filtersTitleLocal:e,dataresLocal:r,schemaFilterLocal:a}},C=function(t){return{type:u.a.ADD_SFACT,facts:t}},S=function(t){return{type:u.a.ADD_EFACT,facts:t}},x=function(t){return{type:u.a.ADD_MFACT,facts:t}},g=function(t){return{type:u.a.DELETE_SFACT,index:t}},m=function(t){return{type:u.a.DELETE_MFACT,index:t}},G=function(t){return{type:u.a.DELETE_EFACT,index:t}},M=function(t,e){return{type:u.a.INSERT_EMPTY_FACT,insert:t,emptyFact:e}},E=function(t,e){return{type:u.a.INSERT_INTERPOLATED_FACTS,insert:t,interpolatedFacts:e}},v=function(t,e,r){return{type:u.a.INSERT_RECOMMENDEDFACT,index:t,insert:e,factLocation:r}}},350:function(t,e,r){"use strict";r.d(e,"k",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"n",(function(){return o})),r.d(e,"m",(function(){return i})),r.d(e,"l",(function(){return c})),r.d(e,"h",(function(){return s})),r.d(e,"q",(function(){return p})),r.d(e,"g",(function(){return y})),r.d(e,"e",(function(){return f})),r.d(e,"p",(function(){return l})),r.d(e,"d",(function(){return F})),r.d(e,"f",(function(){return T})),r.d(e,"a",(function(){return d})),r.d(e,"i",(function(){return h})),r.d(e,"b",(function(){return b})),r.d(e,"o",(function(){return C})),r.d(e,"j",(function(){return S}));var u=r(2),a=function(t){return{type:u.a.SELECT_FACT,index:t}},n=function(t){return{type:u.a.CHANGE_METHOD,method:t}},o=function(t,e,r,a){return{type:u.a.SET_STORY_PARAMETER,maxStoryLength:t,information:e,chartDiversity:r,timeLimit:a}},i=function(t,e,r){return{type:u.a.SET_REWARD_WEIGHT,logicality:t,diversity:e,integrity:r}},c=function(t){return{type:u.a.SET_AGGREGATION_LEVEL,level:t}},s=function(t,e,r){return{type:u.a.GENERATE_STORY,facts:t,relations:e,coverage:r}},p=function(t,e){return{type:u.a.UPDATE_PROGRESS,totalLength:t,currentLength:e}},y=function(t){return{type:u.a.EXPORT_PDF,isExportPdf:t}},f=function(t){return{type:u.a.CHANGE_TITLE,title:t}},l=function(t,e,r,a,n,o,i,c,s,p,y){return{type:u.a.UPDATE_COMMENT_STORY_INFO,facts:t,relations:e,data:r,schema:a,title:n,subtitle:o,storyParameter:s,aggregationLevel:p,resultCoverage:y,fileName:i,real_filename:c}},F=function(t){return{type:u.a.CHANGE_SUBTITLE,subtitle:t}},T=function(t){return{type:u.a.CHANGE_TO_ANIMATION,animationFlag:t}},d=function(t,e,r){return{type:u.a.CHANGE_ALGORITHM,algorithm:t,calSimilarityType:e,maximumFact:r}},h=function(t){return{type:u.a.OPTIMIZE_LAYOUT,layoutFlag:t}},b=function(t){return{type:u.a.CHANGE_INTERPOLATIONFLAG,interpolationFlag:t}},C=function(){return{type:u.a.UNDO}},S=function(){return{type:u.a.REDO}}},354:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return a}));var u=function(t,e){var r,u,a=t.type===e.type?1:0,n=t.measure.map((function(t){return t.field})),o=e.measure.map((function(t){return t.field}));if(0===n.length&&0===o.length)r=1;else{var i=n.filter((function(t){return o.includes(t)})),c=n.length>o.length?n:o;r=i.length/c.length}var s,p=t.subspace.map((function(t){return t.field})),y=e.subspace.map((function(t){return t.field}));if(0===p.length&&0===y.length)u=1;else{var f=p.filter((function(t){return y.includes(t)})),l=p.length>y.length?p:y;u=f.length/l.length}var F,T=t.groupby,d=e.groupby;if(0===T.length&&0===d.length)s=1;else{var h=T.filter((function(t){return d.includes(t)})),b=T.length>d.length?T:d;s=h.length/b.length}var C=t.focus.map((function(t){return t.value})),S=e.focus.map((function(t){return t.value}));if(0===C.length&&0===S.length)F=0;else{var x=C.filter((function(t){return S.includes(t)})),g=C.length>S.length?C:S;F=x.length/g.length}return.2*a+.2*r+.2*u+.2*s+.2*F},a=function(t,e){return 1-u(t,e)}},408:function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return i}));var u=r(2),a=function(t,e,r,a){return{type:u.a.UPLOAD_DATA,fileName:t,real_filename:e,schema:r,data:a}},n=function(t,e){return{type:u.a.CHANGE_DATA,fileName:t,real_filename:e}},o=function(t){return{type:u.a.VISUALIZE_DATA,visData:t}},i=function(t){return{type:u.a.UPDATE_DATA_URL,generateUrl:t}}}}]);
//# sourceMappingURL=6.30229c62.chunk.js.map