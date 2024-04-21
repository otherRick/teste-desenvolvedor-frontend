import axios from 'axios';

const baseURL = 'http://localhost:3000/data';

export const getAllData = async (name?: string, company?: string, page?: number) => {
  try {
    let params: any = {};

    if (name) {
      params.name = name;
    }

    if (company) {
      params.company = company;
    }

    params._sort = 'published_at';

    params._page = page;

    const response = await axios.get(baseURL, { params });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};
