    let table = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    function FindIncrements(table) {
        let a = table[0][0];  // A blokk növeléseinek száma
        let b = table[0][2];  // B blokk növeléseinek száma
        let c = table[2][0];  // C blokk növeléseinek száma
        let d = table[2][2];  // D blokk növeléseinek száma
    
        let center = table[1][1]; // Középső cella
    
        // Ellenőrzés, hogy az értékek érvényesek-e
        if (table[0][1] !== a + b || table[1][0] !== a + c || 
            table[1][2] !== b + d || table[2][1] !== c + d || 
            center !== a + b + c + d) {
            return [-1]; // Ha csalás történt
        }
    
        return [a, b, c, d];
    }
    
    

    console.log(FindIncrements([
        [1, 2, 1],
        [2, 4, 2],
        [1, 2, 1]
    ])); // [1, 1, 1, 1]
    
    console.log(FindIncrements([
        [3, 7, 4],
        [5, 16, 11],
        [2, 9, 7]
    ])); // [3, 4, 2, 7]
    
    console.log(FindIncrements([
        [1, 2, 3],
        [2, 5, 2],
        [1, 2, 1]
    ])); // [-1] (ha csalás történt)


    function quit(){
        let result = FindIncrements(table);
        console.log(FindIncrements(table))
        if (result.length === 1 && result[0] === -1) {
            console.error("Invalid increment set");
            return;
        }

        fetch("http://localhost:3000/fours", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ numbers: result })
        })
        .then(response => response.json())
        .then(data => console.log("Server response:", data))
        .catch(error => console.error("Error sending data:", error));

        clearTable()
        alert("GAME END, DATAS ARE STORED ON THE SERVER")
    }

    function updateTable() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.getElementById(`cell-${i}-${j}`).innerText = table[i][j];
            }
        }
    }

    function clearTable() {
        table = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        updateTable();
    }

    function clickA(){
        table[0][0] += 1;
        table[0][1] += 1;
        table[1][0] += 1;
        table[1][1] += 1;
        updateTable();
    }

    function clickB(){
        table[0][2] += 1;
        table[0][1] += 1;
        table[1][2] += 1;
        table[1][1] += 1;
        updateTable();
    }

    function clickC(){
        table[1][0] += 1;
        table[1][1] += 1;
        table[2][0] += 1;
        table[2][1] += 1;
        updateTable();
    }

    function clickD(){
        table[1][2] += 1;
        table[1][1] += 1;
        table[2][2] += 1;
        table[2][1] += 1;
        updateTable();
    }

    function add() {
        let a = parseInt(document.getElementById("a").value);
        let b = parseInt(document.getElementById("b").value);
        let c = parseInt(document.getElementById("c").value);
        let d = parseInt(document.getElementById("d").value);

        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
            alert("Invalid input: Please enter valid numbers.");
            return;
        }
        let result = [a, b, c, d];
        console.log(result);
        fetch("http://localhost:3000/fours", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ numbers: result })
        })
        .then(response => response.json())
        .then(data => console.log("Server response:", data))
        .catch(error => console.error("Error sending data:", error));

        alert("DATA SENT TO SERVER")
    }


    updateTable();
