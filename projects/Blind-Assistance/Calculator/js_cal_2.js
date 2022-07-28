 let flag,f,s,res,sum=0,array=[]


function Op(o)
{

    if(document.getElementById("first").value=="")
    {
        alert("Please enter the first number first.")
        return
    }

    document.getElementById("operator").value=o
    flag=o
    pl(o)

}



function val(v)
{
    pl(v)

    if(document.getElementById("operator").value=="")
     {
        var a = document.getElementById("first").value;
        if( document.getElementById("first").value="" )
         {
             document.getElementById("first").value="v"
             f=v
         }
        else
        {
            var b=((a*10)+v)
            
            document.getElementById("first").value=b
            f=b
        }
     }
    
    else
    {
        var a = document.getElementById("second").value;
        if( document.getElementById("second").value="" )
        {
            document.getElementById("second").value="v"
            s=v
        }
       else
       {
           var b=((a*10)+v)
           
           document.getElementById("second").value=b
           s=b
       }
    }
}

function pl(i)
{

    switch(i)
    {
    case 1:
        new  Audio("Digit/one.mp3").play()
        break;
    case 2:
        new  Audio("Digit/two.mp3").play()
        break;
    case 3:
        new  Audio("Digit/three.mp3").play()
        break;
    
    case 4:
        new  Audio("Digit/four.mp3").play()
        break;

    case 5:
        new  Audio("Digit/five.mp3").play()
        
        break;
    
    
    case 6:
        new  Audio("Digit/six.mp3").play()
        break;

    
    case 7:
        new  Audio("Digit/seven.mp3").play()
        break;


    case 8:
        new  Audio("Digit/eight.mp3").play()
        break;


    case 9:
        new  Audio("Digit/nine.mp3").play()
        break;

    case 0:
        new  Audio("Digit/zero.mp3").play()
        break;

    case '+':
        new  Audio("Digit/operations/plus.mp3").play()
        break;   
        
    case '-':
        new  Audio("Digit/operations/minus.mp3").play()
        break;  

    case '*':
        new  Audio("Digit/operations/multiply.mp3").play()
        break;  

    case '÷':
        new  Audio("Digit/operations/division.mp3").play()
        break;  
        
    case '=':
        new  Audio("Digit/operations/equal.mp3").play()
        //wait(20);
        break;  

    }

}

function ev()
{
    

        pl('=')

        setTimeout(() => {
           
            
            switch(flag)
            {
                case '+' :  res=f+s
                    break;
        
                case '-' :  res=f-s
                    break;
                case '*' :  res=f*s
                    break;
                case '÷' :  res=f/s 
                    break;
            } 
               
            document.getElementById("result").innerHTML=res
        
            pron_res(res)



        }, 500);
      
     
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function pron_res(val)
{
    


var rem,rn
rem=0
rn=0
while (!(val==0)) {
    
    rem=parseInt(val%10)
    rn=(rn*10)+rem
    val=parseInt(val/10)

}

rem=0

while (!(rn==0)) {
    
    rem=parseInt(rn%10)
    rn=parseInt(rn/10)

      pl(rem)  
      await sleep(500);
    array.push(rem) 

}

// flag=array.length
// while(flag>0)
// {
//     document.getElementById("first").value=array[flag]
//     flag--
// }

}

