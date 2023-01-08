const content = document.querySelector("#content");

const API = "https://api.github.com/users/CaritoNK/repos";

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();

    for (let i=0; i<data.length; i++) {
        if (data[i].fork != 1) {
            let view = `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <!--<img src="" alt="" class="w-full">-->
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${data[i].name}
                </h3>
            </div>
        </div>
        `;
        content.innerHTML += view;
        }
    }
}

fetchData(API);
