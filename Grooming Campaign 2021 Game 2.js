(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Grooming Campaign 2021 Game 2_atlas_1", frames: [[0,0,1637,1091]]},
		{name:"Grooming Campaign 2021 Game 2_atlas_2", frames: [[0,0,1637,1091],[0,1093,1280,853]]},
		{name:"Grooming Campaign 2021 Game 2_atlas_3", frames: [[0,1402,518,10],[0,855,1123,545],[1282,0,512,512],[1282,514,512,512],[1125,1028,512,512],[0,0,1280,853]]}
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



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.clock = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.multiply = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.P1000706 = function() {
	this.initialize(img.P1000706);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4661,3107);


(lib.P1000707 = function() {
	this.initialize(img.P1000707);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4663,3109);


(lib.P10007131 = function() {
	this.initialize(img.P10007131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.P1000713 = function() {
	this.initialize(img.P1000713);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.P1000727 = function() {
	this.initialize(img.P1000727);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3925,2617);


(lib.P1000730 = function() {
	this.initialize(img.P1000730);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4144,2762);


(lib.P1000737 = function() {
	this.initialize(img.P1000737);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5345,3564);


(lib.P1000740 = function() {
	this.initialize(img.P1000740);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4673,3116);


(lib.P1000743 = function() {
	this.initialize(img.P1000743);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4895,3263);


(lib.P1000746 = function() {
	this.initialize(img.P1000746);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4742,3161);


(lib.P1000759 = function() {
	this.initialize(img.P1000759);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.P1000760 = function() {
	this.initialize(img.P1000760);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5865,3910);


(lib.P1000765 = function() {
	this.initialize(img.P1000765);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.P1000766 = function() {
	this.initialize(img.P1000766);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.P1000778 = function() {
	this.initialize(img.P1000778);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5493,3662);


(lib.P10007801 = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.P1000780 = function() {
	this.initialize(ss["Grooming Campaign 2021 Game 2_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.P1000781 = function() {
	this.initialize(img.P1000781);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5218,3479);


(lib.P1000788 = function() {
	this.initialize(img.P1000788);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.P1000793 = function() {
	this.initialize(img.P1000793);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4000);


(lib.ThisorThatMainPage201 = function() {
	this.initialize(img.ThisorThatMainPage201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4001,2251);


(lib.Tick1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.check();
	this.instance.setTransform(59.8,29.8,0.3515,0.3515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.8,29.8,180,180);


(lib.start1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Start", "normal 400 100px 'Roboto'", "#3C7A89");
	this.text.textAlign = "center";
	this.text.lineHeight = 135;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(144,45.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape.setTransform(145,85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape_1.setTransform(145.0676,83.5488,1.1379,1.1379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:144,y:45.45,color:"#3C7A89"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.1379,scaleY:1.1379,x:143.85,y:38.5,color:"#DDDDDD"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-13.1,330,218.29999999999998);


(lib.Review1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Review Answers", "normal 400 100px 'Roboto'", "#3C7A89");
	this.text.textAlign = "center";
	this.text.lineHeight = 135;
	this.text.lineWidth = 734;
	this.text.parent = this;
	this.text.setTransform(403.6,38.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("Eg75ANSQkAAAi0i1Qi0i0AAj/IAAnTQAAkAC0i0QC0i0EAAAMB3zAAAQEAAACzC0QC1C0AAEAIAAHTQAAD/i1C0QizC1kAAAg");
	this.shape.setTransform(403.1191,77.0186,0.9059,0.9059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg75ANSQkAAAi0i1Qi0i0AAj/IAAnTQAAkAC0i0QC0i0EAAAMB3zAAAQEAAACzC0QC1C0AAEAIAAHTQAAD/i1C0QizC1kAAAg");
	this.shape_1.setTransform(403.2028,76.4599,0.9592,0.9592);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:403.6,y:38.65,color:"#3C7A89"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.0589,scaleY:1.0589,x:403.65,y:35.8,color:"#DDDDDD"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-5.1,853.7,183.6);


(lib.Retry1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Retry", "normal 400 100px 'Roboto'", "#3C7A89");
	this.text.textAlign = "center";
	this.text.lineHeight = 135;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(144,45.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape.setTransform(145,85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E4756").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape_1.setTransform(145.0161,84.3046,1.069,1.069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:144,y:45.45,color:"#3C7A89"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.069,scaleY:1.069,x:143.9,y:41.95,color:"#DDDDDD"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-6.5,310,205.1);


(lib.Q10B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000706();
	this.instance.setTransform(0,0,0.1676,0.1676);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q10A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000707();
	this.instance.setTransform(0,0,0.1678,0.1678);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q9B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000727();
	this.instance.setTransform(0,0,0.1992,0.1992);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape.setTransform(392.25,260.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape_1.setTransform(392.25,260.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q9A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000730();
	this.instance.setTransform(0,0,0.1888,0.1888);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q8B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000778();
	this.instance.setTransform(0,0,0.142,0.142);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("Eg/8AqoMAAAhVPMB/5AAAMAAABVPg");
	this.shape.setTransform(392.25,260.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q8A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000781();
	this.instance.setTransform(0,0,0.1497,0.1497);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q7B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000759();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q7A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000760();
	this.instance.setTransform(0,0,0.1333,0.1333);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q6B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000740();
	this.instance.setTransform(0,0,0.1674,0.1674);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape_1.setTransform(392.25,260.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q6A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000737();
	this.instance.setTransform(0,0,0.1463,0.1463);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q5B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000765();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q5A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000766();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q4B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000746();
	this.instance.setTransform(0,0,0.165,0.165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape_1.setTransform(392.25,260.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q4A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000743();
	this.instance.setTransform(0,0,0.1599,0.1599);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape_1.setTransform(392.25,260.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q3B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000780();
	this.instance.setTransform(0,0,0.6096,0.6096);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q3A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P10007801();
	this.instance.setTransform(0,0,0.6094,0.6094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q2B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P10007131();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q2A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000713();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q1B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000793();
	this.instance.setTransform(0,0,0.1304,0.1304);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape.setTransform(392.25,260.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape_1.setTransform(392.25,260.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.Q1A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.P1000788();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape.setTransform(392.2581,260.8463,1.3873,1.3641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("Eg/7AqoMAAAhVPMB/3AAAMAAABVPg");
	this.shape_1.setTransform(392.25,260.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,818.5,545.7);


(lib.play1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Play", "normal 400 100px 'Roboto'", "#DDDDDD");
	this.text.textAlign = "center";
	this.text.lineHeight = 135;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(144,43.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C7A89").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape.setTransform(145,85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape_1.setTransform(145.0676,83.6988,1.1379,1.1379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:144,y:43.45}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.1379,scaleY:1.1379,x:143.85,y:36.35}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-13,330,216.1);


(lib.Note10 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Key bunches or any other items exposed is not permitted.", "normal 400 30px 'Roboto'", "#450920");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 426;
	this.text.parent = this;
	this.text.setTransform(242.85,29);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(242.6959,60,0.9333,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(242.6959,60,0.9333,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-5,495.29999999999995,130);


(lib.Note9 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Name tag must be pinned on the top of the left breast pocket.", "normal 400 30px 'Roboto'", "#450920");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 454;
	this.text.parent = this;
	this.text.setTransform(258.05,28.95);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(260,62.4085,1,1.0406);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(260,62.4085,1,1.0406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,530,134.9);


(lib.Note8 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Hairstyle should be short, neat and professional-looking.", "normal 400 30px 'Roboto'", "#450920");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 453;
	this.text.parent = this;
	this.text.setTransform(256.45,28.8);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(257.5807,62.404,0.9905,1.0415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(257.5807,62.404,0.9905,1.0415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5.1,525.1,135);


(lib.Note7 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Cabin bag must be hand-carried or placed on trolley – never sling it on your shoulder or elbow.", "normal 400 30px 'Roboto'", "#450920");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 441;
	this.text.parent = this;
	this.text.setTransform(250.85,29);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(252.6187,81.6005,0.9711,1.36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(252.6187,81.6005,0.9711,1.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-5,514.9,173.2);


(lib.Note6 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("When worn, the jacket must be buttoned, i.e. middle button must always be buttoned, top button is optional and last button to be left unbuttoned.", "normal 400 30px 'Roboto'", "#450920");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 677;
	this.text.parent = this;
	this.text.setTransform(358.6,29);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgzEgJXMBmJAAAIAASvMhmJAAAg");
	this.shape.setTransform(357.2578,81.6,1.093,1.36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgzEAJYIAAyvMBmIAAAIAASvg");
	this.shape_1.setTransform(357.2578,81.6,1.093,1.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,724.5,173.2);


(lib.Note5 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Leather / rubber straps must be black, brown or navy blue.", "normal 400 30px 'Roboto'", "#16262E");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 468;
	this.text.parent = this;
	this.text.setTransform(263.95,29);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(262.3849,60,1.0093,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(262.3849,60,1.0093,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,534.8,130);


(lib.Note4 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("The necktie must be double knotted and properly positioned.", "normal 400 30px 'Roboto'", "#16262E");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 460;
	this.text.parent = this;
	this.text.setTransform(260,29);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(260,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(260,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,530,130);


(lib.Note3 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Colours are limited to dark brown or black and the result must be subtle and close to the original hair colour.", "normal 400 30px 'Roboto'", "#16262E");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 571;
	this.text.parent = this;
	this.text.setTransform(315.65,30.95);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("Eg1YgMvMBqxAAAIAAZfMhqxAAAg");
	this.shape.setTransform(317.651,81.675,0.9297,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg1YAMwIAA5fMBqxAAAIAAZfg");
	this.shape_1.setTransform(317.651,81.675,0.9297,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.9,645.4,173.20000000000002);


(lib.Note2 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Fanciful and avant-garde belt / buckles are not permitted.", "normal 400 30px 'Roboto'", "#16262E");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 421;
	this.text.parent = this;
	this.text.setTransform(240.45,29);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(242.6959,60,0.9333,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(242.6959,60,0.9333,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-5,495.29999999999995,130);


(lib.Note1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Staff ID must not be worn on a strap hung around the neck.", "normal 400 30px 'Roboto'", "#16262E");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 464;
	this.text.parent = this;
	this.text.setTransform(258.05,29.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(10,1,1).p("EgongJXMBRPAAAIAASvMhRPAAAg");
	this.shape.setTransform(260,62.537,1,1.0386);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgonAJYIAAyvMBRPAAAIAASvg");
	this.shape_1.setTransform(260,62.537,1,1.0386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.8,530,134.70000000000002);


(lib.Next1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Next", "normal 400 100px 'Roboto'", "#3C7A89");
	this.text.textAlign = "center";
	this.text.lineHeight = 135;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(139.25,75.45,0.6896,0.69);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape.setTransform(140.0235,102.831,0.6896,0.69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape_1.setTransform(143.3892,104.3762,0.7563,0.7574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:0.6896,scaleY:0.69,x:139.25,y:75.45,color:"#3C7A89"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:0.7563,scaleY:0.7574,x:142.45,y:74.1,color:"#DDDDDD"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.8,40,219.3,145.1);


(lib.Forms = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E45879").s().p("A0TH0IAAvnMAonAAAIAAPng");
	this.shape.setTransform(130,50);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,100);


(lib.Cross1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.multiply();
	this.instance.setTransform(54.75,29.75,0.3516,0.3516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,29.8,180,180);


(lib.Back1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Back", "normal 400 100px 'Roboto'", "#3C7A89");
	this.text.textAlign = "center";
	this.text.lineHeight = 135;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(99.5,74.9,0.6896,0.6899);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape.setTransform(100.4297,102.4001,0.6896,0.6899);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16262E").s().p("AukNSQjWAAiYiYQiXiXAAjWIAAqZQAAjWCXiXQCYiYDWAAIdJAAQDWAACYCYQCXCXAADWIAAKZQAADWiXCXQiYCYjWAAg");
	this.shape_1.setTransform(100.3432,101.6555,0.7565,0.7569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:0.6896,scaleY:0.6899,x:99.5,y:74.9,color:"#3C7A89"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:0.7565,scaleY:0.7569,x:99.45,y:71.5,color:"#DDDDDD"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,37.3,219.3,145.10000000000002);


// stage content:
(lib.GroomingCampaign2021Game2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,12];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.Tick1.visible = false;
		
		this.Play1.addEventListener("click", play1.bind(this));
		
		function play1()
		{
			this.Play1.removeEventListener("click", play1.bind(this));
			this.gotoAndStop(1);
		}
		
		this.Start1.addEventListener("click", start1.bind(this));
		
		function start1()
		{
			this.Start1.removeEventListener("click", start1.bind(this));
			this.gotoAndStop(2)
		}
		
		this.Retry1.addEventListener("click", retry1.bind(this));
		
		function retry1()
		{
			this.Retry1.removeEventListener("click", retry1.bind(this));
			this.gotoAndStop(1)
		}
		
		this.Next1.addEventListener("click", next1.bind(this));
		
		function next1()
		{
			this.Next1.removeEventListener("click", next1.bind(this));
			this.gotoAndStop(15)
		}
		
		this.Next2.addEventListener("click", next2.bind(this));
		
		function next2()
		{
			this.Next2.removeEventListener("click", next2.bind(this));
			this.gotoAndStop(16)
		}
		
		this.Next3.addEventListener("click", next3.bind(this));
		
		function next3()
		{
			this.Next3.removeEventListener("click", next3.bind(this));
			this.gotoAndStop(17)
		}
		
		this.Next4.addEventListener("click", next4.bind(this));
		
		function next4()
		{
			this.Next4.removeEventListener("click", next4.bind(this));
			this.gotoAndStop(18)
		}
		
		this.Next5.addEventListener("click", next5.bind(this));
		
		function next5()
		{
			this.Next5.removeEventListener("click", next5.bind(this));
			this.gotoAndStop(19)
		}
		
		this.Next6.addEventListener("click", next6.bind(this));
		
		function next6()
		{
			this.Next6.removeEventListener("click", next6.bind(this));
			this.gotoAndStop(20)
		}
		
		this.Next7.addEventListener("click", next7.bind(this));
		
		function next7()
		{
			this.Next7.removeEventListener("click", next7.bind(this));
			this.gotoAndStop(21)
		}
		
		this.Next8.addEventListener("click", next8.bind(this));
		
		function next8()
		{
			this.Next8.removeEventListener("click", next8.bind(this));
			this.gotoAndStop(22)
		}
		
		this.Next9.addEventListener("click", next9.bind(this));
		
		function next9()
		{
			this.Next9.removeEventListener("click", next9.bind(this));
			this.gotoAndStop(23)
		}
		
		this.Next10.addEventListener("click", next10.bind(this));
		
		function next10()
		{
			this.Next10.removeEventListener("click", next10.bind(this));
			this.gotoAndStop(12)
		}
		
		this.Back1.addEventListener("click", back1.bind(this));
		
		function back1()
		{
			this.Back1.removeEventListener("click", back1.bind(this));
			this.gotoAndStop(12)
		}
		
		this.Back2.addEventListener("click", back2.bind(this));
		
		function back2()
		{
			this.Back2.removeEventListener("click", back2.bind(this));
			this.gotoAndStop(14)
		}
		
		this.Back3.addEventListener("click", back3.bind(this));
		
		function back3()
		{
			this.Back3.removeEventListener("click", back3.bind(this));
			this.gotoAndStop(15)
		}
		
		this.Back4.addEventListener("click", back4.bind(this));
		
		function back4()
		{
			this.Back4.removeEventListener("click", back4.bind(this));
			this.gotoAndStop(16)
		}
		
		this.Back5.addEventListener("click", back5.bind(this));
		
		function back5()
		{
			this.Back5.removeEventListener("click", back5.bind(this));
			this.gotoAndStop(17)
		}
		
		this.Back6.addEventListener("click", back6.bind(this));
		
		function back6()
		{
			this.Back6.removeEventListener("click", back6.bind(this));
			this.gotoAndStop(18)
		}
		
		this.Back7.addEventListener("click", back7.bind(this));
		
		function back7()
		{
			this.Back7.removeEventListener("click", back7.bind(this));
			this.gotoAndStop(19)
		}
		
		this.Back8.addEventListener("click", back8.bind(this));
		
		function back8()
		{
			this.Back8.removeEventListener("click", back8.bind(this));
			this.gotoAndStop(20)
		}
		
		this.Back9.addEventListener("click", back9.bind(this));
		
		function back9()
		{
			this.Back9.removeEventListener("click", back9.bind(this));
			this.gotoAndStop(21)
		}
		
		this.Back10.addEventListener("click", back10.bind(this));
		
		function back10()
		{
			this.Back10.removeEventListener("click", back10.bind(this));
			this.gotoAndStop(22)
		}
		
		this.Review1.addEventListener("click", review1.bind(this));
		
		function review1()
		{
			this.Review1.removeEventListener("click", review1.bind(this));
			this.gotoAndStop(14)
		}
	}
	this.frame_2 = function() {
		var count = 0;
		this.total.text = 0;
		var count1 = 0;
		this.total1.text = 0;
		
		this.Q1A.visible = true;
		this.Q1B.visible = true;
		this.Q2A.visible = true;
		this.Q2B.visible = true;
		this.Q3A.visible = true;
		this.Q3B.visible = true;
		this.Q4A.visible = true;
		this.Q4B.visible = true;
		this.Q5A.visible = true;
		this.Q5B.visible = true;
		this.Q6A.visible = true;
		this.Q6B.visible = true;
		this.Q7A.visible = true;
		this.Q7B.visible = true;
		this.Q8A.visible = true;
		this.Q8B.visible = true;
		this.Q9A.visible = true;
		this.Q9B.visible = true;
		this.Q10A.visible = true;
		this.Q10B.visible = true;
		
		this.Tick1.visible = false;
		this.Tick2.visible = false;
		this.Tick3.visible = false;
		this.Tick4.visible = false;
		this.Tick5.visible = false;
		this.Tick6.visible = false;
		this.Tick7.visible = false;
		this.Tick8.visible = false;
		this.Tick9.visible = false;
		this.Tick10.visible = false;
		
		this.Cross1.visible = false;
		this.Cross2.visible = false;
		this.Cross3.visible = false;
		this.Cross4.visible = false;
		this.Cross5.visible = false;
		this.Cross6.visible = false;
		this.Cross7.visible = false;
		this.Cross8.visible = false;
		this.Cross9.visible = false;
		this.Cross10.visible = false;
		
		this.Note1.visible = false;
		this.Note2.visible = false;
		this.Note3.visible = false;
		this.Note4.visible = false;
		this.Note5.visible = false;
		this.Note6.visible = false;
		this.Note7.visible = false;
		this.Note8.visible = false;
		this.Note9.visible = false;
		this.Note10.visible = false;
		
		this.Back1.visible = true;
		this.Back2.visible = true;
		this.Back3.visible = true;
		this.Back4.visible = true;
		this.Back5.visible = true;
		this.Back6.visible = true;
		this.Back7.visible = true;
		this.Back8.visible = true;
		this.Back9.visible = true;
		this.Back10.visible = true;
		
		this.Next1.visible = true;
		this.Next2.visible = true;
		this.Next3.visible = true;
		this.Next4.visible = true;
		this.Next5.visible = true;
		this.Next6.visible = true;
		this.Next7.visible = true;
		this.Next8.visible = true;
		this.Next9.visible = true;
		this.Next10.visible = true;
		
		
		
		this.Q1A.addEventListener("click", question1a.bind(this));
		
		function question1a()
		{
			this.Q1A.removeEventListener("click", question1a.bind(this));
			this.gotoAndStop(3)
			this.Q1A.visible = false
			this.Q1B.visible = false;
			this.Tick1.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q1B.addEventListener("click", question1b.bind(this));
		
		function question1b()
		{
			this.Q1B.removeEventListener("click", question1b.bind(this));
			this.gotoAndStop(3)
			this.Q1B.visible = false;
			this.Q1A.visible = false;
			this.Cross1.visible = true;
			this.Note1.visible = true;
		}
		
		this.Q2A.addEventListener("click", question2a.bind(this));
		
		function question2a()
		{
			this.Q2A.removeEventListener("click", question2a.bind(this));
			this.gotoAndStop(4)
			this.Q2A.visible = false;
			this.Q2B.visible = false;
			this.Tick2.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q2B.addEventListener("click", question2b.bind(this));
		
		function question2b()
		{
			this.Q2B.removeEventListener("click", question2b.bind(this));
			this.gotoAndStop(4)
			this.Q2B.visible = false;
			this.Q2A.visible = false;
			this.Cross2.visible = true;
			this.Note2.visible = true;
		
		}
		
		this.Q3A.addEventListener("click", question3a.bind(this));
		
		function question3a()
		{
			this.Q3A.removeEventListener("click", question3a.bind(this));
			this.gotoAndStop(5)
			this.Q3A.visible = false;
			this.Q3B.visible = false;
			this.Cross3.visible = true;
			this.Note3.visible = true;
		}
		
		this.Q3B.addEventListener("click", question3b.bind(this));
		
		function question3b()
		{
			this.Q3B.removeEventListener("click", question3b.bind(this));
			this.gotoAndStop(5)
			this.Q3B.visible = false;
			this.Q3A.visible = false;
			this.Tick3.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q4A.addEventListener("click", question4a.bind(this));
		
		function question4a()
		{
			this.Q4A.removeEventListener("click", question4a.bind(this));
			this.gotoAndStop(6)
			this.Q4A.visible = false;
			this.Q4B.visible = false;
			this.Tick4.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q4B.addEventListener("click", question4b.bind(this));
		
		function question4b()
		{
			this.Q4B.removeEventListener("click", question4b.bind(this));
			this.gotoAndStop(6)
			this.Q4B.visible = false;
			this.Q4A.visible = false;
			this.Cross4.visible = true;
			this.Note4.visible = true;
		}
		
		this.Q5A.addEventListener("click", question5a.bind(this));
		
		function question5a()
		{
			this.Q5A.removeEventListener("click", question5a.bind(this));
			this.gotoAndStop(7)
			this.Q5A.visible = false;
			this.Q5B.visible = false;
			this.Cross5.visible = true;
			this.Note5.visible = true;
		}
		
		this.Q5B.addEventListener("click", question5b.bind(this));
		
		function question5b()
		{
			this.Q5B.removeEventListener("click", question5b.bind(this));
			this.gotoAndStop(7)
			this.Q5B.visible = false;
			this.Q5A.visible = false;
			this.Tick5.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q6A.addEventListener("click", question6a.bind(this));
		
		function question6a()
		{
			this.Q6A.removeEventListener("click", question6a.bind(this));
			this.gotoAndStop(8)
			this.Q6A.visible = false;
			this.Q6B.visible = false;
			this.Cross6.visible = true;
			this.Note6.visible = true;
		}
		
		this.Q6B.addEventListener("click", question6b.bind(this));
		
		function question6b()
		{
			this.Q6B.removeEventListener("click", question6b.bind(this));
			this.gotoAndStop(8)
			this.Q6B.visible = false;
			this.Q6A.visible = false;
			this.Tick6.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q7A.addEventListener("click", question7a.bind(this));
		
		function question7a()
		{
			this.Q7A.removeEventListener("click", question7a.bind(this));
			this.gotoAndStop(9)
			this.Q7A.visible = false;
			this.Q7B.visible = false;
			this.Tick7.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q7B.addEventListener("click", question7b.bind(this));
		
		function question7b()
		{
			this.Q7B.removeEventListener("click", question7b.bind(this));
			this.gotoAndStop(9)
			this.Q7B.visible = false;
			this.Q7A.visible = false;
			this.Cross7.visible = true;
			this.Note7.visible = true;
		}
		
		this.Q8A.addEventListener("click", question8a.bind(this));
		
		function question8a()
		{
			this.Q8A.removeEventListener("click", question8a.bind(this));
			this.gotoAndStop(10)
			this.Q8A.visible = false;
			this.Q8B.visible = false;
			this.Cross8.visible = true;
			this.Note8.visible = true;
		}
		
		this.Q8B.addEventListener("click", question8b.bind(this));
		
		function question8b()
		{
			this.Q8B.removeEventListener("click", question8b.bind(this));
			this.gotoAndStop(10)
			this.Q8B.visible = false;
			this.Q8A.visible = false;
			this.Tick8.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q9A.addEventListener("click", question9a.bind(this));
		
		function question9a()
		{
			this.Q9A.removeEventListener("click", question9a.bind(this));
			this.gotoAndStop(11)
			this.Q9A.visible = false;
			this.Q9B.visible = false;
			this.Tick9.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
		}
		
		this.Q9B.addEventListener("click", question9b.bind(this));
		
		function question9b()
		{
			this.Q9B.removeEventListener("click", question9b.bind(this));
			this.gotoAndStop(11)
			this.Q9B.visible = false;
			this.Q9A.visible = false;
			this.Cross9.visible = true;
			this.Note9.visible = true;
		}
		
		this.Q10A.addEventListener("click", question10a.bind(this));
		
		function question10a()
		{
			this.Q10A.removeEventListener("click", question10a.bind(this));
			this.gotoAndStop(12)
			this.Q10A.visible = false;
			this.Q10B.visible = false;
			this.Tick10.visible = true;
			count=count+1;
			this.total.text=count;
			count1=count1+1;
			this.total1.text=count1;
			this.pause();
		}
		
		this.Q10B.addEventListener("click", question10b.bind(this));
		
		function question10b()
		{
			this.Q10B.removeEventListener("click", question10b.bind(this));
			this.gotoAndStop(12)
			this.Q10B.visible = false;
			this.Q10A.visible = false;
			this.Cross10.visible = true;
			this.Note10.visible = true;
			this.pause();
		}
		
		//count
		this.count = 0;
		this.totalToGo = 10;
		this.check = function (e) {
			if (!e.currentTarget.selected) {
				this.count++;
				e.currentTarget.selected = true;
			}
			if (this.count == this.totalToGo) {
				this.gotoAndStop(12)
				this.pause();
			}
		};
		
		this.Q1A.on("click", this.check, this);
		this.Q2B.on("click", this.check, this);
		this.Q3A.on("click", this.check, this);
		this.Q4A.on("click", this.check, this);
		this.Q5B.on("click", this.check, this);
		this.Q6B.on("click", this.check, this);
		this.Q7A.on("click", this.check, this);
		this.Q8B.on("click", this.check, this);
		this.Q9A.on("click", this.check, this);
		this.Q10B.on("click", this.check, this);
		//count
		
		//count1
		this.count1 = 0;
		this.totalToGo1 = 10;
		this.check = function (e) {
			if (!e.currentTarget.selected) {
				this.count1++;
				e.currentTarget.selected = true;
			}
			if (this.count1 == this.totalToGo1){
				this.pause();
			}
		};
		
		this.Q1A.on("click", this.check, this);
		this.Q2B.on("click", this.check, this);
		this.Q3A.on("click", this.check, this);
		this.Q4A.on("click", this.check, this);
		this.Q5B.on("click", this.check, this);
		this.Q6B.on("click", this.check, this);
		this.Q7A.on("click", this.check, this);
		this.Q8B.on("click", this.check, this);
		this.Q9A.on("click", this.check, this);
		this.Q10B.on("click", this.check, this);
		//count1
		
		
		//timer
		var that = this;
		this.initialMinutes = 2; // set time here
		this.totalTime = 0;
		this.currentTime = 0;
		this.interval = 0;
		
		this.start = function () {
			that.startTimer(that.updateCallBack, that.endCallback);
		};
		
		this.pause = function () {
			that.pauseTimer(that.pauseCallback);
		}
		
		this.updateCallBack = function () {
			that.setText();
		};
		
		this.endCallback = function () {
		
		};
		
		this.pauseCallback = function () {
			console.log("paused");
		};
		
		this.startTimer = function (updateCallback, endCallback) {
			clearInterval(that.interval);
			that.totalTime = that.minutesToMilliseconds(that.initialMinutes);
			that.currentTime = that.totalTime;
			that.setText();
			that.setTime(updateCallback, endCallback);
		};
		
		this.pauseTimer = function (callback) {
			clearInterval(that.interval);
			that.totalTime = that.currentTime;
			callback();
		};
		
		
		this.setTime = function (updateCallback, endCallback) {
			that.interval = setInterval(function () {
				that.currentTime -= 1000;
				updateCallback();
		
				if (that.currentTime == 0) {
					clearInterval(that.interval);
					that.gotoAndStop(13);
					endCallback();
				}
		
			}, 1000);
		
		};
		
		this.setText = function () {
			var time = that.timeCode(that.currentTime);
			that.timeText.text = time.minutes + ":" + time.seconds;
		};
		
		this.minutesToMilliseconds = function (minutes) {
			return 1000 * 60 * minutes;
		};
		
		this.timeCode = function (milliseconds) {
			var seconds = Math.floor((milliseconds / 1000) % 60);
			var strSeconds = (seconds < 10) ? ("0" + String(seconds)) : String(seconds);
			var minutes = Math.round(Math.floor((milliseconds / 1000) / 60));
			var strMinutes = (minutes < 10) ? ("0" + String(minutes)) : String(minutes);
			return {seconds: strSeconds, minutes: strMinutes};
		};
		
		this.start();
		//timer
	}
	this.frame_12 = function() {
		this.Forms.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage()
		{
		    window.open("https://forms.office.com/r/7WV9N5tkad");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(10).call(this.frame_12).wait(12));

	// Timer
	this.timeText = new cjs.Text("0", "normal 400 79px 'Roboto'", "#DDDDDD");
	this.timeText.name = "timeText";
	this.timeText.textAlign = "center";
	this.timeText.lineHeight = 107;
	this.timeText.lineWidth = 142;
	this.timeText.parent = this;
	this.timeText.setTransform(705.0302,94.45,0.9885,0.9885);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.timeText);
	}

	this.instance = new lib.clock();
	this.instance.setTransform(432,53,0.2736,0.2736);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(221,221,221,0.298)").s().p("A0TH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMAonAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape.setTransform(620.1811,125.6828,1.2167,0.9733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance},{t:this.timeText}]},2).to({state:[]},10).wait(12));

	// Score
	this.instance_1 = new lib.check();
	this.instance_1.setTransform(1100,53,0.2736,0.2736);

	this.text = new cjs.Text("/", "normal 400 80px 'Roboto'", "#DDDDDD");
	this.text.textAlign = "center";
	this.text.lineHeight = 91;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(1339.4415,89.75,0.9885,0.9885);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.total = new cjs.Text("", "normal 400 80px 'Roboto'", "#DDDDDD");
	this.total.name = "total";
	this.total.textAlign = "center";
	this.total.lineHeight = 91;
	this.total.lineWidth = 88;
	this.total.parent = this;
	this.total.setTransform(1286.3048,89.35,0.9885,0.9885);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.total);
	}

	this.text_1 = new cjs.Text("10", "normal 400 80px 'Roboto'", "#DDDDDD");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 91;
	this.text_1.lineWidth = 105;
	this.text_1.parent = this;
	this.text_1.setTransform(1413.0023,89.45,0.9885,0.9885);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(221,221,221,0.298)").s().p("A0TH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMAonAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_1.setTransform(1279.9811,121.6828,1.2167,0.9733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.total},{t:this.text},{t:this.instance_1}]},2).to({state:[]},10).wait(12));

	// Or
	this.text_2 = new cjs.Text("OR", "normal 400 65px 'Roboto'", "#DDDDDD");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 88;
	this.text_2.lineWidth = 155;
	this.text_2.parent = this;
	this.text_2.setTransform(963,499.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_2);
	}
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(2).to({_off:false},0).to({_off:true},10).wait(2).to({_off:false},0).wait(10));

	// Scene
	this.Q1B = new lib.Q1B();
	this.Q1B.name = "Q1B";
	this.Q1B.setTransform(1460.4,548.9,1,1,0,0,0,388.4,258.9);
	new cjs.ButtonHelper(this.Q1B, 0, 1, 1);

	this.Q1A = new lib.Q1A();
	this.Q1A.name = "Q1A";
	this.Q1A.setTransform(449.2,549.5,1,1,0,0,0,389.2,259.5);
	new cjs.ButtonHelper(this.Q1A, 0, 1, 1);

	this.Q2B = new lib.Q2B();
	this.Q2B.name = "Q2B";
	this.Q2B.setTransform(1460.1,548.6,1,1,0,0,0,388.1,258.6);
	new cjs.ButtonHelper(this.Q2B, 0, 1, 1);

	this.Q2A = new lib.Q2A();
	this.Q2A.name = "Q2A";
	this.Q2A.setTransform(448.1,548.8,1,1,0,0,0,388.1,258.8);
	new cjs.ButtonHelper(this.Q2A, 0, 1, 1);

	this.Q3B = new lib.Q3B();
	this.Q3B.name = "Q3B";
	this.Q3B.setTransform(1459.9,548.6,1,1,0,0,0,387.9,258.6);
	new cjs.ButtonHelper(this.Q3B, 0, 1, 1);

	this.Q3A = new lib.Q3A();
	this.Q3A.name = "Q3A";
	this.Q3A.setTransform(447.6,548.6,1,1,0,0,0,387.6,258.6);
	new cjs.ButtonHelper(this.Q3A, 0, 1, 1);

	this.Q4B = new lib.Q4B();
	this.Q4B.name = "Q4B";
	this.Q4B.setTransform(1460.4,548.9,1,1,0,0,0,388.4,258.9);
	new cjs.ButtonHelper(this.Q4B, 0, 1, 1);

	this.Q4A = new lib.Q4A();
	this.Q4A.name = "Q4A";
	this.Q4A.setTransform(449.4,549.7,1,1,0,0,0,389.4,259.7);
	new cjs.ButtonHelper(this.Q4A, 0, 1, 1);

	this.Q5B = new lib.Q5B();
	this.Q5B.name = "Q5B";
	this.Q5B.setTransform(1461.9,550.2,1,1,0,0,0,389.9,260.2);
	new cjs.ButtonHelper(this.Q5B, 0, 1, 1);

	this.Q5A = new lib.Q5A();
	this.Q5A.name = "Q5A";
	this.Q5A.setTransform(449.2,549.5,1,1,0,0,0,389.2,259.5);
	new cjs.ButtonHelper(this.Q5A, 0, 1, 1);

	this.Q6B = new lib.Q6B();
	this.Q6B.name = "Q6B";
	this.Q6B.setTransform(1462.4,550.3,1,1,0,0,0,390.4,260.3);
	new cjs.ButtonHelper(this.Q6B, 0, 1, 1);

	this.Q6A = new lib.Q6A();
	this.Q6A.name = "Q6A";
	this.Q6A.setTransform(450.8,550.8,1,1,0,0,0,390.8,260.8);
	new cjs.ButtonHelper(this.Q6A, 0, 1, 1);

	this.Q7B = new lib.Q7B();
	this.Q7B.name = "Q7B";
	this.Q7B.setTransform(1462.8,550.6,1,1,0,0,0,390.8,260.6);
	new cjs.ButtonHelper(this.Q7B, 0, 1, 1);

	this.Q7A = new lib.Q7A();
	this.Q7A.name = "Q7A";
	this.Q7A.setTransform(450.3,550.2,1,1,0,0,0,390.3,260.2);
	new cjs.ButtonHelper(this.Q7A, 0, 1, 1);

	this.Q8B = new lib.Q8B();
	this.Q8B.name = "Q8B";
	this.Q8B.setTransform(1462.2,550.5,1,1,0,0,0,390.2,260.5);
	new cjs.ButtonHelper(this.Q8B, 0, 1, 1);

	this.Q8A = new lib.Q8A();
	this.Q8A.name = "Q8A";
	this.Q8A.setTransform(450.4,550.3,1,1,0,0,0,390.4,260.3);
	new cjs.ButtonHelper(this.Q8A, 0, 1, 1);

	this.Q9B = new lib.Q9B();
	this.Q9B.name = "Q9B";
	this.Q9B.setTransform(1463.1,550.8,1,1,0,0,0,391.1,260.8);
	new cjs.ButtonHelper(this.Q9B, 0, 1, 1);

	this.Q9A = new lib.Q9A();
	this.Q9A.name = "Q9A";
	this.Q9A.setTransform(450.6,550.4,1,1,0,0,0,390.6,260.4);
	new cjs.ButtonHelper(this.Q9A, 0, 1, 1);

	this.Q10A = new lib.Q10A();
	this.Q10A.name = "Q10A";
	this.Q10A.setTransform(450.5,550.5,1,1,0,0,0,390.5,260.5);
	new cjs.ButtonHelper(this.Q10A, 0, 1, 1);

	this.Q10B = new lib.Q10B();
	this.Q10B.name = "Q10B";
	this.Q10B.setTransform(1463.1,550.8,1,1,0,0,0,391.1,260.8);
	new cjs.ButtonHelper(this.Q10B, 0, 1, 1);

	this.Review1 = new lib.Review1();
	this.Review1.name = "Review1";
	this.Review1.setTransform(959.5,666.7,1,1,0,0,0,403.1,86.7);
	new cjs.ButtonHelper(this.Review1, 0, 1, 1);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(573,842.5,0.5,0.5);

	this.Forms = new lib.Forms();
	this.Forms.name = "Forms";
	this.Forms.setTransform(703,830,1,1,0,0,0,130,50);
	new cjs.ButtonHelper(this.Forms, 0, 1, 2, false, new lib.Forms(), 3);

	this.text_3 = new cjs.Text("/", "normal 400 200px 'Roboto'", "#DDDDDD");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 250;
	this.text_3.lineWidth = 103;
	this.text_3.parent = this;
	this.text_3.setTransform(952.9178,316.2,0.8165,0.8165);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_3);
	}

	this.total1 = new cjs.Text("", "normal 400 200px 'Roboto'", "#DDDDDD");
	this.total1.name = "total1";
	this.total1.textAlign = "center";
	this.total1.lineHeight = 250;
	this.total1.lineWidth = 202;
	this.total1.parent = this;
	this.total1.setTransform(824.1337,317.25,0.8165,0.8165);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.total1);
	}

	this.text_4 = new cjs.Text("10", "normal 400 200px 'Roboto'", "#DDDDDD");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 265;
	this.text_4.lineWidth = 235;
	this.text_4.parent = this;
	this.text_4.setTransform(1087.3728,316.45,0.8165,0.8165);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Your total score is", "normal 400 80px 'Roboto'", "#DDDDDD");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 91;
	this.text_5.lineWidth = 1060;
	this.text_5.parent = this;
	this.text_5.setTransform(963,91);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Please click here to submit your particulars.\nYou may close the game once you have done so.", "normal 400 60px 'Roboto'", "#DDDDDD");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 70;
	this.text_6.lineWidth = 1298;
	this.text_6.parent = this;
	this.text_6.setTransform(962.6,786.95);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_6);
	}

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(680.15,251,0.5,0.5);

	this.Retry1 = new lib.Retry1();
	this.Retry1.name = "Retry1";
	this.Retry1.setTransform(964,762.3,1,1,0,0,0,145,96);
	new cjs.ButtonHelper(this.Retry1, 0, 1, 1);

	this.Tick1 = new lib.Tick1("synched",0);
	this.Tick1.name = "Tick1";
	this.Tick1.setTransform(773,758,1,1,0,0,0,113.8,113.8);

	this.Note1 = new lib.Note1("synched",0);
	this.Note1.name = "Note1";
	this.Note1.setTransform(1290,796.3,1,1,0,0,0,260,40.2);

	this.Cross1 = new lib.Cross1("synched",0);
	this.Cross1.name = "Cross1";
	this.Cross1.setTransform(1780.05,758.05,1,1,0,0,0,113.8,113.8);

	this.Back1 = new lib.Back1();
	this.Back1.name = "Back1";
	this.Back1.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back1, 0, 1, 1);

	this.Next1 = new lib.Next1();
	this.Next1.name = "Next1";
	this.Next1.setTransform(1779,992.05,0.8663,0.8663,0,0,0,140.2,111);
	new cjs.ButtonHelper(this.Next1, 0, 1, 1);

	this.instance_4 = new lib.P1000793();
	this.instance_4.setTransform(1071.55,290.2,0.1304,0.1304);

	this.instance_5 = new lib.CachedBmp_19();
	this.instance_5.setTransform(1054.55,278.2,0.5,0.5);

	this.instance_6 = new lib.P1000788();
	this.instance_6.setTransform(59.75,290.2,0.1305,0.1305);

	this.instance_7 = new lib.CachedBmp_22();
	this.instance_7.setTransform(42.75,278.2,0.5,0.5);

	this.Cross2 = new lib.Cross1("synched",0);
	this.Cross2.name = "Cross2";
	this.Cross2.setTransform(1811.05,764.05,1,1,0,0,0,144.8,119.8);

	this.Tick2 = new lib.Tick1("synched",0);
	this.Tick2.name = "Tick2";
	this.Tick2.setTransform(809,764,1,1,0,0,0,149.8,119.8);

	this.Note2 = new lib.Note2("synched",0);
	this.Note2.name = "Note2";
	this.Note2.setTransform(1358.9,818,1,1,0,0,0,326.9,60);

	this.Back2 = new lib.Back1();
	this.Back2.name = "Back2";
	this.Back2.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back2, 0, 1, 1);

	this.Next2 = new lib.Next1();
	this.Next2.name = "Next2";
	this.Next2.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next2, 0, 1, 1);

	this.instance_8 = new lib.P10007131();
	this.instance_8.setTransform(1072.7,290.1,0.1305,0.1305);

	this.instance_9 = new lib.P1000713();
	this.instance_9.setTransform(59.85,290.25,0.1305,0.1305);

	this.instance_10 = new lib.CachedBmp_22();
	this.instance_10.setTransform(42.85,278.25,0.5,0.5);

	this.Cross3 = new lib.Cross1("synched",0);
	this.Cross3.name = "Cross3";
	this.Cross3.setTransform(778.05,758.05,1,1,0,0,0,113.8,113.8);

	this.Tick3 = new lib.Tick1("synched",0);
	this.Tick3.name = "Tick3";
	this.Tick3.setTransform(1775,758,1,1,0,0,0,113.8,113.8);

	this.Note3 = new lib.Note3("synched",0);
	this.Note3.name = "Note3";
	this.Note3.setTransform(363.75,821,1,1,0,0,0,341.7,83.4);

	this.Back3 = new lib.Back1();
	this.Back3.name = "Back3";
	this.Back3.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back3, 0, 1, 1);

	this.Next3 = new lib.Next1();
	this.Next3.name = "Next3";
	this.Next3.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next3, 0, 1, 1);

	this.instance_11 = new lib.P1000780();
	this.instance_11.setTransform(1074.15,290.9,0.6085,0.6085);

	this.instance_12 = new lib.P10007801();
	this.instance_12.setTransform(61.1,290.85,0.6085,0.6085);

	this.Note4 = new lib.Note4("synched",0);
	this.Note4.name = "Note4";
	this.Note4.setTransform(1290,818.15,1,1,0,0,0,260,60);

	this.Cross4 = new lib.Cross1("synched",0);
	this.Cross4.name = "Cross4";
	this.Cross4.setTransform(1780.05,758.05,1,1,0,0,0,113.8,113.8);

	this.Tick4 = new lib.Tick1("synched",0);
	this.Tick4.name = "Tick4";
	this.Tick4.setTransform(773,758,1,1,0,0,0,113.8,113.8);

	this.Back4 = new lib.Back1();
	this.Back4.name = "Back4";
	this.Back4.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back4, 0, 1, 1);

	this.Next4 = new lib.Next1();
	this.Next4.name = "Next4";
	this.Next4.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next4, 0, 1, 1);

	this.instance_13 = new lib.P1000746();
	this.instance_13.setTransform(1073.25,290.2,0.165,0.165);

	this.instance_14 = new lib.P1000743();
	this.instance_14.setTransform(60.25,290.2,0.1599,0.1599);

	this.Cross5 = new lib.Cross1("synched",0);
	this.Cross5.name = "Cross5";
	this.Cross5.setTransform(809.05,764.05,1,1,0,0,0,144.8,119.8);

	this.Tick5 = new lib.Tick1("synched",0);
	this.Tick5.name = "Tick5";
	this.Tick5.setTransform(1811,764,1,1,0,0,0,149.8,119.8);

	this.Note5 = new lib.Note5("synched",0);
	this.Note5.name = "Note5";
	this.Note5.setTransform(289.55,818,1,1,0,0,0,262.4,60);

	this.Back5 = new lib.Back1();
	this.Back5.name = "Back5";
	this.Back5.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back5, 0, 1, 1);

	this.Next5 = new lib.Next1();
	this.Next5.name = "Next5";
	this.Next5.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next5, 0, 1, 1);

	this.instance_15 = new lib.P1000766();
	this.instance_15.setTransform(59.65,290.2,0.1305,0.1305);

	this.instance_16 = new lib.P1000765();
	this.instance_16.setTransform(1073.75,290.2,0.1305,0.1305);

	this.Cross6 = new lib.Cross1("synched",0);
	this.Cross6.name = "Cross6";
	this.Cross6.setTransform(809.05,764.05,1,1,0,0,0,144.8,119.8);

	this.Note6 = new lib.Note6("synched",0);
	this.Note6.name = "Note6";
	this.Note6.setTransform(346.95,792.3,1,1,0,0,0,326.9,60);

	this.Tick6 = new lib.Tick1("synched",0);
	this.Tick6.name = "Tick6";
	this.Tick6.setTransform(1811,764,1,1,0,0,0,149.8,119.8);

	this.Back6 = new lib.Back1();
	this.Back6.name = "Back6";
	this.Back6.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back6, 0, 1, 1);

	this.Next6 = new lib.Next1();
	this.Next6.name = "Next6";
	this.Next6.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next6, 0, 1, 1);

	this.instance_17 = new lib.P1000737();
	this.instance_17.setTransform(59.75,290.2,0.1463,0.1463);

	this.instance_18 = new lib.P1000740();
	this.instance_18.setTransform(1074.25,290.2,0.1674,0.1674);

	this.Note7 = new lib.Note7("synched",0);
	this.Note7.name = "Note7";
	this.Note7.setTransform(1290,798.15,1,1,0,0,0,260,60);

	this.Cross7 = new lib.Cross1("synched",0);
	this.Cross7.name = "Cross7";
	this.Cross7.setTransform(1780.05,758.05,1,1,0,0,0,113.8,113.8);

	this.Tick7 = new lib.Tick1("synched",0);
	this.Tick7.name = "Tick7";
	this.Tick7.setTransform(773,758,1,1,0,0,0,113.8,113.8);

	this.Back7 = new lib.Back1();
	this.Back7.name = "Back7";
	this.Back7.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back7, 0, 1, 1);

	this.Next7 = new lib.Next1();
	this.Next7.name = "Next7";
	this.Next7.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next7, 0, 1, 1);

	this.instance_19 = new lib.P1000760();
	this.instance_19.setTransform(59.75,290.2,0.1333,0.1333);

	this.instance_20 = new lib.P1000759();
	this.instance_20.setTransform(1074.75,290.2,0.1305,0.1305);

	this.Note8 = new lib.Note8("synched",0);
	this.Note8.name = "Note8";
	this.Note8.setTransform(346.95,839.3,1,1,0,0,0,326.9,82.8);

	this.Cross8 = new lib.Cross1("synched",0);
	this.Cross8.name = "Cross8";
	this.Cross8.setTransform(809.05,764.05,1,1,0,0,0,144.8,119.8);

	this.Tick8 = new lib.Tick1("synched",0);
	this.Tick8.name = "Tick8";
	this.Tick8.setTransform(1811,764,1,1,0,0,0,149.8,119.8);

	this.Back8 = new lib.Back1();
	this.Back8.name = "Back8";
	this.Back8.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back8, 0, 1, 1);

	this.Next8 = new lib.Next1();
	this.Next8.name = "Next8";
	this.Next8.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next8, 0, 1, 1);

	this.instance_21 = new lib.P1000781();
	this.instance_21.setTransform(59.75,290.2,0.1497,0.1497);

	this.instance_22 = new lib.P1000778();
	this.instance_22.setTransform(1074.75,290.2,0.142,0.142);

	this.Note9 = new lib.Note9("synched",0);
	this.Note9.name = "Note9";
	this.Note9.setTransform(1290,837.6,1,1,0,0,0,260,83.4);

	this.Cross9 = new lib.Cross1("synched",0);
	this.Cross9.name = "Cross9";
	this.Cross9.setTransform(1780.05,758.05,1,1,0,0,0,113.8,113.8);

	this.Tick9 = new lib.Tick1("synched",0);
	this.Tick9.name = "Tick9";
	this.Tick9.setTransform(773,758,1,1,0,0,0,113.8,113.8);

	this.Back9 = new lib.Back1();
	this.Back9.name = "Back9";
	this.Back9.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back9, 0, 1, 1);

	this.Next9 = new lib.Next1();
	this.Next9.name = "Next9";
	this.Next9.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next9, 0, 1, 1);

	this.instance_23 = new lib.P1000730();
	this.instance_23.setTransform(59.75,290.7,0.1888,0.1888);

	this.instance_24 = new lib.P1000727();
	this.instance_24.setTransform(1075.75,290.7,0.1992,0.1992);

	this.Cross10 = new lib.Cross1("synched",0);
	this.Cross10.name = "Cross10";
	this.Cross10.setTransform(1811.05,764.05,1,1,0,0,0,144.8,119.8);

	this.Tick10 = new lib.Tick1("synched",0);
	this.Tick10.name = "Tick10";
	this.Tick10.setTransform(809,764,1,1,0,0,0,149.8,119.8);

	this.Note10 = new lib.Note10("synched",0);
	this.Note10.name = "Note10";
	this.Note10.setTransform(1354.9,816.3,1,1,0,0,0,326.9,60);

	this.Back10 = new lib.Back1();
	this.Back10.name = "Back10";
	this.Back10.setTransform(149.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Back10, 0, 1, 1);

	this.Next10 = new lib.Next1();
	this.Next10.name = "Next10";
	this.Next10.setTransform(1764.95,967,0.8663,0.8663,0,0,0,124,82.1);
	new cjs.ButtonHelper(this.Next10, 0, 1, 1);

	this.instance_25 = new lib.P1000706();
	this.instance_25.setTransform(1076.15,291.2,0.1676,0.1676);

	this.instance_26 = new lib.P1000707();
	this.instance_26.setTransform(59.4,291.15,0.1678,0.1678);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Q1A},{t:this.Q1B}]},2).to({state:[{t:this.Q2A},{t:this.Q2B}]},1).to({state:[{t:this.Q3A},{t:this.Q3B}]},1).to({state:[{t:this.Q4A},{t:this.Q4B}]},1).to({state:[{t:this.Q5A},{t:this.Q5B}]},1).to({state:[{t:this.Q6A},{t:this.Q6B}]},1).to({state:[{t:this.Q7A},{t:this.Q7B}]},1).to({state:[{t:this.Q8A},{t:this.Q8B}]},1).to({state:[{t:this.Q9A},{t:this.Q9B}]},1).to({state:[{t:this.Q10B},{t:this.Q10A}]},1).to({state:[{t:this.instance_3},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.total1},{t:this.text_3,p:{scaleX:0.8165,scaleY:0.8165,x:952.9178,y:316.2,text:"/",font:"normal 400 200px 'Roboto'",lineHeight:250.45,lineWidth:103}},{t:this.Forms},{t:this.instance_2},{t:this.Review1}]},1).to({state:[{t:this.text_3,p:{scaleX:1,scaleY:1,x:963,y:291.3,text:"Time's up!\nClick on the button below to try again.",font:"normal 400 80px 'Roboto'",lineHeight:91.2,lineWidth:670}},{t:this.Retry1}]},1).to({state:[{t:this.instance_7,p:{x:42.75,y:278.2}},{t:this.instance_6},{t:this.instance_5,p:{x:1054.55,y:278.2}},{t:this.instance_4},{t:this.Next1},{t:this.Back1},{t:this.Cross1},{t:this.Note1},{t:this.Tick1}]},1).to({state:[{t:this.instance_10,p:{x:42.85,y:278.25}},{t:this.instance_9},{t:this.instance_7,p:{x:1055.7,y:278.1}},{t:this.instance_8},{t:this.Next2},{t:this.Back2},{t:this.Note2},{t:this.Tick2},{t:this.Cross2}]},1).to({state:[{t:this.instance_10,p:{x:43.25,y:278.2}},{t:this.instance_12},{t:this.instance_7,p:{x:1056.25,y:278.2}},{t:this.instance_11},{t:this.Next3},{t:this.Back3},{t:this.Note3},{t:this.Tick3},{t:this.Cross3}]},1).to({state:[{t:this.instance_10,p:{x:43.25,y:278.2}},{t:this.instance_14},{t:this.instance_7,p:{x:1056.25,y:278.2}},{t:this.instance_13},{t:this.Next4},{t:this.Back4},{t:this.Tick4},{t:this.Cross4},{t:this.Note4}]},1).to({state:[{t:this.instance_10,p:{x:1056.75,y:278.2}},{t:this.instance_16},{t:this.instance_7,p:{x:42.65,y:278.2}},{t:this.instance_15},{t:this.Next5},{t:this.Back5},{t:this.Note5},{t:this.Tick5},{t:this.Cross5}]},1).to({state:[{t:this.instance_10,p:{x:1057.25,y:278.2}},{t:this.instance_18},{t:this.instance_7,p:{x:42.75,y:278.2}},{t:this.instance_17},{t:this.Next6},{t:this.Back6},{t:this.Tick6},{t:this.Note6},{t:this.Cross6}]},1).to({state:[{t:this.instance_10,p:{x:1057.75,y:278.2}},{t:this.instance_20},{t:this.instance_7,p:{x:42.75,y:278.2}},{t:this.instance_19},{t:this.Next7},{t:this.Back7},{t:this.Tick7},{t:this.Cross7},{t:this.Note7}]},1).to({state:[{t:this.instance_10,p:{x:1058.25,y:278.2}},{t:this.instance_22},{t:this.instance_7,p:{x:43.25,y:278.2}},{t:this.instance_21},{t:this.Next8},{t:this.Back8},{t:this.Tick8},{t:this.Cross8},{t:this.Note8}]},1).to({state:[{t:this.instance_5,p:{x:1058.75,y:278.7}},{t:this.instance_24},{t:this.instance_7,p:{x:42.75,y:278.7}},{t:this.instance_23},{t:this.Next9},{t:this.Back9},{t:this.Tick9},{t:this.Cross9},{t:this.Note9}]},1).to({state:[{t:this.instance_10,p:{x:42.4,y:279.15}},{t:this.instance_26},{t:this.instance_7,p:{x:1059.15,y:279.2}},{t:this.instance_25},{t:this.Next10},{t:this.Back10},{t:this.Note10},{t:this.Tick10},{t:this.Cross10}]},1).wait(1));

	// Instructions
	this.Start1 = new lib.start1();
	this.Start1.name = "Start1";
	this.Start1.setTransform(962,850,1,1,0,0,0,145,85);
	new cjs.ButtonHelper(this.Start1, 0, 1, 1);

	this.text_7 = new cjs.Text("- You will be shown two photos - one of which\n  conforms to the grooming guidelines.\n- You have 2 minutes to complete the game.\n- Click on the right answer for each question.\n- Fill in your details after completing the game.", "normal 400 50px 'Roboto'", "#DDDDDD");
	this.text_7.lineHeight = 68;
	this.text_7.lineWidth = 1054;
	this.text_7.parent = this;
	this.text_7.setTransform(435.25,338.1);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("Instructions", "normal 500 100px 'Roboto'", "#DDDDDD");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 135;
	this.text_8.lineWidth = 929;
	this.text_8.parent = this;
	this.text_8.setTransform(962.6,150.35);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_8);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.Start1}]},1).to({state:[]},1).wait(22));

	// MainPage
	this.Play1 = new lib.play1();
	this.Play1.name = "Play1";
	this.Play1.setTransform(963,900,1,1,0,0,0,145,95);
	new cjs.ButtonHelper(this.Play1, 0, 1, 1);

	this.instance_27 = new lib.ThisorThatMainPage201();
	this.instance_27.setTransform(-0.1,-0.2,0.4799,0.4799);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.Play1}]}).to({state:[]},1).wait(23));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C7A89").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_2.setTransform(959.5,540.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(23));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959.5,539.8,960.5,540.7);
// library properties:
lib.properties = {
	id: 'B4BDC286E9FB4B9FBF8EEEFE44C3C12C',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/P1000706.jpg?1637060233536", id:"P1000706"},
		{src:"images/P1000707.jpg?1637060233536", id:"P1000707"},
		{src:"images/P10007131.jpg?1637060233536", id:"P10007131"},
		{src:"images/P1000713.jpg?1637060233536", id:"P1000713"},
		{src:"images/P1000727.jpg?1637060233536", id:"P1000727"},
		{src:"images/P1000730.jpg?1637060233536", id:"P1000730"},
		{src:"images/P1000737.jpg?1637060233536", id:"P1000737"},
		{src:"images/P1000740.jpg?1637060233536", id:"P1000740"},
		{src:"images/P1000743.jpg?1637060233536", id:"P1000743"},
		{src:"images/P1000746.jpg?1637060233536", id:"P1000746"},
		{src:"images/P1000759.jpg?1637060233536", id:"P1000759"},
		{src:"images/P1000760.jpg?1637060233536", id:"P1000760"},
		{src:"images/P1000765.jpg?1637060233536", id:"P1000765"},
		{src:"images/P1000766.jpg?1637060233536", id:"P1000766"},
		{src:"images/P1000778.jpg?1637060233536", id:"P1000778"},
		{src:"images/P1000781.jpg?1637060233536", id:"P1000781"},
		{src:"images/P1000788.jpg?1637060233536", id:"P1000788"},
		{src:"images/P1000793.jpg?1637060233536", id:"P1000793"},
		{src:"images/ThisorThatMainPage201.png?1637060233536", id:"ThisorThatMainPage201"},
		{src:"images/Grooming Campaign 2021 Game 2_atlas_1.png?1637060233290", id:"Grooming Campaign 2021 Game 2_atlas_1"},
		{src:"images/Grooming Campaign 2021 Game 2_atlas_2.png?1637060233290", id:"Grooming Campaign 2021 Game 2_atlas_2"},
		{src:"images/Grooming Campaign 2021 Game 2_atlas_3.png?1637060233290", id:"Grooming Campaign 2021 Game 2_atlas_3"}
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
an.compositions['B4BDC286E9FB4B9FBF8EEEFE44C3C12C'] = {
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