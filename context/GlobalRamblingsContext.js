import axios from "axios";
import { createContext, useContext } from "react";

//initial idea for storing data on the posts (host manifest file in public)
//will require careful updating of the manifest. Could get large depending on data size
//Will hold info on post locations (further under public?) and category counts
//Need to worry about caching?
export function getGlobalRamblingsRequest(){
    return axios.get("/docs-manifest.json").then(data => data).catch(() => null);
}

export const GlobalRamblingsContext = createContext({});

export const useGlobalRamblingsContext = () => {
    return useContext(GlobalRamblingsContext);
};
