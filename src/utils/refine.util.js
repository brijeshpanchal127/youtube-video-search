import { REFINE_RESULTS } from "../constants/action.types"

export const refineResults = (refineText, onlyHD, results) => {
    console.log(refineText, onlyHD, results)
    let refinedResults = [];

    results.forEach(video => {
        if (video.publishedAt.toLowerCase().includes(refineText.toLowerCase())) {
            if (onlyHD) {
                if (video.definition === "hd") {
                    refinedResults.push(video);
                }
            } else {
                refinedResults.push(video);
            }
        }
    });

    const payload = { refineText, onlyHD, refinedResults }
    return { type: REFINE_RESULTS, payload }
}