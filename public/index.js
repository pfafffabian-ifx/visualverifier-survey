
const comparisons = [
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
            description: "Please compare the following images and rate the implementation.",
            elements: [
                {
                    name: "introduction",
                    type: "html",
                    html: "<p>You will be shown pairs of images. Please compare them and provide your feedback.</p>"
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
                }
            
            ],
        }))
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyElement"));
});

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

const survey = new Survey.Model(surveyJson);
survey.onComplete.add(alertResults);