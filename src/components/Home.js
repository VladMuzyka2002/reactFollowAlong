import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id != id))
    }  

    useEffect(() => {
        console.log(name)
    }, [name]);

    useEffect(() => {
        console.log('MONKY')
    });

    return (
        <div className="home">
            <BlogList blogs={blogs} setBlogs = {setBlogs} title = "All Blogs!" handleDelete = {handleDelete}></BlogList>
            <button onClick={() => setName('luigi')}>Change Name</button>
        </div>
    )


}

export default Home;