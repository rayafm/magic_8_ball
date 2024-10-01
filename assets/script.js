function eightBall(question) {
       // randomNumber variable
        var randomNumber = Math.floor(Math.random() * 8); 

        // eightBall variable 
        var answer = '';

        // control flow by switch statements 
        switch (randomNumber) {
        case 0: 
            answer = 'It is certain'; 
            break; 
        case 1: 
            answer = 'It is decidedly so'; 
            break; 
        case 2: 
            answer = 'Reply hazy try again'; 
            break; 
        case 3: 
            answer = 'Cannot predict now'; 
            break; 
        case 4: 
            answer = 'Do not count on it'; 
            break; 
        case 5: 
            answer = 'My sources say no'; 
            break; 
        case 6: 
            answer = 'Outlook not so good'; 
            break; 
        case 7: 
            answer = 'Signs point to yes';
            break;
        }

        return answer;
}

window.onload = function() {
        document.getElementById('btn').onclick = 
        function() {
        var question = document.getElementById('question').value; 
            if(question != '') {
                var answer = eightBall(question); 
                alert(answer);
            }
        }
}