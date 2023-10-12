interface Element {                                
   style: CSSStyleDeclaration
}
class DoResponse extends DoComment {                
   iparent: number                          
   o: any                                   
   constructor(c, user, date, month, day, hours, mins, favorits, resp, iparent, o){
       super( c, user, date, month, day, hours, mins, favorits, resp)      
       this.c = c
       this.user = user        
       this.date = date         
       this.month = month       
       this.day = day           
       this.hours = hours
       this.mins = mins
       this.favorits = favorits
       this.resp = resp
       this.iparent = iparent
       this.o = o               
   }
                                     
                                  
   saveResponse(i) {                

       let countComment = i


       localStorage.setItem("auser" + countComment, this.user);
       localStorage.setItem("adate" + countComment, this.date.toString());
       localStorage.setItem("aday" + countComment, this.day.toString());
       localStorage.setItem("ahours" + countComment, this.hours.toString());
       localStorage.setItem("amins" + countComment, this.mins.toString());
       //localStorage.setItem("araiting" + countComment, this.raiting.toString());
       localStorage.setItem("afavorits" + countComment, this.favorits.toString());      
                                                     
   }




   showResponse(){          
       let section
       let divavatar
       let avatar
       let mainComment
       let divComment
       let pUser
       let user
       let pDate
       let day: any
       let month: any
       let interFace                               
       let heartC
       let favorC
       let minusC
       let numRaiting
       let plusC
       let hours: any
       let mins: any
       let r                                
       let favorits
       let divMain
       let sendA
       section = document.createElement("section")
       section.classList.add("response_input_comments")
       let i= this.iparent
       let o = document.querySelectorAll(".main-comment")[i]      
       o.insertBefore(section,o.lastChild)

       divMain = document.createElement("div")
       divMain.classList.add("input_comments")
       section.appendChild(divMain)

       divavatar = document.createElement("div")
       divMain.appendChild(divavatar)
       avatar = document.createElement("img")
       //avatar.src = `https://picsum.photos/id/${this.iparent}/200/300`    
       avatar.src = `https://loremflickr.com/200/300?lock=${this.iparent}`  
       divavatar.appendChild(avatar)
       avatar.classList.add("avatar")
       avatar.classList.add("avatar_child")

       mainComment = document.createElement("div")
       mainComment.classList.add("response_main-comments")
       divMain.appendChild(mainComment)                                        
       divComment = document.createElement("div")
       divComment.classList.add("response_child_div")
       mainComment.appendChild(divComment)
       pUser = document.createElement("p")
       pUser.classList.add("user")
       user = document.querySelector(".user").innerHTML


       pUser.innerHTML = user
       divComment.appendChild(pUser)


       pDate = document.createElement("div")
       pDate.classList.add("response_Date-time")
       let date: Date
       date = new Date()
       month = date.getMonth() +1
       day = date.getDate()
       hours = date.getHours()
       mins = date.getMinutes()

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


       let textarea = document.createElement("textarea")      
       textarea.id = "actxtarea" + `${i}`
       textarea.classList.add("responseText")
       textarea.setAttribute('oninput', `check_length_resp(this)`)         
       mainComment.appendChild(textarea)


       interFace = document.createElement("div")
       interFace.classList.add("interface-div")
       section.appendChild(interFace)

       heartC = document.createElement("img")
       heartC.classList.add("heart")
       interFace.appendChild(heartC)
       heartC.setAttribute ('onclick', `changeFavoriteResponse(${i})`)  

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

       if (localStorage.getItem('response-raiting' + i) !== null) {

           r = localStorage.getItem("response-raiting" + i)

       }else {
           localStorage.setItem("response-raiting" + i, '0')
           r = 0                      
       }

       minusC.setAttribute ('onclick', `raitingResponseMinus(${i})`)      

       numRaiting = document.createElement("div")
       numRaiting.classList.add("response-num-raiting")
       numRaiting.innerHTML = r
       interFace.appendChild(numRaiting)



       plusC = document.createElement("img")
       plusC.src = "img/plus.jpg"
       plusC.classList.add("plus")
       interFace.appendChild(plusC)
       plusC.setAttribute ('onclick', `raitingResponsePlus(${i})`)        

       // SEND ANSWER

       sendA = document.createElement("img")
       sendA.src = "img/send_grey.jpg"
       sendA.classList.add("send")
       interFace.appendChild(sendA)
       sendA.setAttribute ('onclick', `sendAnswer(${i})`)



   }

   saveLc(){           

       let countComment
       if(localStorage.a){                             
           countComment = localStorage.getItem("a")
           countComment = +countComment

       } else {
           countComment = 1                            
       }
       localStorage.setItem("c" + countComment, this.c.toString())
       localStorage.setItem("user" + countComment, this.user)
       localStorage.setItem("date" + countComment, this.date.toString())
       localStorage.setItem("month" + countComment, this.month.toString())
       localStorage.setItem("day" + countComment, this.day.toString())
       localStorage.setItem("hours" + countComment, this.hours.toString())
       localStorage.setItem("mins" + countComment, this.mins.toString())
      


   }


   printResponse(i:number){         
       let section
       let divavatar
       let avatar
       let mainComment
       let divComment
       let pUser
       let user
       let pDate
       let day
       let month
       let interFace
       let heartC
       let favorC
       let minusC
       let numRaiting
       let plusC
       let hours
       let mins
       let r                                         
       let favorits
       let divMain
       let ac: string                                   
       section = document.createElement("section")
       section.classList.add("response_input_comments")
       let o = document.querySelectorAll(".main-comment")[i]
       o.insertBefore(section,o.lastChild)

       divMain = document.createElement("div")
       divMain.classList.add("input_comments")
       section.appendChild(divMain)

       divavatar = document.createElement("div")
       divMain.appendChild(divavatar)
       avatar = document.createElement("img")
     //avatar.src = `https://picsum.photos/id/${i}/200/300`  // сайт заблокирован, пробуем другой
       avatar.src = `https://loremflickr.com/200/300?lock=${i}`
       divavatar.appendChild(avatar)
       avatar.classList.add("avatar")
       avatar.classList.add("avatar_child")

       mainComment = document.createElement("div")
       mainComment.classList.add("response_main-comments")
       divMain.appendChild(mainComment)
       divComment = document.createElement("div")
       divComment.classList.add("response_child_div")
       mainComment.appendChild(divComment)
       pUser = document.createElement("p")
       pUser.classList.add("user")
       user = localStorage.getItem("auser" + i)


       pUser.innerHTML = user
       divComment.appendChild(pUser)           


       pDate = document.createElement("div")
       pDate.classList.add("response_Date-time")
       day = localStorage.getItem("day" + i)
       month = +localStorage.getItem("month" + i) +1
       hours = localStorage.getItem("hours" + i)
       mins = localStorage.getItem("mins" + i)
       if(month != null && month.toString().length == 1) {
           month = "0" + month
       }
       if(day!= null && day.toString().length == 1) {
           day = "0" + day
       }
       if(mins != null && mins.toString().length == 1) {
           mins = "0" + mins
       }
       if(hours != null && hours.toString().length == 1) {
           hours = "0" + hours
       }
       month = month + " " + hours + ":" + mins
       pDate.innerHTML = day + "." + month
       divComment.appendChild(pDate)


       ac = localStorage.getItem("ac" + i)          

       
       let textarea = document.createElement("textarea")
       textarea.classList.add("responseText")
       textarea.style.border = "none"
       textarea.style.boxShadow = "none"
       textarea.style.height = "100px"
       textarea.setAttribute("readonly", "")        
       mainComment.appendChild(textarea)
       textarea.value = ac


       interFace = document.createElement("div")
       interFace.classList.add("interface-div")
       section.appendChild(interFace)

       heartC = document.createElement("img")
       heartC.classList.add("heartresponse")
       interFace.appendChild(heartC)
       heartC.setAttribute ('onclick', `changeFavoriteResponse(${i})`)

       favorC = document.createElement("p")
       favorC.classList.add("favor-comm-resp")

       interFace.appendChild(favorC)
       favorits = localStorage.getItem("afavorits" + i)
       if (favorits == "true"){
           heartC.src = "img/heart.jpg"
           favorC.innerHTML = "В избранном"
       } else {
           heartC.src = "img/full-heart.jpg"
           favorC.innerHTML = "В избранное"
       }


       minusC = document.createElement("img")           // работа с рейтингом, увеличение - уменьшение. Рейтинг, подчеркнём это, отклика на комментарий.
       minusC.src = "img/minus.jpg"
       minusC.classList.add("minus")
       interFace.appendChild(minusC)

       if (localStorage.getItem('araiting' + i) !== null) {

           r = localStorage.getItem("araiting" + i)

       }else {
           localStorage.setItem("araiting" + i, '0')
           r = 0
       }

       minusC.setAttribute ('onclick', `raitingResponseMinus(${i})`)

       numRaiting = document.createElement("div")
       numRaiting.classList.add("response-num-raiting")
       numRaiting.innerHTML = r
       interFace.appendChild(numRaiting)



       plusC = document.createElement("img")
       plusC.src = "img/plus.jpg"
       plusC.classList.add("plus")
       interFace.appendChild(plusC)
       plusC.setAttribute('onclick', `raitingResponsePlus(${i})`);

       //(document.querySelectorAll(".arrow-left")[i] as HTMLImageElement).src = "img/left_grey.jpg";  // А вот так не получится, только forEach:

       document.querySelectorAll(".arrow-left").forEach(                           
           el => (el as HTMLImageElement).src = "img/left_grey.jpg"        
       );                               

   }

}












