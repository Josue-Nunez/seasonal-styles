$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        
        season = season.toLowerCase();
        switch(season){

            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("html").css("background-color","#2B7129");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#catch-copy").text("Spring Time is Here!");

                break;
            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("html").css("background-color","#EBA52B");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#catch-copy").text("Have Some Fun in the Sun, It's Time for Summer!");

                break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("html").css("background-color","#A81124");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#catch-copy").text("Leap Into Fall!");
    
                break;
            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("html").css("background-color","#005393");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#catch-copy").text("It's Time to Get Cozy, Winter is Here!");
        
                break;   
            

            default:
                $("#logo").attr("src","four-seasons.gif");
                $("html").css("background-color","#fff");
                $("#wear").attr("src","images/300x400.png");
                $("#catch-copy").text("Outfitter for All Seasons!");
        
                break;   
            
        }

    });
});
