
import React from 'react';
import Navbar from '../components/Navbar'
import { useState } from  "react";
import  ReactQuill  from  "react-quill";
import  "react-quill/dist/quill.bubble.css";

const HomePage = () => {
    const [value, setValue] =  useState("");
    return (
        <div className="home">
            <div className="flex justify-center w-screen h-screen bg-zinc-600">
                <div className="flex flex-col mt-20">
                    <Navbar />
                    <ReactQuill  theme="bubble" onChange={setValue} placeholder="Start typing..." />
                </div>
            </div>
        </div>

        
        // <div className="flex items-center justify-center bg-gray-900 w-screen w-full">
        // <p className="text-center text-2xl">Hello, Flexbox!</p>
        // </div>


    );
};

export default HomePage;