(function() {

  const serverUrl = 'http://127.0.0.1:3000';
  const clientUrl = 'http://127.0.0.1:8080/';
  //
  // TODO: build the swim command fetcher here
  $('.commandBtn').on('click', function() {
    var $command = $('.command').val();
    console.log('Command:', $command);
    SwimTeam.move($command);
  })

  const ajaxGetSwimmingCommand=()=>{
    $.ajax({
      type:'GET',
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success:function(data){
        SwimTeam.move(data);
        console.log('what is data', data);
        console.log('successful connect the server');

      },
      error:function(data){
        console.log('failed',data);
      }

    })
    // setTimeout(ajaxGetSwimmingCommand,1000);
  };

  ajaxGetSwimmingCommand();


  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    console.log('Image file:', formData);
    $.ajax({
      type: 'POST',
      data: formData,
      url: clientUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        console.log('submitted');
        // reload the page
        window.location = window.location.href;
      },
      error:()=>{
        console.log(error);
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
