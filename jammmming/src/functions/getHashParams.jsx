
function getHashParams(hash) {
    let hashParams = {};
    let hashArr = hash.split("&")
    for (let hash of hashArr) {
        let newArr = hash.split("=");
        hashParams[`${newArr[0]}`] = newArr[1];
    }
    return hashParams;
}

export default getHashParams;