const a = async () => {
  const response = await fetch('https://fakestoreapi.com/products/1')
  console.log(await response.json())
  
}
  
