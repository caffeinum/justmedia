import React from 'react'
import connect from "react-redux/es/connect/connect";

import MainImg from "../../components/News/MainImg/MainImg";
import Title from "../../components/News/Title/Title";
import Text from "../../components/News/Text/Text";

import { Link } from "react-router-dom";
import {bindActionCreators} from "redux";
import {getNews} from "../../redux/news";


class About extends React.Component {

  componentWillMount() {
    const { match: { params: { query } } } = this.props

    this.props.getNews(query)
  }

  render() {
    const { news, match: { params: { id } } } = this.props
    const needNews = news.filter(item => item._id === id)

    if (news.length === 0) {
      return null
    }

    return (
      <div className="col-md-8" style={{ lineHeight: '24px' }}>
        <Link to="/">Go back</Link>
        <article className="article article-post" >
          <MainImg img={needNews[0].image} />
          <Title>
            {needNews[0].title}
          </Title>
          <Text text={needNews[0].text} entities={needNews[0].entity.mentions} />
        </article>
      </div>
    )
  }
}


const mapStateToProps = ({ news }) => ({
  news: [ ...news.data.positive, ...news.data.negative],
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNews,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
