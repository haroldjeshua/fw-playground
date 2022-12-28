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
  <g clip-path="url(#clip0_1001_25)">
    <rect width="1728" height="1117" fill="#121212" />
    <g filter="url(#filter0_f_1001_25)">
      <path
        d="M710.341 805.486C832.108 833.149 792.776 919.019 938.789 902.306C1084.8 885.593 1113.9 770.908 1169.39 712.701C1224.89 654.493 1290.62 693.682 1338.03 712.701C1385.45 731.719 1374.13 731.719 1426.94 712.701C1479.74 693.682 1433.94 649.883 1517.45 596.286C1600.97 542.69 1589.11 595.134 1626.83 578.421C1664.54 561.708 1782 360 1782 360V1153H407C407 1153 588.573 777.823 710.341 805.486Z"
        fill="#A983DA"
      />
      <circle cx="364.5" cy="1116.5" r="255.5" fill="#6C76CF" />
    </g>
    <g
      transform="translate({$coords.x} {$coords.y})"
      style="mix-blend-mode:overlay"
      filter="url(#filter1_f_1001_25)"
    >
      <path
        d="M10.5165 703.247C41.939 563.731 150.923 540.89 306.445 520.827C461.966 500.764 652.489 925.484 362.13 995.859C71.7709 1066.24 45.5187 945.548 36.3704 927.028C27.2221 908.508 -20.906 842.763 10.5165 703.247Z"
        fill="#7A4DC8"
      />
      <path
        d="M463.732 656.802C488.117 544.905 699.411 455.689 820.101 439.597C940.79 423.506 1012.67 702.226 787.337 758.669C562.009 815.112 644.689 1057.96 463.732 1095.42C282.775 1132.88 439.347 768.698 463.732 656.802Z"
        fill="#6FED33"
      />
      <path
        d="M531.862 457.746C567.215 318.267 873.551 207.058 1048.53 187.001C1223.5 166.943 1327.71 514.367 1001.03 584.724C674.345 655.081 794.214 957.787 531.862 1004.48C269.51 1051.18 496.509 597.225 531.862 457.746Z"
        fill="#31C9EB"
      />
      <path
        d="M520.955 778.576C565.534 692.146 648.769 523.873 869.409 511.444C1090.05 499.015 1976.15 838.506 1564.22 882.103C1152.28 925.701 1607.53 1085.97 1276.71 1114.9C945.893 1143.84 476.375 865.006 520.955 778.576Z"
        fill="#4A23E7"
      />
      <path
        d="M520.955 778.576C565.534 692.146 648.769 523.873 869.409 511.444C1090.05 499.015 1976.15 838.506 1564.22 882.103C1152.28 925.701 1607.53 1085.97 1276.71 1114.9C945.893 1143.84 476.375 865.006 520.955 778.576Z"
        fill="#4A23E7"
      />
      <path
        d="M945.502 615.727C966.113 515.864 774.045 14.7356 876.056 0.374825C978.068 -13.986 1593.54 388.787 1403.08 439.16C1212.62 489.534 1857.25 816.336 1704.3 849.771C1551.34 883.205 924.891 715.59 945.502 615.727Z"
        fill="#8C6AC6"
      />
      <path
        d="M945.502 615.727C966.113 515.864 774.045 14.7356 876.056 0.374825C978.068 -13.986 1593.54 388.787 1403.08 439.16C1212.62 489.534 1857.25 816.336 1704.3 849.771C1551.34 883.205 924.891 715.59 945.502 615.727Z"
        fill="#8C6AC6"
      />
      <path
        d="M1351.87 233.388C1375.39 57.2816 1456.97 28.4505 1573.38 3.12554C1689.79 -22.1995 1832.41 513.911 1615.06 602.744C1397.72 691.576 1378.07 539.237 1371.22 515.86C1364.38 492.483 1328.35 409.495 1351.87 233.388Z"
        fill="#8D66CF"
      />
    </g>
  </g>
  <defs>
    <filter
      id="filter0_f_1001_25"
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
        result="effect1_foregroundBlur_1001_25"
      />
    </filter>
    <filter
      id="filter1_f_1001_25"
      x="-256"
      y="-256"
      width="2240.09"
      height="1629"
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
        result="effect1_foregroundBlur_1001_25"
      />
    </filter>
    <clipPath id="clip0_1001_25">
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
