1. Dynamic renderartion of movies as cards , this should be the card in use 
    <div class="card" data-id="${}">
                <div class="img">
                    <img src="${}">
                </div>
                <div class="info">
                    <h2>${}</h2>
                    <div class="single-info">
                        <span>Rate: </span>
                        <span>${} / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Release Date: </span>
                        <span>${}</span>
                    </div>
                </div>
            </div>

2. Dynamic renderation of popup container after clicking on a movie , the popup should occur in the same page. 
    <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="${}" alt="">
                    </div>
                    <div class="single-info">
                        <span>Add to favorites:</span>
                        <span class="heart-icon">&#9829;</span>
                    </div>
                </div>
                <div class="right">
                    <h1>${}</h1>
                    <h3>${}</h3>
                    <div class="single-info-container">
                        <div class="single-info">
                            <span>Language:</span>
                            <span>${}</span>
                        </div>
                        <div class="single-info">
                            <span>Length:</span>
                            <span>${} minutes</span>
                        </div>
                        <div class="single-info">
                            <span>Rate:</span>
                            <span>${} / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Budget:</span>
                            <span>$ ${}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date:</span>
                            <span>${}</span>
                        </div>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            ${}
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Overview</h2>
                        <p>${}</p>
                    </div>
                    <div class="trailer">
                        <h2>Trailer</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>