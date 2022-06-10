
let $name = document.getElementById("name");
let $email = document.getElementById("email");
let $phone = document.getElementById("phone");
let $message = document.getElementById("message");


<script type="text/javascript">
        function sendEmail() {
          Email.send({
            Host: "smtp.gmail.com",
            Username: "robertodipeterson@gmail.com",
            Password: "tparcxrzflvpsapp",
            To: 'robertodipeterson@gmail.com',
            From: $email,
            Subject: "Contacto desde el perfil web",
            Body: $name, $phone, $message
          })
            .then(function (message) {
              alert("mail sent successfully")
            })
        }
</script>