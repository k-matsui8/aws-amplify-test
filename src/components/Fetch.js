import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import { Link } from "react-router-dom";

const Fetch = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://matsui-test.microcms.io/api/v1/test", {
      headers: {
        "X-MICROCMS-API-KEY": process.env.REACT_APP_API_KEY
      }
    })
      .then(res => { return res.json() })
      .then((res) => {
        return res.contents;
      })
      .then(data => {
        setPosts(data)
      })
  }, [])

  const usePosts = posts.map((post, index) => {
    return <div key={index}>
      <li class="news-data">
        <Link to={`/news/${post.id}`} >
          <div class="news-date">
            <span class="news-date-year">
              <Moment format="YYYY">
                {post.date}
              </Moment>
            </span><br />
            <span class="news-date-monthDay">
              <Moment format="MM.DD">
                {post.date}
              </Moment>
            </span>
          </div>
          <span>{post.title}</span>
        </Link>
      </li>
    </div>
  })

  return (
    <div>
      <ul class="news-list">
        {usePosts}
      </ul>

    </div>
  )
}

export default Fetch
