import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../App';
import { BlogComponent } from '../components/blog';

const Container = styled.div`
      // border:2px dashed green;
      padding:40px 80px;
      background-color:#d8eefe;
      transition: background-color 250ms;
      background-color:${props => props.theme==="light" ? "#d8eefe" : "#242629"};
      &>p{
            color:${props => props.theme=="dark" ? "#fffffe" : "#192A56"};
      }
      & div div{
            background-color:${props => props.theme==="light" ? "#ffffff" : "#16161a"};
      }
      // padding-top:0;
      @media (max-width:760px){
            padding:20px;
            padding-bottom:40px;
      }
`;
const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    color:#192A56;
`;
const BlogsSection = styled.div`
     
      margin-top:30px;
      display:grid;
      grid-template-columns:repeat(auto-fill, minmax(350px,1fr));
      grid-auto-rows: auto;
      row-gap:15px;
      column-gap:15px;
      @media (max-width: 375px){
            margin-top:30px;
            grid-template-columns:repeat(auto-fill, minmax(280px,1fr));
      }
`;

const BlogsLayout = () => {
      const [blogs, setBlogs] = useState([]);

      const themeContext = useContext(ThemeContext);
      useEffect(() => {
            fetch("https://dev.to/api/articles?username=vineetk13")
            .then((res) => res.json())
            .then((data) => setBlogs([...data]))
            .catch((err) => console.log(err));
      },[])
      // console.log(blogs);
      return (
            <Container theme={themeContext.theme} id="blogs">
            <Heading>🐘 Blogs</Heading>
            <BlogsSection>
            {blogs && blogs.map((b,i) => {
                  return (
                        <BlogComponent
                              key={i}
                              desc={b.description}
                              date={b.readable_publish_date} //or b.published_at
                              reactions={b.positive_reactions_count}
                              title={b.title}
                              link={b.url}
                              comments={b.comments_count}
                              theme={themeContext.theme}
                        />
                  )
            })}
            {/*blogs && blogs.map((b,i) => {
                  return (
                        <BlogComponent
                              key={i}
                              desc={b.description}
                              date={b.readable_publish_date} //or b.published_at
                              reactions={b.positive_reactions_count}
                              title={b.title}
                              link={b.url}
                              comments={b.comments_count}
                        />
                  )
            })*/}
            </BlogsSection>
            </Container>
      )
}

export default BlogsLayout;