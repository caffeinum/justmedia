import React from 'react'

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>MJM is a Google News without <s>bias</s> and <s>emotions</s>.</h1>
      <iframe width="800px" height="450"
        src="https://www.youtube.com/embed/is5OUhMmfWk?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0"
        allow="autoplay; encrypted-media" allowFullScreen title="more just media" />
      <p>
        <h4>MJM aggregates articles and news</h4>
        <b> 1) about trending topics</b> <br/>
        <b>2) from manually listed sources.</b> <br/>
        <i>
          Then it finds subjectivity,
          generalizations and emotional manipulations in the text. <br/>
          To help with building a full overview, it adds
          links to the articles with opposite opinion.
        </i>
      </p>
    </div>
  )
}

export default Home
