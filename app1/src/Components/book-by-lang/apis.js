import axios from "axios";

export const getBooksByLang = async ({ setBooks, setStatus, id }) => {
  try {
    setStatus("loading");
    const response = await axios.get(
      `https://bookify-new.onrender.com/api/v1/language/${id}/book`
    );

    if (response.status === 200) {
      setStatus("success");
      setBooks(response.data.books);
    }
  } catch (error) {
    setStatus("failed")
  }
};
