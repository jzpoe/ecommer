async function loadPost(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    
    return data;
  }


  export default loadPost