
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )  }&limit=10&api_key=HWuksBv6XOaBEiFEK2dOcYz7OTF63J3K`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(gifs);
    //setImages(gifs);
    //console.log(images);
    return gifs;

}