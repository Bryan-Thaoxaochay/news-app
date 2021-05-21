import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";
import SignupLogin from "./pages/SignupLogin";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import SideBar from "./components/SideBar";
import CategoryContext from "./utils/CategoryContext";
import ArticleContext from "./utils/ArticleContext";


function App() {

//   const exampleResult = [
//     {
//         "source": {
//             "id": null,
//             "name": "Sky.com"
//         },
//         "author": "Sky",
//         "title": "Israel and Hamas agree ceasefire to end 11 days of violence - Sky News",
//         "description": "Rocket attacks on Israel and air strikes on Gaza are set to end after Egypt helped broker a ceasefire between the sides.",
//         "url": "https://news.sky.com/story/israel-and-hamas-agree-ceasefire-12312268",
//         "urlToImage": "https://e3.365dm.com/21/05/1600x900/skynews-gaza-israel-palestine_5389139.jpg?20210520210959",
//         "publishedAt": "2021-05-20T22:30:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Guardian"
//         },
//         "author": "Naaman Zhou",
//         "title": "Australia news live: Covid vaccine doses pile up as hesitancy grows; school strikes for climate - The Guardian",
//         "description": "Follow all the updates live",
//         "url": "https://www.theguardian.com/australia-news/live/2021/may/21/australia-news-live-covid-vaccine-politics-morrison-climate-albanese",
//         "urlToImage": "https://i.guim.co.uk/img/media/5b7e8d81b76be35cee3e2c0809bfd1f1ec2efa74/41_0_4901_2943/master/4901.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=53dbded8b72559cf4bd1428853d588b1",
//         "publishedAt": "2021-05-20T22:29:09Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "cbc-news",
//             "name": "CBC News"
//         },
//         "author": null,
//         "title": "Gatherings with people outside same household prohibited starting Saturday in Manitoba - CBC.ca",
//         "description": "As of 12:01 a.m. Saturday, people will only be allowed to gather outdoors with people they live with, regardless of circumstances. Only one person per household can enter a business to purchase essential items, though there are exceptions for people such as c…",
//         "url": "https://www.cbc.ca/news/canada/manitoba/manitoba-public-health-order-covid-19-1.6033658",
//         "urlToImage": "https://i.cbc.ca/1.6034721.1621539119!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/roussin-and-stefanson.jpg",
//         "publishedAt": "2021-05-20T22:10:30Z",
//         "content": "Manitobans will soon only be able to gather outdoors with people they live with, and only one person per household will be allowed to enter a business, announced Manitoba's chief provincial public he… [+3075 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Stuff.co.nz"
//         },
//         "author": null,
//         "title": "Assault victim still in coma, leaving parents in fear of losing a second son - Stuff.co.nz",
//         "description": "As Shane Winter stared at his son lying in a coma in hospital, he couldn’t help but think back to the moment his youngest son died.",
//         "url": "https://www.stuff.co.nz/national/crime/125203033/assault-victim-still-in-coma-leaving-parents-in-fear-of-losing-a-second-son",
//         "urlToImage": "https://resources.stuff.co.nz/content/dam/images/4/y/s/r/7/2/image.related.StuffLandscapeSixteenByNine.1420x800.22jja1.png/1621548591278.jpg",
//         "publishedAt": "2021-05-20T22:09:00Z",
//         "content": "As Shane Winter stared at his son lying in the hospital bed with a fractured skull he couldnt help but think back to the moment his youngest son died six years earlier.\r\n Hayden Winter was knocked un… [+4607 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Techguide.com.au"
//         },
//         "author": "Stephen Fenech",
//         "title": "LG's R1 rollable OLED TV finally coming to Australia - it's yours for just $130,000 - Tech Guide",
//         "description": "LG’s stunning Signature R1 65-inch Rollable OLED, which was seen for the first time at the 2019 Consumer Electronics Show is finally coming to Australia – and it will only set customers back $130,000.LG’s R1 Rollable ultra-thin and flexible OLED roll",
//         "url": "https://www.techguide.com.au/news/televisions-news/lgs-r1-rollable-tv-finally-coming-to-australia-its-yours-for-just-130000/",
//         "urlToImage": "https://www.techguide.com.au/wp-content/uploads/2021/05/LGRollableR14.jpeg",
//         "publishedAt": "2021-05-20T22:08:16Z",
//         "content": "LGs stunning Signature R1 65-inch Rollable OLED, which was seen for the first time at the 2019 Consumer Electronics Show is finally coming to Australia and it will only set customers back $130,000.\r\n… [+2353 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New York Times"
//         },
//         "author": "Emily Anthes",
//         "title": "The Latest Coronavirus Comes From Dogs - The New York Times",
//         "description": "A newly identified coronavirus may not pose a serious threat, but the finding highlights the need to monitor animal viruses more proactively, scientists say.",
//         "url": "https://www.nytimes.com/2021/05/20/health/dogs-coronavirus-infections.html",
//         "urlToImage": "https://static01.nyt.com/images/2021/05/20/science/20VIRUS-DOGS-SPILLOVER1/20VIRUS-DOGS-SPILLOVER1-facebookJumbo.jpg",
//         "publishedAt": "2021-05-20T22:01:37Z",
//         "content": "It also had an unusual genetic mutation, a deletion in what is commonly known as the N gene, which codes for an important structural protein. This deletion has not been documented in other canine cor… [+1622 chars]"
//     },
//     {
//         "source": {
//             "id": "cbc-news",
//             "name": "CBC News"
//         },
//         "author": null,
//         "title": "Vaccine deliveries could be less than expected next month, new logistics commander says - CBC.ca",
//         "description": "The military commander leading vaccine logistics says the immunization campaign has hit its stride with millions of doses arriving each week, but she provided new figures Thursday that suggest shipments next month could be substantially lower than originally …",
//         "url": "https://www.cbc.ca/news/politics/vaccine-deliveries-less-than-expected-1.6034902",
//         "urlToImage": "https://i.cbc.ca/1.6034919.1621543798!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/virus-outbreak-germany-moderna.jpg",
//         "publishedAt": "2021-05-20T21:58:38Z",
//         "content": "The military commander leading vaccine logistics says the immunization campaign has hit its stride with millions of doses arriving each week, but she provided new figures Thursday that suggest shipme… [+5033 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "BBC News"
//         },
//         "author": "https://www.facebook.com/bbcnews",
//         "title": "BBC's deceit over Diana interview worsened my parents' relationship - William - BBC News",
//         "description": "The prince speaks of \"indescribable sadness\" caused by his mother's interview with Martin Bashir.",
//         "url": "https://www.bbc.com/news/uk-57195046",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2417/production/_118593290_pa-9614536.jpg",
//         "publishedAt": "2021-05-20T21:58:21Z",
//         "content": "By Doug FaulknerBBC News\r\nmedia captionPrincess Diana was failed not just by Martin Bashir but by leaders at the BBC, says Prince William\r\nThe Duke of Cambridge has blamed the BBC's failures over its… [+8922 chars]"
//     },
//     {
//         "source": {
//             "id": "bbc-news",
//             "name": "BBC News"
//         },
//         "author": "https://www.facebook.com/bbcnews",
//         "title": "BBC's deceit over Diana interview worsened my parents' relationship - William - BBC News",
//         "description": "The prince speaks of \"indescribable sadness\" caused by his mother's interview with Martin Bashir.",
//         "url": "https://www.bbc.co.uk/news/uk-57195046",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2417/production/_118593290_pa-9614536.jpg",
//         "publishedAt": "2021-05-20T21:58:21Z",
//         "content": "By Doug FaulknerBBC News\r\nmedia captionPrincess Diana was failed not just by Martin Bashir but by leaders at the BBC, says Prince William\r\nThe Duke of Cambridge has blamed the BBC's failures over its… [+8922 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Stuff.co.nz"
//         },
//         "author": null,
//         "title": "Ryman CEO to stand down, annual profit jumps 60 per cent - Stuff.co.nz",
//         "description": "NZ's largest retirement village operator is getting bigger.",
//         "url": "https://www.stuff.co.nz/business/industries/125204762/ryman-ceo-to-stand-down-annual-profit-jumps-60-per-cent",
//         "urlToImage": "https://resources.stuff.co.nz/content/dam/images/4/y/n/s/m/u/image.related.StuffLandscapeSixteenByNine.1420x800.22jkm2.png/1621549401844.jpg",
//         "publishedAt": "2021-05-20T21:56:00Z",
//         "content": "Blue chip retirement village owner Ryman Healthcare reported a 60 per cent jump in annual profit to $423.1 million, with record sales in the second half of the year.\r\n Rymans total assets grew by 19.… [+3076 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New Zealand Herald"
//         },
//         "author": null,
//         "title": "Princess Diana interview: Prince William and Prince Harry respond to BBC failures - New Zealand Herald",
//         "description": "\"Our mother lost her life because of this, and nothing has changed,\" Prince Harry says.",
//         "url": "https://www.nzherald.co.nz/lifestyle/princess-diana-interview-prince-william-and-prince-harry-respond-to-bbc-failures/LPGRIWU2GBXADMCO3QRSS6HYGE/",
//         "urlToImage": "https://www.nzherald.co.nz/resizer/BmovbuuDbXD1f2skd2PtQkOjiSs=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/RFFLG2MTOKC6CVOBLZAESSL3MY.jpg",
//         "publishedAt": "2021-05-20T21:53:30Z",
//         "content": "Prince William has responded to report that found that a BBC journalist used 'deceitful behavior' to secure an explosive interview with Princess Diana in 1995.\r\nVideo / @KensingtonRoyalPrince William… [+2370 chars]"
//     },
//     {
//         "source": {
//             "id": "nbc-news",
//             "name": "NBC News"
//         },
//         "author": "Doha Madani, Yuliya Talmazan",
//         "title": "Princes William and Harry respond to BBC investigation, say lies contributed to Princess Diana's 'paranoia' - NBC News",
//         "description": "Prince William and Prince Harry press for higher standards in media after a BBC investigation that found journalist Martin Bashir used \"deceitful behavior\" to get an interview with Princess Diana.",
//         "url": "https://www.nbcnews.com/news/world/princes-william-harry-respond-bbc-investigation-say-lies-contributed-princess-n1268087",
//         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_20/3463940/210412-william-harry-mc-1005.JPG",
//         "publishedAt": "2021-05-20T21:52:00Z",
//         "content": "Princes William and Harry pressed for higher standards in the news media following a BBC investigation that found the journalist Martin Bashir used \"deceitful behavior\" to secure a landmark interview… [+3610 chars]"
//     },
//     {
//         "source": {
//             "id": "ars-technica",
//             "name": "Ars Technica"
//         },
//         "author": "Beth Mole",
//         "title": "Need for annual COVID shots hinges on how many people get vaccinated now - Ars Technica",
//         "description": "In new interviews, Fauci discusses the future of COVID-19 vaccinations.",
//         "url": "https://arstechnica.com/science/2021/05/covid-boosters-likely-in-our-future-but-yearly-jabs-may-be-avoidable-fauci-says/",
//         "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/12/GettyImages-1230260772-760x380.jpg",
//         "publishedAt": "2021-05-20T21:49:32Z",
//         "content": "Enlarge/ Anthony Fauci, director of the National Institute of Allergy and Infectious Diseases, receives the Moderna Inc. COVID-19 vaccine during an event at the NIH Clinical Center Masur Auditorium i… [+4426 chars]"
//     },
//     {
//         "source": {
//             "id": "news-com-au",
//             "name": "News.com.au"
//         },
//         "author": "Lexie Cartwright",
//         "title": "Prince Harry’s extraordinary statement amid Princess Diana Panorama interview findings - NEWS.com.au",
//         "description": "Prince Harry’s extraordinary statement amid Princess Diana Panorama interview findings",
//         "url": "https://www.news.com.au/entertainment/celebrity-life/royals/prince-harrys-extraordinary-statement-amid-princess-diana-panorama-interview-findings/news-story/034d088b78fd3d345143eb5998d61bf5",
//         "urlToImage": "https://cdn.newsapi.com.au/image/v1/44f54f96258776410ee986a56d4aae9c?width=1280",
//         "publishedAt": "2021-05-20T21:45:00Z",
//         "content": "Prince Harry has released an extraordinary statement after a damning report found Princess Diana was duped into giving her bombshell Panorama interview in 1995.The Duke of Sussex, 36, declared “our m… [+4051 chars]"
//     },
//     {
//         "source": {
//             "id": "news-com-au",
//             "name": "News.com.au"
//         },
//         "author": "Ally Foster",
//         "title": "Devastating scenes at the Sydney home where baby boy died after ’near drowning’ - NEWS.com.au",
//         "description": "Devastating scenes at the Sydney home where baby boy died after ’near drowning’",
//         "url": "https://www.news.com.au/national/nsw-act/news/family-moved-house-a-week-before-babys-tragic-death/news-story/58e65f38c74767ac21efb2eb72745310",
//         "urlToImage": "https://cdn.newsapi.com.au/image/v1/6b4801eba0e050d54af369ed418f2c8a?width=1280",
//         "publishedAt": "2021-05-20T21:44:27Z",
//         "content": "A heartbroken family moved into their new Sydney home just a week before a tragic incident led to the death of a four-month-old baby.Initial reports claimed the baby boy suffered a “near drowning inc… [+1568 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CNBC"
//         },
//         "author": "Jabari Young",
//         "title": "Lakers-Warriors NBA play-in game draws 5.6 million viewers - CNBC",
//         "description": "ESPN said the contest, which featured superstars LeBron James and Steph Curry, was the most-watched NBA game since the 2019 Western Conference finals.",
//         "url": "https://www.cnbc.com/2021/05/20/lakers-warriors-nba-play-in-game-draws-5point6-million-viewers.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/106886268-1621544915885-curry.jpg?v=1621545024",
//         "publishedAt": "2021-05-20T21:41:01Z",
//         "content": "The National Basketball Association's play-in game between the Los Angeles Lakers and Golden State Warriors drew an average of 5.6 million viewers on Wednesday evening.\r\nESPN said the game peaked at … [+1998 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Castanet.net"
//         },
//         "author": null,
//         "title": "Vaccine update: B.C. youths 12-17 can get vaccinated with family members who are already booked - BC News - Castanet.net",
//         "description": "Young British Columbians between 12 and 17 will be able to attend COVID-19 vaccination clinics with already-booked parents and guardians even if they have not registered.",
//         "url": "https://www.castanet.net/news/BC/334571/Vaccine-update-B-C-youths-12-17-can-get-vaccinated-with-family-members-who-are-already-booked",
//         "urlToImage": "https://www.castanet.net/content/2021/5/20201221191232-5fe13f4996b67b13053dcd45jpeg_p3500194._p3531957.jpg",
//         "publishedAt": "2021-05-20T21:40:00Z",
//         "content": "Young British Columbians between 12 and 17 will be able to attend COVID-19 vaccination clinics with already-booked parents and guardians even if they have not registered.\r\nBut B.C. provincial health … [+1442 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Independent.ie"
//         },
//         "author": "Sylvia Hui",
//         "title": "William and Harry vent anger after judge finds Martin Bashir was 'deceitful' in getting 1995 interview with their mother Princess Diana - Independent.ie",
//         "description": "Prince William and his brother Prince Harry have issued strongly worded statements tonight criticising the BBC and British media for unethical practices after an investigation concluded that one of the broadcaster's journalists used &ldquo;deceitful behavior&…",
//         "url": "https://www.independent.ie/world-news/europe/britain/william-and-harry-vent-anger-after-judge-finds-martin-bashir-was-deceitful-in-getting-1995-interview-with-their-mother-princess-diana-40451267.html",
//         "urlToImage": "https://www.independent.ie/world-news/europe/britain/c0890/40451264.ece/AUTOCROP/w1240h700/MEDIA%20Dian%207%20INT_ED6_S01",
//         "publishedAt": "2021-05-20T21:37:00Z",
//         "content": "Prince William and his brother Prince Harry have issued strongly worded statements tonight criticising the BBC and British media for unethical practices after an investigation concluded that one of t… [+4995 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New Zealand Herald"
//         },
//         "author": "Tamsyn Parker",
//         "title": "Foodstuffs to sell $114m stake in the Warehouse - New Zealand Herald",
//         "description": "The retailing giant has gone on a trading halt.",
//         "url": "https://www.nzherald.co.nz/business/foodstuffs-to-sell-114m-stake-in-the-warehouse/2T7ZINRJGSNL3WOCIZJ3ELF5DE/",
//         "urlToImage": "https://www.nzherald.co.nz/resizer/Q1aSPyqdtIhiArXoaHCytAPP81Y=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/4X2NHS5QCVHJWYTTAQ4ZCIA72M.jpg",
//         "publishedAt": "2021-05-20T21:32:35Z",
//         "content": "Shares the Warehouse have been placed on a trading halt. Photo / Mark MitchellFoodstuffs is to sell its 9 per cent stake in the Warehouse - worth $114 million at today's market price.\r\nThe retailer t… [+1039 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Inquirer.net"
//         },
//         "author": "Leila B. Salaverria",
//         "title": "Coast guard to protect you, Palace tells fisherfolk amid China ban - INQUIRER.net",
//         "description": "MANILA, Philippines — Malacañang on Thursday told local fishermen to continue venturing into their traditional fishing grounds, assuring them of the Philippine Coast Guard’s protection, after",
//         "url": "https://www.inquirer.net",
//         "urlToImage": "https://newsinfo.inquirer.net/files/2021/04/ezz-620x465.jpeg",
//         "publishedAt": "2021-05-20T21:32:00Z",
//         "content": "MANILA, Philippines Malacañang on Thursday told local fishermen to continue venturing into their traditional fishing grounds, assuring them of the Philippine Coast Guards protection, after China impo… [+2912 chars]"
//     }
// ]

  const [category, setCategory] = useState("General");
  const [articles, setArticles] = useState("");

  return (
    <Router>
      <div>
        <ArticleContext.Provider value={{articles, setArticles}}>
        <CategoryContext.Provider value={{category, setCategory}}>
          <Nav />
          <SideBar />
          <Profile />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={SignupLogin} />
            <Route exact path="/article" component={Article} />
          </Switch>
        </CategoryContext.Provider>
        </ArticleContext.Provider>
      </div>
    </Router>
  );
}

export default App;