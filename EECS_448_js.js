function myFunc(a, b)
{
  if(a.length<8)
  {
    alert("Please update your passwords to both being over 8 characters");
    return;
  }
  if(b.length<8)
  {
    alert("Please update your passwords to both being over 8 characters");
    return;
  }
    if(a!=b)
    {
      alert("Please make sure that the values for your passwords are the same");
    }
}
function Exec4(a, b,c,d,e,f,g)
{




    document.body.style.backgroundColor = 'rgb(' + e + ',' + f + ',' + g + ')';
var rgbVal = 'rgb(' + a + ',' + b + ',' + c + ')'
    document.body.style.border =(d+" solid "+ rgbVal );
//alert("thick solid "+ rgbVal );


}
