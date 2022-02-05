import React from "react"
import Card from "./card"
import Pagination from "./pagination"

export default class Content extends React.Component {
    url = ""
    header = ""

    constructor(props) {
        super(props)
        this.state = {
            propsData: props,
            token: "5be7d56373774432b6f59713eebbfdba",
            dataArticles: [],
            totalResults: 0,
            fetchResult: []
        }
        this.setUrlHeader()
    }

    setUrlHeader = () => {
        if (this.state.propsData.searchQuery !== "") {
            if (this.state.propsData.category !== "general") {
                this.url = `https://newsapi.org/v2/top-headlines?q=${this.state.propsData.searchQuery}&language=${this.state.propsData.lang}&category=${this.state.propsData.category}&page=${this.state.propsData.page}&apiKey=${this.state.token}`

                this.header = `Shearch result for "${this.state.propsData.searchQuery}" in ${this.state.propsData.category.charAt(0).toUpperCase() + this.state.propsData.category.slice(1)}`
            } else {
                this.url = `https://newsapi.org/v2/everything?q=${this.state.propsData.searchQuery}&language=${this.state.propsData.lang}&page=${this.state.propsData.page}&apiKey=${this.state.token}`

                this.header = `Shearch result for "${this.state.propsData.searchQuery}"`
            }
        } else {
            this.url = `https://newsapi.org/v2/top-headlines?language=${this.state.propsData.lang}&category=${this.state.propsData.category}&page=${this.state.propsData.page}&apiKey=${this.state.token}`

            if (this.state.propsData.category === "general") {
                this.header = "Headline News"
            } else {
                this.header = this.state.propsData.category.charAt(0).toUpperCase() + this.state.propsData.category.slice(1)
            }
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        if (props !== state.propsData) {
            return {
                propsData: props
            }
        }
        return null
    }

    componentDidMount() {
        this.fetchData(this.url)
    }

    componentDidUpdate() {
        let oldUrl = this.url
        this.setUrlHeader()
        if (oldUrl !== this.url) {
            this.fetchData(this.url)
        }
    }

    fetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.totalResults !== 0 && data.status === "ok") { 
                    this.setState({
                        dataArticles: data.articles,
                        totalResults: data.totalResults,
                    })
                } else if (data.status === "ok") {
                    // request success but no result
                    this.setState({
                        fetchResult: <p>No result found</p>
                    })
                } else if (data.status === "error") {
                    // request error
                    this.setState({
                        fetchResult: <p>{data.message}</p>
                    })
                }
            })
    }

    changePage = (page) => { 
        this.props.changePage(page)
    }

    render() {
        let showAllCards = () => { 
            return this.state.dataArticles.map((item, index) => {
                return (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        urlToImage={item.urlToImage}
                        publishedAt={item.publishedAt}
                        source={item.source.name}
                    />
                )
            })
        }

        return (
            <div className="container my-2" id="content">
                <h1 className="my-3">{this.header}</h1>
                <Pagination pageNow={this.state.propsData.page} totalResults={this.state.totalResults} changePage={this.changePage}/>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
                    {this.state.fetchResult}
                    {showAllCards()}
                </div>
                <Pagination pageNow={this.state.propsData.page} totalResults={this.state.totalResults} />
            </div>
        )
    }
}