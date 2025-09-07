
const comparisons = [
    {
        name: "image1",
        baseline: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01afb14f-8316-41a4-a624-bd3b80634dfc",
        implementation: "https://s3muccepht.infineon.com/visualverifier/candidates/a8f52d22-3efd-40fa-b9cf-2a359accfcdc/visual-artifact.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=SO6UTD7307PAV4KMB6H1%2F20250907%2Feu-muc%2Fs3%2Faws4_request&X-Amz-Date=20250907T000700Z&X-Amz-Expires=86400&X-Amz-Signature=27ac011fb285734660213fd996e935e80f36864b1b04c86f29e9519fa40f9596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        backgroundColor: "#ffffff"
    },
    {
        name: "image1",
        baseline: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01afb14f-8316-41a4-a624-bd3b80634dfc",
        implementation: "https://s3muccepht.infineon.com/visualverifier/candidates/a8f52d22-3efd-40fa-b9cf-2a359accfcdc/visual-artifact.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=SO6UTD7307PAV4KMB6H1%2F20250907%2Feu-muc%2Fs3%2Faws4_request&X-Amz-Date=20250907T000700Z&X-Amz-Expires=86400&X-Amz-Signature=27ac011fb285734660213fd996e935e80f36864b1b04c86f29e9519fa40f9596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        backgroundColor: "#ffffff"
    }
]

const surveyJson = {
    pages: [
        {
            name: "page1",
            title: "Image Comparison Survey",
            elements: [
                {
                    name: "introduction",
                    type: "html",
                    html: `
                        <p>
                            My thesis is coming to an end, and I am now in the evaluation phase.
                        </p>
                        <p>
                            In this survey, you will see pairs of images (design vs. implementation). 
                            <br>
                            For each pair, please judge whether the implementation looks visually correct compared to the reference.
                        </p>
                        <p>
                            The survey takes about 5-10 minutes to complete.
                            Please submit your answers by 13.09.
                        </p>
                        <p>
                            Your feedback is extremely valuable for my work, and I am very grateful for your time and support. Thank you! 🙏
                        </p>
                    `,
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                }
            ]
        },
        {
            name: "demographics",
            title: "Demographics",
            elements: [
                {
                    name: "role",
                    title: "What best describes your role?",
                    type: "dropdown",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer.",
                    choices: [
                        "Software Developer",
                        "Designer",
                        "Product Manager",
                        "Other"
                    ]
                },
                {
                    name: "experience",
                    title: "How many years of experience do you have in software or design?",
                    type: "dropdown",
                    choices: [
                        { value: "<1", text: "Less than 1 year" },
                        { value: "1-3", text: "1-3 years" },
                        { value: "3-5", text: "3-5 years" },
                        { value: "5-10", text: "5-10 years" },
                        { value: "10+", text: "More than 10 years" }
                    ],
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                }
            ]
        },
        ...comparisons.map(comparison => ({
            elements: [{
                    name: `${comparison.name}`,
                    title: "Compare these two images:",
                    type: "html",
                    html: `
                        <style>
                            img {
                                background-color: ${comparison.backgroundColor};
                            }

                            img-comparison-slider {
                                width: 100%;
                                max-width: 600px;
                            }
                            img-comparison-slider img {
                                width: 100%;
                                height: auto; /* Maintains aspect ratio */
                            }
                        </style>
                        <div class="sd-element--with-frame sd-element" style="display: flex; flex-direction: column; align-items: center;">
                            <img-comparison-slider>
                                <img slot="first" src="${comparison.baseline}" />
                                <img slot="second" src="${comparison.implementation}" />
                            </img-comparison-slider>
                            <div style="width: 100%; display: flex; justify-content: space-between; margin-top: 10px;">
                                <p>Design</p>
                                <p>Implementation</p>
                            </div>
                        </div>
                    `
                },
                {
                    name: "image1",
                    title: "Is this implementation visually consistent with the design?",
                    rateValues: [
                        { value: 1, text: "Strong Yes" },
                        { value: 2, text: "Yes" },
                        { value: 3, text: "Unsure" },
                        { value: 4, text: "No" },
                        { value: 5, text: "Strong No" }
                    ],
                    type: "rating",
                    rateType: "labels",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                }
            
            ],
        }))
    ],
    firstPageIsStartPage: true,
    showNavigationButtons: true,
    showPrevButton: true,
    completeText: "Submit",
    startSurveyText: "Start Survey",
    // cookieName: "visualverifier_survey",
};

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyElement"));
});

function surveyComplete (survey) {
    const userId = "user-" + Math.random().toString(36).substring(2, 15);
    survey.setValue("userId", userId);

    const payload = {
        postId: userId,
        surveyResult: survey.data
    };

    saveSurveyResults(
        "/api/post",
        payload
    )
}

function saveSurveyResults(url, json) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(json)
    })
    .then(response => {
        if (response.ok) {
            cconsole.log("Survey results saved successfully.");
            // Handle success
        } else {
            console.error("Error saving survey results.");
            // Handle error
        }
    })
    .catch(error => {
        console.error("Error saving survey results:", error);
        // Handle error
    });
}
const survey = new Survey.Model(surveyJson);
survey.onComplete.add(surveyComplete);