export const buttonList=["All", "live", "Music", "Comedy", "Concerts", "Movies", "Features", "Popular"];

const GOOGLE_API_KEY= "AIzaSyAXEU7qJovMt7pspfCchclN_0xsKMqRIh8";

export const YOUTUBE_VIDEO_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY ;

export const YOUTUBE_SEARCH_API= "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="  ;