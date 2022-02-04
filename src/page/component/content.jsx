import React from "react"
import Card from "./card"

export default class Content extends React.Component {
    url = ""
    header = ""

    constructor(props) {
        super(props)
        this.state = {
            propsData: props,
            token: "5be7d56373774432b6f59713eebbfdba",
            dataArticles: [],
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
        console.log("mount")
        this.fetchData(this.url)
    }

    componentDidUpdate() {
        let oldUrl = this.url
        this.setUrlHeader()
        if (oldUrl !== this.url) {
            this.fetchData(this.url)
        }
        console.log("update")
    }

    fetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ dataArticles: data.articles })
            })
    }

    render() {
        return (
            <div className="container my-2" id="content">
                <h1 className="my-3">{this.header}</h1>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
                    {this.state.dataArticles.map((item, index) => {
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
                    })}
                </div>
            </div>
        )
    }
}