import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment'
// import Moment from 'react-moment'

const Post = () => {
  const postId = useParams();
  // console.log({ postId });
  const [post, setPost] = useState([])

  // useEffect(() => {
  fetch(`https://matsui-test.microcms.io/api/v1/test/${postId.id}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.REACT_APP_API_KEY
    }
  })
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .then((res) => {
    //       return res;
    //     })
    //     .then(data => {
    //       setPost(data)
    //     })
    // }, [])

    // const usePosts = post.map((post, index) => {
    //   return <div key={index}>
    //     <Moment format="YYYY/MM/DD">
    //       {post.date}
    //     </Moment>
    //     <span>{post.title}</span>
    //   </div>
    // })

    // return (
    //   <div>
    //     <ul>
    //       {usePosts}
    //     </ul>

    //   </div>
    // )
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(json => {
      document.getElementById("title").innerHTML = json.title;
      document.getElementById("body").innerHTML = json.body;
      document.getElementById("date").innerHTML = json.date;
    })
  return (
    <div class="news-inner">
      <div class="p-fvHeading">
        <h2 class="p-fvHeading_en">NEWS</h2>
        <h3 class="p-fvHeading_jp">記事一覧</h3>
      </div >
      <div>
        <div class="news-date">
          <span id="date" class="news-date-monthDay"></span>
        </div>
        <h4 id="title" class="news-title"></h4>
        <p id="body" class="p-body"></p>
      </div>
    </div >
  )

}
//   )
// }

export default Post
