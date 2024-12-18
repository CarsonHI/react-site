import React from 'react';
import VexPic from './VexPic'; // Import your image component

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-8">
            {/* Text Column */}
            <div className="flex-1 md:w-3/4">
                <h1 className="text-3xl font-semibold mb-4">About Me</h1>
                <p className="text-lg">
                    Hi, I'm Carson Healy. I am currently in Grade 4, and I enjoy learning about Vex IQ Robotics and competing in competitions around the globe. 
                    My team number is 85301C from TIS, Macaou.
                    I have been learning and working with VEX IQ robotics for one season so I am basicly new to Vex Robotics.
                    But I really enjoy building and programming robots. 
                    Robotics has taught me a lot about problem-solving, teamwork, and creative thinking.
                    I am excited for the new era! #Vex Robotics
                </p>
            </div>
            
            {/* Image Column */}
            <div className="flex-1 md:w-1/4 flex justify-center items-center">
                <VexPic />
            </div>
        </div>
    );
}

export default AboutMe;
