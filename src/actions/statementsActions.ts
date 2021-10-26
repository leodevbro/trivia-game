import { IStatement } from "../reducers/statementsReducer";

// These are names of actions
export const GET_STATEMENTS = "GET_STATEMENTS";
export const GET_STATEMENTS_SUCCESS = "GET_STATEMENTS_SUCCESS";
export const GET_STATEMENTS_FAILURE = "GET_STATEMENTS_FAILURE";

export const ANSWER_STATEMENT = "ANSWER_STATEMENT";
export const EMPTY_STATEMENTS_ARRAY = "EMPTY_STATEMENTS_ARRAY";

// These functions are action creators

export const emptyStatementsArray = () => ({
    type: EMPTY_STATEMENTS_ARRAY,
});

export const answerStatement = (statementIndex: number, answer: boolean) => ({
    type: ANSWER_STATEMENT,
    payload: { statementIndex, answer },
});

export const getStatements = () => ({
    type: GET_STATEMENTS,
});

export const getStatementsSuccess = (statements: IStatement[]) => ({
    type: GET_STATEMENTS_SUCCESS,
    payload: statements,
});

export const getStatementsFailure = () => ({
    type: GET_STATEMENTS_FAILURE,
});

function decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// Combine them all in an asynchronous thunk
export const fetchStatements = async ({
    dispatch,
    difficulty,
    amount,
}: {
    dispatch: (...args: any[]) => any;
    difficulty: "easy" | "hard";
    amount: number;
}) => {
    dispatch(getStatements());

    if (amount > 10) amount = 10;
    if (amount < 1) amount = 1;

    try {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`
        );
        const data = (await response.json()) as {
            response_code: number;
            results: {
                category: string;
                type: string;
                difficulty: "easy" | "hard";
                question: string;
                correct_answer: "False" | "True";
            }[];
        };

        const data2: IStatement[] = data.results.map((x) => ({
            ...x,
            question: decodeHtml(x.question),
            correct_answer: x.correct_answer === "True" ? true : false,
        }));
        dispatch(getStatementsSuccess(data2));
    } catch (error) {
        dispatch(getStatementsFailure());
    }
};
