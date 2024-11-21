const products = [
    { name: "Сүү", price: 4000, category: "Хүнс", rating: 4.6 },
    { name: "Дэвтэр", price: 2000, category: "Бусад", rating: 4.2 },
    { name: "Чихэр", price: 500, category: "Хүнс", rating: 3.9 },
    { name: "Ус", price: 1500, category: "Хүнс", rating: 5 },
    { name: "Шоколад", price: 6000, category: "Хүнс", rating: 4.2 },
    { name: "Алчуур", price: 2500, category: "Ариун цэвэр", rating: 3.5 },
    { name: "Ногоо", price: 1500, category: "Хүнс", rating: 4.7 },
    { name: "Саван", price: 2000, category: "Ариун цэвэр", rating: 3 },
  ];



    // 1 бүтээгдэхүүн render
    function renderProduct(products) {
      const property = "name"
      const priceProperty = "price"
      const values = products.map(products => products[property])
      const price = products.map(products => products[priceProperty])

      //Бодолт хийгээд үргэлжлүүлээрэй
    }


  renderProduct(products)