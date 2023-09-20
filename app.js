const apiKey = "af7dc225511747ea96374c7072d29fa6";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchNews("India"));
    

async function fetchNews(query){
    const response = await fetch(`${url}${query}&apiKey=${apiKey}`);
    const data = await response.json();
    bindData(data.articles);
}

function bindData(articles){
    const cardContainer = document.getElementById('cards-container');
    const cardNews = document.getElementById('news-card');

    cardContainer.innerHTML='';

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = cardNews.content.cloneNode(true);
        cardContainer.appendChild(cardClone);
        fillDataInCard(cardClone, article);
    });
}

function fillDataInCard(cardClone, article){

    const newsImg = document.getElementById('news-image');
    const newsTitle = document.getElementById('news-title');
    const newsSource = document.getElementById('news-source');
    const newsDesc = document.getElementById('news-desc');
    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name} . ${date}`;

}