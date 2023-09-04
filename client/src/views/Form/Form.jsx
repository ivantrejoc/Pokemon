import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import validation from "./validation";
import { getTypes } from "../../redux/actions";
import "./form.css";
import axios from "axios";
import Background from "../../assets/background2.jpg";

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
    <div
      class="flex flex-col justify-center items-center bg-center bg-scroll absolute top-0 bottom-0 left-0 right-0 w-screen md:h-fit bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
      id="formulario"
    >
      <div class="flex flex-col mt-12 mb-5 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-yellow-300 rounded-lg shadow dark:border md:h-screen md:mt-24 md:mb-12 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 mb-1">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-2xl dark:text-white ">
              ¡Create a Pokemon!
            </h1>
            <form class="space-y-2 md:space-y-4 max-w-screen-sm md:max-h-full mx-auto" action="#">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeHandler}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Example: Pikachu"
                  required=""
                />
              </div>
              {errors.name ? (
                <span className="errors">{errors.name}</span>
              ) : null}
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="small_size"
                >
                  Sprites
                </label>
                <input
                  class="block w-full py-0 mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                />
              </div>
              {errors.sprites ? (
                <span className="errors">{errors.sprites}</span>
              ) : null}

              <div class=" ml-auto mr-auto items-center justify-center grid grid-cols-2">
              <div class="mb-0 flex-col">
                <label
                  for="life"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Life:
                </label>

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mx-w-xs py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  name="life"
                  min="0"
                  max="100"
                  value={input.life}
                  onChange={changeHandler}
                  placeholder="0"
                  required=""
                />
                {errors.life ? (
                <span class="mt-0 mb-0 text-gray-800 text-xs">
                  {errors.life}
                </span>
              ) : null}
              </div>
              
              <div class="mt-1">
                <label
                  for="attack"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Attack:
                </label>
                <input
                  type="number"
                  name="attack"
                  min="0"
                  max="100"
                  value={input.attack}
                  onChange={changeHandler}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mx-w-xs py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {errors.attack ? (
                <span class="mt-0 mb-0 text-gray-800 text-xs">
                  {errors.attack}
                </span>
              ) : null}
              <div class="mt-1">
                <label
                  for="defense"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Defense:
                </label>
                <input
                  type="number"
                  name="defense"
                  min="0"
                  max="100"
                  value={input.defense}
                  onChange={changeHandler}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mx-w-xs py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {errors.defense ? (
                <span class="mt-0 mb-0 text-gray-800 text-xs">
                  {errors.defense}
                </span>
              ) : null}

              <div class="mt-1">
                <label
                  for="speed"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Speed:
                </label>
                <input
                  type="number"
                  name="speed"
                  min="0"
                  max="100"
                  value={input.speed}
                  onChange={changeHandler}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mx-w-xs py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {errors.speed ? (
                <span class="mt-0 mb-0 text-gray-800 text-xs">
                  {errors.speed}
                </span>
              ) : null}

              <div class="mt-1">
                <label
                  for="weight"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Weight:
                </label>
                <input
                  type="number"
                  name="weight"
                  min="0"
                  max="100"
                  value={input.weight}
                  onChange={changeHandler}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mx-w-xs py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {errors.weight ? (
                <span class="mt-0 mb-0 text-gray-800 text-xs">
                  {errors.weight}
                </span>
              ) : null}
              <div class="mt-1">
                <label
                  for="height"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Height:
                </label>
                <input
                  type="number"
                  name="height"
                  min="0"
                  max="100"
                  value={input.height}
                  onChange={changeHandler}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block mx-w-xs py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {errors.height ? (
                <span class="mt-0 mb-0 text-gray-800 text-xs">
                  {errors.height}
                </span>
              ) : null}


                
              </div>
              
              <div class="mt-1">
                <label
                  for="types"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select types
                </label>
                <div class=" ml-auto mr-auto grid grid-rows-4 grid-cols-5 gap-5">
                  <div class="flex flex-row text-xs font-medium  text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="1"
                      value="normal"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="1">
                      normal
                    </label>
                  </div>
                  <div class="flex flex-row text-xs font-medium  text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="2"
                      value="fighting"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="2">
                      fighting
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="3"
                      value="flying"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="3">
                      flying
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="4"
                      value="poison"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="4">
                      poison
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="5"
                      value="ground"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="5">
                      ground
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="6"
                      value="rock"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="6">
                      rock
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="7"
                      value="bug"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="7">
                      bug
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="8"
                      value="ghost"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="8">
                      ghost
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="9"
                      value="steel"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="9">
                      steel
                    </label>{" "}
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="10"
                      value="fire"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="10">
                      fire
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="11"
                      value="water"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="11">
                      water
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="12"
                      value="grass"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="12">
                      grass
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="13"
                      value="electric"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="13">
                      electric
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="14"
                      value="psychic"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="14">
                      psychic
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="15"
                      value="ice"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="15">
                      ice
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="16"
                      value="dragon"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="16">
                      dragon
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="17"
                      value="dark"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="17">
                      dark
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="18"
                      value="fairy"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="18">
                      fairy
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      id="19"
                      value="unknown"
                      onClick={typeSelectHandler}
                    />
                    <label className="typeLabel" for="19">
                      unknown
                    </label>
                  </div>

                  <div class="flex flex-row text-xs font-medium text-gray-900">
                    <input
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
              </div>

              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
             
            </form>
          </div>
        </div>
      </div>

      {/*

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
      </form> */}
    </div>
  );
};

export default Form;
