import React, { Component, Fragment } from 'react'
import './contact.css'
class htmlFormContact extends Component {
  state = {
    name: '',
    email: '',
    msg: '',
  }

  render() {
    return (
      <Fragment >
        <form className="contact">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input  name="name" type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Message</label>
            <textarea name="msg" className="form-control" id="exampleInputPassword1" placeholder="Message" ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </Fragment>
    )
  }
}
export default htmlFormContact
