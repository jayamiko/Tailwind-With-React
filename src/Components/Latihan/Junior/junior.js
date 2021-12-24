
function JuniorTask() {

    // 1. Remove Duplicate Array
    let array = ["jaya", "jaya", "miko", "miko", 1, 1, 2, 2];
    let result = [...new Set(array)];
    console.log(result);

    // 2. Palindrom
    let word = "repaper";
    word = word.toLowerCase();

    let polindrom = word.split("").reverse().join('')
    console.log(polindrom);

    // Menemukan Faktorial dari Bilangan
    let numberFaktorial = 5;
    let sum = numberFaktorial;
    while (numberFaktorial > 1) {
        numberFaktorial = numberFaktorial - 1;
        sum = sum * numberFaktorial;
    }

    console.log(sum);

    return (
        <div style={{
            background: '#FFF',
            height: '100vh'
        }}>
            <p>1. Remove Duplicate Array</p>
            <p>{result}</p>
            <br></br>

            <p>2. Palindrom</p>
            <p>Before : {word} <br></br>After : {polindrom}</p>
            <br></br>

            <p>3. Faktorial</p>
            <p>{sum}</p>
        </div>
    )
}

export default JuniorTask;