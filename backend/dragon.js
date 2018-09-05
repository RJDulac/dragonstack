const DEFAULT_PROPERTIES = {
    nickname: "unnamed",
    //called to match date on creation of dragon -getter
    get birthdate() {
        return new Date()
    }
}
class Dragon {
    //put in curly braces so we don't have to worry about parameter order -non ordered parameters
    constructor({ birthdate, nickname } ={}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    }
}

module.exports = Dragon;