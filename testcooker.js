//

function test ()
{
    //console.log("LOL!!")
}

function remc()
{
document.cookie = "disallow=didntGet"
//console.log("disallowed")
window.location.href = 'http://wikipedia.org';
}


function givec()
{
    //console.log("POW!")
    //console.log("here you go :3!!!")
    document.cookie = "allow=heGotDaCookie"
    document.cookie = "anotherBullshit=itExists"
    window.location.href = 'index.html';
}


function redir()
{
    
    
    //this is run every time any page loads on the site.
    //if allow=heGotDaCookie is present, the user may use the site.
    //if disallow=didntGet is present, the user is always redirected away. this overrides the allow value.
    
    //check if the user has the cookie.
    //console.log("hi");


    var x2 = 900;
    
    var y = document.cookie.toString()
    var x = y.split("; ");
    //console.log("the cookie is");
    //console.log(x);
    

    var accepted = false
    var rejected = false
    
    //iterate over array to find "allow=heGotDaCookie"
    //http://192.168.50.22:3030/test
    for(i = 0; i<x.length ; i++)
    {

        
        //console.log(x[i])
        if(x[i]=="allow=heGotDaCookie")
        {
            //console.log("user has the accepted cookie.")
            accepted = true;
        }

        if(x[i]=="disallow=didntGet")
        {
            //console.log("user has the rejected cookie.")
            rejected = true;
        }
    }

    
    
    //if the user has neither, redirect to landing.
    if(!accepted && !rejected)
    {
        //console.log("go to landing")
        window.location.href = 'landing.html';
    }

    //if the rejected cookie is present, redirect away
    if(rejected)
    {
        //console.log("leave")
        window.location.href = 'https://wikipedia.org';
    }
    
}

//this is for the landing page only.
function redirL()
{
    //this is run every time any page loads on the site.
    //if allow=heGotDaCookie is present, the user may use the site.
    //if disallow=didntGet is present, the user is always redirected away. this overrides the allow value.
    
    //check if the user has the cookie.
    var y = document.cookie.toString()
    var x = y.split("; ")
    //console.log("the cookie is")
    //console.log(x)
    

    var accepted = false
    var rejected = false
    //iterate over array to find "allow=heGotDaCookie"
    //http://192.168.50.22:3030/test
    for(i = 0; i<x.length ; i++)
    {

        
        //console.log(x[i])
        if(x[i]=="allow=heGotDaCookie")
        {
            console.log("user has the accepted cookie.")
            accepted = true;
        }

        if(x[i]=="disallow=didntGet")
        {
            //console.log("user has the rejected cookie.")
            rejected = true;
        }
    }

    //if the user has neither, redirect to landing.
    if(!accepted && !rejected)
    {
        //console.log("you are landing")
        //window.location.href = 'landing';
    }

    //if the rejected cookie is present, redirect away
    if(rejected)
    {
        //console.log("leave")
        window.location.href = "https://wikipedia.org";
    }
 
}
function leave ()
{

}