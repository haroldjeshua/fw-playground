<script>
  import { spring } from "svelte/motion";
  import rain from "./assets/light-rain.png";

  let svgSrc;

  function screenToSVG({ x: screenX, y: screenY }) {
    const svg = svgSrc;
    let p = svg.createSVGPoint();
    p.x = screenX;
    p.y = screenY;
    return p.matrixTransform(svg.getScreenCTM()); /* can be .inverse() */
  }

  let coords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.5,
      damping: 0.7,
    }
  );

  console.log("testing mesh gradient");
</script>

<main>
  <div class="logo-wrapper">
    <svg
      width="128"
      height="128"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="2"
        width="32"
        height="32"
        rx="2"
        fill="#B9A8FB"
        fill-opacity="0.9"
      />
      <path
        d="M50.2126 3.56023C50.9507 2.09003 53.0493 2.09003 53.7874 3.56023L67.8659 31.6027C68.5336 32.9326 67.5667 34.5 66.0785 34.5H37.9215C36.4333 34.5 35.4664 32.9326 36.1341 31.6027L50.2126 3.56023Z"
        fill="#7342C6"
        fill-opacity="0.9"
      />
      <path
        d="M0 38.9697C0 38.4341 0.434148 38 0.969697 38H24C28.4183 38 32 41.5817 32 46C32 50.4183 28.4183 54 24 54H0V38.9697Z"
        fill="#6C2D87"
        fill-opacity="0.9"
      />
      <path
        d="M0 54H16L31.5302 67.5889C31.8287 67.8502 32 68.2276 32 68.6243C32 69.3841 31.3841 70 30.6243 70H2C0.895431 70 0 69.1046 0 68V54Z"
        fill="#6C2D87"
        fill-opacity="0.9"
      />
      <path
        d="M53.7874 68.4398C53.0493 69.91 50.9507 69.91 50.2126 68.4398L36.1341 40.3973C35.4664 39.0674 36.4333 37.5 37.9215 37.5L66.0785 37.5C67.5667 37.5 68.5336 39.0674 67.8659 40.3973L53.7874 68.4398Z"
        fill="#6C4DE6"
        fill-opacity="0.9"
      />
    </svg>
  </div>
  <h1>HARV<small>.io</small></h1>
  <h3>Frontend + Design</h3>
  <p>
    A frontend developer with a strong eye for design. Building apps with
    intuitive interfaces on the web.
  </p>
</main>

<img src={rain} alt="noise" />

<svg
  class="bg"
  bind:this={svgSrc}
  on:mousemove={(e) => coords.set(screenToSVG({ x: e.clientX, y: e.clientY }))}
  viewBox="0 0 1728 1117"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_1001_4)">
    <rect width="1728" height="1117" fill="#121212" />
    <g filter="url(#filter0_f_1001_4)">
      <path
        d="M710.341 805.486C832.108 833.149 792.776 919.019 938.789 902.306C1084.8 885.593 1113.9 770.908 1169.39 712.701C1224.89 654.493 1290.62 693.682 1338.03 712.701C1385.45 731.719 1374.13 731.719 1426.94 712.701C1479.74 693.682 1433.94 649.883 1517.45 596.286C1600.97 542.69 1589.11 595.134 1626.83 578.421C1664.54 561.708 1782 360 1782 360V1153H407C407 1153 588.573 777.823 710.341 805.486Z"
        fill="#A983DA"
      />
      <circle cx="364.5" cy="1116.5" r="255.5" fill="#6C76CF" />
    </g>
    <g
      transform="translate({$coords.x} {$coords.y})"
      style="mix-blend-mode:overlay"
      filter="url(#filter1_f_1001_4)"
    >
      <g style="mix-blend-mode:color-dodge">
        <path
          d="M279.432 758.499C310.601 592.779 418.709 565.649 572.978 541.817C727.248 517.986 916.238 1022.48 628.215 1106.07C340.193 1189.66 314.152 1046.31 305.078 1024.31C296.003 1002.31 248.262 924.219 279.432 758.499Z"
          fill="#D9B73F"
        />
      </g>
      <g style="mix-blend-mode:color-dodge">
        <path
          d="M1473.81 178.543C1497.14 -30.6404 1578.06 -64.8866 1693.54 -94.9681C1809.01 -125.05 1950.47 511.753 1734.88 617.27C1519.29 722.788 1499.8 541.835 1493.01 514.068C1486.21 486.3 1450.48 387.725 1473.81 178.543Z"
          fill="#2968C7"
        />
      </g>
      <g style="mix-blend-mode:color-dodge">
        <path
          d="M767.857 580.588C802.926 414.913 1106.8 282.816 1280.36 258.991C1453.93 235.166 1557.3 647.844 1233.25 731.415C909.193 814.986 1028.1 1174.55 767.857 1230.02C507.617 1285.48 732.788 746.264 767.857 580.588Z"
          fill="#377099"
        />
      </g>
      <g style="mix-blend-mode:color-dodge">
        <path
          d="M920.562 592.82C944.126 499.812 988.124 318.733 1104.75 305.358C1221.38 291.983 1689.77 657.311 1472.03 704.227C1254.28 751.143 1494.92 923.605 1320.05 954.745C1145.18 985.884 896.997 685.829 920.562 592.82Z"
          fill="#D36E4E"
        />
        <path
          d="M920.562 592.82C944.126 499.812 988.124 318.733 1104.75 305.358C1221.38 291.983 1689.77 657.311 1472.03 704.227C1254.28 751.143 1494.92 923.605 1320.05 954.745C1145.18 985.884 896.997 685.829 920.562 592.82Z"
          fill="#D36E4E"
        />
      </g>
      <g style="mix-blend-mode:color-dodge">
        <path
          d="M1123.99 496.484C1140.55 391.956 986.159 -132.576 1068.16 -147.608C1150.16 -162.639 1644.91 258.945 1491.81 311.671C1338.71 364.397 1856.9 706.462 1733.95 741.458C1610.99 776.454 1107.42 601.011 1123.99 496.484Z"
          fill="#14C2E9"
        />
        <path
          d="M1123.99 496.484C1140.55 391.956 986.159 -132.576 1068.16 -147.608C1150.16 -162.639 1644.91 258.945 1491.81 311.671C1338.71 364.397 1856.9 706.462 1733.95 741.458C1610.99 776.454 1107.42 601.011 1123.99 496.484Z"
          fill="#14C2E9"
        />
      </g>
    </g>
  </g>
  <defs>
    <filter
      id="filter0_f_1001_4"
      x="-147"
      y="104"
      width="2185"
      height="1524"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur
        stdDeviation="128"
        result="effect1_foregroundBlur_1001_4"
      />
    </filter>
    <filter
      id="filter1_f_1001_4"
      x="13"
      y="-404"
      width="2090"
      height="1894"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur
        stdDeviation="128"
        result="effect1_foregroundBlur_1001_4"
      />
    </filter>
    <clipPath id="clip0_1001_4">
      <rect width="1728" height="1117" fill="white" />
    </clipPath>
  </defs>
</svg>

<style>
  :global(body) {
    overflow: hidden;
  }

  main {
    position: relative;
    display: flex;
    z-index: 2;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    pointer-events: none;
  }

  .logo-wrapper {
    margin-bottom: 2rem;
  }

  h1 {
    font-family: "Krona One", sans-serif;
    font-size: clamp(4vw, 4rem, 10vw);
    margin: 0;
  }

  h1 > small {
    font-size: calc(clamp(4vw, 4rem, 10vw) / 4);
  }

  h3 {
    font-weight: 400;
    margin: 0;
  }

  p {
    max-width: 400px;
    font-weight: 200;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 1;
  }

  svg.bg {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
  }
</style>
