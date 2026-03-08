import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className="mx-4 sm:mx-8 lg:mx-20 xl:mx-44 py-16 sm:py-20 xl:py-32">

            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
                Steps to remove background <br className="hidden sm:block" /> image in seconds
            </h1>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-12 xl:mt-20 justify-center items-stretch">

                {/* Card 1 */}
                <div className="w-full sm:w-[300px] flex items-start gap-4 bg-white border drop-shadow-md p-6 rounded-lg hover:scale-105 transition-all duration-500">
                    <img className="w-8 h-8" src={assets.upload_icon} alt="Upload Icon" />
                    <div>
                        <p className="text-lg font-medium">Upload image</p>
                        <p className="text-sm text-neutral-500">
                            Upload your image in one click. Supports JPG, PNG and more.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[300px] flex items-start gap-4 bg-white border drop-shadow-md p-6 rounded-lg hover:scale-105 transition-all duration-500">
                    <img className="w-8 h-8" src={assets.remove_bg_icon} alt="Remove Background Icon" />
                    <div>
                        <p className="text-lg font-medium">Remove background</p>
                        <p className="text-sm text-neutral-500">
                            Our AI removes the background automatically in seconds.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[300px] flex items-start gap-4 bg-white border drop-shadow-md p-6 rounded-lg hover:scale-105 transition-all duration-500">
                    <img className="w-8 h-8" src={assets.download_icon} alt="Download Icon" />
                    <div>
                        <p className="text-lg font-medium">Download image</p>
                        <p className="text-sm text-neutral-500">
                            Download your high-quality transparent image instantly.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Steps
