export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pTuPLiHybD0tGEn2AI8HXQU3FE5Ob6xY&q=${category}&limit=10`

    const resp = await fetch(url);

    const {data = []} = await resp.json();

    const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
    }));

    return gifs;
}