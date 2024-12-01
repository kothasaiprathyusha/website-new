import React from 'react';
const posts=[
    { title:"How to learn react",description:"A comprehensive guide to learning React." },
    {  title:"Understanding Javascript",description:"Master JavaScript in no time." },
    { title:"Css tips and tricks",description:"Elevate your front-end skills with these css tips."},
];
function BlogList(){
    return (
        <div className="blog-list">
            <h2>Blog posts</h2>
            <ul>
               {posts.map((post,index) => (
                <li key={index} className="blog-post">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </li>
               ))}
            </ul>
        </div>
    );
}

export default BlogList;