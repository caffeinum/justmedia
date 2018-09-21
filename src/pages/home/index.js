import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getNews } from '../../redux/news'

import News from '../../components/News/News'
import ButtonRows from '../../components/ButtonRows/ButtonRows'

const word = ['iPhone XS', 'Trump', 'Syrie', 'Iraq', 'Russia']

class Home extends React.Component  {
  state = {
    isSubmitted: false,
    topic: null,
  }

  handleSubmit = (search) => {
    this.setState(() => ({ isSubmitted: true, topic: search }))
    this.props.getNews(search)
  }

  render() {
    const { isRequested, data: { positive, negative } } = this.props
    const { isSubmitted, topic } = this.state

    return (
      <div style={{ width: '100%' }}>
        { topic
          ? <h2>{topic}</h2>
          : <ButtonRows word={word} getNews={this.handleSubmit} /> }
        {
          isSubmitted ? (
            isRequested ? (
              <span> Loading..</span>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-around', height: '800px' }}>
                <News news={positive} positive={true}/>
                <News news={negative} positive={false} />
              </div>
            )
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({ news }) => ({
  data: news.data,
  isRequested: news.isRequested,
  isError: news.isError,
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
)(Home)
