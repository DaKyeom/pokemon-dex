import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
