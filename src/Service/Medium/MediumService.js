import parse from "rss-to-json";

async function getUserPosts() {
    let rssData = await fetch('https://medium.com/feed/@bugra.ahmetozcan').text;
    var rss = await parse(rssData);
    console.log(JSON.stringify(rss, null, 3));
}


export {
    getUserPosts
}
