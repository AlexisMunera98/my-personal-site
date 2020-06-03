import React from "react";

export default () => (
    <form className="mt-6 text-center">
        <label htmlFor="contact-content" className="block text-gray-200 font-semibold text-xl mb-2">How can I help you?</label>
        <div className="flex shadow rounded bg-white border p-2" style={{height: "4em"}}>
            <textarea
                id="contact-content"
                name="contact-content"
                className="flex-1 py-2 px-3 text-black focus:outline-none focus:shadow-outline rounded-lg"/>
            <button className="btn ml-4">Send</button>
        </div>
    </form>
)
