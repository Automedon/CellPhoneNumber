export const check = /^\\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/; //вынесено для тестирования
export const validate = data => {
	const errors = {};
	if (!check.test(data.number)) errors.number = "Invalid number";
	return errors
};
