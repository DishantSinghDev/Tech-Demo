import React from "react";
import ContactUs from "./ContactUs";


const GetAFreeQuote = ({className}) => {
  return (
    <div className={`${className} font-poppins w-[100%] flex flex-col md:flex-row md:w-[100%]`}>
      <div className="rounded-t-lg md:rounded-r-none md:rounded-l-lg w-[100%] md:w-[50%] bg-white text-[#51555c]">
        <div className=" ">
          <div className=" flex flex-col pt-5 xs:pt-8 sm:pt-12 pl-5 xs:pl-8 sm:pl-12 ">
            <h1 className="text-[1.875rem] text-black font-medium ">
              Got a project in mind?
            </h1>
            <p className=" py-6">
              We guarantee to get back to you within a business day.
            </p>
          </div>
            <ContactUs/>
          
        </div>
      </div>

      <div className=" rounded-b-lg md:rounded-l-none md:rounded-r-lg bg-[#1d1d1d] text-white w-[100%] md:w-[50%] p-[35px]  ">
        <div className=" w-[100%]  flex-col    ">
          <div className="flex flex-col   md:flex-row justify-between ">
            <div className="flex flex-col pb-4 w-[50%]">
              <h1 className=" py-2 opacity-70 text-lg font-semibold tracking-wide " >Project Enquiries </h1>
              <a href="" className="hover:text-green-400">enquiry.dishis</a>
              <a href="mailto:info@dishis.in" className="hover:text-green-400">info@dishis.in</a>
            </div>

            <div className="flex flex-col w-[50%] ">
              <h1 className=" py-2 opacity-70 text-lg font-semibold tracking-wide " >Career </h1>
              <a href="tel:+917948000686" className="hover:text-green-400">+91 79 48000686</a>
              <a href="mailto:career@dishis.in" className="hover:text-green-400 pb-2" >career@dishis.in</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row py-8">
            <div className="flex flex-col w-[50%] ">
              <h1 className="py-2 opacity-70 text-lg font-semibold tracking-wide " > New Business</h1>
              <a href="mailto:dishis@gmail.com" className="hover:text-green-400" >dishis@gmail.com</a>
            </div>
            <div className="flex flex-col w-[50%] ">
              <h1 className="py-2 opacity-70  text-lg font-semibold tracking-wide" >General Enquiries</h1>
              <a href="mailto:info@dishis.in" className="hover:text-green-400" > info@dishis.in</a>
            </div>
          </div>
          <h1 className="py-5 opacity-70 text-lg" > Our Offices </h1>

          <div className="flex flex-col  md:flex-row w-[100%] ">
            <div className="flex flex-col py-6 sm:w-[50%] sm:pr-5">
              <div className=" " >
                <div className="flex  ">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29uLWNzcy1pbiIgdmlld0JveD0iMCAwIDY0MCA0ODAiPgogIDxwYXRoIGZpbGw9IiNmOTMiIGQ9Ik0wIDBoNjQwdjE2MEgweiIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDE2MGg2NDB2MTYwSDB6Ii8+CiAgPHBhdGggZmlsbD0iIzEyODgwNyIgZD0iTTAgMzIwaDY0MHYxNjBIMHoiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgzLjIgMCAwIDMuMiAzMjAgMjQwKSI+CiAgICA8Y2lyY2xlIHI9IjIwIiBmaWxsPSIjMDA4Ii8+CiAgICA8Y2lyY2xlIHI9IjE3LjUiIGZpbGw9IiNmZmYiLz4KICAgIDxjaXJjbGUgcj0iMy41IiBmaWxsPSIjMDA4Ii8+CiAgICA8ZyBpZD0iZCI+CiAgICAgIDxnIGlkPSJjIj4KICAgICAgICA8ZyBpZD0iYiI+CiAgICAgICAgICA8ZyBpZD0iYSIgZmlsbD0iIzAwOCI+CiAgICAgICAgICAgIDxjaXJjbGUgcj0iLjkiIHRyYW5zZm9ybT0icm90YXRlKDcuNSAtOC44IDEzMy41KSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAxNy41TC42IDcgMCAybC0uNiA1TDAgMTcuNXoiLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDx1c2Ugd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvZz4KICAgICAgICA8dXNlIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHRyYW5zZm9ybT0icm90YXRlKDMwKSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgPC9nPgogICAgICA8dXNlIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIgeGxpbms6aHJlZj0iI2MiLz4KICAgIDwvZz4KICAgIDx1c2Ugd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIgeGxpbms6aHJlZj0iI2QiLz4KICAgIDx1c2Ugd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCkiIHhsaW5rOmhyZWY9IiNkIi8+CiAgPC9nPgo8L3N2Zz4K"
                    className="w-6 rounded-xl  "
                  />
                  <h2 className="ml-2  text-xl font-semibold">India</h2>
                </div>

                <p className="text-base py-2 opacity-75">
                  2nd Floor, Meem Procon Pvt Ltd,
                  <br />
                  Nr. Indraprastha business Park,
                  <br />
                  beside DAV School, Makarba,
                  <br />
                  Ahmedabad-380051
                  <br />
                  Office:<a href="tel:+917948000686" className="hover:text-green-400">+91 79 48000686</a>
                </p>
              </div>
            </div>
            <div className="flex flex-col py-6 sm:w-[50%]">
              <div>
                <div className="flex  ">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb24tY3NzLXVzIiB2aWV3Qm94PSIwIDAgNjQwIDQ4MCI+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIHN0cm9rZS13aWR0aD0iMXB0Ij4KICAgICAgPHBhdGggZmlsbD0iI2JkM2Q0NCIgZD0iTTAgMGg5NzIuOHYzOS40SDB6bTAgNzguOGg5NzIuOHYzOS40SDB6bTAgNzguN2g5NzIuOFYxOTdIMHptMCA3OC44aDk3Mi44djM5LjRIMHptMCA3OC44aDk3Mi44djM5LjRIMHptMCA3OC43aDk3Mi44djM5LjRIMHptMCA3OC44aDk3Mi44VjUxMkgweiIgdHJhbnNmb3JtPSJzY2FsZSguOTM3NSkiLz4KICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMzkuNGg5NzIuOHYzOS40SDB6bTAgNzguOGg5NzIuOHYzOS4zSDB6bTAgNzguN2g5NzIuOHYzOS40SDB6bTAgNzguOGg5NzIuOHYzOS40SDB6bTAgNzguOGg5NzIuOHYzOS40SDB6bTAgNzguN2g5NzIuOHYzOS40SDB6IiB0cmFuc2Zvcm09InNjYWxlKC45Mzc1KSIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbD0iIzE5MmY1ZCIgZD0iTTAgMGgzODkuMXYyNzUuN0gweiIgdHJhbnNmb3JtPSJzY2FsZSguOTM3NSkiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMi40IDExLjhMMzYgMjIuN2gxMS40bC05LjIgNi43IDMuNSAxMS05LjMtNi44LTkuMiA2LjcgMy41LTEwLjktOS4zLTYuN0gyOXptNjQuOSAwbDMuNSAxMC45aDExLjVsLTkuMyA2LjcgMy41IDExLTkuMi02LjgtOS4zIDYuNyAzLjUtMTAuOS05LjItNi43aDExLjR6bTY0LjggMGwzLjYgMTAuOUgxNzdsLTkuMiA2LjcgMy41IDExLTkuMy02LjgtOS4yIDYuNyAzLjUtMTAuOS05LjMtNi43aDExLjV6bTY0LjkgMGwzLjUgMTAuOUgyNDJsLTkuMyA2LjcgMy42IDExLTkuMy02LjgtOS4zIDYuNyAzLjYtMTAuOS05LjMtNi43aDExLjR6bTY0LjggMGwzLjYgMTAuOWgxMS40bC05LjIgNi43IDMuNSAxMS05LjMtNi44LTkuMiA2LjcgMy41LTEwLjktOS4yLTYuN2gxMS40em02NC45IDBsMy41IDEwLjloMTEuNWwtOS4zIDYuNyAzLjYgMTEtOS4zLTYuOC05LjMgNi43IDMuNi0xMC45LTkuMy02LjdoMTEuNXpNNjQuOSAzOS40bDMuNSAxMC45aDExLjVMNzAuNiA1NyA3NCA2Ny45bC05LTYuNy05LjMgNi43TDU5IDU3bC05LTYuN2gxMS40em02NC44IDBsMy42IDEwLjloMTEuNGwtOS4zIDYuNyAzLjYgMTAuOS05LjMtNi43LTkuMyA2LjdMMTI0IDU3bC05LjMtNi43aDExLjV6bTY0LjkgMGwzLjUgMTAuOWgxMS41bC05LjMgNi43IDMuNSAxMC45LTkuMi02LjctOS4zIDYuNyAzLjUtMTAuOS05LjItNi43SDE5MXptNjQuOCAwbDMuNiAxMC45aDExLjRsLTkuMyA2LjcgMy42IDEwLjktOS4zLTYuNy05LjIgNi43IDMuNS0xMC45LTkuMy02LjdIMjU2em02NC45IDBsMy41IDEwLjloMTEuNUwzMzAgNTdsMy41IDEwLjktOS4yLTYuNy05LjMgNi43IDMuNS0xMC45LTkuMi02LjdoMTEuNHpNMzIuNCA2Ni45TDM2IDc4aDExLjRsLTkuMiA2LjcgMy41IDEwLjktOS4zLTYuOC05LjIgNi44IDMuNS0xMS05LjMtNi43SDI5em02NC45IDBsMy41IDExaDExLjVsLTkuMyA2LjcgMy41IDEwLjktOS4yLTYuOC05LjMgNi44IDMuNS0xMS05LjItNi43aDExLjR6bTY0LjggMGwzLjYgMTFIMTc3bC05LjIgNi43IDMuNSAxMC45LTkuMy02LjgtOS4yIDYuOCAzLjUtMTEtOS4zLTYuN2gxMS41em02NC45IDBsMy41IDExSDI0MmwtOS4zIDYuNyAzLjYgMTAuOS05LjMtNi44LTkuMyA2LjggMy42LTExLTkuMy02LjdoMTEuNHptNjQuOCAwbDMuNiAxMWgxMS40bC05LjIgNi43IDMuNSAxMC45LTkuMy02LjgtOS4yIDYuOCAzLjUtMTEtOS4yLTYuN2gxMS40em02NC45IDBsMy41IDExaDExLjVsLTkuMyA2LjcgMy42IDEwLjktOS4zLTYuOC05LjMgNi44IDMuNi0xMS05LjMtNi43aDExLjV6TTY0LjkgOTQuNWwzLjUgMTAuOWgxMS41bC05LjMgNi43IDMuNSAxMS05LjItNi44LTkuMyA2LjcgMy41LTEwLjktOS4yLTYuN2gxMS40em02NC44IDBsMy42IDEwLjloMTEuNGwtOS4zIDYuNyAzLjYgMTEtOS4zLTYuOC05LjMgNi43IDMuNi0xMC45LTkuMy02LjdoMTEuNXptNjQuOSAwbDMuNSAxMC45aDExLjVsLTkuMyA2LjcgMy41IDExLTkuMi02LjgtOS4zIDYuNyAzLjUtMTAuOS05LjItNi43SDE5MXptNjQuOCAwbDMuNiAxMC45aDExLjRsLTkuMiA2LjcgMy41IDExLTkuMy02LjgtOS4yIDYuNyAzLjUtMTAuOS05LjMtNi43SDI1NnptNjQuOSAwbDMuNSAxMC45aDExLjVsLTkuMyA2LjcgMy41IDExLTkuMi02LjgtOS4zIDYuNyAzLjUtMTAuOS05LjItNi43aDExLjR6TTMyLjQgMTIyLjFMMzYgMTMzaDExLjRsLTkuMiA2LjcgMy41IDExLTkuMy02LjgtOS4yIDYuNyAzLjUtMTAuOS05LjMtNi43SDI5em02NC45IDBsMy41IDEwLjloMTEuNWwtOS4zIDYuNyAzLjUgMTAuOS05LjItNi43LTkuMyA2LjcgMy41LTEwLjktOS4yLTYuN2gxMS40em02NC44IDBsMy42IDEwLjlIMTc3bC05LjIgNi43IDMuNSAxMS05LjMtNi44LTkuMiA2LjcgMy41LTEwLjktOS4zLTYuN2gxMS41em02NC45IDBsMy41IDEwLjlIMjQybC05LjMgNi43IDMuNiAxMS05LjMtNi44LTkuMyA2LjcgMy42LTEwLjktOS4zLTYuN2gxMS40em02NC44IDBsMy42IDEwLjloMTEuNGwtOS4yIDYuNyAzLjUgMTEtOS4zLTYuOC05LjIgNi43IDMuNS0xMC45LTkuMi02LjdoMTEuNHptNjQuOSAwbDMuNSAxMC45aDExLjVsLTkuMyA2LjcgMy42IDExLTkuMy02LjgtOS4zIDYuNyAzLjYtMTAuOS05LjMtNi43aDExLjV6TTY0LjkgMTQ5LjdsMy41IDEwLjloMTEuNWwtOS4zIDYuNyAzLjUgMTAuOS05LjItNi44LTkuMyA2LjggMy41LTExLTkuMi02LjdoMTEuNHptNjQuOCAwbDMuNiAxMC45aDExLjRsLTkuMyA2LjcgMy42IDEwLjktOS4zLTYuOC05LjMgNi44IDMuNi0xMS05LjMtNi43aDExLjV6bTY0LjkgMGwzLjUgMTAuOWgxMS41bC05LjMgNi43IDMuNSAxMC45LTkuMi02LjgtOS4zIDYuOCAzLjUtMTEtOS4yLTYuN0gxOTF6bTY0LjggMGwzLjYgMTAuOWgxMS40bC05LjIgNi43IDMuNSAxMC45LTkuMy02LjgtOS4yIDYuOCAzLjUtMTEtOS4zLTYuN0gyNTZ6bTY0LjkgMGwzLjUgMTAuOWgxMS41bC05LjMgNi43IDMuNSAxMC45LTkuMi02LjgtOS4zIDYuOCAzLjUtMTEtOS4yLTYuN2gxMS40ek0zMi40IDE3Ny4ybDMuNiAxMWgxMS40bC05LjIgNi43IDMuNSAxMC44LTkuMy02LjctOS4yIDYuNyAzLjUtMTAuOS05LjMtNi43SDI5em02NC45IDBsMy41IDExaDExLjVsLTkuMyA2LjcgMy42IDEwLjgtOS4zLTYuNy05LjMgNi43IDMuNi0xMC45LTkuMy02LjdoMTEuNHptNjQuOCAwbDMuNiAxMUgxNzdsLTkuMiA2LjcgMy41IDEwLjgtOS4zLTYuNy05LjIgNi43IDMuNS0xMC45LTkuMy02LjdoMTEuNXptNjQuOSAwbDMuNSAxMUgyNDJsLTkuMyA2LjcgMy42IDEwLjgtOS4zLTYuNy05LjMgNi43IDMuNi0xMC45LTkuMy02LjdoMTEuNHptNjQuOCAwbDMuNiAxMWgxMS40bC05LjIgNi43IDMuNSAxMC44LTkuMy02LjctOS4yIDYuNyAzLjUtMTAuOS05LjItNi43aDExLjR6bTY0LjkgMGwzLjUgMTFoMTEuNWwtOS4zIDYuNyAzLjYgMTAuOC05LjMtNi43LTkuMyA2LjcgMy42LTEwLjktOS4zLTYuN2gxMS41ek02NC45IDIwNC44bDMuNSAxMC45aDExLjVsLTkuMyA2LjcgMy41IDExLTkuMi02LjgtOS4zIDYuNyAzLjUtMTAuOS05LjItNi43aDExLjR6bTY0LjggMGwzLjYgMTAuOWgxMS40bC05LjMgNi43IDMuNiAxMS05LjMtNi44LTkuMyA2LjcgMy42LTEwLjktOS4zLTYuN2gxMS41em02NC45IDBsMy41IDEwLjloMTEuNWwtOS4zIDYuNyAzLjUgMTEtOS4yLTYuOC05LjMgNi43IDMuNS0xMC45LTkuMi02LjdIMTkxem02NC44IDBsMy42IDEwLjloMTEuNGwtOS4yIDYuNyAzLjUgMTEtOS4zLTYuOC05LjIgNi43IDMuNS0xMC45LTkuMy02LjdIMjU2em02NC45IDBsMy41IDEwLjloMTEuNWwtOS4zIDYuNyAzLjUgMTEtOS4yLTYuOC05LjMgNi43IDMuNS0xMC45LTkuMi02LjdoMTEuNHpNMzIuNCAyMzIuNGwzLjYgMTAuOWgxMS40bC05LjIgNi43IDMuNSAxMC45LTkuMy02LjctOS4yIDYuNyAzLjUtMTEtOS4zLTYuN0gyOXptNjQuOSAwbDMuNSAxMC45aDExLjVMMTAzIDI1MGwzLjYgMTAuOS05LjMtNi43LTkuMyA2LjcgMy42LTExLTkuMy02LjdoMTEuNHptNjQuOCAwbDMuNiAxMC45SDE3N2wtOSA2LjcgMy41IDEwLjktOS4zLTYuNy05LjIgNi43IDMuNS0xMS05LjMtNi43aDExLjV6bTY0LjkgMGwzLjUgMTAuOUgyNDJsLTkuMyA2LjcgMy42IDEwLjktOS4zLTYuNy05LjMgNi43IDMuNi0xMS05LjMtNi43aDExLjR6bTY0LjggMGwzLjYgMTAuOWgxMS40bC05LjIgNi43IDMuNSAxMC45LTkuMy02LjctOS4yIDYuNyAzLjUtMTEtOS4yLTYuN2gxMS40em02NC45IDBsMy41IDEwLjloMTEuNWwtOS4zIDYuNyAzLjYgMTAuOS05LjMtNi43LTkuMyA2LjcgMy42LTExLTkuMy02LjdoMTEuNXoiIHRyYW5zZm9ybT0ic2NhbGUoLjkzNzUpIi8+CiAgPC9nPgo8L3N2Zz4K"
                    className="w-6 rounded-xl"
                  />
                  <h2 className="ml-2  text-xl font-semibold" >USA</h2>
                </div>

                <p className="text-base py-2 opacity-75">
                  539 W. Commerce St #7183,
                  <br />
                  Dallas, TX 75208,
                  <br />
                  USA
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col  md:flex-row w-[100%]">
            <div className="flex flex-col py-6 sm:w-[50%]">
              <div className=" ">
                <div className="flex ">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb24tY3NzLWRlIiB2aWV3Qm94PSIwIDAgNjQwIDQ4MCI+CiAgPHBhdGggZmlsbD0iI2ZmY2UwMCIgZD0iTTAgMzIwaDY0MHYxNjBIMHoiLz4KICA8cGF0aCBkPSJNMCAwaDY0MHYxNjBIMHoiLz4KICA8cGF0aCBmaWxsPSIjZDAwIiBkPSJNMCAxNjBoNjQwdjE2MEgweiIvPgo8L3N2Zz4K"
                    className="w-6 rounded-xl "
                  />
                  <h2 className="ml-2  text-xl font-semibold" >Germany</h2>
                </div>

                <p className="text-base py-2 opacity-75" >
                  Sarresdorferstr. 79
                  <br />
                  54568, Gerolstein
                  <br />
                  Germany
                  <br />
                  Ahmedabad-380051
                  <br />
                  Office:<a href="tel:+5746052431" className="hover:text-green-400">+49 17662236564</a>
                </p>
              </div>
            </div>
            <div className="flex flex-col py-6 sm:w-[50%]">
              <div>
                <div className="flex ">
                  <img
                    src="https://www.peerbits.com/static/om-83f263afe2657031e94e302f4932124a.svg"
                    className="w-6 rounded-xl"
                  />
                  <h2 className="ml-2  text-xl font-semibold" >Oman</h2>
                </div>

                <p className="text-base py-2 opacity-75">
                  P.O. Box: 131, P.C: 115, Alkhweer,
                  <br />
                  Jasmin Complex, office 203
                  <br />
                  Muscat, Sultanate of Oman
                  <br />
                  Mobile:<a href="tel:+96899349394" className="hover:text-green-400">(+968) 99349394</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAFreeQuote;
