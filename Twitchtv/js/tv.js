 $(document).ready(function() {
     
  
     
     var twitchTvs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
     
     var container = document.getElementById("twitchtv");
     
     
     
     $.each(twitchTvs,function(index,channel){
         $.ajax({
            type: "GET",
            url: "https://wind-bow.glitch.me/twitch-api/streams/"+channel,
            success: function(result){
                
                if(result.stream == null){ //Offiline
                    
                    $.ajax({ //ajax channel
                        type: "GET",
                        url: "https://wind-bow.glitch.me/twitch-api/channels/"+channel,
                        success: function(result){
                            
                            if(result.display_name == undefined){//not exist
                                container.innerHTML +='<div class="row undefined" id="undefined"><div class="col-sm-6 col-sm-offset-3 "><div class="row colChanels" ><div class="col-sm-2"><span class="glyphicon glyphicon-alert"></span></div><div class="col-sm-4"><h2>'+channel+'<h2><p>This channel not exist.</p></div></div></div></div>';   
                                
                            }
                            else{//offline
                                container.innerHTML +='<div class="row offline" id="offline"><div class="col-sm-6 col-sm-offset-3 "><div class="row colChanels" ><div class="col-sm-2"><img src="'+result.logo+'" class="img-circle"></div><div class="col-sm-4"><h2>'+result.display_name+'<h2></div></div></div></div>'; 

                            }
                        }
                        
                    }); //ajax channel 
                    
                    
                }//Offline
                
                else{//Online
                    container.innerHTML +='<div class="row online" id="online"><div class="col-sm-6 col-sm-offset-3 "><div class="row colChanels" ><div class="col-sm-2"><img src="'+result.stream.channel.logo+'" class="img-circle"></div><div class="col-sm-10"><h2>'+result.stream.channel.display_name+'<h2><p>'+result.stream.channel.status+'.</p><a href="'+result.stream.channel.url+'" target="_blank">Watch now!</a></div></div></div></div>';
                    console.log(result);
                }//Online
                
            },
            error: function (jqXHR, exception) {
                alert('API unavailable. Try later.');
            }
        });         
     });
     
     
     
});
