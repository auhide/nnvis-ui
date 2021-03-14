
export function evaluationResultIsValid(resultJSON) {
    
    if (Object.entries(resultJSON).length) {
        
        if (resultJSON["StatusCode"] === 200) {
            return true;
        }

    }
    
    return false
}