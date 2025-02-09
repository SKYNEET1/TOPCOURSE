import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    
    const [likedcourses,setlikedcourses] = useState([]);

    // let courses = props.courses; 
    
    
    
    function getcourses  () {
        if(category === "All"){
            let allcourses = [];
            Object.values(courses).forEach(coursecat =>{
                coursecat.forEach(course => {
                allcourses.push(course);
             
              
                
            })
        })
    
        // the above code : the courses is the prop that contain the apt fetched data in terms of array of object  first  we loop through each category of courses that is a array which contain course and then loop through each course in that category and push it to new array allcourses
        return allcourses;
        
        }
        else{
            return courses[category];
        }

   
    
}
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            
            {
                getcourses().map((course) =>(
                    <Card key={course.id}
                    course={course}
                    likedcourses = {likedcourses}
                    setlikedcourses = {setlikedcourses} />
                                       
                ))
            }

        </div>
    );
};
export default Cards;