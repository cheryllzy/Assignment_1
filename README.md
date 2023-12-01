# Assignment_1

# Project Name: Craigslist

Craigslist was founded in 1995 by Craig Newmark, and developed initially as a free-to-use online hub to inform people of local events. Eventually, individuals began using the platform to post jobs, services, items for sale, and more, eventually evolving into aclassified advertisements website.

# Design Process

My project will help users to find/provide listings for services that they may require through the website. The design of the original website is quite old school and basic, making it not very appealing to users. My version has been revamped to improve the user experience by changing the layout to be more aesthetically pleasing, and the design of the website has been simplified to allow easier readability and navigation. Furthermore, the colours and fonts have been revised to be more modern and simplistic. All in all, this will allow users to find and provide the services they require more efficiently.

As a user type, I would want a functioning search and filter on the listings page to allow myself to be able to find what I require faster. I would also like the website to be more modern so that younger generations would be able to use the website. I also want the functionality of the website to improve so that it can cater to the users better.

Links:
Desktop Wireframe:
https://www.figma.com/file/lsEqbEvl9FcVqoroqmXzi4/FED-Desktop-Wireframe?type=design&node-id=0%3A1&mode=design&t=OxGiWNtAn5MIGGHo-1

Mobile Wireframe:
https://www.figma.com/file/zCn7ZKC6chjOqSnCDOFdfo/FED-Mobile-Wireframe?type=design&mode=design&t=OxGiWNtAn5MIGGHo-1

# Features

Navigation Bar:
Simplistic navigation bar to allow users to have an easy way to view the important pages with a single click.

Search Bar depending on Region:
Able to search for listings in the user's area.

Top Categories:
Provides the most popular categories for users to browse through.

Recommended For You:
Provides listings catered to the user via location and date.

Filtering:
Allows customisability when looking for listings.

Add to Favourites:
Allows users to save listings that they may want to look back at in the future.

### Existing Features

Choosing Location:
Allows users to choose their location from a wide variety of options.

Search Bar:
Allows users to search for listings that they may be interested in.

Filtering:
Allows users to filter through their search results.

Save a search:
Allows users to save what they searched.

Account:
Able to log in or sign up for an account.

Exact location using Map:
Uses Geolocation of user to view location.

### Features Left to Implement

Exact location using Map:
Makes it easier for users to find listings near them.

## Technologies Used

HTML: https://www.w3.org/html/
It is a standard markup language necessary to design the structure of a webpage.

CSS: https://www.w3.org/Style/CSS/Overview.en.html
It is used in web development to control the style of HTML.

JavaScript: https://developer.mozilla.org/en-US/docs/Web/javascript
It is a programming language for web development.

GitHub: https://github.com/
It allows version control for web development projects.

Figma: https://figma.com
It is a prototyping tool.

Referenced:
ChatGPT: https://chat.openai.com/
It can help to solve issues or bugs and also provide help for some of the used code for this project.

W3 Schools: https://www.w3schools.com/
It is an online resource to learn web development and provides helpful examples on various features.

## Testing

1. Searchbar on Listings Page
   i. Go to the Categories Page, then go to the "Job" Category and select "Office".
   ii. Try to submit an invalid input in the search bar and verify that no search results appear.
   iii. Try to submit a valid input in the search bar and verify that search results appear.

2. Filter on Listings Page
   i. Go to the Categories Page, then go to the "Job" Category and select "Office".
   ii. Select only the "Full-Time" filter and verify that listings that specify the employment type "Full-Time" appears.
   iii. Select only the "Part-Time" filter and verify that listings that specify the employment type "Part-Time" appears.
   iv. Select none of the filters and verify no results appear.
   v. Select both of the filters and verify that that listings that specifiy the employment type "Full-Time" or "Part-Time" both appear.

After testing on different browsers (Google Chrome, Microsoft Edge, Firefox, Internet Explorer, Opera), I can conclude that the projects looks the
same on all of them. I have made this project based on the screen size of 1232 X 645, thus the best results would be on this screen size. I have added
responsiveness for mobile size width of 600px as well, to emulate the website on a mobile device.

There are several bugs/problems that I have discovered but have yet to address:

- Searchbar and region filter on the Home page and the Categories page does not work because it requires a seperate page to show the search results. This also requires more data in the form of listings to be able to use this function.
- Events and About Us link on the navigation bar does not work because it requires pages for that as well, which have not been addressed.
- On the listings page, the view listing and add to favourite buttons are not properly where it is supposed to be due to faulty CSS.
- On the listings page, when scrolling down, the border of the sidebar intersects into the footer.
- On the favourites page, with 3 or less favourites added, the footer is quite high on the page.
- When going into the listings page, the filter is automatically unchecked, which should therefore show no listings. However, all listings are shown.
- On the listings page or favourites page, all of the "View Listing" buttons lead to one listing details page in particular when it should all show different pages since they are different listings.
- On the listings page, for the searchbar, after searching, to reset the search, the input has to be nothing to show all listings again.

## Credits

Content:

- The text for the listings in this site were obtained from various listings on craigslist.com

Media:

- The images on the buttons (Top Categories) in the Home page were obtained from figma.com (1000+ Icons Pack)
  https://www.figma.com/file/Dwx7RzNcs0Zfc29k16qv8s/1000%2B-Icons-Pack-(Community)?type=design&node-id=0-1&mode=design&t=9lr5kY3mG0jE1JPc-0

- Craigslist Logo symbol (all pages)
  https://www.bing.com/images/search?view=detailV2&ccid=gNgodRZZ&id=E85D31B98C16B15D3512DB145D4794306D9E936D&thid=OIP.gNgodRZZYsYMfgHeMvzHeQHaHa&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.80d82875165962c60c7e01de32fcc779%3Frik%3DbZOebTCUR10U2w%26riu%3Dhttp%253a%252f%252fwww.clipartbest.com%252fcliparts%252fyck%252f44e%252fyck44eqdi.png%26ehk%3DKlGrWgHsHmLplSJWdNfQ7NMNq30hf%252fXaQrZKoRzwmFE%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=999&expw=999&q=craigslist+logo+with+transparent+background&simid=608035222075362957&form=IRPRST&ck=06CD46CF07C4C9366197C5851118208D&selectedindex=6&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_msR%252BUSt6*cp_AA9BDF19B64FCB28888E4A1A058F59B6*mid_07ADA5F308075033040FD6C9718576F5CA67EA93*simid_608049421243010853*thid_OIP.msR-USt635r1!_13bWCDyEQHaFe&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

- Location Pin symbol (Home Page and Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=VVbwVxR7&id=232F12D1D7F1F979C190C16B0A2A976CF6402FA3&thid=OIP.VVbwVxR718MASAdWJ7OSpwHaHa&mediaurl=https%3a%2f%2fwww.freeiconspng.com%2fuploads%2flocation-map-pins-png-3.png&exph=512&expw=512&q=location+pin+symbol+with+transparent+background&simid=608045444126885785&FORM=IRPRST&ck=C061FBBEF0CDA91CEB77C0912A4BBB56&selectedIndex=12&ajaxhist=0&ajaxserp=0
- Images on Recommended For You from left to right (Home Page)

  1. https://www.bing.com/images/search?view=detailV2&ccid=YRT4542C&id=8A1D1FBD4425A12B52C8A8BCF49C2CDAC4D8A82E&thid=OIP.YRT4542CsSY-3SbGE3Rt2gHaFR&mediaurl=https%3a%2f%2fbrighamlarsonpianos.com%2fwp-content%2fuploads%2f2019%2f10%2fPiano-academy-first-week.jpg&exph=2178&expw=3058&q=piano+class&simid=608029969366937344&FORM=IRPRST&ck=92807AA780AE7380736742A2880866D2&selectedIndex=5&ajaxhist=0&ajaxserp=0
  2. https://www.bing.com/images/search?view=detailV2&ccid=PfkDe%2bFe&id=0C11B4AD2932DE4A48EC270AA57D8214CAC84288&thid=OIP.PfkDe-FeQQY_i7o5Ad8TkgHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3df9037be15e41063f8bba3901df1392%3frik%3diELIyhSCfaUKJw%26riu%3dhttp%253a%252f%252fsydney.edu.au%252fcontent%252fdam%252fcorporate%252fimages%252fnews-and-opinion%252fnews%252f2017%252fjune%252fYoga_class.jpg%26ehk%3dZLNEB9VwnE%252ftSmWEQNeQpnSrhEFLR5nRUPxpmjF7tgs%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2803&expw=4200&q=yoga+classe&simid=608012188196558838&FORM=IRPRST&ck=D57D1D90F161521C3F9F1BE65BE2B92C&selectedIndex=0&ajaxhist=0&ajaxserp=0
  3. craigslist.com
  4. https://www.bing.com/images/search?view=detailV2&ccid=ZGovN3er&id=74E15ABF95BE774A8DB55E2F7179F4ED268670FB&thid=OIP.ZGovN3erA1bi3Z0yIsekfwHaE8&mediaurl=https%3a%2f%2fstatic.bhphotovideo.com%2fexplora%2fsites%2fdefault%2ffiles%2f1-shutterstock_409375225.jpg&exph=641&expw=960&q=photography+lessons&simid=608045186438147976&FORM=IRPRST&ck=085EF32ECB836A865B7B1C7C2846AE82&selectedIndex=7&ajaxhist=0&ajaxserp=0

- Community Image (Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=C2O8f378&id=4CDBB633133AA8EAED3EFB5B09A04C75F6CD2515&thid=OIP.C2O8f3789nRU00h-RcNQ7gHaFj&mediaurl=https%3a%2f%2fpshe-association.org.uk%2fhubfs%2fTopic+and+key+stage+pages%2fshutterstock_763473283resized.jpg&exph=600&expw=800&q=community+pictures&simid=608038026720652304&FORM=IRPRST&ck=D4F5128670A611F6796265A4DC01F5F0&selectedIndex=29&ajaxhist=0&ajaxserp=0

- Housing Image (Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=ybD8amGR&id=DCE491CCF754BD138C732C9AE9BE5890DE48129D&thid=OIP.ybD8amGRlQNwy1ylf-loswHaE6&mediaurl=https%3a%2f%2ftownsquare.media%2fsite%2f43%2ffiles%2f2021%2f05%2fAffordable-Housing.jpg%3fw%3d1200%26h%3d0%26zc%3d1%26s%3d0%26a%3dt%26q%3d89&exph=797&expw=1200&q=housing+pictures&simid=607986126365874363&FORM=IRPRST&ck=9F02F85186DC2EE10173CE7F009FB49A&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0

- Jobs Image (Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=X1kDq%2FNp&id=E24207CDC96D32A63B4CF0DA9AEBF9BADF8FD6D1&thid=OIP.X1kDq_NppBH6RE0i67O-WwHaE8&mediaurl=https%3A%2F%2Firp.cdn-website.com%2F54377533%2Fdms3rep%2Fmulti%2F1338523352.jpg&exph=400&expw=600&q=jobs+pictures&simid=608025335087003689&form=IRPRST&ck=283DEA34B07B559FA9C7A686D5C3AA62&selectedindex=3&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_1F3FTn0O*cp_8F9F8D2D09FA7A8CD8190E54E6D99CB0*mid_457981483E69F47D167AE277F4B1620D8B0349D0*simid_608014503166347431*thid_OIP.1F3FTn0OBXoHZu5Re11IzQHaEz&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0
- Services Image (Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=cedbneTr&id=C73FB1D75D62F44F006517A4396B7397E1C29E47&thid=OIP.cedbneTrpC6drZWJmWUkbAHaE8&mediaurl=https%3a%2f%2fwww.outsource-consultants.com%2fwp-content%2fuploads%2f2020%2f10%2fimg-inbound-call-center-services-customer-service.jpg&exph=1281&expw=1920&q=services+pictures&simid=607991168630212231&FORM=IRPRST&ck=F44BE81278D7E6FD50AE2FDEDBA54A00&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0

- For Sale Image (Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=4F%2b9nmOg&id=2F2FA70083D3F9399B1E3ABAAF711F1291210BF9&thid=OIP.4F-9nmOgtX0uSnHxCFFj1AHaFj&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e05fbd9e63a0b57d2e4a71f1085163d4%3frik%3d%252bQshkRIfca%252b6Og%26riu%3dhttp%253a%252f%252fwww.voitures-cabrio.com%252fimages%252fcabriolet-used-cars-for-sale_1.jpg%26ehk%3dyazCByhaB8gsLdnHS4%252b%252bC9%252fZNiB%252b2DsT1Z0XplJpmPg%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=960&expw=1280&q=Cars+for+Sale&simid=607987243024851875&FORM=IRPRST&ck=D712D4CA854D84C4B67B3DC19A6F8248&selectedIndex=1&ajaxhist=0&ajaxserp=0

- Forums Image (Categories Page)
  https://www.bing.com/images/search?view=detailV2&ccid=P3tvHDsI&id=4CB7A97CDB65FD9A01232A79A1C756DF66CED791&thid=OIP.P3tvHDsIkfFK9GWqn0aRkgHaGC&mediaurl=https%3A%2F%2Fsearchengineland.com%2Fwp-content%2Fseloads%2F2011%2F02%2Fyse-comforter-500x408.png&exph=408&expw=500&q=online+forums&simid=607989296027354052&form=IRPRST&ck=BB30D889B4B46C79D19FB97E2A487E72&selectedindex=3&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_wYnXvasX*cp_8A45029AE06F361FDC0C28ED2E5F4533*mid_C5813B4D7D23924EE28B54BF841A8578F8B5A43C*simid_608025910615888869*thid_OIP.wYnXvasXee2WnZUf1OrVyQHaFo&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

- Coalition Technologies Logo (Listings Page)
  craigslist.com

- Beacon Hill Associates Logo (Listings Page)
  craigslist.com

- Pinnacle Restaurant Services Logo (Listings Page)
  craigslist.com

- Dogwood Tutoring and Test Prep (Listings Page)
  craigslist.com

Acknowledgements:
I received inspiration from myself
