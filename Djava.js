document.getElementById("btn1").addEventListener("click",function()
    {
        document.getElementById("content").style.display="block";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn2").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="block";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn3").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="block";
    })
    
          var list1=[];
          var list2=[];
          var list3=[];
          var list4=[];
          var list5=[];
          var list6=[];
          var list7=[];
          var list8=[];
          
          
          var n=1;
          var x=0;
          
          const validateForm = (ev) =>{
               ev.preventDefault();
               var nam=document.myform.name.value;
               var email2=document.myform.email.value;
               var mobnum=document.myform.mnum.value;
               var age2=document.myform.age.value;
               var gen2=document.myform.gender.value;
               var wei2=document.myform.weight.value;
               var hei2=document.myform.height.value;
               var user2=document.myform.username.value;
               
               
               var checkname= /^[a-zA-Z]{3,}$/;
               var checkemail= /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
               var checkmobile = /^[7-9]{1}[0-9]{9}$/;
               var checkage = /^[1-5][0-9]$/;
               var checkweight = /^[1-9][0-9]{1,2}$/;
               var checkheight = /^[12][0-9]{2,2}$/; 
               var checkusername = /^[a-zA-Z0-9_]{2,8}$/;
               
               if (checkname.test(nam)==false)
               {
                  document.getElementById("nam1").innerHTML="Name should be 3 to 30 charcters";
               }
               else
               {
                document.getElementById("nam1").innerHTML="";
                if(checkemail.test(email2)==false)
                {
                  document.getElementById("email1").innerHTML="Enter a valid Email";
                }
                else
                {
                  document.getElementById("email1").innerHTML="";  
                  if(checkmobile.test(mobnum)==false)
                  {
                    document.getElementById("mno").innerHTML="Please enter valid mobile no";  
                  }
                 else
                 {
                    document.getElementById("mno").innerHTML="";
                    if(checkage.test(age2)==false)
                    {
                       document.getElementById("age1").innerHTML="Age should be 10-49";
                    }
                    else
                    {
                        document.getElementById("age1").innerHTML="";
                        if(checkweight.test(wei2)==false)
                        {
                            document.getElementById("wei1").innerHTML="enter valid weight";
                        }
                        else
                        {
                            document.getElementById("wei1").innerHTML="";
                            if(checkheight.test(hei2)==false)
                            {
                                document.getElementById("hei1").innerHTML="enter valid height";
                            }
                            else
                            {
                                document.getElementById("hei1").innerHTML="";
                                if(checkusername.test(user2)==false)
                                {
                                    document.getElementById("user").innerHTML="Enter valid username";
                                }
                                else
                                {
                                    document.getElementById("user").innerHTML="";
                                    
                                         var AddRown=document.getElementById('show');
                                         var NewRow=AddRown.insertRow(n);
                  
                                                list1[x]=document.myform.name.value;
                                                list2[x]=document.myform.email.value;
                                                list3[x]=document.myform.mnum.value;
                                                list4[x]=document.myform.age.value;
                                                list5[x]=document.myform.gender.value;
                                                list6[x]=document.myform.weight.value;
                                                list7[x]=document.myform.height.value;
                                                list8[x]=document.myform.username.value;
                                                

                                                var cel1=NewRow.insertCell(0);
                                                var cel2=NewRow.insertCell(1);
                                                var cel3=NewRow.insertCell(2);
                                                var cel4=NewRow.insertCell(3);
                                                var cel5=NewRow.insertCell(4);
                                                var cel6=NewRow.insertCell(5);
                                                var cel7=NewRow.insertCell(6);
                                                var cel8=NewRow.insertCell(7);
                                                
                  
                                                cel1.innerHTML=list1[x];
                                                cel2.innerHTML=list2[x];
                                                cel3.innerHTML=list3[x];
                                                cel4.innerHTML=list4[x];
                                                cel5.innerHTML=list5[x];
                                                cel6.innerHTML=list6[x];
                                                cel7.innerHTML=list7[x];
                                                cel8.innerHTML=list8[x];
                                                
                                                
                                                n++;
                                                x++;
                 
                                                alert("successfully registered");
                                                document.querySelector("form").reset();
                                            
                                        }
                                    }
                                }
                            }
                        }
                    
                    }
               }
            }
          document.addEventListener("DOMContentLoaded", ()=>{
              document.getElementById("btna").addEventListener("click", validateForm);
          });
