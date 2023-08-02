import React from "react"; // Import custom CSS file

const GradientHexagon = () => {
  return (
    <div class="flex flex-col items-center">
      <div class="bg-[url('https://www.peerbits.com/static/hexagon1-bg-58475b0338c81091f4fdfdcf50554672.svg')] text-white flex h-[240px] justify-center mx-[auto] my-[0] text-center w-[216px] flex-col items-center mb-[1.5rem] ss:mb-0">
        <i class="icon-check-sprite mr-2">
        </i>
        <p class="text-[.875rem] mb-0">
          Digitize legacy system
        </p>
      </div>
      <div class="-mt-[30px] ss:flex">
        <div class="bg-[url('https://www.peerbits.com/static/hexagon1-bg-58475b0338c81091f4fdfdcf50554672.svg')] text-white flex h-[240px] justify-center mx-[auto] my-[0] text-center w-[216px] flex-col items-center mr-0 mb-[1.5rem] ss:mr-[1.5rem] ss:mb-0">
          <i class="icon-check-sprite mr-2">
          </i>
          <p class="text-[.875rem] mb-0">
            Streamline operations
          </p>
        </div>
        <div class="bg-[url('https://www.peerbits.com/static/hexagon1-bg-58475b0338c81091f4fdfdcf50554672.svg')] text-white flex h-[240px] justify-center mx-[auto] my-[0] text-center w-[216px] flex-col items-center">
          <i class="icon-check-sprite mr-2">
          </i>
          <p class="text-[.875rem] mb-0">Reduce costs and increase efficiency</p>
        </div>
      </div>
    </div>
  );
};

export default GradientHexagon;
