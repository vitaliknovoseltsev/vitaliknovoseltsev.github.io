$(document).ready(function(){

   var centr = $('#block');
   var max = 5;
   var min = 1;
   var random;
   var flag = 0;
   var t = 0;
   var k = 0;
   var back;
    

  
   
	$(".button2").click(function(){
	        if ($('#s1').val() == "1" &&
	        	$('#s2').val() == "1" &&
	        	$('#s3').val() == "1" &&
	        	$('#s4').val() == "1" &&
	        	$('#s5').val() == "1" &&
	        	$('#s6').val() == "1")
	        {
	        	centr.fadeOut(2000);
	        	$('#happy').fadeIn(6000);
	   	 	}
	    	else
	    		{
	    		$('#mist').fadeIn();
	    		$('#mist').fadeOut(6000);}


	    });

   


    $(".button7").click(function(){
    	$(".main").height(1400);
        centr.fadeIn();
    });

    $("#hide").click(function(){
        centr.fadeOut();
    });

    $("#in").keypress(function(eventObject)
    {
      var random_color = '#' + Math.round((Math.random() * (999999 - 100000) + 100000));
      $(this).css('background-color', random_color);
    });

    $("#in").keypress();

   

    $("#make_it").click(function(){
        k++;
        if (k < 7)
        {
       $("#par2").animate({"left": "-=100px"}, "slow");

       $("#par4").animate({"left": "-=100px"}, "slow");
   }
   });

      


    $(".fopar").click(function(){
      $(this).animate({"top": "+=30px"}, "slow");
    });

    

    $(".inf").each(function(){
        $(this).click(function(){
            alert($(this).attr("alt"));
        });
        $(this).hover(on,off);
    });

});


