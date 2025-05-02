const baseUrl = "https://api.escuelajs.co/api/v1/";

export async function fetchProducts() {
  try {
    const res = await fetch(`${baseUrl}products`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${baseUrl}categories`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createCategory(name: string) {
  try {
    const res = await fetch(`${baseUrl}categories/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image: "https://placeimg.com/640/480/any",
      }),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
