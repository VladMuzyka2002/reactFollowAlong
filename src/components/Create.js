import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Luigi');

    return (
        <div className="create">  
            <h2>Add a New Blog</h2>
            <form> 
                <label> Blog Title </label>
                <input type = "text" required value = {title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label> Blog body </label>
                <textarea required value = {body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author</label>
                <select value = {author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value = "Mario">Mario</option>
                    <option value = "Luigi">Luigi</option>
                </select>
                <button>Add Blog</button>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;