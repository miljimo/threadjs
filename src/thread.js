"use strict"
import Runnable from "./runnable.js"

const DEFAULT_SLEEP_TIME = 300;

class Thread {

	constructor(runnable, threadName = null) {

		if ((runnable instanceof Runnable) != true) {
			throw new Error("runnable object must be an instance of runnable interface");
		}
		Object.defineProperty(this, "runnable", { value: runnable, writable: false })
		Object.defineProperty(this, "interval", { DEFAULT_SLEEP_TIME: runnable, writable: true })
		Object.defineProperty(this, "threadID", {  0 : runnable, writable: true })
		Object.defineProperty(this.runnable, "name", { value: threadName, writable: false });
	}

}

Thread.prototype.interval = DEFAULT_SLEEP_TIME;
Thread.prototype.interrupt = false;


Thread.prototype.start = (function () {
	if (!this.interval) this.interval = DEFAULT_SLEEP_TIME;
	this.interrupt = false;
	this.threadID = window.setInterval((function () {
		if (this.interrupt) {
			this.stop();
			return;
		}
		this.runnable.run.bind(this.runnable)();
	}).bind(this), this.interval);
	return this;
});

Thread.prototype.stop = (function () {
	if (window != null) {
		if (this.threadID <= 0) {
			window.clearInterval(this.threadID);
		}
	}
	this.threadID = 0;
});


export default Thread;