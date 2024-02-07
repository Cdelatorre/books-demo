import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const BookCard = ({ id, title, abstract, cover, genres, onClick = () => { } }) => {
  const { addProduct } = useContext(CartContext)

  return (
    <div className="card h-100">
      <img src={cover} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text line-clamp">{abstract}</p>
        {genres && genres.length > 0
          ? (
            <div className="d-flex gap-2">
              {genres.map((genre, i) => (
                <span className="badge bg-secondary" key={i}>
                  {genre}
                </span>
              ))}
            </div>
          ) : null
        }
        <div className="mt-2">
          <Link to={`/books/${id}`} className="btn btn-primary" onClick={onClick}>
            Ver más detalles
          </Link>
        </div>
        <div className="mt-2">
          <button onClick={() => {
            addProduct(title)
          }}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
