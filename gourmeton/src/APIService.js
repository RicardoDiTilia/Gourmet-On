// src/APIService.js
const SPOONACULAR_API_KEY = '1bdf5d2f8a904cd3b69f4c3a90a96633';
const SPOONACULAR_API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const fetchFoodItems = async () => {
  try {
    const response = await fetch(`${SPOONACULAR_API_URL}?apiKey=${SPOONACULAR_API_KEY}&number=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch food items');
    }
    const data = await response.json();
    return data.results.map(item => ({
      id: item.id,
      title: item.title,
      image: item.image,
      description: item.summary || 'Delicioso prato disponível!', // Exemplo, mas pode não estar disponível
    }));
  } catch (error) {
    console.error(error);
    return []; // Retorna uma lista vazia em caso de erro
  }
};
