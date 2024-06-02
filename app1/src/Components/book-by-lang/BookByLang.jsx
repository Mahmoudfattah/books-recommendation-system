import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBooksByLang } from "./apis";

const BookByLang = () => {
  const { id } = useParams();
  const [books, setBooks] = useState();
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    if (id && !books) {
      getBooksByLang({ id, setBooks, setStatus });
    }
  }, [id]);
  console.log(books);
  const renderElements = () => {
    if (status === "loading") {
      return "loading...";
    } else if (status === "success") {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
            gap: "10px",
            padding: "20px 10px",
          }}
        >
          {books && books.length > 0
            ? books.map((books) => {
                return (
                  <div key={books.id} className="col-md-3 mb-3">
                    <div className="books p-3 cursor-pointer">
                      <Link to={"/books/" + books.id} className="books">
                        <img src={books.imgCover} className="w-75" alt="" />
                        {/* <img src={image4} className='w-100'/> */}
                      </Link>
                      <div className="col-md-8 ">
                        <p className="mb-0">{books.title}</p>
                        {/* <p className="mb-0">{books.slug}</p> */}
                        <Link to={"/books/" + books.id} className="books">
                          <button className="btn bg-main text-white mt-2 ">
                            Read Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            : "no books for this language"}
        </div>
      );
    } else if (status === "failed") {
      return "error happend !!!";
    }
  };
  return <div>{renderElements()}</div>;
};

export default BookByLang;
