import React from "react";
import {graphql, Link} from 'gatsby';
import EducationNav from '../components/education-nav'

export default (props) => {
    const pageData = props.data.educationJson;
    console.log(props.data)
    return (
        <div>
            <header className="py-12 border-blue-800 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-yellow-800">Regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {
                    pageData.items.map((item, index) => (
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text text-center">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span
                                            className="inline-block p-2 bg-blue-200 text-blue-700">{item.degree}</span>
                                    }
                                    {
                                        item.url && <a href={item.url} target="_blank" rel="noopener noreferrer"
                                                       className="btn mt-4 inline-block">Ver más</a>
                                    }
                                </div>
                                <div className="inline-block">
                                    <span
                                        className="inline-block p-2 text-2xl bg-gray-100 text-gray-700">{item.score}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EducationNav/>
        </div>
    )
}

export const query = graphql`
    query($slug: String){
        educationJson(slug: {eq: $slug }){
            slug
            title
            description
            items{
                name
                degree
                score
                url
            }
        }
    }
`;
