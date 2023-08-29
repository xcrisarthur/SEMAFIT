{/* <!-- drawer component --> */}
<div
id="drawer-right-example"
className="fixed top-16 right-0 z-50 h-screen w-screen p-4 overflow-y-auto transition duration-700 ease-in-out translate-x-full bg-white dark:bg-gray-800"
tabIndex="-1"
aria-labelledby="drawer-right-label"
>
<p
  id="drawer-right-label"
  className="inline-flex items-center mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-900"
>
  <svg
    className="mx-5"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
  </svg>
  [Judul Article]
</p>

<button
  type="button"
  data-drawer-hide="drawer-right-example"
  aria-controls="drawer-right-example"
  className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
>
  <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
  <span className="sr-only">Close menu</span>
</button>

<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-3">
  <div className="rounded-lg ms-auto">
    <p className="text-3xl">[Nama Divisi]</p>
    <p className="text-2xl">Panitia</p>
    <ul className="list-disc">
      <li>John</li>
      <li>Doe</li>
    </ul>
  </div>
  <div className="h-32 rounded-lg bg-gray-100 lg:col-span-2">
    <img
      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      className="object-cover w-full h-full"
    />
    <div>
      <p class="indent-10 text-justify mt-7">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestiae vero rerum
        repellat animi impedit perferendis numquam
        eligendi corrupti perspiciatis expedita
        veritatis natus, voluptatum ipsum dolor in
        quidem laboriosam odio saepe deleniti sunt!
        Magnam reiciendis alias omnis corporis,
        explicabo nam dolor assumenda sit quisquam
        sapiente molestiae, tempore eveniet accusamus
        placeat quasi! A praesentium dolore
        repudiandae necessitatibus aspernatur
        doloribus, reiciendis quo ab pariatur
        consectetur porro tenetur ratione id nulla
        corrupti unde, similique quas temporibus ipsum
        sapiente! Blanditiis, quam. Maiores tempore
        temporibus eum! Veniam voluptatem quaerat,
        libero, similique quisquam est tempore animi
        in molestias sit voluptates perferendis
        ratione nesciunt soluta labore molestiae nisi?
      </p>
    </div>
  </div>
  <div className="h-32 rounded-lg bg-gray-100">
    <div>
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Cristianto Tri Arthurito
            </h3>
            <p className="mt-1 text-xs font-medium text-gray-600">
              Content Writer
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            Deskripsi Diri - Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Asperiores aperiam earum neque ad aliquid
            deleniti. Eligendi similique ullam natus
            tenetur?
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">
              Published
            </dt>
            <dd className="text-xs text-gray-500">
              31st Oct, 2023
            </dd>
          </div>
        </dl>
      </a>
    </div>
  </div>
</div>
</div>