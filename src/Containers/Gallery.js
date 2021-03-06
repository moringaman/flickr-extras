import React, { useEffect, useReducer, useRef, useState } from 'react'
import Card from '../Components/ui/Card'
import './style.css'
import { imageReducer, pagesReducer } from '../Reducers'
import { useScroll } from '../Hooks'

const Gallery = () => {

const initialState = {images: [], fetching: true, error: '' }

const [ searchTerm, setSearchTerm ] = useState('balloons')
const [ imageData, imageDispatch ] = useReducer(imageReducer, initialState)
const [ pages, pagesDispatch ] = useReducer(pagesReducer, {page: 1})


useEffect(() => {
    (async() => {
    imageDispatch({type:'FETCHING_IMAGES', fetching: true})

    try {
        const response = await fetch(`
        https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=28f4b96f36e68f27ea59927740f61bbd&tag_mode=all&text=${searchTerm}&safe_search=1&content_type=1&extras=tags%2Cdescription&per_page=4&page=${pages.page}1&format=json&nojsoncallback=1
        `) 
        const json = await response.json()
        const imageArray = json.photos.photo
        imageDispatch({type: 'STACK_IMAGES', images: imageArray})
        imageDispatch({type:'FETCHING_IMAGES', fetching: false})
    } catch(err) {
        imageDispatch({type: 'THROW_ERROR', error: 'There was a problem fetching the data..'})
    }
    })()
}, [imageDispatch, pages.page, searchTerm])


let bottomBoundaryRef = useRef(null);

useScroll(bottomBoundaryRef, pagesDispatch)

    return (
        <>
        <div className="gallery-wrapper">
            <h1 className="title">Flickr Photo Stream</h1>
        {
            imageData.images.length > 0 && imageData.images.map((el, i) => (
                <div key={i}>
                    <Card 
                        image={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}
                        title={el.title}
                        author={el.owner}
                        description={el.description._content}
                        tags={el.tags}
                    />
                </div>
                
            )
            )}
            {
                imageData.error && <h1 className="error-msg">{imageData.error}</h1>
            }
            {imageData.fetching &&
             <div className={`loader ${imageData.fetching} ? visible : null`}>
                <h2>
                Fetching Images..
                </h2>
            </div>
            } 
        </div>
        <div id='page-bottom-boundary' style={{ border: '1px solid #ccc'}} ref={bottomBoundaryRef}></div>
        </>
    )
}

export default Gallery