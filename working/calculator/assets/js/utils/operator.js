export function operatorHtml([[firstNumber, ...numbers], [...operators]]) {
    if (operators.length > 0) {
        function convertOperatorToIcon() {
            return operators.map(operator => {
                switch(operator) {
                    case "*":
                        return `<i class="fa-solid icon calc-icon fa-xmark"></i>`;
                    case "+":
                        return `<i class="fa-solid icon calc-icon fa-plus"></i>`;
                        case "-":
                        return `<i class="fa-solid icon calc-icon fa-minus"></i>`;
                    case "/":
                        return `<i class="fa-solid icon calc-icon fa-percent"></i>`;
                    default:
                        console.log('bug!')
                }
            })
        }
        
        const cloneNumbers = [...numbers];
        function operatorSolver() {
            const number = Number(cloneNumbers.shift());
            return operators.reduce((acc, curr) => {

                switch(curr) {
                    case "*":
                        return acc * number;
                    case "+":
                        return acc + number;
                    case "-":
                        return acc - number;
                    case "/":
                        return acc / number;
                    default:
                        console.log('bug!')
                        return acc;
                }
            }, Number(firstNumber))
        }

        const operatorIcons = convertOperatorToIcon();
        
        return {operatorHtml: operatorIcons.reduce((acc, curr) =>
            acc.concat(`<span class="operator">${curr}</span>`, numbers.shift())
        , [firstNumber])
        .filter(x => x && x !== true || x === 0)
        .join(''),
        result: operatorSolver(),
    }
    } else {
        var output = [firstNumber, ...numbers].join('');
        return {operatorHtml: output,
        result: output,
        };
    }
}