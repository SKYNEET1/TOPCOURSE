import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";



const App = () => {

  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchdata() {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // saved data in to the data variable
      setcourses(output.data);

    }
    catch (error) {
      toast.error("something id wrong")
    }
    setloading(false);
  }
  useEffect(() => {
    fetchdata();
  }, [])

  return (<div className="min-h-screen flex flex-col  bg-bgDark2">
    <div><Navbar />
    </div>

    <div className="bg-bgDark2 ">
      <div> <Filter
        filterData={filterData}
        category = {category}
        setCategory = {setCategory}
      />
      </div>



      <div className="  flex flex-wrap w-11/12 max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]">
        {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)};
      </div>
    </div>






  </div>
  );
};

export default App;
