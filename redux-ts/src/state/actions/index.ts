import { ActionType } from "../action-types/";

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
    payload?: string;
}

interface SearchRepositoriesSucessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSucessAction | SearchRepositoriesErrorAction;