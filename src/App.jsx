import { useEffect, useState } from 'react'
import quotes from './assets/quotes.json'
import { FaTwitter, FaTumblr } from "react-icons/fa";

function App() {
  const [qState, setQState] = useState({
    quote: "",
    author: ""
  });
  const [color, setColor] = useState("")

  const colorData = [
    "#4b4b4b",
    "#00ac7c",
    "#ff00e9",
    "#8685ef",
    "#068488",
  ]

  const getQuote = () => {
    let randQuotes = Math.floor(Math.random() * quotes.quotes.length)
    let randColor = Math.floor(Math.random() * colorData.length)
    animated()
    setTimeout(() => {
      setQState({
        quote: quotes.quotes[randQuotes].quote,
        author: quotes.quotes[randQuotes].author
      })
      setColor(colorData[randColor]);
    }, 500);
  }

  const animated = () => {
    document.getElementById('text').classList.remove('animated')
    document.getElementById('author').classList.remove('animated')
    setTimeout(() => {
      document.getElementById('text').classList.add('animated')
      document.getElementById('author').classList.add('animated')
    }, 200);
  }

  useEffect(()=>{
    getQuote()
  }, [])
  
  return (
    <main className='container' style={{backgroundColor: color}}>
      <div id="quote-box" style={{backgroundColor: "white"}}>
        <div id="text" style={{color: color}}>
          <p>{qState.quote}</p>
        </div>
        <div id="author" style={{color: color}}>
          <p>~ {qState.author}</p>
        </div>
        <div className="buttons">
          <div>
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${qState.quote}" ${qState.author}`} id="tweet-quote" className='share' target="_blank" style={{backgroundColor: color}}><FaTwitter color='white' /></a>
            <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${qState.author}&content=${qState.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} className='share' target="_blank" style={{backgroundColor: color}}><FaTumblr color='white' /></a>
          </div>
          <button id="new-quote" onClick={getQuote} style={{backgroundColor: color}}>
            New Quote
          </button>
        </div>
      </div>
      <p className="tag-name">By <a href="https://github.com/arisirvandiansyah" target='_blank'>Aris Irvandiansyah</a></p>
    </main>
  )
}

export default App
