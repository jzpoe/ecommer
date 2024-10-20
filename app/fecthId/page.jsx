async function loadPost(id) {
  try {
    const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);

    // Verifica si la reponsepuesta es exitosa (código 200-299)
    if (!reponse.ok) {
      throw new Error(`Error ${reponse.status}: ${reponse.statusText}`);
    }

    // Verifica el tipo de contenido de la reponsepuesta
    const contentType = reponse.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await reponse.json();
      return data; // Devuelve los datos parseados
    } else {
      throw new Error("Expected JSON but received another content type");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Maneja adecuadamente el error, devolviendo null o algún valor por defecto
  }
}

export default loadPost;