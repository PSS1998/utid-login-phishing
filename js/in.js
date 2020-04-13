/**
 * Created by mirage on 7/4/2015.
 */

/**
 * this function initiate all event we use to handle page
 */
function initPage(){
    /**
     * here we hide both student and guest form
     * and wait for user to decide witch option wants
     * to select
     */
    //$.each($('select'),function(){
    //    if($(this).attr('id')=='client'){}
    //    else {
    //        var option = $(this).find('option');
    //        var d_val = $(this).attr('data-value')
    //        $.each(option,function(){
    //            if(d_val == $(this).attr('value')) {
    //                $(this).prop('selected', true);
    //                $(this).addClass('selected');
    //            }
    //            else {
    //                $(this).prop('selected',false);
    //                $(this).removeClass('selected');
    //            }
    //
    //        });
    //    }
    //});
    //var d_val = $('.selector').attr('data-value');
    //$('.selector').val(d_val);
    //$('option[value='+d_val+']').prop('selected',true);
    $('.vole-form').hide();
    $('.stud-form').hide();
    $('.pers-form').hide();
    $('.guest-form').hide();
   // $('.btn-form').hide();
  //  $('.captcha-form').hide();

    $('#client').on('change',function(){
        if($(this).val()=='vole'){
            $('.vole-form').show();
            $('.stud-form').hide();
            $('.pers-form').hide();
            $('.guest-form').show();
        }
        else if($(this).val()=='stud'){
            $('.vole-form').hide();
            $('.stud-form').show();
            $('.pers-form').hide();
            $('.guest-form').hide();
        }
        else if($(this).val()=='pers'){
            $('.vole-form').hide();
            $('.stud-form').hide();
            $('.pers-form').show();
            $('.guest-form').hide();
        }
        else if($(this).val()=='guest'){
            $('.vole-form').hide();
            $('.stud-form').hide();
            $('.pers-form').hide();
            $('.guest-form').show();;
        }
        else {
            $('.student-form').hide();
            $('.stuper-form').hide();
            $('.guest-form').hide();
            $('.btn-form').hide();
            $('.captcha-form').hide();
        }
    });
    $('.email-form-selector').change(function(){
        $('.'+$(this).attr('id')+'-lable').hide();
        $('.'+ $(this).val()+'-lable').show();
        $(this).attr('data-value',$(this).val())
    });
    $('#password').on('change',function(){
        //alert("Something went wrong!");
        var val = $(this).val();
        if(checkPassword(val)){
            $(this).removeClass('has-error');
            $(this).addClass('has-success');
            //$('#passmsg').html('');
            $('#passmsg').hide();
            $('#passtip').hide();
            $('.Pass_error').hide();

        }
        else {
            $(this).addClass('has-error');
            $(this).removeClass('has-success');
            //$('#passmsg').html('رمز انتخابی مناسب نیست');
		    $('#passmsg').show();
            $('#passtip').show();
            $('.Pass_error').show();
        }
    });
    $('#confirm').on('change',function(){
    //$('#password2').on('change',function(){
        var val = $(this).val();
        var pass = $('#password').val();
        if(val == pass){
            $(this).removeClass('has-error');
            $(this).addClass('has-success');
            $('#confirmmsg').hide();
            //$('#confirmmsg').html('');
        }
        else {
            $(this).addClass('has-error');
            $(this).removeClass('has-success');
            $('#confirmmsg').show();
            //$('#confirmmsg').html('رمزها یکسان نیست');
        }
    });
	    
		$('#password1').on('keyup',function(){
        //alert("Something went wrong!");
        var val = $(this).val();
        if(checkPassword(val)){
            $(this).removeClass('has-error');
            $(this).addClass('has-success');
            //$('#passmsg').html('');
            $('#passmsg').hide();
            $('#passtip').hide();
            $('.Pass_error').hide();

        }
        else {
            $(this).addClass('has-error');
            $(this).removeClass('has-success');
            //$('#passmsg').html('رمز انتخابی مناسب نیست');
		    $('#passmsg').show();
            $('#passtip').show();
            $('.Pass_error').show();
        }
    });
    ///$('#confirm').on('change',function(){
    $('#password2').on('keyup',function(){
        var val = $(this).val();
        var pass = $('#password1').val();
        if(val == pass){
            $(this).removeClass('has-error');
            $(this).addClass('has-success');
            $('#confirmmsg').hide();
            //$('#confirmmsg').html('');
        }
        else {
            $(this).addClass('has-error');
            $(this).removeClass('has-success');
            $('#confirmmsg').show();
            //$('#confirmmsg').html('رمزها یکسان نیست');
        }
    });

	$('#password').keyup(function() {
		$('#pwStrength').html(checkStrength($('#password').val()))
	});
		$('#pwShort').hide();
		$('#pwWeak').hide();
		$('#pwGood').hide();
		$('#pwStrong').hide();
	$('#password1').keyup(function() {
		//alert();
		var temp=checkStrength($('#password1').val());
		$('#pwShort').hide();
		$('#pwWeak').hide();
		$('#pwGood').hide();
		$('#pwStrong').hide();
		$('#pw'+temp).show();
	});
	
	
	
	
    $('.check-username').on('input',function(){
        var url = $(this).attr('data-url');
        var username = $(this).val();
        checkUsername(url, username, function(valid) {
            if(valid) {
                $('.usernamemsg').html('این آدرس پست الکترونیکی قبلا ثبت شده است.');
                $('.usernamemsg').show();
            }
            else {
                $('.usernamemsg').html('');
                $('.usernamemsg').hide();
            }
        });
        
    });
    /**
     * align page and if by any reason window is resized,
     * we should align page once more
     */
    align();
    $(window).resize(function(){
        align();
    });

    $.each($('select'),function(){
        $(this).val($(this).attr('data-select'));
    });
    $('#client').trigger('change');
    $('.email-form-selector').trigger('change');
	
	
//MOHSEN

	

}



function checkPassword(str){
    var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}/;
    console.log(pattern.test(str));
    return pattern.test(str);
}

/**
 * this function align elements in page
 */
function align(){

    /**
     * here we adjust footer
     */
    var height = $(window).height() - $('body').height();
  //  alert('window height:'+ $(window).height()+' body:'+$('body').height()+'height is:'+height);
    //alert();
    if(height>0){
        $('.footer').css('position','relative');
        $('.footer').css('top',(height+60)+'px');
	//alert('up');
    }
    else {
        $('.footer').css('position','block');
			//	alert('down');
    }


}

/**
 * this function refresh captcha image
 */
function refresh(url){
    $.ajax({
        url: url,
        type: 'GET',
        success: function(result) {
            $('#mycaptcha').attr('src', result);
        },
        error: function() {
            alert("Something went wrong!");
        }
    });
}

function checkUsername(url, username, callback){
    $.ajax({
        url: url,
        type: 'GET',
        data: 'username='+username,
        success: function(obj) {
            callback(obj.used);
        },
        error: function() {
            alert("Something went wrong!");
        }
    });
}

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
        '<td>Full name:</td>'+
        '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Extension number:</td>'+
        '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Extra info:</td>'+
        '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
        '</table>';
}

function readURL(input,t) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
 
    reader.onload = function(e) {
      $(t).attr('src', e.target.result);
    }

   
  }
}


function checkStrength(password) {
	var strength = 0;
	strength=0;
	if (password.length < 8) {
	$('#pwStrength').removeClass()
	$('#pwStrength').addClass('short')
	return 'Short'
	}
	if (password.length > 7) strength += 1;
	// If password contains both lower and uppercase characters, increase strength value.
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
	// If it has numbers and characters, increase strength value.
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;
	// If it has one special character, increase strength value.
	if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
	// If it has two special characters, increase strength value.
	if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
	// Calculated strength value, we can return messages
	// If value is less than 2
	if (strength < 3) {
		$('#pwStrength').removeClass()
		$('#pwStrength').addClass('weak')
		return 'Weak'
		//return '{{trans('user.weakPass')}}'	
	} else if (strength == 3) {
		$('#pwStrength').removeClass()
		$('#pwStrength').addClass('good')	
		return 'Good'
		//return '{{trans('user.goodPass')}}'
	} else {
		$('#pwStrength').removeClass()
		$('#pwStrength').addClass('strong')
		return 'Strong'
		//return '{{trans('user.strongPass')}}'
		}
	}
