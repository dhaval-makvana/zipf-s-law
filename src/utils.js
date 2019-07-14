module.exports = {
    processString: function processString(inputString) {
        // inputString = data;
        let inputStrArr = inputString.split(' ');
        let countObject = {}

        for (let i = 0; i < inputStrArr.length; i++) {
            // checking if the string is a special character
            if (inputStrArr[i]) {

            }

            // removing trailing special characters from a string
            inputStrArr[i].replace(/,+$/, "");

            // making the count object
            if (countObject[inputStrArr[i]]) {
                countObject[inputStrArr[i]] += 1;
            } else {
                countObject[inputStrArr[i]] = 1;
            }
        }

        console.log(countObject, typeof countObject);
        Object.entries(countObject).sort((a, b) => {
            return b[1] - a[1];
        });

        console.log("sorted", countObject);

        return countObject;
    },
}