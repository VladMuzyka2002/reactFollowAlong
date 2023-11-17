import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const conn = 'http://localhost:8000/blogs';
    const [blogs, setBlogs] = useState(null)

    //const [name, setName] = useState('mario');


    useEffect(() => {
        fetch(conn)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setBlogs(data);
          })
    }, []);

    useEffect(() => {
        console.log('MONKY')
    });

    return (
        <div className="home">
          {blogs && <BlogList blogs={blogs} />}
        </div>
    )


}

export default Home;