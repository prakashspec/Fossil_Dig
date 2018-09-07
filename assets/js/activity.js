var speedArr=[15,1000,3800,1000,35,35];
//speedArr=[1,10,38,10,5,5];
var arrayval = [1,2,3,4];
var findImgName;
var backgroundarray = ["#754531","#efe3b3","#413930","#c2c3c2","#4d4d4d"]
var arrayclick = [];
var imganimationarray = [];
var row = 4;
var col = 5;
var fareawidth = 920; 
var fareaheight = 355;
var dragbol;
fareawidth = fareawidth/row;
fareawidth = (fareawidth*(row+2)) 
fareaheight = fareaheight/col; 
fareaheight = Math.round(fareaheight);
fareaheight = fareaheight*(col+1) 
fareaheight = Math.round(fareaheight);
row = row+2;
col = col+1;
var imagearray = [];
var arr1 = [1,2,3,4];
var arr = [0,1,2,3,4];
var backgroundimagesarray = ["img_1","img_2","img_3","img_4","img_5"];
var backgroundimagesarray1 = ["lab_e_1","lab_e_2","lab_e_3","lab_e_4","lab_e_5"];
var titletextclean = ['','Vicuña clean','Turtle clean','grass clean','oyster clean','whale clean'];
var titletext = ['','Vicuña dirty','Turtle dirty','grass dirty','oyster dirty','whale dirty'];
var crossimgOutlie = ["lab_e_1_outline","lab_e_2_outline","lab_e_3_outline","lab_e_4_outline","lab_e_5_outline"]
var actbackgroundimagesarray = ["actimg_1","actimg_2","actimg_3","actimg_4","actimg_5"]
var actbackgroundimagesarray1 = ["lab_a_1","lab_a_2","lab_a_3","lab_a_4","lab_a_5"]
var dropedElem = false;
var dragarray = [];
var emptyarrayloc = [];
var imagehidearray = [];
var arra = [1]
var widthadd; 
var heightadd; 
var widthvalue;
var count = 0;
var foscount = 0;
var bgcount = -1
var correctarray = [0,0,0,0,0,0,0];
var brushdrag = [];
var clockdrag = [];
var myVar;
var distance =35;
var heightval = 120;
var brushIncrm = 0;
var toolName;
var clockcount1 = 0;
var brushIncrm1 = 0; 
var clockcountbool = false;
var identific = 0;
var analyzied = 0;
var brushcount = 0;
var clockcount = 0;
var basicarray = [];
var currentside = -1;  
var valid;
var splitid;
var splitidval;
var popupImg='';
var totalDigs = 0;
var stampId;
var stampIdName;
var dummyName;
var brushcursor = false;
var clockcursor = false;
var brushIncrm = 0;
var clcokIncrm = 0;
var squareCount=0;
var FindImg;
var imgsplitid;
var microheight = ['empty',292,292,292,292,292];
var tableHeight = ['empty',277,277,277,277,277];
var audioImgArr=['','','','','',''];
var cursorChange = false;
var identytxtarray = ["","Vicuña","Turtle (Tortoise)","Grass","Oyster","Whale"] 
var analyzedtxtarray = ["","25,000 years","13 million years","15 million years","17 million years","20 million years"] 
var actidentytxtarray = ["","","","","",""] 
var actanalyzedtxtarray = ["","","","","",""] 
var timervar1;
var timervar2;
var spriteAnim=0;
var spriteAnimTimer=0;
var spriteAnim1=0;
var anispeed=100;
var axeanimation = 0;
var mananimate = 0;
var setloop = true;
var clockval = true;
var activitybool = false;
var mananimateTimer=15;
var timervarTimer; 
var clockstart = true;
var clipArr = [12,41,74,106,135,165];
var firstSplitElem;
var secondSplitElem;
var parentLeft = 0;
var parentTop  = 0;
var fosilLeft=0;
var fosilTop=0;
var DivId;
var onetime = true;
var axeanimationfn;
var myTimeout;
var myTimeout1;
var brushstart = true;
var textarray = [];
var hgtArrAct  = [];
var newMatrixArr = [];
var animationleft = ["","22","201","380","560","739"]
//backgroundimagesarray1 = shuffle1(backgroundimagesarray1);
$(document).ready(function(){
	$("#lab,#wholelabdummy").click(function(event){
	var getsquareclick = event.target.id.split('_')[0]
	if((event.target.id == 'wholelabdummy' ||event.target.id == 'man_1' || getsquareclick == 'sqareimg'|| event.target.id == 'man_2' || event.target.id == 'lab') && parseInt($('.expDiv').css("left")) >= 0)
	{
		if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	}
})
 //$("#explore,#activity").css("top","34px")	
 myfun();
 arrayclick = [];
for(var i = 0; i< 6 ;i++)
{
	hgtArrAct [i]  = [];
	for(var j = 0 ; j < 6; j++)
	{
		hgtArrAct[i][j]  = 'glowimglay_'+i+'_'+j;
	}
}

 for(var i=0; i<(col); i++)
  {
	var widthval=(fareawidth/row-2);
	var heightvalbox = (fareaheight/col-2);
	arrayclick[i] = [];
	clockdrag[i] = 0; 	
	brushdrag[i] = 0; 
	boxwidth = (fareawidth-distance)/row; 
    for(var j=0; j<(row-1); j++)
	{
		if(i<5)
		 {
		    $("#dig").append('<div id="imglay_'+i+'_'+j+'" class="maskbg" style="background-image:url(assets/images/activity/layer_'+i+'.png);	"></div>')	
            $("#dig").append('<div id="glowimglay_'+i+'_'+j+'" class="glowimage"   style="background-image:url(assets/images/activity/layerglow_0.png);display:none;"></div>')  		
		}
		if(i==0)
		{
			arrayclick[i][j] = 1;
			$(".labclass").append('<div id="sqareimg_'+(j+1)+'" data-ans="" class="squareimg squareimg1 " style="width:'+(150)+'px;left:'+(31+(j*31+(j*148)))+'px;height:123px;top:58px; alt="'+titletext[i]+'"" ></div>');
            $(".labclass").append('<div id="analise_'+(j+1)+'"  class="analyzedclass stampClass" style="width:'+(150)+'px;left:'+(31+(j*31+(j*148)))+'px;height:123px;top:58px;" ></div>'); 
            $(".labclass").append('<div id="identify_'+(j+1)+'"  class="identify stampClass"  style="width:'+(150)+'px;left:'+(31+(j*31+(j*148)))+'px;height:123px;top:58px;" ></div>');
	        $(".labclass").append('<img id="curentanimation_'+(j+1)+'" data-ans="" src="assets/images/activity/frame.png" class="curentanimationdiv" style="width:'+(167)+'px;left:'+animationleft[j+1]+'px;height:139px;top:50px;" ></img>');
		}
		else
		 {
		 	arrayclick[i][j] = 0;
		 }
		$(".fossilarea").append('<div id="box_'+i+'_'+j+'" class="fbox " style="top:'+(i*(fareaheight/col))+'px;left:'+(j*(  fareawidth/row))+'px;height:'+heightvalbox+'px;width:'+widthval+'px;" ></div>')
		
		if(j!=0 && j!= row-1 && i!= col-1)
		  {
		      $('#box_'+i+'_'+j).addClass('circle')
		  }
		if(i%2 == 0)
		  {
		  	$('#box_'+i+'_'+j).addClass('fboxo')
		  }
		else
		 {
		 	$('#box_'+i+'_'+j).addClass('fboxe')			
		 }
	   }
     }
      $("#dig").append('<div id="digval"><span id="spandig1">Digs: 0</span><span id="fossval" style="position:relative;left:25px;top:0px">Fossils:<span id="sp1"> 0</span>/<span id="spanacti">5</span></span></div>')	
	   widthadd = $("#box_1_1").width();
       heightadd = $("#box_1_1").height();
       widthvalue =-(widthadd) 
       $(".fossilarea").css({"left":widthvalue+"px"}) 
      for(var i=0;i<imagearray.length;i++)
        {
          $("#"+imagearray[i]).append('<div id="cross'+imagearray[i]+'" class="imageval" style="position:absolute;left:60px;top:12px;background:url(assets/images/activity/'+[backgroundimagesarray1[i]]+'.png) no-repeat;background-size:100% 100%;z-index:-1;width:100px;height:50px;display:none;"></div>')  	
        }  
      if(backgroundimagesarray1[i]=="lab_5")
	   {
		  $("#cross"+valid).css({"transform":"scale(0.4)"})  
	   }
	 else
	  {
		$("#cross"+valid).css({"transform":"scale(0.4)"})  
	  } 
	  
	  
      if(cpage=="activity" && cpage=="explore")
		{
		$('.screenIcon').off('click').on("click",captureScreen).css({"cursor":"pointer"}).attr('src','assets/images/template/camera_icon.png');
		}
       else
        {
		$('.screenIcon').css("display","none")
		
		}	   
        
   $("#arrowimg").off("click").on("click",lastmessagefn)
   $("#labscreen").css("display","block")
   //$("#digback").off("click").on("click",cursorfn)
   $("#digback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:cursorfn,revert:true,stop:cursorfn1});
   $(".circle").droppable({accept:'#digback',tolerance: 'pointer',drop:clickfn});
   $("#closeimg").off("click").on("click",closefn)
   $("#resetbtn,#resetbtn1").off("click");
   $("#popclose").off("click").on("click",popclose)
   // $("#brushback").off("click").on('click',wrongPopShow);  
   //$("#timeback").off("click").on('click',wrongPopShow);
   $("#brushback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:brushclickfn,revert:brushclickfn,stop:brushclickfn});
   $("#timeback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:clockclickfn,revert:brushclickfn,stop:clockclickfn,drag:showborder});
   //$(".squareimg").off("click").on("click",squareclickfn)   
   // $(".stampClass").off("click").on("click",StampclickFn)   
   //$(".squareimg").droppable({drop:squareclickfn});  
   // $(".stampClass").droppable({drop:StampclickFn});
   $(".digclass").off("click").on("click",audioclosefn1)   
   $(".labclass").css("display","none")
	createMaskLayer();
 });
 
 function adiuofn(val)
  {
     $('#audioId').prop('volume', 0.5)
     audioElement.setAttribute('src', './assets/audio/'+val+'.mp3');
     if(!disableSafari) audioElement.play();
  }
  
 var hilightfn = function()
   {
		$('.glowimage').hide();
		for(var i = 0 ;i < 6 ; i++)
		{
			for(var j = 1 ;j < 5 ; j++)
			{
				if(arrayclick[i][j] == 1)
				{
					$('#'+hgtArrAct[i][j]).show();
					
				}
			}
		}
   }
 
var correctclickid;
var dropcountbol = true;	
var audioElement;
var clickfn = function()
  {
	$("#labdummy1").css("display","block");
	$('.ui-draggable').draggable({revert:false});
    totalDigs++;
	cursorChange=true;
	cursorfn();
	//cursorChange=false;
	$("#digback").css({'background':'#fff'});
	$('#digback').removeClass('borderclass')
 	fosilLeft = parseInt($(".fossilarea").css("left"));
	fosilTop = parseInt($(".fossilarea").css("top"));
	valid = $(this).attr("id");
	DivId = valid;
	parentLeft = parseInt($(this).css("left"))-230;
	parentTop = parseInt($(this).css("top"))+121;
    splitid = parseInt($(this).attr("id").split("_")[1]);
    splitidval = parseInt($(this).attr("id").split("_")[2]);
	$('#glowimglay_'+splitid+'_'+splitidval).hide();
	if(arrayclick[(splitid)][splitidval]==2 )
	{
		$("#labdummy1").css("display","none");
		return;
	}
	  if((arrayclick[splitid][splitidval] == 1 && cpage=="explore") || (arrayclick[splitid][splitidval]==1 && splitid == 0 && cpage=="activity"))
	    {	
			if(splitid-1 != -1 && arrayclick[splitid-1][splitidval] ==0 && cpage=="explore")
			{
				arrayclick[splitid-1][splitidval] = 1;
			}
			if(splitid+1 != 5 && arrayclick[splitid+1][splitidval] ==0 && cpage=="explore")
			{
				arrayclick[splitid+1][splitidval] = 1;
			}
			if(splitidval-1 != 0 && arrayclick[splitid][splitidval-1] ==0 && cpage=="explore")
			{
				arrayclick[splitid][splitidval-1] = 1;
			}
			if(splitidval+1 != 5 && arrayclick[splitid][splitidval+1] ==0 && cpage=="explore")
			{
				arrayclick[splitid][splitidval+1] = 1;
			}
			if(splitid-1 >= 1 && cpage=="explore")
			{
				
				if(arrayclick[splitid-1][splitidval-1] == 1 && arrayclick[splitid-2][splitidval-1] != 2 && cpage=="explore")
				{
					arrayclick[splitid-1][splitidval-1] = 0;
				}
				if(arrayclick[splitid-1][splitidval+1] == 1 &&  arrayclick[splitid-2][splitidval+1] != 2 && cpage=="explore")
				{
					arrayclick[splitid-1][splitidval+1] = 0;
				}
			} 
			/* if((arrayclick[splitid][splitidval]==1 && splitid == 0) || 
			(arrayclick[splitid-1][splitidval]==2  && cpage=="explore") ||(arrayclick[splitid+1][splitidval]==2 && cpage=="explore") ||
			((arrayclick[splitid][splitidval-1]==2 && cpage=="explore") && (arrayclick[splitid+1][splitidval-1]==1) && cpage=="explore" )||
			((arrayclick[splitid][splitidval+1]==2 && cpage=="explore") && (arrayclick[splitid+1][splitidval+1]==1) && cpage=="explore") &&(arrayclick[splitid-1][splitidval]!=2)  && cpage=="explore")	
			{ */
			
		 var idsplitbox = $(this).attr("id").split("_")[0]
		 //$('#audioId').prop('volume', 0.5)
		 adiuofn(idsplitbox)
	     $("#digbackdummy").css("display","block");
		 correctclickid = $(this).attr("id")
         $('.screenIcon').off('click').css({"cursor":"default"}).attr('src','assets/images/template/camera_icon_disabled.png');
		 count++;
		 var  leftpos = parseInt($("#"+valid).css("left")) ;
		 var toppos =  parseInt($("#"+valid).css("top"));
		 var widthpos = $("#"+valid).width();
		 toppos =  toppos+90;
		 leftpos = leftpos - widthpos; 
		 $("#digani").css("display","block") 
		 $("#digani").css({"left":(leftpos-50)+"px","top":(toppos-90)+"px"});
		 //$(".circle").off("click");
		 $("#resetbtn").off("click");
		 //$("#digback").off("click");
		 $("#dig").css("cursor","default")
		 $(".digclass").css("cursor","default")
		 firstSplitElem= DivId.split("_")[1];
		 secondSplitElem= DivId.split("_")[2];
		 $('crossbox_'+firstSplitElem+"_"+secondSplitElem).hide();
		 anitop = $('#layer_'+firstSplitElem).css('top');
		 $("#digani").css({backgroundPosition:('0px 0px'),'opacity':'1'});
	     axespritefn(); 
		 arrayclick[splitid][splitidval]=2;
	     currentside = splitidval;
	     
       if(imagearray.indexOf(valid) != -1)
		{
		  foscount++;
		  //console.log(foscount)
		  bgcount++;
		  clockcount++; 
          brushcount++;
		  dropcountbol = true;	
		  $("#totalfoil").html(foscount)
          $("#spanfound").html(foscount)
		 if(cpage =='explore') correctarray[foscount] = 1;
		  if(cpage =='activity') correctarray[3] = 1;
		  var imgarrayvalsplit = backgroundimagesarray1[imagearray.indexOf(valid)].split("_")[2]
		
		  if(cpage=='activity')
		  {
			$("#sqareimg_3").css('background-image','url(assets/images/activity/img_a_3.png').attr("alt","wood dirty");
		  }
	      if(cpage=='explore')
	      {
	        $("#sqareimg_"+foscount).css('background-image','url(assets/images/activity/img_e_'+imgarrayvalsplit+'.png').attr("alt",titletext[imgarrayvalsplit]);  	
	      }	
		  $("#popimg").attr('src','assets/images/activity/img_e_'+imgarrayvalsplit).attr("alt",titletext[imgarrayvalsplit]); 
		  $("#dummydiv1").css("display","block"); 
		  dragarray.push("#sqareimg_"+splitidval)
		  $("#sqareimg_"+splitidval).addClass("dragclass ui-droppable").addClass("brush ui-droppable")
		  var skval=$(this).attr("id");
		  var lefttopfn = parseInt($("#"+$("#cross"+valid).parent().attr("id")).css("left"));
		  var topleftfn = parseInt($("#"+$("#cross"+valid).parent().attr("id")).css("top"));
		  lefttopfn = lefttopfn+60; 
		  topleftfn = topleftfn+26;
		  $("#cross"+valid).remove();
		  if(cpage=='activity')
		  {
			 $(".fossilarea").append('<div id="cross'+valid+'"  class="imageval" style="left:'+lefttopfn+'px;top:'+topleftfn+'px;position:absolute;width:100px;height:50px;background:url(assets/images/activity/lab_a_3.png) ;background-size:100% 100%;opacity:1;transform:scale(0.4)"></div>');
		  }
	    if(cpage=='explore')
	     {
	  	    $(".fossilarea").append('<div id="cross'+valid+'"  class="imageval" style="left:'+lefttopfn+'px;top:'+topleftfn+'px;position:absolute;width:100px;height:50px;background:url(assets/images/activity/'+[backgroundimagesarray1[imagearray.indexOf(valid)]]+'.png) ;background-size:100% 100%;opacity:1;transform:scale(0.4)"></div>');
		
	     }
		 if(backgroundimagesarray1[imagearray.indexOf(valid)]=="lab_5")
		  {
			$("#cross"+valid).css({"transform":"scale(0.4)"})  
		  }
		 else
		  {
			$("#cross"+valid).css({"transform":"scale(0.4)"})  
		  } 
		  if(cpage=='activity')
		  {
			 popupImg=backgroundimagesarray1[imagearray.indexOf(valid)].replace('lab','img');	
		  }
	if(cpage=='explore')
	  {
	    	popupImg=backgroundimagesarray1[imagearray.indexOf(valid)].replace('lab','img');	
	  }	
	      $("#cross"+valid).hide();
		  imganimationarray.push("cross"+valid);
		  $("#digdummy").css("display","block")
		  $("#labdummy1").css("display","block")
		  //$("#digback").off("click")
		  //$(".circle").off("click");
		  imagehidearray.push(valid)
		}
		
		else
		{
		 if(cpage == 'explore')
		 {
			$('.expimgcont').hide();
			
			$(".expPara").html('Drag the Pickax tool to the location you want to dig.');
			globalAudioPause();
			AudioNameget ='vlfsde_04'
			 
		 }
	    }
	}
  
  else
  {

	 globalAudioPause();
	wrongAttemptFun('stop');
	dropcountbol = true;
	if($('.expDiv').position().left >= 0 ){ rotateValue = 0;angleRot1 = 0}	
    $('.activeSlider').off('click').on('click',activitySlideDiv);	
    $("#digback").removeClass("borderclass");
  }
  // for(var j=0; j<(row); j++)
  //console.log(j+'  '+JSON.stringify(arrayclick[j])); 
	$('.fbox').css('margin','0px')
 }
function createMaskLayer()
 {
	for (var j=0; j < 5; j++)
	{
   
		$("#svgimglayer_"+j).css('width',$(".layer_"+j).css('width'));
		$("#svgimglayer_"+j).css('height',$(".layer_"+j).css('height'));
		$("#svgimglayer_"+j).css('top',$(".layer_"+j).css('top'));
		$("#svgimglayer_"+j).css('left',$(".layer_"+j).css('left'));
	   for (var i=1; i <= 4; i++)
	   {
		  $("#layer_"+j+"_"+i).attr('width',parseInt( $('.fossilarea').width())/4)
		  $("#layer_"+j+"_"+i).attr('height', '100%')
		  $("#layer_"+j+"_"+i).attr('x', ((i-1)*parseInt( $('.fossilarea').width())/4))
	   } 
	}
 }
function audioclosefn1(event)
{	
	if(parseInt($('.expDiv').css('left'))>=0 && ($('.digclass').css('cursor') == 'default' || $('.digclass').css('cursor') == 'auto' ))
	{
		if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	}
	
}
var stampIdentify;
var idenfycount = 0;
var toggleSlider = false;
 function StampclickFn(event)
 {
	
	if(analyzied == 5 && cpage=="explore")
		{
		  $("#arrowimg").css("display","block")
		  
		  
		}
	
	
	
	if(!clockcursor)
	{
		 stampId = $(this).attr('id').split('_')[1];
		 stampIdName = $(this).attr('id').split('_')[0];
		 audioImgArr[stampId]=audioImgArr[stampId].replace('lab','img');
		 if(stampIdName =='identify')
		 {	
			currentStep =audioImgArr[stampId]+'brush';
			rightAttemptFun();
			if(parseInt(stampIdentify) == parseInt(stampId))
			{
				if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
			}
			stampIdentify = stampId;
			
		 }
		if(stampIdName =='analise')
		{	
			currentStep = audioImgArr[stampId]+'timer';
			rightAttemptFun();
			if(parseInt(stampIdentify) == parseInt(stampId))
			{
				if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
			}
			stampIdentify = stampId;
		}
	}
	
	if(analyzied == 5 && cpage=="explore")
		{
		  
		 
		  $("#arrowimg").css("display","block")

		}
		
	if(analyzied == 1 && cpage=="activity")
					{ 
						$("#arrowimg").css("display","block");
						
						
					}	
	
 }
var wrongBoxDropped = false;
var wrongPopShow = function ()
{
	var getId = $(this).attr('id');
	if(foscount < 5)
	{
	  wrongAttemptFun('stop');
	}
	
}
    var timervaraudio;
    var squareclickfn = function()
	 {
		if(cpage == 'activity') $('.highlight').hide();
		dropedElem = true;
	    $('.ui-draggable').draggable({revert:false});		
		$("#timeback").removeClass("borderclass"); 
		$("#brushback").removeClass("borderclass"); 
		$("#lab").css("cursor","default");
        findImgName = $("#"+$(this).attr("id")).css("background-image").split('activity/')[1].split('.png')[0];
	    squareCount=$(this).attr("id").split("_")[1];
		audioImgArr[squareCount] = findImgName;
		audioImgArr[squareCount] = audioImgArr[squareCount].replace('lab','img')
		if((correctarray[squareCount] == 2 || correctarray[squareCount] == 3) && toolName=="brush" )
		{
			wrongResPos = 1;
			wrongAttemptFun('drop');
			brushcursor=false;
			brushclickfn();			
			$("#brushback").removeClass("borderclass");
		}
		if(correctarray[squareCount] == 3 && toolName=="timer")
		{
		    wrongResPos = 2;
			wrongAttemptFun('drop');
			$("#timeback").removeClass("borderclass");
		}
	    if(correctarray[squareCount] == 1 && toolName=="brush")
		{
		   
		   brushIncrm++;
		   if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
		   var srk = parseInt($("#sqareimg_"+squareCount).css("left"))-20;
           $('.brushAnim').css({"left":srk+"px"});
           $("#brush_1").css("display","none");
	       $('.brushAnim').css("display","block");
	       $("#microscopeimg").css("display","block");
		   var imgfind = $(this).attr("id");
		   var animateidenty = $(this).attr("id").split("_")[1];
		   $("#curentanimation_"+animateidenty).css("display","block")
		   $("#tableimg").css("display","none")
		   var FindImg= $("#"+imgfind).css("background-image");
		   FindImg=FindImg.replace("img",'mic');
		   imgsplitid = $(this).attr("id").split("_")[1]
		   $("#tableimg").css("background-image",FindImg)
		   $("#microscopeimg").css("background-image",FindImg)
		   $(".labclass").css("cursor","default");
		   //startSeedAnim();
		   $(".squareimg").off("click");
		   $(".stampClass").off("click");
		   // $("#brushback").off("click");
		   // $("#timeback").off("click");
		   $('#man_1').css({"opacity":"1"});
		   $("#digSiteDummy").show();
		   $('#man_1').css("display","block");
		   $('#man_2').css("display","none");
		   $('#man_1').css({'background':'url(assets/images/activity/manBrush.png)'});
		   $('.screenIcon').off('click').css({"cursor":"default"}).attr('src','assets/images/template/camera_icon_disabled.png');
		   $("#brushback,#timeback").css({'background':'#ccc'})
		   $(".stampClass").off("click").on("click",StampclickFn);
		   timervaraudio =  setTimeout(function(){adiuofn(toolName)}, 600); 
		   mananimation();
		   correctarray[squareCount] = 2
		   clockcountbool = true;
		   identific++;
		   var mysplitData = findImgName.split("_")[1];
		   $("#microscopeimg").css("top",microheight[mysplitData]+"px");
			brushcursor=false;		
			clockcursor=false;
			brushclickfn();
			clockclickfn();
			$("#brushback").removeClass("borderclass");
			$("#timeback").removeClass("borderclass");
			
		}
		 else if(correctarray[squareCount] == 1 && toolName=="timer")
		   {
              	      
			   wrongResPos = 0;
		   	   wrongAttemptFun('drop');
			   clockcursor=false;
			   wrongBoxDropped=true;
			   
			   clockclickfn();
			   $("#timeback").removeClass("borderclass");
			   
		   } 
	    if(correctarray[squareCount] == 2 && toolName=="timer" )
		  { 
			  clcokIncrm++;
			  if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
			  var srk1 = parseInt($("#sqareimg_"+squareCount).css("left"));
			  $("#tableimg").css("display","block")
			  $('.clockAnim').css({"left":srk1+"px"});
			  $("#timer_1").css("display","none");
			  var imgfind = $(this).attr("id");
			  FindImg= $("#"+imgfind).css("background-image");
			  FindImg=FindImg.replace("lab",'mic');
			  imgsplitid = $(this).attr("id").split("_")[1]
			  $("#tableimg").css("background-image",FindImg)
			  $("#microscopeimg").css("background-image","none")
			  $(".labclass").css("cursor","default")
			  $('.clockAnim').css({'display':'block','opacity':'1'});
			  var mysplitData = findImgName.split("_")[1];
			  $("#tableimg").css("top",tableHeight[mysplitData]+"px");  
			  $(".squareimg").off("click");
			  $(".stampClass").off("click")
			  $("#digSiteDummy").show();
			  $('#man_2').css("display","block");
			  $('#man_1').css("display","none");
			  $('#man_2').css("width","620px");
			  $('#man_2').css({"height":"345px","opacity":"1"});
			  $('.screenIcon').off('click').css({"cursor":"default"}).attr('src','assets/images/template/camera_icon_disabled.png');
			  $("#brushback,#timeback").css({'background':'#ccc'})
			  $("#brushback").removeClass("borderclass");
			  $("#timeback").removeClass("borderclass");
			  var animateidenty1 = $(this).attr("id").split("_")[1];
		      $("#curentanimation_"+animateidenty1).css("display","block")
			  $(".stampClass").off("click").on("click",StampclickFn);
              //$('#audioId').prop('volume', 0.3)
			  adiuofn(toolName)
			  mananimationTimer();
			  $('.patchImage').hide();
			  analyzied++;
			  correctarray[squareCount] = 3 ;
			  brushcursor=false;		
			  clockcursor=false;
			  brushclickfn();
			  clockclickfn();
			  $("#brushback").removeClass("borderclass");
			  $("#timeback").removeClass("borderclass");
			  
			 
			}
		} 
function myfun()
 {
	arr1 = shuffle(arr1);
	var todaysFruit = arr1[Math.floor(Math.random() * 4)];
	if(cpage=='activity')
		{
		 imagearray = ["box_0_"+arr1[0],"","","",""];
		 //imagearray = ["box_0_4","","","",""];
		}
	if(cpage=='explore')
	{
	  imagearray = ["box_0_"+arr1[0],"box_1_"+arr1[1],"box_2_"+arr1[2],"box_3_"+arr1[3],"box_4_"+todaysFruit]	
	  //imagearray = ["box_0_1","box_0_2","box_0_3","box_0_4","box_1_1"];
	}	
}
var popclose = function()
 {
    $("#finalpopup").hide();
    $("#digfuldummy").css("display","block")
	//$("#digback").off("click").on("click",cursorfn)
 }
function activityOkFun()
 {
	 {
		var findid =(imganimationarray[imganimationarray.length-1])
		$("#"+findid).css("z-index","1000")
		var crossleftval =parseInt($("#fossil"+findid).css("left"));
		$("#fossil"+findid).css("left",crossleftval+"px")
		if(cpage == 'activity')
		{
			$("#fossil"+findid).css({'background':'url(assets/images/activity/lab_a_1_outline.png)','background-size':'100% 100%'})
		}
		
		$("#"+findid).animate({
			left:"872px",
			top:"-195px",
			opacity: "1",
			"z-index":"1000"
			}, 
			 {
				 duration: 800,
				 complete: function() 
				  {
					$("#"+findid).css("display","none");
					$("#digdummy").css("display","none")
					$("#fossil"+findid).css("display","block");
					$("#digback").css({'background':'#fff'});
					if(cpage=="explore")
					{
					$("#labdummy1").css("display","none");	
					}
				if(cpage=='activity')
		        {
					if(foscount==1)
					{
						$("#digback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:cursorfn,revert:true,stop:cursorfn1});
						$("#brushback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:brushclickfn,revert:true,stop:brushclickfn});
                        $("#timeback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:clockclickfn,revert:true,stop:clockclickfn,drag:showborder});
						$(".squareimg").droppable({accept: '.commonDrag' ,tolerance: 'touch',drop:squareclickfn});  
						//$(".stampClass").droppable({drop:StampclickFn});
						$(".stampClass").off('click').on('click',StampclickFn);
			            $("#timebackdummy").css("display","none")
						$("#brushbackdummy").css("display","none")
				        $("#digback").css({'background':'#ccc'});
						$("#brushback").css({'background':'white'});
						$("#timeback").css({'background':'white'});
						$("#digdummy").css("display","block")
						$("#labdummy1").css("display","none");	
		                $("#labhilight").css("display","block");
		                $("#digfuldummy").css("display","block");
		                $("#labhilight").off("click").on("click",dummyclickfnval)
						//$('#arrowimg').show();
						
					}
				}
				if(cpage=='explore')
				{
			   if(foscount==5)
				{
					$("#resetbtn1").css("opacity","1").css("cursor","pointer")
					$("#resetbtn").css("opacity","1").css("cursor","pointer")
					$("#resetbtn,#resetbtn1").off("click").on("click",resetfn)
					$("#digback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:cursorfn,revert:true,stop:cursorfn1});
					$("#brushback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:brushclickfn,revert:true,stop:brushclickfn});
					$("#timeback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:clockclickfn,revert:true,stop:clockclickfn,drag:showborder});
					$(".squareimg").droppable({accept: '.commonDrag' ,tolerance: 'touch',drop:squareclickfn});  
					//$(".stampClass").droppable({drop:StampclickFn});
					$(".stampClass").off('click').on('click',StampclickFn);
					$("#timebackdummy").css("display","none")
					$("#brushbackdummy").css("display","none")
					$("#digback").css({'background':'#ccc'});
					$("#brushback").css({'background':'white'});
					$("#timeback").css({'background':'white'});
				}
			}	
}
			 });
	
	     $("#popdiv").hide();
	     var id1  = parseInt(imagehidearray[imagehidearray.length-1].split("_")[1])
		 var id2  = parseInt(imagehidearray[imagehidearray.length-1].split("_")[2])
		 arrayclick[id1][id2] = 2;
		 clearTimeout(myVar);
		 if(imagearray.length == foscount)
		   {
		      $(".digclass").css("cursor","default")
			  $("#digfuldummy").css("display","block");
		   }
	   }
    }
 var activityFunction = function (currentPage)
 {
	dropedElem = false;
	audioElement  =  document.getElementById("audioId");
	
	if(currentPage == "welcome")
	{
	   audioElement.currentTime = 0.0;
	   audioElement.pause();	
	   $('#totaldiv').hide();
	   $('.screenIcon').off('click').css("cursor","default");	
	   $("#labhilight").css("display","none");
	}
       if(currentPage == "explore"){
		 audioElement.currentTime  = 0.0;  
		 audioElement.pause();	  
		 $("#digfuldummy").off('click').on('click',dummyClickClosefn)
		 audioIndex = 0;
		 stepIndex = 0;
		 $('.highlight') .hide();
		if(getIdSplit==0)
		 {
		    $('#digSiteDummy').show();
			$('.patchImage,#labdummy1').hide();
			digscreenfn();
			currentStep = 'digwelcome';
			if(foscount==5)
			{
				audioIndex = 1;
				currentStep = 'digend';
			}
		 	audioPlay();
			$('.screenIcon').off('click').css({"cursor":"default"}).attr('src','assets/images/template/camera_icon_disabled.png');
		}
		
		if(getIdSplit==1 && dragarray.length==0 )
		 {
			$('#labdummy1').show();
			$('#digSiteDummy').hide(); 
		 	lapscreenfn();
			currentStep = 'labwelcome';
			audioPlay();
		 }	
		 if(parseInt($('.expDiv').css("left")) < 0){SliderOkClick("open");}
		     if(getIdSplit==1 && dragarray.length!=0 )
			  {
				
				$('#labdummy1').show();
				$('#digSiteDummy').hide();
				lapscreenfn();
				currentStep = 'labwelcome';
				audioPlay();
				if(foscount==5)
				  {
					$("#sqareimg_1,#sqareimg_2,#sqareimg_4,#sqareimg_5").droppable({disabled:false})
					lapscreenfn();
					currentStep = 'labInit';
					audioPlay();
		            $('.activeSlider').off('click').on('click',activitySlideDiv);
				    $("#digSiteDummy").css("display","block")
					$("#labdummy1").css("display","block"); 
				  }
			  }
			//  SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
			}
			if(currentPage == "activity")
			{
			  audioElement.currentTime  = 0.0;  
              audioElement.pause();	
		      $("#digfuldummy").off('click').on('click',dummyClickClosefn)
			 $('.glowimg1').hide();
			 $('#glowimglay_0_1,#glowimglay_0_2,#glowimglay_0_3,#glowimglay_0_4').show();
			 audioIndex = 0;
		     stepIndex = 0; 
			 if(getIdSplit==0)
			 {
				$("#activity").css("display","block")
				$('#digSiteDummy').show();
				$('.patchImage').hide();
			 	digscreenfn();
				currentStep = 'digwelcome';
				if(foscount==1)
				{
					audioIndex = 1;
					currentStep = 'digend';
				}
			 	audioPlay();
				$('.screenIcon').off('click').css({"cursor":"default"}).attr('src','assets/images/template/camera_icon_disabled.png');
			 }
			
			if(getIdSplit==1 && dragarray.length==0 )
			 {
				$("#activity").css("display","none")
			    $('#digSiteDummy').hide(); 
			 	lapscreenfn();
				currentStep = 'labwelcome';
				audioPlay();
				$("#lab").css({'background':'url(assets/images/activity/labbg.png)'});
			}	
			 if(parseInt($('.expDiv').css("left")) < 0){SliderOkClick("open");}
		     if(getIdSplit==1 && dragarray.length!=0 )
			  {
		        $('.highlight').hide();
			    $("#brushbackhilight").css("display","block")
				$("#sqareimg_1,#sqareimg_2,#sqareimg_4,#sqareimg_5").droppable({disabled:true})
				$("#sqareimg_3").droppable({disabled:false})
				$("#labhilight").css("display","none")
				
			    //$("#brushbackhilight").css("display","block")
				$("#activity").css("display","none")
                $('#digSiteDummy').hide();
				lapscreenfn();
				currentStep = 'labwelcome';
				audioPlay();
				//if(parseInt($('.expDiv').css("left")) < 0){SliderOkClick("open");}
				//$('.activeSlider').off('click');
				  if(foscount==1)
				  {
					lapscreenfn();
					currentStep = 'labwelcome';
					audioPlay();
					//if(parseInt($('.expDiv').css("left")) > -280) SliderOkClick("open");
					//$('.activeSlider').off('click').on('click',activitySlideDiv);
				    $("#digSiteDummy").css("display","block");
					$("#timeback").css("background","#ccc");
					$("#timebackdummy").css("display","block");
                  }
			    }
				$("#labdummy1").css("display","block"); 
				//SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
		     }
		   }
		   
		   
    function exploreAndActivity(pageName)
      {
	    if(pageName=="welcome")
	    {
	    	
	    }
    if(pageName=="activity")
	  {
        resetfn()
	    $("#resetbtn,#resetbtn1").css({"opacity":"1","cursor":"default"});
		$(".glowimage").css("display","none");
		for(var i=0;i<5;i++)
	     {
		   for(var j=0;j<5;j++)  
		   {
		     if(arrayclick[i][j]==1)	
		      {
			    $('#glowimglay_'+i+'_'+j).css('display','block')
              }
			  if(i==0){
				  
			    if(cpage="activity")
				{
				  /* $(".labclass").append('<div id="identytxt_'+(j+1)+'"  class="identifytext" style="left:'+(31+(j*31+(j*148)))+'px;top:6px;position:absolute;width:150px;height:20px;text-align:center;display:none;font-size:14px;font-weight:bold">'+actidentytxtarray[j+1]+'</div>'); 
	              $(".labclass").append('<div id="analyzedtxt_'+(j+1)+'"  class="analyzedtxt" style="left:'+(31+(j*31+(j*148)))+'px;top:27px;position:absolute;width:150px;height:20px;text-align:center;display:none;font-size:14px;">'+actanalyzedtxtarray[j+1]+'</div>');   */	
					
				}					
			   
			   }
		   } 
	     }
		 
		 $(".labclass").append('<div id="actidentytxt_3"  class="actidentifytext" style="left:389px;top:6px;position:absolute;width:150px;height:20px;text-align:center;display:none;font-size:14px;font-weight:bold">Polylepis tree</div>'); 
		 
	     $(".labclass").append('<div id="actanalyzedtxt_3"  class="actanalyzedtxt" style="left:389px;top:27px;position:absolute;width:150px;height:20px;text-align:center;display:none;font-size:14px;">3,500 years</div>');   	
		 $("#spanacti").html("1")
		 $("#digoffdummy").css('display',"block")
	  }
    if(pageName=="explore")
	  {
	   resetfn()
       for(var i=0;i<5;i++) 
       {
		for(var j=0;j<5;j++)   
		{
		   
		   if(i==0){
			   
			 if(cpage=="explore")
			 {
				$(".labclass").append('<div id="identytxt_'+(j+1)+'"  class="identifytext" style="left:'+(31+(j*31+(j*148)))+'px;top:6px;position:absolute;width:150px;height:20px;text-align:center;display:none;font-size:14px;font-weight:bold">'+identytxtarray[j+1]+'</div>'); 
	           $(".labclass").append('<div id="analyzedtxt_'+(j+1)+'"  class="analyzedtxt" style="left:'+(31+(j*31+(j*148)))+'px;top:27px;position:absolute;width:150px;height:20px;text-align:center;display:none;font-size:14px;">'+analyzedtxtarray[j+1]+'</div>');  
		     }				 
			     
		   }
	     } 
	   }
	   
	   for(var i=0;i<imagearray.length;i++)
          {
               $("#"+imagearray[i]).append('<div id="fossilcross'+imagearray[i]+'" class="imageval closeimg" style="position:absolute;left:60px;top:26px;background:url(assets/images/activity/'+crossimgOutlie[i]+'.png) no-repeat;background-size:100% 100%;z-index:-1;width:100px;height:50px;display:none;"></div>')	
               if(crossimgOutlie[i]=="lab_e_5_outline")
				{
				   $("#fossilcross"+imagearray[i]).css({"transform":"scale(0.5)"})  
				}
				else
				{
				  $("#fossilcross"+imagearray[i]).css({"transform":"scale(0.4)"})  
				} 
		   
		  } 
	   $(".glowimage").css("display","none");
	   $(".highlightglow").css("display","none!important");
	   $("#spanacti").html("5")
	   $("#digoffdummy").css('display',"none");
	}
 }
var lapscreenfn = function()
 {
    $("#dig").css("display","none")
    $("#lab").css("display","block")
	$("#digback").removeClass("borderclass");
	//$("#digback").off("click").on("click",cursorfn); 
  if(imagehidearray.length!=0)
   {
     for(var i=0;i<imagehidearray.length;i++)
	  {
	    $("#cross"+imagehidearray[i]).css("display","none") 
	  }
	  var id1  = parseInt(imagehidearray[imagehidearray.length-1].split("_")[1])
	  var id2  = parseInt(imagehidearray[imagehidearray.length-1].split("_")[2])
	  arrayclick[id1][id2] = 2;
   } 
	$("#dig").css("cursor","default")
	$(".digclass").css("cursor","default")
    $("#dragimg").css("display","block")
	//$(".circle").off("click");
 }
 var closefn = function()
  {
     globalAudioPause();
	 $("#popup1").hide();
     $("#labdummydiv").hide();
  }
var digscreenfn = function()
 {
   $("#dig").css("display","block")
   $("#lab").css("display","none")
 } 
var cursorfn = function ()
{
	if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	if(FeedBack == 'wrong')
		{	
			$('.activeSlider').off('click');
			$("#digback").css("cursor","pointer");
		}
	$("#digback").addClass("borderclass").css("cursor","pointer");
	$("#dummydiv").css("display","none");
	if(!cursorChange)
	{
		$("#digback").addClass('borderclass').css("cursor","pointer");;
		cursorChange=true;
		 if(parseInt($(".expDiv").css('left') )>  0) $(".activeSlider").css("transform","rotate(0deg)") 
		//$(".circle").off("click").on("click",clickfn)
	}
	else 
	{
		//$(".digclass").css("cursor","default");
		//$("#digback").removeClass('borderclass').css("cursor","pointer");;
		//$(".circle").off("click");
		//$("#digback").css({'background':'#fff'})
		cursorChange=false;
		
	}
	$("#digback").css("cursor","pointer");
}

var cursorfn1 = function ()
{
	if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	if(FeedBack == 'wrong')
	{	
		//$('.activeSlider').off('click');
	}
	$("#digback").removeClass("borderclass");
	$("#dummydiv").css("display","none");
	if(!cursorChange)
	{
		//$(".digclass").css("cursor","url(assets/images/activity/axe.png)20 25, auto");
		$("#digback").removeClass('borderclass');
		cursorChange=true;
		  $(".activeSlider").css("transform","rotate(180deg)")  
		//$(".circle").off("click").on("click",clickfn)
	}
	else 
	{
		//$(".digclass").css("cursor","default");
		$("#digback").removeClass('borderclass');
		//$(".circle").off("click");
		//$("#digback").css({'background':'#fff'})
		cursorChange=false;
	}
}
var brushclickfn = function()
{
	if(!brushcursor)
	{
	 //$(".activeSlider").css("transform","rotate(0deg)")  
     if(parseInt($(".expDiv").css('left') )>  0) $(".activeSlider").css("transform","rotate(0deg)")  
	
	}
	else
	{
	  $(".activeSlider").css("transform","rotate(180deg)")  
      //if(parseInt($(".expDiv").css('left') )>  0) $(".activeSlider").css("transform","rotate(0deg)") 
      
	  
	}	
	
	if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	clockcursor = false;
	$("#timeback").removeClass("borderclass").css("cursor","pointer");
	toolName=$(this).attr("data-attr");
	if(!brushcursor)
	{
		
		if(cpage=="activity")
		{
		  $("#brushbackhilight").css("display","none")	
		}
		brushcursor = true;
		//$("#lab").css("cursor","url(assets/images/activity/brush.png)21 25, auto") ;
	    $("#brushback").addClass("borderclass");
	    $("#brush_0").css("z-index","110")
		
		
		
	}
	else
	{
		
		
		if(cpage=='activity'){currentStep = 'wrongbrush';wrongAttemptFun('stop');}
		else if(cpage=='explore'){ /* currentStep = 'wrongtext1'; */}
		
		brushcursor = false;
		//$("#lab").css("cursor","default");
		$("#brushback").removeClass("borderclass");
		if(cpage=="activity")
		{
		
		 
		  $("#brushbackhilight").css("display","block")	
		}
	}
	if(dragarray.length == 0)
	{
		currentStep = 'labwelcome';
		wrongAttemptFun('stop');
	}
}


var clockclickfn = function(event)
{
	if(!clockcursor)
	{
	
     if(parseInt($(".expDiv").css('left') )>  0) $(".activeSlider").css("transform","rotate(0deg)")  
	
	}
	else
	{
	  if(parseInt($(".expDiv").css('left') )< 0) $(".activeSlider").css("transform","rotate(180deg)")  
	      
	  
	}	





	
	if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	brushcursor = false;
	$("#brushback").removeClass("borderclass").css("cursor","pointer");;
	$("#timeback").removeClass("borderclass").css("cursor","pointer");;
	toolName=$(this).attr("data-attr");
	if(!clockcursor)
	{	
        
		if(!dropedElem)
		{
			clockcursor=true;
			if(!wrongBoxDropped) $("#timeback").addClass("borderclass");
			$('.highlight') .hide();
		}
		else
		{
			$("#timeback").removeClass("borderclass");
			
		}	
		
		
	}
	else
	{
		if(!dropedElem)
		{			
			if(cpage=='activity'){
				currentStep = 'wrongtimer';
				wrongAttemptFun('stop');
			}
			else if(cpage=='explore'){
				/*  currentStep = 'wrongtext1'; */
				$("#timeback").removeClass("borderclass").css("cursor","pointer");
				$("#brushback").removeClass("borderclass").css("cursor","pointer");			
			}
			clockcursor=false;
			$("#timeback").removeClass("borderclass"); 
			if(cpage=="activity" && brushIncrm == 1)
			{
			  $("#timebackhilight").css("display","block")	
			}
			else if(cpage=="activity" && brushIncrm == 0)
			{
				$("#brushbackhilight").css("display","block")
			}
		}		
	}
	if(/* dropedElem &&  */cpage =='explore') dropedElem = false; 
	if(dragarray.length == 0){
		currentStep = 'labwelcome';
	}
} 
 var identifytextsplit='';
 var analyzedtextsplit ='';
var mananimation = function()
{
	//$(".analyzedclass").css("cursor","default");
	//$(".identify").css("cursor","default");
	$("#brushback").removeClass("borderclass");
	$("#brushbackdummy").css("display","block")
	$("#timebackdummy").css("display","block")
	clearTimeout(timervar2);
    mananimate++; 
	$("#man_1").css({backgroundPosition:(-350*(mananimate%10))+'px '+(-350*(Math.floor(mananimate/10)))+'px'});
	timervar2= setTimeout(mananimation,speedArr[4]);
	if(mananimate == 200)
	  {
		//$('.popupImages').css({'border':'2px solid #ccc'});
	  	clearTimeout(timervar2);
		$("#man_1").css({'background':'url(assets/images/activity/man.png)'});
		currentStep = findImgName+'brush';
		var curpopsplit = findImgName.split("_")[2]
		
		
		$(".popupImages").attr("alt",titletextclean[curpopsplit]);
		cpage=="activity"
		  {
		    $(".popupImages").attr("alt","wood clean");	
		  }
	    //console.log(currentStep)
		setTimeout(function(){
			rightAttemptFun(); 
			$("#timebackdummy").css("display","none");
			$("#brushbackdummy").css("display","none");
			if(cpage=='activity')
		    {
			  $("#sqareimg_"+imgsplitid).css('background-image','url(assets/images/activity/lab_a_'+findImgName.split('_')[2]+'.png)').css("cursor","pointer").attr("alt","wood clean")
			  $("#timebackhilight").css("display","block")
			  
		    }
	      if(cpage=='explore')
	        {
	          	$("#sqareimg_"+imgsplitid).css('background-image','url(assets/images/activity/lab_e_'+findImgName.split('_')[2]+'.png)').css("cursor","pointer").attr("alt",titletextclean[findImgName.split('_')[2]])
	        }	
			$("#identify_"+imgsplitid).css("cursor","pointer")
			$("#brushback,#timeback").css({'background':'#fff'});
			identifytextsplit = findImgName.split("_")[2] 			
	       if(cpage=='explore')
			{	
				$("#identytxt_"+identifytextsplit).css("display","block").css("left",$("#sqareimg_"+imgsplitid).css("left"));
			}
			stampIdentify = identifytextsplit;
			if(cpage=='activity')
		      {
			     if(identific == 1)	
		           {
			          $("#brushbackdummy").css("display","block");
			          $("#brushback").css("background","#ccc");
					  $("#timeback").css("background","#fff");
					  $("#timebackdummy").css("display","none");
				    }
		      }
	        if(cpage=='explore')
	           {
	  	          if(identific == 5)	
		           {
			         $("#brushbackdummy").css("display","block");
			         $("#brushback").css("background","#ccc");
	               }
		
	          }	
			$(".curentanimationdiv").css("display","none");
			}, 1000);
			/* setTimeout(function(){
				rightAttemptFun();
			}, 2000); */
		$('.screenIcon').off('click').on("click",captureScreen).css({"cursor":"pointer"}).attr('src','assets/images/template/camera_icon.png');
		mananimate=0;
		//divClickRes(); 
		$("#brushback").removeClass("borderclass");
		//$("#digSiteDummy").hide();
		$("#identify_"+squareCount).css('display','block');
		$("#spanidentific").html(identific);
	}
}
var mananimationTimer = function()
{
	//$(".analyzedclass").css("cursor","default");
	//$(".identify").css("cursor","default");
	$("#brushbackdummy").css("display","block")
	$("#timebackdummy").css("display","block")
	$("#timeback").removeClass("borderclass");
	
	$("#man_2").css({'background-image':'url(assets/images/activity/manTimer.png)',backgroundPosition:(-620*(mananimateTimer%12))+'px '+(-345*(Math.floor(mananimateTimer/12)))+'px'});
	clearTimeout(timervarTimer);
    mananimateTimer++; 
	if(mananimateTimer == 83)
	{
		timervarTimer= setTimeout(mananimationTimer,3000);
	}
	else
	{
		timervarTimer= setTimeout(mananimationTimer,speedArr[5]);
	}
	if(mananimateTimer == 300)
	  {
		$("#man_2").css({'background-image':'url(assets/images/activity/manTimerLast.png)',backgroundPosition:'0px 0px'});
        $('.screenIcon').off('click').on("click",captureScreen).css({"cursor":"pointer"}).attr('src','assets/images/template/camera_icon.png');
	  	$("#analise_"+imgsplitid).css("cursor","pointer")
		
		clearTimeout(timervarTimer);
		//$("#man_2").css({backgroundImage:'url(assets/images/activity/man.png)'})
	  	mananimateTimer=15;
		//divClickRes();
		$("#timeback").removeClass("borderclass");
		findImgName=findImgName.replace('lab','img')
		currentStep = findImgName+'timer';
		//$('.popupImages').css({'border':'2px solid #ccc'});
        //$("#digSiteDummy").hide();
		$("#identify_"+squareCount).css('display','none');
		$("#analise_"+squareCount).css('display','block');
		$("#spananalyzed").html(analyzied);
		setTimeout(function(){
		    //rightAttemptFun();
		    $("#brushbackdummy").css("display","none")
			$("#timebackdummy").css("display","none")
			$("#brushback,#timeback").css({'background':'#fff'})
			
			$(".curentanimationdiv").css("display","none");
			if(cpage=='explore')
	          {
	  	        if(identific == 5)	
					{
						$("#brushbackdummy").css("display","block");
						$("#brushback").css("background","#ccc");
					}	 
				if(analyzied == 5)	
					{
						
						stepIndex=0;
						audioPlay(); 
						//SliderOkClick("open");
						$("#brushbackdummy").css("display","block");
						$("#timebackdummy").css("display","block");
						$("#timeback").css("background","#ccc");
						$("#brushback").css("background","#ccc");
						$("#arrowimg").css("display","block")
						
					}
		
	        }	

		if(cpage=='activity')
		  {
			
			if(identific == 1)	
		      {
			     $("#brushbackdummy").css("display","block");
			     $("#brushback").css("background","#ccc");
	          }	 
			if(analyzied == 1)	
		      {
			     stepIndex=0;
			     audioPlay(); 
			     //SliderOkClick("open");
                 $("#brushbackdummy").css("display","block");
			     $("#timebackdummy").css("display","block");
			     $("#timeback").css("background","#ccc");
			     $("#brushback").css("background","#ccc");
				 $("#arrowimg").css("display","block");
				 //$('.shadowBottom').css('bottom','34px');
				 $("#actidentytxt_3").css("display","block")  
				 $("#actanalyzedtxt_3").css("display","block")  
				 
				 /* $('#identytxt_1').text('Polylepsis tree');
				 $('#analyzedtxt_1').text('35,000 years'); */
				 //console.log($('.shadowBottom').css('bottom'));
	          }
			
		}	
	}, 2000);

			setTimeout(function()
			{
				rightAttemptFun();
				
				if(cpage=="explore")
				{
				analyzedtextsplit = findImgName.split("_")[2] 
				$("#analyzedtxt_"+analyzedtextsplit).css("display","block").css("left",$("#sqareimg_"+imgsplitid).css("left"));
				//$("#identytxt_"+identifytextsplit).css("display","block").css("left",$("#sqareimg_"+imgsplitid).css("left"));
				stampIdentify = analyzedtextsplit;
				
				}
				//console.log(analyzied);
				if(analyzied == 1 && cpage=="activity")
					{ 
						$("#arrowimg").css("display","block");
						$('.shadowBottom').css({bottom:'34px'});
						
					}
				/* else
					{
						$("#arrowimg").css("display","none");
						$('.shadowBottom').css('bottom','0px');
						console.log("222")
					} */
				if(analyzied == 5 && cpage=="explore")
					{
					  $("#arrowimg").css("display","block")
					 
					  
					}
						
					
				
			}, 1000);
		
	  }
}

var lastmessagefn = function()
   {
	  if(getIdSplit == 1 && cpage=="explore")
	  {
     
	  $("#arrowimg").css("display","none")
      $("#wholelabdummy").css("display","block")
      $("#activitytotaldummy").css("display","block")
	  currentStep = 'labend';	  
	  sliderFunCalled = false;
	  stepIndex=0;
	  audioPlay(); 
	}
	if(getIdSplit == 1 && cpage=="activity")
	  {
     
	  $("#arrowimg").css("display","none")
      $("#wholelabdummy").css("display","block")
      $("#activitytotaldummy").css("display","block")
	  currentStep = 'labend';	  
	  sliderFunCalled = false;
	  stepIndex=0;
	  audioPlay(); 
	}
	
	
	
	if(getIdSplit == 0)
	{
		currentStep='digend';
		rightAttemptFun();
		$("#arrowimg").css("display","none")
	}
	if(cpage=="activity" && getIdSplit == 0)
	  {
	    
		/* $("#labdummy1").css("display","none");	
		$("#labhilight").css("display","block");
		$("#digfuldummy").css("display","block");
		$("#labhilight").off("click").on("click",dummyclickfnval) */
		
		
		
	  }
	  if(cpage=="activity" && getIdSplit == 1)
	  {
		$("#activitytotaldummy").css("display","block");
		$("#activitytotaldummy").off("click").on("click",lastsiderclose);
		
		  
	  }
	// SliderOkClick("open");
  }

  function lastsiderclose()
  {
	if(parseInt($('.expDiv').css("left")) >= 0){SliderOkClick("close");}
	globalAudioPause();
	AudioNameget =  'vlfsda_19';
  }
 
 function dummyClickClosefn()
  {
	 
	  
	  wrongResPos=5;
	  $('#expimgcont').hide();
	  
	  AudioText=incorrectText[wrongResPos]; 
	  globalAudioPause();
	  AudioNameget=incorrectaudio[wrongResPos];
	 
	  
	  $(".expDiv .expPara").html(AudioText);
	 if(parseInt($('.expDiv').css("left")) >= 0){ SliderOkClick("close");}
  }
var dummyclickfnval = function()
  {
    $('#ch2').trigger('click');	
  }  
  
  
var timerstartfn = function()
  {
    clockstart = false;
	$("#timeback").addClass("borderclass");
  }
var axespritefn = function(valid)
 {	
if(cpage=='activity')
	  {
	    $(".glowimage").hide();
	  }
	clearTimeout(axeanimationfn);
    axeanimation++;
	$("#digani").css("z-index","15");
	//$("#digani").hide();
    $("#digani").css({backgroundPosition:(-300*(axeanimation%10))+'px '+(-300*(Math.floor(axeanimation/10)))+'px'});
	axeanimationfn = setTimeout(function(){
		$("#digback").css({'background':'#ccc'});
		axespritefn();
	},speedArr[0]);
	if(clipArr.indexOf(axeanimation) != -1)
	{
	    $("#cross"+DivId).show();
		var widthOfElem = parseInt($('#box_'+firstSplitElem+"_"+secondSplitElem).width());
		$('.maskLayer').hide();
		$('#imageMask_'+firstSplitElem).show();
		if(axeanimation != 'undefined')
		{
			$('#imageMask_'+firstSplitElem).css({'-webkit-mask-image':'url("assets/images/activity/'+axeanimation+'thframe.png")',' -webkit-mask-repeat': 'no-repeat' , '-webkit-mask-position': ((secondSplitElem-1)*widthOfElem)+'px center'});
		}
		$(".digpath").show();
		if(clipArr[clipArr.indexOf(axeanimation)-3] != 'undefined')
		{
			$("#cross"+DivId).css({'-webkit-mask-image':'url("assets/images/activity/'+clipArr[clipArr.indexOf(axeanimation)-3]+'thframe.png")',' -webkit-mask-repeat': 'no-repeat' , '-webkit-mask-position':'center center'});
		}
	}
	if(axeanimation==200)
	{
		$("#finspan2").html(count)
		$('.maskLayer').hide();
		$('#imageMask_'+firstSplitElem).css('-webkit-mask-image','none')
		$('#layer_'+splitid+'_'+splitidval).fadeIn()
		$("#dig_"+clipArr.indexOf(axeanimation)).show();
		clearTimeout(axeanimationfn);
		axeanimation=0;
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		$("#digani").css("display","none")
		$("#sp1").html(" "+foscount);
		$("#spandig1").html("Digs: "+count)
        var splitone = correctclickid.split("_")[1];
        var splittwo = correctclickid.split("_")[2];
		$("#imglay_"+splitone+"_"+splittwo).css("display","block") 
	    $('.screenIcon').off('click').on("click",captureScreen).css({"cursor":"pointer"}).attr('src','assets/images/template/camera_icon.png');
	    
		if(cpage=='explore')
		{
		  $("#resetbtn,#resetbtn1").off("click").on("click",resetfn) 	
		  $("#resetbtn1").css("opacity","1").css("cursor","pointer")
		  $("#resetbtn").css("opacity","1").css("cursor","pointer")	
		}
		
		if(cpage=='activity')
	     {
	       for(var i=0;i<arrayclick[0].length;i++)
		    {
			   
			  
			   if(arrayclick[0][i]==1)
			   {
				 $('#glowimglay_0_'+i).css("display","block");   
			   }
			}	
		 if(foscount==1)
			   {
				$('.glowimage').css("display","none");
			   }
		    }  
		setTimeout(function(){$("#digbackdummy").css("display","none"); }, 900);
		if(imagearray.indexOf(DivId) != -1)
			{
				$("#cross"+DivId).css({'-webkit-mask-image':'url("assets/images/activity/198thframe.png")',' -webkit-mask-repeat': 'no-repeat' , '-webkit-mask-position':'center center'});
			    myVar = setTimeout(function(){ 
					
					if(imagearray.length >= foscount) 
					{
						
						currentStep=popupImg
					    currentstepsplitval = currentStep.split("_")[2]
						$(".popupImages").attr("alt",titletext[currentstepsplitval]);
						if(cpage=="activity")
						{
						  $(".popupImages").attr("alt","wood dirty");	
						}
						
						rightAttemptFun();
						 if(cpage=='activity')
						  {
							//$(".glowimage").hide();
							if(foscount==1)
							   {
								  currentStep="digend";
						          rightAttemptFun();
							   }
						  }
						if(cpage=='explore')
						  {
							  if(foscount==5)
								{
								  $('#arrowimg').show();
								}
		                  }	
					}
				},speedArr[1]); 
				myTimeout = setTimeout(function(){
					//$(".circle").off("click");
					//$("#digback").off("click").on("click",cursorfn);
					//$("#resetbtn").off("click").on("click",resetfn)
					$("#digback").removeClass("borderclass");
					activityOkFun();
					
					clearTimeout(myTimeout);
					
				},speedArr[2]);
			}
			else
			{
				    wrongResPos = 3;
				    myTimeout1 = setTimeout(function(){
					//$("#digback").off("click").on("click",cursorfn);
					//$(".circle").off("click");
					//$("#digback").off("click").on("click",cursorfn);
					//$("#resetbtn").off("click").on("click",resetfn)
					$("#digback").removeClass("borderclass");
					$("#digback").css({'background':'#fff'});
					clearTimeout(myTimeout1);
					$("#digback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:cursorfn,revert:true,stop:cursorfn1});
					$("#brushback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:brushclickfn,revert:true,stop:brushclickfn});
                    $("#timeback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:clockclickfn,revert:true,stop:clockclickfn,drag:showborder});
					$(".squareimg").droppable({accept: '.commonDrag' ,tolerance: 'touch',drop:squareclickfn});  
					//$(".stampClass").droppable({drop:StampclickFn});
					$(".stampClass").off('click').on('click',StampclickFn);
					if(cpage=="explore")
					  {
					    $("#labdummy1").css("display","none");	
				      }
					
					if(cpage=="activity")
		             {
		            	wrongResPos=4;
		            	wrongAttemptFun('drop'); 
		             }
				   },speedArr[3]);
			}		
	}
}

var brushstartfn = function()
  {
	$("#brushback").addClass("borderclass");   
    brushstart = false;
  }
var dragfn = function()
  {
  
  }
var stopfn = function()
  {
     $("#brush_1").css("z-index",101)
	 $("#brushback").removeClass("borderclass");   
  }
var stopfn1 = function()
  {
     $("#timer_1").css("z-index",101)
	 $("#timeback").removeClass("borderclass");  
	 
  }
var resetfn = function()
{
 identifytextsplit='';
 analyzedtextsplit ='';
 audioElement.currentTime  = 0.0;  
 audioElement.pause();	
 $(".expDiv").css("top","102px")
 dropedElem = false;
 $("#arrowimg").hide()
 totalDigs = 0;
 mananimateTimer = 15; 
 mananimate = 0; 
 spriteAnim1 = 0;
 spriteAnim = 0;
 axeanimation = 0;
 clearTimeout(timervar2)
 clearTimeout(timervarTimer)
 clearTimeout(axeanimationfn)
 clearTimeout(myVar)
 clearTimeout(myTimeout)
 clearTimeout(myTimeout1)
 dragarray = [];
 emptyarrayloc = [];
 imagehidearray = [];
 brushdrag = [];
 clockdrag = [];
 clockstart = true;
 brushstart = true;
 brushcursor = false;
 clockcursor = false;
 clockcountbool = false;
 myfun();
 imganimationarray = [];
 correctarray = [0,0,0,0,0,0,0]
 count = 0;
 foscount = 0;
 brushIncrm = 0;
 clockIncrm = 0;
 clockcount1 = 0;
 brushcount1 = 0; 
 clockcount = 0;
 brushcount = 0; 
 identific = 0;
 analyzied = 0;
 squareCount=0;
 $("#digback").removeClass("borderclass");
 $("#digback").css({'background':'#fff'});
 $("#spandig1").html("Digs: "+count)
 $("#sp1").html(" "+foscount)
 $(".fbox,.fboxo").css("background","none")
 $(".digclass").css("cursor","default")
 $("#dragimg").css("display","block")
 $(".imageval").remove();
 $(".squareimg").remove();
 $("#dummydiv").css("display","block")
 $("#popdiv").css("display","none")
 $("#labdummy1").css("display","none")
 $("#digdummy").css("display","none")
 $("#digfuldummy").css("display","none")
 $("#resetpopup").css("display","none")
 $("#popfinished").css("display","none")
 $("#tableimg").css("display","none")
 $("#microscopeimg").css("display","none")
 $("#finalpopup").css("display","none")
 $(".identifytext").css("display","none")
 $(".analyzedtxt").css("display","none")
 $("#activitytotaldummy").css("display","none");
 $("#actidentytxt_3").css("display","none");  
 $("#actanalyzedtxt_3").css("display","none");
 $("#activitytotaldummy").css("display","none")
 $(".popupImages").attr("alt","")
 $("#spanfound").html(0)
 $("#spanidentific").html(0)
 $("#spananalyzed").html(0)
 $("#cross"+valid).remove();
 $(".maskbg").css("display","none") 
 $('.fbox').css('margin','0px')
 $("#resetbtn1").css("opacity","0.5").css("cursor","default")
 $("#resetbtn").css("opacity","0.5").css("cursor","default");
 $('.activeSlider').off('click').on('click',activitySlideDiv);
 $("#resetbtn,#resetbtn1").off('click');
 $("#labhilight").hide();
 imagearray = [];
 myfun();
 audioImgArr=['','','','','',''];
 $('.imageval').remove();
 for(var i=0;i<imagearray.length;i++)
  {
    $("#"+imagearray[i]).append('<div id="cross'+imagearray[i]+'"   class="imageval" style="position:absolute;left:60px;top:12px;background-image:url(assets/images/activity/'+[backgroundimagesarray1[i]]+'.png) ;z-index:-1;width:100px;height:50px;transform:scale(0.4);display:none;"></div>') 
  $("#"+imagearray[i]).append('<div id="fossilcross'+imagearray[i]+'" class="imageval closeimg" style="position:absolute;left:60px;top:26px;background:url(assets/images/activity/'+crossimgOutlie[i]+'.png) no-repeat;background-size:100% 100%;z-index:-1;width:100px;height:50px;display:none;"></div>')	

        if(crossimgOutlie[i]=="lab_e_5_outline")
				{
					//console.log("1")
					$("#fossilcross"+imagearray[i]).css({"transform":"scale(0.5)"})  
				}
				else
				{
					
					$("#fossilcross"+imagearray[i]).css({"transform":"scale(0.4)"})  
				}      
  
  }
       
   arrayclick = [];
   for(var i=0; i<(col); i++)
    {
	 arrayclick[i] = [];
	 for(var j=0; j<(row); j++)
	  {
		clockdrag[i] = 0; 	
	    brushdrag[i] = 0;
		if(i==0)
		{
			arrayclick[i][j] = 1;
			$(".labclass").append('<div id="sqareimg_'+(j+1)+'" data-ans="" class="squareimg squareimg1 " style="width:'+(150)+'px;left:'+(31+(j*31+(j*148)))+'px;height:123px;top:58px;" ></div>');
		   
		   if(cpage=="explore")
			{
			   $('#identytxt_'+(j+1)).text(identytxtarray[j+1]);
			   $('#analyzedtxt_'+(j+1)).text(analyzedtxtarray[j+1]);
			}
			
		}
		else
		{
		  arrayclick[i][j] = 0;
		}
	 }
  }
 $("#digback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:cursorfn,revert:true,stop:cursorfn1});
 $(".circle").droppable({accept:'#digback',drop:clickfn});
 $("#brushback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:brushclickfn,revert:true,stop:brushclickfn});
 $("#timeback").draggable({helper:'clone',containment:'.axeDragContainer',cursorAt:{"left":20,"top":25}, start:clockclickfn,revert:true,stop:clockclickfn,drag:showborder});
 $('rect').hide();
 $('#ch1').trigger('click');
 $(".stampClass").hide();
 $('#digani').css({'background-position': '0px 0px','display': 'none'})
 $('#man_1').css({'background-position': '0px 0px'})
 $('#man_2').css({'background-position': '0px 0px'})
 $('#digbackdummy,.maskLayer').hide();
 $('.screenIcon').off('click').on("click",captureScreen).css({"cursor":"pointer"}).attr('src','assets/images/template/camera_icon.png');
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
return array;
}	

function shuffle1(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function showborder()
{
	
	 $('.ui-draggable').draggable({revert:true});
	 $('.expDiv').draggable({revert:false});
	 
	$("#timeback").addClass("borderclass");
	 
}