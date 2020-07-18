$.ajax({
        url: "product.json?page=1", //url이기 때문에 html 기준이라 ../product.json말고 그냥써야한다. product.json?page=1도 가능
    })
    .done(function (e) {
        console.log(e.productList[0].name);
        let product = e.productList;
        $.each(product, function (index, item) { //each 는  반복문
            let name = item.name;
            let price = item.price;
            let stock = item.stock;
            $(".product ul").append(`
            <li>
                <span class="title">${name}</span>
                <span class="price">${price}</span>
                <span class="stock">${stock}</span>
            </li>`)
        })
    })