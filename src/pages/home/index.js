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
  }

  handleSubmit = (search) => {
    this.setState(() => ({ isSubmitted: true }))
    this.props.getNews(search)
  }

  render() {
    const { isRequested, data: { positive, negative } } = this.props
    const { isSubmitted } = this.state

    return (
      <div style={{ width: '100%' }}>
        <ButtonRows word={word} getNews={this.handleSubmit} />
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
          ) : (
            <h1>Nothing</h1>
          )
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
