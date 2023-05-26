(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"lynch_atlas_1", frames: [[0,0,1421,1640]]},
		{name:"lynch_atlas_2", frames: [[0,0,1232,1328]]},
		{name:"lynch_atlas_3", frames: [[0,0,1854,880],[0,882,1280,628],[1282,882,665,970]]},
		{name:"lynch_atlas_4", frames: [[943,1309,841,612],[847,0,843,659],[0,1443,941,571],[847,661,824,646],[0,759,822,682],[0,0,845,757]]},
		{name:"lynch_atlas_5", frames: [[0,578,840,590],[894,0,840,564],[0,0,892,576],[0,1170,840,558],[842,578,842,567],[842,1147,849,558]]},
		{name:"lynch_atlas_6", frames: [[0,1300,840,540],[0,0,841,557],[843,0,813,574],[842,1300,776,527],[0,576,1280,360],[0,938,1280,360]]},
		{name:"lynch_atlas_7", frames: [[0,530,734,432],[1338,978,655,455],[0,0,770,528],[0,1435,782,381],[0,964,712,422],[1338,416,563,560],[772,0,823,414],[784,1435,1017,273],[772,416,564,564]]},
		{name:"lynch_atlas_8", frames: [[1236,1219,640,133],[667,0,609,253],[1278,0,609,253],[0,1227,469,171],[1236,1354,469,171],[0,1400,469,171],[471,1403,469,171],[1243,827,734,156],[0,362,1909,117],[2028,0,13,12],[1273,1527,216,218],[1889,0,113,107],[327,892,651,153],[699,481,786,190],[2004,0,22,16],[238,1573,176,170],[1707,1354,262,221],[0,1573,236,180],[980,985,557,178],[0,481,697,215],[0,1047,557,178],[0,698,325,325],[1539,985,410,232],[1491,1527,192,160],[699,673,542,217],[559,1047,291,314],[852,1165,382,236],[327,698,329,171],[0,0,665,360],[942,1527,329,171],[1487,481,428,344]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_41 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["lynch_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["lynch_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["lynch_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["lynch_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["lynch_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["lynch_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["lynch_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["lynch_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["lynch_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["lynch_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["lynch_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["lynch_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["lynch_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["lynch_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lynch_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lynch_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bluedark = function() {
	this.initialize(img.bluedark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3484,2036);


(lib.bluelight = function() {
	this.initialize(img.bluelight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3540,2074);


(lib.colon = function() {
	this.initialize(img.colon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2166,2041);


(lib.dna3 = function() {
	this.initialize(img.dna3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,7000);


(lib._double = function() {
	this.initialize(img._double);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3556,2108);


(lib.double_small = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.epcamtitle = function() {
	this.initialize(img.epcamtitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2532,1170);


(lib.facebookicon = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.femalebody = function() {
	this.initialize(img.femalebody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1564,2652);


(lib.instagramicon = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lynchlreland = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.mlh1 = function() {
	this.initialize(img.mlh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,1082);


(lib.more = function() {
	this.initialize(ss["lynch_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.msh2caption = function() {
	this.initialize(img.msh2caption);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4096,3072);


(lib.msh6caption = function() {
	this.initialize(ss["lynch_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ovaries = function() {
	this.initialize(img.ovaries);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4096,3072);


(lib.PMS2TITLE = function() {
	this.initialize(img.PMS2TITLE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2532,1170);


(lib.Screenshot20220705at115052PM = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot20221014at120955AM = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot20221014at121615AM = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot20221201at91028PM = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Sketches = function() {
	this.initialize(img.Sketches);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2532,1170);


(lib.stomach = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.stomach03 = function() {
	this.initialize(ss["lynch_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sure_logohighres = function() {
	this.initialize(ss["lynch_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.initialize(ss["lynch_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.twittericon = function() {
	this.initialize(ss["lynch_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.urinarytract1 = function() {
	this.initialize(ss["lynch_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.uterus = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.whatpagecaptionfinal = function() {
	this.initialize(ss["lynch_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wholegut = function() {
	this.initialize(img.wholegut);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2166,2044);


(lib.图层2 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.图层2_1 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.图层2_2 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.图层2_3 = function() {
	this.initialize(img.图层2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,982,2460);


(lib.图层4 = function() {
	this.initialize(ss["lynch_atlas_8"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.图层1_1 = function() {
	this.initialize(img.图层1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,698,7000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitebackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhxxBBfMAAAiC9MDjjAAAMAAACC9g");
	this.shape.setTransform(728.2,419.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456.4,838.2);


(lib.wherepage_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhuzBP3MAAAiftMDdnAAAMAAACftg");
	this.shape.setTransform(709.15,511.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1418.3,1022.3);


(lib.where = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("More about Lynch Syndrome", "normal 400 30px 'Raleway'", "#000033");
	this.text.lineHeight = 43;
	this.text.lineWidth = 416;
	this.text.parent = this;
	this.text.setTransform(-59.55,-50.8);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_39();
	this.instance.setTransform(-11.8,-11.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_40();
	this.instance_1.setTransform(-11.8,-11.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-52.8,419.8,167.6);


(lib.what = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("What is Lynch Syndrome?", "normal 400 30px 'Raleway'", "#000033");
	this.text.lineHeight = 43;
	this.text.lineWidth = 370;
	this.text.parent = this;
	this.text.setTransform(-74,-38.95);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_35();
	this.instance.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_36();
	this.instance_1.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_37();
	this.instance_2.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_38();
	this.instance_3.setTransform(-7.2,-7.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-40.9,374.1,118.5);


(lib.website1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("website", "normal 400 25px 'Raleway'", "#0000CC");
	this.text.lineHeight = 36;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,38.1);


(lib.urinarytract = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.urinarytract1();
	this.instance.setTransform(0,0,0.3081,0.3906);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.9,378.9);


(lib.ukcancergeneticgroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Screenshot20221014at121615AM();

	this.text = new cjs.Text("A national organisation with links to gene specific guidelines for Lynch Syndrome", "normal 400 25px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 305;
	this.text.parent = this;
	this.text.setTransform(184.15,17.7);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:1.2297,scaleY:1.2297,x:-173,y:-18}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-18,511.4,196.8);


(lib.twitter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.twittericon();
	this.instance.setTransform(0,0,0.1055,0.1055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1091,scaleY:0.1091},0).wait(1).to({scaleX:0.1055,scaleY:0.1055},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.5,61.5);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The PMS2 mutation increases the risk of prostate cancer in the lifetime of carriers with male reproductive organs to 18%. This risk is the same as  in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 376;
	this.text.parent = this;
	this.text.setTransform(13.9,68);

	this.text_1 = new cjs.Text("PROSTATE", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 240;
	this.text_1.parent = this;
	this.text_1.setTransform(90.05,7.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("AfQj5IAAHzMg+fAAAIAAnzg");
	this.shape.setTransform(200,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfQvxIAAfjMg+fAAAIAA/j");
	this.shape_1.setTransform(200,151);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A/PPyIAA/jMA+fAAAIAAfjg");
	this.shape_2.setTransform(200,151);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A/PD6IAAnzMA+fAAAIAAHzg");
	this.shape_3.setTransform(200,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,420,319.6);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of prostate cancer in the lifetime of carriers with male reproductive organs to 18%. This risk is similar to the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 356;
	this.text.parent = this;
	this.text.setTransform(25.3,107.2);

	this.text_1 = new cjs.Text("PROSTATE", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 219;
	this.text_1.parent = this;
	this.text_1.setTransform(197.55,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("AfQldIAAK7Mg+fAAAIAAq7g");
	this.shape.setTransform(200,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfQ0EMAAAAoJMg+fAAAMAAAgoJ");
	this.shape_1.setTransform(200,198.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A/PUFMAAAgoJMA+fAAAMAAAAoJg");
	this.shape_2.setTransform(200,198.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A/PFeIAAq7MA+fAAAIAAK7g");
	this.shape_3.setTransform(200,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,420,347);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of ovarian cancer in the lifetime of carriers to 11%. This risk is 2% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 375;
	this.text.parent = this;
	this.text.setTransform(15.05,95.5);

	this.text_1 = new cjs.Text("Ovaries", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 144;
	this.text_1.parent = this;
	this.text_1.setTransform(128.15,22);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("AfQj5IAAHzMg+fAAAIAAnzg");
	this.shape.setTransform(200,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfQvnIAAfPMg+fAAAIAA/P");
	this.shape_1.setTransform(200,170);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A/PPoIAA/PMA+fAAAIAAfPg");
	this.shape_2.setTransform(200,170);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A/PD6IAAnzMA+fAAAIAAHzg");
	this.shape_3.setTransform(200,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,10,420,270);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of cancer in the Ureter/kidney of carriers with male reproductive organs to 18%. This risk is 3% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 374;
	this.text.parent = this;
	this.text.setTransform(16.1,112.5);

	this.text_1 = new cjs.Text("Ureter/kidney", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 245;
	this.text_1.parent = this;
	this.text_1.setTransform(194.3,14.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("AfQldIAAK7Mg+fAAAIAAq7g");
	this.shape.setTransform(200,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,2,1).p("AfQ0FMAAAAoLMg+fAAAMAAAgoL");
	this.shape_1.setTransform(200,198.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A/PUFMAAAgoJMA+fAAAMAAAAoJg");
	this.shape_2.setTransform(200,198.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A/PFeIAAq7MA+fAAAIAAK7g");
	this.shape_3.setTransform(200,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,420,347.1);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(" The MLH1 mutation increases the risk of upper gastrointestinal cancer in the lifetime of carriers to 11%. This risk is 4% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(25.8,107.7);

	this.text_1 = new cjs.Text("Upper \ngastrointestinal", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 292;
	this.text_1.parent = this;
	this.text_1.setTransform(197.85,1.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("AfQFeMg+fAAAIAAq7MA+fAAAIAAJs");
	this.shape.setTransform(200,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfQxfMAAAAi/Mg+fAAAMAAAgi/");
	this.shape_1.setTransform(200,188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A/PRgMAAAgi/MA+fAAAMAAAAi/g");
	this.shape_2.setTransform(200,188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A/PFeIAAq7MA+fAAAIAAJrIAABQg");
	this.shape_3.setTransform(200,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-10,-4,420,314), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of cancer in the prostate of carriers with male reproductive organs to 24%. This risk is 18% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 335;
	this.text.parent = this;
	this.text.setTransform(12,112.4);

	this.text_1 = new cjs.Text("Prostate", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 166;
	this.text_1.parent = this;
	this.text_1.setTransform(108.2,42.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("A8AkiMA4BAAAIAAJFMg4BAAAg");
	this.shape.setTransform(179.275,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AcBwvMAAAAheMg4BAAAMAAAghe");
	this.shape_1.setTransform(179.275,193.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("A8AEiIAApDMA4BAAAIAAJDg");
	this.shape_2.setTransform(179.275,57.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("A8AQvMAAAgheMA4BAAAMAAAAheg");
	this.shape_3.setTransform(179.275,193.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,18.1,378.6,292.4);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of cancer in the Ureter/kidney of carriers with female reproductive organs to 19%. This risk is 2% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 355;
	this.text.parent = this;
	this.text.setTransform(32.05,90.4);

	this.text_1 = new cjs.Text("Kidney", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 150;
	this.text_1.parent = this;
	this.text_1.setTransform(120.2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("A/IloMA+RAAAIAALRMg+RAAAg");
	this.shape.setTransform(199.3,36.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfJxrMAAAAjXMg+RAAAMAAAgjX");
	this.shape_1.setTransform(199.3,185.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("A/IFoIAArQMA+RAAAIAALQg");
	this.shape_2.setTransform(199.3,36.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("A/IRsMAAAgjXMA+RAAAMAAAAjXg");
	this.shape_3.setTransform(199.3,185.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,418.6,318.5);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of urinary bladder cancer in carriers with male reproductive organs to 7%. This risk is 2% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 387;
	this.text.parent = this;
	this.text.setTransform(12.05,83.2);

	this.text_1 = new cjs.Text("Bladder", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 224;
	this.text_1.parent = this;
	this.text_1.setTransform(106.2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("Ae1vzIAAfmMg9pAAAIAA/m");
	this.shape.setTransform(197.275,163.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(20,1,1).p("A+0k2MA9pAAAIAAJtMg9pAAAg");
	this.shape_1.setTransform(197.275,31.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A+0P0IAA/nMA9pAAAIAAfng");
	this.shape_2.setTransform(197.275,163.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A+0E2IAApsMA9pAAAIAAJsg");
	this.shape_3.setTransform(197.275,31.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,414.6,284.4);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to 51%. This risk is 7% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(51.6,91.5,0.9936,1);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 242;
	this.text_1.parent = this;
	this.text_1.setTransform(124.3,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("Ad0vRIAAe/A9zRNMAAAgibAd0RPMg7nAAA");
	this.shape.setTransform(230.925,184.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(20,1,1).p("A9tlZMA7bAAAIAAKzMg7bAAAg");
	this.shape_1.setTransform(230.6,21.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A9zSqIAAgCMAAAgibIAAi2IADAAMA7bAAAIAJAAIAAEzIAAe/IAABhg");
	this.shape_2.setTransform(230.925,175.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A9tFaIAAqzMA7bAAAIAAKzg");
	this.shape_3.setTransform(230.6,21.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.2,-22.9,401.5,356);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Stomach", "35px 'Helvetica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 242;
	this.text.parent = this;
	this.text.setTransform(197.85,108.75);

	this.text_1 = new cjs.Text("The MLH1 mutation increases the risk of gastric cancer in carriers with male reproductive organs to 22%. This risk is 2% in the general population.", "25px 'Helvetica'");
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 348;
	this.text_1.parent = this;
	this.text_1.setTransform(26.7,198.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,2,1).p("A/PldMA+fAAAIAAK7IAAAAMg+fAAAg");
	this.shape.setTransform(195.775,128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfQ0sMAAAApZMg+fAAAMAAAgpZ");
	this.shape_1.setTransform(195.75,295.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AfQFeMg+fAAAIAAq7MA+fAAAIAAK7g");
	this.shape_2.setTransform(195.775,128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("A/PUtMAAAgpZMA+fAAAMAAAApZg");
	this.shape_3.setTransform(195.75,295.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,83,420,355);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others.\n\nClick on the body to find out which organs have a cancer risk that is above 10%.", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 446;
	this.text.parent = this;
	this.text.setTransform(9.3,12.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("Egj0gQCMBHpAAAMAAAAgFMhHpAAAg");
	this.shape.setTransform(229.325,102.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Egj0AQDMAAAggFMBHpAAAMAAAAgFg");
	this.shape_1.setTransform(229.325,102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,478.7,225.4);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The PMS2 mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others.\n\nClick on the body to find out which organs have cancer risk that is above 10%", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 418;
	this.text.parent = this;
	this.text.setTransform(20,18.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(21,1,1).p("EgkagQVMBI1AAAMAAAAgrMhI1AAAg");
	this.shape.setTransform(233.05,104.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgkaAQWMAAAggrMBI1AAAMAAAAgrg");
	this.shape_1.setTransform(233.05,104.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,487.1,230.3);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others.\n\nClick on the body to find out which organs have a cancer risk that is above 10%", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 421;
	this.text.parent = this;
	this.text.setTransform(11.7,21.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(21,1,1).p("EgibgRYMBE3AAAMAAAAixMhE3AAAg");
	this.shape.setTransform(220.375,111.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgibARZMAAAgixMBE3AAAMAAAAixg");
	this.shape_1.setTransform(220.375,111.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,461.8,243.7);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others.\n\nClick on the body to find out which organs have a cancer risk that is above 10%", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 395;
	this.text.parent = this;
	this.text.setTransform(23.95,32.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(29,1,1).p("EgjLgXnMBGXAAAMAAAAvPMhGXAAAg");
	this.shape.setTransform(225.225,151.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgjLAXoMAAAgvPMBGXAAAMAAAAvPg");
	this.shape_1.setTransform(225.225,151.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,479.5,331.5);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016500").s().p("AirIMQgZgYgDgHQgUgZgwgtQgugqgRgZQgwg1hPhLQhphkgagbIABAAIgVgaQgOgQgJgFQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBgBAAIgLgKIABAAIgigjIAegbQApgoAUgeQAEgCAOgMQAOgOAFgCQAugpBEhGIB0h6IAFgBQADgBAFgFIgDgFQAQgLAhgjQAeggATgMIAGgOICHiKIgCDwIgKBSIADBpIgLASIABAAQAFgCgDgDQAIACADgDIAGgFIAFAEIASgBQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAHgBAKgEIgJgEIAGAAIAAABQAeAKAQgCQAHgBAFgCIgCABQARgCAZABQAcAAARgBIgLgGQAIgCAzgBQA2gCAGAEQAYADAygCQAwgCAWAEQA0AFBNgDICBgDIA0AAIgJBEIAAgBIgHAZQgDAQACAJIgCAAIAAALIgBgBQgHAxAEAbQgCACgBAFIgKApIghgBQgWAAgGgBQgvgChKAHIh/AMIgDgDQgCgBgGAAIAAAGQgPgCglADQghAEgRgEIgKAGIiZANIg+gEIhPAJIgHgFIAAABIgCAHIAAgHIABgBIgCgBIABACIgDAGQABgBABAFQABAHADgEQgDAKADAFIAGAHIgEAHIAAAYQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABIACAMIADALIADgLIAAAEIAAADIAAAAQgMApACAVQABAIABAFIAAgBQACAXgBAgQgDAmABAWIAHgPQABAGAAAmIAABIIgDB1gAh/BlIACABIgCADIgCA4IADAAIABgOQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBAAIAAAAIgBAAIADgFQADgDABgGIgCgBIADgHQABgCgBAKQAEgHAIgWIgIgEIgJgXIgCAAgAgriDQgMgDgDADIAAgDQgFgBgFABIgCABIgBABIgDgCQgCgDgFgBIAAABIgFgCQgCgBAHABQgEgDgMgGIgDAFIgXAKIAAACIBQAAIAAAAgAgjiwIAAAAIAAAAg");
	this.shape.setTransform(61.725,49.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-11.5,135.10000000000002,121.5);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("OVARIES", "35px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(-4,28.05);

	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(-100.4,8,0.5,0.5);

	this.text_1 = new cjs.Text("The MLH1 mutation increases the risk of ovarian cancer in the lifetime of carriers to 11%. This risk is 2% in the general population.", "20px 'Helvetica'");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 315;
	this.text_1.parent = this;
	this.text_1.setTransform(-74.05,107.65);

	this.instance_1 = new lib.CachedBmp_33();
	this.instance_1.setTransform(-100.45,40,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.4,8,367,248);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The PMS2 mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to 13%. This risk is 7% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 379;
	this.text.parent = this;
	this.text.setTransform(-6.2606,99.35,0.9467,1);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 284;
	this.text_1.parent = this;
	this.text_1.setTransform(61.1,25.35,0.847,1);

	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-36,11.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,11.4,420.5,306);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The PMS2 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to 12%. This risk is 6% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 367;
	this.text.parent = this;
	this.text.setTransform(-68,122.65);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 304;
	this.text_1.parent = this;
	this.text_1.setTransform(-7,40.05,0.7921,1);

	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-98.5,26.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,26.1,420,308);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhuzhB8MDdnAAAMAAACD5MjdnAAAg");
	this.shape.setTransform(709.15,422.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhuzBB9MAAAiD5MDdmAAAMAAACD5g");
	this.shape_1.setTransform(709.15,422.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1420.3,846.2);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dna3();
	this.instance.setTransform(0,0,0.2808,0.2987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,2091);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.图层1_1();
	this.instance.setTransform(0,0,0.3096,0.3096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.1,2167.2);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to 75%. ", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(34,80.7);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 268;
	this.text_1.parent = this;
	this.text_1.setTransform(206,1.15);

	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-4,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-10,420,282);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to 18%. This risk is 7% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 364;
	this.text.parent = this;
	this.text.setTransform(97.25,119.3);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 256;
	this.text_1.parent = this;
	this.text_1.setTransform(273.15,32.7);

	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(65.85,11.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.9,11.1,421.5,329.5);


(lib.surelogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sure_logohighres();
	this.instance.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,82.9);


(lib.SURE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Sheffield Undergraduate Research Experience (SURE) ", "normal 400 25px 'Raleway'", "#1600FE");
	this.text.lineHeight = 36;
	this.text.lineWidth = 636;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639.5,38.1);


(lib.stomach_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stomach03();
	this.instance.setTransform(13.2,0,0.0996,0.0765,7.4738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1076,scaleY:0.0826,rotation:7.4583,x:8.8,y:-4.65},0).wait(1).to({scaleX:0.0996,scaleY:0.0765,rotation:7.4738,x:13.2,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.6,145.6,126);


(lib.royalmarsden = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Specialist cancer hospital with a beginners guide to Lynch Syndrome", "normal 400 25px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 310;
	this.text.parent = this;
	this.text.setTransform(421.1,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot20221014at120955AM();
	this.instance.setTransform(0,0,0.3987,0.3987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4421,scaleY:0.4421,x:-160,y:-6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-6,738.2,120.7);


(lib.q4answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch Syndrome is diagnosed through genetic testing.", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 389;
	this.text.parent = this;
	this.text.setTransform(35.35,163.75);

	this.text_1 = new cjs.Text("How do I know \nif I have Lynch Syndrome?", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 406;
	this.text_1.parent = this;
	this.text_1.setTransform(221.05,13.85);

	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-2.7,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2,470.5,285.5);


(lib.q4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("    How do I know if I have Lynch Syndrome?", "normal 400 35px 'Raleway'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 781;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAeIgQgPIgEgPQACgGAEgHQADgGAFgFQADgDADAAQAHgCAHAAIAKAAIAOAPIAGAOIgGAPIgOAPIgYAAg");
	this.shape.setTransform(19.6,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg4pgErMBxTAAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAMhxTAAAQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAg");
	this.shape_1.setTransform(392.575,29.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg4pAEsQh8gBhYhXQhYhYAAh8QAAh7BYhYQBYhXB8gBMBxTAAAQB8ABBYBXQBYBYAAB7QAAB8hYBYQhYBXh8ABg");
	this.shape_2.setTransform(392.575,29.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,787.2,61.9);


(lib.q3answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch Syndrome is an autosomal dominant condition. This means that if you have it, your children have a 50% chance of inheriting it from you. ", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 388;
	this.text.parent = this;
	this.text.setTransform(20,157.3);

	this.text_1 = new cjs.Text("How is Lynch \nSyndrome passed on?", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 415;
	this.text_1.parent = this;
	this.text_1.setTransform(223.35,35.25);

	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(0.65,15.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,15.7,446,288);


(lib.q3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("    How is Lynch Syndrome passed on? ", "normal 400 35px 'Raleway'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 830;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAeIgQgPIgEgPQACgGAEgHQADgGAFgFQADgDADAAQAHgCAHAAIAKAAIAOAPIAGAOIgGAPIgOAPIgYAAg");
	this.shape.setTransform(19.6,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg61gE2MB1rAAAQB8AABYBYQBYBYAAB8IAAAVQAAB8hYBXQhYBZh8AAMh1rAAAQh8AAhYhZQhYhXAAh8IAAgVQAAh8BYhYQBYhYB8AAg");
	this.shape_1.setTransform(406.625,31.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg61AE2Qh8ABhYhZQhYhXAAh8IAAgVQAAh8BYhXQBYhZB8AAMB1rAAAQB8AABYBZQBYBXAAB8IAAAVQAAB8hYBXQhYBZh8gBg");
	this.shape_2.setTransform(406.625,31.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,834.8,64.1);


(lib.q2answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("How does Lynch Syndrome work?", "35px 'Helvetica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(203.15,44.7);

	this.text_1 = new cjs.Text("If you have Lynch Syndrome, you are at greater risk of developing cancer because your cells’ ability to repair DNA damage may be affected by the gene mutation.", "20px 'Helvetica'");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 360;
	this.text_1.parent = this;
	this.text_1.setTransform(20,170.75);

	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-1.4,19.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,19.7,412,323);


(lib.q2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("    How does Lynch Syndrome work?", "normal 400 35px 'Raleway'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 951;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAeIgEgEQgOgNgBgJQgCgMAQgQIAGgEQADgBAEAAIAPABIAGAEQANAMABAJQADAPgSAOIgFAEIgFAAg");
	this.shape.setTransform(19.6045,31.7917);

	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(10.75,1.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_24();
	this.instance_1.setTransform(16.4,28.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 37px 'Raleway'",color:"#252526",lineHeight:52.5}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).to({state:[{t:this.instance_1},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,965.3,67.3);


(lib.q1answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch Syndrome is a condition that increases the risk of certain cancers. It is caused by a mutation in one of five different genes: MLH1, MSH2, MSH6, PMS2, EPCAM.", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 362;
	this.text.parent = this;
	this.text.setTransform(50.15,148.15);

	this.text_1 = new cjs.Text("What is \nLynch Syndrome?", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 326;
	this.text_1.parent = this;
	this.text_1.setTransform(229.3,30.05);

	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(25.9,10.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.9,10.1,411,341);


(lib.q1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// question
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAeIgFAAIgFgEQgRgPACgOQACgIALgMIAHgFQACgBAEAAIAFABIALAAQADABAGAGIAGAGQAFAGABAIQAAAHgDAGQgDAHgJAGQgCADgDABIgHABg");
	this.shape.setTransform(21.6125,31.5417);

	this.q1 = new cjs.Text("    What is Lynch Syndrome?", "normal 400 35px 'Raleway'");
	this.q1.name = "q1";
	this.q1.lineHeight = 50;
	this.q1.lineWidth = 1205;
	this.q1.parent = this;
	this.q1.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.q1);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg4pgEsMBxTAAAQB8AABYBYQBYBYAAB8IAAABQAAB8hYBXQhYBZh8AAMhxTAAAQh8AAhYhZQhYhXAAh8IAAgBQAAh8BYhYQBYhYB8AAg");
	this.shape_1.setTransform(392.6,30.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg4pAEtQh8AAhYhZQhYhXAAh9IAAAAQAAh8BYhXQBYhZB8AAMBxTAAAQB8AABYBZQBYBXAAB8IAAAAQAAB9hYBXQhYBZh8AAg");
	this.shape_2.setTransform(392.6,30.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8,text:"    What is Lynch Syndrome?"}},{t:this.shape}]}).to({state:[{t:this.q1,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5,text:"    What is Lynch Syndrome?"}},{t:this.shape}]},1).to({state:[{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8,text:"    What is Lynch Syndrome?"}},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8,text:"    What is lynch syndrome?"}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1209.6,68.2);


(lib.projectwebsite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("project ", "normal 400 25px 'Raleway'", "#0000CC");
	this.text.lineHeight = 36;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.7,38.1);


(lib.popupnavigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010032").s().p("ACbEJQAEgFgGACQgGACADgGQAGgIgHAFQgIAFAGgHQACgGgGAGIgJAGIAEgFQAEgHgFAFQgSARAFgIQADgFgCAAIgDgBIgDAFQAAgFgJgDQgGgDADgKQgQAQAQgQIAAgDIgDACQABAAAAgBQABAAAAABQAAAAgBABQAAABgBABIgCACIACgFIgMALQgHAGAJgLQAGgIgDADQgBABAAAAQAAAAAAgBQAAAAABgBQABgBABgBQgMAJABgJQABgKgNAKIACgBIAAgEIgJAMQADgEgDABQgBABAAAAQgBAAAAgBQAAAAABgBQABgBABgBIABgBQAFgGABgCIAAgDIgGAHIgFAEQAEgHgDgBQgEAAAFgHIgIAHQAEgFgJADQgHAEAIgNIgYAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCAHgKQADgHgHAEQgIAFgBgCQAJgKgBABQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBQgHAIABgCQAAgDgFAGIAIgJIgCgGIADgCIACgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQABAAAAgBIgKAKIAKgLIAAgBIgDACIAEgDQAHgLgSAUIAFgIQgEADgEAHIAEgHQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAEgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgDgHAGIgNAPIAHgFIgOANIAGgIQgBABgBAAQAAAAAAAAQgBAAABAAQAAgBAAgBQACgCgGAGIAJgKIgJAIQAPgPADgHIABgDIgKAMIAIgKQABgCAAAAQAAgBAAABQgBAAgBABQgBABgCABIAIgJQABgDgGAIQgCACAAAAQgBABAAABQgBAAAAgBQABAAAAgBIAHgIIgJAFQgGACAFgHIADgDQADgGgFADIgCACIgDABIAGgHIgEACIAFgGQAFgIgLAIIgCAEIgYAbIgEADQgEAEADgFIAKgKIgPANQASgSAGgMQgBAAgHAFQgFADADgFIAMgPQAAgBgHAHQgCACgBABQgBABAAAAQgBABABAAQAAgBAAAAQACgFgEAFQgBABAAAAQgBABAAAAQAAAAAAAAQgBAAABgBIgBABIABgBQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAAAABIgCAAIgEACIAFAOQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgDAAgIgJIgBABIAAgBIAAAAQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBQAHAIgCgBQAAAAAAAAQgBAAABABQAAAAAAABQABAAAAABIgGgHIgFAAIgCgCIgDgDQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAJALIgKgLIgBAAIABABIgCgDQgJgHARAUIgHgIIAIAKIgFgGQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgDgFQAAAAAAABQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgCAFAGIAOAPIAGAJIgHgIQADAEgDgDQgDgBAGAHIgKgLIAIAKQgOgRgFgEIgDgCIAKAMIgJgJQgBgBAAAAQgBgBAAABQABAAAAABQABACACACIgIgKIAEAGQABACABAAQABABAAABQAAAAAAAAQAAAAgBgBIgHgIIAEAJQADAGgHgGIgEgDQgEgEACAFIACACIAAADIgFgGIABADIgFgGQgIgGAJAMIADACIAXAcIADAFQADAEgDgEIgKgLIAJANQgOgRgJgHIAEAHQADAGgFgEIgNgOQAPASgHgGQgBgBgBAAQAAAAAAAAQAAAAAAABQABAAABABQABABAAABQABABAAAAQAAAAAAAAQAAAAgBAAIABABIgBgBQgBgBgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABIABACIADAEQAMAOgPgOIAJAKQgQgNgFABIgFgEIACADIAEADIgKgEQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABIAEAFIgMgMQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIAAACIgDgEIABgEIABgDIgHgIIgHgGIAJALQgHgGgBACQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAgBQgCAAAIAKIgBgEIAGAGQgBABAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCgCIAAAAIgOgLIABgBIgKgJQgCgCAHAJQAFAGgKgJIgJgJQAFAGgGgFIgMgJIAbAbIgFgCQgBAAAAAAQgBAAAAABQAAAAABABQAAAAAAABIgHgHIAEAFIgFgEQAFAGASAUIgCgDQAHAIgKgHQgMgJACAEIAJAJIgMgKQAGAHgDgBIgGgEIgHgHIgJgIQAMAMgFgEQgLgNgEAAQAAAAgBAAQAAgBAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAAAQgBAAAAgBQgBAAgBgBIgPgMQgNgLAGAIIgGgGIgBAAIgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABIgIgHIADACIgGgEQgCgCADABIgmgiQgGgHgBgHIAGAFIgEgFIgIgJQAGAFgFgGIgKgMIAIAIIAAgFIAGAGIgHgLIgGgGIgBgBIABABQAXASgDgGQgGgKABABIACAEQgDgIAFAAQAGgBgBgEIgNgMQgDgFAEgHQAEgIAHAHQAJAEABgJQACgJAKAHQAOACAFgNQAGgRAEgDIABABIAAAAQAHgHgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBQgHAIABgCQAAgBAAAAQgBAAAAAAQgBAAAAABQgBABgBABIAHgIIgBgFIACgDIADgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgKAKIAKgLQABgBAAAAQAAAAAAAAQAAAAgBABQgBABgBABIAEgEQAFgKgNAPIACgDIgIAJIAEgHQACgDgDACIAFgFQgBABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQACgDgHAGIgNAPIAHgFIgPAMIAHgHQgEACADgDQABgCgGAGIAJgLIgJAJIASgVIABgEIgJALIAHgJQABgBAAgBQAAAAAAAAQgBAAgBABQgBABgBACIAIgJQABgDgHAHQgBABgBABQgBABAAAAQAAAAAAAAQAAAAABgBIAGgHIgJAEQgFADAEgHIAEgEQACgEgEABIgCACIgDABIAFgGIgDABIAFgFQAFgJgLAJIgCAEIgZAbIgEADQgDADACgDIAKgLIgOAMQASgSAFgLQgBAAgHAFQgFAEAEgGIALgOQABgCgIAHQgBACgBABQgBABgBABQAAAAAAAAQAAgBABAAQACgFgEAFQgBABgBAAQAAABgBAAQAAAAAAAAQAAAAAAgBIAAAAQABgBAAgBQABgBAAAAQAAAAAAgBQAAAAgBAAIgCACIgEADQgIAIADgEIAFgHIgJAKQALgSgCgFQAHgLgHAIIgDAEQADgKAAgCQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBgBAAIgBACQAFgHABgEQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAgBAAIgDABIAEgFQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIABgCIAAABIgBABIgBAAIALgRIABAAIAIgLQABgCgHAHQgHAHAIgMIAHgKQgHAIANgWIgXAeIABgFQAAgBAAgBQgBAAAAAAQAAAAgBAAQAAAAgBABIAGgIIgFAEIAEgFIgXAaIACgDQgHAHAGgKQAGgNgDACQgBACgBACQgBABgBAAQAAAAAAAAQABgBABgCIgEAGIAGgMQgHAHABgDQADgGAAgBIAGgHIAHgKQgKAMACgEQALgNAAgEQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgBABgBIAJgRQAIgNgHAGIAGgHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIABgBIgDACIgBABQAGgHABgEIgDADIAFgFQABgCgBACQAKgOASgdQAHgHAHgCIgFAHIAFgEQACgCAGgHQgEAHAGgHIALgKIgHAJIAEAAIgFAGIAMgIIAFgJIgBACQgOAaAGgDIAIgGIgCACQAHgDABAFQACAGAFgBIAJgNQAFgEAJAEQAKADgGAIQgCAKAKACQAKABgFAMQAAAPAQAFQAVAGAEAEIgBAAIgDAKQAAAFAGgFIgCADIADgBIgBABQACAFAEAAQAFgBAJgGQgDAEABADQABADgDAFQAAANANAFIAGACIABgCQAHgTAEgCIABACIAKADQAEACgEgIIACAEIAAgEIABACQADgCAAgDQAAgFgEgKQADADACABQADAAAEACQANAEAFgMIAJgUIAFAEQABABAAAAQABABAAAAQABAAAAAAQAAAAAAAAIgJgLQAIAGABgIQACgGAMAKIgKgOIANgWIAXALIABgSIBcBcIAoA1IgCgCQgGgFACAHQACAFgGgFQgGgGAEAHQAEAJgGgHQgFgDAFAHIAFAJIgFgFQgFgEAEAEQAPAVgHgGQgEgFgBADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAEAEQgEgBgDAHQgDAGgIgFQANARgOgSIgDAAIACADIAKANQAFAIgKgLQgHgHACAEQABABAAAAQAAAAAAAAQgBAAgBgBQgBgBgBgBQAIANgIgDQgIgEAJAPIgCgCIgDgBIALALQgFgFACAFQAAAAAAAAQAAABAAgBQgBAAAAgBQgBAAgBgBIgBgCIgHgHIgDgBIAGAHIAEAFQgGgFgBAEQAAACgHgFIAHAJQgGgFADAIQADAJgLgLIAHAXQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDgBgJgIQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAABgBgBQAAAAgBAAQAAgBgBAAQAHAHgCAAQgCgCAFAFIgIgIIgGAAIgCgBIgDgDQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAJAKIgKgKIgBgBIgBgBQgKgIASATIgHgGIAGAGIgDgBQgBgBAAAAQgBgBAAAAQAAAAAAABQAAAAAAABIgDgFQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgDAFAIIABAAIAFACQAWAGADAEIgBABIgCAKQAAAFAGgFIgCADIADAAIgBABQAEAJARgMQgDAFABADQABAEgDADQAAAOAOAGIAZAIQgHAJABAAIAKgKQgEAJAIABQAHACgHANIAMgLIAbANIgGAZIAUABIhRBnIgwAtgAgbAJIAIAIIADAEQAFgKgGAGIAGgHQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAABIAAgBIgCACIgBAAIAEgFIgBgBIgIgEIAAAAIABACIgCgCgAjFAFIgBAAIgFADIAGADIACgCIgCgDIADACIAAAAIAAgDIAAACQABgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDABgAj8hVIAEABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgIIAEgHIgJAKQAEgIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgCgIAJIAEgBgAC7hCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABABABIADAEIgFgFg");
	this.shape.setTransform(25.175,18.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("ADgFLQADgHgGACQgHACAEgIIgCACQAHgIgIADQgJAFAGgIQACgFgHAFIgKAGQALgPgIAGQgSASAEgJQADgEgCgBQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgEAEQgBgEgKgFQgIgFACgKQgQAPAQgQIgBgDIgCACIgNAKQgHAFAIgLQAHgHgEACQgBABAAAAQAAAAAAgBQAAAAABgBQABgBABgBQgNAJAAgLQAAgKgMAHIAAgDIgKAMQAEgFgEACQgBAAAAAAQgBAAAAgBQAAAAABgBQABgBABgCIABgBQAFgGAAgCIABgDIAAAAIAAAAIgGAIIgGADQAEgHgEgCQgEgBAEgHIgIAHQADgGgKADQgIACAIgMIgcAFIgDgEQgBgFAHgKQACgGgIADQgIAEgBgBQAJgKgCAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBQgHAJAAgDQAAgDgFAGIAIgJIgDgHIACgCIADgDQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgKAKIAKgLIAAgBIgDACIAEgEQACgEgEACIgKALQAHgJgCABIgIAKIAEgHQACgDgDABIAFgFQgBABAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQACgDgHAFIgNAQIAHgGIgQAOIAHgJQgDADACgEQABgCgGAFIAJgKIgJAJQAQgSABgFIABgDIgKAMIAHgLQAEgGgHAHIAIgJQABgCgHAHQgBABgBABQgBABAAABQgBAAAAgBQABAAAAgBIAHgIQgBAAgJAEQgGACAEgIIADgDQAAgBAAgBQABAAAAgBQAAAAgBAAQAAAAAAgBIgDAAIgBACIgEAAIAFgGIgDABIAEgFQAEgJgLAIIgCAEIgZAaIgEAEQgDADACgEIAKgLIgOAMQAQgRAGgMQgCgBgHAEQgFAEADgFIALgQQAAgBgHAHQgHAHADgEQABgFgEAFQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAgBIgBABIABgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAgBAAIgCABIgFACQgIAJADgEIAEgIIgJAKQAKgRgEgJQAHgHgHAEIgEAEQADgLgBgBQAAgCgFgDIgGAFQAHgGAEgJQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAIAAgBIgBgBIACgCQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAABgBIAAgBIAAAAIACgBIgBAAIgBABIADgHQgDADgHgEIAHAJIgIgJIgDAAIACADQgBgBAAgBQAAAAAAAAQABAAABABQAAABACABIAAACIgDgDIAIAMIgCABIgCgCQADAHgKgNQAHAOgJgDQgJgCAIAPIgCgCIgDgBIALALQgEgEABAEQAAABAAAAQAAAAAAAAQgBAAgBgBQgBgBgBgBIAAgBIgIgHIgDgBIAHAHIADAGQgHgGgBAFQgBACgGgFIAHAJQgGgEACAJQACAIgLgKIAFAaQgBAAAAABQgBAAgBAAQAAABgBAAQAAAAgBAAQgDAAgJgJQgGgDADAIQAEAJgCAAQgIgKgBACQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBgBQAHAIgCgBQgDAAAFAGIgIgJIgGABIgCgDIgDgDQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAJAMIgKgMQgCgBAAAAQgBgBgBAAQAAAAAAAAQAAABABAAQgKgHASAUIgHgHIAIAKIgGgGQAAAAgBAAQAAgBgBAAQAAAAAAABQAAAAAAABIgDgFQAAAAAAABQAAAAAAAAQAAAAgBgBQgBAAAAAAQgDgDAFAIIANAPIgEgIIALARIgHgIQACAEgDgDQgCgBAFAHIgJgKIAHAKQgPgTgFgCIgDgBIALALIgJgJQgFgEAGAHIgIgJQgDgBAHAIQABABABABQAAABABAAQAAABgBgBQAAAAgBgBIgGgIIADAKQACAGgHgFIgDgEQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAACIACACIAAAEIgGgHIABAEIgFgFQgIgGAIAMIADACIAXAcIADAFQADAEgEgDIgKgMIAKAPQgOgSgKgHQgBABAEAHQADAFgFgDIgOgNQgBgBAHAIQABACABABQABABAAABQAAAAAAAAQAAAAgBgBQgBAAgBgBQAAAAAAABQAAAAAAAAQABABABABQABABAAABQABABAAAAQAAAAAAAAQgBAAAAAAIABABIgCgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAAAABIABACIACAFQAIAJgEgDIgHgGIAJAKQgQgNgGACIgFgEIABADIAEAFIgLgFQgCAAgCAEIAGAJQgHgKgIgGIAAACQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDgEQACgIACgBIgIgIIgHgFIAJALQgHgFgBABQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgCABAIAIIAAABIABABIABAAIgRgMIABgBIgKgJIAEAGQAGAHgLgJIgJgIQAGAHgUgOIAbAaIgFgBQgEAAACAEQgCgFgFgCIAEAEIgFgDIAXAaIgDgCQAHAHgLgGQgMgIACADIAJAIIgEgCIgJgHQAHAIgEgBIgHgDIgGgHIgKgIQAMALgFgCQgLgOgEAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABQAAABAAAAQAAAAAAAAQgBAAgBAAQgBgBgBgBIgPgLQgNgKAGAIIgGgHIgCAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBgBQAAAAAAAAQgBAAABABQAAAAAAABQABAAABABIACACIgLgJIACADIgFgEQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAABIgoghQgGgIAAgHIAGAGIgDgGQgBgCgHgHQAHAFgGgHIgJgMIAIAIIABgFIAFAGQABgBgDgFIgEgHIgIgGIACABIgBgBIABABQAYARgCgGQgGgLABACIACACQgCgHAGgCQAGgBAAgEIgNgMQgDgGAGgJQAGgKAHAHQAKADAEgLQADgJAMAFQAPABAIgQQAKgWAFgDIABACIAKADQAEABgEgIIADAEIAAgFIABACQAEgCABgDQABgGgFgLQAEAEADgBQAEAAADADQAPABAHgNIgBgBQgEgBAFgGIgJAGQAEgFgKADQgIACAIgMIgbAGIgDgEQgBgEAHgKQACgHgHAEQgJAEgBgCQAJgKgCAAQAAAAAAAAQgBAAAAgBQAAAAABgBQAAgBABAAQgIAHABgCQAAgCgFAFIAIgJIgDgHIADgCQABgBAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgKAKIAKgLQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBABAAAAIADgDQADgFgEADIgLALIAGgIQgDABgFAIIAEgHQAAgBAAAAQABgBgBAAQAAAAAAAAQgBAAAAAAIAEgEQAAAAAAAAQgBAAAAAAQAAAAABgBQAAgBAAgBQACgDgHAGIgNAPIAHgFIgPANIAGgIQgDADACgEQABgDgGAGIAJgKIgJAIQARgSABgDIABgFIgJAMIAGgKQABgBAAgBQAAAAAAAAQgBAAgBABQgBABgBACIAHgJIgFAEQgCACAAABQgBAAAAABQgBAAAAgBQABAAAAgBIAHgHQgBAAgJADQgGADAEgJIADgDQADgFgGACIgBACIgEABIAGgIIgEACIAFgFQAEgIgLAIIgCADIgZAaIgFAEQgDADACgEIAKgMIgOAMQAQgPAHgNQgCAAgHAEQgFADADgFIALgPQABgCgIAHQgGAIACgEQACgFgEAFQgBABAAAAQgBABgBAAQAAAAAAAAQAAgBAAAAIgBABIABgCQABgBAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAIgCABIgGAEQgHAHADgEIAEgHIgJAJQAKgRgDgHQAGgHgHADIgDAFQACgLAAgCQAAgCgFgCIgGAFQAIgHADgIIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIADgFIAGADIAFACIAHgJIAEgIIgKAKQAEgIgCgBQgBABgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgCgCgIAJIAAAAIgBABIAJgRIACABIAHgMIgGAFQgHAGAHgLIAIgLQgGAFADgGIAHgNIgXAdIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQAEgEACgEIgFAEIADgGQgGAGgRAUIACgCQgHAHAFgMQAFgNgDACIgDAEIgEAGIAHgOQgHAHAAgEQADgGgBgCQAGgGABAAIAFgLQgJANACgFIAHgKQAEgFAAgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAABgBQAAgBABgBIAIgSQAIgOgHAGIAFgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIABAAQAAgBAAAAQgBAAAAABQAAAAgBAAQgBABAAABIgDACIgBABIAFgGIAFgIIgDADIAEgHQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAKgNAQggQAGgGAJAAQAEgHAAABIgDAGIgBAAIgFAGIAFgEQACgBAGgIQgEAIAHgHIAKgKIgGAJIAFABIgFAHQACAAAKgIIAFgJIAAACIABgBIgBABQgNAcAHgDIAIgGIgCADQAIgDACAGQADAHAFAAIAKgPQAFgDALAGQAMAGgFAIQgBAKAMAFQAMADgDAMQACASAUAIQAaAKAFAGIgCAAIgBALQABAGAGgFIgCADIAEAAIgBABQAGALARgKQgCADABAFQABADgCAFQABAPARAHIAeAOIgBACIADAAIADgEIgBAFIABAAQAQABAJgRQALgWAEgEIABACIAKADQAFAAgEgHIADADIAAgEIABACQAFgDABgDQABgGgFgKQAEADADgBQAEAAAEACQAOACAJgOIAOgaIAEAEQABABABABQAAAAABABQAAAAABAAQAAAAAAAAIgJgMQAJAGACgJQADgHANAIIgJgNIATgcIAZAIIAEgVIAsAoIAyA0IAmA1IgCgCQgFgEABAHQABAGgGgEQgGgGADAIQAEAIgHgGQgFgEAFAIIAFAKIgFgFQgGgFADAFQAPAVgHgGQgFgEgBADIgBADIAEAEQgEAAgGAIQgEAHgJgEQANARgOgRIgDAAIACACIAJANQAEAIgKgKQgBgBgBgBQgBgBgBgBQAAAAAAAAQAAAAAAACQABAAAAAAQAAABgBgBQAAAAgBgBQgBgBgBgBQAHAOgJgCQgKgDAJAPIgCgCIgDAAIAKAKQgEgEABAEQAAABAAABQAAAAAAAAQgBgBAAAAQgBgBgBgBIgBgBIgHgHIgEgBIAHAHQAAABAEAEQgHgFgBAEQgCAEgGgGIAGAJQgFgEACAKQACAHgMgKQAAAJAEASQgCADgCAAQgEAAgJgJQgGgDADAHQADAJgBAAQgIgKgBACQAAABgBAAQAAAAAAAAQgBAAAAAAQgBgBgBgBQAIAIgDAAQgCgBAFAGIgIgJIgHABIgCgDIgDgCQAAABABAAQAAAAAAABQAAAAgBAAQAAgBAAAAIAJALIgKgLQgCgBAAgBQgBAAgBAAQAAgBAAABQABAAAAABQgKgIASAUIgHgGQACAEAGAFIgGgFQAAAAgBgBQAAAAgBAAQAAAAAAABQAAAAAAABIgDgFQAAAAAAABQAAAAAAAAQgBAAAAgBQgBAAgBAAQgDgCAFAHIAOAPIgFgIIALARIgHgIQACAEgDgDQgCgBAFAHIgJgKIAHAKQgQgTgDgCIgEgCIALAMIgJgJQgFgEAGAIIgIgJIAEAGQABABABABQAAABABAAQAAABgBgBQAAAAgBgBIgGgHIADAKQACAGgIgFIgDgEQgFgDACAFIACACIAAAEIgGgHIABAEIgEgFQgJgFAHAKIAHAEQALADgCALIALAMIADAGQADADgEgCIgKgMIAIANIgJgMQADAIAHAFIALAGQAbAMAFAFIgBABIgBALQABAGAHgFIgDADIAEgBIgBACQAEAFAEAAQAGABALgFQgDAEABAEQACAEgDAEQACAQASAIIAfAPIgEAFQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAAAIAKgLQgEAKAKADQAJADgHAOIANgLIAjAUIgDAcIAXADIghAyIgtA4IgyAsgAgRB9IAGACQAEABABABIAGgJIAEgIIgJAKQAEgIgCgBQgBABgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgCgDgHAKIAEAAgAgGBhIgBACIACABIADgFIgCAAIgCACgAgBBcIAAABIABgCIAAAAIgBABgAgIBTIAEAGIACgEIgEgDIgBAAgAAABHIgBADIgBACIgDAEIAEAFIACgEQgGAHAGgPIABgCIgCAAgAADBDIAAAAIACgCgAgkAGIAIAIIAGAJQAGgMgHAGIAGgHQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBAAIABAAQAAgBAAAAQAAAAgBABQAAAAAAAAQgBABgBABIgCACIgBABIAJgNIgBAAIgCACIACgCIgCAAIgIgFQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIACACIgCgCgAi0DsIgBgCIgBgEIAGAGIgCABIgCgBgAlUCYIAFADIgBACgADnh0QAAgBAAAAQAAAAAAAAQABAAAAABQABAAABABIAAAAQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAQgCAAgDgEgAlAiLQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBIABgBIAFAAIgGAFIAAAAg");
	this.shape_1.setTransform(25.925,18.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("ACbEJQAEgFgGACQgGACADgGQAGgIgHAFQgIAFAGgHQACgGgGAGIgJAGIAEgFQAEgHgFAFQgSARAFgIQADgFgCAAIgDgBIgDAFQAAgFgJgDQgGgDADgKQgQAQAQgQIAAgDIgDACQABAAAAgBQABAAAAABQAAAAgBABQAAABgBABIgCACIACgFIgMALQgHAGAJgLQAGgIgDADQgBABAAAAQAAAAAAgBQAAAAABgBQABgBABgBQgMAJABgJQABgKgNAKIACgBIAAgEIgJAMQADgEgDABQgBABAAAAQgBAAAAgBQAAAAABgBQABgBABgBIABgBQAFgGABgCIAAgDIgGAHIgFAEQAEgHgDgBQgEAAAFgHIgIAHQAEgFgJADQgHAEAIgNIgYAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCAHgKQADgHgHAEQgIAFgBgCQAJgKgBABQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBQgHAIABgCQAAgDgFAGIAIgJIgCgGIADgCIACgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQABAAAAgBIgKAKIAKgLIAAgBIgDACIAEgDQAHgLgSAUIAFgIQgEADgEAHIAEgHQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAEgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgDgHAGIgNAPIAHgFIgOANIAGgIQgBABgBAAQAAAAAAAAQgBAAABAAQAAgBAAgBQACgCgGAGIAJgKIgJAIQAPgPADgHIABgDIgKAMIAIgKQABgCAAAAQAAgBAAABQgBAAgBABQgBABgCABIAIgJQABgDgGAIQgCACAAAAQgBABAAABQgBAAAAgBQABAAAAgBIAHgIIgJAFQgGACAFgHIADgDQADgGgFADIgCACIgDABIAGgHIgEACIAFgGQAFgIgLAIIgCAEIgYAbIgEADQgEAEADgFIAKgKIgPANQASgSAGgMQgBAAgHAFQgFADADgFIAMgPQAAgBgHAHQgCACgBABQgBABAAAAQgBABABAAQAAgBAAAAQACgFgEAFQgBABAAAAQgBABAAAAQAAAAAAAAQgBAAABgBIgBABIABgBQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAAAABIgCAAIgEACIAFAOQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgDAAgIgJIgBABIAAgBIAAAAQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBQAHAIgCgBQAAAAAAAAQgBAAABABQAAAAAAABQABAAAAABIgGgHIgFAAIgCgCIgDgDQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAJALIgKgLIgBAAIABABIgCgDQgJgHARAUIgHgIIAIAKIgFgGQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgDgFQAAAAAAABQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgCAFAGIAOAPIAGAJIgHgIQADAEgDgDQgDgBAGAHIgKgLIAIAKQgOgRgFgEIgDgCIAKAMIgJgJQgBgBAAAAQgBgBAAABQABAAAAABQABACACACIgIgKIAEAGQABACABAAQABABAAABQAAAAAAAAQAAAAgBgBIgHgIIAEAJQADAGgHgGIgEgDQgEgEACAFIACACIAAADIgFgGIABADIgFgGQgIgGAJAMIADACIAXAcIADAFQADAEgDgEIgKgLIAJANQgOgRgJgHIAEAHQADAGgFgEIgNgOQAPASgHgGQgBgBgBAAQAAAAAAAAQAAAAAAABQABAAABABQABABAAABQABABAAAAQAAAAAAAAQAAAAgBAAIABABIgBgBQgBgBgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABIABACIADAEQAMAOgPgOIAJAKQgQgNgFABIgFgEIACADIAEADIgKgEQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABIAEAFIgMgMQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIAAACIgDgEIABgEIABgDIgHgIIgHgGIAJALQgHgGgBACQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAgBQgCAAAIAKIgBgEIAGAGQgBABAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCgCIAAAAIgOgLIABgBIgKgJQgCgCAHAJQAFAGgKgJIgJgJQAFAGgGgFIgMgJIAbAbIgFgCQgBAAAAAAQgBAAAAABQAAAAABABQAAAAAAABIgHgHIAEAFIgFgEQAFAGASAUIgCgDQAHAIgKgHQgMgJACAEIAJAJIgMgKQAGAHgDgBIgGgEIgHgHIgJgIQAMAMgFgEQgLgNgEAAQAAAAgBAAQAAgBAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAAAQgBAAAAgBQgBAAgBgBIgPgMQgNgLAGAIIgGgGIgBAAIgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABIgIgHIADACIgGgEQgCgCADABIgmgiQgGgHgBgHIAGAFIgEgFIgIgJQAGAFgFgGIgKgMIAIAIIAAgFIAGAGIgHgLIgGgGIgBgBIABABQAXASgDgGQgGgKABABIACAEQgDgIAFAAQAGgBgBgEIgNgMQgDgFAEgHQAEgIAHAHQAJAEABgJQACgJAKAHQAOACAFgNQAGgRAEgDIABABIAAAAQAHgHgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBQgHAIABgCQAAgBAAAAQgBAAAAAAQgBAAAAABQgBABgBABIAHgIIgBgFIACgDIADgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgKAKIAKgLQABgBAAAAQAAAAAAAAQAAAAgBABQgBABgBABIAEgEQAFgKgNAPIACgDIgIAJIAEgHQACgDgDACIAFgFQgBABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQACgDgHAGIgNAPIAHgFIgPAMIAHgHQgEACADgDQABgCgGAGIAJgLIgJAJIASgVIABgEIgJALIAHgJQABgBAAgBQAAAAAAAAQgBAAgBABQgBABgBACIAIgJQABgDgHAHQgBABgBABQgBABAAAAQAAAAAAAAQAAAAABgBIAGgHIgJAEQgFADAEgHIAEgEQACgEgEABIgCACIgDABIAFgGIgDABIAFgFQAFgJgLAJIgCAEIgZAbIgEADQgDADACgDIAKgLIgOAMQASgSAFgLQgBAAgHAFQgFAEAEgGIALgOQABgCgIAHQgBACgBABQgBABgBABQAAAAAAAAQAAgBABAAQACgFgEAFQgBABgBAAQAAABgBAAQAAAAAAAAQAAAAAAgBIAAAAQABgBAAgBQABgBAAAAQAAAAAAgBQAAAAgBAAIgCACIgEADQgIAIADgEIAFgHIgJAKQALgSgCgFQAHgLgHAIIgDAEQADgKAAgCQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBgBAAIgBACQAFgHABgEQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAgBAAIgDABIAEgFQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIABgCIAAABIgBABIgBAAIALgRIABAAIAIgLQABgCgHAHQgHAHAIgMIAHgKQgHAIANgWIgXAeIABgFQAAgBAAgBQgBAAAAAAQAAAAgBAAQAAAAgBABIAGgIIgFAEIAEgFIgXAaIACgDQgHAHAGgKQAGgNgDACQgBACgBACQgBABgBAAQAAAAAAAAQABgBABgCIgEAGIAGgMQgHAHABgDQADgGAAgBIAGgHIAHgKQgKAMACgEQALgNAAgEQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgBABgBIAJgRQAIgNgHAGIAGgHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIABgBIgDACIgBABQAGgHABgEIgDADIAFgFQABgCgBACQAKgOASgdQAHgHAHgCIgFAHIAFgEQACgCAGgHQgEAHAGgHIALgKIgHAJIAEAAIgFAGIAMgIIAFgJIgBACQgOAaAGgDIAIgGIgCACQAHgDABAFQACAGAFgBIAJgNQAFgEAJAEQAKADgGAIQgCAKAKACQAKABgFAMQAAAPAQAFQAVAGAEAEIgBAAIgDAKQAAAFAGgFIgCADIADgBIgBABQACAFAEAAQAFgBAJgGQgDAEABADQABADgDAFQAAANANAFIAGACIABgCQAHgTAEgCIABACIAKADQAEACgEgIIACAEIAAgEIABACQADgCAAgDQAAgFgEgKQADADACABQADAAAEACQANAEAFgMIAJgUIAFAEQABABAAAAQABABAAAAQABAAAAAAQAAAAAAAAIgJgLQAIAGABgIQACgGAMAKIgKgOIANgWIAXALIABgSIBcBcIAoA1IgCgCQgGgFACAHQACAFgGgFQgGgGAEAHQAEAJgGgHQgFgDAFAHIAFAJIgFgFQgFgEAEAEQAPAVgHgGQgEgFgBADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAEAEQgEgBgDAHQgDAGgIgFQANARgOgSIgDAAIACADIAKANQAFAIgKgLQgHgHACAEQABABAAAAQAAAAAAAAQgBAAgBgBQgBgBgBgBQAIANgIgDQgIgEAJAPIgCgCIgDgBIALALQgFgFACAFQAAAAAAAAQAAABAAgBQgBAAAAgBQgBAAgBgBIgBgCIgHgHIgDgBIAGAHIAEAFQgGgFgBAEQAAACgHgFIAHAJQgGgFADAIQADAJgLgLIAHAXQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDgBgJgIQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAABgBgBQAAAAgBAAQAAgBgBAAQAHAHgCAAQgCgCAFAFIgIgIIgGAAIgCgBIgDgDQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAJAKIgKgKIgBgBIgBgBQgKgIASATIgHgGIAGAGIgDgBQgBgBAAAAQgBgBAAAAQAAAAAAABQAAAAAAABIgDgFQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgDAFAIIABAAIAFACQAWAGADAEIgBABIgCAKQAAAFAGgFIgCADIADAAIgBABQAEAJARgMQgDAFABADQABAEgDADQAAAOAOAGIAZAIQgHAJABAAIAKgKQgEAJAIABQAHACgHANIAMgLIAbANIgGAZIAUABIhRBnIgwAtgAgbAJIAIAIIADAEQAFgKgGAGIAGgHQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAABIAAgBIgCACIgBAAIAEgFIgBgBIgIgEIAAAAIABACIgCgCgAjFAFIgBAAIgFADIAGADIACgCIgCgDIADACIAAAAIAAgDIAAACQABgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDABgAj8hVIAEABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgIIAEgHIgJAKQAEgIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgCgIAJIAEgBgAC7hCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABABABIADAEIgFgFg");
	this.shape_2.setTransform(25.175,18.65);

	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-25.7,-29.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-3,-7.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-29.3,108,109);


(lib.pms2femendop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The PMS2 mutation increases the risk of endometrial cancer in the lifetime of carriers to 13%. This risk is 3% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 364;
	this.text.parent = this;
	this.text.setTransform(-81.9,74.8);

	this.text_1 = new cjs.Text("ENDOMETRIUM", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 310;
	this.text_1.parent = this;
	this.text_1.setTransform(-46,0.2);

	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-116.15,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.1,-10,420,270);


(lib.pms2_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("EhtZBBVMAAAiCpMDazAAAMAAACCpg");
	this.shape.setTransform(700.175,418.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400.4,836.2);


(lib.PMS2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(" PMS2", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 44;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(116,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("AC/E0QgEgGgPgCQgRAAgWAEQgQADgOgDIgQgKQgHAAgHAFQgGAFgFgDQgPgCgBADQgBADgMgCIAAABIgDgBQgIgCgIABIgPABIgSADQgDAFgIgCIgPgEIgFAGQgngKhFgCQgFgFgaAEIAHADIhEgGIhBAAIgIAFQACgDgEgDQgFgDgHgBIgZABIgcABIAAgDQgbAAgFgBIABgBIAggCIgBAEIBpgCIAAgGIgZgEIgJAHQgVgEgVAAIgfABQgZAAgEAGIgDAAIACABIAAAAQgagHgVgEIAVAAIgVgHQgFgBgJAGQgJAEgYgHIgOgHQgCAEgXgDIgngIIAbAUIgngDQgXgBgNACIABgCQgBgCgFgBIgNADIgIgDQgIACgBAGIgBAKIAAgCQgCAEgVgCIgpgGIgngFIAEgdQAFgbgDgIQgBAEgBACQgCABADgIIgFANQAAgGADgJQADgMACgQQgGgEADgWQADgbAAgLIADgFQABAAABAJIAGgaQAAgBAAAAQAAAAgBAAQAAABgBABQgBAAgBACQgDAFACgMQAAgFAGgGQADgEABgTQABgJgCgXQgBgTADgJIAKg1IAEgTIAAgfIAEAAIAAgZIABABQAAgFgCAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABABIgBABIADgKQAEgGABgKIgCgCIAEgMQABgEgBASQAGgRAMgyIgHgDIgTgfIgDgGIBQgiIgDACQAUADAlgDQAkgDATAEIAAgBQABAGAjgEQAmgFAFAFQARADAVgFIAagFQABABAIACQAMAEAMgDQAEAAAPgGQAQgFAKADQALADAWgBIAlAAIgDgDQAkABBpgBQBYgBArAEQgBABgBABQgBAAABAAQAAAAACAAQABgBADgBQALgGgJAHIAeABIABgCQAJgBASgHQAQgFAOAHQAAAFAOgCQAJgBgGADQApgIBAAFQBAAEAtgJIgFABIAVACIgIgIQAHADAVgCQATgCgBAEIgDABQgBAEAMABIAUABQgBgFgEAAIARgDQATAEAmgBQAkgBANAFIAMgGQARADAzgEQAvgEAUAIIBagGIANC5IgBA2QgBAggHALQgCAbADAfQAFAlAAAPQgHgEAAARQABAWgCAEQAFgBgBAOQgBAQAEADIgGAAIgCA+IgBgFQgEAAABAGQACAKgCADIAIAMIgIgDQgBAEABADIACAFQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAJIgBAwIgtgCQgJAAgGACQgGADgCAEQgCAAgCgDQgCgCgDAAQgGABACACIAFADIgOgDQgIgCgNABIAJgDQgGABgMgCQgLgCgLAFIgCAKIASgEIgdAKQgBAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIAAgDQgIACgJgCQgGgCgFAFIgDgHIgOAGQAEgGAAgCQAAgFgOgCIgTgBIAFAIIgNgHQgHgDgJAFIgBgGQgIgCgDAFQgCAEgHgCIAGgFIg3AFQgeADgUgFIAAgCQgNgDgbACIADACIgbABIgBgEIgUABIABgDQgZgFgbAHIAGACQgDAAgEAHIgIAMQgFAAgGADQgFACgLgCIAGgEQAAgBAAAAQAAAAAAgBQgBgBAAAAQAAgBgBAAIgRADIgNAHQAJgFgFgGgAquDBIAFAAIgFgCIAAACgAKTDAIgBgsQgBgzgGgoQACgHACgiQABgjACgIQAEhTAAhdIk2AFIgGgDQgGgDgNABIgCAHQgkgFhXACQhRACgngHIgaAIIluAEIiXgMIi9AHIgxgVIACAbIgEAJQACgCABAMQABAKAFgHQgEAUAEAIIAIANIgFANIACAqQgDABgCAEQABALACALIAEATIAGgVIgBAIIAAAFIAAAAQgQBLAEAlQACATADAKIgCgFQADAkAAAoIAAAFQAkgBBTgCQCBgBAOAEQA6AFB6gDQBxgCA2AGQCAAGDIgEQEHgFBEABIgCABIA/AEIAQABIAAAAgAqvhJQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABgArkiFIABAAIABAEgAq5i/QAEgJgBAJIgCANgAAdkxIAEgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAFABQAFABAAABIgFABQgGAAgEgCg");
	this.shape.setTransform(188.35,26.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AqFDhIAFABIgFABIAAgCgAKsDhIg/gFIACgBQhEAAkHAFQjIADiBgGQg1gGhyADQh5ADg6gFQgPgFiAACQhTABgkACIAAgGQAAgngDgkIACAEQgEgKgBgTQgEglAPhLIABAAIgBgEIABgJIgFAVIgEgSQgDgMAAgKQABgFADgBIAAABIACAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBgqIAFgNIgIgMQgEgIAEgVQgFAIgBgLQgCgLgBABIAEgJIgCgbIAxAVIC9gGICXAMIFugEIAagJQAmAIBRgCQBYgDAkAFIABgHQAOAAAFACIAHADIE2gEQAABdgEBRQgDAJgBAjQgBAigCAHQAGAoABA0IABArIgQAAgAqQidIAAANIADgNQAAgBAAgBQAAgBAAgBQAAAAAAAAQAAgBAAAAIgDAFgAq+hGIAAicIAEAAIATAgIAHADQgMAygGAQQABgRgBAEIgEAMIACABQgBAKgEAHIgEAJIABAAIAAgBQAAAAAAAAQABgBAAAAQAAABAAAAQABAAAAAAQACAAAAAGIgBgBIAAAZgAq8hjIADAEIgBgFg");
	this.shape_1.setTransform(184.2626,22.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:44.15}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",lineHeight:47.55}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:44.15}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:44.15}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.2,-5.9,156.40000000000003,63.9);


(lib.platform = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("‘Previvorship in the Platform Society’", "normal 400 25px 'Raleway'", "#0000FF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 428;
	this.text.parent = this;
	this.text.setTransform(-55.6,-38.05);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgoIgDgMBQRAAAIAAHBMhQRAAAg");
	this.shape.setTransform(256.875,22.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("EgoIADhIAAnBMBQRAAAIAAHBg");
	this.shape_1.setTransform(256.875,22.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:-55.6,y:-38.05,font:"normal 400 25px 'Raleway'",color:"#0000FF",lineHeight:36.1,lineWidth:428}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:2,y:2,font:"normal 400 30px 'Raleway'",color:"#000000",lineHeight:42.95,lineWidth:510}}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,-40,572.4,86);


(lib.MSH6_fem_endometrium_popupbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of endometrial cancer in the lifetime of carriers to 41%. This risk is 3% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 358;
	this.text.parent = this;
	this.text.setTransform(-430.4,70.8);

	this.text_1 = new cjs.Text("ENDOMETRIUM", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 284;
	this.text_1.parent = this;
	this.text_1.setTransform(-246.7,-1.65);

	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-461.8,-18.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461.8,-18.6,420.5,278.5);


(lib.MSH6_FEM_COLORECTAL_POP_BOX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to 20%. This risk is 6% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 376;
	this.text.parent = this;
	this.text.setTransform(-136,196.1);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 324;
	this.text_1.parent = this;
	this.text_1.setTransform(44.9,120.45);

	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-164.45,110.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,110.7,420,295.90000000000003);


(lib.msh6_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("EhxxBBfMAAAiC9MDjjAAAMAAACC9g");
	this.shape.setTransform(728.2,419.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456.4,838.2);


(lib.MSH6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MSH6", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ACXE0QgFgGgNgCQgPAAgUAEQgPADgNgDIgOgKQgGAAgHAFQgFAFgEgDQgOgCgCADQAAADgMgCIABABIgDgBQgGgCgIABIgOABIgRADQgCAFgIgCIgMgEIgGAGQgjgKg/gCQgEgFgYAEIAGADIg9gGIg7AAIgHAEQACgCgEgDQgFgDgGgBIgWABIgbABIABgDQgZAAgEgBIABgBIAcgCIAAAEIBfgCIAAgGIgXgEIgIAHQgTgEgSAAIgdABQgWAAgEAGIgDAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAAAAQgYgHgTgEIATAAIgTgHQgEgBgJAGQgIAEgXgHIgLgHQgCAEgWgDIgjgIIAZAUIgkgDQgVgBgMACIABgCQAAgCgFgBIgLADIgIgDQgIACAAAGIgBAKIAAgCQgCAEgKgBIgqgCIABgnIAHgqQAEgdgCgHIgCAFQgCABADgHQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAABIgDAIQAAgGADgIQADgLACgOQgGgEADgUQADgZAAgKIADgEQABgBABAJIAGgYQAAAAAAgBQAAAAgBABQAAAAgBABQgBABgBABQgDAFACgLQABgFAEgFQAEgEABgSQABgIgBgUQgCgRADgIIAKgwIADgQIAAgeIAEAAIABgXIAAABQAAgFgBAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAABAAAAIAAABIgBAAQAAgDAEgGQADgGACgIIgDgCIAFgLQABgDgBAQQAGgOALgrIgIgEIgSgfIgDgGIBJgiIgCACQASADAhgDQAhgDARAEIAAgBQAAAGAhgEQAigFAFAFQAQADASgFIAYgFQABABAHACQALAEALgDQAEAAANgGQAPgFAJADQAKADAUgBIAiAAIgEgDQAiABBfgBQBQgBAnAEQgCABAAABQgBAAAAAAQABAAABAAQACgBACgBQALgGgJAHIAcABIAAgCQAJgBAQgHQAPgFAMAHQAAAFAMgCQAIgBgEADQAmgIA5AFQA5AEAqgJIgFABIATACIgGgIQAGADATgCQAQgCAAAEIgDABQAAAEAKABIASABQAAgFgEAAIAPgDQARAEAjgBQAggBANAFIAKgGQARAEAngEQAmgEARADIBCAOIgJArIgDALIALCWIgBAxQgBAdgHAKQgCAYADAdQAFAhAAAOQgHgDABAPQAAATgCAFQAFgBgBAMQgBAPAEACIgGABIgCA4IgCgEQgCgBAAAGQABAJgBADIAIALIgIgEQgBAEABADIABAEIgCgBIgBAIIgCAwIgtgCQgSgBgDAKQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBABgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAFADIgNgDQgIgCgMABIAJgDQgEABgMgCQgKgCgJAFIgCAKIAQgEIgbAKQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIABgDQgIACgHgCQgGgCgFAFIgDgHIgMAGQADgGAAgCQAAgFgMgCIgRgBIAEAIIgLgHQgHgDgJAFIAAgGQgIgCgCAFQgDAEgGgCIAFgFIgyAFQgaADgTgFIABgCQgMgDgZACIAEACIgaABIgBgEIgSABIABgDQgWgFgZAHIAFACQgDAAgEAHIgGAMQgFAAgGADQgDACgKgCIAEgEQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBgBAAIgPADIgMAHQAIgFgEgGgApTD1IADAEIACgGIgGgFIABAHgAqHDBIAFAAIgJgDgAI6DAIgBgiQgBgvgGgkQADgHABgfQAAggADgHQAEhSAAh2QiVADhRABIgGgDQgFgDgMABIgCAHQgggFhQACQhJACgjgHIgYAIIlMAEIiJgMIisAHIgogTIACATQADgJAAAJIgDAMIAAgMIgFAIQACgCABALQACAJAEgHQgEATAFAIIAIALIgGAMIACAmQgDABgCAEQABAJACALIAFARIAFgTIgBAHIAAAEIAAAAQgPBFADAhQACARAEAJIgDgEQAFAmgCAyIAAAYIBQgBQBfgBAMAEQA1AFBugDQBmgCAxAGQB1AGC2gEQDvgFA+ABIgCABIA5AEIAJABIAAAAgAmWEgIAAAAgApUhaQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgCABgAqJiQIACgBIAAAEgAAxkxIAFgBIAAgBIAFABQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIgEABQgFAAgFgCg");
	this.shape.setTransform(65.2,26.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AosD7IAAgHIAFAFIgBAGgApjDEIAJACIgGABgAJZDFIg6gEIADgBQg+gBjvAFQi3ADh0gFQgxgHhnADQhtADg1gFQgMgEhfABIhRABIABgZQABgxgEgmIACAEQgDgJgCgRQgDgiAPhEIAAAAIAAgFIABgHIgFAUIgFgRQgCgLgBgKQABgDAEgBIgCgmIAGgNIgIgKQgFgIAEgTQgEAHgCgJQgBgLgCACIAEgIIABALIADgLQAAgJgEAJIgBgTIAoATICrgHICKAMIFMgEIAYgJQAiAIBKgCQBPgCAhAEIACgHQAMAAAFACIAGAEQBQgBCVgDQABB1gEBSQgDAIgBAgQgBAfgCAGQAGAlABAuIABAiIgJAAgAoshUIAAABIACgBIgCgBIAAABgApjj+IADAAIARAgIAJAEQgMAqgGAOQABgPgBADIgEAKIACACQgBAJgDAGQgEAGAAADIABAAIACADIgBgEQACAAAAAFIAAgBIgBAXIgEAAgApiiLQAAgBABAAQAAAAAAAAQAAAAABAAQAAABAAAAIgBABg");
	this.shape_1.setTransform(61.2423,25.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",lineHeight:36.55}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-5.9,138.79999999999998,63.9);


(lib.MSH2ovariespopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("OVARIES", "35px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(44.3,5.2);

	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-30.45,-9.35,0.5,0.5);

	this.text_1 = new cjs.Text("The MSH2 mutation increases the risk of ovarian cancer in the lifetime of carriers to 17%. This risk is 2% in the general population.\n", "20px 'Helvetica'");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 268;
	this.text_1.parent = this;
	this.text_1.setTransform(-7.7,86.35);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-32.75,52.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-9.3,327.8,289.2);


(lib.MSH2caption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.msh2caption();
	this.instance.setTransform(0,0,0.1315,0.1315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.8,404.1);


(lib.MSH2BLADDERP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of cancer in the urinary bladder of carriers with male reproductive organs to 13%. This risk is 2% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 369;
	this.text.parent = this;
	this.text.setTransform(15.15,103.25);

	this.text_1 = new cjs.Text("Urinary bladder", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 267;
	this.text_1.parent = this;
	this.text_1.setTransform(75.2,9.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("AfQldIAAK7Mg+fAAAIAAq7g");
	this.shape.setTransform(200,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,1,1).p("AfQzoMAAAAnRMg+fAAAMAAAgnR");
	this.shape_1.setTransform(200,195.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A/PTpMAAAgnRMA+fAAAMAAAAnRg");
	this.shape_2.setTransform(200,195.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A/PFeIAAq7MA+fAAAIAAK7g");
	this.shape_3.setTransform(200,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,420,341.5);


(lib.msh2background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5791C6").ss(20,1,1).p("Ehsng9aMDZPAAAMAAAB61MjZPAAAg");
	this.shape.setTransform(695.175,393.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#578FC4").s().p("EhsnA9bMAAAh61MDZPAAAMAAAB61g");
	this.shape_1.setTransform(695.175,393.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,1410.4,806.2);


(lib.msh2_female_kidney_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ureter/kidney", "20px 'Helvetica'", "#CCFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(87.7,51.6);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.图层2_1();
	this.instance.setTransform(12.8,0,0.2463,0.3125,6.5441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2763,scaleY:0.3506,rotation:6.5432,x:3.65,y:-7.9},0).wait(1).to({scaleX:0.2463,scaleY:0.3125,rotation:6.5441,x:12.8,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-7.9,196.89999999999998,146.4);


(lib.MSH2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MSH2", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ACCEcQgEgGgLgCQgOAAgSAEQgNADgMgDIgMgKQgGAAgGAFQgFAFgDgDQgNgCgBADQAAADgLgCIAAABIgBgBQgGgCgHABIgNABIgOADQgCAFgHgCIgMgEIgFAGQgfgKg5gCQgDgFgVAEIAFADIg3gGIg1AAIgGAEQABgCgDgDQgEgDgGgBIgUABIgYABIABgDIBVgCIAAgGIgVgEIgGAHQgRgEgRAAIgaABQgTAAgEAGIAagCIgBAEQgWAAgEgBIABgBIgDAAIACABIAAAAQgVgHgRgEIARAAIgRgHQgEgBgIAGQgGAEgVgHIgKgHQgCAEgTgDIgggIIAWAUIgggDQgTgBgKACIABgCQAAgCgFgBIgKADIgHgDQgGACgBAGIgCAKIAAgCQAAACgEABIgjAEIgGgtQAAgHAGggQAFgegCgHIgCAFQgCABACgGQAAAAAAAAQAAAAgBABQAAAAAAABQAAABgBABIgCAGQAAgEACgIQAEgKACgNQgGgDACgSQAEgWAAgJIADgEQABAAABAHIAGgVQAAAAAAgBQgBAAAAABQgBAAAAAAQgBABgBABQgDAFABgKQABgEAFgFQAEgDABgQQABgHgCgSQgBgPADgIIAKgrIADgPIAAgaIAEAAIABgUIAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAEgHQADgFABgIIgCgCIAEgJQABgDgBAOQAGgMAKgiIgJgFIgPgfIgDgGIBBgiIgCACQAQADAegDQAdgDAPAEIABgBQAAAGAdgEQAfgFAEAFQAOADAQgFIAWgFIAHADQAKAEAKgDQADAAAMgGQANgFAJADQAJADASgBIAeAAIgEgDQAeABBWgBQBHgBAjAEQgBABgBABQAAAAAAAAQAAAAABAAQACgBACgBQAJgGgIAHIAZABIABgCQAHgBAPgHQANgFALAHQABAFAKgCQAIgBgEADQAhgIA0AFQAzAEAlgJIgEABIARACIgGgIQAFADASgCQAOgCAAAEIgCABQgBAEAKABIAQABQgBgFgDAAIANgDQAQAEAfgBQAdgBALAFIAJgGQAPAEAfgEQAjgEANACIBBAKIgHAwQgCAJgDAGIAMCGIgBAsQgBAbgHAIQgDAWAEAZQAFAegBANQgGgDAAANQABASgDADQAGgBgBAMQgBANAEACIgGABIgCAyIgCgEQgDAAABAFQABAIgBACIAIAKIgIgDQgBAEACAGIgCgBIgCAHIgCAxIgsgDQgHAAgFACQgGADAAAEQgCAAgCgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBABQgBAAAAABQgBAAAAAAQAAABAAAAIAEADIgLgDQgHgCgKABIAHgDQgEABgKgCQgJgCgJAFIgBAKIAOgEIgYAKQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgDQgHACgGgCQgFgCgFAFIgCgHIgMAGIAEgIQAAgFgLgCIgQgBIAEAIIgKgHQgGgDgHAFIgBgGQgHgBgCAEQgCAEgGgCIAFgFIgtAFQgXADgRgFIAAgCQgKgDgXACIADACIgWABIgBgEIgQABIAAgDQgUgFgWAHIAFACQgCAAgKATQgFAAgEADQgEACgJgCIAEgEQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgNADIgLAHQAIgFgFgGgAoODfIACACIADgHIgFgFIAAAKgAhYCkQBoAGCjgEQDWgFA3ABIgBABIAzAEIACAAIgBgYQgBgqgGggQACgGABgcQABgcADgHQAEhJAAhpQh+ADhEABIgGgDQgFgDgLABIgBAHQgdgFhHACQhCACgfgHIgVAIIkqAEIh6gMIiaAHIgegRIAAAKIgEAHQACgBABAJQACAJAEgGQgEARAFAGIAIAKIgGALIACAiQgDAAgCAEQABAJACAJIAFAQIAFgSIgBAHIAAAEIAAAAQgPA9ADAeQACAPADAIIgCgDQAEAigBAuIgBASIBCgBQBRgBAKAEQAvAFBigDIAyAAQA3AAAfAEgAoYi0QAEgHAAAHIgDALgAoYi0IAAAAgAAukZIADgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEABQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIgEABQgFAAgDgCg");
	this.shape.setTransform(58.2231,23.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AnmDlIAAgKIAEAFIgCAGgAgwCpQgsgGhcADQhiADgvgFQgKgEhRAAIhCACIABgSQABgvgEghIACADQgDgIgCgQQgDgdAPg+IAAAAIAAgDIABgHIgFARIgFgPQgCgKgBgIQACgEADAAIgCgjIAGgKIgIgKQgFgHAEgRQgEAHgCgJQgBgJgCABIAEgHIABAKIADgKQAAgHgEAHIgBgKIAfARICagHIB6AMIEqgEIAVgJQAfAIBCgCQBHgCAdAEIABgHQALAAAFACIAGAEQBEgBB9gDQABBpgEBIQgDAIgBAcQgBAcgCAGQAGAgABAqIABAYIgCAAIgzgFIABgBQg3AAjWAFIhwABQhaAAhBgEgAodhnIAAh/IACAAIAQAgIAJAFQgKAigGAMQABgOgBADIgEAJIACACQgBAIgDAFIgEAGQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAABAAABIAAAAIgBAUg");
	this.shape_1.setTransform(54.2412,23.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:110}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",lineHeight:36.55,lineWidth:118}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:110}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:110}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-5.9,126.1,92);


(lib.more_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.more();
	this.instance.setTransform(0,0,1,0.9222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,332);


(lib.MLH1MSTOMACHPOPUPMESSAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of upper gastrointestinal cancer in carriers with male reproductive organs to 20%. This risk is 5% in the general population.", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 392;
	this.text.parent = this;
	this.text.setTransform(-19.4111,2,0.917,1);

	this.text_1 = new cjs.Text("Upper gastrointestinal", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 264;
	this.text_1.parent = this;
	this.text_1.setTransform(157.8164,-123.1,0.8357,1);

	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-55.4,-129.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-129.5,422.5,378.5);


(lib.MLH1MCOLORECTALPOPUPMESSAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(" The MLH1 mutation increases the risk of colorectal cancer in carriers with male reproductive organs to 57%. This risk is 7% in the general population.", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 348;
	this.text.parent = this;
	this.text.setTransform(-24.05,95.8);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 308;
	this.text_1.parent = this;
	this.text_1.setTransform(16.05,14.3);

	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-47.1,-5.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-5.2,385,264);


(lib.mlh1femaleovariesbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ovaries();
	this.instance.setTransform(0,0,0.0498,0.0418);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AGJjqIgzA8IAiAhQAmArATAyQALAdgCBTQgCA+AlAZQBJAzBAAVQBfAfAygvQA6g3AFg5QAGg9g7ghQg3geglgJQgXgFhCgFQg0gEg0grQgtgmgVgugAnCi5Ih9B9QgKgGgVgBQgpgBg2AcQhIAmgeArQgjAzAfA1QAlA9BeAKQBjAKAkhHQAXgtAMhJQAJg7AggrQAmgyAegZQAPgMAHgDg");
	this.shape.setTransform(104.3332,53.32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AJmDfQhAgVhJgzQglgZACg+QAChTgLgdQgTgygmgrIgighIAzg8IAZA3QAVAuAtAmQA0ArA0AEQBCAFAXAFQAlAJA3AeQA7AhgGA9QgFA5g6A3QgeAcguAAQgfAAgmgMgAqkDYQhegKglg9Qgfg1AjgzQAegrBIgmQA2gcApABQAVABAKAGIB9h9IBLAeQgHADgPAMQgeAZgmAyQggArgJA7QgMBJgXAtQgfA/hQAAIgYgCg");
	this.shape_1.setTransform(104.3332,53.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.0498,scaleY:0.0418,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.0527,scaleY:0.0443,x:-6,y:-4}}]},1).to({state:[{t:this.instance,p:{scaleX:0.0498,scaleY:0.0418,x:0,y:0}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.0498,scaleY:0.0418,x:0,y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-4,216.1,136);


(lib.MLH1FEMALEENDOMETRIALPOPUPMESSAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of endometrial cancer in the lifetime of carriers to 49%. This risk is 3% in the general population.", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 344;
	this.text.parent = this;
	this.text.setTransform(2,89.9);

	this.text_1 = new cjs.Text("ENDOMETRIUM", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 326;
	this.text_1.parent = this;
	this.text_1.setTransform(165.05,2.9);

	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-21.45,-15.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-15.5,406.5,287);


(lib.mlh1femalecolorectlpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to 48%. This risk is 6% in the general population.", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 358;
	this.text.parent = this;
	this.text.setTransform(40.45,84.95);

	this.text_1 = new cjs.Text("COLORECTAL", "30px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 277;
	this.text_1.parent = this;
	this.text_1.setTransform(107.2024,10.1,0.9719,1);

	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(23.25,-9.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.3,-9.5,388,263.5);


(lib.mlh1femendometriumpmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ENDOMETRIUM", "35px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(37.05,7.3);

	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-24.5,-20.95,0.5,0.5);

	this.text_1 = new cjs.Text("The MLH1 mutation increases the risk of endometrial cancer in the lifetime of carriers to 37%. This risk is 3% in the general population.", "20px 'Helvetica'");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 332;
	this.text_1.parent = this;
	this.text_1.setTransform(6.05,81.25);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(-23.4,57.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-20.9,393,269.09999999999997);


(lib.mlh12femalegraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.femalebody();
	this.instance.setTransform(0,0,0.4159,0.3345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650.5,887.1);


(lib.mlh1uterus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hover effect
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(111.35,11.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(48.9,8.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance_2 = new lib.uterus();
	this.instance_2.setTransform(0,0,0.4847,0.4847);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#551020").s().p("AAeKAIABgCQgIABgIgBQgFAAgEACIgDgEIgMAEIAFgFQgBgCgMgBIgRgBIAFAEIgLgDQgHgCgIACIAAgCQgHgBgDADQgCACgGgCIAFgCIgwACIgLAAIgWAAIgNgCIABgBIgmgGIADABIgUgFIgDAAIgDgCIgBgDIgSgGIACgCIgCAAIgpgcIADAFIgDgCIgPgCIgFgGIgEgDIgGgHIgEgGQAHAGgBgFIgTgYIAEADQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgNIgPguIgCgKIAAgHIAAgJIAEgPIAAgEIgDgJQgCgFABgEQABgOgCAAQAAgCAAgKIgBAAIABgDIABgOIgBgOIgBgPQgDgDACgHIABgNIgDgEQAFgiABg9QACgDgCgXIgBAFQADg6AAg5IgDgJQACAEACgEQABgFABgGIgBgvIABABQAAgXABgEIAAAAIAFgpIAAASIAEgSQAAgFgCgHQgCgIADgWIADgLQgDgEAHg0IgKAXIACgiQAAgUgBgMQAAABABABQAAAAAAgBQAAAAABgBQAAgCABgBIgCgMIACgHQgBgHgEAAIgEgCIAAAAQgDgCAEglQADgpgBgHIgBAGQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAgBIgCAJQACgLACgbQgCgDAAgUIACghIACgEQABAAAAAIIACgXQAAgBAAAAQAAAAAAAAQAAAAgBABQAAABAAACQgCAEABgLIABgEIAAgBIABgBIAAgBIABgCIABgFIAHg6IAEgLIAIgSQAFgJALgOIAKgLIAJgJQAKgIACgDIACABIASgLIgBABIABgBIACgBIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAABIgBgBIAIgCIACAAIADAAIAGgCIADAAIABgCIALgBQABAAgCAAIgLADIAWgCIAcAAIAZABIALABIg3AJIgFAAIgCAAQABAAgJADIgDADQgBAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQgIABgGADIgEACIgBACQgDAFgEACIgCABIgCABIgCAAIgBABIgCAAQgMAKgJAKIgEABQgFAIgDAGIgEANIAGgIIgBAEIgBAAIgHANIgLAcIgCAJQgCAMAAAGIAAAFIAAAMIAAACIAAADIAAACIABAHIABAHIgBgDQACAkgBAzQgBA9ABAiIAFgYQABAQABBtQABBvgCANQgDAyACBqQABBjgDAvIgCBJIAABHIADAgQADAQAEAOQAHAPAGALQAJANAJAIQAMALALAFQAMAGAPAFQAcAHAjAAICRAAIgCAAIA3ACQAgABASgBIAAAAIAQAAIACAAIAHAAIgCAAQAXgBAMgCQAVgDAMgGQARgGALgKQAMgJAIgNIAHgIIAJgPIALgeQADgNABgOIACgOIAAgHIAAgCIgCnRQADgDgBgTIgDgBQADghgChLQAAhIADghIgEgWIgCieQgBgQgEgTQgEgPgHgPIgIgOQgBgDgEgDIgEgGQgKgKgOgIQgJgGgNgGQgKgEgRgEIghgGIgEAAIgEAAIgEAAIgBgBIizADIg8gPIgSgQIgCgCIBDgRQASABAgAAQAegCAQACIABAAQAAADAggDQAggDAFADQAIABAKAAIALgBIACAAIAJgBIAEAAIALgBIAFAAIAFADQAKACAOABIASACIAMADIANAFIArAdIAOANIgCgEIALAOIAKAPQAHAOAHASIAJAhQADAUABAPIgBB1QAGAUgGgQIAAAaIAAABIABgNQAAADAAABQAAACAAAAQAAABABgBQAAgBAAgCQgBALgBgBIAEAYQACAPgDALQgDAAACALQAAADAAABQAAABAAABQAAAAgBAAQAAAAAAgBQADAjgCA4QgBA3AEAoIgBgFIgBASIAFgGQgCAGABATQAAAPgBAAIgBgDQgBgBgBALIgBAQQACAAAAgEIADAOQgDARABAhQAAAggCAMIADAKQgCAPADAtQACAogFARIAGCQIAAAoIAAACIAAAGQgBAOgCAKQgDANgCAFIgJAfIgJAZQgFAMgGAMIgCACIgCADIgOASQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBABgBAAIgVARIgHAFIgBABIgCABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgIAFIgGACIgCABIgHAEIgDACIgBgCIgeAIIgeAFIACgBIADgBQAAgBgGABIgMABIgMAEIAEgDIgHAAIgFAAIACgBIgKAAIgIAAQgJABgBADIgEgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgIABAJACIgNgCQgHgBgMABIAIgBIgPgBQgJgBgKACIgCAGIAQgDIgaAGQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAgAlPBsIADAAIADgXIgFgIQADgRAAgTIgBgbQAAgUgDgEIAAgDIAAACIAAABIABAbIgCgBg");
	this.shape.setTransform(92.6,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABDJYIg3gDIACAAIiRAAQgjAAgcgHQgPgEgMgHQgLgFgMgKQgJgJgJgNQgHgKgGgQQgEgOgDgQIgDggIAAhHIAChJQADgvgChjQgBhpACgzQADgMgBhwQgBhsgCgRIgEAZQgBgjABg9QABgzgCgkIABAEIgBgIIgBgHIAAgCIAAgCIgBgDIAAgMIABgEQAAgHACgMIACgIIAKgdIAIgNIABAAIABgDIgGAHIAEgNQACgGAGgIIAEgBQAIgKANgKIACAAIABgBIABAAIADgBIACAAQADgDADgFIACgCIAEgCQAGgDAIgBQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAEgCQAJgDgCgBIADAAIAEABIA3gJIgLgCIgZgBIgcAAIgVADIALgEQABAAgBAAIgKABIgBACIgDAAIgGACIgDABIgCAAIgIACIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgBAAAAABIAAABIgCABIgCABIABgBIgSAMIgBgCQgCADgKAJIgJAIQAug5BnAAIADAAIARAQIA9AQICzgDIAAAAIAFAAIAEABIAEAAIAgAFQASAEAJAEQAOAGAJAGQANAIALALIAEAFQADADACAEIAIANQAHAQAEAPQAEATABAPIACCeIAEAXQgEAhABBHQABBMgCAgIADABQABATgDAEIACHRIAAACIAAAGIgCAOQgBAOgDANIgLAeIgJAPIgHAIQgIANgMAKQgLAJgRAGQgMAGgVADQgMACgYABIACAAIgGAAIgCAAIgQABIgBgBQgLABgTAAIgTAAg");
	this.shape_1.setTransform(92.425,59.9914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,185.2,128.2);


(lib.mlh1page_0000_mlh1psd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mlh1
	this.instance = new lib.mlh1();
	this.instance.setTransform(611,331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(611,331,2550,1082);


(lib.mlh1_male_bladder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.图层2_2();
	this.instance.setTransform(0,0,0.4644,0.4644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.8,79.4);


(lib.MLH1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MLH1", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 44;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ABuFcQgEgGgNgDQgQAAgUAEQgOAEgNgEIgOgKQgGAAgHAGQgEAEgFgDQgOgCAAADQgBADgMgCIAAABIgCgBQgHgCgIABIgOABIgQADQgDAGgHgDIgNgEIgGAGQgigKhAgBQgDgGgYAFIAFACIg9gGIg6AAIgIAFQACgCgEgEQgFgDgGgBIgWABIgaABIAAgCQgZgBgEgBIABgBIgDAAIACABIAAABQgXgIgTgEIATAAIgTgGQgEgCgJAGQgIAFgWgIIgMgHQgCAEgVgDIgjgIIAYAUIg9gEIABgZQACgVgCgOIACACQABgBACgFIgDgLIADgIQgDgHgFAAIgKgCIABAAQgFgCAGgnQAIgqgCgHIgDAFQgCACADgIQgCAAgDALQAAgEADgJQADgLACgOQgFgEACgUQADgYAAgLIADgDQACgCAAAJIAGgYQAAAAAAAAQAAAAgBAAQAAAAgBABQAAABgBABQgEAFACgLQABgFAFgFQADgEABgRQABgHgBgVQgCgSAEgIIAJgwIADgPQAFgZgEgFIAEAAIABgXIAAAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAABIABABIgBAAQAAgDAEgGQADgGABgJIgCgCIAEgKQABgDgBAPQAGgOAMgqIgJgEIgSggIgDgFIBJghIgBABQARADAigDQAggDARAEIAAgBQAAAGAhgFQAigEAFAEQAPAEATgFIAYgGQABACAHACQALAEALgDQADgBAOgGQAPgEAJADQAKADAUgBIAigBIgEgCQAhABBggBQBPgCAnAFQgBABgBABQgBAAABAAQAAAAABgBQACAAACgCQALgFgJAGIAcABIABgBQAIgCAQgHQAPgEAMAHQABAFALgCQAJgCgFAEQAlgIA6AFQA6AEApgKIgFACIATABIgGgIQAFAEAUgCQAQgCAAAEIgDABQgBADALABIATACQgCgFgDAAIAPgDQARAEAjgBQAggCAMAFIALgFQANACASgBIA0gCIADA4IAEAwQABAbgGAQIALCWIgBAwQgBAdgGAJQgDAaAEAcQAEAhAAAPQgHgEABAPQAAAUgCAEQAGgBgCANQgBAOAEADIgGABIgCA3IgBgEQgDAAAAAFQACAKgBACIAHALIgIgDQgBADABADIACAEIgDgBIgBAIIgCAxIgtgDQgSAAgCAJQgDAAgBgDQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBABQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAAAIAFAEIgNgEQgHgCgMABIAIgDQgEABgMgCQgKgBgJAEIgCAKIAQgEIgbALQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQgHACgIgCQgGgBgFAEIgCgHIgNAGIAEgHQgBgGgMgBIgRgCIAEAIIgLgGQgHgEgIAFIgBgGQgHgCgDAGQgCAEgGgDIAFgFIgyAFQgaADgTgEIAAgDQgLgCgZABIADACIgZACIgBgFIgSABIABgDQgXgFgYAHIAFACQgDAAgDAHIgHAMQgFAAgGADQgEADgKgDIAFgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgQADIgLAHQAIgFgFgFgAmhFJIBggDIAAgFIgYgFIgIAHQgSgEgTABIgdAAQgVAAgFAGIAdgCgAIRDnIAAgiQgCgvgGgkQADgGABgfQABghACgIQAFhkgCiwIiVADIgGgEQgFgCgMAAIgCAHQgggEhQACQhJACgjgIIgXAJIlNAEIiIgMIirAHIgogUIABAUIgEAIQACgCABAKQACAJAEgGQgEATAFAHIAIALIgGAMIACAnQgDgBgCAFQABAJACAMIAFAQIAFgTIgBAHIAAAFIAAAAQgPBFADAhQACAQADAKIgCgFQAEAmgBA1QgCA/ACAkIAAAAIAIgZIACAZQBUgBANAFQA1AEBtgDQBngCAwAGQB2AGC1gDQDugGA+ABIgCABIA5AFIAJAAIAAAAgApgi3IABgBIABAEgAo1jsQAEgJAAAJIgDALgAo1jsIAAAAgABZlYIAEgBIAAgBIAFABQABAAABAAQABAAABABQAAAAAAAAQABABAAAAIgFAAQgFAAgEgBg");
	this.shape.setTransform(47.1864,29.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AIwEJIg5gFIACgBQg+AAjuAFQi2ADh1gGQgwgGhnADQhtADg1gFQgMgEhUAAIgDgZIgIAZIAAAAQgCgkACg/QABg1gEglIACAEQgDgJgCgRQgDgiAPhEIAAAAIAAgEIABgIIgFAUIgFgRQgCgLgBgKQACgEADAAIgCgnIAGgLIgIgMQgFgHAEgTQgEAHgCgKQgBgKgCACIAEgIIABAMIADgMQAAgJgEAJIgBgTIAoATICrgHICIAMIFNgEIAXgIQAjAHBJgCQBQgCAgAFIACgHQAMgBAFADIAGADICVgCQACCvgFBlQgCAIgBAgQgBAfgDAGQAGAkACAvIAAAiIgJAAgAo7kIIADAAIASAfIAJAEQgMArgGAOQABgQgBADIgEALIACACQgBAIgDAGQgEAGAAADIABAAIgBgBQABAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAACIAAgBIgBAXIgEAAQAEAFgFAZgAo4iVIACADIgBgEg");
	this.shape_1.setTransform(43.1704,26.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",color:"#333333",lineHeight:44.15,lineWidth:102,x:2}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",color:"#000000",lineHeight:47.55,lineWidth:110,x:2}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",color:"#333333",lineHeight:44.15,lineWidth:116,x:-8}}]},1).to({state:[{t:this.text,p:{font:"35px 'Arial'",color:"#333333",lineHeight:56.8,lineWidth:116,x:-12}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-5.9,132.1,71.7);


(lib.mhl1female_0001_stomachpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stomach
	this.instance = new lib.stomach();
	this.instance.setTransform(1437,1359);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1437,1359,291,314);


(lib.malebodypsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.图层2_3();
	this.instance.setTransform(1211,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1211,171,982,2460);


(lib.lynchuk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Charity offering support and information to people with Lynch Syndrome ", "normal 400 25px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 372;
	this.text.parent = this;
	this.text.setTransform(313.55,16.45);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot20220705at115052PM();
	this.instance.setTransform(0,0,0.3571,0.3571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4059,scaleY:0.4059,x:-178,y:-12},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-12,679.5,168);


(lib.irelandlogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Voluntary organisation founded by lynch syndrome families", "normal 400 25px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 280;
	this.text.parent = this;
	this.text.setTransform(339.95,25.65);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.lynchlreland();
	this.instance.setTransform(0,0,0.6552,0.6552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-86},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,0,568,170.1);


(lib.Insta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.instagramicon();
	this.instance.setTransform(0,0,0.1057,0.1063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1092,scaleY:0.1098},0).wait(1).to({scaleX:0.1057,scaleY:0.1063},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.5,61.5);


(lib.genepagebackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003300").ss(1,1,1).p("Eht3g/6MDbvAAAMAAAB/1MjbvAAAg");
	this.shape.setTransform(703.15,409.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5792C6").s().p("Eht2A/7MAAAh/1MDbtAAAMAAAB/1g");
	this.shape_1.setTransform(703.15,409.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1408.3,820.2);


(lib.femalebody_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// female_body
	this.instance = new lib.femalebody();
	this.instance.setTransform(747,195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747,195,1564,2652);


(lib.facebook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.facebookicon();
	this.instance.setTransform(0,0,0.1832,0.1832);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1893,scaleY:0.1893},0).wait(1).to({scaleX:0.1832,scaleY:0.1832},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.5,61.5);


(lib.epcam_male_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to 75%. ", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 350;
	this.text.parent = this;
	this.text.setTransform(410.1,-90.35);

	this.text_1 = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 260;
	this.text_1.parent = this;
	this.text_1.setTransform(452.1,-168.9);

	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(371.1,-184.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371.1,-184.1,421,305.2);


(lib.EPCAM_FEMALE_ENDO_POPUPBOX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of endometrial cancer in the lifetime of carriers. The actual risk of endometrial cancer in EPCAM mutation carriers is unknown", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 397;
	this.text.parent = this;
	this.text.setTransform(-167.45,-237.1);

	this.text_1 = new cjs.Text("ENDOMETRIUM", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 282;
	this.text_1.parent = this;
	this.text_1.setTransform(21.85,-309.65);

	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-182.3,-322.05,0.4948,0.4948);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.3,-322,420.1,276.1);


(lib.epcam_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("EhqlBBVMAAAiCpMDVLAAAMAAACCpg");
	this.shape.setTransform(682.175,418.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364.4,836.2);


(lib.EPCA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("EPCAM", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(72,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ACTFEQgEgGgOgDQgPAAgWAFQgPADgNgEIgOgJQgHgBgHAGQgFAEgFgCQgOgCgBACQgBADgLgBIABABIgDgBQgHgDgIABIgPABIgRADQgCAGgIgDIgNgEIgGAHQgkgKhBgCQgEgFgYAEIAFACIg+gFIg9AAIgIAEQACgCgEgDQgFgEgGgBIgXABIgbABIAAgCQgZAAgEgCIABgBIAdgCIgBAFIBjgDIAAgFIgYgFIgIAIQgUgFgTABIgdAAQgXAAgEAGIgDAAIACABIAAABQgYgIgVgDIAUAAIgUgHQgEgBgJAFQgIAFgXgIIgMgGQgCAEgWgEIgkgIIAZAUIglgCQgWgCgMACIABgBQAAgCgFgCIgMADIgIgDIgFADIgZgZQgCgCgFAAQgFAAgDgBIACAAQgFgCAGgoQAHgsgCgHIgCAFQgCACACgIQAAAAAAABQgBAAAAAAQAAABAAABQgBABAAABIgCAHQAAgFACgJQAEgLACgPQgGgEACgVQAEgZAAgKIADgEQABgBABAJIAGgYQAAgBgBAAQAAgBAAABQgBAAAAABQgBABgBABQgDAFABgLQACgFAEgGQAEgDABgTQABgIgCgUQgBgSADgJIAKgxIADgRIAAgeIAEAAIABgYIAAABQAAgGgCABQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBABAAAAIABABIABgBIABAEIgCgDIgBAAQAAgDAEgGQADgGABgJIgCgCIAEgLQABgDgBAQQAGgPAMgsIgIgEIgSggIgDgFIBLgiIgCABQASAEAjgDQAhgDASAEIAAgBQAAAGAigFQAjgFAFAFQAQADATgEIAZgGQAAABAIADQALAEAMgEQADAAAOgGQAPgFAKADQAKADAVAAIAjgBIgEgDQAiACBjgCQBSgBAoAFQgBABgBAAQgBABABAAQAAAAABgBQACgBACgBQALgFgJAGIAcABIACgBQAIgCARgHQAPgEAMAHQABAFAMgCQAIgCgEAEQAmgIA8AEQA7AEArgJIgFACIATABIgGgIQAGAEAUgCQAQgCAAADIgDABQgBAEAMABIATACQgCgFgDAAIAPgEQASAFAkgBQAhgCANAFIAKgGQARAEAggDQAmgDAMAAIA9ADIgDA3QgBARgEALIAMCaIgBAyQgBAfgHAKQgDAZAEAdQAFAigBAPQgGgEAAAQQABAUgDAEQAGgBgBANQgBAPAEADIgGABIgCA5IgCgEQgDgBABAGQABAKgBADIAIALIgIgEQgBAEACAIQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCAIIgCAxIgsgCQgIgBgGADQgHACAAAFQgDgBgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgCAAgBAAQgBABAAAAQgBAAAAABQAAAAABABIAFADIgOgEQgHgCgNACIAJgEQgEABgMgCQgKgBgKAEIgCALIAQgFIgcALQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIABgDQgIACgIgCQgGgBgFAEIgDgHIgNAHIAEgIQgBgFgMgCIgSgCIAFAIIgMgGQgHgEgIAFIgBgGQgIgBgDAFQgCAEgGgDIAFgFIgzAFQgcADgTgEIABgDQgMgCgaACIADABIgaACIgBgFIgSACIAAgEQgXgFgZAHIAFACQgDABgDAGIgHAMQgFAAgGADQgEADgKgDIAFgEQAAAAAAgBQAAAAAAAAQAAgBgBgBQAAAAgBgBIgQAEIgMAHQAJgGgFgFgAJFDPIgBglQgBgwgGglQACgHABggQABghADgIQAEhagBiFIjdAEIgHgDQgFgCgNAAIgBAHQgigFhRADQhMACgkgIIgYAJIlXAEIiNgMIixAGIgqgUIABAWQAEgJAAAJIgDAMIgBgMIgEAIQACgBABAKQACAKAEgHQgEAUAFAHIAIAMIgGAMIACAnQgEABgBAEQABAKACALIAFASIAFgUIgBAHIAAAFIAAAAQgPBGADAjQACARADAJIgCgEQAEAngBA3IgBAnIBRAAQBXgBALAEQA2AFBxgDQBqgDAzAGQB4AGC7gDQD2gFBAAAIgCABIA7AFIALAAIAAAAgAmqEvgApfhlQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgCAAgAA7lBIAEAAIABgCIAFACQAFAAAAACIgFAAQgGAAgEgCg");
	this.shape.setTransform(131.4864,27.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AJiDxIg7gFIACAAQhAgBj2AFQi7AEh4gHQgzgFhqACQhxADg2gFQgLgDhXAAIhRABIABgoQABg3gEgmIACAEQgDgKgCgRQgDgjAPhGIAAAAIAAgEIABgIIgFAUIgFgSQgCgKgBgKQABgEAEgCIgCgmIAGgNIgIgMQgFgHAEgUQgEAIgCgLQgBgKgCABIAEgIIABAMIADgMQAAgJgEAJIgBgVIAqAUICxgHICNAMIFXgEIAYgJQAkAIBMgCQBRgCAiAEIABgHQANAAAFACIAHAEIDdgEQABCEgEBaQgDAIgBAiQgBAfgCAHQAGAlABAxIABAlIgLgBgAo3hDIAAABIACAAIgCgBIAAAAgApuhfIAAiSIADAAIASAgIAIAEQgMAsgGAPQABgQgBADIgEALIACACQgBAKgDAFQgEAHAAACIABAAIACAEIgBgFQACgBAAAHIAAgBIgBAXgApth7QAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBABgAprh7IAAAAg");
	this.shape_1.setTransform(127.4935,24.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:72,font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:142,text:"EPCAM"}}]}).to({state:[{t:this.text,p:{x:66,font:"40px 'Helvetica'",lineHeight:36.55,lineWidth:146,text:"EPCAM"}}]},1).to({state:[{t:this.text,p:{x:68,font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:144,text:"EPCAM"}}]},1).to({state:[{t:this.text,p:{x:67.15,font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:126,text:"EPCA"}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,-5.9,155,68);


(lib.popup_base_messageboxcopy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of upper gastrointestinal cancer in carriers with female reproductive organs to 13%. This risk is 4% in the general population.\n", "25px 'Helvetica'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 365;
	this.text.parent = this;
	this.text.setTransform(-27.75,41.9);

	this.text_1 = new cjs.Text("Upper gastrointestinal", "35px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 296;
	this.text_1.parent = this;
	this.text_1.setTransform(158.4486,-71.05,0.7518,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,2,1).p("AfQFeMg+fAAAIAAq7MA+fAAAIAAH6");
	this.shape.setTransform(155.55,-30.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(20,2,1).p("AfQ16MAAAAr1Mg+fAAAMAAAgr1");
	this.shape_1.setTransform(155.55,144.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("A/PFeIAAq7MA+fAAAIAAH6IAADBg");
	this.shape_2.setTransform(155.55,-30.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("A/PV7MAAAgr1MA+fAAAMAAAAr1g");
	this.shape_3.setTransform(155.55,144.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.4,-75.3,420,370.6);


(lib.popup_base_messageboxcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("COLORECTAL", "35px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.lineWidth = 267;
	this.text.parent = this;
	this.text.setTransform(-35.35,27.85);

	this.text_1 = new cjs.Text(" The MSH2 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to 47%. This risk is 6% in the general population.", "20px 'Helvetica'");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 289;
	this.text_1.parent = this;
	this.text_1.setTransform(-67.15,85.7,1.1229,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(21,1,1).p("AbMilIAAFLMg2XAAAIAAlLg");
	this.shape.setTransform(85.925,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(21,1,1).p("AbNqwIAAatMg2ZAAAIAA/5IABAA");
	this.shape_1.setTransform(85.9,131.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("A7LCmIAAlLMA2XAAAIAAFLg");
	this.shape_2.setTransform(85.925,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("A7LP9IAA/5IAAAAIAAFMMA2XAAAIAAatg");
	this.shape_3.setTransform(85.9,131.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.6,19.3,369.1,247.39999999999998);


(lib.colonwithparts_0001_wholegutpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// whole_gut
	this.instance = new lib.wholegut();
	this.instance.setTransform(947,513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947,513,2166,2044);


(lib.colonwithparts_0000_colonpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// colon
	this.instance = new lib.colon();
	this.instance.setTransform(947,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947,515,2166,2041);


(lib.caption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bluelight();
	this.instance.setTransform(0,0,0.2203,0.1744);

	this.instance_1 = new lib.bluedark();
	this.instance_1.setTransform(-5,-14,0.2196,0.1913);

	this.instance_2 = new lib._double();
	this.instance_2.setTransform(-22,-43,0.2242,0.2102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-43,801.9,443.2);


(lib.box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others.\n\nClick on the body to find out which organs have a cancer risk that is above 10%", "20px 'Helvetica'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 296;
	this.text.parent = this;
	this.text.setTransform(49.15,59.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(21,1,1).p("A5N0bMAybAAAMAAAAo3MgybAAAg");
	this.shape.setTransform(195.525,167.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A5NUcMAAAgo3MAybAAAMAAAAo3g");
	this.shape_1.setTransform(195.525,167.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.7,26.7,343.7,282.6);


(lib.bladderbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.图层2();
	this.instance.setTransform(0,0,0.2318,0.2318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2808,scaleY:0.2808,x:-8,y:-4},0).wait(1).to({scaleX:0.2318,scaleY:0.2318,x:0,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,92.4,48);


(lib.bladder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.图层4();
	this.instance.setTransform(0,0,0.1788,0.1555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2255,scaleY:0.1962,x:-10,y:-7},0).wait(1).to({scaleX:0.1788,scaleY:0.1555,x:0,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-7,96.5,67.5);


(lib.basicinfobackbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AlPDxIAEhUIgDhqIANgoIAQgLIhcAAIhIAAIA4guIABgBIADAAQADgBAEgEIgBgDQAOgJAegaQAcgZAQgIIAGgJIgCgSIgDgaIABgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDAAQACgEgCgJQgBgIADgEIgDgDIgDgmIAEgQIgDgTIAMgIIARgDIAPAIIgBAAQgBACABAEQACADgDACIABABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAABQABABAAAAQAAABgBAAQAAABgBAAQgBADAFADIgBABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAFACgCACIgBAEIAAADIACAAIAAAPQABAJgCAEQAFADgFgCIgBADIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIgCABIAEADQAAAAABABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIACAEIAAgBQABABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAIACACIAGgDIAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgDIACACIABgBIAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIgCgDIADABIgDgCIADAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAIAAACQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAIgCgEIAAACIAAgFIABACQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBIACACIAAgDQADAFACAAIACgBIgDgDIADACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABACQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABACIABgCIgBAAIgCgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEAAIgFgDQAGACACgDIgBgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAEgBIgCgCQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgCQgBAAAAAAQAAgBgBAAQAAAAAAAAQABAAAAAAIACgCIgDAAQADgEABgIQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBgBIgBABIACgJIAAAAIAAgBIAAABIgDgBQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAIgBgDIgBACIgBgCIgCAIIAAgBQAAABAAAAQAAAAgBAAQAAAAgBgBQgBAAgBgBQgEgDgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIgDgEQgBAAAAABQAAAAAAAAQgBABAAAAQgBgBgBAAIgDgBIAAgCIgCgDQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAgEgDgBIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgJgKgCADIAAgCIgCAAIAAAAIgBABIAAABIgCgEIAAABIgBgCIABAAIgKgMQAAgBAIgCIAAACIACgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABgDIABACIAFAAIAAACQACAAACgDIgCgCIACAAIAAAAQAHAHAEgBIADgCIAAABQAFgCAFABIALABIgCgEQACgCANABQANAAABACIAFABIAdAGIgDAWIAAAQQABAJgCAGIgCALIA3gnIBCg5IAggKIATAFIgUAjIABgBQgIAEgNAMQgMAMgHAEIAAAAQgCgBgLALQgMANgDAAQgHAEgGAHIgIAKIgEABQgGACgDAFQgGAMgIAEIgZAUIACAAIgzApQgfAagRALQgEALADgJIgLAIIAAABIgHALQgFAGgHABQgCgBgDAEQgBABgBAAQAAABAAAAQAAAAgBAAQAAgBABAAQgNAOgWARIAOAAIAkgXQAKgFATgSQARgRALgFIAEgIIBThMIAngaIApgpIAZgEIAQAHIgJAcIAAgBQgGADgHAIQgIAIgFADQgBgCgIAJQgHAJgCAAQgFACgEAGIgEAHIgDAAQgEACgCADQgDAKgFACQgEABgEAFIgJAIIACAAIghAcQgUATgLAHQgCAIABgHIgIAGIAAAAIgEAJQgCAEgFABQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgCADQAGAAADABIADgCQAGACAPgCQAPgBAGADIAygFIARABQAKAAAEADQAIACAKgCIAPgCQAAADAFAAQAGAAACABQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAABgBIABACIASABIgBABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAIAFgDIgCADIAEAAIgBABQAEABADgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIABABIACABQAEgBgEgCIAEACIAHAAIgDABIAGABQACABAEgCIABgFIgGACIAJgEIABABIAAABQADgBADABQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAADIAFgDQgEAFAHABIAGABIgBgDIADADQACABADgCIABADQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIgBADIARgCQAJgCAGACIAAACIAMAAIgBgBIAJAAIAAACIAGgBIAAABQAIACAIgCIgCgBIAFgIIADgBQAAAAABgBQAAAAABAAQABAAAAAAQABABABAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAFgBAFgDQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQACADAEABIAMgCQAGgBAEABIAFAFQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgBIgBAAIgDgBQACAAgDgGIgOgJIABgBQgGgFAAgCIAAAAIgBAAIABAAIgBAAIgIgMIAFAEIgDgHIgFgBQgDAAgEgHIgBgFQgCABgMgQIABAMIgRgPQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgDgBIgBgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDADIABgBQgDACgHgLQgKgLgDgBQACAEgCgEIACAFIgIgLQgDABgEgFIgIgJQgBAAAAgBQAAAAABgBQAAAAAAABQABAAAAAAIgEgHIAAACQAAABAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBIgBgEQABgCgEgEIgIgGQgFgDgCgDIgKgOQgHgLgDABIAAgCQgBgDgFgCIABAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAABIAAAAQgBgEgDgDIgBAAIgBgDIADACQgCgEgIgNIgHgLQAFABANAKIABADQAAAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQADAFAEAAIAEAAIACAFIAKAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAEACAJADIgFgGIAEADQAOAUAJAGIAIAEIgBAAQALAHAOALIAaAWIgFgJQAFADAeAXQAfAZADAEQAMANAYASQAaAUAKAJIAZAYIACgBQAAgBAFABIAAgBIACABQAFACAIgBIgSgQIgEgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgEgFIgUgPIABAAQgJgIgBgCIAAAAIAMAIIgCACIAnAdIACgCIgIgJIgGAAQgGgHgHgGIgMgJQgIgHgEABIAAgBIAAABIAAAAIgPgRIAIAGIgFgJQgCgBgFgBQgEgBgGgKIgEgGQgBABgUgWIAFAOIgagWIAAAAIgBgDIgGgDIgBgDQgDgCgDACIgDADIABgBQgCABgOgOIgSgSQADAGgEgFIABACIgLgMQgDABgHgHIgNgNIgBgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAABABIgHgKQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABABQAAAAAAABQAAAAgBAAQAAgBgBAAQAAgBgBgBIgDgFQAAgCgHgGIgMgJQgGgFgDgEIgRgTQgMgPgEAAIABgCIgJgHIABAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBABAAAAIgBAAIABAAIAAABIgDgEIgEgGIgBAAIgEgFQgBgCAHAGQgGgJgYgdIAbARIACAEQAAAAAAAAQABAAAAAAQABAAABABQAAAAABABQAEACgBgDQAGAHAFABIAGABIADAFIAPAMIABADIARAKIgGgIIAEAEQAXAbAOAJQAIAFAEACIgDgBQAQALAVASQAYAUAPALIgHgLQAHAFAtAjQAuAlADAFQAUASAhAbIA0ApIA8A0IhmgFIghgCIAAABIgDAtQgFBKgDDKIgBAaIh5gCIABAAIgjgDQgVgBgMABQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIhVgBIgDgXQgCgbgFgZQABgEgCgTIgBgZIgDg1IhbAAIAEBgIgCAEQAAADAAAHIADABQgBARABAWIAAAZIgYACIgzADQgdABgRgCIgPAEIiTAIgAkeE0QAvgDAWABQgBAAAAABQAAAAAAAAQAAAAABAAQABgBABAAQACgBABAAQABgBAAAAQAAAAgBABQAAAAgCABIARAAIABgBQAFgBAKgDQAKgCAHACQAAACAIgBQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBABQAUgEAUAAIAQAAIgCgUIAAgLIgDAEQABgEgBgMQgCgKACAAIABACQACAAAAgGIAAgMIgCADIgCgJQACgKgBgWQgCgUACgIIgDgGIAAglIAYAAIAhgCQAUgBAKADIBMgEIAXgBIAGApIACAeQABASgBAGQgBAQADARIAFAdQgEgBABAJQACAMgBACQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAJAAIgDABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAACAAIAHAAIAGgDIgCADIAHAAIAAABQAFABAGgBQAFgBABgCIADABIACABQAFAAgFgDIAIACQAEABAIAAIgFABQADgBAHACQAFAAAGgBIACgFIgKACIAQgEQABAAABAAQAAAAABABQAAAAAAAAQAAABgBAAIAKABQADAAADgCIACADIAIgCIgCADQAAACAHABIALABIgCgDIAHADQADABAGgCIAAADQAEABACgDQACgBAEABIgDACIAWgBIAAAAIABgSIgBACIAAgQIACAAIAAgLIABAAQADgNgDgQIgBADQAAgBgIgHIgBgHQgBgCABgGQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIgBgKIgDgGQABABAAAAQABABAAAAQABAAABAAQAAAAABgBQADgCABgIIgBgWQgBgJABgIIAFgJQAAgEgCgEQgCgDABgDQABgIgBgBQgBgBAAgHIAAgBIABAAQABgEgBgFIAAgJIgBgKQgCgCABgEIACgIIgDgEQAEgOACgXQghgCghAAIgFACQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBgBIgHgCIgeABIAAgBIgRgBIAAgBIASAAIgBACIA7gBIAAgCIgOgCIgFADQgMgCgLAAIgSAAQgOgBgCADIgCAAIACABIgBAAIgagFIALAAIgLgDQgDAAgFACQgFACgOgDIgHgDQgCACgigGIAPAJIgqgBIAAgBIgDgBIgHABIgFgCQgEABgBADIgBAEIAAgBQgBADgWgDQgbgDgEAAQAGADgHgCIACABIgTgDQgCADgNgBIgVgCIgDgBIAGgBIgPgDQAAAAgBAAQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABgBAAQAAAAgCAAQgBAAgCAAIgGgDQgBgBgLgBIgSAAQgMABgFgCIgdgEIgRgBIgJAAIgCAAIAAAAIgQAAIgVAAIgwAAIAPAsIgBgCQgCALACAVQABAUgCALIABAAQgDAAACAUQACAWgCACQgBAKACALIACAQQAAgBAAABQgBAAAAAAQAAABAAABQgBABAAABQgCAHACAHIACAKQACAKgBAFQgCAKABAeIACgDIAAAqgAC5hcIAIAGIgCABIAWARQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIAAAAIgDgFIgFABQgDgGgFgDIgHgGQgFgEgDAAIgBAAgAjMkMIACAAIgCgBgAjPkPIABABIABAAIgBgCIgBABgAi/hcIAEgCQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAgBIgDACIgBgBgAkShlIAFgEIAAACIgFACIAAAAgAkNhnIAAAAIAAAAIAAAAg");
	this.shape.setTransform(39.75,34.625);

	this.text = new cjs.Text("Homepage", "25px 'Helvetica'", "#003300");
	this.text.lineHeight = 30;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(-20.95,79.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AmtE+IAGhvIgEiLIAOgzIAPgQIAPA6IgBgBQgCAOACAcQACAZgCAOIAAAAQgCABACAaQACAcgDADQgBANACAPIACAVQAAgCgBAHQgCAJACAJIACAOQACAMgBAHQgCANABAnIABgEIAAA9QA+gDAkAAQgBABgBAAQgBAAABAAQAAAAABAAQABAAACgBQACgBABAAQABgBAAAAQABAAgBABQgBAAgBABIAWAAIABgBQAGgBANgEQANgCAJACQABACAJgBQACAAABAAQABAAAAAAQAAAAAAAAQAAABgBAAQAagEAbAAIAbgBIgDggIABgOIgEAEQABgEgBgPQgBgOACABIAAACQACAAAAgIIAAgQQgBABAAAAQAAAAgBABQAAAAAAABQAAABAAABIgCgNQACgOgCgbQgBgbACgKIgDgIIAAgqIAYAAIArgBQAYgBAPADIBjgEIAYgBIAFAtIAEAnQACAYgCAIQAAAVADAWQAFAbABAMQgEgDABAMQADAPgBAEQACgBABAJIARABIgDAAQAAAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAKABIAIgEIgCAEIAJgBIgBABQAIABAGgBQAIAAAAgCIAEABIAEABQAGgBgHgCIAKACQAGABAKAAIgHABIANAAQAIABAIgCIABgEIgNACIAWgEIADABIAAACQAGgCAGACQAFABAEgDIABAEIALgDQgBABAAAAQgBABgBAAQAAABAAAAQAAAAAAABQAAABAKABIAOABIgEgDIAJADQAGABAHgCIAAADQAGABADgCQABgCAFABIgEADIAjgBIAAgBIABAAIABgeIAAADIAAgUIABgBIAAgPIABABQADgQgCgWIgCAFQAAgDgHgIIgBgIQgBgEABgIQACAFACgCIgCgNIgCgIQACAFADgDQACgEABgKIAAgdQgBgMABgKIAFgLQAAgFgCgFQgBgFAAgEQACgLgCAAQgBgBABgJIAAgCIABgNIAAgKIgBgOQgCgCABgGIACgLIgDgDQAFgVACgjQgwgDgtAAIgHACQABAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBgBIgIgCIgoABIAAgBIgXgBIABAAIAXgBIgBACIBOAAIAAgCIgTgDIgHAEQgPgCgPAAIgXAAQgRAAgEACIgCAAIABAAIgigFIAPAAIgPgDQgEAAgGACQgHACgSgDIgKgDQgCACgsgGIATAJIg3gBIABgBIgFgBIgJABIgGgBQgGAAgBACIgBAFIAAAAQgBABgfgCQghgEgGABQAHACgIgBIAJACIgfgEQgDACgRAAIgcgCIgDgCIAGAAIgSgDQgBAAAAAAQAAAAAAAAQABABAAAAQABAAABABQAEABgJAAQgEgBgFgCQgCgBgPgBIgXAAQgOAAgHgBIgmgEQgfgEgGACIAAgCIgSAAIAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAABQgGgCgMgBIgCABIgIgCIAKAAIgOgCIiyABIhIAAIA4gvIABgBQAEAAAKgIIgBgEQASgMAngiQAmgfAUgMIAJgNIAAAAIgGg+QABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgDgBQACgFgCgLQgBgLADgGIgDgDIgEgyIAFgUIgFgZIANgKIAQgDIAOAKQgBADABAEQACAFgCACQgCABACAFQACAEgCABQgBACACADIACADIgBACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAHAEgCACIgBAEIAAAGIACgBIAAATQABAMgCAGQAFADgFgCIAAADIABAAIADAEQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAgBQAEAGgCAJIAAAGIABABQAFgCABgEIAFgFQAAABABAAQAAAAAAAAQABABAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAIACACIAGgEIAAABQABAAAAABQABAAAAAAQAAAAAAgBQABAAAAgBIAAgEIABAEQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIABABQAEAAgDgFQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIADAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIAAACIACgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIgCgEIgBADIABgFIABABQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAgBgBIACADIAAgEQACAGADgBIACgBIgCgDIADACQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAgBgBIACACQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIABACIAEgFIABgCIgBAAIgCgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEAAQgCgCgDgBQAGACADgFIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAEgCQABAAAAAAQgBgBAAAAQAAAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBQAAAAABgBIgBAAIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgCQgBgBgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABgCIgDgBQAEgFABgJQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBgBgBIAAABQACgHAAgKIgCgBIACAAIgBgCQAAACgJgFIAEAIIgFgBQgEgBgCABIAAgDIgCACIgBgCIgBADIAAAFIAAAAQgBABgFgCQgHgDgBAAIABACIABABIgFgEQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgEgDIgBgBIABgBIgDgCQAAAAABABQAAABAAAAQAAAAgBAAQAAAAgBAAQAAgEgEAAIgEgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgHgEQgGgEgBACIABgCIgEgBIgBABIAAABQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBIAAABIgBgCIABAAQgCgEgLgHQABgCAIgCIACADIABgBQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAgBIACgCIACACIAFgBIABACIAGgDIgCgCIABABIAAAAQAKAHAFgCIAEgCIgBABQAGgBAHABQAKACAFgBIgDgEQADgCARABQARAAACACIAGACIAcAFIgDAWIAAAVQACAMgDAIQgCAMABAUIALgKIBJg1IBWhKIApgQIAVAEIgcApIAAgBQgKAGgQAQQgRAOgJAGIAAAAQgCgCgPAPQgRARgDgBQgIAGgJAJIgNAOQgHABgIAIQgJAQgJAFQgGADgKAIIgRAPIADgBIhCA2QgpAigWAPQgHAMAFgLIgPAMIAAABQAFgEADgBQgBAAAAABQgBAAAAABQAAAAAAAAQAAAAABgBQgFAEgCAAIgKANQgGAIgIACQgBgBgGAGQgBABAAAAQgBABAAAAQgBAAAAAAQAAgBABAAQgRASgfAWIgOAMIARAAQAUAAAIABIAuggQAMgHAZgYQAXgVANgIIAGgKIBuhiIAwgkIA3g0IAegIIASAFIgPAhIAAgBQgHAEgKAKQgKALgHADIAAABQgBgBgKAKQgKAMgDgBQgGAEgFAHIgGAJIgEABQgFACgDAEQgEAMgHADQgEABgHAHIgKAKIACAAIgrAlQgaAXgPALQgEAKADgJIgKAIIABABQABgDADgBQgBABAAAAQgBABAAAAQAAAAABAAQAAAAABAAIgEACIgGAJQgEAGgGABQgCgCgDAFQgBABAAAAQAAABgBAAQAAAAAAgBQAAAAAAgBQgGAIgIAIIAHAAQAPgBAGADIAEgDQAHABAUgBQATgCAIAEIBCgFIAWABQANABAEADQALABAMgBIAWgCQgCADAGAAQAKgBABABQAAgCAGABQAGAAABgBIAAACIAZABIgCABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAgBIAEAAIAGgCIgCADIAEgBIAAABQAEACAEgCQAEAAAAgDIADACQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABgBQAFAAgGgCIAGACIAIAAIgEABIAIAAQAEACAFgDIAAgEIgHACIAMgEQABAAAAAAQAAAAAAAAQABABgBAAQAAAAAAABQAEgBADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIABADIAGgDQgFAFAIABIAIACIgCgFIAFADQADACAEgCIAAADQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIgCADIAVgDQANgBAHADIAAABIAQAAIgBAAIALgBIABACIAHgBIAAACQAJACAMgDIgCgBQABAAAFgIIAEgBQACgBAFABQgBAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAQAHgBAFgDQgBABgBAAQAAABAAAAQAAABAAABQAAAAABABQACACAFACIAQgCQAGgBAGABIAFAEQAEAAACgCQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAGABAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIgNgLIgEAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgCgFIgSgNIABAAIAhAaIACgCIgHgIIgEAAQgGgHgHgFIgKgIQgGgGgEABIAKAHIgBACIgJgJIAAAAIgBgBIABABQgHgJgFgHIAGAGIgEgIQgBgCgFAAQgEgBgGgIIgCgGQgDABgPgTIADANIgXgUQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBgBIgFgCIgBgDQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEADIABAAQgCABgLgNQgNgOgDgBQACAEgDgEIADAEIgEgEIgHgJQgCABgHgHIgLgKIgBgCIAEABIgHgIQAAgBAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAgBQgBAAAAAAQgBgBAAgBIgCgEQgBgCgGgFIgJgIQgHgFgCgDIgOgRQgKgNgEgBIABgCIgIgGIAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABIgBAAQgBgEgFgFIgBABIgCgFIAEAEQgFgJgTgZQADABAUANIABAEQAAgBABAAQAAAAAAAAQABABABAAQAAAAACABQADACgBgDQAFAGAEABIAGABIADAEIANAKIABAEQAFADAJAFIgFgIIAEADIgBABQAUAYANAJIAKAFIgCgBQAOAJARAQQAVARAOAKIgHgKQAIAFAmAeQAoAgADAFQARAQAfAZQAjAaAMAMIAiAfQAFAAABgBQAAAAAIAAIAAgBIABABQAIACALgCIALgBIACgBIghgcIgFgCQADAAgHgJIgagUIABAAIAyAnIABgCIgKgMIgGAAIgSgRIgQgLQgLgLgDACIgCgCIAAACIgTgWIAKAIIgHgLQgDgBgFgCQgGgCgJgMIgEgHQgDABgagbIAIAQQgdgZgGgEIACgBIgDgCIgGgFIgEgDQgDgCgCABIgEACIAAAAQgCABgSgSQgUgUgEgCQADAFgEgFIAAABIgNgOQgEABgJgKIgRgPIgBgDIAFADIgLgMQAAAAgBAAQAAAAAAAAQAAAAABABQAAABABABQAAAAAAAAQAAAAgBAAQAAAAgBgBQgBgBgCgBQgCgCgBgEQgBgCgIgJIgQgLQgJgGgDgFIgXgYQgRgSgEgCIABgBIgMgJIABAAIgEgBIgBgBIgCgEIgHgHIgBAAIgEgGIAGAFQgFgGgSgWIgRgTQAHADAbAVIADAEIAFADQAFADgBgEQAIAJAFACIAIACIAFAHIATAPIABAEIAWAMIgIgJIAFAFIAAAAQAfAiATANIAOAIIgDAAQAVAOAaAXIA0AoIgLgNQAKAGA5AvQA9AvAGAIQAZAXArAiIBEA2IA8AzIhugEIgzgBIAAAIIgEA6QgFBOgCBnIgDC0IgBAaIiVgDIgugDQgbgBgPABQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgVAAIACgBIhWAAIgDgYQgDgigGgiIgBgfQgCgZAAgHIgFhMIiFABIAECEIgBAGIAAANIADACQgBAQABAjIAAAZIgYABIhCADQgmACgXgCIgUAFIi3AJgAkKlhIACAAIgCgBgAkNlkIACACIABgBIgBgBIgCAAgAkXllIACAAIACgDIAAgBIAAAAIgBgBIgBABIgBABIgCABgAkKGXIAFgBIAFABIgFAAIgFAAgAF9htIgPgMIACAAIAOAKIgBACIAAAAgAAxmRIAAgBIABABgAAmmdIABAAIACACIgDgCg");
	this.shape_1.setTransform(39.8,34.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AlPDxIAEhUIgDhqIANgoIAQgLIhcAAIhIAAIA4guIABgBIADAAQADgBAEgEIgBgDQAOgJAegaQAcgZAQgIIAGgJIgCgSIgDgaIABgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDAAQACgEgCgJQgBgIADgEIgDgDIgDgmIAEgQIgDgTIAMgIIARgDIAPAIIgBAAQgBACABAEQACADgDACIABABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAABQABABAAAAQAAABgBAAQAAABgBAAQgBADAFADIgBABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAFACgCACIgBAEIAAADIACAAIAAAPQABAJgCAEQAFADgFgCIgBADIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIgCABIAEADQAAAAABABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIACAEIAAgBQABABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAIACACIAGgDIAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgDIACACIABgBIAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIgCgDIADABIgDgCIADAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAIAAACQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAIgCgEIAAACIAAgFIABACQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBIACACIAAgDQADAFACAAIACgBIgDgDIADACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABACQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABACIABgCIgBAAIgCgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEAAIgFgDQAGACACgDIgBgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAEgBIgCgCQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgCQgBAAAAAAQAAgBgBAAQAAAAAAAAQABAAAAAAIACgCIgDAAQADgEABgIQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBgBIgBABIACgJIAAAAIAAgBIAAABIgDgBQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAIgBgDIgBACIgBgCIgCAIIAAgBQAAABAAAAQAAAAgBAAQAAAAgBgBQgBAAgBgBQgEgDgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIgDgEQgBAAAAABQAAAAAAAAQgBABAAAAQgBgBgBAAIgDgBIAAgCIgCgDQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAgEgDgBIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgJgKgCADIAAgCIgCAAIAAAAIgBABIAAABIgCgEIAAABIgBgCIABAAIgKgMQAAgBAIgCIAAACIACgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABgDIABACIAFAAIAAACQACAAACgDIgCgCIACAAIAAAAQAHAHAEgBIADgCIAAABQAFgCAFABIALABIgCgEQACgCANABQANAAABACIAFABIAdAGIgDAWIAAAQQABAJgCAGIgCALIA3gnIBCg5IAggKIATAFIgUAjIABgBQgIAEgNAMQgMAMgHAEIAAAAQgCgBgLALQgMANgDAAQgHAEgGAHIgIAKIgEABQgGACgDAFQgGAMgIAEIgZAUIACAAIgzApQgfAagRALQgEALADgJIgLAIIAAABIgHALQgFAGgHABQgCgBgDAEQgBABgBAAQAAABAAAAQAAAAgBAAQAAgBABAAQgNAOgWARIAOAAIAkgXQAKgFATgSQARgRALgFIAEgIIBThMIAngaIApgpIAZgEIAQAHIgJAcIAAgBQgGADgHAIQgIAIgFADQgBgCgIAJQgHAJgCAAQgFACgEAGIgEAHIgDAAQgEACgCADQgDAKgFACQgEABgEAFIgJAIIACAAIghAcQgUATgLAHQgCAIABgHIgIAGIAAAAIgEAJQgCAEgFABQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgCADQAGAAADABIADgCQAGACAPgCQAPgBAGADIAygFIARABQAKAAAEADQAIACAKgCIAPgCQAAADAFAAQAGAAACABQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAABgBIABACIASABIgBABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAIAFgDIgCADIAEAAIgBABQAEABADgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIABABIACABQAEgBgEgCIAEACIAHAAIgDABIAGABQACABAEgCIABgFIgGACIAJgEIABABIAAABQADgBADABQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAADIAFgDQgEAFAHABIAGABIgBgDIADADQACABADgCIABADQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIgBADIARgCQAJgCAGACIAAACIAMAAIgBgBIAJAAIAAACIAGgBIAAABQAIACAIgCIgCgBIAFgIIADgBQAAAAABgBQAAAAABAAQABAAAAAAQABABABAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAFgBAFgDQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQACADAEABIAMgCQAGgBAEABIAFAFQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgBIgBAAIgDgBQACAAgDgGIgOgJIABgBQgGgFAAgCIAAAAIgBAAIABAAIgBAAIgIgMIAFAEIgDgHIgFgBQgDAAgEgHIgBgFQgCABgMgQIABAMIgRgPQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgDgBIgBgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDADIABgBQgDACgHgLQgKgLgDgBQACAEgCgEIACAFIgIgLQgDABgEgFIgIgJQgBAAAAgBQAAAAABgBQAAAAAAABQABAAAAAAIgEgHIAAACQAAABAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBIgBgEQABgCgEgEIgIgGQgFgDgCgDIgKgOQgHgLgDABIAAgCQgBgDgFgCIABAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAABIAAAAQgBgEgDgDIgBAAIgBgDIADACQgCgEgIgNIgHgLQAFABANAKIABADQAAAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQADAFAEAAIAEAAIACAFIAKAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAEACAJADIgFgGIAEADQAOAUAJAGIAIAEIgBAAQALAHAOALIAaAWIgFgJQAFADAeAXQAfAZADAEQAMANAYASQAaAUAKAJIAZAYIACgBQAAgBAFABIAAgBIACABQAFACAIgBIgSgQIgEgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgEgFIgUgPIABAAQgJgIgBgCIAAAAIAMAIIgCACIAnAdIACgCIgIgJIgGAAQgGgHgHgGIgMgJQgIgHgEABIAAgBIAAABIAAAAIgPgRIAIAGIgFgJQgCgBgFgBQgEgBgGgKIgEgGQgBABgUgWIAFAOIgagWIAAAAIgBgDIgGgDIgBgDQgDgCgDACIgDADIABgBQgCABgOgOIgSgSQADAGgEgFIABACIgLgMQgDABgHgHIgNgNIgBgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAABABIgHgKQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABABQAAAAAAABQAAAAgBAAQAAgBgBAAQAAgBgBgBIgDgFQAAgCgHgGIgMgJQgGgFgDgEIgRgTQgMgPgEAAIABgCIgJgHIABAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBABAAAAIgBAAIABAAIAAABIgDgEIgEgGIgBAAIgEgFQgBgCAHAGQgGgJgYgdIAbARIACAEQAAAAAAAAQABAAAAAAQABAAABABQAAAAABABQAEACgBgDQAGAHAFABIAGABIADAFIAPAMIABADIARAKIgGgIIAEAEQAXAbAOAJQAIAFAEACIgDgBQAQALAVASQAYAUAPALIgHgLQAHAFAtAjQAuAlADAFQAUASAhAbIA0ApIA8A0IhmgFIghgCIAAABIgDAtQgFBKgDDKIgBAaIh5gCIABAAIgjgDQgVgBgMABQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIhVgBIgDgXQgCgbgFgZQABgEgCgTIgBgZIgDg1IhbAAIAEBgIgCAEQAAADAAAHIADABQgBARABAWIAAAZIgYACIgzADQgdABgRgCIgPAEIiTAIgAkeE0QAvgDAWABQgBAAAAABQAAAAAAAAQAAAAABAAQABgBABAAQACgBABAAQABgBAAAAQAAAAgBABQAAAAgCABIARAAIABgBQAFgBAKgDQAKgCAHACQAAACAIgBQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBABQAUgEAUAAIAQAAIgCgUIAAgLIgDAEQABgEgBgMQgCgKACAAIABACQACAAAAgGIAAgMIgCADIgCgJQACgKgBgWQgCgUACgIIgDgGIAAglIAYAAIAhgCQAUgBAKADIBMgEIAXgBIAGApIACAeQABASgBAGQgBAQADARIAFAdQgEgBABAJQACAMgBACQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAJAAIgDABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAACAAIAHAAIAGgDIgCADIAHAAIAAABQAFABAGgBQAFgBABgCIADABIACABQAFAAgFgDIAIACQAEABAIAAIgFABQADgBAHACQAFAAAGgBIACgFIgKACIAQgEQABAAABAAQAAAAABABQAAAAAAAAQAAABgBAAIAKABQADAAADgCIACADIAIgCIgCADQAAACAHABIALABIgCgDIAHADQADABAGgCIAAADQAEABACgDQACgBAEABIgDACIAWgBIAAAAIABgSIgBACIAAgQIACAAIAAgLIABAAQADgNgDgQIgBADQAAgBgIgHIgBgHQgBgCABgGQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIgBgKIgDgGQABABAAAAQABABAAAAQABAAABAAQAAAAABgBQADgCABgIIgBgWQgBgJABgIIAFgJQAAgEgCgEQgCgDABgDQABgIgBgBQgBgBAAgHIAAgBIABAAQABgEgBgFIAAgJIgBgKQgCgCABgEIACgIIgDgEQAEgOACgXQghgCghAAIgFACQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBgBIgHgCIgeABIAAgBIgRgBIAAgBIASAAIgBACIA7gBIAAgCIgOgCIgFADQgMgCgLAAIgSAAQgOgBgCADIgCAAIACABIgBAAIgagFIALAAIgLgDQgDAAgFACQgFACgOgDIgHgDQgCACgigGIAPAJIgqgBIAAgBIgDgBIgHABIgFgCQgEABgBADIgBAEIAAgBQgBADgWgDQgbgDgEAAQAGADgHgCIACABIgTgDQgCADgNgBIgVgCIgDgBIAGgBIgPgDQAAAAgBAAQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABgBAAQAAAAgCAAQgBAAgCAAIgGgDQgBgBgLgBIgSAAQgMABgFgCIgdgEIgRgBIgJAAIgCAAIAAAAIgQAAIgVAAIgwAAIAPAsIgBgCQgCALACAVQABAUgCALIABAAQgDAAACAUQACAWgCACQgBAKACALIACAQQAAgBAAABQgBAAAAAAQAAABAAABQgBABAAABQgCAHACAHIACAKQACAKgBAFQgCAKABAeIACgDIAAAqgAC5hcIAIAGIgCABIAWARQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIAAAAIgDgFIgFABQgDgGgFgDIgHgGQgFgEgDAAIgBAAgAjMkMIACAAIgCgBgAjPkPIABABIABAAIgBgCIgBABgAi/hcIAEgCQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAgBIgDACIgBgBgAkShlIAFgEIAAACIgFACIAAAAgAkNhnIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(39.75,34.625);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-15.75,-13.3,0.399,0.399);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-7.2,-1.25,0.399,0.399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-13.3,128,125.89999999999999);


(lib.aboutpagebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// over
	this.text = new cjs.Text("About the animation", "normal 400 30px 'Raleway'");
	this.text.lineHeight = 43;
	this.text.lineWidth = 319;
	this.text.parent = this;
	this.text.setTransform(2,-62.45);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-12.1,-10.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-47,-19.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-12.1,-10.95,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("AzVGKIAAsTMAmrAAAIAAMTg");
	this.shape.setTransform(149.275,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-64.4,370.3,155.2);


(lib.about_lynch_uk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch Syndrome UK", "normal 400 25px 'Raleway'", "#0000CC");
	this.text.lineHeight = 36;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A20jgMAtpAAAIAAHBMgtpAAAg");
	this.shape.setTransform(146.05,22.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("A20DhIAAnBMAtpAAAIAAHBg");
	this.shape_1.setTransform(146.05,22.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"normal 400 25px 'Raleway'",lineHeight:36.1}}]}).to({state:[{t:this.text,p:{font:"normal 400 25px 'Raleway'",lineHeight:36.1}}]},1).to({state:[{t:this.text,p:{font:"normal 400 25px 'Raleway'",lineHeight:36.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{font:"normal 400 30px 'Raleway'",lineHeight:42.95}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,294.1,47);


(lib.about_lynch_ireland = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch Syndrome ", "normal 400 25px 'Raleway'", "#0000CC");
	this.text.lineHeight = 36;
	this.text.lineWidth = 199;
	this.text.parent = this;
	this.text.setTransform(-106.2,-40.6);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A7ujgMA3dAAAIAAHBMg3dAAAg");
	this.shape.setTransform(65.475,-15.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("A7uDhIAAnBMA3dAAAIAAHBg");
	this.shape_1.setTransform(65.475,-15.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:-106.2,y:-40.6,text:"Lynch Syndrome ",lineWidth:199,font:"normal 400 25px 'Raleway'",lineHeight:36.1}}]}).to({state:[{t:this.text,p:{x:-106.65,y:-40.55,text:"Lynch Syndrome      ",lineWidth:198,font:"normal 400 25px 'Raleway'",lineHeight:36.1}}]},1).to({state:[{t:this.text,p:{x:-106.65,y:-40.55,text:"Lynch Syndrome      ",lineWidth:198,font:"normal 400 25px 'Raleway'",lineHeight:36.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:-110.05,y:-36,text:"Lynch Syndrome Ireland",lineWidth:351,font:"normal 400 30px 'Raleway'",lineHeight:42.95}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-42.6,357,50.6);


(lib.wherepage_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.homepage.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		this.button_10.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("https://www.lynch-syndrome-uk.org/");
		}
		
		this.ireland_logo.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://lynchsyndromeireland.com/");
		}
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.royal_marsden.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://patientinfolibrary.royalmarsden.nhs.uk/lynchsyndrome', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.uk_cancer_genetic_group.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.ukcgg.org/information-education/ukcgg-leaflets-and-guidelines/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// uk_cancer_genetic_group
	this.uk_cancer_genetic_group = new lib.ukcancergeneticgroup();
	this.uk_cancer_genetic_group.name = "uk_cancer_genetic_group";
	this.uk_cancer_genetic_group.setTransform(1148.2,409.35,0.7266,0.7266,0,0,0,96,80);
	this.uk_cancer_genetic_group._off = true;
	new cjs.ButtonHelper(this.uk_cancer_genetic_group, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.uk_cancer_genetic_group).wait(1).to({_off:false},0).wait(1));

	// the_royal_marsden
	this.royal_marsden = new lib.royalmarsden();
	this.royal_marsden.name = "royal_marsden";
	this.royal_marsden.setTransform(1085.6,315.7,0.6542,0.6542,0,0,0,202.8,54.6);
	this.royal_marsden._off = true;
	new cjs.ButtonHelper(this.royal_marsden, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.royal_marsden).wait(1).to({_off:false},0).wait(1));

	// uk
	this.button_10 = new lib.lynchuk();
	this.button_10.name = "button_10";
	this.button_10.setTransform(1126.85,141.6,0.6241,0.6241,0,0,0,147.6,74.4);
	this.button_10._off = true;
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_10).wait(1).to({_off:false},0).wait(1));

	// ireland
	this.ireland_logo = new lib.irelandlogo();
	this.ireland_logo.name = "ireland_logo";
	this.ireland_logo.setTransform(1120.6,231.35,0.5784,0.5784,0,0,0,134.4,76);
	this.ireland_logo._off = true;
	new cjs.ButtonHelper(this.ireland_logo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ireland_logo).wait(1).to({_off:false},0).wait(1));

	// back_button
	this.homepage = new lib.basicinfobackbutton();
	this.homepage.name = "homepage";
	this.homepage.setTransform(1178.2,635.3,0.9889,0.9889,0,0,0,0.1,0.1);
	this.homepage._off = true;
	new cjs.ButtonHelper(this.homepage, 0, 1, 2, false, new lib.basicinfobackbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.homepage).wait(1).to({_off:false},0).wait(1));

	// where_page
	this.instance = new lib.more_1();
	this.instance.setTransform(1038.8,625.85,0.4653,0.5038,0,0,0,640.6,166.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(838.3,653.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// tree
	this.instance_2 = new lib.tree();
	this.instance_2.setTransform(120,11,0.4567,0.4567);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// background
	this.instance_3 = new lib.wherepage_background("synched",0);
	this.instance_3.setTransform(0.5,0.5,0.0007,0.001,0,0,0,655.4,468.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:709.1,regY:511.1,scaleX:1,scaleY:1,x:659.95,y:468.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-42.2,1418.3,1022.2);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer_1
	this.instance = new lib.Symbol17("synched",0);
	this.instance.setTransform(260.05,137.05,1,1,0,0,0,229.3,102.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6857},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.4571},0).wait(1).to({alpha:0.3429},0).wait(1).to({alpha:0.2286},0).wait(1).to({alpha:0.1143},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.8,24.4,478.59999999999997,225.4);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer_1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.setTransform(252.05,376.15,0.0022,0.0048,0,0,0,232.4,94.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:233.1,regY:104.6,scaleX:0.1269,scaleY:0.1292,x:252.45,y:349.75,alpha:0.1},0).wait(1).to({scaleX:0.2516,scaleY:0.2536,x:252.95,y:323.3,alpha:0.2},0).wait(1).to({scaleX:0.3763,scaleY:0.378,x:253.45,y:296.9,alpha:0.3},0).wait(1).to({scaleX:0.5011,scaleY:0.5024,x:253.9,y:270.45,alpha:0.4},0).wait(1).to({scaleX:0.6258,scaleY:0.6268,x:254.35,y:244,alpha:0.5},0).wait(1).to({scaleX:0.7505,scaleY:0.7512,x:254.85,y:217.55,alpha:0.6},0).wait(1).to({scaleX:0.8753,scaleY:0.8756,x:255.3,y:191.15,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:1,x:255.8,y:164.7,alpha:0.8},0).wait(1).to({scaleX:0.8575,scaleY:0.8578,x:255.4,y:194.7,alpha:0.6857},0).wait(1).to({scaleX:0.7149,scaleY:0.7157,x:255.05,y:224.65,alpha:0.5714},0).wait(1).to({scaleX:0.5724,scaleY:0.5735,x:254.65,y:254.65,alpha:0.4571},0).wait(1).to({scaleX:0.4298,scaleY:0.4313,x:254.3,y:284.55,alpha:0.3429},0).wait(1).to({scaleX:0.2873,scaleY:0.2891,x:253.9,y:314.55,alpha:0.2286},0).wait(1).to({scaleX:0.1447,scaleY:0.147,x:253.55,y:344.5,alpha:0.1143},0).wait(1).to({scaleX:0.0022,scaleY:0.0048,x:253.15,y:374.45,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.2,49.6,487.1,328.09999999999997);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer_1
	this.instance = new lib.Symbol13("synched",0);
	this.instance.setTransform(275,433.9,0.0023,0.0045,0,0,0,219.9,111.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:220.4,regY:111.3,scaleX:0.127,scaleY:0.1289,x:273.35,y:399,alpha:0.1},0).wait(1).to({scaleX:0.2517,scaleY:0.2534,x:271.7,y:364.15,alpha:0.2},0).wait(1).to({scaleX:0.3764,scaleY:0.3778,x:270.1,y:329.3,alpha:0.3},0).wait(1).to({scaleX:0.5011,scaleY:0.5022,x:268.5,y:294.4,alpha:0.4},0).wait(1).to({scaleX:0.6259,scaleY:0.6267,x:266.9,y:259.55,alpha:0.5},0).wait(1).to({scaleX:0.7506,scaleY:0.7511,x:265.25,y:224.7,alpha:0.6},0).wait(1).to({scaleX:0.8753,scaleY:0.8756,x:263.65,y:189.85,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:1,x:262,y:155,alpha:0.8},0).wait(1).to({scaleX:0.8575,scaleY:0.8578,x:253.9,y:192.1,alpha:0.6857},0).wait(1).to({scaleX:0.7149,scaleY:0.7156,x:245.7,y:229.25,alpha:0.5714},0).wait(1).to({scaleX:0.5724,scaleY:0.5734,x:237.55,y:266.35,alpha:0.4571},0).wait(1).to({scaleX:0.4299,scaleY:0.4311,x:229.45,y:303.55,alpha:0.3429},0).wait(1).to({scaleX:0.2873,scaleY:0.2889,x:221.3,y:340.65,alpha:0.2286},0).wait(1).to({scaleX:0.1448,scaleY:0.1467,x:213.1,y:377.8,alpha:0.1143},0).wait(1).to({scaleX:0.0023,scaleY:0.0045,x:205,y:414.9,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,33.2,461.79999999999995,402.2);


(lib.q4answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(438.75,204.15,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:440.4,y:204.55},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:441.45,y:204.35},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:442.5,y:204.15},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:443.55,y:203.95},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:444.6,y:203.8},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:445.7,y:203.55},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:446.75,y:203.4},0).wait(1).to({scaleX:1,scaleY:1,x:447.8,y:203.2},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:447.1,y:202.55},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:446.45,y:201.9},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:445.75,y:201.2},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:445.1,y:200.55},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:444.35,y:199.9},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:443.7,y:199.25},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:443.05,y:198.65},0).wait(1));

	// Layer_1
	this.instance = new lib.q4answerpopupmessage("synched",0);
	this.instance.setTransform(270.15,414.15,0.002,0.0019,0,0,0,0,262.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:232.6,regY:140.8,scaleX:0.1267,scaleY:0.1267,x:268.85,y:399.05},0).wait(1).to({scaleX:0.2515,scaleY:0.2514,x:267.1,y:384.15},0).wait(1).to({scaleX:0.3762,scaleY:0.3762,x:265.35,y:369.25},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:263.65,y:354.4},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:261.9,y:339.5},0).wait(1).to({scaleX:0.7505,scaleY:0.7505,x:260.15,y:324.6},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:258.45,y:309.75},0).wait(1).to({scaleX:1,scaleY:1,x:256.7,y:294.85},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:258.95,y:311.95},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,x:261.2,y:329.1},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,x:263.45,y:346.2},0).wait(1).to({scaleX:0.4297,scaleY:0.4297,x:265.75,y:363.4},0).wait(1).to({scaleX:0.2871,scaleY:0.2871,x:268,y:380.5},0).wait(1).to({scaleX:0.1446,scaleY:0.1445,x:270.25,y:397.65},0).wait(1).to({scaleX:0.002,scaleY:0.0019,x:272.55,y:414.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.4,152.1,470.5,285.5);


(lib.q3_answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(462.7,145.7,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:464.9,y:147.9},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:466.5,y:149.5},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:468.05,y:151.15},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:469.65,y:152.75},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:471.2,y:154.4},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:472.85,y:156},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:474.4,y:157.65},0).wait(1).to({scaleX:1,scaleY:1,x:476,y:159.25},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:475.3,y:158.6},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:474.65,y:157.95},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:473.95,y:157.25},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:473.3,y:156.65},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:472.55,y:156},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:471.9,y:155.35},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:471.25,y:154.75},0).wait(1));

	// Layer_1
	this.instance = new lib.q3answerpopupmessage("synched",0);
	this.instance.setTransform(320.05,366.15,0.0019,0.0019,0,0,0,262.1,262.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:223.6,regY:159.7,scaleX:0.1267,scaleY:0.1267,x:315.25,y:353.45},0).wait(1).to({scaleX:0.2514,scaleY:0.2514,x:310.55,y:340.95},0).wait(1).to({scaleX:0.3762,scaleY:0.3762,x:305.9,y:328.45},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:301.2,y:315.95},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:296.5,y:303.45},0).wait(1).to({scaleX:0.7505,scaleY:0.7505,x:291.85,y:290.95},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:287.15,y:278.45},0).wait(1).to({scaleX:1,scaleY:1,x:282.5,y:266},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:287.75,y:280.1},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:293.05,y:294.15},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:298.3,y:308.3},0).wait(1).to({scaleX:0.4297,scaleY:0.4297,x:303.55,y:322.35},0).wait(1).to({scaleX:0.2871,scaleY:0.2871,x:308.85,y:336.5},0).wait(1).to({scaleX:0.1445,scaleY:0.1445,x:314.1,y:350.55},0).wait(1).to({scaleX:0.0019,scaleY:0.0019,x:319.4,y:364.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.5,119.5,449.2,290.5);


(lib.q2answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(414.7,138.1,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:416.6,y:139.55},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:417.9,y:140.4},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:419.2,y:141.3},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:420.5,y:142.15},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:421.8,y:143},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:423.15,y:143.85},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:424.45,y:144.75},0).wait(1).to({scaleX:1,scaleY:1,x:425.75,y:145.6},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:425.05,y:144.95},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:424.4,y:144.3},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:423.7,y:143.6},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:423.05,y:142.95},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:422.3,y:142.3},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:421.65,y:141.65},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:421,y:141},0).wait(1));

	// Layer_1
	this.instance = new lib.q2answerpopupmessage("synched",0);
	this.instance.setTransform(246.05,276.05,0.002,0.0018,0,0,0,246.4,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:204.6,regY:181.2,scaleX:0.1268,scaleY:0.1265,x:246.55,y:274.15},0).wait(1).to({scaleX:0.2515,scaleY:0.2513,x:247.1,y:272.4},0).wait(1).to({scaleX:0.3763,scaleY:0.3761,x:247.7,y:270.65},0).wait(1).to({scaleX:0.501,scaleY:0.5009,x:248.25,y:268.9},0).wait(1).to({scaleX:0.6258,scaleY:0.6257,x:248.85,y:267.15},0).wait(1).to({scaleX:0.7505,scaleY:0.7504,x:249.4,y:265.45},0).wait(1).to({scaleX:0.8753,scaleY:0.8752,x:249.95,y:263.7},0).wait(1).to({scaleX:1,scaleY:1,x:250.6,y:262},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:250.3,y:263.85},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,x:249.95,y:265.75},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,x:249.65,y:267.65},0).wait(1).to({scaleX:0.4297,scaleY:0.4296,x:249.35,y:269.55},0).wait(1).to({scaleX:0.2872,scaleY:0.287,x:249.05,y:271.4},0).wait(1).to({scaleX:0.1446,scaleY:0.1444,x:248.75,y:273.3},0).wait(1).to({scaleX:0.002,scaleY:0.0018,x:248.45,y:275.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.6,100.5,413.79999999999995,323);


(lib.q1answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(404.1,126.1,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1169,scaleY:0.1197,x:404.4,y:127.25},0).wait(1).to({scaleX:0.212,scaleY:0.2144,x:404.15,y:127.8},0).wait(1).to({scaleX:0.3071,scaleY:0.3092,x:403.9,y:128.4},0).wait(1).to({scaleX:0.4023,scaleY:0.4039,x:403.65,y:128.95},0).wait(1).to({scaleX:0.4974,scaleY:0.4986,x:403.4,y:129.45},0).wait(1).to({scaleX:0.5926,scaleY:0.5934,x:403.1,y:130.05},0).wait(1).to({scaleX:0.6877,scaleY:0.6881,x:402.85,y:130.6},0).wait(1).to({scaleX:0.7828,scaleY:0.7828,x:402.6,y:131.2},0).wait(1).to({scaleX:0.6741,scaleY:0.6746,x:402.1,y:130.65},0).wait(1).to({scaleX:0.5654,scaleY:0.5663,x:401.55,y:130.15},0).wait(1).to({scaleX:0.4566,scaleY:0.458,x:401.05,y:129.7},0).wait(1).to({scaleX:0.3479,scaleY:0.3498,x:400.55,y:129.15},0).wait(1).to({scaleX:0.2392,scaleY:0.2415,x:400.05,y:128.7},0).wait(1).to({scaleX:0.1304,scaleY:0.1332,x:399.55,y:128.2},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:399.05,y:127.75},0).wait(1));

	// Layer_1
	this.instance = new lib.q1answerpopupmessage("synched",0);
	this.instance.setTransform(244.8,260.8,0.002,0.0019,0,0,0,246.4,237.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:231.4,regY:180.6,scaleX:0.1268,scaleY:0.1267,x:243.1,y:260.7},0).wait(1).to({scaleX:0.2515,scaleY:0.2514,x:241.4,y:260.8},0).wait(1).to({scaleX:0.3763,scaleY:0.3762,x:239.7,y:260.85},0).wait(1).to({scaleX:0.501,scaleY:0.5009,x:238.1,y:260.9},0).wait(1).to({scaleX:0.6258,scaleY:0.6257,x:236.4,y:261},0).wait(1).to({scaleX:0.7505,scaleY:0.7505,x:234.7,y:261.05},0).wait(1).to({scaleX:0.8753,scaleY:0.8752,x:233.05,y:261.1},0).wait(1).to({scaleX:1,scaleY:1,x:231.4,y:261.2},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:233.5,y:261.35},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,x:235.65,y:261.5},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,x:237.8,y:261.65},0).wait(1).to({scaleX:0.4297,scaleY:0.4296,x:239.95,y:261.8},0).wait(1).to({scaleX:0.2872,scaleY:0.287,x:242.05,y:261.95},0).wait(1).to({scaleX:0.1446,scaleY:0.1445,x:244.2,y:262.1},0).wait(1).to({scaleX:0.002,scaleY:0.0019,x:246.35,y:262.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.9,90.7,411,341);


(lib.popup_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(571.9,-20.75,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:568.65,y:-16},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:564.8,y:-11.95},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:560.95,y:-7.8},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:557.1,y:-3.75},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:553.25,y:0.35},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:549.45,y:4.45},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:545.6,y:8.55},0).wait(1).to({scaleX:1,scaleY:1,x:541.75,y:12.6},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:547.65,y:8.55},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:553.3,y:2.05},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:558.8,y:-4.85},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:564.25,y:-11.8},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:569.7,y:-18.75},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:575.45,y:-23.9},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:578.05,y:-20.5},0).wait(1));

	// Layer_2
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(-292.05,250.05,0.0018,0.0033,0,0,0,220.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:83.1,regY:132,scaleX:0.1266,scaleY:0.1279,x:-206.9,y:231.3},0).wait(1).to({scaleX:0.2514,scaleY:0.2525,x:-121.45,y:212.05},0).wait(1).to({scaleX:0.3761,scaleY:0.3771,x:-36.05,y:192.9},0).wait(1).to({scaleX:0.5009,scaleY:0.5016,x:49.3,y:173.7},0).wait(1).to({scaleX:0.6257,scaleY:0.6262,x:134.7,y:154.5},0).wait(1).to({scaleX:0.7505,scaleY:0.7508,x:220.1,y:135.35},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:305.55,y:116.15},0).wait(1).to({scaleX:1,scaleY:1,x:390.95,y:97},0).wait(1).to({scaleX:0.8574,scaleY:0.8576,x:311.5,y:119.4},0).wait(1).to({scaleX:0.7148,scaleY:0.7152,x:232.1,y:141.8},0).wait(1).to({scaleX:0.5722,scaleY:0.5728,x:152.7,y:164.2},0).wait(1).to({scaleX:0.4296,scaleY:0.4305,x:73.3,y:186.6},0).wait(1).to({scaleX:0.287,scaleY:0.2881,x:-6.05,y:209},0).wait(1).to({scaleX:0.1444,scaleY:0.1457,x:-85.45,y:231.45},0).wait(1).to({scaleX:0.0018,scaleY:0.0033,x:-164.85,y:253.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.6,-30.8,873.4,285.1);


(lib.pms2femendo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(497.85,153.3,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:498.8,y:157.05},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:499.15,y:160.15},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:499.5,y:163.3},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:499.85,y:166.45},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:500.2,y:169.6},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:500.6,y:172.7},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:500.95,y:175.85},0).wait(1).to({scaleX:1,scaleY:1,x:501.3,y:179},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:500.7,y:175.45},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:500.4,y:171.85},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:500.15,y:168.15},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:499.8,y:164.45},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:499.5,y:160.8},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:499.2,y:157.1},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:498.6,y:153.95},0).wait(1));

	// Layer_1
	this.instance = new lib.pms2femendop("synched",0);
	this.instance.setTransform(-318.05,360.1,0.0016,0.0028,0,0,0,216.4,177.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:93.9,regY:125,scaleX:0.1264,scaleY:0.1275,x:-239,y:350.85},0).wait(1).to({scaleX:0.2512,scaleY:0.2521,x:-159.75,y:341.7},0).wait(1).to({scaleX:0.376,scaleY:0.3768,x:-80.5,y:332.6},0).wait(1).to({scaleX:0.5008,scaleY:0.5014,x:-1.25,y:323.5},0).wait(1).to({scaleX:0.6256,scaleY:0.6261,x:77.9,y:314.4},0).wait(1).to({scaleX:0.7504,scaleY:0.7507,x:157.15,y:305.3},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:236.4,y:296.15},0).wait(1).to({scaleX:1,scaleY:1,x:315.65,y:287.05},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:226.3,y:293.3},0).wait(1).to({scaleX:0.7147,scaleY:0.7151,x:136.95,y:299.55},0).wait(1).to({scaleX:0.5721,scaleY:0.5726,x:47.65,y:305.75},0).wait(1).to({scaleX:0.4295,scaleY:0.4302,x:-41.65,y:311.95},0).wait(1).to({scaleX:0.2869,scaleY:0.2877,x:-131,y:318.15},0).wait(1).to({scaleX:0.1442,scaleY:0.1453,x:-220.35,y:324.4},0).wait(1).to({scaleX:0.0016,scaleY:0.0028,x:-309.65,y:330.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.5,139.3,852.4,282.8);


(lib.PMS2FEMCOLORECTALP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(1079.2,70.45,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1457,scaleY:0.1486,x:1083.2,y:74.25},0).wait(1).to({scaleX:0.2697,scaleY:0.2722,x:1086.65,y:77.45},0).wait(1).to({scaleX:0.3937,scaleY:0.3958,x:1090.05,y:80.6},0).wait(1).to({scaleX:0.5178,scaleY:0.5194,x:1093.45,y:83.85},0).wait(1).to({scaleX:0.6418,scaleY:0.643,x:1096.85,y:87},0).wait(1).to({scaleX:0.7658,scaleY:0.7666,x:1100.25,y:90.2},0).wait(1).to({scaleX:0.8898,scaleY:0.8902,x:1103.7,y:93.4},0).wait(1).to({scaleX:1.0138,scaleY:1.0138,x:1107.1,y:96.6},0).wait(1).to({scaleX:0.8721,scaleY:0.8725,x:1103.25,y:92.95},0).wait(1).to({scaleX:0.7303,scaleY:0.7313,x:1099.3,y:89.2},0).wait(1).to({scaleX:0.5886,scaleY:0.59,x:1095.4,y:85.35},0).wait(1).to({scaleX:0.4469,scaleY:0.4487,x:1091.5,y:81.6},0).wait(1).to({scaleX:0.3052,scaleY:0.3075,x:1087.65,y:77.9},0).wait(1).to({scaleX:0.1634,scaleY:0.1662,x:1083.65,y:74.3},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:1080,y:71.1},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(308.1,235.3,0.0017,0.0027,0,0,0,330.7,163.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111.5,regY:179.1,scaleX:0.1265,scaleY:0.1274,x:384.8,y:233.7},0).wait(1).to({scaleX:0.2512,scaleY:0.2521,x:461.85,y:232.1},0).wait(1).to({scaleX:0.376,scaleY:0.3767,x:539,y:230.45},0).wait(1).to({scaleX:0.5008,scaleY:0.5014,x:616.05,y:228.85},0).wait(1).to({scaleX:0.6256,scaleY:0.626,x:693.1,y:227.2},0).wait(1).to({scaleX:0.7504,scaleY:0.7507,x:770.2,y:225.6},0).wait(1).to({scaleX:0.8752,scaleY:0.8753,x:847.3,y:223.95},0).wait(1).to({scaleX:1,scaleY:1,x:924.4,y:222.4},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:840.15,y:233.8},0).wait(1).to({scaleX:0.7148,scaleY:0.7151,x:755.95,y:245.2},0).wait(1).to({scaleX:0.5721,scaleY:0.5726,x:671.75,y:256.65},0).wait(1).to({scaleX:0.4295,scaleY:0.4301,x:587.55,y:268.05},0).wait(1).to({scaleX:0.2869,scaleY:0.2877,x:503.35,y:279.45},0).wait(1).to({scaleX:0.1443,scaleY:0.1452,x:419.15,y:290.9},0).wait(1).to({scaleX:0.0016,scaleY:0.0027,x:334.95,y:302.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(307.4,56.4,832.8000000000001,321);


(lib.PMS2BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol14();
	this.instance.setTransform(281.15,-138.1,1,1,0,0,0,233.1,104.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.PMS2TITLE();
	this.instance_1.setTransform(0,0,0.2349,0.1986);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#016500").ss(1,1,1).p("EgjngP7MBHQAAAIAAf3MhHQAAAg");
	this.shape.setTransform(296.1,108.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F318E").s().p("EgjoAP8IAA/3MBHRAAAIAAf3g");
	this.shape_1.setTransform(296.1,108.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.2349,scaleY:0.1986,x:0,y:0}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.2554,scaleY:0.2159,x:-26,y:-10}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.2349,scaleY:0.1986,x:0,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.2349,scaleY:0.1986,x:0,y:0}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-10,646.8,252.7);


(lib.pms2_male_prostate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(300.25,45.15,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1146,scaleY:0.1175,x:299.65,y:50.1},0).wait(1).to({scaleX:0.2075,scaleY:0.2099,x:298.45,y:54.45},0).wait(1).to({scaleX:0.3004,scaleY:0.3024,x:297.3,y:58.8},0).wait(1).to({scaleX:0.3933,scaleY:0.3949,x:296.15,y:63.15},0).wait(1).to({scaleX:0.4862,scaleY:0.4874,x:294.95,y:67.5},0).wait(1).to({scaleX:0.5791,scaleY:0.5799,x:293.8,y:71.85},0).wait(1).to({scaleX:0.672,scaleY:0.6724,x:292.6,y:76.2},0).wait(1).to({scaleX:0.7649,scaleY:0.7649,x:291.45,y:80.6},0).wait(1).to({scaleX:0.6587,scaleY:0.6592,x:294.5,y:74.95},0).wait(1).to({scaleX:0.5526,scaleY:0.5535,x:296.3,y:67.05},0).wait(1).to({scaleX:0.4464,scaleY:0.4478,x:297.85,y:59},0).wait(1).to({scaleX:0.3402,scaleY:0.3421,x:299.55,y:51},0).wait(1).to({scaleX:0.234,scaleY:0.2364,x:301.85,y:43.8},0).wait(1).to({scaleX:0.1279,scaleY:0.1307,x:305.55,y:42.3},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:306.4,y:45.4},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol30("synched",0);
	this.instance.setTransform(640.15,276.1,0.0025,0.0032);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:148.8,scaleX:0.1272,scaleY:0.1278,x:574.55,y:267.8},0).wait(1).to({scaleX:0.2519,scaleY:0.2524,x:508.45,y:259.05},0).wait(1).to({scaleX:0.3766,scaleY:0.377,x:442.35,y:250.3},0).wait(1).to({scaleX:0.5013,scaleY:0.5016,x:376.3,y:241.6},0).wait(1).to({scaleX:0.6259,scaleY:0.6262,x:310.2,y:232.85},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:244.1,y:224.05},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:178,y:215.3},0).wait(1).to({scaleX:1,scaleY:1,x:111.95,y:206.6},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:187.7,y:214.55},0).wait(1).to({scaleX:0.715,scaleY:0.7152,x:263.45,y:222.5},0).wait(1).to({scaleX:0.5725,scaleY:0.5728,x:339.2,y:230.5},0).wait(1).to({scaleX:0.43,scaleY:0.4304,x:414.95,y:238.45},0).wait(1).to({scaleX:0.2875,scaleY:0.288,x:490.7,y:246.4},0).wait(1).to({scaleX:0.145,scaleY:0.1456,x:566.45,y:254.35},0).wait(1).to({scaleX:0.0025,scaleY:0.0032,x:642.2,y:262.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,34.5,741.7,332.9);


(lib.pms2_male_colorectal_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(422.25,-4.85,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1146,scaleY:0.1175,x:421.65,y:0.15},0).wait(1).to({scaleX:0.2075,scaleY:0.2099,x:420.45,y:4.5},0).wait(1).to({scaleX:0.3004,scaleY:0.3024,x:419.3,y:8.8},0).wait(1).to({scaleX:0.3933,scaleY:0.3949,x:418.15,y:13.15},0).wait(1).to({scaleX:0.4862,scaleY:0.4874,x:416.95,y:17.5},0).wait(1).to({scaleX:0.5791,scaleY:0.5799,x:415.8,y:21.85},0).wait(1).to({scaleX:0.672,scaleY:0.6724,x:414.6,y:26.2},0).wait(1).to({scaleX:0.7649,scaleY:0.7649,x:413.45,y:30.6},0).wait(1).to({scaleX:0.6587,scaleY:0.6592,x:416.5,y:24.95},0).wait(1).to({scaleX:0.5526,scaleY:0.5535,x:418.3,y:17.05},0).wait(1).to({scaleX:0.4464,scaleY:0.4478,x:419.85,y:9.05},0).wait(1).to({scaleX:0.3402,scaleY:0.3421,x:421.55,y:1.05},0).wait(1).to({scaleX:0.234,scaleY:0.2364,x:423.85,y:-6.15},0).wait(1).to({scaleX:0.1279,scaleY:0.1307,x:427.55,y:-7.65},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:428.4,y:-4.6},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(764.25,224.1,0.0018,0.0026,0,0,0,191.2,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:174.2,regY:164.4,scaleX:0.1266,scaleY:0.1273,x:696.95,y:214.95},0).wait(1).to({scaleX:0.2514,scaleY:0.252,x:629.75,y:205.85},0).wait(1).to({scaleX:0.3762,scaleY:0.3766,x:562.5,y:196.75},0).wait(1).to({scaleX:0.5009,scaleY:0.5013,x:495.3,y:187.65},0).wait(1).to({scaleX:0.6257,scaleY:0.626,x:428.1,y:178.6},0).wait(1).to({scaleX:0.7505,scaleY:0.7507,x:360.9,y:169.5},0).wait(1).to({scaleX:0.8752,scaleY:0.8753,x:293.65,y:160.4},0).wait(1).to({scaleX:1,scaleY:1,x:226.45,y:151.4},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:299.05,y:148.2},0).wait(1).to({scaleX:0.7148,scaleY:0.715,x:371.65,y:145.05},0).wait(1).to({scaleX:0.5722,scaleY:0.5725,x:444.3,y:141.9},0).wait(1).to({scaleX:0.4296,scaleY:0.4301,x:516.95,y:138.75},0).wait(1).to({scaleX:0.287,scaleY:0.2876,x:589.55,y:135.6},0).wait(1).to({scaleX:0.1444,scaleY:0.1451,x:662.15,y:132.45},0).wait(1).to({scaleX:0.0018,scaleY:0.0026,x:734.8,y:129.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.2,-15.5,748.4,319.9);


(lib.mswh6_fem_endometrium_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(251.95,-41.7,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1277,scaleY:0.1072,x:253.4,y:-38.9},0).wait(1).to({scaleX:0.2337,scaleY:0.1894,x:254.3,y:-36.8},0).wait(1).to({scaleX:0.3398,scaleY:0.2716,x:255.2,y:-34.65},0).wait(1).to({scaleX:0.4458,scaleY:0.3538,x:256.1,y:-32.55},0).wait(1).to({scaleX:0.5518,scaleY:0.4361,x:256.95,y:-30.35},0).wait(1).to({scaleX:0.6578,scaleY:0.5183,x:257.85,y:-28.25},0).wait(1).to({scaleX:0.7638,scaleY:0.6005,x:258.75,y:-26.1},0).wait(1).to({scaleX:0.8698,scaleY:0.6827,x:259.65,y:-24},0).wait(1).to({scaleX:0.7487,scaleY:0.5888,x:258.55,y:-26.35},0).wait(1).to({scaleX:0.6275,scaleY:0.4948,x:257.6,y:-28.85},0).wait(1).to({scaleX:0.5063,scaleY:0.4008,x:256.7,y:-31.35},0).wait(1).to({scaleX:0.3852,scaleY:0.3069,x:255.7,y:-33.9},0).wait(1).to({scaleX:0.264,scaleY:0.2129,x:254.75,y:-36.45},0).wait(1).to({scaleX:0.1429,scaleY:0.1189,x:253.9,y:-39},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:252.7,y:-41.1},0).wait(1));

	// Layer_1
	this.instance = new lib.MSH6_fem_endometrium_popupbox("synched",0);
	this.instance.setTransform(-308.4,375.95,0.0022,0.002,0,0,0,182.1,250.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-251.6,regY:120.6,scaleX:0.1269,scaleY:0.1268,x:-261.95,y:339.7},0).wait(1).to({scaleX:0.2516,scaleY:0.2515,x:-214.5,y:303.75},0).wait(1).to({scaleX:0.3764,scaleY:0.3763,x:-167.15,y:267.8},0).wait(1).to({scaleX:0.5011,scaleY:0.501,x:-119.75,y:231.75},0).wait(1).to({scaleX:0.6258,scaleY:0.6258,x:-72.4,y:195.8},0).wait(1).to({scaleX:0.7505,scaleY:0.7505,x:-25,y:159.85},0).wait(1).to({scaleX:0.8753,scaleY:0.8753,x:22.4,y:123.9},0).wait(1).to({scaleX:1,scaleY:1,x:69.8,y:88},0).wait(1).to({scaleX:0.8575,scaleY:0.8574,x:16.8,y:122.95},0).wait(1).to({scaleX:0.7149,scaleY:0.7149,x:-36.15,y:157.95},0).wait(1).to({scaleX:0.5724,scaleY:0.5723,x:-89.15,y:193},0).wait(1).to({scaleX:0.4298,scaleY:0.4297,x:-142.1,y:228},0).wait(1).to({scaleX:0.2873,scaleY:0.2871,x:-195.1,y:263.1},0).wait(1).to({scaleX:0.1447,scaleY:0.1446,x:-248.05,y:298.1},0).wait(1).to({scaleX:0.0022,scaleY:0.002,x:-301.05,y:333.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.8,-51.2,597.9000000000001,427.2);


(lib.msh6title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol12();
	this.instance.setTransform(331.2,-79,0.9462,0.9273,0,0,0,261.1,165);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.msh6caption();
	this.instance_1.setTransform(0,64,0.3419,0.3001);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("EgrbgQFMBW4AAAMAAAAgLMhW4AAAg");
	this.shape.setTransform(302.1,149.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F318E").s().p("EgrcAQGMAAAggLMBW4AAAMAAAAgLg");
	this.shape_1.setTransform(302.1,149.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleY:0.3001,y:64}}]}).to({state:[{t:this.instance_1,p:{scaleY:0.3001,y:64}}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.3001,y:64}}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.341,y:0}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633.9,328.1);


(lib.msh6_prostate_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(352.25,73.95,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1244,scaleY:0.1273,x:355.6,y:77},0).wait(1).to({scaleX:0.2271,scaleY:0.2296,x:358.45,y:79.5},0).wait(1).to({scaleX:0.3299,scaleY:0.3319,x:361.25,y:81.9},0).wait(1).to({scaleX:0.4326,scaleY:0.4342,x:364.05,y:84.4},0).wait(1).to({scaleX:0.5353,scaleY:0.5365,x:366.85,y:86.8},0).wait(1).to({scaleX:0.638,scaleY:0.6388,x:369.65,y:89.3},0).wait(1).to({scaleX:0.7407,scaleY:0.7411,x:372.45,y:91.75},0).wait(1).to({scaleX:0.8435,scaleY:0.8435,x:375.25,y:94.2},0).wait(1).to({scaleX:0.7261,scaleY:0.7265,x:372.05,y:91.4},0).wait(1).to({scaleX:0.6087,scaleY:0.6096,x:368.9,y:88.6},0).wait(1).to({scaleX:0.4913,scaleY:0.4927,x:365.65,y:85.8},0).wait(1).to({scaleX:0.3739,scaleY:0.3757,x:362.5,y:83},0).wait(1).to({scaleX:0.2565,scaleY:0.2588,x:359.3,y:80.15},0).wait(1).to({scaleX:0.1391,scaleY:0.1419,x:356.05,y:77.25},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:353,y:74.6},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol27("synched",0);
	this.instance.setTransform(720,285.9,0.0025,0.0031,0,0,0,160.8,114.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:163.5,scaleX:0.1272,scaleY:0.1277,x:655.1,y:278.4},0).wait(1).to({scaleX:0.2519,scaleY:0.2523,x:590.05,y:270.85},0).wait(1).to({scaleX:0.3766,scaleY:0.3769,x:525.05,y:263.2},0).wait(1).to({scaleX:0.5013,scaleY:0.5015,x:460.05,y:255.65},0).wait(1).to({scaleX:0.6259,scaleY:0.6261,x:395.05,y:248.05},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:330,y:240.45},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:265,y:232.85},0).wait(1).to({scaleX:1,scaleY:1,x:200,y:225.3},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:275.6,y:232.3},0).wait(1).to({scaleX:0.715,scaleY:0.7152,x:351.15,y:239.35},0).wait(1).to({scaleX:0.5725,scaleY:0.5727,x:426.75,y:246.4},0).wait(1).to({scaleX:0.43,scaleY:0.4303,x:502.3,y:253.4},0).wait(1).to({scaleX:0.2875,scaleY:0.2879,x:577.9,y:260.45},0).wait(1).to({scaleX:0.145,scaleY:0.1455,x:653.45,y:267.5},0).wait(1).to({scaleX:0.0025,scaleY:0.0031,x:729.05,y:274.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,51.8,740.6,347);


(lib.MSH6_MALE_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(325.05,11.65,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1244,scaleY:0.1273,x:328.4,y:14.7},0).wait(1).to({scaleX:0.2271,scaleY:0.2296,x:331.25,y:17.2},0).wait(1).to({scaleX:0.3299,scaleY:0.3319,x:334.05,y:19.6},0).wait(1).to({scaleX:0.4326,scaleY:0.4342,x:336.85,y:22.1},0).wait(1).to({scaleX:0.5353,scaleY:0.5365,x:339.65,y:24.5},0).wait(1).to({scaleX:0.638,scaleY:0.6388,x:342.45,y:27},0).wait(1).to({scaleX:0.7407,scaleY:0.7411,x:345.25,y:29.45},0).wait(1).to({scaleX:0.8435,scaleY:0.8435,x:348.05,y:31.9},0).wait(1).to({scaleX:0.7261,scaleY:0.7265,x:344.85,y:29.05},0).wait(1).to({scaleX:0.6087,scaleY:0.6096,x:341.7,y:26.25},0).wait(1).to({scaleX:0.4913,scaleY:0.4927,x:338.5,y:23.5},0).wait(1).to({scaleX:0.3739,scaleY:0.3757,x:335.3,y:20.7},0).wait(1).to({scaleX:0.2565,scaleY:0.2588,x:332.1,y:17.85},0).wait(1).to({scaleX:0.1391,scaleY:0.1419,x:328.85,y:14.95},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:325.8,y:12.3},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(790.2,70.6,0.0018,0.0022,0,0,0,81.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:276.6,regY:175.9,scaleX:0.1266,scaleY:0.1269,x:712.75,y:81.15},0).wait(1).to({scaleX:0.2514,scaleY:0.2516,x:635,y:91.7},0).wait(1).to({scaleX:0.3762,scaleY:0.3763,x:557.2,y:102.2},0).wait(1).to({scaleX:0.5009,scaleY:0.5011,x:479.4,y:112.75},0).wait(1).to({scaleX:0.6257,scaleY:0.6258,x:401.65,y:123.25},0).wait(1).to({scaleX:0.7505,scaleY:0.7505,x:323.9,y:133.75},0).wait(1).to({scaleX:0.8752,scaleY:0.8753,x:246.1,y:144.3},0).wait(1).to({scaleX:1,scaleY:1,x:168.4,y:154.85},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:259.2,y:143.8},0).wait(1).to({scaleX:0.7148,scaleY:0.7149,x:350.05,y:132.8},0).wait(1).to({scaleX:0.5722,scaleY:0.5724,x:440.9,y:121.8},0).wait(1).to({scaleX:0.4296,scaleY:0.4298,x:531.8,y:110.85},0).wait(1).to({scaleX:0.287,scaleY:0.2873,x:622.65,y:99.9},0).wait(1).to({scaleX:0.1444,scaleY:0.1447,x:713.5,y:88.9},0).wait(1).to({scaleX:0.0018,scaleY:0.0022,x:804.4,y:77.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-10,847.1999999999999,329.5);


(lib.msh6_female_ovaries_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(343.95,191.95,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1277,scaleY:0.1072,x:347.4,y:194.7},0).wait(1).to({scaleX:0.2337,scaleY:0.1894,x:350.3,y:196.8},0).wait(1).to({scaleX:0.3398,scaleY:0.2716,x:353.2,y:198.95},0).wait(1).to({scaleX:0.4458,scaleY:0.3538,x:356.1,y:201.1},0).wait(1).to({scaleX:0.5518,scaleY:0.4361,x:359,y:203.25},0).wait(1).to({scaleX:0.6578,scaleY:0.5183,x:361.9,y:205.35},0).wait(1).to({scaleX:0.7638,scaleY:0.6005,x:364.8,y:207.5},0).wait(1).to({scaleX:0.8698,scaleY:0.6827,x:367.7,y:209.65},0).wait(1).to({scaleX:0.7487,scaleY:0.5888,x:364.45,y:207.2},0).wait(1).to({scaleX:0.6275,scaleY:0.4948,x:361.15,y:204.6},0).wait(1).to({scaleX:0.5063,scaleY:0.4008,x:357.85,y:202.05},0).wait(1).to({scaleX:0.3852,scaleY:0.3069,x:354.5,y:199.5},0).wait(1).to({scaleX:0.264,scaleY:0.2129,x:351.2,y:196.9},0).wait(1).to({scaleX:0.1429,scaleY:0.1189,x:347.85,y:194.5},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:344.7,y:192.55},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol26("synched",0);
	this.instance.setTransform(-486.25,387.9,0.0025,0.0032);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:145,scaleX:0.1272,scaleY:0.1278,x:-401,y:378.1},0).wait(1).to({scaleX:0.2519,scaleY:0.2524,x:-316.35,y:367.85},0).wait(1).to({scaleX:0.3766,scaleY:0.377,x:-231.65,y:357.55},0).wait(1).to({scaleX:0.5013,scaleY:0.5016,x:-146.95,y:347.35},0).wait(1).to({scaleX:0.6259,scaleY:0.6262,x:-62.2,y:337.1},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:22.45,y:326.8},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:107.15,y:316.6},0).wait(1).to({scaleX:1,scaleY:1,x:191.85,y:306.35},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:109.75,y:318.85},0).wait(1).to({scaleX:0.715,scaleY:0.7152,x:27.6,y:331.4},0).wait(1).to({scaleX:0.5725,scaleY:0.5728,x:-54.5,y:343.95},0).wait(1).to({scaleX:0.43,scaleY:0.4304,x:-136.65,y:356.5},0).wait(1).to({scaleX:0.2875,scaleY:0.288,x:-218.75,y:369.05},0).wait(1).to({scaleX:0.145,scaleY:0.1456,x:-300.9,y:381.6},0).wait(1).to({scaleX:0.0025,scaleY:0.0032,x:-383.05,y:394.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-487.2,171.4,889.0999999999999,270);


(lib.msh6_fem_colorectal_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(540.3,-43.6,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:544.45,y:-39.8},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:548,y:-36.7},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:551.55,y:-33.5},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:555.1,y:-30.4},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:558.65,y:-27.25},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:562.25,y:-24.1},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:565.8,y:-20.95},0).wait(1).to({scaleX:1,scaleY:1,x:569.35,y:-17.85},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:565.15,y:-21.4},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:560.95,y:-25.1},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:556.8,y:-28.85},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:552.65,y:-32.55},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:548.5,y:-36.25},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:544.55,y:-39.8},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:541.15,y:-43},0).wait(1));

	// Layer_1
	this.instance = new lib.MSH6_FEM_COLORECTAL_POP_BOX("synched",0);
	this.instance.setTransform(-251.05,245.2,0.0021,0.002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:45.5,regY:257.6,scaleX:0.1269,scaleY:0.1268,x:-173.95,y:226.45},0).wait(1).to({scaleX:0.2516,scaleY:0.2515,x:-89.15,y:206.35},0).wait(1).to({scaleX:0.3763,scaleY:0.3763,x:-0.65,y:185.9},0).wait(1).to({scaleX:0.5011,scaleY:0.501,x:88.75,y:165.6},0).wait(1).to({scaleX:0.6258,scaleY:0.6258,x:176.45,y:145.9},0).wait(1).to({scaleX:0.7505,scaleY:0.7505,x:259.95,y:127.15},0).wait(1).to({scaleX:0.8753,scaleY:0.8753,x:335.8,y:109.9},0).wait(1).to({scaleX:1,scaleY:1,x:399.25,y:95.15},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:309.1,y:122},0).wait(1).to({scaleX:0.7149,scaleY:0.7149,x:219,y:148.85},0).wait(1).to({scaleX:0.5723,scaleY:0.5723,x:128.85,y:175.65},0).wait(1).to({scaleX:0.4298,scaleY:0.4297,x:38.7,y:202.5},0).wait(1).to({scaleX:0.2872,scaleY:0.2871,x:-51.4,y:229.35},0).wait(1).to({scaleX:0.1447,scaleY:0.1446,x:-141.5,y:256.2},0).wait(1).to({scaleX:0.0021,scaleY:0.002,x:-231.65,y:283.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.3,-57.5,860.5999999999999,340.8);


(lib.msh2ovaries = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(559.9,23.25,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,y:27.95},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:559.3,y:32},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:558.7,y:36.15},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:558.1,y:40.2},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:557.5,y:44.3},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:556.95,y:48.4},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:556.35,y:52.5},0).wait(1).to({scaleX:1,scaleY:1,x:555.75,y:56.6},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:558.05,y:52},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:559.55,y:44.8},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:560.9,y:37.3},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:562.3,y:29.85},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:564.2,y:23.25},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:566.45,y:21.45},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:566.05,y:23.5},0).wait(1));

	// Layer_1
	this.instance = new lib.MSH2ovariespopup("synched",0);
	this.instance.setTransform(-352.4,230.4,0.0018,0.0036,0,0,0,0,140.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:131.2,regY:135.3,scaleX:0.1266,scaleY:0.1281,x:-256,y:222.8},0).wait(1).to({scaleX:0.2513,scaleY:0.2527,x:-159.85,y:215.2},0).wait(1).to({scaleX:0.3761,scaleY:0.3772,x:-63.65,y:207.6},0).wait(1).to({scaleX:0.5009,scaleY:0.5018,x:32.5,y:200},0).wait(1).to({scaleX:0.6257,scaleY:0.6263,x:128.65,y:192.4},0).wait(1).to({scaleX:0.7504,scaleY:0.7509,x:224.8,y:184.8},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:321,y:177.2},0).wait(1).to({scaleX:1,scaleY:1,x:417.15,y:169.6},0).wait(1).to({scaleX:0.8574,scaleY:0.8577,x:320.65,y:178.2},0).wait(1).to({scaleX:0.7148,scaleY:0.7153,x:224.15,y:186.85},0).wait(1).to({scaleX:0.5722,scaleY:0.573,x:127.65,y:195.45},0).wait(1).to({scaleX:0.4296,scaleY:0.4306,x:31.2,y:204.1},0).wait(1).to({scaleX:0.287,scaleY:0.2883,x:-65.25,y:212.75},0).wait(1).to({scaleX:0.1444,scaleY:0.1459,x:-161.75,y:221.4},0).wait(1).to({scaleX:0.0018,scaleY:0.0036,x:-258.25,y:230},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.4,11.3,940.8,302.9);


(lib.MSH2DESCRPTION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// Layer_1
	this.instance = new lib.Symbol11("synched",0);
	this.instance.setTransform(210.35,10.05,0.0022,0.0033,0,0,0,204.8,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:225.2,regY:151.2,scaleX:0.1269,scaleY:0.1279,x:212.25,y:28.15,alpha:0.1},0).wait(1).to({scaleX:0.2517,scaleY:0.2525,x:214.05,y:45.7,alpha:0.2},0).wait(1).to({scaleX:0.3764,scaleY:0.3771,x:215.95,y:63.3,alpha:0.3},0).wait(1).to({scaleX:0.5011,scaleY:0.5017,x:217.8,y:80.9,alpha:0.4},0).wait(1).to({scaleX:0.6258,scaleY:0.6262,x:219.65,y:98.5,alpha:0.5},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:221.5,y:116.05,alpha:0.6},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:223.35,y:133.65,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:1,x:225.25,y:151.25,alpha:0.8},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:222.3,y:129.7,alpha:0.6857},0).wait(1).to({scaleX:0.7149,scaleY:0.7152,x:219.4,y:108.2,alpha:0.5714},0).wait(1).to({scaleX:0.5724,scaleY:0.5728,x:216.5,y:86.65,alpha:0.4571},0).wait(1).to({scaleX:0.4298,scaleY:0.4305,x:213.6,y:65.15,alpha:0.3429},0).wait(1).to({scaleX:0.2873,scaleY:0.2881,x:210.7,y:43.6,alpha:0.2286},0).wait(1).to({scaleX:0.1447,scaleY:0.1457,x:207.8,y:22.1,alpha:0.1143},0).wait(1).to({scaleX:0.0022,scaleY:0.0033,x:204.85,y:0.55,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-14.5,479.4,331.5);


(lib.msh2_title_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.MSH2caption("synched",0);
	this.instance.setTransform(269.4,202,1,1,0,0,0,269.4,202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.8,404.1);


(lib.msh2_prostate_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(422.55,-70.85,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:416.3,y:-50.85},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:409.45,y:-31.55},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:402.6,y:-12.15},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:395.75,y:7.15},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:388.9,y:26.5},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:382.1,y:45.85},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:375.25,y:65.2},0).wait(1).to({scaleX:1,scaleY:1,x:368.4,y:84.55},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:377.75,y:60.8},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:385.5,y:35.7},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:393.1,y:10.45},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:400.65,y:-14.8},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:408.3,y:-39.95},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:416.4,y:-64.9},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:428.7,y:-70.6},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol23("synched",0);
	this.instance.setTransform(701.05,290.45,0.0028,0.0036,0,0,0,143.2,111.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:179.3,regY:164.2,scaleX:0.1274,scaleY:0.1282,x:640.4,y:277.95},0).wait(1).to({scaleX:0.2521,scaleY:0.2527,x:579.65,y:265.3},0).wait(1).to({scaleX:0.3767,scaleY:0.3773,x:518.95,y:252.6},0).wait(1).to({scaleX:0.5014,scaleY:0.5018,x:458.2,y:239.95},0).wait(1).to({scaleX:0.626,scaleY:0.6264,x:397.45,y:227.3},0).wait(1).to({scaleX:0.7507,scaleY:0.7509,x:336.75,y:214.6},0).wait(1).to({scaleX:0.8753,scaleY:0.8755,x:276,y:201.95},0).wait(1).to({scaleX:1,scaleY:1,x:215.3,y:189.3},0).wait(1).to({scaleX:0.8575,scaleY:0.8577,x:283.3,y:204.95},0).wait(1).to({scaleX:0.7151,scaleY:0.7153,x:351.3,y:220.55},0).wait(1).to({scaleX:0.5726,scaleY:0.573,x:419.3,y:236.2},0).wait(1).to({scaleX:0.4302,scaleY:0.4306,x:487.4,y:251.85},0).wait(1).to({scaleX:0.2877,scaleY:0.2883,x:555.4,y:267.5},0).wait(1).to({scaleX:0.1453,scaleY:0.146,x:623.4,y:283.1},0).wait(1).to({scaleX:0.0028,scaleY:0.0036,x:691.4,y:298.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,-71.6,676.7,407.20000000000005);


(lib.msh2_male_kidney_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(341,-31.25,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:344.95,y:-27.45},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:348.3,y:-24.35},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:351.6,y:-21.2},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:354.95,y:-18.1},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:358.3,y:-14.9},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:361.65,y:-11.8},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:365,y:-8.65},0).wait(1).to({scaleX:1,scaleY:1,x:368.35,y:-5.55},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:364.55,y:-9.1},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:360.75,y:-12.8},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:356.95,y:-16.5},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:353.2,y:-20.2},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:349.35,y:-23.9},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:345.45,y:-27.5},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:341.65,y:-30.6},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol25("synched",0);
	this.instance.setTransform(752.5,140.15,0.0025,0.0031,0,0,0,160.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:163.6,scaleX:0.1272,scaleY:0.1277,x:682.4,y:137.95},0).wait(1).to({scaleX:0.2519,scaleY:0.2523,x:612.15,y:135.25},0).wait(1).to({scaleX:0.3766,scaleY:0.3769,x:541.95,y:132.55},0).wait(1).to({scaleX:0.5013,scaleY:0.5015,x:471.75,y:129.9},0).wait(1).to({scaleX:0.6259,scaleY:0.6261,x:401.55,y:127.2},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:331.3,y:124.5},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:261.1,y:121.85},0).wait(1).to({scaleX:1,scaleY:1,x:190.95,y:119.15},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:288.9,y:122.5},0).wait(1).to({scaleX:0.715,scaleY:0.7152,x:386.9,y:125.8},0).wait(1).to({scaleX:0.5725,scaleY:0.5727,x:484.85,y:129.15},0).wait(1).to({scaleX:0.43,scaleY:0.4303,x:582.85,y:132.45},0).wait(1).to({scaleX:0.2875,scaleY:0.2879,x:680.8,y:135.8},0).wait(1).to({scaleX:0.145,scaleY:0.1455,x:778.8,y:139.15},0).wait(1).to({scaleX:0.0025,scaleY:0.0031,x:876.8,y:142.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-54.4,897.4,347.09999999999997);


(lib.msh2_male_colorectal_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(288.2,4,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:292.15,y:7.75},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:295.5,y:10.85},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:298.8,y:14},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:302.15,y:17.15},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:305.5,y:20.3},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:308.85,y:23.4},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:312.2,y:26.55},0).wait(1).to({scaleX:1,scaleY:1,x:315.55,y:29.7},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:311.75,y:26.1},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:307.95,y:22.4},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:304.15,y:18.7},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:300.4,y:15},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:296.55,y:11.3},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:292.65,y:7.7},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:288.85,y:4.65},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.setTransform(128.05,140.05,0.0022,0.0036,0,0,0,207.7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:230.9,regY:154.1,scaleX:0.1231,scaleY:0.1,x:130.6,y:139.2},0).wait(1).to({scaleX:0.244,scaleY:0.1965,x:133.15,y:138.35},0).wait(1).to({scaleX:0.365,scaleY:0.2929,x:135.65,y:137.45},0).wait(1).to({scaleX:0.4859,scaleY:0.3894,x:138.2,y:136.55},0).wait(1).to({scaleX:0.6069,scaleY:0.4858,x:140.7,y:135.65},0).wait(1).to({scaleX:0.7278,scaleY:0.5823,x:143.3,y:134.8},0).wait(1).to({scaleX:0.8487,scaleY:0.6787,x:145.8,y:133.9},0).wait(1).to({scaleX:0.9697,scaleY:0.7752,x:148.35,y:133},0).wait(1).to({scaleX:0.974,scaleY:0.8073,x:149.3,y:137.95},0).wait(1).to({scaleX:0.9783,scaleY:0.8394,x:150.3,y:142.9},0).wait(1).to({scaleX:0.9827,scaleY:0.8715,x:151.3,y:147.85},0).wait(1).to({scaleX:0.987,scaleY:0.9037,x:152.3,y:152.8},0).wait(1).to({scaleX:0.9913,scaleY:0.9358,x:153.3,y:157.75},0).wait(1).to({scaleX:0.9957,scaleY:0.9679,x:154.3,y:162.7},0).wait(1).to({scaleX:1,scaleY:1,x:155.3,y:167.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-10,401.6,356.6);


(lib.msh2_male_bladder_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(324.95,-36.1,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:329.05,y:-32.8},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:332.5,y:-30.15},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:335.95,y:-26.85},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:339.4,y:-23.3},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:342.8,y:-20.55},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:346.6,y:-17.65},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:350.4,y:-14.75},0).wait(1).to({scaleX:1,scaleY:1,x:354.25,y:-11.9},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:350.05,y:-15.25},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:345.9,y:-18.65},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:341.75,y:-22.1},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:337.6,y:-25.5},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:333.4,y:-28.9},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:329.45,y:-32.4},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:325.6,y:-35.45},0).wait(1));

	// Layer_1
	this.instance = new lib.MSH2BLADDERP("synched",0);
	this.instance.setTransform(655,250.65,0.0025,0.0031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:160.7,scaleX:0.1272,scaleY:0.1277,x:595.6,y:233.6},0).wait(1).to({scaleX:0.2519,scaleY:0.2523,x:535.65,y:216.15},0).wait(1).to({scaleX:0.3766,scaleY:0.3769,x:475.75,y:198.65},0).wait(1).to({scaleX:0.5013,scaleY:0.5016,x:415.9,y:181.2},0).wait(1).to({scaleX:0.6259,scaleY:0.6262,x:356,y:163.65},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:296.05,y:146.2},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:236.15,y:128.75},0).wait(1).to({scaleX:1,scaleY:1,x:176.3,y:111.25},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:244.55,y:131.45},0).wait(1).to({scaleX:0.715,scaleY:0.7152,x:312.8,y:151.7},0).wait(1).to({scaleX:0.5725,scaleY:0.5728,x:381.05,y:171.9},0).wait(1).to({scaleX:0.43,scaleY:0.4303,x:449.35,y:192.1},0).wait(1).to({scaleX:0.2875,scaleY:0.2879,x:517.6,y:212.3},0).wait(1).to({scaleX:0.145,scaleY:0.1455,x:585.85,y:232.55},0).wait(1).to({scaleX:0.0025,scaleY:0.0031,x:654.15,y:252.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-59.4,690.7,341.4);


(lib.msh2_fem_kidney_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(418.55,-154.95,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:413.35,y:-134.95},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:407.5,y:-115.65},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:401.65,y:-96.25},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:395.8,y:-76.95},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:389.95,y:-57.55},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:384.15,y:-38.25},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:378.3,y:-18.85},0).wait(1).to({scaleX:1,scaleY:1,x:372.45,y:0.45},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:380.55,y:-23.35},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:387.05,y:-48.55},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:393.4,y:-73.85},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:399.75,y:-99.05},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:406.15,y:-124.3},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:413.1,y:-149.25},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:424.7,y:-154.7},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol22("synched",0);
	this.instance.setTransform(-384.55,130.25,0.0025,0.0033,0,0,0,0,104.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:199.3,regY:149.2,scaleX:0.1272,scaleY:0.1279,x:-308.75,y:128.8},0).wait(1).to({scaleX:0.2519,scaleY:0.2525,x:-233.45,y:127.15},0).wait(1).to({scaleX:0.3766,scaleY:0.3771,x:-158.15,y:125.55},0).wait(1).to({scaleX:0.5013,scaleY:0.5017,x:-82.85,y:123.95},0).wait(1).to({scaleX:0.6259,scaleY:0.6263,x:-7.55,y:122.35},0).wait(1).to({scaleX:0.7506,scaleY:0.7508,x:67.75,y:120.7},0).wait(1).to({scaleX:0.8753,scaleY:0.8754,x:143.05,y:119.15},0).wait(1).to({scaleX:1,scaleY:1,x:218.35,y:117.6},0).wait(1).to({scaleX:0.8575,scaleY:0.8576,x:146.05,y:122.65},0).wait(1).to({scaleX:0.715,scaleY:0.7152,x:73.7,y:127.65},0).wait(1).to({scaleX:0.5725,scaleY:0.5729,x:1.35,y:132.75},0).wait(1).to({scaleX:0.43,scaleY:0.4305,x:-71,y:137.85},0).wait(1).to({scaleX:0.2875,scaleY:0.2881,x:-143.35,y:142.95},0).wait(1).to({scaleX:0.145,scaleY:0.1457,x:-215.7,y:148},0).wait(1).to({scaleX:0.0025,scaleY:0.0034,x:-288.05,y:153.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.5,-155.8,813.2,432.7);


(lib.mlh1malestomachpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(283,-71.1,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:286.95,y:-67.3},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:290.3,y:-64.2},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:293.65,y:-61.05},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:297,y:-57.95},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:300.35,y:-54.75},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:303.75,y:-51.65},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:307.1,y:-48.5},0).wait(1).to({scaleX:1,scaleY:1,x:310.45,y:-45.4},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:306.65,y:-48.95},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:302.85,y:-52.65},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:299,y:-56.4},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:295.2,y:-60.15},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:291.3,y:-63.8},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:287.4,y:-67.35},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:283.75,y:-70.45},0).wait(1));

	// Layer_1
	this.instance = new lib.MLH1MSTOMACHPOPUPMESSAGE("synched",0);
	this.instance.setTransform(706.5,88.05,0.0019,0.0035,0,0,0,0,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:155.9,regY:59.8,scaleX:0.1556,scaleY:0.1362,x:629.35,y:90.8},0).wait(1).to({scaleX:0.3093,scaleY:0.2688,x:551.95,y:93.7},0).wait(1).to({scaleX:0.463,scaleY:0.4014,x:474.6,y:96.7},0).wait(1).to({scaleX:0.6167,scaleY:0.534,x:397.2,y:99.65},0).wait(1).to({scaleX:0.7704,scaleY:0.6666,x:319.75,y:102.6},0).wait(1).to({scaleX:0.924,scaleY:0.7992,x:242.35,y:105.55},0).wait(1).to({scaleX:1.0777,scaleY:0.9318,x:165,y:108.45},0).wait(1).to({scaleX:1.2314,scaleY:1.0644,x:87.6,y:111.45},0).wait(1).to({scaleX:1.0558,scaleY:0.9129,x:174.5,y:110.7},0).wait(1).to({scaleX:0.8801,scaleY:0.7613,x:261.45,y:109.95},0).wait(1).to({scaleX:0.7045,scaleY:0.6098,x:348.45,y:109.2},0).wait(1).to({scaleX:0.5289,scaleY:0.4582,x:435.35,y:108.45},0).wait(1).to({scaleX:0.3532,scaleY:0.3066,x:522.3,y:107.7},0).wait(1).to({scaleX:0.1776,scaleY:0.1551,x:609.3,y:106.9},0).wait(1).to({scaleX:0.0019,scaleY:0.0035,x:696.25,y:106.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.6,-89.9,879.8000000000001,402.79999999999995);


(lib.MLH1MALECOLORECTALPOPUPFINAL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.MLH1MCOLORECTALPOPUPMESSAGE("synched",0);
	this.instance.setTransform(269.1,146.3,1,1,0,0,0,269.1,146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-5.2,385,264);


(lib.mlh1mcolorectalpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(399.85,-65.8,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:400.85,y:-58.05},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:401.25,y:-51},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:401.65,y:-43.85},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:402.05,y:-36.8},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:402.45,y:-29.7},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:402.9,y:-22.6},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:403.3,y:-15.5},0).wait(1).to({scaleX:1,scaleY:1,x:403.7,y:-8.45},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:404.6,y:-18.4},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:403.75,y:-29.65},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:402.8,y:-41},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:402,y:-52.3},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:401.75,y:-63.25},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:405,y:-68.4},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:406,y:-65.55},0).wait(1));

	// POPUP
	this.instance = new lib.MLH1MALECOLORECTALPOPUPFINAL("synched",0);
	this.instance.setTransform(859.6,187.2,0.0018,0.0034,0,0,0,302.9,146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:145.4,regY:126.8,scaleX:0.1266,scaleY:0.128,x:781.6,y:174.7},0).wait(1).to({scaleX:0.2514,scaleY:0.2526,x:703.9,y:162.25},0).wait(1).to({scaleX:0.3761,scaleY:0.3771,x:626.2,y:149.75},0).wait(1).to({scaleX:0.5009,scaleY:0.5017,x:548.5,y:137.35},0).wait(1).to({scaleX:0.6257,scaleY:0.6263,x:470.75,y:124.9},0).wait(1).to({scaleX:0.7505,scaleY:0.7509,x:393.05,y:112.45},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:315.35,y:100.05},0).wait(1).to({scaleX:1,scaleY:1,x:237.7,y:87.65},0).wait(1).to({scaleX:0.8574,scaleY:0.8576,x:319.55,y:90.4},0).wait(1).to({scaleX:0.7148,scaleY:0.7153,x:401.45,y:93.1},0).wait(1).to({scaleX:0.5722,scaleY:0.5729,x:483.3,y:95.85},0).wait(1).to({scaleX:0.4296,scaleY:0.4305,x:565.15,y:98.6},0).wait(1).to({scaleX:0.287,scaleY:0.2881,x:647.05,y:101.35},0).wait(1).to({scaleX:0.1444,scaleY:0.1458,x:728.9,y:104.1},0).wait(1).to({scaleX:0.0018,scaleY:0.0034,x:810.8,y:106.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.2,-75.3,814.5,295);


(lib.mlh1femaleendometrialpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(600.9,3.3,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,y:8},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:600.3,y:12.05},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:599.7,y:16.2},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:599.1,y:20.25},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:598.5,y:24.35},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:597.95,y:28.45},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:597.35,y:32.55},0).wait(1).to({scaleX:1,scaleY:1,x:596.75,y:36.65},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:599.05,y:32.05},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:600.55,y:24.85},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:601.9,y:17.35},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:603.3,y:9.95},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:605.2,y:3.35},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:607.45,y:1.55},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:607.05,y:3.55},0).wait(1));

	// Layer_1
	this.instance = new lib.MLH1FEMALEENDOMETRIALPOPUPMESSAGE("synched",0);
	this.instance.setTransform(29.75,230.4,0.0016,0.0038,0,0,0,0,130.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:181.8,regY:128,scaleX:0.1264,scaleY:0.1284,x:78.5,y:219.8},0).wait(1).to({scaleX:0.2512,scaleY:0.2529,x:126.95,y:209.15},0).wait(1).to({scaleX:0.376,scaleY:0.3774,x:175.45,y:198.6},0).wait(1).to({scaleX:0.5008,scaleY:0.5019,x:223.95,y:188.05},0).wait(1).to({scaleX:0.6256,scaleY:0.6264,x:272.4,y:177.45},0).wait(1).to({scaleX:0.7504,scaleY:0.751,x:320.85,y:166.85},0).wait(1).to({scaleX:0.8752,scaleY:0.8755,x:369.35,y:156.25},0).wait(1).to({scaleX:1,scaleY:1,x:417.85,y:145.7},0).wait(1).to({scaleX:0.8574,scaleY:0.8577,x:362.1,y:158.4},0).wait(1).to({scaleX:0.7147,scaleY:0.7154,x:306.45,y:171.05},0).wait(1).to({scaleX:0.5721,scaleY:0.5731,x:250.75,y:183.75},0).wait(1).to({scaleX:0.4295,scaleY:0.4308,x:195.1,y:196.45},0).wait(1).to({scaleX:0.2869,scaleY:0.2884,x:139.4,y:209.1},0).wait(1).to({scaleX:0.1442,scaleY:0.1461,x:83.7,y:221.8},0).wait(1).to({scaleX:0.0016,scaleY:0.0038,x:28.05,y:234.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.7,-8.6,601.6999999999999,297.8);


(lib.mlh1femalecolorectalpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(192.8,179.3,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,y:184},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:192.2,y:188.05},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:191.6,y:192.2},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:191,y:196.25},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:190.4,y:200.35},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:189.85,y:204.45},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:189.25,y:208.55},0).wait(1).to({scaleX:1,scaleY:1,x:188.65,y:212.65},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:190.95,y:208.05},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:192.45,y:200.85},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:193.8,y:193.35},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:195.2,y:185.9},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:197.1,y:179.3},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:199.35,y:177.5},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:198.95,y:179.55},0).wait(1));

	// Layer_1
	this.instance = new lib.mlh1femalecolorectlpopup("synched",0);
	this.instance.setTransform(-492.1,342.1,0.0014,0.0031,0,0,0,284.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:217.2,regY:122.2,scaleX:0.1197,scaleY:0.1206,x:-426.6,y:337.2},0).wait(1).to({scaleX:0.2379,scaleY:0.2381,x:-361.05,y:331.9},0).wait(1).to({scaleX:0.3562,scaleY:0.3556,x:-295.55,y:326.6},0).wait(1).to({scaleX:0.4745,scaleY:0.4732,x:-229.95,y:321.35},0).wait(1).to({scaleX:0.5927,scaleY:0.5907,x:-164.4,y:316.1},0).wait(1).to({scaleX:0.711,scaleY:0.7082,x:-98.85,y:310.8},0).wait(1).to({scaleX:0.8292,scaleY:0.8258,x:-33.35,y:305.5},0).wait(1).to({scaleX:0.9475,scaleY:0.9433,x:32.25,y:300.25},0).wait(1).to({scaleX:0.8124,scaleY:0.809,x:-42.7,y:306.25},0).wait(1).to({scaleX:0.6772,scaleY:0.6746,x:-117.6,y:312.3},0).wait(1).to({scaleX:0.542,scaleY:0.5403,x:-192.5,y:318.35},0).wait(1).to({scaleX:0.4069,scaleY:0.406,x:-267.45,y:324.35},0).wait(1).to({scaleX:0.2717,scaleY:0.2717,x:-342.35,y:330.4},0).wait(1).to({scaleX:0.1366,scaleY:0.1374,x:-417.25,y:336.45},0).wait(1).to({scaleX:0.0014,scaleY:0.0031,x:-492.2,y:342.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.4,167.3,713.7,257.3);


(lib.mlh11malebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.malebodypsd("synched",0);
	this.instance.setTransform(218.55,467.35,0.4452,0.3799,0,0,0,1702,1401);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,437.2,934.7);


(lib.mlh1malestomach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mhl1female_0001_stomachpsd("synched",0);
	this.instance.setTransform(83.1,86.75,0.4582,0.4582,14.9988,0,0,1582.9,1516);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010032").s().p("AhZMKIgIAAIgMgBIhOgKIhNgXIgCgCIgSgHIgjgSIADgBIhGg/IgNgKIgKgGIgNgFQADgBAAgEIgZgRIAEAAIhBhHIgBgCIgKgLIgCgBIAAgBIgCgCIgHgGIAAgBIgBAAIgBgCIgHgHIgggaIgFgEQACgHgEgKIgTgtIgDgKIAAgJIgnhwIgjhjIgBgEIgBgDIgQgxIgBAAIAAgBIAAgBIAAgBIgBgCIgBgDIgCgIIgSg6IgRg/IAAgBIAAAAIAAgBIgBgCIAAgCIgeiOICBhhQADAAAGAEQAIACAIgGIgKgRQAggGA2gsQAzgqAlAAIAFgeIDuiwIB2gqIBzhkIApAQIAYgpIACgCIAPgSIACgCIAFgFIgFABIgfAJIgMAGIARgKIAIgIIACACIANgFIABAAIACAAIAZgEIABAAIABAAIACAAIAQABIAEAAIACAAIABABIAQADIACABIABAAIABABIAEABIAWAJIAHABIADAAIABAAQADgBAGgHIADgDQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgDAFIAFgCIACAAIABAAIABgBIAHAAIAAABIAFACIABAAIABABIACACIABABIAAABIAEAEQADACAFgBIAJgXIABgBIADgBIACgBIACAAIABAAIADgBIAGAAIABABIABAAIADAAIACABIACADQACADgEAHIgBAHQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIADABIAHgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABADgFAJIgBAJIABAEQACACAGgBIALgCQAGgBABADIgBACIgHALQgDAGAJgJIgEAEIADgCIgBABQAAABAAABQAAAAABAAQAAABABAAQABAAAAgBQAEgCAMgLQgEAFgBADIgFAIQgHAOAKgBIAJgCQAGgBACAAIgJAMIANgPQgFAIAAABIAEgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgKAOIAQgRIARABIgSAbIANgGIAEgDIg0A4IALgIQAJgGgNAOQgMAKAHgFIADgBIgHAFQANgHACACQACABgCAGQgCAGACABQADABAOgIIgEACIgBAEIAPgPIgDAFIADgBIADAAIgFAFIgCABQgJAIAAACIgCAFIAKgKIAIgFQgFAGAAADQAAAAAAAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAACgFAHIAMgKQgEAGADAAIAIgCQAFgBAAABQAAADgIAKIARgEIASgGQAAADADADIAAAAIAUgYIAYgWIAagQIAggMIADgBQAOgDAMgBIAcABIAaAFIAVAIIACABQAIADAKAHIAZATIABACIABABIACABIALANIAPAVIABACIAIANIAIAKQgDgBgCADIAJARIgDgBIACARQABAFACAFQADAEAFADIADACIACABIABABIAIACQgGACgDAFQgCAFgHABIgHAJIgDAJQAAAIADAIIAFAMIACACIABACIAAAAIAAABIABAAQAHACgHAAIABABIAAABIAAABIACAGIACAIIgJABQgHAAABACIAUABIgIAFQgDACAAACIAAADIABACIACAFIABAFIgBADIgBACIgFAFIgMADIAWAIQABASgDATIgCAOIgBADIgBAFIgBACIAAABIgCAGIAAACIgEAOIgNAHIgDACIgCABIgBABIgiAPIgHAQIgFAIIgCAEIgDAEIgCAEIADADIAUAMIgQAJIAAAhQgJAAgDADQAAAIAGALIAJAQIAOgNQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABIABAEIgCAAQgaAegLAYQgHASACAOQABAIAHAIQAFAHgCABIgFgEQAHAjgJAsIgIAoQgDAYABAYIAagUQADAHAAAiQABAigDAoQgHBmgNALQgHAQgEAVIgUBYIg5AmIh3BgQgNAJgPAJQgjATgaAFIhJAeIhJAeQggAOgsAOQgvAPgiAHQgtAKgqADIgvACIgDAAgAgbHyQAEACAFABIACABIACAAIAEgBIAEgCIABgCIACgBIAFgIIgDgFQABgBAAgSIgCggQADgBABgJIAAgCIABgBIAAgBQACAAAFACIgBALIADALIAIgLIACgTQgBAQAHANQACAFAFAGQAEAFAGACIAEgBIABgBIACgBIAFgFIAIgKIADgFIADgDQAEgCAIADIASAVQAGABgBgQQgCgOAGAFQAEABACgBQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgBgFQABgDAGAAIAAgBIACABIAAAAQAHAEAFgFIADgEQADgCACgBIAHgNQgGgOAJADIAIAEIADACIADAAIgGgTQATAHAWgEQAKgBALgEIAUgJQAGAGAGgDQAEgEAEgIIgIgEIAegIIAKgEIAJgEIAIgFIAfgYIgCgOQACAGAIAFQAHAEAHAAIAFgEIAQgSIgMAVIAAABIgjAeIAKANIACAAIABgDQACgQAEgEIADABIAAACIABgCIgBAAIAAgDIgDACIgBAAIAMgLIgHAMIAEACIABAEIABgCIgCgCIgBgCIAFAAIASghIACgDIgCARIAVgPQAEgEgOgJQgMgIAWgSIASgIQgLgEANgRIAYgdIg3AQIAKgfQAFgSgEgLIAFABQAEABAFgEIgHgLIAJgGQgGgHgPgCIgbgFIAFABQgJgCADgLQACgHAKgPIAPgZQAHgNgCgFQgDADgFABQgFABAIgGQgDgBgEAEIgHAGQABgFAHgGQAKgJAHgMQgOgFAHgQQALgVACgJIAJgCQAEgBAAAIIATgTQAAgCgLADQgJADAGgJQADgEAOgDQAKgCAEgPQAEgHgCgTQgCgPAJgHQABgEAKgMIAMgNIAAgCIgRgbIgDgFIgDgDIgCgBIgBAAIgFAAIgCACIgFAHQAAABgBABQgBAAAAABQgBAAAAAAQAAABAAgBIACgFIgDACIgBAAIAAABIgFABIgHAAIgDgBIAAAAIgCgBIgEgCIgKgHIgCgBIAAAAIgDgBIgHAAIgEAZQgDADgKgBIgKAAIgQgEIgEgCIgIgFIgCgDIgCgDIAAgHQgBgEgDgGIgGgGIgHgDIgIgCQgJgCgFgEQgGgGACgLIgBgEIgBgCIgEgIIgGgIIgNgJIgpgRIgFgDIgJgIIABgBIADgPQgBgIgJAGIADgEIgFAAIACgBIgEgFQgDgDgDgBQgEgBgGACIgDAAIgCABIgBABIgIADQAFgFgBgFQgBgFADgGQABgVgWgLIgdgPIgJgGIAGgHQAEgEgCgBIgPANQAFgJgDgEQgBgCgHgDIgEgCIgDgEQAAgFAHgMIgTAMIgNgLIgDAEQgSAcgLgJQgPACgHASIgKAYQgCgCgJgBQgOgEgDAOQgCACgBAUQgDASgLgBQgLgCgOALIgYASIAHAFQgaANhEAzQg5ArglAJQgBgNAAAPQABATgEgTIgVALIABAEQADgHAJADQgBAFABABIgFAAQgFABgCgDQgDAIgCAXQgEASgUgKQgIgLgFALQgDAIgDgLQgPAkgxAUQgcALgRASIgBADQgBAFgEAEIARAFQgFALAFANIANAXIAIAOIAAABIAAAAIABABIAAAAIACAHQABAHgCAHIgBADIAAABIAAABIgGAIIAEAHIACAEIABABIABACIA7BVIAHAQIAGARIACAJIAAAJQAAAEgCAFIgCAEIgEAEQAAAFACAHIACAFIADAFIAGAHIAXAPIAGAFIADAEIADAEQgLAFgBAEQgCADAEAEIAGAHIABAEIAAACQAGgEADABQACABACAFIAEAGQADACAGgEIgNAKIAAABIAAAAIABABIABACIASAcIgFABQgGAFAEABQAHADgBACIAUgJIgRAOQAAABAAAAQAAABAAABQAAAAABAAQAAAAABAAIAFgBIgFAFQAAAEACADIADABIADAAQAJgBAKgKIgEAIQgDAFACABQAEAAADgFIAEgJIgBAHIAAAGQAAAEABACIADABIAEABIgJAEQAEgBABADIABADIAAADQABAEADAAQADABAHgFIARgXIgOAFQAQgIALgHQAAADgCACIgFAIQAFgCABACIABABIAAADIABACQACgBAFgGIgIASIAOgNIgLASQgGAMAEAIIADAEIAEAEIAGgVIgBATIABADIABACQADAAAFgHIgGAQQADADACgDIAHgOQABAAAAAAQABAAAAAAQAAABAAAAQABABAAACIgHAMIAEABIAEAAIAEgBIAagIIADAAIADABIAGACIAGAHIAAAHIACACIACAAIAAABIgCgBIABABIABAAIAJABIADgBIABAAIAGgCIgCgDIAPgEIABAMIALgGgAFjFoIAGgKIgFgBIAAgCIgBAAIgBABIACABgAFuFTIABAGIAJgBIgFgNgAnnAOIgJAFIgDAHQAEADACAAIAGgPIAAAAgAIEi5IgCABIgEAFIgEAGIgCADIgBACIABAEIABACIACAEIAHgHIAHgKIgBAAQAAgIgCgDgAI1j4IACACIALgHIgphYQgNgCgGABIAAABIAGAAIgGAAIACAMIABAEIAAABIACAEQACAFAAgJIAAAMIACABQAAAAABABQAAAAAAAAQAAAAABgBQAAAAAAAAIAAABQABAAAAAAQAAAAAAAAQAAgBAAgBQAAgBgBgCIAAgFIACAJIAEAMIAAgGIAEAKQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAIgCgBIACAGQADAHAEAHIAHALIAIAKIABABIAEgDIABAAQACAAgDAHgAIWlWIADABIgBgDIgDgBIgCABQgBAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgBAAgAC3pqIAEAAIgEAAIAFAGIACgBIABAAIACgBIAAgEIgBgBIgBgBIgFgBIgBAAIAFACIgKgCgAFkFdgAF6EvIAQgQIgCAFQgIAKgLALgAGngtQADADgCAHIgCABQgDAAAEgLg");
	this.shape.setTransform(79.875,93.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgmIuIgCAAQgFgBgEgDIAAgJIgMAFIgBgMIgOAEIACADIgHADIgBAAIgCAAIgJgBIgBAAIgCgBIgCgCIAAgHIgFgGIgGgDIgEAAIgDAAIgaAIIgDAAIgFAAIgEAAIAHgNQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAgBABIgGAOQgDADgDgDIAGgQQgFAGgCAAIgCgBIAAgEIABgTIgHAWIgDgEIgEgFQgEgHAGgMIALgTIgOANIAIgSQgFAHgCAAIgBgCIAAgCIgBgCQgBgCgFACIAFgHQACgDAAgDQgKAHgRAJIAOgGIgQAYQgIAEgDgBQgDAAgBgEIAAgDIgBgCQgBgDgDAAIAJgDIgFgBIgCgCQgCgCAAgDIABgGIAAgHIgEAJQgDAEgDAAQgDgBAEgEIADgIQgKAKgJABIgDAAIgDgCQgCgCAAgFIAGgEIgGABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIARgNIgTAJQAAgDgHgCQgEgCAGgFIAFgBIgRgbIgBgCIgBgBIAAgBIgBAAIANgLQgGAEgDgCIgDgGQgDgFgCgBQgDgBgGAEIAAgBIgBgFIgGgHQgEgEACgDQACgEAKgFIgDgEIgCgDIgHgGIgXgPIgGgHIgCgEIgDgFQgCgHAAgFIAEgFIACgEQACgFAAgEIAAgIIgBgJIgHgRIgHgRIg7hUIgBgCIgBgCIgCgDIgDgHIAFgIIAAgBIABgBIABgEQABgGgBgIIgBgGIgBgBIAAAAIgBgBIAAAAIgHgPIgOgXQgEgNAEgLIgRgFQAEgEACgFIABgEQARgSAcgKQAwgUAPgkQADALAEgIQAFgLAHALQAUAKAFgRQABgYADgHQACADAFgBIAGAAQgCgCACgEQgJgDgEAHIgBgFIAWgLQADATAAgSQgBgPABAMQAmgJA4gqQBEg0AbgMIgIgFIAYgSQAOgMAMACQALACADgTQACgUABgCQADgNANADQAJACACACIAKgYQAHgTAPgCQALAJASgcIADgDIANALIATgMQgHAMABAFIACADIAEADQAHADABABQADAEgFAJIAPgNQACABgEAFIgGAHIAJAGIAdAOQAWAMgBAVQgDAFABAFQABAFgEAGIAHgEIACgBIABAAIADgBQAGgBAEABQADAAADADIAEAFIgCACIAGAAIgEAEQAJgGABAHIgDAPIgBACIAJAIIAGADIAoAQIANAJIAGAIIAFAIIAAACIABAEQgBAMAFAGQAFADAJACIAIACIAIAEIAFAFQAEAGAAAFIAAAGIACAEIACACIAIAFIAFACIAPAEIAKABQAKABAEgEIADgYIAHAAIADABIAAAAIADABIAKAGIADADIACAAIAAABIADAAIAHAAIAFgBIAAAAIABAAIAEgCIgDAFQAAAAAAAAQABAAAAgBQABAAAAgBQABgBABgBIAEgHIACgBIAFgBIABABIACABIADADIADAEIARAcIAAABIgLANQgLAMgBAFQgIAGABAQQACASgEAHQgEAQgJACQgOADgEADQgFAJAIgDQALgEAAADIgTATQABgIgFAAIgIADQABgHgDgEQgFANAHgCQgCAJgMAUQgGARANAFQgHAMgKAJQgHAHgBAEIAHgGQAEgDADAAQgIAGAFAAQAGgBACgDQADAFgIANIgPAYQgJAPgCAIQgEAKAJACIgFAAIAbAEQAPACAGAHIgJAGIAHALQgFAEgEAAIgFgBQAEAKgFATIgKAfIA3gQIgYAdQgNARAMADIgTAJQgWASANAIQANAJgDADIgWAPIADgRIgDAEIADgFIgQAQIgGAJQALgKAIgKIgRAgIgGAAIABACIACACIgBACIgBgEIgDgBIAGgNIgLALIAAAAIADgBIAAACIACABIgBACIgBgDIgDgBQgEAEgCARIgBADIgCAAIgJgNIAigfIABAAIALgWIgQATIgEAEQgIAAgHgEQgIgFgCgHIACAOIgeAZIgJAEIgJAEIgJAEIgeAIIAHAEQgEAJgEADQgFAEgHgGIgUAIQgKAEgLACQgVAEgUgHIAHASIgEAAIgDgCIgIgDQgJgEAHAPIgIANQgCAAgCADIgEAEQgFAEgGgDIgBAAIgCgCIABACQgHAAgBACIABAFQAAABAAABQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgDABgEgBQgGgFACAOQABAQgFAAIgTgVQgHgEgEADIgEADIgDAEIgIAKIgEAFIgDABIgBABIgEACQgFgDgEgEQgFgGgDgGQgGgNAAgQIgBATIgIALIgCgKIAAgLQgFgDgCABIAAAAIgBABIAAADQgBAJgEAAIADAgQAAASgCABIAEAGIgGAHIgCACIgBABIgEACIgEABgAhfIjIgBAAIADAAgAFOGVIAFABIgGALgAFMGVIABgBIABgBIAAACgAFZGMIAEgJIAFAOIgJABgAoJBSIAEgHIAIgEIABAAIgHAOIAAABQgCAAgEgEgAHjhqIAAgCIgCgDIACgDIACgCIADgGIAEgFIACgCIACgBQACAEAAAIIACgBIgIAKIgHAIgAICjuIADACIgBAEIgCgGgAIBj4IAAAFIgEgMIgCgJIABAGQAAABAAABQAAABAAABQAAABAAAAQAAAAAAAAIAAgCQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgCIAAgMQAAAJgCgFIgCgEQANAAAJgEIgEAigACpotIAAAAIgBABg");
	this.shape_1.setTransform(82.05,87.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:1582.9,scaleX:0.4582,scaleY:0.4582,rotation:14.9988,x:83.1}}]}).to({state:[{t:this.instance,p:{regX:1582.8,scaleX:0.4832,scaleY:0.4832,rotation:14.9973,x:83.2}}]},1).to({state:[{t:this.instance,p:{regX:1582.9,scaleX:0.4582,scaleY:0.4582,rotation:14.9988,x:83.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:1582.9,scaleX:0.4582,scaleY:0.4582,rotation:14.9988,x:83.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.7,175.1,183);


(lib.mlh1malecolorectal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.colonwithparts_0001_wholegutpsd("synched",0);
	this.instance.setTransform(107.7,94.4,0.0993,0.0923,0,0,0,2031.2,1535.8);

	this.instance_1 = new lib.colonwithparts_0000_colonpsd("synched",0);
	this.instance_1.setTransform(107.7,100.25,0.1141,0.1104,0,0,0,2030.2,1535.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-12.4,247.10000000000002,225.3);


(lib.mlh1male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.malebodypsd("synched",0);
	this.instance.setTransform(216.65,507.35,0.4412,0.4125,0,0,0,1702.1,1401);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(21,1,1).p("EgYhg3KQgeCIASC2QAjFuDuDuQDuDuguDhQgWBxhGBBQjYAUjhAmQnDBLgyBXQhGB8gCAEQgtBZgNBUQgkDrDOD1QCGCfATAfQAfA0gOA9QgKAsgvCjQgwDFgZESQguH7hWDWQgVA0gjBNQgZBFgHBmQgBARgYEsQgUD0gHC3QgXI8BLFvQBSGMA9DCQAsCNA2BaQAlA+KugPQFXgHFQgUIH0AUIWNAUQgtkjhQlIQigqPivi8QhihoAbg5QAUgtBxggQBCgTCignQCNgqBFg/QBIhBAfhGQAIgSAghzQAahcAxhSQBEh1CHiOQB6iAB8haQBBgvBcg/QBBg2AkhTQApheAkjKQAkjLgEhWQgDhOgpgrQhAgygtgpQhVhMhKh7QhOiCgUhTQgHgbgDhTQgCg3gig7QguhQiDiQQh9iKgshTQgTgkgWhUQgThGg1hPQhMh0i3jDQi3jFh3geQgygNgzAMQghAHg7AcQhDAegjALQg/AUhCgBQirgCj0iSQnPkThBigQgUgyAWghQALgQAPgGQBfhzBViXQCqksgyivQgyiwqpAeQlUAPlLAyg");
	this.shape.setTransform(207.0762,355.056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgCTA38In0gUQlQAUlXAHQquAPglg+Qg2hagsiNQg9jChSmMQhLlvAXo8QAHi3AUj0IAZk9QAHhmAZhFQAjhNAVg0QBWjWAun7QAZkSAwjFQAvijAKgsQAOg9gfg0QgTgfiGifQjOj1AkjrQANhUAthZIBIiAQAyhXHDhLQDhgmDYgUQBGhBAWhxQAujhjujuQjujugjluQgSi2AeiIQFLgyFUgPQKpgeAyCwQAyCviqEsQhVCXhfBzQgPAGgLAQQgWAhAUAyQBBCgHPETQD0CSCrACQBCABA/gUQAjgLBDgeQA7gcAhgHQAzgMAyANQB3AeC3DFQC3DDBMB0QA1BPATBGQAWBUATAkQAsBTB9CKQCDCQAuBQQAiA7ACA3QADBTAHAbQAUBTBOCCQBKB7BVBMQAtApBAAyQApArADBOQAEBWgkDLQgkDKgpBeQgkBThBA2QhcA/hBAvQh8Bah6CAQiHCOhEB1QgxBSgaBcQggBzgIASQgfBGhIBBQhFA/iNAqQiiAnhCATQhxAggUAtQgbA5BiBoQCvC8CgKPQBQFIAtEjg");
	this.shape_1.setTransform(207.0762,355.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:1702.1,scaleX:0.4412,scaleY:0.4125,y:507.35}}]}).to({state:[{t:this.instance,p:{regX:1702,scaleX:0.5143,scaleY:0.4809,y:507.4}}]},1).to({state:[{t:this.instance,p:{regX:1702,scaleX:0.5143,scaleY:0.4809,y:507.4}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:1702,scaleX:0.5143,scaleY:0.4809,y:507.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-84,507.5,1182.9);


(lib.mlh1femaleorganback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.femalebody_1("synched",0);
	this.instance.setTransform(303.3,460.75,0.391,0.3475,0,0,0,1522.8,1521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611.5,921.5);


(lib.mlh1female = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.femalebody_1("synched",0);
	this.instance.setTransform(291.05,437.6,0.3724,0.33,0,0,0,1528.5,1521);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("EAMnA4VQAFgDgDgBQhNADhOgCQg1gBgwAGIgagIIh/AIQAmgHgBgBQgEgFh5gCIiqAAIArAIIhzgGQhBgChQAFIgHgGQhLgBgZAGQgVADg+gBIAwgGInpAJQkHAFi6gEIAEgCIhOgBIgIgiQgNg2gGgkIgrjmIACAQIgijpIAEgMQgLhegGhSIADAFQgNkKADjKIgDA0IAAgQIgNhyIAHh/IARh6IgDAuQAAACAAABQAAABAAAAQABABAAgBQAAAAABgBIADgNQAHg3AJg0IAaiWIAAACIgCAOIgBARQAAAIAIgTIAQgxIADgEIAohzQAVg9AWgzIAmhUIADgEQARgiAVglIAkg8QATgdARgXIAdgnIAKgMIAigmIACgDIBFhHQA3g1AmgnQAbgfAVgeIAbgpIAfg1IACgCIASgeIABgDIAIgQIABAAIAAgBIACgHIAAgBIACgDIAAAAIABgBIAEgPIABgFQACgKAAgGIgBgMIAAgCIAAAAIgBgBIAAgBIgCgEIAAgBIAAAAIAAgBIgBAAIgBgBIgFgGIgBgBIAAgCIgBgCIgBAAIgBgBIgJgLQgHgIgJgIIgDgBIgZgTIABABIgSgNIAAgBIighvIgBgBIgCgCIgEgDIgfgaIgBgCIgCgCIgkgjQgbgbgfgmIgHgJIgCgCIgBgDIgNgRIAAgBIgbgoIgGgHIgGgIIgohPIAAgCIgBgCIgJgXIAAAAIAAgBIgEgJIgBgCIgBgDIgTgqIgMgUIgPgLIgIgFQgCgBgEgBIgEgEIgBgBIgBAAIgDgCQgEgCgEAAIgEgBIgGgBIgMACQgOACgSAKIgSAMIgSAOQgTAPgSATQgQARgVAYQghAngmA3QgfAvgkA7IhBByQg9Bxg+B/QgIANgLAWIhhDSIAZguIhzDrIgBACIAAAAIgBACIgJAPIgBADIgBABIiNEZQgvBlg0BzQg6CChRC5IgdBLQAKgbgUAlQgXArgYA1QgqBfhYDQIgMAdIi5gTIAFgCQjhgXg5gIIAIAAIEbAbIgJAEICyASIAMgbQBRjABZjKICUlPIgGgDIhiDSIgYBKQhGCXgsBkIhUDBIgJAWIgXgDIilgQQjbgYgoADIgbgDIATADIgCAAIjOgcIAkguIAjgvIAAgBIABAAIAkgyIAmg3Ig5BYICJjFIAOgaIALgVIALgXIDPllQAEgLAHgOICAkIIBojrIhtDXICtnBIA2i7IgBAKIAEgKIA+jeQAOhCgDgJIgEgEQgDgDABgMIACAAIACgNQACgLAEgQICjpwQAkiEAQhCQgMApgFAKQgCAHAEgPIAPgzQgBAAgNAqIgUBGQAPg8AVhHIBHjxIAUhWQAVhMAXhEIB4lCIgCAGIgBABIAAgCIADgIIAdg7IgdA+IAVglQAFgKgKAWIgUAyIAmhSIBNiAQAAgBgBAAQAAAAAAAAQgBABAAAAQgBABgBACIgCACIgBABIgBADIgaAjQgDAFACgFIAZgoIAAgBIAAAAIABAAIAKgPIABgDIAsg3IBqhyQAbgcAqgnQA1gwA9gsQA0gnBBgnIAKgGIABgBIAAAAIABgBIAxgaQAagOAhgPQA/gcA2gPQAhgLAtgJIBSgQIBigIQAnAAAhABIBIADIASgBIAXgEIADAAIAXgGIAngQIARgMIABgCIAJgHIACgBIAXgcQAEgFAGgJIAHgQIAHgQIABgCIAAgCIADgGIABgCIABgFQAEgOAEgSQAEgcABgjIABgeIgBgDIgBgYQgBgVgDgbIgMg8IgBgDIgBgCIAAgBIAFgCIgOg5IgBgBIAAgBIgBgDIgahXIAAgBIgBgBIgtg2IAFAGIgZgfQgHgGABABIgHgFQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIh5izIgKgLQAGALgCgCIgTgaIANAPIg3hcQgRgcAVAhIBABkIg/hrIhTiWQgQgdgRgnIgthqIgpiLIgNheIABg1IAEgYIAAgEIADgOIAJgfIAHgTIADgGIgGAPIgBADIAAABIgBACIgDAPQgIAeAAAZQgCAiADAkQAFAnALApQAIAkARAvIAgBSQAdBAAqBMIgQgiQAAgCAFAIIBGCBIg7hkIAjBGQgDgHADAFIBOB1QAJALgUgjIBeCOQAfAqAWAZIB5CPIAaBeIACAFIAAABIABACIAAABIAAABIABADQAHAYAFAYQAMA2AFAtIAEBmIgBAbIgDAbQgEAbgIAbIgKAUIgCAEIgOAbQgGAMgOATQgKAOgNAMQgOANgMAIQgPAKgNAIQgZAMggAHQgZAGgcADIgdABIgDAAIgGAAIgCAAIgxAAQgtACgjADIBEABIh3AGIiQAdQgdAIgvAQQgnAPgeAOIhaAsIAAABIgBAAIAAAAIgfARIgzAgIhZBBQgiAaglAjQg7A3gpAzIgFAFIhUB0IgIANIgBACIgmBCIAQggIgfA7IgBACIgVAwQgbA7gSAxIgnBrIhCDOIgdBlIhUExIjUNUIBGj0IhbFxIiPHzQgYBHgrBwIg3CFIgBADIgBADIiDEbIg8B3IgtBUIiEDnQgsBOgmA6QgkA6gnA4IGhAuIEFpRIB6kSIDBmUIABgBIABgCIAGgJIABgBIAAgBQAkAUgNgIIgWgPIAAAAIABgCIABgBIAAgBIABgBICslvIBHiUIB+jsIABgCIACgCIAZgrQAqhGAthAIAZghIBPhdIAoglIAPgMQAOgMASgLQATgLAUgIQAXgKAVgEIAZgCQANAAANACQATADAHADQALADANAHQAVAKATARQAQAPANARIAXAhIAjBHIABACIAIAUIABADIAIASIABABIAAABIAJASIABABIAIAQIABADIACAEIAVAjIABACIAYAjIACACIA1BBIAQAQIABABIACABIACAEIAMALIACABIAPAOICsB5IAcAUIASAOIABAAIAEADIABAAIABABIABACIAAABIAEACIAVATIAIAKQAKANADAFIAOAYIABADIABACIACAGIABACIACAGIABABIAAABIABACIAAACIABACIABAFIAAACIAAACIABADIABAGIACAiIgBACIAAAGIgBAFIAAADIgEAYIgBAGIgBACIAAABIgFAQIgBABIgHARIAAACIgDAHQgHAOgKAUIgFAHIg0BPIgpA1QgUAbgWAZIjKDjIhPBxQgiA3gZA1QgzBogmB+Ig6D7IgVCqIgNC9IAAAHQgCA4AABHIANE7IASC+IARB+IAUB9QAKA9AMBAIAQBMQPFgKMfgGIgUACIGnAAQDiAACYgBQAZh2ANhFQgBAMAEgQIA0j2IgDATIAkijQinoOhulSIgBgDIgBgEQg0j9g6kNQgLg/g7ktQg9k6gNhMIgaiIIABgLQB+q0CJsSIAjjDIBIC5QD3J7GsRCIKxbeQAIAWALAjQAQAwAsBxIABABQCQixCwjdIiPrFQhTmfgvkPIgoipMgRqgllIpfizIqyjUIAZlxIABgDIAAgCIA8lmICBtCIrMADIp0gfIitgfIghgGILUgiIgUACQCvADEkgCQE6gDCGACIAtABIgVB7IAAADQgGADguE+IgjDtQgSB0gIAdQgWB7gSCFIgdDXIgGBsQAAABgFAsQgHA9gEBLIArAMQAeAJCFAhQCLAkBcAfQBaAeDAA3IE/BfIgigOIEPBSIAJATIHmQOQEhJoCaFXIgQgdIAdA2QAyBfgrhOIBzD4IAGAKIBJCNIABAEIACAIQAyDPATCIQgEAGAZBxIAMA3QADAPgJghQA+EfA8EtQAjCwBBFSIAEAWIgOASQjeETiwDiIg1BFIhZjZIAOAiIhBitIAOA7QgRg0hJi1Qg9iXAGAEIAKAYQAHAGgmhlIhBiqQAAALAMAiIg4iIQg7iih+lAQh1ksgohyIgqhcQg2iUismsQiZmAg8ivIjbomIhNHLIhNGyQguEAgYBxIAFAhQAtD1A7EUQBHFJAaCEQgOggAeCRQAoDBAFAnQACgFAHAbIAoCBQAcBaAMAWIgFAJICnIQIgPgnQgDgEAPAwIAhBjIADANIgXCNIAAgiQgKAigEAaIgIAtQACgLgCgDQgXBegQBWQgRBYADAKQgGAZgGAQQgFANgGAfQgLAyAFgMIAOgtIgaBkIgKArIgqgBQhLgCiNADIBTgEQgpABhzgBQhhgBhhAFIgTALIA9gCIioAJQghgBADgBgA0TckIAAABIAAgBgEArLAIiQAUAngCgGIAVAxQATAqgBAAQgeg+gbg+gArV80IAAgBIA1ABIADAAgArZ81IAEAAIAAAAgAmL/qQAAgBAAAAQABgBAAAAQAAAAAAAAQAAABABAAIgBADQgCAHgCAAgEgI0gn6IAFAGIACAEg");
	this.shape.setTransform(287.45,358.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgSsA1+QgNhAgKg9IgUh9IgQh+IgTi+IgMk7QAAhHACg4IAAgHIAMi9IAWiqIA6j7QAmh+AzhoQAZg1Aig3IBPhxIDKjjQAWgZAUgbIApg1IA0hPIAEgHQALgUAGgOIAEgHIAAgCIAHgRIAAgBIAFgQIABgBIAAgCIACgGIAEgYIAAgDIABgFIAAgGIABgCIgCgiIgBgGIgBgDIAAgCIAAgCIgCgFIAAgCIgBgCIAAgCIAAgBIgBgBIgCgGIgBgCIgCgGIgBgCIgBgDIgOgYQgDgFgKgNIgJgKIgUgTIgEgCIAAgBIgCgCIgBgBIgBAAIgDgDIgBAAIgSgOIgcgUIith5IgOgOIgCgBIgMgLIgDgEIgBgBIgBgBIgQgQIg2hBIgBgCIgYgjIgBgCIgVgjIgCgEIgCgDIgIgQIAAgBIgJgSIAAgBIgBgBIgIgSIgBgDIgJgUIAAgCIgjhHIgXghQgNgRgQgPQgTgRgVgKQgNgHgLgDQgIgDgSgDQgNgCgNAAIgZACQgVAEgYAKQgUAIgSALQgSALgOAMIgPAMIgoAlIhQBdIgYAhQguBAgpBGIgaArIgBACIgBACIh+DsIhHCUIisFvIgBABIAAABIgBABIgBACIAAAAIAWAPQANAIglgUIAAABIgBABIgFAJIgBACIgBABIjBGUIh7ESIkEJRImhguQAmg4Alg6QAlg6AthOICEjnIAthUIA8h3ICDkbIABgDIABgDIA3iFQArhwAYhHICPnzIBalxIhGD0IDVtUIBTkxIAehlIBCjOIAnhrQASgxAag7IAWgwIABgCIAfg7IgQAgIAlhCIACgCIAHgNIBVh0IAFgFQApgzA7g3QAlgjAhgaIBZhBIA0ggIAegRIABAAIAAAAIAAgBIBagsQAfgOAngPQAvgQAdgIICPgdIB4gGIhFgBQAkgDAsgCIAyAAIACAAIAGAAIADAAIAdgBQAcgDAZgGQAggHAYgMQAOgIAOgKQANgIAOgNQANgMAKgOQANgTAHgMIAOgbIACgEIAKgUQAIgbAEgbIADgbIABgbIgEhmQgGgtgLg2QgFgYgHgYIgBgDIAAgBIAAgBIgBgCIAAgBIgCgFIgaheIh6iPQgVgZgfgqIheiOQAUAjgKgLIhNh1QgDgFADAHIgjhGIA7BkIhHiBQgEgIAAACIAQAiQgqhMgdhAIgghSQgRgvgJgkQgKgpgFgnQgDgkABgiQABgZAHgeIAEgPIABgCIAAgBIABgDIAFgPIgDAGIgHATIgJAfIgDAOIAAAEIgDAYIgBA1IANBeIApCLIAtBqQARAnAQAdIBSCWIBABrIhAhkQgWghASAcIA3BcIgNgPIATAaQACACgHgLIALALIB5CzQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABIAGAFQAAgBAGAGIAaAfIgGgGIAuA2IAAABIABABIAaBXIABADIAAABIABABIANA5IgEACQgGgdgIgeIgchbQigi5iMjlQkYnNBkjhIAhAAICtAfIJzAfILNgDIiBNCIg8FmIAAACIgBADIgaFxIKzDUIJeCzMARqAllIAoCpQAwEPBTGfICPLFQixDdiPCxIgBgBQgshxgRgwQgKgjgJgWIqw7eQmsxCj3p7IhIi5IgjDDQiJMSh+K0IgCALIAbCIQANBMA9E6QA7EtAKA/QA6ENA1D9IABAEIABADQBuFSCnIOIgkCjIADgTIg0D2QgFAQACgMQgNBFgZB2QiYABjiAAImnAAIAUgCQsgAGvEAKIgQhMgAr48QIAAABIA4AAIgDAAIg1gBIAAAAIgEAAIAEAAgAmu/FIgDAJQACAAACgHIAAgDIAAgBIgBACgEgJQgnLIgCgEIgGgGgAnh/dQAPg2gChKQgCg/gQhIIACADIALA8QAEAbABAVIABAYIABADIgBAeQgBAjgFAcQgDASgFAOIgBAFIgBACIACgHg");
	this.shape_1.setTransform(290.9875,355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:1521,scaleX:0.3724,scaleY:0.33}}]}).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4186,scaleY:0.3709}}]},1).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4186,scaleY:0.3709}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:1520.9,scaleX:0.4186,scaleY:0.3709}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-54.1,654.7,983.6);


(lib.mlh1femcolonfinal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// colon highlight
	this.instance = new lib.colon();
	this.instance.setTransform(-7,-13,0.0962,0.0962);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.colonwithparts_0001_wholegutpsd("synched",0);
	this.instance_1.setTransform(93.5,88.25,0.0863,0.0863,0,0,0,2029.9,1535.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("AsjrkIhJGTIBfH1IEmFKIBKj0ICyBiICeiHIB9gNICIg8IiyDoIAVB6IgfAxIAUFBIB+kEIGkirIEmnQIAVozIidkNImvENIoMAlImvj1g");
	this.shape.setTransform(91.9,90.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEIfIAfgxIgWh6ICzjoIiIA8Ih9ANIieCHIiyhiIhLD0IkllKIhfn0IBJmUICJg9IGvD0IIMgkIGvkOICdEOIgVIyIkmHPImkCsIh+EEg");
	this.shape_1.setTransform(91.9,90.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-13,208.3,199.5);


(lib.mlh1_male_stomach_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(249.7,-85.9,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:253.65,y:-82.3},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:257,y:-79.4},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:260.35,y:-76.4},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:263.7,y:-73.5},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:267.05,y:-70.5},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:270.45,y:-67.6},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:273.8,y:-64.6},0).wait(1).to({scaleX:1,scaleY:1,x:277.15,y:-61.7},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:273.3,y:-65},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:269.45,y:-68.35},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:265.65,y:-71.75},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:261.85,y:-75.1},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:258,y:-78.45},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:254.15,y:-81.85},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:250.45,y:-85.25},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol18("synched",0);
	this.instance.setTransform(245.5,-30.85,0.0022,0.0036,0,0,0,204.8,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:195.8,regY:260.5,scaleX:0.0956,scaleY:0.1102,x:233.5,y:-17.1},0).wait(1).to({scaleX:0.1889,scaleY:0.2168,x:221.55,y:-4.05},0).wait(1).to({scaleX:0.2823,scaleY:0.3234,x:209.55,y:9.05},0).wait(1).to({scaleX:0.3757,scaleY:0.4299,x:197.65,y:22.1},0).wait(1).to({scaleX:0.469,scaleY:0.5365,x:185.7,y:35.15},0).wait(1).to({scaleX:0.5624,scaleY:0.6431,x:173.7,y:48.2},0).wait(1).to({scaleX:0.6558,scaleY:0.7496,x:161.8,y:61.3},0).wait(1).to({scaleX:0.7492,scaleY:0.8562,x:149.85,y:74.35},0).wait(1).to({scaleX:0.785,scaleY:0.8768,x:162.2,y:84.8},0).wait(1).to({scaleX:0.8208,scaleY:0.8973,x:174.55,y:95.25},0).wait(1).to({scaleX:0.8567,scaleY:0.9178,x:186.95,y:105.65},0).wait(1).to({scaleX:0.8925,scaleY:0.9384,x:199.3,y:116.1},0).wait(1).to({scaleX:0.9283,scaleY:0.9589,x:211.65,y:126.55},0).wait(1).to({scaleX:0.9642,scaleY:0.9795,x:224.05,y:137},0).wait(1).to({scaleX:1,scaleY:1,x:236.45,y:147.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-101.3,454.5,426.3);


(lib.mlh1_male_bladder_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(372.6,30.05,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:376.1,y:30},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:379,y:29.3},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:381.9,y:28.65},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:384.8,y:27.95},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:387.7,y:27.3},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:390.65,y:26.6},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:393.55,y:25.95},0).wait(1).to({scaleX:1,scaleY:1,x:396.45,y:25.25},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:458.5,y:52.7},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:474.1,y:-44.95},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:447.7,y:-26.7},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:434.7,y:-23.8},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:458.8,y:-112.2},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:455.15,y:-52.65},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:391.75,y:20.7},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol21("synched",0);
	this.instance.setTransform(701.05,262.4,0.0025,0.0038,0,0,0,160.8,132.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:197.3,scaleX:0.1272,scaleY:0.1283,x:642.7,y:246.1},0).wait(1).to({scaleX:0.2519,scaleY:0.2528,x:584.25,y:229.85},0).wait(1).to({scaleX:0.3766,scaleY:0.3774,x:525.85,y:213.6},0).wait(1).to({scaleX:0.5013,scaleY:0.5019,x:467.4,y:197.3},0).wait(1).to({scaleX:0.6259,scaleY:0.6264,x:409,y:181},0).wait(1).to({scaleX:0.7506,scaleY:0.7509,x:350.55,y:164.75},0).wait(1).to({scaleX:0.8753,scaleY:0.8755,x:292.15,y:148.5},0).wait(1).to({scaleX:1,scaleY:1,x:233.7,y:132.25},0).wait(1).to({scaleX:0.8575,scaleY:0.8577,x:297.35,y:152.9},0).wait(1).to({scaleX:0.715,scaleY:0.7154,x:360.9,y:173.55},0).wait(1).to({scaleX:0.5725,scaleY:0.5731,x:424.5,y:194.25},0).wait(1).to({scaleX:0.43,scaleY:0.4307,x:488.1,y:214.9},0).wait(1).to({scaleX:0.2875,scaleY:0.2884,x:551.65,y:235.6},0).wait(1).to({scaleX:0.145,scaleY:0.1461,x:615.25,y:256.25},0).wait(1).to({scaleX:0.0025,scaleY:0.0038,x:678.85,y:276.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.4,-124.2,676.3000000000001,402.7);


(lib.mlh1_fem_endometrial_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(666.9,-22.75,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:660.65,y:-2.75},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:653.8,y:16.55},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:646.95,y:35.9},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:640.1,y:55.25},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:633.25,y:74.6},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:626.45,y:93.95},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:619.6,y:113.3},0).wait(1).to({scaleX:1,scaleY:1,x:612.75,y:132.65},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:622.1,y:108.9},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:629.85,y:83.8},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:637.45,y:58.5},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:645,y:33.25},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:652.65,y:8.1},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:660.75,y:-16.8},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:673.05,y:-22.5},0).wait(1));

	// Layer_1
	this.instance = new lib.mlh1femendometriumpmessage("synched",0);
	this.instance.setTransform(-266.3,394.2,0.0015,0.0033,0,0,0,0,136.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:172,regY:113.6,scaleX:0.1263,scaleY:0.1279,x:-177.25,y:373.85},0).wait(1).to({scaleX:0.2511,scaleY:0.2525,x:-88.55,y:353.6},0).wait(1).to({scaleX:0.376,scaleY:0.3771,x:0.2,y:333.3},0).wait(1).to({scaleX:0.5008,scaleY:0.5016,x:88.95,y:313.05},0).wait(1).to({scaleX:0.6256,scaleY:0.6262,x:177.65,y:292.8},0).wait(1).to({scaleX:0.7504,scaleY:0.7508,x:266.4,y:272.5},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:355.15,y:252.25},0).wait(1).to({scaleX:1,scaleY:1,x:443.9,y:232},0).wait(1).to({scaleX:0.8574,scaleY:0.8576,x:342.45,y:255.15},0).wait(1).to({scaleX:0.7147,scaleY:0.7152,x:241.05,y:278.35},0).wait(1).to({scaleX:0.5721,scaleY:0.5728,x:139.6,y:301.5},0).wait(1).to({scaleX:0.4294,scaleY:0.4305,x:38.2,y:324.7},0).wait(1).to({scaleX:0.2868,scaleY:0.2881,x:-63.2,y:347.85},0).wait(1).to({scaleX:0.1442,scaleY:0.1457,x:-164.65,y:371.05},0).wait(1).to({scaleX:0.0015,scaleY:0.0033,x:-266.1,y:394.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.4,-23.5,940.1999999999999,418.2);


(lib.mlh1_fem_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// box
	this.instance = new lib.box("synched",0);
	this.instance.setTransform(-249.8,-166.3,0.0039,0.0035);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:195.5,regY:167.9,scaleX:0.1705,scaleY:0.1519,x:-261.25,y:-175.6,alpha:0.1143},0).wait(1).to({scaleX:0.337,scaleY:0.3004,x:-273.5,y:-185.45,alpha:0.2286},0).wait(1).to({scaleX:0.5036,scaleY:0.4488,x:-285.75,y:-195.4,alpha:0.3429},0).wait(1).to({scaleX:0.6701,scaleY:0.5972,x:-298,y:-205.3,alpha:0.4571},0).wait(1).to({scaleX:0.8366,scaleY:0.7456,x:-310.25,y:-215.2,alpha:0.5714},0).wait(1).to({scaleX:1.0032,scaleY:0.894,x:-322.5,y:-225.1,alpha:0.6857},0).wait(1).to({scaleX:1.1697,scaleY:1.0424,x:-334.7,y:-235.05,alpha:0.8},0).wait(1).to({scaleX:1.0032,scaleY:0.894,x:-333.65,y:-225.8,alpha:0.6857},0).wait(1).to({scaleX:0.8366,scaleY:0.7456,x:-332.55,y:-216.55,alpha:0.5714},0).wait(1).to({scaleX:0.6701,scaleY:0.5972,x:-331.45,y:-207.35,alpha:0.4571},0).wait(1).to({scaleX:0.5036,scaleY:0.4488,x:-330.4,y:-198.15,alpha:0.3429},0).wait(1).to({scaleX:0.337,scaleY:0.3004,x:-329.3,y:-188.9,alpha:0.2286},0).wait(1).to({scaleX:0.1705,scaleY:0.1519,x:-328.2,y:-179.7,alpha:0.1143},0).wait(1).to({scaleX:0.0039,scaleY:0.0035,x:-327.2,y:-170.5,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-535,-382.8,535,382.8);


(lib.mlh_fem_stomach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(443.8,18.75,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:446.7,y:22.65},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:449,y:26.15},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:451.35,y:29.75},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:453.65,y:33.3},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:456,y:36.9},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:458.4,y:40.5},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:460.75,y:44.15},0).wait(1).to({scaleX:1,scaleY:1,x:463.1,y:47.75},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:460.35,y:43.5},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:457.8,y:39.15},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:455.15,y:34.8},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:452.55,y:30.5},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:449.95,y:26.2},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:447.3,y:21.9},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:444.4,y:19.4},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(-258.05,182.05,0.002,0.0033,0,0,0,151.2,135.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:153,scaleX:0.1267,scaleY:0.1279,x:-190.1,y:180.25},0).wait(1).to({scaleX:0.2515,scaleY:0.2525,x:-122.25,y:178.5},0).wait(1).to({scaleX:0.3762,scaleY:0.3771,x:-54.4,y:176.7},0).wait(1).to({scaleX:0.501,scaleY:0.5017,x:13.4,y:174.9},0).wait(1).to({scaleX:0.6257,scaleY:0.6262,x:81.25,y:173.05},0).wait(1).to({scaleX:0.7505,scaleY:0.7508,x:149.1,y:171.3},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:216.9,y:169.5},0).wait(1).to({scaleX:1,scaleY:1,x:284.75,y:167.7},0).wait(1).to({scaleX:0.8574,scaleY:0.8576,x:206.45,y:170.15},0).wait(1).to({scaleX:0.7149,scaleY:0.7152,x:128.15,y:172.7},0).wait(1).to({scaleX:0.5723,scaleY:0.5728,x:49.9,y:175.2},0).wait(1).to({scaleX:0.4297,scaleY:0.4305,x:-28.4,y:177.65},0).wait(1).to({scaleX:0.2871,scaleY:0.2881,x:-106.7,y:180.15},0).wait(1).to({scaleX:0.1446,scaleY:0.1457,x:-185,y:182.7},0).wait(1).to({scaleX:0.002,scaleY:0.0033,x:-263.25,y:185.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.7,8.1,760.5,316.59999999999997);


(lib.homepagecaption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front_page_caption
	this.movieClip_3 = new lib.caption();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(389.9,180.8,1,1,0,0,0,389.9,180.8);

	this.instance = new lib.bluedark();
	this.instance.setTransform(-16,-2,0.2196,0.1913);

	this.instance_1 = new lib.double_small();
	this.instance_1.setTransform(-22,-17,1.0956,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_3}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},6).to({state:[]},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-17,801.9,422);


(lib.goback_btn_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(62.1,49.1,1,1,0,0,0,62.1,49.1);

	this.text = new cjs.Text("BACK", "30px 'Helvetica'", "#016500");
	this.text.lineHeight = 36;
	this.text.lineWidth = 85;
	this.text.parent = this;
	this.text.setTransform(77.35,71.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016500").s().p("Ag1L6QgHgEgWgCQgZAAghADQgXACgVgCIgWgHQgLgBgKAEQgJADgHgBQgXgCgBACQgBACgTgBIAAABIgEgBQgLgBgNAAIgXABIgbACQgDAEgNgCIgVgDIgIAFQgygHhtgCQgHgDgmADIAJACQhVgFgnAAIghAAIAAhmIgDgOQABAGADgIQACgIABgJIgChQIACABQAAgoABgGIABABIABAvIgDgCIACCbIAEAAIADgmIgFgMQADgfAAgeIgBguQAAglgEgGIAAgEIAAABIAHhEIAAAfIAFgfQAAgHgDgOQgDgMAFglIAEgTQgEgGAKhZIgOAoIABg6QABgigBgTIABABQABAAABgIIgCgTIACgMQgBgMgEgBQgHgBAAgBIABAAQgEgDAFg+QAFhEgCgMQAAAGgCACIABgKIgDATIABgWIAEgpQgDgGABghIACg3QACgGABgBQABgBAAAOIAEgmQAAgCAAAAQAAAAAAAAQgBABAAABQAAABgBACQgDAIABgSQABgHAEgJQACgFABgdQABgOgBghQgBgcACgOIAHhOIACgXIAAkYIAFAAIAVAQQgMBogGAeIABgEIAAgRIgBABIgCARIABADQgBAOgCAKIgDAOIABgBIgBgBIABgBIAAAAIAAAAIAAAAIABABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADIAAAAIAAABIAAAAIAAAOIgBAWIgDAAQACAEAAALIgCAjIACgjQAAgLgCgEIADAAIABgWIAAgOIAAAAIAAgBIAAAAIAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAIgBgBIAAAAIAAAAIAAAAIgBABIABABIgBABIADgOQACgKABgOIgBgDIACgRIABgBIAAARIgBAEQAGgeAMhoIgVgQIgFgEIB2gYIgDABQAdADA2gCQA1gDAbADIABAAQAAAEA1gDQA4gEAHAEQAZACAegDIAogEIAMACQASADASgCQAFAAAXgFQAXgDAQACQAaADBNgCIgGgCQA0ABCcgBQCCgBBBAEQgDAAAAABQgBAAAAAAQABAAACgBQACAAADgBQASgEgPAFIAtABQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQANgBAagEQAZgEATAFQABAEATgCQANgBgHADQAvgEAyAAIBUACIAjABIAAAiQgCBHAGA+IgBgIIgBAeIAFgJQgCAJABAfQACAbgDgBIAAgEQgDgBgBARIgBAdQADgBAAgGIADAYQgDAcABA5QABA0gEAUIAEAQQgCAbADBLQACBDgFAfQACBcAGCVIAABPQgBAwgFAQQgCApADAuQADA3AAAWQgFgFAAAYQABAggCAGQAEgBgBAUQgBAXADAFIgEABIgBBbIgCgHQgCgBABAKIAAATIAGASIgGgGIABASQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgCAuIggAAQgNgBgJACQgKACgBADQgEgBgDgCQgDgBgFAAQgIABACABIAIADIgVgDQgMgBgUABIAOgDQgIABgSgBQgQgBgPADIgEAHIAbgDIgsAHQgBAAgBAAQgBAAgBAAQAAgBgBAAQAAAAAAAAIAAgCQgMABgNgBQgJgBgIADIgEgFIgVAEQAHgEgBgBQAAgEgUgBIgcgCIAHAGIgTgEQgKgDgNAEIgCgFQgMAAgEADQgEADgKgCIAIgDIhQADQgrACgegDIAAgCIghgBIgaABIAFABIgpABIgCgDIgcABIABgDQgigDgqAFIAIABQgEABgHAEIgKAJQgJAAgIACQgGABgQgBIAIgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBgBIgZADIgTAFQANgEgHgEgAKFKnIAhgBIAAgVQAAiLgFhRQACgLAAgyQABg0ACgNQADhtAAiaIgBikIgEnCIADgKQABgHAAgMIAAgKIgFgCQACgjABgsIhPAAQhFAAgsgEIgnAGIocADIjegJIkWAFIhmgWIgFgEIAEBSIgDANIAAAAIAAAAIABAEIABALIAAAAQAAAIACABIAAAAIAAAAIAAAAIABgBIABgCIAAAAIAAgBIAAAAIAAgBIgBAYQAAAMACAHQAEAJABAJIgEATIABA9QgBABgCAHQABAZAEAkIAEgfIAAASIgBAAQgIBbAAA0IAAAYQABAbADAPIgCgGQACAzAABEIAAAcIAABaIAABGIAGgpQADAcABC2IAABiQAABhgCAPQgDA5AABTIAAAsIAqAAIAcAAIAAAAIAAAAQBrAAA1ADIADAAIAOAAQBuACCPAAIAAAAIAAAAIDBgBIAZAAIE3gCICUgBIAdAAIgEABIBdADIAHAAIAaABIABAAIAAAAgAKEKnIgagBIgHAAIhdgDIAEgBIgdAAIiUABIk3ACIgZAAIjBABIAAAAIAAAAQiPAAhugCIgOAAIgDAAQg1gDhrAAIAAAAIAAAAIgcAAIgqAAIAAgsQAAhTADg5QACgPAAhhIAAhiQgBi2gDgcIgGApIAAhGIAAhaIAAgcQAAhEgCgzIACAGQgDgPgBgbIAAgYQAAg0AIhbIABAAIAAgSIgEAfQgEgkgBgZQACgHABgBIgBg9IAEgTQgBgJgEgJQgCgHAAgMIABgYIAAABIAAAAIAAABIAAAAIgBACIgBABIAAAAIAAAAIAAAAQgCgBAAgIIAAAAIgBgLIgBgEIAAAAIAAAAIADgNIAAAUIACgTIAAgHIAAAAIAAAAIgCAGIACgGIAAAAIAAAAIAAAHIgCATIAAgUIgEhSIAFAEIBmAWIEWgFIDeAJIIcgDIAngGQAsAEBFAAIBPAAQgBAsgCAjIAFACIAAAKQAAAMgBAHIgDAKIAEHCIABCkQAACagDBtQgCANgBA0QAAAygCALQAFBRAACLIAAAVIghABIAAAAIgBAAgAqynGIACgBIAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAgBABQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAAAIgCABIAAgBgAq4p1IAAAAgAGXr6IAGgBIACgBIAHABQAIAAAAABIgJABIgOgBg");
	this.shape.setTransform(60.9125,48.9279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:49.1,scaleX:1,scaleY:1,x:62.1,y:49.1}}]}).to({state:[{t:this.instance,p:{regY:49,scaleX:1.3084,scaleY:1.287,x:57.15,y:44}},{t:this.text}]},1).to({state:[{t:this.instance,p:{regY:49.1,scaleX:1,scaleY:1,x:62.1,y:49.1}}]},1).to({state:[{t:this.instance,p:{regY:49.1,scaleX:1,scaleY:1,x:62.1,y:49.1}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-33.8,196.1,159.7);


(lib.epcambutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol16();
	this.instance.setTransform(284.15,-75.1,1,1,0,0,0,264.1,123);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.epcamtitle();
	this.instance_1.setTransform(0,36,0.2204,0.1816);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(20,1,1).p("EghvgJDMBDgAAAIAASHMhDgAAAg");
	this.shape.setTransform(268.1,104.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F3290").s().p("EghwAJEIAAyHMBDgAAAIAASHg");
	this.shape_1.setTransform(268.1,104.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:36}}]}).to({state:[{t:this.instance_1,p:{y:36}}]},1).to({state:[{t:this.instance_1,p:{y:36}}]},1).to({state:[{t:this.instance_1,p:{y:0}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-173.7,558,422.2);


(lib.epcam_male_colorectal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(328.8,157.25,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:333,y:161},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:336.55,y:164.15},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:340.1,y:167.35},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:343.7,y:170.5},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:347.25,y:173.65},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:350.85,y:176.8},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:354.4,y:180},0).wait(1).to({scaleX:1,scaleY:1,x:358,y:183.15},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:353.85,y:179.55},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:349.75,y:175.9},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:345.65,y:172.2},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:341.55,y:168.5},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:337.4,y:164.85},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:333.3,y:161.2},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:329.45,y:157.9},0).wait(1));

	// Layer_1
	this.instance = new lib.epcam_male_p("synched",0);
	this.instance.setTransform(463,286.25,0.0018,0.0026,0,0,0,282.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:581.6,regY:-32.6,scaleX:0.1265,scaleY:0.1273,x:428.5,y:287.05},0).wait(1).to({scaleX:0.2513,scaleY:0.2519,x:393.45,y:288},0).wait(1).to({scaleX:0.3761,scaleY:0.3766,x:358.45,y:288.9},0).wait(1).to({scaleX:0.5009,scaleY:0.5013,x:323.45,y:289.85},0).wait(1).to({scaleX:0.6257,scaleY:0.626,x:288.5,y:290.75},0).wait(1).to({scaleX:0.7504,scaleY:0.7506,x:253.45,y:291.7},0).wait(1).to({scaleX:0.8752,scaleY:0.8753,x:218.4,y:292.6},0).wait(1).to({scaleX:1,scaleY:1,x:183.45,y:293.55},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:229.2,y:296.2},0).wait(1).to({scaleX:0.7148,scaleY:0.715,x:275,y:298.85},0).wait(1).to({scaleX:0.5722,scaleY:0.5725,x:320.85,y:301.5},0).wait(1).to({scaleX:0.4296,scaleY:0.43,x:366.6,y:304.2},0).wait(1).to({scaleX:0.287,scaleY:0.2875,x:412.4,y:306.85},0).wait(1).to({scaleX:0.1444,scaleY:0.1451,x:458.2,y:309.45},0).wait(1).to({scaleX:0.0018,scaleY:0.0026,x:504,y:312.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,142,531.5,305.2);


(lib.epcam_fem_endo_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(204.95,160.1,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1781,scaleY:0.1774,x:209.85,y:164.65},0).wait(1).to({scaleX:0.3345,scaleY:0.3299,x:214.15,y:168.6},0).wait(1).to({scaleX:0.4909,scaleY:0.4823,x:218.45,y:172.55},0).wait(1).to({scaleX:0.6473,scaleY:0.6348,x:222.75,y:176.5},0).wait(1).to({scaleX:0.8037,scaleY:0.7872,x:227.1,y:180.45},0).wait(1).to({scaleX:0.9601,scaleY:0.9397,x:231.35,y:184.4},0).wait(1).to({scaleX:1.1165,scaleY:1.0921,x:235.7,y:188.3},0).wait(1).to({scaleX:1.2729,scaleY:1.2446,x:240,y:192.25},0).wait(1).to({scaleX:1.0941,scaleY:1.0703,x:235.1,y:187.7},0).wait(1).to({scaleX:0.9154,scaleY:0.8961,x:230.2,y:183.2},0).wait(1).to({scaleX:0.7367,scaleY:0.7219,x:225.25,y:178.65},0).wait(1).to({scaleX:0.5579,scaleY:0.5476,x:220.35,y:174.1},0).wait(1).to({scaleX:0.3792,scaleY:0.3734,x:215.45,y:169.5},0).wait(1).to({scaleX:0.2004,scaleY:0.1992,x:210.45,y:164.95},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:205.6,y:160.75},0).wait(1));

	// Layer_1
	this.instance = new lib.EPCAM_FEMALE_ENDO_POPUPBOX("synched",0);
	this.instance.setTransform(-254.35,324.5,0.0013,0.003,0,0,0,0,151.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27.7,regY:-184,scaleX:0.1262,scaleY:0.1276,x:-192.3,y:274.65},0).wait(1).to({scaleX:0.251,scaleY:0.2522,x:-130.3,y:225.9},0).wait(1).to({scaleX:0.3758,scaleY:0.3769,x:-68.3,y:177.05},0).wait(1).to({scaleX:0.5007,scaleY:0.5015,x:-6.3,y:128.25},0).wait(1).to({scaleX:0.6255,scaleY:0.6261,x:55.75,y:79.5},0).wait(1).to({scaleX:0.7503,scaleY:0.7507,x:117.75,y:30.65},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:179.75,y:-18.1},0).wait(1).to({regX:-0.4,regY:151.2,scaleX:1.0105,scaleY:0.9883,x:28.15,y:617.75},0).wait(1).to({regX:27.7,regY:-184,x:56.55,y:286.45},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-138.9,618.1,561.8);


(lib.epcam_fem_colorectal_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(280.05,-99.55,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.1639,scaleY:0.1668,x:284.8,y:-95.45},0).wait(1).to({scaleX:0.3061,scaleY:0.3085,x:288.9,y:-92},0).wait(1).to({scaleX:0.4483,scaleY:0.4503,x:293.1,y:-88.55},0).wait(1).to({scaleX:0.5905,scaleY:0.5921,x:297.2,y:-85.15},0).wait(1).to({scaleX:0.7327,scaleY:0.7339,x:301.35,y:-81.65},0).wait(1).to({scaleX:0.8749,scaleY:0.8757,x:305.5,y:-78.25},0).wait(1).to({scaleX:1.0171,scaleY:1.0175,x:309.65,y:-74.75},0).wait(1).to({scaleX:1.1593,scaleY:1.1593,x:313.8,y:-71.35},0).wait(1).to({scaleX:0.9968,scaleY:0.9972,x:309.05,y:-75.2},0).wait(1).to({scaleX:0.8343,scaleY:0.8352,x:304.3,y:-79.15},0).wait(1).to({scaleX:0.6718,scaleY:0.6731,x:299.55,y:-83.1},0).wait(1).to({scaleX:0.5092,scaleY:0.5111,x:294.8,y:-87},0).wait(1).to({scaleX:0.3467,scaleY:0.349,x:290.05,y:-91},0).wait(1).to({scaleX:0.1842,scaleY:0.187,x:285.25,y:-94.95},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:280.75,y:-98.9},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-290.05,208.1,0.0016,0.0029,0,0,0,0,153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:206,regY:131,scaleX:0.1264,scaleY:0.1276,x:-236.6,y:185.95},0).wait(1).to({scaleX:0.2512,scaleY:0.2522,x:-183.5,y:163.9},0).wait(1).to({scaleX:0.376,scaleY:0.3768,x:-130.4,y:141.85},0).wait(1).to({scaleX:0.5008,scaleY:0.5015,x:-77.3,y:119.8},0).wait(1).to({scaleX:0.6256,scaleY:0.6261,x:-24.2,y:97.7},0).wait(1).to({scaleX:0.7504,scaleY:0.7507,x:28.95,y:75.75},0).wait(1).to({scaleX:0.8752,scaleY:0.8754,x:82.05,y:53.65},0).wait(1).to({scaleX:1,scaleY:1,x:135.15,y:31.6},0).wait(1).to({scaleX:0.8574,scaleY:0.8576,x:77.25,y:62.2},0).wait(1).to({scaleX:0.7147,scaleY:0.7151,x:19.4,y:92.75},0).wait(1).to({scaleX:0.5721,scaleY:0.5727,x:-38.5,y:123.25},0).wait(1).to({scaleX:0.4295,scaleY:0.4302,x:-96.4,y:153.8},0).wait(1).to({scaleX:0.2868,scaleY:0.2878,x:-154.25,y:184.4},0).wait(1).to({scaleX:0.1442,scaleY:0.1454,x:-212.15,y:214.95},0).wait(1).to({scaleX:0.0016,scaleY:0.0029,x:-270.05,y:245.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-117.3,641.7,363.3);


(lib.popup_basecopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(554.4,-49.1,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,y:-44.35},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:553.8,y:-40.3},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:553.2,y:-36.15},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:552.6,y:-32.1},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:552,y:-28},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:551.45,y:-23.9},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:550.85,y:-19.8},0).wait(1).to({scaleX:1,scaleY:1,x:550.25,y:-15.75},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:552.55,y:-20.3},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:554.05,y:-27.5},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:555.4,y:-35},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:556.8,y:-42.45},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:558.7,y:-49.05},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:560.95,y:-50.85},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:560.55,y:-48.85},0).wait(1));

	// Layer_1
	this.instance = new lib.popup_base_messageboxcopy("synched",0);
	this.instance.setTransform(72.4,70.05,0.0017,0.0039,0,0,0,261,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:85.9,regY:142,scaleX:0.1254,scaleY:0.1284,x:111,y:71.1,alpha:0.125},0).wait(1).to({scaleX:0.2491,scaleY:0.2529,x:149.95,y:71.6,alpha:0.25},0).wait(1).to({scaleX:0.3727,scaleY:0.3775,x:188.85,y:72.15,alpha:0.375},0).wait(1).to({scaleX:0.4964,scaleY:0.502,x:227.85,y:72.7,alpha:0.5},0).wait(1).to({scaleX:0.6201,scaleY:0.6265,x:266.75,y:73.2,alpha:0.625},0).wait(1).to({scaleX:0.7437,scaleY:0.751,x:305.75,y:73.75,alpha:0.75},0).wait(1).to({scaleX:0.8674,scaleY:0.8755,x:344.65,y:74.25,alpha:0.875},0).wait(1).to({scaleX:0.991,scaleY:1,x:383.6,y:74.75,alpha:1},0).wait(1).to({scaleX:0.8497,scaleY:0.8577,x:339.9,y:83.8,alpha:0.8571},0).wait(1).to({scaleX:0.7084,scaleY:0.7154,x:296.2,y:92.85,alpha:0.7143},0).wait(1).to({scaleX:0.5671,scaleY:0.5731,x:252.5,y:101.8,alpha:0.5714},0).wait(1).to({scaleX:0.4257,scaleY:0.4308,x:208.8,y:110.8,alpha:0.4286},0).wait(1).to({scaleX:0.2844,scaleY:0.2885,x:165.15,y:119.8,alpha:0.2857},0).wait(1).to({scaleX:0.1431,scaleY:0.1462,x:121.45,y:128.85,alpha:0.1429},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:77.75,y:137.9,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.8,-61.1,512.1,260.6);


(lib.msh2femstomach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(486.9,-187.15,0.0217,0.025);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:28.3,regY:25.2,scaleX:0.144,scaleY:0.1468,x:490.85,y:-183.35},0).wait(1).to({scaleX:0.2663,scaleY:0.2687,x:494.2,y:-180.25},0).wait(1).to({scaleX:0.3886,scaleY:0.3906,x:497.55,y:-177.1},0).wait(1).to({scaleX:0.5109,scaleY:0.5125,x:500.9,y:-174},0).wait(1).to({scaleX:0.6331,scaleY:0.6344,x:504.25,y:-170.8},0).wait(1).to({scaleX:0.7554,scaleY:0.7562,x:507.65,y:-167.7},0).wait(1).to({scaleX:0.8777,scaleY:0.8781,x:511,y:-164.55},0).wait(1).to({scaleX:1,scaleY:1,x:514.35,y:-161.45},0).wait(1).to({scaleX:0.8602,scaleY:0.8607,x:510.55,y:-165},0).wait(1).to({scaleX:0.7205,scaleY:0.7214,x:506.75,y:-168.7},0).wait(1).to({scaleX:0.5807,scaleY:0.5821,x:502.9,y:-172.45},0).wait(1).to({scaleX:0.441,scaleY:0.4428,x:499.1,y:-176.2},0).wait(1).to({scaleX:0.3012,scaleY:0.3035,x:495.2,y:-179.85},0).wait(1).to({scaleX:0.1615,scaleY:0.1642,x:491.3,y:-183.4},0).wait(1).to({scaleX:0.0217,scaleY:0.0249,x:487.65,y:-186.5},0).wait(1));

	// Layer_1
	this.instance = new lib.popup_base_messageboxcopy4("synched",0);
	this.instance.setTransform(-166,-12,0.0017,0.0039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:155.6,regY:110,scaleX:0.1184,scaleY:0.1122,x:-102.1,y:-14.9},0).wait(1).to({scaleX:0.2351,scaleY:0.2205,x:-38.5,y:-18.3},0).wait(1).to({scaleX:0.3518,scaleY:0.3288,x:25.1,y:-21.7},0).wait(1).to({scaleX:0.4685,scaleY:0.4371,x:88.65,y:-25.05},0).wait(1).to({scaleX:0.5852,scaleY:0.5455,x:152.25,y:-28.45},0).wait(1).to({scaleX:0.7019,scaleY:0.6538,x:215.85,y:-31.85},0).wait(1).to({scaleX:0.8186,scaleY:0.7621,x:279.45,y:-35.2},0).wait(1).to({scaleX:0.9353,scaleY:0.8704,x:343.1,y:-38.6},0).wait(1).to({scaleX:0.8019,scaleY:0.7466,x:273.3,y:-32.15},0).wait(1).to({scaleX:0.6685,scaleY:0.6228,x:203.6,y:-25.8},0).wait(1).to({scaleX:0.5352,scaleY:0.499,x:133.9,y:-19.35},0).wait(1).to({scaleX:0.4018,scaleY:0.3753,x:64.15,y:-12.95},0).wait(1).to({scaleX:0.2685,scaleY:0.2515,x:-5.5,y:-6.55},0).wait(1).to({scaleX:0.1351,scaleY:0.1277,x:-75.2,y:-0.15},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:-144.95,y:6.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.1,-201.1,714.1,324.1);


(lib.dna3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer_1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(87.5,1045.5,1,1,0,0,0,87.5,1045.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1032},0).wait(1).to({y:1018.5},0).wait(1).to({y:1004.95},0).wait(1).to({y:991.45},0).wait(1).to({y:977.95},0).wait(1).to({y:964.4},0).wait(1).to({y:950.9},0).wait(1).to({y:937.4},0).wait(1).to({y:923.85},0).wait(1).to({y:910.35},0).wait(1).to({y:896.85},0).wait(1).to({y:883.3},0).wait(1).to({y:869.8},0).wait(1).to({y:856.3},0).wait(1).to({y:842.75},0).wait(1).to({y:829.25},0).wait(1).to({y:815.75},0).wait(1).to({y:802.2},0).wait(1).to({y:788.7},0).wait(1).to({y:775.2},0).wait(1).to({y:761.65},0).wait(1).to({y:748.15},0).wait(1).to({y:734.65},0).wait(1).to({y:721.1},0).wait(1).to({y:707.6},0).wait(1).to({y:694.1},0).wait(1).to({y:680.55},0).wait(1).to({y:667.05},0).wait(1).to({y:653.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-392,175,2483);


(lib.dna1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer_1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(124.15,791.6,0.7399,0.7399,0,0,0,108.1,1075.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:1083.6,x:124.1,y:781.25},0).wait(1).to({y:765.15},0).wait(1).to({y:749.05},0).wait(1).to({y:732.95},0).wait(1).to({y:716.85},0).wait(1).to({y:700.75},0).wait(1).to({y:684.65},0).wait(1).to({y:668.55},0).wait(1).to({y:652.45},0).wait(1).to({y:636.35},0).wait(1).to({y:620.25},0).wait(1).to({y:604.15},0).wait(1).to({y:588.05},0).wait(1).to({y:571.9},0).wait(1).to({y:555.8},0).wait(1).to({y:539.7},0).wait(1).to({y:523.6},0).wait(1).to({y:507.5},0).wait(1).to({y:491.4},0).wait(1).to({y:475.3},0).wait(1).to({y:459.2},0).wait(1).to({y:443.1},0).wait(1).to({y:427},0).wait(1).to({y:410.9},0).wait(1).to({y:394.8},0).wait(1).to({y:378.7},0).wait(1).to({y:362.6},0).wait(1).to({y:346.5},0).wait(1).to({y:330.4},0).wait(1).to({y:314.3},0).wait(1).to({y:298.2},0).wait(1).to({y:282.1},0).wait(1).to({y:265.95},0).wait(1).to({y:249.85},0).wait(1).to({y:233.75},0).wait(1).to({y:217.65},0).wait(1).to({y:201.55},0).wait(1).to({y:185.45},0).wait(1).to({y:169.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,-632.3,160,2231.3999999999996);


(lib.aboutpag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_2 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.sure.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.sheffield.ac.uk/global/experiences-students/sure', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.about_lynch_ireland.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://lynchsyndromeireland.com/', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.about_lynch_uk.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.lynch-syndrome-uk.org/', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.platform.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://sites.google.com/sheffield.ac.uk/previvorship/home?authuser=0', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Twitter.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://twitter.com/Previvorship', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.insta.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.instagram.com/previvorship_research/', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.facebook.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.facebook.com/Previvorship', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.project_website.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://sites.google.com/sheffield.ac.uk/previvorship/home?authuser=0', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.website_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://sites.google.com/sheffield.ac.uk/previvorship/home?authuser=0', '_blank');
		});
	}
	this.frame_3 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(3));

	// back
	this.back = new lib.basicinfobackbutton();
	this.back.name = "back";
	this.back.setTransform(910.45,106.4);
	this.back._off = true;
	new cjs.ButtonHelper(this.back, 0, 1, 2, false, new lib.basicinfobackbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// project_website
	this.website_1 = new lib.website1();
	this.website_1.name = "website_1";
	this.website_1.setTransform(234.05,704.25,1,1,0,0,0,52,19.1);
	new cjs.ButtonHelper(this.website_1, 0, 1, 1);

	this.project_website = new lib.projectwebsite();
	this.project_website.name = "project_website";
	this.project_website.setTransform(1005.05,670.95,1,1,0,0,0,111,22.4);
	new cjs.ButtonHelper(this.project_website, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.project_website},{t:this.website_1}]},2).to({state:[]},2).wait(2));

	// social_media_icon
	this.facebook = new lib.facebook();
	this.facebook.name = "facebook";
	this.facebook.setTransform(601.9,708.2,0.6407,0.6407,0,0,0,29.8,29.9);
	new cjs.ButtonHelper(this.facebook, 0, 1, 2, false, new lib.facebook(), 3);

	this.insta = new lib.Insta();
	this.insta.name = "insta";
	this.insta.setTransform(550.85,712.7,0.6407,0.6407,0,0,0,36.1,35.9);
	new cjs.ButtonHelper(this.insta, 0, 1, 2, false, new lib.Insta(), 3);

	this.Twitter = new lib.twitter();
	this.Twitter.name = "Twitter";
	this.Twitter.setTransform(491.05,709.45,0.6407,0.6407,0,0,0,29.8,29.8);
	new cjs.ButtonHelper(this.Twitter, 0, 1, 2, false, new lib.twitter(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Twitter},{t:this.insta},{t:this.facebook}]},2).to({state:[]},2).wait(2));

	// know_more
	this.text = new cjs.Text("If you want to know more about Previvorship you can visit the project website or social media: ", "normal 400 25px 'Raleway'");
	this.text.lineHeight = 36;
	this.text.lineWidth = 831;
	this.text.parent = this;
	this.text.setTransform(184.05,650.8);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// platform
	this.platform = new lib.platform();
	this.platform.name = "platform";
	this.platform.setTransform(800.55,572.35,1,1,0,0,0,256.9,22.4);
	this.platform._off = true;
	new cjs.ButtonHelper(this.platform, 0, 1, 2, false, new lib.platform(), 3);

	this.timeline.addTween(cjs.Tween.get(this.platform).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// text3
	this.text_1 = new cjs.Text("The animation is linked to ‘Previvorship in the Platform Society’, a broader project that explores experiences of cancer genetic risk and social media.", "normal 400 25px 'Raleway'");
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 813;
	this.text_1.parent = this;
	this.text_1.setTransform(188.05,511.95);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// lynch_ireland_button
	this.about_lynch_ireland = new lib.about_lynch_ireland();
	this.about_lynch_ireland.name = "about_lynch_ireland";
	this.about_lynch_ireland.setTransform(1033.7,474.25,1,1,0,0,0,177.5,22.4);
	this.about_lynch_ireland._off = true;
	new cjs.ButtonHelper(this.about_lynch_ireland, 0, 1, 2, false, new lib.about_lynch_ireland(), 3);

	this.timeline.addTween(cjs.Tween.get(this.about_lynch_ireland).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// lynch_uk_button
	this.about_lynch_uk = new lib.about_lynch_uk();
	this.about_lynch_uk.name = "about_lynch_uk";
	this.about_lynch_uk.setTransform(602.15,431.3,1,1,0,0,0,146.1,22.4);
	this.about_lynch_uk._off = true;
	new cjs.ButtonHelper(this.about_lynch_uk, 0, 1, 2, false, new lib.about_lynch_uk(), 3);

	this.timeline.addTween(cjs.Tween.get(this.about_lynch_uk).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// text2
	this.text_2 = new cjs.Text("We would like to thank Lynch Syndrome UK and Lynch Syndrome Ireland for their involvement with the project. ", "normal 400 25px 'Raleway'");
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 815;
	this.text_2.parent = this;
	this.text_2.setTransform(188.05,410.9);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_2);
	}
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// text_1_button
	this.sure = new lib.SURE();
	this.sure.name = "sure";
	this.sure.setTransform(503.5,365.4,1,1,0,0,0,319.8,19.1);
	new cjs.ButtonHelper(this.sure, 0, 1, 1);

	this.text_3 = new cjs.Text("", "25px '_sans'", "#1600FE");
	this.text_3.lineHeight = 30;
	this.text_3.lineWidth = 100;
	this.text_3.parent = this;
	this.text_3.setTransform(607.95,403.15);

	this.text_4 = new cjs.Text("", "20px '_sans'", "#0F00CC");
	this.text_4.lineHeight = 26;
	this.text_4.lineWidth = 100;
	this.text_4.parent = this;
	this.text_4.setTransform(678.2,408.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_4},{t:this.text_3},{t:this.sure}]},2).to({state:[]},2).wait(2));

	// text1
	this.text_5 = new cjs.Text("This animation has been designed by Yifeng Zhang with the support of Sheffield Undergraduate Research Experience (SURE)", "normal 400 25px 'Raleway'");
	this.text_5.lineHeight = 36;
	this.text_5.lineWidth = 845;
	this.text_5.parent = this;
	this.text_5.setTransform(186.05,311.9);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_5);
	}
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// title
	this.instance = new lib.Sketches();
	this.instance.setTransform(131,46,0.3299,0.209);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},3).wait(2));

	// Layer_1
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(0.5,0.5,0.0007,0.0012,0,0,0,655.4,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:709.1,regY:422.1,scaleX:1,scaleY:1,x:418.45,y:438.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.6,-1,1420.3000000000002,862.2);


(lib.PMS2_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_female_description.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.female_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_fem_colorectal_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.PMS2_FEM_ENDO_P.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.male_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_male_colorectal_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_prostate.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.PMS2_PROSTATE.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(5));

	// TITLE
	this.instance = new lib.PMS2BUTTON();
	this.instance.setTransform(701.4,569.2,1,1,0,0,0,297.4,116.2);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.PMS2BUTTON(), 3);

	this.instance_1 = new lib.PMS2TITLE();
	this.instance_1.setTransform(825,69,0.191,0.1622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:825,y:69}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:30,y:42}}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regY:24.8,scaleX:0.9655,scaleY:0.9655,x:756.6,y:420.55},0).wait(1).to({scaleX:0.931,scaleY:0.931,x:811.85,y:363.35},0).wait(1).to({scaleX:0.8965,scaleY:0.8965,x:867.1,y:306.1},0).wait(1).to({scaleX:0.8621,scaleY:0.8621,x:922.3,y:248.9},0).wait(1).to({scaleX:0.8276,scaleY:0.8276,x:977.5,y:191.6},0).wait(1).to({scaleX:0.7931,scaleY:0.7931,x:1032.75,y:134.4},0).to({_off:true},1).wait(1).to({_off:false,regY:116.2,scaleX:1,scaleY:1,x:701.4,y:569.2},0).wait(1).to({regY:24.8,scaleX:0.961,scaleY:0.961,x:615.7,y:394.6},0).wait(1).to({scaleX:0.9219,scaleY:0.9219,x:530,y:311.35},0).wait(1).to({scaleX:0.8829,scaleY:0.8829,x:444.3,y:228.2},0).wait(1).to({scaleX:0.8438,scaleY:0.8438,x:358.65,y:145},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:273,y:61.8},0).to({_off:true},1).wait(5));

	// navigation
	this.previous_page = new lib.goback_btn_1();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(109.55,113.4,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(18));

	// prostate_P
	this.PMS2_PROSTATE = new lib.pms2_male_prostate();
	this.PMS2_PROSTATE.name = "PMS2_PROSTATE";
	this.PMS2_PROSTATE.setTransform(390.05,447.05,1,1,0,0,0,200,125);
	this.PMS2_PROSTATE._off = true;

	this.timeline.addTween(cjs.Tween.get(this.PMS2_PROSTATE).wait(15).to({_off:false},0).to({_off:true},1).wait(4));

	// prostate
	this.msh2_prostate = new lib.bladder();
	this.msh2_prostate.name = "msh2_prostate";
	this.msh2_prostate.setTransform(834.15,593.7,1.4967,1.4967,0,0,0,38.2,26.7);
	this.msh2_prostate._off = true;
	new cjs.ButtonHelper(this.msh2_prostate, 0, 1, 2, false, new lib.bladder(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_prostate).wait(15).to({_off:false},0).to({_off:true},1).wait(4));

	// MALE_COLORECTAL_P
	this.pms2_male_colorectal_P = new lib.pms2_male_colorectal_p();
	this.pms2_male_colorectal_P.name = "pms2_male_colorectal_P";
	this.pms2_male_colorectal_P.setTransform(342.15,497.1,1,1,0,0,0,266.1,171);
	this.pms2_male_colorectal_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pms2_male_colorectal_P).wait(15).to({_off:false},0).to({_off:true},1).wait(4));

	// male_colorectal
	this.instance_2 = new lib.mlh1malecolorectal();
	this.instance_2.setTransform(875.25,524.75,1,1,0,0,0,107.6,94.3);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.msh2_male_colorectal_b = new lib.mlh1malecolorectal();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(840.5,480.9,1,1,0,0,0,107.6,94.3);
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.msh2_male_colorectal_b}]},2).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({_off:true,x:840.5,y:480.9},2).wait(5));

	// back
	this.male_back = new lib.goback_btn_1();
	this.male_back.name = "male_back";
	this.male_back.setTransform(1096.2,68.95);
	this.male_back._off = true;
	new cjs.ButtonHelper(this.male_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.male_back).wait(15).to({_off:false},0).to({_off:true},1).wait(4));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({scaleX:1.0629,scaleY:1.0557,x:979.45},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:967.45,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:955.4},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:943.4,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:931.4,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:919.4,y:499.5},0).to({_off:true},1).wait(4));

	// endometrium_p
	this.PMS2_FEM_ENDO_P = new lib.pms2femendo();
	this.PMS2_FEM_ENDO_P.name = "PMS2_FEM_ENDO_P";
	this.PMS2_FEM_ENDO_P.setTransform(1093.3,526.15,1,1,0,0,0,345.1,208.1);
	this.PMS2_FEM_ENDO_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.PMS2_FEM_ENDO_P).wait(8).to({_off:false},0).to({_off:true},1).wait(11));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:433.9,y:657.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:433.25,y:665.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:432.55,y:673.45,alpha:1},0).to({_off:true},1).wait(11));

	// colorectal_p
	this.pms2_fem_colorectal_p = new lib.PMS2FEMCOLORECTALP();
	this.pms2_fem_colorectal_p.name = "pms2_fem_colorectal_p";
	this.pms2_fem_colorectal_p.setTransform(432.45,373.05,1,1,0,0,0,299.7,171);
	this.pms2_fem_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pms2_fem_colorectal_p).wait(8).to({_off:false},0).to({_off:true},1).wait(11));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolonfinal();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolonfinal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:425.1,y:498.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:426.05,y:533.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:426.95,y:568.45,alpha:1},0).to({_off:true},1).wait(11));

	// female_back
	this.female_back = new lib.goback_btn_1();
	this.female_back.name = "female_back";
	this.female_back.setTransform(132,69);
	this.female_back._off = true;
	new cjs.ButtonHelper(this.female_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.female_back).wait(8).to({_off:false},0).to({_off:true},1).wait(11));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 1);

	this.instance_3 = new lib.mlh12femalegraphic("synched",0);
	this.instance_3.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:305.7,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:369.45,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:401.4,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:433.3,y:419.15},0).wait(3).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).to({_off:true},1).wait(4));

	// Layer_1
	this.instance_4 = new lib.pms2_background("synched",0);
	this.instance_4.setTransform(0.5,0.5,0.0007,0.0012,0,0,0,641.1,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:700.2,regY:418.1,scaleX:1.0775,scaleY:1.1322,x:763.8,y:463.45},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-84,1560.5,1182.9);


(lib.msh6_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh6_fem_des.play();
		});
		
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh6_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.female_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH6_FEM_COLORECTAL_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH6_FEM_ENDOMETRIUM_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_overies_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.OVRIES_P.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH6_MALE_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_prostate.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh6_prostate_p.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.previous_page = new lib.goback_btn_1();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(65.55,81.6,0.8585,0.8585,0,0,0,27.5,27.6);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// title
	this.instance = new lib.msh6title();
	this.instance.setTransform(629.9,512,1,1,0,0,0,316.9,150);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.msh6title(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regY:63.4,y:425.4},0).wait(1).to({scaleX:0.9261,scaleY:0.9261,x:703.65,y:362.1},0).wait(1).to({scaleX:0.8522,scaleY:0.8522,x:777.4,y:298.9},0).wait(1).to({scaleX:0.7783,scaleY:0.7783,x:851.15,y:235.65},0).wait(1).to({scaleX:0.7044,scaleY:0.7044,x:924.95,y:172.4},0).wait(1).to({scaleX:0.6305,scaleY:0.6305,x:998.65,y:109.15},0).wait(1).to({scaleX:0.5566,scaleY:0.5566,x:1072.45,y:45.95},0).wait(1).to({scaleX:1,scaleY:1,x:629.9,y:425.4},0).wait(1).to({scaleX:0.9422,scaleY:0.9422,x:556.55,y:361.65},0).wait(1).to({scaleX:0.8845,scaleY:0.8845,x:483.25,y:297.95},0).wait(1).to({scaleX:0.8267,scaleY:0.8267,x:409.95,y:234.2},0).wait(1).to({scaleX:0.769,scaleY:0.769,x:336.65,y:170.5},0).wait(1).to({scaleX:0.7112,scaleY:0.7112,x:263.35,y:106.8},0).wait(1).to({scaleX:0.6534,scaleY:0.6534,x:190,y:43.1},0).wait(1));

	// prostate_P
	this.msh6_prostate_p = new lib.msh6_prostate_p();
	this.msh6_prostate_p.name = "msh6_prostate_p";
	this.msh6_prostate_p.setTransform(261.15,444.45,1,1,0,0,0,200,150);
	this.msh6_prostate_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh6_prostate_p).wait(15).to({_off:false},0).wait(1));

	// prostate
	this.msh2_prostate = new lib.bladder();
	this.msh2_prostate.name = "msh2_prostate";
	this.msh2_prostate.setTransform(833.9,604.5,1.514,1.514,0,0,0,38.4,26.9);
	this.msh2_prostate._off = true;
	new cjs.ButtonHelper(this.msh2_prostate, 0, 1, 2, false, new lib.bladder(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_prostate).wait(15).to({_off:false},0).wait(1));

	// colorectal_P
	this.MSH6_MALE_P = new lib.MSH6_MALE_P();
	this.MSH6_MALE_P.name = "MSH6_MALE_P";
	this.MSH6_MALE_P.setTransform(333.1,402.1,1,1,0,0,0,265.1,130);
	this.MSH6_MALE_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH6_MALE_P).wait(15).to({_off:false},0).wait(1));

	// male_colorectal
	this.instance_1 = new lib.mlh1malecolorectal();
	this.instance_1.setTransform(875.25,524.75,1,1,0,0,0,107.6,94.3);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.msh2_male_colorectal_b = new lib.mlh1malecolorectal();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(841.2,495.5,1,1,0,0,0,107.6,94.3);
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.msh2_male_colorectal_b}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({_off:true,x:841.2,y:495.5},2).wait(1));

	// male_body_back
	this.mlh1_male_back = new lib.goback_btn_1();
	this.mlh1_male_back.name = "mlh1_male_back";
	this.mlh1_male_back.setTransform(1067.8,35);
	this.mlh1_male_back._off = true;
	new cjs.ButtonHelper(this.mlh1_male_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_back).wait(15).to({_off:false},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({scaleX:1.0629,scaleY:1.0557,x:977.8,y:503.4},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:964.15,y:507.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:950.4,y:511.45},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:936.75,y:515.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:923.1,y:519.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:909.4,y:523.5},0).wait(1));

	// ovaries_P
	this.OVRIES_P = new lib.msh6_female_ovaries_P();
	this.OVRIES_P.name = "OVRIES_P";
	this.OVRIES_P.setTransform(1032.7,426.05,1,1,0,0,0,200,150);
	this.OVRIES_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.OVRIES_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// ovaries_button
	this.mlh1_female_overies_b = new lib.mlh1femaleovariesbutton();
	this.mlh1_female_overies_b.name = "mlh1_female_overies_b";
	this.mlh1_female_overies_b.setTransform(314.35,609.6,0.8079,0.914,0,0,0,0.4,0.1);
	this.mlh1_female_overies_b._off = true;
	new cjs.ButtonHelper(this.mlh1_female_overies_b, 0, 1, 2, false, new lib.mlh1femaleovariesbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_overies_b).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial_p
	this.MSH6_FEM_ENDOMETRIUM_P = new lib.mswh6_fem_endometrium_p();
	this.MSH6_FEM_ENDOMETRIUM_P.name = "MSH6_FEM_ENDOMETRIUM_P";
	this.MSH6_FEM_ENDOMETRIUM_P.setTransform(943.95,302.4);
	this.MSH6_FEM_ENDOMETRIUM_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH6_FEM_ENDOMETRIUM_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:421.9,y:657.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:409.25,y:665.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:396.55,y:673.45,alpha:1},0).to({_off:true},1).wait(7));

	// colorectal_popup
	this.MSH6_FEM_COLORECTAL_P = new lib.msh6_fem_colorectal_p();
	this.MSH6_FEM_COLORECTAL_P.name = "MSH6_FEM_COLORECTAL_P";
	this.MSH6_FEM_COLORECTAL_P.setTransform(916.3,437.15,1,1,0,0,0,282.1,149.1);
	this.MSH6_FEM_COLORECTAL_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH6_FEM_COLORECTAL_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolonfinal();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolonfinal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:413.1,y:498.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:402.05,y:533.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:390.95,y:568.45,alpha:1},0).to({_off:true},1).wait(7));

	// female_back
	this.female_back = new lib.goback_btn_1();
	this.female_back.name = "female_back";
	this.female_back.setTransform(44.05,69.05);
	this.female_back._off = true;
	new cjs.ButtonHelper(this.female_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.female_back).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 1);

	this.instance_2 = new lib.mlh12femalegraphic("synched",0);
	this.instance_2.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:305.7,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:369.45,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:401.4,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:433.3,y:419.15},0).wait(1).to({x:421.3},0).wait(1).to({x:409.3},0).wait(1).to({x:397.3},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// background
	this.instance_3 = new lib.msh6_background("synched",0);
	this.instance_3.setTransform(420.15,380.15,0.0007,0.0012,0,0,0,0,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:728.2,regY:419.1,scaleX:1,scaleY:1,x:598.95,y:387.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-84,1456.4,1182.9);


(lib.msh2title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.MSH2DESCRPTION();
	this.instance.setTransform(269.35,-104.6,1,1,0,0,0,225.2,151.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.msh2_title_button();
	this.instance_1.setTransform(269.4,202,1,1,0,0,0,269.4,202);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("EgmvgMpMBNgAAAIAAZTMhNgAAAg");
	this.shape.setTransform(262.1,187.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A630E").s().p("EgmwAMqIAA5TMBNgAAAIAAZTg");
	this.shape_1.setTransform(262.1,187.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:269.4,scaleX:1,scaleY:1,x:269.4,y:202}}]}).to({state:[{t:this.instance_1,p:{regX:269.3,scaleX:1.1559,scaleY:1.1559,x:269.35,y:202.05}}]},1).to({state:[{t:this.instance_1,p:{regX:269.4,scaleX:1,scaleY:1,x:269.4,y:202}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{regX:269.4,scaleX:1,scaleY:1,x:269.4,y:202}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-245.8,622.6999999999999,681.4000000000001);


(lib.msh2background_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_description.play();
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.female_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_colorectal_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_female_endometrial_popup.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_overies_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_ovaries.play();
		});
		
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stomach_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_stomach_p.play();
		});
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.kidney.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_female_kidney_P.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_male_colorectal_p.play();
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stamoch_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.stomach_popup.play();
		});
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_prostate.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_prostate_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_m_kidney.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_male_kidney_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.bladder.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_male_bladder_P.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// msh2_title
	this.instance = new lib.msh2title();
	this.instance.setTransform(694,580.1,1,1,0,0,0,269.4,202);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.msh2title(), 3);

	this.instance_1 = new lib.MSH2caption("synched",0);
	this.instance_1.setTransform(646,552.1,1,1,0,0,0,269.4,202);
	this.instance_1._off = true;

	this.instance_2 = new lib.msh2_title_button();
	this.instance_2.setTransform(646,552.1,1,1,0,0,0,269.4,202);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({scaleX:0.9451,scaleY:0.9319,x:736.65,y:484.4},0).wait(1).to({scaleX:0.8903,scaleY:0.8638,x:827.35,y:416.7},0).wait(1).to({scaleX:0.8354,scaleY:0.7957,x:918,y:349},0).wait(1).to({scaleX:0.7806,scaleY:0.7277,x:1008.7,y:281.3},0).wait(1).to({scaleX:0.7257,scaleY:0.6596,x:1099.4,y:213.65},0).wait(1).to({scaleX:0.6708,scaleY:0.5915,x:1190.05,y:145.95},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(2).to({scaleX:0.9163,scaleY:0.9089,x:565.45,y:474.85},0).wait(1).to({scaleX:0.8327,scaleY:0.8178,x:484.9,y:397.65},0).wait(1).to({scaleX:0.749,scaleY:0.7267,x:404.45,y:320.4},0).wait(1).to({scaleX:0.6654,scaleY:0.6356,x:323.9,y:243.2},0).wait(1).to({scaleX:0.5817,scaleY:0.5445,x:243.4,y:166},0).wait(1));

	// navigation
	this.previous_page = new lib.goback_btn_1();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(171.55,111.5,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// bladder_p
	this.msh2_male_bladder_P = new lib.msh2_male_bladder_P();
	this.msh2_male_bladder_P.name = "msh2_male_bladder_P";
	this.msh2_male_bladder_P.setTransform(365.2,487.55,1,1,0,0,0,200,150);
	this.msh2_male_bladder_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_bladder_P).wait(15).to({_off:false},0).wait(1));

	// bladder
	this.bladder = new lib.bladderbutton();
	this.bladder.name = "bladder";
	this.bladder.setTransform(923.1,629.8,1,1,0,0,0,38.1,19.8);
	this.bladder._off = true;
	new cjs.ButtonHelper(this.bladder, 0, 1, 2, false, new lib.bladderbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bladder).wait(15).to({_off:false},0).wait(1));

	// msh2_male_colorectal_p
	this.msh2_male_colorectal_p = new lib.msh2_male_colorectal_p();
	this.msh2_male_colorectal_p.name = "msh2_male_colorectal_p";
	this.msh2_male_colorectal_p.setTransform(410.15,473.15,1,1,0,0,0,230.1,139.1);
	this.msh2_male_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_colorectal_p).wait(15).to({_off:false},0).wait(1));

	// kidney_p
	this.msh2_male_kidney_p = new lib.msh2_male_kidney_p();
	this.msh2_male_kidney_p.name = "msh2_male_kidney_p";
	this.msh2_male_kidney_p.setTransform(314.05,470,1,1,0,0,0,200,150);
	this.msh2_male_kidney_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_kidney_p).wait(15).to({_off:false},0).wait(1));

	// kidney
	this.msh2_m_kidney = new lib.msh2_female_kidney_btn();
	this.msh2_m_kidney.name = "msh2_m_kidney";
	this.msh2_m_kidney.setTransform(836.1,403.95,1,0.869,0,0,0,0.1,0);
	this.msh2_m_kidney._off = true;
	new cjs.ButtonHelper(this.msh2_m_kidney, 0, 1, 2, false, new lib.msh2_female_kidney_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_m_kidney).wait(15).to({_off:false},0).wait(1));

	// urinary_tract_as_background
	this.msh2_fem_urinary_b = new lib.urinarytract();
	this.msh2_fem_urinary_b.name = "msh2_fem_urinary_b";
	this.msh2_fem_urinary_b.setTransform(862.6,494.4,1,0.7255,0,0,0,102.5,189.4);
	this.msh2_fem_urinary_b.alpha = 0.3906;
	this.msh2_fem_urinary_b._off = true;
	new cjs.ButtonHelper(this.msh2_fem_urinary_b, 0, 1, 2, false, new lib.urinarytract(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_urinary_b).wait(13).to({_off:false},0).wait(1).to({regX:102.4,scaleX:0.9017,scaleY:0.6673,x:893.8,y:513.25,alpha:0.695},0).wait(1).to({scaleX:0.8035,scaleY:0.609,x:925.15,y:532.05,alpha:1},0).wait(1));

	// prostate_P
	this.msh2_prostate_p = new lib.msh2_prostate_p();
	this.msh2_prostate_p.name = "msh2_prostate_p";
	this.msh2_prostate_p.setTransform(409.55,504.7,1,1,0,0,0,179.2,136.2);
	this.msh2_prostate_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_prostate_p).wait(15).to({_off:false},0).wait(1));

	// prostate
	this.msh2_prostate = new lib.bladder();
	this.msh2_prostate.name = "msh2_prostate";
	this.msh2_prostate.setTransform(923.2,661.8,1,1,0,0,0,38.2,26.8);
	this.msh2_prostate._off = true;
	new cjs.ButtonHelper(this.msh2_prostate, 0, 1, 2, false, new lib.bladder(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_prostate).wait(15).to({_off:false},0).wait(1));

	// stomach_p
	this.stomach_popup = new lib.mlh1malestomachpopup();
	this.stomach_popup.name = "stomach_popup";
	this.stomach_popup.setTransform(466.3,428.65,0.8624,0.8624,0,0,0,256.4,129.2);
	this.stomach_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stomach_popup).wait(15).to({_off:false},0).wait(1));

	// stomach
	this.stamoch_btn = new lib.stomach_1();
	this.stamoch_btn.name = "stamoch_btn";
	this.stamoch_btn.setTransform(897.45,351.7,1,1,0,0,0,67.4,58.3);
	this.stamoch_btn.alpha = 0.4219;
	this.stamoch_btn._off = true;
	new cjs.ButtonHelper(this.stamoch_btn, 0, 1, 2, false, new lib.stomach_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stamoch_btn).wait(13).to({_off:false},0).wait(1).to({regY:58.4,scaleX:0.9312,scaleY:0.9312,x:933.25,y:382.6,alpha:0.71},0).wait(1).to({scaleX:0.8624,scaleY:0.8624,x:969.1,y:413.35,alpha:1},0).wait(1));

	// male_colorectal
	this.instance_3 = new lib.mlh1malecolorectal();
	this.instance_3.setTransform(875.25,524.75,1,1,0,0,0,107.6,94.3);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.msh2_male_colorectal_b = new lib.mlh1malecolorectal();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(929.25,572.95,0.7281,0.7281,0,0,0,107.7,94.4);
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.msh2_male_colorectal_b}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({_off:true,regX:107.7,regY:94.4,scaleX:0.7281,scaleY:0.7281,x:929.25,y:572.95},2).wait(1));

	// male_body_back
	this.mlh1_male_back = new lib.goback_btn_1();
	this.mlh1_male_back.name = "mlh1_male_back";
	this.mlh1_male_back.setTransform(1172.9,107.9,0.8624,0.8624);
	this.mlh1_male_back._off = true;
	new cjs.ButtonHelper(this.mlh1_male_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_back).wait(15).to({_off:false},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1050.55,507.4,1,1,0,0,0,216.6,507.4);
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_male}]},1).to({state:[]},1).to({state:[{t:this.mlh1_1_male_button}]},7).to({state:[{t:this.mlh1_1_male_button}]},1).to({state:[{t:this.mlh1_1_male_button}]},1).to({state:[{t:this.mlh1_1_male_button}]},1).to({state:[{t:this.mlh1_1_male_button}]},1).to({state:[{t:this.mlh1_1_male_button}]},1).to({state:[{t:this.mlh1_1_male_button}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({scaleX:1.0313,scaleY:1.0251,x:992.35,y:508},0).wait(1).to({scaleX:1.0625,scaleY:1.0502,x:993.2,y:516.6},0).wait(1).to({scaleX:1.0938,scaleY:1.0753,x:994.05,y:525.25},0).wait(1).to({scaleX:1.1251,scaleY:1.1004,x:994.95,y:533.9},0).wait(1).to({scaleX:1.1564,scaleY:1.1255,x:995.85,y:542.5},0).wait(1).to({scaleX:1.1876,scaleY:1.1507,x:996.65,y:551.15},0).wait(1));

	// fem_stomach_p
	this.msh2_fem_stomach_p = new lib.msh2femstomach();
	this.msh2_fem_stomach_p.name = "msh2_fem_stomach_p";
	this.msh2_fem_stomach_p.setTransform(1019.65,550.6,1,1,0,0,0,288.7,127.6);
	this.msh2_fem_stomach_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_stomach_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// msh2_female_stomach
	this.stomach_btn = new lib.stomach_1();
	this.stomach_btn.name = "stomach_btn";
	this.stomach_btn.setTransform(473.35,409.75,1,1,0,0,0,67.4,58.3);
	this.stomach_btn.alpha = 0.4688;
	this.stomach_btn._off = true;
	new cjs.ButtonHelper(this.stomach_btn, 0, 1, 2, false, new lib.stomach_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stomach_btn).wait(6).to({_off:false},0).wait(1).to({regY:58.4,x:503.35,y:411.85,alpha:0.735},0).wait(1).to({x:533.35,y:413.85,alpha:1},0).to({_off:true},1).wait(7));

	// kidney_p
	this.msh2_female_kidney_P = new lib.msh2_fem_kidney_p();
	this.msh2_female_kidney_P.name = "msh2_female_kidney_P";
	this.msh2_female_kidney_P.setTransform(1040.55,501.7,1,1,0,0,0,199.3,149.2);
	this.msh2_female_kidney_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_female_kidney_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// kidney
	this.kidney = new lib.msh2_female_kidney_btn();
	this.kidney.name = "kidney";
	this.kidney.setTransform(487.95,489.2,1,1,0,0,0,87.8,65.2);
	this.kidney._off = true;
	new cjs.ButtonHelper(this.kidney, 0, 1, 2, false, new lib.msh2_female_kidney_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.kidney).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// mlh1_ovaries_popup
	this.msh2_ovaries = new lib.msh2ovaries();
	this.msh2_ovaries.name = "msh2_ovaries";
	this.msh2_ovaries.setTransform(1015.35,583.45,1,1,0,0,0,315.1,146.9);
	this.msh2_ovaries._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_ovaries).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// ovaries_button
	this.mlh1_female_overies_b = new lib.mlh1femaleovariesbutton();
	this.mlh1_female_overies_b.name = "mlh1_female_overies_b";
	this.mlh1_female_overies_b.setTransform(405.65,613.7,0.8528,0.9227,0,0,0,0.2,0.5);
	this.mlh1_female_overies_b._off = true;
	new cjs.ButtonHelper(this.mlh1_female_overies_b, 0, 1, 2, false, new lib.mlh1femaleovariesbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_overies_b).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// mlh1_female_endometrial_popup
	this.mlh1_female_endometrial_popup = new lib.mlh1femaleendometrialpopup();
	this.mlh1_female_endometrial_popup.name = "mlh1_female_endometrial_popup";
	this.mlh1_female_endometrial_popup.setTransform(700.25,436.55);
	this.mlh1_female_endometrial_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_popup).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:453.9,y:659.2,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:473.25,y:668.35,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:492.55,y:677.45,alpha:1},0).to({_off:true},1).wait(7));

	// MSH2_FEM_COLORECTAL_P
	this.msh2_fem_colorectal_p = new lib.popup_basecopy();
	this.msh2_fem_colorectal_p.name = "msh2_fem_colorectal_p";
	this.msh2_fem_colorectal_p.setTransform(1019.65,550.6,1,1,0,0,0,288.7,127.6);
	this.msh2_fem_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_colorectal_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolonfinal();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolonfinal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:445.1,y:499.65,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:466.05,y:536.1,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:486.95,y:572.45,alpha:1},0).to({_off:true},1).wait(7));

	// back
	this.female_back = new lib.goback_btn_1();
	this.female_back.name = "female_back";
	this.female_back.setTransform(101.95,95);
	this.female_back._off = true;
	new cjs.ButtonHelper(this.female_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.female_back).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(396.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 1);

	this.instance_4 = new lib.mlh12femalegraphic("synched",0);
	this.instance_4.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:305.7,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:369.45,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:401.4,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:433.3,y:419.15},0).wait(1).to({x:453.3,y:420.5},0).wait(1).to({x:473.3,y:421.85},0).wait(1).to({x:493.3,y:423.15},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// background
	this.instance_5 = new lib.msh2background("synched",0);
	this.instance_5.setTransform(0.5,0.5,0.0007,0.0013,0,0,0,641.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:695.2,regY:393.1,scaleX:1,scaleY:1,x:713.2,y:377.15},0).wait(1).to({x:715.95,y:379.6},0).wait(1).to({x:718.65,y:382.05},0).wait(1).to({x:721.4,y:384.5},0).wait(1).to({x:724.1,y:386.95},0).wait(1).to({x:726.8,y:389.4},0).wait(1).to({x:729.55,y:391.85},0).wait(1).to({x:732.25,y:394.25},0).wait(1).to({x:734.95,y:396.7},0).wait(1).to({x:737.7,y:399.15},0).wait(1).to({x:740.4,y:401.6},0).wait(1).to({x:743.1,y:404.05},0).wait(1).to({x:745.85,y:406.5},0).wait(1).to({x:748.55,y:408.95},0).wait(1).to({x:751.25,y:411.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-84,1498.6000000000001,1182.9);


(lib.mlh1title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.mlh1_fem_description();
	this.instance.setTransform(672.95,-27.65,1,1,0,0,0,85,-143.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.mlh1page_0000_mlh1psd("synched",0);
	this.instance_1.setTransform(245.9,76.45,0.1634,0.1634,0,0,0,1885.9,871.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(29,1,1).p("A8Ws2MA4tAAAIAAZtMg4tAAAg");
	this.shape.setTransform(247.05,100.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A8VM3IAA5tMA4rAAAIAAZtg");
	this.shape_1.setTransform(247.05,100.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:1885.9,regY:871.9,scaleX:0.1634,scaleY:0.1634,y:76.45}}]}).to({state:[{t:this.instance_1,p:{regX:1885.7,regY:871.5,scaleX:0.173,scaleY:0.173,y:79.15}}]},1).to({state:[{t:this.instance_1,p:{regX:1886,regY:872,scaleX:0.1602,scaleY:0.1602,y:104.35}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{regX:1886,regY:872,scaleX:0.1602,scaleY:0.1602,y:104.35}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.4,-14.3,441.1,211.20000000000002);


(lib.mlh1_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.previous_page.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(0);
		}
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_overies_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_fem_ovaries_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_fem_endometrium_p.play();
		});
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_female_colorectal_popup.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stomach_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_fem_stomach.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_m_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_m_coloectal_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_m_stomach_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_male_stomach_p.play();
		});
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male_bladder_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.bladder_P.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.previous_page = new lib.goback_btn_1();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(115.55,91.6,0.8294,0.8294,0,0,0,27.5,27.6);
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016500").s().p("AgfAlIgTgMQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABABIAAAAQAEABgDgCQgCgCADABQADABgHgFQACABAAAAQABABABAAQAAAAAAgBQAAAAgBgBIgDgBQgBgBgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgCgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABABQAHADgGgDIABAAIgBgBQgPgHAMADQABABABABQABAAAAAAQABAAgBAAQAAAAAAgBQgCAAAAgBQgBgBAAAAQAAgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBgBQAAgBgBAAIABAAIgFgDQAAAAABAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAQABABABAAQAAABABAAQAAAAABAAQAAAAAAAAIgDgCIgCgCQABABAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAIgEgCQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABAAAAAAQABAAACABIgGgHIABgBIAGABQAEABgGgGQAIAFgCgDIgFgDIAEACIACgBIABAAIABABIgEgDIAFACIgBAAIACABQAEABgJgEIAEABIgFgCIAEAAIACACQABAAAAAAQAAABAAgBQAAAAgBAAQAAgBgBgBIgHgDIADACIgGgEIADACQABAAAAAAQABAAgBAAQAAAAgBgBQgBAAgBgBIAFACIgEgDIAKAFIABAAQABAAAAAAQAAABAAgBQAAAAgBAAQgBgBgBAAIAEABIgDgBIADABIgCgCQgBgBAAAAQAAgBAAAAQAAAAABAAQAAAAABABIACABQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgBgBIgBgBIADACIgBgCIACACQABAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAgBIgCAAIgLgGIgCgBIAFACIgFgEIALAGIgCgCQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABABIAHADIgEgDQAAAAAAAAQABAAgBgBQAAAAAAAAQgBAAgBgBIABAAQACABgCgCIgBgBIgCgBIADABIgFgCQAHACACgBQABABABAAQAAAAAAAAQABAAgBgBQAAAAAAgBIgCAAQAEAAABgBIgCgBIAGACIgBgCIACABIAAADIAHACIgFgCIADAAIAAgBIgDgCIgBAAIAAgBIAHACIAAABIAFABIgDgBQgBAAAAgBQAAAAAAAAQAAAAABAAQABABABAAIAEACQgEgDAJADIgMgFIACAAQAAAAAAAAQABAAAAgBQAAAAgBAAQAAAAAAAAIADACIgBgCIACABIgLgGQgDgBAFABIAEAAIgCAAIAAAAIgDgCIAGACQgBAAgBgBQAAAAgBgBQAAAAAAAAQAAAAABAAIADAAIADACIADABIgCgBIAGACQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAPAFgFgEIADACQABAAgBgBIABAAIgBAAIgCgBIABAAIgBAAIAGADIgCgCIADACIASAGQAEACAAACIgDgBIAGADQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIAFACIgEgBIABABIgDgBIAEAEIADABIAAAAQgLgDACACIACACQAAAAAAAAQABABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABABAAIAGADQACABgBADQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBgBQgDABAAAEQAAADgEgBQgFACgBAFQAAAHgBABIAAAAIgEAAQAAABAAAAQgBAAAAAAQAAAAABAAQAAABAAAAIAAgBIAAACIAAgBQgDADAFAEIgCAAIgDAAQgFABAAAFIgBAJIgDgBIAEADQgBgBAAAAQgBABAAAAQgBAAAAAAQAAABAAABQAAACgFgCIAFAEIgCAKIgJAAIACAGg");
	this.shape.setTransform(126.3458,107.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.previous_page}]},1).to({state:[]},1).wait(14));

	// mlh1_title
	this.mlh1_title = new lib.mlh1title();
	this.mlh1_title.name = "mlh1_title";
	this.mlh1_title.setTransform(641.05,538.65,1.1301,1.1301,0,0,0,246,104.4);
	new cjs.ButtonHelper(this.mlh1_title, 0, 1, 2, false, new lib.mlh1title(), 3);

	this.instance = new lib.mlh1page_0000_mlh1psd("synched",0);
	this.instance.setTransform(640.95,502.65,0.1929,0.1929,0,0,0,1885.4,870.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_title}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:1886,regY:872,scaleX:0.1873,scaleY:0.1873,x:717.45,y:442.4},0).wait(1).to({scaleX:0.1818,scaleY:0.1818,x:793.9,y:381.95},0).wait(1).to({scaleX:0.1762,scaleY:0.1762,x:870.35,y:321.5},0).wait(1).to({scaleX:0.1707,scaleY:0.1707,x:946.75,y:261.1},0).wait(1).to({scaleX:0.1651,scaleY:0.1651,x:1023.2,y:200.65},0).wait(1).to({scaleX:0.1595,scaleY:0.1595,x:1099.6,y:140.2},0).wait(1).to({regX:1885.4,regY:870.9,scaleX:0.1929,scaleY:0.1929,x:640.95,y:502.65},0).wait(1).to({regX:1886,regY:872,scaleX:0.1845,scaleY:0.1845,x:577.1,y:441.75},0).wait(1).to({scaleX:0.1761,scaleY:0.1761,x:513.2,y:380.7},0).wait(1).to({scaleX:0.1678,scaleY:0.1678,x:449.25,y:319.6},0).wait(1).to({scaleX:0.1594,scaleY:0.1594,x:385.3,y:258.5},0).wait(1).to({scaleX:0.151,scaleY:0.151,x:321.4,y:197.4},0).wait(1).to({scaleX:0.1427,scaleY:0.1427,x:257.55,y:136.35},0).wait(1));

	// bladder_p
	this.bladder_P = new lib.mlh1_male_bladder_p();
	this.bladder_P.name = "bladder_P";
	this.bladder_P.setTransform(329.45,450.65,1,1,0,0,0,197.2,132.2);
	this.bladder_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bladder_P).wait(15).to({_off:false},0).wait(1));

	// bladder
	this.mlh1_male_bladder_btn = new lib.mlh1_male_bladder();
	this.mlh1_male_bladder_btn.name = "mlh1_male_bladder_btn";
	this.mlh1_male_bladder_btn.setTransform(841.4,595.7,1,1,0,0,0,76.4,39.7);
	this.mlh1_male_bladder_btn._off = true;
	new cjs.ButtonHelper(this.mlh1_male_bladder_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_bladder_btn).wait(15).to({_off:false},0).wait(1));

	// stomach_P
	this.mlh1_male_stomach_p = new lib.mlh1_male_stomach_P();
	this.mlh1_male_stomach_p.name = "mlh1_male_stomach_p";
	this.mlh1_male_stomach_p.setTransform(358.15,504.05,1,1,0,0,0,228.1,132);
	this.mlh1_male_stomach_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_stomach_p).wait(15).to({_off:false},0).wait(1));

	// mlh1_male_stomach
	this.instance_1 = new lib.mlh1malestomach();
	this.instance_1.setTransform(915.35,374.55,1,1,0,0,0,83,86.8);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.mlh1malestomach(), 3);

	this.mlh1_m_stomach_button = new lib.mlh1malestomach();
	this.mlh1_m_stomach_button.name = "mlh1_m_stomach_button";
	this.mlh1_m_stomach_button.setTransform(895.35,374.55,1.1204,1,0,0,0,83,86.8);
	new cjs.ButtonHelper(this.mlh1_m_stomach_button, 0, 1, 2, false, new lib.mlh1malestomach(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.mlh1_m_stomach_button}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({_off:true,scaleX:1.1204,x:895.35},2).wait(1));

	// mlh1_m_colorectal_popup
	this.mlh1_m_coloectal_p = new lib.mlh1mcolorectalpopup();
	this.mlh1_m_coloectal_p.name = "mlh1_m_coloectal_p";
	this.mlh1_m_coloectal_p.setTransform(38.05,396.3);
	this.mlh1_m_coloectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_m_coloectal_p).wait(15).to({_off:false},0).wait(1));

	// male_colorectal
	this.instance_2 = new lib.mlh1malecolorectal();
	this.instance_2.setTransform(875.25,524.75,1,1,0,0,0,107.6,94.3);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.mlh1_m_colorectal_b = new lib.mlh1malecolorectal();
	this.mlh1_m_colorectal_b.name = "mlh1_m_colorectal_b";
	this.mlh1_m_colorectal_b.setTransform(841.2,524.75,1,1,0,0,0,107.6,94.3);
	new cjs.ButtonHelper(this.mlh1_m_colorectal_b, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.mlh1_m_colorectal_b}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({_off:true,x:841.2},2).wait(1));

	// male_body_back
	this.mlh1_male_back = new lib.goback_btn_1();
	this.mlh1_male_back.name = "mlh1_male_back";
	this.mlh1_male_back.setTransform(1120.15,59.15);
	this.mlh1_male_back._off = true;
	new cjs.ButtonHelper(this.mlh1_male_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_back).wait(15).to({_off:false},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(1).to({regX:0,regY:0,x:785.95,y:0},0).wait(1).to({regX:215.4,regY:507.4,scaleX:0.9382,scaleY:0.9382,x:1011.35,y:476,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1021.35,y:444.65,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1031.4,y:413.25,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({scaleX:1.0629,scaleY:1.0557,x:979.45},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:967.45,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:955.4},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:943.4,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:931.4,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:919.4,y:499.5},0).wait(1));

	// stomach_P
	this.mlh1_fem_stomach = new lib.mlh_fem_stomach();
	this.mlh1_fem_stomach.name = "mlh1_fem_stomach";
	this.mlh1_fem_stomach.setTransform(1053,404.25,1,1,0,0,0,250,150);
	this.mlh1_fem_stomach._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_stomach).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// msh2_female_stomach
	this.stomach_btn = new lib.stomach_1();
	this.stomach_btn.name = "stomach_btn";
	this.stomach_btn.setTransform(413.35,419.75,1,1,0,0,0,67.4,58.3);
	this.stomach_btn.alpha = 0.4688;
	this.stomach_btn._off = true;
	new cjs.ButtonHelper(this.stomach_btn, 0, 1, 2, false, new lib.stomach_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stomach_btn).wait(6).to({_off:false},0).wait(1).to({regY:58.4,x:443.35,y:421.85,alpha:0.735},0).wait(1).to({x:473.35,y:423.85,alpha:1},0).to({_off:true},1).wait(7));

	// mlh1_fem_ovaries_p
	this.mlh1_fem_ovaries_p = new lib.popup_base();
	this.mlh1_fem_ovaries_p.name = "mlh1_fem_ovaries_p";
	this.mlh1_fem_ovaries_p.setTransform(959.65,546.6,1,1,0,0,0,288.7,127.6);
	this.mlh1_fem_ovaries_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_ovaries_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// ovaries_button
	this.mlh1_female_overies_b = new lib.mlh1femaleovariesbutton();
	this.mlh1_female_overies_b.name = "mlh1_female_overies_b";
	this.mlh1_female_overies_b.setTransform(330,602.25);
	this.mlh1_female_overies_b._off = true;
	new cjs.ButtonHelper(this.mlh1_female_overies_b, 0, 1, 2, false, new lib.mlh1femaleovariesbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_overies_b).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// mlh1_female_endometrial_popup
	this.mlh1_fem_endometrium_p = new lib.mlh1_fem_endometrial_p();
	this.mlh1_fem_endometrium_p.name = "mlh1_fem_endometrium_p";
	this.mlh1_fem_endometrium_p.setTransform(648.2,372.1);
	this.mlh1_fem_endometrium_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_endometrium_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:1.0249,scaleY:1.0249,x:433.9,y:658.2,alpha:0.3333},0).wait(1).to({scaleX:1.0499,scaleY:1.0499,x:433.2,y:666.3,alpha:0.6667},0).wait(1).to({scaleX:1.0748,scaleY:1.0748,x:432.6,y:674.45,alpha:1},0).to({_off:true},1).wait(7));

	// mlh1_female_colorectal_popup
	this.mlh1_female_colorectal_popup = new lib.mlh1femalecolorectalpopup();
	this.mlh1_female_colorectal_popup.name = "mlh1_female_colorectal_popup";
	this.mlh1_female_colorectal_popup.setTransform(1223.35,308.15,1,1,0,0,0,168.8,187.5);
	this.mlh1_female_colorectal_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_popup).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolonfinal();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolonfinal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,x:425.2,y:491.45,alpha:0.3333},0).wait(1).to({x:426.2,y:519.7,alpha:0.6667},0).wait(1).to({x:427.2,y:547.95,alpha:1},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 1);

	this.instance_3 = new lib.mlh12femalegraphic("synched",0);
	this.instance_3.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:305.7,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:369.45,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:401.4,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:433.3,y:419.15},0).wait(3).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// female_body_back
	this.mlh1_female_back = new lib.goback_btn_1();
	this.mlh1_female_back.name = "mlh1_female_back";
	this.mlh1_female_back.setTransform(78.15,63.15,0.7753,0.7753);
	this.mlh1_female_back._off = true;
	new cjs.ButtonHelper(this.mlh1_female_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_back).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// background
	this.gene_page_background = new lib.genepagebackground("synched",0);
	this.gene_page_background.name = "gene_page_background";
	this.gene_page_background.setTransform(748.2,456.1,0.0007,0.0012,0,0,0,569.9,331.9);

	this.timeline.addTween(cjs.Tween.get(this.gene_page_background).wait(1).to({regX:703.1,regY:409.1,scaleX:1,scaleY:1,x:680.4,y:418.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-84,1426.7,1182.9);


(lib.epcam_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.female_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.EPCAM_FEM_COLORECTAL_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_fem_endo_p.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.male_back.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_male_colorectal_p.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// title
	this.instance = new lib.epcambutton();
	this.instance.setTransform(572.9,620.2,1,1,0,0,0,278.9,106.2);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.epcambutton(), 3);

	this.instance_1 = new lib.epcamtitle();
	this.instance_1.setTransform(766,124,0.1807,0.1681);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:766,y:124}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:-26,y:133}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:279,regY:37.4,scaleX:0.9754,scaleY:0.9754,x:586.7,y:451.95},0).wait(1).to({scaleX:0.9508,scaleY:0.9508,x:600.35,y:352.5},0).wait(1).to({scaleX:0.9262,scaleY:0.9262,x:614.05,y:253.05},0).wait(1).to({scaleX:0.9016,scaleY:0.9016,x:627.75,y:153.6},0).wait(1).to({scaleX:0.877,scaleY:0.877,x:641.45,y:54.15},0).wait(1).to({scaleX:0.8525,scaleY:0.8525,x:655.15,y:-45.2},0).to({_off:true},1).wait(1).to({_off:false,regX:278.9,regY:106.2,scaleX:1,scaleY:1,x:684.9,y:560.2},0).wait(1).to({regX:279,regY:37.4,scaleX:0.9654,scaleY:0.9654,x:615.85,y:425.65},0).wait(1).to({scaleX:0.9308,scaleY:0.9308,x:546.75,y:359.95},0).wait(1).to({scaleX:0.8962,scaleY:0.8962,x:477.65,y:294.2},0).wait(1).to({scaleX:0.8616,scaleY:0.8616,x:408.55,y:228.55},0).wait(1).to({scaleX:0.8271,scaleY:0.8271,x:339.45,y:162.8},0).to({_off:true},1).wait(1));

	// navigation
	this.previous_page = new lib.goback_btn_1();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(-10.35,171.6,0.8302,0.8302,0,0,0,27.6,27.6);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// popup
	this.epcam_male_colorectal_p = new lib.epcam_male_colorectal();
	this.epcam_male_colorectal_p.name = "epcam_male_colorectal_p";
	this.epcam_male_colorectal_p.setTransform(345.55,488.65,1,1,0,0,0,259.4,160.2);
	this.epcam_male_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.epcam_male_colorectal_p).wait(15).to({_off:false},0).wait(1));

	// male_colorectal
	this.instance_2 = new lib.mlh1malecolorectal();
	this.instance_2.setTransform(875.25,524.75,1,1,0,0,0,107.6,94.3);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.msh2_male_colorectal_b = new lib.mlh1malecolorectal();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(825.2,624.75,1,1,0,0,0,107.6,94.3);
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.msh2_male_colorectal_b}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({_off:true,x:825.2,y:624.75},2).wait(1));

	// Layer_3
	this.male_back = new lib.goback_btn_1();
	this.male_back.name = "male_back";
	this.male_back.setTransform(1032.2,174.2);
	this.male_back._off = true;
	new cjs.ButtonHelper(this.male_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.male_back).wait(15).to({_off:false},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(890.55,567.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(1).to({x:1002.55,y:507.4},0).wait(1).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({scaleX:1.0518,scaleY:1.045,x:976.75,y:520.4},0).wait(1).to({scaleX:1.1036,scaleY:1.09,x:962.1,y:541.4},0).wait(1).to({scaleX:1.1554,scaleY:1.135,x:947.4,y:562.45},0).wait(1).to({scaleX:1.2072,scaleY:1.18,x:932.75,y:583.45},0).wait(1).to({scaleX:1.259,scaleY:1.225,x:918.05,y:604.45},0).wait(1).to({scaleX:1.3108,scaleY:1.27,x:903.4,y:625.5},0).wait(1));

	// endometrium_popup
	this.epcam_fem_endo_p = new lib.epcam_fem_endo_p();
	this.epcam_fem_endo_p.name = "epcam_fem_endo_p";
	this.epcam_fem_endo_p.setTransform(951.55,593.25,1,1,0,0,0,304.4,167.2);
	this.epcam_fem_endo_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.epcam_fem_endo_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:393.9,y:693.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:353.25,y:737.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:312.55,y:781.45,alpha:1},0).to({_off:true},1).wait(7));

	// colorectal_popup
	this.EPCAM_FEM_COLORECTAL_P = new lib.epcam_fem_colorectal_p();
	this.EPCAM_FEM_COLORECTAL_P.name = "EPCAM_FEM_COLORECTAL_P";
	this.EPCAM_FEM_COLORECTAL_P.setTransform(881.45,596.7,1,1,0,0,0,292.4,152.2);
	this.EPCAM_FEM_COLORECTAL_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.EPCAM_FEM_COLORECTAL_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolonfinal();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolonfinal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:385.1,y:534.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:346.05,y:605.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:306.95,y:676.45,alpha:1},0).to({_off:true},1).wait(7));

	// back
	this.female_back = new lib.goback_btn_1();
	this.female_back.name = "female_back";
	this.female_back.setTransform(-12.05,185.05);
	this.female_back._off = true;
	new cjs.ButtonHelper(this.female_back, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.female_back).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(236.9,497.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 1);

	this.instance_3 = new lib.mlh12femalegraphic("synched",0);
	this.instance_3.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:305.7,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:369.45,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:401.4,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:433.3,y:419.15},0).wait(1).to({x:393.3,y:455.15},0).wait(1).to({x:353.35,y:491.15},0).wait(1).to({x:313.35,y:527.1},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:327.4,y:472.2,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:308.6,y:498.75,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:289.7,y:525.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:270.85,y:552,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:252,y:578.55,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:233.1,y:605.15,alpha:0},0).wait(1));

	// Layer_1
	this.instance_4 = new lib.epcam_background("synched",0);
	this.instance_4.setTransform(0.5,0.5,0.0007,0.0012,0,0,0,614.4,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:682.2,regY:418.1,scaleX:1,scaleY:1,x:570.2,y:518.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.9,-130.8,1390.1000000000001,1289.7);


(lib.basicinfopage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {mlh1:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q1_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q1_answer.play();
		});
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_movieclip.play();
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_movieclip.play();
		});
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q2_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q2_answer.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q3_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q3_answer.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q4_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q4_answer.play();
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh6_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh6_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.pms2_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.epcam_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.homepage.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// epcam
	this.epcam_movieclip = new lib.epcam_movieclip();
	this.epcam_movieclip.name = "epcam_movieclip";
	this.epcam_movieclip.setTransform(70,-150.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#578EC4").ss(1,1,1).p("EhqlhBUMDVLAAAMAAACCpMjVLAAAg");
	this.shape.setTransform(642.175,364.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.epcam_movieclip}]},1).wait(1));

	// PMS2
	this.pms2_movieclip = new lib.PMS2_movieclip();
	this.pms2_movieclip.name = "pms2_movieclip";
	this.pms2_movieclip.setTransform(654.1,374.1,1,1,0,0,0,700.1,418.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#578EC4").ss(1,1,1).p("EhtZhBUMDazAAAMAAACCpMjazAAAg");
	this.shape_1.setTransform(660.175,364.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.pms2_movieclip}]},1).wait(1));

	// MSH6
	this.msh6_movieclip = new lib.msh6_movieclip();
	this.msh6_movieclip.name = "msh6_movieclip";
	this.msh6_movieclip.setTransform(0.85,-23.05);
	this.msh6_movieclip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh6_movieclip).wait(1).to({_off:false},0).wait(1));

	// msh2
	this.instance = new lib.msh2background_1();
	this.instance.setTransform(295.1,169.6,1,1,0,0,0,348.1,201.6);

	this.msh2_movieclip = new lib.msh2background_1();
	this.msh2_movieclip.name = "msh2_movieclip";
	this.msh2_movieclip.setTransform(-40,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.msh2_movieclip},{t:this.instance}]},1).wait(1));

	// mlh1
	this.mlh1_movieclip = new lib.mlh1_movieclip();
	this.mlh1_movieclip.name = "mlh1_movieclip";
	this.mlh1_movieclip.setTransform(649.15,381.1,1,1,0,0,0,703.1,409.1);
	this.mlh1_movieclip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_movieclip).wait(1).to({_off:false},0).wait(1));

	// q4_answer
	this.q4_answer = new lib.q4answer();
	this.q4_answer.name = "q4_answer";
	this.q4_answer.setTransform(638.9,358.45,1,1,0,0,0,246.4,262.4);
	this.q4_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q4_answer).wait(1).to({_off:false},0).wait(1));

	// q3_answer
	this.q3_answer = new lib.q3_answer();
	this.q3_answer.name = "q3_answer";
	this.q3_answer.setTransform(390.1,138.05);
	this.q3_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q3_answer).wait(1).to({_off:false},0).wait(1));

	// q2_answer
	this.q2_answer = new lib.q2answer();
	this.q2_answer.name = "q2_answer";
	this.q2_answer.setTransform(638.9,374.3,1,1,0,0,0,246.4,262.4);
	this.q2_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q2_answer).wait(1).to({_off:false},0).wait(1));

	// q1_answer
	this.q1_answer = new lib.q1answer();
	this.q1_answer.name = "q1_answer";
	this.q1_answer.setTransform(652.8,364.8,1,1,0,0,0,246.4,262.4);
	this.q1_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q1_answer).wait(1).to({_off:false},0).wait(1));

	// epcam
	this.epcam_btn = new lib.EPCA();
	this.epcam_btn.name = "epcam_btn";
	this.epcam_btn.setTransform(1067.35,658.25,1,1,0,0,0,52,25.4);
	this.epcam_btn._off = true;
	new cjs.ButtonHelper(this.epcam_btn, 0, 1, 2, false, new lib.EPCA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.epcam_btn).wait(1).to({_off:false},0).wait(1));

	// PMS2
	this.pms2_btn = new lib.PMS2();
	this.pms2_btn.name = "pms2_btn";
	this.pms2_btn.setTransform(897.9,658.25,1,1,0,0,0,63.4,25.4);
	this.pms2_btn._off = true;
	new cjs.ButtonHelper(this.pms2_btn, 0, 1, 2, false, new lib.PMS2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pms2_btn).wait(1).to({_off:false},0).wait(1));

	// MSH6
	this.msh6_btn = new lib.MSH6();
	this.msh6_btn.name = "msh6_btn";
	this.msh6_btn.setTransform(901.4,659.05,1,1,0,0,0,60.1,25.4);
	this.msh6_btn._off = true;
	new cjs.ButtonHelper(this.msh6_btn, 0, 1, 2, false, new lib.MSH6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh6_btn).wait(1).to({_off:false},0).wait(1));

	// MSH2
	this.msh2_button = new lib.MSH2();
	this.msh2_button.name = "msh2_button";
	this.msh2_button.setTransform(769.1,658.25,1,1,0,0,0,52,25.4);
	this.msh2_button._off = true;
	new cjs.ButtonHelper(this.msh2_button, 0, 1, 2, false, new lib.MSH2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_button).wait(1).to({_off:false},0).wait(1));

	// MLH1
	this.mlh1 = new lib.MLH1();
	this.mlh1.name = "mlh1";
	this.mlh1.setTransform(652.15,656.95,1,1,0,0,0,53,26.1);
	this.mlh1._off = true;
	new cjs.ButtonHelper(this.mlh1, 0, 1, 2, false, new lib.MLH1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1).wait(1).to({_off:false},0).wait(1));

	// symbol
	this.instance_1 = new lib.goback_btn_1();
	this.instance_1.setTransform(588,669.05,0.3602,0.3602,180,0,0,0,-0.1);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.goback_btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// text
	this.textField_6 = new cjs.Text("Click on any of the Lynch Syndrome genes to learn about the risk associated to their mutation", "normal 400 37px 'Raleway'", "#333333");
	this.textField_6.name = "textField_6";
	this.textField_6.lineHeight = 51;
	this.textField_6.lineWidth = 1158;
	this.textField_6.parent = this;
	this.textField_6.setTransform(50.25,571.1);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.textField_6);
	}
	this.textField_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.textField_6).wait(1).to({_off:false},0).wait(1));

	// q4
	this.q4_question = new lib.q4();
	this.q4_question.name = "q4_question";
	this.q4_question.setTransform(422.85,520.75,1,1,0,0,0,392.6,29.9);
	this.q4_question._off = true;
	new cjs.ButtonHelper(this.q4_question, 0, 1, 2, false, new lib.q4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q4_question).wait(1).to({_off:false},0).wait(1));

	// Q3
	this.q3_question = new lib.q3();
	this.q3_question.name = "q3_question";
	this.q3_question.setTransform(447.15,465.8,1,1,0,0,0,416.9,30.9);
	this.q3_question._off = true;
	new cjs.ButtonHelper(this.q3_question, 0, 1, 2, false, new lib.q3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q3_question).wait(1).to({_off:false},0).wait(1));

	// q2
	this.q2_question = new lib.q2();
	this.q2_question.name = "q2_question";
	this.q2_question.setTransform(507.95,418.4,1,1,0,0,0,477.7,33.6);
	this.q2_question._off = true;
	new cjs.ButtonHelper(this.q2_question, 0, 1, 2, false, new lib.q2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q2_question).wait(1).to({_off:false},0).wait(1));

	// q1
	this.q1_question = new lib.q1();
	this.q1_question.name = "q1_question";
	this.q1_question.setTransform(632.7,377.95,1,1,0,0,0,604.3,43.9);
	this.q1_question._off = true;
	new cjs.ButtonHelper(this.q1_question, 0, 1, 2, false, new lib.q1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q1_question).wait(1).to({_off:false},0).wait(1));

	// back_button
	this.homepage = new lib.basicinfobackbutton();
	this.homepage.name = "homepage";
	this.homepage.setTransform(1138,199.95,1.2532,1.2532);
	this.homepage._off = true;
	new cjs.ButtonHelper(this.homepage, 0, 1, 2, false, new lib.basicinfobackbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.homepage).wait(1).to({_off:false},0).wait(1));

	// caption
	this.instance_2 = new lib.whatpagecaptionfinal();
	this.instance_2.setTransform(-8,2,1,0.8445);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// white_background
	this.instance_3 = new lib.whitebackground("synched",0);
	this.instance_3.setTransform(640.2,362.1,0.0007,0.0012,0,0,0,0,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:728.2,regY:419.1,scaleX:1,scaleY:1,x:642.3,y:388.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-150,1456.4,957.2);


// stage content:
(lib.lynch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {homepage:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.what_homepage.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.basic_info_page.play();
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.where_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.wherepage_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Mousing over the specified symbol instance executes a function.
		'3' is the number of the times event should be triggered.
		*/
		stage.enableMouseOver(3);
		_this.dna1.on('mouseover', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.dna1.play();
		});
		
		
		var _this = this;
		/*
		Mousing over the specified symbol instance executes a function.
		'3' is the number of the times event should be triggered.
		*/
		stage.enableMouseOver(3);
		_this.dna3.on('mouseover', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.dna3.play();
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.about_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.about_page.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// where
	this.wherepage_movieclip = new lib.wherepage_movieclip();
	this.wherepage_movieclip.name = "wherepage_movieclip";
	this.wherepage_movieclip.setTransform(645.15,469.1,1,1,0,0,0,709.1,511.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhuzhP2MDdnAAAMAAACftMjdnAAAg");
	this.shape.setTransform(645.2,469.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.wherepage_movieclip}]}).wait(1));

	// _
	this.basic_info_page = new lib.basicinfopage();
	this.basic_info_page.name = "basic_info_page";
	this.basic_info_page.setTransform(291.1,340.8,1,1,0,0,0,277.6,354.9);

	this.basic_info_page_1 = new lib.basicinfopage();
	this.basic_info_page_1.name = "basic_info_page_1";
	this.basic_info_page_1.setTransform(2084.5,1175.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.basic_info_page_1},{t:this.basic_info_page}]}).wait(1));

	// _
	this.about_page = new lib.aboutpag();
	this.about_page.name = "about_page";
	this.about_page.setTransform(-64,-42.05);

	this.timeline.addTween(cjs.Tween.get(this.about_page).wait(1));

	// dna3
	this.dna3 = new lib.dna3_1();
	this.dna3.name = "dna3";
	this.dna3.setTransform(1123.65,849.95,0.8393,0.8393,0,0,0,87.5,1045.5);

	this.timeline.addTween(cjs.Tween.get(this.dna3).wait(1));

	// gene1
	this.dna1 = new lib.dna1();
	this.dna1.name = "dna1";
	this.dna1.setTransform(1201,1083.6,1,1,0,0,0,108,1083.6);

	this.timeline.addTween(cjs.Tween.get(this.dna1).wait(1));

	// logo
	this.instance = new lib.Screenshot20221201at91028PM();
	this.instance.setTransform(0,0,0.4568,0.4568);

	this.instance_1 = new lib.surelogo("synched",0);
	this.instance_1.setTransform(332.1,41.5,1,1,0,0,0,84.5,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// about
	this.about_btn = new lib.aboutpagebutton();
	this.about_btn.name = "about_btn";
	this.about_btn.setTransform(922.3,632.55,0.872,0.8367,0,0,0,133.1,36.8);
	new cjs.ButtonHelper(this.about_btn, 0, 1, 2, false, new lib.aboutpagebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.about_btn).wait(1));

	// where_button
	this.where_btn = new lib.where();
	this.where_btn.name = "where_btn";
	this.where_btn.setTransform(574.25,635.85,0.8768,0.7129,0,0,0,146.1,49.1);
	new cjs.ButtonHelper(this.where_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.where_btn).wait(1));

	// what_button
	this.what_homepage = new lib.what();
	this.what_homepage.name = "what_homepage";
	this.what_homepage.setTransform(215.9,637.55,1,1,0,0,0,113.5,36.7);
	new cjs.ButtonHelper(this.what_homepage, 0, 1, 2, false, new lib.what(), 3);

	this.timeline.addTween(cjs.Tween.get(this.what_homepage).wait(1));

	// caption
	this.instance_2 = new lib.homepagecaption();
	this.instance_2.setTransform(516.9,314.8,1,1,0,0,0,389.9,180.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(575.1,317,2150.6,1410.4);
// library properties:
lib.properties = {
	id: '6CF5E040F16840128050EBA71FF14D2B',
	width: 1280,
	height: 720,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bluedark.png", id:"bluedark"},
		{src:"images/bluelight.png", id:"bluelight"},
		{src:"images/colon.png", id:"colon"},
		{src:"images/dna3.png", id:"dna3"},
		{src:"images/_double.png", id:"_double"},
		{src:"images/epcamtitle.png", id:"epcamtitle"},
		{src:"images/femalebody.png", id:"femalebody"},
		{src:"images/mlh1.png", id:"mlh1"},
		{src:"images/msh2caption.png", id:"msh2caption"},
		{src:"images/ovaries.png", id:"ovaries"},
		{src:"images/PMS2TITLE.png", id:"PMS2TITLE"},
		{src:"images/Sketches.png", id:"Sketches"},
		{src:"images/wholegut.png", id:"wholegut"},
		{src:"images/图层2_3.png", id:"图层2_3"},
		{src:"images/图层1_1.png", id:"图层1_1"},
		{src:"images/lynch_atlas_1.png", id:"lynch_atlas_1"},
		{src:"images/lynch_atlas_2.png", id:"lynch_atlas_2"},
		{src:"images/lynch_atlas_3.png", id:"lynch_atlas_3"},
		{src:"images/lynch_atlas_4.png", id:"lynch_atlas_4"},
		{src:"images/lynch_atlas_5.png", id:"lynch_atlas_5"},
		{src:"images/lynch_atlas_6.png", id:"lynch_atlas_6"},
		{src:"images/lynch_atlas_7.png", id:"lynch_atlas_7"},
		{src:"images/lynch_atlas_8.png", id:"lynch_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6CF5E040F16840128050EBA71FF14D2B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;