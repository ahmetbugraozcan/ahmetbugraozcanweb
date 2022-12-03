export function emailTemplate(name, surname, message, email) {
  return `<html>
  <head>
    <style>
      body {
        font-family: sans-serif;
        color: #333;
        background-color: #eee;
        padding: 20px;
      }
      h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
      }
      .message {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .message p {
        font-size: 16px;
        margin: 10px 0;
      }
      .sender {
        font-style: italic;
      }
      .email {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1>Yeni E-posta</h1>
    <div class="message">
      <p class="sender">Gönderen ${name} ${surname}</p>
      <p>${message}</p>
      <p class="email">E-posta: ${email}</p>
    </div>
  </body>
</html>`;
}
