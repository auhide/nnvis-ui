
export function resultIsValid(resultJSON) {
    
    if (Object.entries(resultJSON).length) {
        
        if (resultJSON["StatusCode"] == 200) {
            return true;
        }

    }
    
    return false
}