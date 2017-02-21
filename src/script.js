/* Jquery Add On - Copyright : Thomas RENAUD */

(function($)
{
    $.fn.myPOP=function(options)
    {
    	var basicOptions=
    	{
    		"eventObj":$(".launcher"),
    		"title":"",
    		"width":"600px",
    		"height":"800px",
    		"theme":"RTE"
    	};
    	var myParameters=$.extend(basicOptions, options)
     	this.each(function()/*pour chaque liste des elt */
       {	
       		var pop = $(this);
       		pop.hide();//Nous la cachons au début
       		myParameters.eventObj.addClass('popLauncher');
       		pop.addClass('myPopupBlibio ' + myParameters.theme);
       		pop.html("<h3 class='titre'>"+myParameters.title+"</h3>" +pop.html());
       		pop.draggable().append( "<div class='close'>X</div>" ).css('width',myParameters.width).css('height',myParameters.height).css('margin-left',-pop.width()/2).css('margin-top',-pop.height()/2);
       		//gestion evt
       		pop.mouseover(function(){
				$('.myPopupBlibio').css('z-index',1); //indexage Popup
				$(this).css('z-index',5);
			});
			pop.children(".close" ).click(function(){
					$(this).parent().hide();
			});
			myParameters.eventObj.click(function(){
				pop.show();
				pop.css('z-index',6);
			});
		});
       return this;//Bonne pratique pour pouvoir enchainer plusieurs fct apres celle là
    };
})(jQuery);
