// function makeGoods() {
//     const headers = {
//         "content-type": "application/json",
//     };
//     return fetch(url, {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: headers,
//     }).then((response) => {
//         if (response.ok) {
//             return response.json();
//         }
//         return response.json().then((error) => console.log(error));
//     });
// }



// function getData(url, body = null) {
//     fetch(url)
//         .then((response) => response.json())
//         .then(data => {
//             console.log(data)
//         })
// }



// async function gatherInfo(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
// gatherInfo(url)




// // sendRequest("GET", requestUrlUsers)
// // .then(data => console.log(data))
// // .catch(error => console.log(error))

// // $btn.addEventListener('click', function(e) {
// //     let name = $inp1.value
// //     let lastName = $inp2.value
// //     console.log(name, lastName)
// //     let obj = {
// //         name: name,
// //         lastName: lastName
// //     }
// //     console.log(obj)
// //     arrVal.push(obj)
// //     console.log(arrVal)
// // })

// <
// button type = "button"
// id = "editBtn${item.id}"
// class = "btnEdit"
// data - toggle = "modal"
// data - target = "#exampleModalCenter" >
//     Редактировать <
//     /button>


// <
// div class = "modal fade"
// id = "exampleModalCenter"
// tabindex = "-1"
// role = "dialog"
// aria - labelledby = "exampleModalCenterTitle"
// aria - hidden = "true" >
//     <
//     div class = "modal-dialog modal-dialog-centered"
// role = "document" >
//     <
//     div class = "modal-content" >
//     <
//     div class = "modal-header" >
//     <
//     h5 class = "modal-title"
// id = "exampleModalLongTitle" > Введите данные < /h5> <
//     button type = "button"
// class = "close"
// data - dismiss = "modal"
// aria - label = "Close" >
//     <
//     span aria - hidden = "true" > & times; < /span> <
// /button> <
// /div> <
// div class = "modal-body" >
//     <!-- Form -->
//     <
//     form method = "POST"
// id = "ajax_form"
// action = "" >
//     <
//     div class = "form-group" >
//     <
//     label
// for = "exampleFormControlInput1" > Введите наименование товара < /label> <
//     input type = "text"
// class = "form-control"
// id = "name" >
//     <
//     /div> <
//     div class = "form-group" >
//     <
//     label
// for = "exampleFormControlInput1" > Изображение < /label> <
//     input type = "text"
// class = "form-control"
// id = "img" >
//     <
//     /div> <
//     div class = "form-group" >
//     <
//     label
// for = "exampleFormControlInput1" > Цена за единицу: < /label> <
//     input type = "text"
// class = "form-control"
// id = "price" >
//     <
//     /div> <
//     div class = "form-group" >
//     <
//     label
// for = "exampleFormControlInput1" > Количество на складе: < /label> <
//     input type = "text"
// class = "form-control"
// id = "count" >
//     <
//     /div> <
//     div class = "form-group" >
//     <
//     label
// for = "exampleFormControlInput1" > Продавец: < /label> <
//     input type = "text"
// class = "form-control"
// id = "saler" >
//     <
//     /div> <
//     div class = "form-group" >
//     <
//     label
// for = "exampleFormControlInput1" > Номер телефона: < /label> <
//     input type = "text"
// class = "form-control"
// id = "number" >
//     <
//     /div> <
//     /form>

// <
// /div>
// <!-- Modal-footer -->
// <
// div class = "modal-footer" >
//     <
//     button type = "button"
// class = "btn btn-secondary"
// data - dismiss = "modal" > Закрыть < /button> <
//     button type = "button"
// id = "editBtn"
// class = "btn btn-primary" > Сохранить данные < /button> <
//     /div> <
//     /div> <
//     /div> <
//     /div>