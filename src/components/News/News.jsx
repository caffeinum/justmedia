import React from 'react'
import './News.css'

import { Link } from 'react-router-dom'

import Text from './Text/Text'
import Title from './Title/Title'
import MainImg from './MainImg/MainImg'


class News extends React.Component {

  state = {
    isMore: false,
    moreNews: []
  }

  handelShowMore = () => {
    const { news } = this.props

    this.setState(state => ({
      isMore: !state.isMore,
      moreNews: news.filter((item, index) => index !== 0)
    }))
  }

  render() {
    const { news, positive } = this.props
    const { isMore, moreNews } = this.state

    return (
      <div className="col-md-6">
        {
          positive ? (
            <h1 style={{ color: 'green' }}>Positive</h1>
          ) : (
            <h1 style={{ color: 'red' }}>Negative</h1>
          )
        }
          <article className="article article-post">
            <Link to={`/news-${news[0]._id}-${news[0].search_query}`}>
              <MainImg img={news[0].image} />
              <Title>
                {news[0].title}
              </Title>
            </Link>
              <Text text={news[0].summary} />
            <button className="showMore" onClick={this.handelShowMore}>Show more news</button>
          </article>

          <div className="row" style={{ marginTop: '20px' }}>
            {
              isMore && moreNews.map((item, index) => (
                <div className="col-md-6" style={{ height: '260px', marginBottom: '20px' }} key={index}>
                  <article className="article article-post">
                      <img src={item.image} className="imageSmall" alt="asd" />
                      <p>
                        {item.title}
                      </p>
                    <Link to={`/news-${item._id}-${item.search_query}`}>Go to news</Link>
                  </article>
                </div>
              ))
            }
          </div>
      </div>
    )
  }
}

export default News
