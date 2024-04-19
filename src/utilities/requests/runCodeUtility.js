import axiosInstance from "../../axiosInstance";

export const runCodeRequest = async (encoded, language) => {
    const response = await fetch(
        "https://jobify-upload.onrender.com/submit-code",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                source_code: encoded,
                language_id: Number(language),
                stdin: "",
                compiler_options: "",
                command_line_arguments: "",
                redirect_stderr_to_stdout: true,
            }),
        }
    ).then(response => response.json());
    return response;
}

export const reviewSubmit = async (reviewsData) =>
    await axiosInstance
        .post("jobify/apis/candidates/reviews/submit", reviewsData)

export const submitSolution = async (solutionCode) =>
    await axiosInstance.post(
        "jobify/apis/candidates/solutions/submit",
        solutionCode
    );

export const runCodeAndSubmitRequest = async (encodedCode, languageId) =>
    await fetch(
        "https://jobify-upload.onrender.com/submit-code",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                source_code: encodedCode,
                language_id: Number(languageId),
                stdin: "",
                compiler_options: "",
                command_line_arguments: "",
                redirect_stderr_to_stdout: true,
            }),
        }
    );