export const monthArr = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
] as const;
export const monthsCSV = monthArr.join(",");

export const academicSemesterNames = ["Autumn", "Fall", "Summer"] as const;
export const academicSemesterNamesCSV = academicSemesterNames.join(",");
export const academicSemesterCodes = ["01", "02", "03"] as const;
export const academicSemesterCodesCSV = academicSemesterCodes.join(",");

export const academicSemesterNamesToCode: Record<
	(typeof academicSemesterNames)[number],
	(typeof academicSemesterCodes)[number]
> = {
	Autumn: "01",
	Fall: "02",
	Summer: "03",
};
