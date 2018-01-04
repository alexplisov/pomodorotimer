/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var minutes = 25,
    seconds = 0,
    cap = 25,
    tumbler = document.getElementById('tumbler'),
    reset = document.getElementById('reset'),
    timerMinutes = document.getElementById('minutes'),
    timerSeconds = document.getElementById('seconds'),
    clip = new Audio('./sound.mp3'),
    interval = void 0;

var count = function count() {
  if (seconds <= 0) {
    seconds = 60;
    minutes -= 1;
  }
  seconds -= 1;
  timerSeconds.innerHTML = seconds;
  addZeroChar(timerSeconds);
  if (minutes <= 0 && seconds <= 0) {
    if (cap === 25) {
      cap = 5;
    } else if (cap === 5) {
      cap = 25;
    }
    minutes = cap;
    clip.play();
  }
  timerMinutes.innerHTML = minutes;
  addZeroChar(timerMinutes);
};

var resetTimer = function resetTimer() {
  timerMinutes.innerHTML = cap === 25 ? cap : '0' + cap;
  timerSeconds.innerHTML = '00';
  tumbler.innerHTML = 'start';
  minutes = 25, seconds = 0, cap = 25, clearInterval(interval);
};

var switchTumbler = function switchTumbler() {
  switch (tumbler.innerHTML) {
    case 'start':
      tumbler.innerHTML = 'stop';
      interval = setInterval(count, 1000);
      break;
    case 'stop':
      tumbler.innerHTML = 'start';
      clearInterval(interval);
      break;
  }
};

var addZeroChar = function addZeroChar(element) {
  if (element.innerHTML.length === 1) {
    element.innerHTML = '0' + element.innerHTML;
  }
};

tumbler.onclick = switchTumbler;
reset.onclick = resetTimer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var fa=function(i){return fa[i.replace(/-./g,function(x){return x.substr(1).toUpperCase()})]};fa.glass="\uf000";fa.music="\uf001";fa.search="\uf002";fa.envelopeO="\uf003";fa.heart="\uf004";fa.star="\uf005";fa.starO="\uf006";fa.user="\uf007";fa.film="\uf008";fa.thLarge="\uf009";fa.th="\uf00a";fa.thList="\uf00b";fa.check="\uf00c";fa.remove="\uf00d";fa.close="\uf00d";fa.times="\uf00d";fa.searchPlus="\uf00e";fa.searchMinus="\uf010";fa.powerOff="\uf011";fa.signal="\uf012";fa.gear="\uf013";fa.cog="\uf013";fa.trashO="\uf014";fa.home="\uf015";fa.fileO="\uf016";fa.clockO="\uf017";fa.road="\uf018";fa.download="\uf019";fa.arrowCircleODown="\uf01a";fa.arrowCircleOUp="\uf01b";fa.inbox="\uf01c";fa.playCircleO="\uf01d";fa.rotateRight="\uf01e";fa.repeat="\uf01e";fa.refresh="\uf021";fa.listAlt="\uf022";fa.lock="\uf023";fa.flag="\uf024";fa.headphones="\uf025";fa.volumeOff="\uf026";fa.volumeDown="\uf027";fa.volumeUp="\uf028";fa.qrcode="\uf029";fa.barcode="\uf02a";fa.tag="\uf02b";fa.tags="\uf02c";fa.book="\uf02d";fa.bookmark="\uf02e";fa.print="\uf02f";fa.camera="\uf030";fa.font="\uf031";fa.bold="\uf032";fa.italic="\uf033";fa.textHeight="\uf034";fa.textWidth="\uf035";fa.alignLeft="\uf036";fa.alignCenter="\uf037";fa.alignRight="\uf038";fa.alignJustify="\uf039";fa.list="\uf03a";fa.dedent="\uf03b";fa.outdent="\uf03b";fa.indent="\uf03c";fa.videoCamera="\uf03d";fa.photo="\uf03e";fa.image="\uf03e";fa.pictureO="\uf03e";fa.pencil="\uf040";fa.mapMarker="\uf041";fa.adjust="\uf042";fa.tint="\uf043";fa.edit="\uf044";fa.pencilSquareO="\uf044";fa.shareSquareO="\uf045";fa.checkSquareO="\uf046";fa.arrows="\uf047";fa.stepBackward="\uf048";fa.fastBackward="\uf049";fa.backward="\uf04a";fa.play="\uf04b";fa.pause="\uf04c";fa.stop="\uf04d";fa.forward="\uf04e";fa.fastForward="\uf050";fa.stepForward="\uf051";fa.eject="\uf052";fa.chevronLeft="\uf053";fa.chevronRight="\uf054";fa.plusCircle="\uf055";fa.minusCircle="\uf056";fa.timesCircle="\uf057";fa.checkCircle="\uf058";fa.questionCircle="\uf059";fa.infoCircle="\uf05a";fa.crosshairs="\uf05b";fa.timesCircleO="\uf05c";fa.checkCircleO="\uf05d";fa.ban="\uf05e";fa.arrowLeft="\uf060";fa.arrowRight="\uf061";fa.arrowUp="\uf062";fa.arrowDown="\uf063";fa.mailForward="\uf064";fa.share="\uf064";fa.expand="\uf065";fa.compress="\uf066";fa.plus="\uf067";fa.minus="\uf068";fa.asterisk="\uf069";fa.exclamationCircle="\uf06a";fa.gift="\uf06b";fa.leaf="\uf06c";fa.fire="\uf06d";fa.eye="\uf06e";fa.eyeSlash="\uf070";fa.warning="\uf071";fa.exclamationTriangle="\uf071";fa.plane="\uf072";fa.calendar="\uf073";fa.random="\uf074";fa.comment="\uf075";fa.magnet="\uf076";fa.chevronUp="\uf077";fa.chevronDown="\uf078";fa.retweet="\uf079";fa.shoppingCart="\uf07a";fa.folder="\uf07b";fa.folderOpen="\uf07c";fa.arrowsV="\uf07d";fa.arrowsH="\uf07e";fa.barChartO="\uf080";fa.barChart="\uf080";fa.twitterSquare="\uf081";fa.facebookSquare="\uf082";fa.cameraRetro="\uf083";fa.key="\uf084";fa.gears="\uf085";fa.cogs="\uf085";fa.comments="\uf086";fa.thumbsOUp="\uf087";fa.thumbsODown="\uf088";fa.starHalf="\uf089";fa.heartO="\uf08a";fa.signOut="\uf08b";fa.linkedinSquare="\uf08c";fa.thumbTack="\uf08d";fa.externalLink="\uf08e";fa.signIn="\uf090";fa.trophy="\uf091";fa.githubSquare="\uf092";fa.upload="\uf093";fa.lemonO="\uf094";fa.phone="\uf095";fa.squareO="\uf096";fa.bookmarkO="\uf097";fa.phoneSquare="\uf098";fa.twitter="\uf099";fa.facebookF="\uf09a";fa.facebook="\uf09a";fa.github="\uf09b";fa.unlock="\uf09c";fa.creditCard="\uf09d";fa.feed="\uf09e";fa.rss="\uf09e";fa.hddO="\uf0a0";fa.bullhorn="\uf0a1";fa.bell="\uf0f3";fa.certificate="\uf0a3";fa.handORight="\uf0a4";fa.handOLeft="\uf0a5";fa.handOUp="\uf0a6";fa.handODown="\uf0a7";fa.arrowCircleLeft="\uf0a8";fa.arrowCircleRight="\uf0a9";fa.arrowCircleUp="\uf0aa";fa.arrowCircleDown="\uf0ab";fa.globe="\uf0ac";fa.wrench="\uf0ad";fa.tasks="\uf0ae";fa.filter="\uf0b0";fa.briefcase="\uf0b1";fa.arrowsAlt="\uf0b2";fa.group="\uf0c0";fa.users="\uf0c0";fa.chain="\uf0c1";fa.link="\uf0c1";fa.cloud="\uf0c2";fa.flask="\uf0c3";fa.cut="\uf0c4";fa.scissors="\uf0c4";fa.copy="\uf0c5";fa.filesO="\uf0c5";fa.paperclip="\uf0c6";fa.save="\uf0c7";fa.floppyO="\uf0c7";fa.square="\uf0c8";fa.navicon="\uf0c9";fa.reorder="\uf0c9";fa.bars="\uf0c9";fa.listUl="\uf0ca";fa.listOl="\uf0cb";fa.strikethrough="\uf0cc";fa.underline="\uf0cd";fa.table="\uf0ce";fa.magic="\uf0d0";fa.truck="\uf0d1";fa.pinterest="\uf0d2";fa.pinterestSquare="\uf0d3";fa.googlePlusSquare="\uf0d4";fa.googlePlus="\uf0d5";fa.money="\uf0d6";fa.caretDown="\uf0d7";fa.caretUp="\uf0d8";fa.caretLeft="\uf0d9";fa.caretRight="\uf0da";fa.columns="\uf0db";fa.unsorted="\uf0dc";fa.sort="\uf0dc";fa.sortDown="\uf0dd";fa.sortDesc="\uf0dd";fa.sortUp="\uf0de";fa.sortAsc="\uf0de";fa.envelope="\uf0e0";fa.linkedin="\uf0e1";fa.rotateLeft="\uf0e2";fa.undo="\uf0e2";fa.legal="\uf0e3";fa.gavel="\uf0e3";fa.dashboard="\uf0e4";fa.tachometer="\uf0e4";fa.commentO="\uf0e5";fa.commentsO="\uf0e6";fa.flash="\uf0e7";fa.bolt="\uf0e7";fa.sitemap="\uf0e8";fa.umbrella="\uf0e9";fa.paste="\uf0ea";fa.clipboard="\uf0ea";fa.lightbulbO="\uf0eb";fa.exchange="\uf0ec";fa.cloudDownload="\uf0ed";fa.cloudUpload="\uf0ee";fa.userMd="\uf0f0";fa.stethoscope="\uf0f1";fa.suitcase="\uf0f2";fa.bellO="\uf0a2";fa.coffee="\uf0f4";fa.cutlery="\uf0f5";fa.fileTextO="\uf0f6";fa.buildingO="\uf0f7";fa.hospitalO="\uf0f8";fa.ambulance="\uf0f9";fa.medkit="\uf0fa";fa.fighterJet="\uf0fb";fa.beer="\uf0fc";fa.hSquare="\uf0fd";fa.plusSquare="\uf0fe";fa.angleDoubleLeft="\uf100";fa.angleDoubleRight="\uf101";fa.angleDoubleUp="\uf102";fa.angleDoubleDown="\uf103";fa.angleLeft="\uf104";fa.angleRight="\uf105";fa.angleUp="\uf106";fa.angleDown="\uf107";fa.desktop="\uf108";fa.laptop="\uf109";fa.tablet="\uf10a";fa.mobilePhone="\uf10b";fa.mobile="\uf10b";fa.circleO="\uf10c";fa.quoteLeft="\uf10d";fa.quoteRight="\uf10e";fa.spinner="\uf110";fa.circle="\uf111";fa.mailReply="\uf112";fa.reply="\uf112";fa.githubAlt="\uf113";fa.folderO="\uf114";fa.folderOpenO="\uf115";fa.smileO="\uf118";fa.frownO="\uf119";fa.mehO="\uf11a";fa.gamepad="\uf11b";fa.keyboardO="\uf11c";fa.flagO="\uf11d";fa.flagCheckered="\uf11e";fa.terminal="\uf120";fa.code="\uf121";fa.mailReplyAll="\uf122";fa.replyAll="\uf122";fa.starHalfEmpty="\uf123";fa.starHalfFull="\uf123";fa.starHalfO="\uf123";fa.locationArrow="\uf124";fa.crop="\uf125";fa.codeFork="\uf126";fa.unlink="\uf127";fa.chainBroken="\uf127";fa.question="\uf128";fa.info="\uf129";fa.exclamation="\uf12a";fa.superscript="\uf12b";fa.subscript="\uf12c";fa.eraser="\uf12d";fa.puzzlePiece="\uf12e";fa.microphone="\uf130";fa.microphoneSlash="\uf131";fa.shield="\uf132";fa.calendarO="\uf133";fa.fireExtinguisher="\uf134";fa.rocket="\uf135";fa.maxcdn="\uf136";fa.chevronCircleLeft="\uf137";fa.chevronCircleRight="\uf138";fa.chevronCircleUp="\uf139";fa.chevronCircleDown="\uf13a";fa.html5="\uf13b";fa.css3="\uf13c";fa.anchor="\uf13d";fa.unlockAlt="\uf13e";fa.bullseye="\uf140";fa.ellipsisH="\uf141";fa.ellipsisV="\uf142";fa.rssSquare="\uf143";fa.playCircle="\uf144";fa.ticket="\uf145";fa.minusSquare="\uf146";fa.minusSquareO="\uf147";fa.levelUp="\uf148";fa.levelDown="\uf149";fa.checkSquare="\uf14a";fa.pencilSquare="\uf14b";fa.externalLinkSquare="\uf14c";fa.shareSquare="\uf14d";fa.compass="\uf14e";fa.toggleDown="\uf150";fa.caretSquareODown="\uf150";fa.toggleUp="\uf151";fa.caretSquareOUp="\uf151";fa.toggleRight="\uf152";fa.caretSquareORight="\uf152";fa.euro="\uf153";fa.eur="\uf153";fa.gbp="\uf154";fa.dollar="\uf155";fa.usd="\uf155";fa.rupee="\uf156";fa.inr="\uf156";fa.cny="\uf157";fa.rmb="\uf157";fa.yen="\uf157";fa.jpy="\uf157";fa.ruble="\uf158";fa.rouble="\uf158";fa.rub="\uf158";fa.won="\uf159";fa.krw="\uf159";fa.bitcoin="\uf15a";fa.btc="\uf15a";fa.file="\uf15b";fa.fileText="\uf15c";fa.sortAlphaAsc="\uf15d";fa.sortAlphaDesc="\uf15e";fa.sortAmountAsc="\uf160";fa.sortAmountDesc="\uf161";fa.sortNumericAsc="\uf162";fa.sortNumericDesc="\uf163";fa.thumbsUp="\uf164";fa.thumbsDown="\uf165";fa.youtubeSquare="\uf166";fa.youtube="\uf167";fa.xing="\uf168";fa.xingSquare="\uf169";fa.youtubePlay="\uf16a";fa.dropbox="\uf16b";fa.stackOverflow="\uf16c";fa.instagram="\uf16d";fa.flickr="\uf16e";fa.adn="\uf170";fa.bitbucket="\uf171";fa.bitbucketSquare="\uf172";fa.tumblr="\uf173";fa.tumblrSquare="\uf174";fa.longArrowDown="\uf175";fa.longArrowUp="\uf176";fa.longArrowLeft="\uf177";fa.longArrowRight="\uf178";fa.apple="\uf179";fa.windows="\uf17a";fa.android="\uf17b";fa.linux="\uf17c";fa.dribbble="\uf17d";fa.skype="\uf17e";fa.foursquare="\uf180";fa.trello="\uf181";fa.female="\uf182";fa.male="\uf183";fa.gittip="\uf184";fa.gratipay="\uf184";fa.sunO="\uf185";fa.moonO="\uf186";fa.archive="\uf187";fa.bug="\uf188";fa.vk="\uf189";fa.weibo="\uf18a";fa.renren="\uf18b";fa.pagelines="\uf18c";fa.stackExchange="\uf18d";fa.arrowCircleORight="\uf18e";fa.arrowCircleOLeft="\uf190";fa.toggleLeft="\uf191";fa.caretSquareOLeft="\uf191";fa.dotCircleO="\uf192";fa.wheelchair="\uf193";fa.vimeoSquare="\uf194";fa.turkishLira="\uf195";fa.try="\uf195";fa.plusSquareO="\uf196";fa.spaceShuttle="\uf197";fa.slack="\uf198";fa.envelopeSquare="\uf199";fa.wordpress="\uf19a";fa.openid="\uf19b";fa.institution="\uf19c";fa.bank="\uf19c";fa.university="\uf19c";fa.mortarBoard="\uf19d";fa.graduationCap="\uf19d";fa.yahoo="\uf19e";fa.google="\uf1a0";fa.reddit="\uf1a1";fa.redditSquare="\uf1a2";fa.stumbleuponCircle="\uf1a3";fa.stumbleupon="\uf1a4";fa.delicious="\uf1a5";fa.digg="\uf1a6";fa.piedPiperPp="\uf1a7";fa.piedPiperAlt="\uf1a8";fa.drupal="\uf1a9";fa.joomla="\uf1aa";fa.language="\uf1ab";fa.fax="\uf1ac";fa.building="\uf1ad";fa.child="\uf1ae";fa.paw="\uf1b0";fa.spoon="\uf1b1";fa.cube="\uf1b2";fa.cubes="\uf1b3";fa.behance="\uf1b4";fa.behanceSquare="\uf1b5";fa.steam="\uf1b6";fa.steamSquare="\uf1b7";fa.recycle="\uf1b8";fa.automobile="\uf1b9";fa.car="\uf1b9";fa.cab="\uf1ba";fa.taxi="\uf1ba";fa.tree="\uf1bb";fa.spotify="\uf1bc";fa.deviantart="\uf1bd";fa.soundcloud="\uf1be";fa.database="\uf1c0";fa.filePdfO="\uf1c1";fa.fileWordO="\uf1c2";fa.fileExcelO="\uf1c3";fa.filePowerpointO="\uf1c4";fa.filePhotoO="\uf1c5";fa.filePictureO="\uf1c5";fa.fileImageO="\uf1c5";fa.fileZipO="\uf1c6";fa.fileArchiveO="\uf1c6";fa.fileSoundO="\uf1c7";fa.fileAudioO="\uf1c7";fa.fileMovieO="\uf1c8";fa.fileVideoO="\uf1c8";fa.fileCodeO="\uf1c9";fa.vine="\uf1ca";fa.codepen="\uf1cb";fa.jsfiddle="\uf1cc";fa.lifeBouy="\uf1cd";fa.lifeBuoy="\uf1cd";fa.lifeSaver="\uf1cd";fa.support="\uf1cd";fa.lifeRing="\uf1cd";fa.circleONotch="\uf1ce";fa.ra="\uf1d0";fa.resistance="\uf1d0";fa.rebel="\uf1d0";fa.ge="\uf1d1";fa.empire="\uf1d1";fa.gitSquare="\uf1d2";fa.git="\uf1d3";fa.yCombinatorSquare="\uf1d4";fa.ycSquare="\uf1d4";fa.hackerNews="\uf1d4";fa.tencentWeibo="\uf1d5";fa.qq="\uf1d6";fa.wechat="\uf1d7";fa.weixin="\uf1d7";fa.send="\uf1d8";fa.paperPlane="\uf1d8";fa.sendO="\uf1d9";fa.paperPlaneO="\uf1d9";fa.history="\uf1da";fa.circleThin="\uf1db";fa.header="\uf1dc";fa.paragraph="\uf1dd";fa.sliders="\uf1de";fa.shareAlt="\uf1e0";fa.shareAltSquare="\uf1e1";fa.bomb="\uf1e2";fa.soccerBallO="\uf1e3";fa.futbolO="\uf1e3";fa.tty="\uf1e4";fa.binoculars="\uf1e5";fa.plug="\uf1e6";fa.slideshare="\uf1e7";fa.twitch="\uf1e8";fa.yelp="\uf1e9";fa.newspaperO="\uf1ea";fa.wifi="\uf1eb";fa.calculator="\uf1ec";fa.paypal="\uf1ed";fa.googleWallet="\uf1ee";fa.ccVisa="\uf1f0";fa.ccMastercard="\uf1f1";fa.ccDiscover="\uf1f2";fa.ccAmex="\uf1f3";fa.ccPaypal="\uf1f4";fa.ccStripe="\uf1f5";fa.bellSlash="\uf1f6";fa.bellSlashO="\uf1f7";fa.trash="\uf1f8";fa.copyright="\uf1f9";fa.at="\uf1fa";fa.eyedropper="\uf1fb";fa.paintBrush="\uf1fc";fa.birthdayCake="\uf1fd";fa.areaChart="\uf1fe";fa.pieChart="\uf200";fa.lineChart="\uf201";fa.lastfm="\uf202";fa.lastfmSquare="\uf203";fa.toggleOff="\uf204";fa.toggleOn="\uf205";fa.bicycle="\uf206";fa.bus="\uf207";fa.ioxhost="\uf208";fa.angellist="\uf209";fa.cc="\uf20a";fa.shekel="\uf20b";fa.sheqel="\uf20b";fa.ils="\uf20b";fa.meanpath="\uf20c";fa.buysellads="\uf20d";fa.connectdevelop="\uf20e";fa.dashcube="\uf210";fa.forumbee="\uf211";fa.leanpub="\uf212";fa.sellsy="\uf213";fa.shirtsinbulk="\uf214";fa.simplybuilt="\uf215";fa.skyatlas="\uf216";fa.cartPlus="\uf217";fa.cartArrowDown="\uf218";fa.diamond="\uf219";fa.ship="\uf21a";fa.userSecret="\uf21b";fa.motorcycle="\uf21c";fa.streetView="\uf21d";fa.heartbeat="\uf21e";fa.venus="\uf221";fa.mars="\uf222";fa.mercury="\uf223";fa.intersex="\uf224";fa.transgender="\uf224";fa.transgenderAlt="\uf225";fa.venusDouble="\uf226";fa.marsDouble="\uf227";fa.venusMars="\uf228";fa.marsStroke="\uf229";fa.marsStrokeV="\uf22a";fa.marsStrokeH="\uf22b";fa.neuter="\uf22c";fa.genderless="\uf22d";fa.facebookOfficial="\uf230";fa.pinterestP="\uf231";fa.whatsapp="\uf232";fa.server="\uf233";fa.userPlus="\uf234";fa.userTimes="\uf235";fa.hotel="\uf236";fa.bed="\uf236";fa.viacoin="\uf237";fa.train="\uf238";fa.subway="\uf239";fa.medium="\uf23a";fa.yc="\uf23b";fa.yCombinator="\uf23b";fa.optinMonster="\uf23c";fa.opencart="\uf23d";fa.expeditedssl="\uf23e";fa.battery4="\uf240";fa.battery="\uf240";fa.batteryFull="\uf240";fa.battery3="\uf241";fa.batteryThreeQuarters="\uf241";fa.battery2="\uf242";fa.batteryHalf="\uf242";fa.battery1="\uf243";fa.batteryQuarter="\uf243";fa.battery0="\uf244";fa.batteryEmpty="\uf244";fa.mousePointer="\uf245";fa.iCursor="\uf246";fa.objectGroup="\uf247";fa.objectUngroup="\uf248";fa.stickyNote="\uf249";fa.stickyNoteO="\uf24a";fa.ccJcb="\uf24b";fa.ccDinersClub="\uf24c";fa.clone="\uf24d";fa.balanceScale="\uf24e";fa.hourglassO="\uf250";fa.hourglass1="\uf251";fa.hourglassStart="\uf251";fa.hourglass2="\uf252";fa.hourglassHalf="\uf252";fa.hourglass3="\uf253";fa.hourglassEnd="\uf253";fa.hourglass="\uf254";fa.handGrabO="\uf255";fa.handRockO="\uf255";fa.handStopO="\uf256";fa.handPaperO="\uf256";fa.handScissorsO="\uf257";fa.handLizardO="\uf258";fa.handSpockO="\uf259";fa.handPointerO="\uf25a";fa.handPeaceO="\uf25b";fa.trademark="\uf25c";fa.registered="\uf25d";fa.creativeCommons="\uf25e";fa.gg="\uf260";fa.ggCircle="\uf261";fa.tripadvisor="\uf262";fa.odnoklassniki="\uf263";fa.odnoklassnikiSquare="\uf264";fa.getPocket="\uf265";fa.wikipediaW="\uf266";fa.safari="\uf267";fa.chrome="\uf268";fa.firefox="\uf269";fa.opera="\uf26a";fa.internetExplorer="\uf26b";fa.tv="\uf26c";fa.television="\uf26c";fa.contao="\uf26d";fa["500px"]="\uf26e";fa.amazon="\uf270";fa.calendarPlusO="\uf271";fa.calendarMinusO="\uf272";fa.calendarTimesO="\uf273";fa.calendarCheckO="\uf274";fa.industry="\uf275";fa.mapPin="\uf276";fa.mapSigns="\uf277";fa.mapO="\uf278";fa.map="\uf279";fa.commenting="\uf27a";fa.commentingO="\uf27b";fa.houzz="\uf27c";fa.vimeo="\uf27d";fa.blackTie="\uf27e";fa.fonticons="\uf280";fa.redditAlien="\uf281";fa.edge="\uf282";fa.creditCardAlt="\uf283";fa.codiepie="\uf284";fa.modx="\uf285";fa.fortAwesome="\uf286";fa.usb="\uf287";fa.productHunt="\uf288";fa.mixcloud="\uf289";fa.scribd="\uf28a";fa.pauseCircle="\uf28b";fa.pauseCircleO="\uf28c";fa.stopCircle="\uf28d";fa.stopCircleO="\uf28e";fa.shoppingBag="\uf290";fa.shoppingBasket="\uf291";fa.hashtag="\uf292";fa.bluetooth="\uf293";fa.bluetoothB="\uf294";fa.percent="\uf295";fa.gitlab="\uf296";fa.wpbeginner="\uf297";fa.wpforms="\uf298";fa.envira="\uf299";fa.universalAccess="\uf29a";fa.wheelchairAlt="\uf29b";fa.questionCircleO="\uf29c";fa.blind="\uf29d";fa.audioDescription="\uf29e";fa.volumeControlPhone="\uf2a0";fa.braille="\uf2a1";fa.assistiveListeningSystems="\uf2a2";fa.aslInterpreting="\uf2a3";fa.americanSignLanguageInterpreting="\uf2a3";fa.deafness="\uf2a4";fa.hardOfHearing="\uf2a4";fa.deaf="\uf2a4";fa.glide="\uf2a5";fa.glideG="\uf2a6";fa.signing="\uf2a7";fa.signLanguage="\uf2a7";fa.lowVision="\uf2a8";fa.viadeo="\uf2a9";fa.viadeoSquare="\uf2aa";fa.snapchat="\uf2ab";fa.snapchatGhost="\uf2ac";fa.snapchatSquare="\uf2ad";fa.piedPiper="\uf2ae";fa.firstOrder="\uf2b0";fa.yoast="\uf2b1";fa.themeisle="\uf2b2";fa.googlePlusCircle="\uf2b3";fa.googlePlusOfficial="\uf2b3";fa.fa="\uf2b4";fa.fontAwesome="\uf2b4";fa.handshakeO="\uf2b5";fa.envelopeOpen="\uf2b6";fa.envelopeOpenO="\uf2b7";fa.linode="\uf2b8";fa.addressBook="\uf2b9";fa.addressBookO="\uf2ba";fa.vcard="\uf2bb";fa.addressCard="\uf2bb";fa.vcardO="\uf2bc";fa.addressCardO="\uf2bc";fa.userCircle="\uf2bd";fa.userCircleO="\uf2be";fa.userO="\uf2c0";fa.idBadge="\uf2c1";fa.driversLicense="\uf2c2";fa.idCard="\uf2c2";fa.driversLicenseO="\uf2c3";fa.idCardO="\uf2c3";fa.quora="\uf2c4";fa.freeCodeCamp="\uf2c5";fa.telegram="\uf2c6";fa.thermometer4="\uf2c7";fa.thermometer="\uf2c7";fa.thermometerFull="\uf2c7";fa.thermometer3="\uf2c8";fa.thermometerThreeQuarters="\uf2c8";fa.thermometer2="\uf2c9";fa.thermometerHalf="\uf2c9";fa.thermometer1="\uf2ca";fa.thermometerQuarter="\uf2ca";fa.thermometer0="\uf2cb";fa.thermometerEmpty="\uf2cb";fa.shower="\uf2cc";fa.bathtub="\uf2cd";fa.s15="\uf2cd";fa.bath="\uf2cd";fa.podcast="\uf2ce";fa.windowMaximize="\uf2d0";fa.windowMinimize="\uf2d1";fa.windowRestore="\uf2d2";fa.timesRectangle="\uf2d3";fa.windowClose="\uf2d3";fa.timesRectangleO="\uf2d4";fa.windowCloseO="\uf2d4";fa.bandcamp="\uf2d5";fa.grav="\uf2d6";fa.etsy="\uf2d7";fa.imdb="\uf2d8";fa.ravelry="\uf2d9";fa.eercast="\uf2da";fa.microchip="\uf2db";fa.snowflakeO="\uf2dc";fa.superpowers="\uf2dd";fa.wpexplorer="\uf2de";fa.meetup="\uf2e0";module.exports=fa;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: _path2.default.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.js$/, include: _path2.default.resolve(__dirname, 'src'), use: 'babel-loader' }]
  }
};


/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);