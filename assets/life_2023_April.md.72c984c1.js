import{_ as g,o as r,c as s,x as e,t as c,F as p,K as m,A as _,n as w,L as f,M as k,C as b,a as y,N as I}from"./chunks/framework.cd9250a1.js";const v={data(){return{year:null,month:null,weeks:[]}},mounted(){this.initCalendar()},methods:{initCalendar(){const t=new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1;const i=new Date(this.year,this.month,0).getDate(),h=new Date(this.year,this.month-1,1).getDay();new Date(this.year,this.month-1,i).getDay();const u=Math.ceil((h+i)/7);let n=[],l=1;for(let o=0;o<u;o++){let a=[];for(let d=0;d<7;d++)o===0&&d<h?a.push({}):l>i?a.push({}):(a.push({date:l,today:l===t.getDate()}),l++);n.push(a)}this.weeks=n}}},S=t=>(f("data-v-6d6d8061"),t=t(),k(),t),A={key:0,class:"container"},D=S(()=>e("thead",null,[e("tr",null,[e("th",null,"日"),e("th",null,"一"),e("th",null,"二"),e("th",null,"三"),e("th",null,"四"),e("th",null,"五"),e("th",null,"六")])],-1));function C(t,i,h,u,n,l){return n.year?(r(),s("div",A,[e("h1",null,"💐 Hi "+c(n.year)+" . "+c(n.month)+" ~",1),e("table",null,[D,e("tbody",null,[(r(!0),s(p,null,m(n.weeks,o=>(r(),s("tr",{key:o},[(r(!0),s(p,null,m(o,a=>(r(),s("td",{key:a.date,class:w({today:a.today})},c(a.date),3))),128))]))),128))])])])):_("",!0)}const x=g(v,[["render",C],["__scopeId","data-v-6d6d8061"]]),N=e("h1",{id:"spring-awakening-🌷",tabindex:"-1"},[y("Spring Awakening 🌷 "),e("a",{class:"header-anchor",href:"#spring-awakening-🌷","aria-label":'Permalink to "Spring Awakening 🌷"'},"​")],-1),P=e("h2",{id:"happy-spring-may-this-season-bring-you-renewal-and-growth",tabindex:"-1"},[y("Happy Spring! May this season bring you renewal and growth. "),e("a",{class:"header-anchor",href:"#happy-spring-may-this-season-bring-you-renewal-and-growth","aria-label":'Permalink to "Happy Spring! May this season bring you renewal and growth."'},"​")],-1),T=I('<h3 id="welcome-to-april" tabindex="-1">Welcome to April <a class="header-anchor" href="#welcome-to-april" aria-label="Permalink to &quot;Welcome to April&quot;">​</a></h3><p>Hi there! April has arrived once again and I&#39;m delighted to see so many beautiful flowers in bloom on my way to work. It always puts me in a good mood and gives me more energy in the morning. I dream of the day when I can work from home and have a courtyard filled with flowers, grass, and trees. Being surrounded by nature is my ultimate goal as I love everything about it.</p><p>Working in a natural setting would be amazing, as I would get to enjoy the sunshine and fresh air. However, currently, I&#39;m not too fond of my office space. It&#39;s located in a basement storage area, and there are so many cockroaches and dust, making it quite dirty. Despite this, I&#39;ve learned to live with it until I can save enough money to create my dream workspace.</p><p>Well, all of these thoughts are just in my mind, and I must come back to reality and focus on my work. Nonetheless, the sight of the beautiful flowers reminds me of the beauty of nature, and I hope to one day surround myself with it as much as possible.</p><p>🐱 Here is my April plan :</p><ol><li>Prepare for the IELTS speaking part 1</li><li>Prepare for the IELTS writing section by writing at least 5 compositions</li><li>Collect interview questions and answers</li><li>Summarize 50 English Pod articles from reputable sources, and create a vocabulary list for each article with example sentences to reinforce your understanding.</li></ol>',6),M=JSON.parse('{"title":"Spring Awakening 🌷","description":"","frontmatter":{},"headers":[],"relativePath":"life/2023/April.md"}'),V={name:"life/2023/April.md"},W=Object.assign(V,{setup(t){return(i,h)=>(r(),s("div",null,[N,P,b(x),T]))}});export{M as __pageData,W as default};
