const { REFRESH_RATE, SECONDS } = require('./config');

const refreshRate = REFRESH_RATE * SECONDS;


class Generation {
    constructor() {
        // this.expiration = null;
        this.expiration = this.calculateExpiration();

    }
    calculateExpiration() {
        //expiration algorithm
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

        const msUntilExpiration = Math.random() < 0.5 ? 
        refreshRate - expirationPeriod : 
        refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }
}