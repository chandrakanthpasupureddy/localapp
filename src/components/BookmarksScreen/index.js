import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import "./index.css"
class BookmarksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
  }

  componentDidMount() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    this.setState({ bookmarks });
  }
  removeBookmark = (jobId) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks = bookmarks.filter((job) => job.id !== jobId);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    this.setState({ bookmarks });
  };
  render() {
    const { bookmarks } = this.state;

    return (
      <div>
      <Header/>
      <div className='bookmarks-container'>
        <h2>Bookmarked Jobs</h2>
        {bookmarks.length === 0 ? (
          <p className='no-bookmarks'>No bookmarks yet.</p>
        ) : (
          bookmarks.map((job) => (
            <div key={job.id} className="job-card">
              <Link to={{ pathname: `/job/${job.id}`, state: { job } }}>
              <h3>{job.title}</h3>
                    <p>Location : {job.jobLocation}</p>
                    <p>Salary : {job.salaryMax} - {job.salaryMin}</p>
                    <p>Contact : {job.phoneData}</p>  
              </Link>
              <button onClick={() => this.removeBookmark(job.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      </div>
    );
  }
}

export default BookmarksScreen;
