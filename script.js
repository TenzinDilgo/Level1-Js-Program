        const secretCode = genRandCode();
        let turnsLeft = 7;
        let currentGuess = "";

        function genRandCode() 
        {
            let code = '';
            for (let i = 0; i < 3; i++) 
            {
                const digit = Math.floor(Math.random() * 3) + 1; 
                code += digit;
            }
            return code;
        }
        
        function updateClock() 
        {
            document.getElementById("clock").textContent = `Turns Left: ${turnsLeft}`;
        }

        function makeGuess(number) 
        {
            if (currentGuess.length < 3) 
            {
                currentGuess += number;
                document.getElementById("display").textContent = `Current Guess: ${currentGuess}`;
            }
        }

        function clearGuess() 
        {
            currentGuess = "";
            document.getElementById("display").textContent = "Current Guess: ";
        }

        function logEvent(event) 
        {
            const logList = document.getElementById("logList");
            const listItem = document.createElement("li");
            listItem.textContent = event;
            logList.appendChild(listItem);
        }

        function checkCode() 
        {
            if (currentGuess.length === 3) 
            {
                turnsLeft--;
                updateClock();
                if (currentGuess == secretCode) 
                {
                    logEvent(`Congratulations! You cracked the code: ${secretCode}`);
                    disableButtons();
                } else if (turnsLeft === 0) 
                {
                    logEvent(`Game Over. The secret code was: ${secretCode}`);
                    disableButtons();
                } else 
                {
                    let hint = currentGuess < secretCode ? "Higher" : "Lower";
                    logEvent(`Turn ${7 - turnsLeft}: ${currentGuess} - ${hint}`);
                }
                clearGuess();
            }
        }

        function disableButtons() 
        {
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            document.getElementById("clear").disabled = true;
        }

        window.onload = function() 
        
        {
            updateClock();
            document.getElementById("button1").addEventListener("click", checkCode);
            document.getElementById("button2").addEventListener("click", checkCode);
            document.getElementById("button3").addEventListener("click", checkCode);
        }

        