import React from "react";
import illustration from '../imgs/server.svg'
import Form from './contact.form'

export default () => (
    <header className="bg-blue-800 text-white">
        <div className="container mx-auto p-8 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-5xl">Hi! I'm Alexis</h1>
                    <p className="text-xl font-semibold text-yellow-400">A Python backend dev</p>
                </div>
                <img src={illustration} alt="Server" style={{height: "200px"}} className="mr-24"/>
            </div>
            <Form/>
        </div>
    </header>
)
