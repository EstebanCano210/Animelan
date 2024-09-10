export const fetchAnimeEpisodes = async (animeId) => {
    const url = `https://kitsu.io/api/edge/anime/${animeId}/episodes`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  