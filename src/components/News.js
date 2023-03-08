import React from 'react';
import Fetch from './Fetch';


function News() {
  return (
    <main>
      <div class="p-fvHeading">
        <h2 class="p-fvHeading_en">NEWS</h2>
        <h3 class="p-fvHeading_jp">記事一覧</h3>
      </div>
      <div class="p-contents">
        <Fetch />
      </div>
    </main>
  )
}

export default News
