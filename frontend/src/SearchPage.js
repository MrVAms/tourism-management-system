import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className ="searchPage">
               <div className ="searchPage__info">
                   <p>62 stays  .26 agust to 30 agust  .2guest</p>
                   <h1>Stays nearby</h1>
                   <Button variant ="outlined">Cancellation flexibiltity</Button>
                   <Button variant ="outlined">Type of place</Button>
                   <Button variant ="outlined">Price</Button>
                   <Button variant="outlined">Rooms and beds</Button>
                   <Button variant= "outlined">More filters</Button>
               </div>
               <SearchResult
                   img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0SnvZAYZYbTDM9AJ9DE-gvfkW7wOwQ8DOA&usqp=CAU" location="Private room in lakeside" title="Enjoy the nature" description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
                   star={4.73}
                   price="$30/night"
                   total="$117"
               />

<SearchResult
                   img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0SnvZAYZYbTDM9AJ9DE-gvfkW7wOwQ8DOA&usqp=CAU" location="Private room in lakeside" title="Enjoy the nature" description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
                   star={4.73}
                   price="$30/night"
                   total="$117"
               />

<SearchResult
                   img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0SnvZAYZYbTDM9AJ9DE-gvfkW7wOwQ8DOA&usqp=CAU" location="Private room in lakeside" title="Enjoy the nature" description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
                   star={4.73}
                   price="$30/night"
                   total="$117"
               />

<SearchResult
                   img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0SnvZAYZYbTDM9AJ9DE-gvfkW7wOwQ8DOA&usqp=CAU" location="Private room in lakeside" title="Enjoy the nature" description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
                   star={4.73}
                   price="$30/night"
                   total="$117"
               />


<SearchResult
                   img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0SnvZAYZYbTDM9AJ9DE-gvfkW7wOwQ8DOA&usqp=CAU" location="Private room in lakeside" title="Enjoy the nature" description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
                   star={4.73}
                   price="$30/night"
                   total="$117"
               />

<SearchResult
                   img="https://i.pinimg.com/originals/79/de/c4/79dec46c81c943e5199a6bc3b8eca40b.jpg"           location="jhamsikhel" title="boys meeting in style" description="-1 Hall -1 bedrooom -1 bed -wifi -kitchen -free parking"
                   star={4.73}
                   price="$30/night"
                   total="$117"
               />


               

        </div>
    )
}

export default SearchPage
