

<script type="text/javascript">
        function sendEmail() {
          Email.send({
            Host: "smtp.gmail.com",
            Username: "robertodipeterson@gmail.com",
            Password: "tparcxrzflvpsapp",
            To: 'robertodipeterson@gmail.com',
            From: "genials",
            Subject: "Contacto desde el perfil web",
            Body: "probando mail",
          })
            .then(function (message) {
              alert("mail sent successfully")
            });
        }
</script>