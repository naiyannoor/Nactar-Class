function changeMe(){
    document.getElementById('p').innerHTML = 'Hello World!';
    }
    
    function getAlert(){
        alert('Hey Dear!');
    }

    $(document).ready(function(){
    $("p").click(function(){
        $("p").hide();
    });
    });