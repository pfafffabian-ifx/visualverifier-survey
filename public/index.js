
const comparisons = [
    {
        name: "ifx-checkbox-m-checked-indeterminate",
        baseline: "/images/checkbox/ifx-checkbox-m-checked-indeterminate_baseline.png",
        implementation: "/images/checkbox/ifx-checkbox-m-checked-indeterminate_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-checkbox-s-checked",
        baseline: "/images/checkbox/ifx-checkbox-s-checked_baseline.png",
        implementation: "/images/checkbox/ifx-checkbox-s-checked_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-checkbox-m-unchecked-disabled",
        baseline: "/images/checkbox/ifx-checkbox-m-unchecked-disabled_baseline.png",
        implementation: "/images/checkbox/ifx-checkbox-m-unchecked-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-checkbox-s-unchecked-error",
        baseline: "/images/checkbox/ifx-checkbox-s-unchecked-error_baseline.png",
        implementation: "/images/checkbox/ifx-checkbox-s-unchecked-error_candidate.png", // TODO: Missing
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-dropdownmenu-s",
        baseline: "/images/dropdownmenu/ifx-dropdownmenu-s_baseline.png",
        implementation: "/images/dropdownmenu/ifx-dropdownmenu-s_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-dropdownmenu-m-icon",
        baseline: "/images/dropdownmenu/ifx-dropdownmenu-m-icon_baseline.png",
        implementation: "/images/dropdownmenu/ifx-dropdownmenu-m-icon_candidate.png",
        backgroundColor: "#ffffff"
    }
]

function invertColor(hex) {
  const color = hex.slice(1); // remove '#'
  const num = parseInt(color, 16);
  const inverted = (0xFFFFFF ^ num).toString(16).padStart(6, '0');
  return `#${inverted}`;
}

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
                        "Software Development / Engineering",
                        "UX / Design",
                        "Product or Project Management",
                        "Communications / Marketing",
                        "Other"
                    ]
                },
                {
                    name: "roleOther",
                    title: "Please specify your role",
                    type: "text",
                    visibleIf: "{role} = 'Other'",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: "experience",
                    title: "How many years of experience do you have in software or design?",
                    type: "dropdown",
                    choices: [
                        { value: "0-1", text: "Less than 1 year" },
                        { value: "1-3", text: "1-3 years" },
                        { value: "3-5", text: "3-5 years" },
                        { value: "5-10", text: "5-10 years" },
                        { value: "10+", text: "More than 10 years" }
                    ],

                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: "reviewExperience",
                    title: "How familiar are you with reviewing design implementations?",
                    type: "dropdown",
                    choices: [
                        { value: "1", text: "Not at all" },
                        { value: "2", text: "Somewhat" },
                        { value: "4", text: "Very" },
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
                                --divider-color: ${invertColor(comparison.backgroundColor)};
                                --default-handle-color: ${invertColor(comparison.backgroundColor)};
                                --divider-width: 2px;
                            }
                            img-comparison-slider img {
                                width: 100%;
                                height: auto; /* Maintains aspect ratio */
                                object-fit: contain;
                            }

                            img-comparison-slider:focus {
                                outline: none;    
                            }
                        </style>
                        <script>
                            // Watch for when sliders are added to the DOM
                            const observer = new MutationObserver((mutations) => {
                                mutations.forEach((mutation) => {
                                    mutation.addedNodes.forEach((node) => {
                                        if (node.nodeType === 1) { // Element node
                                            const sliders = node.querySelectorAll ? 
                                                node.querySelectorAll('img-comparison-slider') : [];
                                            
                                            // Also check if the node itself is a slider
                                            if (node.tagName === 'IMG-COMPARISON-SLIDER') {
                                                adjustSlider(node);
                                            }
                                            
                                            sliders.forEach(adjustSlider);
                                        }
                                    });
                                });
                            });

                            function adjustSlider(slider) {
                                const images = slider.querySelectorAll('img');
                                
                                // Simple promise-based approach
                                Promise.all(Array.from(images).map(img => {
                                    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
                                    return new Promise(resolve => {
                                        img.onload = resolve;
                                        img.onerror = resolve; // Handle errors gracefully
                                    });
                                })).then(() => {
                                    const maxHeight = Math.max(...Array.from(images).map(img => img.naturalHeight));
                                    const maxWidth = Math.max(...Array.from(images).map(img => img.naturalWidth));
                                    
                                    slider.style.height = maxHeight + 'px';
                                    slider.style.maxWidth = maxWidth + 'px';
                                });
                            }

                            // Start observing
                            observer.observe(document.body, {
                                childList: true,
                                subtree: true
                            });

                            // Also check existing sliders
document.querySelectorAll('img-comparison-slider').forEach(adjustSlider);
                        </script>
                        <div class="sd-element--with-frame sd-element" style="display: flex; flex-direction: column; align-items: center;">
                            <div class="sd-question__header sd-element__header" style="width: 100%; text-align: start; margin-bottom: 10px;">
                                <span class="sv-string-viewer" style="font-weight: 600">Please use the slider below to compare the images.</strong>
                            </div>
                            <img-comparison-slider style="border: 2px solid black">
                                <img style="border: 1px solid black;" slot="first" src="${comparison.implementation}" />
                                <img style="border: 1px solid black;" slot="second" src="${comparison.baseline}" />
                            </img-comparison-slider>
                            <div style="width: 100%; display: flex; justify-content: space-between; margin-top: 10px;">
                                <p>Implementation</p>
                                <p>Design</p>
                            </div>

                            <details style="align-self: start; margin-top: 10px; cursor: pointer;">
                                <summary>Click to show a side-by-side comparison</summary>
                                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
                                    <div style="flex: 1; min-width: 240px; text-align: center;">
                                        <img style="border: 1px solid black; max-width: 100%; height: auto" slot="first" src="${comparison.implementation}" />
                                    </div>
                                    <div style="flex: 1; min-width: 240px; text-align: center;">
                                        <img style="border: 1px solid black; max-width: 100%; height: auto" slot="second" src="${comparison.baseline}" />
                                    </div>
                                </div>
                            </details>
                        </div>
                    `
                },
                {
                    name: `${comparison.name}-rating`,
                    title: "Is this implementation visually consistent with the design?",
                    rateValues: [
                        { value: 1, text: "Strong No" },
                        { value: 2, text: "No" },
                        { value: 3, text: "Unsure" },
                        { value: 4, text: "Yes" },
                        { value: 5, text: "Strong Yes" }
                    ],
                    type: "rating",
                    rateType: "labels",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: `${comparison.name}-confidence`,
                    title: "How confident are you in your answer?",
                    rateValues: [
                        { value: 1, text: "Not confident" },
                        { value: 2, text: "Medium" },
                        { value: 3, text: "Very confident" },
                    ],
                    type: "rating",
                    rateType: "labels",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: `${comparison.name}-comments`,
                    title: "Any additional comments?",
                    type: "comment",
                    isRequired: false
                }
            
            ],
        })),
        {
            name: "reportIntro",
            title: "Thank you for rating all the images! 🎉",
            elements: [
                {
                    name: "introduction",
                    type: "html",
                    html: `
                    <p>In the next step, you'll see a short preview of my tool's report.</p>

                    <p>
                        The tool automatically compares UI implementations with the Figma design whenever a change is proposed. 
                        It then generates a visual report, which is attached to the corresponding GitHub pull request.
                    </p>

                    <p>Please take a look at the report on the following page and then answer a few brief questions.</p>
                    `,
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                }
            ]
        },
    ],
    firstPageIsStartPage: true,
    showNavigationButtons: true,
    showPrevButton: true,
    completeText: "Submit",
    startSurveyText: "Start Survey",

    showProgressBar: true,
    progressBarLocation: "auto",
    progressBarType: "pages",
    progressBarShowPageNumbers: false,
    progressBarShowPageTitles: false,

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

// After creating your survey, before survey.render()
survey.onAfterRenderQuestion.add((sender, options) => {
    // Check if this question contains img-comparison-slider
    const sliders = options.htmlElement.querySelectorAll('img-comparison-slider');
    
    if (sliders.length > 0) {
        // Small delay to ensure the slider component is fully initialized
        setTimeout(() => {
            sliders.forEach(adjustSlider);
        }, 100);
    }
});

function adjustSlider(slider) {
    if (slider.dataset.adjusted) return; // Prevent double-processing
    
    const images = slider.querySelectorAll('img[slot]');
    if (images.length === 0) return;
    
    Promise.all(Array.from(images).map(img => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
        });
    })).then(() => {
        const maxHeight = Math.max(...Array.from(images).map(img => img.offsetHeight));
        const maxWidth = Math.max(...Array.from(images).map(img => img.offsetWidth));
        
        slider.style.height = maxHeight + 'px';
        slider.style.maxWidth = maxWidth + 'px';
        slider.dataset.adjusted = 'true';
    });
}