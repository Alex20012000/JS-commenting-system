interface Element {                
   style: CSSStyleDeclaration
}


class DoComment {                   
   c: string                        
   user: string                    
   date: Date
   month: string
   day: string
   hours: string
   mins: string
   favorits: boolean
   resp: boolean

   constructor(c, user, date, month, day, hours, mins, favorits, resp){
       this.c = c
       this.user = user
       this.date = date                  
       this.month = month                
       this.day = day                     
       this.hours = hours              
       this.mins = mins                    
       this.favorits = favorits             
       this.resp = resp                   
   }


   saveLc(){                             
       //let tempResp: string
       let countComment
       if(localStorage.countComment){
           countComment = localStorage.getItem("countComment")
           countComment = +countComment
           countComment++
       } else {
           countComment = 1                 
       }

       //const booleanVal = true;
       //const stringBoolean = `${booleanVal}`;

       localStorage.setItem("c" + countComment, this.c)                    
       localStorage.setItem("user" + countComment, this.user)
       localStorage.setItem("date" + countComment, this.date.toString())
       localStorage.setItem("month" + countComment, this.month)
       localStorage.setItem("day" + countComment, this.day)
       localStorage.setItem("hours" + countComment, this.hours)
       localStorage.setItem("mins" + countComment, this.mins)
       localStorage.setItem("countComment", countComment)
       localStorage.setItem("favorits" + countComment, this.favorits.toString())
       localStorage.setItem("resp" + countComment, this.resp.toString())

       if (this.c.indexOf("reset!")!=-1)  {localStorage.clear(); alert("reset done!")}          
                                                                                                  
   }

   printComment(){
       let section                                           
       let countComment                                     
       let comments                                        
       let divavatar                                     
       let avatar                                        
       let mainComment
       let divComment
       let pUser                                         
       let user                                          
       let pDate
       let day
       let month
       let commDiv                                              
       let interFace                                      
       let arrowLeft                                    
       let answerC
       let heartC                                       
       let favorC
       let minusC
       let numRaiting                                   
       let plusC
       let c: string                                       
       let hours                                                  
       let mins
       let r                                             
       let favorits
       let resp                                           
       let placeforResponse                                
                                        
       section = document.createElement("section")                     
       countComment = localStorage.getItem("countComment")            
       document.querySelector(".num_comment").innerHTML = countComment                 

       let objresp = new DoResponse("","","","","","","","","","","")      
                                                                         
       for(let i = 1; i <= countComment; i++){                          
           comments = document.querySelector(".sections")
           comments.appendChild(section)
           section.classList.add("input_comments")                       
           section.classList.add("input_comments_child")
           divavatar = document.createElement("div")
           section.appendChild(divavatar)                                 
           avatar = document.createElement("img")
         //avatar.src = `https://picsum.photos/id/${i}/200/300`       
           avatar.src = `https://loremflickr.com/200/300?lock=${i}`
           divavatar.appendChild(avatar)
           avatar.classList.add("avatar")
           avatar.classList.add("avatar_child")
                                               
           mainComment = document.createElement("div")
           mainComment.classList.add("main-comment")
           section.appendChild(mainComment)                            
           divComment.classList.add("child_div")               
           mainComment.appendChild(divComment)
           pUser = document.createElement("p")                         
           pUser.classList.add("user")
           user = localStorage.getItem("user" + i)                
           pUser.innerHTML = user
           divComment.appendChild(pUser)                               
           console.log(user)                                         

           pDate = document.createElement("div")
           pDate.classList.add("Date-time")
           day = localStorage.getItem("day" + i)
           month = +localStorage.getItem("month" + i) +1                  
           hours = localStorage.getItem("hours" +i)                   
           mins = localStorage.getItem("mins" +i)
           if(month.toString().length == 1) {
               month = "0" + month
           }
           if(day.toString().length == 1) {
               day = "0" + day
           }
           if(mins.toString().length == 1) {
               mins = "0" + mins
           }
           if(hours.toString().length == 1) {
               hours = "0" + hours
           }
           month = month + " " + hours + ":" + mins                    
           pDate.innerHTML = day + "." + month
           divComment.appendChild(pDate)

           commDiv = document.createElement("div")
           commDiv.classList.add("child-comment")                     
           c = localStorage.getItem("c" + i)                           
           commDiv.innerHTML = c
           mainComment.appendChild(commDiv)                           

         
                                                                        
           interFace = document.createElement("div")                
           interFace.classList.add("interface-div")
           mainComment.appendChild(interFace)                           

           arrowLeft = document.createElement("img")                
           arrowLeft.src = "img/left.jpg"
           arrowLeft.classList.add("arrow-left")
           interFace.appendChild(arrowLeft)
           arrowLeft.setAttribute ('onclick', `responseComment(${i})`)

           answerC = document.createElement("p")                     
           answerC.classList.add("answer-comm")
           answerC.innerHTML = "Ответить"
           interFace.appendChild(answerC)

           heartC = document.createElement("img")
           heartC.classList.add("heart")
           interFace.appendChild(heartC)                               
           heartC.setAttribute ('onclick', `changeFavorite(${i})`)

           favorC = document.createElement("p")
           favorC.classList.add("favor-comm")                          

           interFace.appendChild(favorC)                               
           favorits = localStorage.getItem("favorits" + i)
           if (favorits == "true"){
               heartC.src = "img/heart.jpg"
               favorC.innerHTML = "В избранном"
           } else {                                                   
               heartC.src = "img/full-heart.jpg"
               favorC.innerHTML = "В избранное"
           }


        


           minusC = document.createElement("img")
           minusC.src = "img/minus.jpg"
           minusC.classList.add("minus")                               
           interFace.appendChild(minusC)
           r = localStorage.getItem("raiting" + i)
           minusC.setAttribute ('onclick', `raitingMinus(${i})`)       

           numRaiting = document.createElement("div")
           numRaiting.classList.add("num-raiting")
           numRaiting.innerHTML = r                                   
           interFace.appendChild(numRaiting)


           plusC = document.createElement("img")
           plusC.src = "img/plus.jpg"
           plusC.classList.add("plus")
           interFace.appendChild(plusC)
           plusC.setAttribute ('onclick', `raitingPlus(${i})`)        

           placeforResponse = document.createElement("div")
           mainComment.appendChild(placeforResponse)

           resp = localStorage.getItem("resp" + i)                   


           if(resp == "true") {
               let o = document.querySelectorAll(".main-comment")[i]
                                                  
               objresp.o = o                      
               objresp.printResponse(i)        
           }
                                                   
       }
                                           
   }                            
}




