export class Singleton {
	private static _instance: Singleton;
	protected constructor() {
		if (!Singleton._instance) {
			Singleton._instance = this;
		}

		return Singleton._instance;
	}
	public static get instance() {
		return this._instance || (this._instance = new this());
	}
}
