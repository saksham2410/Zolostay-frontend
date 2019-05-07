import React from 'react'

class HotelSearch extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            search : ''
        }
    }

    handleChange = (e) => {
        const search = e.target.value
        this.setState(() => ({search}))
        this.props.handleSearch(search)
    }
    
    render() {
        return (
            <div>
                <form className="mt-2 ">
                <div className="form-group has-feedback">
            		<label className="sr-only">Search</label>
            		<input type="search" value={this.state.search} onChange={this.handleChange} className="form-control" name="search" id="search" placeholder="Search hotels by name,city and categories" />
              		<span className="glyphicon glyphicon-search form-control-feedback"></span>
            	</div>
                </form>
            </div>
        )
    }
}

export default HotelSearch