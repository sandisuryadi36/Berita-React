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
            // token: "5be7d56373774432b6f59713eebbfdba",
            token: "48fc76a73f9342b690e5a4bed5e4d1c7",
            dataArticles: [],
            totalResults: 0,
            fetchResult: "",
            loading: true
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
                dataArticles: [],
                totalResults: 0,
                fetchResult: "",
                loading: true,
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
                console.log(data)
                if (data.totalResults !== 0 && data.status === "ok") {
                    this.setState({
                        dataArticles: data.articles,
                        totalResults: data.totalResults,
                    })
                } else if (data.totalResults === 0 && data.status === "ok") {
                    // request success but no result
                    this.setState({
                        fetchResult: "No result found",
                        dataArticles: [],
                        totalResults: 0,
                    })
                } else if (data.status === "error") {
                    // request error
                    this.setState({
                        fetchResult: data.message,
                        dataArticles: [],
                        totalResults: 0,
                    })
                }
                this.setState({ loading: false })
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
                <Pagination pageNow={this.state.propsData.page} totalResults={this.state.totalResults} changePage={this.changePage} />
                {this.state.loading && <div className="col-12 text-center"><div className="spinner-border text-primary" style={{width: "4rem", height: "4rem"}} role="status"><span className="sr-only">Loading...</span></div></div>}
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
                    {this.state.fetchResult !== "" ? this.state.fetchResult : showAllCards()}
                </div>
                <Pagination pageNow={this.state.propsData.page} totalResults={this.state.totalResults} />
            </div>
        )
    }
}