const autograph = MorphSVGPlugin.pathDataToBezier("#motionPath", {align: "#plane"});


TweenMax.set("#plane", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"})
const master1 = TweenMax.to("#plane", 20, {
  bezier: {
    values: autograph,
    type: "cubic",
    autoRotate: true
  }
});

const master2 = TweenMax.fromTo("#motionPath", 20, {drawSVG: "0%"}, {drawSVG:"100%", delay: 0.1})

const mySplitText = new SplitText("#quote");
TweenMax.staggerFrom(mySplitText.chars, 7, {opacity: 0, scale: 0, y:80, transformOrigin: "0% 50%", ease:Elastic.easeOut}, 0.03, "+=0.3")


//Draggable
const wheel=document.querySelector("#wheel");
TweenMax.set(wheel, {transformOrigin: "50% 50%"});

Draggable.create(wheel, {
	type: "rotation",
	bounds: {
		minRotation:0,
		maxRotation:360		
	},
	onDrag: function(){
		master1.progress(this.rotation/360);
		master2.progress(this.rotation/360);		
	}
});