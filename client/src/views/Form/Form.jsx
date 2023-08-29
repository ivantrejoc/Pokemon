import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import validation from "./validation";
import { getTypes } from "../../redux/actions";
import "./form.css";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    sprites: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    sprites: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const changeHandler = (event) => {
    //CONTROLA EL FORMULARIO
    const property = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [property]: value });
    setErrors({
      ...errors,
      [property]: validation({ ...input, [property]: value })[property],
    }); //validaciones por cada onchange de cada input
  };

  const typeSelectHandler = (e) => {
    //CONTROLA LA SELECCIÓN DE TIPO DE POKEMONS
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  };

  const resetForm = () => {
    setInput({
      name: "",
      sprites: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });

    setErrors({
      name: "",
      sprites: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
    });
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const submitHandler = (event) => {
    event.preventDefault(); //PREVIENE ERRORES EXTRAÑOS
    axios
      .post("http://localhost:3001/pokemons", input)
      .then((res) => {
        alert("¡Pokemon creado satisfactoriamente");
        resetForm();
        navigateHome();
      })
      .catch((err) => alert(err));
  };

  

  return (
    <div className="form" id="formulario">
      <h1 className="formTitle"> ¡Create a Pokemon!</h1>
      <form className="formContainer" onSubmit={submitHandler}>
        <div className="pokemonStats">
          <div className="statsInputs">
            <label className="labels">Name:</label>
            <input
              className="largeInput"
              type="text"
              name="name"
              value={input.name}
              onChange={changeHandler}
            />
          </div>
          {errors.name ? <span className="errors">{errors.name}</span> : null}
          <div className="statsInputs">
            <label className="labels">Sprites:</label>
            <input
              className="largeInput"
              type="text"
              name="sprites"
              value={input.sprites}
              onChange={changeHandler}
            />
          </div>
          {errors.sprites ? (
            <span className="errors">{errors.sprites}</span>
          ) : null}

          <div className="statsInputs">
            <label className="labels">Life:</label>
            <input
              className="inputs"
              type="number"
              name="life"
              min="0"
              max="100"
              value={input.life}
              onChange={changeHandler}
            />
          </div>

          {errors.life ? <span className="errors">{errors.life}</span> : null}

          <div className="statsInputs">
            <label className="labels">Attack:</label>
            <input
              className="inputs"
              type="number"
              name="attack"
              min="0"
              max="100"
              value={input.attack}
              onChange={changeHandler}
            />
          </div>
          {errors.attack ? (
            <span className="errors">{errors.attack}</span>
          ) : null}

          <div className="statsInputs">
            <label className="labels">Defense:</label>
            <input
              className="inputs"
              type="number"
              name="defense"
              min="0"
              max="100"
              value={input.defense}
              onChange={changeHandler}
            />
          </div>
          {errors.defense ? (
            <span className="errors">{errors.defense}</span>
          ) : null}

          <div className="statsInputs">
            <label className="labels">Speed:</label>
            <input
              className="inputs"
              type="number"
              name="speed"
              min="0"
              max="100"
              value={input.speed}
              onChange={changeHandler}
            />
          </div>
          {errors.speed ? <span className="errors">{errors.speed}</span> : null}

          <div className="statsInputs">
            <label className="labels">Height:</label>
            <input
              className="inputs"
              type="number"
              name="height"
              min="0"
              max="100"
              value={input.height}
              onChange={changeHandler}
            />
          </div>
          {errors.height ? (
            <span className="errors">{errors.height}</span>
          ) : null}

          <div className="statsInputs">
            <label className="labels">Weight:</label>
            <input
              className="inputs"
              type="number"
              name="weight"
              min="0"
              max="100"
              value={input.weight}
              onChange={changeHandler}
            />
          </div>
          {errors.weight ? (
            <span className="errors">{errors.weight}</span>
          ) : null}
        </div>

        <div className="typesContainer">
          <label className="labels">Types:</label>
          <div className="typesForm">
            <input
              className="checkInputs"
              type="checkbox"
              id="1"
              value="normal"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="1">
              normal
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="2"
              value="fighting"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="2">
              fighting
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="3"
              value="flying"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="3">
              flying
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="4"
              value="poison"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="4">
              poison
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="5"
              value="ground"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="5">
              ground
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="6"
              value="rock"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="6">
              rock
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="7"
              value="bug"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="7">
              bug
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="8"
              value="ghost"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="8">
              ghost
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="9"
              value="steel"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="9">
              steel
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="10"
              value="fire"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="10">
              fire
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="11"
              value="water"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="11">
              water
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="12"
              value="grass"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="12">
              grass
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="13"
              value="electric"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="13">
              electric
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="14"
              value="psychic"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="14">
              psychic
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="15"
              value="ice"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="15">
              ice
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="16"
              value="dragon"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="16">
              dragon
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="17"
              value="dark"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="17">
              dark
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="18"
              value="fairy"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="18">
              fairy
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="19"
              value="unknown"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="19">
              unknown
            </label>

            <input
              className="checkInputs"
              type="checkbox"
              id="20"
              value="shadow"
              onClick={typeSelectHandler}
            />
            <label className="typeLabel" for="20">
              shadow
            </label>
          </div>
        </div>

        {input.name &&
        input.sprites &&
        input.attack &&
        input.defense &&
        input.height &&
        input.life &&
        input.weight &&
        input.types.length > 0 ? (
          <button type="submit" className="submitButton">
            ¡Create Pokemon!
          </button>
        ) : (
          <button disabled>¡Create Pokemon!</button>
        )}
      </form>
    </div>
  );
};

export default Form;
