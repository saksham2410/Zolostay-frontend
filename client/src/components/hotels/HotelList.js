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
                    isLoaded: true 
                }))
            })
            .catch(err=> console.log(err))
    }

    handleSearch = (search) => {
        const searchKey = search.toLowerCase()
    }

    fetchMoreData = () => {
        this.setState((prevState) => ({ 
            isNewHotelsLoading : !prevState.isLoad
         }))

        setTimeout((prevState) => {
            this.setState((prevState) => ({ 
                limit : prevState.limit + 10 ,
                hotels: prevState.hotels.slice(0,prevState.limit + 10)
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
                                    dataLength={this.state.hotels.length}
                                    next={this.fetchMoreData}
                                    hasMore={true}
                                >
                                { 
                                    this.state.hotels.map(hotel => {
                                        return (
                                       <HotelItem key={hotel._id} id={hotel._id} name={hotel.name} address={hotel.address} city={hotel.city} />
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