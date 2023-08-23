import { reducerCases } from "./Constants";

export const initialState = {
    airing: [],
    episode: [],
    featured: [],
    info: [],
    featuredEpisode: []
}


const reducer = (state,action) => {
    switch (action.type) {
        case reducerCases.SET_FEATURED : {
            return{
                ...state, 
                featured: action.featured
            }
        }
        case reducerCases.SET_RECENT_EPISODE : {
            return{
                ...state, 
                episode: action.episode
            }
        }
        case reducerCases.SET_TOP_AIRING : {
            return{
                ...state, 
                airing: action.airing
            }
        }
        case reducerCases.SET_INFO : {
            return{
                ...state, 
                info: action.info
            }
        }
        case reducerCases.SET_EPISODE : {
            return{
                ...state, 
                featuredEpisode: action.featuredEpisode
            }
        }
        default:
            return state
    }
}

export default reducer