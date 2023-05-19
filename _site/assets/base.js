//bozo down. edward, jekyll sucks. I can't spell it right hald the time

laws_amendments = [
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
    for (var i = 0; i < laws_amendments.length; i++) {
        //create elements
        var laws_item = document.createElement("div");

        var laws_title = document.createElement("a", 'href', laws_amendments[i].link);
        laws_title.setAttribute('href', laws_amendments[i].link)
        laws_title.innerHTML = laws_amendments[i].title
   
        laws_title.setAttribute("style", "color: #c2c0bc !important;text-decoration: none;font-family: 'Merriweather', serif !important;font-weight: 500;");
        laws_title.style.fontSize = "170%";

        var laws_date = document.createElement("h4");
        laws_date.innerHTML = laws_amendments[i].date;
        
        //add classes
        laws_item.classList.add("news-item");
        laws_date.classList.add("news-date");
        
        //append elements
        laws_item.appendChild(laws_title);
        laws_item.appendChild(laws_date);
        document.getElementById("news").appendChild(laws_item);
    }
}
