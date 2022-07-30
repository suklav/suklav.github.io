let flag=0

function val(v)
{
    pl(v)
    if(flag)
    {
        v=v.toUpperCase()
    }
       document.getElementById("first").value+=v
    
}

function back()
{
        var back  = document.getElementById('first').value;
        document.getElementById('first').value=back.substring(0,back.length -1);
        new  Audio("Digit/otherkeys/1backspace.mp3").play()
}

function enter()
{
       document.getElementById("first").value+="\n"+""
       new  Audio("Digit/otherkeys/2enter.mp3").play()
}

function caps()
{
    new  Audio("Digit/otherkeys/12capslock.mp3").play()
    if(flag)
    {
        flag=0
        document.getElementById('cap').style.backgroundColor="";
        document.getElementById('cap').style.color = '';

    }

    else
    {
        flag=1
        document.getElementById('cap').style.backgroundColor="green";
        document.getElementById('cap').style.color = 'white';

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

    // case '*':
    //     new  Audio("Digit/operations/multiply.mp3").play()
    //     break;  

    case '/':
        new  Audio("12forwardslash.mp3").play()
        break;  
        
    case '=':
        new  Audio("Digit/operations/equal.mp3").play()
        break;  
    
    case 'a':
        new  Audio("Digit/a.mp3").play()
        break;  

   case 'b':
        new  Audio("Digit/b.mp3").play()
        break;  

        
   case 'c':
        new  Audio("Digit/c.mp3").play()
        break;  

   case 'd':
        new  Audio("Digit/d.mp3").play()
        break;  

   case 'e':
        new  Audio("Digit/e.mp3").play()
        break; 
        
   case 'f':
        new  Audio("Digit/f.mp3").play()
        break; 
        
   case 'g':
        new  Audio("Digit/g.mp3").play()
        break; 
        
   case 'h':
        new  Audio("Digit/h.mp3").play()
        break; 
        
   case 'i':
        new  Audio("Digit/i.mp3").play()
        break; 
        
   case 'j':
        new  Audio("Digit/j.mp3").play()
        break; 
        
   case 'k':
        new  Audio("Digit/k.mp3").play()
        break; 
        
   case 'l':
        new  Audio("Digit/l.mp3").play()
        break; 
        
   case 'm':
        new  Audio("Digit/m.mp3").play()
        break; 
        
   case 'n':
        new  Audio("Digit/n.mp3").play()
        break; 
        
   case 'o':
        new  Audio("Digit/o.mp3").play()
        break; 
        
   case 'p':
        new  Audio("Digit/p.mp3").play()
        break; 
        
   case 'q':
        new  Audio("Digit/q.mp3").play()
        break; 
        
   case 'r':
        new  Audio("Digit/r.mp3").play()
        break; 
        
   case 's':
        new  Audio("Digit/s.mp3").play()
        break; 
        
   case 't':
        new  Audio("Digit/t.mp3").play()
        break; 
        
   case 'u':
        new  Audio("Digit/u.mp3").play()
        break; 
        
   case 'v':
        new  Audio("Digit/v.mp3").play()
        break; 
        
   case 'w':
        new  Audio("Digit/w.mp3").play()
        break; 
        
   case 'x':
        new  Audio("Digit/x.mp3").play()
        break; 
        
   case 'y':
        new  Audio("Digit/y.mp3").play()
        break; 
        
   case 'z':
        new  Audio("Digit/z.mp3").play()
        break;  
        
   case '.':
        new  Audio("Digit/otherkeys/3dot.mp3").play()
        break;  
        
   case ',':
        new  Audio("Digit/otherkeys/4coma.mp3").play()
        break;  
        
   case ':':
        new  Audio("Digit/otherkeys/4colon.mp3").play()
        break;  
        
   case '%':
        new  Audio("Digit/otherkeys/6percentage.mp3").play()
        break;  
        
   case '$':
        new  Audio("Digit/otherkeys/7doller.mp3").play()
        break;  
        
   case '#':
        new  Audio("Digit/otherkeys/8hatch.mp3").play()
        break;  
        
        
   case '&':
        new  Audio("Digit/otherkeys/9and.mp3").play()
        break;  
        
   case '*':
        new  Audio("Digit/otherkeys/10star.mp3").play()
        break;  
        
   case '_':
        new  Audio("Digit/otherkeys/11underscore.mp3").play()
        break;  
    
        
   case ' ':
        new  Audio("Digit/otherkeys/15space.mp3").play()
        break;  
        
   case '^':
        new  Audio("Digit/otherkeys/16power.mp3").play()
        break;  
        
   case '<':
        new  Audio("Digit/otherkeys/17lessthan.mp3").play()
        break;  
        
   case '>':
        new  Audio("Digit/otherkeys/18greaterthan.mp3").play()
        break;  
        
   case '\'':
        new  Audio("Digit/otherkeys/19singlecods.mp3").play()
        break;  
        
   case '"':
        new  Audio("Digit/otherkeys/20doublecods.mp3").play()
        break;  
        
   case '~':
        new  Audio("0tilda.mp3").play()
        break;  
        
   case '?':
        new  Audio("0questionmark.mp3").play()
        break;  
        
   case '!':
        new  Audio("1exclaimationmark.mp3").play()
        break;  
        
   case '@':
        new  Audio("2at.mp3").play()
        break;  
        
   case '      ':
        new  Audio("2tab.mp3").play()
        break;  
        
   case '(':
        new  Audio("3leftbracket.mp3").play()
        break;
        
   case ')':
        new  Audio("4rightbracket.mp3").play()
        break;    
        
   case '`':
        new  Audio("5backquote.mp3").play()
        break;    
        
   case '[':
        new  Audio("7leftsquarebracket.mp3").play()
        break;    
        
   case ']':
        new  Audio("8rightsquarebracket.mp3").play()
        break;    
        
   case ';':
        new  Audio("9semicolon.mp3").play()
        break;    
        
   case '\\':
        new  Audio("10backwardslash.mp3").play()
        break;    



    }

}

function shift()
{
    new  Audio("Digit/otherkeys/shift.mp3").play()
}


function altr()
{
    new  Audio("Digit/otherkeys/13alter.mp3").play()
}


function ctrl()
{
    new  Audio("Digit/otherkeys/14control.mp3").play()
}


