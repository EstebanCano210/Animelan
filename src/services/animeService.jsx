export const fetchAnimes = async (page, itemsPerPage, searchTerm = '') => {
    const url = searchTerm
      ? `https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[limit]=${itemsPerPage}&page[offset]=${page * itemsPerPage}`
      : `https://kitsu.io/api/edge/anime?page[limit]=${itemsPerPage}&page[offset]=${page * itemsPerPage}`
    
    const response = await fetch(url)
    const data = await response.json()
    return data;
  };
  