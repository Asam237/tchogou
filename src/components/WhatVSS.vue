<template>
  <div class="site__whats-vss py-4 md:py-10 px-2 md:px-0">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <img
          src="../assets/imgs/wvss.jpg"
          alt=""
          class="site__whats-vss-img hidden md:flex md:w-1/2"
        />
        <div
          class="
            site__whats-vss-block
            flex flex-col
            items-center
            md:items-start
            md:w-1/2
            ml-0
            md:ml-8
          "
        >
          <h1
            class="
              font-extrabold
              text-xl
              md:text-4xl
              text-gray-800 text-center
              md:text-left
            "
            style="font-family: 'Yaldevi', sans-serif"
          >
            C'est quoi Vetchi Smart Stock?
          </h1>
          <p
            class="
              text-xs text-gray-700 text-center
              md:text-left
              mt-4
              leading-6
            "
            style="font-family: 'Yaldevi', sans-serif"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta
            assumenda ad perspiciatis quidem nemo eaque libero sint dolorum
            mollitia rerum quisquam et doloremque iusto ab minima quos
            repellendus perferendis laboriosam debitis quae at, illum quam
            voluptatibus? Sunt reiciendis consequatur dolor? Ut sit quasi unde
            neque minus nesciunt in, reiciendis molestiae voluptatem recusandae
            alias dolor obcaecati similique accusamus vel aspernatur quo
            adipisci, autem voluptate, illo vero distinctio sed. Incidunt
            asperiores assumenda at facilis deserunt autem est sequi consequatur
            dignissimos rem.
          </p>
          <div class="site__whats-blogs flex mt-4 flex-col md:flex-row">
            <div
              class="
                blogOne
                text-center
                md:text-left
                mt-4
                md:mt-0
                w-full
                md:w-1/2
              "
            >
              <h1
                style="font-family: 'Yaldevi', sans-serif"
                class="font-extrabold py-2"
              >
                <span class="text-red-700">1. </span>Pas besoin de connaissance
                technique
              </h1>
              <p class="text-xs" style="font-family: 'Yaldevi', sans-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officia omnis sapiente expedita nam ad nesciunt rem nulla quidem
                illo!
              </p>
            </div>
            <div
              class="
                blogTwo
                text-center
                md:text-left
                md:ml-2
                mt-4
                md:mt-0
                w-full
                md:w-1/2
              "
            >
              <h1
                style="font-family: 'Yaldevi', sans-serif"
                class="font-extrabold py-2"
              >
                <span class="text-red-700">2. </span>Pas besoin de connaissance
                Pas besoin d’etre un Expert du Marketing
              </h1>
              <p class="text-xs" style="font-family: 'Yaldevi', sans-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officia omnis sapiente expedita nam ad nesciunt rem nulla quidem
                illo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatVSS",
};
</script>