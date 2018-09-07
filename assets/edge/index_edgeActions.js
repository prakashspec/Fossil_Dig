var disableSafari = false;	
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){


Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
	
	$('#Stage_welText').html(welcomeMode['step_0']['text']);
	$('#Stage_welcomeGroup').css('min-height','122px').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
	$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
	$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
	$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
	var lpos=welcomeMode['step_'+welcomeMove].position[0];
	var tpos=welcomeMode['step_'+welcomeMove].position[1];
	$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
	$('#Stage_left_slider_act').css('cursor','default');
	$('#Stage_audio_icon_normal').attr('audio-state','pause');
	$('#Stage_audio_icon_normal').addClass('expAudio');
	$('#Stage').append('<audio id="axe_aud"><source src="audio/great.mp3" type="audio/mp3"/></audio>');
	window.parent.$('.screenIcon').css('display','none');
	parent.adobeReady = true;
		
	var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	if(isMacLike && isSafari){disableSafari = true;}	
});
//Edge binding end
      
Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym,e){
	if(welcomeMove>0)
	{
		sym.getSymbol("boxAnim").stop();
		sym.$("boxAnim").hide();
		selectedIndex=0;
		welcomeMove--;
		$('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
		if(welcomeMove==7)
			{
				$('#Stage_rabbit_update_1').css('background-image','url(images/rabbit_update_1.png)');
			}
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);
		$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArrRev[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();		
	}
	
if(welcomeMove==0)
	{
		$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png').css('cursor','default');
	}
	$("#axe_aud").prop('currentTime',0);
	$("#axe_aud").trigger('pause');
		
});
      //Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym,e){
	if(welcomeMove<(weltextlen-1))
	{
		sym.getSymbol("boxAnim").stop();
		sym.$("boxAnim").hide();
		selectedIndex=0;
		welcomeMove++;
		$('#Stage_left_slider_act').attr('src','images/left_slider_act.png').css('cursor','pointer');		
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArr[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();		
	}
	if(welcomeMove==(weltextlen-1))
	{
		$('#Stage_right_slider_act').attr('src','images/right_slider_deact.png').css('cursor','default');
	}
	$("#axe_aud").prop('currentTime',0);
	$("#axe_aud").trigger('pause');
	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym,e){
		  passText=$('#Stage_welText').text();
		  parent.AudioNameget = welcomeMode['step_'+welcomeMove]['audio'];
		  parent.playGlobalAudio(passText);
		});
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         //console.log(this.getPosition());
				
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         this.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3416, function(sym, e) {
         this.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20275, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15715, function(sym, e) {
         $('#Stage_dig_count').html('1');
         $('#Stage_Fossil_count').html('1/5');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31500, function(sym, e) {
         $('#Stage_dig_count').html('2');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         $('#Stage_dig_count').html('1');
         $('#Stage_Fossil_count').html('1/5');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         $('#Stage_dig_count').html('0');
         $('#Stage_Fossil_count').html('0/5');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32389, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         $('#Stage_dig_count').html('2');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43500, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57375, function(sym, e) {
         $("#Stage_ID_text").text("1");
         sym.$("boxAnim").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44000, function(sym, e) {
         $("#Stage_ID_text").text("0");
         $("#Stage_Analysed_text").text("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69000, function(sym, e) {
         $("#Stage_ID_text").text("1");
         $("#Stage_Analysed_text").text("0");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100500, function(sym, e) {
         $('#Stage_dig_count').html('0');
         $('#Stage_Fossil_count').html('0/5');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         if(!disableSafari) $("#axe_aud").trigger('play');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         if(!disableSafari) $("#axe_aud").trigger('play');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         sym.$("boxAnim").show();
         sym.getSymbol("boxAnim").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52000, function(sym, e) {
         sym.$("boxAnim").show();
         sym.getSymbol("boxAnim").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52500, function(sym, e) {
         sym.getSymbol("boxAnim").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 63000, function(sym, e) {
         this.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78000, function(sym, e) {
         sym.$("boxAnim").show();
         sym.getSymbol("boxAnim").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78500, function(sym, e) {
         sym.getSymbol("boxAnim").stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 82000, function(sym, e) {
         $("#Stage_Analysed_text").text("1");
         sym.$("boxAnim").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         $('#Stage_reset').css('left','34.5px');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 102000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'highAnim'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym,e){this.play(0)});
//Edge binding end
})("highAnim");
   //Edge symbol end:'highAnim'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'boxAnim'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         this.stop()

      });
      //Edge binding end

   })("boxAnim");
   //Edge symbol end:'boxAnim'

})(jQuery, AdobeEdge, "EDGE-1817669");

$(document).ready(function(){	
	$(document).on('keyup', function(e){
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		if(parent.parentTab == 'welcome' && parent.$('.helpwindow').css('display') == 'none')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}
	})	
})