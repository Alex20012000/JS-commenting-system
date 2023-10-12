let x; 

function check_length(obj) {
    x = obj.value.length; 
    if (x == 0) {
             
        document.querySelectorAll(".max-symbol").forEach(
    
        el => el.style.color = "gray",
       
        el => el.innerHTML = "Макс. 1000 символов" 
        );
        document.querySelector(".button").style.backgroundColor = "gray"; 
        document.querySelector(".err_sms").style.visibility = "hidden"; 
    }
    else if (x >= 0 && obj.value.length < 1000) {
        document.querySelectorAll(".max-symbol").forEach(
        
        el => el.style.color = "gray",
        el => el.innerHTML = "Макс. 1000 символов");
        document.querySelector(".button").style.backgroundColor = "#ABD873"; // Цвет кнопки делаем зеленый
        document.querySelector(".err_sms").style.visibility = "hidden";
    }
    else if (x >= 1000) {
        document.querySelector(".button").style.backgroundColor = "gray"; 
        document.querySelectorAll(".max-symbol").forEach(el => el.style.color = "red", el => el.innerHTML = obj.value.length + "/1000" 
        );
        document.querySelector(".err_sms").style.visibility = "visible"; 
    }
}
function check_length_resp(obj) {
    x = obj.value.length; 
    if (x == 0) {
        document.querySelectorAll(".max-symbol").forEach(el => el.style.color = "gray", el => el.innerHTML = "Макс. 1000 символов");
        document.querySelector(".send").src = "img/send_grey.jpg"; 
        document.querySelector(".err_sms").style.visibility = "hidden"; 
    }
    else if (x >= 0 && obj.value.length < 1000) { 
        document.querySelectorAll(".max-symbol").forEach(el => el.style.color = "gray", el => el.innerHTML = "Макс. 1000 символов");
        document.querySelector(".send").src = "img/send.png"; 
        document.querySelector(".err_sms").style.visibility = "hidden";
    }
    else if (x >= 1000) {
        document.querySelector(".send").src = "img/send_grey.jpg"; 
        document.querySelectorAll(".max-symbol").forEach(el => el.style.color = "red", el => el.innerHTML = obj.value.length + "/1000" 
        );
        document.querySelector(".err_sms").style.visibility = "visible"; 
    }
}
function sorting(sorting_method) {
   
    let ccount = +localStorage.getItem("countComment"); 
    let sorting_array = []; 
    let t_ar = [];
    for (let i = 1; i <= ccount; i++) {
        t_ar[0] = localStorage.getItem("amonth" + i); 
        t_ar[1] = localStorage.getItem("auser" + i); 
        t_ar[2] = localStorage.getItem("adate" + i); 
        t_ar[3] = localStorage.getItem("aday" + i);
        t_ar[4] = localStorage.getItem("ahours" + i);
        t_ar[5] = localStorage.getItem("amins" + i); 
        t_ar[6] = localStorage.getItem("ac" + i);
        t_ar[7] = localStorage.getItem("afavorits" + i);
        t_ar[8] = localStorage.getItem("araiting" + i);
        t_ar[9] = localStorage.getItem("favorits" + i);
        t_ar[10] = localStorage.getItem("raiting" + i) ? localStorage.getItem("raiting" + i) : "0"; 
        t_ar[11] = localStorage.getItem("resp" + i);
        t_ar[12] = localStorage.getItem("c" + i);
        t_ar[13] = localStorage.getItem("user" + i);
        t_ar[14] = localStorage.getItem("date" + i);
        t_ar[15] = localStorage.getItem("month" + i);
        t_ar[16] = localStorage.getItem("day" + i);
        t_ar[17] = localStorage.getItem("hours" + i);
        t_ar[18] = localStorage.getItem("mins" + i);
        t_ar[19] = localStorage.getItem("a" + i);
        t_ar[20] = localStorage.getItem("favorits" + i); 
        t_ar[21] = localStorage.getItem("resp" + i); 
        sorting_array[i] = [t_ar[0], t_ar[1], t_ar[2], t_ar[3], t_ar[4], t_ar[5], t_ar[6], t_ar[7], t_ar[8], t_ar[9], t_ar[10], t_ar[11], t_ar[12], t_ar[13], t_ar[14], t_ar[15], t_ar[16], t_ar[17], t_ar[18], t_ar[19], t_ar[20], t_ar[21]];
    } 
                                                                                 
    console.log(sorting_array); 
    console.log('--------------------------- **************** -----------------------------');
    
    var bubbleSortDateUp = (coll, t_ar_N) => {
        let stepsCount = coll.length - 1;
        
        
        let swapped;
       
        
       
        do {
            swapped = false;
          
            for (let i = 1; i < stepsCount; i += 1) {
                if (Date.parse(coll[i][t_ar_N]) < Date.parse(coll[i + 1][t_ar_N])) {
                  
                    const temp = coll[i];
                    coll[i] = coll[i + 1]; 
                    coll[i + 1] = temp;
                   
                   
                    swapped = true;
                }
            }
           
            stepsCount -= 1;
        } while (swapped); 
        return coll;
    };
    var bubbleSortDateDown = (coll, t_ar_N) => {
        let stepsCount = coll.length - 1;
        let swapped;
        do {
            swapped = false;
            for (let i = 1; i < stepsCount; i += 1) { 
 
                if (Date.parse(coll[i][t_ar_N]) > Date.parse(coll[i + 1][t_ar_N])) { 
                    const temp = coll[i];
                    coll[i] = coll[i + 1];
                    coll[i + 1] = temp;
                    swapped = true;
                }
            }
            stepsCount -= 1;
        } while (swapped); 
        return coll;
    };
    function writing_after_sorting(sorting_array) {
        for (let i = 1; i <= ccount; i++) {
            t_ar = []; 
            t_ar = sorting_array[i]; 
            console.log(sorting_array[i]);
            console.log('--------------------------- ///////------------/////// -----------------------------');
            localStorage.setItem("amonth" + i, t_ar[0]); 
            localStorage.setItem("auser" + i, t_ar[1]);
            localStorage.setItem("adate" + i, t_ar[2]); 
            localStorage.setItem("aday" + i, t_ar[3]);
            localStorage.setItem("ahours" + i, t_ar[4]);
            localStorage.setItem("amins" + i, t_ar[5]); 
            localStorage.setItem("ac" + i, t_ar[6]);
            localStorage.setItem("afavorits" + i, t_ar[7]);
            localStorage.setItem("araiting" + i, t_ar[8]); 
            localStorage.setItem("favorits" + i, t_ar[9]);
            localStorage.setItem("raiting" + i, t_ar[10]); 
            localStorage.setItem("resp" + i, t_ar[11]);
            localStorage.setItem("c" + i, t_ar[12]);
            localStorage.setItem("user" + i, t_ar[13]);
            localStorage.setItem("date" + i, t_ar[14]); 
            localStorage.setItem("month" + i, t_ar[15]);
            localStorage.setItem("day" + i, t_ar[16]);
            localStorage.setItem("hours" + i, t_ar[17]);
            localStorage.setItem("mins" + i, t_ar[18]);
            localStorage.setItem("a" + i, t_ar[19]);
            localStorage.setItem("favorits" + i, t_ar[20]); 
            localStorage.setItem("resp" + i, t_ar[21]);
        } //end for()
        location.reload(); 
    } 
    switch (sorting_method.value) {
        case 'by_number_of_ratings':
            break;
        case 'by_date_up':
            
            sorting_array = bubbleSortDateUp(sorting_array, 14); 
                                                            
            console.log(sorting_array); 
            console.log('--------------------------- //////////////////// -----------------------------');
            bubbleSortDateUp(sorting_array, 14);
            console.log(bubbleSortDateUp(sorting_array, 14));
            console.log('--------------------------- //////////////////// -----------------------------'); 
            writing_after_sorting(sorting_array); 
            set_selected(sorting_method.value); 
            break;
        case 'by_date_down':
            sorting_array = bubbleSortDateDown(sorting_array, 14);
            writing_after_sorting(sorting_array); 
            set_selected(sorting_method.value);
            break;
        case 'by_relevance':
            break;
        case 'by_number_of_answers':
            break;
        default:
            break;
    } // end switch()
    function set_selected(sorting_var_value) {
       
        var select = document.querySelector('#id_select-menu').getElementsByTagName('option');
        for (let i = 0; i < select.length; i++) {
            if (select[i].value === sorting_var_value)
                select[i].selected = true;
        }
    }
} 
function saveComment() {
    if (x == null || x == 0) { 
        return;
    }
    else if (x > 1000) {
        return; 
    }
    let c = document.querySelector("textarea").value; 
    let user = document.querySelector(".user").innerHTML;  
    let date = new Date(); 
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let mins = date.getMinutes();
    Coment.c = c;
    Coment.user = user; 
    Coment.date = date;
    Coment.month = String(month); 
    Coment.day = String(day);
    Coment.hours = String(hours);
    Coment.mins = String(mins);
    //Coment.raiting = 0
    Coment.favorits = Boolean(false); 
    Coment.resp = Boolean(false); 
    Coment.saveLc(); 
    location.reload(); 
}
let nameU;
let Coment;
// @ts-ignore
function randomName() {
                               
    if (localStorage.countComment) { 
        let i;
        i = +localStorage.getItem("countComment"); 
       
        let names = ['Алексей Никифоров', 'Алексей_1994b', 'Джунбокс3000', 'Сергей Иванов', 'Анна Ивановна']; 
        nameU = names[i % 5]; 
        document.querySelector(".user").innerHTML = nameU; 
    }
    else {
        nameU = "Алексей Никифоров"; 
    }
    Coment = new DoComment("", nameU, "", "", "", "", "", "", ""); 
    Coment.printComment();     
} 
let r; 
function responseComment(i) {
    let o;
    let user;
    let date;
    let month;
    let day;
    let hours;
    let mins;
    let favorits;
    o = document.querySelectorAll(".main-comment")[i]; 
    const booleanVal = true; 
    const stringBoolean = `${booleanVal}`;
    if (localStorage.getItem("resp" + i) == "false") { 
        localStorage.setItem("resp" + i, stringBoolean); 
        user = localStorage.getItem("user" + i);
        date = localStorage.getItem("date" + i);
       
        month = localStorage.getItem("month" + i);
        day = localStorage.getItem("day" + i);
        hours = localStorage.getItem("hours" + i);
        mins = localStorage.getItem("mins" + i);
        //const booleanValA = false
        //const stringBooleanA = `${booleanVal}`
        favorits = Boolean(localStorage.getItem("afavorits" + (i - 1)));
        r = new DoResponse("", "", "", "", "", "", "", "", "", "", ""); 
        r.o = o;
        r.user = user;
        r.date = new Date(date);
        r.month = month;
        r.day = day;
        r.hours = hours;
        r.mins = mins;
        r.favorits = favorits;
        r.iparent = i; 
        r.showResponse(); 
    }
    else { }
}
function raitingMinus(i) {
    let r;
    let loc;
    loc = document.querySelectorAll(".num-raiting")[i - 1];
    r = +loc.innerHTML;
    r--; 
    loc.innerHTML = r;
    localStorage.setItem("raiting" + i, r); 
}
function raitingPlus(i) {
    let r;
    let loc; 
    loc = document.querySelectorAll(".num-raiting")[i - 1];
    r = +loc.innerHTML;
    r++;
    loc.innerHTML = r;
    localStorage.setItem("raiting" + i, r); 
}
function changeFavorite(i) {
    let myImg = document.querySelectorAll(".heart")[i - 1];
    if (myImg.src.includes("full-heart")) { 
        myImg.src = "img/heart.jpg"; 
        document.querySelectorAll(".favor-comm")[i - 1].innerHTML = "В избранном";
    }
    else { 
        myImg.src = "img/full-heart.jpg";
        document.querySelectorAll(".favor-comm")[i - 1].innerHTML = "В избранное";
    }
    if (myImg.src.includes("full")) {
        const booleanVal = false;
        const stringBoolean = `${booleanVal}`;
        localStorage.setItem("favorits" + (i - 1), stringBoolean);
    }
    else {
        const booleanVal = true; 
        const stringBoolean = `${booleanVal}`;
        localStorage.setItem("favorits" + (i - 1), stringBoolean);
    }
}
function changeFavoriteResponse(i) {
    let myImg = document.querySelectorAll(".heartresponse")[i - 1];
    if (myImg.src.includes("full-heart")) {
        myImg.src = "img/heart.jpg";
        document.querySelectorAll(".favor-comm-resp")[i - 1].innerHTML = "В избранном";
    }
    else {
        myImg.src = "img/full-heart.jpg";
        document.querySelectorAll(".favor-comm-resp")[i - 1].innerHTML = "В избранное";
    }
    if (myImg.src.includes("full")) {
        const booleanVal = false;
        const stringBoolean = `${booleanVal}`;
        localStorage.setItem("afavorits" + (i - 1), stringBoolean); 
    }
    else {
        const booleanVal = true;
        const stringBoolean = `${booleanVal}`;
        localStorage.setItem("afavorits" + (i - 1), stringBoolean);
    }
}

function sendAnswer(i) {
    let user;
    let date;
    let day;
    let dayA; 
    let month;
    let monthA;   
    let hours;
    let hoursA;
    let mins;
    let minsA;
   
    let tempactxtareaid = "actxtarea" + i.toString(); 
    let acvalue = document.getElementById(tempactxtareaid).value;
    if (acvalue.length > 0 && acvalue.length < 1000) { 
        localStorage.setItem("ac" + i, acvalue);
        user = document.querySelector(".user").innerHTML;
        //favorits =
        date = new Date();
        monthA = date.getMonth();
        dayA = date.getDate();
        hoursA = date.getHours();
        minsA = date.getMinutes();
        if (monthA.toString().length == 1) { 
            month = "0" + monthA.toString();
        }
        if (dayA.toString().length == 1) {
            day = "0" + dayA.toString();
        }
        if (minsA.toString().length == 1) {
            mins = "0" + minsA.toString();
        }
        if (hoursA.toString().length == 1) {
            hours = "0" + hoursA.toString();
        }
        r.user = user;
        r.date = date;
        r.month = month;
        r.day = day;
        r.hours = hours;
        r.mins = mins;
       
        localStorage.setItem("amonth" + i, month);
        localStorage.setItem("auser" + i, user);
        localStorage.setItem("adate" + i, date.toString()); 
        localStorage.setItem("aday" + i, day);
        localStorage.setItem("ahours" + i, hours);
        localStorage.setItem("amins" + i, mins);
       
        location.reload();
    }
    else {
       
    }
}
function raitingResponseMinus(i) {
    let r;
    let loc;
    if (localStorage.getItem("araiting" + i) != null) {
        r = localStorage.getItem("araiting" + i); 
    }
    else { 
        r = 0;
    }
    loc = document.querySelectorAll(".response-num-raiting")[i - 1];
    loc.innerHTML = r;
    r = +loc.innerHTML;
    r--;
    loc.innerHTML = r;
    localStorage.setItem("araiting" + i, r);
}
function raitingResponsePlus(i) {
    let r;
    let loc;
    if (localStorage.getItem("araiting" + i) != null) {
        r = localStorage.getItem("araiting" + i);
    }
    else {
        r = 0;
    }
    loc = document.querySelectorAll(".response-num-raiting")[i - 1];
    loc.innerHTML = r;
    r = +loc.innerHTML;
    r++;
    loc.innerHTML = r;
    localStorage.setItem("araiting" + i, r);
} 