
var data
$.get('https://raw.githubusercontent.com/Anupamdatta10/database/main/data.json',(e)=>{
    
    data=JSON.parse(e)
    data=data.data

})
.then(()=>{
console.log(data)
for (x in data) {
    var card = `
  <div class="col-lg-3 col-md-4 col-xl-3 col-sm-6 mb-5">
  <div class="shadow-lg bg-white rounded"style="width: 18rem;"  >
  <div class="card" style="width: 18rem;">
<img src="${data[x].imgurl}" class="card-img-top" alt="..." height="200" width="300">
<div class="card-body">
<h5 class="card-title">${data[x].Product_name}</h5>
          <p class="card-text">Price: Rs.${data[x].Product_price}</p>
      <a href="#" class="btn btn-primary" name="${data[x].Product_name}" id="${data[x].Pid}" onclick="buy(this)">Add to Cart</a>
      <button class="btn btn-primary" id="${data[x].Pid}" onclick="Details(this),window.open('./detail.html', '_blank')">Details</button>
  </div>
</div></div></div>`;
    $("#items").append(card);
}




})
 Search=(v) =>{
    var d = "";
    var c = 0;
    for (x in data) {
        if (data[x].Product_name.toLowerCase().includes(v.toLowerCase()) && v != "") {
            d += `<div class="col-lg-3 col-md-4 col-xl-3 col-sm-6 mb-5">
                <div class="shadow-lg bg-white rounded"style="width: 18rem;"  >
  <div class="card" style="width: 18rem;">
<img src="${data[x].imgurl}" class="card-img-top" alt="..." height="200" width="300">
<div class="card-body">
<h5 class="card-title">${data[x].Product_name}</h5>
          <p class="card-text">Price: Rs.${data[x].Product_price}</p>
      <a href="#" class="btn btn-primary"   name="${data[x].Product_name}" id="${data[x].Pid}" onclick="buy(this)">Add to Cart</a>
      <button class="btn btn-primary" id="${data[x].Pid}" onclick="Details(this),window.open('./detail.html', '_blank')">Details</button>
  </div>
</div></div></div>`;

            c++;
        }
    }
    $("#items").html("");
    $("#items").html(`<button
type="button"
class="btn btn-success btn mb-5"
onClick="window.location.reload();"
>
Back Home
</button>`);
    $("#items").append(d);
    if (c == 0) {
        $("#items").html("NO RESULT FOUND");
    }}
    
    Search_details=(v) =>{
    var d = "";
    var c = 0;
    for (x in data) {
        if (data[x].Product_name.toLowerCase().includes(v.toLowerCase()) && v != "") {
            d += `<div class="col-lg-3 col-md-4 col-xl-3 col-sm-6 mb-5">
                <div class="shadow-lg bg-white rounded"style="width: 18rem;"  >
  <div class="card" style="width: 18rem;">
<img src="${data[x].imgurl}" class="card-img-top" alt="..." height="200" width="300">
<div class="card-body">
<h5 class="card-title">${data[x].Product_name}</h5>
          <p class="card-text">Price: Rs.${data[x].Product_price}</p>
      <a href="#" class="btn btn-primary"   name="${data[x].Product_name}" id="${data[x].Pid}" onclick="buy(this)">Add to Cart</a>
      <button class="btn btn-primary" id="${data[x].Pid}" onclick="Details(this),window.open('./detail.html', '_blank')">Details</button>
  </div>
</div></div></div>`;

            c++;
        }
    }
    $("#ser_res").html("");
    $("#ser_res").html(`<button
type="button"
class="btn btn-success btn mb-5"
onClick="window.location.reload();"
>
Back Home
</button>`);
    $("#ser_res").append(d);
    if (c == 0) {
        $("#ser_res").html("NO RESULT FOUND");
    }}
    var i = 0;

var chk = [];

function buy(qt) {
    console.log(qt.id);
    var chkid = 0;
    for (x in chk) {
        console.log("FOR");
        if (chk[x].Pid == qt.id) {
            console.log("IF");
            chk[x].quantity += 1;
            chkid = 0;
            break;
        } else {
            console.log("ELSE");
            chkid++;
        }
    }
    if (chkid > 0) {
        console.log("IF1");
        chk.push(data[qt.id]);
        chk[i].quantity += 1;
        i++;
    }
    if (chk.length == 0) {
        console.log("IF2");
        chk.push(data[qt.id]);
        chk[i].quantity += 1;
        i++;
    }
    console.log(chk);
    console.log(chk.length);
    //sessionStorage.setItem("chk", JSON.stringify(chk));
}
function cart() {
    sessionStorage.setItem("chk", JSON.stringify(chk));
}
function Details(dtl){
    sessionStorage.setItem("detil", JSON.stringify(data[dtl.id]));
}