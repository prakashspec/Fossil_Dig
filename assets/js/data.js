var MainNavigations=0;	
var baseConfig = {activityTitle:'Fossil Dig'};
var Tabs=["welcome","explore","activity"];
var TopMenuText=["Dig site","Lab"];
var rightMenuText=["Food Web","Tropic Level Game"];
//label background on top
var labelSettings = {
						0:'#313131', //monteryBay background
						1:'#313131'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imgshow","okhide","slidershow"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenushow","rightmenuhide","baseimghide"], //explore
					["topmenushow","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow
var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';
var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep='digwelcome';
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-280;
var angleRot=180;
//incorrect Audio multiple
var incorrectText = [
						'Before the fossil can be analyzed, it first needs to be cleaned and identified. Try using the Brush tool.',
						'You have already cleaned this fossil. Select the picture of the fossil to read its information again. Or try using the Brush or Hourglass on a different fossil.',
						'You have already dated this fossil. Select the picture of the fossil to view its information again. Or use the Brush or Hourglass on another fossil.',
						'Drag the pickax tool to the location you want to dig.',
						'Sorry, there is no fossil there. Continue digging. Try another spot in the top layer of rock.',
						'You have already found the fossil. Select Lab to identify and analyze it.'
					];
var incorrectaudio = ['vlfsde_01','vlfsde_02','vlfsde_03','vlfsde_04','vlfsde_05','vlfsde_06']		
			 
					
					
					
//shell Audio
var FindState=["MonteryBay","AmazonRainForest"];
var FindLevel=["FoodWeb","TropicLevel"];
var SlideContents_explore = {
	"MonteryBay":
	{
		"FoodWeb":
		{
			'digwelcome':{
				'Image':'',
				'AudioText':[["Drag the pickax tool to the location you want to dig."],[],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[['vlfsde_04'],[],['vlfsde_14']]
				
			  },
			'img_e_1':{
				'Image':'img_e_1.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsde_15'],['vlfsde_14']]
				
			  },
			'img_e_2':{
				'Image':'img_e_2.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsde_15'],['vlfsde_14']]
			  },
			'img_e_3':{
				'Image':'img_e_3.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsde_15'],['vlfsde_14']]
			  },
			'img_e_4':{
				'Image':'img_e_4.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsde_15'],['vlfsde_14']]
			  },
			'img_e_5':{
				'Image':'img_e_5.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsde_15'],['vlfsde_14']]
			  },
			'digend':{
				'Image':'',
				'AudioText':[[],['Congrats! You found all five of the fossils in <span id="totalfoil">[X]</span> digs! Now head to the Lab to identify and analyze the fossils. <br><br>Select the Lab tab now.'],[]],
				'AudioNamecon':[[],[],[]]
			  }
		}
		
	},
	
	"AmazonRainForest":
	{
		"FoodWeb":
		{
			'labwelcome':{
				'Image':'',
				'AudioText':[['Welcome to the Lab! You haven’t found all the fossils yet, so you aren’t ready to begin your analysis. Go back to the Dig Site and keep digging.'],[],['Use the Brush or Hourglass to clean and analyze your fossils. Or go back to the Dig Site to find more fossils.']],
				'AudioNamecon':[['vlfsde_32'],[],['vlfsde_33']]
			  },
			  'labInit':{
				'Image':'',
				'AudioText':[['Drag the Brush tool to a fossil to clean and identify it.<br><br>After you have identified a fossil, you can use the Hourglass tool to date and analyze it.'],[],['Use the Brush or Hourglass to clean and analyze your fossils. Or go back to the Dig Site to find more fossils.']],
				'AudioNamecon':[['vlfsde_34'],[],['vlfsde_35']]
			  },	
			  'wrongbrush':{
				'Image':'',
				'AudioText':[[],[],['Use the Brush to clean your fossils.']],
				'AudioNamecon':[[],[],['vlfsde_36']]
			  },
			  'wrongtimer':{
				'Image':'',
				'AudioText':[[],[],['Use the Hourglass to analyze your fossils.']],
				'AudioNamecon':[[],[],['vlfsde_37']]
			  },
			  'wrongtext1':{
				'Image':'',
				'AudioText':[[],['Use the Brush or Hourglass to clean and analyze your fossils.'],['Use the Brush or Hourglass to clean and analyze your fossils. Or go back to the Dig Site to find more fossils.']],
				'AudioNamecon':[[],['vlfsde_38'],['vlfsde_39']]
			  },
			'img_e_1brush':{
				'Image':'popup/lab_e_1.png',
				'AudioText':[[],['This fossil looks like a camel skull. But it is actually from the skull of a vicuña. This fossil is from a vicuña that lived long ago. The vicuña is a relative of the alpaca. Vicuñas still live high in the mountains of South America today.'],[]],
				'AudioNamecon':[[],['vlfsde_40'],[]]
			  },
			'img_e_1timer':{
				'Image':'popup/lab_e_1.png',
				'AudioText':[[],['Using radiocarbon dating, this vicuña fossil has been found to be about 25,000 years old. Vicuñas live in cold and dry climates at very high altitudes, usually above 3,500 meters (11,500 feet).'],[]],
				'AudioNamecon':[[],['vlfsde_41'],[]]
			  },
			'img_e_2brush':{
				'Image':'popup/lab_e_2.png',
				'AudioText':[[],['This fossil looks like a turtle shell. The environment on this mountain is very dry. How could a turtle survive up here?'],[]],
				'AudioNamecon':[[],['vlfsde_42'],[]]
			  },
			'img_e_2timer':{
				'Image':'popup/lab_e_2.png',
				'AudioText':[[],['Using radiometric dating, we found that this fossil is from an extinct tortoise that lived 13 million years ago. This kind of tortoise lived in warm climates at altitudes of about 500 meters (1,600 feet).'],[]],
				'AudioNamecon':[[],['vlfsde_43'],[]]
			  },
			'img_e_3brush':{
				'Image':'popup/lab_e_3.png',
				'AudioText':[[],['This rock has markings left by long pieces of grass. Today, there is not much grass this high up in the mountains.'],[]],
				'AudioNamecon':[[],['vlfsde_44'],[]]
			  },
			'img_e_3timer':{
				'Image':'popup/lab_e_3.png',
				'AudioText':[[],['Radiometric dating tells us that this grass lived nearly 15 million years ago. Grasslands are usually found close to sea level, not high in the mountains.  This fossil is a clue that our Dig Site was once much closer to sea level.'],[]],
				'AudioNamecon':[[],['vlfsde_45'],[]]
			  },
			'img_e_4brush':{
				'Image':'popup/lab_e_4.png',
				'AudioText':[[],['This fossil looks like the shell of an oyster. Oysters live in the ocean and they have no legs for walking. How do you think this ancient oyster ended up on a mountain?'],[]],
				'AudioNamecon':[[],['vlfsde_46'],[]]
			  },
			'img_e_4timer':{
				'Image':'popup/lab_e_4.png',
				'AudioText':[[],['Radiometric dating tells us that this oyster fossil is about 17 million years old. It is very similar to the oysters that live today in shallow ocean water. What does this tell us about the Dig Site?'],[]],
				'AudioNamecon':[[],['vlfsde_47'],[]]
			  },
			'img_e_5brush':{
				'Image':'popup/lab_e_5.png',
				'AudioText':[[],['This fossil is from a large animal with fins and a long tail. It looks like some kind of whale. It is hard to imagine such an animal living here in the mountains.'],[]],
				'AudioNamecon':[[],['vlfsde_48'],[]]
			  },
			'img_e_5timer':{
				'Image':'popup/lab_e_5.png',
				'AudioText':[[],['This is a fossil of an extinct whale that lived nearly 20 million years ago. Like today’s whales, this ancient whale lived in the open ocean and needed deep water to survive. Think about how this whale ended up in the rock layers of a mountain.'],[]],
				'AudioNamecon':[[],['vlfsde_49'],[]]
			  },
			'labend':{
				'Image':'',
				'AudioText':[[],['Congratulations! You found, identified, and analyzed all five fossils. Now think about all the organisms that have lived at the Dig Site. Could these organisms have lived in the same environment? What does this tell you about how the Dig Site has changed over time? <br><br> If you’d like, you can now return to the Dig Site and look for the fossils again. Select Reset to start over.' ],[]],
				'AudioNamecon':[[],['vlfsde_50'],[]]
			  }
		}
	}
};

var SlideContents_activity = {
	"MonteryBay":
	{
		"FoodWeb":
		{
			'digwelcome':{
				'Image':'',
				//'AudioText':[["To start digging, drag the Pickax to one of the flags on the top rock layer."],[],['Sorry, you can’t reach that area yet. Other rock layers are in the way. Drag the Pickax to one of the flags on the top rock layer.']]
			  'AudioText':[["In this guided activity, you will search for one fossil at the Dig Site. After you find the fossil, you will go to the Lab to identify and analyze it.<br><br>To start digging, drag the Pickax to one of the four areas of the top rock layer."],[],['Sorry, you can’t reach that area yet. Drag the pickax to one of the four areas of the top rock layer.']],
			  'AudioNamecon':[['vlfsda_01'],[],['vlfsda_02']]
			   },
			   'img_e_1':{
				'Image':'img_a_3.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsda_03'],['vlfsda_04']]
			  },
			'img_e_2':{
				'Image':'img_a_3.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsda_03'],['vlfsda_04']]
			  },
			'img_e_3':{
				'Image':'img_a_3.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsda_03'],['vlfsda_04']]
			  },
			'img_e_4':{
				'Image':'img_a_3.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsda_03'],['vlfsda_04']]
			  },
			'img_e_5':{
				'Image':'img_a_3.png',
				'AudioText':[[],['You found a fossil! Let’s send it to the Lab for cleaning and analysis.'],['Sorry, you can’t reach this area just yet. Try digging in the top layer. Or dig next to an area you’ve dug already.']],
				'AudioNamecon':[[],['vlfsda_03'],['vlfsda_04']]
				
			  },
			'digend':{
				'Image':'img_a_3.png',
				'AudioText':[[],['Way to go! You found a fossil in  <span id="totalfoil1"></span> [X] digs! It’s hard to tell what kind of fossil it is.  Head to the Lab next to identify and analyze the fossil. <br><br>Select the Lab tab now.'],[]],
				'AudioNamecon':[[],[],[]]
				
			  }
	       }
		},
   "AmazonRainForest":
	{
		"FoodWeb":
		{
			'labwelcome':{
				'Image':'',
				'AudioText':[['Welcome to the Lab. Here you will need to clean and identify the fossil you found. Drag the Brush tool to  the fossil to clean it off so you can identify it.'],[],['Use the Brush or Hourglass to clean and analyze your fossils. Or go back to the Dig Site to find more fossils.']],
				'AudioNamecon':[['vlfsda_09'],[],['vlfsda_10']]
			  },
			  'labInit':{
				'Image':'',
				'AudioText':[['Select the Brush tool to clean and identify each fossil. After you have identified a fossil, you can select the Hourglass tool to date the fossil and analyze it.'],[],['Use the Brush or Hourglass to clean and analyze your fossils. Or go back to the Dig Site to find more fossils.']],
				'AudioNamecon':[['vlfsda_11'],[],['vlfsda_12']]
				
			  },
			  'wrongtext1':{
				'Image':'',
				'AudioText':[[],['Use the Brush or Hourglass to clean and analyze your fossils.'],['Use the Brush or Hourglass to clean and analyze your fossils. Or go back to the Dig Site to find more fossils.']],
				'AudioNamecon':[[],['vlfsda_13'],['vlfsda_14']]
			  },
			  'wrongbrush':{
				'Image':'',
				'AudioText':[[],[],['Drag the Brush to the fossil to clean it.']],
				 'AudioNamecon':[[],[],['vlfsda_15']]
			  },
			  'wrongtimer':{
				'Image':'',
				'AudioText':[[],[],['Drag the Hourglass to the fossil to analyze it.']],
				 'AudioNamecon':[[],[],['vlfsda_16']]
			  },
			'img_a_3timer':{
				'Image':'popup/lab_a_3.png',
				'AudioText':[[],['Carbon-dating suggests that the fossil is 3,500 years old. The tree rings are still visible in the fossil. They reveal that the tree was over 300 years old when it died.<br> The bark looks like it came from a polylepis tree. Polylepis trees live high in the mountains.<br><br>Are you surprised that this tree once lived here at the Dig Site? Write down your answer in your science notebook.'],[]],
				'AudioNamecon':[[],['vlfsda_17'],[]]
			  },
			  
			  'img_a_3brush':{
				'Image':'popup/lab_a_3.png',
				'AudioText':[[],['Good work. After removing some small bits of rock, you can see that this fossil looks like a piece of wood. Wood comes from trees. But this wood is petrified, or turned to stone. This can happen over time when dead wood gets buried. Minerals replace the wood, forming stone in the shape of the wood.','Take a closer look at the fossil. What type of tree do you think it came from? How long ago do you think it lived? Drag the Hourglass tool to the fossil to find out.'],[]],
				'AudioNamecon':[[],['vlfsdh_05','vlfsdh_06'],[]]
			  },
			'labend':{
				'Image':'',
				'AudioText':[[],['You have reached the end of this Guided Activity. But there are many more fossils to find at the Dig Site. Now go to Explore, where you can dig up five more fossils to analyze. See what you can learn about how the environment of the Dig Site has changed over time.' ],[]],
				'AudioNamecon':[[],['vlfsda_19'],[]]
			  }
		}
		
		
		
		
		
		
		
		
		
		
	}
};
//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"A fossil is evidence of an organism that lived long ago. Fossils are often found in layers of rock. <b>Sedimentary rock </b>is the type of rock that is most likely to contain fossils.",
			'AudioNamecon':['vlfsdi_01']
		},
	'block1':{
			'img':'audio_icon',
			'text':"Many fossils come from plants and animals. Some of these organisms are now <b>extinct</b>. Others are not extinct or are similar to modern organisms.",
			'AudioNamecon':['vlfsdi_03']
		},
	'block2':{
			'img':'audio_icon',
			'text':"A <b>paleontologist</b> is a scientist who studies fossils. Finding fossils is not an easy job. It involves lots of luck.",
			'AudioNamecon':['vlfsdi_04']
		},
	'block3':{
			'img':'audio_icon',
			'text':"Fossils can be very old and delicate. Scientists must handle them with care. They use tools like shovels and pickaxes to search for fossils. When they find a fossil, they use small tools and brushes to clean it. They try to remove bits of rock without damaging the fossil.",
			'AudioNamecon':['vlfsdi_05']
			},
	'block4':{
			'img':'audio_icon',
			'text':"Some fossils are found in rock layers close to the surface. Others are found in deeper layers of rock. Usually, the deeper a fossil is buried, the older it is. ",
			'AudioNamecon':['vlfsdi_06']
			},
	'block5':{
			'img':'audio_icon',
			'text':"Scientists can use chemical tests to find a fossil’s age. <b>Radiometric dating</b> and <b>radiocarbon dating</b> are examples of such tests. These tests can date fossils that are thousands or even millions of years old.",
			'AudioNamecon':['vlfsdi_07']
			},
	'block6':{
			'img':'audio_icon',
			'text':"The <b>environment</b> of a place can change over time. Fossils and rocks provide clues about what the environment was like in the past.",
			'AudioNamecon':['vlfsdi_08']
			}	
		};
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'AudioNamecon':['vlfsdh_01']
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'AudioNamecon':['vlfsdh_02']
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'AudioNamecon':['vlfsdh_03']
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'AudioNamecon':['vlfsdh_04']
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'AudioNamecon':['vlfsdh_07']
		}
	};
