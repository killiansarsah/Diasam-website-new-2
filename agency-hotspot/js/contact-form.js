/* Contact Form Handler for DiaSam Smart Solutions */
$(document).ready(function() {
    
    // Handler for the main contact form
    $(".contact_btn").on('click', function (e) {
        e.preventDefault();
        
        var $btn = $(this);
        var $form = $('#contact-form-data');
        var $result = $('#result');
        
        // Reset Result
        $result.hide();
        
        // Validation
        var proceed = true;
        // Check only required fields (Name, Email, Message)
        var name = $form.find('input[name="userName"]').val();
        var email = $form.find('input[name="userEmail"]').val();
        var message = $form.find('textarea[name="userMessage"]').val();
        
        if(!name || !email || !message) {
            proceed = false;
        }
        
        if(!proceed) {
            var errorMsg = '<div class="alert alert-danger" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Please fill in Name, Email and Message.</div>';
            $result.html(errorMsg).slideDown();
            return;
        }
        
        // Show Loading
        var originalText = $btn.text();
        // Keep the button width same to avoid jump
        var w = $btn.width();
        
        $btn.html('<i class="fas fa-spinner fa-spin"></i> Sending...');
        $btn.addClass('disabled').css('pointer-events', 'none');
        
        // Serialize Data
        var formData = $form.serialize();
        
        // AJAX Post
        $.ajax({
            type: 'POST',
            url: 'vendor/contact-mailer.php',
            data: formData,
            dataType: 'json',
            success: function (response) {
                // Restore Button
                $btn.text(originalText); // Reset text (stripped tags)
                // Re-add original text if needed or just specific text
                // Actually the original text was "Submit Information"
                $btn.html('Submit Information'); 
                $btn.removeClass('disabled').css('pointer-events', 'auto');
                
                if (response.type == 'error') {
                     var errorHtml = '<div class="alert alert-danger" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 10px; border-radius: 5px; margin-bottom: 20px;">' + response.text + '</div>';
                     $result.html(errorHtml).slideDown();
                } else {
                     var successHtml = '<div class="alert alert-success" style="color: #155724; background-color: #d4edda; border-color: #c3e6cb; padding: 10px; border-radius: 5px; margin-bottom: 20px;">' + response.text + '</div>';
                     $result.html(successHtml).slideDown();
                     $form[0].reset();
                }
            },
            error: function (e) {
                console.error("Mail Error", e);
                $btn.html('Submit Information');
                $btn.removeClass('disabled').css('pointer-events', 'auto');
                
                // If the response text contains "success", maybe JSON parsing failed but it worked?
                if(e.responseText && e.responseText.toLowerCase().indexOf('success') !== -1) {
                     var successHtml = '<div class="alert alert-success" style="color: #155724; background-color: #d4edda; border-color: #c3e6cb; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Message sent successfully!</div>';
                     $result.html(successHtml).slideDown();
                     $form[0].reset();
                } else {
                    var errorHtml = '<div class="alert alert-danger" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 10px; border-radius: 5px; margin-bottom: 20px;">Error sending message. Please try again later.</div>';
                    $result.html(errorHtml).slideDown();
                }
            }
        });
    });
});
