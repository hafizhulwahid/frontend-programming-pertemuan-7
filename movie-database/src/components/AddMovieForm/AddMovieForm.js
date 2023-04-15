import { nanoid } from "nanoid";
import { useState }from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";


function AddMovieForm(props) {
  const {movies, setMovies} = props;
  const [title, setTitle] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [date, setDate] = useState("");
  const [isDateError, setIsDateError] = useState(false);
  const [pict, setPict] = useState("");

  const [type, setType] = useState("");

  const options = [
    {
      label: "Action",
      value: "action",
    },
    {
      label: "Drama",
      value: "drama",
    },
    {
      label: "Horror",
      value: "horror",
    },
    {
      label: "Comedy",
      value: "comedy",
    },
  ];

  function handleInputChange(event) {
    setTitle(event.target.value);
    // console.log("Title");
    // console.log(event.target.value);
  }

  function handleInputDate(event) {
    setDate(event.target.value);
  }

  function handleInputPict(event) {
    setPict(event.target.value);
  }

  function handleInputType(event) {
    setType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (title == "") {
      setIsTitleError(true);
    } else if (date == "") {
      setIsTitleError(false);
      setIsDateError(true);
    } else {
      const movie = {
        id : nanoid,
        title : title,
        date : date,
        type : type,
        poster : pict,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      // console.log(movie);
    }

    // console.log(movie);
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
            {isTitleError && <Alert>Title Wajib Di Isi !</Alert>} <br />
            <label className={styles.form__label} for="year">Year</label><br />
            <input className={styles.form__input} type="text" id="date" value={date} onChange={handleInputDate} /><br /><br />
            {isDateError ? <p>Tahun Wajib Di Isi !</p> : "" } <br />
            <label className={styles.form__label} for="link">Link Gambar</label><br />
            <input className={styles.form__input} type="text" id="pict" value={pict} onChange={handleInputPict} /><br /><br />
            <label className={styles.form__label} for="link">Type Movie</label><br />
            <select className={styles.form__select} onChange={handleInputType}>
            {options.map((option) => (
              <option value={option.value}  onChange={handleInputType} >{option.label}</option>
            ))}
            </select><br /><br />
            <button className={styles.form__button} >Submit</button>
          </form>
        </div>
      </section>
    </div>
    );
}

export default AddMovieForm;

