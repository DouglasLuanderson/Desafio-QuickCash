$( document ).ready(function() {
    console.log( "ready!" );

    var moedaDe = $( "#from option:selected" ).val()
    var moedaPara = $( "#to option:selected" ).val()

    $('#from').on('change', function (){
        moedaDe = $(this).val()    
    })

    $('#to').on('change', function (){
        moedaPara = $(this).val() 
    })

    $('#coin').on('change', function (){
        $.get( "https://free.currconv.com/api/v7/convert?q=" + moedaDe + "_" + moedaPara + "&compact=y&apiKey=87199215beb65d0ded9c").done(function( data ) {
          $('#result').val('.....')
           var moedaDePara =  moedaDe + "_" + moedaPara;
    var valorAtualMoeda = data[moedaDePara].val.toFixed(2);
    var valorConvertido = $('#coin').val() * valorAtualMoeda
	  $('#result').val(valorConvertido)
        });
    })

});




