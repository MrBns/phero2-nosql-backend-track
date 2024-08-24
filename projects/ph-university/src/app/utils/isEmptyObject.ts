export default function isEmpty<T>(arg: T | ""): arg is "" {
	return arg === "";
}
