import React from 'react' 
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import Spinner from '../commons/Spinner'
import StarRating from '../commons/StarRating'

class HotelShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            displayAlert : false,
            hotel: {},
            isLoaded: false,
            viewForm : false,
            name:'',
            email:'',
            mobile:'',
            noGuests: 0 ,
            checkInDate : '',
            checkOutDate :''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`/hotels/${id}`)
            .then(response => {
                this.setState(() => ({
                    hotel: response.data, 
                    isLoaded: true

                }))
            })
            .catch(err => console.log(err))      
    }

    
    handleForm = (e) => {
        e.preventDefault()
        const formData = {
            hotelName:this.state.hotel.name,
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            noOfGuests: this.state.noGuests,
            checkInDate : this.state.checkInDate,
            checkOutDate :this.state.checkOutDate
        }

        axios.post('/bookings',formData)
            .then((response) => {
                alert('Room booked')
                this.props.history.push('/')
            })
            .catch(err => console.log(err))

    }

    handleBook = () => {
        if(localStorage.getItem('token')){
            this.setState((prevState) => ({viewForm: !prevState.viewForm}))
        }
        else{
            // setTimeout(() => {
            //     this.setState(()=>({
            //         displayAlert : false
            //     }))
            // }, 2000);
            
            this.setState(()=>({
                displayAlert : true
            }))
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        return(
            <div>
                { this.state.isLoaded ? (
                    <div className="mt-5">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{this.state.hotel.name}</h1><StarRating rating={this.state.hotel.reviews[0].rating} />
                            <p className="lead">{this.state.hotel.categories}   </p>
                          
                            <p>
                            <button className="btn btn-primary" onClick={this.handleBook} >
                                Book rooms
                            </button>
                            { this.state.displayAlert && <span className="alert alert-danger alert-dismissible ml-2">Please login to book rooms
                            <Link to={`/users/signin`}>Click here to login</Link></span> }
                
                            </p>
                            </div>
                           { this.state.viewForm && 
                            (<div>
                             <form className="border ml-5 mr-5" onSubmit={this.handleForm}>
                                <div className="row mb-2 ">
                                    <div className="col">
                                    <input type="text" className="form-control"  name="name"
                                            value={this.state.name} onChange={this.handleChange}  placeholder="Name" />
                                    </div>
                                    <div className="col">
                                    <input type="email" className="form-control" name="email"
                                            value={this.state.email} onChange={this.handleChange}  placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col">
                                    <input type="text" className="form-control" name="mobile"
                                            value={this.state.mobile} onChange={this.handleChange} placeholder="Mobile number" />
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" name="noGuests"
                                            value={this.state.noGuests} onChange={this.handleChange}  placeholder="No of guests" />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col">
                                    <input type="date" className="form-control" name="checkInDate"
                                            value={this.state.checkInDate} onChange={this.handleChange} placeholder="Check-In date" />
                                    </div>
                                    <div className="col">
                                    <input type="date" className="form-control" name="checkOutDate"
                                            value={this.state.checkOutDate} onChange={this.handleChange}  placeholder="Check-out-date" />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                <div className="col-md-8 offset-2">
                                <button className="btn btn-primary">Book</button>
                                </div>
                                </div>
                             </form>
                            </div>)
                           }
                            
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="https://www.fariyas.com/hotel-in-mumbai/wp-content/uploads/sites/3/2018/05/IMG_3817-HDR.jpg-new.jpg" alt="First slide" style={{ height:"250px", width:"250px", padding:"20px"}} />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hotel-michael/hotelmichael-deluxeking.jpg" alt="Second slide" style={{ height:"250px", width:"250px", padding:"20px"}} />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="https://www.fariyas.com/hotel-in-mumbai/wp-content/uploads/sites/3/2018/05/IMG_3817-HDR.jpg-new.jpg" alt="Third slide" style={{ height:"250px", width:"250px", padding:"20px"}} />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                            <div className="ml-4">
                                <h1>Reviews</h1>
                                <h3>{this.state.hotel.reviews[0].username}</h3>
                                <p>{this.state.hotel.reviews[0].text}</p>
                            </div>
                                
                           
                        </div>
                    </div>
                   
                ) : <Spinner /> }
            </div>
        )
    }
}

export default HotelShow