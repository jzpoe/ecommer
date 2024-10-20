async function loadPost(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    // Verifica si la respuesta fue exitosa
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    // Verifica si la respuesta contiene datos antes de intentar convertirla a JSON
    const text = await res.text();
    if (!text) {
      throw new Error("Respuesta vacía de la API");
    }

    // Intenta convertir el texto a JSON
    const data = JSON.parse(text);
    
    return data;

  } catch (error) {
    console.error("Error cargando el post:", error);
    throw error; // O maneja el error de otra manera
  }
}

export default loadPost;