import React from "react"

export default class Content extends React.Component {
    url = ""
    header = ""
    
    constructor(props) {
        super(props)
        this.state = {
            propsData: props,
            token: "5be7d56373774432b6f59713eebbfdba",
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
        console.log(this.url)
        console.log(this.header)
    }

    componentDidUpdate() {
        this.setUrlHeader()
        console.log(this.url)
        console.log(this.header)
    }

    render(){
        return (
            <div></div>
        )
    }
}