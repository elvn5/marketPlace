"use strict";
const url = "http://localhost:8000/goods";
$(document).ready(function() {
    console.log("ready!");
});

function addGoods(url, goods) {
    const headers = {
        "content-type": "application/json",
    };
    fetch(url, {
        method: "POST",
        body: JSON.stringify(goods),
        headers: headers
    })
}

function deleteGoods(url, id) {
    fetch(url + `${id}`, {
        method: "DELETE",
    })

}

function getObj(url) {
    return fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            return data.map(item => {
                return item
            })
        })
}

function getDOMItem(item) {
    let elem = $(`
        <div class="card${item.id}" id="${item.id}" style="width: 18rem;">
            <img class="card-img-top mt-4" src=" ${item.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${item.name}</h5>
                <p class="card-text">Система трёх камер (сверхшироко­угольная, широкоугольная и телефото)

                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Цена за единицу: ${item.price} $ </li>
                <li class="list-group-item">Количество на складе: ${item.count} Шт </li>
                <li class="list-group-item">Номер телефона: ${item.telephone}</li>
                <li class="list-group-item">Продавец: ${item.saler}</li>
            </ul>
            <div class="card-body">
                <button id="deleteBtn${item.id}" href="#" class="card-delete">Удалить</button>
                
                


            </div>
        </div>

       
    `)
    return elem
}
document.querySelector('#btnSend').addEventListener('click', function(e) {
    if (e.target && e.target.id == e.target.id) {
        let obj = {
            name: $("#name").text($("#name")).val(),
            image: $("#img").text($("#img")).val(),
            price: $("#price").text($("#price")).val(),
            count: $("#count").text($("#count")).val(),
            saler: $("#saler").text($("#saler")).val(),
            telephone: $("#number").text($("#number")).val(),
        }
        fetch('http://localhost:8000/goods', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                $(".card__holder").append(getDOMItem(data))
            })
            // console.log(getObj(url))
    }
});
getObj(url).then(obj => {
    $(".card__holder").append(getDOMItem(obj[0]))
    $(".card__holder").append(getDOMItem(obj[1]))
    $(".card__holder").append(getDOMItem(obj[2]))
    console.log(obj)
})
setTimeout(() => {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == e.target.id) {
            let id = e.target.id
            var numEl = parseInt(id.match(/\d+/))
            console.log(numEl)
            $(`.card${numEl}`).remove()
        }
    });
}, 100);





























// setTimeout(() => {
//     document.querySelector('#editBtn').addEventListener('click', function(e) {
//         if (e.target && e.target.id == e.target.id) {
//             let obj = {
//                 name: $("#name").text($("#name")).val(),
//                 image: $("#img").text($("#img")).val(),
//                 price: $("#price").text($("#price")).val(),
//                 count: $("#count").text($("#count")).val(),
//                 saler: $("#saler").text($("#saler")).val(),
//                 telephone: $("#number").text($("#number")).val(),
//             }
//             fetch('http://localhost:8000/goods', {
//                     method: "POST",
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(obj)
//                 })
//                 .then(resp => resp.json())
//                 .then(data => {
//                     console.log(data)
//                     $(".card__holder").append(getDOMItem(data))
//                 })
//                 // console.log(getObj(url))
//         }
//     });
// }, 1000);