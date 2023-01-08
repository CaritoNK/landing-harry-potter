import { projects } from './data.mjs';

const content = null || document.getElementById('content');

let view = `
    ${projects
      .map(
        (elem) => `
    <a  href="${elem.uri}" class="group relative overscroll-auto hover:overscroll-contain" target="_blank">
    <h3 class="text-xs text-gray-700 bg-gray-200 rounded-md mb-3 text-center">
    <span aria-hidden="true" class="absolute inset-0"></span>
    💡 ${elem.skills}
  </h3>
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none "
    >
      <img src="${elem.img}" alt="${elem.description}" class="w-full h-100" />
    </div>
    <div class="mt-3 flex justify-between">
      <h3 class="text-sm text-gray-900 font-black">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${elem.name}
      </h3>
    </div>
    <div class="mt-4 flex justify-between">
    <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      ${elem.description}
    </h3>
  </div>
  </a>
    `
      )
      .slice(0, 9)
      .join('')}
    
    `;
content.innerHTML = view;