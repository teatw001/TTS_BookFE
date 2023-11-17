import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-demo-tabs-basic',
  template: `
    <nz-tabset>
      <nz-tab nzTitle="Chi tiết sản phẩm">
        <div
          class="divide-y  space-y-4 border border-gray-300 px-4 py-2 rounded-lg "
        >
          <div class="grid grid-cols-2 ">
            <h3 class="font-semibold text-base">Tên sách</h3>
            <h3>{{ data.name }}</h3>
          </div>
          <div class="grid grid-cols-2 ">
            <h3 class="font-semibold text-base">Tác giả</h3>
            <h3>{{ data.authors }}</h3>
          </div>
          <div class="grid grid-cols-2 ">
            <h3 class="font-semibold text-base">Số lượng đã bán</h3>
            <h3>{{ data.quantity_sold }}</h3>
          </div>
          <div class="grid grid-cols-2 ">
            <h3 class="font-semibold text-base">Loại sách :</h3>
            <h3>{{ data.brand.name }}</h3>
          </div>
        </div>
      </nz-tab>
      <nz-tab nzTitle="Đánh giá">
        <div class="flex items-center mb-2">
          <svg
            class="w-4 h-4 text-[#4f46e5] me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-[#4f46e5] me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-[#4f46e5] me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-[#4f46e5] me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95
          </p>
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
        </div>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
          1,745 global ratings
        </p>
        <div class="flex items-center mt-4">
          <a
            href="#"
            class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >5 star</a
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-indigo-200">
            <div class="h-5 bg-[#4f46e5] rounded" style="width: 70%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >70%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <a
            href="#"
            class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >4 star</a
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-indigo-200">
            <div class="h-5 bg-[#4f46e5] rounded" style="width: 17%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >17%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <a
            href="#"
            class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >3 star</a
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-indigo-200">
            <div class="h-5 bg-[#4f46e5] rounded" style="width: 8%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >8%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <a
            href="#"
            class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >2 star</a
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-indigo-200">
            <div class="h-5 bg-[#4f46e5] rounded" style="width: 4%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >4%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <a
            href="#"
            class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >1 star</a
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-indigo-200">
            <div class="h-5 bg-[#4f46e5] rounded" style="width: 1%"></div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >1%</span
          >
        </div>
      </nz-tab>
    </nz-tabset>
  `,
})
export class NzDemoTabsBasicComponent {
  @Input() data: any;
}
