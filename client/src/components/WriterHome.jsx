import { useEffect, useState } from 'react'


const WriterHome = (props) => {

    const [reviews, setReviews] = useState([])
    const [reponse, setResponse] =useState('')

    useEffect(() => {
        getAllReviews()
    }, [])

    //get reviews by id
    const getAllReviews = () => {
        fetch('http://localhost:8080/daily-reviews')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setReviews(result)
            })
    }


    const onHandleResponseInput = (e) => {   
        
    }
  

    let reviewList = reviews.map(item => {      
  
        return <div key={item.id}>
            <label>{item.property}</label>
            <label>{item.site_name}</label>
            <label>{item.review_date}</label>
            <label>{item.review_score}</label>
            <label>{item.review_description}</label>
            <label>{item.review_text}</label>
            <input type='text' name='review_response' value={item.review_reponse} onChange={e => setResponse(e.target.value)}></input>          
        </div>
    })

    return (
        <div>
            <p> Content Manager Page </p>
            {reviewList}
        </div>
    )
}

export default WriterHome