//bozo down. edward, jekyll sucks. I can't spell it right hald the time

latest_news = [
    {
        title: "cool",
        link: "law-amendments/cool.html",
        date: "2023-05-16",
    },
    {
        title: "among",
        link: "law-amendments/among.html",
        date: "2023-05-16",
    },
]

window.onload = () => {
    //loop through latest news and create elements
    for (var i = 0; i < latest_news.length; i++) {
        //create elements
        var news_item = document.createElement("div");

        var news_title = document.createElement("a");
        news_title.setAttribute('href', latest_news[i].link)
        news_title.innerText = latest_news[i].title
        

        var news_date = document.createElement("h4");
        news_date.innerHTML = latest_news[i].date;
        
        //add classes
        news_item.classList.add("news-item");
        news_title.classList.add("news-title");
        news_date.classList.add("news-date");
        //append elements
        news_item.appendChild(news_title);
        news_item.appendChild(news_date);
        document.getElementById("news").appendChild(news_item);
    }
}

console.log("amongus")