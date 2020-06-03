import React from "react";

export default (props) => {
    const course = props.element;
    return (
        <div className="shadow p-8 bg-white mr-4">
            <h4 className="font-bold">{course.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">
                    Progreso: {parseInt(course.progress)}%
                </span>
            </div>
        </div>
    )
}
