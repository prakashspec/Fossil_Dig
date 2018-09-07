
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to Fossil Dig! In this lab, you will visit a dig site high in the mountains.',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'audio':'vlfsdw_09',
				'anim':{}
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'At the Dig Site, you will dig for fossils buried deep in layers of rock.',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'audio':'vlfsdw_01',
				'anim':{}
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'You may start digging anywhere in the top rock layer. To dig, drag the Pickax tool to one of the flags. Sometimes you will find a fossil. Sometimes you won’t.',
				'speechStyle':'bubbleDivNone',
				'position':[284,270],
				'audio':'vlfsdw_02',
				'anim':{}
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'After your first dig, you may only dig exposed areas of rock. Try to find all five of the fossils in the fewest number of digs possible!',
				'speechStyle':'bubbleDivNone',
				'position':[284,270],
				'audio':'vlfsdw_03',
				'anim':{}
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'Each time you find a fossil, it will be sent to the Lab. Once you have found all five fossils, you can go to the Lab to clean and analyze them.',
				'speechStyle':'bubbleDivNone',
				'position':[274,270],
				'audio':'vlfsdw_04',
				'anim':{							
					'flow0':{'highlight':'yes','type':'cursor','from':[480,250],'to':[850,100],'toAnim':'animlabel1','bgChange':'step_4','defShow':'no'}
				}
				},		
		'step_5':{
				'bgimg':'step_4',
				'text':'Use the Brush tool to help you identify the fossil.',
				'speechStyle':'bubbleDivMultidouble',
				'position':[455,330],
				'audio':'vlfsdw_05',
				'anim':{
					'flow0':{'type':'cursor','from':[850,100],'to':[850,50],'toAnim':'animlabel1','bgChange':'step_1','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble'}
				}
				},			
		'step_6':{
				'bgimg':'step_1',
				'text':'Use the Hourglass tool to find the age of the fossil using radiometric dating.',
				'speechStyle':'bubbleDivMultidouble',
				'position':[458,410],
				'audio':'vlfsdw_06',
				'anim':{
					'flow0':{'type':'cursor','from':[850,50],'to':[500,450],'toAnim':'animlabel1','bgChange':'step_3','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble','highlight':'no'}
				}
				},	
		'step_7':{
				'bgimg':'step_1',
				'text':'Try to find and analyze all five fossils. They will tell you a lot about how this mountain environment has changed over time.',
				'speechStyle':'bubbleDivNone',
				'position':[270,230],
				'audio':'vlfsdw_07',
				'anim':{}
				},	
		 'step_8':{
				'bgimg':'step_4',
				'text':"Select Explore to begin the lab, or select Activity to complete a guided exploration. At any time during the lab, you can select the Information icon to learn more about fossils. Good luck!",
				'speechStyle':'bubbleDivNone',
				'position':[524,30],
				'audio':'vlfsdw_08',
				'anim':{}
				}			
		
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,2000,5000,20500,33000,44000,69000,100500,103000];
var animPlayArrRev = [0,2500,5750,20500,33000,44000,69000,100500,103000];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';