<?php
if ( function_exists( 'EDD_CFM' ) ) {
	return;
}
?>
<input type="hidden" name="edd_email" id="edd-email" value="<?php echo esc_attr( $customer['email'] ); ?>" required/>
<input type="hidden" name="edd_first" id="edd-first" value="<?php echo esc_attr( $customer['first_name'] ); ?>"/>
<input type="hidden" name="edd_last" id="edd-last" value="<?php echo esc_attr( $customer['last_name'] ); ?>"/>
