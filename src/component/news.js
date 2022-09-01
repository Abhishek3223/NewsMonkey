import React, { Component } from 'react'
import Newsitems from './newsBox'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class news extends Component {

    static defaultProps = {
        country: 'in',
        PageSize: 8,

    }
    static propTypes = {
        country: PropTypes.string,
        PageSize: PropTypes.number,
    }
    constructor() {
        super();
        console.log("hello! i am a constructor")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    async update(props) {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7ac2409abd44dccaad78a9042138a0c&page=${this.state.page}&pageSize=${this.props.PageSize}`

        this.setState({
            loading: true
        })

        let data = await fetch(url);
        this.props.setProgress(30);

        let parseData = await data.json()
        this.props.setProgress(50);

        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false

        })
        this.props.setProgress(100);


    }
    async componentDidMount() {

        this.update();

    }
    PreviousPage = async () => {
        console.log("previous page")


        this.setState({
            page: this.state.page - 1,
        })
        this.update();
    };
    NextPage = async () => {

        this.setState({
            page: this.state.page + 1,
        })
        this.update();

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7ac2409abd44dccaad78a9042138a0c&page=${this.state.page}&pageSize=${this.props.PageSize}`

        // this.setState({
        //     loading: true
        // })

        let data = await fetch(url);

        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            // loading: false

        })

    };
    render() {

        return (
            <>
                <h2 class="d-flex justify-content-center " style={{ marginTop: '90px' }} >
                    Top headline-{this.props.category}
                </h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}

                >
                    <div className="container">
                        <div className="row" >
                            {this.state.articles?.map((elem) => {
                                return <div className="col-md-3" key={elem.url}>
                                    <Newsitems title={elem.title ? elem.title.slice(0, 45) : " "}
                                        desription={elem.description ? elem.description.slice(0, 88) : " "} imageUrl={elem.urlToImage ? elem.urlToImage : "https://iywd.nish.ac.in/images/2021/10/27/News-handing.gif"} author={elem.author} date={elem.publishedAt} newsUrl={elem.url}
                                        source={elem.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default news


// api key---c7ac2409abd44dccaad78a9042138a0c