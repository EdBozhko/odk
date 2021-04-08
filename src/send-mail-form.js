function send(event, php, id){
    let form = document.getElementById(id);
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    let req = new XMLHttpRequest();
    req.open('POST', php, true);
    popUpCallback.classList.add("__active");
    popUpCalculation.classList.add("__active")
    popUpDownload.classList.add("__active")
    req.onload = function() {

        if (req.status > 199 && req.status < 400) {

            json = JSON.parse(this.responseXML); // Ебанный internet explorer 11
            console.log(json);
                    
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json == null) {
                // Если сообщение отправлено
                // alert("Сообщение отправлено");
                if (id === 'form-download') window.open('http://www.odk.com.ua/catalog/catalog.pdf', '_blank');
                form.reset();
                popUpCallback.classList.remove("pop-up-show");
                popUpCalculation.classList.remove("pop-up-show")
                popUpDownload.classList.remove("pop-up-show")
                popUpOverlay.classList.remove("pop-up-show");
                popUpCallback.classList.remove("__active");
                popUpCalculation.classList.remove("__active")
                popUpDownload.classList.remove("__active")
    
            } else {
                popUpCallback.classList.remove("__active");
                popUpCalculation.classList.remove("__active")
                popUpDownload.classList.remove("__active")

                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
                }
                // Если не удалось связаться с php файлом

        } else {
            popUpCallback.classList.remove("__active");
            popUpCalculation.classList.remove("__active")
            popUpDownload.classList.remove("__active")

            alert("Ошибка сервера. Номер: "+req.status);

        }
    };             
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {
        popUpCallback.classList.remove("__active");
        popUpCalculation.classList.remove("__active")
        popUpDownload.classList.remove("__active")

        alert("Ошибка отправки запроса");
        popUpWait.classList.remove("pop-up-show");

    };
    req.send(new FormData(event.target));
}