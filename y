<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Single Year Section</title>
  <style>
    body {
      background: black;
      color: white;
      font-family: Arial, sans-serif;
    }

    .section {
      max-width: 900px;
      margin: 50px auto;
      padding: 0 20px;
      display: flex;
      gap: 40px;
    }

    .year {
      flex: 1;
      font-size: 1.5em;
      font-weight: bold;
      min-width: 60px;
    }

    .projects {
      flex: 4;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
    }

    .title {
      flex: 2;
      text-align: left;
    }

    .company {
      flex: 1;
      text-align: right;
      color: #ccc;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .section {
        flex-direction: column;
      }
      .year {
        margin-bottom: 20px;
      }
      .row {
        flex-direction: column;
        align-items: flex-start;
      }
      .company {
        text-align: left;
        margin-top: 5px;
        color: #aaa;
      }
    }
  </style>
</head>
<body>

  <div class="section">
    <div class="year">2025</div>
    <div class="projects">
      <div class="row">
        <div class="title">Crafted For Dad</div>
        <div class="company">Diageo</div>
      </div>
      <div class="row">
        <div class="title">That Rightmove Filter</div>
        <div class="company">Rightmove</div>
      </div>
      <div class="row">
        <div class="title">Alter Ego</div>
        <div class="company">Sony Music</div>
      </div>
    </div>
  </div>

</body>
</html>