import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '2300d18bc3msh8a44e097dc06f06p174a28jsn71664962d909',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
  return data;
}

