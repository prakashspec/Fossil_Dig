var sliderFunCalled = false;
var alphabetArr = ['','one','two','three','four'];
function audioPlay()
	{	
	
		if($('.helpwindow').css('display') == 'none') globalAudioPause();
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
	
		
		AudioNameget=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioNamecon"][audioIndex][stepIndex];
		
		/* AudioNameget = window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioNamecon"][audioIndex][stepIndex]; */
		
		
		
		LengthFind=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].length-1;
		currentIndex=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].indexOf(AudioText);
		
		slideImg=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["Image"];
		if(currentStep =='digend' && FeedBack=='right'){
			
			
			if(count == 1)
			{
				
				AudioText=AudioText.replace('digs','dig');
				if(cpage=="explore")
				{
					AudioText=AudioText.replace('[X]',count);
					
				}
				if(cpage=="activity")
				{
                    
					AudioText=AudioText.replace('[X]',alphabetArr[count]);  
                   
 					
					globalAudioPause();
					AudioNameget =  'vlfsda_05_1';
				}
			}
			else
			{
				
				
				if(cpage=="explore")
				{
				    AudioText=AudioText.replace('[X]',count);
					globalAudioPause();
				    AudioNameget =  'vlfsde_16_'+count;	
				   
				}
				if(cpage=="activity")
				{
                    AudioText=AudioText.replace('[X]',alphabetArr[count]);
					globalAudioPause();  				
				    AudioNameget =  'vlfsda_05_'+count;
			    }
				
			}
			
			
			
			
		}
		
		$(".expDiv .expPara").html(AudioText);
		
		/* if(cpage == 'activity' && count == 4)
		{
			$('#totalfoil1').text('');
		}
		else
		{
			$('#totalfoil1').text('only');
		} */			
		if(slideImg!="")$(".expimgcont img").attr("src",imgBaseAct+slideImg);
		sliderNavigationFun();
		if(!sliderFunCalled){
			    //var slidetimeout=setTimeout(function(){		
				$('.expChild').css('height','auto');				
				SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
 
		}
		$('#arrowimg').hide();
		$('.activeSlider').off('click').on('click',activitySlideDiv);
			
	}

function MoveToNextStep()
	{
		if(FeedBack=="wrong")
			{
				SliderOkClick("close");
				return;
			}
		if(audioIndex==0 && stepIndex == LengthFind)
			{
				audioIndex=0;
				stepIndex=0;
				SliderOkClick("close");
				return;
			}
		if(stepIndex!=LengthFind)
			{
				stepIndex++;			
				audioPlay();
				return;
			}
		if(audioIndex==1 && stepIndex==LengthFind)
			{	
				audioIndex=0;
				stepIndex=0;
				SliderOkClick("close");
				return;
			}
			FeedBack="step";
	}
  function rightAttemptFun()
	{  
		sliderFunCalled = false;
		//totalStepArr[currentStep]=1;
		FeedBack="right";
		if(cpage == 'activity')
		{
			$(".highlight").hide();
			$('.timebackhilight').show();
			dropedElem = false;
		}
		//currentStep++;
		audioIndex=1;			
		stepIndex=0;
		audioPlay();
		setSliderTop();
		brushcursor = false;
		clockcursor=false;		
	}
 
 function wrongAttemptFun(ElemLevel)
	{
		sliderFunCalled = false;
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		noStepArr[currentStep]++;
		FeedBack="wrong";
		if(ElemLevel=="drop")
		{
			$('#expimgcont').hide();
			
			AudioText=incorrectText[wrongResPos]; 
			globalAudioPause();
			AudioNameget=incorrectaudio[wrongResPos];
			$(".expDiv .expPara").html(AudioText);
			if(parseInt($('.expDiv').css("left")) < 0){SliderOkClick("open");
			scrollDestroy()
			
			
			}
		}
		else if(ElemLevel=="stop")
		{
			audioIndex=2;
			stepIndex=0;
			audioPlay();
		}
		
		$('.navSliderBtn').hide();
		/*   if(cpage == 'activity' && getIdSplit == 1)
		{
			if(parseInt($(".expDiv").css("top")) < 255)
			$(".expDiv").css("top","255px")
		}   */
		setSliderTop();
	}
	
function toggleExpTabs()
	{
		StateCheck=$(this).attr("id").split("_")[1]-1;
		$(".labelRight").removeClass('labelArrow').css({'cursor':"pointer","background":backgroundNcolor[2][0],"color":backgroundNcolor[2][1]});
		$(this).addClass("labelArrow").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		audioPlay();
		//activityFunction(cpage);
	}

function SliderFunc(ImgStatus,okStatus,sliderStatus)
{	

	sliderFunCalled = true;
	if(sliderStatus=="slidershow")
	{
		
		$(".expDiv").css("display","block");
		if((ImgStatus=="imgshow" && slideImg!="") || slideImg!=""){$(".expimgcont").css("display","block");$('.audioTextDiv').css('margin-top','-11px');$(".expDiv").css("padding-top","0px");}
		else if((ImgStatus=="imgshow" && slideImg!="")  || slideImg==""){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');$(".expDiv").css("padding-top","12px");}
		if(FeedBack=='wrong'){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');$(".expDiv").css("padding-top","12px");}
		if(okStatus=="okshow"){$(".moveNextFood").css("display","block");}
		else if(okStatus=="okhide"){$(".moveNextFood").css("display","none");}	
		
		scrollApplying();
		//------------Slider Bottom set when text changes-------//
		setSliderTop();

	}
	else
	{
		 $(".expDiv,.EventNotAllowed").css("display","none");
	}
}

function setSliderTop()
	{
		
		if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 530){
				$('.expDiv').css({top:parseInt(520-($('.expDiv').height())),position:'relative'});	
				if(cpage == 'activity') {				
					$('.expDiv').css({top:500-$('.expDiv').height()+'px'});
				}
			}
	}

function scrollDestroy()
	{
		$('.expDiv').find('.shadowTop,.shadowBottom').remove();
		$('.expChild').mCustomScrollbar('destroy');
		$(".expChild").css({'overflow-y':'hidden'});
		$('.expDiv').css('padding-bottom','0px');	
		$('.expChild').mCustomScrollbar('destroy');
		$('.expChild').css('height','auto');
	}

var scrollApplying = function(){	
	
	$('.expDiv').find('.shadowTop,.shadowBottom').remove();
	$('.expChild').mCustomScrollbar('destroy');
	$(".expChild").css({'overflow-y':'hidden'});
	
	
    if($(".expDiv").height() > 370 && cpage == 'explore')
	{
	     
			$('.arrowBar').css('bottom','16px');	
		   if($('.navSliderBtn').css('display') == 'block'){
			$('.expChild').css('height',330);
			$('.expDiv').css('padding-bottom','44px');
			
			
		}
		else if ($('#arrowimg').css('display') == 'block' && cpage == 'explore'  && (analyze == true)  ){
		  
			$('.expChild').css('height',316);		
			$('.arrowBar').css('bottom','-14px');		
			$('.expDiv').css('padding-bottom','24px');		
		}
		else if ((analyze == false)){
		   
			$('.expChild').css('height',350);		
			$('.expDiv').css('padding-bottom','0px');		
		}
		
		scrollApplyChoose('expDiv','expChild');
		sliderFunCalled = false;
		if($('.expFoodBar').css('display') == 'flex') $('.expFoodBar').css({    bottom: '0px'});
		if(parseInt($('.expDiv').css("left")) < 0){var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	
		
		
		
		},0);}
	}
	
	else if($(".expDiv").height() > 380 && cpage == 'activity' )
	{
	
			$('.arrowBar').css('bottom','6px');	
		if($('.navSliderBtn').css('display') == 'block'){
			$('.expChild').css('height',306);
			$('.expDiv').css('padding-bottom','44px');
			
			
		}
		
		else {
		     
			$('.expChild').css('height',350);		
			$('.expDiv').css('padding-bottom','0px');		
		}
		
		scrollApplyChoose('expDiv','expChild');
		sliderFunCalled = false;
		if($('.expFoodBar').css('display') == 'flex') $('.expFoodBar').css({    bottom: '0px'});
		if(parseInt($('.expDiv').css("left")) < 0){var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	
		},0);}
	}
	else
	{
          

	   $('.arrowBar').css('bottom','6px');	
		if($('.expFoodBar').css('display') == 'flex') $('.expFoodBar').css({    bottom: 'inherit'});
		$('.expDiv').css('padding-bottom','0px');	
		$('.expChild').mCustomScrollbar('destroy');
		$('.expChild').css('height','auto');
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);
		
	}
		
  }
}












function scrollApplyChoose(parent,child)
{	
	$('.'+parent).append('<div class="shadowTop"></div><div class="shadowBottom"></div>');
	$('.shadowTop,.shadowBottom').css('display','none');
	$('.shadowBottom').css('display','block');	
	
	if($('.navSliderBtn').css('display') == 'block'){		
		$('.shadowBottom').css({bottom:'44px'});
	}else if($('#arrowimg').css('display') == 'block' ){	
		if( cpage == 'explore')	$('.shadowBottom').css({bottom:'50px'});
		else $('.shadowBottom').css({bottom:'34px'});
	}else if(analyzied == 1 && cpage=="activity") {
	}else{
		$('.shadowBottom').css({bottom:'0px'});
	}	
	if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'104px'});
	
	$("."+child).css({'overflow-y':'auto'});
	$("."+child).mCustomScrollbar({theme:"3d-thick",scrollInertia: 800,
	live: true,
	callbacks:{
		onScrollStart:function(){
		  if(parent == 'helpinner') $('.helpinner .shadowTop,.helpinner .shadowBottom').css('display','block');
		  else $('.shadowTop,.shadowBottom').css('display','block');
		},
		onTotalScroll:function(){
			if(parent == 'helpinner') {
				$('.helpinner .shadowBottom').css('display','none'); 
				$('.helpinner .shadowTop').css('display','block');
				}
			else {
				$('.shadowBottom').css('display','none'); 
				$('.shadowTop').css('display','block');
			}
		},
		onScroll:function(){
		  if(this.mcs.top == 0)
			{
				if(parent == 'helpinner') {
					$('.helpinner .shadowBottom').css('display','block'); 
					$('.helpinner .shadowTop').css('display','none');					
				}
				else {
					$('.shadowBottom').css('display','block'); 
					$('.shadowTop').css('display','none');
				   
				} 
 				if($('.navSliderBtn').css('display') == 'block'){		
					$('.shadowBottom').css({bottom:'44px'});				
				}
				else if($('#arrowimg').css('display') == 'block'){		
					if( cpage == 'explore')	$('.shadowBottom').css({bottom:'50px'});
					else $('.shadowBottom').css({bottom:'34px'});
				
				}
				else{
					$('.shadowBottom').css({bottom:'0px'});					   
				}
				if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'104px'});
				
			
				
			}
		}
	}});
	
    $("."+child).mCustomScrollbar("scrollTo",[0,0]);
	//$('.expFoodBar').css('bottom','-44px');
	scrollApply(parent)
}
	
var scrollApply = function(frParent)
	{	
	
		$('.mCSB_draggerContainer').css({boxShadow:'none'}).css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');
		$('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css({boxShadow:'none'}).css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		if(frParent != 'helpinner')	$('.mCSB_inside>.mCSB_container').css({paddingTop: '0px'});
		//$('.mCSB_container').css({height:'100%'});
		$('.mCSB_dragger').css({minHeight:'94px'});
		$('.mCSB_scrollTools').css('z-index',10);
	}	
/* 
function scrollApplyChoose(parent,child)
	{	
		$('.'+parent).append('<div class="shadowTop"></div><div class="shadowBottom"></div>');
		$('.shadowTop,.shadowBottom').css('display','none');
		$('.shadowBottom').css('display','block');	
 		if($('.expFoodBar').css('display') == 'flex'){		
			//$('.shadowBottom').css({bottom:'44px'});
		}
		else {
			//$('.shadowBottom').css({bottom:'0px'});
			 if(cpage == 'activity' && currentStep =='img_a_3timer')
			{
				$('.shadowBottom').css({bottom:'34px'});
			} 
			
			if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'104px'});
		}		
		
		$("."+child).css({'overflow-y':'auto'});
		$("."+child).mCustomScrollbar({theme:"3d-thick",scrollInertia: 800,
		live: true,
		callbacks:{
			onScrollStart:function(){
				if(parent == 'helpinner') $('.helpinner .shadowTop,.helpinner .shadowBottom').css('display','block');
				else $('.shadowTop,.shadowBottom').css('display','block');
			},
			onTotalScroll:function(){
					if(parent == 'helpinner') {
						$('.helpinner .shadowBottom').css('display','none'); 
						$('.helpinner .shadowTop').css('display','block');
						}
					else {
						$('.shadowBottom').css('display','none'); 
						$('.shadowTop').css('display','block');
					}
			},
			onScroll:function(){
			  if(this.mcs.top == 0)
				{
					if(parent == 'helpinner') {
						$('.helpinner .shadowBottom').css('display','block'); 
						$('.helpinner .shadowTop').css('display','none');
						}
					else {
						$('.shadowBottom').css('display','block'); 
						$('.shadowTop').css('display','none');
					}
					if($('.expFoodBar').css('display') == 'flex'){		
						//$('.shadowBottom').css({bottom:'44px'});
					}
					else {
						if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'104px'});
						else {
						
						$('.shadowBottom').css({bottom:'0px'});	
						}
						
						if((cpage == 'activity') && ($('.expFoodBar').css('display') == 'none'))
							{								
								if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'104px'});
								else{
									
									$('.shadowBottom').css({bottom:'0px'});
									
								} 								
							}
						 if(cpage == 'activity' && currentStep =='img_a_3timer')
						{
							$('.shadowBottom').css({bottom:'34px'});
						} 
					}
				}
			}
		}});
		$("."+child).mCustomScrollbar("scrollTo",[0,0]);
		//$('.expFoodBar').css('bottom','-44px');
		scrollApply()
	}
	
var scrollApply = function()
	{	
		$('.mCSB_draggerContainer').css({boxShadow:'none'}).css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');
		$('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css({boxShadow:'none'}).css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		//$('.mCSB_container').css({height:'100%'});
		$('.mCSB_dragger').css({minHeight:'94px'});
		$('.mCSB_scrollTools').css('z-index',10);
		$('.sliderContain').css('height',448);
		$('.shadowBottom').css('bottom','0px');

		
		$('.arrowBar').css('bottom','6px');
		var tempTime = window.setTimeout(function(){			
			if((cpage == 'activity') && ($('.expFoodBar').css('display') != 'none'))
				{
					$('.sliderContain').css('height',400);					
				}
			if((cpage == 'activity') && ($('.expFoodBar').css('display') == 'none'))
				{
					$('.shadowBottom').css('bottom','0px');
					
				}
			 if(cpage == 'activity' && currentStep =='img_a_3timer')
				{
					$('.shadowBottom').css({bottom:'34px'});
				} 	
				
			window.clearTimeout(tempTime);		
		},100);
	}
	 */
var buttonClick = function(e)
{ 
	buttonId = $(this).attr('id');
	getIdSplit=buttonId.split("ch")[1]-1;
	activityFunction(cpage);
	headerTabs($(this));
	audioPlay();
}

function SliderOkClick(OkClickState)
{
	if(OkClickState=="open")
	{
		rotateValue=0;
		angleRot=0;
		if(MainNavigations==2){$(".EventNotAllowed").show();}
		else{$(".EventNotAllowed").hide();}
	}
	else if(OkClickState=="close")
	{
		rotateValue=-280;
		angleRot=180;
		$(".EventNotAllowed").hide();
		globalAudioPause();		
		if(cpage == 'activity' && $(".expDiv").height() < 306)
		{
			scrollDestroy();
		}	
	}
	slideAnimate();
}
	
function activitySlideDiv()
	{
		rotateValue = (rotateValue == 0)?-280:0;			
		angleRot = (angleRot == 0)?180:0;
		if(parseInt($('.expDiv').css('left'))>=0) globalAudioPause();
		slideAnimate();	
	}
	
	

function slideAnimate()
{
	$('.expDiv').stop().animate({left:rotateValue},800,function(){			
			$('.activeSlider').myMethod1(angleRot);	
			if(parseInt($('.expDiv').css('left'))==-280 && getIdSplit == 0 && count < 5 && cpage=="explore")
			{
				$(".expimgcont").css({'display':'none'});
				$(".expPara").html('Drag the pickax tool to the location you want to dig.');
				globalAudioPause();
				AudioNameget ='vlfsde_04'
				
			}
			if(parseInt($('.expDiv').css('left'))==-280 && getIdSplit == 1 && count == 5 && (identific < 5 || analyzied < 5) && cpage=="explore")
			{
				$(".expimgcont").css({'display':'none'});
				 
				$(".expPara").html('Select the Brush tool to clean and identify each fossil. After you have identified a fossil, you can select the Hourglass tool to date the fossil and analyze it.');
				
				globalAudioPause();
				AudioNameget ='vlfsde_34'
			    //scrollDestroy();
				if(cpage == 'explore' && $(".expDiv").height() < 380){
					scrollDestroy();
				}
			} 
		});
		
		setSliderTop()
}
$.fn.extend({
		myMethod1: function(angle){$(this).css('transform','rotate('+(angle)+'deg)')}
	});	
function TabsStateRightAndTop(topMenu,rightMenu,baseImg)
{
	if(topMenu=="topmenushow"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"34px","height":"554px"});
	}
	else if(topMenu=="topmenuhide"){
		$(".highlightTab").hide();
		$(".workArea, .EventNotAllowed").css({"top":"0px","height":"588px"});
	}
	if(rightMenu=="rightmenushow"){$(".Modes").show();}
	else if(rightMenu=="rightmenuhide"){$(".Modes").hide();}
	if(baseImg=="baseimgshow"){$(".baseImg").show();}
	else if(baseImg=="baseimghide"){$(".baseImg").hide();}
}
 
 var currentIndex=0;

function nxtNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(LengthFind > currentIndex){stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{ $('.nxtBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
	scrollApplying()
}

function preNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
	scrollApplying();
}

function sliderNavigationFun()
{
	$('.PreBtnSlider,.nxtBtnSlider').css({'width':'28px','height':'28px'});
	if(LengthFind == 0 || LengthFind == -1)
	{
		$('.expFoodBar,.navSliderBtn').hide();
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default',pointerEvents:'none'});
		$('.audioTextDiv').css({'margin-bottom':'-33px'});
		return;
	}
	if(LengthFind == currentIndex)
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.expFoodBar,.navSliderBtn').show();
		$('.audioTextDiv').css({'margin-bottom':'-40px'});
		return;
	}
	if(currentIndex == 0 && LengthFind !=0)
	{	
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.expFoodBar,.navSliderBtn').show();
		$('.audioTextDiv').css({'margin-bottom':'-40px'});
		return;
	}
	if( currentIndex > 0 && LengthFind !=0 )
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.expFoodBar,.navSliderBtn').show();
		$('.audioTextDiv').css({'margin-bottom':'-40px'});
		return;
	}
		
}
 
 