import React from 'react' 
import axios from '../../config/axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import Spinner from '../commons/Spinner'
import HotelItem from './HotelItem'
import HotelSearch from './HotelSearch'


class HotelList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hotels: [],
            hotelsDesc:[],
            filteredHotels:[],
            limit:10,
            isLoaded: false,
            isNewHotelsLoading : false 
        }
    }

    componentDidMount () {
        axios.get('/hotels')
            .then(response => {
                this.setState(() => ({
                    hotels: response.data,
                    hotelsDesc: response.data.sort(function(a, b){return a.reviews[0].rating - b.reviews[0].rating}),
                    filteredHotels:response.data.sort(function(a, b){return b.reviews[0].rating - a.reviews[0].rating}).slice(0,10),
                    isLoaded: true 
                }))
            })
            .catch(err=> console.log(err))
    }

    handleSearch = (search) => {
        const searchKey = search.toLowerCase()
        this.setState((prevState) => ({
            filteredHotels : prevState.hotels.filter(hotel => {
                return (hotel.name.toLowerCase().includes(searchKey) || hotel.city.toLowerCase().includes(searchKey) || hotel.categories.toLowerCase().includes(searchKey))
            })
        }))
    }

    handleFilter = (value) => {
        console.log('here')
        if(value === 'highToLow')
        {
            this.setState((prevState) => ({
                filteredHotels : prevState.hotels.slice(0,10)
            }))
        }else{
            this.setState((prevState) => ({
                filteredHotels : prevState.hotelsDesc.slice(0,10)
            })) 
        }
        
    }

    fetchMoreData = () => {
        this.setState((prevState) => ({ 
            isNewHotelsLoading : !prevState.isLoad
         }))

        setTimeout((prevState) => {
            this.setState((prevState) => ({ 
                limit : prevState.limit + 10 ,
                filteredHotels: prevState.hotels.slice(0,prevState.limit + 10)
            }))
        }, 1000)
      }



    render(){
        return (
            <div >
                <div className="row mt-5" style={{height:"100%", width:"100%"}}>
                    <div >
                    {
                        this.state.isLoaded ? (
                            <div>
                                <div className="row" >
                                <div className="col-md-8">
                                <HotelSearch handleSearch={this.handleSearch}  />
                                </div>
                                </div>
                                <ul>
                                <InfiniteScroll
                                    dataLength={this.state.filteredHotels.length}
                                    next={this.fetchMoreData}
                                    hasMore={true}
                                    loader={ this.state.filteredHotels.length === this.state.hotels.length ? 
                                       <h2>That's all with us </h2>
                                    :  <h4>Loading...<Spinner /></h4>}
                                >
                                { 
                                    this.state.filteredHotels.map(hotel => {
                                        return (
                                       <HotelItem key={hotel._id} id={hotel._id} name={hotel.name} address={hotel.address} city={hotel.city} reviews={hotel.reviews} 
                                       categories={hotel.categories}/>
                                        )
                                    })
                                }
                               </InfiniteScroll>
                                </ul>
                                <div className="row">
                                {/* <div className="col-md-8 offset-md-2">{ this.state.isNewPostsLoading ?  <Spinner /> : <p> </p>} </div> */}
                                 
                                </div>
                                <div className="row">
                                {/* <div className="col-md-8 offset-md-2 mb-3">
                                <button className="btn btn-block btn-outline-dark" onClick = {this.handleSeeMore} > See more </button>
                                </div> */}
                                </div>
                            </div>
                            ) : <Spinner />
                    }
                    </div>

                </div>
            </div>
        )
    }
}

export default HotelList