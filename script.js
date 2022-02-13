console.log('Welcome to News Project');

//select content Div
let content = document.getElementById('content');

//bf64ac13834b4bf8b758296555645c25

function getNews()
{
    //call ajax get request
    url="https://newsapi.org/v2/top-headlines?country=in&apiKey=bf64ac13834b4bf8b758296555645c25"
    fetch(url).then(response=>response.json())
    .then(data=>{
        let json = data;
        console.log(json);
        let articles=json.articles;
        console.log(articles);
        let str="";
        articles.forEach((element,index)=>{
            console.log(element);
            str+=`            
            <div class="card">
              <div class="card-header" id="heading${index+1}">
                <h5 class="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index+1}" aria-expanded="true" aria-controls="collapse${index+1}">
                    braking news ${index+1}:${element.title}
                  </button>
                </h5>
              </div>
          
              <div id="collapse${index+1}" class="collapse" aria-labelledby="heading${index+1}" data-parent="#content">
                <div class="card-body">
                ${element.content}.<a href="${element.url}" target="_blank">Reads More</a>
                </div>
              </div>
            </div>
            `;

        })
        content.innerHTML=str;
    });
}
getNews();