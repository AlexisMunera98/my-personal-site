import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Posts from "./posts"
import Certificate from "./certificate";
import Course from "./course";

export default () => {
    const data = useStaticQuery(graphql`{
      codigofacilitoJson {
        id
        data {
          certificates {
            title
            score
            code
          }
          courses {
            title
            progress
            url
          }
        }
      }
    }
    `);
    console.log(data)
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts data={data.codigofacilitoJson.data.certificates}
                           card={Certificate}
                           title="Mis certificados online en CodigoFacilito"/>

                    <Posts data={data.codigofacilitoJson.data.courses.filter(course => course.progress > 20)}
                           card={Course}
                           title="Mis cursos en CodigoFacilito"/>
                </div>
            </div>
        </section>
    );
}
