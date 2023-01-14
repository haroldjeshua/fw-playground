<script>
  import { spring } from "svelte/motion";
  import rain from "./assets/light-rain.png";

  let svgSrc;

  function screenToSVG({ x: screenX, y: screenY }) {
    const svg = svgSrc;
    let p = svg.createSVGPoint();
    p.x = screenX;
    p.y = screenY;
    return p.matrixTransform(
      svg.getScreenCTM().inverse()
    ); /* can be .inverse() */
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
      width="98"
      height="110"
      viewBox="0 0 98 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style="mix-blend-mode:luminosity">
        <path
          d="M0 15.2422C0 11.471 0 9.58533 1.17157 8.41376C2.34315 7.24219 4.22876 7.24219 8 7.24219H34.9347C38.706 7.24219 40.5916 7.24219 41.7632 8.41376C42.9347 9.58533 42.9347 11.471 42.9347 15.2422V42.1769C42.9347 45.9482 42.9347 47.8338 41.7632 49.0053C40.5916 50.1769 38.706 50.1769 34.9347 50.1769H8.00001C4.22877 50.1769 2.34315 50.1769 1.17157 49.0053C0 47.8338 0 45.9482 0 42.1769V15.2422Z"
          fill="url(#paint0_linear_1067_258)"
        />
        <path
          d="M92.0863 38.8163C94.2983 43.873 95.4043 46.4014 94.2201 48.2119C93.0359 50.0225 90.2762 50.0225 84.7568 50.0225L65.1408 50.0225C59.5851 50.0225 56.8072 50.0225 55.6244 48.2005C54.4416 46.3786 55.5722 43.8412 57.8334 38.7665L67.7317 16.5516C70.8972 9.44725 72.48 5.89508 75.0865 5.90395C77.693 5.91282 79.2515 9.47568 82.3686 16.6014L92.0863 38.8163Z"
          fill="url(#paint1_linear_1067_258)"
        />
        <path
          d="M0 62.5871C0 61.1923 1.13074 60.0615 2.52557 60.0615H32.201C38.1291 60.0615 42.9347 64.8672 42.9347 70.7952C42.9347 76.7233 38.1291 81.5289 32.201 81.5289H0V62.5871Z"
          fill="url(#paint2_linear_1067_258)"
        />
        <path
          d="M0 81.5293H21.4674L42.3044 99.7617C42.705 100.112 42.9347 100.619 42.9347 101.151C42.9347 102.17 42.1083 102.997 41.0889 102.997H8.00001C4.22877 102.997 2.34315 102.997 1.17157 101.825C0 100.654 0 98.7679 0 94.9967V81.5293Z"
          fill="url(#paint3_linear_1067_258)"
        />
        <path
          d="M58.1346 71.2362C55.9199 66.1785 54.8126 63.6496 55.9967 61.8385C57.1808 60.0273 59.9415 60.0273 65.4628 60.0273H85.0691C90.6268 60.0273 93.4056 60.0273 94.5884 61.8499C95.7711 63.6724 94.6392 66.2103 92.3753 71.286L82.4819 93.468C79.3165 100.565 77.7338 104.114 75.1284 104.105C72.5229 104.096 70.9644 100.537 67.8474 93.4182L58.1346 71.2362Z"
          fill="url(#paint4_linear_1067_258)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1067_258"
          x1="3.00352e-07"
          y1="50"
          x2="43"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DCDCDC" />
          <stop offset="1" stop-color="#888888" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1067_258"
          x1="53"
          y1="50"
          x2="97"
          y2="-9.52893e-07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DCDCDC" />
          <stop offset="1" stop-color="#888888" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1067_258"
          x1="21"
          y1="82"
          x2="43"
          y2="60.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DCDCDC" />
          <stop offset="1" stop-color="#888888" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1067_258"
          x1="21"
          y1="82"
          x2="43"
          y2="61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DCDCDC" />
          <stop offset="1" stop-color="#B09CDA" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1067_258"
          x1="53"
          y1="110"
          x2="97"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DCDCDC" />
          <stop offset="1" stop-color="#888888" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <h1>Harold Varde</h1>
  <h3>Frontend & Design</h3>
  <p>
    A frontend developer with a strong eye for design. Building apps with
    intuitive interfaces on the web.
  </p>

  <button class="button">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1067_170)">
        <path
          d="M2.66602 8.66699C3.85474 8.80826 4.96138 9.34535 5.80785 10.1918C6.65433 11.0383 7.19141 12.1449 7.33268 13.3337C7.92196 12.9939 8.41488 12.5095 8.76483 11.9263C9.11479 11.343 9.31023 10.6801 9.33268 10.0003C10.4521 9.60653 11.4296 8.88965 12.1416 7.94033C12.8536 6.99101 13.2681 5.85188 13.3327 4.66699C13.3327 4.13656 13.122 3.62785 12.7469 3.25278C12.3718 2.87771 11.8631 2.66699 11.3327 2.66699C10.1478 2.7316 9.00866 3.1461 8.05934 3.85809C7.11002 4.57008 6.39314 5.54759 5.99935 6.66699C5.31952 6.68944 4.65665 6.88488 4.07339 7.23484C3.49013 7.5848 3.00574 8.07771 2.66602 8.66699Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.66634 9.33301C3.97249 9.72472 3.41144 10.3147 3.05511 11.0274C2.69877 11.7401 2.5634 12.5429 2.66634 13.333C3.45644 13.4359 4.25929 13.3006 4.97195 12.9442C5.68462 12.5879 6.27462 12.0269 6.66634 11.333"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.0007 6.66634C10.3688 6.66634 10.6673 6.36786 10.6673 5.99967C10.6673 5.63148 10.3688 5.33301 10.0007 5.33301C9.63246 5.33301 9.33398 5.63148 9.33398 5.99967C9.33398 6.36786 9.63246 6.66634 10.0007 6.66634Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1067_170">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Explore
  </button>
</main>

<img src={rain} alt="noise" />

<!-- <svg
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
</svg> -->

<svg
  class="bg"
  bind:this={svgSrc}
  on:mousemove={(e) => coords.set(screenToSVG({ x: e.clientX, y: e.clientY }))}
  viewBox="0 0 800 489"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_1075_2)">
    <rect width="800" height="489" fill="#121212" />
    <g filter="url(#filter0_f_1075_2)">
      <rect
        x="-66.0605"
        y="492.432"
        width="100"
        height="100"
        transform="rotate(-102.905 -66.0605 492.432)"
        fill="#2C00FF"
      />
      <rect
        x="145.67"
        y="393.863"
        width="100"
        height="100"
        transform="rotate(-102.905 145.67 393.863)"
        fill="#B82F1B"
      />
      <rect
        x="-55.957"
        y="267.409"
        width="100"
        height="100"
        transform="rotate(-102.905 -55.957 267.409)"
        fill="#EA533D"
      />
      <circle
        cx="343.852"
        cy="465.039"
        r="100"
        transform="rotate(-147.905 343.852 465.039)"
        fill="#1D50B5"
      />
      <circle
        cx="133.116"
        cy="469.798"
        r="100"
        transform="rotate(-147.905 133.116 469.798)"
        fill="#2DD685"
      />
      <path
        d="M269.999 582.796C252.465 610.753 205.076 513.159 215.545 495.526C226.013 477.893 115.074 484.452 112.168 444.856C109.261 405.261 23.0706 378.944 -9.3537 440.056C-41.778 501.168 -30.6228 348.81 -83.387 367.066C-136.151 385.321 -122.462 274.096 -77.1887 300.719C-31.9151 327.343 -77.1887 300.719 6.58953 310.178C90.3677 319.636 -29.4369 266.926 8.46505 262.958C46.367 258.989 6.89359 216.527 19.6889 202.714C32.4841 188.902 164.487 201.456 123.246 239.923C82.0042 278.389 124.986 347.25 180.708 335.571C236.43 323.892 246.067 430.86 259.064 389.435C272.061 348.01 330.624 348.736 370.418 422.68C410.212 496.624 305.78 442.932 305.78 442.932C305.78 442.932 335.214 498.574 300.982 494.811C266.75 491.048 287.532 554.839 269.999 582.796Z"
        fill="#B37BEC"
      />
    </g>
    <g
      transform="translate({$coords.x} {$coords.y})"
      style="mix-blend-mode:color-dodge"
      filter="url(#filter1_f_1075_2)"
    >
      <rect
        x="349.471"
        y="378.906"
        width="195.147"
        height="146"
        transform="rotate(180 349.471 378.906)"
        fill="#782D2D"
      />
      <rect
        x="472.953"
        y="284.906"
        width="195.147"
        height="146"
        rx="73"
        transform="rotate(180 472.953 284.906)"
        fill="#2D7866"
      />
      <ellipse
        cx="568.874"
        cy="328.906"
        rx="55.1262"
        ry="50"
        transform="rotate(180 568.874 328.906)"
        fill="#ED7474"
      />
      <ellipse
        cx="114.083"
        cy="415.906"
        rx="99.7783"
        ry="87"
        transform="rotate(180 114.083 415.906)"
        fill="#E09863"
      />
      <ellipse
        cx="330.179"
        cy="369.906"
        rx="238.696"
        ry="50"
        transform="rotate(180 330.179 369.906)"
        fill="#44C0C8"
      />
      <ellipse
        rx="220.19"
        ry="54.341"
        transform="matrix(0.432942 0.901422 -0.930034 0.367473 183.757 357.453)"
        fill="#734BB7"
      />
      <ellipse
        rx="220.19"
        ry="54.341"
        transform="matrix(0.432942 0.901422 -0.930034 0.367473 -30.1312 191.453)"
        fill="#C24EA2"
      />
    </g>
  </g>
  <defs>
    <filter
      id="filter0_f_1075_2"
      x="-245.426"
      y="19.6006"
      width="817.291"
      height="771.59"
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
        stdDeviation="64"
        result="effect1_foregroundBlur_1075_2"
      />
    </filter>
    <filter
      id="filter1_f_1075_2"
      x="-338.051"
      y="-208.048"
      width="1162.05"
      height="965.003"
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
        stdDeviation="100"
        result="effect1_foregroundBlur_1075_2"
      />
    </filter>
    <clipPath id="clip0_1075_2">
      <rect width="800" height="489" fill="white" />
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
    text-transform: uppercase;
    margin: 0 0 1rem 0;
    background: linear-gradient(to right, #dcdcdc, #888888);
    background-size: 1000%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: clamp(2vw, 1.5rem, 5vw);
    font-weight: 400;
    margin: 0;
  }

  p {
    font-size: clamp(0.75rem, 1rem, 1.25rem);
    max-width: 400px;
    font-weight: 300;
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

  .button {
    all: unset;
    display: flex;
    min-width: 128px;
    min-height: 44px;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #dcdcdc;
    color: #121212;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .button:hover {
    filter: brightness(1.2);
  }
</style>
