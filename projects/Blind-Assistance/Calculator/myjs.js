
function odd_even()
{
    var a;

    if((document.getElementById("oddeven").value)=="")
    {
        alert("Please provide an input.")
        document.getElementById("result_eo").innerHTML=""
        return
    }

    a=Number(document.getElementById("oddeven").value)
    if(a%2==0)
    {
        document.getElementById("result_eo").innerHTML="This is an even number."
    }
    else
    {
        document.getElementById("result_eo").innerHTML="This is an odd number"
    }

}


function factorial()
{
    if((document.getElementById("fact").value)=="")
    {
        alert("Please provide an input.")
        document.getElementById("result_fact").innerHTML=""
        return
    }

    var num,i,res;
    res=1

    num=Number(document.getElementById("fact").value)
    
    for(i=num;i>=1;i--)
    {
        res=res*i
    }

    document.getElementById("result_fact").innerHTML=res
}


function reverse()
{
    if((document.getElementById("rev").value)=="")
    {
        alert("Please provide an input.")
        document.getElementById("result_rev").innerHTML=""
        return
    }

    var num,i,res,rem;
    num=Number(document.getElementById("rev").value)

    i=num
    res=0
    while(i>0)
    {
        rem=i%10
        res= res*10 + rem
        i=parseInt(i/10)
    }


    document.getElementById("result_rev").innerHTML=res
}



function uplow()
{
    if((document.getElementById("input_uplow").value)=="")
    {
        alert("Please provide an input.")
        document.getElementById("result_uplow").innerHTML=""
        return
    }


    var str,i,newWord=[];
    str=document.getElementById("input_uplow").value
    for (i=0; i<str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newWord[i] = str[i].toUpperCase();
        }
        else {
          newWord[i] = str[i].toLowerCase();
        }
      }

    
    document.getElementById("result_uplow").innerHTML=newWord.join("")
}


function same()
{
    if((document.getElementById("input_same").value)=="")
    {
        alert("Please provide an input.")
        document.getElementById("result_same").innerHTML=""
        return
    }

    var num,i,cur,prev,flag;
    flag=0 // same
    num=Number(document.getElementById("input_same").value)

    i=num
    prev=i%10
    while(i)
    {
        if(i%10!=prev)
        {
            flag=1
            break
        }
        i=parseInt(i/10)
    }

    if(flag==1)
    {
        document.getElementById("result_same").innerHTML="All digits are not same."
    }
    else
    {
        document.getElementById("result_same").innerHTML="All digits are same."
    }
}