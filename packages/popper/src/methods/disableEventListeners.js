import removeEventListeners from '../utils/removeEventListeners';
import getWindow from '../utils/getWindow';

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
export default function disableEventListeners() {
  if (this.state.eventsEnabled) {
    getWindow(this.popper).cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
