interface Element {                         // Элемент, это наиболее общий базовый класс, от которого объекты в документе наследуются
   style: CSSStyleDeclaration               // Это именно объект, который является блоком описания стилей CSS 
}
let x: any                                  // Да, действительно. Тип переменной абсолютно любой

// @ts-ignore                               // Отключение проверки в месте возникновения проблемы вместо полного отключения правила
function check_length(obj) {                // obj здесь это параметр    
   x = obj.value.length                     // Значение возвращаемое зависит от типа передаваемого объекта 

   if (x == 0 ) {
                                                                //Вот этот el берется из ниоткуда и пропадает в никуда. Он нужен только для forEach и стрелочной функции.        
       document.querySelectorAll(".max-symbol").forEach(        //Возвращает все элементы потомки узла, которые соответствуют селектору (с точкой селектор класса)
           el => el.style.color = "gray",                       //Свойство цвет
           el => el.innerHTML = "Макс. 1000 символов"           //Содержимое элемента в виде HTML-строки
       )
       document.querySelector(".button").style.backgroundColor = "gray"     // Затеняем кнопку серым цветом, если текста нет. Не набрал пользователь текст.
       document.querySelector(".err_sms").style.visibility = "hidden"       // Вообще скрываем объекты с этим селектором

   }

   else if(x >= 0 && obj.value.length <1000) {                  //длина сообщения больше нуля и меньше 1000 (для типа "строка" единица - символ, 1000 символов)
       document.querySelectorAll(".max-symbol").forEach(        //для каждого, селектор класса может быть применён ко многим элементам
           el => el.style.color = "gray",                       //в виде стрелочной функции (справа от => возвращаемое значение)
           el => el.innerHTML = "Макс. 1000 символов"
       )
       document.querySelector(".button").style.backgroundColor = "#ABD873"  // Цвет кнопки делаем зеленый
       document.querySelector(".err_sms").style.visibility = "hidden"

   }

   else if(x >= 1000) {                                                     
       document.querySelector(".button").style.backgroundColor = "gray"      // Длина сообщения больше 1000, делаем значение с этим селектором красным
       document.querySelectorAll(".max-symbol").forEach(
           el => el.style.color = "red",
           el => el.innerHTML = obj.value.length + "/1000"                  // Конкатенация строки с текстом в кавычках
       )
       document.querySelector(".err_sms").style.visibility = "visible"      // Показываем объекты с этим селектором

   }
}


function check_length_resp(obj) {                // obj здесь это параметр    
    x = obj.value.length                     // Значение возвращаемое зависит от типа передаваемого объекта 

    if (x == 0) {
   
        document.querySelectorAll(".max-symbol").forEach(
            el => el.style.color = "gray",
            el => el.innerHTML = "Макс. 1000 символов"
        );
            (document.querySelector(".send") as HTMLImageElement).src = "img/send_grey.jpg"     // Меняем картинку на серую, заблокированную, самолётик
        document.querySelector(".err_sms").style.visibility = "hidden"       // Вообще скрываем объекты с этим селектором

    }

    else if (x >= 0 && obj.value.length < 1000) {                  //длина сообщения больше нуля и меньше 1000 (для типа "строка" единица - символ, 1000 символов)
        document.querySelectorAll(".max-symbol").forEach(
            el => el.style.color = "gray",
            el => el.innerHTML = "Макс. 1000 символов"
        );
        (document.querySelector(".send") as HTMLImageElement).src = "img/send.png";  // Цвет бумажного самолётика, незаблокированный
        document.querySelector(".err_sms").style.visibility = "hidden"

    }

    else if (x >= 1000) {
        (document.querySelector(".send") as HTMLImageElement).src = "img/send_grey.jpg";      // Длина комментария к сообщению больше 1000, делаем значение с этим селектором красным
        document.querySelectorAll(".max-symbol").forEach(
            el => el.style.color = "red",
            el => el.innerHTML = obj.value.length + "/1000"                  // Конкатенация строки с текстом в кавычках
        );
        document.querySelector(".err_sms").style.visibility = "visible"      // Показываем объекты с этим селектором

    }
}


function sorting(sorting_method) {                                                      // Сортировка сообщений, вызывается при любом выборе пользователем из выпадающего списка
   // alert(sorting_method.value)  // Здесь можно узнать, какое значение было передано из option/select
    let ccount = +localStorage.getItem("countComment")          // Унарный оператор + ставится перед элементом, пытаясь преобразовать его в число
    let sorting_array: string[][] = []                                                                             // Создаём пустой двумерный массив, тип данных "строки"
    let t_ar: string[] =[]
    for (let i = 1; i <= ccount; i++) {
        t_ar[0] = localStorage.getItem("amonth" + i)                                             // помним, что хранилище хранит ТОЛЬКО строки. А сортировать мы будем числа. См. Унарный оператор +variable
        t_ar[1] = localStorage.getItem("auser" + i)                                                 // + i   здесь это конкатенация, это НЕ унарный оператор (ключи хранилища тоже текстовые)
        t_ar[2] = localStorage.getItem("adate" + i)                                                 // <--- сортировать по времени ответа на отклик, это именно численное значение даты из конструктора Data(), Не забыть преобразовать в число с помощью Унарного оператора +
        t_ar[3] = localStorage.getItem("aday" + i)
        t_ar[4] = localStorage.getItem("ahours" + i)
        t_ar[5] = localStorage.getItem("amins" + i)                                                 //GET ITEM, считаем всё хранилище в массив двумерный
        t_ar[6] = localStorage.getItem("ac" + i)
        t_ar[7] = localStorage.getItem("afavorits" + i)
        t_ar[8] = localStorage.getItem("araiting" + i)                                              // <--- сортировать по количеству оценок ответов на комментарии, Не забыть преобразовать в число с помощью Унарного оператора +
        t_ar[9] = localStorage.getItem("favorits" + i)
        t_ar[10] = localStorage.getItem("raiting" + i) ? localStorage.getItem("raiting" + i) : "0"        // <--- сортировать по количеству оценок комментариев, Не забыть преобразовать в число с помощью Унарного оператора +
        t_ar[11] = localStorage.getItem("resp" + i)                                                     // Защита от ошибки "не является числом".      ? :    ТЕРНАРНЫЙ ОПЕРАТОР
        t_ar[12] = localStorage.getItem("c" + i)
        t_ar[13] = localStorage.getItem("user" + i)
        t_ar[14] = localStorage.getItem("date" + i)                                                // <--- сортировать по времени написания комментария, это именно численное значение даты из конструктора Data(), Не забыть преобразовать в число с помощью Унарного оператора +
        t_ar[15] = localStorage.getItem("month" + i)
        t_ar[16] = localStorage.getItem("day" + i)
        t_ar[17] = localStorage.getItem("hours" + i)
        t_ar[18] = localStorage.getItem("mins" + i)
        t_ar[19] = localStorage.getItem("a" + i)
        t_ar[20] = localStorage.getItem("favorits" + i)                                         // повтор
        t_ar[21] = localStorage.getItem("resp" + i)                                              // повтор
        sorting_array[i] = [t_ar[0], t_ar[1], t_ar[2], t_ar[3], t_ar[4], t_ar[5], t_ar[6], t_ar[7], t_ar[8], t_ar[9], t_ar[10], t_ar[11], t_ar[12], t_ar[13], t_ar[14], t_ar[15], t_ar[16], t_ar[17], t_ar[18], t_ar[19], t_ar[20], t_ar[21]]
    } //end for()
    //alert(sorting_array[2][14]);                                                                                     // заглянем в третий элемент двумерного массива (=ЗАГЛЯНЕМ В ХРАНИЛИЩЕ, посмотрим что там - в одном из элементов)
    console.log(sorting_array)                                                                              // Смотреть в консоли Chrome    Ctrl+Shift+i
    console.log('--------------------------- **************** -----------------------------')
    // Функция изменяет входящий массив coll. Сортировка Методом Пузырька, всплывающего на поверхность.
    var bubbleSortDateUp = (coll,t_ar_N) => {
        let stepsCount = coll.length - 1;
        // Объявляем переменную swapped, значение которой показывает,
        // был ли совершен обмен элементов во время перебора массива
        let swapped;
        // do..while цикл. Работает почти идентично while
        // Разница в проверке. Тут она делается не до выполнения тела, а после.
        // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
        do {
            swapped = false;
            // Перебираем массив и меняем местами элементы, если предыдущий
            // больше, чем следующий
            for (let i = 1; i < stepsCount; i += 1) {                          //    starting from 1                                    // булевы функции сравнения > со строками не работают, поэтому:
            // alert(Date.parse(coll[i][t_ar_N]))                                                                                                // test   Date.parse(coll[i][t_ar_N])     Date.parse(coll[i + 1][t_ar_N]) 
                if (Date.parse(coll[i][t_ar_N]) < Date.parse(coll[i + 1][t_ar_N])) {                                                            // сортируем по  t_ar[14] см. выше.   УНАРНЫЙ ОПЕРАТОР + не подходит, делаем   ПАРСИНГ ДАТЫ    (строка -> число)
                    // temp – временная константа для хранения текущего элемента
                    const temp = coll[i];
                    coll[i] = coll[i + 1];                                                                                                 // смещаем весь "длинный" элемент двумерного массива
                    coll[i + 1] = temp;
                    // Если сработал if и была совершена перестановка,
                    // присваиваем swapped значение true
                    swapped = true;
                }
            }
            // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
            // в конце массива
            stepsCount -= 1;
        } while (swapped); // продолжаем, пока swapped === true

        return coll;
    };

    var bubbleSortDateDown = (coll, t_ar_N) => {                                                                    // Up / Down Отличаются только знаком      (< Date)      ,     (> Date)
        let stepsCount = coll.length - 1;
        let swapped;
        do {
            swapped = false;
            for (let i = 1; i < stepsCount; i += 1) {                          //    starting from 1                                    // булевы функции сравнения > со строками не работают, поэтому:
                // alert(Date.parse(coll[i][t_ar_N]))                                                                                                // test   Date.parse(coll[i][t_ar_N])     Date.parse(coll[i + 1][t_ar_N]) 
                if (Date.parse(coll[i][t_ar_N]) > Date.parse(coll[i + 1][t_ar_N])) {                                                            // сортируем по  t_ar[14] см. выше.   УНАРНЫЙ ОПЕРАТОР + не подходит, делаем   ПАРСИНГ ДАТЫ    (строка -> число)
                    const temp = coll[i];
                    coll[i] = coll[i + 1];                                                                                                 // смещаем весь "длинный" элемент двумерного массива
                    coll[i + 1] = temp;
                    swapped = true;
                }
            }
            stepsCount -= 1;
        } while (swapped); // продолжаем, пока swapped === true
        return coll;
    };


    function writing_after_sorting(sorting_array) {
        for (let i = 1; i <= ccount; i++) {
            t_ar = []                                                                                                         // очистка массива, на всякий случай
            t_ar = sorting_array[i]                                                                                 // весь "длинный" элемент двумерного массива
            console.log(sorting_array[i])
            console.log('--------------------------- ///////------------/////// -----------------------------')
            localStorage.setItem("amonth" + i, t_ar[0])                                             // помним, что хранилище хранит ТОЛЬКО строки. А сортировать мы будем числа. См. Унарный оператор +variable
            localStorage.setItem("auser" + i, t_ar[1])                                                 // + i   здесь это конкатенация, это НЕ унарный оператор
            localStorage.setItem("adate" + i, t_ar[2])                                                 // <--- сортировать по времени ответа на отклик, это именно численное значение даты из конструктора Data(), Не забыть преобразовать в число с помощью Унарного оператора +
            localStorage.setItem("aday" + i, t_ar[3])
            localStorage.setItem("ahours" + i, t_ar[4])
            localStorage.setItem("amins" + i, t_ar[5])                                                 //SETTING ITEM, Запишем всё в хранилище, полностью перезапишем хранилище
            localStorage.setItem("ac" + i, t_ar[6])
            localStorage.setItem("afavorits" + i, t_ar[7])
            localStorage.setItem("araiting" + i, t_ar[8])                                              // <--- сортировать по количеству оценок ответов на комментарии, Не забыть преобразовать в число с помощью Унарного оператора +
            localStorage.setItem("favorits" + i, t_ar[9])
            localStorage.setItem("raiting" + i, t_ar[10])                                              // <--- сортировать по количеству оценок комментариев, Не забыть преобразовать в число с помощью Унарного оператора +
            localStorage.setItem("resp" + i, t_ar[11])
            localStorage.setItem("c" + i, t_ar[12])
            localStorage.setItem("user" + i, t_ar[13])
            localStorage.setItem("date" + i, t_ar[14])                                                // <--- сортировать по времени написания комментария, это именно численное значение даты из конструктора Data(), Не забыть преобразовать в число с помощью Унарного оператора +
            localStorage.setItem("month" + i, t_ar[15])
            localStorage.setItem("day" + i, t_ar[16])
            localStorage.setItem("hours" + i, t_ar[17])
            localStorage.setItem("mins" + i, t_ar[18])
            localStorage.setItem("a" + i, t_ar[19])
            localStorage.setItem("favorits" + i, t_ar[20])                                         // повтор
            localStorage.setItem("resp" + i, t_ar[21])                                              // повтор
        } //end for()

        location.reload()                            // Как кнопка Refresh, Консоль Chrome очищается !   Закомментировать, если хотитим заглянуть в массивы в консоли Chrome
    }                                                           // Если закомментирована перезагрузка страницы, то результат сортировки можно увидеть, например, нажав F5 в Chrome

    //alert(sorting_method.value)  // Здесь можно узнать, какое значение было передано из option/select
    switch (sorting_method.value) {
        case 'by_number_of_ratings':

            break;
        case 'by_date_up':
            // alert('СРАЗУ ПОСЛЕ ЭТОГО СООБЩЕНИЯ НАЧНЕТСЯ СОРТИРОВКА МЕТОДОМ ПУЗЫРЬКА');
            sorting_array = bubbleSortDateUp(sorting_array, 14)                                   // сортируем по 14-му элементу, т.е. по дате комментария в числовом формате (не забыть преобразовать строку в число)
            // alert(sorting_array[2])                                                                                   // снова заглянем в третий элемент двумерного массива
            // sorting_array.reverse()                                                  // не работает для 2D  [][]   // реверс, обратная сортировка после Пузырька делается намного легче, спасибо Пузырьку!
            console.log(sorting_array)                                                                              // Смотреть в консоли Chrome    Ctrl+Shift+i
            console.log('--------------------------- //////////////////// -----------------------------')
            bubbleSortDateUp(sorting_array, 14)
            console.log(bubbleSortDateUp(sorting_array, 14))
            console.log('--------------------------- //////////////////// -----------------------------')           // не печатает, потому что дальше по тексту Location.Reload()  Консоль очищается

            writing_after_sorting(sorting_array)                                                                             // вызов: запись в хранилище и перезагрузка страницы
            set_selected(sorting_method.value)  // Устанавливаем опцию Выбрано для выбранного значения из выпадающего списка
            break;
        case 'by_date_down':
            sorting_array = bubbleSortDateDown(sorting_array, 14)
            writing_after_sorting(sorting_array)                                                                             // вызов: запись в хранилище и перезагрузка страницы
            set_selected(sorting_method.value)  // Устанавливаем опцию Выбрано для выбранного значения из выпадающего списка
            break;
        case 'by_relevance':

            break;
        case 'by_number_of_answers':

            break;

        default:

            break;
    } // end switch()

    function set_selected(sorting_var_value) {
        // Устанавливаем опцию Выбрано для выбранного значения из выпадающего списка:
        var select = document.querySelector('#id_select-menu').getElementsByTagName('option');
        for (let i = 0; i < select.length; i++) {
            if (select[i].value === sorting_var_value) select[i].selected = true;
        }
    }

} // end function sorting()


interface ComentIFace {             // Интерфейс. Перечисленные свойства и методы объекты должны будут реализовать
   c: string                        // Здесь указано свойство, это тип "строка"
   user: string                     // Так и обеспечивается более строгая типизация
   date: Date
   month: string
   day: string
   hours: string
   mins: string
   //raiting: number
   favorits: boolean                // Здесь указано свойство, это тип "булево" (Ложь/Истина)
   resp: boolean
   saveLc(): void                   // А здесь указан метод. Да, это именно метод. Метод класса. Void всегда означает, что возвращаемого значения от функции не жди
   printComment(): void             // Не возвращает эта функция значение. Это даже, скорее процедура. Одна сохраняет комментарий, другая печатает.
}
// @ts-ignore
function saveComment () {           // Функция Сохранить комментарий
   if(x == null || x == 0){         // Нуль и 0 это разные вещи. В любом случае, если значение пусто, то сразу выход из функции ни с чем
       return;
   }

   else if(x > 1000) {
       return;                      // Слишком длинное сообщение: всё, выходим из функции. Не сохраняем длинные сообщения.
   }

   let c = document.querySelector("textarea").value                 // Просто получаем значение по тэгу.  Тэг textarea у нас один.
   let user= document.querySelector(".user").innerHTML              // С точкой - селектор класса. Пользователь. 

   let date = new Date()                                            // Конструктор даты
   let month = date.getMonth()
   let day = date.getDate()
   let hours = date.getHours()
   let mins = date.getMinutes()                                     // Методами извлекаем из даты всё, вплоть до часов
   Coment.c = c                                 // комментарии хранятся временно в переменной (c), (c) комментарии, (r) рейтинги (встретим далее)
   Coment.user = user                           // У Coment есть свойства: сам текст, пользователь, дата и т.д.
   Coment.date = date
   Coment.month = String(month)                 // любой тип => в тип "строка", преобразуем
   Coment.day = String(day)
   Coment.hours = String(hours)
   Coment.mins = String(mins)
   //Coment.raiting = 0
   Coment.favorits = Boolean(false)             // В избранном (Да/Нет)
   Coment.resp = Boolean(false)                 // Ответ на комментарий (Есть/Нет)


   Coment.saveLc()                              // Вызов метода "Сохранить в хранилище"
   location.reload()                            // Как кнопка Refresh, обновить страницу без перезагрузки хэша

}
let nameU: string
let Coment: ComentIFace
// @ts-ignore
function randomName(){                          // Случайное имя (из перечисленных). Генератор случайных имён
   //localStorage.clear();                      // Очистка хранилища. Раскомментировать эту строку, если вы хотите очистить хранилище.        
   if(localStorage.countComment){               // Если в локальном хранилище вообще есть хоть одна запись
       let i: number
       i = +localStorage.getItem("countComment")    // берем номер последнего комментария
//     let names = ['Имя0', 'Имя1', 'Имя2','Имя3','Имя4'];      // Массив строк 0,1,2,3,4 элементы
       let names = ['Алексей Никифоров', 'Алексей_1994b', 'Джунбокс3000','Сергей Иванов','Анна Ивановна'];      // Массив строк 0,1,2,3,4 элементы
       nameU = names[i%5]                           // И делим его на пять. Какой получим модуль, остаток от деления, элемент массива с тем номером и берём
       document.querySelector(".user").innerHTML = nameU        // В документ по селектору класса записываем пользователя
   } else {
       nameU = "Алексей Никифоров"                // Если нет, то первым будет Алексей Никифоров
   }
   Coment = new DoComment("",nameU,"","","","","", "","")           // Создаем новый экземпляр специального метода класса
   Coment.printComment()                                            // Каждый аргумент строго на своем месте, передаем ему только имя. Печатаем на странице    
}                                                                   // Но даже незаполненные кавычки обязаны стоять на своих местах
interface rspnsComentIFace{                     // Интерфейс Ответ на отклик
   o: any                                       // (o) это объект, и у него действительно любой тип
   c: string
   user: string
   date: Date                                   // Здесь все свойства говорят сами за себя
   month: string
   day: string
   hours: string
   mins: string
   favorits: boolean
   iparent: number                              // родитель
   showResponse(): void                         // Метод "Показать ответ на отклик" ничего не возвращает, он только покажет ответ на отклик
}
let r: rspnsComentIFace                         // (r) как уже говорилось, ответ на отклик с методом "Интерфейс ответа на комментарий"
function responseComment (i:number) {           // Функция ответа на комментарий от одного аргумента, i имеет числовой тип
   let o: object
   let user: string
   let date: string
   let month: string
   let day: string
   let hours: string
   let mins: string
   let favorits: boolean                                                                                       // Массив всегда создается заданного размера.
   o = document.querySelectorAll(".main-comment")[i]        // вот здесь мы узнаем, что наш объект "o" становится массивом. Размерность заранее известна!
   const booleanVal = true                                  // массив не бесконечен, число элементов строго подсчитывается по количеству селекторов .main-comment
   const stringBoolean = `${booleanVal}`                // Константа никогда не будет изменена. Но мы ее превратим в строку (хранилище принимает ТОЛЬКО строки)
   if (localStorage.getItem("resp"+ i) == "false") {    // Если у ответа Ответ1, Ответ2, Ответ3 нет отклика, то добавим ему его
   localStorage.setItem("resp" + i, stringBoolean)      // Добавим строку Истина, что теперь отклик есть          SET SETTING Установим  
   user = localStorage.getItem("user" +i)
   date = localStorage.getItem("date" +i)               
   //month = (+localStorage.getItem("month" +i) +1).toString()
   month = localStorage.getItem("month" +i)
   day = localStorage.getItem("day" +i)                 // Здесь мы ничего не устанавливаем в хранилище, только берём оттуда значения с говорящими именами
   hours = localStorage.getItem("hours" +i)
   mins = localStorage.getItem("mins" +i)
   //const booleanValA = false
   //const stringBooleanA = `${booleanVal}`
   favorits = Boolean(localStorage.getItem("afavorits" + (i-1)))

   r = new DoResponse("","","","","","","","","","","")     // Создаем новый экземпляр специального метода класса
                                                            // Добавить Отклик/Ответ на уже написанный кем-то комментарий    
   r.o = o
   r.user = user
   r.date = new Date(date)
   r.month = month
   r.day = day
   r.hours = hours
   r.mins = mins
   r.favorits = favorits

   r.iparent = i                                            // родительский элемент, номер того, кому мы отвечаем на его комментарий
   r.showResponse()                                         // и напечатаем на странице наш отклик на комментарий
   } else {}
}


function  raitingMinus(i:number) {
   let r
   let loc
   loc = document.querySelectorAll(".num-raiting")[i-1]     // у нас отсчёт элементов массива начинается от нуля, поэтому минус один
   r = +loc.innerHTML                                       // а вот здесь (r) любого типа становится числом за счет знака +
   r--                                                      // минусуем рейтинг
   loc.innerHTML = r                                        
   localStorage.setItem("raiting" + i, r)                   // запишем в хранилище Рейтинг1, "1"  Рейтинг2, "-3"   Рейтинг4, "10" и т.п.
                                                            // И все же мы пишем в хранилище рейтинг как число:
                                                            // С ним как с числом можно попрощаться! Это уже строка!
}

function  raitingPlus(i:number) {
   let r
   let loc                                                  // т.е. значение у нас на листе, мы его читаем с листа, со страницы
   loc = document.querySelectorAll(".num-raiting")[i-1]     // это массив DOM-элементов, из которых мы извлечём внутреннюю html строку тэга
   r = +loc.innerHTML
   r++                                                      // плюсуем рейтинг
   loc.innerHTML = r
   localStorage.setItem("raiting" + i, r)                   // также запишем в хранилище Рейтинг1, "1"  Рейтинг2, "-3"   Рейтинг4, "10" и т.п.


}



function changeFavorite(i:number) {                         // в процессе добавление в избранное меняется свойство путь к картинке и текст внутри тэга
   let myImg = document.querySelectorAll(".heart")[i-1] as HTMLImageElement;
   if(myImg.src.includes("full-heart")) {                   // путь включает слово, "закрашенное сердце"
       myImg.src = "img/heart.jpg"                          // здесь уже путь к картинке 
       document.querySelectorAll(".favor-comm")[i-1].innerHTML = "В избранном"
   } else {                                                 // кстати, именно по этому свойству (сердце закрашенное) мы и определяем добавить в избранное или удалить
       myImg.src = "img/full-heart.jpg"
       document.querySelectorAll(".favor-comm")[i-1].innerHTML = "В избранное"

   }

   if(myImg.src.includes("full")){                          // если путь к картинке содержит слово "закрашенное", то запишем противоположное значение в хранилище
       const booleanVal = false
       const stringBoolean = `${booleanVal}`
       localStorage.setItem("favorits" + (i-1), stringBoolean)
   }else {
       const booleanVal = true                              // так и записываем в хранилище Ложь/Истина при каждом нажатии на значок избранное
       const stringBoolean = `${booleanVal}`
       localStorage.setItem("favorits" + (i-1), stringBoolean)
   }

}


function changeFavoriteResponse(i:number) {                 // То же самое для Откликов на комментарии
       let myImg = document.querySelectorAll(".heartresponse")[i-1] as HTMLImageElement;
   if(myImg.src.includes("full-heart")) {
       myImg.src = "img/heart.jpg"
       document.querySelectorAll(".favor-comm-resp")[i-1].innerHTML = "В избранном"
   } else {
       myImg.src = "img/full-heart.jpg"
       document.querySelectorAll(".favor-comm-resp")[i-1].innerHTML = "В избранное"

   }

   if(myImg.src.includes("full")){
       const booleanVal = false
       const stringBoolean = `${booleanVal}`
       localStorage.setItem("afavorits" + (i-1), stringBoolean)     // Снова запись в хранилище SET, Setting
   }else {
       const booleanVal = true
       const stringBoolean = `${booleanVal}`
       localStorage.setItem("afavorits" + (i-1), stringBoolean)

   }

}

                                            //tempactxtareaid: для чего добавлена: Каждому текстовому полю ответа на комментарий присвоен уникальный идентификатор. По нему происходит обращение к этому полю и заполнение его правильным значением
function sendAnswer(i:number) {                 // Функция Отправить ответ/ отклик/ комментарий 
   let user: string
   let date: Date
   let day: string
   let dayA: number                         // Хранилище устроено ассоциативно. И принимает только строки. Только!
   let month: string                        // Как вообще устроено хранилище : Строка:Строка    Строка:Строка    Строка:Строка
   let monthA: number                       // Перед двоеточием - это текстовый ключ. По нему происходит поиск в хранилище.    
   let hours: string
   let hoursA: number
   let mins: string
   let minsA: number
   //let favorits: boolean
   //localStorage.setItem("a", i.toString())
   let tempactxtareaid = "actxtarea" + i.toString() // tempactxtareaid - в программе эта переменная нужна чтобы правильно заполнялись текстовые поля комментариев и ответов
    let acvalue = (document.getElementById(tempactxtareaid) as HTMLInputElement).value

    if (acvalue.length > 0 && acvalue.length < 1000) {     // Добавим ответ на комментарий только если строка не пуста и длина меньше 1000 симв.
        localStorage.setItem("ac" + i, acvalue)          // ac1:текст, ac2:текст, ac3:текст и т.п. в хранилище так обозначены ключи комментариев    Строка:Строка
        user = document.querySelector(".user").innerHTML     // "ac" в кавычках, всё, с этого момента мы и работаем со строкой, тип "строка"
        //favorits =
        date = new Date()
        monthA = date.getMonth()
        dayA = date.getDate()
        hoursA = date.getHours()
        minsA = date.getMinutes()

        if (monthA.toString().length == 1) {                  // добавим ноль вначале для ровного текста 01   02   09  для более удобного восприятия дат, времён
            month = "0" + monthA.toString()
        }
        if (dayA.toString().length == 1) {
            day = "0" + dayA.toString()
        }
        if (minsA.toString().length == 1) {
            mins = "0" + minsA.toString()
        }
        if (hoursA.toString().length == 1) {
            hours = "0" + hoursA.toString()
        }

        r.user = user
        r.date = date
        r.month = month
        r.day = day
        r.hours = hours
        r.mins = mins
        //r.favorits = favorits

        // далее хранилище принимает ассоциативную пару строкового ключа и значения
        localStorage.setItem("amonth" + i, month)
        localStorage.setItem("auser" + i, user)
        localStorage.setItem("adate" + i, date.toString())           // date как мы помним, не была строкой, это был конструктор дат, сделаем её строкой
        localStorage.setItem("aday" + i, day)
        localStorage.setItem("ahours" + i, hours)
        localStorage.setItem("amins" + i, mins)
        //localStorage.setItem("afavorits" + i, afavorits)

        location.reload()

    } else {
    // do nothing
    }

}

function  raitingResponseMinus(i) {                             // Отдельные функции для рейтинга ответов на комментарии по аналогии с тем что было выше
   let r
   let loc
   if(localStorage.getItem("araiting" + i) != null){            // Чтоб отличалось название от просто рейтинга добавим букву a
       r = localStorage.getItem("araiting" + i)                 // В хранилище ключи будут называться araiting1, araiting2, araiting5 и т.п.
   } else {                                                     // araiting1 это всё строка, цифра на конце уже стала частью строки и строкою
       r = 0
   }


   loc = document.querySelectorAll(".response-num-raiting")[i-1]
   loc.innerHTML = r
   r = +loc.innerHTML
   r--
   loc.innerHTML = r
   localStorage.setItem("araiting" + i, r)


}

function  raitingResponsePlus(i) {
   let r
   let loc
   if(localStorage.getItem("araiting" + i) != null){
       r = localStorage.getItem("araiting" + i)
   } else {
       r = 0
   }

   loc = document.querySelectorAll(".response-num-raiting")[i-1]
   loc.innerHTML = r
   r = +loc.innerHTML
   r++
   loc.innerHTML = r
   localStorage.setItem("araiting" + i, r)


}                                                              
