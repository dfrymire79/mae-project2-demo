const React = require('react');
const Default = require('./Default');

class BookShow extends React.Component {
    render() {

        const { _id, title, genre, yearReleased, dateFinished, img, review, rating } = this.props.book;

         return (
             <Default>
             <div>
                 <div className="header">
                    <h1>{title}</h1>
                 </div>
                 {/* <div className="show-image">
                 {img}
                 </div> */}
                 <div className="book-info">
                     Genre: {genre}<p/>
                     Year Released: {yearReleased}<p/>
                     Date Finished: {dateFinished}<p/>
                </div>
                <div className="review">
                    <h3>Review</h3>
                    Rating: {rating}<p/>
                    <div className="review-body">
                        {review}
                    </div>
                    <div className="edit-delete-form">
                    <form action={`/books/${_id}/edit`}>
                    <input type="submit" value='Edit'/>
                    </form>
                    <form action={`/books/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete from Journal"/>
                    </form>
                    </div>
                </div>
    

            
             </div>
             </Default>
         )
    }
}

module.exports = BookShow;