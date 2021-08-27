var transactions = [
 {
   title: "Desenvolvimento",
   currency: "BRL",
   price: 5000,
   type: "entrada",
   category: "venda",
   date: "23/07/2021"
 },
 {
    title: "Ifood",
    currency: "BRL",
    price: 20.5,
    type: "saida",
    category: "alimentação",
    date: "05/08/2021"
 },
 {
    title: "Uber",
    currency: "BRL",
    price: 15,
    type: "saida",
    category: "Transporte",
    date: "12/07/2021"

 }
]

//  <tr>
//     <td>Desenvolvimento</td>
//     <td> R$ 5.000.00</td>
//     <td class="green"><i data-feather="dollar-sign"></i>Venda</td>
//     <td>13/08/2021</td>
// </tr>
// <tr>
//     <td>Ifood</td>
//     <td> R$ 20.00</td>
//     <td class="red"><i data-feather="coffee"></i>Alimentação</td>
//     <td>10/08/2021</td>
// </tr>
// <tr>
//     <td>Uber</td>
//     <td> R$ 19.00</td>
//     <td class="red"><i data-feather="map-pin"></i>Transporte</td>
//     <td>05/08/2021</td>
// </tr>

var table = document.querySelector("#tabela tbody");

transactions .map(transaction =>{
   var row = document .createElement("tr");

   var title = td = document .createElement("td");
   title.append(transaction.title);

   var price = document.createElement("td");
   var value = moneyformat(transaction.currency, transaction.price);
   price.append(value);
   
   var category = document.createElement("td");
   category.append(transaction.category);

   var date = document.createElement("td");
   date.append(transaction.date);

   row.appendChild(title);
   row.appendChild(price);
   row.appendChild(category);
   row.appendChild(date);

   table.appendChild(row);
})

var addBtn = document.querySelector ("#addbutton a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");

addBtn.addEventListener("click",()=>{
    popup.style.display ="flex";
    popup.style.transition ="display 5s";

})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})

function moneyformat(currency, price){
    var value = new Intl.NumberFormat("pt-BR",{ 
    style: "currency",
    currency: currency
    }).format(price);
    return value;
}