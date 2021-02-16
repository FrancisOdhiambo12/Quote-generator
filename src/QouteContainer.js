import React from "react";

class QouteContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      quotesText: "",
      author: "",
      facebookUrl: "https://www.facebook.com/sharer/sharer.php?u=",
      twitterUrl: "https://twitter.com/intent/tweet/?text="
    }
    this.getQuotes();

    this.getQuotes = this.getQuotes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //getting quote from API and the author
  getQuotes() {
    const app = this;
    fetch("https://type.fit/api/quotes")
    .then((respose) => respose.json())
    .then((data) => {
      const index = Math.floor(Math.random() * data.length);
      app.setState({
        quotesText: data[index].text,
        author: data[index].author,
        twitterUrl: "https://twitter.com/intent/tweet/?text=" + data[index].text.replace(/ /g, "+"),
        facebookUrl:"https://www.facebook.com/sharer/sharer.php?u=" + data[index].text.replace(/ /g, "+")
      });
    });
  }

  handleClick() {
    this.getQuotes();
  }

    render() {
      return (
        <div className="qoute-Container">
          <div className="qoute-cotent">
            <div className="qoute">{this.state.quotesText}</div>
            <div className="author">{this.state.author}</div>
          </div>
          <button onClick={this.handleClick} className="gen-quotes">Generate</button>
          <div className="social-media">
            <a href={this.state.facebookUrl} target="_blank" class="fa fa-facebook"></a>
            <a href={this.state.twitterUrl} target="_blank" class="fa fa-twitter"></a>
          </div>
        </div>
      );
    }
}


export default QouteContainer;
