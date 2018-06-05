export class CounterService {
    activeToInactiveCounter = 0;
    inActiveToActiveCounter = 0;

    increamentActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('ActiveToInactive: ' + this.activeToInactiveCounter);
    }
    increamentInActiveToactive() {
        this.inActiveToActiveCounter++;
        console.log('InActiveToactive' + this.inActiveToActiveCounter);
    }
}
