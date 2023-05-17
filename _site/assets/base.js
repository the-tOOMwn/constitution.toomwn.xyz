//bozo down. edward, jekyll sucks. I can't spell it right hald the time

latest_news = [
    {
        title: "Mace's Comments",
        date: "2023-05-16",
        desc: "MacE wants to join Ed in jumping off a cliff during the process of trying to run the site locally with Jekyll."
    },
    {
        title: "Ed's comments",
        date: "2023-05-17",
        desc: "among usus"
    }
]

window.onload = () => {
    //loop through latest news and create elements
    for (var i = 0; i < latest_news.length; i++) {
        //create elements
        var news_item = document.createElement("div");
        var news_title = document.createElement("h3");
        var news_date = document.createElement("h4");
        var news_desc = document.createElement("p");
        news_title.innerHTML = latest_news[i].title;
        news_date.innerHTML = latest_news[i].date;
        news_desc.innerHTML = latest_news[i].desc;
        //add classes
        news_item.classList.add("news-item");
        news_title.classList.add("news-title");
        news_date.classList.add("news-date");
        news_desc.classList.add("news-desc");
        //append elements
        news_item.appendChild(news_title);
        news_item.appendChild(news_date);
        news_item.appendChild(news_desc);
        document.getElementById("news").appendChild(news_item);
    }
}

console.log("amongus")