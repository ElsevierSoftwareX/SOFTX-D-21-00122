"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[947],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,k=d["".concat(s,".").concat(g)]||d[g]||A[g]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4553:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"ui_components",title:"UI Components"},s=void 0,p={unversionedId:"UI Definition/ui_components",id:"UI Definition/ui_components",isDocsHomePage:!1,title:"UI Components",description:"The main purpose of the UI components is to represent data through visual representations. In terms of granularity, they can be divided into two main categories: cards and charts. The type is defined through the property type.",source:"@site/docs/03-UI Definition/02-ui_components.md",sourceDirName:"03-UI Definition",slug:"/UI Definition/ui_components",permalink:"/trial-monitor/UI Definition/ui_components",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ui_components",title:"UI Components"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/trial-monitor/UI Definition/overview"},next:{title:"Layout",permalink:"/trial-monitor/UI Definition/layout"}},m=[{value:"Cards",id:"cards",children:[]},{value:"Charts",id:"charts",children:[{value:"Time series",id:"time-series",children:[]},{value:"Histogram",id:"histogram",children:[]},{value:"Pie Chart",id:"pie-chart",children:[]},{value:"Barchart",id:"barchart",children:[]}]},{value:"Table",id:"table",children:[]}],A={toc:m};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The main purpose of the UI components is to represent data through visual representations. In terms of granularity, they can be divided into two main categories: ",(0,i.kt)("inlineCode",{parentName:"p"},"cards")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"charts"),". The type is defined through the property ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,i.kt)("p",null,"The data needed for these components is specified through the property ",(0,i.kt)("inlineCode",{parentName:"p"},"specifications"),". And in similarity to users, the data retrieved can be filtered through the property ",(0,i.kt)("a",{parentName:"p",href:"../Databases/overview"},(0,i.kt)("inlineCode",{parentName:"a"},"filters")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"specifications:\n  database: smSQL\n  tables: activities\n  x: activities.value\n  filters:\n  - target: value\n    operator: '>='\n    value: 2400\n")),(0,i.kt)("h2",{id:"cards"},"Cards"),(0,i.kt)("p",null,"Cards provide a summative overview relatively to an attribute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Properties:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"title"))," - a non empty string representing the header title displayed on the top of the card content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"round"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<units>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<u>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<decimals>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<d>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<centesimals>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<c>")," ",(0,i.kt)("strong",{parentName:"li"},"or")," an integer representing the number of decimal places."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"specifications"))," - property that tells the system how to retrieve data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"database"))," - a non-empty string representing the database identifier (only considered when there are multiple database connections)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"datastore"))," - (Only for Healthcare API) The name of the datastore where the data is being requested from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tables"))," - an array of strings (the name of the targeted tables). These tables must be linked, in other words, at some point, one of them references the other. In Fhir databases, this property is the type of Resource being requested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," - a non-empty string representing the name of the targeted attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"operator"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<avg>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<count>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<max>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<min"),">.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of a card",src:n(2577).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: card\n  title: Activity Level\n  round: 2\n  specifications:\n      database: lifanaMySQL\n      tables: Activity\n      x: value\n      operator: avg\n")),(0,i.kt)("h2",{id:"charts"},"Charts"),(0,i.kt)("p",null,"Charts are supported essentially to display data in multiple axes, a functionality that could not be addressed by the ",(0,i.kt)("a",{parentName:"p",href:"#cards"},"first component"),", therefore appearing as complementation."),(0,i.kt)("p",null,"In total there are ",(0,i.kt)("strong",{parentName:"p"},"four")," different charts that can be used being: ",(0,i.kt)("inlineCode",{parentName:"p"},"timeseries, barchart, pie/doughnut chart, histogram"),"."),(0,i.kt)("h3",{id:"time-series"},"Time series"),(0,i.kt)("p",null,"Time series allows tracking a specific attribute over time because the x-axis reflects the time and the y-axis the corresponding value registered."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Properties:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"title"))," - a string that represents the chart title (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ylabel"))," - a string that represents the y-axis label name (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"xlabel"))," - a string that represents the x-axis label name (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"yrange"))," - a property to define the lower and upper y-axis limit.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beginning"))," - an integer establishing the lower limit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end"))," - an integer establishing the upper limit."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"specifications"))," - property that tells the system how to retrieve data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"database"))," - a non-empty string representing the database identifier (only considered when there are multiple database connections)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"datastore"))," - (Only for Healthcare API) The name of the datastore where the data is being requested from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tables"))," - an array of strings (the name of the targeted tables). These tables must be linked, in other words, at some point, one of them references the other. In Fhir databases, this property is the type of Resource being requested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," - a non-empty string representing the attribute to be represented on the x-axis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"y"))," - a non-empty string representing the attribute to be represented on the y-axis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"groupby"))," - a property used to group the time according to a specific value based on an operator.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"time"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<hour>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<day>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<week>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<month>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"operator"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<avg>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<count>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<max>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<min"),">")))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of a timeseries",src:n(6286).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: timeseries\n  title: Meal plans created\n  ylabel: Value\n  xlabel: Grouped by day\n  yrange:\n    beginning: 0\n    end: 6\n  specifications:\n    database: lifanaMySQL\n    tables: WeekPlan\n    x: beginDate\n    y: WeekPlan.Household_idHousehold\n    groupby:\n      time: day\n      operator: count\n")),(0,i.kt)("h3",{id:"histogram"},"Histogram"),(0,i.kt)("p",null,"A histogram is a valuable representation when it comes to represent and analyse the frequency of a determined attribute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Properties:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"title"))," - a string that represents the chart title (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ylabel"))," - a string that represents the y-axis label name (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"xlabel"))," - a string that represents the x-axis label name (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"interval"))," - a property to define the x-axis interval.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start"))," - an integer representing the left most limit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end"))," - an integer representing the right most limit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"size"))," - an integer representing the length in the x-axis."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"specifications"))," - property that tells the system how to retrieve data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"database"))," - a non-empty string representing the database identifier (only considered when there are multiple database connections)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"datastore"))," - (Only for Healthcare API) The name of the datastore where the data is being requested from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tables"))," - an array of strings (the name of the targeted tables). These tables must be linked, in other words, at some point, one of them references the other. In Fhir databases, this property is the type of Resource being requested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," - a non-empty string representing the attribute to be represented on the x-axis.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of a histogram",src:n(6711).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: histogram\n  title: Weight distribution\n  ylabel: Frequency\n  xlabel: Weight\n  interval:\n    start: 0\n    end: 150\n    size: 5\n  specifications:\n    database: lifanaMySQL\n    tables: WeightLog\n    x: weightKg\n")),(0,i.kt)("h3",{id:"pie-chart"},"Pie Chart"),(0,i.kt)("p",null,"Pie charts permit us to compare categories in terms of the proportion of their frequency. In such cases, since the arc length is proportional to the frequency, it evidences, the proportions to one another."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Properties:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"title"))," - a string that represents the chart title (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"subtype"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<donut>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<pie>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"specifications"))," - property that tells the system how to retrieve data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"database"))," - a non-empty string representing the database identifier (only considered when there are multiple database connections)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"datastore"))," - (Only for Healthcare API) The name of the datastore where the data is being requested from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tables"))," - an array of strings (the name of the targeted tables). These tables must be linked, in other words, at some point, one of them references the other. In Fhir databases, this property is the type of Resource being requested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," - a non-empty string representing the attribute to be represented.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of a pie chart",src:n(1279).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: piechart\n  subtype: donut\n  title: NPS - Answer Distrib.\n  specifications:\n    database: lifanaFirebase\n    tables: SurveyNps\n    x: answer\n")),(0,i.kt)("h3",{id:"barchart"},"Barchart"),(0,i.kt)("p",null,"Commonly there is data that can be classified as categorical thus, those same categories are used to aggregate information among them based on a specific operator in which ultimately, are represented along one of the axis (in this case x-axis)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Properties:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"title"))," - a string that represents the chart title (",(0,i.kt)("strong",{parentName:"p"},"optional"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"domain"))," - ",(0,i.kt)("inlineCode",{parentName:"p"},"<categorical>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"<temporal>")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"<day>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"labels"))," - ",(0,i.kt)("inlineCode",{parentName:"p"},"<direct>")," (",(0,i.kt)("strong",{parentName:"p"},"optional"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ylabel"))," - a string that represents the y-axis label name (",(0,i.kt)("strong",{parentName:"p"},"optional"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"xlabel"))," - a string that represents the x-axis label name (",(0,i.kt)("strong",{parentName:"p"},"optional"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"specifications"))," - property that tells the system how to retrieve data."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"database"))," - a non-empty string representing the database identifier (only considered when there are multiple database connections).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"datastore"))," - (Only for Healthcare API) The name of the datastore where the data is being requested from.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"tables"))," - an array of strings (the name of the targeted tables). These tables must be linked, in other words, at some point, one of them references the other. In Fhir databases, this property is the type of Resource being requested.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," - assumes either:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(1) a non-empty string representing an attribute."),(0,i.kt)("li",{parentName:"ul"},"(2) a non-empty string representing an attribute that is an enumeration variable (e.g. color, assuming color values as ",(0,i.kt)("inlineCode",{parentName:"li"},"red"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"blue"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"green"),")."),(0,i.kt)("li",{parentName:"ul"},"(3) an array of strings corresponding to the categories (In some cases a tuple from a table contain multiple attributes that are categories, that's why we use this)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"y"))," - assumes either:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a non-empty string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IS_COUNT")," to act as a Histogram. Consequently, the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," defined is variable corresponding to an enumeration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"It is not declared in case ",(0,i.kt)("inlineCode",{parentName:"strong"},"x")," takes a scenario (3)"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"groupby"))," - a property used to group the time according to a specific value based on an operator (",(0,i.kt)("strong",{parentName:"p"},"only needed if ",(0,i.kt)("inlineCode",{parentName:"strong"},"domain")," set to ",(0,i.kt)("inlineCode",{parentName:"strong"},"temporal")),")."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"time"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<hour>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<day>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<week>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<month>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"operator"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<avg>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<count>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<max>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<min"),">.")))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of a barchart",src:n(7896).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: barchart\n  domain: categorical\n  title: Bp by attribute\n  ylabel: Value\n  xlabel: Different categories\n  categories:\n    - Bpm\n    - Diastolic\n    - Irreghr\n    - Systolic\n  specifications:\n    database: conventional\n    table: Bp\n    x:\n      - bpm\n      - diastolic\n      - irreghr\n      - systolic\n")),(0,i.kt)("h2",{id:"table"},"Table"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Properties:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"title"))," - a string that represents the table title (",(0,i.kt)("strong",{parentName:"li"},"optional"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"export"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<true>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<false>")," (",(0,i.kt)("strong",{parentName:"li"},"optional"),") Default: false. Allow users to export an CSV with the table data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pagination"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<true>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<false>")," \\ ",(0,i.kt)("inlineCode",{parentName:"li"},"<integer>")," (",(0,i.kt)("strong",{parentName:"li"},"optional"),") Allows users to disable the pagination or to change the number of rows per page. By default pagination is enable with 20 rows per page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"search"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<true>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<false>")," (",(0,i.kt)("strong",{parentName:"li"},"optional"),").  Default: true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sort"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"<true>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},"<false>")," (",(0,i.kt)("strong",{parentName:"li"},"optional"),"). Default: true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"specifications"))," - property that tells the system how to retrieve data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"database"))," - a non-empty string representing the database identifier (only considered when there are multiple database connections)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"datastore"))," - (Only for Healthcare API) The name of the datastore where the data is being requested from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tables"))," - an array of strings (the name of the targeted tables). These tables must be linked, in other words, at some point, one of them references the other. In Fhir databases, this property is the type of Resource being requested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"attributes"))," - a list of non-empty strings representing the attributes to be represented.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of a table",src:n(6640).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: table\n  title: Custom ingredients\n  specifications:\n    database: lifanaMySQL\n    tables: [ShoppingListCustomItem, ShoppingList]\n    attributes: [name]\n")))}d.isMDXComponent=!0},7896:function(e,t,n){t.Z=n.p+"assets/images/bar-chart-4623a460945988fc0bd842a0ec96a56a.png"},2577:function(e,t){t.Z="data:image/png;base64,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"},6711:function(e,t,n){t.Z=n.p+"assets/images/histogram-aa47b934b7d29b59337f07af472290be.png"},1279:function(e,t,n){t.Z=n.p+"assets/images/pie-chart-dec1b3118eadc3cf3e805647241eb17b.png"},6640:function(e,t,n){t.Z=n.p+"assets/images/table-a18ddbab51a2bd1f7d580d6527160674.png"},6286:function(e,t,n){t.Z=n.p+"assets/images/time-series-06a1a6822d1be0f35ac578c4fd1edd66.png"}}]);