async function loadPost(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    // Verifica si la respuesta es exitosa (código 200-299)
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    // Verifica el tipo de contenido de la respuesta
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
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