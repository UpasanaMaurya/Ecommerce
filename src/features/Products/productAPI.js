export async function fetchCount(amount = 1) {
  try {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it at the calling side if needed.
  }
}
