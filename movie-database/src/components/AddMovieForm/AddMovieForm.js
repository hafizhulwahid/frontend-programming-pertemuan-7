import { nanoid } from "nanoid";
import { useState }from "react";
import styles from "./AddMovieForm.module.css";


function AddMovieForm(props) {
  const {movies, setMovies} = props;
  const [title, setTitle] = useState("");
  const [isTitleError, setisTitleError] = useState(false);
  const [date, setDate] = useState("");
  const [isDateError, setisDateError] = useState(false);

  function handleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleInputDate(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newMovie = {
      id : nanoid,
      title : title,
      date : date,
      type : "Movie",
      poster : "https://picsum.photos/300/400",
    };
  }

    return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
          className={styles.form__image}
          src="https://picsum.photos/536/354"
          alt="placeholder"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form onSubmit={handleSubmit}>
            <label className={styles.form__label} for="title">Title</label><br />
            <input className={styles.form__input} type="text" id="title" value={title} onChange={handleInputChange} /><br />
            {isTitleError ? <p></p> : "" } <br />
            <label className={styles.form__label} for="year">Year</label><br />
            <input className={styles.form__input} type="text" id="date" value={date} onChange={handleInputDate} /><br /><br />
            <button className={styles.form__button} >Submit</button>
          </form>
        </div>
      </section>
    </div>
    );
}

export default AddMovieForm;

