import React from "react";
import { CameraAlt } from "@mui/icons-material";
import girlimg from "../assets/girlimg.png";

function Profile() {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="w-[400px] bg-gray-100 border rounded-lg shadow-md flex flex-col">
        <div className="border-b px-6 py-4 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        <div className="flex flex-col flex-grow px-6 py-6">
          <div className="flex flex-col gap-6 flex-grow">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={girlimg}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                  <CameraAlt fontSize="small" className="text-white" />
                </div>
              </div>

              <div>
                <h3 className="font-rubik font-semibold text-gray-900">
                  Marry Doe
                </h3>
                <p className="font-rubik text-sm text-gray-900">
                  Marry@gmail.com
                </p>
              </div>
            </div>

            <p className="font-rubik text-[#1D2226] text-l leading-relaxed ">
              Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat. Sed Diam
            </p>

            <div className="-mx-6 border-t-2 border-dashed border-gray-300"></div>
          </div>

          <div className="mt-12">
            <div className="-mx-6 border-t-2 border-dashed border-gray-300 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
