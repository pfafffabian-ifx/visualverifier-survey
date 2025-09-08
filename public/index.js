
const comparisons = [
    //  CHECKBOXES
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
        implementation: "/images/checkbox/ifx-checkbox-s-unchecked-error_candidate.png",
        backgroundColor: "#ffffff"
    },
    //  DROPDOWN MENU
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
    },
    // FOOTER
    {
        name: "ifx-footer-landscape-large",
        baseline: "/images/footer/ifx-footer-landscape-large_baseline.png",
        implementation: "/images/footer/ifx-footer-landscape-large_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-footer-landscape-medium",
        baseline: "/images/footer/ifx-footer-landscape-medium_baseline.png",
        implementation: "/images/footer/ifx-footer-landscape-medium_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-footer-landscape-small",
        baseline: "/images/footer/ifx-footer-landscape-small_baseline.png",
        implementation: "/images/footer/ifx-footer-landscape-small_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-footer-portrait-large",
        baseline: "/images/footer/ifx-footer-portrait-large_baseline.png",
        implementation: "/images/footer/ifx-footer-portrait-large_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-footer-portrait-medium",
        baseline: "/images/footer/ifx-footer-portrait-medium_baseline.png",
        implementation: "/images/footer/ifx-footer-portrait-medium_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-footer-portrait-small",
        baseline: "/images/footer/ifx-footer-portrait-small_baseline.png",
        implementation: "/images/footer/ifx-footer-portrait-small_candidate.png",
        backgroundColor: "#ffffff"
    },
    // NAVBAR
    {
        name: "ifx-navbar-landscape-appname",
        baseline: "/images/navbar/ifx-navbar-landscape-appname_baseline.png",
        implementation: "/images/navbar/ifx-navbar-landscape-appname_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-navbar-landscape-searchbar",
        baseline: "/images/navbar/ifx-navbar-landscape-searchbar_baseline.png",
        implementation: "/images/navbar/ifx-navbar-landscape-searchbar_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-navbar-portrait",
        baseline: "/images/navbar/ifx-navbar-portrait_baseline.png",
        implementation: "/images/navbar/ifx-navbar-portrait_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-navbar-portrait-searchbar-appname",
        baseline: "/images/navbar/ifx-navbar-portrait-searchbar-appname_baseline.png",
        implementation: "/images/navbar/ifx-navbar-portrait-searchbar-appname_candidate.png",
        backgroundColor: "#ffffff"
    },
    // ALERT
    {
        name: "ifx-alert-danger",
        baseline: "/images/alert/ifx-alert-danger_baseline.png",
        implementation: "/images/alert/ifx-alert-danger_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-alert-primary-closable",
        baseline: "/images/alert/ifx-alert-primary-closable_baseline.png",
        implementation: "/images/alert/ifx-alert-primary-closable_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-alert-success-closable",
        baseline: "/images/alert/ifx-alert-success-closable_baseline.png",
        implementation: "/images/alert/ifx-alert-success-closable_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-alert-warning",
        baseline: "/images/alert/ifx-alert-warning_baseline.png",
        implementation: "/images/alert/ifx-alert-warning_candidate.png",
        backgroundColor: "#ffffff"
    },
    // BUTTON
    {
        name: "ifx-button-primary-danger-m-iconleft-disabled",
        baseline: "/images/button/ifx-button-primary-danger-m-iconleft-disabled_baseline.png",
        implementation: "/images/button/ifx-button-primary-danger-m-iconleft-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-primary-default-xs-disabled",
        baseline: "/images/button/ifx-button-primary-default-xs-disabled_baseline.png",
        implementation: "/images/button/ifx-button-primary-default-xs-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-primary-inverse-l-iconleft",
        baseline: "/images/button/ifx-button-primary-inverse-l-iconleft_baseline.png",
        implementation: "/images/button/ifx-button-primary-inverse-l-iconleft_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-primary-inverse-s-iconright-disabled",
        baseline: "/images/button/ifx-button-primary-inverse-s-iconright-disabled_baseline.png",
        implementation: "/images/button/ifx-button-primary-inverse-s-iconright-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-secondary-danger-s",
        baseline: "/images/button/ifx-button-secondary-danger-s_baseline.png",
        implementation: "/images/button/ifx-button-secondary-danger-s_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-secondary-danger-xs-iconright",
        baseline: "/images/button/ifx-button-secondary-danger-xs-iconright_baseline.png",
        implementation: "/images/button/ifx-button-secondary-danger-xs-iconright_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-secondary-default-l-iconright",
        baseline: "/images/button/ifx-button-secondary-default-l-iconright_baseline.png",
        implementation: "/images/button/ifx-button-secondary-default-l-iconright_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-secondary-default-m-disabled",
        baseline: "/images/button/ifx-button-secondary-default-m-disabled_baseline.png",
        implementation: "/images/button/ifx-button-secondary-default-m-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-secondary-inverse-l-disabled",
        baseline: "/images/button/ifx-button-secondary-inverse-l-disabled_baseline.png",
        implementation: "/images/button/ifx-button-secondary-inverse-l-disabled_candidate.png",
        backgroundColor: "#1d1d1d"
    },
    {
        name: "ifx-button-secondary-inverse-m-iconright-disabled",
        baseline: "/images/button/ifx-button-secondary-inverse-m-iconright-disabled_baseline.png",
        implementation: "/images/button/ifx-button-secondary-inverse-m-iconright-disabled_candidate.png",
        backgroundColor: "#1d1d1d"
    },
    {
        name: "ifx-button-secondary-inverse-xs-iconleft-disabled",
        baseline: "/images/button/ifx-button-secondary-inverse-xs-iconleft-disabled_baseline.png",
        implementation: "/images/button/ifx-button-secondary-inverse-xs-iconleft-disabled_candidate.png",
        backgroundColor: "#1d1d1d"
    },
    {
        name: "ifx-button-tertiary-default-s-iconleft-disabled",
        baseline: "/images/button/ifx-button-tertiary-default-s-iconleft-disabled_baseline.png",
        implementation: "/images/button/ifx-button-tertiary-default-s-iconleft-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-button-tertiary-inverse-m-iconleft",
        baseline: "/images/button/ifx-button-tertiary-inverse-m-iconleft_baseline.png",
        implementation: "/images/button/ifx-button-tertiary-inverse-m-iconleft_candidate.png",
        backgroundColor: "#1d1d1d"
    },
    {
        name: "ifx-button-tertiary-inverse-xs",
        baseline: "/images/button/ifx-button-tertiary-inverse-xs_baseline.png",
        implementation: "/images/button/ifx-button-tertiary-inverse-xs_candidate.png",
        backgroundColor: "#1d1d1d"
    },
    // ICONBUTTON
    {
        name: "ifx-iconbutton-primary-m-square",
        baseline: "/images/iconbutton/ifx-iconbutton-primary-m-square_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-primary-m-square_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-primary-s-round-disabled",
        baseline: "/images/iconbutton/ifx-iconbutton-primary-s-round-disabled_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-primary-s-round-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-secondary-l-round",
        baseline: "/images/iconbutton/ifx-iconbutton-secondary-l-round_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-secondary-l-round_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-secondary-m-round",
        baseline: "/images/iconbutton/ifx-iconbutton-secondary-m-round_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-secondary-m-round_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-secondary-s-square-disabled",
        baseline: "/images/iconbutton/ifx-iconbutton-secondary-s-square-disabled_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-secondary-s-square-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-tertiary-l-square",
        baseline: "/images/iconbutton/ifx-iconbutton-tertiary-l-square_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-tertiary-l-square_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-primary-l-square-disabled",
        baseline: "/images/iconbutton/ifx-iconbutton-primary-l-square-disabled_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-primary-l-square-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-tertiary-m-square-disabled",
        baseline: "/images/iconbutton/ifx-iconbutton-tertiary-m-square-disabled_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-tertiary-m-square-disabled_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-iconbutton-tertiary-s-round",
        baseline: "/images/iconbutton/ifx-iconbutton-tertiary-s-round_baseline.png",
        implementation: "/images/iconbutton/ifx-iconbutton-tertiary-s-round_candidate.png",
        backgroundColor: "#ffffff"
    },
    // SPINNER
    {
        name: "ifx-spinner-brand-m",
        baseline: "/images/spinner/ifx-spinner-brand-m_baseline.png",
        implementation: "/images/spinner/ifx-spinner-brand-m_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-spinner-default-m",
        baseline: "/images/spinner/ifx-spinner-default-m_baseline.png",
        implementation: "/images/spinner/ifx-spinner-default-m_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-spinner-default-s",
        baseline: "/images/spinner/ifx-spinner-default-s_baseline.png",
        implementation: "/images/spinner/ifx-spinner-default-s_candidate.png",
        backgroundColor: "#ffffff"
    },
    // STATUS
    {
        name: "ifx-status-engineering300-border",
        baseline: "/images/status/ifx-status-engineering300-border_baseline.png",
        implementation: "/images/status/ifx-status-engineering300-border_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-status-engineering300",
        baseline: "/images/status/ifx-status-engineering300_baseline.png",
        implementation: "/images/status/ifx-status-engineering300_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-status-ocean500-border",
        baseline: "/images/status/ifx-status-ocean500-border_baseline.png",
        implementation: "/images/status/ifx-status-ocean500-border_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-status-ocean500",
        baseline: "/images/status/ifx-status-ocean500_baseline.png",
        implementation: "/images/status/ifx-status-ocean500_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-status-orange500-border",
        baseline: "/images/status/ifx-status-orange500-border_baseline.png",
        implementation: "/images/status/ifx-status-orange500-border_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-status-orange500",
        baseline: "/images/status/ifx-status-orange500_baseline.png",
        implementation: "/images/status/ifx-status-orange500_candidate.png",
        backgroundColor: "#ffffff"
    },
    // TOOLTIP
    {
        name: "ifx-tooltip-compact-top",
        baseline: "/images/tooltip/ifx-tooltip-compact-top_baseline.png",
        implementation: "/images/tooltip/ifx-tooltip-compact-top_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-tooltip-dismissible-bottom-start",
        baseline: "/images/tooltip/ifx-tooltip-dismissible-bottom-start_baseline.png",
        implementation: "/images/tooltip/ifx-tooltip-dismissible-bottom-start_candidate.png",
        backgroundColor: "#ffffff"
    },
    {
        name: "ifx-tooltip-extended-right",
        baseline: "/images/tooltip/ifx-tooltip-extended-right_baseline.png",
        implementation: "/images/tooltip/ifx-tooltip-extended-right_candidate.png",
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
            title: `Component: ${comparison.name}`,
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
                                max-width: 1200px;
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
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <span>Implementation</span>
                                <span>Design</span>
                            </div>

                            <div style="align-self: start; margin-top: 16px; cursor: pointer;">
                                <span class="sv-string-viewer" style="font-weight: 600">Side-by-Side comparison</span>
                                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
                                    <div style="flex: 1; max-width: 50%; text-align: center;">
                                        <img style="border: 1px solid black; min-width:240px; height: auto" slot="first" src="${comparison.implementation}" />
                                    </div>
                                    <div style="flex: 1; max-width: 50%; text-align: center;">
                                        <img style="border: 1px solid black; min-width:240px; height: auto" slot="second" src="${comparison.baseline}" />
                                    </div>
                                </div>
                            </details>
                        </div>
                    `
                },
                {
                    name: `${comparison.name}-rating`,
                    title: "Is this implementation visually consistent with the design?",
                    type: "boolean",
                    // isRequired: true,
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
                    // isRequired: true,
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
        ...[ 'ifx-status-ocean500', 'ifx-footer-landscape-large' ].map(component => {
            return {
                name: `report_${component}`,
                title: `Report Preview (${component})`,
                elements: [
                    {
                    name: `report_${component}_html`,
                    type: "html",
                    html: `
                        <p>Below is an example of the report generated by my tool.</p>

                        <a href="/report/report_${component}.html" target="_blank" rel="noopener noreferrer">
                            <strong>Click here to open the report in a new tab.</strong>
                        </a>
                        
                        <p>Please review the report and then return to this survey to answer a few questions about it.</p>
                    `,
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: `report_${component}_accuracy`,
                    title: "Do you agree with the tool's assessment of the implementation?",
                    type: "rating",
                    rateMin: 1,
                    rateMax: 5,
                    rateType: "stars",
                    minRateDescription: "Strongly disagree",
                    maxRateDescription: "Strongly agree",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: `report_${component}_easyToUnderstand`,
                    title: "How easy was it to understand the report?",
                    type: "rating",
                    rateMin: 1,
                    rateMax: 5,
                    rateType: "stars",
                    minRateDescription: "Very difficult",
                    maxRateDescription: "Very easy",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                },
                {
                    name: `report_${component}_helpful`,
                    title: "How helpful would such a report be in your work?",
                    type: "rating",
                    rateMin: 1,
                    rateMax: 5,
                    rateType: "stars",
                    minRateDescription: "Not helpful",
                    maxRateDescription: "Very helpful",
                    isRequired: true,
                    requiredErrorText: "Please submit an answer."
                }
            ]}
        }),
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

function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}