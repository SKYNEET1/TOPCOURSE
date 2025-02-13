import React from "react";

const Filter = ({filterData,category,setCategory}) => {
    // let category = filterData.category;
    // let setCategory = filterData.setCategory;

    function filterhandler(title){
        setCategory(title)
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center">
            {filterData.map((data) =>(
                
                <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
                    ${category === data.title ? "bg-opacity-90 border-white":"bg-opacity-50 border-transparent"}`}
                     key={data.id}
                     onClick= {() => filterhandler(data.title)}>
                         {/* sendin a parameter to the function its dev or lifestyle or business etc... */}
                        
                    {data.title}
                </button>
               
            ))}
        </div>
    );
}
export  default Filter;
