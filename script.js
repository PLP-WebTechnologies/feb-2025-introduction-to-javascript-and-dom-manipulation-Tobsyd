<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript DOM Example</title>
  <style>
    #textBox {
      color: blue;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div id="textBox">Original text</div>
  <button onclick="changeText()">Change Text</button>
  <button onclick="toggleStyle()">Toggle Style</button>
  <button onclick="toggleElement()">Add/Remove Element</button>

  <script>
    function changeText() {
      const textBox = document.getElementById('textBox');
      textBox.textContent = 'Text changed dynamically!';
    }

    function toggleStyle() {
      const textBox = document.getElementById('textBox');
      textBox.classList.toggle('highlight');
    }

    function toggleElement() {
      const existingElement = document.getElementById('extraBox');
      if (existingElement) {
        existingElement.remove();
      } else {
        const newDiv = document.createElement('div');
        newDiv.id = 'extraBox';
        newDiv.textContent = 'New element added!';
        newDiv.style.color = 'green';
        newDiv.style.marginTop = '10px';
        document.body.appendChild(newDiv);
      }
    }
  </script>

</body>
</html>