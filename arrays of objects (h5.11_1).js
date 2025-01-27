const productsData = [
    {
      id: 1,
      productName: "Laptop",
      price2021: 19999,
      price2022: 18999,
      price2023: 15090,
      brand: "Dell",
      productRating: 5
    },
    {
      id: 2,
      productName: "Smartphone",
      price2021: 18999,
      price2022: 17999,
      price2023: 16999,
      brand: "Samsung",
      productRating: 4
    },
    {
      id: 3,
      productName: "Smartwatch",
      price2021: 36999,
      price2022: 32999,
      price2023: 29999,
      brand: "Apple",
      productRating: 4
    }
  ];
  function printDetailsById(id){
    let product = getProductDetailsById(id)
    console.log("===== Deatils card for " + product.productName + " =====" + "\n" + "ID: " + product.id + "\n" + "-----" + "\n" + "Details: " + "\n" + "-----" + "\n" + "Product Name: " + product.productName + "\n" + "Price in 2021: " + product.price2021 + "\n" + "Price in 2022: " + product.price2022 + "\n" + "Price in 2023: " + product.price2023 + "\nBrand: " + product.brand + "\n" + "Rating: " + product.productRating + "\n----- ----- -----\n "  )  
  }
  function getProductDetailsById(id){
    for(let i = 0; i < productsData.length; i++){
      if(productsData[i].id === id){
        return productsData[i]
      }
    }
  }
  printDetailsById(1)
  printDetailsById(2)
  printDetailsById(3)
  
  
  console.log("---- ---- ----")
  console.log("1.2")
  function getDetailsById(priceOf2021, minimumPrice){
    let result = []
    for(let i = 0; i < productsData.length; i++){
      if(productsData[i][priceOf2021] >= minimumPrice){
        result.push(productsData[i])
      }
    }
    return result
  }
  console.log("\nProduct with price in 2021 >= 25000")
  console.log(getDetailsById("price2021", 25000))
  console.log("\nProduct with price in 2023 >= 16000")
  console.log(getDetailsById("price2023", 16000))
  
  console.log("---- ---- ----")
  console.log("1.3")
  for(let i = 0; i < productsData.length; i++){
    let numOfProducts = 3
  let totalIdPrice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023
  productsData[i].total = totalIdPrice
  
    productsData[i].avgPrice = productsData[i].total / numOfProducts
  
  
    
  }
  function getAveragePriceAboveCutOff(avgCutOff){
    for(let i = 0; i < productsData.length; i++){
      if(productsData[i].avgPrice > avgCutOff){
        console.log("Average Price of 3 Years: " + productsData[i].productName + " is " + productsData[i].avgPrice)
      }
    }
  }
  getAveragePriceAboveCutOff(12000)
  
  function getHighestAveragePrice(data){
    let highestPrice = data[0].avgPrice
    for(let i = 1; i < data.length; i++){
      if(data[i].avgPrice > highestPrice){
        highestPrice = data[i].avgPrice 
      }
    }
    return highestPrice
  }
  console.log(productsData)