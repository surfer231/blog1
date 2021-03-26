var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var SUJS = {};
	SUJS.buttonWin = function(){	
	var w = 425,
		h = 370,
		is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
		left,
		top,
		title = 'StumbleUpon',
		//popState = 'normal',
		targetWin;
		
	if (is_chrome){
		w = 425;
		h = 470;
	} 
	left = (screen.width/2)-(w/2);
	top = (screen.height/2)-(h/2);
	 
	return {
		open : function (pageURL) {
			targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, chrome=no, width='+w+', height='+h+', top='+top+', left='+left);						
			targetWin.focus();			
		},
		
		close : function () {
			targetWin.close();
		}	
	}
}();

if (typeof($) != "undefined"){
	$(function() {
		cbOpener = function (cbThis) {
			location.reload();
			cbThis();
		};
		var $btnRate = $('#wrapper .rate a');
		if ($btnRate.hasClass('loggedIn'))
		{
			$btnRate.click(function () {
				var action = 'like';
				if ($btnRate.hasClass('active'))
					action = 'unlike';

				$btnRate.toggleClass('active');
				var publicid = $btnRate.attr('id');
				$.ajax({
					url: "/badge/ajax/"+publicid+"/"+action+"/",
					type: "POST",
					data: { 
						token: __SUJStoken
					},
							 
					success: function(response) {
						if (response.status == 'fail')
						{
							window.location.reload();
						}
					},			
					error: function() {
						if($btnRate.hasClass('active'))
						{
							$btnRate.removeClass('active');
						}
						else
						{
							$btnRate.addClass('active');
						}
					},
					dataType: 'json'
				});
			});
		}
	}); 
}


}
/*
     FILE ARCHIVED ON 01:01:00 Jun 19, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:54:57 Mar 26, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1067.804
  exclusion.robots: 0.249
  PetaboxLoader3.datanode: 120.024 (4)
  exclusion.robots.policy: 0.231
  LoadShardBlock: 114.225 (3)
  RedisCDXSource: 4.303
  load_resource: 65.049
  CDXLines.iter: 65.029 (3)
  esindex: 0.02
  PetaboxLoader3.resolve: 47.228
*/