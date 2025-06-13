const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
      answer: "Cascading Style Sheets"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const nextBtn = document.getElementById("next-btn");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
    resultEl.textContent = "";
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      resultEl.textContent = "✅ Correct!";
      resultEl.style.color = "green";
      score++;
    } else {
      resultEl.textContent = `❌ Wrong! Correct Answer: ${correct}`;
      resultEl.style.color = "red";
    }
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showFinalResult();
    }
  };
  
  function showFinalResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    resultEl.innerHTML = `🎉 Your Score: ${score}/${questions.length}`;
    nextBtn.style.display = "none";
  }
  
  // Initialize
  showQuestion();
  