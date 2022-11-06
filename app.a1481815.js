(function(){"use strict";var __webpack_modules__={6068:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);const sources=[],NewSource=(Name,sub,Logo,Topics,Topics2,rssUrl)=>{const topics=[],favicon=()=>sub||`https://${Name.toLowerCase().replaceAll(" ","").replaceAll(/.com|.org/gi,"")}${Name.includes(".org")?".org":".com"}/favicon.ico`,[name,url,logo]=[Name,favicon(),Logo];return Topics2?Topics2.map((item=>{const[title,url]=[item.replaceAll("-"," "),`${rssUrl[0]}${eval(rssUrl[1])}${rssUrl[2]}`];topics.push({title:title,url:url})})):Topics.map((e=>{const[s,t]=[e[0],e[1]];topics.push({title:s,url:t})})),sources.push({name:name,url:url,logo:logo,topics:topics})};NewSource("Investing.com",null,"in-logo.jpg",[["Economy News","https://www.investing.com/rss/news_14.rss"],["Economic Indicators News","https://www.investing.com/rss/news_95.rss"],["Stock Market News","https://www.investing.com/rss/news_25.rss"],["ETF News","https://www.investing.com/rss/stock_ETFs.rss"],["Foreign Exchange News","https://www.investing.com/rss/news_1.rss"]]),NewSource("Business Wire",null,"bw-logo.png",[["Dividend News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9ZVA==&_gl=1*z96yy4*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MjAxOS4wLjAuMA.."],["IPO News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9YXQ==&_gl=1*oudbjk*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjAuMTY2NjA4MTU2My4wLjAuMA.."],["Merger/Acquisition News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEFtRWA==&_gl=1*ewsir6*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQxMi4wLjAuMA.."],["Share Issue News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXA==&_gl=1*ji7i1m*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQzNC4wLjAuMA.."],["Stock Split News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXg==&_gl=1*1ysdfcb*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0MS4wLjAuMA.."],["Stock Sale/Buyback News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXw==&_gl=1*11xwt23*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0NS4wLjAuMA.."],["SPAC News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJaF1hWXw==&_gl=1*9mr1pq*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ1MS4wLjAuMA.."],["Closed End Fund News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtYXg==&_gl=1*mau74y*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MTczMC4wLjAuMA.."]]),NewSource("GlobeNewswire",null,"gnw.jpg",[["Dividend Reports","https://www.globenewswire.com/RssFeed/subjectcode/12-Dividend%20Reports%20and%20Estimates/feedTitle/GlobeNewswire%20-%20Dividend%20Reports%20and%20Estimates"],["Company Announcement","https://www.globenewswire.com/RssFeed/subjectcode/9-Company%20Announcement/feedTitle/GlobeNewswire%20-%20Company%20Announcement"],["Conference Calls","https://www.globenewswire.com/RssFeed/subjectcode/89-Conference%20Calls%202f%20Webcasts/feedTitle/GlobeNewswire%20-%20Conference%20Calls,%20Webcasts"],["Initial Public Offerings","https://www.globenewswire.com/RssFeed/subjectcode/21-Initial%20Public%20Offerings/feedTitle/GlobeNewswire%20-%20Initial%20Public%20Offerings"],["Earnings Releases","https://www.globenewswire.com/RssFeed/subjectcode/13-Earnings%20Releases%20And%20Operating%20Results/feedTitle/GlobeNewswire%20-%20Earnings%20Releases%20And%20Operating%20Results"],["Directors And Officers","https://www.globenewswire.com/RssFeed/subjectcode/11-Directors%20And%20Officers/feedTitle/GlobeNewswire%20-%20Directors%20And%20Officers"],["Insider's Buy & Sell","https://www.globenewswire.com/RssFeed/subjectcode/22-Insider%2027s%20Buy%202fSell/feedTitle/GlobeNewswire%20-%20Insider%20s%20Buy,%20Sell"],["Interim Information","https://www.globenewswire.com/RssFeed/subjectcode/66-Interim%20Information/feedTitle/GlobeNewswire%20-%20Interim%20Information"],["Funds Information","https://www.globenewswire.com/RssFeed/subjectcode/80-Investment%20Fund%20Information/feedTitle/GlobeNewswire%20-%20Investment%20Fund%20Information"],["Net Asset Value","https://www.globenewswire.com/RssFeed/subjectcode/62-Net%20Asset%20Value/feedTitle/GlobeNewswire%20-%20Net%20Asset%20Value"],["Press Releases","https://www.globenewswire.com/RssFeed/subjectcode/72-Press%20Releases/feedTitle/GlobeNewswire%20-%20Press%20Releases"]]),NewSource("Finance Asia",null,"fa-logo.jpg",null,["Markets","Debt","Equity","Debt-Research"],["https://www.financeasia.com/rss/category/","item.toLowerCase()",""]),NewSource("Trading Economics",null,"te-logo.jfif",null,["Consumer Price Index CPI","GDP Annual Growth Rate","Core Inflation Rate","Unemployment Change","Retail Sales MoM","NonFarm Payrolls Private","Interest Rate","Weapons Sales"],["https://tradingeconomics.com/rss/news.aspx?i=","item.toLowerCase().replaceAll(' ','+')",""]),NewSource("Seeking Alpha","https://seekingalpha.com/samw/static/images/favicon-32x32.png","sa-logo.webp",[["Market Currents","https://seekingalpha.com/market_currents.xml"],["Editors Picks","https://seekingalpha.com/tag/editors-picks.xml"],["IPO Analysis","https://seekingalpha.com/tag/ipo-analysis.xml"],["Transcripts","https://seekingalpha.com/sector/transcripts.xml"],["Wall St Breakfast","https://seekingalpha.com/tag/wall-st-breakfast.xml"],["ET-portfolio-strategy","https://seekingalpha.com/tag/etf-portfolio-strategy.xml"]]),NewSource("CSS-Tricks",null,"csst-logo.jpg",[["CSS-Tricks","https://css-tricks.com/feed/"]]),NewSource("freeCodeCamp","https://cdn.freecodecamp.org/universal/favicons/favicon.ico","fcc-logo.png",null,["Accessibility","Algorithms","Android-App-Development","Angular","Animation","API","Application-Security","ASCII","Assembly-Language","Augmented-Reality","Authentication","Automation","AWS","Axios","Azure","Back-End-Development","Bash","Beginner","Beginners-Guide","Big-O-Notation","Binary-Search","Blazor","Blockchain","Blogging","Bootstrap","Bots","Branding","Business","C-2","C-Programming","Career-Advice","Career-Change","Certification","Charts","Chrome-Extension","Closure","Cloud-Computing","Coding","Coding-Challenge","Coding-Interview","Command-Line","Community","Compilers","Computer-Networking","Computer-Science","Containers","CRUD","Cryptography","CSharp","CSS","CSS-Grid","Cybersecurity","D3","Data-Analysis","Data-Analytics","Data-Science","Data-Structures","Data-Visualization","Database","Debugging","Deno","Design","Developer-Tools","Devops","Django","Docker","DOM","Domain-Names","ECommerce","Email","Encryption","Error","Error-Handling","Ethical-Hacking","Excel","FastAPI","Figma","Firebase","Flexbox","Flutter","Framework","freeCodeCamp","Freecodecamp-Curriculum","Freelancing","Front-End-Development","Full-Stack","Functional-Programming","Git","Github","Gitpod","Go","Golang","Google","Google-Cloud-Platform","Google-Sheets","Hacking","Hacktoberfest","Hardware","Heroku","HTML","HTML5","HTTP","Image-Compression","Information-Security","Infrastructure-as-Code","Interview-Tips","Interviews","IOS","Java","Javascript","Jenkins","Job-Hunting","Julia","Junior-Developer","Kotlin","Kubernetes","Laravel","Learning-To-Code","Life-Lessons","Linux","Low-Code","MAC","Machine-Learning","Markdown","Math","Microservices","Microsoft","NestJS","Network-Engineering","Neural-Networks","Nextjs","Node","Node-JS","NPM","Object-Oriented-Programming","Online-Courses","Open-Source","OpenGL","Pair-Programming","PHP","Portfolio","Postgres","Problem-Solving","Product-Design","Productivity","Programming","Programming-Languages","Project-Management","Projects","Python","Pytorch","Quality-Assurance","React","React-Context","React-Hooks","React-Router","ReactJS","Redis","Redux","Regex","Remote-Work","Responsive-Design","Rest-API","Resume","Rust","SASS","Security","Self-Improvement","SEO","Serverless","Smart-Contracts","Software","Software-Architecture","Software-Development","Software-Engineering","Software-Testing","Solana","SQL","Startup","Storage","Svelte","SVG","Swift","Systems","Systems-Engineering","Tableau","Tailwind","Tech","Technical-Writing","Technology","Tensorflow","Terraform","Test-Driven-Development","Testing","Typescript","UI-Design","Unicode","University","Unreal-Engine","User-Experience","Vim","Visual-Basic","VSCode","Vue","Web","Web-Design","Web-Development","Web-Performance","Web-Scraping","Web-Security","Web3","WebGPU","Windows","Windows-10","Wordpress","XML","Youtube"],["https://www.freecodecamp.org/news/tag/","item.toLowerCase()","/rss"]),NewSource("Reuters",null,"reuters-logo.png",[["Market Impact","https://www.reutersagency.com/feed/?best-customer-impacts=market-impact&post_type=best"],["Energy & Commodities","https://www.reutersagency.com/feed/?best-sectors=commodities-energy&post_type=best"],["Economy","https://www.reutersagency.com/feed/?best-sectors=economy&post_type=best"],["Equities","https://www.reutersagency.com/feed/?best-sectors=equities&post_type=best"],["FX & Fixed Income","https://www.reutersagency.com/feed/?best-sectors=foreign-exchange-fixed-income&post_type=best"]]),NewSource("CNN",null,"cnn-logo.png",[["CNN World","http://rss.cnn.com/rss/cnn_latest.rss"]]),NewSource("CNBC",null,"cnbc-logo.png",[["Investing News","https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839069"]]),NewSource("Yahoo Finance",null,"yf-logo.jpg",[["Finance News","https://finance.yahoo.com/news/rssindex"]]),NewSource("MarketWatch",null,"mw-logo.png",[["Real-time Headlines","http://feeds.marketwatch.com/marketwatch/realtimeheadlines"]]),NewSource("Zacks",null,"zk-logo.png",[["Press Release","https://scr.zacks.com/rss/pressrelease.aspx"]]),NewSource("S&P Global","https://www.spglobal.com/_assets/images/icons/SPG_favicon_wht_32x32.ico","sp-logo.png",[["Corporate News","https://www.spglobal.com/spdji/en/rss/rss-details/?rssFeedName=corporate-news"]]),NewSource("WSJ",null,"wsj-logo.png",[["Markets","https://feeds.a.dj.com/rss/RSSMarketsMain.xml"]]),NewSource("The EurAsian Times",null,"eat-logo.png",[["Latest News","https://eurasiantimes.com/feed/"]]),NewSource("DefenseNews","https://www.defensenews.com/pf/resources/img/favicons/def/favicon-32x32.png?d=104","dn-logo.jpg",null,["Global","Air","Land","Naval","Space","Unmanned","Industry"],["https://www.defensenews.com/arc/outboundfeeds/rss/category/","item.toLowerCase()","/?outputType=xml"]),NewSource("DefenseTalk","https://feedburner.com/favicon.ico","dt-logo.jpeg",null,["Defense News","Defense Security","Defense Technology","Missiles Bombs","Nuclear & WMD News","Navy News","Drones News"],["https://feeds.feedburner.com/","item.toLowerCase().replaceAll(' ','')",""]),NewSource("Shephard Media",null,"sm-logo.png",[["Latest Articles","https://www.shephardmedia.com/news/feed/"],["Naval Warfare","https://www.shephardmedia.com/news/naval-warfare/feed/"],["Land Warfare","https://www.shephardmedia.com/news/landwarfareintl/feed/"],["Air Warfare","https://www.shephardmedia.com/news/air-warfare/feed/"],["Defence Notes","https://www.shephardmedia.com/news/defence-notes/feed/"],["Defence Helicopter","https://www.shephardmedia.com/news/defence-helicopter/feed/"],["Military Logistics","https://www.shephardmedia.com/news/mil-log/feed/"],["Special Operations","https://www.shephardmedia.com/news/special-operations/feed/"],["Uncrewed Vehicles","https://www.shephardmedia.com/news/uv-online/feed/"]]),NewSource("Janes",null,"janes-logo.png",[["Janes News","https://www.janes.com/feeds/news"]]),NewSource("GlobalSecurity.org",null,"gs-logo.png",[["Defence News","https://www.globalsecurity.org/globalsecurity-org.xml"]]),NewSource("The Diplomat",null,"td-logo.png",[["Current Affairs","https://thediplomat.com/feed/"]]),NewSource("Science Daily",null,"scd-logo.jpg",[["All News","https://www.sciencedaily.com/rss/all.xml"],["Top Science","https://www.sciencedaily.com/rss/top/science.xml"],["Top Technology","https://www.sciencedaily.com/rss/top/technology.xml"]]),NewSource("SpaceNews","https://spacenews.com/wp-content/themes/spacenews/favicon-32x32.png","spn-logo.png",[["SpaceNews","https://spacenews.com/feed/"]]),__webpack_exports__["Z"]=sources},1422:function(e,s,t){var o=t(9242),a=t(3396);function r(e,s,t,o,r,i){const n=(0,a.up)("RSSFeed");return(0,a.wg)(),(0,a.j4)(n)}var i=t(7139);const n={class:"container"},c={class:"row"},l={key:0},d={key:0},u={class:"text-secondary mb-3"},p={key:0,"data-cy":"actions-article-wrapper",class:"articles-wrapper"},w={key:1},m=(0,a._)("span",{class:"text-danger mb-0"},[(0,a._)("strong",null,[(0,a._)("em",null,"No articles found here!")])],-1),g={key:0},_={class:"text-secondary mb-3"};function h(e,s,t,r,h,f){const b=(0,a.up)("HeaderComponent"),v=(0,a.up)("loading-spinner"),N=(0,a.up)("sources-tiles"),k=(0,a.up)("articles-tiles"),y=(0,a.up)("card-component"),S=(0,a.up)("topic-tiles"),T=(0,a.up)("error-component"),C=(0,a.up)("footer-component");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",c,[(0,a._)("div",{class:(0,i.C_)({"col-3":h.screenWidth>=1200,"":h.screenWidth<1200})},null,2),(0,a._)("div",{class:(0,i.C_)({"":h.screenWidth<1200,"col-6":h.screenWidth>=1200})},[(0,a.Wm)(b,{onBackwardNav:s[0]||(s[0]=e=>f.backwardNav(h.isError)),tabNav:h.tabNav,isloading:h.isloading,isError:h.isError,showSourceCode:e.showSourceCode,devActivationCount:h.devActivationCount},null,8,["tabNav","isloading","isError","showSourceCode","devActivationCount"]),(0,a.Wm)(v,{isloading:h.isloading,isError:h.isError},null,8,["isloading","isError"]),(0,a.Wm)(o.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[h.isloading||0!==h.tabNav?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(o.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("h2",{onClick:s[1]||(s[1]=e=>f.devMode()),class:"text-secondary mb-3"},"Sources")])),_:1}),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.sources,((s,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"d-inline-block"},[(0,a.Wm)(N,{index:t,source:s,topics:e.topics,isloading:h.isloading,tabNav:h.tabNav,onForwardNav:e=>f.forwardNav(s)},null,8,["index","source","topics","isloading","tabNav","onForwardNav"])])))),128))])]))])),_:1}),h.isError||h.isloading||2!==h.tabNav?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(o.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("h2",u,(0,i.zw)(1===h.topicData.length?h.topicTitle:h.topicTitle2),1)])),_:1}),this.feedHasArticles()?((0,a.wg)(),(0,a.iD)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.feeds,((s,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-2",key:t},[(0,a.Wm)(k,{index:t,feed:s,feeds:e.feeds,data:h.data,screenWidth:h.screenWidth,pic:e.pic},null,8,["index","feed","feeds","data","screenWidth","pic"])])))),128))])):((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(y,{onClick:s[2]||(s[2]=e=>f.backwardNav(h.isError)),class:"d-flex justify-content-center align-content-center p-4"},{default:(0,a.w5)((()=>[m])),_:1})]))])),(0,a.Wm)(o.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[h.isloading||1!==h.tabNav?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(o.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("h2",_,(0,i.zw)(h.topicTitle),1)])),_:1}),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.topicData,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"d-inline-block"},[(0,a.Wm)(S,{index:t,topic:e,topicNavUrl:h.topicNavUrl,onGetRssFeeds:s=>f.getRssFeeds(h.topicNavUrl,e.url,e.title),onForwardNav:s[3]||(s[3]=e=>f.forwardNav())},null,8,["index","topic","topicNavUrl","onGetRssFeeds"])])))),128))])]))])),_:1}),(0,a.Wm)(T,{onBackwardNav:s[4]||(s[4]=e=>f.backwardNav()),data:h.data,tabNav:h.tabNav,isError:h.isError},null,8,["data","tabNav","isError"]),(0,a.Wm)(C,{onBackwardNav:s[5]||(s[5]=e=>f.backwardNav(h.isError)),data:h.data,tabNav:h.tabNav,isloading:h.isloading,isError:h.isError,topicData:h.topicData||[],feeds:e.feeds||[]},null,8,["data","tabNav","isloading","isError","topicData","feeds"])],2),(0,a._)("div",{class:(0,i.C_)({"col-3":h.screenWidth>=1200,"":h.screenWidth<1200})},null,2)])])}var f=t(6265),b=t.n(f);class v{static UrlEncoder(e){return encodeURIComponent(e)}static ElapsedTime(e){const s=new Date(e).getTime(),t=Date.now(),o=(t-s)/1e3,a=o/60,r=a/60,i=r/24,n=i/7,c=n/4,l=c/12;return o>=1&&o<60?o.toFixed(0)+(o.toFixed(0)<2?" second":" seconds"):a>=1&&a<60?a.toFixed(0)+(a.toFixed(0)<2?" minute":" minutes"):r>=1&&r<24?r.toFixed(0)+(r.toFixed(0)<2?" hour":" hours"):i>=1&&i<7?i.toFixed(0)+(i.toFixed(0)<2?" day":" days"):n>=1&&n<4?n.toFixed(0)+(n.toFixed(0)<2?" week":" weeks"):c>=1&&c<12?c.toFixed(0)+(c.toFixed(0)<2?" month":" months"):l>=1?l.toFixed(0)+(l.toFixed(0)<2?" year":" years"):void 0}}var N=t(6068);const k=(0,a.uE)('<h1 class="text-secondary mb-1"><strong>Latest News Feeds</strong></h1><label class="text-secondary mb-3"> Powered by <strong><i class="fa-brands fa-vuejs"></i> <i class="fa-solid fa-rss"></i></strong> and built by <strong><a class="text-secondary" style="text-decoration:none;" href="https://github.com/rubanero14">Raj</a></strong></label>',2),y={key:0,href:"https://github.com/rubanero14/rubanero14-Convert-XML-to-JSON-Guide/blob/master/src",class:"btn btn-outline-secondary mb-lg-3 w-100",target:"_blank"},S=(0,a._)("i",{class:"bi bi-code-slash"},null,-1),T=["disabled"],C=(0,a._)("i",{class:"bi bi-arrow-left"},null,-1),D=(0,a._)("hr",{class:"my-3",size:"5",noshade:""},null,-1);function E(e,s,t,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[k,0===this.tabNav&&this.showSourceCode?((0,a.wg)(),(0,a.iD)("a",y,[S,(0,a.Uk)(" Source Code")])):(0,a.kq)("",!0),this.tabNav>0?((0,a.wg)(),(0,a.iD)("button",{key:1,"data-cy":"actions-back-button",onClick:s[0]||(s[0]=s=>e.$emit("backwardNav",this.isError)),class:"btn btn-secondary w-100",disabled:this.isloading},[C,(0,a.Uk)(" Back")],8,T)):(0,a.kq)("",!0),D])}var x={props:["tabNav","isloading","isError","showSourceCode","devActivationCount"]},j=t(89);const A=(0,j.Z)(x,[["render",E]]);var F=A;const M=e=>((0,a.dD)("data-v-f1e31a26"),e=e(),(0,a.Cn)(),e),W={key:0,class:"text-danger"},R={key:0},O={key:1,class:"row"},L={class:"col-12"},I={class:"text-danger mb-3"},P=M((()=>(0,a._)("img",{class:"err",src:"https://rubanero14.github.io/RSS-Feed-CP-Prototype-Vue3/err.png"},null,-1))),U=M((()=>(0,a._)("figcaption",{class:"mb-3"},[(0,a.Uk)("Figure 1 - Click "),(0,a._)("span",null,"Enable Access"),(0,a.Uk)(" button below to open this page")],-1))),G=M((()=>(0,a._)("ol",{type:"1",class:"text-start text-secondary"},[(0,a._)("li",null,[(0,a.Uk)("Click "),(0,a._)("strong",{class:"text-success"},"Enable Access"),(0,a.Uk)(" button below")]),(0,a._)("li",null,[(0,a.Uk)("When new window pops up, click "),(0,a._)("strong",{class:"text-success"},"Request temporary access to the demo server"),(0,a.Uk)(" button as per figure above.")]),(0,a._)("li",null,[(0,a.Uk)("Close that window and back to "),(0,a._)("span",{class:"text-secondary"},[(0,a._)("strong",null,"RSS Feed")]),(0,a.Uk)(" page and start browsing for articles")])],-1))),q={class:"col-12"},Y=M((()=>(0,a._)("i",{class:"bi bi-hdd-rack"},null,-1)));function z(e,s,t,r,n,c){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[this.isError&&2===this.tabNav?((0,a.wg)(),(0,a.iD)("div",W,[(0,a.Wm)(o.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[this.data.includes("403")?((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",L,[(0,a._)("h2",I,(0,i.zw)(this.data.replace(",","!")),1),P,U,G]),(0,a._)("div",q,[(0,a._)("a",{onClick:s[0]||(s[0]=s=>e.$emit("backwardNav")),href:"https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=01a082fe9409ff8c6c2e76a853281642569c12198c0358fadbbe4a03321d2fd7",class:"btn btn-outline-success w-100",target:"_blank"},[Y,(0,a.Uk)(" Enable Access ")])])])):((0,a.wg)(),(0,a.iD)("p",R,(0,i.zw)(this.data)+" Try reloading again...",1))])),_:1})])):(0,a.kq)("",!0)])),_:1})}var B={props:["data","tabNav","isError"]};const Q=(0,j.Z)(B,[["render",z],["__scopeId","data-v-f1e31a26"]]);var J=Q;const Z=(0,a._)("hr",{class:"my-3",size:"5",noshade:""},null,-1),H=["disabled"],X=(0,a._)("i",{class:"bi bi-arrow-left"},null,-1);function $(e,s,t,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[Z,this.tabNav>0&&i.showLowerBackBtn()?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:s[0]||(s[0]=s=>e.$emit("backwardNav","isError")),class:"btn btn-secondary w-100",disabled:this.isloading},[X,(0,a.Uk)(" Back")],8,H)):(0,a.kq)("",!0)])}var K={props:["tabNav","isloading","isError","topicData","feeds"],methods:{showLowerBackBtn(){return 1===this.tabNav?void 0!==this.topicData&&this.topicData.length>4:2===this.tabNav?void 0!==this.topicData&&this.feeds.length>4:void 0}}};const V=(0,j.Z)(K,[["render",$]]);var ee=V;const se=["data-cy"],te={class:"d-contents"},oe=["src"];function ae(e,s,t,r,n,c){const l=(0,a.up)("card-component"),d=(0,a.up)("center");return(0,a.wg)(),(0,a.j4)(o.uT,{appear:"",key:this.index,name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:(0,i.j5)({"--i":this.index})},{default:(0,a.w5)((()=>[(0,a._)("a",{"data-cy":`actions-source-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>e.$emit("forwardNav",t.source))},[(0,a.Wm)(l,{class:"logo p-0 mb-3 mx-2"},{default:(0,a.w5)((()=>[(0,a._)("div",te,[(0,a._)("img",{class:"logo",src:t.source.logo,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,oe)])])),_:1})],8,se)])),_:1},8,["style"])])),_:1})}const re={class:"card"};function ie(e,s){return(0,a.wg)(),(0,a.iD)("div",re,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const ne={},ce=(0,j.Z)(ne,[["render",ie],["__scopeId","data-v-4b4e49ce"]]);var le=ce,de={props:["source","isloading","tabNav","index"],components:{CardComponent:le}};const ue=(0,j.Z)(de,[["render",ae],["__scopeId","data-v-620fab78"]]);var pe=ue;const we={key:0,class:"text-center spinner-border text-secondary",role:"status"};function me(e,s,t,r,i,n){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[this.isloading&&!this.isError?((0,a.wg)(),(0,a.iD)("div",we)):(0,a.kq)("",!0)])),_:1})}var ge={props:["isloading","isError"]};const _e=(0,j.Z)(ge,[["render",me]]);var he=_e;const fe=["data-cy","href"],be={class:"p-3"},ve={class:"row"},Ne={class:"col-9 col-md-11 text-start"},ke={class:"title text-secondary"},ye={key:0},Se={key:1},Te={key:2},Ce={key:0,class:"time d-block text-secondary mb-0"},De={class:"wrapper col-3 col-md-1 d-flex align-items-center justify-content-center"},Ee=["src"];function xe(e,s,t,r,n,c){const l=(0,a.up)("card-component"),d=(0,a.up)("center");return(0,a.wg)(),(0,a.j4)(o.uT,{key:this.index,appear:"",name:"fade-articles",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:(0,i.j5)({"--j":this.index})},{default:(0,a.w5)((()=>[(0,a._)("a",{"data-cy":`actions-article-${t.index}`,class:"title",href:t.feed.link.toString(),target:"_blank"},[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a._)("div",be,[(0,a._)("div",ve,[(0,a._)("div",Ne,[(0,a._)("h3",ke,[t.screenWidth>=1200?((0,a.wg)(),(0,a.iD)("span",ye,(0,i.zw)(t.feed.title.toString().substr(0,250).replace(": ","")+"..."),1)):t.screenWidth>=600&&t.screenWidth<1200?((0,a.wg)(),(0,a.iD)("span",Se,(0,i.zw)(t.feed.title.toString().substr(0,150).replace(": ","")+"..."),1)):((0,a.wg)(),(0,a.iD)("span",Te,(0,i.zw)(t.feed.title.toString().substr(0,50).replace(": ","")+"..."),1))]),c.date()?((0,a.wg)(),(0,a.iD)("p",Ce,[(0,a._)("em",null,"Updated: "+(0,i.zw)(c.date(t.index))+" ago",1)])):(0,a.kq)("",!0)]),(0,a._)("div",De,[t.pic?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"m-auto",src:t.pic,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,Ee)):(0,a.kq)("",!0)])])])])),_:1})],8,fe)])),_:1},8,["style"])])),_:1})}var je={props:["index","feed","data","feeds","screenWidth","pic"],components:{CardComponent:le},methods:{date(){return this.rssMode=Object.keys(this.data).includes("rss")?"pubDate":"dc:date",v.ElapsedTime(this.feeds[0][this.rssMode])}}};const Ae=(0,j.Z)(je,[["render",xe],["__scopeId","data-v-96041c10"]]);var Fe=Ae;const Me=e=>((0,a.dD)("data-v-081da33c"),e=e(),(0,a.Cn)(),e),We=["data-cy"],Re={class:"d-inline-block justify-content-center align-items-center m-auto"},Oe=["src"],Le=Me((()=>(0,a._)("br",null,null,-1))),Ie={class:"mb-2"},Pe={class:"text-secondary title"};function Ue(e,s,t,r,n,c){const l=(0,a.up)("CardComponent"),d=(0,a.up)("center");return(0,a.wg)(),(0,a.j4)(o.uT,{key:this.index,appear:"",name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:(0,i.j5)({"--i":this.index})},{default:(0,a.w5)((()=>[(0,a._)("a",{"data-cy":`actions-topic-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>(e.$emit("getRssFeeds",t.topicNavUrl,t.topic.url,t.topic.title),e.$emit("forwardNav")))},[(0,a.Wm)(l,{class:"tile mb-3 mx-2"},{default:(0,a.w5)((()=>[(0,a._)("div",Re,[(0,a._)("img",{src:t.topicNavUrl,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,Oe),Le,(0,a._)("strong",Ie,[(0,a._)("span",Pe,(0,i.zw)(t.topic.title),1)])])])),_:1})],8,We)])),_:1},8,["style"])])),_:1})}var Ge={props:["index","topic","topicNavUrl"],components:{CardComponent:le}};const qe=(0,j.Z)(Ge,[["render",Ue],["__scopeId","data-v-081da33c"]]);var Ye=qe;const ze=t(9058);var Be={components:{HeaderComponent:F,ErrorComponent:J,FooterComponent:ee,SourcesTiles:pe,LoadingSpinner:he,ArticlesTiles:Fe,TopicTiles:Ye,CardComponent:le},data(){return{data:"",isloading:!1,isError:!1,rssSource:"",screenWidth:"",tabNav:0,topicData:"",topicNavUrl:"",topicTitle:"",topicTitle2:"",sources:N.Z,devActivationCount:0}},watch:{url(){this.getRssFeeds(),this.setScreenWidth()}},mounted(){window.addEventListener("resize",this.setScreenWidth),this.setScreenWidth()},unmounted(){window.removeEventListener("resize",this.setScreenWidth)},methods:{forwardNav(e){return this.topicTitle=e.name,0===this.tabNav&&e.topics.length>1?(this.topicData=e.topics,this.topicNavUrl=e.url,this.tabNav<3?this.tabNav++:this.tabNav):0===this.tabNav&&1===e.topics.length?(this.pic=e.url,this.topicData=e.topics,this.topicNavUrl=e.topics[0].url,this.topicTitle2=e.topics[0].title,this.getRssFeeds(this.pic,this.topicNavUrl,this.topicTitle2,this.logo),this.tabNav=2):void 0},backwardNav(e){return 2===this.tabNav&&1===this.topicData.length?this.tabNav=0:e?(this.isError=!1,console.log("Iserror ",this.isError),this.tabNav=0):this.tabNav>-1?this.tabNav--:this.tabNav},setScreenWidth(){return console.log(window.innerWidth),this.screenWidth=window.innerWidth},async getRssFeeds(e,s,t){if(this.tabNav=2,this.isError=!1,this.isloading=!0,this.pic=e,this.topicTitle2=t,s.includes("tradingeconomics")||s.includes("sciencedaily")){const e=`https://cors-anywhere.herokuapp.com/${s}`;console.log("foreign proxy fires"),this.data=await b().get(e).then((e=>ze.parseStringPromise(e.data))).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}else{const e=`https://rss-feed-proxy-server.herokuapp.com/${v.UrlEncoder(s)}`;console.log("own proxy fires"),this.data=await b().get(e).then((e=>e.data)).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}this.isError||(this.feeds=Object.keys(this.data).includes("rss")?this.data.rss.channel[0].item:this.data["rdf:RDF"].item,this.feedHasArticles=()=>Object.keys(this.data).includes("rss")?Object.keys(this.data.rss.channel[0]).includes("item"):Object.keys(this.data).includes("rdf:RDF")?Object.keys(this.data["rdf:RDF"]).includes("item"):void 0,this.isloading=!1)},devMode(){this.devActivationCount++,7===this.devActivationCount&&(this.showSourceCode=!0)}}};const Qe=(0,j.Z)(Be,[["render",h]]);var Je=Qe,Ze={name:"App",components:{RSSFeed:Je}};const He=(0,j.Z)(Ze,[["render",r]]);var Xe=He;(0,o.ri)(Xe).mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var s=__webpack_module_cache__[e];if(void 0!==s)return s.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(s,t,o,a){if(!t){var r=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,n=0;n<t.length;n++)(!1&a||r>=a)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[n])}))?t.splice(n--,1):(i=!1,a<r&&(r=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(s=c)}}return s}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]}}(),function(){__webpack_require__.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(s,{a:s}),s}}(),function(){__webpack_require__.d=function(e,s){for(var t in s)__webpack_require__.o(s,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};__webpack_require__.O.j=function(s){return 0===e[s]};var s=function(s,t){var o,a,r=t[0],i=t[1],n=t[2],c=0;if(r.some((function(s){return 0!==e[s]}))){for(o in i)__webpack_require__.o(i,o)&&(__webpack_require__.m[o]=i[o]);if(n)var l=n(__webpack_require__)}for(s&&s(t);c<r.length;c++)a=r[c],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(l)},t=self["webpackChunkrss_feed"]=self["webpackChunkrss_feed"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(1422)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.a1481815.js.map