export default class StatusError extends Error {
	constructor(
		message: string,
		public status: number = 500,
	) {
		super(message);
	}
}
