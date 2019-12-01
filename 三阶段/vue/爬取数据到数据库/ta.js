var a = document.querySelectorAll('.product-list .proitem');
var arr = [];
for (b of a) {
    var obj = {};
    if (b.querySelector('.pic img')) {
        obj.imgurl = b.querySelector('.pic img').src
    } else {
        obj.imgurl = ''
    };
    if (b.querySelector('.saletip span')) {
        obj.saletip = b.querySelector('.saletip span').innerText
    } else {
        obj.saletip = ''
    };
    if (b.querySelector('.info a')) {
        obj.title = b.querySelector('.info a').innerText
    } else {
        obj.title = ''
    };
    if (b.querySelector('.price strong')) {
        obj.price = b.querySelector('.price strong').innerText
    } else {
        obj.price = ''
    };
    arr.push(obj)
}
console.log(JSON.stringify(arr))