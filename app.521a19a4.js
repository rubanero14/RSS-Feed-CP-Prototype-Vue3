(function(){"use strict";var __webpack_modules__={5093:function(e,s,t){var r=t(9242),i=t(3396);function a(e,s,t,r,a,o){const n=(0,i.up)("RSSFeed");return(0,i.wg)(),(0,i.j4)(n)}var o=t(7139);const n={class:"container"},c={class:"row"},l={key:0},d={key:0},p={class:"text-secondary mb-3"},u={key:0,"data-cy":"actions-article-wrapper",class:"articles-wrapper"},w={key:1},_=(0,i._)("span",{class:"text-danger mb-0"},[(0,i._)("strong",null,[(0,i._)("em",null,"No articles found here!")])],-1),m={key:0},h={class:"text-secondary mb-3"};function g(e,s,t,a,g,f){const b=(0,i.up)("HeaderComponent"),v=(0,i.up)("loading-spinner"),k=(0,i.up)("sources-tiles"),N=(0,i.up)("articles-tiles"),y=(0,i.up)("card-component"),D=(0,i.up)("topic-tiles"),T=(0,i.up)("error-component"),S=(0,i.up)("footer-component");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",c,[(0,i._)("div",{class:(0,o.C_)({"col-2":g.screenWidth>=1200,"":g.screenWidth<1200})},null,2),(0,i._)("div",{class:(0,o.C_)({"":g.screenWidth<1200,"col-8":g.screenWidth>=1200})},[(0,i.Wm)(b,{class:"mb-3",onBackwardNav:s[0]||(s[0]=e=>f.backwardNav(g.isError)),tabNav:g.tabNav,isloading:g.isloading,isError:g.isError,showSourceCode:e.showSourceCode,devActivationCount:g.devActivationCount},null,8,["tabNav","isloading","isError","showSourceCode","devActivationCount"]),(0,i.Wm)(v,{isloading:g.isloading,isError:g.isError},null,8,["isloading","isError"]),(0,i.Wm)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[g.isloading||0!==g.tabNav?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i._)("h2",{onClick:s[1]||(s[1]=e=>f.devMode()),class:"text-secondary mb-3"},"Sources")])),_:1}),(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.sources,((s,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"d-inline-block"},[(0,i.Wm)(k,{index:t,source:s,topics:e.topics,isloading:g.isloading,tabNav:g.tabNav,onForwardNav:e=>f.forwardNav(s)},null,8,["index","source","topics","isloading","tabNav","onForwardNav"])])))),128))])]))])),_:1}),g.isError||g.isloading||2!==g.tabNav?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i._)("h2",p,(0,o.zw)(1===g.topicData.length?g.topicTitle:g.topicTitle2),1)])),_:1}),this.feedHasArticles()?((0,i.wg)(),(0,i.iD)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.feeds,((s,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"mb-2",key:t},[(0,i.Wm)(N,{provider:g.topicTitle,index:t,feed:s,feeds:this.feeds,data:this.data,screenWidth:g.screenWidth,pic:e.pic},null,8,["provider","index","feed","feeds","data","screenWidth","pic"])])))),128))])):((0,i.wg)(),(0,i.iD)("div",w,[(0,i.Wm)(y,{onClick:s[2]||(s[2]=e=>f.backwardNav(g.isError)),class:"d-flex justify-content-center align-content-center p-4"},{default:(0,i.w5)((()=>[_])),_:1})]))])),(0,i.Wm)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[g.isloading||1!==g.tabNav?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i._)("h2",h,(0,o.zw)(g.topicTitle),1)])),_:1}),(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.topicData,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"d-inline-block"},[(0,i.Wm)(D,{index:t,topic:e,topicNavUrl:g.topicNavUrl,onGetRssFeeds:s=>f.getRssFeeds(g.topicNavUrl,e.url,e.title),onForwardNav:s[3]||(s[3]=e=>f.forwardNav())},null,8,["index","topic","topicNavUrl","onGetRssFeeds"])])))),128))])]))])),_:1}),(0,i.Wm)(T,{onBackwardNav:s[4]||(s[4]=e=>f.backwardNav()),data:g.data,tabNav:g.tabNav,isError:g.isError},null,8,["data","tabNav","isError"]),(0,i.Wm)(S,{onBackwardNav:s[5]||(s[5]=e=>f.backwardNav(g.isError)),data:g.data,tabNav:g.tabNav,isloading:g.isloading,sources:g.sources,isError:g.isError,topicData:g.topicData||[],feeds:e.feeds||[]},null,8,["data","tabNav","isloading","sources","isError","topicData","feeds"])],2),(0,i._)("div",{class:(0,o.C_)({"col-2":g.screenWidth>=1200,"":g.screenWidth<1200})},null,2)])])}var f=t(6265),b=t.n(f),v=t(4802);const k=v.Z.sources;v.Z.NewSource("Investing.com",null,"in-logo.jpg",[["Economy News","https://www.investing.com/rss/news_14.rss"],["Economic Indicators News","https://www.investing.com/rss/news_95.rss"],["Stock Market News","https://www.investing.com/rss/news_25.rss"],["ETF News","https://www.investing.com/rss/stock_ETFs.rss"],["Foreign Exchange News","https://www.investing.com/rss/news_1.rss"]]),v.Z.NewSource("Business Wire",null,"bw-logo.png",[["Dividend News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9ZVA==&_gl=1*z96yy4*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MjAxOS4wLjAuMA.."],["IPO News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9YXQ==&_gl=1*oudbjk*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjAuMTY2NjA4MTU2My4wLjAuMA.."],["Merger/Acquisition News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEFtRWA==&_gl=1*ewsir6*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQxMi4wLjAuMA.."],["Share Issue News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXA==&_gl=1*ji7i1m*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQzNC4wLjAuMA.."],["Stock Split News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXg==&_gl=1*1ysdfcb*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0MS4wLjAuMA.."],["Stock Sale/Buyback News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXw==&_gl=1*11xwt23*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0NS4wLjAuMA.."],["SPAC News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJaF1hWXw==&_gl=1*9mr1pq*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ1MS4wLjAuMA.."],["Closed End Fund News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtYXg==&_gl=1*mau74y*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MTczMC4wLjAuMA.."]]),v.Z.NewSource("GlobeNewswire",null,"gnw.jpg",[["Dividend Reports","https://www.globenewswire.com/RssFeed/subjectcode/12-Dividend%20Reports%20and%20Estimates/feedTitle/GlobeNewswire%20-%20Dividend%20Reports%20and%20Estimates"],["Company Announcement","https://www.globenewswire.com/RssFeed/subjectcode/9-Company%20Announcement/feedTitle/GlobeNewswire%20-%20Company%20Announcement"],["Conference Calls","https://www.globenewswire.com/RssFeed/subjectcode/89-Conference%20Calls%202f%20Webcasts/feedTitle/GlobeNewswire%20-%20Conference%20Calls,%20Webcasts"],["Initial Public Offerings","https://www.globenewswire.com/RssFeed/subjectcode/21-Initial%20Public%20Offerings/feedTitle/GlobeNewswire%20-%20Initial%20Public%20Offerings"],["Earnings Releases","https://www.globenewswire.com/RssFeed/subjectcode/13-Earnings%20Releases%20And%20Operating%20Results/feedTitle/GlobeNewswire%20-%20Earnings%20Releases%20And%20Operating%20Results"],["Directors And Officers","https://www.globenewswire.com/RssFeed/subjectcode/11-Directors%20And%20Officers/feedTitle/GlobeNewswire%20-%20Directors%20And%20Officers"],["Insider's Buy & Sell","https://www.globenewswire.com/RssFeed/subjectcode/22-Insider%2027s%20Buy%202fSell/feedTitle/GlobeNewswire%20-%20Insider%20s%20Buy,%20Sell"],["Interim Information","https://www.globenewswire.com/RssFeed/subjectcode/66-Interim%20Information/feedTitle/GlobeNewswire%20-%20Interim%20Information"],["Funds Information","https://www.globenewswire.com/RssFeed/subjectcode/80-Investment%20Fund%20Information/feedTitle/GlobeNewswire%20-%20Investment%20Fund%20Information"],["Net Asset Value","https://www.globenewswire.com/RssFeed/subjectcode/62-Net%20Asset%20Value/feedTitle/GlobeNewswire%20-%20Net%20Asset%20Value"],["Press Releases","https://www.globenewswire.com/RssFeed/subjectcode/72-Press%20Releases/feedTitle/GlobeNewswire%20-%20Press%20Releases"]]),v.Z.NewSource("Finance Asia",null,"fa-logo.jpg",null,["Markets","Debt","Equity","Debt-Research"],["https://www.financeasia.com/rss/category/","item.toLowerCase()",""]),v.Z.NewSource("Trading Economics",null,"te-logo.jfif",null,["Consumer Price Index CPI","GDP Annual Growth Rate","Core Inflation Rate","Unemployment Change","Retail Sales MoM","NonFarm Payrolls Private","Interest Rate","Weapons Sales"],["https://tradingeconomics.com/rss/news.aspx?i=","item.toLowerCase().replaceAll(' ','+')",""]),v.Z.NewSource("Seeking Alpha","https://seekingalpha.com/samw/static/images/favicon-32x32.png","sa-logo.webp",[["Market Currents","https://seekingalpha.com/market_currents.xml"],["Editors Picks","https://seekingalpha.com/tag/editors-picks.xml"],["IPO Analysis","https://seekingalpha.com/tag/ipo-analysis.xml"],["Transcripts","https://seekingalpha.com/sector/transcripts.xml"],["Wall St Breakfast","https://seekingalpha.com/tag/wall-st-breakfast.xml"],["ETF Portfolio Strategy","https://seekingalpha.com/tag/etf-portfolio-strategy.xml"]]),v.Z.NewSource("CSS-Tricks",null,"csst-logo.jpg",[["CSS-Tricks","https://css-tricks.com/feed/"]]),v.Z.NewSource("freeCodeCamp","https://cdn.freecodecamp.org/universal/favicons/favicon.ico","fcc-logo.png",null,["Accessibility","Algorithms","Android-App-Development","Angular","Animation","API","Application-Security","ASCII","Assembly-Language","Augmented-Reality","Authentication","Automation","AWS","Axios","Azure","Back-End-Development","Bash","Beginner","Beginners-Guide","Big-O-Notation","Binary-Search","Blazor","Blockchain","Blogging","Bootstrap","Bots","Branding","Business","C-2","C-Programming","Career-Advice","Career-Change","Certification","Charts","Chrome-Extension","Class","Closure","Cloud-Computing","Coding","Coding-Challenge","Coding-Interview","Command-Line","Community","Compilers","Computer-Networking","Computer-Science","Containers","CRUD","Cryptography","CSharp","CSS","CSS-Grid","Cybersecurity","D3","Data-Analysis","Data-Analytics","Data-Science","Data-Structures","Data-Visualization","Database","Debugging","Deno","Design","Developer-Tools","Devops","Django","Docker","DOM","Domain-Names","ECommerce","Email","Encryption","Error","Error-Handling","Ethical-Hacking","Excel","FastAPI","Figma","Firebase","Flexbox","Flutter","Framework","freeCodeCamp","Freecodecamp-Curriculum","Freelancing","Front-End-Development","Full-Stack","Functional-Programming","Git","Github","Gitpod","Go","Golang","Google","Google-Cloud-Platform","Google-Sheets","Hacking","Hacktoberfest","Hardware","Heroku","HTML","HTML5","HTTP","Image-Compression","Information-Security","Infrastructure-as-Code","Interview-Tips","Interviews","IOS","Java","Javascript","Jenkins","Job-Hunting","Julia","Junior-Developer","Kotlin","Kubernetes","Laravel","Learning-To-Code","Life-Lessons","Linux","Low-Code","MAC","Machine-Learning","Markdown","Math","Microservices","Microsoft","NestJS","Network-Engineering","Neural-Networks","NextJS","Node","Node-JS","NodeJS","NPM","Object-Oriented-Programming","Online-Courses","Open-Source","OpenGL","Pair-Programming","PHP","Portfolio","Postgres","Problem-Solving","Product-Design","Productivity","Programming","Programming-Languages","Project-Management","Projects","PWA","Python","Pytorch","Quality-Assurance","React","React-Context","React-Hooks","React-Router","ReactJS","Redis","Redux","Regex","Remote-Work","Responsive-Design","Rest-API","Resume","Rust","SASS","Security","Self-Improvement","SEO","Serverless","Smart-Contracts","Software","Software-Architecture","Software-Development","Software-Engineering","Software-Testing","Solana","SQL","Startup","Storage","Svelte","SVG","Swift","Systems","Systems-Engineering","Tableau","Tailwind","Tech","Technical-Writing","Technology","Tensorflow","Terraform","Test-Driven-Development","Testing","Typescript","UI-Design","Unicode","University","Unreal-Engine","User-Experience","Vim","Visual-Basic","VSCode","Vue","Web","Web-Design","Web-Development","Web-Performance","Web-Scraping","Web-Security","Web3","WebGPU","Windows","Windows-10","Wordpress","XML","Youtube"],["https://www.freecodecamp.org/news/tag/","item.toLowerCase()","/rss"]),v.Z.NewSource("Reuters",null,"reuters-logo.png",[["Market Impact","https://www.reutersagency.com/feed/?best-customer-impacts=market-impact&post_type=best"],["Energy & Commodities","https://www.reutersagency.com/feed/?best-sectors=commodities-energy&post_type=best"],["Economy","https://www.reutersagency.com/feed/?best-sectors=economy&post_type=best"],["Equities","https://www.reutersagency.com/feed/?best-sectors=equities&post_type=best"],["FX & Fixed Income","https://www.reutersagency.com/feed/?best-sectors=foreign-exchange-fixed-income&post_type=best"]]),v.Z.NewSource("CNN",null,"cnn-logo.png",[["CNN World","http://rss.cnn.com/rss/cnn_latest.rss"]]),v.Z.NewSource("CNBC",null,"cnbc-logo.png",[["Investing News","https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839069"]]),v.Z.NewSource("Yahoo Finance",null,"yf-logo.jpg",[["Finance News","https://finance.yahoo.com/news/rssindex"]]),v.Z.NewSource("MarketWatch",null,"mw-logo.png",[["Real-time Headlines","http://feeds.marketwatch.com/marketwatch/realtimeheadlines"]]),v.Z.NewSource("Zacks",null,"zk-logo.png",[["Press Release","https://scr.zacks.com/rss/pressrelease.aspx"]]),v.Z.NewSource("S&P Global","https://www.spglobal.com/_assets/images/icons/SPG_favicon_wht_32x32.ico","sp-logo.png",[["Corporate News","https://www.spglobal.com/spdji/en/rss/rss-details/?rssFeedName=corporate-news"]]),v.Z.NewSource("WSJ",null,"wsj-logo.png",[["Markets","https://feeds.a.dj.com/rss/RSSMarketsMain.xml"]]),v.Z.NewSource("The EurAsian Times",null,"eat-logo.png",[["Latest News","https://eurasiantimes.com/feed/"]]),v.Z.NewSource("DefenseNews","https://www.defensenews.com/pf/resources/img/favicons/def/favicon-32x32.png?d=104","dn-logo.jpg",null,["Global","Air","Land","Naval","Space","Unmanned","Industry"],["https://www.defensenews.com/arc/outboundfeeds/rss/category/","item.toLowerCase()","/?outputType=xml"]),v.Z.NewSource("DefenseTalk","https://feedburner.com/favicon.ico","dt-logo.jpeg",null,["DefenseNews","Army News","Defense Security","Defense Technology","Missiles Bombs","WMD News","NavyNews","DronesNews"],["https://feeds.feedburner.com/","item.toLowerCase().replaceAll(' ','-')",""]),v.Z.NewSource("Shephard Media",null,"sm-logo.png",[["Latest Articles","https://www.shephardmedia.com/news/feed/"],["Naval Warfare","https://www.shephardmedia.com/news/naval-warfare/feed/"],["Land Warfare","https://www.shephardmedia.com/news/landwarfareintl/feed/"],["Air Warfare","https://www.shephardmedia.com/news/air-warfare/feed/"],["Defence Notes","https://www.shephardmedia.com/news/defence-notes/feed/"],["Defence Helicopter","https://www.shephardmedia.com/news/defence-helicopter/feed/"],["Military Logistics","https://www.shephardmedia.com/news/mil-log/feed/"],["Special Operations","https://www.shephardmedia.com/news/special-operations/feed/"],["Uncrewed Vehicles","https://www.shephardmedia.com/news/uv-online/feed/"]]),v.Z.NewSource("Janes",null,"janes-logo.png",[["Janes News","https://www.janes.com/feeds/news"]]),v.Z.NewSource("GlobalSecurity.org",null,"gs-logo.png",[["Defence News","https://www.globalsecurity.org/globalsecurity-org.xml"]]),v.Z.NewSource("The Diplomat",null,"td-logo.png",[["Current Affairs","https://thediplomat.com/feed/"]]),v.Z.NewSource("Science Daily",null,"scd-logo.jpg",[["All News","https://www.sciencedaily.com/rss/all.xml"],["Top Science","https://www.sciencedaily.com/rss/top/science.xml"],["Top Technology","https://www.sciencedaily.com/rss/top/technology.xml"]]),v.Z.NewSource("SpaceNews","https://spacenews.com/wp-content/themes/spacenews/favicon-32x32.png","spn-logo.png",[["SpaceNews","https://spacenews.com/feed/"]]);var N=k;const y=e=>((0,i.dD)("data-v-f598abfe"),e=e(),(0,i.Cn)(),e),D=(0,i.uE)('<h1 class="text-secondary mb-1" data-v-f598abfe><strong data-v-f598abfe>RSSFeeder<sup data-v-f598abfe>++</sup></strong></h1><label class="text-secondary mb-4" data-v-f598abfe><strong data-v-f598abfe> Powered by <i class="fa-brands fa-vuejs" data-v-f598abfe></i>  <i class="fa-solid fa-rss" data-v-f598abfe></i>  <i class="fa-brands fa-node-js" data-v-f598abfe></i></strong></label>',2),T=y((()=>(0,i._)("div",{class:"alert alert-dark",role:"alert"},[(0,i.Uk)(" Add new feed? Submit a "),(0,i._)("a",{target:"_blank",class:"issue btn-sm btn-secondary",href:"/issues"},"ticket")],-1))),S={key:0,href:"https://github.com/rubanero14/rubanero14-Convert-XML-to-JSON-Guide/blob/master/src",class:"btn btn-outline-secondary mb-lg-3 w-100",target:"_blank"},x=y((()=>(0,i._)("i",{class:"bi bi-code-slash"},null,-1))),C=["disabled"],j=y((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1))),E=y((()=>(0,i._)("hr",{class:"my-3",size:"5",noshade:""},null,-1)));function A(e,s,t,r,a,o){return(0,i.wg)(),(0,i.iD)("div",null,[D,T,0===this.tabNav&&this.showSourceCode?((0,i.wg)(),(0,i.iD)("a",S,[x,(0,i.Uk)(" Source Code")])):(0,i.kq)("",!0),this.tabNav>0?((0,i.wg)(),(0,i.iD)("button",{key:1,"data-cy":"actions-back-button",onClick:s[0]||(s[0]=s=>e.$emit("backwardNav",this.isError)),class:"btn btn-secondary w-100",disabled:this.isloading},[j,(0,i.Uk)(" Back")],8,C)):(0,i.kq)("",!0),E])}var M={props:["tabNav","isloading","isError","showSourceCode","devActivationCount"]},F=t(89);const W=(0,F.Z)(M,[["render",A],["__scopeId","data-v-f598abfe"]]);var O=W;const R=e=>((0,i.dD)("data-v-119946f4"),e=e(),(0,i.Cn)(),e),P={key:0,class:"text-danger"},L={key:0},I={key:1,class:"row"},U={class:"col-12"},q={class:"text-danger mb-3"},Z=R((()=>(0,i._)("img",{class:"err",src:"err.png"},null,-1))),G=R((()=>(0,i._)("figcaption",{class:"mb-3"},[(0,i.Uk)("Figure 1 - Click "),(0,i._)("span",null,"Enable Access"),(0,i.Uk)(" button below to open this page")],-1))),Y=R((()=>(0,i._)("ol",{type:"1",class:"text-start text-secondary"},[(0,i._)("li",null,[(0,i.Uk)("Click "),(0,i._)("strong",{class:"text-success"},"Enable Access"),(0,i.Uk)(" button below")]),(0,i._)("li",null,[(0,i.Uk)("When new window pops up, click "),(0,i._)("strong",{class:"text-success"},"Request temporary access to the demo server"),(0,i.Uk)(" button as per figure above.")]),(0,i._)("li",null,[(0,i.Uk)("Close that window and back to "),(0,i._)("span",{class:"text-secondary"},[(0,i._)("strong",null,"RSS Feed")]),(0,i.Uk)(" page and start browsing for articles")])],-1))),z={class:"col-12"},B=R((()=>(0,i._)("i",{class:"bi bi-hdd-rack"},null,-1)));function J(e,s,t,a,n,c){return(0,i.wg)(),(0,i.j4)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[this.isError&&2===this.tabNav?((0,i.wg)(),(0,i.iD)("div",P,[(0,i.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[this.data.includes("403")?((0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("div",U,[(0,i._)("h2",q,(0,o.zw)(this.data.replace(",","!")),1),Z,G,Y]),(0,i._)("div",z,[(0,i._)("a",{onClick:s[0]||(s[0]=s=>e.$emit("backwardNav")),href:"https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=01a082fe9409ff8c6c2e76a853281642569c12198c0358fadbbe4a03321d2fd7",class:"btn btn-outline-success w-100",target:"_blank"},[B,(0,i.Uk)(" Enable Access ")])])])):((0,i.wg)(),(0,i.iD)("p",L,(0,o.zw)(this.data)+" Try reloading again...",1))])),_:1})])):(0,i.kq)("",!0)])),_:1})}var H={props:["data","tabNav","isError"]};const Q=(0,F.Z)(H,[["render",J],["__scopeId","data-v-119946f4"]]);var $=Q;const X=e=>((0,i.dD)("data-v-60966102"),e=e(),(0,i.Cn)(),e),K=X((()=>(0,i._)("hr",{class:"my-3",size:"5",noshade:""},null,-1))),V=["disabled"],ee=X((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1))),se={class:"full-length"},te=X((()=>(0,i._)("strong",null,[(0,i._)("a",{target:"_blank",class:"text-secondary ms-1",style:{"text-decoration":"none"},href:"/"},"Raj")],-1)));function re(e,s,t,r,a,n){return(0,i.wg)(),(0,i.iD)(i.HY,null,[K,this.tabNav>0&&n.showLowerBackBtn()?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:s[0]||(s[0]=s=>e.$emit("backwardNav","isError")),class:"btn btn-secondary w-100 mb-4",disabled:this.isloading},[ee,(0,i.Uk)(" Back")],8,V)):(0,i.kq)("",!0),(0,i._)("footer",se,[(0,i.Uk)(" © "+(0,o.zw)((new Date).getFullYear())+" by ",1),te])],64)}var ie={props:["tabNav","isloading","isError","topicData","feeds","sources"],methods:{showLowerBackBtn(){return 1===this.tabNav?void 0!==this.topicData&&this.topicData.length>4:2===this.tabNav?void 0!==this.topicData&&this.feeds.length>4:void 0}}};const ae=(0,F.Z)(ie,[["render",re],["__scopeId","data-v-60966102"]]);var oe=ae;const ne=["data-cy"],ce={class:"d-contents"},le=["src"];function de(e,s,t,a,n,c){const l=(0,i.up)("card-component"),d=(0,i.up)("center");return(0,i.wg)(),(0,i.j4)(r.uT,{appear:"",key:this.index,name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:(0,o.j5)({"--i":this.index})},{default:(0,i.w5)((()=>[(0,i._)("a",{"data-cy":`actions-source-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>e.$emit("forwardNav",t.source))},[(0,i.Wm)(l,{class:"logo p-0 mb-3 mx-2"},{default:(0,i.w5)((()=>[(0,i._)("div",ce,[(0,i._)("img",{class:"logo",src:t.source.logo,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,le)])])),_:1})],8,ne)])),_:1},8,["style"])])),_:1})}const pe={class:"card"};function ue(e,s){return(0,i.wg)(),(0,i.iD)("div",pe,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}const we={},_e=(0,F.Z)(we,[["render",ue],["__scopeId","data-v-3b9f9b40"]]);var me=_e,he={props:["source","isloading","tabNav","index"],components:{CardComponent:me}};const ge=(0,F.Z)(he,[["render",de],["__scopeId","data-v-620fab78"]]);var fe=ge;const be={key:0,class:"text-center spinner-border text-secondary",role:"status"};function ve(e,s,t,a,o,n){return(0,i.wg)(),(0,i.j4)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,i.w5)((()=>[this.isloading&&!this.isError?((0,i.wg)(),(0,i.iD)("div",be)):(0,i.kq)("",!0)])),_:1})}var ke={props:["isloading","isError"]};const Ne=(0,F.Z)(ke,[["render",ve]]);var ye=Ne;const De=e=>((0,i.dD)("data-v-5a13f6f0"),e=e(),(0,i.Cn)(),e),Te=["data-cy","href"],Se={key:0,class:"row"},xe={class:"col-12"},Ce=["src"],je={class:"p-3"},Ee={class:"row"},Ae={class:"col-12"},Me=["innerHTML"],Fe={key:0,class:"col-12"},We=De((()=>(0,i._)("hr",null,null,-1))),Oe=["innerHTML"],Re={class:"col-12"},Pe=De((()=>(0,i._)("hr",null,null,-1))),Le={class:"d-flex justify-content-between align-contents-center"},Ie={key:0,class:"time d-flex align-self-end text-secondary mb-0"},Ue=["src"],qe={class:"d-flex"},Ze={key:0},Ge=["src"],Ye={class:"w-100 d-flex justify-content-center align-items-center p-3"},ze={class:"row"},Be={class:"col-12"},Je=["innerHTML"],He={key:0,class:"col-12"},Qe=De((()=>(0,i._)("hr",null,null,-1))),$e=["innerHTML"],Xe=["innerHTML"],Ke=De((()=>(0,i._)("hr",{class:"my-0"},null,-1))),Ve={class:"d-flex justify-content-between align-content-end p-3"},es={key:0,class:"time d-flex align-self-end text-secondary mb-0"},ss=["src"];function ts(e,s,t,a,n,c){const l=(0,i.up)("card-component"),d=(0,i.up)("center");return(0,i.wg)(),(0,i.j4)(r.uT,{key:this.index,appear:"",name:"fade-articles",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:(0,o.j5)({"--j":this.index})},{default:(0,i.w5)((()=>[(0,i._)("a",{"data-cy":`actions-article-${t.index}`,class:"title",href:t.feed.link.toString(),target:"_blank"},[t.screenWidth<=768?((0,i.wg)(),(0,i.j4)(l,{key:0,class:"mb-4"},{default:(0,i.w5)((()=>[c.titlePic(t.index,t.feeds,t.data)?((0,i.wg)(),(0,i.iD)("div",Se,[(0,i._)("div",xe,[(0,i._)("img",{class:"banner",src:c.titlePic(t.index,t.feeds,t.data)},null,8,Ce)])])):(0,i.kq)("",!0),(0,i._)("div",je,[(0,i._)("div",Ee,[(0,i._)("div",Ae,[(0,i._)("h3",{class:"title text-center text-secondary mb-0",innerHTML:t.feed.title},null,8,Me)]),c.articleDescription(t.index,t.feeds,t.data)?((0,i.wg)(),(0,i.iD)("div",Fe,[We,(0,i._)("em",null,[(0,i._)("p",{class:"description text-secondary mb-0",innerHTML:c.articleInjector()},null,8,Oe)])])):(0,i.kq)("",!0),(0,i._)("div",Re,[Pe,(0,i._)("div",Le,[c.date()?((0,i.wg)(),(0,i.iD)("aside",Ie,[(0,i._)("em",null,[(0,i._)("strong",null,(0,o.zw)(c.date(t.index))+" ago · "+(0,o.zw)(this.provider),1)])])):(0,i.kq)("",!0),t.pic?((0,i.wg)(),(0,i.iD)("img",{key:1,class:"img",src:t.pic,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,Ue)):(0,i.kq)("",!0)])])])])])),_:1})):((0,i.wg)(),(0,i.j4)(l,{key:1,class:"mb-4"},{default:(0,i.w5)((()=>[(0,i._)("div",qe,[c.titlePic(t.index,t.feeds,t.data)?((0,i.wg)(),(0,i.iD)("div",Ze,[(0,i._)("img",{class:"desktop",src:c.titlePic(t.index,t.feeds,t.data)},null,8,Ge)])):(0,i.kq)("",!0),(0,i._)("div",Ye,[(0,i._)("div",ze,[(0,i._)("div",Be,[(0,i._)("h3",{class:"title text-center text-secondary mb-0",innerHTML:t.feed.title},null,8,Je)]),c.articleDescription(t.index,t.feeds,t.data)?((0,i.wg)(),(0,i.iD)("div",He,[Qe,(0,i._)("em",null,[t.screenWidth>=1200?((0,i.wg)(),(0,i.iD)("p",{key:0,class:"description text-secondary mb-0",innerHTML:c.articleInjector()},null,8,$e)):t.screenWidth>=768&&t.screenWidth<1200?((0,i.wg)(),(0,i.iD)("p",{key:1,class:"description text-secondary mb-0",innerHTML:c.articleInjector()},null,8,Xe)):(0,i.kq)("",!0)])])):(0,i.kq)("",!0)])])]),Ke,(0,i._)("div",Ve,[c.date()?((0,i.wg)(),(0,i.iD)("aside",es,[(0,i._)("em",null,[(0,i._)("strong",null,(0,o.zw)(c.date(t.index))+" ago · "+(0,o.zw)(this.provider),1)])])):(0,i.kq)("",!0),t.pic?((0,i.wg)(),(0,i.iD)("img",{key:1,class:"img",src:t.pic,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,ss)):(0,i.kq)("",!0)])])),_:1}))],8,Te)])),_:1},8,["style"])])),_:1})}var rs={props:["index","feed","data","feeds","screenWidth","pic","provider"],components:{CardComponent:me},data(){return{articleDesktop:"",articleMobile:""}},methods:{date(){return this.rssMode=Object.keys(this.data).includes("rss")?"pubDate":"dc:date",v.Z.ElapsedTime(this.feeds[0][this.rssMode])},titlePic(e,s,t){return v.Z.titlePic(e,s,t)},articleDescription(e,s,t){return v.Z.articleDescription(e,s,t)},articleInjector(){return this.screenWidth>=1200?this.articleDesktop=this.articleDescription(this.index,this.feeds,this.data).toString().substr(0,200).replace(": ","")+"..."+'<span class="text-primary">read more</span>':this.screenWidth>=768&&this.screenWidth<1200?this.articleDesktop=this.articleDescription(this.index,this.feeds,this.data).toString().substr(0,100).replace(": ","")+"..."+'<span class="text-primary">read more</span>':this.screenWidth<768?this.articleMobile=this.articleDescription(this.index,this.feeds,this.data).toString().substr(0,100).replace(": ","")+"..."+'<span class="text-primary">read more</span>':void 0}}};const is=(0,F.Z)(rs,[["render",ts],["__scopeId","data-v-5a13f6f0"]]);var as=is;const os=e=>((0,i.dD)("data-v-71c7cf81"),e=e(),(0,i.Cn)(),e),ns=["data-cy"],cs={class:"d-inline-block justify-content-center align-items-center m-0"},ls=["src"],ds=os((()=>(0,i._)("br",null,null,-1))),ps={class:"mb-2"},us={class:"text-secondary title"};function ws(e,s,t,a,n,c){const l=(0,i.up)("CardComponent"),d=(0,i.up)("center");return(0,i.wg)(),(0,i.j4)(r.uT,{key:this.index,appear:"",name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{style:(0,o.j5)({"--i":this.index})},{default:(0,i.w5)((()=>[(0,i._)("a",{"data-cy":`actions-topic-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>(e.$emit("getRssFeeds",t.topicNavUrl,t.topic.url,t.topic.title),e.$emit("forwardNav")))},[(0,i.Wm)(l,{class:"tile mb-3 mx-2 p-3"},{default:(0,i.w5)((()=>[(0,i._)("div",cs,[(0,i._)("img",{class:"favicon",src:t.topicNavUrl,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,ls),ds,(0,i._)("strong",ps,[(0,i._)("span",us,(0,o.zw)(t.topic.title),1)])])])),_:1})],8,ns)])),_:1},8,["style"])])),_:1})}var _s={props:["index","topic","topicNavUrl"],components:{CardComponent:me}};const ms=(0,F.Z)(_s,[["render",ws],["__scopeId","data-v-71c7cf81"]]);var hs=ms;const gs=t(9058);var fs={components:{HeaderComponent:O,ErrorComponent:$,FooterComponent:oe,SourcesTiles:fe,LoadingSpinner:ye,ArticlesTiles:as,TopicTiles:hs,CardComponent:me},data(){return{data:"",isloading:!1,isError:!1,rssSource:"",screenWidth:"",tabNav:0,topicData:"",topicNavUrl:"",topicTitle:"",topicTitle2:"",sources:N,devActivationCount:0}},watch:{url(){this.getRssFeeds(),this.setScreenWidth()}},mounted(){window.addEventListener("resize",this.setScreenWidth),this.setScreenWidth()},unmounted(){window.removeEventListener("resize",this.setScreenWidth)},methods:{forwardNav(e){return this.topicTitle=e.name,0===this.tabNav&&e.topics.length>1?(this.topicData=e.topics,this.topicNavUrl=e.url,this.tabNav<3?this.tabNav++:this.tabNav):0===this.tabNav&&1===e.topics.length?(this.pic=e.url,this.topicData=e.topics,this.topicNavUrl=e.topics[0].url,this.topicTitle2=e.topics[0].title,this.getRssFeeds(this.pic,this.topicNavUrl,this.topicTitle2,this.logo),this.tabNav=2):void 0},backwardNav(e){return 2===this.tabNav&&1===this.topicData.length?this.tabNav=0:e?(this.isError=!1,console.log("Iserror ",this.isError),this.tabNav=0):this.tabNav>-1?this.tabNav--:this.tabNav},setScreenWidth(){return console.log(window.innerWidth),this.screenWidth=window.innerWidth},async getRssFeeds(e,s,t){if(this.tabNav=2,this.isError=!1,this.isloading=!0,this.pic=e,this.topicTitle2=t,s.includes("tradingeconomics")||s.includes("sciencedaily")){const e=`https://cors-anywhere.herokuapp.com/${s}`;console.log("foreign proxy fires"),this.data=await b().get(e).then((e=>gs.parseStringPromise(e.data))).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}else{const e=`https://rss-feed-proxy-server.herokuapp.com/${v.Z.UrlEncoder(s)}`;console.log("own proxy fires"),this.data=await b().get(e).then((e=>e.data)).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}this.isError||(this.feeds=Object.keys(this.data).includes("rss")?this.data.rss.channel[0].item:this.data["rdf:RDF"].item,this.feedHasArticles=()=>Object.keys(this.data).includes("rss")?Object.keys(this.data.rss.channel[0]).includes("item"):Object.keys(this.data).includes("rdf:RDF")?Object.keys(this.data["rdf:RDF"]).includes("item"):void 0,this.isloading=!1)},devMode(){this.devActivationCount++,7===this.devActivationCount&&(this.showSourceCode=!0)}}};const bs=(0,F.Z)(fs,[["render",g]]);var vs=bs,ks={name:"App",components:{RSSFeed:vs}};const Ns=(0,F.Z)(ks,[["render",a]]);var ys=Ns;(0,r.ri)(ys).mount("#app")},4802:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Util}});var C_Users_Raj_Desktop_RSS_Feed_Component_rubanero14_Convert_XML_to_JSON_Guide_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2482),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);class Util{static NewSource(Name,sub,Logo,Topics,Topics2,rssUrl){const topics=[],favicon=()=>sub||`https://${Name.toLowerCase().replaceAll(" ","").replaceAll(/.com|.org/gi,"")}${Name.includes(".org")?".org":".com"}/favicon.ico`,[name,url,logo]=[Name,favicon(),Logo];return Topics2?Topics2.map((item=>{const[title,url]=[item.replaceAll("-"," "),`${rssUrl[0]}${eval(rssUrl[1])}${rssUrl[2]}`];topics.push({title:title,url:url})})):Topics.map((e=>{const[s,t]=[e[0],e[1]];topics.push({title:s,url:t})})),this.sources.push({name:name,url:url,logo:logo,topics:topics})}static UrlEncoder(e){return encodeURIComponent(e)}static ElapsedTime(e){const s=new Date(e).getTime(),t=Date.now(),r=(t-s)/1e3,i=r/60,a=i/60,o=a/24,n=o/7,c=n/4,l=c/12;return r>=1&&r<60?r.toFixed(0)+(r.toFixed(0)<2?" second":" seconds"):i>=1&&i<60?i.toFixed(0)+(i.toFixed(0)<2?" minute":" minutes"):a>=1&&a<24?a.toFixed(0)+(a.toFixed(0)<2?" hour":" hours"):o>=1&&o<7?o.toFixed(0)+(o.toFixed(0)<2?" day":" days"):n>=1&&n<4?n.toFixed(0)+(n.toFixed(0)<2?" week":" weeks"):c>=1&&c<12?c.toFixed(0)+(c.toFixed(0)<2?" month":" months"):l>=1?l.toFixed(0)+(l.toFixed(0)<2?" year":" years"):void 0}static titlePic(e,s,t){if(Object.keys(t).includes("rss")){if(Object.prototype.hasOwnProperty.call(s[e],"enclosure"))return s[e].enclosure[0].$.url;if(Object.prototype.hasOwnProperty.call(s[e],"media:group"))return s[e]["media:group"][0]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(s[e],"media:content"))return s[e]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(s[e],"description")&&s[e].description[0].includes("src="))return s[e].description[0].split('src="')[1].split('"')[0];if(Object.prototype.hasOwnProperty.call(s[e],"a10:content")&&s[e]["a10:content"][0]._.includes("url(&quot;"))return s[e]["a10:content"][0]._.split("&quot;")[1];if("The Diplomat"===s[e].title)return!1}if(Object.keys(t).includes("rdf:RDF"))return!1}static articleDescription(e,s,t){if(Object.keys(t).includes("rss")&&Object.prototype.hasOwnProperty.call(s[e],"description")){const t=0===s[e].description[0].replaceAll("\n","").replaceAll(" ","").length||s[e].description[0].includes("DefenceTalk");if(Object.prototype.hasOwnProperty.call(s[e],"description")&&!t){if(s[e].description[0].includes("</")&&!t)return s[e].description[0].replaceAll(/<[^>]*>/gi,"").trim();if(s[e].description[0]&&!t)return s[e].description[0].trim()}return!1}if(Object.keys(t).includes("rdf:RDF")&&Object.prototype.hasOwnProperty.call(s[e],"description"))return s[e].description}}(0,C_Users_Raj_Desktop_RSS_Feed_Component_rubanero14_Convert_XML_to_JSON_Guide_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(Util,"sources",[])}},__webpack_module_cache__={};function __webpack_require__(e){var s=__webpack_module_cache__[e];if(void 0!==s)return s.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(s,t,r,i){if(!t){var a=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],i=e[l][2];for(var o=!0,n=0;n<t.length;n++)(!1&i||a>=i)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[n])}))?t.splice(n--,1):(o=!1,i<a&&(a=i));if(o){e.splice(l--,1);var c=r();void 0!==c&&(s=c)}}return s}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,r,i]}}(),function(){__webpack_require__.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(s,{a:s}),s}}(),function(){__webpack_require__.d=function(e,s){for(var t in s)__webpack_require__.o(s,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};__webpack_require__.O.j=function(s){return 0===e[s]};var s=function(s,t){var r,i,a=t[0],o=t[1],n=t[2],c=0;if(a.some((function(s){return 0!==e[s]}))){for(r in o)__webpack_require__.o(o,r)&&(__webpack_require__.m[r]=o[r]);if(n)var l=n(__webpack_require__)}for(s&&s(t);c<a.length;c++)i=a[c],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return __webpack_require__.O(l)},t=self["webpackChunkrss_feed"]=self["webpackChunkrss_feed"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(5093)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.521a19a4.js.map