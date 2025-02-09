import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
const Card = (props) =>{
    let course = props.course;
    let likedcourses = props.likedcourses;
    let setlikedcourses = props.setlikedcourses;
    function clickhandler(){
        
        if(likedcourses.includes(course.id)){
            // liked ho rakha he .
            setlikedcourses((prev)=>prev.filter((cid)=>(cid !==course.id)));
            toast.warning("UNLIKED")
        }
        else{
            // not liked previously so then insert  it in likedcourses array .
            if(likedcourses.length === 0){
                setlikedcourses([course.id]);
            }
            else{
                setlikedcourses((prev)=> [...prev,course.id]);

            }
            toast.success("LIKED");
        }
    }
 
    return(
        <div className="w-[300px] bg-black bg-opacity-80 rounded-md overflow-hidden "> 
            <div className="relative">
                <img src={course.image.url}/>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2  grid place-items-center bottom-[-12px]">
                    <button onClick={clickhandler}>{
                        likedcourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) }
                    </button>
                </div>
            </div>
            <div className="p-4 h-full bg-bgDark">
                <p className=" bg-bgDark text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className=' bg-bgDark mt-2 text-white'>
                    {course.description.length > 100 ? (course.description.substr(0,100)) +" ....": (course.description)}
                    </p>
            </div>
        </div>
    )
}
export default Card;