const content = null || document.querySelector("#content");

const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCIC3KsGjKO_0eS1xmDZHb9w&part=snippet%2Cid&order=date&maxResults=6";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '26d7614d42msh65ff50bcbc1274dp173a36jsnd6cd4d4e2788',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

/* fetch(API, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

/*
<div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            title
        </h3>
    </div>
</div>
*/

// función que se llama asi misma
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join("")}
        `;
        content.innerHTML = view;
    } catch (error)  {
        console.log(error);
        //throw new Error("API Not Found");
    }
})();