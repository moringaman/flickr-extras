import React from 'react'
import './style.css'

const Card = (props) => {
    const { image, title, author, description, tags } = props

    const trimText = (text, charNo) => {
       const trimmed =  `${text.substring(0, charNo)}...`
       return trimmed
    }

    return (
        <div className="card">
           <div 
           className="card_image-frame"
           style={{background: `URL(${image})`, backgroundSize: 'cover'}}
           >
            </div> 
            <div className="card_body-text">
                <div>
                    <a href={image}>{trimText(title, 20)}</a> by 
                    <a href={`https://flickr.com/people/${author}`}> Author</a>
                </div>
                <div className="card_body-text--description">
                       <p>
                        Description { ' ' } 
                       { description.length > 30 ? trimText(description, 40) : description}
                       </p>
                </div>
                <div style={{ display: 'flex', maxWidth: '250px', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', maxHeight: '100px', overflow: 'hidden' }}>
                    Tags  
                    {
                        tags && tags.split(' ').slice(0,3).map((el, i) => (
                            <div className="tag" key={i}>{el}</div>
                        ))
                    }...
                </div>
            </div>
        </div>
    )
}

export default Card