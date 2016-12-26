
//创建轮播图
createBanner({
	element : "banner",
	data : bannerData
});
//车展览
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>"
				+ "<p>" + option.label + "</p>"
				+ "<img src=\"" + option.smallUrl + "\" />";
	return a;
}
var exhibitionData = [
	{
		href : "/a",
		bigUrl : "./image/exhibition.jpg",
		smallUrl : "./image/t01.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦"
	},
	{
		href : "/a",
		bigUrl : "./image/t1.jpg",
		smallUrl : "./image/t02.png",
		title : "百年大厂杰作",
		label : "时间在流逝，品质用流传"
	},
	{
		href : "/a",
		bigUrl : "./image/t2.jpg",
		smallUrl : "./image/t03.png",
		title : "便宜才是王道",
		label : "谁说便宜没好车？"
	},
	{
		href : "/a",
		bigUrl : "./image/t3.jpg",
		smallUrl : "./image/t04.png",
		title : "驾校毕业生",
		label : "那些年，我们练过的普桑和捷达"
	},
	{
		href : "/a",
		bigUrl : "./image/t5.jpg",
		smallUrl : "./image/t05.png",
		title : "明星也抠门",
		label : "明星都买二手车了你还在等什么"
	},
	{
		href : "/a",
		bigUrl : "./image/t7.jpg",
		smallUrl : "./image/t06.png",
		title : "全能的大玩具",
		label : "越野帮手、四驱利器"
	}
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
onscroll = function(){
	topNav.className = topNavClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : " normal");
};


//三个图标
 var   iconData = [
 {
 	   img : "image/tu1.png",
 	   text  : "基于消费者个人信用提供超低首付、超长分期，灵活智选的汽车融资租赁个性化解决方案",
	   name  : "探个车",
	   title : "面想消费者"
 },
  {
 	   img : "image/tu2.png",
 	   text  : "评估管理、车辆管理、客户管理、经营数据......一应俱全支持",
	   name  : "大风车",
	   title : "面向拥有展厅和销售团队的大车商"
 },
  {
 	   img : "image/tu3.png",
 	   text  : "收车、卖车、贷款、质保、估价......一步到位支持Android",
	   name  : "车牛",
	   title : "面向经营二手车的中小车商"
 }];



var icon = document.getElementById("threeIcon");

 var createIcon = function(option){

 	var Box = document.createElement("div");
 		Box.className = "leftDiv";

 	var imgdiv = document.createElement("div");	
 	    imgdiv.className = "imgdiv";

 	    imgdiv = function(){
 	    	var image = document.createElement("img"),
 	    	    h2    = document.createElement("h2"),
 	    	    p     = document.createElement("p");
 		    image.className = "image";
 		    h2.className = "name";
 		    p.className = "title";
 	    }
 	var text = document.createElement("span");
 		
    var look = document.createElement("a"); 
 
    Box.appendChild(imgdiv);
    Box.appendChild(text);
    Box.appendChild(look);

    return Box;
 }
  
 
