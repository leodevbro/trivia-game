import * as actions from "../actions/statementsActions";

export interface IStatement {
    category: string;
    type: string;
    difficulty: "easy" | "hard";
    question: string;
    correct_answer: boolean;
    answerOfUser?: boolean;
}

export interface IStatementsState {
    statements: IStatement[];
    loading: boolean;
    hasErrors: boolean;
}

export const initialStateOfStatements: IStatementsState = {
    statements: [],
    loading: false,
    hasErrors: false,
};

interface IAnswer {
    statementIndex: number;
    answer: boolean;
}

const statementsReducer = (
    state: IStatementsState = initialStateOfStatements,
    action: { type: string; payload?: IStatement[] | IAnswer }
) => {
    switch (action.type) {
        case actions.GET_STATEMENTS:
            return { ...state, loading: true };
        case actions.GET_STATEMENTS_SUCCESS:
            return {
                statements: action.payload,
                loading: false,
                hasErrors: false,
            };
        case actions.GET_STATEMENTS_FAILURE:
            return { ...state, loading: false, hasErrors: true };
        case actions.ANSWER_STATEMENT:
            const currPayLoad = action.payload as IAnswer;
            return {
                loading: false,
                hasErrors: true,
                statements: state.statements.map((statement, i) => {
                    if (currPayLoad.statementIndex === i) {
                        return {
                            ...statement,
                            answerOfUser: currPayLoad.answer,
                        };
                    } else {
                        return { ...statement };
                    }
                }),
            };
        case actions.EMPTY_STATEMENTS_ARRAY:
            return { ...state, statements: [] };
        default:
            return state;
    }
};

export default statementsReducer;
